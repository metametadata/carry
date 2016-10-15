(ns app.blueprint
  (:require [app.common.model]
            [app.common.signals]
            [app.common.actions]

            [app.home.model]
            [app.home.signals]
            [app.home.actions]

            [app.settings.model]
            [app.settings.signals]
            [app.settings.actions]

            [app.utils]))

(def blueprint {:initial-model (merge app.common.model/initial-model
                                      app.home.model/initial-model
                                      app.settings.model/initial-model)
                :on-signal     (app.utils/dispatching-to-either #{app.common.signals/on-signal
                                                                  app.home.signals/on-signal
                                                                  app.settings.signals/on-signal})
                :on-action     (app.utils/dispatching-to-either #{app.common.actions/on-action
                                                                  app.home.actions/on-action
                                                                  app.settings.actions/on-action})})