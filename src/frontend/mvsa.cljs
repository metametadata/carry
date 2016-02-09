(ns frontend.mvsa
  (:require [reagent.core :as r]
            [cljs.pprint])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn create
  "Constructs a component from a spec."
  [{:keys [initial-model control reconcile on-start on-stop] :as _spec}]
  (assert (map? initial-model))
  (assert (fn? control))
  (assert (fn? reconcile))
  (assert (fn? on-start))
  (assert (fn? on-stop))

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
  (assert model)
  (assert dispatch-signal)
  (assert view-model)
  (assert view)

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