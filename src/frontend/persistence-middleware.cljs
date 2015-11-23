; Middleware loads model from storage on specified signal and saves it into storage on every action.
; Storage is expected to be a transient map.
(ns frontend.persistence-middleware
  (:require [cljs.core.match :refer-macros [match]]))

(defn wrap-control
  "On load-signal middleware will load the model from storage and send the signal further to the component."
  [control load-signal storage key]
  (fn control-reconcile
    [model signal dispatch]
    (when (= load-signal signal)
      (let [storage-model (get storage key :not-found)]
        (when-not (= storage-model :not-found)
          (dispatch [:reset-from-storage storage-model]))))

    ; now let wrapped component handle the signal
    (control model signal dispatch)))

(defn wrap-reconcile
  [reconcile storage key]
  (fn wrapped-reconcile
    [model action]
    (match action
           [:reset-from-storage data]
           data

           :else
           (let [result (reconcile model action)]
             (assoc! storage key result)
             result))))