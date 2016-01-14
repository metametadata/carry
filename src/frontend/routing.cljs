(ns frontend.routing
  (:require [cljs.core.match :refer-macros [match]]
            [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History))

;;;;;;;;;;;;;;;;;;;;;;;;; History object deals with browser url bar directly
(defprotocol HistoryProtocol
  (start-signaling [this app])
  (token [this])
  (replace-token [this token]))

; defonce is needed for hot reloading
(defonce _goog-history (doto (Html5History.)
                         (.setEnabled true)))

(def ^:dynamic *_history-events-enabled?* true)

(defrecord History []
  HistoryProtocol
  (start-signaling
    [this connected-spec]
    ; clear previous listeners which can be there after hot reload
    (goog.events/removeAll _goog-history)

    (letfn [(callback [token] ((:dispatch-signal connected-spec) [::on-navigate token]))]
      ; start signaling on navigation events
      (goog.events/listen _goog-history EventType/NAVIGATE
                          #(when *_history-events-enabled?*
                            (callback (.-token %))))

      ; also fire the initial event
      (callback (token this))))

  (token
    [_this]
    (.getToken _goog-history))

  (replace-token
    [_this token]
    (binding [*_history-events-enabled?* false]
      (.replaceToken _goog-history token))))

;;;;;;;;;;;;;;;;;;;;;;;;; Middleware
(defn -wrap-control
  [control]
  (fn wrapped-control
    [model signal dispatch]
    (match signal
           ; update token (e.g. when signal comes during replay) and let wrapped component handle the signal
           [::on-navigate %]
           (do
             (dispatch [::-replace-token %])
             (control model [::on-navigate %] dispatch))

           :else
           (control model signal dispatch))))

(defn -wrap-reconcile
  [reconcile history]
  (fn wrapped-reconcile
    [model action]
    (match action
           ;;;;;
           ; Actions must be pure, but this is an exception to the rule:
           ; we need to update the address bar because action could have come from the devtools during replay.
           ; Ideally, address bar should behave kinda like another reactjs input, it's what we try to simulate here.
           ;;;;;
           [::-replace-token token]
           (do
             (replace-token history token)
             model)

           :else
           (reconcile model action))))

(defn wrap
  "Middleware handles [::on-navigate <token>] signal and dispatches it further to the component.
  Also allows updating urlbar on devtools replay."
  [spec history]
  (-> spec
      (update :control -wrap-control)
      (update :reconcile -wrap-reconcile history)))