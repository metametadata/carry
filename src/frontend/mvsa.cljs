(ns frontend.mvsa
  (:require [reagent.core :as r]
            [cljs.pprint])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn app
  "Constructs an app from a spec.

  Spec is a map with keys:
  :initial-model - initial model value, must be a map
  :control - function of args: [model-value signal dispatch-action];
  it performs side effects, can dispatch actions using dispatch-action (which returns the updated model value)
  :reconcile - pure function of args: [model-value action];
  given an action it must return the new model value
  :on-start - function of args: [model-reaction dispatch-signal]; will be called on starting the app
  :on-stop - function of args: [model-reaction dispatch-signal]; will be called on stopping the app

  App is a map with keys:
  :model - a readonly ratom (or, in Reagent terms, a reaction which returns model value)
  :dispatch-signal - function with a single arg: a signal to be sent to an app; returns nil
  :start - argless function for bootstrapping an app, e.g. app can start listening to browser history here
  :stop - argless function for shutting an app down, e.g. app can stop listening to browser events here
  :-model - model ratom (exposed for debugging only)
  :-dispatch-action - function with which dispatches an action (exposed for debugging only); returns updated model value

  Data flow:
  -dispatch-signal-> (control) -dispatch-action-> (reconcile) -update-> model"
  [{:keys [initial-model control reconcile on-start on-stop] :as _spec}]
  {:pre [(map? initial-model) (fn? control) (fn? reconcile) (fn? on-start) (fn? on-stop)]}
  (let [model-ratom (r/atom initial-model)
        model-reaction (reaction @model-ratom)
        dispatch-action (fn [action] (swap! model-ratom reconcile action))
        dispatch-signal (fn [signal] (control @model-ratom signal dispatch-action) nil)
        app {:model            model-reaction
             :dispatch-signal  dispatch-signal
             :start            #(on-start model-reaction dispatch-signal)
             :stop             #(on-stop model-reaction dispatch-signal)

             :-model           model-ratom
             :-dispatch-action dispatch-action}]
    app))

(defn connect-ui
  "Arguments:
  view-model - function which, given a model ratom, returns Reagent reactions; inspired by re-frame
  subscriptions, see: https://github.com/Day8/re-frame#subscribe; returned value will be passed to a view:
  view - Reagent compoment function with args: [view-model-return-value dispatch-signal]

  Note that view-model function will be called only once.

  Returns a pair of: view-model value (mostly for testing/debugging) and argless component to be rendered by Reagent."
  [{:keys [model dispatch-signal] :as _app} view-model view]
  {:pre [model (fn? dispatch-signal) (fn? view-model) (fn? view)]}
  (let [app-view-model (view-model model)
        app-view [view app-view-model dispatch-signal]]
    [app-view-model app-view]))

;;;;;;;;;;;;;;;;;;;;;;;; Helpers
(defn track-keys
  "Returns a map containing Reagent reactions to map entries specified by keys.."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))

(defn after-do
  "Returns a new function which calls f1 and then calls f2. Useful in spec middleware for wrapping :on-start."
  [f1 f2]
  (fn [& args]
    (apply f1 args)
    (apply f2 args)))

(defn before-do
  "Returns a new function which calls f2 and then calls f1. Useful in spec middleware for wrapping :on-stop."
  [f1 f2]
  (fn [& args]
    (apply f2 args)
    (apply f1 args)))