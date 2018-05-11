# Changelog

## 0.8.0

- BREAKING CHANGE: `dispatch-signal` now returns the result of signal handler invocation
(previously it always returned `nil`). 
This is handy if signal is asynchronous and some other code has to wait for it via returned `core.async` channel or promise. 
This change means that now any middleware must be updated to preserve `on-signal` return values.

## 0.7.0

- Rename term *spec* to *blueprint* in order to eliminate confusion with *clojure.spec*.

## 0.6.0

- Fix: allow using multimethods for signal and action handlers.

## 0.5.0

- BREAKING CHANGE: library gets rid of terms *controller* and *reconciler* in favour of *signal handler* and *action handler*.
This change should hopefully make the pattern easier to comprehend by reducing the number of words to remember.
    
    Migration guide:
    
    1. Update Carry library and packages dependencies. New versions:
    
        ```clj
        [carry "0.5.0"]
        [carry-atom-sync "0.3.0"]
        [carry-debugger "0.6.0"]
        [carry-history "0.4.0"]
        [carry-logging "0.2.0"]
        [carry-persistence "0.4.0"]
        [carry-schema "0.5.0"]
        ```
    2. Rename keys in your specs:
        - `:control` -> `:on-signal`
        - `:reconcile` -> `:on-action`
    3. Rename source files and folders with handlers:
        - `controller.cljs` -> `signals.cljs`
        - `reconciler.cljs` -> `actions.cljs`
        - `controllers/` -> `signals/`
        - `reconcilers/` -> `actions/`
        - etc.
    4. Rename control and reconcile functions/factories:
        - `control` -> `on-signal`
        - `reconcile` -> `on-action`
        - `new-control` -> `new-on-signal`
        - `new-reconcile` -> `new-on-action`
        - etc.
    5. Double check: search for Carry-related usages of "control" and "reconcile" in your codebase and get rid of them.

- Bumped dependencies.

## 0.4.0

API change:

- `:model` is now a reference-like object instead of a read-only atom.
- Controller is now passed such references instead of read-only atoms.
- `entangle` function now returns such references instead of read-only atoms.

Pros:

- Less memory leaking in composite apps. Previously `entangle` calls always
added watches to the model atom without deleting them later.
On the other hand, now watch is added to source atom only when user explicitly subscribes to entangled reference changes.
- Immediate exception on model mutation (previously exception was thrown after the model was mutated).
- Got rid of `set-read-only!` and `read-only?` core functions.
- Smaller API surface, e.g. user is now not able to add validators to read-only model objects.

## 0.3.0

- Public release.
