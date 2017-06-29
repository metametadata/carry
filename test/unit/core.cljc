(ns unit.core
  (:require
    [clojure.test :refer [deftest is testing]]
    [unit.utils :as u]
    [carry.core :as carry]))

(defn is-read-only-reference
  [a]
  (assert (map? @a) "self test")
  (assert (not= @a {:val :new-value}) "self test")

  (u/is-exception-thrown
    java.lang.ClassCastException #"cannot be cast to clojure.lang.IAtom$"
    js/Error #"^No protocol method ISwap.-swap"
    (swap! a assoc :val :new-value)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; App
(deftest
  app-model-is-read-only-reference
  (let [blueprint {:initial-model {:val 100}
                   :on-signal     (constantly nil)
                   :on-action     (constantly nil)}
        app (carry/app blueprint)]
    (is (= {:val 100} @(:model app)))
    (is-read-only-reference (:model app))))

(deftest
  signal-handler-receives-read-only-model-reference
  (let [blueprint {:initial-model {:val 100}
                   :on-signal     (fn on-signal [model signal _dispatch-signal _dispatch-action]
                                    (if (= signal :on-test-model)
                                      (do
                                        (is (= {:val 100} @model))
                                        (is-read-only-reference model))

                                      (is nil "unexpected signal")))
                   :on-action     (constantly nil)}
        app (carry/app blueprint)]
    ((:dispatch-signal app) :on-test-model)))

(deftest
  action-dispatched-from-signal-handler-updates-model-using-action-handler
  (let [blueprint {:initial-model {:val 100}
                   :on-signal     (fn on-signal [_model signal _dispatch-signal dispatch-action]
                                    (if (= signal :on-update-value)
                                      (dispatch-action :update-value)
                                      (is nil "unexpected signal")))
                   :on-action     (fn on-action [model action]
                                    (if (= action :update-value)
                                      (update model :val inc)
                                      (is nil "unexpected action")))}
        app (carry/app blueprint)]
    ; act
    ((:dispatch-signal app) :on-update-value)

    ; assert
    (is (= {:val 101} @(:model app)))

    ; and again, just in case...
    ; act
    ((:dispatch-signal app) :on-update-value)

    ; assert
    (is (= {:val 102} @(:model app)))

    ; and just in case
    (testing "model is still read-only"
      (is-read-only-reference (:model app)))))

(deftest
  signal-handler-can-dispatch-new-signals
  (let [blueprint {:initial-model {:val 100}
                   :on-signal     (fn on-signal [_model signal dispatch-signal dispatch-action]
                                    (condp = signal
                                      :on-dispatch-new-signal (dispatch-signal :on-new-signal)
                                      :on-new-signal (dispatch-action :update-value)))
                   :on-action     (fn on-action [model action]
                                    (if (= action :update-value)
                                      (update model :val inc)
                                      (is nil "unexpected action")))}
        app (carry/app blueprint)]
    ; act
    ((:dispatch-signal app) :on-dispatch-new-signal)

    ; assert
    (is (= {:val 101} @(:model app)))))

(deftest
  dispatch-signal-returns-the-result-of-handler-function-call
  (let [blueprint {:initial-model {:val 100}
                   :on-signal     (constantly :on-signal-return-value)
                   :on-action     (constantly :on-action-return-value)}
        app (carry/app blueprint)]
    (is (= :on-signal-return-value ((:dispatch-signal app) :some-signal)))))

(deftest
  dispatch-action-returns-nil
  (let [blueprint {:initial-model {:val 100}
                   :on-signal     (fn on-signal [_model _signal _dispatch-signal dispatch-action]
                                    (is (nil? (dispatch-action :some-action))))
                   :on-action     (constantly :on-action-return-value)}
        app (carry/app blueprint)]
    ((:dispatch-signal app) :some-signal)))

(deftest
  actions-can-be-dispatched-from-model-watch
  (let [blueprint {:initial-model {:val 100}
                   :on-signal     (fn on-signal [model signal _dispatch-signal dispatch-action]
                                    (condp = signal
                                      :on-start
                                      (add-watch model :dispatch-action-watch
                                                 (fn dispatch-action-watch
                                                   [_key _ref old-state new-state]
                                                   (when (and (not= old-state new-state)
                                                              (= new-state {:val 101}))
                                                     (dispatch-action :update-value))))

                                      :on-update-value
                                      (dispatch-action :update-value)))
                   :on-action     (fn on-action [model action]
                                    (if (= action :update-value)
                                      (update model :val inc)
                                      (is nil "unexpected action")))}
        app (carry/app blueprint)]
    ; act
    ((:dispatch-signal app) :on-start)
    ((:dispatch-signal app) :on-update-value)

    ; assert
    (is (= {:val 102} @(:model app)))

    ; and just in case
    (testing "model is still read-only"
      (is-read-only-reference (:model app)))))

(defmulti on-signal-multi (fn [_model signal _dispatch-signal _dispatch-action] signal))
(defmethod on-signal-multi :on-inc
  [_model _ _dispatch-signal dispatch-action]
  (dispatch-action :inc))

(defmulti on-action-multi (fn [_model action] action))
(defmethod on-action-multi :inc
  [model _]
  (update model :val inc))

(deftest
  regression-handlers-can-be-multimethods
  (let [blueprint {:initial-model {:val 100}
                   :on-signal     on-signal-multi
                   :on-action     on-action-multi}
        app (carry/app blueprint)]
    ((:dispatch-signal app) :on-inc)

    ; assert
    (is (= {:val 101} @(:model app)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Entangle
(deftest
  entangled-reference-is-read-only
  (let [source-atom (atom {:val 100})
        entangled-atom (carry/entangle source-atom identity)]
    (is-read-only-reference entangled-atom)))

(deftest
  entangled-reference-reacts-to-source-atom-changes-using-specified-function
  (let [source-atom (atom {:val 100})
        entangled-ref (carry/entangle source-atom #(update % :val inc))]
    (is (= {:val 101} @entangled-ref))

    (swap! source-atom assoc :val 200)
    (is (= {:val 201} @entangled-ref))

    ; just in case:
    (is-read-only-reference entangled-ref)))

(deftest
  entangled-reference-does-not-watch-source-atom-without-need
  (let [source-atom (atom {:val 100})
        entangled-ref (carry/entangle source-atom #(update % :val inc))]
    ; exercise - play with ref a bit, just in case
    (is (= {:val 101} @entangled-ref))
    (swap! source-atom assoc :val 200)
    (is (= {:val 201} @entangled-ref))

    ; assert
    #?(:clj
       (is (zero? (count (.getWatches source-atom))))

       :cljs
       (do
         (let [watches-prop "watches"]
           (assert (.hasOwnProperty source-atom watches-prop))
           (is (zero? (count (aget source-atom watches-prop)))))))))

(deftest
  entangled-reference-is-watchable
  (let [source-atom (atom {:val 100})
        entangled-ref (carry/entangle source-atom #(update % :val inc))
        watch1-old-state (atom nil)
        watch1-new-state (atom nil)
        watch2-old-state (atom nil)
        watch2-new-state (atom nil)]
    (is (= entangled-ref (add-watch entangled-ref
                                    :watch1
                                    (fn [key ref os ns]
                                      (is (= entangled-ref ref))
                                      (is (= :watch1 key))
                                      (reset! watch1-old-state os)
                                      (reset! watch1-new-state ns)))))

    (is (= entangled-ref (add-watch entangled-ref
                                    :watch2
                                    (fn [key ref os ns]
                                      (is (= entangled-ref ref))
                                      (is (= :watch2 key))
                                      (reset! watch2-old-state os)
                                      (reset! watch2-new-state ns)))))

    (is (= {:val 101} @entangled-ref))

    ; act
    (swap! source-atom assoc :val 200)

    ; assert
    (is (= {:val 101} @watch1-old-state))
    (is (= {:val 201} @watch1-new-state))
    (is (= {:val 101} @watch2-old-state))
    (is (= {:val 201} @watch2-new-state))

    ; act
    (is (= entangled-ref (remove-watch entangled-ref :watch1)))
    (swap! source-atom assoc :val 300)

    ; assert
    (is (= {:val 101} @watch1-old-state))
    (is (= {:val 201} @watch1-new-state))
    (is (= {:val 201} @watch2-old-state))
    (is (= {:val 301} @watch2-new-state))))

(deftest
  entangled-reference-can-be-printed
  (let [source-atom (atom {:val 100})
        entangled-ref (carry/entangle source-atom identity)]
    (is (= "#<Entangled reference: {:val 100}>" (print-str entangled-ref)))))