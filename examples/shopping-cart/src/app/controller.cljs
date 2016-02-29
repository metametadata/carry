(ns app.controller
  (:require [cljs.core.match :refer-macros [match]]))

(defn control
  [model signal dispatch]
  (match signal
         [:on-add-to-cart id]
         (dispatch [:add-to-cart id])

         :on-checkout
         (dispatch :checkout)))