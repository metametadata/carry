(ns app.home.signals
  (:require [app.blueprint-methods :refer [on-signal]]))

(defmethod on-signal :on-click
  [_model _ _dispatch-signal dispatch-action]
  (dispatch-action :click))