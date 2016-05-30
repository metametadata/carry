(ns app.spec
  (:require [app.model :refer [initial-model]]
            [app.controller :refer [control]]
            [app.reconciler :refer [reconcile]]))

(def spec
  {:initial-model initial-model
   :control       control
   :reconcile     reconcile})