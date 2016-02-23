// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27259 = cljs.core._EQ_;
var expr__27260 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27259.call(null,"true",expr__27260))){
return true;
} else {
if(cljs.core.truth_(pred__27259.call(null,"false",expr__27260))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27260)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27262__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27263__i = 0, G__27263__a = new Array(arguments.length -  0);
while (G__27263__i < G__27263__a.length) {G__27263__a[G__27263__i] = arguments[G__27263__i + 0]; ++G__27263__i;}
  args = new cljs.core.IndexedSeq(G__27263__a,0);
} 
return G__27262__delegate.call(this,args);};
G__27262.cljs$lang$maxFixedArity = 0;
G__27262.cljs$lang$applyTo = (function (arglist__27264){
var args = cljs.core.seq(arglist__27264);
return G__27262__delegate(args);
});
G__27262.cljs$core$IFn$_invoke$arity$variadic = G__27262__delegate;
return G__27262;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27265){
var map__27268 = p__27265;
var map__27268__$1 = ((((!((map__27268 == null)))?((((map__27268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27268):map__27268);
var message = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16751__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16739__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16739__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16739__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22637__auto___27430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___27430,ch){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___27430,ch){
return (function (state_27399){
var state_val_27400 = (state_27399[(1)]);
if((state_val_27400 === (7))){
var inst_27395 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27401_27431 = state_27399__$1;
(statearr_27401_27431[(2)] = inst_27395);

(statearr_27401_27431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (1))){
var state_27399__$1 = state_27399;
var statearr_27402_27432 = state_27399__$1;
(statearr_27402_27432[(2)] = null);

(statearr_27402_27432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (4))){
var inst_27352 = (state_27399[(7)]);
var inst_27352__$1 = (state_27399[(2)]);
var state_27399__$1 = (function (){var statearr_27403 = state_27399;
(statearr_27403[(7)] = inst_27352__$1);

return statearr_27403;
})();
if(cljs.core.truth_(inst_27352__$1)){
var statearr_27404_27433 = state_27399__$1;
(statearr_27404_27433[(1)] = (5));

} else {
var statearr_27405_27434 = state_27399__$1;
(statearr_27405_27434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (15))){
var inst_27359 = (state_27399[(8)]);
var inst_27374 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27359);
var inst_27375 = cljs.core.first.call(null,inst_27374);
var inst_27376 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27375);
var inst_27377 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27376)].join('');
var inst_27378 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27377);
var state_27399__$1 = state_27399;
var statearr_27406_27435 = state_27399__$1;
(statearr_27406_27435[(2)] = inst_27378);

(statearr_27406_27435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (13))){
var inst_27383 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27407_27436 = state_27399__$1;
(statearr_27407_27436[(2)] = inst_27383);

(statearr_27407_27436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (6))){
var state_27399__$1 = state_27399;
var statearr_27408_27437 = state_27399__$1;
(statearr_27408_27437[(2)] = null);

(statearr_27408_27437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (17))){
var inst_27381 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27409_27438 = state_27399__$1;
(statearr_27409_27438[(2)] = inst_27381);

(statearr_27409_27438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (3))){
var inst_27397 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27399__$1,inst_27397);
} else {
if((state_val_27400 === (12))){
var inst_27358 = (state_27399[(9)]);
var inst_27372 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27358,opts);
var state_27399__$1 = state_27399;
if(cljs.core.truth_(inst_27372)){
var statearr_27410_27439 = state_27399__$1;
(statearr_27410_27439[(1)] = (15));

} else {
var statearr_27411_27440 = state_27399__$1;
(statearr_27411_27440[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (2))){
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27399__$1,(4),ch);
} else {
if((state_val_27400 === (11))){
var inst_27359 = (state_27399[(8)]);
var inst_27364 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27365 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27359);
var inst_27366 = cljs.core.async.timeout.call(null,(1000));
var inst_27367 = [inst_27365,inst_27366];
var inst_27368 = (new cljs.core.PersistentVector(null,2,(5),inst_27364,inst_27367,null));
var state_27399__$1 = state_27399;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27399__$1,(14),inst_27368);
} else {
if((state_val_27400 === (9))){
var inst_27359 = (state_27399[(8)]);
var inst_27385 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27386 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27359);
var inst_27387 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27386);
var inst_27388 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27387)].join('');
var inst_27389 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27388);
var state_27399__$1 = (function (){var statearr_27412 = state_27399;
(statearr_27412[(10)] = inst_27385);

return statearr_27412;
})();
var statearr_27413_27441 = state_27399__$1;
(statearr_27413_27441[(2)] = inst_27389);

(statearr_27413_27441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (5))){
var inst_27352 = (state_27399[(7)]);
var inst_27354 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27355 = (new cljs.core.PersistentArrayMap(null,2,inst_27354,null));
var inst_27356 = (new cljs.core.PersistentHashSet(null,inst_27355,null));
var inst_27357 = figwheel.client.focus_msgs.call(null,inst_27356,inst_27352);
var inst_27358 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27357);
var inst_27359 = cljs.core.first.call(null,inst_27357);
var inst_27360 = figwheel.client.autoload_QMARK_.call(null);
var state_27399__$1 = (function (){var statearr_27414 = state_27399;
(statearr_27414[(9)] = inst_27358);

(statearr_27414[(8)] = inst_27359);

return statearr_27414;
})();
if(cljs.core.truth_(inst_27360)){
var statearr_27415_27442 = state_27399__$1;
(statearr_27415_27442[(1)] = (8));

} else {
var statearr_27416_27443 = state_27399__$1;
(statearr_27416_27443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (14))){
var inst_27370 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27417_27444 = state_27399__$1;
(statearr_27417_27444[(2)] = inst_27370);

(statearr_27417_27444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (16))){
var state_27399__$1 = state_27399;
var statearr_27418_27445 = state_27399__$1;
(statearr_27418_27445[(2)] = null);

(statearr_27418_27445[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (10))){
var inst_27391 = (state_27399[(2)]);
var state_27399__$1 = (function (){var statearr_27419 = state_27399;
(statearr_27419[(11)] = inst_27391);

return statearr_27419;
})();
var statearr_27420_27446 = state_27399__$1;
(statearr_27420_27446[(2)] = null);

(statearr_27420_27446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (8))){
var inst_27358 = (state_27399[(9)]);
var inst_27362 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27358,opts);
var state_27399__$1 = state_27399;
if(cljs.core.truth_(inst_27362)){
var statearr_27421_27447 = state_27399__$1;
(statearr_27421_27447[(1)] = (11));

} else {
var statearr_27422_27448 = state_27399__$1;
(statearr_27422_27448[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});})(c__22637__auto___27430,ch))
;
return ((function (switch__22525__auto__,c__22637__auto___27430,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22526__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22526__auto____0 = (function (){
var statearr_27426 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27426[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22526__auto__);

(statearr_27426[(1)] = (1));

return statearr_27426;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22526__auto____1 = (function (state_27399){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_27399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e27427){if((e27427 instanceof Object)){
var ex__22529__auto__ = e27427;
var statearr_27428_27449 = state_27399;
(statearr_27428_27449[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27450 = state_27399;
state_27399 = G__27450;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22526__auto__ = function(state_27399){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22526__auto____1.call(this,state_27399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22526__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22526__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___27430,ch))
})();
var state__22639__auto__ = (function (){var statearr_27429 = f__22638__auto__.call(null);
(statearr_27429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___27430);

return statearr_27429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___27430,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27451_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27451_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27458 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27458){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27456 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27457 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27456,_STAR_print_newline_STAR_27457,base_path_27458){
return (function() { 
var G__27459__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27460__i = 0, G__27460__a = new Array(arguments.length -  0);
while (G__27460__i < G__27460__a.length) {G__27460__a[G__27460__i] = arguments[G__27460__i + 0]; ++G__27460__i;}
  args = new cljs.core.IndexedSeq(G__27460__a,0);
} 
return G__27459__delegate.call(this,args);};
G__27459.cljs$lang$maxFixedArity = 0;
G__27459.cljs$lang$applyTo = (function (arglist__27461){
var args = cljs.core.seq(arglist__27461);
return G__27459__delegate(args);
});
G__27459.cljs$core$IFn$_invoke$arity$variadic = G__27459__delegate;
return G__27459;
})()
;})(_STAR_print_fn_STAR_27456,_STAR_print_newline_STAR_27457,base_path_27458))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27457;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27456;
}}catch (e27455){if((e27455 instanceof Error)){
var e = e27455;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27458], null));
} else {
var e = e27455;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27458))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27462){
var map__27469 = p__27462;
var map__27469__$1 = ((((!((map__27469 == null)))?((((map__27469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27469):map__27469);
var opts = map__27469__$1;
var build_id = cljs.core.get.call(null,map__27469__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27469,map__27469__$1,opts,build_id){
return (function (p__27471){
var vec__27472 = p__27471;
var map__27473 = cljs.core.nth.call(null,vec__27472,(0),null);
var map__27473__$1 = ((((!((map__27473 == null)))?((((map__27473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27473):map__27473);
var msg = map__27473__$1;
var msg_name = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27472,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27472,map__27473,map__27473__$1,msg,msg_name,_,map__27469,map__27469__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27472,map__27473,map__27473__$1,msg,msg_name,_,map__27469,map__27469__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27469,map__27469__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27479){
var vec__27480 = p__27479;
var map__27481 = cljs.core.nth.call(null,vec__27480,(0),null);
var map__27481__$1 = ((((!((map__27481 == null)))?((((map__27481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27481):map__27481);
var msg = map__27481__$1;
var msg_name = cljs.core.get.call(null,map__27481__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27480,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27483){
var map__27493 = p__27483;
var map__27493__$1 = ((((!((map__27493 == null)))?((((map__27493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27493):map__27493);
var on_compile_warning = cljs.core.get.call(null,map__27493__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27493__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27493,map__27493__$1,on_compile_warning,on_compile_fail){
return (function (p__27495){
var vec__27496 = p__27495;
var map__27497 = cljs.core.nth.call(null,vec__27496,(0),null);
var map__27497__$1 = ((((!((map__27497 == null)))?((((map__27497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27497):map__27497);
var msg = map__27497__$1;
var msg_name = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27496,(1));
var pred__27499 = cljs.core._EQ_;
var expr__27500 = msg_name;
if(cljs.core.truth_(pred__27499.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27500))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27499.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27500))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27493,map__27493__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__,msg_hist,msg_names,msg){
return (function (state_27716){
var state_val_27717 = (state_27716[(1)]);
if((state_val_27717 === (7))){
var inst_27640 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27640)){
var statearr_27718_27764 = state_27716__$1;
(statearr_27718_27764[(1)] = (8));

} else {
var statearr_27719_27765 = state_27716__$1;
(statearr_27719_27765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (20))){
var inst_27710 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27720_27766 = state_27716__$1;
(statearr_27720_27766[(2)] = inst_27710);

(statearr_27720_27766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (27))){
var inst_27706 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27721_27767 = state_27716__$1;
(statearr_27721_27767[(2)] = inst_27706);

(statearr_27721_27767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (1))){
var inst_27633 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27633)){
var statearr_27722_27768 = state_27716__$1;
(statearr_27722_27768[(1)] = (2));

} else {
var statearr_27723_27769 = state_27716__$1;
(statearr_27723_27769[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (24))){
var inst_27708 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27724_27770 = state_27716__$1;
(statearr_27724_27770[(2)] = inst_27708);

(statearr_27724_27770[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (4))){
var inst_27714 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27716__$1,inst_27714);
} else {
if((state_val_27717 === (15))){
var inst_27712 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27725_27771 = state_27716__$1;
(statearr_27725_27771[(2)] = inst_27712);

(statearr_27725_27771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (21))){
var inst_27671 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27726_27772 = state_27716__$1;
(statearr_27726_27772[(2)] = inst_27671);

(statearr_27726_27772[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (31))){
var inst_27695 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27695)){
var statearr_27727_27773 = state_27716__$1;
(statearr_27727_27773[(1)] = (34));

} else {
var statearr_27728_27774 = state_27716__$1;
(statearr_27728_27774[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (32))){
var inst_27704 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27729_27775 = state_27716__$1;
(statearr_27729_27775[(2)] = inst_27704);

(statearr_27729_27775[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (33))){
var inst_27693 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27730_27776 = state_27716__$1;
(statearr_27730_27776[(2)] = inst_27693);

(statearr_27730_27776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (13))){
var inst_27654 = figwheel.client.heads_up.clear.call(null);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(16),inst_27654);
} else {
if((state_val_27717 === (22))){
var inst_27675 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27676 = figwheel.client.heads_up.append_message.call(null,inst_27675);
var state_27716__$1 = state_27716;
var statearr_27731_27777 = state_27716__$1;
(statearr_27731_27777[(2)] = inst_27676);

(statearr_27731_27777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (36))){
var inst_27702 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27732_27778 = state_27716__$1;
(statearr_27732_27778[(2)] = inst_27702);

(statearr_27732_27778[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (29))){
var inst_27686 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27733_27779 = state_27716__$1;
(statearr_27733_27779[(2)] = inst_27686);

(statearr_27733_27779[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (6))){
var inst_27635 = (state_27716[(7)]);
var state_27716__$1 = state_27716;
var statearr_27734_27780 = state_27716__$1;
(statearr_27734_27780[(2)] = inst_27635);

(statearr_27734_27780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (28))){
var inst_27682 = (state_27716[(2)]);
var inst_27683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27684 = figwheel.client.heads_up.display_warning.call(null,inst_27683);
var state_27716__$1 = (function (){var statearr_27735 = state_27716;
(statearr_27735[(8)] = inst_27682);

return statearr_27735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(29),inst_27684);
} else {
if((state_val_27717 === (25))){
var inst_27680 = figwheel.client.heads_up.clear.call(null);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(28),inst_27680);
} else {
if((state_val_27717 === (34))){
var inst_27697 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(37),inst_27697);
} else {
if((state_val_27717 === (17))){
var inst_27662 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27736_27781 = state_27716__$1;
(statearr_27736_27781[(2)] = inst_27662);

(statearr_27736_27781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (3))){
var inst_27652 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27652)){
var statearr_27737_27782 = state_27716__$1;
(statearr_27737_27782[(1)] = (13));

} else {
var statearr_27738_27783 = state_27716__$1;
(statearr_27738_27783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (12))){
var inst_27648 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27739_27784 = state_27716__$1;
(statearr_27739_27784[(2)] = inst_27648);

(statearr_27739_27784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (2))){
var inst_27635 = (state_27716[(7)]);
var inst_27635__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27716__$1 = (function (){var statearr_27740 = state_27716;
(statearr_27740[(7)] = inst_27635__$1);

return statearr_27740;
})();
if(cljs.core.truth_(inst_27635__$1)){
var statearr_27741_27785 = state_27716__$1;
(statearr_27741_27785[(1)] = (5));

} else {
var statearr_27742_27786 = state_27716__$1;
(statearr_27742_27786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (23))){
var inst_27678 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27678)){
var statearr_27743_27787 = state_27716__$1;
(statearr_27743_27787[(1)] = (25));

} else {
var statearr_27744_27788 = state_27716__$1;
(statearr_27744_27788[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (35))){
var state_27716__$1 = state_27716;
var statearr_27745_27789 = state_27716__$1;
(statearr_27745_27789[(2)] = null);

(statearr_27745_27789[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (19))){
var inst_27673 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27673)){
var statearr_27746_27790 = state_27716__$1;
(statearr_27746_27790[(1)] = (22));

} else {
var statearr_27747_27791 = state_27716__$1;
(statearr_27747_27791[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (11))){
var inst_27644 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27748_27792 = state_27716__$1;
(statearr_27748_27792[(2)] = inst_27644);

(statearr_27748_27792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (9))){
var inst_27646 = figwheel.client.heads_up.clear.call(null);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(12),inst_27646);
} else {
if((state_val_27717 === (5))){
var inst_27637 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27716__$1 = state_27716;
var statearr_27749_27793 = state_27716__$1;
(statearr_27749_27793[(2)] = inst_27637);

(statearr_27749_27793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (14))){
var inst_27664 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27664)){
var statearr_27750_27794 = state_27716__$1;
(statearr_27750_27794[(1)] = (18));

} else {
var statearr_27751_27795 = state_27716__$1;
(statearr_27751_27795[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (26))){
var inst_27688 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27716__$1 = state_27716;
if(cljs.core.truth_(inst_27688)){
var statearr_27752_27796 = state_27716__$1;
(statearr_27752_27796[(1)] = (30));

} else {
var statearr_27753_27797 = state_27716__$1;
(statearr_27753_27797[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (16))){
var inst_27656 = (state_27716[(2)]);
var inst_27657 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27658 = figwheel.client.format_messages.call(null,inst_27657);
var inst_27659 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27660 = figwheel.client.heads_up.display_error.call(null,inst_27658,inst_27659);
var state_27716__$1 = (function (){var statearr_27754 = state_27716;
(statearr_27754[(9)] = inst_27656);

return statearr_27754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(17),inst_27660);
} else {
if((state_val_27717 === (30))){
var inst_27690 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27691 = figwheel.client.heads_up.display_warning.call(null,inst_27690);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(33),inst_27691);
} else {
if((state_val_27717 === (10))){
var inst_27650 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27755_27798 = state_27716__$1;
(statearr_27755_27798[(2)] = inst_27650);

(statearr_27755_27798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (18))){
var inst_27666 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27667 = figwheel.client.format_messages.call(null,inst_27666);
var inst_27668 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27669 = figwheel.client.heads_up.display_error.call(null,inst_27667,inst_27668);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(21),inst_27669);
} else {
if((state_val_27717 === (37))){
var inst_27699 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27756_27799 = state_27716__$1;
(statearr_27756_27799[(2)] = inst_27699);

(statearr_27756_27799[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (8))){
var inst_27642 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(11),inst_27642);
} else {
return null;
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
}
}
}
}
}
}
}
});})(c__22637__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22525__auto__,c__22637__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto____0 = (function (){
var statearr_27760 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27760[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto__);

(statearr_27760[(1)] = (1));

return statearr_27760;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto____1 = (function (state_27716){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_27716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e27761){if((e27761 instanceof Object)){
var ex__22529__auto__ = e27761;
var statearr_27762_27800 = state_27716;
(statearr_27762_27800[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27801 = state_27716;
state_27716 = G__27801;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto__ = function(state_27716){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto____1.call(this,state_27716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__,msg_hist,msg_names,msg))
})();
var state__22639__auto__ = (function (){var statearr_27763 = f__22638__auto__.call(null);
(statearr_27763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_27763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__,msg_hist,msg_names,msg))
);

return c__22637__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22637__auto___27864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___27864,ch){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___27864,ch){
return (function (state_27847){
var state_val_27848 = (state_27847[(1)]);
if((state_val_27848 === (1))){
var state_27847__$1 = state_27847;
var statearr_27849_27865 = state_27847__$1;
(statearr_27849_27865[(2)] = null);

(statearr_27849_27865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (2))){
var state_27847__$1 = state_27847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27847__$1,(4),ch);
} else {
if((state_val_27848 === (3))){
var inst_27845 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27847__$1,inst_27845);
} else {
if((state_val_27848 === (4))){
var inst_27835 = (state_27847[(7)]);
var inst_27835__$1 = (state_27847[(2)]);
var state_27847__$1 = (function (){var statearr_27850 = state_27847;
(statearr_27850[(7)] = inst_27835__$1);

return statearr_27850;
})();
if(cljs.core.truth_(inst_27835__$1)){
var statearr_27851_27866 = state_27847__$1;
(statearr_27851_27866[(1)] = (5));

} else {
var statearr_27852_27867 = state_27847__$1;
(statearr_27852_27867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (5))){
var inst_27835 = (state_27847[(7)]);
var inst_27837 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27835);
var state_27847__$1 = state_27847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27847__$1,(8),inst_27837);
} else {
if((state_val_27848 === (6))){
var state_27847__$1 = state_27847;
var statearr_27853_27868 = state_27847__$1;
(statearr_27853_27868[(2)] = null);

(statearr_27853_27868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (7))){
var inst_27843 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
var statearr_27854_27869 = state_27847__$1;
(statearr_27854_27869[(2)] = inst_27843);

(statearr_27854_27869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (8))){
var inst_27839 = (state_27847[(2)]);
var state_27847__$1 = (function (){var statearr_27855 = state_27847;
(statearr_27855[(8)] = inst_27839);

return statearr_27855;
})();
var statearr_27856_27870 = state_27847__$1;
(statearr_27856_27870[(2)] = null);

(statearr_27856_27870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22637__auto___27864,ch))
;
return ((function (switch__22525__auto__,c__22637__auto___27864,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22526__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22526__auto____0 = (function (){
var statearr_27860 = [null,null,null,null,null,null,null,null,null];
(statearr_27860[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22526__auto__);

(statearr_27860[(1)] = (1));

return statearr_27860;
});
var figwheel$client$heads_up_plugin_$_state_machine__22526__auto____1 = (function (state_27847){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_27847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e27861){if((e27861 instanceof Object)){
var ex__22529__auto__ = e27861;
var statearr_27862_27871 = state_27847;
(statearr_27862_27871[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27872 = state_27847;
state_27847 = G__27872;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22526__auto__ = function(state_27847){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22526__auto____1.call(this,state_27847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22526__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22526__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___27864,ch))
})();
var state__22639__auto__ = (function (){var statearr_27863 = f__22638__auto__.call(null);
(statearr_27863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___27864);

return statearr_27863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___27864,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__){
return (function (state_27893){
var state_val_27894 = (state_27893[(1)]);
if((state_val_27894 === (1))){
var inst_27888 = cljs.core.async.timeout.call(null,(3000));
var state_27893__$1 = state_27893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27893__$1,(2),inst_27888);
} else {
if((state_val_27894 === (2))){
var inst_27890 = (state_27893[(2)]);
var inst_27891 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27893__$1 = (function (){var statearr_27895 = state_27893;
(statearr_27895[(7)] = inst_27890);

return statearr_27895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27893__$1,inst_27891);
} else {
return null;
}
}
});})(c__22637__auto__))
;
return ((function (switch__22525__auto__,c__22637__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22526__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22526__auto____0 = (function (){
var statearr_27899 = [null,null,null,null,null,null,null,null];
(statearr_27899[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22526__auto__);

(statearr_27899[(1)] = (1));

return statearr_27899;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22526__auto____1 = (function (state_27893){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_27893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e27900){if((e27900 instanceof Object)){
var ex__22529__auto__ = e27900;
var statearr_27901_27903 = state_27893;
(statearr_27901_27903[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27904 = state_27893;
state_27893 = G__27904;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22526__auto__ = function(state_27893){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22526__auto____1.call(this,state_27893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22526__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22526__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__))
})();
var state__22639__auto__ = (function (){var statearr_27902 = f__22638__auto__.call(null);
(statearr_27902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_27902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__))
);

return c__22637__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27905){
var map__27912 = p__27905;
var map__27912__$1 = ((((!((map__27912 == null)))?((((map__27912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27912):map__27912);
var ed = map__27912__$1;
var formatted_exception = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27914_27918 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27915_27919 = null;
var count__27916_27920 = (0);
var i__27917_27921 = (0);
while(true){
if((i__27917_27921 < count__27916_27920)){
var msg_27922 = cljs.core._nth.call(null,chunk__27915_27919,i__27917_27921);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27922);

var G__27923 = seq__27914_27918;
var G__27924 = chunk__27915_27919;
var G__27925 = count__27916_27920;
var G__27926 = (i__27917_27921 + (1));
seq__27914_27918 = G__27923;
chunk__27915_27919 = G__27924;
count__27916_27920 = G__27925;
i__27917_27921 = G__27926;
continue;
} else {
var temp__4425__auto___27927 = cljs.core.seq.call(null,seq__27914_27918);
if(temp__4425__auto___27927){
var seq__27914_27928__$1 = temp__4425__auto___27927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27914_27928__$1)){
var c__17554__auto___27929 = cljs.core.chunk_first.call(null,seq__27914_27928__$1);
var G__27930 = cljs.core.chunk_rest.call(null,seq__27914_27928__$1);
var G__27931 = c__17554__auto___27929;
var G__27932 = cljs.core.count.call(null,c__17554__auto___27929);
var G__27933 = (0);
seq__27914_27918 = G__27930;
chunk__27915_27919 = G__27931;
count__27916_27920 = G__27932;
i__27917_27921 = G__27933;
continue;
} else {
var msg_27934 = cljs.core.first.call(null,seq__27914_27928__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27934);

var G__27935 = cljs.core.next.call(null,seq__27914_27928__$1);
var G__27936 = null;
var G__27937 = (0);
var G__27938 = (0);
seq__27914_27918 = G__27935;
chunk__27915_27919 = G__27936;
count__27916_27920 = G__27937;
i__27917_27921 = G__27938;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27939){
var map__27942 = p__27939;
var map__27942__$1 = ((((!((map__27942 == null)))?((((map__27942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27942):map__27942);
var w = map__27942__$1;
var message = cljs.core.get.call(null,map__27942__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16739__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16739__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16739__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27950 = cljs.core.seq.call(null,plugins);
var chunk__27951 = null;
var count__27952 = (0);
var i__27953 = (0);
while(true){
if((i__27953 < count__27952)){
var vec__27954 = cljs.core._nth.call(null,chunk__27951,i__27953);
var k = cljs.core.nth.call(null,vec__27954,(0),null);
var plugin = cljs.core.nth.call(null,vec__27954,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27956 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27950,chunk__27951,count__27952,i__27953,pl_27956,vec__27954,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27956.call(null,msg_hist);
});})(seq__27950,chunk__27951,count__27952,i__27953,pl_27956,vec__27954,k,plugin))
);
} else {
}

var G__27957 = seq__27950;
var G__27958 = chunk__27951;
var G__27959 = count__27952;
var G__27960 = (i__27953 + (1));
seq__27950 = G__27957;
chunk__27951 = G__27958;
count__27952 = G__27959;
i__27953 = G__27960;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27950);
if(temp__4425__auto__){
var seq__27950__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27950__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27950__$1);
var G__27961 = cljs.core.chunk_rest.call(null,seq__27950__$1);
var G__27962 = c__17554__auto__;
var G__27963 = cljs.core.count.call(null,c__17554__auto__);
var G__27964 = (0);
seq__27950 = G__27961;
chunk__27951 = G__27962;
count__27952 = G__27963;
i__27953 = G__27964;
continue;
} else {
var vec__27955 = cljs.core.first.call(null,seq__27950__$1);
var k = cljs.core.nth.call(null,vec__27955,(0),null);
var plugin = cljs.core.nth.call(null,vec__27955,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27965 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27950,chunk__27951,count__27952,i__27953,pl_27965,vec__27955,k,plugin,seq__27950__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27965.call(null,msg_hist);
});})(seq__27950,chunk__27951,count__27952,i__27953,pl_27965,vec__27955,k,plugin,seq__27950__$1,temp__4425__auto__))
);
} else {
}

var G__27966 = cljs.core.next.call(null,seq__27950__$1);
var G__27967 = null;
var G__27968 = (0);
var G__27969 = (0);
seq__27950 = G__27966;
chunk__27951 = G__27967;
count__27952 = G__27968;
i__27953 = G__27969;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27970 = [];
var len__17809__auto___27973 = arguments.length;
var i__17810__auto___27974 = (0);
while(true){
if((i__17810__auto___27974 < len__17809__auto___27973)){
args27970.push((arguments[i__17810__auto___27974]));

var G__27975 = (i__17810__auto___27974 + (1));
i__17810__auto___27974 = G__27975;
continue;
} else {
}
break;
}

var G__27972 = args27970.length;
switch (G__27972) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27970.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17816__auto__ = [];
var len__17809__auto___27981 = arguments.length;
var i__17810__auto___27982 = (0);
while(true){
if((i__17810__auto___27982 < len__17809__auto___27981)){
args__17816__auto__.push((arguments[i__17810__auto___27982]));

var G__27983 = (i__17810__auto___27982 + (1));
i__17810__auto___27982 = G__27983;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27978){
var map__27979 = p__27978;
var map__27979__$1 = ((((!((map__27979 == null)))?((((map__27979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27979):map__27979);
var opts = map__27979__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27977){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27977));
});

//# sourceMappingURL=client.js.map?rel=1456018618858