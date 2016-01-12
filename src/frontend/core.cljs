(ns frontend.core
  (:require [frontend.devtools :as devtools]
            [frontend.todos :as todos]
            [frontend.persistence-middleware :as persistence]
            [frontend.ui :as ui]
            [frontend.router :as router]
            [reagent.core :as r]
            [hodgepodge.core :as hp]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;; App
(defn main
  []
  (println "Hi.")

  (let [router (router/->Router)
        storage hp/local-storage
        app (ui/connect-reactive-reagent (-> (todos/new-spec router)
                                             (persistence/wrap storage :model nil)
                                             (ui/wrap-log "   [app]")
                                             (devtools/new-spec storage :devtools)
                                             (ui/wrap-log "[devtools]"))
                                         [])]
    (router/set-listener router #((:dispatch-signal app) [:component [:on-navigate %]]))

    (r/render-component [(:view app)] (. js/document (getElementById "root")))
    app))

; to be accessed from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn on-js-reload
  []
  #_(. js/console clear))