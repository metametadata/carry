(ns frontend.devtools
  (:require [frontend.ui :as ui]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]
            [frontend.persistence-middleware :as persistence]))

;;;;;;;;;;;;;;;;;;; Init
(defn init
  "Creates a fresh dev-model instance using wrapped component init."
  [[component-model component-signal :as _component-initial_]]
  [{:component      component-model

    :initial-model  component-model
    :initial-signal component-signal

    ; list of [id signal]
    :signal-events  (list)
    :next-signal-id 0

    ; list of {id signal-id enabled? action}
    :action-events  (list)
    :next-action-id 0

    :persist?       false}

   :on-connect])

(defn -signal-event
  [id signal]
  [id signal])

(defn -action-event
  [signal-id id action]
  {:id        id
   :signal-id signal-id
   :enabled?  true
   :action    action})

(defn -update-action-events*
  [model pred f & args]
  (s/transform [:action-events s/ALL pred]
               #(apply f % args)
               model))

(defn -update-action-event
  [model id f & args]
  (apply -update-action-events* model #(= (:id %) id) f args))

;;;;;;;;;;;;;;;;;;;;;;;; Control
(defn new-control
  [component-control]
  (fn control
    [model signal dispatch]
    (match signal
           :on-connect
           (if (:persist? model)
             ; replay loaded actions
             (dispatch :replay)

             ; developer decided to not persist a session, but it's loaded by middleware anyway..
             (do
               ; so let's clear the session for a fresh start..
               (dispatch :clear-history)

               ; and let component handle its initial signal
               ; note: outdated model is passed, but it's safe because :component model hasn't changed after clearing
               (let [s (:initial-signal model)]
                 (when-not (nil? s)
                   (control model [:component s] dispatch)))))

           [:on-toggle-signal id]
           (do
             (dispatch [:toggle-signal id])
             (dispatch :replay))

           [:on-toggle-action id]
           (do
             (dispatch [:toggle-action id])
             (dispatch :replay))

           :on-toggle-persist
           (dispatch :toggle-persist)

           :on-sweep
           (dispatch :sweep)

           :on-reset
           (do
             (dispatch :clear-history)
             (dispatch :replay))

           [:component s]
           (let [[signal-id _ :as signal-event] (-signal-event (:next-signal-id model) s)]
             (component-control (:component model) s #(dispatch [:component signal-id %]))
             (dispatch [:record-signal-event signal-event])))))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile
(defn -orphaned-signal?
  "Orphaned signal has no actions."
  [model [signal-id _ :as _signal_]]
  (empty? (filter #(= (:signal-id %) signal-id)
                  (:action-events model))))

(defn new-reconcile
  [component-reconcile]
  (fn reconcile
    [model action]
    (match action
           :clear-history
           (assoc model :signal-events (list)
                        :action-events (list))

           [:record-signal-event signal-event]
           (-> model
               (update :signal-events concat [signal-event])
               (update :next-signal-id inc))

           [:toggle-signal id]
           (let [all-actions-enabled? (->> (:action-events model)
                                           (filter #(= (:signal-id %) id))
                                           (every? :enabled?))]
             (-update-action-events* model #(= (:signal-id %) id)
                                     assoc :enabled? (not all-actions-enabled?)))

           [:toggle-action id]
           (-update-action-event model id update :enabled? not)

           :replay
           ; applies enabled recorded actions to the initial component model
           (let [enabled-actions (->> (:action-events model)
                                      (filter :enabled?)
                                      (map :action))]
             (assoc model :component
                          (reduce component-reconcile
                                  (:initial-model model)
                                  ; Identity action goes through all the component's middleware and does nothing.
                                  ; Why is it needed? Example: component's persistence middleware must be able to
                                  ; save initial-model even when enabled-actions is empty.
                                  (concat [:dev-identity] enabled-actions))))

           :toggle-persist
           (update model :persist? not)

           :sweep
           (as-> model m
                 (update m :action-events #(filter :enabled? %))
                 (update m :signal-events #(remove (partial -orphaned-signal? m) %)))

           [:component signal-id a]
           (-> model
               (update :component component-reconcile a)
               (update :action-events concat [(-action-event signal-id (:next-action-id model) a)])
               (update :next-action-id inc))

           ; for bare component actions (e.g. when dispatching from REPL) use an "unknown signal" event
           [:component a]
           (let [[singal-id _ :as unknown-signal-event] (-signal-event (:next-signal-id model)
                                                                       :-unknown-signal)]
             (-> model
                 (update :component component-reconcile a)
                 (update :signal-events concat [unknown-signal-event])
                 (update :next-signal-id inc)
                 (update :action-events concat [(-action-event singal-id (:next-action-id model) a)])
                 (update :next-action-id inc))))))

;;;;;;;;;;;;;;;;;;;;;;;; View model
(defn new-view-model
  [component-view-model]
  (fn view-model
    [model]
    (assoc model :component-view-model (component-view-model (:component model)))))

;;;;;;;;;;;;;;;;;;;;;;;; View
(defn -devtools-view
  [model dispatch]
  [:div {:style {:width            "100%"
                 :height           "100%"
                 :overflow-y       "auto"
                 :background-color "#2A2F3A"
                 :padding-left     "5px"
                 :color            "white"}}

   [:div {:style {:text-align          "center"
                  :border-bottom-width 1
                  :border-bottom-style "solid"
                  :border-color        "#4F5A65"}}
    [:input.toggle {:title     "Persist debug session into local storage?"
                    :type      "checkbox"
                    :checked   (:persist? model)
                    :on-change #(dispatch :on-toggle-persist)}
     "Persist session"]

    [:button {:style    {:font-weight      "bold"
                         :cursor           "pointer"
                         :padding          4
                         :margin           "5px 3px"
                         :border-radius    3
                         :background-color "rgb(79, 90, 101)"}
              :title    "Removes disabled actions and \"orphaned\" signals from history"
              :on-click #(dispatch :on-sweep)} "Sweep"]

    [:button {:style    {:font-weight      "bold"
                         :cursor           "pointer"
                         :padding          4
                         :margin           "5px 3px"
                         :border-radius    3
                         :background-color "rgb(79, 90, 101)"}
              :title    "Removes all actions and signals resetting the model to initial state"
              :on-click #(dispatch :on-reset)} "Reset"]]

   [:div
    (doall
      (for [[signal-id signal] (reverse (:signal-events model))]
        ^{:key signal-id}
        [:div {:title "Signal"}
         [:div {:style    {:cursor "pointer"}
                :on-click #(dispatch [:on-toggle-signal signal-id])
                :title    "Click to enable/disable all actions dispatched from this signal"}
          "→ "
          (if (coll? signal)
            [:span [:strong (pr-str (first signal))] " " (clojure.string/join " " (rest signal))]
            [:strong (pr-str signal)])]

         (for [{:keys [id enabled? action]} (filter #(= (:signal-id %) signal-id)
                                                    (:action-events model))]
           ^{:key id}
           [:div {:style    {:cursor           "pointer"
                             :margin-left      "10px"
                             :margin-top       "3px"
                             :background-color "rgb(79, 90, 101)"
                             :color            (if enabled? "inherit" "grey")}
                  :on-click #(dispatch [:on-toggle-action id])
                  :title    "Click to enable/disable this action"}

            (if (coll? action)
              [:div [:strong (pr-str (first action))] " " (clojure.string/join " " (rest action))]
              [:div [:strong (pr-str action)]])])]))]
   [:hr]
   [:strong "Initial model:"]
   [:div (pr-str (:initial-model model))]])

(defn new-view
  [component-view]
  (fn view
    [model dispatch]
    [:div
     [component-view (:component-view-model model) (ui/tagged dispatch :component)]

     [:div {:style {:position   "fixed"
                    :right      0
                    :top        0
                    :bottom     0
                    :z-index    1000
                    :width      "30%"
                    :box-shadow "-2px 0 7px 0 rgba(0, 0, 0, 0.5)"}}
      [-devtools-view model dispatch]]]))

(defn connect
  "Given component's parts creates a devtools wrapper for it. Returns the same structure as ui/connect.
  For replay to work correctly component is required to implement a :dev-identity action which returns the same model."
  [component-initial component-view-model component-view component-control component-reconcile storage]
  ; blacklisted keys are provided by component init and should not be overwritten by middleware
  ; (otherwise, on hot reload, we will not see changes after after modifying component init code)
  ; thus they also don't need to be saved
  (let [non-persisted-keys #{:initial-model :initial-signal}
        [_ initial-signal :as initial] (init component-initial)]
    (ui/connect initial
                (new-view-model component-view-model)
                (new-view component-view)
                (-> (new-control component-control)
                    (persistence/wrap-control initial-signal storage :devtools non-persisted-keys)
                    ui/wrap-log-signals)
                (-> (new-reconcile component-reconcile)
                    (persistence/wrap-reconcile storage :devtools non-persisted-keys)
                    ui/wrap-log-actions))))