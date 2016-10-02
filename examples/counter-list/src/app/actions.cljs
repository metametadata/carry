(ns app.actions
  (:require [counter.core :as counter]
            [cljs.core.match :refer-macros [match]]))

(defn on-action
  [model action]
  (println "  action =" action)
  (match action
         :insert
         (let [newest-counter-id (apply max -1 (-> model :counters keys))]
           (assoc-in model [:counters (inc newest-counter-id)] (:initial-model counter/spec)))

         :remove
         (let [oldest-counter-id (apply min (-> model :counters keys))]
           (update model :counters dissoc oldest-counter-id))

         [[:counter-action id] a]
         (update-in model [:counters id] (:on-action counter/spec) a)))