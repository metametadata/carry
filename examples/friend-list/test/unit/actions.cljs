(ns unit.actions
  (:require
    [friend-list.core :as friend-list]
    [schema-generators.generators :as g]
    [clojure.test :refer [deftest is]]))

(deftest
  sets-query
  (let [{:keys [initial-model on-action]} (friend-list/new-blueprint :_history :_search)]
    (is (= "new query"
           (:query (on-action initial-model [:set-query "new query"]))))))

(deftest
  sets-friends
  (let [{:keys [initial-model on-action]} (friend-list/new-blueprint :_history :_search)
        new-friends (g/sample 3 friend-list/Friend)]
    (is (= new-friends
           (:friends (on-action initial-model [:set-friends new-friends]))))))