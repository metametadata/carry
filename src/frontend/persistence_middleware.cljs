; Middleware loads model from storage on specified signal and saves it into storage on every signal and
; after every action dispatched from control.
; Storage is expected to be a transient map.
(ns frontend.persistence-middleware
  (:require [cljs.core.match :refer-macros [match]]))

(defn -wrap-control
  [control storage key blacklist]
  (fn wrapped-control
    [model signal dispatch]
    (letfn [(save
              [result]
              (let [save-whitelist (clojure.set/difference (set (keys result)) blacklist)]
                (assoc! storage key (select-keys result save-whitelist))))

            (dispatch-and-save
              [action]
              (let [result (dispatch action)]
                (save result)
                result))

            (save-and-control
              [model signal]
              (save model)                                  ; persist current model in case no action is dispatched
              (control model signal dispatch-and-save))]
      (if-not (= signal :on-connect)
        ; hand signal further to component
        (save-and-control model signal)

        ; :on-connect signal
        (let [storage-model (get storage key :not-found)]
          (if (= storage-model :not-found)
            ; no model in storage - hand signal further to component
            (save-and-control model signal)

            ; else - update model and hand it with signal further to component
            (let [new-model (merge storage-model (select-keys model blacklist))]
              (dispatch [::reset-from-storage new-model])
              (control new-model signal dispatch-and-save))))))))

(defn -wrap-reconcile
  [reconcile]
  (fn wrapped-reconcile
    [model action]
    (match action
           [::reset-from-storage data]
           data

           :else
           (reconcile model action))))

(defn wrap
  "On :on-connect signal middleware will load the model from storage and send the signal further with updated model to the component.
  Blacklist should contain model keys which will not be saved and loaded."
  [spec storage key blacklist]
  (-> spec
      (update :control -wrap-control storage key blacklist)
      (update :reconcile -wrap-reconcile)))