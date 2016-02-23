// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.spec');
goog.require('cljs.core');
goog.require('app.middleware.persistence');
goog.require('app.controller');
goog.require('app.middleware.routing');
goog.require('app.model');
goog.require('app.middleware.schema');
goog.require('app.middleware.devtools');
goog.require('app.reconciler');
app.spec.new_spec = (function app$spec$new_spec(history,storage,todo_titles){
return app.middleware.persistence.add.call(null,app.middleware.routing.add.call(null,app.middleware.schema.add.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),app.model.new_model.call(null,todo_titles),new cljs.core.Keyword(null,"control","control",1892578036),app.controller.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),app.reconciler.reconcile,new cljs.core.Keyword(null,"on-start","on-start",-1839785985),(function (_model,_dispatch_signal){
return cljs.core.println.call(null,"[todos] start");
}),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),(function (_model,_dispatch_signal){
return cljs.core.println.call(null,"[todos] stop");
})], null),app.model.Schema),history),storage,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blacklist","blacklist",1248093170),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),null], null), null)], null));
});

//# sourceMappingURL=spec.js.map?rel=1456176286364