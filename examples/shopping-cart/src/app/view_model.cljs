(ns app.view-model
  (:require [reagent.core]
            [datascript.core :as d])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn -describe-results
  [keys query-result]
  (map #(zipmap keys %) query-result))

(defn view-model
  [model]
  {:products      (reaction (-describe-results
                              [:id :title :price :disabled?]
                              (d/q '[:find ?e ?t ?p ?disabled?
                                     :where
                                     [?e :product/title ?t]
                                     [?e :product/price ?p]
                                     [?e :product/inventory ?i]
                                     [(< ?i 1) ?disabled?]]
                                   (:db @model))))

   :cart-products (reaction (-describe-results
                              [:id :title :price :quantity]
                              (d/q '[:find ?e ?t ?p ?q
                                     :where
                                     [?e :order-line/product ?pe]
                                     [?pe :product/title ?t]
                                     [?pe :product/price ?p]
                                     [?e :order-line/quantity ?q]]
                                   (:db @model))))

   :cart-total    (reaction "$$$ TBD $$$")})