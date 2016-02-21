(ns app.logic
  (:require [app.model :as m]
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
         (m/update-todo model id update :completed? not)

         :toggle-all
         (let [all-completed? (every? :completed? (:todos model))]
           (m/update-todos model assoc :completed? (not all-completed?)))

         [:start-editing id]
         (-> model
             (m/update-todos #(assoc % :editing? (= (:id %) id)))
             (m/update-todo id #(assoc % :original-title (:title %))))

         [:update-todo id val]
         (m/update-todo model id assoc :title val)

         [:stop-editing id]
         (let [title (-> (m/find-todo model id)
                         :title
                         clojure.string/trim)]
           (if (clojure.string/blank? title)
             (m/remove-todo model id)
             (m/update-todos model #(assoc % :editing? false
                                             :original-title ""))))

         [:cancel-editing id]
         (m/update-todo model id #(assoc % :editing? false
                                           :title (:original-title %)
                                           :original-title ""))

         [:remove id]
         (m/remove-todo model id)

         :clear-completed
         (m/remove-todos model :completed?)))

(defn on-start
  [_model _dispatch-signal]
  (println "[todos] custom start code"))

(defn on-stop
  [_model _dispatch-signal]
  (println "[todos] custom stop code"))