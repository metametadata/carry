(ns carry-logging.core)

(defn add
  "Will print all signals and actions to console using the specified prefix string."
  ([blueprint] (add blueprint ""))
  ([blueprint prefix]
   {:pre [(:on-signal blueprint) (:on-action blueprint)]}
   (-> blueprint
       (update :on-signal
               (fn wrap-on-signal [app-on-signal]
                 (fn on-signal [model signal dispatch-signal dispatch-action]
                   (try
                     (.group js/console (str prefix "signal " (pr-str signal)))
                     (app-on-signal model signal dispatch-signal dispatch-action)

                     ; this clause guarantees that group is closed even in case of exception
                     (finally
                       (.groupEnd js/console))))))
       (update :on-action
               (fn wrap-on-action [app-on-action]
                 (fn on-action [model action]
                   (.log js/console (str prefix "action") (pr-str action))
                   (app-on-action model action)))))))
