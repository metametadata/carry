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
        component {:model            model-ratom-readonly
                   :dispatch-signal  dispatch-signal
                   :start            #(on-start model-ratom-readonly dispatch-signal)
                   :stop             #(on-stop model-ratom-readonly dispatch-signal)

                   :-model           dispatch-action
                   :-dispatch-action dispatch-action}]
    component))

(defn connect-ui
  "Returns a pair of connected view-model and view."
  [{:keys [model dispatch-signal] :as _app} view-model view]
  {:pre [model (fn? dispatch-signal) (fn? view-model) (fn? view)]}
  (let [comp-view-model (view-model model)
        reagent-view [view comp-view-model dispatch-signal]]
    [comp-view-model reagent-view]))

;;;;;;;;;;;;;;;;;;;;;;;; Utils
(defn track-keys
  "Returns a map containing Reagent reactions to map entries specified by keys."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))