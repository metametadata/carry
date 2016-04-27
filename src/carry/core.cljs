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
        (if (contains? new-value ::-force-reset-value)
          (original-reset-fn this (::-force-reset-value new-value))
          (assert nil (str "readonly atom cannot be reset to " (pr-str new-value))))))))

(defn -force-reset!
  "Bypasses write protection of the specified readonly atom."
  [readonly-atom new-value]
  (reset! readonly-atom {::-force-reset-value new-value}))

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

(defn particle
  "Returns a readonly ratom which automatically syncs its value with (f @iref),
   where f is a pure function, iref - atom or r/atom.

  Particle can be more useful than Reagent's cursor/reaction/wrapper which don't support add-watch as expected, e.g.:

  ```clj
  (def a (r/atom {:foo {:bar 1}}))
  (def c (r/cursor a [:foo]))
  (def p (carry/particle a (partial :foo)))

  (println \"a =\" (pr-str a) \"c =\" (pr-str c) \"p =\" (pr-str p))

  (println \"add cursor watcher\")
  (add-watch c :cursor-watcher
             (fn [_key _atom _old-state _new-state]
               (println \"  cursor watcher!\")))

  (println \"add particle watcher\")
  (add-watch p :particle-watcher
             (fn [_key _atom _old-state _new-state]
               (println \"  particle watcher!\")))

  (println \"modify :foo\")
  (swap! a update-in [:foo :bar] inc)
  ```

  cursor watcher is not triggered on ratom change:

  ```
  a = #<Atom: {:foo {:bar 1}}> c = #<Cursor: [:foo] {:bar 1}> p = #<Atom: {:bar 1}>
  add cursor watcher
  add particle watcher
  modify :foo
    particle watcher!
  ```

  As usual for atoms, particle's add-watch can sometimes be triggered with equal old and new states.

  You shouldn't create particles from ratoms in Reagent's components or run!. Otherwise,
  component/run! will also start triggering on ratom changes (because iref is derefenced on particle creation)."
  [iref f]
  (let [p (-make-readonly! (r/atom (f @iref)))]
    (add-watch iref
               p                                            ; unique key
               (fn [_key _atom _old-state new-state]
                 (-force-reset! p (f new-state))))
    p))