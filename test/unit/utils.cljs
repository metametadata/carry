(ns unit.utils
  (:require
    [frontend.todos :as todos]
    [frontend.ui :as ui]
    [cljs.test :refer-macros [is]]
    [clojure.test.check.generators :as gen :include-macros true]))

(defn new-app
  "Creates app component instance for unit tests."
  []
  (let [app (ui/connect-reactive-reagent (-> (todos/new-spec nil)
                                             #_ui/wrap-log)
                                         [])]
    (specify! app
      IPrintWithWriter
      ; do not print the full app structure in test reports
      (-pr-writer [_ writer _opts]
        (-write writer "#<App>")))))

;;;;;;;;;;;;;;;;;;;;;;;; Stateful Testing
(defn gen-signals
  "Returns a generator which produces allowed sequences of signals."
  [initial-test-model next-step gen-next-signal]
  (letfn [(gen-signals-using-length
            [len test-model]
            (gen/let
              [signal (gen-next-signal test-model)]
              (if (<= len 1)
                ; generate a sequence consisting of a single signal
                [signal]

                ; OR recursively generate a longer sequence
                (gen/let
                  [next-signals (gen-signals-using-length (dec len)
                                                          (next-step test-model signal))]
                  (into [signal] next-signals)))))]
    (gen/let
      ; first let's generate a desired length which depends on current test "size"
      [len gen/s-pos-int]
      (gen-signals-using-length len initial-test-model))))

(defn check-signals
  "Executes signals against app and test model. After each step executes postcondition.
  Execution is stopped with test report if postcondition fails."
  [initial-test-model signals next-step postcondition]
  (let [app (new-app)
        test-model (atom initial-test-model)]
    (loop [ss signals]
      (when-let [s (first ss)]
        ((:dispatch-signal app) s)
        (swap! test-model next-step s)

        (if-let [desc (postcondition s app @test-model)]
          ; fail using (is ..) in order to generate test.chuck report
          (is nil (str "postcondition was not met after handling singal: " (pr-str s)
                         "\nDetails:\n" desc))
          (recur (rest ss)))))))