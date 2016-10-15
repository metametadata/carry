# carry-atom-sync

Carry middleware for creating a bidirectional sync between an app model and a specified atom-like reference.
It is useful for [hacking with app model in REPL](https://metametadata.github.io/carry/user-guide/#usage-with-figwheel-and-repl) and for
[integration with Devcards](https://metametadata.github.io/carry/user-guide/#usage-with-devcards).

[![Clojars Project](https://img.shields.io/clojars/v/carry-atom-sync.svg)](https://clojars.org/carry-atom-sync)

[API Reference](http://metametadata.github.io/carry/api/atom-sync)

## FAQ

#### Why does it have to be implemented as a middleware?
Maybe it would be more logical to *connect* a synced atom similarly to how views are connected:

```clj
(def my-app (carry/app my-blueprint))
(def my-atom (atom nil)

(connect-atom my-app my-atom)
```

But it's impossible to implement because app instances don't provide a way to directly change a model value.
That's why a middleware is used: it injects an ability to change a model by implementing a "hidden" `::on-reset` signal.