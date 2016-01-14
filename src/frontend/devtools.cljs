; Devtools component. It is expected to be used with ui/connect-reactive-reagent.
(ns frontend.devtools
  (:require [frontend.ui :as ui]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]
            [frontend.persistence-middleware :as persistence])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;; Init
(defn -wrap-init
  [component-init]
  (fn init []
    (let [component-model (component-init)]
      {:component      component-model
       :initial-model  component-model

       ; list of [id signal]
       :signal-events  (list)
       :next-signal-id 0

       ; list of {id signal-id enabled? action}
       :action-events  (list)
       :next-action-id 0

       :persist?       false})))

(defn -signal-event
  [id signal]
  [id signal])

(defn -action-event
  [signal-id id action result]
  {:id        id
   :signal-id signal-id
   :enabled?  true
   :action    action

   ; this key only makes sense for enabled actions
   :result    result})

(defn -update-action-events*
  [model pred f & args]
  (s/transform [:action-events s/ALL pred]
               #(apply f % args)
               model))

(defn -update-action-event
  [model id f & args]
  (apply -update-action-events* model #(= (:id %) id) f args))

(defn -find-action
  [model id]
  (->> (:action-events model)
       (filter #(= (:id %) id))
       first))

;;;;;;;;;;;;;;;;;;;;;;;; Control
(defn -wrap-control
  [component-control]
  (fn control
    [model signal dispatch]
    (letfn [(replay []
              ; Replay and notify wrapped component about replaying.
              ; Notification signal is needed, for instance, to hit persistence middleware to save new component model.
              (-> (dispatch ::replay)
                  :component
                  (component-control ::on-did-replay #(:component (dispatch [::component %])))))]
      (match signal
             :on-connect
             (if (:persist? model)
               ; replay loaded actions
               (replay)

               ; developer decided to not persist a session, but it's loaded by middleware anyway..
               ; so let's clear the session for a fresh start..
               (-> (dispatch ::clear-history)
                   ; and let component handle its initial signal
                   (control [::component :on-connect] dispatch)))

             ; required if devtools is wrapped by another devtools
             ::on-did-replay nil

             [::on-toggle-signal id]
             (do
               (dispatch [::toggle-signal id])
               (replay))

             [::on-toggle-action id]
             (do
               (dispatch [::toggle-action id])
               (replay))

             [::on-log-action-result id]
             (println (pr-str (:result (-find-action model id))))

             ::on-toggle-persist
             (dispatch ::toggle-persist)

             ::on-sweep
             (dispatch ::sweep)

             ::on-reset
             (do
               (dispatch ::clear-history)
               (replay))

             [::component s]
             (let [[signal-id _ :as signal-event] (-signal-event (:next-signal-id model) s)]
               (component-control (:component model) s #(:component (dispatch [::component signal-id %])))
               (dispatch [::record-signal-event signal-event]))))))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile
(defn -orphaned-signal?
  "Orphaned signal has no actions."
  [model [signal-id _ :as _signal_]]
  (empty? (filter #(= (:signal-id %) signal-id)
                  (:action-events model))))

(defn -wrap-reconcile
  [component-reconcile]
  (fn reconcile
    [model action]
    (match action
           ::clear-history
           (assoc model :signal-events (list)
                        :action-events (list))

           [::record-signal-event signal-event]
           (-> model
               (update :signal-events concat [signal-event])
               (update :next-signal-id inc))

           [::toggle-signal id]
           (let [all-actions-enabled? (->> (:action-events model)
                                           (filter #(= (:signal-id %) id))
                                           (every? :enabled?))]
             (-update-action-events* model #(= (:signal-id %) id)
                                     assoc :enabled? (not all-actions-enabled?)))

           [::toggle-action id]
           (-update-action-event model id update :enabled? not)

           ; applies enabled actions to the initial component model
           ::replay
           (loop [action-events (filter :enabled? (:action-events model))
                  new-model (assoc model :component (:initial-model model))]
             (if-let [{:keys [id action]} (first action-events)]
               (recur (rest action-events)
                      (as-> new-model m
                            (update m :component component-reconcile action)
                            (-update-action-event m id assoc :result (:component m))))
               new-model))

           ::toggle-persist
           (update model :persist? not)

           ::sweep
           (as-> model m
                 (update m :action-events #(filter :enabled? %))
                 (update m :signal-events #(remove (partial -orphaned-signal? m) %)))

           [::component signal-id a]
           (as-> model m
                 (update m :component component-reconcile a)
                 (update m :action-events concat [(-action-event signal-id (:next-action-id m) a (:component m))])
                 (update m :next-action-id inc))

           ; for bare component actions (e.g. when dispatching from REPL) create an "unknown signal" event
           [::component a]
           (let [[signal-id _ :as unknown-signal-event] (-signal-event (:next-signal-id model) :-unknown-signal)]
             (-> model
                 (update :signal-events concat [unknown-signal-event])
                 (update :next-signal-id inc)
                 (reconcile [::component signal-id a]))))))

;;;;;;;;;;;;;;;;;;;;;;;; View model
(defn -wrap-view-model
  [component-view-model]
  (fn view-model
    [model]
    (-> model
        (ui/track-keys [:initial-model :persist? :signal-events :action-events])
        (assoc :component-view-model (component-view-model (reaction (:component @model)))))))

;;;;;;;;;;;;;;;;;;;;;;;; View
(defn -menu-button
  [caption on-click title]
  [:button {:style    {:font-weight      "bold"
                       :cursor           "pointer"
                       :padding          "4px"
                       :margin           "5px 3px"
                       :border-radius    "3px"
                       :background-color "rgb(79, 90, 101)"}
            :title    title
            :on-click on-click}
   caption])

(defn -devtools-view
  [{:keys [persist? initial-model signal-events action-events] :as _view-model_}
   dispatch]
  [:div {:style {:width            "100%"
                 :height           "100%"
                 :overflow-y       "auto"
                 :background-color "#2A2F3A"
                 :color            "white"}}
   [:div {:style {:text-align          "center"
                  :border-bottom-width 1
                  :border-bottom-style "solid"
                  :border-color        "#4F5A65"}}
    [:input.toggle {:title     "Persist debug session into local storage?"
                    :type      "checkbox"
                    :checked   @persist?
                    :on-change #(dispatch ::on-toggle-persist)}
     "Persist session"]
    [-menu-button "Sweep" #(dispatch ::on-sweep) "Removes disabled actions and \"orphaned\" signals from history"]
    [-menu-button "Reset" #(dispatch ::on-reset) "Removes all actions and signals resetting the model to initial state"]]

   [:div
    (doall
      (for [[signal-id signal] (reverse @signal-events)]
        ^{:key signal-id}
        [:div {:title "Signal"}
         [:div {:style    {:cursor "pointer"}
                :on-click #(dispatch [::on-toggle-signal signal-id])
                :title    "Click to enable/disable all actions dispatched from this signal"}
          "→ "
          (if (coll? signal)
            [:span [:strong (pr-str (first signal))] " " (clojure.string/join " " (map pr-str (rest signal)))]
            [:strong (pr-str signal)])]

         (for [{:keys [id enabled? action]} (filter #(= (:signal-id %) signal-id)
                                                    @action-events)]
           ^{:key id}
           [:div {:style {:display          "flex"
                          :margin-left      "10px"
                          :margin-top       "3px"
                          :padding          "2px"
                          :background-color "rgb(60, 70, 80)"
                          :color            (if enabled? "inherit" "grey")}}

            [:div {:style    {:cursor "pointer"}
                   :on-click #(dispatch [::on-toggle-action id])
                   :title    "Click to enable/disable this action"}
             (if (coll? action)
               [:div [:strong (pr-str (first action))] " " (clojure.string/join " " (map pr-str (rest action)))]
               [:div [:strong (pr-str action)]])]

            (when enabled?
              [:div {:style    {:cursor           "pointer"
                                :margin-left      "5px"
                                :border-radius    "3px"
                                :background-color "rgb(79, 90, 101)"}
                     :on-click #(dispatch [::on-log-action-result id])
                     :title    "Print model state after this action"}
               "model"])])]))]
   [:hr]
   [:strong "Initial model:"]
   [:div (pr-str @initial-model)]])

(defn -wrap-view
  [component-view]
  (fn devtools-view
    [view-model dispatch]
    [:div
     [component-view (:component-view-model view-model) (ui/tagged dispatch ::component)]

     [:div {:style {:position   "fixed"
                    :right      0
                    :top        0
                    :bottom     0
                    :z-index    1000
                    :width      "30%"
                    :box-shadow "-2px 0 7px 0 rgba(0, 0, 0, 0.5)"}}
      [-devtools-view view-model dispatch]]]))

;;;;;;;;;;;;;;;;;;;;;;;; Middleware
(defn wrap
  "Adds devtools to a component.
  For replay to work correctly component is required to handle ::on-did-replay signal."
  [spec storage storage-key]
  (-> {:init       (-wrap-init (:init spec))
       :view-model (-wrap-view-model (:view-model spec))
       :view       (-wrap-view (:view spec))
       :control    (-wrap-control (:control spec))
       :reconcile  (-wrap-reconcile (:reconcile spec))}
      ; blacklisted keys are provided on init and should not be overwritten by middleware
      ; (otherwise, on hot reload, we will not see changes after modifying component init code)
      ; thus they also don't need to be saved
      (persistence/wrap storage storage-key #{:initial-model})))