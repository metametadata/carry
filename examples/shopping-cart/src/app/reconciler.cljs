(ns app.reconciler
  (:require [cljs.core.match :refer-macros [match]]))

(defn reconcile
  [model action]
  (println "reconcile" action)
  (match action
         [:add-to-cart id]
         model

         :checkout
         model))