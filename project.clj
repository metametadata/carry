(defproject reagent-mvsa "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]

                 [reagent "0.5.1" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.13.3-0"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/private" "target"])
