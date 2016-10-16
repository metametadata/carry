(ns app.blueprint
  (:require [app.model :as model]
            [app.signals :as signals]
            [app.actions :as actions]))

(defn new-blueprint
  [shop]
  {:initial-model model/initial-model
   :on-signal     (signals/new-on-signal shop)
   :on-action     actions/on-action})