(ns app.settings.signals
  (:require [cljs.core.match :refer-macros [match]]))

(defn on-signal
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         :on-toggle-mode (dispatch-action :toggle-mode)
         :else :cant-handle))