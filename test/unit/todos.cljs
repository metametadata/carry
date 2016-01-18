(ns unit.todos
  (:require
    [cljs.test :as ct :refer-macros [deftest is testing]]
    [clojure.test.check.generators :as gen]
    [com.gfredericks.test.chuck.clojure-test :refer-macros [checking for-all]]

    [frontend.todos :as todos]
    [frontend.ui :as ui]))

;;;;;;;;;;;;;;;; Customize reporting of test.chuck
(defmethod ct/report [::ct/default :my-shrunk] [m]
  (newline)
  (println "\nPROPERTY TEST FAILED"
           "\nCase:" (with-out-str (cljs.pprint/pprint (:fail m)))
           "\nShrunk:" (with-out-str (cljs.pprint/pprint (-> m :shrunk :smallest)))
           "\nNum tests:" (:num-tests m)
           "\nSeed:" (:seed m)))

(defn my-shrunk-report [m]
  (merge (dissoc m :result) {:type :my-shrunk}))

;;;;;;;;;;;;;;;;;;;;;;;; Helpers
(defn new-app
  "Create app component instance, run provided signals, return updated component."
  [signals]
  (let [app (ui/connect-reactive-reagent (-> (todos/new-spec nil)
                                             #_ui/wrap-log)
                                         [])]
    (dorun (map (:dispatch-signal app) signals))

    (specify! app
      IPrintWithWriter
      ; do not print the full app structure in test reports
      (-pr-writer [_ writer _opts]
        (-write writer "#<App>")))))

(defn ids-unique?
  [app]
  (apply distinct? (map :id @(:todos (:view-model app)))))

;;;;;;;;;;;;;;;;;;;;;;;; Generators
(def gen-todo-title
  (gen/such-that (complement clojure.string/blank?) gen/string-alphanumeric))

(def gen-signal-add-todo
  (gen/fmap #(-> [[:on-update-field %] :on-add]) gen-todo-title))

(def gen-signals-add-todos
  (gen/not-empty
    (gen/fmap
      (partial apply concat)
      (gen/vector gen-signal-add-todo))))

#_(deftest debug
    (doseq [signals (gen/sample gen-signals-add-todos 5)]
      (println (count signals) (pr-str signals))))

;;;;;;;;;;;;;;;;;;;;;;;; Tests
(deftest property-tests
  (with-redefs
    [com.gfredericks.test.chuck.clojure-test/shrunk-report my-shrunk-report]
    (checking
      "after adding todos"
      100
      [signals gen-signals-add-todos]
      (let [app (new-app signals)]
        (is (= (/ (count signals) 2) (count @(:todos (:view-model app))))
            "self-test: number of created todos")

        (is (ids-unique? app))))))

#_(deftest failing-unit-test
    (is (= 5 (+ 2 2))))
