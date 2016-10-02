(ns app.actions
  (:require [cljs.core.match :refer-macros [match]]))

(defn on-action
  [model action]
  (match action
         :toggle-friend-list
         (update model :friend-list-visible? not)

         :toggle-counter
         (update model :counter-visible? not)))