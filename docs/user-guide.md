# App

In Carry all the code you write is encapsulated behind a single **app** instance. 
An app is a map with keys:

* `:model` - a read-only atom, an in-memory representation of an app state
* `:dispatch-signal` - a function for interaction with an app, always returns nil

It's all the API exposed to an end user.

![app](/graphs/app.svg)

# Model

# Signals

# Control

# Actions

# Reconcile

# Usage with Reagent