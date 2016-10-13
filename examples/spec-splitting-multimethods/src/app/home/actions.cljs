(ns app.home.actions
  (:require [app.spec-methods :refer [on-action]]))

(defmethod on-action :click
  [model _]
  (update model :clicks inc))