(ns frontend.routing
  (:require [frontend.ui :as ui]
            [cljs.core.match :refer-macros [match]]
            [reagent.core :as r]
            [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History))

;;;;;;;;;;;;;;;;;;;;;;;;; History object deals with browser url bar
(defprotocol HistoryProtocol
  (start-signaling [this app])
  (token [this] "Return current token.")
  (replace-token [this token] "Replace token without firing navigation event."))

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
    [this new-token]
    ; the check fixes a case when setting already set "" token leads to unnecessarily adding "/#" to url
    (when (not= new-token (token this))
      (binding [*_history-events-enabled?* false]
        (.replaceToken _goog-history new-token)))))

;;;;;;;;;;;;;;;;;;;;;;;;; Middleware
(defn -wrap-init
  "Sets ::token to empty string if component didn't already set it."
  [component-init]
  (fn init
    [& args]
    (merge {::token ""} (apply component-init args))))

(defn -wrap-view-model
  "Adds reaction to token."
  [component-view-model]
  (fn view-model
    [model]
    (merge (component-view-model model)
           (ui/track-keys model [::token]))))

(defn -url-bar
  "Invisible view which updates browser's bar on model changes."
  [history token]
  (r/create-class
    {:display-name          "-url-bar"
     :reagent-render        (fn [_history _token] [:span])
     :component-did-mount   #(replace-token history token)
     :component-will-update (fn [_ [_ _history token]] (replace-token history token))}))

(defn -wrap-view
  "Adds url bar updater."
  [component-view history]
  (fn view
    [view-model dispatch]
    [:div
     [-url-bar history @(::token view-model)]
     [component-view view-model dispatch]]))

(defn -wrap-control
  "Updates token in model on navigation signal and lets wrapped component handle the signal."
  [component-control]
  (fn control
    [model signal dispatch]
    (match signal
           [::on-navigate token]
           (dispatch [::-set-token token])

           :else
           (component-control model signal dispatch))))

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

(defn wrap
  "Middlware keeps browser url bar in sync with model.
  Catches [::on-navigate <token>] signal, updates ::token in model.
  In order to start sending ::on-navigate signals invoke (start-signaling history component) after component is connected.
  Component can set initial ::token in its (init)."
  [spec history]
  (-> spec
      (update :init -wrap-init)
      (update :view-model -wrap-view-model)
      (update :view -wrap-view history)
      (update :control -wrap-control)
      (update :reconcile -wrap-reconcile)))