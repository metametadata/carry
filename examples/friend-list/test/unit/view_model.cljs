(ns unit.view-model
  (:require
    [friend-list.core :as friend-list]
    [reagent.core :as r]
    [schema-generators.generators :as g]
    [cljs.test :refer-macros [deftest is]])
  (:require-macros [reagent.ratom :refer [run! reaction]]))

(defn test-view-model-tracks-model-key
  [model-key act-action expected-view-model-value]
  (let [{:keys [initial-model reconcile]} (friend-list/new-spec :_history :_search)
        model (r/atom initial-model)
        view-model (friend-list/view-model (reaction @model))
        witness (atom nil)]
    (is (contains? view-model model-key) "self-test")
    (run! (reset! witness @(model-key view-model)))

    ; act
    (swap! model reconcile act-action)

    ; force reaction updates
    (r/flush)

    ; assert
    (is (= expected-view-model-value @witness))))

(deftest
  tracks-query
  (test-view-model-tracks-model-key :query [:set-query "new query"] "new query"))

(deftest
  tracks-friends
  (let [new-friends (g/sample 3 friend-list/Friend)]
    (test-view-model-tracks-model-key :friends [:set-friends new-friends] new-friends)))