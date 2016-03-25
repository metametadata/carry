(ns unit.reconciler
  (:require
    [friend-list.core :as friend-list]
    [cljs.test :refer-macros [deftest is]]))

(deftest
  sets-query
  (is (= :_new-query
         (:query (friend-list/reconcile friend-list/initial-model [:set-query :_new-query])))))

(deftest
  sets-friends
  (is (= :_new-friends
         (:friends (friend-list/reconcile friend-list/initial-model [:set-friends :_new-friends])))))