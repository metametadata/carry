(ns app.api
  (:require))

(defprotocol ShopAPIProtocol
  (get-products [this on-success on-error])
  (buy-products [this payload on-success on-error]))

(def -products-tx-data [{:db/id -1 :product/title "iPad 4 Mini" :product/price 1 :product/inventory 5}
                        {:db/id -2 :product/title "H&M T-Shirt White" :product/price 2 :product/inventory 2}
                        {:db/id -3 :product/title "Charli XCX - Sucker CD" :product/price 200.99 :product/inventory 1}

                        ;{:db/id -4 :order-line/product -1 :order-line/quantity 10}
                        ;{:db/id -5 :order-line/product -3 :order-line/quantity 11}
                        ])

(def shop-api-stub
  (reify ShopAPIProtocol
    (get-products
      [_ on-success _on-error]
      (.setTimeout js/window #(on-success -products-tx-data) 1000))

    (buy-products
      [_ _payload on-success _on-error]
      (.setTimeout js/window on-success 1500))))