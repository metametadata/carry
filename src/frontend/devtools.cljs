; How to add devtools to your app:
; 1) on ui/connect apply devtools middleware to control and reconcile functions;
;   Wrapped control gets a signal and generates an id for it, then passes this id and action as a map
;   so that the wrapped reconcile can decode it later.
;   Metadata cannot be used instead of map wrapping, because action can be a keyword which cannot have metadata.
; Devtools should be the top middleware, otherwise it's not guaranteed to work correctly.
; 2) render devtools/view instead of app view;
(ns frontend.devtools
  (:require [reagent.core :as r]
            [cljs.pprint]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]))

(defn init
  "Creates a fresh dev-model instance."
  []
  {:dispatch-action      nil
   :initial-model        nil
   :initial-model-saved? false
   ; list of [id signal]
   :signals              (list)
   ; list of {id source-signal-id enabled? action}
   :actions              (list)})

(defn -signal-event
  [signal]
  [(random-uuid) signal])

(defn -action-event
  [source-signal-id action]
  {:id               (random-uuid)
   :source-signal-id source-signal-id
   :enabled?         true
   :action           action})

(defn -is-action-event?
  [x]
  (and (map? x)
       (= (set (keys x)) #{:id :source-signal-id :enabled? :action})))

(defn -update-actions*
  "model must be immutable."
  [model pred f & args]
  (s/transform [:actions s/ALL pred]
               #(apply f % args)
               model))

(defn -update-action
  "model must be immutable."
  [model id f & args]
  (apply -update-actions* model #(= (:id %) id) f args))

(defn -reset-model-to-initial-state
  "dev-model must be a ratom. Sends special devtools action understood by wrapped reconciler."
  [dev-model]
  ((:dispatch-action @dev-model) :-reset-model))

(defn -replay
  "dev-model must be a ratom. Replays all the enabled actions from the initial model."
  [dev-model]
  (-reset-model-to-initial-state dev-model)

  (let [actions (:actions @dev-model)]
    (swap! dev-model assoc :actions (list))
    (doseq [action actions]
      (if (:enabled? action)
        ((:dispatch-action @dev-model) action)
        (swap! dev-model update :actions concat [action])))))

(defn -toggle-action
  "dev-model is a ratom."
  [dev-model id]
  (swap! dev-model -update-action id update :enabled? not)
  (-replay dev-model))

(defn -devtools-view
  "dev-model must be a ratom."
  [dev-model]
  (fn [_dev-model_]
    [:section {:style {:width            "100%"
                       :height           "100%"
                       :overflow-y       "auto"
                       :background-color "#2A2F3A"
                       :padding-left     "5px"
                       :color            "white"}}
     [:header
      #_[:button {:style    {:cursor "pointer" :text-decoration "underline"}
                  :on-click #(-replay dev-model)} "REPLAY"]]

     [:div
      (doall
        (for [[signal-id signal] (reverse (:signals @dev-model))]
          ^{:key signal-id}
          [:div {:title "Signal"}
           "→ "
           (if (coll? signal)
             [:span [:strong (pr-str (first signal))] " " (clojure.string/join " " (rest signal))]
             [:strong (pr-str signal)])

           (for [{:keys [id enabled? action]} (filter #(= (:source-signal-id %) signal-id)
                                                      (:actions @dev-model))]
             ^{:key id}
             [:div {:style    {:cursor           "pointer"
                               :margin-left      "10px"
                               :background-color "rgb(79, 90, 101)"
                               :color            (if enabled? "inherit" "grey")}
                    :on-click #(-toggle-action dev-model id)
                    :title    "Click to enable/disable this action"}

              (if (coll? action)
                [:div [:strong (pr-str (first action))] " " (clojure.string/join " " (rest action))]
                [:div [:strong (pr-str action)]])])]))]
     [:hr]
     [:strong "initial model:"]
     [:div (pr-str (:initial-model @dev-model))]]))

(defn view
  "Renders app view with devtools. dev-model must be a ratom."
  [dev-model app]
  [(fn []
     [:div
      [(:view app)]

      [:div {:style {:position   "fixed"
                     :right      0
                     :top        0
                     :bottom     0
                     :z-index    1000
                     :width      "30%"
                     :box-shadow "-2px 0 7px 0 rgba(0, 0, 0, 0.5)"}}
       [-devtools-view dev-model]]])])

(defn wrap-dispatch-action-event
  "Will wrap dispatched actions into action events."
  [dispatch-action source-signal-id]
  (fn dispatch-action-event
    [action]
    (dispatch-action (-action-event source-signal-id action))))

(defn wrap-control
  "dev-model must be a ratom."
  [control dev-model]
  (fn wrapped-control
    [model signal dispatch]
    ; if devtools is the top middleware then the dispatch fn is going to always be the same because (i.e. we get tio signals from app and an original action dispatcher)
    ; so at the beginning we can save dispatch function to be able to replay actions later
    (when-not (:dispatch-action @dev-model)
      (swap! dev-model assoc :dispatch-action dispatch))

    (let [[signal-id _signal_ :as signal-event] (-signal-event signal)
          dispatch-action-event (wrap-dispatch-action-event dispatch signal-id)]
      (swap! dev-model update :signals concat [signal-event])
      (control model signal dispatch-action-event))))

(defn wrap-reconcile
  "dev-model must be a ratom."
  [reconcile dev-model]
  (letfn [(wrapped-reconcile [model action]
            ; catch initial model state
            (when-not (:initial-model-saved? @dev-model)
              (swap! dev-model assoc
                     :initial-model model
                     :initial-model-saved? true))

            (if (= action :-reset-model)
              ; special devtools action
              (:initial-model @dev-model)

              ; handle action event
              (let [action-event
                    (if (-is-action-event? action)
                      ; ok, it's already an event coming from controller wrapped by devtools
                      action

                      ; for other bare actions (e.g. when dispatching from REPL) generate an "unknown signal" event
                      (let [[unknown-singal-id _signal_ :as unknown-signal-event] (-signal-event :-unknown-signal)]
                        (swap! dev-model update :signals concat [unknown-signal-event])
                        (-action-event unknown-singal-id action)))]
                (swap! dev-model update :actions concat [action-event])
                (reconcile model (:action action-event)))))]
    wrapped-reconcile))