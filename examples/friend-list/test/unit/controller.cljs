(ns unit.controller
  (:require
    [friend-list.core :as friend-list]
    [cljs.test :refer-macros [deftest is testing]]
    [cljs.core.match :refer-macros [match]]
    [clj-fakes.core :as f :include-macros true])
  (:require-macros [reagent.ratom :refer [reaction]]))

(deftest
  on-navigation-updates-query-and-searches
  (f/with-fakes
    (let [search (f/fake [[:_new-token f/any?] #(%2 :_found-friends)])
          control (friend-list/new-control :_history search)
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (control :_model [:middleware.routing/on-navigate :_new-token] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-called-once dispatch-action [[:set-query :_new-token]]))
      (is (f/was-called-once dispatch-signal [[:on-search-success :_new-token :_found-friends]])))))

(deftest
  on-search-success-updates-friends
  (f/with-fakes
    (let [control (friend-list/new-control :_history :_search)
          model (reaction (assoc friend-list.core/initial-model :query :_current-query))
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (control model [:on-search-success :_current-query :_found-friends] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-called-once dispatch-action [[:set-friends :_found-friends]]))
      (is (f/was-not-called dispatch-signal)))))

(deftest
  on-search-success-ignores-outdated-results
  (f/with-fakes
    (let [control (friend-list/new-control :_history :_search)
          model (reaction (assoc friend-list.core/initial-model :query :_current-query))
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (control model [:on-search-success :_outdated-query :_found-friends] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-not-called dispatch-action))
      (is (f/was-not-called dispatch-signal)))))