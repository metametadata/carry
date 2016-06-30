Most apps support hot reloading and REPL debugging via [Figwheel](https://github.com/bhauman/lein-figwheel).

# Counter Vanilla
[Source code](https://github.com/metametadata/carry/tree/master/examples/counter-vanilla)

[Demo](/examples/counter-vanilla)

The most trivial example. Uses "vanilla" JavaScript to render a UI.

# Counter
[Source code](https://github.com/metametadata/carry/tree/master/examples/counter)

[Demo](/examples/counter)

The basic example of using Carry with [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)
for rendering UI using [Reagent](https://github.com/reagent-project/reagent).

# Friend List

[Source code](https://github.com/metametadata/carry/tree/master/examples/friend-list)

[Demo](/examples/friend-list)

Inspired by this [problem](https://github.com/DerekCuevas/friend-list) about dynamic search input.
Demonstrates how to dispatch new signals from app controller and also features:

* [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)
for rendering UI using [Reagent](https://github.com/reagent-project/reagent)
* [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history/) for routing
* [carry-schema](https://github.com/metametadata/carry/tree/master/contrib/schema/) for model validation using [Schema](https://github.com/plumatic/schema)
* [carry-debugger](https://github.com/metametadata/carry/tree/master/contrib/debugger/) for time traveling debugging
* [carry-logging](https://github.com/metametadata/carry/tree/master/contrib/logging/) for logging to console
* unit tests

# TodoMVC
[Source code](https://github.com/metametadata/carry/tree/master/examples/todomvc)

[Demo](/examples/todomvc)

The implementation of [TodoMVC](http://todomvc.com/) reference example.

Features:

* [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)
for rendering UI using [Reagent](https://github.com/reagent-project/reagent)
* [carry-history](https://github.com/metametadata/carry/tree/master/contrib/history/) and [Silk](https://github.com/DomKM/silk) for routing
* [carry-persistence](https://github.com/metametadata/carry/tree/master/contrib/persistence/) and [hodgepodge](https://github.com/funcool/hodgepodge) for local storage persistence
* [carry-schema](https://github.com/metametadata/carry/tree/master/contrib/schema/) for model validation using [Schema](https://github.com/plumatic/schema)
* [carry-debugger](https://github.com/metametadata/carry/tree/master/contrib/debugger/) for time traveling debugging
* [carry-logging](https://github.com/metametadata/carry/tree/master/contrib/logging/) for logging to console
* uses [Specter](https://github.com/nathanmarz/specter) for model updates
* [carry-atom-sync](https://github.com/metametadata/carry/tree/master/contrib/atom-sync) to directly access app model as an atom in REPL

# Pickings
[Source code](https://github.com/metametadata/pickings)

The small desktop app using Carry.

Features:

* written in Clojure
* [Seesaw](https://github.com/daveray/seesaw) for UI
* [reloaded workflow](http://thinkrelevance.com/blog/2013/06/04/clojure-workflow-reloaded) for easier running from REPL

# Composite Apps

## Subapps
[Source code](https://github.com/metametadata/carry/tree/master/examples/subapps)

[Demo](/examples/subapps)

In this project [counter app](#counter) and [friend list app](#friend-list) instances are "statically" added to the app spec.
Several helper methods are extracted to make it easy to include any subapp at the time of app instantiation.

## Counter List
[Source code](https://github.com/metametadata/carry/tree/master/examples/counter-list)

[Demo](/examples/counter-list)

In this example [counter app](#counter) instances are created and removed dynamically after app is started.
Inspired by [Elm architecture example](http://guide.elm-lang.org/architecture/modularity/counter_list.html).

# Apps Using DataScript

## Counter DataScript
[Source code](https://github.com/metametadata/carry/tree/master/examples/counter-datascript)

[Demo](/examples/counter-datascript)

The simplest example of using [DataScript](https://github.com/tonsky/datascript) in-memory database for a model and 
[carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)
for rendering UI using [Reagent](https://github.com/reagent-project/reagent).

## Shopping Cart
[Source code](https://github.com/metametadata/carry/tree/master/examples/shopping-cart)

[Demo](/examples/shopping-cart)

The more advanced example of using [DataScript](https://github.com/tonsky/datascript) 
and [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/).
Inspired by [flux-comparison](https://github.com/voronianski/flux-comparison) problem.

# Counter Devcards
[Source code](https://github.com/metametadata/carry/tree/master/examples/counter-devcards)

[Demo](/examples/counter-devcards)

An example of rendering [counter app](#counter) in [Devcards](https://github.com/bhauman/devcards).

Features:

* [carry-atom-sync](https://github.com/metametadata/carry/tree/master/contrib/atom-sync) for making Devcards history work seamlessly with Carry
* [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/)
for rendering UI using [Reagent](https://github.com/reagent-project/reagent) 
* [carry-logging](https://github.com/metametadata/carry/tree/master/contrib/logging/) for logging to console