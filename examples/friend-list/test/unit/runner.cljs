(ns unit.runner
  (:require [cljs.test]
            [doo.runner :refer-macros [doo-tests]]
            [unit.controller]
            [unit.reconciler]))

(doo-tests
  'unit.controller
  'unit.reconciler)