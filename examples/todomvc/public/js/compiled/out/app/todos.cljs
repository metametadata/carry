(ns app.todos
  (:require [app.middleware.routing :as routing]
            [mvsa.helpers :as helpers]
            [cljs.core.match :refer-macros [match]]
            [reagent.core :as r]
            [com.rpl.specter :as s])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;; Model
(defn -init-todo
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

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile
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
(defn -visibility
  [visibility-spec model]
  (if-let [result (->> visibility-spec
                       (filter #(contains? (:tokens %) (::routing/token model)))
                       first
                       :key)]
    result
    (do
      ; we don't use .error because PhantomJS somehow stops on it on running tests
      (.log js/console "ERROR: Could not determine visibility for token" (pr-str (::routing/token model)) ". Will use some default visibility.")
      (-> visibility-spec first :key))))

(defn view-model
  [model]
  ; reactions are extracted for better perfromance, e.g.:
  ; when input field changes most reactions will not be recalculated,
  ; because todos stay the same
  (let [; Multiple tokens are supported mostly for :all case,
        ; because on navigating to base url the token is "", but on clicking the link the token becomes "/".
        ; Although it's always the same, the spec is made a reaction for consistency with other keys.
        visibility-spec (reaction [{:key :all :title "All" :href "#/" :tokens #{"" "/"}}
                                   {:key :active :title "Active" :href "#/active" :tokens #{"/active"}}
                                   {:key :completed :title "Completed" :href "#/completed" :tokens #{"/completed"}}])
        all-todos (reaction (:todos @model))
        visibility (reaction (-visibility @visibility-spec @model))]
    (-> model
        (helpers/track-keys [:field])
        (assoc :visibility-spec visibility-spec
               :visibility visibility
               :has-todos? (reaction (-> @all-todos count pos?))
               :todos (reaction (filter (case @visibility
                                          :all (constantly true)
                                          :active (complement :completed?)
                                          :completed :completed?)
                                        @all-todos))
               :all-completed? (reaction (every? :completed? @all-todos))
               :active-count (reaction (->> @all-todos
                                            (filter (complement :completed?))
                                            count))
               :has-completed-todos? (reaction (->> @all-todos
                                                    (filter :completed?)
                                                    count
                                                    pos?))))))

;;;;;;;;;;;;;;;;;;;;;;;; Start
(defn on-start
  [_model _dispatch-signal]
  (println "[todos] custom start code"))

;;;;;;;;;;;;;;;;;;;;;;;; Stop
(defn on-stop
  [_model _dispatch-signal]
  (println "[todos] custom stop code"))

;;;;;;;;;;;;;;;;;;;;;;;; Spec
(defn new-spec
  [history todo-titles]
  (-> {:initial-model (new-model todo-titles)
       :control       control
       :reconcile     reconcile
       :on-start      on-start
       :on-stop       on-stop}
      (routing/add history)))