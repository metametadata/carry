(ns unit.todos
  (:require
    [cljs.test :as ct :refer-macros [deftest is testing]]
    [clojure.test.check.generators :as gen :include-macros true]
    [com.gfredericks.test.chuck.clojure-test :refer-macros [checking for-all]]

    [frontend.todos :as todos]
    [frontend.ui :as ui]))

;;;;;;;;;;;;;;;; Customize reporting of test.chuck
(defmethod ct/report [::ct/default :my-shrunk]
  [m]
  (println "\nPROPERTY TEST FAILED"
           "\nCase:" (pr-str (:fail m))
           "\n\nShrunk:" (with-out-str (cljs.pprint/pprint (-> m :shrunk :smallest)))
           "\nNum tests:" (:num-tests m)
           "\nSeed:" (:seed m)))

(defn my-shrunk-report
  [m]
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

;;;;;;;;;;;;;;;;;;;;;;;; gen-signals-add-todos
(defn signals-adds
  [num]
  ; title is hardcoded, because we are not interested in testing different string values
  (->> (take num (repeat [[:on-update-field "some title"] :on-add]))
       (apply concat)))

(def gen-signals-adds
  (gen/fmap signals-adds gen/s-pos-int))

;;;;;;;;;;;;;;;;;;;;;;;; gen-signals-add-and-toggle-todos
(defn add-available-ids
  [add-pattern]
  (map #(-> {:adds          %1
             :available-ids (range %2)})
       add-pattern
       (reductions + add-pattern)))

(defn gen-add-toggle-pattern
  "Generator which turns every :available-ids into random :toggle-pattern."
  [adds-with-ids]
  (letfn [(gen-toggle-pattern [available-ids]
            (gen/vector
              (gen/elements available-ids)
              1 7))]
    ; TODO: try to use gen/let to unwind this code?
    (apply gen/tuple
           (map (fn [pattern]
                  (gen/fmap #(-> pattern
                                 (dissoc :available-ids)
                                 (assoc :toggle-pattern %))
                            (gen-toggle-pattern (:available-ids pattern))))
                adds-with-ids))))

(defn signals-toggles
  [toggle-pattern]
  (map #(-> [:on-toggle %]) toggle-pattern))

(defn signals-adds-and-toggles
  [add-toggle-pattern]
  (mapcat #(concat (signals-adds (:adds %))
                   (signals-toggles (:toggle-pattern %)))
          add-toggle-pattern))

; Generates a sequence of signals for adding adding and randomly toggling items
(def gen-signals-adds-and-toggles
  (gen/let
    [add-pattern (gen/not-empty (gen/vector gen/s-pos-int))
     ; e.g. generates: [1 3] <- first add 1 item, then add 3 items
     add-pattern-with-available-ids (gen/return (add-available-ids add-pattern))
     ; ({:adds 1, :available-ids (0)} <- id=0 is available after adding 1 item
     ;  {:adds 3, :available-ids (0 1 2 3)}) <- after this step ids 0-3 are available
     add-toggle-pattern (gen-add-toggle-pattern add-pattern-with-available-ids)
     ; ({:adds 1, :toggle-pattern [0 0]} <- toggle item 0 twice
     ;  {:adds 3, :toggle-pattern [3 1 1 2]}) <- toggle 3, then 1, etc.
     ]
    (signals-adds-and-toggles add-toggle-pattern)
    ;([:on-update-field "some title"] :on-add
    ;  [:on-toggle 0] [:on-toggle 0]
    ;  [:on-update-field "some title"] :on-add
    ;  [:on-update-field "some title"] :on-add
    ;  [:on-update-field "some title"] :on-add
    ;  [:on-toggle 3] [:on-toggle 1] [:on-toggle 1] [:on-toggle 2])
    ))

#_(deftest debug
  (doseq [signals (gen/sample gen-signals-adds-and-toggles 5)]
    ;(println (count signals))
    (cljs.pprint/pprint signals)))

;;;;;;;;;;;;;;;;;;;;;;;; Tests
(deftest property-tests
  (with-redefs
    [com.gfredericks.test.chuck.clojure-test/shrunk-report my-shrunk-report]
    (checking
      "after adding todos"
      100
      [signals gen-signals-adds]
      (let [app (new-app signals)]
        (is (= (/ (count signals) 2) (count @(:todos (:view-model app))))
            "self-test: number of created todos")

        (is (ids-unique? app))))))