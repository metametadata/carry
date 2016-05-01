; Helpers for implementing subapps using Elm-ish architecture
(ns app.subapps
  (:require [carry.core :as carry]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn -tagged
  "Helper function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))

(defn -wrap-initial-model
  [app-initial-model subapp-key subapp-spec]
  (assoc app-initial-model subapp-key (:initial-model subapp-spec)))

(defn -wrap-control
  [app-control subapp-key subapp-spec]
  (fn control
    [model signal dispatch-signal dispatch-action]
    (match signal
           :on-start
           (do
             (app-control model signal dispatch-signal dispatch-action)
             (dispatch-signal [[:on-subapp-signal subapp-key] signal]))

           :on-stop
           (do
             (dispatch-signal [[:on-subapp-signal subapp-key] signal])
             (app-control model signal dispatch-signal dispatch-action))

           [[:on-subapp-signal subapp-key] s]
           ((:control subapp-spec)
             (carry/entangle model (partial subapp-key))
             s
             (-tagged dispatch-signal [:on-subapp-signal subapp-key])
             (-tagged dispatch-action [:on-subapp-action subapp-key]))

           :else
           (app-control model signal dispatch-signal dispatch-action))))

(defn -wrap-reconcile
  [app-reconcile subapp-key subapp-spec]
  (fn reconcile
    [model action]
    (match action
           [[:on-subapp-action subapp-key] a]
           (update model subapp-key (:reconcile subapp-spec) a)

           :else
           (app-reconcile model action))))

(defn include-spec
  [app-spec subapp-key subapp-spec]
  (-> app-spec
      (update :initial-model -wrap-initial-model subapp-key subapp-spec)
      (update :control -wrap-control subapp-key subapp-spec)
      (update :reconcile -wrap-reconcile subapp-key subapp-spec)))

(defn include-view-model
  [app-view-model subapp-key subapp-view-model]
  (fn view-model
    [model]
    (assoc (app-view-model model) subapp-key
                                  ; using reaction (and not, for instance, carry/entangle) is OK, since vm will only create new reactions from it
                                  (subapp-view-model (reaction (subapp-key @model))))))

(defn include-view
  [subapp-key subapp-view app-view-model app-dispatch]
  [subapp-view (subapp-key app-view-model) (-tagged app-dispatch [:on-subapp-signal subapp-key])])