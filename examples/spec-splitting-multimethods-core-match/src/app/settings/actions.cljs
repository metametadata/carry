(ns app.settings.actions
  (:require [app.spec-methods :refer [on-action]]
            [cljs.core.match :refer-macros [match]]))

(defmethod on-action (namespace ::_)
  [model action]
  (match action
         ::toggle-mode (update model :nightmode? not)))