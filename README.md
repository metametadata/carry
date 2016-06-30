# Carry

ClojureScript single-page application framework inspired by
[re-frame](https://github.com/Day8/re-frame),
[Elm architecture](https://github.com/evancz/elm-architecture-tutorial/),
[Redux](https://github.com/reactjs/redux/) and
[Cerebral](https://github.com/cerebral/cerebral).

The core of the framework is a simple state management library. 
UI bindings, routing, debugger, etc. are implemented as separate optional [packages](#packages).

[![Clojars Project](https://img.shields.io/clojars/v/carry.svg)](https://clojars.org/carry)
[![Gitter](https://img.shields.io/gitter/room/metametadata/carry.svg?maxAge=2592000?style=plastic)](https://gitter.im/metametadata/carry)
[![Slack](https://img.shields.io/badge/chat-on_slack-brightgreen.svg?style=flat)](https://clojurians.slack.com/messages/carry/)

## Features

* Functional API with no globals makes apps easy to extend and unit test.
* Agnostic to UI layer: can be effectively used with [Reagent](https://github.com/reagent-project/reagent)
(via [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/) package) or
any other view layer that is able to re-render UI in response to app model changes.
* [Time traveling debugger](https://github.com/metametadata/carry/tree/master/contrib/debugger)
inspired by [Redux DevTools](https://github.com/gaearon/redux-devtools) and [Cerebral Debugger](http://www.cerebraljs.com/debugger).
* Live code editing using [Figwheel](https://github.com/bhauman/lein-figwheel) and debugger's replay mode.
* Fractality: [Elm-ish architecture](https://github.com/evancz/elm-architecture-tutorial/) can be applied to create composite apps.
* Core library can be also used in Clojure projects.

## Pattern
![pattern](http://metametadata.github.io/carry/graphs/pattern.svg)

* An app is defined by its initial model value, controller and reconciler.
* All app state is stored inside a single model atom.
* Anyone can read model value at any given time and subscribe to its changes.
* Controller function receives signals to perform side effects and dispatch actions.
* Anyone can dispatch a new signal: controller, views, timers, etc.
* Model can be modified only by dispatching actions.
* Only controller can dispatch actions.
* Reconciler is a pure function which returns a new model value based on an incoming action.
* When UI layer subscribes to model changes we get a unidirectional data flow: UI -> signal -> action -> model -> UI -> etc.

## Example (counter app)

[Demo](https://metametadata.github.com/carry/examples/counter),
[Source code](https://github.com/metametadata/carry/tree/master/examples/counter)

HTML:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Carry • Counter</title>
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
</head>
<body>
    <div id="root"></div>
    <script src="js/compiled/frontend.js" type="text/javascript"></script>
</body>
</html>
```

Main file:

```clj
(ns app.core
  (:require [counter.core :as counter]
            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [reagent.core :as r]))

(let [app (carry/app counter/spec)
      [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]
    (r/render app-view (.getElementById js/document "root"))
    ((:dispatch-signal app) :on-start))
```

UI (using [Reagent](https://github.com/reagent-project/reagent) and [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)):

```clj
(ns counter.core
  (:require [cljs.core.match :refer-macros [match]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn view-model
  [model]
  {:counter (reaction (str "#" (:val @model)))})

(defn view
  [{:keys [counter] :as _view-model} dispatch]
  [:p
   @counter " "
   [:button {:on-click #(dispatch :on-increment)} "+"] " "
   [:button {:on-click #(dispatch :on-decrement)} "-"] " "
   [:button {:on-click #(dispatch :on-increment-if-odd)} "Increment if odd"] " "
   [:button {:on-click #(dispatch :on-increment-async)} "Increment async"]])
```

Spec:

```clj
(def -initial-model {:val 0})

(defn -control
  [model signal _dispatch-signal dispatch-action]
  (match signal
         :on-start nil
         :on-stop nil

         :on-increment
         (dispatch-action :increment)

         :on-decrement
         (dispatch-action :decrement)

         :on-increment-if-odd
         (when (odd? (:val @model))
           (dispatch-action :increment))

         :on-increment-async
         (.setTimeout js/window #(dispatch-action :increment) 1000)))

(defn -reconcile
  [model action]
  (match action
         :increment (update model :val inc)
         :decrement (update model :val dec)))

(def spec {:initial-model -initial-model
           :control       -control
           :reconcile     -reconcile})
```

## Packages

### UI Bindings

* [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)

### Middleware

* [carry-atom-sync](https://github.com/metametadata/carry/tree/master/contrib/atom-sync)
* [carry-debugger](https://github.com/metametadata/carry/tree/master/contrib/debugger)
* [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history)
* [carry-logging](https://github.com/metametadata/carry/tree/master/contrib/logging)
* [carry-persistence](https://github.com/metametadata/carry/tree/master/contrib/persistence)
* [carry-schema](https://github.com/metametadata/carry/tree/master/contrib/schema)

## Documentation

More information can be found at [the project site](http://metametadata.github.io/carry/):

* [User Guide](http://metametadata.github.io/carry/user-guide/)
* [Examples](http://metametadata.github.io/carry/examples/)
* [API Reference](http://metametadata.github.io/carry/api/)
* [FAQ](http://metametadata.github.io/carry/faq/)
* [Developer Guide](http://metametadata.github.io/carry/dev-guide/)

## License
Copyright © 2016 Yuri Govorushchenko.

Released under an MIT license.