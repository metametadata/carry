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
       :reconcile     reconcile
       :on-start      (fn [_model _dispatch-signal] (println "[todos] start"))
       :on-stop       (fn [_model _dispatch-signal] (println "[todos] stop"))}
      (schema/add model/Schema)
      (routing/add history)
      ; debugger deals with persistence itself, so we have to blacklist it here to get rid of loading conflicts
      (persistence/add storage :model {:blacklist #{::devtools/debugger}})))