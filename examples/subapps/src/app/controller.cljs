(ns app.controller
  (:require [cljs.core.match :refer-macros [match]]))

(defn control
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         :on-start nil
         :on-stop nil

         :on-toggle-friend-list
         (dispatch-action :toggle-friend-list)

         :on-toggle-counter
         (dispatch-action :toggle-counter)))