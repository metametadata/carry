(ns app.spec
  (:require [app.model :as model]
            [app.logic :as logic]
            [app.middleware.routing :as routing]))

(defn new-spec
  [history todo-titles]
  (-> {:initial-model (model/new-model todo-titles)
       :control       logic/control
       :reconcile     logic/reconcile
       :on-start      logic/on-start
       :on-stop       logic/on-stop}
      (routing/add history)))