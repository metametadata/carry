(def version "0.5.0")

(defproject
  carry-debugger
  version
  :description "Middleware for debugging Carry applications."
  :url "https://github.com/metametadata/carry/tree/master/contrib/debugger"
  :license {:name "MIT" :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.36" :scope "provided"]

                 [carry-schema "0.3.0"]
                 [carry-reagent "0.5.0"]

                 [org.clojure/core.match "0.3.0-alpha4"]
                 [reagent "0.6.0-rc"]
                 [prismatic/schema "1.1.1"]
                 [com.rpl/specter "0.11.2"]
                 [cljsjs/jquery-ui "1.11.4-0"]
                 [cljsjs/filesaverjs "1.1.20151003-0"]]

  :plugins [[lein-codox "0.9.5"]]

  :pedantic? :abort

  :source-paths ["src"]

  :repositories {"clojars" {:sign-releases false}}

  :codox {:source-uri   "https://github.com/metametadata/carry/blob/master/contrib/debugger/{filepath}#L{line}"
          :language     :clojurescript
          :source-paths ["src"]
          :output-path  "api"
          :metadata     {:doc/format :markdown}})
