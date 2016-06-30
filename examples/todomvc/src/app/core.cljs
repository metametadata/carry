(ns app.core
  (:require [app.spec :as spec]
            [app.view-model :refer [view-model]]
            [app.view :refer [new-view]]
            [carry-history.core :as h]
            [carry-logging.core :as logging]
            [carry-debugger.core :as debugger]
            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [carry-atom-sync.core :as atom-sync]
            [reagent.core :as r]
            [hodgepodge.core :as hp]
            [devtools.core :as chrome-devtools]))

(enable-console-print!)
(chrome-devtools/install! [:custom-formatters :sanity-hints])

; "model atom" exposed for debugging in REPL
(def model (atom nil))

(defn main
  []
  (println "Hi.")

  (let [; define external dependencies
        history (h/new-hash-history) #_(h/new-history)
        storage hp/local-storage

        ; define spec
        app-spec (-> (spec/new-spec history storage :todomvc-model ["Finish this project" "Take a bath"])

                     ; add debugging middleware:
                     (debugger/add storage :todomvc-debugger-model)
                     logging/add
                     (atom-sync/add model))

        ; create app from spec
        app (carry/app app-spec)

        ; create GUI; history is passed into view for rendering links
        [app-view-model app-view] (carry-reagent/connect app view-model (new-view history))

        ; create debugger GUI
        [_ debugger-view] (debugger/connect app)]
    (r/render [:div app-view debugger-view]
              (.getElementById js/document "root"))

    ; perform initial side effects
    ((:dispatch-signal app) :on-start)

    ; include view-model for future debugging
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