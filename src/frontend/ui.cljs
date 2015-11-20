; GUI architecture API
(ns frontend.ui
  (:require [reagent.core :as r]
            [cljs.pprint]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn connect
  "Model must be a ratom.
  Control can be a non-pure function.
  View-model, view and reconcile must be pure functions.
  Returns a map with :view, :dispatch-signal, :dispatch-action (dispatch functions are exposed mainly for debugging).

  Automatically fires an :on-connect signal.

  Data flow:
  model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model"
  [model view-model view control reconcile]
  ; for now dispatch functions return nil to make API even smaller
  (let [dispatch-action (fn [a] (do (swap! model reconcile a) nil))
        dispatch-signal (fn [s] (do (control @model s dispatch-action) nil))
        connected-view (fn [] [view (view-model @model) dispatch-signal])]
    (dispatch-signal :on-connect)
    {:view            connected-view
     :dispatch-action dispatch-action
     :dispatch-signal dispatch-signal}))

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