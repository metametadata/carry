(ns middleware.schema
  (:require [schema.core :as s])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn add
  "Middleware will validate the model on every change using the specified schema.
  Throws an exception if validation fails."
  [spec schema]
  (assoc spec :control
              (fn [model signal dispatch-signal dispatch-action]
                ((:control spec) model signal dispatch-signal dispatch-action)

                (when (= signal :on-start)
                  (run!
                    (when-let [problems (s/check schema @model)]
                      ; using console log for better printing in Chrome console
                      (.log js/console "Validation problems:" problems)
                      (throw (ex-info "Model validation failed. See more info above." {}))))))))