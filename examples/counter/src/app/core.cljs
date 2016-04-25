(ns app.core
  (:require [counter.core :as counter]
            [carry.core :as carry]
            [reagent.core :as r]))

(enable-console-print!)

(defn main
  []
  (let [app (carry/app counter/spec)
        [app-view-model app-view] (carry/connect-ui app counter/view-model counter/view)]
    ((:dispatch-signal app) :on-start)

    (r/render app-view (.getElementById js/document "root"))

    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  [])

(defn on-jsload
  []
  #_(. js/console clear))