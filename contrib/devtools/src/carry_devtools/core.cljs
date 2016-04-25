(ns carry-devtools.core
  (:require [carry.core :as carry]
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
  (:require-macros [reagent.ratom :refer [reaction run!]]))

(chrome-devtools/install! [:custom-formatters :sanity-hints])

;;;;;;;;;;;;;;;;;;; Model
(def Schema
  {::debugger {:initial-model              {schema/Any schema/Any}

               :signal-events              [{:id        schema/Int
                                             :parent-id (schema/maybe schema/Int)
                                             :signal    schema/Any}]
               :next-signal-id             schema/Int
               :highlighted-signal-id      (schema/maybe schema/Int)

               :action-events              [{:id          schema/Int
                                             :signal-id   schema/Int
                                             :enabled?    schema/Bool
                                             :for-replay? schema/Bool
                                             :action      schema/Any
                                             :result      {schema/Any schema/Any}}]
               :next-action-id             schema/Int

               :replay-mode?               schema/Bool

               :visible?                   schema/Bool
               :toggle-visibility-shortcut schema/Str}

   schema/Any schema/Any})

(defn -wrap-initial-model
  [app-initial-model toggle-visibility-shortcut]
  (assoc app-initial-model ::debugger
                           {:initial-model              app-initial-model

                            :signal-events              nil
                            :next-signal-id             0
                            :highlighted-signal-id      nil

                            :action-events              nil
                            :next-action-id             0

                            :replay-mode?               false

                            :visible?                   true
                            :toggle-visibility-shortcut toggle-visibility-shortcut}))

(defn -signal-event
  [id parent-id signal]
  {:id        id
   :parent-id parent-id
   :signal    signal})

(defn -action-event
  [id signal-id action result]
  {:id          id
   :signal-id   signal-id
   :enabled?    true
   :for-replay? false
   :action      action

   ; this key only makes sense for enabled actions; should not include ::debugger data
   :result      result})

(defn -update-action-events
  [model pred f & args]
  (s/transform [::debugger :action-events s/ALL pred]
               #(apply f % args)
               model))

(defn -update-action-event
  [model id f & args]
  (apply -update-action-events model #(= (:id %) id) f args))

(defn -find-signal
  [model id]
  (->> model
       ::debugger
       :signal-events
       (filter #(= (:id %) id))
       first))

(defn -find-action
  [model id]
  (->> model
       ::debugger
       :action-events
       (filter #(= (:id %) id))
       first))

(defn -signal-id->parent-id
  "Returns a map."
  [signal-events]
  (into {} (map #(-> [(:id %) (:parent-id %)]) signal-events)))

(defn -signal-parent-ids
  "Returns a set containing: id of parent, parent of parent, etc.
  Non-existent parent ids are ignored."
  [id->parent-id id]
  {:pre [(map? id->parent-id)]}
  (let [existing-ids (keys id->parent-id)
        result (atom #{})]
    (loop [child-id id]
      (let [parent-id (id->parent-id child-id)]
        (if (some #{parent-id} existing-ids)
          (do
            (swap! result conj parent-id)
            (recur parent-id))

          @result)))))

(defn -signals-with-actions
  "Returns set of ids of signals which have actions or child signals with actions."
  [model]
  (let [signal-id->parent-id (-signal-id->parent-id (-> model ::debugger :signal-events))
        result (atom #{})]
    ; loop through actions and collect all their parents, parents of parents, etc.
    (doseq [{:keys [signal-id]} (-> model ::debugger :action-events)]
      (swap! result conj signal-id)
      (swap! result into (-signal-parent-ids signal-id->parent-id signal-id)))

    @result))

(defn -remove-orphaned-signals
  "Orphaned signal has no actions and no orphaned child signals."
  [model]
  (let [kept-ids (-signals-with-actions model)
        signal-events (-> model ::debugger :signal-events)
        new-signal-events (filter #(contains? kept-ids (:id %)) signal-events)]
    (assoc-in model [::debugger :signal-events] new-signal-events)))

;;;;;;;;;;;;;;;;;;;;;;;; Control
(defn -save-file
  "Uses filesaverjs lib."
  [filename content]
  (let [blob (new js/Blob
                  (clj->js [content])
                  (clj->js {:type "text/plain;charset=UTF-8"}))]
    (js/saveAs blob filename)))

(defn -wrap-control
  [app-control storage storage-key toggle-visibility-shortcut]
  (let [unlisten-shortcuts (atom nil)]
    (fn control
      [model signal dispatch-signal dispatch-action]
      (letfn [(record-and-dispatch-to-app [signal parent-signal-id]
                (let [signal-event (-signal-event (-> @model ::debugger :next-signal-id) parent-signal-id signal)
                      intercepted-dispatch-signal #(dispatch-signal [::on-app-signal (:id signal-event) %])
                      intercepted-dispatch-action #(dispatch-action [::app-action (:id signal-event) %])]
                  (dispatch-action [::record-signal-event signal-event])
                  (app-control model signal intercepted-dispatch-signal intercepted-dispatch-action)))]
        (match signal
               :on-start
               (do
                 ; init keyboard shortcuts
                 (let [shortcut-handler (KeyboardShortcutHandler. js/document)
                       key (goog.events/listen shortcut-handler
                                               EventType/SHORTCUT_TRIGGERED
                                               #(when (= (.-identifier %) toggle-visibility-shortcut)
                                                 (dispatch-signal ::on-toggle-visibility)))]
                   (reset! unlisten-shortcuts #(goog.events/unlistenByKey key))
                   (.registerShortcut shortcut-handler toggle-visibility-shortcut toggle-visibility-shortcut))

                 ; load debugger model from storage and replay if it's in replay mode
                 (let [loaded-model (get storage storage-key)]
                   (when (-> loaded-model ::debugger :replay-mode?)
                     ; updating :initial-model so that on hot reload we don't see changes after modifying app init code
                     (let [new-model (assoc-in loaded-model [::debugger :initial-model] (-> @model ::debugger :initial-model))]
                       (dispatch-action [::load new-model]))

                     (dispatch-action ::replay)))

                 ; start persisting replayable events
                 (run!
                   (let [saved-model (-> @model
                                         (assoc-in [::debugger :highlighted-signal-id] nil)
                                         (update-in [::debugger :action-events] #(filter :for-replay? %))
                                         -remove-orphaned-signals)]
                     (assoc! storage storage-key saved-model)))

                 ; now start app as usual
                 (record-and-dispatch-to-app :on-start nil))

               :on-stop
               (do
                 (@unlisten-shortcuts)

                 (record-and-dispatch-to-app :on-stop nil))

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

               ::on-toggle-replay-mode
               (dispatch-action ::toggle-replay-mode)

               ::on-vacuum
               (dispatch-action ::vacuum)

               ::on-clear
               (dispatch-action ::clear)

               ::on-reset
               (do
                 (dispatch-action ::clear)
                 (dispatch-action ::replay))

               ::on-toggle-visibility
               (dispatch-action ::toggle-visibility)

               ::on-save
               (-save-file "debugger-session.txt" (with-out-str (cljs.pprint/pprint @model)))

               [::on-open content]
               (dispatch-action [::load (cljs.reader/read-string content)])

               [::on-highlight-signal id]
               (dispatch-action [::highlight-signal id])

               ; app signal coming from specific signal
               [::on-app-signal parent-id s]
               (record-and-dispatch-to-app s parent-id)

               ; bare app signal
               :else
               (record-and-dispatch-to-app signal nil))))))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile
(defn -wrap-reconcile
  [app-reconcile]
  (fn reconcile
    [model action]
    (match action
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
             (-update-action-events model #(= (:signal-id %) id)
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

           ::toggle-replay-mode
           (-> model
               (update-in [::debugger :replay-mode?] not)
               (-update-action-events (constantly true)
                                      assoc :for-replay? (not (-> model ::debugger :replay-mode?))))

           ::vacuum
           (-> model
               (update-in [::debugger :action-events] #(filter :enabled? %))
               -remove-orphaned-signals)

           ::clear
           (-> model
               (assoc-in [::debugger :signal-events] (list))
               (assoc-in [::debugger :action-events] (list)))

           ::toggle-visibility
           (update-in model [::debugger :visible?] not)

           [::load new-model]
           new-model

           [::highlight-signal id]
           (assoc-in model [::debugger :highlighted-signal-id] id)

           ; app action coming from specific signal
           [::app-action signal-id a]
           (if (-find-signal model signal-id)
             (as-> model m
                   (app-reconcile m a)
                   (update-in m [::debugger :action-events] concat [(-action-event (-> m ::debugger :next-action-id)
                                                                                   signal-id
                                                                                   a
                                                                                   (dissoc m ::debugger))])
                   (update-in m [::debugger :next-action-id] inc))

             ; else: looks like originating signal could be already cleared -> create "unknown signal" to record this action
             (reconcile model a))

           ; for bare app actions (e.g. when originating signal was cleared) create an "unknown signal" event
           :else
           (let [unknown-signal-event (-signal-event (-> model ::debugger :next-signal-id) nil ::unknown-signal)]
             (-> model
                 (update-in [::debugger :signal-events] concat [unknown-signal-event])
                 (update-in [::debugger :next-signal-id] inc)
                 (reconcile [::app-action (:id unknown-signal-event) action]))))))

;;;;;;;;;;;;;;;;;;;;;;;; View model
(defn -signal-indent
  [signal-id->parent-id id]
  (count (-signal-parent-ids signal-id->parent-id id)))

(defn -view-model
  [model]
  (let [debugger (reaction (::debugger @model))
        signal-events (reaction (-> @debugger :signal-events))
        signal-id->parent-id (reaction (-signal-id->parent-id @signal-events))
        highlighted-signal-id (reaction (-> @debugger :highlighted-signal-id))
        highlighted-signal-ids (reaction (into #{@highlighted-signal-id}
                                               (-signal-parent-ids @signal-id->parent-id @highlighted-signal-id)))]
    (-> (carry/track-keys debugger
                         [:initial-model :replay-mode? :visible? :toggle-visibility-shortcut :action-events])
        (assoc :signal-events (reaction
                                ; mapv instead of map is essential, without it referenced reactions will be recalculated several times
                                (mapv #(assoc % :highlighted? (contains? @highlighted-signal-ids (:id %))
                                                :indent (-signal-indent @signal-id->parent-id (:id %)))
                                      @signal-events))))))

;;;;;;;;;;;;;;;;;;;;;;;; View
(def -color-replay "rgb(240, 240, 30)")
(def -style-menu-button {:margin        "5px 3px"
                         :padding       4
                         :font-size     "inherit"
                         :font-family   "inherit"
                         :font-weight   "bold"
                         :color         "white"
                         :cursor        "pointer"
                         :border-radius "3px"
                         :border        0
                         :background    "none"})

(defn -menu-button
  [style caption on-click title]
  [:button {:style    (merge -style-menu-button style)
            :title    title
            :on-click on-click}
   caption])

(defn -menu-file-selector
  "Styled file input which invokes the callback with loaded file content."
  [caption on-load title]
  [:label {:style -style-menu-button
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
  [replay-mode? toggle-visibility-shortcut dispatch]
  [:div {:style {:text-align  "center"
                 :white-space "nowrap"
                 :overflow    "hidden"}}
   [-menu-button {} "Clear" #(dispatch ::on-clear) "Clears debugger history"]
   [-menu-button {} "Vacuum" #(dispatch ::on-vacuum) "Removes disabled actions and signals with no actions from history"]
   [-menu-button {} "Reset" #(dispatch ::on-reset) "Removes all actions and signals resetting the model to initial state"]
   [-menu-file-selector "Open" #(dispatch [::on-open %]) "Loads debugger session from file (without replaying)"]
   [-menu-button {} "Save" #(dispatch ::on-save) "Saves current debugger session into file"]
   [-menu-button (if replay-mode? {:color -color-replay} {:color "grey"}) "Replay⥀" #(dispatch ::on-toggle-replay-mode) "Replay current session before next app start?"]
   [-menu-button {} "Hide" #(dispatch ::on-toggle-visibility) (str "Hides debugger view (" toggle-visibility-shortcut ")")]])

(defn -actions-view
  [action-events signal-id dispatch]
  [:div
   (for [{:keys [id action enabled? for-replay?]} (filter #(= (:signal-id %) signal-id)
                                                          action-events)]
     ^{:key id}
     [:div {:style    {:display     "flex"
                       :margin-left 20
                       :margin-top  1
                       :color       (if enabled? "inherit" "grey")
                       :cursor      "pointer"}
            :on-click #(dispatch [::on-toggle-action id])}
      [:div {:title "Click to enable/disable this action"}
       (when for-replay?
         [:span {:style {:color -color-replay} :title "Marked for replaying before next app start"} "⥀"])

       (if (coll? action)
         (str (pr-str (first action)) " " (clojure.string/join " " (map pr-str (rest action))))
         (pr-str action))]

      (when enabled?
        [:div {:style    {:display          "flex"          ; for text centering
                          :align-items      "center"
                          :margin-left      "5px"
                          :border-radius    "3px"
                          :cursor           "pointer"
                          :background-color "rgb(60, 70, 80)"}
               :on-click #(do (.stopPropagation %) (dispatch [::on-log-action-result id]))
               :title    "Print model state after this action"}
         "model"])])])

(defn -signal-view
  [{:keys [id parent-id signal highlighted?] :as _signal-event} dispatch]
  [:div {:style         {:margin-top       8
                         :padding-left     4
                         :cursor           "pointer"
                         :background-color (if highlighted? "rgb(55, 130, 70)" "rgb(60, 70, 80)")}
         :title         "Click to enable/disable all actions dispatched from this signal"
         :on-click      #(dispatch [::on-toggle-signal id])
         :on-mouse-over #(dispatch [::on-highlight-signal id])
         :on-mouse-out  #(dispatch [::on-highlight-signal nil])}
   (when parent-id
     [:span {:title "Signal was dispatched from another signal"} "↳"])

   (if (coll? signal)
     [:span (pr-str (first signal)) " " (clojure.string/join " " (map pr-str (rest signal)))]
     (pr-str signal))])

(defn -signals-view
  [signal-events action-events dispatch]
  [:div
   (doall
     (for [signal-event signal-events]
       ^{:key (:id signal-event)}
       [:div {:style {:margin-left (* (:indent signal-event) 15)}}
        [-signal-view signal-event dispatch]
        [-actions-view action-events (:id signal-event) dispatch]]))])

(defn -initial-model-view
  [initial-model]
  [:div {:style {:border-bottom "thin solid grey"}
         :title "Initial model"}
   [:div (pr-str initial-model)]])

(defn -resizable-div
  "Uses jQuery UI."
  [_attrs & _body]
  (r/create-class {:reagent-render      (fn [attrs & body]
                                          (into [:div attrs] body))
                   :component-did-mount (fn [this] (.resizable (js/$ (r/dom-node this))
                                                               (clj->js {:grid    25
                                                                         :handles "n, e, s, w, ne, se, sw, nw"})))}))

(defn -autoscrollable-div
  "Will scroll to bottom on any update. Will not scroll if scroll position is not at the bottom."
  [_attrs & _body]
  (let [autoscroll? (atom true)
        update-autoscroll (fn [this]
                            (let [node (r/dom-node this)]
                              ; expression value can be negative in Safari
                              (reset! autoscroll? (<= (- (.-scrollHeight node)
                                                         (+ (.-scrollTop node) (.-offsetHeight node)))
                                                      0))))
        scroll (fn [this]
                 (when @autoscroll?
                   (set! (.-scrollTop (r/dom-node this))
                         (.-scrollHeight (r/dom-node this)))))]
    (r/create-class {:reagent-render               (fn [attrs & body] (into [:div attrs] body))
                     :component-will-receive-props update-autoscroll
                     :component-did-mount          scroll
                     :component-did-update         scroll})))

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
  [{:keys [visible? toggle-visibility-shortcut replay-mode? initial-model signal-events action-events]}
   dispatch]
  [-overlay
   [-resizable-div {:style {:display          (if @visible? "block" "none") ; using CSS instead of React in order to persist resized frame on toggling visibility
                            :left             "70%"
                            :width            "30%"
                            :height           "100%"
                            :pointer-events   "all"

                            :background-color "#2A2F3A"
                            :color            "white"
                            :font-size        14
                            :font-family      "sans-serif"
                            :line-height      "1.4em"
                            :font-weight      "300"}}
    [-menu @replay-mode? @toggle-visibility-shortcut dispatch]

    [-autoscrollable-div
     {:style {:position   "absolute"
              :top        "2.5em"
              :bottom     0
              :left       0
              :right      0
              :overflow   "auto"
              :border-top "thin solid grey"}}
     [-initial-model-view @initial-model]
     [-signals-view @signal-events @action-events dispatch]]]])

;;;;;;;;;;;;;;;;;;;;;;;; Middleware
(defn add-debugger
  "Adds debugging capabilities to the app.

   All signals and actions will be recorded and stored in the model.
   After app is created use |connect-debugger-ui| for rendering the debugger.
   For correct work it must be the last middleware wrapping the app and
   also make sure to blacklist ::debugger key if your app uses persistence middleware.

   Custom keyboard shortcut can toggle the visibility.

   Applying debugger middleware more than once will lead to undefined behaviour."
  ([spec storage storage-key] (add-debugger spec storage storage-key "ctrl+h"))
  ([spec storage storage-key toggle-visibility-shortcut]
   (-> spec
       (update :initial-model -wrap-initial-model toggle-visibility-shortcut)
       (update :control -wrap-control storage storage-key toggle-visibility-shortcut)
       (update :reconcile -wrap-reconcile)

       (schema-middleware/add Schema))))

(defn connect-debugger-ui
  "Returns [debugger-view-model debugger-view]. App spec must be wrapped by |add-debugger|.
  Debugger view is resizable."
  [app]
  (carry/connect-ui app -view-model -view))