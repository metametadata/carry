(ns app.home.actions
  (:require [app.blueprint-methods :refer [on-action]]))

(defmethod on-action :click
  [model _]
  (update model :clicks inc))