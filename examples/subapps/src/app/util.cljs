; Helpers for implementing subapps
(ns app.util
  (:require [carry.core :as carry]
            [cljs.core.match :refer-macros [match]]
            [reagent.ratom :refer [reaction]]))

(defn -tagged
  "Helper function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))

(defn -wrap-initial-model
  [app-initial-model subapp-key subapp-blueprint]
  (assoc app-initial-model subapp-key (:initial-model subapp-blueprint)))

(defn -wrap-on-signal
  [app-on-signal subapp-key subapp-blueprint]
  (fn on-signal
    [model signal dispatch-signal dispatch-action]
    (match signal
           :on-start
           (do
             (app-on-signal model signal dispatch-signal dispatch-action)
             (dispatch-signal [[:on-subapp-signal subapp-key] signal]))

           :on-stop
           (do
             (dispatch-signal [[:on-subapp-signal subapp-key] signal])
             (app-on-signal model signal dispatch-signal dispatch-action))

           [[:on-subapp-signal subapp-key] s]
           ((:on-signal subapp-blueprint)
             (carry/entangle model subapp-key)
             s
             (-tagged dispatch-signal [:on-subapp-signal subapp-key])
             (-tagged dispatch-action [:on-subapp-action subapp-key]))

           :else
           (app-on-signal model signal dispatch-signal dispatch-action))))

(defn -wrap-on-action
  [app-on-action subapp-key subapp-blueprint]
  (fn on-action
    [model action]
    (match action
           [[:on-subapp-action subapp-key] a]
           (update model subapp-key (:on-action subapp-blueprint) a)

           :else
           (app-on-action model action))))

(defn include-blueprint
  [app-blueprint subapp-key subapp-blueprint]
  (-> app-blueprint
      (update :initial-model -wrap-initial-model subapp-key subapp-blueprint)
      (update :on-signal -wrap-on-signal subapp-key subapp-blueprint)
      (update :on-action -wrap-on-action subapp-key subapp-blueprint)))

(defn include-view-model
  "For this to work app's view model function must return a map."
  [app-view-model subapp-key subapp-view-model]
  (fn view-model
    [model]
    (assoc (app-view-model model) subapp-key
                                  (subapp-view-model (reaction (subapp-key @model))))))

(defn include-view
  [subapp-key subapp-view app-view-model app-dispatch]
  [subapp-view (subapp-key app-view-model) (-tagged app-dispatch [:on-subapp-signal subapp-key])])