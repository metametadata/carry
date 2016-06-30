(ns carry-atom-sync.core
  (:require [cljs.core.match :refer-macros [match]]))

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

(defn add
  "Carry middleware which on app start creates a bidirectional sync between the specified atom-like reference and the app model.
   Sync is removed on app stop signal.
   Synced references are not updated until one of the references changes."
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
