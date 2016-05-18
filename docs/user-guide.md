# Basics

This section explains everything you need to start making apps with Carry. 

## App

![spec](/graphs/app.svg)

In a Carry application all the code you write is encapsulated behind a single **app** instance. 
An app is a map with keys:

* `:model` - a read-only atom, an in-memory representation of an app state
* `:dispatch-signal` - a function for interaction with an app, always returns nil

One can consider an app to be a black box which exposes its current state and modifies it on getting signals from an external world.
It can also affect an external world as a response to a signal, i.e. perform "side effects".

## Model

Model represents an entire state of an app. 
 
One can access app's model via `:model` key to obtain a read-only atom that can be dereferenced and watched, but cannot be mutated:

```clj
(def my-model (:model app))

@my-model
;=> {...}

(add-watch my-model :my-watcher
           (fn [_key _atom old-state new-state]
             (when (not= old-state new-state)
               (println "model value has changed!"))))
               
(reset! my-model {:foo :bar})
;=> Error: read-only atom cannot be reset to {:foo :bar}
               
((:dispatch-signal app) some-model-changing-signal)
;=> model value has changed!

(remove-watch my-model :my-watcher)
```

Carry requires a model value to be a map. This convention allows writing reusable packages that can store additional data into any Carry app.
As an example, [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history) adds `:token` to a model.

## Signals

**Signal** is an object which represents a user's intention or, looking at it from a different angle, a system event. 
Signal can be synchronously sent to an app by calling its `dispatch-signal` function:

```clj
((:dispatch-signal my-app) my-signal)
```

Carry accepts signals of any type. But usually signal is a just keyword with the "on-" prefix or
a serializable vector with a keyword and an additional payload:

```clj
:on-clear-completed
[:on-update-todo id val]
[:carry-history.core/on-enter token]
```

## Creating an App

In order to create an instance of a Carry app a user has to pass a **spec** into `app` function:

```clj
(let [my-app (carry/app my-spec)]
  ; ...
  )
```

A spec is a map with keys:

* `:initial-model` - an initial model value
* `:control` - a function for handling signals
* `:reconcile` - a function for handling actions

In other words, a spec is needed to define a runtime behavior of an app:

![spec](/graphs/spec-and-app.svg)

## Control
**Controller (control function, control)** is a part of an application responsible for handling incoming signals. 
It can dispatch new signals, modify app model (by dispatching actions) and perform any side effects (e.g. send data to a server).
Controller is also free to contain an asynchronous code. The signature of a control function:

```clj
(defn control
  [model signal dispatch-signal dispatch-action])
```

* `model` - a read-only atom, the same as app's `:model`
* `signal` - an incoming signal 
* `dispatch-signal` - a synchronous function for dispatching new signals, always returns `nil`, the same as app's `:dispatch-signal`
* `dispatch-action` - a synchronous function for modifying a model, always returns `nil`
* Return value will not be used

By convention, control should be able to at least handle `:on-start` and `:on-stop` signals.
As we'll see later, it's required by middleware with setup/teardown logic and to support hot reloading.

It is convenient (but not required) to use [pattern matching](https://github.com/clojure/core.match) 
to switch between signals and destructure signals with payload.
As an example, this is a controller from [friend-list](/examples/#friend-list) demo app:

```clj
(ns friend-list.core
  (:require [carry-history.core :as h]
            ; ...
            [goog.functions :refer [debounce]]
            [cljs.core.match :refer-macros [match]]))

; It's recommended to create a factory function if controller uses external dependencies.
; It makes code more decoupled and 
; easier to unit test (stubs/mocks can be easily used instead of real implementations).
; In this example browser history manager and API client are external dependencies.
(defn -new-control
  [history api-search]
  ; Some helper functions.
  ; On successful search a new :on-search-success signal will be dispatched.
  (let [search (fn [q dispatch-signal] (api-search q #(dispatch-signal [:on-search-success q %])))
        search-on-input (debounce (fn [q dispatch-signal]
                                    (h/push-token history q)
                                    (search q dispatch-signal))
                                  300)]
    ; Function name is specified for better stacktraces.
    (fn control
      [model signal dispatch-signal dispatch-action]
      (match signal
             ; This application has no custom setup/teardown logic
             ; so just return nil on standard signals:             
             :on-start nil
             :on-stop nil
             
             ; Macro will throw an exception on unknown signals.

             ; Signal destructuring example 
             [:on-input q]
             (do
               ; Update model.
               (dispatch-action [:set-query q])
               
               ; Begin (possibly async) searching.
               (search-on-input q dispatch-signal))

             ; ...

             [:on-search-success q friends]
             ; Note that model has to be dereferenced to get its value.
             (if (= (:query @model) q)
               (dispatch-action [:set-friends friends])
               (println "ignore response for" (pr-str q)
                        "because current query is" (pr-str (:query @model))))))))
                        
; ...

; Dependencies will be injected in a spec factory function:
(defn new-spec
  [history api-search]
  {; ...
   :control (-new-control history api-search)})
   
; ...

; Create and start an app using concrete dependencies.
(def my-app (carry/app (new-spec my-history my-api-client)))
((:dispatch-signal app) :on-start)
```

## Actions
**Action** is an object which represents an intention to modify a model.
Actions can be dispatched only from within a control function via `dispatch-action`.

Similar to signals, actions are usually keywords or vectors, for instance:

```clj
:increment
[:set-query q]
```

## Reconcile
**Reconciler (reconcile function, reconcile)** is a part of an application responsible for handling incoming actions.
It's a pure function which returns a new model value based on a current model value and an incoming action.
On getting an action an app passes it into a reconciler and then resets app model value with the result.

A simple example from [friend-list](/examples/#friend-list) demo app:

```clj
(defn -reconcile
  [model action]
  (match action
         [:set-query q]
         (assoc model :query q)

         [:set-friends friends]
         (assoc model :friends friends)))
```

It's important to not put any async code, side effects or nondeterministic code (e.g. random number generation)
into reconciler. Otherwise, it will make replaying actions unpredictable and break time traveling debugging.

## Usage with Reagent

Carry can work with any view layer that is able to re-render UI in response to app model changes.
This chapter is about tying Carry with [Reagent](https://github.com/reagent-project/reagent) 
(a ClojureScript wrapper for [React](https://facebook.github.io/react/))
using [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/) package: 

```clj
(ns app.core
  (:require [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [reagent.core :as r]))

; ...
        
; Define app view model and view:

(defn my-view-model
  [model]
  ; define a view model...
)

(defn my-view
  [view-model dispatch]
  ; a Reagent component that uses data from a view-model and dispatches signals on events...
)

(let [; Create an app.
      app (carry/app my-spec)
      
      ; "Connect" app, view model and view to create a Reagent component.
      [_ app-view] (carry-reagent/connect app my-view-model my-view)]
    ; Render component into DOM.
    (r/render app-view (.getElementById js/document "root"))
    
    ; ...
)
```

App view is constructed using `carry-reagent.core/connect` function:

```clj
(connect [app view-model view])
```

* `app` - Carry app instance
* `view-model` - a function which produces a view model
* `view` - a Reagent component
* Returns a pair `[view-model-instance view-component]` (view model is returned mainly for debugging)

`view-model` function is called once on `connect` call.
Then returned view model instance is passed as an argument into `view` function to produce a final view component.
A view thereby listens to a view model that in turn listens to a model:

![pattern](/graphs/pattern.svg)

In the next section we'll see how to define a view model.

### View Model

**View model** contains all the data needed to render a UI.
It can compute derived model data, split lists of objects into pages, calculate which buttons are enabled, 
determine which app page to show depending on current URL, etc.

Usually view model is a map of Reagent reactions. An example from [TodoMVC](/examples/#todomvc) app:

```clj
(ns app.view-model
  (:require ; ...
            [carry-reagent.core :as carry-reagent])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn view-model
  [model]
  (let [; ...
        ; Wrap todo items in a reaction.
        all-todos (reaction (:todos @model))]
    (-> model
        ; This helper function call will return {:field (reaction (:field @model))} map.
        ; Note: :field contains the value of a new todo input.
        (carry-reagent/track-keys [:field])
        
        ; Additional view model fields are reactions 
        ; which will be recalculated if (and only if) all-todos value changes:
        (assoc :has-todos? (reaction (-> @all-todos count pos?))
               :all-completed? (reaction (every? :completed? @all-todos))
               ; ...
               ))))
```

Argument `model` is a read-only **Reagent atom (ratom)** that behaves almost exactly as a read-only model atom (i.e. `(:model app)`), 
but can also be used in Reagent components and reactions.

**Reaction** is a special ratom-like object that is created using Reagent's `reaction` macro.
It is lazily computed from other ratoms/reactions.
Any Reagent component that dereferences a reaction is going to be re-rendered when reaction value updates.

### View

An example from [TodoMVC](/examples/#todomvc) app:

```clj
; A plain Reagent component which is redrawn when input arguments change.
(defn -header
  [field dispatch]
  ; Reagent uses Hiccup-like syntax for defining HTML.
  [:header.header
   [:h1 "todos"]
   
   ; Input value is equal to field arg value.
   [:input.new-todo {:placeholder "What needs to be done?"
                     :value       field
                     
                     ; Dispatch signals on input events.
                     :on-change   #(dispatch [:on-update-field (.. % -target -value)])
                     :on-key-down #(when (-enter-key? %) (dispatch :on-add))}]])

; Top app component that is passed into connect function.
(defn view
  ; Destructure view model map for cleaner code in the function body.
  [{:keys [field has-todos? all-completed?
           ; ...
           ] :as _view-model}
   dispatch]
  [:section.todoapp
   ; Deref |field| reaction to get its value for rendering.
   ; Derefing also makes parent component start watching for |field| changes 
   ; so that -header will be re-rendered on |field| updates. 
   [-header @field dispatch]

   ; ...
   ]))
```
        
As you can see, we get reactions from a view model and deref them to render actual values.
Reagent will then "magically" re-render components when the reactions passed into them are updated.
  
## Usage with Figwheel
With [Figwheel](https://github.com/bhauman/lein-figwheel) Leiningen plugin it is possible to:

* compile and reload app code in browser on source code changes
* communicate with a running app via REPL

All the Carry [examples](/examples) use Figwheel for development builds and 
rely on the "bare" [lein-cljsbuild](https://github.com/emezeske/lein-cljsbuild) for production builds.

The main thing to remember is to stop the currently running app before hot reload 
in order to unsubscribe it from browser events and free memory.
Here's how you can structure your main app file to be used with Figwheel: 

```clj
(ns app.core
  (:require [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [reagent.core :as r]))

; ...

(defn main
  []
  (let [app (carry/app my-spec)
        [app-view-model app-view] (carry-reagent/connect app my-view-model my-view)]
    (r/render app-view (.getElementById js/document "root"))
    
    ; Start the app.
    ((:dispatch-signal app) :on-start)
    
    ; For debugging purposes add view-model into returned map.
    (assoc app :view-model app-view-model)))

; Start new app and save it into the global var for debugging in REPL.
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
; These functions should be specified in project.clj :figwheel map.

; Stop current app before loading a new one.
(defn before-jsload
  []
  ((:dispatch-signal app) :on-stop))

(defn on-jsload
  []
  #_(. js/console clear))
```  

# Advanced

## Middleware
**Middleware** is a function that gets an app spec and returns an updated spec
in order to introduce some new app behavior (such as logging, syncing with server, crash reporting).

>&#128172; Also see: [ready-to-use middleware packages](/index.html#middleware).

Multiple middleware can be applied in a chain to produce a new spec.
For instance, [TodoMVC](/examples/#todomvc) app spec is wrapped by three middleware:

```clj
(defn new-spec
  [history storage storage-key todo-titles]
  (-> {:initial-model (model/new-model todo-titles)
       :control       control
       :reconcile     reconcile}
       
      ; 1
      (schema/add model/Schema)

      ; 2
      (persistence/add storage storage-key {:blacklist #{::h/token}})

      ; 3
      (h/add history)))
```

As an example, this is a simple middleware which logs all actions and signals coming through an app:

```clj
(ns carry-logging.core)

(defn add
  "Will print all signals and actions to console."
  ([spec] (add spec ""))
  ([spec prefix]
   (-> spec
       ; Wrap control to log signals.
       (update :control (fn wrap-control [control]
                          (fn logged-control [model signal dispatch-signal dispatch-action]
                            (try
                              ; Log.
                              (.group js/console (str prefix "signal " (pr-str signal)))
                              
                              ; Call original function.
                              (control model signal dispatch-signal dispatch-action)

                              ; Always close the group.
                              (finally
                                (.groupEnd js/console))))))
                                
       ; Wrap reconcile to log actions.
       (update :reconcile
               (fn wrap-reconcile [reconcile]
                 (fn logged-reconcile [model action]
                   ; Log.
                   (.log js/console (str prefix "action") (pr-str action))
                   
                   ; Call original function.
                   (reconcile model action)))))))
```

More complex middleware can:
  
* Modify initial model.
* Intercept `:on-start`/`:on-stop` signals.
* Dispatch new signals and actions to an app.
By convention, they must use namespaced keywords (e.g. `:my-middlware.core/on-something`) to prevent a name clash with other signals.
* Dispatch own signals and actions which should not be handled by an app. They must also use namespaced keywords.
* Subscribe to model changes.
* Have injected dependencies.

All these cases are demonstrated by [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history) middleware:

```clj
(ns carry-history.core
  ; ...
)

(defn -wrap-initial-model
  [app-initial-model]
  (merge {::token "/"} app-initial-model))

; History will be injected on applying the middleware.
(defn -wrap-control
  [app-control history]
  (let [unlisten (atom nil)]
    (fn control
      [model signal dispatch-signal dispatch-action]
      (match signal
             ; Intercept :on-start signal.
             :on-start
             (do
               ; Let the wrapped app start first.
               (app-control model signal dispatch-signal dispatch-action)

               ; Start listening to model updates.
               (add-watch model ::token-watcher
                          (fn [_key _atom old-state new-state]
                            ; ...
                            ))
               
               ; Start listening to history events.
               (reset! unlisten
                       (listen history #(dispatch-signal [::on-history-event ; ...
                                                          ])))

               ; ...               
               )

      ; Intercept clean up signal.
      :on-stop
      (do
        ; Unsubscribe from history events. 
        ; Otherwise, on hot reload unused listeners will stay in memory.
        (@unlisten)
        
        ; There's no need to remove model watchers on hot reload 
        ; because they will be garbage-collected with the model.

        ; Let the wrapped app continue cleaning up.
        (app-control model signal dispatch-signal dispatch-action))

      ; Middleware-specific signal that will not be passed further to an app.
      [::on-history-event {:token token :browser-event? browser-event? :event-data event-data}]
      (do
        ; Dispatch a middleware-specific action.
        (dispatch-action [::set-token token])
      
        (when (or browser-event? (:treat-as-browser-event? event-data))
          ; Dispatch a signal to an app.
          (dispatch-signal [::on-enter token])))

      ; Pass other signals further.
      :else
      (app-control model signal dispatch-signal dispatch-action)))))
      
(defn -wrap-reconcile
  [app-reconcile]
  (fn reconcile
    [model action]
    (match action
           ; A middleware-specific action.
           [::set-token token]
           (assoc model ::token token)

           ; Pass other actions further.
           :else
           (app-reconcile model action))))

; History is an injected dependency.
(defn add
  [spec history]
  (-> spec
      (update :initial-model -wrap-initial-model)
      (update :control -wrap-control history)
      (update :reconcile -wrap-reconcile)))
```

## Debugger
One of the main features of Carry pattern is that it allows time traveling debugging
similar to [Elm's Debugger](http://debug.elm-lang.org/),
[Redux DevTools](https://github.com/gaearon/redux-devtools) and [Cerebral Debugger](http://www.cerebraljs.com/debugger).

Carry has its own visual time traveling debugger with next features:

* Debugger records all app signals and actions and shows them as a tree.
* A signal is displayed as a respective tree leaf if it's dispatched from inside another signal.
* Debugger records results of every action so that every past model value can be logged to console.
* Any action can be disabled/enabled. On toggling an action debugger will reset app model 
to its initial value and **replay** all enabled actions.
This way user can immediately see how the app would look like if the action never took place.
Action replaying is possible because actions are always pure and change app model in a predictable way.
On the other hand, it's impossible to predictably replay signals as they can perform async side effects.
* Clicking a signal toggles all its child actions.
* Clicking "Replay" button enables debugger's "replay mode" and marks already recorded actions as "to be replayed".
These actions are saved into local storage and will be automatically replayed on next app start.
In combination with Figwheel hot reloading this allows editing reconciler code
and immediately see how it affects a final app state (effectively "changing the past").
* Debugging session can be saved into a file and then loaded.
* "Clear" button removes all recorded signals and actions without modifying current app state.
* "Vacuum" removes all disabled actions and "dangling" signals without enabled actions.
* "Reset" resets an app to its initial state and clears recorded signals and actions.
* Currently debugger uses Reagent+jQuery UI to render a resizable overlay view.

<a href="http://i.imgur.com/ZOH6Noj.png">
  <img src="http://i.imgur.com/ZOH6Noj.png" alt="debugger" style="width: 50vw; display: block; margin: 0 auto;"/>
</a>
 
To use a debugger developer has to apply [carry-debugger](https://github.com/metametadata/carry/tree/master/contrib/debugger) middleware,
connect a debugger view and render it alongside an app view:

```clj
(ns app.core
  (:require [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [carry-debugger.core :as debugger]
            [reagent.core :as r]
            [hodgepodge.core :as hp]
            ; ...
            ))

; ...

(defn main
  []
  (let [; Use hodgepodge lib for dealing with browser's local storage.
        storage hp/local-storage
        
        ; Apply middleware.
        app-spec (-> my-spec
                     ; Middleware requires a storage and a unique storage key.
                     (debugger/add storage :my-debugger-model))
                     
        ; App and UI.
        app (carry/app app-spec)
        [_ app-view] (carry-reagent/connect app my-view-model my-view)
        
        ; Connect debugger UI.
        [_ debugger-view] (debugger/connect app)]
    ; Render app and debugger views.
    (r/render [:div app-view debugger-view] (.getElementById js/document "root"))
    
    ; Start.
    ((:dispatch-signal app) :on-start)
    
    ; ...
    ))
```

There are cases when you'd like to check if debugger is in replay mode.
For instance, [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history)
middleware doesn't send its initial `:on-enter` signal in replay mode.
Such behavior makes live coding more pleasant as developer expects only marked actions to be replayed on app start.
Debugger mode can be determined by looking at `[:carry-debugger.core/debugger :replay-mode?]` path in a model map:

```clj
(ns carry-history.core
  ; ...
  )

; ...

(defn -wrap-control
  [app-control history]
  (let [unlisten (atom nil)]
    (fn control
      [model signal dispatch-signal dispatch-action]
      (match signal
             :on-start
             (do
               (app-control model signal dispatch-signal dispatch-action)

               ; ...
               
               ; Check if we're in replay mode before sending an initial signal
               (when (not (-> @model :carry-debugger.core/debugger :replay-mode?))
                 (dispatch-signal [; ... 
                                   ])))
             ; ...
             ))))
; ...
```

## Unit Testing
It is comparatively easy to unit test a Carry app
with Reagent bindings because its behavior is implemented in four functions with explicit dependencies:
`control`, `reconcile`, `view-model`, `view`.

Let's look at how these functions are tested in
[friend-list](/examples/#friend-list) example:

**`1. (control [model signal dispatch-signal dispatch-action])`** 

Control function handles incoming signals to perform side effects, dispatch new signals and actions.
Such behavior is easy to test using [mock](https://en.wikipedia.org/wiki/Mock_object) functions.
This test uses [clj-fakes](https://github.com/metametadata/clj-fakes) 
isolation framework for recording and checking `dispatch-signal` and `dispatch-action` calls
on receiving `:on-enter` signal:

```clj
(ns unit.controller
  (:require
    [friend-list.core :as friend-list]
    [carry.core :as carry]
    [carry-history.core :as h]
    [cljs.test :refer-macros [deftest is testing]]
    [clj-fakes.core :as f :include-macros true]
    ;...
    ))

(deftest
  on-navigation-updates-query-and-searches
  (f/with-fakes
    (let [search (f/fake [[:_new-token f/any?] #(%2 :_found-friends)])
          {:keys [control]} (friend-list/new-spec :_history search)
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (control :_model [::h/on-enter :_new-token] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-called-once dispatch-action [[:set-query :_new-token]]))
      (is (f/was-called-once dispatch-signal [[:on-search-success :_new-token :_found-friends]])))))
```

&bull; Test is written using [Arrange-Act-Assert (AAA)](http://c2.com/cgi/wiki?ArrangeActAssert) pattern.
Comments are added to better separate these logical blocks.
 
&bull; Control function is taken from the spec created using public `friend-list/new-spec` function:

```clj
(let [; ...
      {:keys [control]} (friend-list/new-spec :_history search) ; ...
```

It could be tempting to instead test by using `friend-list/-new-control` helper function directly.
But accessing private members is a bad practice
and there can also be middleware applied inside `new-spec` which can affect the tested behavior.

&bull; Instead of using a real async API client we create a fake `search` 
function which synchronously returns the expected result and 
will throw an exception on calls with unexpected arguments:

```clj
(let [search (f/fake [[:_new-token f/any?] #(%2 :_found-friends)]) ; ...
```

&bull; Dynamic nature of ClojureScript allows us to use keywords (`:_history`, `:_found-friends`, `:_model`, `:_new_token`) instead
of creating objects of correct type
when we know that their type doesn't really matter in the test case.
It makes tests more focused and readable.

**`2. (reconcile [model action])`**

Reconciler is the easiest function to test because it's pure:

```clj
(deftest
  sets-query
  (let [{:keys [initial-model reconcile]} (friend-list/new-spec :_history :_search)]
    (is (= "new query"
           (:query (reconcile initial-model [:set-query "new query"]))))))
```

Here again we first create a spec in order to get `initial-model` value and `reconcile` function.

Notice, that it's impossible to use a `:_new_query` keyword because app uses 
[carry-schema](https://github.com/metametadata/carry/tree/master/contrib/schema)
middleware forcing us to use a string value `"new-query"` on reconciling.

**`3. (view-model [model])`**

These tests make sure that view model really contains Reagent reactions
at `:query` and `:friends` keys:

```clj
(ns unit.view-model
  (:require
    [friend-list.core :as friend-list]
    [reagent.core :as r]
    [schema-generators.generators :as g]
    [cljs.test :refer-macros [deftest is]])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn test-view-model-tracks-model-key
  [model-key act-action expected-view-model-value]
  (let [{:keys [initial-model reconcile]} (friend-list/new-spec :_history :_search)
        model (r/atom initial-model)
        view-model (friend-list/view-model model)
        witness (atom nil)]
    (is (contains? view-model model-key) "self-test")
    (run! (reset! witness @(model-key view-model)))

    ; act
    (swap! model reconcile act-action)

    ; force reaction updates
    (r/flush)

    ; assert
    (is (= expected-view-model-value @witness))))

(deftest
  tracks-query
  (test-view-model-tracks-model-key :query [:set-query "new query"] "new query"))
  
(deftest
  tracks-friends
  (let [new-friends (g/sample 3 friend-list/Friend)]
    (test-view-model-tracks-model-key :friends [:set-friends new-friends] new-friends)))
```
 
* `test-view-model-tracks-model-key` is a helper function.
* `r/flush` is needed because Reagent doesn't immediately propagate reaction updates (starting from v0.6.0).
* [schema-generators](https://github.com/plumatic/schema-generators) library is used to automatically generate
`new-friends` fixture instead of coding it by hand.

**`4. (view [view-model dispatch])`** (This section is a WIP.)

Unit testing this function is probably not critical because most error-prone UI
code is located in `view-model`.

## Composite Apps
Because Carry architecture is also based on functions (control, reconcile, view-model, view) 
which can be nested inside each other,
a pattern similar to [Elm architecture](https://github.com/evancz/elm-architecture-tutorial/) 
can be applied to build composite apps. A composite app incorporates instances of other Carry apps, but
still has a single model, controller and reconciler.

Though the idea is quite straightforward, it is a debatable design pattern because of the resulting code complexity,
so use it with caution.

Let's look at [elmish-counter-list](/examples/#counter-list) example.
In this project [counter apps](/examples/#counter) can be created and removed dynamically

>&#128172; For a simpler example of a "statically assembled" app please check [subapps](/examples/#subapps) project.

**`1. initial-model`**

The model will store a list of counter app models:

```clj
(def initial-model
  {; list of [id counter-model] vectors
   :counters (list)
   :next-id  0})
```

Several helpers are defined to modify a model:

```clj
(defn update-counters*
  "Applies a function of args [counter-model & args] to the counters specified by predicate.
  The function can have side-effects. Returns a new model."
  [model pred f & args]
  (letfn [(update-counter [[counter-id counter-model :as counter]]
            (if (pred counter)
              [counter-id (apply f counter-model args)]
              counter))]
    (update model :counters #(doall (map update-counter %)))))

(defn update-counter
  [model id f & args]
  (apply update-counters* model #(= id (first %)) f args))

(defn update-every-counter
  [model f & args]
  (apply update-counters* model (constantly true) f args))

(defn get-counter
  [model id]
  (->> (:counters model)
       (filter #(= (first %) id))
       first
       second))
```

**`2. view-model`**

The view model will contain a single `:counters` reaction with a list of `[id counter-view-model]` pairs:

```clj
#_(defn view-model
    "Naive nonoptimal implementation:
     counter view-models will be updated on every model update -> 
     every counter view will be reevaluated on each change."
    [model]
    {:counters (reaction (-> (update-every-counter @model #(counter/view-model (reaction %)))
                             :counters))})

(defn view-model
  "Optimized implementation. 
  Reuses counter view-models from the last reaction calculation."
  [model]
  (let [cached-counter-view-models (atom [])
        cached-counter-view-model (fn [id]
                                    (->> @cached-counter-view-models
                                         (filter #(= (first %) id))
                                         first
                                         second))
        counter-view-model (fn [id]
                             (or (cached-counter-view-model id)
                                 (counter/view-model (reaction (get-counter @model id)))))]
    {:counters (reaction (reset! cached-counter-view-models
                                 (mapv (fn [[id _]] [id (counter-view-model id)])
                                       (:counters @model))))}))
```

The optimized implementation calculates each counter view model only once.
So that existing counter views are not unnecessarily evaluated by Reagent
on every adding/removing of a single counter.

Note that, although `counter/view-model` expects a read-only ratom model,
it's also OK to pass it a ratom-like reaction object because we'll only need to create new reactions from it:

```clj
(counter/view-model (reaction (get-counter @model id))
```

**`3. view`**

```clj
(defn tagged
  "Helper function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))

(defn view-counter
  [[id view-model] dispatch]
  [counter/view view-model (tagged dispatch [:on-counter-signal id])])

(defn view
  [view-model dispatch]
  (let [counters (map #(view-counter % dispatch) @(:counters view-model))
        insert [:button {:on-click #(dispatch :on-insert)} "Insert"]
        remove [:button {:on-click #(dispatch :on-remove)} "Remove"]]
    (into [:div insert remove] counters)))
```

As you can see, `counter/view` is created for each counter and will dispatch its signals "tagged"
with a corresponding counter id.

**`4. controller`**

The controller will pass tagged signals to the injected counter controller.
In a more complex app we would also have to dispatch tagged `:on-start`/`:on-stop` signals
on inserting/removing subapps. But in this example we omit this because counter app has no start/stop code:

```clj
(defn new-control
  [counter-control]
  (fn control
    [model signal dispatch-signal dispatch-action]
    (match signal
           :on-insert (dispatch-action :insert)
           :on-remove (dispatch-action :remove)

           [[:on-counter-signal id] s]
           (counter-control (carry/entangle model #(get-counter % id))
                            s
                            ; Dispatched actions and signals must also be tagged:
                            (tagged dispatch-signal [:on-counter-signal id])
                            (tagged dispatch-action [:counter-action id])))))
```

Carry's `entangle` helper is used to create a counter model atom for `counter-control`.
This call returns a read-only atom which will automatically sync its value with
`(get-counter @model id)` on `model` changes:

```clj
(carry/entangle model #(get-counter % id))
```

Note that we can't use `reaction` instead of `entangle` because `counter-control`
can call `add-watch/remove-watch` on its model and reactions don't support watching in the same way as atoms.

**`5. reconciler`**

Reconciler depends on counter's initial model and reconciler:

```clj
(defn new-reconcile
  [counter-initial-model counter-reconcile]
  (fn reconcile
    [model action]
    (match action
           :insert
           (-> model
               (update :counters concat [[(:next-id model) counter-initial-model]])
               (update :next-id inc))

           :remove
           (update model :counters rest)

           [[:counter-action id] a]
           (update-counter model id counter-reconcile a))))
```

**`6. main`**

And finally, app instantiation code:

```clj
(ns app.core
  (:require [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [counter.core :as counter]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [reagent.ratom :refer [reaction]]))
  
; ...

(defn main
  []
  (let [app-spec {:initial-model initial-model
                  :control       (new-control (:control counter/spec))
                  :reconcile     (new-reconcile (:initial-model counter/spec) 
                                                (:reconcile counter/spec))}
        app (carry/app app-spec)
        [app-view-model app-view] (carry-reagent/connect app view-model view)]
    (r/render app-view (.getElementById js/document "root"))
    (assoc app :view-model app-view-model)))
    
(def app (main))
```

## Routing
It's not uncommon for applications to depend on a current URL and modify it in response to user actions.
For these tasks [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history) middleware
provides a bidirectional synchronization between a browser URL and a model:

* An app can react to URL changes by observing model's `:token` (token, roughly, is everything that goes after a hostname).
* If token in model is changed by an app then a browser will accordingly update its address bar.
This is especially useful during time traveling debugging as toggling token-changing actions will correctly update a URL.

Examples using the middleware:

* [Friend List](/examples/#friend-list) - in this application token is synced with current search query.
* [TodoMVC](/examples/#todomvc) - here [Silk](https://github.com/DomKM/silk) routing library is added to parse and build tokens.
 
An example of applying the middleware:

```clj
(ns app.core
  (:require [carry.core :as carry] 
            [carry-history.core :as h]
            ; ...
            ))

; ...

(let [history (h/new-hash-history)
      app-spec (-> my-spec
                   (h/add history))
      app (carry/app app-spec)
      ; ...]
    ((:dispatch-signal app) :on-start)
    ; ...
```

The middleware requires a [History API](https://developer.mozilla.org/en/docs/Web/API/History) 
wrapper to be provided.
Such object must satisfy [`HistoryProtocol`](/api/carry-history.core.html#var-HistoryProtocol)
and there are several constructors provided to create such instances:

* [`(new-legacy-hash-history)`](/api/carry-history.core.html#var-new-legacy-hash-history)

* [`(new-hash-history)`](/api/carry-history.core.html#var-new-hash-history)

* [`(new-history)`](/api/carry-history.core.html#var-new-history)

>&#128172; carry-history uses [Google Closure](https://github.com/clojure/clojurescript/wiki/Google-Closure#libraries)
library for interfacing with History API.

A wrapped app can now react to token changes:

```clj
(defn view-model
  [model]
  {:token (reaction (:carry-history.core/token @model))})
  
(defn view
  [{:keys [token] :as _view-model} dispatch]
  [:p "Current token = " (pr-str @token)])
```

It also becomes possible to react to token changes by handling `::on-enter` signal.
It will be dispatched on app start and on changes initiated by user actions (e.g. editing an address or clicking Back button):

```clj
(match signal
       [::h/on-enter token]
       (println "navigated to page at " (pr-str token))
 
       ; ...
```

Package's [`link`](/api/carry-history.core.html#var-link) Reagent component can be used to create in-app links which don't hit the server.
An example from [TodoMVC](/examples/#todomvc):

```clj
(defn -footer-filters
  [visibility-spec history]
  [:ul.filters
   (for [{:keys [title route selected?]} visibility-spec]
     ^{:key route}
     [:li [h/link history (router/route->token route)
           {:class (if selected? "selected")}
           title]])])
```

Please see [API reference](/api/carry-history.core.html) for more info.

## Usage with DataScript
See examples:

* [Counter DataScript](/examples/#counter-datascript)
* [Shopping Cart](/examples/#shopping-cart)