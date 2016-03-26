(ns reagent-mvsa.core
  (:require [reagent.core :as r])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn app
  "Constructs an app from a spec map with keys:
  :initial-model - Initial model value, must be a map.

  :control - Function of args: [model-reaction signal dispatch-signal dispatch-action].
  It performs side effects, can dispatch actions and new signals.
  By convention, it must be able to handle :on-start and :on-stop signals in order to be wrappable by middleware.
  Model reaction is useful for reading actual model values in async code or even to dynamically subscribe to model changes.

  :reconcile - Pure function of args: [model-value action]. Given an action, it must return the new model value.

  Returned app is a map with keys:
  :model - A model reaction.

  :dispatch-signal - Function with a single arg: a signal to be sent to an app. Returns nil.

  :-model - Model ratom (exposed for debugging only).

  Data flow:
  -dispatch-signal-> (control) -dispatch-action-> (reconcile)"
  [{:keys [initial-model control reconcile] :as _spec}]
  {:pre [(map? initial-model) (fn? control) (fn? reconcile)]}
  (let [model-ratom (r/atom initial-model)
        model-reaction (reaction @model-ratom)]
    (letfn [(dispatch-action [action] (swap! model-ratom reconcile action) nil)
            (dispatch-signal [signal] (control model-reaction signal dispatch-signal dispatch-action) nil)]
      {:model           model-reaction
       :dispatch-signal dispatch-signal
       :-model          model-ratom})))

(defn connect-ui
  "Arguments:
  app - the app for which UI should be created
  view-model - function which, given a model reaction, returns Reagent reactions; returned value will be passed to a view:
  view - Reagent compoment function with args: [view-model-return-value dispatch-signal]

  Note that view-model function will be called only once.

  Returns a pair of: view-model value (mostly for testing/debugging) and argless component to be rendered by Reagent."
  [{:keys [model dispatch-signal] :as _app} view-model view]
  {:pre [model (fn? dispatch-signal) (fn? view-model) (fn? view)]}
  (let [app-view-model (view-model model)
        app-view [view app-view-model dispatch-signal]]
    [app-view-model app-view]))

(defn track-keys
  "Returns a map containing Reagent reactions to map entries specified by keys."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))