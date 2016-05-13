(defproject
  carry-reagent "0.3.0"
  :description "Reagent bindings for Carry."
  :url "https://github.com/metametadata/carry/tree/master/contrib/reagent"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.8.51" :scope "provided"]

                 [carry "0.2.0"]

                 [reagent "0.6.0-alpha2"]]

  :pedantic? :abort

  :source-paths ["src"]

  :repositories {"clojars" {:sign-releases false}})
