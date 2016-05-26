(ns carry.core)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Read-only atoms
(defn read-only?
  "Returns `true` if atom `a` is read-only."
  [a]
  (::read-only-atom? (meta a)))

(defn ^:no-doc -throw-read-only-atom-error
  [new-state]
  #?(:clj  (throw (ex-info (str "read-only atom was set to " (pr-str new-state)) {}))
     :cljs (throw (js/Error. (str "read-only atom was set to " (pr-str new-state))))))

(defn set-read-only!
  "Makes the specified atom read-only: an excpetion will be raised after atom value is changed.
  Returns the updated atom."
  [a]
  (alter-meta! a assoc ::read-only-atom? true)
  (add-watch a ::read-only-watch
             (fn read-only-watch
               [_key _atom old-state new-state]
               (when (not= old-state new-state)
                 (-throw-read-only-atom-error new-state)))))

(defn ^:no-doc -set-can-be-set-only-to-value!
  "Allows swap!/reset! only to the specified value. Returns the updated atom."
  [a v]
  (add-watch a ::can-be-reset-only-to-value-watch
             (fn can-be-reset-only-to-value-watch
               [_key _atom _old-state new-state]
               (when (not= new-state v)
                 (-throw-read-only-atom-error new-state)))))

(defn ^:no-doc -reset-read-only-atom!
  "Bypasses write protection of the specified read-only atom."
  [a new-value]
  (assert (read-only? a))

  (remove-watch a ::read-only-watch)
  (-set-can-be-set-only-to-value! a new-value)

  (reset! a new-value)

  (remove-watch a ::can-be-reset-only-to-value-watch)
  (set-read-only! a))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn app
  "Constructs an app from a spec map with keys:

  * `:initial-model` - Initial model value, must be a map.
  * `:control` - Function of args: `[model signal dispatch-signal dispatch-action]`.
  It performs side effects, can dispatch actions and new signals.
  By convention, it must be able to handle `:on-start` and `:on-stop` signals in order to be wrappable by middleware.
  Read-only model atom is useful for reading actual model values in async code and to subscribe to model changes.
  Functions `dispatch-signal` and `dispatch-action` always return `nil`.
  * `:reconcile` - Pure function of args: `[model action]`.
  Given an action and current model value, it must return the new model value.

  Returns a map with keys:

  * `:model` - A read-only model atom.
  * `:dispatch-signal` - Function with a single arg: a signal to be sent to an app. Returns `nil`."
  [{:keys [initial-model control reconcile] :as _spec}]
  {:pre [(map? initial-model) (fn? control) (fn? reconcile)]}
  (let [model-atom (set-read-only! (atom initial-model))]
    (letfn [(dispatch-action [action] (-reset-read-only-atom! model-atom (reconcile @model-atom action)) nil)
            (dispatch-signal [signal] (control model-atom signal dispatch-signal dispatch-action) nil)]
      {:model           model-atom
       :dispatch-signal dispatch-signal})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Utils
(defn entangle
  "Returns a read-only atom which automatically syncs its value from `(f @a)`.
   Arguments:

   * `f` - pure function
   * `a` - atom
   * `contructor` - atom contructor, default value: `atom`"
  ([a f]
   (entangle a f atom))
  ([a f constructor]
   (let [entangled-atom (set-read-only! (constructor (f @a)))]
     (add-watch a
                entangled-atom                              ; unique key
                (fn [_key _atom _old-state new-state]
                  (-reset-read-only-atom! entangled-atom (f new-state))))
     entangled-atom)))