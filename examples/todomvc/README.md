See [project site](https://metametadata.github.io/carry/examples/#todomvc) for more info.

## Build

To get an interactive development environment run (`rlwrap` is optional):

    rlwrap lein with-profile +local-deps figwheel local-deps
    
or, in case you'd like to fetch Carry from Clojars instead of using local repo code:

    rlwrap lein with-profile +clojars-deps figwheel clojars-deps

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

You can also directly access the app map:

    cljs.user=> (ns app.core)
    nil
    app.core=> (keys app)
    (:model :dispatch-signal :view-model)

Also, thanks to `carry-atom-sync` middleware, `model` helper atom is exposed in REPL and can be used to modify app model directly:

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

To clean all compiled files:

    lein clean

To create a production build run:

    lein with-profile +local-deps cljsbuild once min
    
or, using alias:
    
    lein cljsbuild-min
    
or, to compile using Carry from Clojars:

    lein with-profile +clojars-deps cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.