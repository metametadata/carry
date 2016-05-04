(defproject
  carry-reagent "0.1.0"
  :description "Reagent bindings for Carry."
  :url "https://github.com/metametadata/carry"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.8.51" :scope "provided"]

                 [carry "0.1.0" :scope "provided"]

                 [reagent "0.6.0-alpha" :exclusions [cljsjs/react] :scope "provided"]
                 [cljsjs/react-with-addons "15.0.2-0" :scope "provided"]]

  :pedantic? :abort

  :source-paths ["src"])
