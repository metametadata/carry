(ns app.spec
  (:require [app.model :as model]
            [app.signals :as signals]
            [app.actions :as actions]))

(defn new-spec
  [shop]
  {:initial-model model/initial-model
   :on-signal     (signals/new-on-signal shop)
   :on-action     actions/on-action})