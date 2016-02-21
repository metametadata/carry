(ns app.model)

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