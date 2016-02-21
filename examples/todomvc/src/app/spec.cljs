(ns app.spec
  (:require [app.model :refer [new-model]]
            [app.controller :refer [control]]
            [app.logic :refer [reconcile]]
            [app.middleware.routing :as routing]))

(defn new-spec
  [history todo-titles]
  (-> {:initial-model (new-model todo-titles)
       :control       control
       :reconcile     reconcile
       :on-start      (fn [_model _dispatch-signal] (println "[todos] custom start code"))
       :on-stop       (fn [_model _dispatch-signal] (println "[todos] custom stop code"))}
      (routing/add history)))