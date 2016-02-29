(ns app.view
  (:require))

(defn -product
  [{:keys [title price quantity] :as _product}]
  [:div title " - $" price (when quantity (str " x " quantity))])

(defn -products-item
  [{:keys [id disabled?] :as product} dispatch]
  [:div {:style {:margin-bottom 20}}
   [-product product]
   [:button {:disabled disabled?
             :on-click #(dispatch [:on-add-to-cart id])}
    (if disabled? "Sold Out" "Add to cart")]])

(defn -products
  [products dispatch]
  [:div
   [:h3 "Products"]
   [:div
    (for [p products]
      ^{:key (:id p)}
      [-products-item p dispatch])]])

(defn -cart
  [products total dispatch]
  [:div
   [:h3 "Your Cart"]
   (if (empty? products)
     [:em "Please add some products to cart."]
     [:div
      (for [p products]
        ^{:key (:id p)}
        [-product p])])
   [:p "Total: $" total]
   [:button
    {:disabled (empty? products)
     :on-click #(dispatch :on-checkout)}
    "Checkout"]])

(defn view
  [{:keys [products cart-products cart-total] :as _view-model} dispatch]
  [:div
   [:h2 "Shopping Cart Example"]
   [:hr]
   [-products @products dispatch]
   [:hr]
   [-cart @cart-products @cart-total dispatch]])