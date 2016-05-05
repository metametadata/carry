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

  :codox {:source-uri   "https://github.com/metametadata/carry/blob/master/{filepath}#L{line}"
          :language     :clojurescript
          :source-paths ["src"]
          :namespaces   [carry.core]
          :output-path  "site/api"
          :metadata     {:doc/format :markdown}
          :project      {:name "carry" :description "ClojureScript application framework."}})
