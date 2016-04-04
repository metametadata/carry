(ns app.router
  (:require [domkm.silk :as silk]))

(def -routes
  (silk/routes
    {::all       [[]]                                       ; match "/" and ""
     ::active    [["active"]]
     ::completed [["completed"]]}))

(defn route->token
  [route]
  (silk/depart (silk/routes -routes) route))

(defn token->route
  [token]
  (silk/arrive (silk/routes -routes) token ::silk/name))