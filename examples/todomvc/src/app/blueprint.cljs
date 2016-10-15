(ns app.blueprint
  (:require [app.model :as model]
            [app.signals :refer [on-signal]]
            [app.actions :refer [on-action]]
            [carry-schema.core :as schema]
            [carry-history.core :as h]
            [carry-persistence.core :as persistence]))

(defn new-blueprint
  [history storage storage-key todo-titles]
  (-> {:initial-model (model/new-model todo-titles)
       :on-signal     on-signal
       :on-action     on-action}
      (schema/add model/Schema)

      ; token is blacklisted because on start we want the app to read current token from the urlbar instead of storage
      (persistence/add storage storage-key {:blacklist #{::h/token}})

      (h/add history)))