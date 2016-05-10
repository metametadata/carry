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

```cljs
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

Signal is an object which represents a user's intention or, looking at it from a different angle, an already happened event. 
Signal can be sent to an app by calling its `dispatch-signal` function:

```cljs
((:dispatch-signal my-app) my-signal)
```

Carry accepts signals of any type. But usually signal is a just keyword with the "on-" prefix or a vector with a keyword and an additional payload:

```cljs
:on-clear-completed
[:on-update-todo id val]
[:carry-history.core/on-enter token]
```

## Creating an App

In order to create an instance of a Carry app a user has to pass a **spec** into `app` function:

```cljs
(def my-app (carry/app my-spec))
```

A spec is a map with keys:

* `:initial-model` - an initial model value
* `:control` - a function for handling signals
* `:reconcile` - a function for handling actions

In other words, a spec is needed to define a runtime behavior of an app:

![spec](/graphs/spec-and-app.svg)

## Control
.

## Actions
.

## Reconcile
.

## Usage with Reagent
.

# Advanced

## Middleware
.

## Writing Tests
.

## Elm-ish Architecture
.

## Usage with Datascript
.

## Debugging
.
