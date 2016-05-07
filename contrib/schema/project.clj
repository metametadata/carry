(defproject
  carry-schema "0.4.0"
  :description "Carry middleware for model validation using Schema."
  :url "https://github.com/metametadata/carry/tree/master/contrib/schema"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.8.51" :scope "provided"]

                 [prismatic/schema "1.1.1"]]

  :pedantic? :abort

  :source-paths ["src"]

  :repositories {"clojars" {:sign-releases false}})
