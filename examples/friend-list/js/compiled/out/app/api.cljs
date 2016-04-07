; API client simulation
(ns app.api
  (:require))

(def -friends
  [{:id 1 :name "Bruce Wayne" :username "@Batman"}
   {:id 2 :name "Clark Kent" :username "@Superman"}
   {:id 3 :name "Maz 'Magnus' Eisenhardt" :username "@Magneto"}
   {:id 4 :name "Reed Richards" :username "@Mister-Fantastic"}
   {:id 5 :name "Charles Francis Xavier" :username "@ProfessorX"}
   {:id 6 :name "Lex Luthor" :username "@LexLuthor"}
   {:id 7 :name "Benjamin Grimm" :username "@Thing"}
   {:id 8 :name "Walter Langkowski" :username "@Sasquatch"}
   {:id 9 :name "Andrew Nolan" :username "@Ferro-Lad"}
   {:id 10 :name "Jonathan Osterman" :username "@Dr.Manhattan"}])

(defn search
  "Async."
  [query on-success]
  (let [query (-> query clojure.string/trim clojure.string/lower-case)
        result (filter
                 (fn [f] (some #(-> % clojure.string/lower-case (clojure.string/includes? query))
                               (map f [:name :username])))
                 -friends)
        t (rand-int 1000)]
    (println "search" (pr-str query) " t =" t)
    (.setTimeout js/window #(on-success result) t)))