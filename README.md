# Carry

ClojureScript single-page application framework inspired by
[re-frame](https://github.com/Day8/re-frame),
[Elm Architecture](https://guide.elm-lang.org/architecture/),
[Redux](https://github.com/reactjs/redux/) and
[Cerebral](https://github.com/cerebral/cerebral).

Carry provides a structure for making GUI application code easier to modify, debug, test and be worked on by multiple programmers.

The core of the framework is a simple state management library. 
UI bindings, routing, debugger, etc. are implemented as separate optional [packages](#packages).

[![Clojars Project](https://img.shields.io/clojars/v/carry.svg)](https://clojars.org/carry)
[![Gitter](https://img.shields.io/gitter/room/metametadata/carry.svg?maxAge=2592000?style=plastic)](https://gitter.im/metametadata/carry)
[![Slack](https://img.shields.io/badge/chat-on_slack-brightgreen.svg?style=flat)](https://clojurians.slack.com/messages/carry/)

## Features

* Functional API without globals and macros.
* Agnostic to UI layer: can be effectively used with [Reagent](https://github.com/reagent-project/reagent)
(via [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/) package) or
any other view layer that is able to re-render UI in response to app model changes.
* [Time traveling debugger](https://github.com/metametadata/carry/tree/master/contrib/debugger)
inspired by [Redux DevTools](https://github.com/gaearon/redux-devtools) and [Cerebral Debugger](http://www.cerebraljs.com/documentation/the_debugger).
* Live code editing using [Figwheel](https://github.com/bhauman/lein-figwheel) and debugger's replay mode.
* Can work with [Devcards](https://github.com/bhauman/devcards).
* Core library can be also used in Clojure projects.

## Pattern
Carry enforces:

* Separation of presentation code.
* Events as first-class citizens.
* Splitting event handling code into side-effectful and "pure" model updating phases.
* Storing model in a single observable atom.

It also advises to decouple view and view model code in the presentation layer:

![pattern](http://metametadata.github.io/carry/graphs/pattern.svg)

* An app is defined by its initial model value, signal handler and action handler.
* All app state is stored inside a single model atom.
* Anyone can read model value at any given time and subscribe to its changes.
* Signal handler performs side effects and dispatches actions.
* Anyone can dispatch a new signal: signal handler, views, timers, etc.
* Typically UI layer dispatches signals on UI events and subscribes to model changes to redraw the GUI when needed.
* Model can be modified only by dispatching actions.
* Only signal handler can dispatch actions.
* Action handler is a pure function which returns a new model value based on an incoming action.  

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

(let [app (carry/app counter/blueprint)
      [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]
    (r/render app-view (.getElementById js/document "root"))
    ((:dispatch-signal app) :on-start))
```

UI (using [Reagent](https://github.com/reagent-project/reagent) and [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)):

```clj
(ns counter.core
  (:require [cljs.core.match :refer-macros [match]]
            [reagent.ratom :refer [reaction]]))

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

Blueprint:

```clj
(def -initial-model {:val 0})

(defn -on-signal
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

(defn -on-action
  [model action]
  (match action
         :increment (update model :val inc)
         :decrement (update model :val dec)))

(def blueprint {:initial-model -initial-model
                :on-signal     -on-signal
                :on-action     -on-action})
```

## Packages

### UI Bindings

* [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)
(bindings for [Reagent](https://github.com/reagent-project/reagent))

### Middleware

* [carry-atom-sync](https://github.com/metametadata/carry/tree/master/contrib/atom-sync)
(creating a bidirectional sync between an app model and a specified atom-like reference)
* [carry-debugger](https://github.com/metametadata/carry/tree/master/contrib/debugger)
(time traveling debugger)
* [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history)
(working with browser history)
* [carry-logging](https://github.com/metametadata/carry/tree/master/contrib/logging)
(console logging)
* [carry-persistence](https://github.com/metametadata/carry/tree/master/contrib/persistence)
(automatic model saving/loading using browser storage)
* [carry-schema](https://github.com/metametadata/carry/tree/master/contrib/schema)
(model validation using [Schema](https://github.com/plumatic/schema))

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