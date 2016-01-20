### [TodoMVC](http://todomvc.com/) using [Elm-ish architecture](https://github.com/evancz/elm-architecture-tutorial/) in ClojureScript using Reagent, core.match, Specter and hodgepodge.

[DEMO](http://metametadata.github.io/cljs-elmish-todomvc/)

It's a follow-up to [cljs-elmish-examples](https://github.com/metametadata/cljs-elmish-examples).

## Highlights
* Time traveling debugger (devtools) with persistence and ability to enable/disable any action (inspired by 
[redux-devtools](https://github.com/gaearon/redux-devtools)).
When devtools persistence is on, it replays previously saved actions on tab load. Try it with Figwheel hot reloading.
* In order to achieve better performance view-model now receives a model ratom and is expected to return Reagent reactions.
Previously the whole view was re-rendered on every model change, but now components are re-rendered only on changes 
to reaction values. Reactions are memoized and are able to observe one another preventing unnecessary recalculations.
This approach is borrowed from [re-frame](https://github.com/Day8/re-frame#subscribe).
* Model is persisted in local storage using persistence middleware.
* REPL can dispatch signals and actions to app:

```
cljs.user=> (ns prod.core)
prod.core=> ((:dispatch-signal app) :on-toggle-all)
...
    
prod.core=> ((:dispatch-action app) :toggle-all)
...
```

* Routing middleware syncs url bar with `(:frontend.routing/token model)`, in a sense, treating url bar as an "input".
* It's possible to change current URL from REPL:

```
prod.core=> (require 'frontend.routing)
prod.core=> ((:dispatch-signal app) [:frontend.routing/on-navigate "/completed"])
```

* It's possible to inspect the current state of view-model from REPL:

```
prod.core=> @(:visibility (:component-view-model (:view-model app)))
:completed
```

* Simple property-based tests are implemented to demonstrate that 
it's possible to generate "user" signals and check the properties of the view model (see `property-tests`);
 inspired by [om.next demo](https://github.com/omcljs/om/wiki/Applying-Property-Based-Testing-to-User-Interfaces).
 Also implemented is the "naive" stateful style test (see `stateful-property-tests`).

## Build

To get an interactive development environment run:

    lein figwheel
    
or better:
    
    rlwrap lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To run tests once:

    lein doo phantom test once
    
or quickly re-run on code changes:
    
    lein doo phantom test auto

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

To deploy a build:
 
    ghp-import -p resources/public
    
## References

* [TodoMVC in Elm](https://github.com/evancz/elm-todomvc)
* [TodoMVC using Reagent](https://github.com/tastejs/todomvc/tree/gh-pages/examples/reagent)
* [TodoMVC using re-frame](https://github.com/Day8/re-frame/tree/master/examples/todomvc)
* [TodoMVC using Redux](https://github.com/rackt/redux/tree/master/examples/todomvc)
* [DevTools for Redux](https://github.com/gaearon/redux-devtools)
* [cerebral.js debugger](https://chrome.google.com/webstore/detail/cerebral-debugger/ddefoknoniaeoikpgneklcbjlipfedbb?hl=en)