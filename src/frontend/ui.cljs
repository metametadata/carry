; GUI architecture API
(ns frontend.ui
  (:require [reagent.core :as r]
            [cljs.pprint])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn connect-reagent
  "Given a component spec map returns a connected component which can be rendered using Reagent.

  :control can be a non-pure function, :init, :view-model, :view and :reconcile must be pure functions.

  init-args will be passed to :init function.

  Dispatches :on-connect signal and returns a map with:
      :view (Reagent view function),
      :dispatch-signal (it can be used to dispatch signals not only from the view),
      :model ratom (this is exposed mainly for debugging),
      :dispatch-action (this is exposed mainly for debugging).

  Data flow:
  (init)
  |
  V
  model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model -> etc."
  [{:keys [init view-model view control reconcile] :as _spec_}
   init-args]
  (let [model (apply init init-args)
        model-ratom (r/atom model)]
    ; for now dispatch functions return nil to make API even smaller
    (letfn [(dispatch-action [action] (swap! model-ratom reconcile action) nil)
            (dispatch-signal [signal] (control @model-ratom signal dispatch-action) nil)
            (reagent-view [] [view (view-model @model-ratom) dispatch-signal])]
      (dispatch-signal :on-connect)

      {:view            reagent-view
       :dispatch-signal dispatch-signal
       :model           model-ratom
       :dispatch-action dispatch-action})))

(defn connect-reactive-reagent
  "Works the same as connect-reagent, but view-model now receives a model ratom and is expected to return Reagent reactions.
  Inspired by re-frame subscriptions, see: https://github.com/Day8/re-frame#subscribe

  This approach allows tweaking view-model/view code for better performance."
  [{:keys [init view-model view control reconcile] :as _spec_}
   init-args]
  (let [model (apply init init-args)
        model-ratom (r/atom model)]
    ; for now dispatch functions return nil to make API even smaller
    (letfn [(dispatch-action [action] (swap! model-ratom reconcile action) nil)
            (dispatch-signal [signal] (control @model-ratom signal dispatch-action) nil)
            (reagent-view [] [view (view-model model-ratom) dispatch-signal])]
      (dispatch-signal :on-connect)

      {:view            reagent-view
       :dispatch-signal dispatch-signal
       :model           model-ratom
       :dispatch-action dispatch-action})))

;;;;;;;;;;;;;;;;;;;;;;;; Utils
(defn tagged
  "Function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))

(defn track-keys
  "Returns a map containing Reagent reactions to map entries specified by keys."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))

;;;;;;;;;;;;;;;;;;;;;;;; Middleware
(defn wrap-log
  [spec]
  (-> spec
      (update :control #(fn control
                         [model signal dispatch]
                         (println "signal =" signal)
                         (% model signal dispatch)))
      (update :reconcile #(fn reconcile
                           [model action]
                           (println "  action =" action)
                           (let [result (% model action)]
                             ;(println "   " model)
                             ;(println "     ->")
                             ;(println "   " result)
                             result)))))