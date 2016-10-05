(defproject
  counter-devcards "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]

                 [reagent "0.6.0" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "15.3.1-0"]

                 [org.clojure/core.match "0.3.0-alpha4"]

                 [devcards "0.2.2" :exclusions [cljsjs/react cljsjs/react-dom org.clojure/tools.analyzer.jvm]]]

  :pedantic? :abort

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.8" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/private" "target"]

  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src"
                                       "../../src"
                                       "../../contrib/reagent/src"
                                       "../../contrib/atom-sync/src"
                                       "../../contrib/logging/src"
                                       "../counter/src-public"]
                        :compiler     {:main                 app.core
                                       :devcards             true
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
                                       "../../src"
                                       "../../contrib/reagent/src"
                                       "../../contrib/atom-sync/src"
                                       "../../contrib/logging/src"
                                       "../counter/src-public"]
                        :compiler     {:main           app.core
                                       :devcards       true
                                       :output-to      "resources/public/js/compiled/frontend.js"
                                       :optimizations  :advanced
                                       :pretty-print   false
                                       :compiler-stats true
                                       :parallel-build false}}]})
