(ns app.home.signals
  (:require [app.spec-methods :refer [on-signal]]
            [cljs.core.match :refer-macros [match]]))

(defmethod on-signal (namespace ::_)
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         ::on-click (dispatch-action :app.home.actions/click)))