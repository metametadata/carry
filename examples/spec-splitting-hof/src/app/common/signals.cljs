(ns app.common.signals
  (:require [cljs.core.match :refer-macros [match]]))

(defn on-signal
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         :on-start nil
         :on-stop nil
         :on-home (dispatch-action [:navigate :home])
         :on-settings (dispatch-action [:navigate :settings])
         :else :cant-handle))