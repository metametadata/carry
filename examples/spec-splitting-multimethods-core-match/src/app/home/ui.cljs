(ns app.home.ui
  (:require [carry-reagent.core :as carry-reagent]))

(defn view-model
  [model]
  (carry-reagent/track-keys model [:clicks]))

(defn view
  [clicks dispatch]
  [:div
   [:div>button {:on-click #(dispatch :app.home.signals/on-click)} (str "Click me (" @clicks ")")]
   [:div>button {:on-click #(dispatch :on-unknown-signal)} "Dispatch unknown signal"]])