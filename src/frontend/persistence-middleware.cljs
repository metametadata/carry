; Middleware loads model from storage on specified signal and saves it into storage on every action.
; Storage is expected to be a transient map.
(ns frontend.persistence-middleware
  (:require [cljs.core.match :refer-macros [match]]))

(defn wrap-control
  "On load-signal middleware will load the model from storage and send the signal further with updated model to the component.
  Blacklist should contain model keys which will not be loaded from storage."
  [control load-signal storage key load-blacklist]
  (fn wrapped-control
    [model signal dispatch]
    (if (= load-signal signal)
      (let [storage-model (get storage key :not-found)]
        (if (not= storage-model :not-found)
          (let [new-model (merge storage-model (select-keys model load-blacklist))]
            ; update model
            (dispatch [:reset-from-storage new-model])

            ; also let component handle the loaded state
            (control new-model signal dispatch))

          ; else - hand signal further to component
          (control model signal dispatch)))

      ; else - hand signal further to component
      (control model signal dispatch))))

(defn wrap-reconcile
  "Blacklist should contain model keys which will not be saved to storage."
  [reconcile storage key save-blacklist]
  (fn wrapped-reconcile
    [model action]
    (match action
           [:reset-from-storage data]
           data

           :else
           (let [result (reconcile model action)
                 whitelist (clojure.set/difference (set (keys result)) save-blacklist)]
             (assoc! storage key (select-keys result whitelist))
             result))))