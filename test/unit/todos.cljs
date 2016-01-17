(ns unit.todos
  (:require
    [cljs.test :refer-macros [deftest is testing]]
    [clojure.test.check :as tc]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop :include-macros true]
    [clojure.test.check.clojure-test :refer-macros [defspec]]))

(deftest failing-unit-test
  (is (= 5 (+ 2 2))))

(defspec first-element-is-min-after-sorting
         100
         (prop/for-all [v (gen/not-empty (gen/vector gen/int))]
                       (= (apply max v)                     ; to fix change max -> min
                          (first (sort v)))))