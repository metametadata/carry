(ns middleware.schema
  (:require [schema.core :as s])
  (:require-macros [reagent.ratom :refer [run!]]))

(defn add
  "Middleware will validate the model returned from reconcile function.
  Throws an exception if validation fails effectively prohibiting model change to unallowed state.
  Add it as close to spec as possible in order to not propagate the invalid model to other middlewares."
  [spec schema]
  (update spec :reconcile
          (fn wrap-reconcile [reconcile]
            (fn validated-reconcile [model action]
              (let [new-model (reconcile model action)]
                (when-let [problems (s/check schema new-model)]
                  ; using console log for better printing in Chrome console
                  (.log js/console "VALIDATION PROBLEMS:" problems)
                  (throw (ex-info "Model validation failed. See more info above." {})))

                new-model)))))