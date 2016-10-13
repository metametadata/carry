(ns app.settings.actions
  (:require [app.spec-methods :refer [on-action]]))

(defmethod on-action :toggle-mode
  [model _]
  (update model :nightmode? not))