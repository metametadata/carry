(ns carry.core
  (:require))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Read-only atoms
(defprotocol -ReadOnlyAtom)

(defn -read-only?
  [a]
  (satisfies? -ReadOnlyAtom a))

(defn -prohibit-reset!-for-read-only-atoms!
  "Monkey patches reset! function in order to prohibit changes to read-only atoms. Returns original function."
  []
  (let [original-fn reset!
        new-reset (fn [a new-value]
                    (when (-read-only? a)
                      (throw (js/Error. (str "read-only atom cannot be reset to " (pr-str new-value)))))

                    (original-fn a new-value))]
    (set! reset! new-reset)
    original-fn))

(def -original-reset! (-prohibit-reset!-for-read-only-atoms!))

(defn ^:no-doc -reset-read-only-atom!
  "Bypasses write protection of the specified read-only atom."
  [a new-value]
  (assert (-read-only? a) "atom must be read-only")
  (-original-reset! a new-value))

(defn set-read-only!
  "Prohibits swap!/reset! for the specified atom. Returns the updated atom."
  [a]
  (specify! a -ReadOnlyAtom))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn app
  "Constructs an app from a spec map with keys:
  :initial-model - Initial model value, must be a map.

  :control - Function of args: [model-read-only-atom signal dispatch-signal dispatch-action].
  It performs side effects, can dispatch actions and new signals.
  By convention, it must be able to handle :on-start and :on-stop signals in order to be wrappable by middleware.
  Model atom is useful for reading actual model values in async code and to subscribe to model changes.
  Functions dispatch-signal and dispatch-action always return nil.

  :reconcile - Pure function of args: [model-value action]. Given an action, it must return the new model value.

  Returned app is a map with keys:
  :model - A read-only model atom.

  :dispatch-signal - Function with a single arg: a signal to be sent to an app. Returns nil.

  Data flow:
  -dispatch-signal-> (control) -dispatch-action-> (reconcile)"
  [{:keys [initial-model control reconcile] :as _spec}]
  {:pre [(map? initial-model) (fn? control) (fn? reconcile)]}
  (let [model-atom (set-read-only! (atom initial-model))]
    (letfn [(dispatch-action [action] (-reset-read-only-atom! model-atom (reconcile @model-atom action)) nil)
            (dispatch-signal [signal] (control model-atom signal dispatch-signal dispatch-action) nil)]
      {:model           model-atom
       :dispatch-signal dispatch-signal})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Utils
(defn entangle
  "Returns a read-only atom which automatically syncs its value from (f @a).
   Args: f - pure function, a - atom, contructor - optional atom contructor, default: atom."
  ([a f]
   (entangle a f atom))
  ([a f constructor]
   (let [entangled-atom (set-read-only! (constructor (f @a)))]
     (add-watch a
                entangled-atom                              ; unique key
                (fn [_key _atom _old-state new-state]
                  (-reset-read-only-atom! entangled-atom (f new-state))))
     entangled-atom)))