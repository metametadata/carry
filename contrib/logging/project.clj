(defproject
  carry-logging "0.1.0"
  :description "Console logging middleware for Carry."
  :url "https://github.com/metametadata/carry/tree/master/contrib/logging"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.8.51" :scope "provided"]]

  :pedantic? :abort

  :source-paths ["src"]

  :repositories {"clojars" {:sign-releases false}})
