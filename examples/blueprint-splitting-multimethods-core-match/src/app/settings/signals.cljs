(ns app.settings.signals
  (:require [app.blueprint-methods :refer [on-signal]]
            [cljs.core.match :refer-macros [match]]))

(defmethod on-signal (namespace ::_)
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         ::on-toggle-mode (dispatch-action :app.settings.actions/toggle-mode)))