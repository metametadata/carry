(ns app.blueprint-methods)

(defn -tag-ns
  "Returns variant tag's namespace string. Examples:
  [:a/foo :bar] -> \"a\"
  [:a/foo] -> \"a\"
  :a/foo -> \"a\"
  :foo -> nil"
  [variant]
  (-> (if (sequential? variant)
        (first variant)
        variant)
      namespace))

(defmulti on-signal (fn [_model signal _dispatch-signal _dispatch-action]
                      (-tag-ns signal)))

(defmulti on-action (fn [_model action]
                      (-tag-ns action)))