(ns frontend.router
  (:require)
  (:import goog.history.Html5History))

; defonce is needed for hotloading
(defonce history (doto (Html5History.)
                   (.setEnabled true)))

(def ^:dynamic *history-events-enabled?* true)