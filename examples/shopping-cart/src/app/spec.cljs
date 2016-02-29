(ns app.spec
  (:require [app.model :as model]
            [app.controller :as controller]
            [app.reconciler :as reconciler]))

(def spec
  {:initial-model model/initial-model
   :control       controller/control
   :reconcile     reconciler/reconcile
   :on-start      (constantly nil)
   :on-stop       (constantly nil)})