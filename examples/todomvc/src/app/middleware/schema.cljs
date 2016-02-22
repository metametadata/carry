(ns app.middleware.schema
  (:require [mvsa.helpers :as helpers]
            [schema.core :as s])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn add
  "Middleware will validate the model on every change using the specified schema.
  Throws an exception if validation fails."
  [spec schema]
  (-> spec
      (update :on-start helpers/after-do
              (fn [model _dispatch-signal]
                (run! (s/validate schema @model))))))