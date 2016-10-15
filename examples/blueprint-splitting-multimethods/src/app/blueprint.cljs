(ns app.blueprint
  (:require [app.common.model]
            [app.common.actions]
            [app.common.signals]

            [app.home.model]
            [app.home.actions]
            [app.home.signals]

            [app.settings.model]
            [app.settings.actions]
            [app.settings.signals]

            [app.blueprint-methods]))

(def blueprint {:initial-model (merge app.common.model/initial-model
                                      app.home.model/initial-model
                                      app.settings.model/initial-model)
                :on-signal     app.blueprint-methods/on-signal
                :on-action     app.blueprint-methods/on-action})