(ns app.model
  (:require [com.rpl.specter :as s]))

(defn init-todo
  [id title]
  {:id             id
   :title          title
   :completed?     false
   :original-title ""
   :editing?       false})

(defn new-model
  [todo-titles]
  {:field   ""
   ; list of maps
   :todos   (->> todo-titles
                 (map-indexed vector)
                 (map (partial apply init-todo)))
   :next-id (count todo-titles)})

(defn -update-todos*
  [model pred f & args]
  (s/transform [:todos s/ALL pred]
               #(apply f % args)
               model))

(defn update-todo
  [model id f & args]
  (apply -update-todos* model #(= (:id %) id) f args))

(defn update-todos
  [model f & args]
  (apply -update-todos* model (constantly true) f args))

(defn find-todo
  [model id]
  (->> (:todos model)
       (filter #(= (:id %) id))
       first))

(defn remove-todos
  [model pred]
  (update model :todos #(remove pred %)))

(defn remove-todo
  [model id]
  (remove-todos model #(= (:id %) id)))