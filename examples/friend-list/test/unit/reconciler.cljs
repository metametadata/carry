(ns unit.reconciler
  (:require
    [friend-list.core :as friend-list]
    [cljs.test :refer-macros [deftest is]]))

(deftest
  sets-query
  (let [spec (friend-list/new-spec :_history :_search)]
    (is (= :_new-query
           (:query ((:reconcile spec) (:initial-model spec) [:set-query :_new-query]))))))

(deftest
  sets-friends
  (let [spec (friend-list/new-spec :_history :_search)]
    (is (= :_new-friends
           (:friends ((:reconcile spec) (:initial-model spec) [:set-friends :_new-friends]))))))