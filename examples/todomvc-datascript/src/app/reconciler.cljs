(ns app.reconciler
  (:require [app.model :as m]
            [datascript.core :as d]
            [cljs.core.match :refer-macros [match]]))

;(defn -update-todos*
;  [model pred f & args]
;  (s/transform [:todos s/ALL pred]
;               #(apply f % args)
;               model))
;
;(defn -update-todo
;  [model id f & args]
;  (apply -update-todos* model #(= (:id %) id) f args))
;
;(defn -update-todos
;  [model f & args]
;  (apply -update-todos* model (constantly true) f args))
;
;(defn -find-todo
;  [model id]
;  (->> (:todos model)
;       (filter #(= (:id %) id))
;       first))
;
;(defn -remove-todos
;  [model pred]
;  (update model :todos #(remove pred %)))
;
;(defn -remove-todo
;  [model id]
;  (-remove-todos model #(= (:id %) id)))

(defn -q
  [model query]
  (d/q query (:db model)))

(defn -transact
  [model tx-data]
  (update model :db d/db-with tx-data))

(defn reconcile
  [model action]
  (match action
         [:update-field val]
         (let [e (-q model '[:find ?e . :where [?e :field]])]
           (-transact model [[:db/add e :field val]]))

         :add
         (let [[field-e field] (-q model '[:find [?e ?f] :where [?e :field ?f]])
               title (clojure.string/trim field)]
           (if (clojure.string/blank? title)
             model
             (-transact model [{:db/id field-e :field ""}
                               {:db/id               -1
                                :todo/title          title
                                :todo/completed?     false
                                :todo/original-title ""
                                :todo/editing?       false}])))

         :else
         model
         ;[:toggle id]
         ;(-update-todo model id update :completed? not)
         ;
         ;:toggle-all
         ;(let [all-completed? (every? :completed? (:todos model))]
         ;  (-update-todos model assoc :completed? (not all-completed?)))
         ;
         ;[:start-editing id]
         ;(-> model
         ;    (-update-todos #(assoc % :editing? (= (:id %) id)))
         ;    (-update-todo id #(assoc % :original-title (:title %))))
         ;
         ;[:update-todo id val]
         ;(-update-todo model id assoc :title val)
         ;
         ;[:stop-editing id]
         ;(let [title (-> (-find-todo model id)
         ;                :title
         ;                clojure.string/trim)]
         ;  (if (clojure.string/blank? title)
         ;    (-remove-todo model id)
         ;    (-update-todos model #(assoc % :editing? false
         ;                                   :original-title ""))))
         ;
         ;[:cancel-editing id]
         ;(-update-todo model id #(assoc % :editing? false
         ;                                 :title (:original-title %)
         ;                                 :original-title ""))
         ;
         ;[:remove id]
         ;(-remove-todo model id)
         ;
         ;:clear-completed
         ;(-remove-todos model :completed?)
         ))