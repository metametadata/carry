# What are the alternative ClojureScript frameworks?

Some of the alternatives are:

- [ampere](https://github.com/condense/ampere)
- [bureaucracy](https://github.com/samroberton/bureaucracy)
- [Catalysis](https://github.com/metasoarous/catalysis)
- [hoplon](https://github.com/hoplon)
- [Keechma](https://github.com/keechma/keechma)
- [Om Next](https://github.com/omcljs/om/wiki/Quick-Start-(om.next))
- [Petrol](https://github.com/krisajenkins/petrol)
- [Pure-frame](https://github.com/binaryage/pure-frame)
- [re-frame](https://github.com/Day8/re-frame)
- [remlok](https://github.com/gumvic/remlok)
- [Stately](https://github.com/nodename/stately)
- [untangled](https://github.com/untangled-web)

For comparison also take a look at the list of different TodoMVC examples at 
[https://github.com/gadfly361/cljs-todomvc](https://github.com/gadfly361/cljs-todomvc).

# Is view model an integral part of Carry architecture?
No, but it's a convenient UI pattern to follow because:

- It makes code easier to read, refactor and unit test thanks to better separation of concerns. 
- It makes performance optimizations easier (e.g. by using Reagent's reactions to not recalculate data without a need).

That's why it was enforced in [carry-reagent](https://github.com/metametadata/carry/tree/master/contrib/reagent/) package.

# Is there a way to code a view model if I don't use Reagent?
Yes, there's a number of tools that can do reactive/dataflow/structured computations:

- [Derivatives](https://github.com/martinklepsch/derivatives)
- [freactive.core](https://github.com/aaronc/freactive.core)
- [Javelin](https://github.com/hoplon/javelin)
- [lentes](https://github.com/funcool/lentes)
- [Plumatic Graph](https://github.com/plumatic/plumbing/)
- [Rum](https://github.com/tonsky/rum)'s `derived-atom`

# Is using `core.match` required in signal/action handlers?
No, Carry doesn't care how these functions are implemented. They can be driven by multimethods or a simple `cond`.
But using `core.match` seemed to me like quite a flexible and readable solution. 