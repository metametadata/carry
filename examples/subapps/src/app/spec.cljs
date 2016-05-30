(ns app.spec
  (:require [app.model :refer [initial-model]]
            [app.controller :refer [control]]
            [app.reconciler :refer [reconcile]]
            [app.util :as util]

            [friend-list.core :as friend-list]

            [counter.core :as counter]
            [app.friend-list-api :as friend-list-api]))

(defn new-spec
  [history api-search]
  (-> {:initial-model initial-model
       :control       control
       :reconcile     reconcile}

      (util/include-spec :friend-list-subapp (friend-list/new-spec history api-search))

      (util/include-spec :counter-subapp counter/spec)))