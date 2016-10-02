(ns carry-schema.core
  (:require [schema.core :as s]))

(defn add
  "Middleware will validate the model returned from action handler using Plumatic Schema library.
  Strives to provide a better logging than `s/defn`.
  Logs problems and throws an exception if validation fails effectively prohibiting model change to unallowed state.
  
  Apply it as close to spec as possible in order to not propagate the invalid model to other middleware."
  [spec schema]
  (update spec :on-action
          (fn wrap-on-action [app-on-action]
            (fn on-action [model action]
              (let [new-model (app-on-action model action)]
                (when-let [problems (s/check schema new-model)]
                  ; using console log for better printing in Chrome console (in particular with binaryage/cljs-devtools)
                  (.log js/console "VALIDATION PROBLEMS:" problems)
                  (throw (js/Error. (str "Model validation failed. Problems: " (pr-str problems)))))

                new-model)))))