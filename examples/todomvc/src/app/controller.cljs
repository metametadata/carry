(ns app.controller
  (:require [cljs.core.match :refer-macros [match]]
            [middleware.routing :as routing]))

; Controller is kinda anemic in this example because all side-effects are performed in middlewares
(defn new-control
  [history]
  (fn control
    [_model signal _dispatch-signal dispatch-action]
    (match signal
           :on-start (println "[todos] start")
           :on-stop (println "[todos] stop")

           [:middleware.routing/on-navigate token]
           ; redirect from "" "/"
           (when (= token "")
             (routing/replace-token history "/"))

           [:on-update-field val] (dispatch-action [:update-field val])
           :on-add (dispatch-action :add)

           [:on-toggle id] (dispatch-action [:toggle id])
           :on-toggle-all (dispatch-action :toggle-all)

           [:on-start-editing id] (dispatch-action [:start-editing id])
           [:on-update-todo id val] (dispatch-action [:update-todo id val])
           [:on-stop-editing id] (dispatch-action [:stop-editing id])
           [:on-cancel-editing id] (dispatch-action [:cancel-editing id])

           [:on-remove id] (dispatch-action [:remove id])

           :on-clear-completed (dispatch-action :clear-completed))))