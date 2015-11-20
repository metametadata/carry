; How to add devtools to your app:
; 1) on ui/connect apply devtools middleware to control and reconcile functions;
;   Wrapped control gets a signal and generates an id for it, then passes this id and action as a map
;   so that the wrapped reconcile can decode it later.
;   Metadata cannot be used instead of map wrapping, because action can be a keyword which cannot have metadata.
; 2) render devtools/view instead of app view;
(ns frontend.devtools
  (:require [reagent.core :as r]
            [cljs.pprint]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]))

(defn init
  "Creates a fresh dev-model instance."
  []
  {:initial-model        nil
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

(defn -toggle-action
  "dev-model is a ratom."
  [dev-model id]
  (swap! dev-model
         -update-action id
         update :enabled? not))

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
     [:header>h3 "devtools log"]
     [:div
      (doall
        (for [[signal-id signal] (reverse (:signals @dev-model))]
          ^{:key signal-id}
          [:div
           "➙ "
           (if (coll? signal)
             [:span [:strong (pr-str (first signal))] " " (clojure.string/join " " (rest signal))]
             [:span [:strong (pr-str signal)]])

           (for [{:keys [id enabled? action]} (filter #(= (:source-signal-id %) signal-id)
                                                      (:actions @dev-model))]
             ^{:key id}
             [:div {:style {:margin-left "10px"
                            :color       (if enabled? "inherit" "grey")}}
              "⇣"
              [:button {:style    {:cursor          "pointer"
                                   :text-decoration "underline"}
                        :on-click #(-toggle-action dev-model id)}
               (if enabled? "OFF" "ON")]

              (if (coll? action)
                [:div
                 [:strong (pr-str (first action))] " " (clojure.string/join " " (rest action))]
                [:div>strong (pr-str action)])])]))]
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

(defn wrap-dispatch-action
  "Attaches signal source to action."
  [dispatch-action source-signal-id]
  (fn wrapped-dispatch-action
    [action]
    (dispatch-action {:source-signal-id source-signal-id
                      :action           action})))

(defn wrap-control
  "dev-model must be a ratom."
  [control dev-model]
  (fn wrapped-control
    [model signal dispatch]
    (let [[signal-id _signal_ :as signal-event] (-signal-event signal)
          wrapped-dispatch (wrap-dispatch-action dispatch signal-id)]
      (swap! dev-model update :signals concat [signal-event])
      (control model signal wrapped-dispatch))))

(defn wrap-reconcile
  "dev-model must be a ratom."
  [reconcile dev-model]
  (fn wrapped-reconcile
    [model wrapped-action]
    ; catch initial model
    (when-not (:initial-model-saved? @dev-model)
      (swap! dev-model assoc
             :initial-model model
             :initial-model-saved? true))

    ; handle action
    (let [[source-signal-id unwrapped-action]
          (match wrapped-action
                 ; ok, we have a wrapped action, thanks to devtools controller middleware
                 {:source-signal-id signal-id :action action}
                 [signal-id action]

                 ; for other actions: generate an "unknown signal" event (e.g. for easier action dispatching from REPL)
                 action
                 (let [[unknown-singal-id _signal_ :as unknown-signal-event] (-signal-event :-unknown-signal)]
                   (swap! dev-model update :signals concat [unknown-signal-event])
                   [unknown-singal-id action]))
          event (-action-event source-signal-id unwrapped-action)]
      (swap! dev-model update :actions concat [event])
      (reconcile model unwrapped-action))))