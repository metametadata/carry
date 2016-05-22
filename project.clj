(def version "0.3.0")

(defproject
  carry
  version
  :description "ClojureScript single-page application framework."
  :url "https://github.com/metametadata/carry"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.8.51" :scope "provided"]]

  :plugins [[com.jakemccrary/lein-test-refresh "0.15.0"]
            [lein-doo "0.1.6"]
            [lein-codox "0.9.5"]]

  :pedantic? :abort

  :source-paths ["src" "test"]

  :jvm-opts ^:replace ["-Dclojure.compiler.direct-linking=true"]

  :test-refresh {:notify-command ["terminal-notifier" "-title" "Tests" "-message"]
                 :quiet          true}

  :repositories {"clojars" {:sign-releases false}}

  :cljsbuild {:builds [{:id           "test"
                        :source-paths ["test" "src"]
                        :compiler     {:main          'unit.runner
                                       :output-to     "resources/private/js/compiled/testable.js"
                                       :output-dir    "resources/private/js/compiled/out"
                                       :optimizations :none}}]}

  ; :codox profile is needed to be able to generate docs from contrib code without errors
  :profiles {:codox {:dependencies [; for carry-debugger:
                                    [org.clojure/core.match "0.3.0-alpha4"]
                                    [reagent "0.6.0-alpha2"]]}}

  :codox {:source-uri   "https://github.com/metametadata/carry/blob/master/{filepath}#L{line}"
          :language     :clojurescript
          :source-paths ["src"
                         "contrib/debugger/src/"
                         "contrib/history/src/"
                         "contrib/logging/src/"
                         "contrib/persistence/src/"
                         "contrib/reagent/src/"
                         "contrib/schema/src/"]
          :output-path  "site/api"
          :metadata     {:doc/format :markdown}
          :project      {:name        "Carry"
                         :description "ClojureScript single-page application framework."
                         :version     ~version}})
