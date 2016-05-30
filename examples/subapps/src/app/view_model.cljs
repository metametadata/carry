(ns app.view-model
  (:require [app.util :as util]
            [friend-list.core :as friend-list]
            [counter.core :as counter]
            [carry-reagent.core :as carry-reagent]))

(def view-model (-> (fn [model]
                      (carry-reagent/track-keys model [:friend-list-visible? :counter-visible?]))

                    (util/include-view-model :friend-list-subapp friend-list/view-model)

                    (util/include-view-model :counter-subapp counter/view-model)))