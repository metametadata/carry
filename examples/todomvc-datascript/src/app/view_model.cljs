(ns app.view-model
  (:require [datascript.core :as d]
            [app.middleware.routing :as routing])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn -visibility
  [visibility-spec model]
  (if-let [result (->> visibility-spec
                       (filter #(contains? (:tokens %) (::routing/token model)))
                       first
                       :key)]
    result
    (do
      ; we don't use .error because PhantomJS somehow stops on it on running tests
      (.log js/console "ERROR: Could not determine visibility for token"
            (pr-str (::routing/token model))
            ". Will use some default visibility.")
      (-> visibility-spec first :key))))

(defn view-model
  [model]
  (let [visibility-spec (reaction [{:key :all :title "All" :href "#/" :tokens #{"" "/"}}
                                   {:key :active :title "Active" :href "#/active" :tokens #{"/active"}}
                                   {:key :completed :title "Completed" :href "#/completed" :tokens #{"/completed"}}])
        all-todos (reaction (d/q '[:find (pull ?e [*]) :where [?e :todo/title]] (:db @model)))
        visibility (reaction (-visibility @visibility-spec @model))]
    {:field (reaction (d/q '[:find ?f . :where [_ :field ?f]] (:db @model)))

     ;:visibility-spec      visibility-spec
     ;:visibility           visibility
     ;
     ;:has-todos?           (reaction (-> @all-todos count pos?))
     :todos (reaction (filter (case @visibility
                                :all (constantly true)
                                :active (complement :completed?)
                                :completed :completed?)
                              @all-todos))
     ;:all-completed?       (reaction (every? :completed? @all-todos))
     ;:active-count         (reaction (->> @all-todos
     ;                                     (filter (complement :completed?))
     ;                                     count))
     ;:has-completed-todos? (reaction (->> @all-todos
     ;                                     (filter :completed?)
     ;                                     count
     ;                                     pos?))
     }))
