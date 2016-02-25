(ns app.core
  (:require [reagent-mvsa.core :as mvsa]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(enable-console-print!)

(defn control
  [model signal dispatch]
  (match signal
         :on-increment
         (dispatch :increment)

         :on-decrement
         (dispatch :decrement)

         :on-increment-if-odd
         (when (odd? (:val model))
           (dispatch :increment))

         :on-increment-async
         (.setTimeout js/window #(dispatch :increment) 1000)))

(defn reconcile
  [model action]
  (match action
         :increment (update model :val inc)
         :decrement (update model :val dec)))

(defn view-model
  [model]
  {:counter (reaction (str "#" (:val @model)))})

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
  (let [app-spec {:initial-model {:val 0}
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