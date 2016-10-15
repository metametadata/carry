(ns app.settings.signals
  (:require [app.blueprint-methods :refer [on-signal]]))

(defmethod on-signal :on-toggle-mode
  [_model _ _dispatch-signal dispatch-action]
  (dispatch-action :toggle-mode))