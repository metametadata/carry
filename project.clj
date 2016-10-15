(defproject
  carry "0.7.0"
  :description "ClojureScript single-page application framework."
  :url "https://github.com/metametadata/carry"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.229" :scope "provided"]]

  :plugins [[com.jakemccrary/lein-test-refresh "0.17.0"]
            [lein-doo "0.1.7"]
            [lein-codox "0.10.0"]]

  :pedantic? :abort

  :source-paths ["src" "test"]

  :test-refresh {:notify-command ["terminal-notifier" "-title" "Tests" "-message"]
                 :quiet          true}

  :repositories {"clojars" {:sign-releases false}}

  :cljsbuild {:builds [{:id           "test"
                        :source-paths ["test" "src"]
                        :compiler     {:main          unit.runner
                                       :output-to     "resources/private/js/compiled/testable.js"
                                       :output-dir    "resources/private/js/compiled/out"
                                       :optimizations :none}}]}

  :codox {:source-uri   "https://github.com/metametadata/carry/blob/master/{filepath}#L{line}"
          :language     :clojure
          :source-paths ["src"]
          :output-path  "site/api"
          :metadata     {:doc/format :markdown}})