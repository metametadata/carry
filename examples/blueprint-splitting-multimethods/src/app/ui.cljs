(ns app.ui
  (:require [app.common.ui]
            [app.home.ui]
            [app.settings.ui]))

(defn view-model
  [model]
  (apply merge (map #(% model)
                    [app.common.ui/view-model
                     app.home.ui/view-model
                     app.settings.ui/view-model])))

(defn view
  [{:keys [pane clicks nightmode?] :as _view-model} dispatch]
  [:div {:style {:background-color (when @nightmode? "grey")}}
   [app.common.ui/navbar @pane dispatch]
   (case @pane
     :home [app.home.ui/view clicks dispatch]
     :settings [app.settings.ui/view dispatch])])