(defproject
  elmish-subapps "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]

                 [reagent "0.6.0-alpha" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.14.3-0"]

                 ; required by carry-devtools:
                 [com.rpl/specter "0.10.0"]
                 [funcool/hodgepodge "0.1.4"]
                 [prismatic/schema "1.1.0"]
                 [cljsjs/jquery-ui "1.11.4-0"]
                 [cljsjs/filesaverjs "1.1.20151003-0"]
                 [binaryage/devtools "0.6.1"]

                 [org.clojure/core.match "0.3.0-alpha4"]]

  :pedantic? :abort

  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-6" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/private" "target"]

  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src"
                                       "../../src"
                                       "../counter/src-spec"
                                       "../friend-list/src-spec"
                                       "../../contrib/schema/src"
                                       "../../contrib/history/src"
                                       "../../contrib/logging/src"]
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
                        :source-paths ["src"
                                       "../../src"
                                       "../counter/src-spec"
                                       "../friend-list/src-spec"
                                       "../../contrib/schema/src"
                                       "../../contrib/history/src"
                                       "../../contrib/logging/src"]
                        :compiler     {:main           app.core
                                       :output-to      "resources/public/js/compiled/frontend.js"
                                       :optimizations  :advanced
                                       :pretty-print   false
                                       :compiler-stats true
                                       :parallel-build true}}]})
