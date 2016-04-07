// Compiled by ClojureScript 1.7.228 {}
goog.provide('middleware.devtools');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('middleware.schema');
goog.require('middleware.persistence');
goog.require('goog.ui.KeyboardShortcutHandler');
goog.require('schema.core');
goog.require('goog.ui.KeyboardShortcutHandler.EventType');
goog.require('reagent.core');
goog.require('reagent_mvsa.core');
goog.require('cljs.pprint');
goog.require('cljsjs.jquery_ui');
goog.require('devtools.core');
goog.require('cljs.core.match');
goog.require('goog.events');
goog.require('cljsjs.filesaverjs');
devtools.core.enable_feature_BANG_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
devtools.core.install_BANG_.call(null);
middleware.devtools.Schema = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Int,"id",schema.core.Any,"signal")], null),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),schema.core.Int,new cljs.core.Keyword(null,"action-events","action-events",1949072282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Int,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),schema.core.Int,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),schema.core.Bool,new cljs.core.Keyword(null,"action","action",-811238024),schema.core.Any,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null)], null),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),schema.core.Int,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),schema.core.Bool,new cljs.core.Keyword(null,"visible?","visible?",2129863715),schema.core.Bool,new cljs.core.Keyword(null,"toggle-visibility-shortcut","toggle-visibility-shortcut",-28694948),schema.core.Str], null),schema.core.Any,schema.core.Any], true, false);
middleware.devtools._wrap_initial_model = (function middleware$devtools$_wrap_initial_model(app_initial_model,toggle_visibility_shortcut){
return cljs.core.assoc.call(null,app_initial_model,new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),app_initial_model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),(0),new cljs.core.Keyword(null,"action-events","action-events",1949072282),null,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),(0),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),false,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true,new cljs.core.Keyword(null,"toggle-visibility-shortcut","toggle-visibility-shortcut",-28694948),toggle_visibility_shortcut], null));
});
middleware.devtools._signal_event = (function middleware$devtools$_signal_event(id,signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,signal], null);
});
middleware.devtools._action_event = (function middleware$devtools$_action_event(signal_id,id,action,result){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
});
middleware.devtools._update_action_events_STAR_ = (function middleware$devtools$_update_action_events_STAR_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___94992 = arguments.length;
var i__19358__auto___94993 = (0);
while(true){
if((i__19358__auto___94993 < len__19357__auto___94992)){
args__19364__auto__.push((arguments[i__19358__auto___94993]));

var G__94994 = (i__19358__auto___94993 + (1));
i__19358__auto___94993 = G__94994;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((3) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((3)),(0))):null);
return middleware.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19365__auto__);
});

middleware.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__94987_SHARP_){
return cljs.core.apply.call(null,f,p1__94987_SHARP_,args);
}),model);
});

middleware.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

middleware.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq94988){
var G__94989 = cljs.core.first.call(null,seq94988);
var seq94988__$1 = cljs.core.next.call(null,seq94988);
var G__94990 = cljs.core.first.call(null,seq94988__$1);
var seq94988__$2 = cljs.core.next.call(null,seq94988__$1);
var G__94991 = cljs.core.first.call(null,seq94988__$2);
var seq94988__$3 = cljs.core.next.call(null,seq94988__$2);
return middleware.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__94989,G__94990,G__94991,seq94988__$3);
});
middleware.devtools._update_action_event = (function middleware$devtools$_update_action_event(var_args){
var args__19364__auto__ = [];
var len__19357__auto___95000 = arguments.length;
var i__19358__auto___95001 = (0);
while(true){
if((i__19358__auto___95001 < len__19357__auto___95000)){
args__19364__auto__.push((arguments[i__19358__auto___95001]));

var G__95002 = (i__19358__auto___95001 + (1));
i__19358__auto___95001 = G__95002;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((3) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((3)),(0))):null);
return middleware.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19365__auto__);
});

middleware.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,middleware.devtools._update_action_events_STAR_,model,(function (p1__94995_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__94995_SHARP_),id);
}),f,args);
});

middleware.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

middleware.devtools._update_action_event.cljs$lang$applyTo = (function (seq94996){
var G__94997 = cljs.core.first.call(null,seq94996);
var seq94996__$1 = cljs.core.next.call(null,seq94996);
var G__94998 = cljs.core.first.call(null,seq94996__$1);
var seq94996__$2 = cljs.core.next.call(null,seq94996__$1);
var G__94999 = cljs.core.first.call(null,seq94996__$2);
var seq94996__$3 = cljs.core.next.call(null,seq94996__$2);
return middleware.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__94997,G__94998,G__94999,seq94996__$3);
});
middleware.devtools._find_signal = (function middleware$devtools$_find_signal(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__95003_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__95003_SHARP_),id);
}),new cljs.core.Keyword(null,"signal-events","signal-events",555073244).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model))));
});
middleware.devtools._find_action = (function middleware$devtools$_find_action(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__95004_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__95004_SHARP_),id);
}),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model))));
});
/**
 * Uses filesaverjs lib.
 */
middleware.devtools._save_file = (function middleware$devtools$_save_file(filename,content){
var blob = (new Blob(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/plain;charset=UTF-8"], null))));
return saveAs(blob,filename);
});
middleware.devtools._wrap_control = (function middleware$devtools$_wrap_control(app_control,toggle_visibility_shortcut){
var unlisten_shortcuts = cljs.core.atom.call(null,null);
return ((function (unlisten_shortcuts){
return (function middleware$devtools$_wrap_control_$_control(model,signal,dispatch_signal,dispatch_action){
var record_and_dispatch_to_app = ((function (unlisten_shortcuts){
return (function middleware$devtools$_wrap_control_$_control_$_record_and_dispatch_to_app(signal__$1){
var vec__95088 = middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model))),signal__$1);
var signal_id = cljs.core.nth.call(null,vec__95088,(0),null);
var _ = cljs.core.nth.call(null,vec__95088,(1),null);
var signal_event = vec__95088;
dispatch_action.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","record-signal-event","middleware.devtools/record-signal-event",-1950910665),signal_event], null));

return app_control.call(null,model,signal__$1,dispatch_signal,((function (vec__95088,signal_id,_,signal_event,unlisten_shortcuts){
return (function (p1__95005_SHARP_){
return dispatch_action.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373),signal_id,p1__95005_SHARP_], null));
});})(vec__95088,signal_id,_,signal_event,unlisten_shortcuts))
);
});})(unlisten_shortcuts))
;
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-start","on-start",-1839785985))){
record_and_dispatch_to_app.call(null,new cljs.core.Keyword(null,"on-start","on-start",-1839785985));

var shortcut_handler = (new goog.ui.KeyboardShortcutHandler(document));
var key = goog.events.listen(shortcut_handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,((function (shortcut_handler,unlisten_shortcuts){
return (function (p1__95006_SHARP_){
if(cljs.core._EQ_.call(null,p1__95006_SHARP_.identifier,toggle_visibility_shortcut)){
return dispatch_signal.call(null,new cljs.core.Keyword("middleware.devtools","on-toggle-visibility","middleware.devtools/on-toggle-visibility",2074676886));
} else {
return null;
}
});})(shortcut_handler,unlisten_shortcuts))
);
cljs.core.reset_BANG_.call(null,unlisten_shortcuts,((function (shortcut_handler,key,unlisten_shortcuts){
return (function (){
return goog.events.unlistenByKey(key);
});})(shortcut_handler,key,unlisten_shortcuts))
);

return shortcut_handler.registerShortcut(toggle_visibility_shortcut,toggle_visibility_shortcut);
} else {
throw cljs.core.match.backtrack;

}
}catch (e95094){if((e95094 instanceof Error)){
var e__22955__auto__ = e95094;
if((e__22955__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515))){

return record_and_dispatch_to_app.call(null,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95095){if((e95095 instanceof Error)){
var e__22955__auto____$1 = e95095;
if((e__22955__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("middleware.devtools","on-did-load-from-storage","middleware.devtools/on-did-load-from-storage",-668655291))){
return dispatch_action.call(null,new cljs.core.Keyword("middleware.devtools","replay","middleware.devtools/replay",-1867690775));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95096){if((e95096 instanceof Error)){
var e__22955__auto____$2 = e95096;
if((e__22955__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__95090 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__95090,new cljs.core.Keyword("middleware.devtools","on-toggle-signal","middleware.devtools/on-toggle-signal",-1353195651))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch_action.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","toggle-signal","middleware.devtools/toggle-signal",-1453573423),id], null));

return dispatch_action.call(null,new cljs.core.Keyword("middleware.devtools","replay","middleware.devtools/replay",-1867690775));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95108){if((e95108 instanceof Error)){
var e__22955__auto____$3 = e95108;
if((e__22955__auto____$3 === cljs.core.match.backtrack)){
try{var signal_0__95090 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__95090,new cljs.core.Keyword("middleware.devtools","on-toggle-action","middleware.devtools/on-toggle-action",944521471))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch_action.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","toggle-action","middleware.devtools/toggle-action",-1866218949),id], null));

return dispatch_action.call(null,new cljs.core.Keyword("middleware.devtools","replay","middleware.devtools/replay",-1867690775));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95109){if((e95109 instanceof Error)){
var e__22955__auto____$4 = e95109;
if((e__22955__auto____$4 === cljs.core.match.backtrack)){
try{var signal_0__95090 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__95090,new cljs.core.Keyword("middleware.devtools","on-log-action-result","middleware.devtools/on-log-action-result",-83741277))){
var id = cljs.core.nth.call(null,signal,(1));
return cljs.core.println.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(middleware.devtools._find_action.call(null,cljs.core.deref.call(null,model),id))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95110){if((e95110 instanceof Error)){
var e__22955__auto____$5 = e95110;
if((e__22955__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$5;
}
} else {
throw e95110;

}
}} else {
throw e__22955__auto____$4;
}
} else {
throw e95109;

}
}} else {
throw e__22955__auto____$3;
}
} else {
throw e95108;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e95097){if((e95097 instanceof Error)){
var e__22955__auto____$3 = e95097;
if((e__22955__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("middleware.devtools","on-toggle-persist","middleware.devtools/on-toggle-persist",597929544))){
return dispatch_action.call(null,new cljs.core.Keyword("middleware.devtools","toggle-persist","middleware.devtools/toggle-persist",668126780));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95098){if((e95098 instanceof Error)){
var e__22955__auto____$4 = e95098;
if((e__22955__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("middleware.devtools","on-vacuum","middleware.devtools/on-vacuum",-1501197599))){
return dispatch_action.call(null,new cljs.core.Keyword("middleware.devtools","vacuum","middleware.devtools/vacuum",1391022632));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95099){if((e95099 instanceof Error)){
var e__22955__auto____$5 = e95099;
if((e__22955__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("middleware.devtools","on-clear","middleware.devtools/on-clear",821050949))){
return dispatch_action.call(null,new cljs.core.Keyword("middleware.devtools","clear","middleware.devtools/clear",1000857981));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95100){if((e95100 instanceof Error)){
var e__22955__auto____$6 = e95100;
if((e__22955__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("middleware.devtools","on-reset","middleware.devtools/on-reset",501212015))){
dispatch_action.call(null,new cljs.core.Keyword("middleware.devtools","clear-history","middleware.devtools/clear-history",884520937));

return dispatch_action.call(null,new cljs.core.Keyword("middleware.devtools","replay","middleware.devtools/replay",-1867690775));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95101){if((e95101 instanceof Error)){
var e__22955__auto____$7 = e95101;
if((e__22955__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("middleware.devtools","on-toggle-visibility","middleware.devtools/on-toggle-visibility",2074676886))){
return dispatch_action.call(null,new cljs.core.Keyword("middleware.devtools","toggle-visibility","middleware.devtools/toggle-visibility",1220383860));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95102){if((e95102 instanceof Error)){
var e__22955__auto____$8 = e95102;
if((e__22955__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("middleware.devtools","on-save","middleware.devtools/on-save",-1273110324))){
return middleware.devtools._save_file.call(null,"debugger-session.txt",(function (){var sb__19273__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_95106_95111 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_95107_95112 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_95106_95111,_STAR_print_fn_STAR_95107_95112,sb__19273__auto__,e__22955__auto____$8,e__22955__auto____$7,e__22955__auto____$6,e__22955__auto____$5,e__22955__auto____$4,e__22955__auto____$3,e__22955__auto____$2,e__22955__auto____$1,e__22955__auto__,unlisten_shortcuts){
return (function (x__19274__auto__){
return sb__19273__auto__.append(x__19274__auto__);
});})(_STAR_print_newline_STAR_95106_95111,_STAR_print_fn_STAR_95107_95112,sb__19273__auto__,e__22955__auto____$8,e__22955__auto____$7,e__22955__auto____$6,e__22955__auto____$5,e__22955__auto____$4,e__22955__auto____$3,e__22955__auto____$2,e__22955__auto____$1,e__22955__auto__,unlisten_shortcuts))
;

try{cljs.pprint.pprint.call(null,cljs.core.deref.call(null,model));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_95107_95112;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_95106_95111;
}
return [cljs.core.str(sb__19273__auto__)].join('');
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e95103){if((e95103 instanceof Error)){
var e__22955__auto____$9 = e95103;
if((e__22955__auto____$9 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__95092 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__95092,new cljs.core.Keyword("middleware.devtools","on-load","middleware.devtools/on-load",419436972))){
var content = cljs.core.nth.call(null,signal,(1));
return dispatch_action.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","load","middleware.devtools/load",-852905574),cljs.reader.read_string.call(null,content)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e95105){if((e95105 instanceof Error)){
var e__22955__auto____$10 = e95105;
if((e__22955__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$10;
}
} else {
throw e95105;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e95104){if((e95104 instanceof Error)){
var e__22955__auto____$10 = e95104;
if((e__22955__auto____$10 === cljs.core.match.backtrack)){
return record_and_dispatch_to_app.call(null,signal);
} else {
throw e__22955__auto____$10;
}
} else {
throw e95104;

}
}} else {
throw e__22955__auto____$9;
}
} else {
throw e95103;

}
}} else {
throw e__22955__auto____$8;
}
} else {
throw e95102;

}
}} else {
throw e__22955__auto____$7;
}
} else {
throw e95101;

}
}} else {
throw e__22955__auto____$6;
}
} else {
throw e95100;

}
}} else {
throw e__22955__auto____$5;
}
} else {
throw e95099;

}
}} else {
throw e__22955__auto____$4;
}
} else {
throw e95098;

}
}} else {
throw e__22955__auto____$3;
}
} else {
throw e95097;

}
}} else {
throw e__22955__auto____$2;
}
} else {
throw e95096;

}
}} else {
throw e__22955__auto____$1;
}
} else {
throw e95095;

}
}} else {
throw e__22955__auto__;
}
} else {
throw e95094;

}
}});
;})(unlisten_shortcuts))
});
/**
 * Orphaned signal has no actions.
 */
middleware.devtools._orphaned_signal_QMARK_ = (function middleware$devtools$_orphaned_signal_QMARK_(model,p__95114){
var vec__95116 = p__95114;
var signal_id = cljs.core.nth.call(null,vec__95116,(0),null);
var _ = cljs.core.nth.call(null,vec__95116,(1),null);
var _signal_ = vec__95116;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__95116,signal_id,_,_signal_){
return (function (p1__95113_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__95113_SHARP_),signal_id);
});})(vec__95116,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model))));
});
middleware.devtools._wrap_reconcile = (function middleware$devtools$_wrap_reconcile(app_reconcile){
return (function middleware$devtools$_wrap_reconcile_$_reconcile(model,action){
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","clear-history","middleware.devtools/clear-history",884520937))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.List.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),cljs.core.List.EMPTY);
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__95215 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__95215,new cljs.core.Keyword("middleware.devtools","record-signal-event","middleware.devtools/record-signal-event",-1950910665))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc);
} else {
var action_0__95215__$1 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__95215__$1,new cljs.core.Keyword("middleware.devtools","toggle-signal","middleware.devtools/toggle-signal",-1453573423))){
var id = cljs.core.nth.call(null,action,(1));
var all_actions_enabled_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.filter.call(null,((function (id,action_0__95215__$1,action_0__95215){
return (function (p1__95117_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__95117_SHARP_),id);
});})(id,action_0__95215__$1,action_0__95215))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model))));
return middleware.devtools._update_action_events_STAR_.call(null,model,((function (all_actions_enabled_QMARK_,id,action_0__95215__$1,action_0__95215){
return (function (p1__95118_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__95118_SHARP_),id);
});})(all_actions_enabled_QMARK_,id,action_0__95215__$1,action_0__95215))
,cljs.core.assoc,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(all_actions_enabled_QMARK_));
} else {
var action_0__95215__$2 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__95215__$2,new cljs.core.Keyword("middleware.devtools","toggle-action","middleware.devtools/toggle-action",-1866218949))){
var id = cljs.core.nth.call(null,action,(1));
return middleware.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","replay","middleware.devtools/replay",-1867690775))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)));
var new_model = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model));
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4655__auto__)){
var map__95233 = temp__4655__auto__;
var map__95233__$1 = ((((!((map__95233 == null)))?((((map__95233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__95233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__95233):map__95233);
var id = cljs.core.get.call(null,map__95233__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__95233__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__95245 = cljs.core.rest.call(null,action_events);
var G__95246 = (function (){var m = new_model;
var m__$1 = app_reconcile.call(null,m,action__$1);
return middleware.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775)));
})();
action_events = G__95245;
new_model = G__95246;
continue;
} else {
return new_model;
}
break;
}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","toggle-persist","middleware.devtools/toggle-persist",668126780))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"persist?","persist?",-1772568760)], null),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","vacuum","middleware.devtools/vacuum",1391022632))){
var m = model;
var m__$1 = cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),((function (m,action_0__95215__$2,action_0__95215__$1,action_0__95215){
return (function (p1__95119_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__95119_SHARP_);
});})(m,action_0__95215__$2,action_0__95215__$1,action_0__95215))
);
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),((function (m,m__$1,action_0__95215__$2,action_0__95215__$1,action_0__95215){
return (function (p1__95120_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,middleware.devtools._orphaned_signal_QMARK_,m__$1),p1__95120_SHARP_);
});})(m,m__$1,action_0__95215__$2,action_0__95215__$1,action_0__95215))
);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","clear","middleware.devtools/clear",1000857981))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),null);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","toggle-visibility","middleware.devtools/toggle-visibility",1220383860))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),cljs.core.not);
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__95217 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__95217,new cljs.core.Keyword("middleware.devtools","load","middleware.devtools/load",-852905574))){
var new_model = cljs.core.nth.call(null,action,(1));
return new_model;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__95219 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__95219,new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
if(cljs.core.truth_(middleware.devtools._find_signal.call(null,model,signal_id))){
var m = model;
var m__$1 = app_reconcile.call(null,m,a);
var m__$2 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(m__$1)),a,cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775)))], null));
return cljs.core.update_in.call(null,m__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492)], null),cljs.core.inc);
} else {
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,model,a);
}
} else {
var vec__95235 = middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","unknown-signal","middleware.devtools/unknown-signal",158037017));
var signal_id = cljs.core.nth.call(null,vec__95235,(0),null);
var _ = cljs.core.nth.call(null,vec__95235,(1),null);
var unknown_signal_event = vec__95235;
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373),signal_id,action], null));

}
} else {
var vec__95236 = middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","unknown-signal","middleware.devtools/unknown-signal",158037017));
var signal_id = cljs.core.nth.call(null,vec__95236,(0),null);
var _ = cljs.core.nth.call(null,vec__95236,(1),null);
var unknown_signal_event = vec__95236;
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373),signal_id,action], null));

}

}
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__95222 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__95222,new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
if(cljs.core.truth_(middleware.devtools._find_signal.call(null,model,signal_id))){
var m = model;
var m__$1 = app_reconcile.call(null,m,a);
var m__$2 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(m__$1)),a,cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775)))], null));
return cljs.core.update_in.call(null,m__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492)], null),cljs.core.inc);
} else {
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,model,a);
}
} else {
var vec__95237 = middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","unknown-signal","middleware.devtools/unknown-signal",158037017));
var signal_id = cljs.core.nth.call(null,vec__95237,(0),null);
var _ = cljs.core.nth.call(null,vec__95237,(1),null);
var unknown_signal_event = vec__95237;
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373),signal_id,action], null));

}
} else {
var vec__95238 = middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","unknown-signal","middleware.devtools/unknown-signal",158037017));
var signal_id = cljs.core.nth.call(null,vec__95238,(0),null);
var _ = cljs.core.nth.call(null,vec__95238,(1),null);
var unknown_signal_event = vec__95238;
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373),signal_id,action], null));

}

}

}

}

}

}

}

}

}

}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","replay","middleware.devtools/replay",-1867690775))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)));
var new_model = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model));
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4655__auto__)){
var map__95239 = temp__4655__auto__;
var map__95239__$1 = ((((!((map__95239 == null)))?((((map__95239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__95239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__95239):map__95239);
var id = cljs.core.get.call(null,map__95239__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__95239__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__95247 = cljs.core.rest.call(null,action_events);
var G__95248 = (function (){var m = new_model;
var m__$1 = app_reconcile.call(null,m,action__$1);
return middleware.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775)));
})();
action_events = G__95247;
new_model = G__95248;
continue;
} else {
return new_model;
}
break;
}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","toggle-persist","middleware.devtools/toggle-persist",668126780))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"persist?","persist?",-1772568760)], null),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","vacuum","middleware.devtools/vacuum",1391022632))){
var m = model;
var m__$1 = cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),((function (m){
return (function (p1__95119_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__95119_SHARP_);
});})(m))
);
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),((function (m,m__$1){
return (function (p1__95120_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,middleware.devtools._orphaned_signal_QMARK_,m__$1),p1__95120_SHARP_);
});})(m,m__$1))
);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","clear","middleware.devtools/clear",1000857981))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),null);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("middleware.devtools","toggle-visibility","middleware.devtools/toggle-visibility",1220383860))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),cljs.core.not);
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__95225 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__95225,new cljs.core.Keyword("middleware.devtools","load","middleware.devtools/load",-852905574))){
var new_model = cljs.core.nth.call(null,action,(1));
return new_model;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__95227 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__95227,new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
if(cljs.core.truth_(middleware.devtools._find_signal.call(null,model,signal_id))){
var m = model;
var m__$1 = app_reconcile.call(null,m,a);
var m__$2 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(m__$1)),a,cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775)))], null));
return cljs.core.update_in.call(null,m__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492)], null),cljs.core.inc);
} else {
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,model,a);
}
} else {
var vec__95241 = middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","unknown-signal","middleware.devtools/unknown-signal",158037017));
var signal_id = cljs.core.nth.call(null,vec__95241,(0),null);
var _ = cljs.core.nth.call(null,vec__95241,(1),null);
var unknown_signal_event = vec__95241;
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373),signal_id,action], null));

}
} else {
var vec__95242 = middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","unknown-signal","middleware.devtools/unknown-signal",158037017));
var signal_id = cljs.core.nth.call(null,vec__95242,(0),null);
var _ = cljs.core.nth.call(null,vec__95242,(1),null);
var unknown_signal_event = vec__95242;
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373),signal_id,action], null));

}

}
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__95230 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__95230,new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
if(cljs.core.truth_(middleware.devtools._find_signal.call(null,model,signal_id))){
var m = model;
var m__$1 = app_reconcile.call(null,m,a);
var m__$2 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(m__$1)),a,cljs.core.dissoc.call(null,m__$1,new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775)))], null));
return cljs.core.update_in.call(null,m__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492)], null),cljs.core.inc);
} else {
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,model,a);
}
} else {
var vec__95243 = middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","unknown-signal","middleware.devtools/unknown-signal",158037017));
var signal_id = cljs.core.nth.call(null,vec__95243,(0),null);
var _ = cljs.core.nth.call(null,vec__95243,(1),null);
var unknown_signal_event = vec__95243;
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373),signal_id,action], null));

}
} else {
var vec__95244 = middleware.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword("middleware.devtools","unknown-signal","middleware.devtools/unknown-signal",158037017));
var signal_id = cljs.core.nth.call(null,vec__95244,(0),null);
var _ = cljs.core.nth.call(null,vec__95244,(1),null);
var unknown_signal_event = vec__95244;
return middleware$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"signal-events","signal-events",555073244)], null),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","app-action","middleware.devtools/app-action",-198690373),signal_id,action], null));

}

}

}

}

}

}

}

}

}
});
});
middleware.devtools._view_model = (function middleware$devtools$_view_model(model){
return reagent_mvsa.core.track_keys.call(null,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
})),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"toggle-visibility-shortcut","toggle-visibility-shortcut",-28694948),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null));
});
middleware.devtools._menu_button_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],["white","inherit","bold","none","pointer","4px",(0),"3px","inherit","5px 3px"]);
middleware.devtools._menu_button = (function middleware$devtools$_menu_button(caption,on_click,title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),middleware.devtools._menu_button_style,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),caption], null);
});
/**
 * Styled file input which invokes the callback with loaded file content.
 */
middleware.devtools._menu_file_selector = (function middleware$devtools$_menu_file_selector(caption,on_load,title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),middleware.devtools._menu_button_style,new cljs.core.Keyword(null,"title","title",636505583),title], null),caption,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var file = cljs.core.first.call(null,cljs.core.array_seq.call(null,e.target.files));
var file_reader = (new FileReader());
file_reader.onload = ((function (file,file_reader){
return (function (p1__95249_SHARP_){
return on_load.call(null,p1__95249_SHARP_.target.result);
});})(file,file_reader))
;

return file_reader.readAsText(file);
}),new cljs.core.Keyword(null,"value","value",305978217),""], null)], null)], null);
});
middleware.devtools._menu = (function middleware$devtools$_menu(persist_QMARK_,toggle_visibility_shortcut,dispatch){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._menu_button,"Clear",(function (){
return dispatch.call(null,new cljs.core.Keyword("middleware.devtools","on-clear","middleware.devtools/on-clear",821050949));
}),"Clears debugger history"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._menu_button,"Vacuum",(function (){
return dispatch.call(null,new cljs.core.Keyword("middleware.devtools","on-vacuum","middleware.devtools/on-vacuum",-1501197599));
}),"Removes disabled actions and signals with no actions from history"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._menu_button,"Reset",(function (){
return dispatch.call(null,new cljs.core.Keyword("middleware.devtools","on-reset","middleware.devtools/on-reset",501212015));
}),"Removes all actions and signals resetting the model to initial state"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._menu_button,"Save",(function (){
return dispatch.call(null,new cljs.core.Keyword("middleware.devtools","on-save","middleware.devtools/on-save",-1273110324));
}),"Saves current debugger session into file"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._menu_file_selector,"Load",(function (p1__95250_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-load","middleware.devtools/on-load",419436972),p1__95250_SHARP_], null));
}),"Loads debugger session from file"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._menu_button,"Hide",(function (){
return dispatch.call(null,new cljs.core.Keyword("middleware.devtools","on-toggle-visibility","middleware.devtools/on-toggle-visibility",2074676886));
}),[cljs.core.str("Hides debugger view ("),cljs.core.str(toggle_visibility_shortcut),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px"], null)], null),"Persist",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Persist debug session into local storage?",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),persist_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword("middleware.devtools","on-toggle-persist","middleware.devtools/on-toggle-persist",597929544));
})], null)], null)], null)], null);
});
middleware.devtools._signals_view = (function middleware$devtools$_signals_view(signal_events,action_events,dispatch){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__19071__auto__ = (function middleware$devtools$_signals_view_$_iter__95308(s__95309){
return (new cljs.core.LazySeq(null,(function (){
var s__95309__$1 = s__95309;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__95309__$1);
if(temp__4657__auto__){
var s__95309__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__95309__$2)){
var c__19069__auto__ = cljs.core.chunk_first.call(null,s__95309__$2);
var size__19070__auto__ = cljs.core.count.call(null,c__19069__auto__);
var b__95311 = cljs.core.chunk_buffer.call(null,size__19070__auto__);
if((function (){var i__95310 = (0);
while(true){
if((i__95310 < size__19070__auto__)){
var vec__95338 = cljs.core._nth.call(null,c__19069__auto__,i__95310);
var signal_id = cljs.core.nth.call(null,vec__95338,(0),null);
var signal = cljs.core.nth.call(null,vec__95338,(1),null);
cljs.core.chunk_append.call(null,b__95311,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__95310,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-toggle-signal","middleware.devtools/on-toggle-signal",-1353195651),signal_id], null));
});})(i__95310,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"signal ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__19071__auto__ = ((function (i__95310,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__){
return (function middleware$devtools$_signals_view_$_iter__95308_$_iter__95339(s__95340){
return (new cljs.core.LazySeq(null,((function (i__95310,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__){
return (function (){
var s__95340__$1 = s__95340;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__95340__$1);
if(temp__4657__auto____$1){
var s__95340__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__95340__$2)){
var c__19069__auto____$1 = cljs.core.chunk_first.call(null,s__95340__$2);
var size__19070__auto____$1 = cljs.core.count.call(null,c__19069__auto____$1);
var b__95342 = cljs.core.chunk_buffer.call(null,size__19070__auto____$1);
if((function (){var i__95341 = (0);
while(true){
if((i__95341 < size__19070__auto____$1)){
var map__95347 = cljs.core._nth.call(null,c__19069__auto____$1,i__95341);
var map__95347__$1 = ((((!((map__95347 == null)))?((((map__95347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__95347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__95347):map__95347);
var id = cljs.core.get.call(null,map__95347__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__95347__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__95347__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__95342,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"20px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__95341,i__95310,map__95347,map__95347__$1,id,enabled_QMARK_,action,c__19069__auto____$1,size__19070__auto____$1,b__95342,s__95340__$2,temp__4657__auto____$1,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-toggle-action","middleware.devtools/on-toggle-action",944521471),id], null));
});})(i__95341,i__95310,map__95347,map__95347__$1,id,enabled_QMARK_,action,c__19069__auto____$1,size__19070__auto____$1,b__95342,s__95340__$2,temp__4657__auto____$1,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__95341,i__95310,map__95347,map__95347__$1,id,enabled_QMARK_,action,c__19069__auto____$1,size__19070__auto____$1,b__95342,s__95340__$2,temp__4657__auto____$1,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-log-action-result","middleware.devtools/on-log-action-result",-83741277),id], null));
});})(i__95341,i__95310,map__95347,map__95347__$1,id,enabled_QMARK_,action,c__19069__auto____$1,size__19070__auto____$1,b__95342,s__95340__$2,temp__4657__auto____$1,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__95364 = (i__95341 + (1));
i__95341 = G__95364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95342),middleware$devtools$_signals_view_$_iter__95308_$_iter__95339.call(null,cljs.core.chunk_rest.call(null,s__95340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95342),null);
}
} else {
var map__95349 = cljs.core.first.call(null,s__95340__$2);
var map__95349__$1 = ((((!((map__95349 == null)))?((((map__95349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__95349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__95349):map__95349);
var id = cljs.core.get.call(null,map__95349__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__95349__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__95349__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"20px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__95310,map__95349,map__95349__$1,id,enabled_QMARK_,action,s__95340__$2,temp__4657__auto____$1,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-toggle-action","middleware.devtools/on-toggle-action",944521471),id], null));
});})(i__95310,map__95349,map__95349__$1,id,enabled_QMARK_,action,s__95340__$2,temp__4657__auto____$1,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__95310,map__95349,map__95349__$1,id,enabled_QMARK_,action,s__95340__$2,temp__4657__auto____$1,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-log-action-result","middleware.devtools/on-log-action-result",-83741277),id], null));
});})(i__95310,map__95349,map__95349__$1,id,enabled_QMARK_,action,s__95340__$2,temp__4657__auto____$1,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),middleware$devtools$_signals_view_$_iter__95308_$_iter__95339.call(null,cljs.core.rest.call(null,s__95340__$2)));
}
} else {
return null;
}
break;
}
});})(i__95310,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__))
,null,null));
});})(i__95310,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__))
;
return iter__19071__auto__.call(null,cljs.core.filter.call(null,((function (i__95310,iter__19071__auto__,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__){
return (function (p1__95251_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__95251_SHARP_),signal_id);
});})(i__95310,iter__19071__auto__,vec__95338,signal_id,signal,c__19069__auto__,size__19070__auto__,b__95311,s__95309__$2,temp__4657__auto__))
,action_events));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__95365 = (i__95310 + (1));
i__95310 = G__95365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95311),middleware$devtools$_signals_view_$_iter__95308.call(null,cljs.core.chunk_rest.call(null,s__95309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95311),null);
}
} else {
var vec__95351 = cljs.core.first.call(null,s__95309__$2);
var signal_id = cljs.core.nth.call(null,vec__95351,(0),null);
var signal = cljs.core.nth.call(null,vec__95351,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-toggle-signal","middleware.devtools/on-toggle-signal",-1353195651),signal_id], null));
});})(vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"signal ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__19071__auto__ = ((function (vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__){
return (function middleware$devtools$_signals_view_$_iter__95308_$_iter__95352(s__95353){
return (new cljs.core.LazySeq(null,((function (vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__){
return (function (){
var s__95353__$1 = s__95353;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__95353__$1);
if(temp__4657__auto____$1){
var s__95353__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__95353__$2)){
var c__19069__auto__ = cljs.core.chunk_first.call(null,s__95353__$2);
var size__19070__auto__ = cljs.core.count.call(null,c__19069__auto__);
var b__95355 = cljs.core.chunk_buffer.call(null,size__19070__auto__);
if((function (){var i__95354 = (0);
while(true){
if((i__95354 < size__19070__auto__)){
var map__95360 = cljs.core._nth.call(null,c__19069__auto__,i__95354);
var map__95360__$1 = ((((!((map__95360 == null)))?((((map__95360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__95360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__95360):map__95360);
var id = cljs.core.get.call(null,map__95360__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__95360__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__95360__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__95355,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"20px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__95354,map__95360,map__95360__$1,id,enabled_QMARK_,action,c__19069__auto__,size__19070__auto__,b__95355,s__95353__$2,temp__4657__auto____$1,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-toggle-action","middleware.devtools/on-toggle-action",944521471),id], null));
});})(i__95354,map__95360,map__95360__$1,id,enabled_QMARK_,action,c__19069__auto__,size__19070__auto__,b__95355,s__95353__$2,temp__4657__auto____$1,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__95354,map__95360,map__95360__$1,id,enabled_QMARK_,action,c__19069__auto__,size__19070__auto__,b__95355,s__95353__$2,temp__4657__auto____$1,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-log-action-result","middleware.devtools/on-log-action-result",-83741277),id], null));
});})(i__95354,map__95360,map__95360__$1,id,enabled_QMARK_,action,c__19069__auto__,size__19070__auto__,b__95355,s__95353__$2,temp__4657__auto____$1,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__95366 = (i__95354 + (1));
i__95354 = G__95366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95355),middleware$devtools$_signals_view_$_iter__95308_$_iter__95352.call(null,cljs.core.chunk_rest.call(null,s__95353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95355),null);
}
} else {
var map__95362 = cljs.core.first.call(null,s__95353__$2);
var map__95362__$1 = ((((!((map__95362 == null)))?((((map__95362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__95362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__95362):map__95362);
var id = cljs.core.get.call(null,map__95362__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__95362__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__95362__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"20px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__95362,map__95362__$1,id,enabled_QMARK_,action,s__95353__$2,temp__4657__auto____$1,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-toggle-action","middleware.devtools/on-toggle-action",944521471),id], null));
});})(map__95362,map__95362__$1,id,enabled_QMARK_,action,s__95353__$2,temp__4657__auto____$1,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__95362,map__95362__$1,id,enabled_QMARK_,action,s__95353__$2,temp__4657__auto____$1,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.devtools","on-log-action-result","middleware.devtools/on-log-action-result",-83741277),id], null));
});})(map__95362,map__95362__$1,id,enabled_QMARK_,action,s__95353__$2,temp__4657__auto____$1,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),middleware$devtools$_signals_view_$_iter__95308_$_iter__95352.call(null,cljs.core.rest.call(null,s__95353__$2)));
}
} else {
return null;
}
break;
}
});})(vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__))
,null,null));
});})(vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__))
;
return iter__19071__auto__.call(null,cljs.core.filter.call(null,((function (iter__19071__auto__,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__){
return (function (p1__95251_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__95251_SHARP_),signal_id);
});})(iter__19071__auto__,vec__95351,signal_id,signal,s__95309__$2,temp__4657__auto__))
,action_events));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),middleware$devtools$_signals_view_$_iter__95308.call(null,cljs.core.rest.call(null,s__95309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19071__auto__.call(null,cljs.core.reverse.call(null,signal_events));
})())], null);
});
middleware.devtools._initial_model_view = (function middleware$devtools$_initial_model_view(initial_model){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,initial_model)], null)], null);
});
/**
 * Uses jQuery UI.
 */
middleware.devtools._resizable_div = (function middleware$devtools$_resizable_div(var_args){
var args__19364__auto__ = [];
var len__19357__auto___95369 = arguments.length;
var i__19358__auto___95370 = (0);
while(true){
if((i__19358__auto___95370 < len__19357__auto___95369)){
args__19364__auto__.push((arguments[i__19358__auto___95370]));

var G__95371 = (i__19358__auto___95370 + (1));
i__19358__auto___95370 = G__95371;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((1) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((1)),(0))):null);
return middleware.devtools._resizable_div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19365__auto__);
});

middleware.devtools._resizable_div.cljs$core$IFn$_invoke$arity$variadic = (function (_attrs,_body){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__95372__delegate = function (attrs,body){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs], null),body);
};
var G__95372 = function (attrs,var_args){
var body = null;
if (arguments.length > 1) {
var G__95373__i = 0, G__95373__a = new Array(arguments.length -  1);
while (G__95373__i < G__95373__a.length) {G__95373__a[G__95373__i] = arguments[G__95373__i + 1]; ++G__95373__i;}
  body = new cljs.core.IndexedSeq(G__95373__a,0);
} 
return G__95372__delegate.call(this,attrs,body);};
G__95372.cljs$lang$maxFixedArity = 1;
G__95372.cljs$lang$applyTo = (function (arglist__95374){
var attrs = cljs.core.first(arglist__95374);
var body = cljs.core.rest(arglist__95374);
return G__95372__delegate(attrs,body);
});
G__95372.cljs$core$IFn$_invoke$arity$variadic = G__95372__delegate;
return G__95372;
})()
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return $(reagent.core.dom_node.call(null,this$)).resizable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",402978600),(25),new cljs.core.Keyword(null,"handles","handles",-1061347879),"n, e, s, w, ne, se, sw, nw"], null)));
})], null));
});

middleware.devtools._resizable_div.cljs$lang$maxFixedArity = (1);

middleware.devtools._resizable_div.cljs$lang$applyTo = (function (seq95367){
var G__95368 = cljs.core.first.call(null,seq95367);
var seq95367__$1 = cljs.core.next.call(null,seq95367);
return middleware.devtools._resizable_div.cljs$core$IFn$_invoke$arity$variadic(G__95368,seq95367__$1);
});
middleware.devtools._overlay = (function middleware$devtools$_overlay(var_args){
var args__19364__auto__ = [];
var len__19357__auto___95376 = arguments.length;
var i__19358__auto___95377 = (0);
while(true){
if((i__19358__auto___95377 < len__19357__auto___95376)){
args__19364__auto__.push((arguments[i__19358__auto___95377]));

var G__95378 = (i__19358__auto___95377 + (1));
i__19358__auto___95377 = G__95378;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return middleware.devtools._overlay.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

middleware.devtools._overlay.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null)], null),body);
});

middleware.devtools._overlay.cljs$lang$maxFixedArity = (0);

middleware.devtools._overlay.cljs$lang$applyTo = (function (seq95375){
return middleware.devtools._overlay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq95375));
});
middleware.devtools._view = (function middleware$devtools$_view(p__95379,dispatch){
var map__95382 = p__95379;
var map__95382__$1 = ((((!((map__95382 == null)))?((((map__95382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__95382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__95382):map__95382);
var _view_model = map__95382__$1;
var visible_QMARK_ = cljs.core.get.call(null,map__95382__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var toggle_visibility_shortcut = cljs.core.get.call(null,map__95382__$1,new cljs.core.Keyword(null,"toggle-visibility-shortcut","toggle-visibility-shortcut",-28694948));
var persist_QMARK_ = cljs.core.get.call(null,map__95382__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760));
var initial_model = cljs.core.get.call(null,map__95382__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var signal_events = cljs.core.get.call(null,map__95382__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244));
var action_events = cljs.core.get.call(null,map__95382__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._overlay,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._resizable_div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.deref.call(null,visible_QMARK_))?"block":"none"),new cljs.core.Keyword(null,"left","left",-399115937),"70%",new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"all"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"-webkit-font-smoothing","-webkit-font-smoothing",2011296782),new cljs.core.Keyword(null,"font-smoothing","font-smoothing",481364784),new cljs.core.Keyword(null,"-moz-font-smoothing","-moz-font-smoothing",-1507856844),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],["1.4em","white",(14),"auto","#2A2F3A","antialiased","antialiased","antialiased","sans-serif","100%"])], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._menu,cljs.core.deref.call(null,persist_QMARK_),cljs.core.deref.call(null,toggle_visibility_shortcut),dispatch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._signals_view,cljs.core.deref.call(null,signal_events),cljs.core.deref.call(null,action_events),dispatch], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware.devtools._initial_model_view,cljs.core.deref.call(null,initial_model)], null)], null)], null)], null);
});
middleware.devtools._wrap_load_from_storage = (function middleware$devtools$_wrap_load_from_storage(load_from_storage){
return (function middleware$devtools$_wrap_load_from_storage_$_wrapped_load_from_storage(model,loaded_model,dispatch_signal){
if(cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(loaded_model)))){
var loaded_model__$1 = cljs.core.update.call(null,loaded_model,new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775),cljs.core.merge,cljs.core.select_keys.call(null,new cljs.core.Keyword("middleware.devtools","debugger","middleware.devtools/debugger",1805512775).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487)], null)));
load_from_storage.call(null,model,loaded_model__$1,dispatch_signal);

return dispatch_signal.call(null,new cljs.core.Keyword("middleware.devtools","on-did-load-from-storage","middleware.devtools/on-did-load-from-storage",-668655291));
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
 * 
 * Custom keyboard shortcut can toggle the visibility.
 */
middleware.devtools.add_debugger = (function middleware$devtools$add_debugger(var_args){
var args95384 = [];
var len__19357__auto___95387 = arguments.length;
var i__19358__auto___95388 = (0);
while(true){
if((i__19358__auto___95388 < len__19357__auto___95387)){
args95384.push((arguments[i__19358__auto___95388]));

var G__95389 = (i__19358__auto___95388 + (1));
i__19358__auto___95388 = G__95389;
continue;
} else {
}
break;
}

var G__95386 = args95384.length;
switch (G__95386) {
case 3:
return middleware.devtools.add_debugger.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return middleware.devtools.add_debugger.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args95384.length)].join('')));

}
});

middleware.devtools.add_debugger.cljs$core$IFn$_invoke$arity$3 = (function (spec,storage,storage_key){
return middleware.devtools.add_debugger.call(null,spec,storage,storage_key,"ctrl+h");
});

middleware.devtools.add_debugger.cljs$core$IFn$_invoke$arity$4 = (function (spec,storage,storage_key,toggle_visibility_shortcut){
return middleware.persistence.add.call(null,middleware.schema.add.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),middleware.devtools._wrap_initial_model,toggle_visibility_shortcut),new cljs.core.Keyword(null,"control","control",1892578036),middleware.devtools._wrap_control,toggle_visibility_shortcut),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),middleware.devtools._wrap_reconcile),middleware.devtools.Schema),storage,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-wrapper","load-wrapper",-1708672591),middleware.devtools._wrap_load_from_storage], null));
});

middleware.devtools.add_debugger.cljs$lang$maxFixedArity = 4;
/**
 * Returns [debugger-view-model debugger-view]. App spec must be wrapped by |add-debugger|.
 *   Debugger view is resizable.
 */
middleware.devtools.connect_debugger_ui = (function middleware$devtools$connect_debugger_ui(app__$1){
return reagent_mvsa.core.connect_ui.call(null,app__$1,middleware.devtools._view_model,middleware.devtools._view);
});

//# sourceMappingURL=devtools.js.map?rel=1460037795619