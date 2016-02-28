(ns app.model
  (:require [datascript.core :as d]))

(defn new-model
  [todo-titles]
  {:db (d/db-with (d/empty-db)
                  [{:db/id -1 :field "222"}])})