(defproject reagent-mvsa "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]

                 [reagent "0.5.1" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.13.3-0"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-doo "0.1.6"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/private" "target"]

  :cljsbuild {
              :builds [#_{:id           "dev"
                          :source-paths ["src"]
                          :compiler     {:main                 core
                                         :asset-path           "js/compiled/out"
                                         :output-to            "resources/public/js/compiled/frontend.js"
                                         :output-dir           "resources/public/js/compiled/out"
                                         :source-map-timestamp true}
                          :figwheel     {:on-jsload     "core/on-jsload"
                                         :before-jsload "core/before-jsload"}}

                       #_{:id           "min"
                          :source-paths ["src"]
                          :compiler     {:main          core
                                         :output-to     "resources/public/js/compiled/frontend.js"
                                         :optimizations :advanced
                                         :pretty-print  false}}

                       #_{:id           "test"
                          :source-paths ["src/frontend" "test"]
                          :compiler     {:main          'unit.runner
                                         :output-to     "resources/private/js/compiled/testable.js"
                                         :output-dir    "resources/private/js/compiled/out"
                                         :optimizations :none
                                         }}]})
