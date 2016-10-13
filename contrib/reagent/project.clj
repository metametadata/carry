(defproject
  carry-reagent "0.7.0"
  :description "Reagent bindings for Carry."
  :url "https://github.com/metametadata/carry/tree/master/contrib/reagent"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.229" :scope "provided"]
                 [reagent "0.6.0" :scope "provided"]]

  :plugins [[lein-codox "0.10.0"]]

  :pedantic? :abort

  :source-paths ["src"]

  :repositories {"clojars" {:sign-releases false}}

  :codox {:source-uri   "https://github.com/metametadata/carry/blob/master/contrib/reagent/{filepath}#L{line}"
          :language     :clojurescript
          :source-paths ["src"]
          :output-path  "api"
          :metadata     {:doc/format :markdown}})
