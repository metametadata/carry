(ns frontend.core
  (:require [frontend.devtools :as devtools]
            [frontend.todos :as todos]
            [frontend.persistence-middleware :as persistence]
            [frontend.ui :as ui]
            [frontend.routing :as routing]
            [reagent.core :as r]
            [hodgepodge.core :as hp]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;; App
(defn main
  []
  (println "Hi.")

  (let [history (routing/->History)
        storage hp/local-storage
        app (ui/connect-reactive-reagent (-> todos/spec
                                             (routing/wrap-routing history)
                                             (persistence/wrap storage :model nil)
                                             (ui/wrap-log "   [app]")
                                             (devtools/new-spec storage :devtools)
                                             (ui/wrap-log "[devtools]"))
                                         [])]
    (r/render-component [(:view app)] (. js/document (getElementById "root")))
    app))

; to be accessed from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn on-js-reload
  []
  #_(. js/console clear))