(ns carry.core
  (:require [reagent.core :as r])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn -make-readonly!
  "Prohibits using swap! and reset! on the specified atom. Returns the same atom."
  [a]
  (let [original-reset-fn (.bind (.-cljs$core$IReset$_reset_BANG_$arity$2 a) a)]
    (specify! a
      IReset
      (-reset!
        [this new-value]
        (if (::force-reset? (meta new-value))
          (original-reset-fn this (with-meta new-value
                                             (dissoc (meta new-value) ::force-reset?)))
          (assert nil (str "readonly atom cannot be reset to " (pr-str new-value))))))))

(defn -force-reset!
  "Bypasses write protection of the specified readonly atom."
  [readonly-atom new-value]
  (reset! readonly-atom (with-meta new-value
                                   (assoc (meta new-value) ::force-reset? true))))

(defn app
  "Constructs an app from a spec map with keys:
  :initial-model - Initial model value, must be a map.

  :control - Function of args: [model-readonly-ratom signal dispatch-signal dispatch-action].
  It performs side effects, can dispatch actions and new signals.
  By convention, it must be able to handle :on-start and :on-stop signals in order to be wrappable by middleware.
  Model ratom is useful for reading actual model values in async code and to subscribe to model changes.
  Functions dispatch-signal and dispatch-action always return nil.

  :reconcile - Pure function of args: [model-value action]. Given an action, it must return the new model value.

  Returned app is a map with keys:
  :model - A readonly model ratom.

  :dispatch-signal - Function with a single arg: a signal to be sent to an app. Returns nil.

  Data flow:
  -dispatch-signal-> (control) -dispatch-action-> (reconcile)"
  [{:keys [initial-model control reconcile] :as _spec}]
  {:pre [(map? initial-model) (fn? control) (fn? reconcile)]}
  (let [model-ratom (-make-readonly! (r/atom initial-model))]
    (letfn [(dispatch-action [action] (-force-reset! model-ratom (reconcile @model-ratom action)) nil)
            (dispatch-signal [signal] (control model-ratom signal dispatch-signal dispatch-action) nil)]
      {:model           model-ratom
       :dispatch-signal dispatch-signal})))

(defn connect-ui
  "Arguments:
  app - the app for which UI should be created
  view-model - function which, given a model ratom, returns reactions; returned value will be passed to a view:
  view - Reagent component function with args: [view-model-return-value dispatch-signal]

  Note that view-model function will be called only once.

  Returns a pair of: view-model value (mostly for testing/debugging) and argless component to be rendered by Reagent."
  [{:keys [model dispatch-signal] :as _app} view-model view]
  {:pre [model (fn? dispatch-signal) (fn? view-model) (fn? view)]}
  (let [app-view-model (view-model model)
        app-view [view app-view-model dispatch-signal]]
    [app-view-model app-view]))

(defn track-keys
  "Returns a map containing reactions to map entries specified by keys."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))