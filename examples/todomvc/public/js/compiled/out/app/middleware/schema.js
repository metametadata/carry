// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.middleware.schema');
goog.require('cljs.core');
goog.require('mvsa.helpers');
goog.require('schema.core');
/**
 * Middleware will validate the model on every change using the specified schema.
 *   Throws an exception if validation fails.
 */
app.middleware.schema.add = (function app$middleware$schema$add(spec,schema__$1){
return cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"on-start","on-start",-1839785985),mvsa.helpers.after_do,(function (model,_dispatch_signal){
var co__18629__auto__ = reagent.ratom.make_reaction.call(null,(function (){
var temp__4425__auto__ = schema.core.check.call(null,schema__$1,cljs.core.deref.call(null,model));
if(cljs.core.truth_(temp__4425__auto__)){
var problems = temp__4425__auto__;
console.log("Validation problems:",problems);

throw cljs.core.ex_info.call(null,"Model validation failed. See more info above.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,co__18629__auto__);

return co__18629__auto__;
}));
});

//# sourceMappingURL=schema.js.map?rel=1456176268937