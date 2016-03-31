(ns middleware.routing
  (:require [cljs.core.match :refer-macros [match]]
            [goog.events]
            [goog.history.EventType :as EventType]
            [clojure.string])
  (:import goog.history.Html5History
           [goog History])
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

(defrecord -History [-goog-history]
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
    [_this new-token]
    (.replaceToken -goog-history new-token))

  (set-token
    [_this token]
    (.setToken -goog-history token)))

(defn new-legacy-hash-history
  "For history management using hashes. Works in Opera Mini."
  []
  (let [history (History.)]
    (.setEnabled history true)
    (->-History history)))

(defn new-hash-history
  "For history management using onhashchange. Will not correctly in Opera Mini: http://caniuse.com/#search=hash"
  []
  (let [history (Html5History.)]
    (.setUseFragment history true)
    (.setEnabled history true)
    (->-History history)))

(defn new-history
  "For history management using pushState. Supported browsers: http://caniuse.com/#search=pushstate"
  []
  (let [history (Html5History.)]
    ; gets rid of "Uncaught SecurityError: Failed to execute 'pushState' on 'History': A history state object with URL
    ; 'http://active/' cannot be created in a document with origin 'http://localhost:3449' and URL 'http://localhost:3449/'"
    (.setPathPrefix history "")

    (.setUseFragment history false)
    (.setEnabled history true)
    (->-History history)))

;;;;;;;;;;;;;;;;;;;;;;;;; Middleware
;;; Init
(defn -wrap-initial-model
  [app-initial-model]
  ; set some initial token - it will be used on reset from debugger
  (assoc app-initial-model ::token "/"))

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

               (println "[routing] start")
               (add-watch model ::token-watcher
                          (fn [_key _atom old-state new-state]
                            (when (and (not= (::token old-state) (::token new-state))
                                       (not= (::token new-state) (token history)))
                              (replace-token history (::token new-state)))))

               (reset! unlisten
                       (listen history
                               #(dispatch-signal [::on-browser-event %])
                               #(dispatch-signal [::on-api-event %]))))

             :on-stop
             (do
               (@unlisten)

               (app-control model signal dispatch-signal dispatch-action))

             [::on-browser-event token]
             (do
               (dispatch-action [::set-token token])
               (dispatch-signal [::on-navigate token]))

             [::on-api-event token]
             (dispatch-action [::set-token token])

             [::on-link-click href]
             (let [token (if (clojure.string/starts-with? href "#")
                           ; hrefs can contain hashes, token - can't
                           (subs href 1)
                           href)]
               (set-token history token))

             :else
             (app-control model signal dispatch-signal dispatch-action)))))

;;; Reconcile
(defn -wrap-reconcile
  "Updates the token."
  [app-reconcile]
  (fn reconcile
    [model action]
    (match action
           [::set-token token]
           (assoc model ::token token)

           :else
           (app-reconcile model action))))

;;; Middleware
(defn add
  "Routing middleware which allows app react to history events by observing model changes.

  After start it begins catching browser history events and updates ::token in model accordingly.
  Sends [::on-navigate token] signal to app after handling browser-initiated history event (e.g. when user clicks back button or changes the hash).
  If ::token changes in model (e.g. by toggling action in debugger), then current url is replaced using new token."
  [spec history]
  {:pre [(map? (:initial-model spec)) (fn? (:control spec)) (fn? (:reconcile spec)) (satisfies? HistoryProtocol history)]}
  (-> spec
      (update :initial-model -wrap-initial-model)
      (update :control -wrap-control history)
      (update :reconcile -wrap-reconcile)))

;;; Link
(defn -pure-click?
  "Returns false if the user did a middle-click, right-click, or used a modifier"
  [e]
  (not (or (.-altKey e)
           (.-ctrlKey e)
           (.-metaKey e)
           (.-shiftKey e)
           (not (zero? (.-button e))))))

(defn -on-click
  [e href dispatch]
  (when (-pure-click? e)
    (.preventDefault e)
    (dispatch [::on-link-click href])))

(defn link
  "Link component which changes current URL without sending request to server.
  Requires routing middleware to be added.

  Inspired by: https://github.com/STRML/react-router-component/blob/master/lib/Link.js"
  [dispatch {:keys [href] :as attrs} & body]
  (into [:a (assoc attrs :on-click #(-on-click % href dispatch))]
        body))