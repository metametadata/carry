(ns app.core
  (:require [app.logic :as logic]
            [app.view-model :refer [view-model]]
            [app.view :refer [view]]
            [app.middleware.routing :as routing]
            [app.middleware.persistence :as persistence]
            [app.middleware.devtools :as devtools]
            [app.middleware.logging :as logging]
            [mvsa.core :as mvsa]
            [reagent.core :as r]
            [hodgepodge.core :as hp]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;; App
(defn main
  []
  (println "Hi.")

  (let [; define external dependencies
        history (routing/new-history)
        storage hp/local-storage

        ; define spec
        app-spec (-> (logic/new-spec history ["Finish this project" "Take a bath"])
                     ; debugger deals with persistence itself, so let's blacklist it here to get rid of conflicts
                     (persistence/add storage :model {:blacklist #{::devtools/debugger}})
                     (devtools/add-debugger storage :debugger-model)
                     (logging/add "[debugger] "))

        ; create app from spec
        app (mvsa/app app-spec)

        ; create GUI
        [app-view-model app-view] (mvsa/connect-ui app view-model view)

        ; create debugger GUI
        [_ debugger-view] (devtools/connect-debugger-ui app)]
    ; perform initial side effects
    ((:start app))

    ; render
    (r/render-component [:div app-view debugger-view]
                        (. js/document (getElementById "root")))

    ; return for future debugging
    (assoc app :view-model app-view-model)))

; start app and make it accessible from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:stop app)))

(defn on-jsload
  []
  #_(. js/console clear))