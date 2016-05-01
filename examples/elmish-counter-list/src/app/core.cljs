(ns app.core
  (:require [carry.core :as carry]
            [carry-reagent.core :as carry-reagent]
            [counter.core :as counter]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(enable-console-print!)

(defn tagged
  "Helper function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def initial-model
  {; list of [id counter-model] vectors
   :counters (list)
   :next-id  0})

(defn update-counters*
  "Applies a function of args [counter-model & args] to the counters specified by predicate.
  The function can have side-effects. Returns a new model."
  [model pred f & args]
  (letfn [(update-counter [[counter-id counter-model :as counter]]
            (if (pred counter)
              [counter-id (apply f counter-model args)]
              counter))]
    (update model :counters #(doall (map update-counter %)))))

(defn update-counter
  [model id f & args]
  (apply update-counters* model #(= id (first %)) f args))

(defn update-every-counter
  [model f & args]
  (apply update-counters* model (constantly true) f args))

(defn get-counter
  [model id]
  (->> (:counters model)
       (filter #(= (first %) id))
       first
       second))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn new-control
  [counter-control]
  (fn control
    [model signal dispatch-signal dispatch-action]
    (println "signal =" signal)
    (match signal
           ; in a more complex app we would also have to dispatch :on-start/:on-stop on inserting/removing subapps
           ; here we omit this because counter app has no start/stop code
           :on-insert (dispatch-action :insert)
           :on-remove (dispatch-action :remove)

           [[:on-counter-signal id] s]
           (counter-control (carry/particle model #(get-counter % id))
                            s
                            (tagged dispatch-signal [:on-counter-signal id])
                            (tagged dispatch-action [:counter-action id])))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn new-reconcile
  [counter-initial-model counter-reconcile]
  (fn reconcile
    [model action]
    (println "  action =" action)
    (match action
           :insert
           (-> model
               (update :counters concat [[(:next-id model) counter-initial-model]])
               (update :next-id inc))

           :remove
           (update model :counters rest)

           [[:counter-action id] a]
           (update-counter model id counter-reconcile a))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
#_(defn view-model
    "Naive nonoptimal implementation:
     counter view-models will be updated on every model update -> every counter view will be reevaluated on each change."
    [model]
    {:counters (reaction (-> (update-every-counter @model #(counter/view-model (reaction %)))
                             :counters))})

#_(defn view-model
    "Optimized implementation. View-models for individual counters will be calculated only once.
    Drawback: removing counters will not remove memoized view-models, leading to memory leak."
    [model]
    (let [counter-view-model (memoize
                               (fn [counter-id]
                                 (counter/view-model (reaction (get-counter @model counter-id)))))]
      {:counters (reaction (map (fn [[id _]] [id (counter-view-model id)])
                                (:counters @model)))}))

(defn view-model
  "Optimized implementation. Reuses counter view-models from the last reaction calculation. Should not leak memory."
  [model]
  (let [cached-counter-view-models (atom [])
        cached-counter-view-model (fn [id]
                                    (->> @cached-counter-view-models
                                         (filter #(= (first %) id))
                                         first
                                         second))
        counter-view-model (fn [id]
                             (or (cached-counter-view-model id)
                                 (counter/view-model (reaction (get-counter @model id)))))]
    {:counters (reaction (reset! cached-counter-view-models
                                 (mapv (fn [[id _]] [id (counter-view-model id)])
                                       (:counters @model))))}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn view-counter
  [[id view-model] dispatch]
  [counter/view view-model (tagged dispatch [:on-counter-signal id])])

(defn view
  [view-model dispatch]
  (let [counters (map #(view-counter % dispatch) @(:counters view-model))
        insert [:button {:on-click #(dispatch :on-insert)} "Insert"]
        remove [:button {:on-click #(dispatch :on-remove)} "Remove"]]
    (into [:div insert remove] counters)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn main
  []
  (let [app-spec {:initial-model initial-model
                  :control       (new-control (:control counter/spec))
                  :reconcile     (new-reconcile (:initial-model counter/spec) (:reconcile counter/spec))}
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