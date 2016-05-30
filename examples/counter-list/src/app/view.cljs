(ns app.view
  (:require [app.util :refer [tagged]]
            [counter.core :as counter]))

(defn -counter
  [[id view-model] dispatch]
  [counter/view view-model (tagged dispatch [:on-counter-signal id])])

(defn view
  [view-model dispatch]
  (let [counters (map #(-counter % dispatch) @(:counters view-model))
        insert [:button {:on-click #(dispatch :on-insert)} "Insert"]
        remove [:button {:on-click #(dispatch :on-remove)} "Remove"]]
    (into [:div insert remove] counters)))