(ns frontend.routing
  (:require [frontend.mvsa :as mvsa]
            [cljs.core.match :refer-macros [match]]
            [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History)
  (:require-macros [reagent.ratom :refer [reaction run!]]))

;;;;;;;;;;;;;;;;;;;;;;;;; History object deals with browser url bar
(defprotocol HistoryProtocol
  (listen [this callback] "Starts calling back on navigation events, fires the initial callback. Returns a function which stops listening.")
  (token [this] "Return current token.")
  (replace-token [this token] "Replace token without firing navigation event."))

(def ^:dynamic *_history-events-enabled?* true)

(defrecord History [-goog-history]
  HistoryProtocol
  (listen
    [this callback]
    (let [key (goog.events/listen -goog-history EventType/NAVIGATE
                                  #(when *_history-events-enabled?*
                                    (callback (.-token %))))]
      (callback (token this))
      #(goog.events/unlistenByKey key)))

  (token
    [_this]
    (.getToken -goog-history))

  (replace-token
    [this new-token]
    ; the check fixes a case when setting already set "" token leads to unnecessarily adding "/#" to url
    (when (not= new-token (token this))
      (binding [*_history-events-enabled?* false]
        (.replaceToken -goog-history new-token)))))

(defn new-history
  []
  (->History (doto (Html5History.)
               (.setEnabled true))))

;;;;;;;;;;;;;;;;;;;;;;;;; Middleware
;;; Init
(defn -wrap-initial-model
  "Sets ::token to empty string if app didn't already set it."
  [app-initial-model]
  (merge {::token ""} app-initial-model))

;;; Control
(defn -wrap-control
  "Updates token in model on navigation signal and lets wrapped app handle the signal."
  [app-control]
  (fn control
    [model signal dispatch]
    (match signal
           [::-on-navigate token]
           (dispatch [::-set-token token])

           :else
           (app-control model signal dispatch))))

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
  "Routing middleware which allows app react to navigation events by observing model changes.

  After start it begins catching navigation events and updates ::token in model accordingly.
  If ::token changes in model (e.g. by toggling action in debugger), then current url is updated using new token.
  App can set initial ::token in its initial-model."
  [spec history]
  (let [unlisten (atom nil)]
    (-> spec
        (update :initial-model -wrap-initial-model)
        (update :control -wrap-control)
        (update :reconcile -wrap-reconcile)
        (update :on-start mvsa/wrap-after
                (fn [model dispatch-signal]
                  (println "[routing] start singaling navigation events")
                  (->> (listen history #(dispatch-signal [::-on-navigate %]))
                       (reset! unlisten))

                  (let [token (reaction (::token @model))]
                    (run! (replace-token history @token)))))
        (update :on-stop mvsa/wrap-before
                (fn [_model _dispatch-signal]
                  (println "[routing] stop")
                  (@unlisten))))))
