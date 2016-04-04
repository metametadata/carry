(ns app.view-model
  (:require [app.router :as router]
            [reagent-mvsa.core :as mvsa])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn -route->visibility
  [visibility-spec route]
  (if-let [result (->> visibility-spec
                       (filter #(= (:route %) route))
                       first
                       :key)]
    result
    (do
      ; we don't use .error because PhantomJS somehow stops on it on running tests
      (.log js/console "ERROR: Could not determine visibility for route"
            (pr-str route)
            ". Will use some default visibility.")
      (-> visibility-spec first :key))))

(defn view-model
  [model]
  ; reactions are extracted for better perfromance, e.g.:
  ; when input field changes most reactions will not be recalculated
  ; because all-todos is still the same
  (let [visibility-spec [{:key :all :title "All" :route ::router/all}
                         {:key :active :title "Active" :route ::router/active}
                         {:key :completed :title "Completed" :route ::router/completed}]
        token (reaction (:middleware.history/token @model))
        visibility (reaction (->> @token
                                  router/token->route
                                  (-route->visibility visibility-spec)))
        all-todos (reaction (:todos @model))]
    (-> model
        (mvsa/track-keys [:field])
        (assoc :visibility-spec (reaction visibility-spec)
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