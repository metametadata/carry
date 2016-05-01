(ns app.core
  (:require [app.subapps :as subapps]
            [friend-list.core :as friend-list]
            [counter.core :as counter]
            [app.friend-list-api :as friend-list-api]
            [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [carry-history.core :as h]
            [carry-logging.core :as logging]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def initial-model
  {:friend-list-visible? true
   :counter-visible?     true})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn control
  [_model signal _dispatch-signal dispatch-action]
  (match signal
         :on-start nil
         :on-stop nil

         :on-toggle-friend-list
         (dispatch-action :toggle-friend-list)

         :on-toggle-counter
         (dispatch-action :toggle-counter)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn reconcile
  [model action]
  (match action
         :toggle-friend-list
         (update model :friend-list-visible? not)

         :toggle-counter
         (update model :counter-visible? not)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def view-model (-> (fn [model] (carry-reagent/track-keys model [:friend-list-visible? :counter-visible?]))
                    (subapps/include-view-model :friend-list-subapp friend-list/view-model)
                    (subapps/include-view-model :counter-subapp counter/view-model)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn view
  [{:keys [friend-list-visible? counter-visible?] :as view-model} dispatch]
  [:div {:style {:text-align       "center"
                 :background-color "lightgreen"
                 :padding          10}}
   [:div>label "Show friend list subapp"
    [:input {:type      "checkbox"
             :checked   @friend-list-visible?
             :on-change #(dispatch :on-toggle-friend-list)}]]

   (when @friend-list-visible?
     [:div {:style {:background-color "lightblue"
                    :padding          10}}
      [subapps/include-view :friend-list-subapp friend-list/view view-model dispatch]])

   [:p]
   [:div>label "Show counter subapp"
    [:input {:type      "checkbox"
             :checked   @counter-visible?
             :on-change #(dispatch :on-toggle-counter)}]]

   (when @counter-visible?
     [:div {:style {:background-color "orange"
                    :padding          10}}
      [subapps/include-view :counter-subapp counter/view view-model dispatch]])])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn new-spec
  [history api-search]
  (-> {:initial-model initial-model
       :control       control
       :reconcile     reconcile}
      (subapps/include-spec :friend-list-subapp (friend-list/new-spec history api-search))
      (subapps/include-spec :counter-subapp counter/spec)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn main
  []
  (let [history (h/new-hash-history)
        app-spec (-> (new-spec history friend-list-api/search)
                     logging/add)
        app (carry/app app-spec)
        [app-view-model app-view] (carry-reagent/connect app view-model view)]
    ((:dispatch-signal app) :on-start)

    (r/render app-view (.getElementById js/document "root"))

    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:dispatch-signal app) :on-stop))

(defn on-jsload
  []
  #_(. js/console clear))