(ns app.common.actions
  (:require [cljs.core.match :refer-macros [match]]))

(defn on-action
  [model action]
  (match action
         [:navigate pane] (assoc model :pane pane)
         :else :cant-handle))
