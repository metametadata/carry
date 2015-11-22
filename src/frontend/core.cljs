(ns frontend.core
  (:require [frontend.devtools :as devtools]
            [frontend.todos :as todos]
            [cljs.core.match :refer-macros [match]]
            [reagent.core :as r]
            [hodgepodge.core :as hp]
            [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;; Middleware
(defn wrap-persist-to-storage
  [reconcile storage]
  (fn wrapped-reconcile
    [model action]
    (let [result (reconcile model action)]
      (assoc! storage :model result)
      result)))

;;;;;;;;;;;;;;;;;;;;;;;; App
; defonce is needed for hotloading
(defonce history (doto (Html5History.)
                   (.setEnabled true)))

(defn main
  []
  (println "Hi.")

  (let [storage hp/local-storage
        app (devtools/connect (devtools/init (todos/init))
                              todos/view-model
                              todos/view
                              (todos/new-control storage)
                              (-> todos/reconcile
                                  (wrap-persist-to-storage storage)))]
    (letfn [(dispatch-navigate
              [token]
              ((:dispatch-signal app) [:component [:on-navigate token]]))]
      ; clear listeners in case of hotloading
      (goog.events/removeAll history)

      ; start routing
      (goog.events/listen history EventType/NAVIGATE #(dispatch-navigate (.-token %)))
      (dispatch-navigate (.getToken history)))

    (r/render-component [(:view app)] (. js/document (getElementById "root")))
    app))

; to be accessed from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn on-js-reload
  []
  #_(. js/console clear))