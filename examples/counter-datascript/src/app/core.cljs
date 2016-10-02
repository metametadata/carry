(ns app.core
  (:require [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [datascript.core :as d])
  (:require-macros [reagent.ratom :refer [reaction]]))

(enable-console-print!)

(def counter-id 1)
(def initial-model {:db (d/init-db #{(d/datom counter-id :val 0)})})

(defn on-signal
  [model signal _dispatch-signal dispatch-action]
  (match signal
         :on-increment
         (dispatch-action :increment)

         :on-decrement
         (dispatch-action :decrement)

         :on-increment-if-odd
         (when (odd? (:val (d/pull (:db @model) [:val] counter-id)))
           (dispatch-action :increment))

         :on-increment-async
         (.setTimeout js/window #(dispatch-action :increment) 1000)))

(defn on-action
  [model action]
  ; Instead of pulling counter from db, why not pass the current value from the view, e.g. by dispatching [:increment 3]?
  ; Because in such case time travel debugger will not be able to correctly toggle past actions.
  (let [counter (d/pull (:db model) '[*] counter-id)]
    (match action
           :increment
           (update model :db d/db-with [(update counter :val inc)])

           :decrement
           (update model :db d/db-with [(update counter :val dec)]))))

(defn view-model
  [model]
  {:counter (reaction (str "#" (:val (d/pull (:db @model) [:val] counter-id))))})

(defn view
  [{:keys [counter] :as _view-model} dispatch]
  [:p
   @counter " "
   [:button {:on-click #(dispatch :on-increment)} "+"] " "
   [:button {:on-click #(dispatch :on-decrement)} "-"] " "
   [:button {:on-click #(dispatch :on-increment-if-odd)} "Increment if odd"] " "
   [:button {:on-click #(dispatch :on-increment-async)} "Increment async"]])

(defn main
  []
  (let [app-spec {:initial-model initial-model
                  :on-signal     on-signal
                  :on-action     on-action}
        app (carry/app app-spec)
        [app-view-model app-view] (carry-reagent/connect app view-model view)]
    (r/render app-view (.getElementById js/document "root"))
    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  [])

(defn on-jsload
  []
  #_(. js/console clear))