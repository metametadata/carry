(ns frontend.core
  (:require [frontend.devtools :as devtools]
            [frontend.todos :as todos]
            [frontend.persistence-middleware :as persistence]
            [reagent.core :as r]
            [hodgepodge.core :as hp]
            [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;; App
; defonce is needed for hotloading
(defonce history (doto (Html5History.)
                   (.setEnabled true)))

(defn main
  []
  (println "Hi.")

  (let [storage hp/local-storage
        [_ todos-initial-signal :as todos-initial] (todos/init)
        app (devtools/connect todos-initial
                              todos/view-model
                              todos/view
                              (-> (todos/new-control history)
                                  (persistence/wrap-control todos-initial-signal storage :model nil))
                              (-> todos/reconcile
                                  (persistence/wrap-reconcile storage :model nil))
                              storage)]
    (letfn [(dispatch-navigate
              [token]
              ((:dispatch-signal app) [:component [:on-navigate token]]))]
      ; clear listeners in case of hotloading
      (goog.events/removeAll history)

      ; start listening
      (goog.events/listen history EventType/NAVIGATE #(dispatch-navigate (.-token %))))

    (r/render-component [(:view app)] (. js/document (getElementById "root")))
    app))

; to be accessed from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn on-js-reload
  []
  #_(. js/console clear))