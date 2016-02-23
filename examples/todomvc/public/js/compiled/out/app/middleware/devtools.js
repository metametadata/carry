// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.middleware.devtools');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('app.middleware.schema');
goog.require('app.middleware.persistence');
goog.require('mvsa.helpers');
goog.require('mvsa.core');
goog.require('schema.core');
goog.require('cljs.core.match');
app.middleware.devtools.Schema = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Int,"id",schema.core.Any,"signal")], null),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),schema.core.Int,new cljs.core.Keyword(null,"action-events","action-events",1949072282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Int,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),schema.core.Int,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),schema.core.Bool,new cljs.core.Keyword(null,"action","action",-811238024),schema.core.Any,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null)], null),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),schema.core.Int,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),schema.core.Bool], null),schema.core.Any,schema.core.Any], true, false);
app.middleware.devtools._wrap_initial_model = (function app$middleware$devtools$_wrap_initial_model(app_initial_model){
return cljs.core.assoc.call(null,app_initial_model,new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),app_initial_model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),(0),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),(0),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),false], null));
});
app.middleware.devtools._signal_event = (function app$middleware$devtools$_signal_event(id,signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,signal], null);
});
app.middleware.devtools._action_event = (function app$middleware$devtools$_action_event(signal_id,id,action,result){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
});
app.middleware.devtools._update_action_events_STAR_ = (function app$middleware$devtools$_update_action_events_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28787 = arguments.length;
var i__17810__auto___28788 = (0);
while(true){
if((i__17810__auto___28788 < len__17809__auto___28787)){
args__17816__auto__.push((arguments[i__17810__auto___28788]));

var G__28789 = (i__17810__auto___28788 + (1));
i__17810__auto___28788 = G__28789;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return app.middleware.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

app.middleware.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__28782_SHARP_){
return cljs.core.apply.call(null,f,p1__28782_SHARP_,args);
}),model);
});

app.middleware.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

app.middleware.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq28783){
var G__28784 = cljs.core.first.call(null,seq28783);
var seq28783__$1 = cljs.core.next.call(null,seq28783);
var G__28785 = cljs.core.first.call(null,seq28783__$1);
var seq28783__$2 = cljs.core.next.call(null,seq28783__$1);
var G__28786 = cljs.core.first.call(null,seq28783__$2);
var seq28783__$3 = cljs.core.next.call(null,seq28783__$2);
return app.middleware.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28784,G__28785,G__28786,seq28783__$3);
});
app.middleware.devtools._update_action_event = (function app$middleware$devtools$_update_action_event(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28795 = arguments.length;
var i__17810__auto___28796 = (0);
while(true){
if((i__17810__auto___28796 < len__17809__auto___28795)){
args__17816__auto__.push((arguments[i__17810__auto___28796]));

var G__28797 = (i__17810__auto___28796 + (1));
i__17810__auto___28796 = G__28797;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return app.middleware.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

app.middleware.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,app.middleware.devtools._update_action_events_STAR_,model,(function (p1__28790_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28790_SHARP_),id);
}),f,args);
});

app.middleware.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

app.middleware.devtools._update_action_event.cljs$lang$applyTo = (function (seq28791){
var G__28792 = cljs.core.first.call(null,seq28791);
var seq28791__$1 = cljs.core.next.call(null,seq28791);
var G__28793 = cljs.core.first.call(null,seq28791__$1);
var seq28791__$2 = cljs.core.next.call(null,seq28791__$1);
var G__28794 = cljs.core.first.call(null,seq28791__$2);
var seq28791__$3 = cljs.core.next.call(null,seq28791__$2);
return app.middleware.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__28792,G__28793,G__28794,seq28791__$3);
});
app.middleware.devtools._find_signal = (function app$middleware$devtools$_find_signal(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28798_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__28798_SHARP_),id);
}),new cljs.core.Keyword(null,"signal-events","signal-events",555073244).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model))));
});
app.middleware.devtools._find_action = (function app$middleware$devtools$_find_action(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28799_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28799_SHARP_),id);
}),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model))));
});
app.middleware.devtools._wrap_control = (function app$middleware$devtools$_wrap_control(app_control){
return (function app$middleware$devtools$_wrap_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("app.middleware.devtools","on-did-load-from-storage","app.middleware.devtools/on-did-load-from-storage",2096069882))){
return dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","replay","app.middleware.devtools/replay",-1992281570));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28840){if((e28840 instanceof Error)){
var e__19141__auto__ = e28840;
if((e__19141__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__28838 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__28838,new cljs.core.Keyword("app.middleware.devtools","on-toggle-signal","app.middleware.devtools/on-toggle-signal",-1714486580))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","toggle-signal","app.middleware.devtools/toggle-signal",-1272764928),id], null));

return dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","replay","app.middleware.devtools/replay",-1992281570));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28846){if((e28846 instanceof Error)){
var e__19141__auto____$1 = e28846;
if((e__19141__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__28838 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__28838,new cljs.core.Keyword("app.middleware.devtools","on-toggle-action","app.middleware.devtools/on-toggle-action",24634702))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","toggle-action","app.middleware.devtools/toggle-action",-1451659734),id], null));

return dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","replay","app.middleware.devtools/replay",-1992281570));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28847){if((e28847 instanceof Error)){
var e__19141__auto____$2 = e28847;
if((e__19141__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__28838 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__28838,new cljs.core.Keyword("app.middleware.devtools","on-log-action-result","app.middleware.devtools/on-log-action-result",433428696))){
var id = cljs.core.nth.call(null,signal,(1));
return cljs.core.println.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(app.middleware.devtools._find_action.call(null,model,id))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28848){if((e28848 instanceof Error)){
var e__19141__auto____$3 = e28848;
if((e__19141__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19141__auto____$3;
}
} else {
throw e28848;

}
}} else {
throw e__19141__auto____$2;
}
} else {
throw e28847;

}
}} else {
throw e__19141__auto____$1;
}
} else {
throw e28846;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28841){if((e28841 instanceof Error)){
var e__19141__auto____$1 = e28841;
if((e__19141__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("app.middleware.devtools","on-toggle-persist","app.middleware.devtools/on-toggle-persist",1306203025))){
return dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","toggle-persist","app.middleware.devtools/toggle-persist",-1920585169));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28842){if((e28842 instanceof Error)){
var e__19141__auto____$2 = e28842;
if((e__19141__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("app.middleware.devtools","on-sweep","app.middleware.devtools/on-sweep",-1350427577))){
return dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","sweep","app.middleware.devtools/sweep",719495101));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28843){if((e28843 instanceof Error)){
var e__19141__auto____$3 = e28843;
if((e__19141__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("app.middleware.devtools","on-reset","app.middleware.devtools/on-reset",-1256280134))){
dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","clear-history","app.middleware.devtools/clear-history",774657086));

return dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","replay","app.middleware.devtools/replay",-1992281570));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28844){if((e28844 instanceof Error)){
var e__19141__auto____$4 = e28844;
if((e__19141__auto____$4 === cljs.core.match.backtrack)){
var vec__28845 = app.middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model)),signal);
var signal_id = cljs.core.nth.call(null,vec__28845,(0),null);
var _ = cljs.core.nth.call(null,vec__28845,(1),null);
var signal_event = vec__28845;
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","record-signal-event","app.middleware.devtools/record-signal-event",904057692),signal_event], null));

return app_control.call(null,model,signal,((function (vec__28845,signal_id,_,signal_event,e__19141__auto____$4,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__){
return (function (p1__28800_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","app-action","app.middleware.devtools/app-action",291317168),signal_id,p1__28800_SHARP_], null));
});})(vec__28845,signal_id,_,signal_event,e__19141__auto____$4,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__))
);
} else {
throw e__19141__auto____$4;
}
} else {
throw e28844;

}
}} else {
throw e__19141__auto____$3;
}
} else {
throw e28843;

}
}} else {
throw e__19141__auto____$2;
}
} else {
throw e28842;

}
}} else {
throw e__19141__auto____$1;
}
} else {
throw e28841;

}
}} else {
throw e__19141__auto__;
}
} else {
throw e28840;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
app.middleware.devtools._orphaned_signal_QMARK_ = (function app$middleware$devtools$_orphaned_signal_QMARK_(model,p__28850){
var vec__28852 = p__28850;
var signal_id = cljs.core.nth.call(null,vec__28852,(0),null);
var _ = cljs.core.nth.call(null,vec__28852,(1),null);
var _signal_ = vec__28852;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__28852,signal_id,_,_signal_){
return (function (p1__28849_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__28849_SHARP_),signal_id);
});})(vec__28852,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model))));
});
app.middleware.devtools._wrap_reconcile = (function app$middleware$devtools$_wrap_reconcile(app_reconcile){
return (function app$middleware$devtools$_wrap_reconcile_$_reconcile(model,action){
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("app.middleware.devtools","clear-history","app.middleware.devtools/clear-history",774657086))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.List.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),cljs.core.List.EMPTY);
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__28909 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__28909,new cljs.core.Keyword("app.middleware.devtools","record-signal-event","app.middleware.devtools/record-signal-event",904057692))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc);
} else {
var action_0__28909__$1 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__28909__$1,new cljs.core.Keyword("app.middleware.devtools","toggle-signal","app.middleware.devtools/toggle-signal",-1272764928))){
var id = cljs.core.nth.call(null,action,(1));
var all_actions_enabled_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.filter.call(null,((function (id,action_0__28909__$1,action_0__28909){
return (function (p1__28853_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__28853_SHARP_),id);
});})(id,action_0__28909__$1,action_0__28909))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model))));
return app.middleware.devtools._update_action_events_STAR_.call(null,model,((function (all_actions_enabled_QMARK_,id,action_0__28909__$1,action_0__28909){
return (function (p1__28854_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__28854_SHARP_),id);
});})(all_actions_enabled_QMARK_,id,action_0__28909__$1,action_0__28909))
,cljs.core.assoc,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(all_actions_enabled_QMARK_));
} else {
var action_0__28909__$2 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__28909__$2,new cljs.core.Keyword("app.middleware.devtools","toggle-action","app.middleware.devtools/toggle-action",-1451659734))){
var id = cljs.core.nth.call(null,action,(1));
return app.middleware.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("app.middleware.devtools","replay","app.middleware.devtools/replay",-1992281570))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model)));
var new_model = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model));
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4423__auto__)){
var map__28917 = temp__4423__auto__;
var map__28917__$1 = ((((!((map__28917 == null)))?((((map__28917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28917):map__28917);
var id = cljs.core.get.call(null,map__28917__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__28917__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__28925 = cljs.core.rest.call(null,action_events);
var G__28926 = (function (){var m = new_model;
var m__$1 = app_reconcile.call(null,m,action__$1);
var m__$2 = app.middleware.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820)));
return m__$2;
})();
action_events = G__28925;
new_model = G__28926;
continue;
} else {
return new_model;
}
break;
}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("app.middleware.devtools","toggle-persist","app.middleware.devtools/toggle-persist",-1920585169))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"persist?","persist?",-1772568760)], null),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("app.middleware.devtools","sweep","app.middleware.devtools/sweep",719495101))){
var m = model;
var m__$1 = cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),((function (m,action_0__28909__$2,action_0__28909__$1,action_0__28909){
return (function (p1__28855_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__28855_SHARP_);
});})(m,action_0__28909__$2,action_0__28909__$1,action_0__28909))
);
var m__$2 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),((function (m,m__$1,action_0__28909__$2,action_0__28909__$1,action_0__28909){
return (function (p1__28856_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,app.middleware.devtools._orphaned_signal_QMARK_,m__$1),p1__28856_SHARP_);
});})(m,m__$1,action_0__28909__$2,action_0__28909__$1,action_0__28909))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__28911 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__28911,new cljs.core.Keyword("app.middleware.devtools","app-action","app.middleware.devtools/app-action",291317168))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
if(cljs.core.truth_(app.middleware.devtools._find_signal.call(null,model,signal_id))){
var m = model;
var m__$1 = app_reconcile.call(null,m,a);
var m__$2 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.middleware.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(m__$1)),a,cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820)))], null));
var m__$3 = cljs.core.update_in.call(null,m__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492)], null),cljs.core.inc);
return m__$3;
} else {
return app$middleware$devtools$_wrap_reconcile_$_reconcile.call(null,model,a);
}
} else {
var vec__28919 = app.middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("app.middleware.devtools","unknown-signal","app.middleware.devtools/unknown-signal",607391854));
var signal_id = cljs.core.nth.call(null,vec__28919,(0),null);
var _ = cljs.core.nth.call(null,vec__28919,(1),null);
var unknown_signal_event = vec__28919;
return app$middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","app-action","app.middleware.devtools/app-action",291317168),signal_id,action], null));

}
} else {
var vec__28920 = app.middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("app.middleware.devtools","unknown-signal","app.middleware.devtools/unknown-signal",607391854));
var signal_id = cljs.core.nth.call(null,vec__28920,(0),null);
var _ = cljs.core.nth.call(null,vec__28920,(1),null);
var unknown_signal_event = vec__28920;
return app$middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","app-action","app.middleware.devtools/app-action",291317168),signal_id,action], null));

}

}

}

}

}

}

}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("app.middleware.devtools","replay","app.middleware.devtools/replay",-1992281570))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model)));
var new_model = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model));
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4423__auto__)){
var map__28921 = temp__4423__auto__;
var map__28921__$1 = ((((!((map__28921 == null)))?((((map__28921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var id = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__28927 = cljs.core.rest.call(null,action_events);
var G__28928 = (function (){var m = new_model;
var m__$1 = app_reconcile.call(null,m,action__$1);
var m__$2 = app.middleware.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820)));
return m__$2;
})();
action_events = G__28927;
new_model = G__28928;
continue;
} else {
return new_model;
}
break;
}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("app.middleware.devtools","toggle-persist","app.middleware.devtools/toggle-persist",-1920585169))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"persist?","persist?",-1772568760)], null),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("app.middleware.devtools","sweep","app.middleware.devtools/sweep",719495101))){
var m = model;
var m__$1 = cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),((function (m){
return (function (p1__28855_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__28855_SHARP_);
});})(m))
);
var m__$2 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),((function (m,m__$1){
return (function (p1__28856_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,app.middleware.devtools._orphaned_signal_QMARK_,m__$1),p1__28856_SHARP_);
});})(m,m__$1))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__28914 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__28914,new cljs.core.Keyword("app.middleware.devtools","app-action","app.middleware.devtools/app-action",291317168))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
if(cljs.core.truth_(app.middleware.devtools._find_signal.call(null,model,signal_id))){
var m = model;
var m__$1 = app_reconcile.call(null,m,a);
var m__$2 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.middleware.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(m__$1)),a,cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820)))], null));
var m__$3 = cljs.core.update_in.call(null,m__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492)], null),cljs.core.inc);
return m__$3;
} else {
return app$middleware$devtools$_wrap_reconcile_$_reconcile.call(null,model,a);
}
} else {
var vec__28923 = app.middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("app.middleware.devtools","unknown-signal","app.middleware.devtools/unknown-signal",607391854));
var signal_id = cljs.core.nth.call(null,vec__28923,(0),null);
var _ = cljs.core.nth.call(null,vec__28923,(1),null);
var unknown_signal_event = vec__28923;
return app$middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","app-action","app.middleware.devtools/app-action",291317168),signal_id,action], null));

}
} else {
var vec__28924 = app.middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("app.middleware.devtools","unknown-signal","app.middleware.devtools/unknown-signal",607391854));
var signal_id = cljs.core.nth.call(null,vec__28924,(0),null);
var _ = cljs.core.nth.call(null,vec__28924,(1),null);
var unknown_signal_event = vec__28924;
return app$middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","app-action","app.middleware.devtools/app-action",291317168),signal_id,action], null));

}

}

}

}

}

}
});
});
app.middleware.devtools._view_model = (function app$middleware$devtools$_view_model(model){
return mvsa.helpers.track_keys.call(null,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
})),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null));
});
app.middleware.devtools._menu_button = (function app$middleware$devtools$_menu_button(caption,on_click,title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),caption], null);
});
app.middleware.devtools._view = (function app$middleware$devtools$_view(p__28930,dispatch){
var map__28989 = p__28930;
var map__28989__$1 = ((((!((map__28989 == null)))?((((map__28989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28989):map__28989);
var _view_model_ = map__28989__$1;
var persist_QMARK_ = cljs.core.get.call(null,map__28989__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760));
var initial_model = cljs.core.get.call(null,map__28989__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var signal_events = cljs.core.get.call(null,map__28989__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244));
var action_events = cljs.core.get.call(null,map__28989__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#persist-toggle.toggle","input#persist-toggle.toggle",-1691877940),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Persist debug session into local storage?",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,persist_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","on-toggle-persist","app.middleware.devtools/on-toggle-persist",1306203025));
});})(map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"persist-toggle"], null),"Persist session"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.middleware.devtools._menu_button,"Sweep",((function (map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","on-sweep","app.middleware.devtools/on-sweep",-1350427577));
});})(map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,"Removes disabled actions and \"orphaned\" signals from history"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.middleware.devtools._menu_button,"Reset",((function (map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("app.middleware.devtools","on-reset","app.middleware.devtools/on-reset",-1256280134));
});})(map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,"Removes all actions and signals resetting the model to initial state"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = ((function (map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function app$middleware$devtools$_view_$_iter__28991(s__28992){
return (new cljs.core.LazySeq(null,((function (map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__28992__$1 = s__28992;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28992__$1);
if(temp__4425__auto__){
var s__28992__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28992__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__28992__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__28994 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__28993 = (0);
while(true){
if((i__28993 < size__17522__auto__)){
var vec__29021 = cljs.core._nth.call(null,c__17521__auto__,i__28993);
var signal_id = cljs.core.nth.call(null,vec__29021,(0),null);
var signal = cljs.core.nth.call(null,vec__29021,(1),null);
cljs.core.chunk_append.call(null,b__28994,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28993,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-toggle-signal","app.middleware.devtools/on-toggle-signal",-1714486580),signal_id], null));
});})(i__28993,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (i__28993,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function app$middleware$devtools$_view_$_iter__28991_$_iter__29022(s__29023){
return (new cljs.core.LazySeq(null,((function (i__28993,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__29023__$1 = s__29023;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__29023__$1);
if(temp__4425__auto____$1){
var s__29023__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29023__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__29023__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__29025 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__29024 = (0);
while(true){
if((i__29024 < size__17522__auto____$1)){
var map__29030 = cljs.core._nth.call(null,c__17521__auto____$1,i__29024);
var map__29030__$1 = ((((!((map__29030 == null)))?((((map__29030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29030):map__29030);
var id = cljs.core.get.call(null,map__29030__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__29030__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__29030__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__29025,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29024,i__28993,map__29030,map__29030__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__29025,s__29023__$2,temp__4425__auto____$1,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-toggle-action","app.middleware.devtools/on-toggle-action",24634702),id], null));
});})(i__29024,i__28993,map__29030,map__29030__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__29025,s__29023__$2,temp__4425__auto____$1,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29024,i__28993,map__29030,map__29030__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__29025,s__29023__$2,temp__4425__auto____$1,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-log-action-result","app.middleware.devtools/on-log-action-result",433428696),id], null));
});})(i__29024,i__28993,map__29030,map__29030__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__29025,s__29023__$2,temp__4425__auto____$1,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__29047 = (i__29024 + (1));
i__29024 = G__29047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29025),app$middleware$devtools$_view_$_iter__28991_$_iter__29022.call(null,cljs.core.chunk_rest.call(null,s__29023__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29025),null);
}
} else {
var map__29032 = cljs.core.first.call(null,s__29023__$2);
var map__29032__$1 = ((((!((map__29032 == null)))?((((map__29032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29032):map__29032);
var id = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28993,map__29032,map__29032__$1,id,enabled_QMARK_,action,s__29023__$2,temp__4425__auto____$1,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-toggle-action","app.middleware.devtools/on-toggle-action",24634702),id], null));
});})(i__28993,map__29032,map__29032__$1,id,enabled_QMARK_,action,s__29023__$2,temp__4425__auto____$1,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28993,map__29032,map__29032__$1,id,enabled_QMARK_,action,s__29023__$2,temp__4425__auto____$1,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-log-action-result","app.middleware.devtools/on-log-action-result",433428696),id], null));
});})(i__28993,map__29032,map__29032__$1,id,enabled_QMARK_,action,s__29023__$2,temp__4425__auto____$1,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),app$middleware$devtools$_view_$_iter__28991_$_iter__29022.call(null,cljs.core.rest.call(null,s__29023__$2)));
}
} else {
return null;
}
break;
}
});})(i__28993,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(i__28993,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__28993,iter__17523__auto__,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__28929_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__28929_SHARP_),signal_id);
});})(i__28993,iter__17523__auto__,vec__29021,signal_id,signal,c__17521__auto__,size__17522__auto__,b__28994,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__29048 = (i__28993 + (1));
i__28993 = G__29048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28994),app$middleware$devtools$_view_$_iter__28991.call(null,cljs.core.chunk_rest.call(null,s__28992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28994),null);
}
} else {
var vec__29034 = cljs.core.first.call(null,s__28992__$2);
var signal_id = cljs.core.nth.call(null,vec__29034,(0),null);
var signal = cljs.core.nth.call(null,vec__29034,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-toggle-signal","app.middleware.devtools/on-toggle-signal",-1714486580),signal_id], null));
});})(vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function app$middleware$devtools$_view_$_iter__28991_$_iter__29035(s__29036){
return (new cljs.core.LazySeq(null,((function (vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__29036__$1 = s__29036;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__29036__$1);
if(temp__4425__auto____$1){
var s__29036__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29036__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__29036__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__29038 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__29037 = (0);
while(true){
if((i__29037 < size__17522__auto__)){
var map__29043 = cljs.core._nth.call(null,c__17521__auto__,i__29037);
var map__29043__$1 = ((((!((map__29043 == null)))?((((map__29043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29043):map__29043);
var id = cljs.core.get.call(null,map__29043__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__29043__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__29043__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__29038,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29037,map__29043,map__29043__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__29038,s__29036__$2,temp__4425__auto____$1,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-toggle-action","app.middleware.devtools/on-toggle-action",24634702),id], null));
});})(i__29037,map__29043,map__29043__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__29038,s__29036__$2,temp__4425__auto____$1,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29037,map__29043,map__29043__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__29038,s__29036__$2,temp__4425__auto____$1,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-log-action-result","app.middleware.devtools/on-log-action-result",433428696),id], null));
});})(i__29037,map__29043,map__29043__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__29038,s__29036__$2,temp__4425__auto____$1,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__29049 = (i__29037 + (1));
i__29037 = G__29049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29038),app$middleware$devtools$_view_$_iter__28991_$_iter__29035.call(null,cljs.core.chunk_rest.call(null,s__29036__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29038),null);
}
} else {
var map__29045 = cljs.core.first.call(null,s__29036__$2);
var map__29045__$1 = ((((!((map__29045 == null)))?((((map__29045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29045):map__29045);
var id = cljs.core.get.call(null,map__29045__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__29045__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__29045__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__29045,map__29045__$1,id,enabled_QMARK_,action,s__29036__$2,temp__4425__auto____$1,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-toggle-action","app.middleware.devtools/on-toggle-action",24634702),id], null));
});})(map__29045,map__29045__$1,id,enabled_QMARK_,action,s__29036__$2,temp__4425__auto____$1,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__29045,map__29045__$1,id,enabled_QMARK_,action,s__29036__$2,temp__4425__auto____$1,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.devtools","on-log-action-result","app.middleware.devtools/on-log-action-result",433428696),id], null));
});})(map__29045,map__29045__$1,id,enabled_QMARK_,action,s__29036__$2,temp__4425__auto____$1,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),app$middleware$devtools$_view_$_iter__28991_$_iter__29035.call(null,cljs.core.rest.call(null,s__29036__$2)));
}
} else {
return null;
}
break;
}
});})(vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__28929_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__28929_SHARP_),signal_id);
});})(iter__17523__auto__,vec__29034,signal_id,signal,s__28992__$2,temp__4425__auto__,map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),app$middleware$devtools$_view_$_iter__28991.call(null,cljs.core.rest.call(null,s__28992__$2)));
}
} else {
return null;
}
break;
}
});})(map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(map__28989,map__28989__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,signal_events)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,cljs.core.deref.call(null,initial_model))], null)], null)], null);
});
app.middleware.devtools._wrap_load_from_storage = (function app$middleware$devtools$_wrap_load_from_storage(load_from_storage){
return (function app$middleware$devtools$_wrap_load_from_storage_$_wrapped_load_from_storage(loaded_model,dispatch_signal,current_model){
if(cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(loaded_model)))){
load_from_storage.call(null,cljs.core.update.call(null,loaded_model,new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820),cljs.core.merge,cljs.core.select_keys.call(null,new cljs.core.Keyword("app.middleware.devtools","debugger","app.middleware.devtools/debugger",-2140580820).cljs$core$IFn$_invoke$arity$1(current_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487)], null))),dispatch_signal,current_model);

return dispatch_signal.call(null,new cljs.core.Keyword("app.middleware.devtools","on-did-load-from-storage","app.middleware.devtools/on-did-load-from-storage",2096069882));
} else {
return null;
}
});
});
/**
 * Adds debugging capabilities to the app.
 * All signals and actions will be recorded and stored in the model.
 * After app is created use |connect-debugger-ui| for rendering the debugger.
 * For correct work it must be the last middleware wrapping the app and
 * also make sure to blacklist ::debugger key if your app uses persistence middleware.
 */
app.middleware.devtools.add_debugger = (function app$middleware$devtools$add_debugger(spec,storage,storage_key){
return app.middleware.persistence.add.call(null,app.middleware.schema.add.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),app.middleware.devtools._wrap_initial_model),new cljs.core.Keyword(null,"control","control",1892578036),app.middleware.devtools._wrap_control),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),app.middleware.devtools._wrap_reconcile),app.middleware.devtools.Schema),storage,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-wrapper","load-wrapper",-1708672591),app.middleware.devtools._wrap_load_from_storage], null));
});
/**
 * Returns [debugger-view-model debugger-view]. App spec must be wrapped by |add-debugger|.
 */
app.middleware.devtools.connect_debugger_ui = (function app$middleware$devtools$connect_debugger_ui(app__$1){
return mvsa.core.connect_ui.call(null,app__$1,app.middleware.devtools._view_model,app.middleware.devtools._view);
});

//# sourceMappingURL=devtools.js.map?rel=1456176270129