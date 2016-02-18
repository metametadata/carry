(ns frontend.logging-middleware
  (:require [frontend.core :as mvsa]))

(defn add
  "Will print all signals and actions to console."
  ([spec] (add spec ""))
  ([spec prefix]
   {:pre [(:control spec) (:reconcile spec)]}
   (-> spec
       (update :control mvsa/before-do
               (fn [_model signal _dispatch]
                 (.group js/console (str prefix "signal =") (pr-str signal))))
       (update :control mvsa/after-do
               (fn [_model _signal _dispatch]
                 (.groupEnd js/console)))
       (update :reconcile mvsa/before-do
               (fn [_model action]
                 (println (str prefix "  action =") (pr-str action)))))))
