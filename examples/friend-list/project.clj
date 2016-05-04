(defproject
  friend-list "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]

                 [reagent "0.6.0-SNAPSHOT" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "15.0.2-0"]

                 ; required by carry-debugger:
                 [com.rpl/specter "0.10.0"]
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
                        :source-paths ["src"
                                       "src-spec"
                                       "../../src"
                                       "../../contrib/reagent/src"
                                       "../../contrib/history/src"
                                       "../../contrib/schema/src"
                                       "../../contrib/logging/src"
                                       "../../contrib/debugger/src"]
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
                        :source-paths ["src"
                                       "src-spec"
                                       "../../src"
                                       "../../contrib/reagent/src"
                                       "../../contrib/history/src"
                                       "../../contrib/schema/src"
                                       "../../contrib/logging/src"
                                       "../../contrib/debugger/src"]
                        :compiler     {:main           app.core
                                       :output-to      "resources/public/js/compiled/frontend.js"
                                       :optimizations  :advanced
                                       :pretty-print   false
                                       :compiler-stats true
                                       :parallel-build false}}

                       {:id           "test"
                        :source-paths ["test"
                                       "src"
                                       "src-spec"
                                       "../../src"
                                       "../../contrib/reagent/src"
                                       "../../contrib/history/src"
                                       "../../contrib/schema/src"
                                       "../../contrib/logging/src"
                                       "../../contrib/debugger/src"]
                        :compiler     {:main          'unit.runner
                                       :output-to     "resources/private/js/compiled/testable.js"
                                       :output-dir    "resources/private/js/compiled/out"
                                       :optimizations :none}}]})
