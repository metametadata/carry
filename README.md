### [TodoMVC](http://todomvc.com/) using [Elm-ish architecture](https://github.com/evancz/elm-architecture-tutorial/) in ClojureScript using Reagent, core.match, Specter and hodgepodge.

[DEMO](http://metametadata.github.io/cljs-elmish-todomvc/)

It's a follow-up to [cljs-elmish-examples](https://github.com/metametadata/cljs-elmish-examples). 

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

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

To deploy a build:
 
    ghp-import -p resources/public

## References

* [Elm-ish architecture examples in ClojureScript](https://github.com/metametadata/cljs-elmish-examples)
* [TodoMVC in Elm](https://github.com/evancz/elm-todomvc)
* [TodoMVC using Reagent](https://github.com/tastejs/todomvc/tree/gh-pages/examples/reagent)