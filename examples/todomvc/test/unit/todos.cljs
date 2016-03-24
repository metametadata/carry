(ns unit.todos
  (:require
    [cljs.test :refer-macros [deftest is testing]]
    [cljs.core.match :refer-macros [match]]))


(deftest
  plus-test
  (is (=  5 (* 2 2)) "hey!"))