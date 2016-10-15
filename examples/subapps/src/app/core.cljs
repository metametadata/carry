(ns app.core
  (:require [app.blueprint :refer [new-blueprint]]
            [app.view-model :refer [view-model]]
            [app.view :refer [view]]

            [app.friend-list-api :as friend-list-api]
            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [carry-history.core :as h]
            [carry-logging.core :as logging]
            [reagent.core :as r]))

(enable-console-print!)

(defn main
  []
  (let [history (h/new-hash-history)
        blueprint (-> (new-blueprint history friend-list-api/search)
                      logging/add)
        app (carry/app blueprint)
        [app-view-model app-view] (carry-reagent/connect app view-model view)]
    (r/render app-view (.getElementById js/document "root"))
    ((:dispatch-signal app) :on-start)
    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:dispatch-signal app) :on-stop))

(defn on-jsload
  []
  #_(. js/console clear))