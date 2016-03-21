(ns reagent-mvsa.helpers
  (:require [reagent.core])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn track-keys
  "Returns a map containing Reagent reactions to map entries specified by keys."
  [map-ratom keyseq]
  (into {}
        (for [key keyseq]
          [key (reaction (get @map-ratom key))])))