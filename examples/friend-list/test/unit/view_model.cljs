(ns unit.view-model
  (:require
    [friend-list.core :as friend-list]
    [reagent.core :as r]
    [schema-generators.generators :as g]
    [cljs.test :refer-macros [deftest is]]))

(deftest
  tracks-query
  (let [{:keys [initial-model reconcile]} (friend-list/new-spec :_history :_search)
        model (r/atom initial-model)
        view-model (friend-list/view-model model)]
    ; act
    (swap! model reconcile [:set-query "new query"])

    ; assert
    (is (= "new query" @(:query view-model)))))

(deftest
  tracks-friends
  (let [{:keys [initial-model reconcile]} (friend-list/new-spec :_history :_search)
        model (r/atom initial-model)
        view-model (friend-list/view-model model)
        new-friends (g/sample 3 friend-list/Friend)]
    ; act
    (swap! model reconcile [:set-friends new-friends])

    ; assert
    (is (= new-friends @(:friends view-model)))))