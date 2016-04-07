(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [app.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/app.core.on-jsload (apply js/app.core.on-jsload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'app.core/on-jsload' is missing"))), :before-jsload (fn [& x] (if js/app.core.before-jsload (apply js/app.core.before-jsload x) (figwheel.client.utils/log :debug "Figwheel: :before-jsload hook 'app.core/before-jsload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

