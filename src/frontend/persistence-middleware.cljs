; Middleware loads model from storage on :on-connect signal and saves it into storage on every action.
; storage is expected to be a transient map
(ns frontend.persistence-middleware
  (:require [cljs.core.match :refer-macros [match]]))

(defn wrap-control
  [control storage]
  (fn control-reconcile
    [model signal dispatch]
    (when (= :on-connect signal)
      (let [storage-model (get storage :model :not-found)]
        (when-not (= storage-model :not-found)
          (dispatch [:reset-from-storage storage-model]))))

    (control model signal dispatch)))

(defn wrap-reconcile
  [reconcile storage]
  (fn wrapped-reconcile
    [model action]
    (match action
           [:reset-from-storage data] data

           :else
           (let [result (reconcile model action)]
             (assoc! storage :model result)
             result))))