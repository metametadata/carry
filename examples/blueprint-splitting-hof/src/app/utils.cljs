(ns app.utils)

(defn dispatching-to-either
  "Returns a function of any args which calls functions one by one while :cant-handle is returned."
  [fns]
  (fn dispatching-to-either-fn [& args]
    (loop [f (first fns)
           next-fns (rest fns)]
      (when (nil? f)
        (throw (ex-info (str "No function was able to handle passed args: " (pr-str args))
                        {})))

      (let [result (apply f args)]
        (if (= result :cant-handle)
          (recur (first next-fns) (rest next-fns))
          result)))))