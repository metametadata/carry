(ns app.reconciler
  (:require [datascript.core :as d]
            [cljs.core.match :refer-macros [match]]))

(defn -update-db
  [model tx-data]
  (update model :db d/db-with tx-data))

(defn reconcile
  [model action]
  (match action
         [:add-to-cart id]
         (let [inventory (:product/inventory (d/entity (:db model) id))
               quantity (d/q '[:find ?q .
                               :in $ ?id
                               :where
                               [?e :order-line/product ?id]
                               [?e :order-line/quantity ?q]]
                             (:db model)
                             id)]
           (assert (> inventory 0))
           (-update-db model [{:db/id id :product/inventory (dec inventory)}
                              {:order-line/product  id
                               :order-line/quantity ((fnil inc 0) quantity)}]))

         :checkout
         (-update-db model (->> (d/q '[:find [?e ...]
                                       :where
                                       [?e :order-line/product]]
                                     (:db model))
                                (map #(-> [:db.fn/retractEntity %]))))))