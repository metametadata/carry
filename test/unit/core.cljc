(ns unit.core
  #?@(:clj  [
             (:require
               [clojure.test :refer :all]
               [unit.utils :as u]
               [carry.core :as carry]
               )]
      :cljs [(:require
               [cljs.test :refer-macros [deftest is testing]]
               [carry.core :as carry])
             ])
  #?(:cljs
     (:require-macros [unit.utils :as u])))

(defn is-readonly-atom
  [a]
  (assert (map? @a) "self test")
  (assert (not= @a {:val :new-value}) "self test")

  (is (carry/read-only? a))
  (u/is-error-thrown
    #"^read-only atom was set to \{:val :new-value\}"
    (swap! a assoc :val :new-value)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; App
(deftest
  app-model-is-read-only-atom
  (let [spec {:initial-model {:val 100}
              :control       (constantly nil)
              :reconcile     (constantly nil)}
        app (carry/app spec)]
    (is (= {:val 100} @(:model app)))
    (is-readonly-atom (:model app))))

(deftest
  controller-receives-read-only-model-atom
  (let [spec {:initial-model {:val 100}
              :control       (fn control [model signal _dispatch-signal _dispatch-action]
                               (if (= signal :on-test-model)
                                 (do
                                   (is (= {:val 100} @model))
                                   (is-readonly-atom model))

                                 (is nil "unexpected signal")))
              :reconcile     (constantly nil)}
        app (carry/app spec)]
    ((:dispatch-signal app) :on-test-model)))

(deftest
  action-dispatched-from-controller-updates-model-using-reconciler
  (let [spec {:initial-model {:val 100}
              :control       (fn control [_model signal _dispatch-signal dispatch-action]
                               (if (= signal :on-update-value)
                                 (dispatch-action :update-value)
                                 (is nil "unexpected signal")))
              :reconcile     (fn reconcile [model action]
                               (if (= action :update-value)
                                 (update model :val inc)
                                 (is nil "unexpected action")))}
        app (carry/app spec)]
    ; act
    ((:dispatch-signal app) :on-update-value)

    ; assert
    (is (= {:val 101} @(:model app)))

    ; and again, just in case...
    ; act
    ((:dispatch-signal app) :on-update-value)

    ; assert
    (is (= {:val 102} @(:model app)))

    (testing "model is still read-only"
      (is-readonly-atom (:model app)))))

(deftest
  controller-can-dispatch-new-signals
  (let [spec {:initial-model {:val 100}
              :control       (fn control [_model signal dispatch-signal dispatch-action]
                               (condp = signal
                                 :on-dispatch-new-signal (dispatch-signal :on-new-signal)
                                 :on-new-signal (dispatch-action :update-value)))
              :reconcile     (fn reconcile [model action]
                               (if (= action :update-value)
                                 (update model :val inc)
                                 (is nil "unexpected action")))}
        app (carry/app spec)]
    ; act
    ((:dispatch-signal app) :on-dispatch-new-signal)

    ; assert
    (is (= {:val 101} @(:model app)))))

(deftest
  dispatch-signal-returns-nil
  (let [spec {:initial-model {:val 100}
              :control       (constantly :control-return-value)
              :reconcile     (constantly :reconcile-return-value)}
        app (carry/app spec)]
    (is (nil? ((:dispatch-signal app) :some-signal)))))

(deftest
  dispatch-action-returns-nil
  (let [spec {:initial-model {:val 100}
              :control       (fn control [_model _signal _dispatch-signal dispatch-action]
                               (is (nil? (dispatch-action :some-action))))
              :reconcile     (constantly :reconcile-return-value)}
        app (carry/app spec)]
    ((:dispatch-signal app) :some-signal)))

(deftest
  resetting-read-only-model-in-watch-throws-an-exception
  (let [spec {:initial-model {:val 100}
              :control       (fn control [_model signal _dispatch-signal dispatch-action]
                               (if (= signal :on-update-value)
                                 (dispatch-action :update-value)
                                 (is nil "unexpected signal")))
              :reconcile     (fn reconcile [model action]
                               (if (= action :update-value)
                                 (update model :val inc)
                                 (is nil "unexpected action")))}
        app (carry/app spec)]
    (add-watch (:model app) :test-watch
               (fn test-watch
                 [_key _atom _old-state new-state]
                 (when (not= new-state {:val :new-value-from-watch}) ; check prevents an infinite loop
                   (is (carry/read-only? (:model app)))
                   (u/is-error-thrown
                     #"^read-only atom was set to \{:val :new-value-from-watch\}"
                     (reset! (:model app) {:val :new-value-from-watch})))))

    ; act
    ((:dispatch-signal app) :on-update-value)

    ; assert
    (is (= {:val :new-value-from-watch} @(:model app)))
    (testing "model is still read-only"
      (is-readonly-atom (:model app)))))

(deftest
  actions-can-be-dispatched-in-watch
  (let [spec {:initial-model {:val 100}
              :control       (fn control [model signal _dispatch-signal dispatch-action]
                               (condp = signal
                                 :on-start
                                 (add-watch model :dispatch-action-watch
                                            (fn dispatch-action-watch
                                              [_key _atom old-state new-state]
                                              (when (and (not= old-state new-state)
                                                         (= new-state {:val 101}))
                                                (dispatch-action :update-value))))

                                 :on-update-value
                                 (dispatch-action :update-value)))
              :reconcile     (fn reconcile [model action]
                               (if (= action :update-value)
                                 (update model :val inc)
                                 (is nil "unexpected action")))}
        app (carry/app spec)]
    ; act
    ((:dispatch-signal app) :on-start)
    ((:dispatch-signal app) :on-update-value)

    ; assert
    (is (= {:val 102} @(:model app)))
    (testing "model is still read-only"
      (is-readonly-atom (:model app)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Entangle
(deftest
  entangled-atom-is-read-only
  (let [source-atom (atom {:val 100})
        entangled-atom (carry/entangle source-atom identity)]
    (is-readonly-atom entangled-atom)))

(deftest
  entangled-atom-reacts-to-source-atom-changes-using-specified-function
  (let [source-atom (atom {:val 100})
        entangled-atom (carry/entangle source-atom #(update % :val inc))]
    (is (= {:val 101} @entangled-atom))

    (swap! source-atom assoc :val 200)
    (is (= {:val 201} @entangled-atom))

    ; just in case:
    (is-readonly-atom entangled-atom)))

(deftest
  entangle-supports-custom-atom-constructor
  (let [source-atom (atom {:val 100})
        custom-constructor-used? (atom false)
        custom-constructor #(do (reset! custom-constructor-used? true)
                                (atom %))
        entangled-atom (carry/entangle source-atom #(update % :val inc) custom-constructor)]
    (is @custom-constructor-used?)
    (is (= {:val 101} @entangled-atom))
    (is-readonly-atom entangled-atom)))