; GUI architecture API
(ns frontend.ui
  (:require [reagent.core :as r]
            [cljs.pprint]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn connect
  "Initial model must be immutable. Initial signal can be nil if it should not be fired.
  Control can be a non-pure function.
  View-model, view and reconcile must be pure functions.

  Returns a map with:
      :view,
      :dispatch-signal (it can be used to dispatch signal not only from the view),
      :model ratom (this is exposed mainly for debugging),
      :dispatch-action (this is exposed mainly for debugging).

  Data flow:
  model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model -> etc."
  [[model signal :as _initial_] view-model view control reconcile]
  ; for now dispatch functions return nil to make API even smaller
  (let [model-atom (r/atom model)
        dispatch-action (fn [a] (swap! model-atom reconcile a) nil)
        dispatch-signal (fn [s] (control @model-atom s dispatch-action) nil)
        connected-view (fn [] [view (view-model @model-atom) dispatch-signal])]
    (some-> signal dispatch-signal)

    {:view            connected-view
     :dispatch-signal dispatch-signal
     :model           model-atom
     :dispatch-action dispatch-action}))

;;;;;;;;;;;;;;;;;;;;;;;; Utils
(defn tagged
  "Function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))

;;;;;;;;;;;;;;;;;;;;;;;; Control Middlewares
(defn wrap-log-signals
  [control]
  (fn wrapped-control
    [model signal dispatch]
    (println "signal =" signal)
    (control model signal dispatch)))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile Middlewares
(defn wrap-log-actions
  [reconcile]
  (fn wrapped-reconcile
    [model action]
    (println "  action =" action)
    (let [result (reconcile model action)]
      ;(cljs.pprint/pprint model)
      ;(print "->")
      ;(cljs.pprint/pprint result)
      ;(println "   " model)
      ;(println "     ->")
      ;(println "   " result)
      result)))