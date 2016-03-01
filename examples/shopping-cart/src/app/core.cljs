(ns app.core
  (:require [app.spec :as spec]
            [app.api :as api]
            [app.view-model :as view-model]
            [app.view :as view]
            [reagent-mvsa.core :as mvsa]
            [reagent.core :as r]))

(enable-console-print!)

(defn main
  []
  (let [spec (spec/new-spec api/shop-api-stub)
        app (mvsa/app spec)
        [app-view-model app-view] (mvsa/connect-ui app view-model/view-model view/view)]
    ((:start app))

    (r/render app-view (.getElementById js/document "root"))

    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:stop app)))

(defn on-jsload
  []
  #_(. js/console clear))