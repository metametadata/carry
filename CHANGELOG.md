# Changelog

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