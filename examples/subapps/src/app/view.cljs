(ns app.view
  (:require [app.util :as util]
            [friend-list.core :as friend-list]
            [counter.core :as counter]))

(defn view
  [{:keys [friend-list-visible? counter-visible?] :as view-model} dispatch]
  [:div {:style {:text-align       "center"
                 :background-color "lightgreen"
                 :padding          10}}
   ; Friend list
   [:div>label "Show friend list subapp"
    [:input {:type      "checkbox"
             :checked   @friend-list-visible?
             :on-change #(dispatch :on-toggle-friend-list)}]]

   (when @friend-list-visible?
     [:div {:style {:background-color "lightblue"
                    :padding          10}}
      [util/include-view :friend-list-subapp friend-list/view view-model dispatch]])

   ; Counter
   [:p]
   [:div>label "Show counter subapp"
    [:input {:type      "checkbox"
             :checked   @counter-visible?
             :on-change #(dispatch :on-toggle-counter)}]]

   (when @counter-visible?
     [:div {:style {:background-color "orange"
                    :padding          10}}
      [util/include-view :counter-subapp counter/view view-model dispatch]])])