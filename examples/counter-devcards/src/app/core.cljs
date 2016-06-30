(ns app.core
  (:require [counter.core :as counter]
            [carry.core :as carry]
            [carry-atom-sync.core :as carry-atom-sync]
            [carry-reagent.core :as carry-reagent]
            [carry-logging.core :as logging]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [devcards.core])
  (:require-macros [devcards.core :refer [defcard-rg]]))

(enable-console-print!)

(devcards.core/start-devcard-ui!)

(defn -div-with-unmount-callback
  [_body unmount-cb]
  (r/create-class {:reagent-render         (fn [body _unmount-cb] (into [:div] body))
                   :component-will-unmount (fn [_this] (unmount-cb))}))

(defcard-rg
  counter
  (let [app (carry/app (-> counter/spec
                           (logging/add "[counter] ")))
        [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]
    ((:dispatch-signal app) :on-start)

    [-div-with-unmount-callback
     [app-view]
     #((:dispatch-signal app) :on-stop)]))

(defcard-rg
  counter-with-history
  "Preserves model value between hot reloads."
  (fn [data-atom _]
    ; Create app instance.
    (let [app (carry/app (-> counter/spec

                             ; Get model value from data atom.
                             (assoc :initial-model @data-atom)

                             ; Setup bidirectional sync with data atom.
                             (carry-atom-sync/add data-atom)

                             (logging/add "[counter-with-history] ")))
          [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]
      ; Start the app.
      ((:dispatch-signal app) :on-start)

      ; Render app view.
      [-div-with-unmount-callback
       [app-view]

       ; Stop the app on umount/hot-reload.
       #((:dispatch-signal app) :on-stop)]))

  ; Create data atom with initial model value.
  (atom (:initial-model counter/spec))

  ; Card options.
  {:inspect-data true
   :history      true})

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  [])

(defn on-jsload
  []
  #_(. js/console clear))