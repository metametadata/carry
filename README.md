# Carry

ClojureScript application framework.

[![Clojars Project](https://img.shields.io/clojars/v/carry.svg)](https://clojars.org/carry)

## Pattern
![pattern](http://metametadata.github.io/carry/graphs/pattern.svg)

## Documentation
More documentation can be found at [the project site](http://metametadata.github.io/carry/):

* [Intro](http://metametadata.github.io/carry)
* [Examples](http://metametadata.github.io/carry/examples/)
* [API Reference](http://metametadata.github.io/carry/api/)
* [Developer Guide](http://metametadata.github.io/carry/dev-guide/)

## Related projects 

### UI Bindings

* [Reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)

### Middleware

* [Debugger](https://github.com/metametadata/carry/tree/master/contrib/debugger)
* [History](https://github.com/metametadata/carry/tree/master/contrib/history)
* [Logging](https://github.com/metametadata/carry/tree/master/contrib/logging)
* [Persistence](https://github.com/metametadata/carry/tree/master/contrib/persistence)
* [Schema](https://github.com/metametadata/carry/tree/master/contrib/schema)

## Example - counter

[Source code](https://github.com/metametadata/carry/tree/master/examples/counter)

[Demo](https://metametadata.github.com/carry/examples/counter)

Spec and UI definition:

```cljs
(ns counter.core
  (:require [reagent.core]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [reagent.ratom :refer [reaction]]))

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

(def spec {:initial-model -initial-model
           :control       -control
           :reconcile     -reconcile})
```

Main:

```cljs
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

## License
Copyright © 2016 Yuri Govorushchenko.

Released under an MIT license.