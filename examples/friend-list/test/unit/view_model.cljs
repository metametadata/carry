(ns unit.view-model
  (:require
    [friend-list.core :as friend-list]
    [reagent.core :as r]
    [cljs.test :refer-macros [deftest is]]))

(deftest
  tracks-query
  (let [spec (friend-list/new-spec :_history :_search)
        model (r/atom (:initial-model spec))
        view-model (friend-list/view-model model)]
    ; act
    (swap! model (:reconcile spec) [:set-query :_new-query])

    ; assert
    (is (= :_new-query @(:query view-model)))))

(deftest
  tracks-friends
  (let [spec (friend-list/new-spec :_history :_search)
        model (r/atom (:initial-model spec))
        view-model (friend-list/view-model model)]
    ; act
    (swap! model (:reconcile spec) [:set-friends :_new-friends])

    ; assert
    (is (= :_new-friends @(:friends view-model)))))