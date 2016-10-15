(ns app.common.actions
  (:require [app.blueprint-methods :refer [on-action]]
            [cljs.core.match :refer-macros [match]]))

(defmethod on-action (namespace ::_)
  [model action]
  (match action
         [::navigate pane] (assoc model :pane pane)))