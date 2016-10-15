(ns app.core
  (:require [carry.core :as carry]
            [cljs.core.match :refer-macros [match]]))

(enable-console-print!)

(def initial-model {:val 0})

(defn on-signal
  [model signal _dispatch-signal dispatch-action]
  (match signal
         :on-increment
         (dispatch-action :increment)

         :on-decrement
         (dispatch-action :decrement)

         :on-increment-if-odd
         (when (odd? (:val @model))
           (dispatch-action :increment))

         :on-increment-async
         (.setTimeout js/window #(dispatch-action :increment) 1000)))

(defn on-action
  [model action]
  (match action
         :increment (update model :val inc)
         :decrement (update model :val dec)))

(defn main
  []
  (let [app (carry/app {:initial-model initial-model
                        :on-signal     on-signal
                        :on-action     on-action})
        value-el (.getElementById js/document "value")
        render (fn [model] (set! (.-innerHTML value-el) (str "#" (:val model))))]
    (render @(:model app))

    (add-watch (:model app)
               :render-watch
               (fn [_key _ref old-state new-state]
                 (when (not= old-state new-state)
                   (render new-state))))

    (.addEventListener (.getElementById js/document "increment") "click" #((:dispatch-signal app) :on-increment))
    (.addEventListener (.getElementById js/document "decrement") "click" #((:dispatch-signal app) :on-decrement))
    (.addEventListener (.getElementById js/document "incrementIfOdd") "click" #((:dispatch-signal app) :on-increment-if-odd))
    (.addEventListener (.getElementById js/document "incrementAsync") "click" #((:dispatch-signal app) :on-increment-async))

    app))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  [])

(defn on-jsload
  []
  #_(. js/console clear))