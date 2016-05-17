All source code can be found in [the Github repository](https://github.com/metametadata/carry/tree/master/examples/).

All apps support hot reloading and REPL debugging via [Figwheel](https://github.com/bhauman/lein-figwheel).

# Counter Vanilla
[Source code](https://github.com/metametadata/carry/tree/master/examples/counter-vanilla)

[Demo](/examples/counter-vanilla)

The most trivial example. Uses "vanilla" JavaScript to render a UI.

# Counter
[Source code](https://github.com/metametadata/carry/tree/master/examples/counter)

[Demo](/examples/counter)

The basic example of using Carry with Reagent.

# Friend List

[Source code](https://github.com/metametadata/carry/tree/master/examples/friend-list)

[Demo](/examples/friend-list)

Inspired by this [problem](https://github.com/DerekCuevas/friend-list) about dynamic search input.
Demonstrates how to dispatch new signals from app controller and also features:

* basic routing
* model validation using [Schema](https://github.com/plumatic/schema)
* time traveling debugger
* logging to console
* unit tests

# TodoMVC
[Source code](https://github.com/metametadata/carry/tree/master/examples/todomvc)

[Demo](/examples/todomvc)

See [todomvc.com](http://todomvc.com/).

Features:

* routing using [Silk](https://github.com/DomKM/silk)
* local storage persistence
* time traveling debugger
* logging to console
* model validation using [Schema](https://github.com/plumatic/schema)
* uses [Specter](https://github.com/nathanmarz/specter) for model updates

# Counter with DataScript
[Source code](https://github.com/metametadata/carry/tree/master/examples/counter-datascript)

[Demo](/examples/counter-datascript)

Simplest example of using [DataScript](https://github.com/tonsky/datascript) in-memory database for a model.

# Shopping Cart
[Source code](https://github.com/metametadata/carry/tree/master/examples/shopping-cart)

[Demo](/examples/shopping-cart)

More advanced example of using [DataScript](https://github.com/tonsky/datascript).
Inspired by [flux-comparison](https://github.com/voronianski/flux-comparison) problem.

# Composite Apps

## Subapps
[Source code](https://github.com/metametadata/carry/tree/master/examples/elmish-subapps)

[Demo](/examples/elmish-subapps)

In this project [counter app](#counter) and [friend list app](#friend-list) instances are "statically" added to the app spec.
Several helper methods are extracted to make it easy to include any subapp at the time of app instantiation.

## Counter List
[Source code](https://github.com/metametadata/carry/tree/master/examples/elmish-counter-list)

[Demo](/examples/elmish-counter-list)

In this example [counter app](#counter) instances are created and removed dynamically after app is started.