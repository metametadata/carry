(ns app.core
  (:require [mvsa.core :as mvsa]
            [reagent.core :as r]))

(enable-console-print!)

(defn control
  [model signal dispatch]
  nil)

(defn reconcile
  [model action]
  model)

(defn view-model
  [model]
  model)

(defn view
  [view-model dispatch]
  [:div "HEy!"])

(defn main
  []
  (println "Hi.")

  (let [app-spec {:initial-model {:counter 0}
                  :control       control
                  :reconcile     reconcile
                  :on-start      (constantly nil)
                  :on-stop       (constantly nil)}
        app (mvsa/app app-spec)
        [app-view-model app-view] (mvsa/connect-ui app view-model view)]
    ((:start app))

    (r/render-component app-view (. js/document (getElementById "root")))

    (assoc app :view-model app-view-model)))

(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn before-jsload
  []
  ((:stop app)))

(defn on-jsload
  []
  #_(. js/console clear))