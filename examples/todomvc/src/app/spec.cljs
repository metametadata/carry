(ns app.spec
  (:require [app.model :as model]
            [app.controller :refer [control]]
            [app.reconciler :refer [reconcile]]
            [middleware.schema :as schema]
            [middleware.routing :as routing]
            [middleware.persistence :as persistence]
            [middleware.devtools :as devtools]))

(defn new-spec
  [history storage todo-titles]
  (-> {:initial-model (model/new-model todo-titles)
       :control       control
       :reconcile     reconcile}
      (schema/add model/Schema)

      ; debugger deals with persistence itself, so we have to blacklist it here to get rid of loading conflicts
      (persistence/add storage :model {:blacklist #{::devtools/debugger}})

      ; routing goes after persistence layer so that on start the token is taken from the url bar instead of local storage
      (routing/add history)))