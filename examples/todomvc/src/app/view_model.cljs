(ns app.view-model
  (:require [middleware.routing :as routing]
            [reagent-mvsa.core :as mvsa])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn -visibility
  [visibility-spec model]
  (if-let [result (->> visibility-spec
                       (filter #(= (:token %) (::routing/token model)))
                       first
                       :key)]
    result
    (do
      ; we don't use .error because PhantomJS somehow stops on it on running tests
      (.log js/console "ERROR: Could not determine visibility for token"
            (pr-str (::routing/token model))
            ". Will use some default visibility.")
      (-> visibility-spec first :key))))

(defn new-view-model
  [use-hash-urls?]
  (fn view-model
    [model]
    ; reactions are extracted for better perfromance, e.g.:
    ; when input field changes most reactions will not be recalculated
    ; because todos are the same
    (let [visibility-spec (reaction [{:key :all :title "All" :token "/" :href (if use-hash-urls? "#/" "/")}
                                     {:key :active :title "Active" :token "/active" :href (if use-hash-urls? "#/active" "/active")}
                                     {:key :completed :title "Completed" :token "/completed" :href (if use-hash-urls? "#/completed" "/completed")}])
          all-todos (reaction (:todos @model))
          visibility (reaction (-visibility @visibility-spec @model))]
      (-> model
          (mvsa/track-keys [:field])
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
                                                      pos?)))))))