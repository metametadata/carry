; namespace is extracted into a separate src folder in order to be reused in composite app examples
(ns counter.core
  (:require [cljs.core.match :refer-macros [match]]
            [reagent.ratom :refer [reaction]]))

(def -initial-model {:val 0})

(defn -on-signal
  [model signal _dispatch-signal dispatch-action]
  (match signal
         ; start and stop are required because counter is used as a subapp in another example
         :on-start nil
         :on-stop nil

         :on-increment
         (dispatch-action :increment)

         :on-decrement
         (dispatch-action :decrement)

         :on-increment-if-odd
         (when (odd? (:val @model))
           (dispatch-action :increment))

         :on-increment-async
         (.setTimeout js/window #(dispatch-action :increment) 1000)))

(defn -on-action
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
   @counter " "
   [:button {:on-click #(dispatch :on-increment)} "+"] " "
   [:button {:on-click #(dispatch :on-decrement)} "-"] " "
   [:button {:on-click #(dispatch :on-increment-if-odd)} "Increment if odd"] " "
   [:button {:on-click #(dispatch :on-increment-async)} "Increment async"]])

(def blueprint {:initial-model -initial-model
                :on-signal     -on-signal
                :on-action     -on-action})