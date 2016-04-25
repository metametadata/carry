(ns app.core
  (:require [app.spec :as spec]
            [app.view-model :refer [view-model]]
            [app.view :refer [new-view]]
            [carry-history.core :as h]
            [carry-devtools.core :as devtools]
            [middleware.logging :as logging]
            [carry.core :as carry]
            [reagent.core :as r]
            [hodgepodge.core :as hp]))

(enable-console-print!)

(defn main
  []
  (println "Hi.")

  (let [; define external dependencies
        history (h/new-hash-history) #_(h/new-history)
        storage hp/local-storage

        ; define spec
        app-spec (-> (spec/new-spec history storage :todomvc-model ["Finish this project" "Take a bath"])
                     (devtools/add-debugger storage :todomvc-debugger-model)
                     logging/add)

        ; create app from spec
        app (carry/app app-spec)

        ; create GUI; history is passed into view for rendering links
        [app-view-model app-view] (carry/connect-ui app view-model (new-view history))

        ; create debugger GUI
        [_ debugger-view] (devtools/connect-debugger-ui app)]
    ; perform initial side effects
    ((:dispatch-signal app) :on-start)

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
  ((:dispatch-signal app) :on-stop))

(defn on-jsload
  []
  #_(. js/console clear))