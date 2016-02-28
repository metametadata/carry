(ns app.controller
  (:require [cljs.core.match :refer-macros [match]]))

; Controller is kinda anemic in this example because all side-effects are performed in middlewares
(defn control
  [_model signal dispatch]
  (match signal
         [:on-update-field val] (dispatch [:update-field val])
         :on-add (dispatch :add)

         [:on-toggle id] (dispatch [:toggle id])
         :on-toggle-all (dispatch :toggle-all)

         [:on-start-editing id] (dispatch [:start-editing id])
         [:on-update-todo id val] (dispatch [:update-todo id val])
         [:on-stop-editing id] (dispatch [:stop-editing id])
         [:on-cancel-editing id] (dispatch [:cancel-editing id])

         [:on-remove id] (dispatch [:remove id])

         :on-clear-completed (dispatch :clear-completed)))