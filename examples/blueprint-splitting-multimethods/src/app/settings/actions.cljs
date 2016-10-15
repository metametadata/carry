(ns app.settings.actions
  (:require [app.blueprint-methods :refer [on-action]]))

(defmethod on-action :toggle-mode
  [model _]
  (update model :nightmode? not))