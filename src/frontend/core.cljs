(ns frontend.core
  (:require [frontend.devtools :as devtools]
            [frontend.todos :as todos]
            [frontend.persistence-middleware :as persistence]
            [frontend.ui :as ui]
            [frontend.router :as router]
            [reagent.core :as r]
            [hodgepodge.core :as hp]
            [goog.events]
            [goog.history.EventType :as EventType]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;; App
(defn main
  []
  (println "Hi.")

  ; clear previous listeners which can be there after hot reload
  (goog.events/removeAll router/history)

  (let [storage hp/local-storage
        app (ui/connect-reactive-reagent (-> (todos/new-spec router/history)
                                             (persistence/wrap storage :model nil)
                                             (ui/wrap-log "   [app]")
                                             (devtools/new-spec storage :devtools)
                                             (ui/wrap-log "[devtools]"))
                                         [])]
    ; start signaling on navigation events
    (goog.events/listen router/history EventType/NAVIGATE
                        #(when router/*history-events-enabled?*
                          ((:dispatch-signal app) [:component [:on-navigate (.-token %)]])))

    (r/render-component [(:view app)] (. js/document (getElementById "root")))
    app))

; to be accessed from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn on-js-reload
  []
  #_(. js/console clear))