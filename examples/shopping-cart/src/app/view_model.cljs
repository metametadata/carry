(ns app.view-model
  (:require [datascript.core :as d])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn -q
  "Queries model's db and returns result as a map with specified keys."
  [model keys q & args]
  (map #(zipmap keys %) (apply d/q q (:db @model) args)))

(defn -format-price
  [price]
  (.toFixed price 2))

(defn view-model
  [model]
  (let [cart-products (reaction (->> (-q model
                                         [:id :title :price :quantity]
                                         '[:find ?e ?t ?p ?q
                                           :where
                                           [?e :order-line/product ?pe]
                                           [?pe :product/title ?t]
                                           [?pe :product/price ?p]
                                           [?e :order-line/quantity ?q]])
                                     (map #(update % :price -format-price))))
        checking-out? (reaction (:checking-out? @model))]
    {:cart-products      cart-products
     :cart-total         (reaction (-> (reduce #(+ %1 (* (:price %2) (:quantity %2)))
                                               0
                                               @cart-products)
                                       -format-price))
     :checking-out?      checking-out?
     :checkout-disabled? (reaction (or @checking-out? (empty? @cart-products)))
     :products           (reaction (->> (-q model
                                            [:id :title :price :sold-out?]
                                            '[:find ?e ?t ?p ?sold-out?
                                              :where
                                              [?e :product/title ?t]
                                              [?e :product/price ?p]
                                              [?e :product/inventory ?i]
                                              [(< ?i 1) ?sold-out?]])
                                        (map #(update % :price -format-price))
                                        (map #(assoc % :disabled? (or @checking-out?
                                                                      (:sold-out? %))))

                                        ; doall gets rid of "Warning: Reactive deref not supported in lazy seq"
                                        doall))}))