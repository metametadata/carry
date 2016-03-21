(ns app.controller
  (:require [app.api :as api]
            [datascript.core :as d]
            [cljs.core.match :refer-macros [match]]))

(defn new-control
  [shop]
  {:pre [(satisfies? api/ShopAPIProtocol shop)]}
  (fn control
    [model signal _dispatch-signal dispatch-action]
    (println "signal" signal)
    (match signal
           :on-start
           (api/get-products shop
                             #(dispatch-action [:receive-products %])
                             #(dispatch-action :receive-products-error))
           :on-stop
           nil

           [:on-add-to-cart id]
           (do
             (assert (not (:checking-out? @model)))
             (dispatch-action [:add-to-cart id]))

           :on-checkout
           (do
             (assert (not (:checking-out? @model)))
             (dispatch-action :checkout-request)
             (api/buy-products shop
                               "<orders data from model>"
                               #(dispatch-action :checkout-success)
                               #(dispatch-action :checkout-error))))))