(ns unit.runner
  (:require [cljs.test]
            [doo.runner :refer-macros [doo-tests]]
            [unit.todos]))

; for debugging using println
(enable-console-print!)

(doo-tests
  'unit.todos)