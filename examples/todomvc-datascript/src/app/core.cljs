(ns app.core
  (:require [app.spec :as spec]
            [app.view-model :refer [view-model]]
            [app.view :refer [view]]
            [app.middleware.routing :as routing]
            [devtools.core :as chrome-devtools]
            [app.middleware.devtools :as devtools]
            [app.middleware.logging :as logging]
            [reagent-mvsa.core :as mvsa]
            [reagent.core :as r]
            [hodgepodge.core :as hp]))

(enable-console-print!)
(chrome-devtools/enable-feature! :sanity-hints)
(chrome-devtools/install!)

(defn main
  []
  (println "Hi.")

  (let [; define external dependencies
        history (routing/new-history)
        storage hp/local-storage

        ; define spec
        app-spec (-> (spec/new-spec history storage ["Finish this project" "Take a bath"])
                     #_(devtools/add-debugger storage :debugger-model)
                     logging/add)

        ; create app from spec
        app (mvsa/app app-spec)

        ; create GUI
        [app-view-model app-view] (mvsa/connect-ui app view-model view)

        ; create debugger GUI
        [_ debugger-view] (devtools/connect-debugger-ui app)]
    ; perform initial side effects
    ((:start app))

    ; render
    (r/render [:div app-view debugger-view]
              (.getElementById js/document "root"))

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