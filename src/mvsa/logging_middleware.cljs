(ns mvsa.logging-middleware
  (:require [mvsa.helpers :as helpers]))

(defn add
  "Will print all signals and actions to console."
  ([spec] (add spec ""))
  ([spec prefix]
   {:pre [(:control spec) (:reconcile spec)]}
   (-> spec
       (update :control helpers/before-do
               (fn [_model signal _dispatch]
                 (.group js/console (str prefix "signal =") (pr-str signal))))
       (update :control helpers/after-do
               (fn [_model _signal _dispatch]
                 (.groupEnd js/console)))
       (update :reconcile helpers/before-do
               (fn [_model action]
                 (println (str prefix "  action =") (pr-str action)))))))
