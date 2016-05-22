(ns unit.runner
  (:require [cljs.test]
            [doo.runner :refer-macros [doo-tests]]
            [unit.atoms]
            [unit.core]))

(doo-tests
  'unit.atoms
  'unit.core)