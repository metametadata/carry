(ns app.core
  (:require [reagent-mvsa.core :as mvsa]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [datascript.core :as d])
  (:require-macros [reagent.ratom :refer [reaction]]))

(enable-console-print!)

(def counter-id 1)
(def initial-model {:db (d/init-db #{(d/datom counter-id :val 0)})})

(defn control
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

(defn reconcile
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
   @counter
   " "
   [:button {:on-click #(dispatch :on-increment)} "+"]
   " "
   [:button {:on-click #(dispatch :on-decrement)} "-"]
   " "
   [:button {:on-click #(dispatch :on-increment-if-odd)} "Increment if odd"]
   " "
   [:button {:on-click #(dispatch :on-increment-async)} "Increment async"]])

(defn main
  []
  (let [app-spec {:initial-model initial-model
                  :control       control
                  :reconcile     reconcile
                  :on-start      (constantly nil)
                  :on-stop       (constantly nil)}
        app (mvsa/app app-spec)
        [app-view-model app-view] (mvsa/connect-ui app view-model view)]
    ((:start app))

    (r/render app-view (.getElementById js/document "root"))

    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:stop app)))

(defn on-jsload
  []
  #_(. js/console clear))