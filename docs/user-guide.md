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
Controller is free to contain asynchronous code. The signature of a control function:

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

![pattern](http://metametadata.github.io/carry/graphs/pattern.svg)

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
; A plain Reagent component which is redrawn when input args change.
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

All the Carry [examples](/examples) use it for development builds.

The main thing to remember is to stop the currently running app before hot reload 
in order to unsubscribe it from browser events and free memory.
Here's how you can structure your main app file to be used with Figwheel: 

```cljs
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

```cljs
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

Also see: [ready-to-use middleware packages](/index.html#middleware).

## Writing Tests
This section is a WIP. Please see examples in a meantime.

## Elm-ish Architecture
This section is a WIP. Please see examples in a meantime.

## Usage with Datascript
This section is a WIP. Please see examples in a meantime.

## Debugging
This section is a WIP. Please see examples in a meantime.

## Routing
This section is a WIP. Please see examples in a meantime.