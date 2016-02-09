(ns frontend.routing
  (:require [frontend.mvsa :as mvsa]
            [cljs.core.match :refer-macros [match]]
            [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History))

;;;;;;;;;;;;;;;;;;;;;;;;; History object deals with browser url bar
(defprotocol HistoryProtocol
  (listen [this callback] "Starts calling back on navigation events, fires the initial callback. Returns a function which stops listening.")
  (token [this] "Return current token.")
  (replace-token [this token] "Replace token without firing navigation event."))

; defonce is needed for hot reloading
(defonce _goog-history (doto (Html5History.)
                         (.setEnabled true)))

(def ^:dynamic *_history-events-enabled?* true)

(defrecord History []
  HistoryProtocol
  (listen
    [this callback]
    (let [key (goog.events/listen _goog-history EventType/NAVIGATE
                                  #(when *_history-events-enabled?*
                                    (callback (.-token %))))]
      (callback (token this))
      #(goog.events/unlistenByKey key)))

  (token
    [_this]
    (.getToken _goog-history))

  (replace-token
    [this new-token]
    ; the check fixes a case when setting already set "" token leads to unnecessarily adding "/#" to url
    (when (not= new-token (token this))
      (binding [*_history-events-enabled?* false]
        (.replaceToken _goog-history new-token)))))

;;;;;;;;;;;;;;;;;;;;;;;;; Middleware
;;; Init
(defn -wrap-initial-model
  "Sets ::token to empty string if component didn't already set it."
  [component-initial-model]
  (merge {::token ""} component-initial-model))

;;; Control
(defn -wrap-control
  "Updates token in model on navigation signal and lets wrapped component handle the signal."
  [component-control]
  (fn control
    [model signal dispatch]
    (match signal
           [::-on-navigate token]
           (dispatch [::-set-token token])

           :else
           (component-control model signal dispatch))))

;;; Reconcile
(defn -wrap-reconcile
  "Updates the token."
  [component-reconcile]
  (fn reconcile
    [model action]
    (match action
           [::-set-token token]
           (assoc model ::token token)

           :else
           (component-reconcile model action))))

;;; Middleware
(defn add
  "Routing middleware which allows component react to navigation events by observing model changes.

  After start begins catching navigation events, updates ::token in model accordingly.
  If ::token changes in model (e.g. by toggling action in frontend.debugger), then current url is updated using new token.
  Component can set initial ::token in its (init).

  Middleware is expected to be used with ui/add-reactive-ui.

  History dependency is needed to be able to update url bar from model."
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

                  (add-watch model :routing-watcher
                             (fn [_key _atom _old-state new-state]
                               (replace-token history (::token new-state))))))
        (update :on-stop mvsa/wrap-before
                (fn [_model _dispatch-signal]
                  (println "[routing] stop")
                  (@unlisten))))))
