(ns app.view
  (:require [reagent.core :as r]))

(defn -enter-key? [e] (= (.-keyCode e) 13))
(defn -escape-key? [e] (= (.-keyCode e) 27))

(defn -header
  [field dispatch]
  [:header.header
   [:h1 "todos"]
   [:input.new-todo {:placeholder "What needs to be done?"
                     :value       field
                     :on-change   #(dispatch [:on-update-field (.. % -target -value)])
                     :on-key-down #(when (-enter-key? %) (dispatch :on-add))}]])

(defn -todo-input
  "Note that |editing?| is passed only to trigger :component-did-update to set focus on the state change."
  [_id _title _editing? _dispatch]
  (r/create-class {:reagent-render
                   (fn [id title editing? dispatch]
                     [:input.edit {:value       title
                                   :on-change   #(dispatch [:on-update-todo id (.. % -target -value)])
                                   :on-key-down #(cond (-enter-key? %) (dispatch [:on-stop-editing id])
                                                       (-escape-key? %) (dispatch [:on-cancel-editing id]))
                                   ; the condition is only added to not pollute log with unneeded signals
                                   ; in case blur is triggered after user clicks Enter or Esc
                                   :on-blur     #(when editing?
                                                  (dispatch [:on-stop-editing id]))}])

                   :component-did-update
                   (fn [this]
                     (.focus (r/dom-node this)))

                   ; this handler is needed in case app model is loaded from local storage
                   :component-did-mount
                   (fn [this]
                     (.focus (r/dom-node this)))}))

(defn -todo
  [{:keys [id title editing? completed?] :as _todo} dispatch]
  [:li {:class (cond editing? "editing" completed? "completed")}
   [:div.view
    [:input.toggle {:type      "checkbox"
                    :checked   completed?
                    :on-change #(dispatch [:on-toggle id])}]
    [:label {:on-double-click #(dispatch [:on-start-editing id])} title]
    [:button.destroy {:on-click #(dispatch [:on-remove id])}]]

   [-todo-input id title editing? dispatch]])

(defn -todo-list
  [todos all-completed? dispatch]
  [:section.main
   [:input.toggle-all {:type      "checkbox"
                       :checked   all-completed?
                       :on-change #(dispatch :on-toggle-all)}]
   [:label {:for "toggle-all"} "Mark all as complete"]
   [:ul.todo-list
    (for [todo todos]
      ^{:key (:id todo)}
      [-todo todo dispatch])]])

(defn -footer
  [active-count has-completed-todos? visibility visibility-spec dispatch]
  [:footer.footer
   [:span.todo-count
    [:strong active-count] " " (if (= active-count 1) "item" "items") " left"]

   [:ul.filters
    (for [{:keys [key title href]} visibility-spec]
      ^{:key key}
      [:li [:a
            {:href  href
             :class (if (= visibility key) "selected")}
            title]])]

   (when has-completed-todos?
     [:button.clear-completed {:on-click #(dispatch :on-clear-completed)} "Clear completed"])])

(defn view
  [{:keys [field has-todos? todos all-completed? active-count has-completed-todos? visibility visibility-spec]
    :as   _view-model}
   dispatch]
  [:section.todoapp
   [-header @field dispatch]

   "-->" (pr-str @field)
   "-->" (pr-str @todos)

   #_(when @has-todos?
     [:div
      [-todo-list @todos @all-completed? dispatch]
      [-footer @active-count @has-completed-todos? @visibility @visibility-spec dispatch]])])