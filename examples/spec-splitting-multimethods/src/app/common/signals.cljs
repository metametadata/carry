(ns app.common.signals
  (:require [app.spec-methods :refer [on-signal]]))

(defmethod on-signal :on-start
  [_model _ _dispatch-signal _dispatch-action]
  nil)

(defmethod on-signal :on-stop
  [_model _ _dispatch-signal _dispatch-action]
  nil)

(defmethod on-signal :on-home
  [_model _ _dispatch-signal dispatch-action]
  (dispatch-action [:navigate :home]))

(defmethod on-signal :on-settings
  [_model _ _dispatch-signal dispatch-action]
  (dispatch-action [:navigate :settings]))