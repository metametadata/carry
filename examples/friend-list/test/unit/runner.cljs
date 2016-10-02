(ns unit.runner
  (:require [cljs.test]
            [doo.runner :refer-macros [doo-tests]]
            [unit.spec]
            [unit.signals]
            [unit.actions]
            [unit.view-model]))

(doo-tests
  'unit.spec
  'unit.signals
  'unit.actions
  'unit.view-model)