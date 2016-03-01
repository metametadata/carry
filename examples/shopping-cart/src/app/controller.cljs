(ns app.controller
  (:require [app.api :as api]
            [datascript.core :as d]
            [cljs.core.match :refer-macros [match]]))

(defn new-control
  [shop]
  {:pre [(satisfies? api/ShopAPIProtocol shop)]}
  (fn control
    [_model signal dispatch]
    (println "signal" signal)
    (match signal
           :on-get-all-products
           (api/get-products shop
                             #(dispatch [:receive-products %])
                             #(dispatch :receive-products-error))

           [:on-add-to-cart id]
           (dispatch [:add-to-cart id])

           :on-checkout
           (do
             (dispatch :checkout-request)
             (api/buy-products shop
                               "<orders data from model>"
                               #(dispatch :checkout-success)
                               #(dispatch :checkout-error))))))