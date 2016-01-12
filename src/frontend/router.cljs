; Router is a record which can be passed around as an explicit dependency
(ns frontend.router
  (:require [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History))

(defprotocol RouterProtocol
  (set-listener [this callback])
  (token [this])
  (replace-token [this token]))

; defonce is needed for hotloading
(defonce _history (doto (Html5History.)
                    (.setEnabled true)))

(def ^:dynamic *_history-events-enabled?* true)

(defrecord Router []
  RouterProtocol
  (set-listener [_this callback]
    ; clear previous listeners which can be there after hot reload
    (goog.events/removeAll _history)

    ; start signaling on navigation events
    (goog.events/listen _history EventType/NAVIGATE #(when *_history-events-enabled?*
                                                      (callback (.-token %)))))

  (token
    [_this]
    (.getToken _history))

  (replace-token
    [_this token]
    (binding [*_history-events-enabled?* false]
      (.replaceToken _history token))))