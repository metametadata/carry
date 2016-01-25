(ns unit.todos
  (:require
    [unit.utils :as u]
    [cljs.test :as ct :refer-macros [deftest is testing]]
    [clojure.test.check.generators :as gen :include-macros true]
    [com.gfredericks.test.chuck.clojure-test :refer-macros [checking]]
    [cljs.core.match :refer-macros [match]]))

;;;;;;;;;;;;;;;; Customize reporting of test.chuck
(defmethod ct/report [::ct/default :my-shrunk]
  [m]
  (println "\nPROPERTY TEST FAILED"
           "\nCase:" (pr-str (:fail m))
           "\n\nShrunk:" (with-out-str (cljs.pprint/pprint (-> m :shrunk :smallest)))
           (str "\nnum-tests: " (:num-tests m)
                ", total-nodes-visited: " (-> m :shrunk :total-nodes-visited)
                ", depth: " (-> m :shrunk :depth)
                ", seed: " (:seed m))))

(defn my-shrunk-report
  [m]
  (merge (dissoc m :result) {:type :my-shrunk}))

;;;;;;;;;;;;;;;;;;;;;;;; Property Tests
(def gen-signals-adds
  (gen/let
    [adds-num gen/s-pos-int]
    ; title is hardcoded, because we are not interested in testing different string values
    (gen/return (->> [[:on-update-field "some title"] :on-add]
                     repeat
                     (take adds-num)
                     (apply concat)))))

#_(deftest debug
    (doseq [signals (gen/sample gen-signals-adds 5)]
      ;(println (count signals))
      (cljs.pprint/pprint signals)))

(defn duplicates [seq]
  (for [[v freq] (frequencies seq)
        :when (> freq 1)]
    v))

(deftest property-tests
  (with-redefs
    [com.gfredericks.test.chuck.clojure-test/shrunk-report my-shrunk-report]
    (checking
      "after adding todos"
      100
      [signals gen-signals-adds]
      (let [app (u/new-app)]
        (dorun (map (:dispatch-signal app) signals))

        (is (= (/ (count signals) 2) (count @(:todos (:view-model app))))
            "self-test: number of created todos")

        (is (empty? (->> app :view-model :todos deref (map :id) duplicates))
            "item ids must be unique")))))

;;;;;;;;;;;;;;;;;;;;;;;; Stateful Property Tests
(deftest stateful-property-tests
  (with-redefs
    [com.gfredericks.test.chuck.clojure-test/shrunk-report my-shrunk-report]
    ; setup
    (let [initial-test-model {:todos   {}                   ; {<id> <completed?>}
                              :next-id 0
                              :field   ""}]
      (letfn
        [; returns modified test-model depending on handled signal
         (next-step
           [test-model signal]
           (match signal
                  [:on-update-field val]
                  (assoc test-model :field val)

                  :on-add
                  (if (= "" (:field test-model))
                    test-model
                    (-> test-model
                        (update :todos assoc (:next-id test-model) false)
                        (assoc :field "")
                        (update :next-id inc)))

                  [:on-toggle id]
                  (do
                    (assert (contains? (:todos test-model) id)
                            (str "self-test: toggled item must be already added: " id))
                    (update-in test-model [:todos id] not))))

         ; based on current test model returns a generator which produces next allowed signal
         (gen-next-signal
           [test-model]
           (if (not= (:field test-model) "")
             ; we are not interested in several updates in a row, so add new item ASAP after field update
             (gen/return :on-add)

             (if-let [available-ids (keys (:todos test-model))]
               (gen/one-of [(gen/return [:on-update-field "some-title"])
                            (gen/fmap #(-> [:on-toggle %])
                                      (gen/elements available-ids))])
               (gen/return [:on-update-field "some-title"]))))

         ; given the handled signal and updated models checks if they are in expected state
         ; returns nil or a string describing a failure
         (postcondition
           [signal real-model test-model]
           (match signal
                  [:on-toggle id]
                  (let [real-todos @(:todos (:view-model real-model))
                        real-pattern (into {}
                                           (map #(-> [(:id %) (:completed? %)]) real-todos))
                        expected-pattern (:todos test-model)]
                    (when (not= expected-pattern real-pattern)
                      (str "Toggled todos must have expected state: " (pr-str expected-pattern)
                           "\nbut got: " (pr-str real-pattern))))

                  :else nil))]
        (checking
          "after randomly adding and toggling todos"
          10000
          [signals (u/gen-signals initial-test-model next-step gen-next-signal)]
          ;(println "> " (clojure.string/join "" (repeat (count signals) ".")) (count signals))
          (u/check-signals initial-test-model signals next-step postcondition))))))