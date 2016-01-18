(ns prod.core
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
        app (ui/connect-reactive-reagent (-> (todos/new-spec history)
                                             (persistence/wrap storage :model nil)
                                             (ui/wrap-log "   [app] ")
                                             (devtools/wrap storage :devtools)
                                             (ui/wrap-log "[devtools] "))
                                         [["Finish this project" "Take a bath"]])]
    ; explicitly start sending navigation signals after connecting (in order to be able to debug them in devtools)
    (routing/start-signaling history app)

    ; render app
    (r/render-component [(:view app)] (. js/document (getElementById "root")))

    ; return app for future debugging
    app))

; start app and make it accessible from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn on-js-reload
  []
  #_(. js/console clear))