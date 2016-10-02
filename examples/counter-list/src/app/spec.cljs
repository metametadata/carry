(ns app.spec
  (:require [app.model :refer [initial-model]]
            [app.signals :refer [on-signal]]
            [app.actions :refer [on-action]]))

(def spec
  {:initial-model initial-model
   :on-signal     on-signal
   :on-action     on-action})