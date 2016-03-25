(ns middleware.routing
  (:require [cljs.core.match :refer-macros [match]]
            [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History)
  (:require-macros [reagent.ratom :refer [reaction run!]]))

;;;;;;;;;;;;;;;;;;;;;;;;; History object deals with browser url bar
(defprotocol HistoryProtocol
  (listen [this on-browser-event on-api-event]
          "Starts calling back on history events. There are 2 types of events:
            1) 'api' - initiated via this API;
            2) 'browser' - e.g. changing hash in url bar or clicking forward/back buttons.
          Fires the initial browser callback. Returns a function which stops listening.")
  (token [this] "Return current token.")
  (replace-token [this token] "Replace token firing API event.")
  (set-token [this token] "Push token firing API event."))

(defrecord History [-goog-history]
  HistoryProtocol
  (listen
    [this on-browser-event on-api-event]
    (let [key (goog.events/listen -goog-history EventType/NAVIGATE
                                  #((if (.-isNavigation %) on-browser-event
                                                           on-api-event)
                                    (.-token %)))]
      (on-browser-event (token this))
      #(goog.events/unlistenByKey key)))

  (token
    [_this]
    (.getToken -goog-history))

  (replace-token
    [this new-token]
    ; the check fixes a case when setting already set "" token leads to unnecessarily adding "/#" to url
    (when (not= new-token (token this))
      (.replaceToken -goog-history new-token)))

  (set-token
    [_this token]
    (.setToken -goog-history token)))

(defn new-history
  []
  (let [history (Html5History.)]
    (.setEnabled history true)
    (->History history)))

;;;;;;;;;;;;;;;;;;;;;;;;; Middleware
;;; Init
(defn -wrap-initial-model
  "Sets ::token to empty string if app didn't already set it."
  [app-initial-model]
  (merge {::token ""} app-initial-model))

;;; Control
(defn -wrap-control
  "Updates token in model on history events and lets wrapped app handle the signal."
  [app-control history]
  (let [unlisten (atom nil)]
    (fn control
      [model signal dispatch-signal dispatch-action]
      (match signal
             :on-start
             (do
               (app-control model signal dispatch-signal dispatch-action)

               (println "[routing] start with token" (pr-str (::token @model)))
               (reset! unlisten
                       (listen history
                               #(dispatch-signal [::on-browser-event %])
                               #(dispatch-signal [::on-api-event %])))

               (let [token (reaction (::token @model))]
                 (run!
                   ; hack: assertion prevents the infinite loop which can occur on schema validation in debugger middleware
                   ; see https://github.com/reagent-project/reagent/issues/223 for the origin of the problem
                   ; also see https://github.com/reagent-project/reagent/issues/222 on why this assert will not be logged
                   (assert @token)
                   (replace-token history @token))))

             :on-stop
             (do
               (@unlisten)

               (app-control model signal dispatch-signal dispatch-action))

             [::on-browser-event token]
             (do
               (dispatch-action [::-set-token token])
               (dispatch-signal [::on-navigate token]))

             [::on-api-event token]
             (dispatch-action [::-set-token token])

             :else
             (app-control model signal dispatch-signal dispatch-action)))))

;;; Reconcile
(defn -wrap-reconcile
  "Updates the token."
  [app-reconcile]
  (fn reconcile
    [model action]
    (match action
           [::-set-token token]
           (assoc model ::token token)

           :else
           (app-reconcile model action))))

;;; Middleware
(defn add
  "Routing middleware which allows app react to history events by observing model changes.

  After start it begins catching browser history events and updates ::token in model accordingly.
  Sends [::on-navigate token] signal to app on browser-initiated history events.
  If ::token changes in model (e.g. by toggling action in debugger), then current url is updated using new token.
  App can set initial ::token in its initial-model."
  [spec history]
  (-> spec
      (update :initial-model -wrap-initial-model)
      (update :control -wrap-control history)
      (update :reconcile -wrap-reconcile)))
