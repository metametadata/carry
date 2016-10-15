(ns app.view-model
  (:require [app.router :as router]
            [carry-reagent.core :as carry-reagent])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn view-model
  [model]
  ; reactions are extracted for better perfromance, e.g.:
  ; when input field changes most reactions will not be recalculated
  ; because all-todos is still the same
  (let [token (reaction (:carry-history.core/token @model))
        route (reaction (or (router/token->route @token) ::router/all)) ; on unknown route fallbacks to showing all todos
        visibility-config (reaction (->> [{:title "All" :route ::router/all}
                                          {:title "Active" :route ::router/active}
                                          {:title "Completed" :route ::router/completed}]
                                         (mapv #(assoc % :selected? (= (:route %) @route)))))
        all-todos (reaction (:todos @model))]
    (-> model
        (carry-reagent/track-keys [:field])
        (assoc :visibility-config visibility-config
               :has-todos? (reaction (-> @all-todos count pos?))
               :todos (reaction (filter (case @route
                                          ::router/all (constantly true)
                                          ::router/active (complement :completed?)
                                          ::router/completed :completed?)
                                        @all-todos))
               :all-completed? (reaction (every? :completed? @all-todos))
               :active-count (reaction (->> @all-todos
                                            (filter (complement :completed?))
                                            count))
               :has-completed-todos? (reaction (->> @all-todos
                                                    (filter :completed?)
                                                    count
                                                    pos?))))))