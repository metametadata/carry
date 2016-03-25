(ns unit.reconciler
  (:require
    [friend-list.core :as friend-list]
    [cljs.test :refer-macros [deftest is]]))

(deftest
  sets-query
  (let [{:keys [initial-model reconcile]} (friend-list/new-spec :_history :_search)]
    (is (= :_new-query
           (:query (reconcile initial-model [:set-query :_new-query]))))))

(deftest
  sets-friends
  (let [{:keys [initial-model reconcile]} (friend-list/new-spec :_history :_search)]
    (is (= :_new-friends
           (:friends (reconcile initial-model [:set-friends :_new-friends]))))))