(ns carry-reagent.core
  (:require [reagent.core :as r])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn -atom->reaction
  "Creates a reaction which syncs its value with the specified atom."
  [a]
  (let [ra (r/atom @a)]
    (add-watch a
               ra                                           ; unique key
               (fn [_key _ref _old-state new-state]
                 (reset! ra new-state)))
    (reaction @ra)))

(defn connect
  "Arguments:

  * `app` - the app for which UI should be created
  * `view-model` - function which, given a model reaction, returns reactions (e.g. in a map); returned value will be passed to `view`:
  * `view` - Reagent component function with args: `[view-model dispatch-signal]`

  Note that `view-model` function will be called only once.

  Returns a pair of: view-model value (mostly for testing/debugging) and argless component to be rendered by Reagent."
  [{:keys [model dispatch-signal] :as _app} view-model view]
  {:pre [model (ifn? dispatch-signal) (ifn? view-model) (ifn? view)]}
  (let [model-reaction (-atom->reaction model)
        app-view-model (view-model model-reaction)
        app-view [view app-view-model dispatch-signal]]
    [app-view-model app-view]))

(defn track-keys
  "Returns a map containing reactions to map entries specified by keys."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))