(ns app.common.signals
  (:require [app.blueprint-methods :refer [on-signal]]
            [cljs.core.match :refer-macros [match]]))

(defmethod on-signal nil
  [_model signal _dispatch-signal _dispatch-action]
  (match signal
         :on-start nil
         :on-stop nil))

(defmethod on-signal (namespace ::_)
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         ::on-home (dispatch-action [:app.common.actions/navigate :home])
         ::on-settings (dispatch-action [:app.common.actions/navigate :settings])))