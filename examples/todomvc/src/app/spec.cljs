(ns app.spec
  (:require [app.model :as model]
            [app.controller :refer [control]]
            [app.reconciler :refer [reconcile]]
            [middleware.schema :as schema]
            [middleware.history :as h]
            [middleware.persistence :as persistence]))

(defn new-spec
  [history storage storage-key todo-titles]
  (-> {:initial-model (model/new-model todo-titles)
       :control       control
       :reconcile     reconcile}
      (schema/add model/Schema)

      ; Debugger deals with persistence itself, so we have to blacklist it here to get rid of loading conflicts.
      ; Token is blacklisted because on start we want the app to read current token from the urlbar instead of storage.
      (persistence/add storage storage-key {:blacklist #{:middleware.devtools/debugger ::h/token}})

      (h/add history)))