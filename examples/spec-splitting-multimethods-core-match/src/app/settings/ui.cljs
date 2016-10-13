(ns app.settings.ui
  (:require [carry-reagent.core :as carry-reagent]))

(defn view-model
  [model]
  (carry-reagent/track-keys model [:nightmode?]))

(defn view
  [dispatch]
  [:div>button {:on-click #(dispatch :app.settings.signals/on-toggle-mode)} "Toggle nightmode"])