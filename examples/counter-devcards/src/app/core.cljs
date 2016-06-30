(ns app.core
  (:require [counter.core :as counter]
            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [devcards.core])
  (:require-macros [devcards.core :refer [defcard-rg]]))

(enable-console-print!)

(devcards.core/start-devcard-ui!)

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

(defn -unconnect-atom
  [r model]
  (remove-watch r model)
  (remove-watch model r))

(defn add-atom-sync
  "Carry middleware.
   On start creates a bidirectional sync between the specified atom-like reference and the app model.
   On stop sync is removed.
   Current reference values are not updated until one of the references changes.
   Is useful for direct hacking with app model in REPL and for integration with Devcards."
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

                         :on-stop
                         (do
                           (-unconnect-atom r model)

                           (app-control model signal dispatch-signal dispatch-action))

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

(defn -div-with-unmount-callback
  [_body unmount-cb]
  (r/create-class {:reagent-render         (fn [body _unmount-cb] (into [:div] body))
                   :component-will-unmount (fn [_this] (unmount-cb))}))

(defcard-rg
  counter-with-history
  "Preserves model value between hot reloads."
  (fn [data-atom _]
    ; Create app instance.
    (let [app (carry/app (-> counter/spec

                             ; Get model value from data atom.
                             (assoc :initial-model @data-atom)

                             ; Setup bidirectional sync with data atom.
                             (add-atom-sync data-atom)))
          [_ app-view] (carry-reagent/connect app counter/view-model counter/view)]
      ((:dispatch-signal app) :on-start)                    ; Start the app.

      ; Render app view.
      [-div-with-unmount-callback
       [app-view]

       ; Stop the app on umount/hot-reload.
       #((:dispatch-signal app) :on-stop)]))

  ; Create devcards atom with initial model value.
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