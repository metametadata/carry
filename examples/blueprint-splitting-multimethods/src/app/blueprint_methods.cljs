(ns app.blueprint-methods)

(defn -tag
  "Returns a tag of a variant (read http://jneen.net/posts/2014-11-23-clojure-conj-variants-errata). Examples:
  [:foo :bar] -> :foo
  [:foo] -> :foo
  :foo -> :foo"
  [variant]
  (if (sequential? variant)
    (first variant)
    variant))

(defmulti on-signal (fn [_model signal _dispatch-signal _dispatch-action]
                      (-tag signal)))

(defmulti on-action (fn [_model action]
                      (-tag action)))