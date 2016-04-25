; namespace is extracted into a separate src folder in order to be reused in elm-ish architecture examples
(ns friend-list.core
  (:require [middleware.history :as h]
            [middleware.schema :as schema]
            [schema.core :as s]
            [carry.core :as carry]
            [reagent.core :as r]
            [goog.functions :refer [debounce]]
            [cljs.core.match :refer-macros [match]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def Friend
  {:id       s/Int
   :name     s/Str
   :username s/Str})

(def Schema
  {:query   s/Str
   :friends [Friend]

   ; allow any additional keys in order to support keys added by middlewares
   s/Any    s/Any})

(def -initial-model
  {:query    ""
   :friends  nil
   ::h/token ""})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn -new-control
  [history api-search]
  (let [search (fn [q dispatch-signal] (api-search q #(dispatch-signal [:on-search-success q %])))
        search-on-input (debounce (fn [q dispatch-signal]
                                    (h/push-token history q) ; note that this will not trigger ::h/on-enter signal
                                    (search q dispatch-signal))
                                  300)]
    (fn control
      [model signal dispatch-signal dispatch-action]
      (match signal
             :on-start nil
             :on-stop nil

             [:on-input q]
             (do
               (dispatch-action [:set-query q])
               (search-on-input q dispatch-signal))

             [::h/on-enter token]
             (do
               (dispatch-action [:set-query token])
               (search token dispatch-signal))

             [:on-search-success q friends]
             (if (= (:query @model) q)
               (dispatch-action [:set-friends friends])
               (println "ignore response for" (pr-str q)
                        "because current query is" (pr-str (:query @model))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn -reconcile
  [model action]
  (match action
         [:set-query q]
         (assoc model :query q)

         [:set-friends friends]
         (assoc model :friends friends)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn view-model
  [model]
  (carry/track-keys model #{:query :friends}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn -search-field
  [_query _dispatch]
  (r/create-class {:reagent-render
                   (fn [query dispatch]
                     [:input {:type        "search"
                              :placeholder "Search friends..."
                              :value       query
                              :on-change   #(dispatch [:on-input (.. % -target -value)])}])

                   :component-did-update
                   (fn [this] (.focus (r/dom-node this)))

                   :component-did-mount
                   (fn [this] (.focus (r/dom-node this)))}))

(defn -friend-list
  [friends]
  [:ul {:style {:list-style-type "none"
                :padding-left    0}}
   (for [f friends]
     ^{:key (:id f)}
     [:li {:style {:font-size 17}}
      [:strong (:name f)] " " (:username f)])])

(defn view
  [{:keys [query friends] :as _view-model} dispatch]
  [:div
   [-search-field @query dispatch]
   [-friend-list @friends]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn new-spec
  [history api-search]
  (-> {:initial-model -initial-model
       :control       (-new-control history api-search)
       :reconcile     -reconcile}
      (schema/add Schema)
      (h/add history)))