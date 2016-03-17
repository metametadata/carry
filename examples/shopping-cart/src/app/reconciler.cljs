(ns app.reconciler
  (:require [datascript.core :as d]
            [cljs.core.match :refer-macros [match]]))

(defn -update-db
  [model tx-data]
  (update model :db d/db-with tx-data))

(defn reconcile
  [model action]
  (println "  action" action)
  (match action
         [:receive-products tx-data]
         (assoc model :db (d/db-with (-> model :db :schema d/empty-db)
                                     tx-data))

         [:add-to-cart id]
         (let [inventory (:product/inventory (d/entity (:db model) id))
               quantity (d/q '[:find ?q .
                               :in $ ?id
                               :where
                               [?e :order-line/product ?id]
                               [?e :order-line/quantity ?q]]
                             (:db model)
                             id)]
           (assert (pos? inventory))
           (-update-db model [{:db/id id :product/inventory (dec inventory)}
                              {:order-line/product  id
                               :order-line/quantity ((fnil inc 0) quantity)}]))

         :checkout-request
         (assoc model :checking-out? true)

         :checkout-success
         (-> model
             (assoc :checking-out? false)
             (-update-db (map #(-> [:db.fn/retractEntity %])
                              (d/q '[:find [?e ...]
                                     :where [?e :order-line/product]]
                                   (:db model)))))))