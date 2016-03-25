(ns unit.runner
  (:require [cljs.test]
            [doo.runner :refer-macros [doo-tests]]
            [unit.controller]))

(doo-tests
  'unit.controller)