(ns app.signals
  (:require [cljs.core.match :refer-macros [match]]))

; Signal handler is anemic in this example because all side-effects are performed in middleware
(defn on-signal
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         :on-start (println "[todos] start")
         :on-stop (println "[todos] stop")

         [:carry-history.core/on-enter token] nil

         [:on-update-field val] (dispatch-action [:update-field val])
         :on-add (dispatch-action :add)

         [:on-toggle id] (dispatch-action [:toggle id])
         :on-toggle-all (dispatch-action :toggle-all)

         [:on-start-editing id] (dispatch-action [:start-editing id])
         [:on-update-todo id val] (dispatch-action [:update-todo id val])
         [:on-stop-editing id] (dispatch-action [:stop-editing id])
         [:on-cancel-editing id] (dispatch-action [:cancel-editing id])

         [:on-remove id] (dispatch-action [:remove id])

         :on-clear-completed (dispatch-action :clear-completed)))