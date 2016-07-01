(ns carry.core)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Utils
#?(:clj
   (deftype -EntangledReference [r f]
     clojure.lang.IRef
     (deref
       [_]
       (f @r))

     (addWatch
       [this key callback]
       (add-watch r
                  [this key]
                  (fn [_key _ref old-state new-state]
                    (callback key this (f old-state) (f new-state))))
       this)

     (removeWatch
       [this key]
       (remove-watch r [this key])
       this))

   :cljs
   (deftype -EntangledReference [r f]
     IDeref
     (-deref
       [_]
       (f @r))

     IWatchable
     (-add-watch
       [this key callback]
       (add-watch r
                  [this key]
                  (fn [_key _ref old-state new-state]
                    (callback key this (f old-state) (f new-state)))))

     (-remove-watch
       [this key]
       (remove-watch r [this key]))

     IPrintWithWriter
     (-pr-writer
       [this writer _opts]
       (-write writer (str "#<Entangled reference: " @this ">")))))

(alter-meta! #'->-EntangledReference assoc :no-doc true)

#?(:clj
   (defmethod print-method -EntangledReference [v ^java.io.Writer writer]
     (.write writer (str "#<Entangled reference: " @v ">"))))

(defn entangle
  "Creates a read-only reference which automatically syncs its value with `(f @r)`.
  Returned object supports `deref`, `add-watch` and `remove-watch`.
  Arguments:

   * `r` - source reference, it must support `deref`, `add-watch` and `remove-watch` (e.g. an atom or another read-only reference)
   * `f` - pure function"
  [r f]
  (-EntangledReference. r f))

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

  * `:model` - An object that supports `IDeref` and `IWatchable` protocols.
  * `:dispatch-signal` - Function with a single arg: a signal to be sent to an app. Returns `nil`."
  [{:keys [initial-model control reconcile] :as _spec}]
  {:pre [(map? initial-model) (fn? control) (fn? reconcile)]}
  (let [model-atom (atom initial-model)
        read-only-model-atom (entangle model-atom identity)]
    (letfn [(dispatch-action [action] (reset! model-atom (reconcile @model-atom action)) nil)
            (dispatch-signal [signal] (control read-only-model-atom signal dispatch-signal dispatch-action) nil)]
      {:model           read-only-model-atom
       :dispatch-signal dispatch-signal})))