// Compiled by ClojureScript 1.7.228 {}
goog.provide('middleware.persistence');
goog.require('cljs.core');
goog.require('cljs.core.match');
middleware.persistence._save = (function middleware$persistence$_save(storage,key,blacklist,model){
var save_whitelist = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,model)),blacklist);
return cljs.core.assoc_BANG_.call(null,storage,key,cljs.core.select_keys.call(null,model,save_whitelist));
});
middleware.persistence._wrap_control = (function middleware$persistence$_wrap_control(app_control,storage,key,blacklist,load_wrapper){
return (function middleware$persistence$_wrap_control_$_control(model,signal,dispatch_signal,dispatch_action){
var load_from_storage = (function middleware$persistence$_wrap_control_$_control_$_load_from_storage(_model_reaction,loaded_model,dispatch_signal__$1){
return dispatch_signal__$1.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.persistence","on-load-from-storage","middleware.persistence/on-load-from-storage",-864449331),key,loaded_model], null));
});
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-start","on-start",-1839785985))){
app_control.call(null,model,signal,dispatch_signal,dispatch_action);

cljs.core.println.call(null,"[persistence] start, key =",cljs.core.pr_str.call(null,key));

var loaded_model_86120 = cljs.core.get.call(null,storage,key,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core.not_EQ_.call(null,loaded_model_86120,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
load_wrapper.call(null,load_from_storage).call(null,model,loaded_model_86120,dispatch_signal);
} else {
}

var co__22329__auto__ = reagent.ratom.make_reaction.call(null,(function (){
return middleware.persistence._save.call(null,storage,key,blacklist,cljs.core.deref.call(null,model));
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,co__22329__auto__);

return co__22329__auto__;
} else {
throw cljs.core.match.backtrack;

}
}catch (e86116){if((e86116 instanceof Error)){
var e__22955__auto__ = e86116;
if((e__22955__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__86113 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__86113,new cljs.core.Keyword("middleware.persistence","on-load-from-storage","middleware.persistence/on-load-from-storage",-864449331))){
try{var signal_1__86114 = cljs.core.nth.call(null,signal,(1));
if(cljs.core._EQ_.call(null,signal_1__86114,key)){
var loaded_model = cljs.core.nth.call(null,signal,(2));
return dispatch_action.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.persistence","load-from-storage","middleware.persistence/load-from-storage",-285322982),key,loaded_model], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e86119){if((e86119 instanceof Error)){
var e__22955__auto____$1 = e86119;
if((e__22955__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$1;
}
} else {
throw e86119;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e86118){if((e86118 instanceof Error)){
var e__22955__auto____$1 = e86118;
if((e__22955__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$1;
}
} else {
throw e86118;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e86117){if((e86117 instanceof Error)){
var e__22955__auto____$1 = e86117;
if((e__22955__auto____$1 === cljs.core.match.backtrack)){
return app_control.call(null,model,signal,dispatch_signal,dispatch_action);
} else {
throw e__22955__auto____$1;
}
} else {
throw e86117;

}
}} else {
throw e__22955__auto__;
}
} else {
throw e86116;

}
}});
});
middleware.persistence._wrap_reconcile = (function middleware$persistence$_wrap_reconcile(app_reconcile,key,blacklist){
return (function middleware$persistence$_wrap_reconcile_$_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__86143 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__86143,new cljs.core.Keyword("middleware.persistence","load-from-storage","middleware.persistence/load-from-storage",-285322982))){
try{var action_1__86144 = cljs.core.nth.call(null,action,(1));
if(cljs.core._EQ_.call(null,action_1__86144,key)){
var loaded_model = cljs.core.nth.call(null,action,(2));
return cljs.core.merge.call(null,loaded_model,cljs.core.select_keys.call(null,model,blacklist));
} else {
throw cljs.core.match.backtrack;

}
}catch (e86148){if((e86148 instanceof Error)){
var e__22955__auto__ = e86148;
if((e__22955__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto__;
}
} else {
throw e86148;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e86147){if((e86147 instanceof Error)){
var e__22955__auto__ = e86147;
if((e__22955__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto__;
}
} else {
throw e86147;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e86146){if((e86146 instanceof Error)){
var e__22955__auto__ = e86146;
if((e__22955__auto__ === cljs.core.match.backtrack)){
return app_reconcile.call(null,model,action);
} else {
throw e__22955__auto__;
}
} else {
throw e86146;

}
}});
});
/**
 * On start middleware will load the model from storage.
 *   Saves model into storage on every change.
 *   Several middlewares can safely wrap the same spec as long as they use different storage keys.
 * 
 *   Storage is expected to be a transient map.
 *   If this middleware is applied to spec several times then all keys must differ; otherwise, behavior is undefined.
 *   Optional :blacklist set should contain model keys which will not be saved and loaded.
 *   Optional :load-wrapper allows decorating model update function (e.g. it's possible to cancel loading based on loaded data).
 */
middleware.persistence.add = (function middleware$persistence$add(var_args){
var args86149 = [];
var len__19357__auto___86155 = arguments.length;
var i__19358__auto___86156 = (0);
while(true){
if((i__19358__auto___86156 < len__19357__auto___86155)){
args86149.push((arguments[i__19358__auto___86156]));

var G__86157 = (i__19358__auto___86156 + (1));
i__19358__auto___86156 = G__86157;
continue;
} else {
}
break;
}

var G__86151 = args86149.length;
switch (G__86151) {
case 3:
return middleware.persistence.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return middleware.persistence.add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86149.length)].join('')));

}
});

middleware.persistence.add.cljs$core$IFn$_invoke$arity$3 = (function (spec,storage,key){
return middleware.persistence.add.call(null,spec,storage,key,null);
});

middleware.persistence.add.cljs$core$IFn$_invoke$arity$4 = (function (spec,storage,key,p__86152){
var map__86153 = p__86152;
var map__86153__$1 = ((((!((map__86153 == null)))?((((map__86153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86153):map__86153);
var _options = map__86153__$1;
var blacklist = cljs.core.get.call(null,map__86153__$1,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170),cljs.core.PersistentHashSet.EMPTY);
var load_wrapper = cljs.core.get.call(null,map__86153__$1,new cljs.core.Keyword(null,"load-wrapper","load-wrapper",-1708672591),cljs.core.identity);
if(cljs.core.set_QMARK_.call(null,blacklist)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol(null,"blacklist","blacklist",-1406342599,null))))].join('')));
}

return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),middleware.persistence._wrap_control,storage,key,blacklist,load_wrapper),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),middleware.persistence._wrap_reconcile,key,blacklist);
});

middleware.persistence.add.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=persistence.js.map?rel=1460037774830