(ns app.spec
  (:require [app.model :as model]
            [app.controller :as controller]
            [app.reconciler :as reconciler]))

(defn new-spec
  [shop]
  {:initial-model model/initial-model
   :control       (controller/new-control shop)
   :reconcile     reconciler/reconcile
   :on-start      (fn [_model dispatch-signal] (dispatch-signal :on-get-all-products))
   :on-stop       (constantly nil)})