(ns frontend.logging-middleware
  (:require [frontend.mvsa :as mvsa]))

(defn add
  "Will print all signals and actions to console."
  ([spec] (add spec ""))
  ([spec prefix]
   {:pre [(:control spec) (:reconcile spec)]}
   (-> spec
       (update :control mvsa/before-do
               (fn [_model signal _dispatch]
                 (println (str prefix "signal =") (pr-str signal))))
       (update :reconcile mvsa/before-do
               (fn [_model action]
                 (println (str prefix "  action =") (pr-str action)))))))
