(ns unit.reconciler
  (:require
    [friend-list.core :as friend-list]
    [schema-generators.generators :as g]
    [cljs.test :refer-macros [deftest is]]))

(deftest
  sets-query
  (let [{:keys [initial-model reconcile]} (friend-list/new-spec :_history :_search)]
    (is (= "new query"
           (:query (reconcile initial-model [:set-query "new query"]))))))

(deftest
  sets-friends
  (let [{:keys [initial-model reconcile]} (friend-list/new-spec :_history :_search)
        new-friends (g/sample 3 friend-list/Friend)]
    (is (= new-friends
           (:friends (reconcile initial-model [:set-friends new-friends]))))))