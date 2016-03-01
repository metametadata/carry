(ns app.model
  (:require [datascript.core :as d]))

(def -db-schema
  {:product/title       {:db/unique :db.unique/identity}
   :product/price       {}
   :product/inventory   {}
   :order-line/product  {:db/valueType :db.type/ref
                         :db/unique    :db.unique/identity}
   :order-line/quantity {}})

(def initial-model
  {:db            (d/empty-db -db-schema)
   :checking-out? false})