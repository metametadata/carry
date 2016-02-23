(ns app.middleware.logging
  (:require [mvsa.helpers :as helpers]))

(defn add
  "Will print all signals and actions to console."
  ([spec] (add spec ""))
  ([spec prefix]
   {:pre [(:control spec) (:reconcile spec)]}
   (-> spec
       (update :control (fn wrap-control [control]
                          (fn logged-control [model signal dispatch]
                            (try
                              (.group js/console (str prefix "signal =") (pr-str signal))
                              (control model signal dispatch)

                              ; this clause guarantees that group is closed even in case of exception
                              (finally
                                (.groupEnd js/console))))))
       (update :reconcile helpers/before-do
               (fn [_model action]
                 (println (str prefix "  action =") (pr-str action)))))))
