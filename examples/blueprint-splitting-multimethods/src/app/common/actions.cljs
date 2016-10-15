(ns app.common.actions
  (:require [app.blueprint-methods :refer [on-action]]))

(defmethod on-action :navigate
  [model [_ pane]]
  (assoc model :pane pane))