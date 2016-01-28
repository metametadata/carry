; TodoMVC component
(ns frontend.todos
  (:require [cljs.core.match :refer-macros [match]]
            [reagent.core :as r]
            [com.rpl.specter :as s]
            [frontend.ui :as ui]
            [frontend.devtools :as devtools]
            [frontend.routing :as routing])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;; Model
(defn -init-todo
  [id title]
  {:id             id
   :title          title
   :completed?     false
   :original-title ""
   :editing?       false})

(defn init
  [todo-titles]
  {:field   ""
   ; list of maps
   :todos   (->> todo-titles
                 (map-indexed vector)
                 (map (partial apply -init-todo)))
   :next-id (count todo-titles)})

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

;;;;;;;;;;;;;;;;;;;;;;;; Control
(defn control
  [_model_ signal dispatch]
  (match signal
         :on-connect (dispatch :sample-action)

         ; will come from devtools
         ::devtools/on-did-replay nil

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

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile
(defn reconcile
  [model action]
  (match action
         ; do nothing, only for a demo
         :sample-action model

         [:update-field val]
         (assoc model :field val)

         :add
         (let [title (clojure.string/trim (:field model))]
           (if (clojure.string/blank? title)
             model
             (-> model
                 (assoc :field "")
                 (update :next-id inc #_(min (inc %) 3))    ; commented is the code which will make tests fail
                 (update :todos concat [(-init-todo (:next-id model) title)]))))

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

;;;;;;;;;;;;;;;;;;;;;;;; View model
(def -visibility-spec
  ; multiple tokens are supported mostly for :all case:
  ; on navigating to base url the token is "", but on clicking the link the token becomes "/"
  [{:key :all :title "All" :href "#/" :tokens #{"" "/"}}
   {:key :active :title "Active" :href "#/active" :tokens #{"/active"}}
   {:key :completed :title "Completed" :href "#/completed" :tokens #{"/completed"}}])

(defn -visibility
  [model]
  (if-let [result (->> -visibility-spec
                       (filter #(contains? (:tokens %) (::routing/token model)))
                       first
                       :key)]
    result
    (do
      ; we don't use .error because PhantomJS somehow stops on it on running testing
      (.log js/console "ERROR: Could not determine visibility for token" (pr-str (::routing/token model)) ". Will use some default visibility.")
      (-> -visibility-spec first :key))))

(defn view-model
  [model]
  ; reactions are extracted for better perfromance, e.g.:
  ; when input field changes most reactions will not be recalculated,
  ; because todos stay the same
  (let [todos (reaction (:todos @model))
        visibility (reaction (-visibility @model))]
    (-> model
        (ui/track-keys [:field])
        (assoc :visibility visibility
               :has-todos? (reaction (-> @todos count pos?))
               :todos (reaction (filter (case @visibility
                                          :all (constantly true)
                                          :active (complement :completed?)
                                          :completed :completed?)
                                        @todos))
               :all-completed? (reaction (every? :completed? @todos))
               :active-count (reaction (->> @todos
                                            (filter (complement :completed?))
                                            count))
               :has-completed-todos? (reaction (->> @todos
                                                    (filter :completed?)
                                                    count
                                                    pos?))))))

;;;;;;;;;;;;;;;;;;;;;;;; View
(defn -enter-key?
  [e]
  (= (.-keyCode e) 13))

(defn -escape-key?
  [e]
  (= (.-keyCode e) 27))

(defn -view-header
  [field dispatch]
  [:header.header
   [:h1 "todos"]
   [:input.new-todo {:placeholder "What needs to be done?"
                     :value       field
                     :on-change   #(dispatch [:on-update-field (.. % -target -value)])
                     :on-key-down #(when (-enter-key? %) (dispatch :on-add))}]])

(defn -view-todo-input
  "Note that |editing?| is passed only to trigger :component-did-update to set focus on the state change."
  [_id_ _title_ _editing?_ _dispatch_]
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

(defn -view-todo
  [{:keys [id title editing? completed?] :as _todo_} dispatch]
  [:li {:class (cond editing? "editing" completed? "completed")}
   [:div.view
    [:input.toggle {:type      "checkbox"
                    :checked   completed?
                    :on-change #(dispatch [:on-toggle id])}]

    [:label {:on-double-click #(dispatch [:on-start-editing id])} title]

    [:button.destroy {:on-click #(dispatch [:on-remove id])}]]

   [-view-todo-input id title editing? dispatch]])

(defn -view-todo-list
  [todos all-completed? dispatch]
  [:section.main
   [:input.toggle-all {:type      "checkbox"
                       :checked   all-completed?
                       :on-change #(dispatch :on-toggle-all)}]
   [:label {:for "toggle-all"} "Mark all as complete"]

   [:ul.todo-list
    (for [todo todos]
      ^{:key (:id todo)}
      [-view-todo todo dispatch])]])

(defn -view-footer
  [active-count has-completed-todos? visibility dispatch]
  [:footer.footer
   [:span.todo-count
    [:strong active-count] (str " " (if (= active-count 1) "item" "items")
                                " left")]
   [:ul.filters
    (for [{:keys [key title href]} -visibility-spec]
      ^{:key key}
      [:li
       [:a
        {:href  href
         :class (if (= visibility key) "selected")}
        title]])]

   (if has-completed-todos?
     [:button.clear-completed {:on-click #(dispatch :on-clear-completed)} "Clear completed"])])

(defn view
  [{:keys [field has-todos? todos all-completed? active-count has-completed-todos? visibility] :as _view-model_}
   dispatch]
  [:section.todoapp
   [-view-header @field dispatch]

   (if @has-todos?
     [:div
      [-view-todo-list @todos @all-completed? dispatch]
      [-view-footer @active-count @has-completed-todos? @visibility dispatch]])])

;;;;;;;;;;;;;;;;;;;;;;;; Spec
(defn new-spec
  [history]
  (-> {:init       init
       :view-model view-model
       :view       view
       :control    control
       :reconcile  reconcile}
      ; apply middleware
      (routing/wrap history)))