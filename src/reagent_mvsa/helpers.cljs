(ns reagent-mvsa.helpers
  (:require [reagent.core])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn swapping-reconcile
  "Given a pure function (next-model [current-model-value action]),
  creates a reconcile function which swap!s the model value with the result of calling next-model."
  [next-model]
  (fn reconcile
    [model-atom action]
    (swap! model-atom next-model action)))

(defn track-keys
  "Returns a map containing Reagent reactions to map entries specified by keys."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))

(defn after-do
  "Returns a new function which calls f1 and then calls f2. Useful in spec middleware for wrapping :on-start."
  [f1 f2]
  (fn [& args]
    (apply f1 args)
    (apply f2 args)))

(defn before-do
  "Returns a new function which calls f2 and then calls f1. Useful in spec middleware for wrapping :on-stop."
  [f1 f2]
  (fn [& args]
    (apply f2 args)
    (apply f1 args)))