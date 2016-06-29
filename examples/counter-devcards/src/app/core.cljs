(ns app.core
  (:require [counter.core :as counter]
            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [devcards.core :refer [defcard-rg]]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;
(defcard-rg
  counter
  (let [app (carry/app counter/spec)
        [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]
    ((:dispatch-signal app) :on-start)
    app-view))

;;;;;;;;;;;;;;;;;;;;;;;;
(defn -connect-atom
  [r model dispatch-signal]
  ; sync from reference for the first time
  (dispatch-signal [::on-reset @r])

  ; sync model from reference
  (add-watch r
             model
             (fn [_key _ref _old-state new-state]
               (when (not= @model new-state)
                 (dispatch-signal [::on-reset new-state]))))

  ; sync reference from model
  (add-watch model
             r
             (fn [_key _ref _old-state new-state]
               (when (not= @r new-state)
                 (reset! r new-state)))))

(defn add-atom-sync
  "Carry middleware.
   On start creates a bidirectional sync between the specified atom-like reference and the app model.
   Is useful for integration with Devcards or for direct hacking with app model in REPL."
  [spec r]
  (-> spec
      (update :control
              (fn wrap-control
                [app-control]
                (fn control [model signal dispatch-signal dispatch-action]
                  (match signal
                         :on-start
                         (do
                           (app-control model signal dispatch-signal dispatch-action)
                           (-connect-atom r model dispatch-signal))

                         [::on-reset new-model]
                         (dispatch-action [::reset new-model])

                         :else
                         (app-control model signal dispatch-signal dispatch-action)))))
      (update :reconcile
              (fn wrap-reconcile [app-reconcile]
                (fn reconcile [model action]
                  (match action
                         [::reset new-model]
                         new-model

                         :else
                         (app-reconcile model action)))))))

(defcard-rg
  counter-with-history
  (fn [data-atom _]
    (let [app (carry/app (-> counter/spec
                             (add-atom-sync data-atom)))    ; <-- connect devcards atom
          [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]
      ((:dispatch-signal app) :on-start)
      app-view))

  (atom (:initial-model counter/spec))                      ; <-- create devcards atom with initial model value

  {:inspect-data true
   :history      true})

; TODO: remove previous watches on hot reloads? they may leak memory by holding onto the old app instances

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  [])

(defn on-jsload
  []
  #_(. js/console clear))