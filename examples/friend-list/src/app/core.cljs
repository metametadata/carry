(ns app.core
  (:require [friend-list.core :as friend-list]
            [app.api :as api]
            [carry.core :as carry]
            [carry-history.core :as h]
            [carry-logging.core :as logging]
            [carry-devtools.core :as devtools]
            [reagent.core :as r]
            [hodgepodge.core :as hp]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn main
  []
  (let [history (h/new-hash-history)
        storage hp/local-storage
        app-spec (-> (friend-list/new-spec history api/search)
                     (devtools/add-debugger storage :friend-list-debugger-model)
                     logging/add)
        app (carry/app app-spec)
        [app-view-model app-view] (carry/connect-ui app friend-list/view-model friend-list/view)
        [_ debugger-view] (devtools/connect-debugger-ui app)]
    ((:dispatch-signal app) :on-start)

    (r/render [:div app-view debugger-view]
              (.getElementById js/document "root"))

    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:dispatch-signal app) :on-stop))

(defn on-jsload
  []
  #_(. js/console clear))