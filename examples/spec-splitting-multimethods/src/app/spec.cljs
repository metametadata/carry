(ns app.spec
  (:require [app.common.model]
            [app.common.actions]
            [app.common.signals]

            [app.home.model]
            [app.home.actions]
            [app.home.signals]

            [app.settings.model]
            [app.settings.actions]
            [app.settings.signals]

            [app.spec-methods]))

(def spec {:initial-model (merge app.common.model/initial-model
                                 app.home.model/initial-model
                                 app.settings.model/initial-model)
           :on-signal     app.spec-methods/on-signal
           :on-action     app.spec-methods/on-action})