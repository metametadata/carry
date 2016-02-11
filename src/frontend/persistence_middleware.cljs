(ns frontend.persistence-middleware
  (:require [frontend.mvsa :as mvsa]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn -wrap-control
  [app-control key]
  (fn control
    [model signal dispatch]
    (match signal
           [::-on-load-from-storage key loaded-model]
           (dispatch [::-load-from-storage key loaded-model])

           :else
           (app-control model signal dispatch))))

(defn -wrap-reconcile
  [app-reconcile key blacklist]
  (fn reconcile
    [model action]
    (match action
           ; it's important to apply blacklist using the most actual model, that's why we do it in action
           [::-load-from-storage key loaded-model]
           (merge loaded-model (select-keys model blacklist))

           :else
           (app-reconcile model action))))

(defn -save
  [storage key blacklist model]
  (let [save-whitelist (clojure.set/difference (set (keys model)) blacklist)]
    (assoc! storage key (select-keys model save-whitelist))))

(defn add
  "On start middleware will load the model from storage.
  Saves model into storage on every change.
  Several middlewares can safely wrap the same spec as long as they use different storage keys.

  Storage is expected to be a transient map.
  If this middleware is applioed to spec several times then all keys must differ; otherwise, behavior is undefined.
  Optional :blacklist set should contain model keys which will not be saved and loaded.
  Optional :load-wrapper allows decorating model update function (e.g. it's possible to cancel loading based on loaded data)."
  ([spec storage key]
   (add spec storage key nil))
  ([spec storage key {:keys [blacklist load-wrapper] :or {blacklist #{} load-wrapper identity} :as _options}]
   {:pre [(set? blacklist)]}
   (letfn [(load-from-storage
             [loaded-model dispatch-signal _current-model]
             (dispatch-signal [::-on-load-from-storage key loaded-model]))]
     (-> spec
         ; Key is injected into wrappers in case several persistence middlewares are applied to the same spec.
         ; Without key the load signal would be always handled by the "top" persistence layer.
         (update :control -wrap-control key)
         (update :reconcile -wrap-reconcile key blacklist)
         (update :on-start mvsa/wrap-after
                 (fn [model dispatch-signal]
                   (println "[persistence] start, key =" (pr-str key))

                   (let [loaded-model (get storage key :not-found)]
                     (when (not= loaded-model :not-found)
                       ((load-wrapper load-from-storage) loaded-model dispatch-signal @model)))

                   (run! (-save storage key blacklist @model))))))))