(ns carry.core
  (:require))

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
   Args: f - pure function, a - atom, contructor - optional particle atom contructor, default: atom."
  ([a f]
   (particle a f atom))
  ([a f constructor]
   (let [p (set-readonly! (constructor (f @a)))]
     (add-watch a
                p                                           ; unique key
                (fn [_key _atom _old-state new-state]
                  (-reset-readonly-atom! p (f new-state))))
     p)))