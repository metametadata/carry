(defproject
  carry-atom-sync "0.2.0"
  :description "Carry middleware for creating a bidirectional sync between an app model and a specified atom-like reference."
  :url "https://github.com/metametadata/carry/tree/master/contrib/atom-sync"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.36" :scope "provided"]

                 [org.clojure/core.match "0.3.0-alpha4"]]

  :plugins [[lein-codox "0.9.5"]]

  :pedantic? :abort

  :source-paths ["src"]

  :repositories {"clojars" {:sign-releases false}}

  :codox {:source-uri   "https://github.com/metametadata/carry/blob/master/contrib/atom-sync/{filepath}#L{line}"
          :language     :clojurescript
          :source-paths ["src"]
          :output-path  "api"
          :metadata     {:doc/format :markdown}})
