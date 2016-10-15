(ns app.settings.actions
  (:require [cljs.core.match :refer-macros [match]]))

(defn on-action
  [model action]
  (match action
         :toggle-mode (update model :nightmode? not)
         :else :cant-handle))