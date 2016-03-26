(ns unit.controller
  (:require
    [friend-list.core :as friend-list]
    [middleware.routing :as routing]
    [cljs.test :refer-macros [deftest is testing async]]
    [clj-fakes.core :as f :include-macros true]
    [clj-fakes.context :as fc :include-macros true])
  (:require-macros [reagent.ratom :refer [reaction]]))


(deftest
  on-navigation-updates-query-and-searches
  (f/with-fakes
    (let [search (f/fake [[:_new-token f/any?] #(%2 :_found-friends)])
          {:keys [control]} (friend-list/new-spec :_history search)
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (control :_model [:middleware.routing/on-navigate :_new-token] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-called-once dispatch-action [[:set-query :_new-token]]))
      (is (f/was-called-once dispatch-signal [[:on-search-success :_new-token :_found-friends]])))))

(deftest
  on-search-success-updates-friends
  (f/with-fakes
    (let [{:keys [initial-model control reconcile]} (friend-list/new-spec :_history :_search)
          model (reaction (reconcile initial-model [:set-query :_current-query]))
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (control model [:on-search-success :_current-query :_found-friends] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-called-once dispatch-action [[:set-friends :_found-friends]]))
      (is (f/was-not-called dispatch-signal)))))

(deftest
  on-search-success-ignores-outdated-results
  (f/with-fakes
    (let [{:keys [initial-model control reconcile]} (friend-list/new-spec :_history :_search)
          model (reaction (reconcile initial-model [:set-query :_current-query]))
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (control model [:on-search-success :_outdated-query :_found-friends] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-not-called dispatch-action))
      (is (f/was-not-called dispatch-signal)))))

(defn with-fakes-async
  "Helper for defining async tests with fakes.
  f - test body, the function of args [ctx done];
  ctx - fakes context;
  done - is a function which performs clj-fakes self-tests and finishes the async test."
  [f]
  (async done
    (let [ctx (fc/context)
          done #(try
                 ; TODO: do not self-test if test has already caught some exceptions
                 ; TODO: unpatch vars?
                 (fc/self-test-unchecked-fakes ctx)
                 (fc/self-test-unused-fakes ctx)

                 ; hack to "notify" test harness about self-test exception
                 (catch :default e
                   (is nil e))

                 (finally
                   (done)))]
      (f ctx done))))

(deftest
  on-input-updates-query-and-will-eventually-update-token-and-search
  (with-fakes-async
    (fn [ctx done]
      (let [search (fc/fake ctx [[:_new-token f/any?] #(%2 :_found-friends)])
            history (fc/reify-nice-fake ctx routing/HistoryProtocol
                                        (set-token :recorded-fake))
            {:keys [control]} (friend-list/new-spec history search)
            dispatch-signal (fc/recorded-fake ctx)
            dispatch-action (fc/recorded-fake ctx)
            expected-debounce-interval 300]
        ; act
        (control :_model [:on-input :_new-token] dispatch-signal dispatch-action)

        ; assert
        (is (fc/was-called-once ctx dispatch-action [[:set-query :_new-token]]))

        (.setTimeout js/window
                     #(testing "just before debounce"
                       (is (fc/method-was-not-called ctx routing/set-token history))
                       (is (fc/was-not-called ctx dispatch-signal)))
                     (dec expected-debounce-interval))

        (.setTimeout js/window
                     #(do
                       (testing "just after debounce"
                         (is (fc/method-was-called-once ctx routing/set-token history [:_new-token]))
                         (is (fc/was-called-once ctx dispatch-signal [[:on-search-success :_new-token :_found-friends]])))
                       (done))
                     (inc expected-debounce-interval))))))