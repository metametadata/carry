(ns carry-persistence.core
  (:require [cljs.core.match :refer-macros [match]]))

(defn ^:no-doc -whitelist
  "Removes blacklisted keys from the specified map."
  [m blacklist]
  (apply dissoc m blacklist))

(defn ^:no-doc -save
  [storage key model]
  (assoc! storage key model))

(defn ^:no-doc -wrap-control
  [app-control storage key blacklist load-wrapper]
  (fn control
    [model signal dispatch-signal dispatch-action]
    (letfn [(load-from-storage
              [_model-reaction loaded-model dispatch-signal]
              (dispatch-signal [::on-load-from-storage key loaded-model]))]
      (match signal
             :on-start
             (do
               (app-control model signal dispatch-signal dispatch-action)

               (when (not (-> @model :carry-debugger.core/debugger :replay-mode?))
                 (let [loaded-model (get storage key :not-found)]
                   (when (not= loaded-model :not-found)
                     ((load-wrapper load-from-storage) model loaded-model dispatch-signal))))

               ; save for the first time and on every future change
               (-save storage key (-whitelist @model blacklist))
               (add-watch model
                          [::persistence-watcher key]       ; unique key
                          (fn [_key _atom old-state new-state]
                            (let [old-state (-whitelist old-state blacklist)
                                  new-state (-whitelist new-state blacklist)]
                              (when (not= old-state new-state)
                                (-save storage key new-state))))))

             [::on-load-from-storage key loaded-model]
             (dispatch-action [::load-from-storage key loaded-model])

             :else
             (app-control model signal dispatch-signal dispatch-action)))))

(defn ^:no-doc -wrap-reconcile
  [app-reconcile key blacklist]
  (fn reconcile
    [model action]
    (match action
           ; It's important to apply blacklist using the most actual model, that's why we do it in action.
           ; Key is passed in order to support several middleware instances correctly.
           [::load-from-storage key loaded-model]
           (merge loaded-model (select-keys model blacklist))

           :else
           (app-reconcile model action))))

(defn add
  "On start middleware will load the model from storage.
  Saves model into storage on every change.
  Several middlewares can safely wrap the same spec as long as they use different storage keys.

  Storage is expected to be a transient map (e.g. see hodgepodge lib).
  If this middleware is applied to spec several times then all keys must differ; otherwise, behavior is undefined.
  Optional :blacklist set should contain model keys which will not be saved and loaded.
  Optional :load-wrapper allows decorating model update function (e.g. it's possible to cancel loading based on loaded data).

  Middleware is friendly to carry-debugger:

  * it won't persist debugger data in order to not conflict with debugger's persistence implementation
  * it won't load model from storage on app start if debugger's replay mode is on"
  ([spec storage key]
   (add spec storage key nil))
  ([spec storage key {:keys [blacklist load-wrapper] :or {blacklist #{} load-wrapper identity} :as _options}]
   {:pre [(set? blacklist)]}
   (let [blacklist (conj blacklist :carry-debugger.core/debugger)]
     (-> spec
         ; Key is injected into wrappers in case several persistence middlewares are applied to the same spec.
         ; Without key the load signal would be always handled by the "top" persistence layer.
         (update :control -wrap-control storage key blacklist load-wrapper)
         (update :reconcile -wrap-reconcile key blacklist)))))