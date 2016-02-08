(ns frontend.persistence-middleware
  (:require [cljs.core.match :refer-macros [match]]))

(defn -wrap-control
  [component-control key]
  (fn control
    [model signal dispatch]
    (match signal
           [::-on-load-from-storage key loaded-model]
           (dispatch [::-load-from-storage key loaded-model])

           :else
           (component-control model signal dispatch))))

(defn -wrap-reconcile
  [component-reconcile key blacklist]
  (fn reconcile
    [model action]
    (match action
           ; it's important to apply blacklist using the most actual model, that's why we do it in action
           [::-load-from-storage key loaded-model]
           (merge loaded-model (select-keys model blacklist))

           :else
           (component-reconcile model action))))

; TODO: duplicated code
(defn -after-do
  [f1 f2]
  (fn [& args]
    (apply f1 args)
    (apply f2 args)))

(defn -save
  [storage key blacklist model]
  (let [save-whitelist (clojure.set/difference (set (keys model)) blacklist)]
    (assoc! storage key (select-keys model save-whitelist))))

(defn add
  "On start middleware will load the model from storage.
  Saves model into storage on every change.
  Storage is expected to be a transient map.
  Optional :blacklist should contain model keys which will not be saved and loaded.
  Optional :load-wrapper allows decorating model update function(e.g. it's possible to cancel loading based on loaded data)."
  ([spec storage key]
   (add spec storage key nil))

  ([spec storage key {:keys [blacklist load-wrapper] :or {blacklist #{} load-wrapper identity} :as _options}]
   (assert (set? blacklist) (str "actual value: " (pr-str blacklist)))

   (letfn [(load-from-storage
             [loaded-model dispatch-signal _current-model]
             (dispatch-signal [::-on-load-from-storage key loaded-model]))]
     (-> spec
         ; Key is injected into wrappers in case several persistence middlewares are applied to the same spec.
         ; Without key the load signal would be always handled by the "top" persistence layer.
         (update :control -wrap-control key)
         (update :reconcile -wrap-reconcile key blacklist)
         (update :on-start -after-do
                 (fn [model dispatch-signal]
                   (println "[persistence] start, loading from" (pr-str key))

                   (let [loaded-model (get storage key :not-found)]
                     (when (not= loaded-model :not-found)
                       ((load-wrapper load-from-storage) loaded-model dispatch-signal @model)))

                   (add-watch model [:persistence-watcher key]
                              (fn [_key _atom _old-state new-state]
                                (-save storage key blacklist new-state)))))))))