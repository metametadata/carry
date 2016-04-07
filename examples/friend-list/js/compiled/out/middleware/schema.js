// Compiled by ClojureScript 1.7.228 {}
goog.provide('middleware.schema');
goog.require('cljs.core');
goog.require('schema.core');
/**
 * Middleware will validate the model on every change using the specified schema.
 *   Throws an exception if validation fails.
 *   Add it as close to spec as possible in order to not propagate the invalid model to other middlewares.
 *   Starts validating only after :on-start signal.
 */
middleware.schema.add = (function middleware$schema$add(spec,schema__$1){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),(function (model,signal,dispatch_signal,dispatch_action){
new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(spec).call(null,model,signal,dispatch_signal,dispatch_action);

if(cljs.core._EQ_.call(null,signal,new cljs.core.Keyword(null,"on-start","on-start",-1839785985))){
var co__22329__auto__ = reagent.ratom.make_reaction.call(null,(function (){
var temp__4657__auto__ = schema.core.check.call(null,schema__$1,cljs.core.deref.call(null,model));
if(cljs.core.truth_(temp__4657__auto__)){
var problems = temp__4657__auto__;
console.log("Validation problems:",problems);

throw cljs.core.ex_info.call(null,"Model validation failed. See more info above.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,co__22329__auto__);

return co__22329__auto__;
} else {
return null;
}
}));
});

//# sourceMappingURL=schema.js.map?rel=1460037781291