(ns app.home.signals
  (:require [cljs.core.match :refer-macros [match]]))

(defn on-signal
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         :on-click (dispatch-action :click)
         :else :cant-handle))