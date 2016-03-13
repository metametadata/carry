All source code can be found in [the Github repository](https://github.com/metametadata/reagent-mvsa/tree/master/examples/).

All apps support hot reloading and REPL debugging via [Figwheel](https://github.com/bhauman/lein-figwheel).

# TodoMVC
[Source code](https://github.com/metametadata/reagent-mvsa/tree/master/examples/todomvc)

[Demo](/examples/todomvc)

See [todomvc.com](http://todomvc.com/).

Features:

* extensive use of middleware pattern
* routing
* local storage persistence
* time travel debugger
* logging to console
* model validation using [Schema](https://github.com/plumatic/schema)
* uses [Specter](https://github.com/nathanmarz/specter) for model updates

# Counter
[Source code](https://github.com/metametadata/reagent-mvsa/tree/master/examples/counter)

[Demo](/examples/counter)

The most trivial example.

# Counter with DataScript
[Source code](https://github.com/metametadata/reagent-mvsa/tree/master/examples/counter-datascript)

[Demo](/examples/counter-datascript)

Simplest example of using [DataScript](https://github.com/tonsky/datascript) in-memory database for a model.

# Shopping Cart
[Source code](https://github.com/metametadata/reagent-mvsa/tree/master/examples/shopping-cart)

[Demo](/examples/shopping-cart)

More advanced example of using [DataScript](https://github.com/tonsky/datascript).
Inspired by [flux-comparison](https://github.com/voronianski/flux-comparison) problem.

# Friend List

[Source code](https://github.com/metametadata/reagent-mvsa/tree/master/examples/friend-list)

[Demo](/examples/friend-list)

Inspired by this [problem](https://github.com/DerekCuevas/friend-list) about dynamic search input.
Demonstrates how to dispatch new signals from app controller and also features:

* routing
* time travel debugger
* logging to console

# Elm-ish Counter List
[Source code](https://github.com/metametadata/reagent-mvsa/tree/master/examples/elmish-counter-list)

[Demo](/examples/elmish-counter-list)

The proof-of-concept example of applying [Elm-ish architecture](https://github.com/evancz/elm-architecture-tutorial/)
for reusing existing reagent-mvsa apps when building a bigger app.
In this project [counter app](#counter) instances are created and removed dynamically.
It's a debatable design pattern because of the resulting code complexity, so use it with caution.
