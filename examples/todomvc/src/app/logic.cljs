(ns app.logic
  (:require [app.model :as m]
            [com.rpl.specter :as s]
            [cljs.core.match :refer-macros [match]]))

(defn control
  [_model signal dispatch]
  (match signal
         [:on-update-field val] (dispatch [:update-field val])
         :on-add (dispatch :add)

         [:on-toggle id] (dispatch [:toggle id])
         :on-toggle-all (dispatch :toggle-all)

         [:on-start-editing id] (dispatch [:start-editing id])
         [:on-update-todo id val] (dispatch [:update-todo id val])
         [:on-stop-editing id] (dispatch [:stop-editing id])
         [:on-cancel-editing id] (dispatch [:cancel-editing id])

         [:on-remove id] (dispatch [:remove id])

         :on-clear-completed (dispatch :clear-completed)))


(defn -update-todos*
  [model pred f & args]
  (s/transform [:todos s/ALL pred]
               #(apply f % args)
               model))

(defn -update-todo
  [model id f & args]
  (apply -update-todos* model #(= (:id %) id) f args))

(defn -update-todos
  [model f & args]
  (apply -update-todos* model (constantly true) f args))

(defn -find-todo
  [model id]
  (->> (:todos model)
       (filter #(= (:id %) id))
       first))

(defn -remove-todos
  [model pred]
  (update model :todos #(remove pred %)))

(defn -remove-todo
  [model id]
  (-remove-todos model #(= (:id %) id)))

(defn reconcile
  [model action]
  (match action
         [:update-field val]
         (assoc model :field val)

         :add
         (let [title (clojure.string/trim (:field model))]
           (if (clojure.string/blank? title)
             model
             (-> model
                 (assoc :field "")
                 (update :next-id inc #_(min (inc %) 3))    ; commented is the code which will make tests fail
                 (update :todos concat [(m/init-todo (:next-id model) title)]))))

         [:toggle id]
         (-update-todo model id update :completed? not)

         :toggle-all
         (let [all-completed? (every? :completed? (:todos model))]
           (-update-todos model assoc :completed? (not all-completed?)))

         [:start-editing id]
         (-> model
             (-update-todos #(assoc % :editing? (= (:id %) id)))
             (-update-todo id #(assoc % :original-title (:title %))))

         [:update-todo id val]
         (-update-todo model id assoc :title val)

         [:stop-editing id]
         (let [title (-> (-find-todo model id)
                         :title
                         clojure.string/trim)]
           (if (clojure.string/blank? title)
             (-remove-todo model id)
             (-update-todos model #(assoc % :editing? false
                                            :original-title ""))))

         [:cancel-editing id]
         (-update-todo model id #(assoc % :editing? false
                                          :title (:original-title %)
                                          :original-title ""))

         [:remove id]
         (-remove-todo model id)

         :clear-completed
         (-remove-todos model :completed?)))

(defn on-start
  [_model _dispatch-signal]
  (println "[todos] custom start code"))

(defn on-stop
  [_model _dispatch-signal]
  (println "[todos] custom stop code"))