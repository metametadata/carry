(ns app.spec
  (:require [app.model :refer [initial-model]]
            [app.signals :refer [on-signal]]
            [app.actions :refer [on-action]]
            [app.util :as util]

            [friend-list.core :as friend-list]

            [counter.core :as counter]))

(defn new-spec
  [history api-search]
  (-> {:initial-model initial-model
       :on-signal     on-signal
       :on-action     on-action}

      (util/include-spec :friend-list-subapp (friend-list/new-spec history api-search))

      (util/include-spec :counter-subapp counter/spec)))