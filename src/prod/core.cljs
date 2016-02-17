(ns prod.core
  (:require [frontend.todos :as todos]
            [frontend.mvsa :as mvsa]
            [frontend.devtools :as devtools]
            [frontend.persistence-middleware :as persistence]
            [frontend.logging-middleware :as logging]
            [frontend.routing :as routing]
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
        app-spec (-> (todos/new-spec history ["Finish this project" "Take a bath"])
                     ; debugger deals with persistence itself, so let's blacklist it here to get rid of conflicts
                     (persistence/add storage :model {:blacklist #{::devtools/debugger}})
                     (devtools/add-debugger storage :debugger-model)
                     (logging/add "[debugger] "))

        ; create app from spec
        app (mvsa/app app-spec)

        ; create GUI
        [app-view-model app-view] (mvsa/connect-ui app todos/view-model todos/view)

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