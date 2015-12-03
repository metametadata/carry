(ns frontend.core
  (:require [frontend.devtools :as devtools]
            [frontend.todos :as todos]
            [frontend.persistence-middleware :as persistence]
            [frontend.ui :as ui]
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

  ; clear previous listeners which can be there after hot reload
  (goog.events/removeAll history)

  (let [storage hp/local-storage
        app (ui/connect-reagent (-> (todos/new-spec history)
                                    (persistence/wrap storage :model nil)
                                    (devtools/new-spec storage :devtools))
                                [])]

    ; start signaling on navigation events
    (goog.events/listen history EventType/NAVIGATE
                        #((:dispatch-signal app) [:component [:on-navigate (.-token %)]]))

    (r/render-component [(:view app)] (. js/document (getElementById "root")))
    app))

; to be accessed from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn on-js-reload
  []
  #_(. js/console clear))