; Middleware loads model from storage on specified signal and saves it into storage on every action.
; Storage is expected to be a transient map.
(ns frontend.persistence-middleware
  (:require [cljs.core.match :refer-macros [match]]))

(defn -wrap-control
  [control storage key load-blacklist]
  (fn wrapped-control
    [model signal dispatch]
    (if-not (= signal :on-connect)
      ; hand signal further to component
      (control model signal dispatch)

      ; else
      (let [storage-model (get storage key :not-found)]
        (if (= storage-model :not-found)
          ; no model in storage - hand signal further to component
          (control model signal dispatch)

          ; else
          (let [new-model (merge storage-model (select-keys model load-blacklist))]
            ; update model
            (dispatch [::reset-from-storage new-model])

            ; with updated model hand signal further to component
            (control new-model signal dispatch)))))))

(defn -wrap-reconcile
  [reconcile storage key save-blacklist]
  (fn wrapped-reconcile
    [model action]
    (match action
           [::reset-from-storage data]
           data

           :else
           (let [result (reconcile model action)
                 whitelist (clojure.set/difference (set (keys result)) save-blacklist)]
             (assoc! storage key (select-keys result whitelist))
             result))))

(defn wrap
  "On :on-connect signal middleware will load the model from storage and send the signal further with updated model to the component.
  Blacklist should contain model keys which will not be saved and loaded."
  [spec storage key blacklist]
  (-> spec
      (update :control -wrap-control storage key blacklist)
      (update :reconcile -wrap-reconcile storage key blacklist)))