(ns app.spec
  (:require [app.model :as model]
            [app.controller :refer [control]]
            [app.reconciler :refer [reconcile]]
            [app.middleware.schema :as schema]
            [app.middleware.routing :as routing]))

(defn new-spec
  [history todo-titles]
  (-> {:initial-model (model/new-model todo-titles)
       :control       control
       :reconcile     reconcile
       :on-start      (fn [_model _dispatch-signal] (println "[todos] custom start code"))
       :on-stop       (fn [_model _dispatch-signal] (println "[todos] custom stop code"))}
      (schema/add model/Schema)
      (routing/add history)))