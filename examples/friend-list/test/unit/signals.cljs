(ns unit.signals
  (:require
    [friend-list.core :as friend-list]
    [carry-history.core :as h]
    [clojure.test :refer [deftest is testing async]]
    [clj-fakes.core :as f]
    [clj-fakes.context :as fc]))

(deftest
  on-navigation-updates-query-and-searches
  (f/with-fakes
    (let [search (f/fake [[:_new-token (f/arg ifn?)] #(%2 :_found-friends)])
          {:keys [on-signal]} (friend-list/new-blueprint :_history search)
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (on-signal :_model [::h/on-enter :_new-token] dispatch-signal dispatch-action)

      ; assert
      ; order of calls doesn't matter because we know that searching is async, thus :on-search-success will be called on next tick
      (is (f/was-called-once dispatch-action [[:set-query :_new-token]]))
      (is (f/was-called-once dispatch-signal [[:on-search-success :_new-token :_found-friends]])))))

(deftest
  on-search-success-updates-friends
  (f/with-fakes
    (let [{:keys [initial-model on-signal on-action]} (friend-list/new-blueprint :_history :_search)
          model (atom (on-action initial-model [:set-query "current query"]))
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (on-signal model [:on-search-success "current query" :_found-friends] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-called-once dispatch-action [[:set-friends :_found-friends]]))
      (is (f/was-not-called dispatch-signal)))))

(deftest
  on-search-success-ignores-outdated-results
  (f/with-fakes
    (let [{:keys [initial-model on-signal on-action]} (friend-list/new-blueprint :_history :_search)
          model (atom (on-action initial-model [:set-query "current query"]))
          dispatch-signal (f/recorded-fake)
          dispatch-action (f/recorded-fake)]
      ; act
      (on-signal model [:on-search-success :_outdated-query :_found-friends] dispatch-signal dispatch-action)

      ; assert
      (is (f/was-not-called dispatch-action))
      (is (f/was-not-called dispatch-signal)))))

(defn with-fakes-async
  "Helper for defining async tests with fakes.
  f - test body, the function of args [ctx done];
  ctx - clj-fakes context;
  done - is a function which unpatches all vars, runs clj-fakes self-tests and finishes the async test."
  [f]
  (async done
    (let [ctx (fc/context)
          wrapped-done #(try
                         (fc/unpatch-all! ctx)
                         (fc/self-test ctx)

                         ; hack to "notify" test harness about self-test exception
                         (catch :default e
                           (is nil e))

                         (finally
                           (done)))]
      (f ctx wrapped-done))))

; sets the timing precision in ms, make it bigger if async tests are flaky
(def delta 5)

(deftest
  on-input-updates-query-and-debounces-token-setting-and-searching
  (with-fakes-async
    (fn [ctx done]
      (let [search (fc/fake ctx [[:_latest-token (f/arg ifn?)] #(%2 :_found-friends)])
            history (fc/reify-nice-fake ctx h/HistoryProtocol
                                        (push-token :recorded-fake))
            {:keys [on-signal]} (friend-list/new-blueprint history search)
            dispatch-signal (fc/recorded-fake ctx)
            dispatch-action (fc/recorded-fake ctx)
            expected-debounce-interval 300]
        ; act
        (on-signal :_model [:on-input :_new-token1] dispatch-signal dispatch-action)
        (on-signal :_model [:on-input :_new-token2] dispatch-signal dispatch-action)
        (on-signal :_model [:on-input :_latest-token] dispatch-signal dispatch-action)

        ; assert
        (is (= 3 (count (fc/calls ctx dispatch-action))))
        (is (fc/were-called-in-order ctx
                                     dispatch-action [[:set-query :_new-token1]]
                                     dispatch-action [[:set-query :_new-token2]]
                                     dispatch-action [[:set-query :_latest-token]]))

        (.setTimeout js/window
                     #(testing "just before debounce"
                       (is (fc/method-was-not-called ctx h/push-token history))
                       (is (fc/was-not-called ctx dispatch-signal)))
                     (- expected-debounce-interval delta))

        (.setTimeout js/window
                     #(do
                       (testing "just after debounce"
                         (is (fc/method-was-called-once ctx h/push-token history [:_latest-token]))
                         (is (fc/was-called-once ctx dispatch-signal [[:on-search-success :_latest-token :_found-friends]])))
                       (done))
                     (+ expected-debounce-interval delta))))))