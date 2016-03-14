(ns middleware.devtools
  (:require [reagent-mvsa.core :as mvsa]
            [reagent-mvsa.helpers :as helpers]
            [middleware.persistence :as persistence]
            [middleware.schema :as schema-middleware]
            [schema.core :as schema]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]
            [reagent.core :as r]
            cljsjs.jquery-ui)
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;; Model
(def Schema
  {::debugger {:initial-model  {schema/Any schema/Any}

               :signal-events  [(schema/pair schema/Int "id" schema/Any "signal")]
               :next-signal-id schema/Int

               :action-events  [{:id        schema/Int
                                 :signal-id schema/Int
                                 :enabled?  schema/Bool
                                 :action    schema/Any
                                 :result    {schema/Any schema/Any}}]
               :next-action-id schema/Int

               :persist?       schema/Bool}

   schema/Any schema/Any})

(defn -wrap-initial-model
  [app-initial-model]
  (assoc app-initial-model ::debugger
                           {:initial-model  app-initial-model

                            :signal-events  (list)
                            :next-signal-id 0

                            :action-events  (list)
                            :next-action-id 0

                            :persist?       false}))

(defn -signal-event
  [id signal]
  [id signal])

(defn -action-event
  [signal-id id action result]
  {:id        id
   :signal-id signal-id
   :enabled?  true
   :action    action

   ; this key only makes sense for enabled actions; should not include ::debugger data
   :result    result})

(defn -update-action-events*
  [model pred f & args]
  (s/transform [::debugger :action-events s/ALL pred]
               #(apply f % args)
               model))

(defn -update-action-event
  [model id f & args]
  (apply -update-action-events* model #(= (:id %) id) f args))

(defn -find-signal
  [model id]
  (->> model
       ::debugger
       :signal-events
       (filter #(= (first %) id))
       first))

(defn -find-action
  [model id]
  (->> model
       ::debugger
       :action-events
       (filter #(= (:id %) id))
       first))

;;;;;;;;;;;;;;;;;;;;;;;; Control
(defn -wrap-control
  [app-control]
  (fn control
    [model signal dispatch-signal dispatch-action]
    (match signal
           ::on-did-load-from-storage
           (dispatch-action ::replay)

           [::on-toggle-signal id]
           (do
             (dispatch-action [::toggle-signal id])
             (dispatch-action ::replay))

           [::on-toggle-action id]
           (do
             (dispatch-action [::toggle-action id])
             (dispatch-action ::replay))

           [::on-log-action-result id]
           (-> (-find-action @model id) :result pr-str println)

           ::on-toggle-persist
           (dispatch-action ::toggle-persist)

           ::on-sweep
           (dispatch-action ::sweep)

           ::on-reset
           (do
             (dispatch-action ::clear-history)
             (dispatch-action ::replay))

           ; app signal
           :else
           (let [[signal-id _ :as signal-event] (-signal-event (-> @model ::debugger :next-signal-id) signal)]
             (dispatch-action [::record-signal-event signal-event])
             (app-control model signal dispatch-signal #(dispatch-action [::app-action signal-id %]))))))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile
(defn -orphaned-signal?
  "Orphaned signal has no actions."
  [model [signal-id _ :as _signal_]]
  (empty? (filter #(= (:signal-id %) signal-id)
                  (-> model ::debugger :action-events))))

(defn -wrap-reconcile
  [app-reconcile]
  (fn reconcile
    [model action]
    (match action
           ::clear-history
           (-> model
               (assoc-in [::debugger :signal-events] (list))
               (assoc-in [::debugger :action-events] (list)))

           [::record-signal-event signal-event]
           (-> model
               (update-in [::debugger :signal-events] concat [signal-event])
               (update-in [::debugger :next-signal-id] inc))

           [::toggle-signal id]
           (let [all-actions-enabled? (->> model
                                           ::debugger
                                           :action-events
                                           (filter #(= (:signal-id %) id))
                                           (every? :enabled?))]
             (-update-action-events* model #(= (:signal-id %) id)
                                     assoc :enabled? (not all-actions-enabled?)))

           [::toggle-action id]
           (-update-action-event model id update :enabled? not)

           ; applies enabled actions to the initial app model
           ::replay
           (loop [action-events (filter :enabled? (-> model ::debugger :action-events))
                  new-model (-> model ::debugger :initial-model (assoc ::debugger (::debugger model)))]
             (if-let [{:keys [id action]} (first action-events)]
               (recur (rest action-events)
                      (as-> new-model m
                            (app-reconcile m action)
                            (-update-action-event m id assoc :result (dissoc m ::debugger))))
               new-model))

           ::toggle-persist
           (update-in model [::debugger :persist?] not)

           ::sweep
           (as-> model m
                 (update-in m [::debugger :action-events] #(filter :enabled? %))
                 (update-in m [::debugger :signal-events] #(remove (partial -orphaned-signal? m) %)))

           ; app action coming from specific signal
           [::app-action signal-id a]
           (if (-find-signal model signal-id)
             (as-> model m
                   (app-reconcile m a)
                   (update-in m [::debugger :action-events] concat [(-action-event signal-id
                                                                                   (-> m ::debugger :next-action-id)
                                                                                   a
                                                                                   (dissoc m ::debugger))])
                   (update-in m [::debugger :next-action-id] inc))

             ; looks like originating signal could be already sweeped -> create "unknown signal" to record this action
             (reconcile model a))

           ; for bare app actions (e.g. when dispatching from REPL) create an "unknown signal" event
           :else
           (let [[signal-id _ :as unknown-signal-event] (-signal-event (-> model ::debugger :next-signal-id) ::unknown-signal)]
             (-> model
                 (update-in [::debugger :signal-events] concat [unknown-signal-event])
                 (update-in [::debugger :next-signal-id] inc)
                 (reconcile [::app-action signal-id action]))))))

;;;;;;;;;;;;;;;;;;;;;;;; View model
(defn -view-model
  [model]
  (helpers/track-keys (reaction (::debugger @model))
                      [:initial-model :persist? :signal-events :action-events]))

;;;;;;;;;;;;;;;;;;;;;;;; View
(defn -menu-button
  [caption on-click title]
  [:button {:style    {:font-weight   "bold"
                       :cursor        "pointer"
                       :padding       "4px"
                       :margin        "5px 3px"
                       :border-radius "3px"}
            :title    title
            :on-click on-click}
   caption])

(defn -menu
  [persist? dispatch]
  [:div {:style {:text-align          "center"
                 :border-bottom-width 1
                 :border-bottom-style "solid"
                 :border-color        "#4F5A65"}}
   [:input#persist-toggle.toggle {:title     "Persist debug session into local storage?"
                                  :type      "checkbox"
                                  :checked   persist?
                                  :on-change #(dispatch ::on-toggle-persist)}]
   [:label {:for "persist-toggle"} "Persist session"]
   [-menu-button "Sweep" #(dispatch ::on-sweep) "Removes disabled actions and \"orphaned\" signals from history"]
   [-menu-button "Reset" #(dispatch ::on-reset) "Removes all actions and signals resetting the model to initial state"]])

(defn -signals-view
  [signal-events action-events dispatch]
  [:div
   (doall
     (for [[signal-id signal] (reverse signal-events)]
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
                                                   action-events)]
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
              "model"])])]))])

(defn -initial-model-view
  [initial-model]
  [:div
   [:hr]
   [:strong "Initial model:"]
   [:div (pr-str initial-model)]])

(defn -resizable-div [_attrs & _body]
  (r/create-class {:reagent-render      (fn [attrs & body]
                                          (into [:div attrs] body))
                   :component-did-mount (fn [this] (.resizable (js/$ (r/dom-node this))
                                                               (clj->js {:grid    25
                                                                         :handles "n, e, s, w, ne, se, sw, nw"})))}))

(defn -overlay
  [& body]
  (into [:div {:style {:position       "fixed"
                       :left           0
                       :right          0
                       :top            0
                       :bottom         0
                       :z-index        1000
                       :pointer-events "none"}}]
        body))

(defn -view
  [{:keys [persist? initial-model signal-events action-events] :as _view-model} dispatch]
  [-overlay
   [-resizable-div {:style {:left           "70%"
                            :width          "30%"
                            :height         "100%"
                            :pointer-events "all"}}
    [:div {:style {:height           "100%"
                   :overflow         "auto"
                   :background-color "#2A2F3A"
                   :color            "white"}}
     [-menu @persist? dispatch]
     [-signals-view @signal-events @action-events dispatch]
     [-initial-model-view @initial-model]]]])

;;;;;;;;;;;;;;;;;;;;;;;; Middleware
(defn -wrap-load-from-storage
  [load-from-storage]
  (fn wrapped-load-from-storage
    [loaded-model dispatch-signal current-model]
    ; load only if user set the flag during previous session
    (when (-> loaded-model ::debugger :persist?)
      (-> loaded-model
          ; otherwise, on hot reload, we will not see changes after modifying app init code
          (update ::debugger merge (-> current-model ::debugger (select-keys [:initial-model])))
          (load-from-storage dispatch-signal current-model))
      (dispatch-signal ::on-did-load-from-storage))))

(defn add-debugger
  "Adds debugging capabilities to the app.
   All signals and actions will be recorded and stored in the model.
   After app is created use |connect-debugger-ui| for rendering the debugger.
   For correct work it must be the last middleware wrapping the app and
   also make sure to blacklist ::debugger key if your app uses persistence middleware."
  [spec storage storage-key]
  (-> spec
      (update :initial-model -wrap-initial-model)
      (update :control -wrap-control)
      (update :reconcile -wrap-reconcile)
      (schema-middleware/add Schema)
      (persistence/add storage storage-key {:load-wrapper -wrap-load-from-storage})))

(defn connect-debugger-ui
  "Returns [debugger-view-model debugger-view]. App spec must be wrapped by |add-debugger|."
  [app]
  (mvsa/connect-ui app -view-model -view))