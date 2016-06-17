(ns unit.utils)

(defn -cljs-env?
  "Take the &env from a macro, and tell whether we are expanding into cljs.
   Source: https://groups.google.com/d/msg/clojurescript/iBY5HaQda4A/w1lAQi9_AwsJ"
  [env]
  (boolean (:ns env)))

(defmacro ^:no-doc is-exception-thrown
  "(is (thrown-with-msg? ...)) for specified exceptions in Clojure/ClojureScript."
  [clj-exc-class clj-re cljs-exc-class cljs-re expr]
  (let [is (if (-cljs-env? &env) 'cljs.test/is
                                 'clojure.test/is)
        [exc-class re] (if (-cljs-env? &env) [cljs-exc-class cljs-re]
                                             [clj-exc-class clj-re])]
    `(~is (~'thrown-with-msg? ~exc-class ~re ~expr))))

(defmacro ^:no-doc is-error-thrown
  "(is (thrown-with-msg? ...)) for general exceptions in Clojure/ClojureScript."
  [re expr]
  `(is-exception-thrown Exception ~re
                        js/Error ~re
                        ~expr))

(defmacro ^:no-doc is-assertion-error-thrown
  "(is (thrown-with-msg? ...)) for assert exceptions in Clojure/ClojureScript."
  [re expr]
  `(is-exception-thrown AssertionError ~re
                        js/Error ~re
                        ~expr))