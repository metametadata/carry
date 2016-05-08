(defproject
  carry "0.2.0-SNAPSHOT"
  :description "ClojureScript application framework."
  :url "https://github.com/metametadata/carry"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.8.51" :scope "provided"]]

  :plugins [[lein-codox "0.9.5"]]

  :pedantic? :abort

  :source-paths ["src"]

  :repositories {"clojars" {:sign-releases false}}

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
          :project      {:name "Carry" :description "ClojureScript application framework." :version "0.1.0"}})
