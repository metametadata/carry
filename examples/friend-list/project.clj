(defproject
  friend-list "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.40"]

                 [reagent "0.6.0-alpha" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.14.3-0"]

                 ; required by carry-devtools:
                 [com.rpl/specter "0.9.3"]
                 [funcool/hodgepodge "0.1.4"]
                 [prismatic/schema "1.1.0"]
                 [cljsjs/jquery-ui "1.11.4-0"]
                 [cljsjs/filesaverjs "1.1.20151003-0"]
                 [binaryage/devtools "0.6.1"]

                 [org.clojure/core.match "0.3.0-alpha4"]

                 ; for tests
                 [clj-fakes "0.4.0"]
                 [prismatic/schema-generators "0.1.0"]]

  :pedantic? :abort

  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-6" :exclusions [org.clojure/clojure]]
            [lein-doo "0.1.6"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/private" "target"]

  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src" "src-spec" "../../src" "../_common" "../../contrib/devtools/src"]
                        :compiler     {:main                 app.core
                                       :asset-path           "js/compiled/out"
                                       :output-to            "resources/public/js/compiled/frontend.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :source-map-timestamp true
                                       :compiler-stats       true
                                       :parallel-build       false}
                        :figwheel     {:on-jsload     "app.core/on-jsload"
                                       :before-jsload "app.core/before-jsload"}}

                       {:id           "min"
                        :source-paths ["src" "src-spec" "../../src" "../_common" "../../contrib/devtools/src"]
                        :compiler     {:main           app.core
                                       :output-to      "resources/public/js/compiled/frontend.js"
                                       :optimizations  :advanced
                                       :pretty-print   false
                                       :compiler-stats true
                                       :parallel-build false}}

                       {:id           "test"
                        :source-paths ["src" "src-spec" "../../src" "../_common" "../../contrib/devtools/src" "test"]
                        :compiler     {:main          'unit.runner
                                       :output-to     "resources/private/js/compiled/testable.js"
                                       :output-dir    "resources/private/js/compiled/out"
                                       :optimizations :none}}]}

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
