(ns app.reconciler
  (:require [cljs.core.match :refer-macros [match]]))

(defn reconcile
  [model action]
  (match action
         :toggle-friend-list
         (update model :friend-list-visible? not)

         :toggle-counter
         (update model :counter-visible? not)))