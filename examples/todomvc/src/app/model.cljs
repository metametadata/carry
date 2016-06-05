(ns app.model
  (:require [schema.core :as s]))

(def Schema
  {:field   s/Str
   :todos   [{:id             s/Int
              :title          s/Str
              :completed?     s/Bool
              :original-title s/Str
              :editing?       s/Bool}]
   :next-id s/Int

   ; allow any additional keys in order to support keys added by middleware
   s/Any    s/Any})

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
   :todos   (->> todo-titles
                 (map-indexed vector)
                 (map (partial apply init-todo)))
   :next-id (count todo-titles)})