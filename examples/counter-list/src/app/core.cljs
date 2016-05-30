(ns app.core
  (:require [app.spec :refer [spec]]
            [app.view-model :refer [view-model]]
            [app.view :refer [view]]

            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]

            [reagent.core :as r]))

(enable-console-print!)

(defn main
  []
  (let [app (carry/app spec)
        [app-view-model app-view] (carry-reagent/connect app view-model view)]
    (r/render app-view (.getElementById js/document "root"))
    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  [])

(defn on-jsload
  []
  #_(. js/console clear))