(ns app.core
  (:require [app.spec :as spec]
            [app.api :as api]
            [app.view-model :as view-model]
            [app.view :as view]
            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [reagent.core :as r]))

(enable-console-print!)

(defn main
  []
  (let [spec (spec/new-spec api/shop-api-stub)
        app (carry/app spec)
        [app-view-model app-view] (carry-reagent/connect app view-model/view-model view/view)]
    ((:dispatch-signal app) :on-start)

    (r/render app-view (.getElementById js/document "root"))

    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:dispatch-signal app) :on-stop))

(defn on-jsload
  []
  #_(. js/console clear))