(ns app.home.actions
  (:require [cljs.core.match :refer-macros [match]]))

(defn on-action
  [model action]
  (match action
         :click (update model :clicks inc)
         :else :cant-handle))