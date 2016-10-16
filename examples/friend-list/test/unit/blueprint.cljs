(ns unit.blueprint
  (:require
    [friend-list.core :as friend-list]
    [clojure.test :refer [deftest is]]))

(defn test-routing-middleware-is-applied
  [blueprint]
  ; TODO: given a blueprint check that it implements expected routing behavior; this fn/macro must be reusable to test any blueprint
  ; initial-model tests:
  ;  ::token is added
  ;  app can also set ::token itself
  ; on-signal tests:
  ;  start
  ;  stop
  ;  browser event
  ;  user event
  ;  app event
  ; on-action tests:
  ;  set-token
  ;  app action
  )

(deftest
  supports-routing
  (test-routing-middleware-is-applied (friend-list/new-blueprint :_history :_search)))