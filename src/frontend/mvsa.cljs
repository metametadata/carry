(ns frontend.mvsa
  (:require [reagent.core :as r]
            [cljs.pprint])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn create
  "Constructs an app from a spec."
  [{:keys [initial-model control reconcile on-start on-stop] :as _spec}]
  {:pre [(map? initial-model) (fn? control) (fn? reconcile) (fn? on-start) (fn? on-stop)]}
  (let [model-ratom (r/atom initial-model)
        model-ratom-readonly (reaction @model-ratom)
        dispatch-action (fn [action] (swap! model-ratom reconcile action))
        dispatch-signal (fn [signal] (control @model-ratom signal dispatch-action) nil)
        app {:model            model-ratom-readonly
             :dispatch-signal  dispatch-signal
             :start            #(on-start model-ratom-readonly dispatch-signal)
             :stop             #(on-stop model-ratom-readonly dispatch-signal)

             :-model           dispatch-action
             :-dispatch-action dispatch-action}]
    app))

(defn connect-ui
  "Returns a pair of connected view-model and view."
  [{:keys [model dispatch-signal] :as _app} view-model view]
  {:pre [model (fn? dispatch-signal) (fn? view-model) (fn? view)]}
  (let [app-view-model (view-model model)
        app-view [view app-view-model dispatch-signal]]
    [app-view-model app-view]))

;;;;;;;;;;;;;;;;;;;;;;;; Helpers
(defn track-keys
  "Returns a map containing Reagent reactions to map entries specified by keys."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))

(defn wrap-after
  "Returns a new function which calls f1 and then calls f2."
  [f1 f2]
  (fn [& args]
    (apply f1 args)
    (apply f2 args)))

(defn wrap-before
  "Returns a new function which calls f2 and then calls f1."
  [f1 f2]
  (fn [& args]
    (apply f2 args)
    (apply f1 args)))