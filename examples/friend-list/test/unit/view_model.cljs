(ns unit.view-model
  (:require
    [friend-list.core :as friend-list]
    [reagent.core :as r]
    [cljs.test :refer-macros [deftest is]]))

(deftest
  tracks-query
  (let [model (r/atom friend-list/initial-model)
        view-model (friend-list/view-model model)]
    ; act
    (swap! model friend-list/reconcile [:set-query :_new-query])

    ; assert
    (is (= :_new-query @(:query view-model)))))

(deftest
  tracks-friends
  (let [model (r/atom friend-list/initial-model)
        view-model (friend-list/view-model model)]
    ; act
    (swap! model friend-list/reconcile [:set-friends :_new-friends])

    ; assert
    (is (= :_new-friends @(:friends view-model)))))