// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.middleware.persistence');
goog.require('cljs.core');
goog.require('mvsa.helpers');
goog.require('cljs.core.match');
app.middleware.persistence._wrap_control = (function app$middleware$persistence$_wrap_control(app_control,key){
return (function app$middleware$persistence$_wrap_control_$_control(model,signal,dispatch){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__21384 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__21384,new cljs.core.Keyword("app.middleware.persistence","-on-load-from-storage","app.middleware.persistence/-on-load-from-storage",2122192367))){
try{var signal_1__21385 = cljs.core.nth.call(null,signal,(1));
if(cljs.core._EQ_.call(null,signal_1__21385,key)){
var loaded_model = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.persistence","-load-from-storage","app.middleware.persistence/-load-from-storage",-1024561052),key,loaded_model], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e21389){if((e21389 instanceof Error)){
var e__20564__auto__ = e21389;
if((e__20564__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto__;
}
} else {
throw e21389;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21388){if((e21388 instanceof Error)){
var e__20564__auto__ = e21388;
if((e__20564__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto__;
}
} else {
throw e21388;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21387){if((e21387 instanceof Error)){
var e__20564__auto__ = e21387;
if((e__20564__auto__ === cljs.core.match.backtrack)){
return app_control.call(null,model,signal,dispatch);
} else {
throw e__20564__auto__;
}
} else {
throw e21387;

}
}});
});
app.middleware.persistence._wrap_reconcile = (function app$middleware$persistence$_wrap_reconcile(app_reconcile,key,blacklist){
return (function app$middleware$persistence$_wrap_reconcile_$_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__21412 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21412,new cljs.core.Keyword("app.middleware.persistence","-load-from-storage","app.middleware.persistence/-load-from-storage",-1024561052))){
try{var action_1__21413 = cljs.core.nth.call(null,action,(1));
if(cljs.core._EQ_.call(null,action_1__21413,key)){
var loaded_model = cljs.core.nth.call(null,action,(2));
return cljs.core.merge.call(null,loaded_model,cljs.core.select_keys.call(null,model,blacklist));
} else {
throw cljs.core.match.backtrack;

}
}catch (e21417){if((e21417 instanceof Error)){
var e__20564__auto__ = e21417;
if((e__20564__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto__;
}
} else {
throw e21417;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21416){if((e21416 instanceof Error)){
var e__20564__auto__ = e21416;
if((e__20564__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto__;
}
} else {
throw e21416;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21415){if((e21415 instanceof Error)){
var e__20564__auto__ = e21415;
if((e__20564__auto__ === cljs.core.match.backtrack)){
return app_reconcile.call(null,model,action);
} else {
throw e__20564__auto__;
}
} else {
throw e21415;

}
}});
});
app.middleware.persistence._save = (function app$middleware$persistence$_save(storage,key,blacklist,model){
var save_whitelist = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,model)),blacklist);
return cljs.core.assoc_BANG_.call(null,storage,key,cljs.core.select_keys.call(null,model,save_whitelist));
});
/**
 * On start middleware will load the model from storage.
 *   Saves model into storage on every change.
 *   Several middlewares can safely wrap the same spec as long as they use different storage keys.
 * 
 *   Storage is expected to be a transient map.
 *   If this middleware is applioed to spec several times then all keys must differ; otherwise, behavior is undefined.
 *   Optional :blacklist set should contain model keys which will not be saved and loaded.
 *   Optional :load-wrapper allows decorating model update function (e.g. it's possible to cancel loading based on loaded data).
 */
app.middleware.persistence.add = (function app$middleware$persistence$add(var_args){
var args21418 = [];
var len__17809__auto___21424 = arguments.length;
var i__17810__auto___21425 = (0);
while(true){
if((i__17810__auto___21425 < len__17809__auto___21424)){
args21418.push((arguments[i__17810__auto___21425]));

var G__21426 = (i__17810__auto___21425 + (1));
i__17810__auto___21425 = G__21426;
continue;
} else {
}
break;
}

var G__21420 = args21418.length;
switch (G__21420) {
case 3:
return app.middleware.persistence.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.middleware.persistence.add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21418.length)].join('')));

}
});

app.middleware.persistence.add.cljs$core$IFn$_invoke$arity$3 = (function (spec,storage,key){
return app.middleware.persistence.add.call(null,spec,storage,key,null);
});

app.middleware.persistence.add.cljs$core$IFn$_invoke$arity$4 = (function (spec,storage,key,p__21421){
var map__21422 = p__21421;
var map__21422__$1 = ((((!((map__21422 == null)))?((((map__21422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21422):map__21422);
var _options = map__21422__$1;
var blacklist = cljs.core.get.call(null,map__21422__$1,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170),cljs.core.PersistentHashSet.EMPTY);
var load_wrapper = cljs.core.get.call(null,map__21422__$1,new cljs.core.Keyword(null,"load-wrapper","load-wrapper",-1708672591),cljs.core.identity);
if(cljs.core.set_QMARK_.call(null,blacklist)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol(null,"blacklist","blacklist",-1406342599,null))))].join('')));
}

var load_from_storage = ((function (map__21422,map__21422__$1,_options,blacklist,load_wrapper){
return (function app$middleware$persistence$load_from_storage(loaded_model,dispatch_signal,_current_model){
return dispatch_signal.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.persistence","-on-load-from-storage","app.middleware.persistence/-on-load-from-storage",2122192367),key,loaded_model], null));
});})(map__21422,map__21422__$1,_options,blacklist,load_wrapper))
;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),app.middleware.persistence._wrap_control,key),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),app.middleware.persistence._wrap_reconcile,key,blacklist),new cljs.core.Keyword(null,"on-start","on-start",-1839785985),mvsa.helpers.after_do,((function (map__21422,map__21422__$1,_options,blacklist,load_wrapper){
return (function (model,dispatch_signal){
cljs.core.println.call(null,"[persistence] start, key =",cljs.core.pr_str.call(null,key));

var loaded_model_21428 = cljs.core.get.call(null,storage,key,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core.not_EQ_.call(null,loaded_model_21428,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
load_wrapper.call(null,load_from_storage).call(null,loaded_model_21428,dispatch_signal,cljs.core.deref.call(null,model));
} else {
}

var co__19764__auto__ = reagent.ratom.make_reaction.call(null,((function (map__21422,map__21422__$1,_options,blacklist,load_wrapper){
return (function (){
return app.middleware.persistence._save.call(null,storage,key,blacklist,cljs.core.deref.call(null,model));
});})(map__21422,map__21422__$1,_options,blacklist,load_wrapper))
,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,co__19764__auto__);

return co__19764__auto__;
});})(map__21422,map__21422__$1,_options,blacklist,load_wrapper))
);
});

app.middleware.persistence.add.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=persistence.js.map?rel=1456018601663