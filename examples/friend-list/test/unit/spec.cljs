(ns unit.spec
  (:require
    [friend-list.core :as friend-list]
    [cljs.test :refer-macros [deftest is]]))

(defn test-routing-middleware-is-applied
  [spec]
  ; TODO: given a spec check that it implements expected routing behavior; this fn/macro must be reusable to test any spec
  ; initial-model tests:
  ;  ::token is added
  ;  app can also set ::token itself
  ; controller tests:
  ;  start
  ;  stop
  ;  browser event
  ;  user event
  ;  app event
  ; reconciler tests:
  ;  set-token
  ;  app action
  )

(deftest
  supports-routing
  (test-routing-middleware-is-applied (friend-list/new-spec :_history :_search)))