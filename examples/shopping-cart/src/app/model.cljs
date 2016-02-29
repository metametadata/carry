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
  {:db (d/db-with (d/empty-db -db-schema)
                  [{:db/id -1 :product/title "iPad 4 Mini" :product/price 1 :product/inventory 5}
                   {:db/id -2 :product/title "H&M T-Shirt White" :product/price 2 :product/inventory 2}
                   {:db/id -3 :product/title "Charli XCX - Sucker CD" :product/price 200 :product/inventory 1}

                   {:db/id -4 :order-line/product -1 :order-line/quantity 10}
                   {:db/id -5 :order-line/product -3 :order-line/quantity 11}])})