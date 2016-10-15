(ns app.blueprint
  (:require [app.model :refer [initial-model]]
            [app.signals :refer [on-signal]]
            [app.actions :refer [on-action]]
            [app.util :as util]

            [friend-list.core :as friend-list]

            [counter.core :as counter]))

(defn new-blueprint
  [history api-search]
  (-> {:initial-model initial-model
       :on-signal     on-signal
       :on-action     on-action}

      (util/include-blueprint :friend-list-subapp (friend-list/new-blueprint history api-search))

      (util/include-blueprint :counter-subapp counter/blueprint)))