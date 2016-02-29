(ns app.view-model
  (:require [reagent.core]
            [datascript.core :as d])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn -q
  "Queries model's db and returns result as a map with specified keys."
  [model keys q & args]
  (->>
    (apply d/q q (:db @model) args)
    (map #(zipmap keys %))))

(defn view-model
  [model]
  (let [cart-products (reaction (-q model
                                    [:id :title :price :quantity]
                                    '[:find ?e ?t ?p ?q
                                      :where
                                      [?e :order-line/product ?pe]
                                      [?pe :product/title ?t]
                                      [?pe :product/price ?p]
                                      [?e :order-line/quantity ?q]]))]
    {:cart-products cart-products

     :cart-total    (reaction (reduce #(+ %1 (* (:price %2) (:quantity %2)))
                                      0
                                      @cart-products))

     :products      (reaction (-q model
                                  [:id :title :price :disabled?]
                                  '[:find ?e ?t ?p ?disabled?
                                    :where
                                    [?e :product/title ?t]
                                    [?e :product/price ?p]
                                    [?e :product/inventory ?i]
                                    [(< ?i 1) ?disabled?]]))}))