// Compiled by ClojureScript 1.7.170 {}
goog.provide('mvsa.core');
goog.require('cljs.core');
goog.require('reagent.core');
/**
 * Constructs an app from a spec.
 * 
 *   Spec is a map with keys:
 *   :initial-model - initial model value, must be a map
 *   :control - function of args: [model-value signal dispatch-action];
 *   it performs side effects, can dispatch actions using dispatch-action (which returns the updated model value)
 *   :reconcile - pure function of args: [model-value action];
 *   given an action it must return the new model value
 *   :on-start - function of args: [model-reaction dispatch-signal]; will be called on starting the app
 *   :on-stop - function of args: [model-reaction dispatch-signal]; will be called on stopping the app
 * 
 *   App is a map with keys:
 *   :model - a readonly ratom (or, in Reagent terms, a reaction which returns model value)
 *   :dispatch-signal - function with a single arg: a signal to be sent to an app; returns nil
 *   :start - argless function for bootstrapping an app, e.g. app can start listening to browser history here
 *   :stop - argless function for shutting an app down, e.g. app can stop listening to browser events here
 *   :-model - model ratom (exposed for debugging only)
 *   :-dispatch-action - function with which dispatches an action (exposed for debugging only); returns updated model value
 * 
 *   Data flow:
 *   -dispatch-signal-> (control) -dispatch-action-> (reconcile) -update-> model
 */
mvsa.core.app = (function mvsa$core$app(p__21431){
var map__21434 = p__21431;
var map__21434__$1 = ((((!((map__21434 == null)))?((((map__21434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21434):map__21434);
var _spec = map__21434__$1;
var initial_model = cljs.core.get.call(null,map__21434__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var control = cljs.core.get.call(null,map__21434__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var reconcile = cljs.core.get.call(null,map__21434__$1,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830));
var on_start = cljs.core.get.call(null,map__21434__$1,new cljs.core.Keyword(null,"on-start","on-start",-1839785985));
var on_stop = cljs.core.get.call(null,map__21434__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
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

if(cljs.core.fn_QMARK_.call(null,on_start)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"on-start","on-start",-199254458,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,on_stop)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"on-stop","on-stop",-1134321254,null))))].join('')));
}

var model_ratom = reagent.core.atom.call(null,initial_model);
var model_reaction = reagent.ratom.make_reaction.call(null,((function (model_ratom,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop){
return (function (){
return cljs.core.deref.call(null,model_ratom);
});})(model_ratom,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop))
);
var dispatch_action = ((function (model_ratom,model_reaction,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop){
return (function (action){
return cljs.core.swap_BANG_.call(null,model_ratom,reconcile,action);
});})(model_ratom,model_reaction,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop))
;
var dispatch_signal = ((function (model_ratom,model_reaction,dispatch_action,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop){
return (function (signal){
control.call(null,cljs.core.deref.call(null,model_ratom),signal,dispatch_action);

return null;
});})(model_ratom,model_reaction,dispatch_action,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop))
;
var app__$2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"model","model",331153215),model_reaction,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591),dispatch_signal,new cljs.core.Keyword(null,"start","start",-355208981),((function (model_ratom,model_reaction,dispatch_action,dispatch_signal,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop){
return (function (){
return on_start.call(null,model_reaction,dispatch_signal);
});})(model_ratom,model_reaction,dispatch_action,dispatch_signal,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop))
,new cljs.core.Keyword(null,"stop","stop",-2140911342),((function (model_ratom,model_reaction,dispatch_action,dispatch_signal,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop){
return (function (){
return on_stop.call(null,model_reaction,dispatch_signal);
});})(model_ratom,model_reaction,dispatch_action,dispatch_signal,map__21434,map__21434__$1,_spec,initial_model,control,reconcile,on_start,on_stop))
,new cljs.core.Keyword(null,"-model","-model",-2031372816),model_ratom,new cljs.core.Keyword(null,"-dispatch-action","-dispatch-action",771694332),dispatch_action], null);
return app__$2;
});
/**
 * Arguments:
 *   app - the app for which UI should be created
 *   view-model - function which, given a model ratom, returns Reagent reactions; inspired by re-frame
 *   subscriptions, see: https://github.com/Day8/re-frame#subscribe; returned value will be passed to a view:
 *   view - Reagent compoment function with args: [view-model-return-value dispatch-signal]
 * 
 *   Note that view-model function will be called only once.
 * 
 *   Returns a pair of: view-model value (mostly for testing/debugging) and argless component to be rendered by Reagent.
 */
mvsa.core.connect_ui = (function mvsa$core$connect_ui(p__21436,view_model,view){
var map__21439 = p__21436;
var map__21439__$1 = ((((!((map__21439 == null)))?((((map__21439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21439):map__21439);
var _app = map__21439__$1;
var model = cljs.core.get.call(null,map__21439__$1,new cljs.core.Keyword(null,"model","model",331153215));
var dispatch_signal = cljs.core.get.call(null,map__21439__$1,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591));
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

//# sourceMappingURL=core.js.map?rel=1456018602310