(ns carry-atom-sync.core
  (:require [cljs.core.match :refer-macros [match]]))

(defn ^:no-doc -start-syncing
  [r model dispatch-signal]
  ; syncing model from reference
  (add-watch r
             model
             (fn [_key _ref _old-state new-state]
               (when (not= @model new-state)
                 (dispatch-signal [::on-reset new-state]))))

  ; syncing reference from model
  (add-watch model
             r
             (fn [_key _ref _old-state new-state]
               (when (not= @r new-state)
                 (reset! r new-state)))))

(defn ^:no-doc -stop-syncing
  [r model]
  (remove-watch r model)
  (remove-watch model r))

(defn add
  "On :on-start signal, after wrapped app is started, creates a bidirectional sync between the specified atom-like reference
   and the app model and also updates the reference from the model for the first time.
   The initial reference value is not used.
   Sync is removed on :on-stop signal."
  [blueprint r]
  (-> blueprint
      (update :on-signal
              (fn wrap-on-signal [app-on-signal]
                (fn on-signal [model signal dispatch-signal dispatch-action]
                  (match signal
                         :on-start
                         (let [original-signal-result (app-on-signal model signal dispatch-signal dispatch-action)]
                           (reset! r @model)
                           (-start-syncing r model dispatch-signal)
                           original-signal-result)

                         :on-stop
                         (do
                           (-stop-syncing r model)

                           (app-on-signal model signal dispatch-signal dispatch-action))

                         [::on-reset new-model]
                         (dispatch-action [::reset new-model])

                         :else
                         (app-on-signal model signal dispatch-signal dispatch-action)))))
      (update :on-action
              (fn wrap-on-action [app-on-action]
                (fn on-action [model action]
                  (match action
                         [::reset new-model]
                         new-model

                         :else
                         (app-on-action model action)))))))
