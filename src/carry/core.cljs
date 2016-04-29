(ns carry.core
  (:require [reagent.core :as r])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Readonly atoms
(defn -readonly-validator
  [val]
  (throw (js/Error. (str "readonly atom cannot be reset to " (pr-str val)))))

(defn set-readonly!
  "Prohibits swap!/reset! for the specified atom. Returns the updated atom."
  [a]
  (set-validator! a -readonly-validator)
  a)

(defn -allow-resetting-only-to-value!
  "Allows to change the atom only to the specified value."
  [a new-value]
  (set-validator! a #(or (= % new-value)
                         (throw (js/Error. (str "readonly atom cannot be reset to " (pr-str %))))))
  a)

(defn -reset-readonly-atom!
  "Bypasses write protection of the specified readonly atom."
  [a new-value]
  (-allow-resetting-only-to-value! a new-value)             ; prohibits modifying atom in watchers using swap!/reset!
  (reset! a new-value)
  (set-readonly! a))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn app
  "Constructs an app from a spec map with keys:
  :initial-model - Initial model value, must be a map.

  :control - Function of args: [model-readonly-atom signal dispatch-signal dispatch-action].
  It performs side effects, can dispatch actions and new signals.
  By convention, it must be able to handle :on-start and :on-stop signals in order to be wrappable by middleware.
  Model atom is useful for reading actual model values in async code and to subscribe to model changes.
  Functions dispatch-signal and dispatch-action always return nil.

  :reconcile - Pure function of args: [model-value action]. Given an action, it must return the new model value.

  Returned app is a map with keys:
  :model - A readonly model atom.

  :dispatch-signal - Function with a single arg: a signal to be sent to an app. Returns nil.

  Data flow:
  -dispatch-signal-> (control) -dispatch-action-> (reconcile)"
  [{:keys [initial-model control reconcile] :as _spec}]
  {:pre [(map? initial-model) (fn? control) (fn? reconcile)]}
  (let [model-atom (set-readonly! (atom initial-model))]
    (letfn [(dispatch-action [action] (-reset-readonly-atom! model-atom (reconcile @model-atom action)) nil)
            (dispatch-signal [signal] (control model-atom signal dispatch-signal dispatch-action) nil)]
      {:model           model-atom
       :dispatch-signal dispatch-signal})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Utils
(defn particle
  "Returns a readonly atom which automatically syncs its value from (f @iref).
   Args: f - pure function, a - atom."
  [a f]
  (let [p (set-readonly! (atom (f @a)))]
    (add-watch a
               p                                            ; unique key
               (fn [_key _atom _old-state new-state]
                 (-reset-readonly-atom! p (f new-state))))
    p))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Reagent utils
(defn -atom->readonly-ratom
  [a]
  (let [ra (set-readonly! (r/atom @a))]
    (add-watch a
               ra                                           ; unique key
               (fn [_key _atom _old-state new-state]
                 (-reset-readonly-atom! ra new-state)))
    ra))

(defn connect-ui
  "Arguments:
  app - the app for which UI should be created
  view-model - function which, given a readonly model ratom, returns reactions; returned value will be passed to a view:
  view - Reagent component function with args: [view-model-return-value dispatch-signal]

  Note that view-model function will be called only once.

  Returns a pair of: view-model value (mostly for testing/debugging) and argless component to be rendered by Reagent."
  [{:keys [model dispatch-signal] :as _app} view-model view]
  {:pre [model (fn? dispatch-signal) (fn? view-model) (fn? view)]}
  (let [app-view-model (view-model (-atom->readonly-ratom model))
        app-view [view app-view-model dispatch-signal]]
    [app-view-model app-view]))

(defn track-keys
  "Returns a map containing reactions to map entries specified by keys."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))