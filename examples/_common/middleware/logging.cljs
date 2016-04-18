(ns middleware.logging
  (:require))

(defn add
  "Will print all signals and actions to console."
  ([spec] (add spec ""))
  ([spec prefix]
   {:pre [(:control spec) (:reconcile spec)]}
   (-> spec
       (update :control (fn wrap-control [control]
                          (fn logged-control [model signal dispatch-signal dispatch-action]
                            (try
                              (.group js/console (str prefix "signal " (pr-str signal)))
                              (control model signal dispatch-signal dispatch-action)

                              ; this clause guarantees that group is closed even in case of exception
                              (finally
                                (.groupEnd js/console))))))
       (update :reconcile
               (fn wrap-reconcile [reconcile]
                 (fn logged-reconcile [model action]
                   (println (str prefix "action") (pr-str action))
                   (reconcile model action)))))))
