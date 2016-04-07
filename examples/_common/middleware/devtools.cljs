(ns middleware.devtools
  (:require [reagent-mvsa.core :as mvsa]
            [middleware.persistence :as persistence]
            [middleware.schema :as schema-middleware]
            [schema.core :as schema]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]
            [reagent.core :as r]
            [devtools.core :as chrome-devtools]
            [goog.events]
            [goog.ui.KeyboardShortcutHandler.EventType :as EventType]
            cljsjs.jquery-ui
            cljsjs.filesaverjs
            cljs.pprint)
  (:import goog.ui.KeyboardShortcutHandler)
  (:require-macros [reagent.ratom :refer [reaction]]))

(chrome-devtools/enable-feature! :sanity-hints)
(chrome-devtools/install!)

;;;;;;;;;;;;;;;;;;; Model
(def Schema
  {::debugger {:initial-model              {schema/Any schema/Any}

               :signal-events              [(schema/pair schema/Int "id" schema/Any "signal")]
               :next-signal-id             schema/Int

               :action-events              [{:id        schema/Int
                                             :signal-id schema/Int
                                             :enabled?  schema/Bool
                                             :action    schema/Any
                                             :result    {schema/Any schema/Any}}]
               :next-action-id             schema/Int

               :persist?                   schema/Bool

               :visible?                   schema/Bool
               :toggle-visibility-shortcut schema/Str}

   schema/Any schema/Any})

(defn -wrap-initial-model
  [app-initial-model toggle-visibility-shortcut]
  (assoc app-initial-model ::debugger
                           {:initial-model              app-initial-model

                            :signal-events              nil
                            :next-signal-id             0

                            :action-events              nil
                            :next-action-id             0

                            :persist?                   false

                            :visible?                   true
                            :toggle-visibility-shortcut toggle-visibility-shortcut}))

(defn -signal-event
  [id signal]
  [id signal])

(defn -action-event
  [signal-id id action result]
  {:id        id
   :signal-id signal-id
   :enabled?  true
   :action    action

   ; this key only makes sense for enabled actions; should not include ::debugger data
   :result    result})

(defn -update-action-events*
  [model pred f & args]
  (s/transform [::debugger :action-events s/ALL pred]
               #(apply f % args)
               model))

(defn -update-action-event
  [model id f & args]
  (apply -update-action-events* model #(= (:id %) id) f args))

(defn -find-signal
  [model id]
  (->> model
       ::debugger
       :signal-events
       (filter #(= (first %) id))
       first))

(defn -find-action
  [model id]
  (->> model
       ::debugger
       :action-events
       (filter #(= (:id %) id))
       first))

;;;;;;;;;;;;;;;;;;;;;;;; Control
(defn -save-file
  "Uses filesaverjs lib."
  [filename content]
  (let [blob (new js/Blob
                  (clj->js [content])
                  (clj->js {:type "text/plain;charset=UTF-8"}))]
    (js/saveAs blob filename)))

(defn -wrap-control
  [app-control toggle-visibility-shortcut]
  (let [unlisten-shortcuts (atom nil)]
    (fn control
      [model signal dispatch-signal dispatch-action]
      (letfn [(record-and-dispatch-to-app [signal]
                (let [[signal-id _ :as signal-event] (-signal-event (-> @model ::debugger :next-signal-id) signal)]
                  (dispatch-action [::record-signal-event signal-event])
                  (app-control model signal dispatch-signal #(dispatch-action [::app-action signal-id %]))))]
        (match signal
               :on-start
               (do
                 (record-and-dispatch-to-app :on-start)

                 (let [shortcut-handler (KeyboardShortcutHandler. js/document)
                       key (goog.events/listen shortcut-handler
                                               EventType/SHORTCUT_TRIGGERED
                                               #(when (= (.-identifier %) toggle-visibility-shortcut)
                                                 (dispatch-signal ::on-toggle-visibility)))]
                   (reset! unlisten-shortcuts #(goog.events/unlistenByKey key))
                   (.registerShortcut shortcut-handler toggle-visibility-shortcut toggle-visibility-shortcut)))

               :on-stop
               (do
                 #(@unlisten-shortcuts)

                 (record-and-dispatch-to-app :on-stop))

               ::on-did-load-from-storage
               (dispatch-action ::replay)

               [::on-toggle-signal id]
               (do
                 (dispatch-action [::toggle-signal id])
                 (dispatch-action ::replay))

               [::on-toggle-action id]
               (do
                 (dispatch-action [::toggle-action id])
                 (dispatch-action ::replay))

               [::on-log-action-result id]
               (-> (-find-action @model id) :result pr-str println)

               ::on-toggle-persist
               (dispatch-action ::toggle-persist)

               ::on-vacuum
               (dispatch-action ::vacuum)

               ::on-clear
               (dispatch-action ::clear)

               ::on-reset
               (do
                 (dispatch-action ::clear-history)
                 (dispatch-action ::replay))

               ::on-toggle-visibility
               (dispatch-action ::toggle-visibility)

               ::on-save
               (-save-file "debugger-session.txt" (with-out-str (cljs.pprint/pprint @model)))

               [::on-load content]
               (dispatch-action [::load (cljs.reader/read-string content)])

               :else
               (record-and-dispatch-to-app signal))))))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile
(defn -orphaned-signal?
  "Orphaned signal has no actions."
  [model [signal-id _ :as _signal_]]
  (empty? (filter #(= (:signal-id %) signal-id)
                  (-> model ::debugger :action-events))))

(defn -wrap-reconcile
  [app-reconcile]
  (fn reconcile
    [model action]
    (match action
           ::clear-history
           (-> model
               (assoc-in [::debugger :signal-events] (list))
               (assoc-in [::debugger :action-events] (list)))

           [::record-signal-event signal-event]
           (-> model
               (update-in [::debugger :signal-events] concat [signal-event])
               (update-in [::debugger :next-signal-id] inc))

           [::toggle-signal id]
           (let [all-actions-enabled? (->> model
                                           ::debugger
                                           :action-events
                                           (filter #(= (:signal-id %) id))
                                           (every? :enabled?))]
             (-update-action-events* model #(= (:signal-id %) id)
                                     assoc :enabled? (not all-actions-enabled?)))

           [::toggle-action id]
           (-update-action-event model id update :enabled? not)

           ; applies enabled actions to the initial app model
           ::replay
           (loop [action-events (filter :enabled? (-> model ::debugger :action-events))
                  new-model (-> model ::debugger :initial-model (assoc ::debugger (::debugger model)))]
             (if-let [{:keys [id action]} (first action-events)]
               (recur (rest action-events)
                      (as-> new-model m
                            (app-reconcile m action)
                            (-update-action-event m id assoc :result (dissoc m ::debugger))))
               new-model))

           ::toggle-persist
           (update-in model [::debugger :persist?] not)

           ::vacuum
           (as-> model m
                 (update-in m [::debugger :action-events] #(filter :enabled? %))
                 (update-in m [::debugger :signal-events] #(remove (partial -orphaned-signal? m) %)))

           ::clear
           (-> model
               (assoc-in [::debugger :signal-events] nil)
               (assoc-in [::debugger :action-events] nil))

           ::toggle-visibility
           (update-in model [::debugger :visible?] not)

           [::load new-model]
           new-model

           ; app action coming from specific signal
           [::app-action signal-id a]
           (if (-find-signal model signal-id)
             (as-> model m
                   (app-reconcile m a)
                   (update-in m [::debugger :action-events] concat [(-action-event signal-id
                                                                                   (-> m ::debugger :next-action-id)
                                                                                   a
                                                                                   (dissoc m ::debugger))])
                   (update-in m [::debugger :next-action-id] inc))

             ; looks like originating signal could be already cleared -> create "unknown signal" to record this action
             (reconcile model a))

           ; for bare app actions (e.g. when originating signal was cleared) create an "unknown signal" event
           :else
           (let [[signal-id _ :as unknown-signal-event] (-signal-event (-> model ::debugger :next-signal-id) ::unknown-signal)]
             (-> model
                 (update-in [::debugger :signal-events] concat [unknown-signal-event])
                 (update-in [::debugger :next-signal-id] inc)
                 (reconcile [::app-action signal-id action]))))))

;;;;;;;;;;;;;;;;;;;;;;;; View model
(defn -view-model
  [model]
  (mvsa/track-keys (reaction (::debugger @model))
                   [:initial-model :persist? :visible? :toggle-visibility-shortcut :signal-events :action-events]))

;;;;;;;;;;;;;;;;;;;;;;;; View
(def -menu-button-style {:font-size     "inherit"
                         :font-family   "inherit"
                         :font-weight   "bold"
                         :color         "white"
                         :cursor        "pointer"
                         :padding       "4px"
                         :margin        "5px 3px"
                         :border-radius "3px"
                         :border        0
                         :background    "none"})

(defn -menu-button
  [style caption on-click title]
  [:button {:style    (merge -menu-button-style style)
            :title    title
            :on-click on-click}
   caption])

(defn -menu-file-selector
  "Styled file input which invokes the callback with loaded file content."
  [caption on-load title]
  [:label {:style -menu-button-style
           :title title}
   caption
   [:input {:style     {:display "none"}
            :type      "file"
            :on-change (fn [e]
                         (let [file (first (array-seq (.. e -target -files)))
                               file-reader (js/FileReader.)]
                           (set! (.-onload file-reader)
                                 #(on-load (-> % .-target .-result)))
                           (.readAsText file-reader file)))

            ; hack to allow on-change be fired when the same file is selected twice in a row
            :value     ""}]])

(defn -menu
  [persist? toggle-visibility-shortcut dispatch]
  [:div {:style {:text-align          "center"
                 :border-bottom-width 1
                 :border-bottom-style "solid"
                 :border-color        "#4F5A65"}}
   [-menu-button {} "Clear" #(dispatch ::on-clear) "Clears debugger history"]
   [-menu-button {} "Vacuum" #(dispatch ::on-vacuum) "Removes disabled actions and signals with no actions from history"]
   [-menu-button {} "Reset" #(dispatch ::on-reset) "Removes all actions and signals resetting the model to initial state"]
   [-menu-button {} "Save" #(dispatch ::on-save) "Saves current debugger session into file"]
   [-menu-file-selector "Load" #(dispatch [::on-load %]) "Loads debugger session from file"]
   [-menu-button (if persist? {} {:color "grey"}) (str "Persist" (if persist? "✓")) #(dispatch ::on-toggle-persist) "Persist debug session into local storage?"]
   [-menu-button {} "Hide" #(dispatch ::on-toggle-visibility) (str "Hides debugger view (" toggle-visibility-shortcut ")")]])

(defn -signals-view
  [signal-events action-events dispatch]
  [:div
   (doall
     (for [[signal-id signal] (reverse signal-events)]
       ^{:key signal-id}
       [:div {:title "Signal"}
        [:div {:style    {:cursor           "pointer"
                          :background-color "rgb(60, 70, 80)"}
               :on-click #(dispatch [::on-toggle-signal signal-id])
               :title    "Click to enable/disable all actions dispatched from this signal"}
         (if (coll? signal)
           [:span (pr-str (first signal)) " " (clojure.string/join " " (map pr-str (rest signal)))]
           (pr-str signal))]

        (for [{:keys [id enabled? action]} (filter #(= (:signal-id %) signal-id)
                                                   action-events)]
          ^{:key id}
          [:div {:style    {:display     "flex"
                            :margin-left "20px"
                            :margin-top  "3px"
                            :padding     "2px"
                            :color       (if enabled? "inherit" "grey")
                            :cursor      "pointer"}
                 :on-click #(dispatch [::on-toggle-action id])}
           [:div {:title "Click to enable/disable this action"}
            (if (coll? action)
              [:div (pr-str (first action)) " " (clojure.string/join " " (map pr-str (rest action)))]
              [:div (pr-str action)])]

           (when enabled?
             [:div {:style    {:cursor           "pointer"
                               :margin-left      "5px"
                               :border-radius    "3px"
                               :background-color "rgb(79, 90, 101)"}
                    :on-click #(do (.stopPropagation %) (dispatch [::on-log-action-result id]))
                    :title    "Print model state after this action"}
              "model"])])]))])

(defn -initial-model-view
  [initial-model]
  [:div
   [:hr]
   [:strong "Initial model:"]
   [:div (pr-str initial-model)]])

(defn -resizable-div
  "Uses jQuery UI."
  [_attrs & _body]
  (r/create-class {:reagent-render      (fn [attrs & body]
                                          (into [:div attrs] body))
                   :component-did-mount (fn [this] (.resizable (js/$ (r/dom-node this))
                                                               (clj->js {:grid    25
                                                                         :handles "n, e, s, w, ne, se, sw, nw"})))}))

(defn -overlay
  [& body]
  (into [:div {:style {:position       "fixed"
                       :left           0
                       :right          0
                       :top            0
                       :bottom         0
                       :z-index        1000
                       :pointer-events "none"}}]
        body))

(defn -view
  [{:keys [visible? toggle-visibility-shortcut persist? initial-model signal-events action-events] :as _view-model} dispatch]
  [-overlay
   [-resizable-div {:style {:display        (if @visible? "block" "none") ; using CSS instead of React in order to persist resized frame on toggling visibility
                            :left           "70%"
                            :width          "30%"
                            :height         "100%"
                            :pointer-events "all"}}
    [:div {:style {:height                 "100%"
                   :overflow               "auto"
                   :background-color       "#2A2F3A"
                   :color                  "white"
                   :font-size              14
                   :font-family            "sans-serif"
                   :line-height            "1.4em"
                   :font-smoothing         "antialiased"
                   :-moz-font-smoothing    "antialiased"
                   :-webkit-font-smoothing "antialiased"}}
     [-menu @persist? @toggle-visibility-shortcut dispatch]
     [-signals-view @signal-events @action-events dispatch]
     [-initial-model-view @initial-model]]]])

;;;;;;;;;;;;;;;;;;;;;;;; Middleware
(defn -wrap-load-from-storage
  [load-from-storage]
  (fn wrapped-load-from-storage
    [model loaded-model dispatch-signal]
    ; load only if user set the flag during previous session
    (when (-> loaded-model ::debugger :persist?)
      ; update :initial-model; otherwise, on hot reload, we will not see changes after modifying app init code
      (let [loaded-model (update loaded-model ::debugger merge (-> @model ::debugger (select-keys [:initial-model])))]
        (load-from-storage model loaded-model dispatch-signal)
        (dispatch-signal ::on-did-load-from-storage)))))

(defn add-debugger
  "Adds debugging capabilities to the app.
   All signals and actions will be recorded and stored in the model.
   After app is created use |connect-debugger-ui| for rendering the debugger.
   For correct work it must be the last middleware wrapping the app and
   also make sure to blacklist ::debugger key if your app uses persistence middleware.

   Custom keyboard shortcut can toggle the visibility."
  ([spec storage storage-key] (add-debugger spec storage storage-key "ctrl+h"))
  ([spec storage storage-key toggle-visibility-shortcut]
   (-> spec
       (update :initial-model -wrap-initial-model toggle-visibility-shortcut)
       (update :control -wrap-control toggle-visibility-shortcut)
       (update :reconcile -wrap-reconcile)

       (schema-middleware/add Schema)
       (persistence/add storage storage-key {:load-wrapper -wrap-load-from-storage}))))

(defn connect-debugger-ui
  "Returns [debugger-view-model debugger-view]. App spec must be wrapped by |add-debugger|.
  Debugger view is resizable."
  [app]
  (mvsa/connect-ui app -view-model -view))