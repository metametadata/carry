(ns unit.todos
  (:require
    [cljs.test :refer-macros [deftest is testing]]))

(deftest failing-test
  (is (= 5 (+ 2 2))))