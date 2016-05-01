(defproject carry "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]]

  :pedantic? :abort

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/private" "target"])
