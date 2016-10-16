# Basic

Carry is actually a [very small](https://github.com/metametadata/carry/blob/master/src/carry/core.cljc)
Clojure/ClojureScript state management library which provides a skeleton for the whole application.
 
The library is distributed via [Clojars](http://clojars.org/carry) and has no dependencies.

All the additional features (debugging, UI binding, etc.) are not part of the core project
and can be provided by third-party packages. [Some of them](/index.html#packages) are already implemented
and hosted in Carry repo [contrib folder](https://github.com/metametadata/carry/tree/master/contrib).
Most of these packages are implemented using [Carry middleware pattern](#middleware).

The private/internal API uses `-` prefix and should not be used (e.g. `-this-is-some-private-thing`).

## App

In a Carry application all the code you write is encapsulated behind a single **app** instance. 
An app is a map with keys:

* `:model` - an in-memory representation of an app state
* `:dispatch-signal` - a function for interaction with an app

One can consider an app to be a black box which exposes its current state and modifies it on getting signals from an external world.
It can also affect an external world as a response to a signal, i.e. perform "side effects".

## Model

Model represents an entire state of an app. 
 
One can access app's model via `:model` key to obtain an object that can be dereferenced and watched.
An exception will be thrown on mutating such read-only reference:

```clj
(def my-model (:model my-app))

; Dereference to get model value.
@my-model
;=> {...}

; Start reacting to model changes.
(add-watch my-model :my-watch
           (fn [_key _ref old-state new-state]
             (when (not= old-state new-state)
               (println "model value has changed!"))))
               
((:dispatch-signal my-app) some-model-changing-signal)
;=> model value has changed!

; Stop watching.
(remove-watch my-model :my-watch)
               
; It's impossible to directly mutate a model.
(reset! my-model {:foo :bar})
;=> Error: ...
```

Carry requires a model value to be a map. This convention allows writing reusable packages that can store additional data into any Carry app.
As an example, [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history) adds `:token` to a model.

## Signals

**Signal** is an object which represents a user's intention or, looking at it from a different angle, a system event. 
Signal can be synchronously sent to an app by calling its `dispatch-signal` function:

```clj
((:dispatch-signal my-app) my-signal)
```

`dispatch-signal` always returns `nil`.

Carry accepts signals of any type. But usually signal is a just keyword with "on-" prefix or
a serializable vector with a keyword and an additional payload:

```clj
:on-clear-completed
[:on-update-todo id val]
[:carry-history.core/on-enter token]
```

Using prefixes is recommended because it helps distinguish signal names from action names.

## Creating an App

In order to create an instance of a Carry app a user has to pass a **blueprint** into `app` function:

```clj
(let [my-app (carry/app my-blueprint)]
  ; ...
  )
```

A blueprint is a map with keys:

* `:initial-model` - an initial model value
* `:on-signal` - a function for handling signals
* `:on-action` - a function for handling actions

In other words, a blueprint is needed to define a runtime behavior of an app:

![blueprint](/graphs/blueprint-and-app.svg)

## Signal Handler
**Signal handler** is a part of an application responsible for processing incoming signals. 
It can dispatch new signals, modify app model (by dispatching actions) and perform any side effects (e.g. send data to a server).
It is free to contain an asynchronous code. The signature of a signal handler function:

```clj
(defn on-signal
  [model signal dispatch-signal dispatch-action])
```

* `model` - a read-only reference, the same as app's `:model`
* `signal` - an incoming signal 
* `dispatch-signal` - a synchronous function for dispatching new signals, always returns `nil`, the same as app's `:dispatch-signal`
* `dispatch-action` - a synchronous function for modifying a model, always returns `nil`
* return value will not be used

By convention, signal handler should be able to at least handle `:on-start` and `:on-stop` signals.
As we'll see later, it's required by middleware with setup/teardown logic and to support hot reloading.

It is convenient (but not required) to use [pattern matching](https://github.com/clojure/core.match) 
to switch between signals and destructure signals with payload.
As an example, this is a handler from [friend-list](/examples/#friend-list) demo app:

```clj
(ns friend-list.core
  (:require [carry-history.core :as h]
            ; ...
            [goog.functions :refer [debounce]]
            [cljs.core.match :refer-macros [match]]))

; It's recommended to create a factory function if signal handler uses external dependencies.
; It makes code more decoupled and 
; easier to unit test (stubs/mocks can be easily used instead of real implementations).
; In this example browser history manager and API client are external dependencies.
(defn -new-on-signal
  [history api-search]
  ; Some helper functions.
  ; On successful search a new :on-search-success signal will be dispatched.
  (let [search (fn [q dispatch-signal] (api-search q #(dispatch-signal [:on-search-success q %])))
        search-on-input (debounce (fn [q dispatch-signal]
                                    (h/push-token history q)
                                    (search q dispatch-signal))
                                  300)]
    ; Function name is specified for better stacktraces.
    (fn on-signal
      [model signal dispatch-signal dispatch-action]
      (match signal
             ; This application has no custom setup/teardown logic
             ; so just return nil on standard signals:             
             :on-start nil
             :on-stop nil

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

; Dependencies will be injected in a blueprint factory function:
(defn new-blueprint
  [history api-search]
  {; ...
   :on-signal (-new-on-signal history api-search)})
   
; ...

; Create and start an app using concrete dependencies.
(def my-app (carry/app (new-blueprint my-history my-api-client)))
((:dispatch-signal app) :on-start)
```

## Actions
**Action** is an object which represents an intention to modify a model.
Actions can be dispatched only from within a signal handler via `dispatch-action`.

Similar to signals, actions are usually keywords or vectors, for instance:

```clj
:increment
[:set-query q]
```

## Action Handler
**Action handler** is a part of an application responsible for processing incoming actions.
It's a pure function which returns a new model value based on a current model value and an incoming action.
On getting an action an app passes it into a action handler and then resets app model value with the result.

A simple example from [friend-list](/examples/#friend-list) demo app:

```clj
(defn -on-action
  [model action]
  (match action
         [:set-query q]
         (assoc model :query q)

         [:set-friends friends]
         (assoc model :friends friends)))
```

It's important to not put any asynchronous code, side effects or nondeterministic code (e.g. random number generation)
into action handler. Otherwise, it will make replaying actions unpredictable and break time traveling debugging.

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
      app (carry/app my-blueprint)
      
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
* returns a pair `[view-model-instance view-component]` (view model is returned mainly for debugging)

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
            [carry-reagent.core :as carry-reagent]
            [reagent.ratom :refer [reaction]]))

(defn view-model
  [model]
  (let [; ...
        ; Wrap todo items in a reaction.
        all-todos (reaction (:todos @model))]
    (-> model
        ; This helper function call will return {:field (reaction (:field @model))} map
        ; (:field contains the value of a new todo input field).
        (carry-reagent/track-keys [:field])
        
        ; Additional view model fields are reactions 
        ; which will be recalculated if (and only if) all-todos value changes:
        (assoc :has-todos? (reaction (-> @all-todos count pos?))
               :all-completed? (reaction (every? :completed? @all-todos))
               ; ...
               ))))
```

Argument `model` is a **Reagent reaction** that tracks app model changes.
Reaction is a special reference-like object that is created using Reagent's `reaction` macro.
It is lazily computed from other reactions and Reagent atoms
(see [official documentation](http://reagent-project.github.io) for more information about Reagent atoms).
Any Reagent component that dereferences a reaction is going to be automatically re-rendered when reaction value updates.

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
  
## Usage with Figwheel and REPL
With [Figwheel](https://github.com/bhauman/lein-figwheel) Leiningen plugin it is possible to:

* compile and reload app code in browser on source code changes
* communicate with a running app via REPL

Most of Carry [examples](/examples) use Figwheel for development builds and 
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
  (let [app (carry/app my-blueprint)
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

To get an interactive development environment run:

```
lein figwheel
```
    
or better:

```
rlwrap lein figwheel
```

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

```
(js/alert "Am I connected?")
```

and you should see an alert in the browser window.

You can also directly access `app` map from REPL:

```
cljs.user=> (ns app.core)
nil

app.core=> (keys app)
(:model :dispatch-signal :view-model)

app.core=> @(:model app)
{...}

app.core=> ((:dispatch-signal app) :on-increment)
nil
```

You may also want to directly modify the app model in REPL without dispatching signals/actions.
This can be achieved by using [carry-atom-sync](https://github.com/metametadata/carry/tree/master/contrib/atom-sync) middleware
to create a helper "model atom" specifically for debugging in REPL. An example from [TodoMVC](/examples/#todomvc):

```clj
(ns app.core
  (:require [app.blueprint :as blueprint]
            [carry-atom-sync.core :as atom-sync]
            ; ...
            )) 
; ...

; "Model atom" exposed for debugging in REPL.
(def model (atom nil))

(defn main
  []
  (let [blueprint (-> (blueprint/new-blueprint ...)
                       ; ...
                       ; Apply middleware to setup a sync with "model atom".
                       (atom-sync/add model))
        app (carry/app blueprint)
        ; ...
        ]
    ; ...
    ((:dispatch-signal app) :on-start)
    ; ...
    ))

; ...
```

Now after app is started you can directly work with app model via `model` atom in REPL:

```
app.core=> (cljs.pprint/pprint (dissoc @model :carry-debugger.core/debugger))
{:field "",
 :todos
 ({:id 0,
   :title "Finish this project",
   :completed? false,
   :original-title "",
   :editing? false}
  {:id 1,
   :title "Take a bath",
   :completed? true,
   :original-title "",
   :editing? false}), 
 :next-id 2, 
 :carry-history.core/token ""}

app.core=> (swap! model assoc :field "foobar")
{:field "foobar", ...}

app.core=> (= @model @(:model app))
true
```

# Advanced

## Middleware
**Middleware** is a function that gets an app blueprint and returns an updated blueprint
in order to introduce some new app behavior (such as logging, syncing with server, crash reporting).

>&#128172; Also see: [ready-to-use middleware packages](/index.html#middleware).

Multiple middleware can be applied in a chain to produce a new blueprint.
For instance, [TodoMVC](/examples/#todomvc) app blueprint is wrapped by three middleware:

```clj
(defn new-blueprint
  [history storage storage-key todo-titles]
  (-> {:initial-model (model/new-model todo-titles)
       :on-signal     on-signal
       :on-action     on-action}
       
      ; 1
      (schema/add model/Schema)

      ; 2
      (persistence/add storage storage-key {:blacklist #{::h/token}})

      ; 3
      (h/add history)))
```

An order in which middleware are applied matters. One can think of it as an onion: each middleware is a layer that wraps a blueprint
and handles bypassing signals and actions:

![middleware](/graphs/middleware.svg)

As an example, this is a simple middleware which logs all actions and signals coming through an app:

```clj
(ns carry-logging.core
  (:require))

(defn add
  "Will print all signals and actions to console using the specified prefix string."
  ([blueprint] (add blueprint ""))
  ([blueprint prefix]
   (-> blueprint
       ; Wrap signal handler to log signals.
       (update :on-signal
               (fn wrap-on-signal [app-on-signal]
                 (fn on-signal [model signal dispatch-signal dispatch-action]
                   (try
                     ; Log.
                     (.group js/console (str prefix "signal " (pr-str signal)))
                     
                     ; Let app handle the signal.
                     (app-on-signal model signal dispatch-signal dispatch-action)

                     ; this clause guarantees that group is closed even in case of exception
                     (finally
                       (.groupEnd js/console))))))
                       
       ; Wrap action handler to log actions.
       (update :on-action
               (fn wrap-on-action [app-on-action]
                 (fn on-action [model action]
                   ; Log.
                   (.log js/console (str prefix "action") (pr-str action))
                   
                   ; Let app handle the action.
                   (app-on-action model action)))))))
```

More complex middleware can:
  
* Modify initial model.
* Intercept `:on-start`/`:on-stop` signals.
* Dispatch new signals and actions to an app.
By convention, they must use namespaced keywords (e.g. `:my-middlware.core/on-something`) to prevent a name clash with other signals.
* Dispatch "own" signals and actions (also namespaced) which should not be handled by a wrapped app.
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
(defn -wrap-on-signal
  [app-on-signal history]
  (let [unlisten (atom nil)]
    (fn on-signal
      [model signal dispatch-signal dispatch-action]
      (match signal
             ; Intercept :on-start signal.
             :on-start
             (do
               ; Let the wrapped app start first.
               (app-on-signal model signal dispatch-signal dispatch-action)

               ; Start listening to model updates.
               (add-watch model ::token-watch
                          (fn [_key _ref old-state new-state]
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
        
        ; There's no need to remove model watches on hot reload 
        ; because they will be garbage-collected with the model.

        ; Let the wrapped app continue cleaning up.
        (app-on-signal model signal dispatch-signal dispatch-action))

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
      (app-on-signal model signal dispatch-signal dispatch-action)))))
      
(defn -wrap-on-action
  [app-on-action]
  (fn on-action
    [model action]
    (match action
           ; A middleware-specific action.
           [::set-token token]
           (assoc model ::token token)

           ; Pass other actions further.
           :else
           (app-on-action model action))))

; History is an injected dependency.
(defn add
  [blueprint history]
  (-> blueprint
      (update :initial-model -wrap-initial-model)
      (update :on-signal -wrap-on-signal history)
      (update :on-action -wrap-on-action)))
```

Especially note how `:on-start`/`:on-stop` signals are intercepted:

* The middleware let's the wrapped app start first and then runs its own additional initialization code.
* The order is "reversed" on stopping: the middleware first cleans up after itself and only then let's the wrapped app shutdown.

## Debugger
One of the main features of Carry pattern is that it allows time traveling debugging
similar to [Elm's Debugger](http://debug.elm-lang.org/),
[Redux DevTools](https://github.com/gaearon/redux-devtools) and [Cerebral Debugger](http://www.cerebraljs.com/documentation/the_debugger).

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
In combination with Figwheel hot reloading this allows editing action handling code
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
        app-blueprint (-> my-blueprint
                          ; Middleware requires a storage and a unique storage key.
                          (debugger/add storage :my-debugger-model))
                     
        ; App and UI.
        app (carry/app app-blueprint)
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

For correct rendering debugger also requires jQuery UI CSS to be injected into HTML.
Please see [API reference](/api/debugger/carry-debugger.core.html#var-connect) for more info.

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

(defn -wrap-on-signal
  [app-on-signal history]
  (let [unlisten (atom nil)]
    (fn on-signal
      [model signal dispatch-signal dispatch-action]
      (match signal
             :on-start
             (do
               (app-on-signal model signal dispatch-signal dispatch-action)

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
`on-signal`, `on-action`, `view-model`, `view`.

Let's look at how these functions are tested in
[friend-list](/examples/#friend-list) example:

<h3>on-signal</h3>
 
```clj
(on-signal model signal dispatch-signal dispatch-action)
```

Signal handler receives incoming signals to perform side effects, dispatch new signals and actions.
Such behavior is easy to test using [mock](https://en.wikipedia.org/wiki/Mock_object) functions.
This test uses [clj-fakes](https://github.com/metametadata/clj-fakes) 
isolation framework for recording and checking `dispatch-signal` and `dispatch-action` calls
on receiving `:on-enter` signal:

```clj
(ns unit.signals
  (:require
    [friend-list.core :as friend-list]
    [carry.core :as carry]
    [carry-history.core :as h]
    [clojure.test :refer [deftest is testing]]
    [clj-fakes.core :as f]
    ;...
    ))
    
(deftest
  on-navigation-updates-query-and-searches
  (f/with-fakes
    (let [search (f/fake [[:_new-token (f/arg ifn?)] #(%2 :_found-friends)])
          {:keys [on-signal]} (friend-list/new-blueprint :_history search)
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (on-signal :_model [::h/on-enter :_new-token] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-called-once dispatch-action [[:set-query :_new-token]]))
      (is (f/was-called-once dispatch-signal [[:on-search-success :_new-token :_found-friends]])))))
```

* Test is written using [Arrange-Act-Assert (AAA)](http://c2.com/cgi/wiki?ArrangeActAssert) pattern.
Comments are added to better separate these logical blocks.
 
* Signal handler is taken from the blueprint created by `friend-list/new-blueprint`.
It could be tempting to instead test by using `friend-list/-new-on-signal` helper function.
But accessing private members is a bad practice
and there can also be middleware applied inside `new-blueprint` which can affect the tested behavior. Thus:

```clj
{:keys [on-signal]} (friend-list/new-blueprint :_history search)
```

* Instead of using a real async API client we create a fake `search` 
function which synchronously returns the expected result and 
will throw an exception on calls with unexpected arguments:

```clj
search (f/fake [[:_new-token (f/arg ifn?)] #(%2 :_found-friends)])
```

* Dynamic nature of ClojureScript allows us to use keywords (`:_history`, `:_found-friends`, `:_model`, `:_new_token`) instead
of creating objects of correct type when we know that their type doesn't really matter in the test case.
It makes tests more focused and readable.
This technique is similar to [using metaconstants in Midje](https://github.com/marick/Midje/wiki/Metaconstants).

<h3>on-action</h3>

```clj
(on-action model action)
```

Action handler is the easiest function to test because it's pure:

```clj
(deftest
  sets-query
  (let [{:keys [initial-model on-action]} (friend-list/new-blueprint :_history :_search)]
    (is (= "new query"
           (:query (on-action initial-model [:set-query "new query"]))))))
```

Here again we first create a blueprint in order to get `initial-model` value and `on-action` function.

Notice that it's impossible to use `:_new_query` "metaconstant" because app uses 
[carry-schema](https://github.com/metametadata/carry/tree/master/contrib/schema)
middleware forcing us to use a string value `"new-query"` on action handling.

<h3>view-model</h3>

```clj
(view-model model)
```

These tests make sure that view model really contains Reagent reactions
at `:query` and `:friends` keys:

```clj
(ns unit.view-model
  (:require
    [friend-list.core :as friend-list]
    [reagent.core :as r]
    [reagent.ratom :refer [run! reaction]]
    [schema-generators.generators :as g]
    [clojure.test :refer [deftest is]]))

(defn test-view-model-tracks-model-key
  [model-key action expected-view-model-value]
  (let [{:keys [initial-model on-action]} (friend-list/new-blueprint :_history :_search)
        model (r/atom initial-model)
        view-model (friend-list/view-model (reaction @model))
        witness (atom nil)]
    (is (contains? view-model model-key) "self-test")
    (run! (reset! witness @(model-key view-model)))

    ; act
    (swap! model on-action action)

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

<h3>view</h3>

```clj
(view view-model dispatch)
```
 
(This section is a WIP.)

Unit testing this function is probably not critical because most error-prone UI
code is located in `view-model`.

## Routing
It's not uncommon for applications to depend on a current URL and modify it in response to user actions.
For these tasks [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history) middleware
provides a bidirectional synchronization between a browser URL and a model:

* An app can react to URL changes by observing model's `:token` (token, roughly, is everything that goes after a hostname).
* If token in model is changed by an app then a browser will accordingly update its address bar.
This is especially useful during time traveling debugging as toggling token-changing actions will correctly update a URL.

>&#128172; Examples:
>
>* [Friend List](/examples/#friend-list) - in this application a token is synced with a search query.
>* [TodoMVC](/examples/#todomvc) - here [Silk](https://github.com/DomKM/silk) routing library is added to parse and build tokens.
 
Use [`add`](/api/history/carry-history.core.html#var-add) to apply the middleware
and don't forget to start the app:

```clj
(ns app.core
  (:require [carry.core :as carry] 
            [carry-history.core :as h]
            ; ...
            ))

; ...

(let [history (h/new-hash-history)
      app-blueprint (-> my-blueprint
                        (h/add history))
      app (carry/app app-blueprint)
      ; ...
      ]
    ((:dispatch-signal app) :on-start)
    ; ...
```

The middleware requires a [History API](https://developer.mozilla.org/en/docs/Web/API/History) 
wrapper to be provided.
Such object must satisfy [`HistoryProtocol`](/api/history/carry-history.core.html#var-HistoryProtocol)
and there are several constructors for creating such instances:

* [`(new-legacy-hash-history)`](/api/history/carry-history.core.html#var-new-legacy-hash-history)

* [`(new-hash-history)`](/api/history/carry-history.core.html#var-new-hash-history)

* [`(new-history)`](/api/history/carry-history.core.html#var-new-history)

>&#128172; carry-history uses [Google Closure](https://github.com/clojure/clojurescript/wiki/Google-Closure#libraries)
library for interfacing with History API.

A wrapped app can now react to token changes:

```clj
(defn view-model
  [model]
  {:token (reaction (::h/token @model))})
  
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

Package's [`link`](/api/history/carry-history.core.html#var-link) Reagent component can be used to create in-app links which don't hit the server.
An example from [TodoMVC](/examples/#todomvc):

```clj
(defn -footer-filters
  [visibility-config history]
  [:ul.filters
   (for [{:keys [title route selected?]} visibility-config]
     ^{:key route}
     [:li [h/link history (router/route->token route)
           {:class (if selected? "selected")}
           title]])])
```

Please see [API reference](/api/history/carry-history.core.html) for more info.

## Usage with DataScript
See examples:

* [Counter DataScript](/examples/#counter-datascript)
* [Shopping Cart](/examples/#shopping-cart)

## Usage with Devcards
This section describes how to make Carry work with [Devcards](https://github.com/bhauman/devcards) for a "visual REPL experience".
Further I assume you have a basic understanding of Devcards and I won't focus on why it's needed, installation details, etc.
We'll see how to render Carry/Reagent app instances inside cards.

>&#128172; This chapter is based on [counter-devcards](/examples/#counter-devcards) example project.

This is a simplest card for the app which uses `carry-reagent` for UI:

<a href="http://i.imgur.com/5li8ITB.png">
  <img src="http://i.imgur.com/5li8ITB.png" alt="debugger" style="width: 50vw; display: block; margin: 0 auto;"/>
</a>

```clj
(ns app.core
  (:require [counter.core :as counter]
            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [reagent.core :as r]
            [devcards.core :refer-macros [defcard-rg]]))

; ...

(defcard-rg
  counter
  (let [app (carry/app counter/blueprint)
        [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]
    app-view))
```

Here `defcard-rg` macro is used to render an app Reagent component.
On hot reload (e.g. via Figwheel) a new app will be created from scratch.

This example lacks dispatching standard `:on-start`/`:on-stop` signals, let's fix this:

```clj
(defn -with-mount-callbacks
  [_component on-did-mount on-will-unmount]
  (r/create-class {:reagent-render         (fn [component _on-did-mount _on-will-unmount] component)
                   :component-did-mount    (fn [_this] (on-did-mount))
                   :component-will-unmount (fn [_this] (on-will-unmount))}))

(defcard-rg
  counter
  (let [app (carry/app (-> counter/blueprint
                           (logging/add "[counter] ")))
        [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]

    [-with-mount-callbacks
     app-view
     #((:dispatch-signal app) :on-start)
     #((:dispatch-signal app) :on-stop)]))
```

A helper Reagent component `-with-mount-callbacks` is created for starting the app after mounting and for stopping the app
when the card component is going to unmount on hot reload. 

Devcards also has an ability to display a simple time traveling "history" widget to go back and forward between recorded
component state values ([demo](http://rigsomelight.com/devcards/#!/devdemos.core)):

<a href="http://i.imgur.com/E9iAXU3.png">
  <img src="http://i.imgur.com/E9iAXU3.png" alt="debugger" style="width: 15vw; display: block; margin: 0 auto;"/>
</a>

```clj
(defcard bmi-calculator                        ;; optional symbol name
  "*Code taken from Reagent readme.*"          ;; optional markdown doc
  (fn [data-atom _] (bmi-component data-atom)) ;; object of focus
  {:height 180 :weight 80}                     ;; optional initial data
  {:inspect-data true :history true})          ;; optional devcard config options
```

It doesn't work out out-of-box with Carry because a Carry app has no ability to expose its underlying model atom to a card.
To solve this we use [carry-atom-sync](https://github.com/metametadata/carry/tree/master/contrib/atom-sync) middleware
which creates a bidirectionally sync between the "data atom" created by Devcards and an app model:

<a href="http://i.imgur.com/5F2sD9A.png">
  <img src="http://i.imgur.com/5F2sD9A.png" alt="debugger" style="width: 50vw; display: block; margin: 0 auto;"/>
</a>

```clj
(ns app.core
  (:require [counter.core :as counter]
            [carry.core :as carry]
            [carry-atom-sync.core :as carry-atom-sync]
            [carry-reagent.core :as carry-reagent]
            [cljs.core.match :refer-macros [match]]
            [devcards.core :refer-macros [defcard-rg]]))
  
; ...

(defcard-rg
  counter-with-history
  "Preserves model value between hot reloads."
  (fn [data-atom _]
    ; Create app instance.
    (let [app (carry/app (-> counter/blueprint

                             ; Get model value from data atom.
                             (assoc :initial-model @data-atom)

                             ; Setup bidirectional sync with data atom.
                             (carry-atom-sync/add data-atom)

                             (logging/add "[counter-with-history] ")))
          [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]
      ; Render app view.
      [-with-mount-callbacks
       app-view

       ; Start the app after mounting.
       #((:dispatch-signal app) :on-start)

       ; Stop the app on umount/hot-reload.
       #((:dispatch-signal app) :on-stop)]))

  ; Create data atom with initial model value.
  (atom (:initial-model counter/blueprint))

  ; Card options.
  {:inspect-data true
   :history      true})
```

What's happening here:

1. A new app instance is created on each hot reload.
2. The data atom is created once and then conveniently preserves its value between hot reloads.
3. On creation an app takes its initial value from the data atom.
4. On UI interactions all app model updates are propagated into the data atom enlarging the card's history stack.
5. On clicking history widget buttons the data atom is updated and its new values are synced back into the app model. 
 
Of course, if a lot of cards are created like this then extracting a 
helper macro or function should be considered in order to reduce code duplication.

Note that we must start the app only after mounting.
Otherwise, starting app synchronously in a card function will produce
a *"setState(...): Cannot update during an existing state transition"* warning on hot reloads
(because `carry-atom-sync` middleware resets `data-atom`):

```clj
(defcard-rg
  counter-with-history
  (fn [data-atom _]
   ; ...
   
   ; Will produce a warning:
   ((:dispatch-signal app) :on-start)   
      
   [-with-mount-callbacks
    app-view
    ; ...
    ])
    
   ; ...
  )
```

## File Structure

As an application grows it starts making sense to organize its code using folders and files.
Let's look at some examples of organizing a source folder.

<h3>Split by "Layer"</h3>

```plain
app/
  model.cljs <-- initial model and its schema
  signals.cljs <-- signal handler
  actions.cljs <-- action handler
  view_model.cljs
  view.cljs
  core.cljs
```

Cons:

* It doesn't work well for several developers working on new features because everyone will touch most layers
leading to frequent merge conflicts.
* With time it will become harder to navigate the codebase with a few big files.

So the next step could be splitting each layer by feature and using folders:

```plain
app/
  signals/
    foo.cljs
    bar.cljs
  actions/
    foo.cljs
    bar.cljs
  ...
  core.cljs
```

This way a developer working on *foo* feature will have less VCS conflicts with a developer working on *bar*.
    
<h3>Split by "Feature"</h3>

Here *Foo* and *Bar* can correspond to application screens,
business logic domains or even single use cases
(take a look at ["Screaming Architecture"](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html)):

```plain
app/
  foo.cljs <-- signals, actions and UI for Foo
  bar.cljs <-- signals, actions and UI for Bar
  core.cljs
```

Later we can split every feature by layer for easier navigation, e.g.:

```plain
app/
  foo/
    model.cljs
    signals.cljs
    actions.cljs
    view_model.cljs
    view.cljs
  bar/
    model.cljs
    signals.cljs
    actions.cljs
    view_model.cljs
    view.cljs
  core.cljs
```

You may also make coarser splits if layers are relatively small, for instance:

```plain
app/
  foo/
    logic.cljs <-- signals, actions and model go here
    ui.cljs <-- view and view-model go here
  bar/
    logic.cljs
    ui.cljs
  core.cljs
```

<h3>Conclusion</h3>

There are many ways to organize Carry application code and it's up to you to choose what works best for your project.

## Blueprint Splitting

Let's take the project structure example mentioned earlier:

```plain
app/
  foo/
    model.cljs
    signals.cljs
    actions.cljs
    view_model.cljs
    view.cljs
  bar/
    model.cljs
    signals.cljs
    actions.cljs
    view_model.cljs
    view.cljs
  core.cljs
```

How to define a single Carry blueprint from the code scattered over all these files?
It is simple to merge all initial models to get a full model,
but there can be different ways to assemble handler functions:

```clj
(def blueprint {:initial-model (merge app.foo.model/initial-model
                                 app.bar.model/initial-model)
                :signal-halder ??? 
                :action-handler ???}
```

There are two conceptual ways of splitting a handler:

* At a level of "cases" (signals/actions):

```plain
app/
  foo/
    signals.cljs <-- handles signals :on-a, :on-b
  bar/
    signals.cljs <-- handles signals :on-c, :on-d
```

* Code for each individual signal/action can also be split between files:

```plain
app/
  foo/
    signals.cljs <-- handles :on-a and partially :on-b
  bar/
    signals.cljs <-- handles :on-c, :on-d and partially :on-b
```

Which approach is better? There's no definite answer. For instance, take a look at the discussions about the similar problem in Flux/Redux:

* [Problems with Flux](http://www.code-experience.com/problems-with-flux/)
* [Redux issue #1400](https://github.com/reactjs/redux/issues/1400#issuecomment-184406378)

We'll see how to implement the first, stricter and simpler, approach and 
leave implementing the second approach as an exercise to the reader.

<h3>HOF</h3>

One of the solutions is to use a higher-order function (HOF) `dispatching-to-either`
which will assemble a handler (see [example](/examples/#blueprint-splitting-hof)):

```clj
(ns app.utils)

(defn dispatching-to-either
  "Returns a function of any args which calls functions one by one while :cant-handle is returned."
  [fns]
  (fn dispatching-to-either-fn [& args]
    (loop [f (first fns)
           next-fns (rest fns)]
      (when (nil? f)
        (throw (ex-info (str "No function was able to handle passed args: " (pr-str args))
                        {})))

      (let [result (apply f args)]
        (if (= result :cant-handle)
          (recur (first next-fns) (rest next-fns))
          result)))))
```

```clj
(ns app.common.signals
  (:require [cljs.core.match :refer-macros [match]]))

(defn on-signal
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         :on-start nil
         :on-stop nil
         :on-home (dispatch-action [:navigate :home])
         :on-settings (dispatch-action [:navigate :settings])
         :else :cant-handle))
```

```clj
(ns app.home.signals
  (:require [cljs.core.match :refer-macros [match]]))

(defn on-signal
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         :on-click (dispatch-action :click)
         :else :cant-handle))
```

```clj
(ns app.blueprint
  (:require [app.common.model]
            [app.common.signals]
            [app.common.actions]

            [app.home.model]
            [app.home.signals]
            [app.home.actions]

            [app.settings.model]
            [app.settings.signals]
            [app.settings.actions]

            [app.utils]))

(def blueprint {:initial-model (merge app.common.model/initial-model
                                      app.home.model/initial-model
                                      app.settings.model/initial-model)
                :on-signal     (app.utils/dispatching-to-either #{app.common.signals/on-signal
                                                                  app.home.signals/on-signal
                                                                  app.settings.signals/on-signal})
                :on-action     (app.utils/dispatching-to-either #{app.common.actions/on-action
                                                                  app.home.actions/on-action
                                                                  app.settings.actions/on-action})})
```

The drawback of this solution is that a blueprint must be edited every time a new handler file is added.

<h3>Multimethods</h3>

Multimethods can help by allowing to not type the names of all the handlers manually (see [example](/examples/#blueprint-splitting-multimethods)):

```clj
(ns app.blueprint
  (:require [app.common.model]
            [app.common.actions]
            [app.common.signals]

            [app.home.model]
            [app.home.actions]
            [app.home.signals]

            [app.settings.model]
            [app.settings.actions]
            [app.settings.signals]

            [app.blueprint-methods]))

(def blueprint {:initial-model (merge app.common.model/initial-model
                                      app.home.model/initial-model
                                      app.settings.model/initial-model)
                                      
                ; Voilà:
                :on-signal     app.blueprint-methods/on-signal
                :on-action     app.blueprint-methods/on-action})
```

```clj
(ns app.common.signals
  (:require [app.blueprint-methods :refer [on-signal]]))

(defmethod on-signal :on-start
  [_model _ _dispatch-signal _dispatch-action]
  nil)

(defmethod on-signal :on-stop
  [_model _ _dispatch-signal _dispatch-action]
  nil)

(defmethod on-signal :on-home
  [_model _ _dispatch-signal dispatch-action]
  (dispatch-action [:navigate :home]))

(defmethod on-signal :on-settings
  [_model _ _dispatch-signal dispatch-action]
  (dispatch-action [:navigate :settings]))
```

```clj
(ns app.common.actions
  (:require [app.blueprint-methods :refer [on-action]]))

(defmethod on-action :navigate
  [model [_ pane]]
  (assoc model :pane pane))
```

```clj
(ns app.blueprint-methods)

(defn -tag
  "Returns a tag of a variant (read http://jneen.net/posts/2014-11-23-clojure-conj-variants-errata). Examples:
  [:foo :bar] -> :foo
  [:foo] -> :foo
  :foo -> :foo"
  [variant]
  (if (sequential? variant)
    (first variant)
    variant))

(defmulti on-signal (fn [_model signal _dispatch-signal _dispatch-action]
                      (-tag signal)))

(defmulti on-action (fn [_model action]
                      (-tag action)))
```

Unfortunately, now there's more cruft in handler files. It's especially obvious in `app.common.signals` listing.

<h3>Multimethods and core.match</h3>

Let's try to reduce boilerplate by grouping events with the same namespace and using `core.match`
(see [example](/examples/#blueprint-splitting-multimethods-core-match)):

```clj
(ns app.blueprint-methods)

(defn -tag-ns
  "Returns variant tag's namespace string. Examples:
  [:a/foo :bar] -> \"a\"
  [:a/foo] -> \"a\"
  :a/foo -> \"a\"
  :foo -> nil"
  [variant]
  (-> (if (sequential? variant)
        (first variant)
        variant)
      namespace))

(defmulti on-signal (fn [_model signal _dispatch-signal _dispatch-action]
                      (-tag-ns signal)))

(defmulti on-action (fn [_model action]
                      (-tag-ns action)))
```

```clj
(ns app.common.signals
  (:require [app.blueprint-methods :refer [on-signal]]
            [cljs.core.match :refer-macros [match]]))

; Standard signals have no namespace.
(defmethod on-signal nil
  [_model signal _dispatch-signal _dispatch-action]
  (match signal
         :on-start nil
         :on-stop nil))
         
(defmethod on-signal (namespace ::_) ; <-- Note the trick for getting current ns name.
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         ::on-home (dispatch-action [:app.common.actions/navigate :home])
         ::on-settings (dispatch-action [:app.common.actions/navigate :settings])))
```

```clj
(ns app.common.actions
  (:require [app.blueprint-methods :refer [on-action]]
            [cljs.core.match :refer-macros [match]]))

(defmethod on-action (namespace ::_)
  [model action]
  (match action
         [::navigate pane] (assoc model :pane pane)))
```

All signals and actions must be namespaced now.

<h3>Multimethods and Macros</h3>

As an alternative, instead of grouping we could use macros to simplify method definitions:

```clj
(ns app.common.actions
  (:require ,,,))

; Macro which allows destructuring the event variant without repeating it in the arglist.
; Inspired by http://jneen.net/posts/2014-11-23-clojure-conj-variants-errata
(defcase on-action [:navigate pane]
  [model]
  (assoc model :pane pane))
```

```clj
(ns app.common.signals
  (:require ,,,))

(defcase on-signal :on-start
  [_model _dispatch-signal _dispatch-action]
  nil)

(defcase on-signal :on-stop
  [_model _dispatch-signal _dispatch-action]
  nil)

(defcase on-signal :on-home
  [_model _dispatch-signal dispatch-action]
  (dispatch-action [:navigate :home]))

(defcase on-signal :on-settings
  [_model _dispatch-signal dispatch-action]
  (dispatch-action [:navigate :settings]))
```

<h3>Conclusion</h3>

We've covered several ways of assembling handler functions from multiple files:

* `dispatching-to-either` helper ([example](/examples/#blueprint-splitting-hof))
* multimethods for individual events ([example](/examples/#blueprint-splitting-multimethods))
* multimethods for groups of events ([example](/examples/#blueprint-splitting-multimethods-core-match))
* macros on top of multimethods

The takeaway is that handlers are just functions and you can refactor them in any way you want.

## Composite Apps 

Because Carry architecture is based on functions which can be nested inside each other,
it is possible to build composite apps reusing existing apps. A composite app incorporates codebases of other Carry apps, but
still has a single model, signal handler and action handler.

Though the idea is quite straightforward, it is a debatable design pattern because of the resulting code complexity,
so use it with caution.
 
> ⚠ **Update (2016-10-13)**: the pattern described in this chapter was heavily inspired by Elm Architecture
([v0.16 tutorial](https://github.com/evancz/elm-architecture-tutorial/tree/de5682a5a8e4459aed4637533adb25e462f8a2ae)).
But as of Elm v0.17 this "parent/child communication" approach is no longer encouraged in Elm community: 
*flat is better than nested*, so most of the time it's preferred to partition functions between files
instead of extracting "encapsulated" model/view/update triplets. 
> 
> Read more here:
>
> * [Discussion: Design of Large Elm apps](https://groups.google.com/forum/#!topic/elm-discuss/_cfOu88oCx4) and
especially [this message](https://groups.google.com/d/msg/elm-discuss/_cfOu88oCx4/madaA1rBAQAJ)
> * [Discussion: Do the counters in the Guide teach us a wrong scaling approach?](https://groups.google.com/forum/#!topic/elm-discuss/lC4FwHSPUA0)
> * [Elm Guide: Scaling The Elm Architecture](https://guide.elm-lang.org/reuse/)
>
> This proves my initial sentiment about the complexity of the pattern.
> Anyway, for educational purposes the chapter is going to stay in this guide.

Let's look at [counter-list](/examples/#counter-list) example.

>&#128172; For a simpler example of a "statically assembled" app please check [subapps](/examples/#subapps) project.

In this project [counter apps](/examples/#counter) can be created and removed dynamically:

<a href="http://i.imgur.com/9CNw0ZW.png">
  <img src="http://i.imgur.com/9CNw0ZW.png" alt="counter-list" style="width: 25vw; display: block; margin: 0 auto;"/>
</a>

[carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/) package will be used for UI rendering.

<h3>initial-model</h3>

The model will store a list of counter app models:

```clj
(ns app.model)

(def initial-model
  {; unsorted map: id -> counter-model
   :counters {}})
```

<h3>view-model</h3>

The view model will contain `:counters` reaction with a sorted map of `[id counter-view-model]` pairs:

```clj
(ns app.view-model
  (:require [counter.core :as counter]
            [reagent.core :as r]
            [reagent.ratom :refer [reaction]]))

;(defn view-model
;  "Naive nonoptimal implementation:
;   counter view-models will be updated on every model update ->
;    every counter view will be reevaluated on each change."
;  [model]
;  (let [counter-view-model (fn [id]
;                             (counter/view-model
;                               (reaction (get-in @model [:counters id]))))]
;    {:counters (reaction (into (sorted-map)
;                               (for [[id _] (:counters @model)]
;                                 [id (counter-view-model id)])))}))

(defn view-model
  "Optimized implementation. Reuses counter view-models from the last reaction calculation."
  [model]
  (let [counter-view-models (atom (sorted-map))             ; id -> counter-view-model
        counter-view-model (fn [id]
                             (or (get @counter-view-models id)
                                 (counter/view-model
                                   (reaction (get-in @model [:counters id])))))]
    {:counters (reaction (reset! counter-view-models
                                 (into (sorted-map)
                                       (for [[id _] (:counters @model)]
                                         [id (counter-view-model id)]))))}))
```

The optimized implementation calculates each counter view model only once.
So that all existing counter views are not unnecessarily evaluated by Reagent
on updating a single counter.

Note how Reagent's `reaction` macro is used to create a counter model reaction for `counter/view-model`:

```clj
(reaction (get-in @model [:counters id]))
```

<h3>view</h3>

```clj
(ns app.util)

(defn tagged
  "Helper function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))
```

```clj
(ns app.view
  (:require [app.util :refer [tagged]]
            [counter.core :as counter]))

(defn -counter
  [[id view-model] dispatch]
  [counter/view view-model (tagged dispatch [:on-counter-signal id])])

(defn view
  [view-model dispatch]
  (let [counters (map #(-counter % dispatch) @(:counters view-model))
        insert [:button {:on-click #(dispatch :on-insert)} "Insert"]
        remove [:button {:on-click #(dispatch :on-remove)} "Remove"]]
    (into [:div insert remove] counters)))
```

As you can see, `counter/view` is created for each counter and will dispatch its signals "tagged"
with a corresponding counter id.

<h3>on-signal</h3>

The signal handler will let the individual counter handle the incoming signal.
In a more complex app we would also have to dispatch tagged `:on-start`/`:on-stop` signals
on inserting/removing subapps. But in this example we omit this because counter app has no start/stop code:

```clj
(ns app.signals
  (:require [app.util :refer [tagged]]
            [counter.core :as counter]
            [carry.core :as carry]
            [cljs.core.match :refer-macros [match]]))

(defn on-signal
  [model signal dispatch-signal dispatch-action]
  (match signal         
         :on-insert (dispatch-action :insert)
         :on-remove (dispatch-action :remove)

         [[:on-counter-signal id] s]
         ((:on-signal counter/blueprint)
           (carry/entangle model #(get-in % [:counters id]))
           s
           (tagged dispatch-signal [:on-counter-signal id])
           (tagged dispatch-action [:counter-action id]))))
```

Carry's [`entangle`](/api/carry.core.html#var-entangle) helper is used to create a counter model for passing into counter signal handler.
This call returns a read-only reference object which will automatically sync its value with
`(get-in @model [:counters id])` on `model` changes:

```clj
(carry/entangle model #(get-in % [:counters id]))
```

<h3>on-action</h3>

Action handler uses counter's initial model and action handler:

```clj       
(ns app.actions
  (:require [counter.core :as counter]
            [cljs.core.match :refer-macros [match]]))

(defn on-action
  [model action]
  (match action
         :insert
         (let [newest-counter-id (apply max -1 (-> model :counters keys))]
           (assoc-in model [:counters (inc newest-counter-id)] (:initial-model counter/blueprint)))

         :remove
         (let [oldest-counter-id (apply min (-> model :counters keys))]
           (update model :counters dissoc oldest-counter-id))

         [[:counter-action id] a]
         (update-in model [:counters id] (:on-action counter/blueprint) a)))
```

<h3>blueprint</h3>

Let's define a blueprint in a separate namespace:

```clj
(ns app.blueprint
  (:require [app.model :refer [initial-model]]
            [app.signals :refer [on-signal]]
            [app.actions :refer [on-action]]))

(def blueprint
  {:initial-model initial-model
   :on-signal     on-signal
   :on-action     on-action})
```

<h3>main</h3>

And finally, here's the app instantiation code:

```clj
(ns app.core
  (:require [app.blueprint :refer [blueprint]]
            [app.view-model :refer [view-model]]
            [app.view :refer [view]]
            
            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            
            [reagent.core :as r]))

(defn main
  []
  (let [app (carry/app blueprint)
        [app-view-model app-view] (carry-reagent/connect app view-model view)]
    (r/render app-view (.getElementById js/document "root"))
    (assoc app :view-model app-view-model)))

(def app (main))
```