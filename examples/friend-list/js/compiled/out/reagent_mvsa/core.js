// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent_mvsa.core');
goog.require('cljs.core');
goog.require('reagent.core');
/**
 * Prohibits using swap! and reset! on the specified atom. Returns the same atom.
 */
reagent_mvsa.core._make_readonly_BANG_ = (function reagent_mvsa$core$_make_readonly_BANG_(a){
var original_reset_fn = a.cljs$core$IReset$_reset_BANG_$arity$2.bind(a);
var x92139 = a;
x92139.cljs$core$IReset$ = true;

x92139.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (x92139,original_reset_fn){
return (function (this$,new_value){
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("reagent-mvsa.core","force-reset?","reagent-mvsa.core/force-reset?",-2058279498).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new_value)))){
return original_reset_fn.call(null,this$__$1,new_value);
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("readonly atom cannot be reset to "),cljs.core.str(cljs.core.pr_str.call(null,new_value))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

}
});})(x92139,original_reset_fn))
;

return x92139;
});
/**
 * Bypasses write protection of the specified readonly atom.
 */
reagent_mvsa.core._force_reset_BANG_ = (function reagent_mvsa$core$_force_reset_BANG_(readonly_atom,new_value){
return cljs.core.reset_BANG_.call(null,readonly_atom,cljs.core.with_meta.call(null,new_value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("reagent-mvsa.core","force-reset?","reagent-mvsa.core/force-reset?",-2058279498),true], null)));
});
/**
 * Constructs an app from a spec map with keys:
 *   :initial-model - Initial model value, must be a map.
 * 
 *   :control - Function of args: [model-readonly-ratom signal dispatch-signal dispatch-action].
 *   It performs side effects, can dispatch actions and new signals.
 *   By convention, it must be able to handle :on-start and :on-stop signals in order to be wrappable by middleware.
 *   Model ratom is useful for reading actual model values in async code and to subscribe to model changes.
 *   Functions dispatch-signal and dispatch-action always return nil.
 * 
 *   :reconcile - Pure function of args: [model-value action]. Given an action, it must return the new model value.
 * 
 *   Returned app is a map with keys:
 *   :model - A readonly model ratom.
 * 
 *   :dispatch-signal - Function with a single arg: a signal to be sent to an app. Returns nil.
 * 
 *   Data flow:
 *   -dispatch-signal-> (control) -dispatch-action-> (reconcile)
 */
reagent_mvsa.core.app = (function reagent_mvsa$core$app(p__92140){
var map__92143 = p__92140;
var map__92143__$1 = ((((!((map__92143 == null)))?((((map__92143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92143):map__92143);
var _spec = map__92143__$1;
var initial_model = cljs.core.get.call(null,map__92143__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var control = cljs.core.get.call(null,map__92143__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var reconcile = cljs.core.get.call(null,map__92143__$1,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830));
if(cljs.core.map_QMARK_.call(null,initial_model)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"initial-model","initial-model",-1418203282,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,control)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"control","control",-761857733,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,reconcile)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"reconcile","reconcile",911869697,null))))].join('')));
}

var model_ratom = reagent_mvsa.core._make_readonly_BANG_.call(null,reagent.core.atom.call(null,initial_model));
var dispatch_action = ((function (model_ratom,map__92143,map__92143__$1,_spec,initial_model,control,reconcile){
return (function reagent_mvsa$core$app_$_dispatch_action(action){
reagent_mvsa.core._force_reset_BANG_.call(null,model_ratom,reconcile.call(null,cljs.core.deref.call(null,model_ratom),action));

return null;
});})(model_ratom,map__92143,map__92143__$1,_spec,initial_model,control,reconcile))
;
var dispatch_signal = ((function (model_ratom,map__92143,map__92143__$1,_spec,initial_model,control,reconcile){
return (function reagent_mvsa$core$app_$_dispatch_signal(signal){
control.call(null,model_ratom,signal,reagent_mvsa$core$app_$_dispatch_signal,dispatch_action);

return null;
});})(model_ratom,map__92143,map__92143__$1,_spec,initial_model,control,reconcile))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model","model",331153215),model_ratom,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591),dispatch_signal], null);
});
/**
 * Arguments:
 *   app - the app for which UI should be created
 *   view-model - function which, given a model ratom, returns reactions; returned value will be passed to a view:
 *   view - Reagent component function with args: [view-model-return-value dispatch-signal]
 * 
 *   Note that view-model function will be called only once.
 * 
 *   Returns a pair of: view-model value (mostly for testing/debugging) and argless component to be rendered by Reagent.
 */
reagent_mvsa.core.connect_ui = (function reagent_mvsa$core$connect_ui(p__92145,view_model,view){
var map__92148 = p__92145;
var map__92148__$1 = ((((!((map__92148 == null)))?((((map__92148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92148):map__92148);
var _app = map__92148__$1;
var model = cljs.core.get.call(null,map__92148__$1,new cljs.core.Keyword(null,"model","model",331153215));
var dispatch_signal = cljs.core.get.call(null,map__92148__$1,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591));
if(cljs.core.truth_(model)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"model","model",1971684742,null)))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,dispatch_signal)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"dispatch-signal","dispatch-signal",1846076118,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,view_model)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"view-model","view-model",745125852,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,view)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"view","view",-1406440955,null))))].join('')));
}

var app_view_model = view_model.call(null,model);
var app_view = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,app_view_model,dispatch_signal], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_view_model,app_view], null);
});
/**
 * Returns a map containing reactions to map entries specified by keys.
 */
reagent_mvsa.core.track_keys = (function reagent_mvsa$core$track_keys(map_ratom,keyseq){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19071__auto__ = (function reagent_mvsa$core$track_keys_$_iter__92154(s__92155){
return (new cljs.core.LazySeq(null,(function (){
var s__92155__$1 = s__92155;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__92155__$1);
if(temp__4657__auto__){
var s__92155__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__92155__$2)){
var c__19069__auto__ = cljs.core.chunk_first.call(null,s__92155__$2);
var size__19070__auto__ = cljs.core.count.call(null,c__19069__auto__);
var b__92157 = cljs.core.chunk_buffer.call(null,size__19070__auto__);
if((function (){var i__92156 = (0);
while(true){
if((i__92156 < size__19070__auto__)){
var key = cljs.core._nth.call(null,c__19069__auto__,i__92156);
cljs.core.chunk_append.call(null,b__92157,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (i__92156,key,c__19069__auto__,size__19070__auto__,b__92157,s__92155__$2,temp__4657__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(i__92156,key,c__19069__auto__,size__19070__auto__,b__92157,s__92155__$2,temp__4657__auto__))
)], null));

var G__92158 = (i__92156 + (1));
i__92156 = G__92158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92157),reagent_mvsa$core$track_keys_$_iter__92154.call(null,cljs.core.chunk_rest.call(null,s__92155__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92157),null);
}
} else {
var key = cljs.core.first.call(null,s__92155__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (key,s__92155__$2,temp__4657__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(key,s__92155__$2,temp__4657__auto__))
)], null),reagent_mvsa$core$track_keys_$_iter__92154.call(null,cljs.core.rest.call(null,s__92155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19071__auto__.call(null,keyseq);
})());
});

//# sourceMappingURL=core.js.map?rel=1460037784217