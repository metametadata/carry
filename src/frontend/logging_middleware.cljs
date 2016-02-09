(ns frontend.logging-middleware)

(defn add
  ([spec] (add spec ""))
  ([spec prefix]
   {:pre [(:control spec) (:reconcile spec)]}
   (-> spec
       (update :control #(fn control
                          [model signal dispatch]
                          (println (str prefix "signal =") (pr-str signal))
                          (% model signal dispatch)))
       (update :reconcile #(fn reconcile
                            [model action]
                            (println (str prefix "  action =") (pr-str action))
                            (let [result (% model action)]
                              #_(println (str prefix "   ") (pr-str model))
                              #_(println (str prefix "     ->"))
                              #_(println (str prefix "   ") (pr-str result))
                              result))))))
