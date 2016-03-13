(ns app.core
  (:require [app.api :as api]
            [middleware.routing :as routing]
            [middleware.logging :as logging]
            [middleware.devtools :as devtools]
            [reagent-mvsa.core :as mvsa]
            [reagent-mvsa.helpers :as helpers]
            [reagent.core :as r]
            [hodgepodge.core :as hp]
            [goog.functions :refer [debounce]]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def initial-model
  {:query   ""
   :friends nil})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn new-control
  [history]
  (let [search (fn [q dispatch-signal]
                 (routing/set-token history q)
                 (api/search q #(dispatch-signal [:-on-search-success q %])))
        debounced-search (debounce search 300)]
    (fn control
      [model signal dispatch-signal dispatch-action]
      (match signal
             [:on-input q]
             (do
               (dispatch-action [:set-query q])
               (debounced-search q dispatch-signal))

             [::routing/on-navigate token]
             (do
               (dispatch-action [:set-query token])
               (search token dispatch-signal))

             [:-on-search-success q friends]
             (if (= (:query @model) q)
               (dispatch-action [:set-friends friends])
               (println "ignore response" (pr-str q)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn reconcile
  [model action]
  (match action
         [:set-query q]
         (assoc model :query q)

         [:set-friends friends]
         (assoc model :friends friends)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn view-model
  [model]
  (helpers/track-keys model #{:query :friends}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn search-field
  [_query _dispatch]
  (r/create-class {:reagent-render
                   (fn [query dispatch]
                     [:input {:type        "search"
                              :style       {:font-size 28}
                              :placeholder "Search friends..."
                              :value       query
                              :on-change   #(dispatch [:on-input (.. % -target -value)])}])

                   :component-did-update
                   (fn [this] (.focus (r/dom-node this)))

                   :component-did-mount
                   (fn [this] (.focus (r/dom-node this)))}))

(defn friend-list
  [friends]
  [:ul
   (for [f friends]
     ^{:key (:id f)}
     [:li {:style {:font-size 25}}
      [:strong (:name f)] " " (:username f)])])

(defn view
  [{:keys [query friends] :as _view-model} dispatch]
  [:div
   [search-field @query dispatch]
   [friend-list @friends]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn main
  []
  (let [history (routing/new-history)
        storage hp/local-storage
        app-spec (-> {:initial-model initial-model
                      :control       (new-control history)
                      :reconcile     reconcile
                      :on-start      (constantly nil)
                      :on-stop       (constantly nil)}
                     (logging/add "[app] ")
                     (routing/add history)
                     (devtools/add-debugger storage :debugger-model)
                     (logging/add "[debugger] "))
        app (mvsa/app app-spec)
        [app-view-model app-view] (mvsa/connect-ui app view-model view)
        [_ debugger-view] (devtools/connect-debugger-ui app)]
    ((:start app))

    (r/render [:div app-view debugger-view]
              (.getElementById js/document "root"))

    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:stop app)))

(defn on-jsload
  []
  #_(. js/console clear))