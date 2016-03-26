(ns unit.runner
  (:require [cljs.test]
            [doo.runner :refer-macros [doo-tests]]
            [unit.spec]
            [unit.controller]
            [unit.reconciler]
            [unit.view-model]))

(doo-tests
  'unit.spec
  'unit.controller
  'unit.reconciler
  'unit.view-model)