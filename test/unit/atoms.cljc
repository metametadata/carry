(ns unit.atoms
  #?@(:clj  [
             (:require
               [clojure.test :refer :all]
               [unit.utils :as u]
               [carry.core :as carry]
               )]
      :cljs [(:require
               [cljs.test :refer-macros [deftest is]]
               [carry.core :as carry])
             ])
  #?(:cljs
     (:require-macros [unit.utils :as u])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; General
(deftest
  set-read-only-returns-same-atom
  (let [a (atom 100 :meta {:foo :bar})]
    (is (identical? a (carry/set-read-only! a)))))

(deftest
  set-read-only-preserves-atom-meta
  (let [a (atom 100 :meta {:foo :bar})]
    (carry/set-read-only! a)
    (is (= :bar (:foo (meta a))))))

(deftest
  set-read-only-preserves-atom-value
  (let [a (atom 100 :meta {:foo :bar})]
    (carry/set-read-only! a)
    (is (= 100 @a))))

(deftest
  read-only-status-can-be-checked
  (let [a (atom 100)]
    (is (not (carry/read-only? a)))
    (carry/set-read-only! a)
    (is (carry/read-only? a))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Resetting
(deftest
  atom-can-be-reset
  (let [a (atom 100)]
    (reset! a 200)
    (is (= 200 @a))))

(deftest
  read-only-atom-throws-after-resetting
  (let [a (carry/set-read-only! (atom 100))]
    (u/is-error-thrown
      #"^read-only atom was set to 200"
      (reset! a 200))

    (is (= 200 @a))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Swapping
(deftest
  atom-can-be-swapped
  (let [a (atom 100)]
    (swap! a inc)
    (is (= 101 @a))))

(deftest
  read-only-atom-throws-after-swapping
  (let [a (carry/set-read-only! (atom 100))]
    (u/is-error-thrown
      #"^read-only atom was set to 200"
      (swap! a + 100))

    (is (= 200 @a))))