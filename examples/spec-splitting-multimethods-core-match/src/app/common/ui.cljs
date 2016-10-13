(ns app.common.ui
  (:require [carry-reagent.core :as carry-reagent]))

(defn view-model
  [model]
  (carry-reagent/track-keys model [:pane]))

(defn navbar
  [pane dispatch]
  [:div
   [:button {:style    (when (= pane :home) {:font-weight "bold"})
             :on-click #(dispatch :app.common.signals/on-home)} "Home"]
   [:button {:style    (when (= pane :settings) {:font-weight "bold"})
             :on-click #(dispatch :app.common.signals/on-settings)} "Settings"]])