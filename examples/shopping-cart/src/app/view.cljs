(ns app.view
  (:require))

(defn -product
  [{:keys [title price quantity] :as _product}]
  [:div title " - $" price (when quantity (str " x " quantity))])

(defn -products-item
  [{:keys [id sold-out? disabled?] :as product} dispatch]
  [:div {:style {:margin-bottom 20}}
   [-product product]
   [:button {:disabled disabled?
             :on-click #(dispatch [:on-add-to-cart id])}
    (if sold-out? "Sold Out" "Add to cart")]])

(defn -products
  [products dispatch]
  [:div
   [:h3 "Products"]
   [:div
    (for [p products]
      ^{:key (:id p)}
      [-products-item p dispatch])]])

(defn -cart
  [products total checking-out? checkout-disabled? dispatch]
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
    {:disabled checkout-disabled?
     :on-click #(dispatch :on-checkout)}
    (if checking-out? "Please wait..." "Checkout")]])

(defn view
  [{:keys [products cart-products cart-total checking-out? checkout-disabled?] :as _view-model} dispatch]
  [:div
   [:h2 "Shopping Cart Example"]
   [:hr]
   [-products @products dispatch]
   [:hr]
   [-cart @cart-products @cart-total @checking-out? @checkout-disabled? dispatch]])