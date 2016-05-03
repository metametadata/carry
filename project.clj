(defproject carry "0.1.0"
  :description "ClojureScript application framework."
  :url "https://github.com/metametadata/carry"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.8.51" :scope "provided"]]

  :pedantic? :abort

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/private" "target"])
