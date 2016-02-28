(defproject
  counter-datascript "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]

                 [reagent "0.5.1" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.13.3-0"]

                 [org.clojure/core.match "0.3.0-alpha4"]

                 [datascript "0.15.0"]]

  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-6" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/private" "target"]

  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src" "../../src"]
                        :compiler     {:main                 app.core
                                       :asset-path           "js/compiled/out"
                                       :output-to            "resources/public/js/compiled/frontend.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :source-map-timestamp true
                                       :compiler-stats       true
                                       :parallel-build       true}
                        :figwheel     {:on-jsload     "app.core/on-jsload"
                                       :before-jsload "app.core/before-jsload"}}

                       {:id           "min"
                        :source-paths ["src" "../../src"]
                        :compiler     {:main           app.core
                                       :output-to      "resources/public/js/compiled/frontend.js"
                                       :optimizations  :advanced
                                       :pretty-print   false
                                       :compiler-stats true
                                       :parallel-build true}}]}

  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             ;; :css-dirs ["resources/public/css"]             ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
