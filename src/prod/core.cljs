(ns prod.core
  (:require [frontend.todos :as todos]
            [frontend.ui :as ui]
            [frontend.devtools :as devtools]
            [frontend.persistence-middleware :as persistence]
            [frontend.routing :as routing]
            [reagent.core :as r]
            [hodgepodge.core :as hp]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;; App
(defn main
  []
  (println "Hi.")

  (let [; define external dependencies
        history (routing/->History)
        storage hp/local-storage

        ; define spec
        app-spec (-> (todos/new-spec ["Finish this project" "Take a bath"])
                     ; TODO: explicit blacklisting of debugger is not cool
                     (persistence/add storage :model {:blacklist #{::devtools/debugger}})
                     (routing/add history)
                     (devtools/add-debugger storage :debugger-model)
                     (ui/add-logging "[debugger] "))

        ; create app from spec
        app (ui/create app-spec)

        ; add GUI
        [view-model view] (ui/connect-ui app todos/view-model todos/view)

        ; add debugger GUI
        [_ debugger-view] (devtools/connect-debugger-ui app)]
    ; perform initial side effects
    ((:start app))

    ; render
    (r/render-component [:div view debugger-view]
                        (. js/document (getElementById "root")))

    ; return for future debugging
    (assoc app :view-model view-model)))

; start app and make it accessible from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:stop app)))

(defn on-jsload
  []
  #_(. js/console clear))