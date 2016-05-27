(ns carry-history.core
  (:require [cljs.core.match :refer-macros [match]]
            [goog.events]
            [goog.history.EventType :as EventType]
            [clojure.string]
            [clojure.set])
  (:import goog.history.Html5History
           [goog History]))

;;;;;;;;;;;;;;;;;;;;;;;;; History
(defprotocol HistoryProtocol
  "Protocol for objects managing browser history."
  (listen [this callback]
          "Starts calling back on history events.
          Callback function signature: `[token browser-event? event-data]`, where:

          * `token` - new token
          * `browser-event?` - `true` if event was initiated by action in browser, e.g. clicking Back button
          * `event-data` - data which was passed from `replace-token`/`push-token`

          Returns a function which stops listening.")
  (replace-token [this token] [this token event-data]
                 "Replace token and fire an event with additional data passed (data is `nil` if not specified);
                 do nothing if current token is already equal to the specified one.")
  (push-token [this token] [this token event-data]
              "Push token and fire an event with additional data passed (data is `nil` if not specified);
              do nothing if current token is already equal to the specified one.")
  (token [this] "Return current token.")
  (token->href [this token] "Returns the href for the specified token to be used in HTML links."))

; Implementation of HistoryProtocol using Closure API
(def ^:dynamic ^:no-doc *-history-event-data* nil)
(defrecord ^:no-doc -History [-goog-history]
  HistoryProtocol
  (listen
    [_this callback]
    (let [key (goog.events/listen -goog-history EventType/NAVIGATE #(callback (.-token %)
                                                                              (.-isNavigation %)
                                                                              *-history-event-data*))]
      #(goog.events/unlistenByKey key)))

  (replace-token [this new-token] (replace-token this new-token nil))
  (replace-token
    [this new-token event-data]
    (binding [*-history-event-data* event-data]
      (when (not= (token this) new-token)                   ; prevent firing an event if token is going to stay the same
        (.replaceToken -goog-history new-token))))

  (push-token [this token] (push-token this token nil))
  (push-token
    [_this token event-data]
    (binding [*-history-event-data* event-data]
      (.setToken -goog-history token)))

  (token
    [_this]
    (.getToken -goog-history))

  (token->href
    [_this token]
    (.getUrl_ -goog-history token)))

(defn new-legacy-hash-history
  "For history management using hashes. Should work in Opera Mini."
  []
  (let [history (History.)]
    (.setEnabled history true)
    (->-History history)))

(defn new-hash-history
  "For history management using hashes based on onhashchange event. Will not correctly work in Opera Mini: http://caniuse.com/#search=hash"
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
(defn ^:no-doc -wrap-initial-model
  [app-initial-model]
  (merge {::token "/"} app-initial-model))

;;; Control
(defn ^:no-doc -wrap-control
  [app-control history]
  (let [unlisten (atom nil)]
    (fn control
      [model signal dispatch-signal dispatch-action]
      (match signal
             :on-start
             (do
               (app-control model signal dispatch-signal dispatch-action)

               (add-watch model ::token-watch
                          (fn [_key _atom old-state new-state]
                            (when (not= (::token old-state) (::token new-state))
                              (replace-token history (::token new-state)))))

               (reset! unlisten
                       (listen history #(dispatch-signal [::on-history-event {:token %1 :browser-event? %2 :event-data %3}])))

               ; initial signal
               (when (not (-> @model :carry-debugger.core/debugger :replay-mode?))
                 (dispatch-signal [::on-history-event {:token (token history) :browser-event? true :event-data nil}])))

             :on-stop
             (do
               (@unlisten)

               (app-control model signal dispatch-signal dispatch-action))

             [::on-history-event {:token token :browser-event? browser-event? :event-data event-data}]
             (do
               (dispatch-action [::set-token token])

               (when (or browser-event? (:treat-as-browser-event? event-data))
                 (dispatch-signal [::on-enter token])))

             :else
             (app-control model signal dispatch-signal dispatch-action)))))

;;; Reconcile
(defn ^:no-doc -wrap-reconcile
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
  "Applies middleware which syncs app model with browser history.

  After start it begins catching history events and updates `::token` in model accordingly.
  If `::token` changes in model (e.g. by toggling action in debugger), then current url is replaced using new token.
  Initial `::token` value will be applied on clicking debugger's Reset.

  Sends `[::on-enter token]` signal to app after handling token change event initiated from browser (e.g. on clicking Back button).
  So using [[HistoryProtocol]]'s `replace-token`/`push-token` would not trigger this signal.
  You can still force sending this signal by passing `{:treat-as-browser-event? true}` event-data to these functions.

  Middleware is friendly to `carry-debugger`: it won't automatically dispatch initial signal on app start if debugger's replay mode is on."
  [spec history]
  (-> spec
      (update :initial-model -wrap-initial-model)
      (update :control -wrap-control history)
      (update :reconcile -wrap-reconcile)))

;;; Link
(defn ^:no-doc -pure-click?
  "Returns false if the user did a middle-click, right-click, or used a modifier."
  [e]
  (not (or (.-altKey e)
           (.-ctrlKey e)
           (.-metaKey e)
           (.-shiftKey e)
           (not (zero? (.-button e))))))

(defn ^:no-doc -on-click
  [e history token replace?]
  (when (-pure-click? e)
    (.preventDefault e)
    (if replace?
      (replace-token history token {:treat-as-browser-event? true})
      (push-token history token {:treat-as-browser-event? true}))))

(defn link
  "Link Reagent component which changes current URL without sending request to server.
  Will replace current token instead of pushing if `:replace?` attribute is `true` (attribute is `false` by default).

  If history middleware is added then clicking the link will produce `:on-enter` signal."
  [history token {:keys [replace?] :as attrs} & body]
  (into [:a (merge attrs {:href     (token->href history token)
                          :on-click #(-on-click % history token replace?)})]
        body))