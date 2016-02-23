(ns app.view-model
  (:require [app.middleware.routing :as routing]
            [mvsa.helpers :as helpers])
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