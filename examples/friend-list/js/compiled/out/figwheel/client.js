// Compiled by ClojureScript 1.7.228 {}
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
var pred__92634 = cljs.core._EQ_;
var expr__92635 = (function (){var or__18298__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e92638){if((e92638 instanceof Error)){
var e = e92638;
return false;
} else {
throw e92638;

}
}})();
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__92634.call(null,"true",expr__92635))){
return true;
} else {
if(cljs.core.truth_(pred__92634.call(null,"false",expr__92635))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__92635)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e92640){if((e92640 instanceof Error)){
var e = e92640;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e92640;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19364__auto__ = [];
var len__19357__auto___92642 = arguments.length;
var i__19358__auto___92643 = (0);
while(true){
if((i__19358__auto___92643 < len__19357__auto___92642)){
args__19364__auto__.push((arguments[i__19358__auto___92643]));

var G__92644 = (i__19358__auto___92643 + (1));
i__19358__auto___92643 = G__92644;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq92641){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92641));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__92645){
var map__92648 = p__92645;
var map__92648__$1 = ((((!((map__92648 == null)))?((((map__92648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92648):map__92648);
var message = cljs.core.get.call(null,map__92648__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__92648__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18298__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18286__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18286__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18286__auto__;
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
var c__25154__auto___92810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___92810,ch){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___92810,ch){
return (function (state_92779){
var state_val_92780 = (state_92779[(1)]);
if((state_val_92780 === (7))){
var inst_92775 = (state_92779[(2)]);
var state_92779__$1 = state_92779;
var statearr_92781_92811 = state_92779__$1;
(statearr_92781_92811[(2)] = inst_92775);

(statearr_92781_92811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (1))){
var state_92779__$1 = state_92779;
var statearr_92782_92812 = state_92779__$1;
(statearr_92782_92812[(2)] = null);

(statearr_92782_92812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (4))){
var inst_92732 = (state_92779[(7)]);
var inst_92732__$1 = (state_92779[(2)]);
var state_92779__$1 = (function (){var statearr_92783 = state_92779;
(statearr_92783[(7)] = inst_92732__$1);

return statearr_92783;
})();
if(cljs.core.truth_(inst_92732__$1)){
var statearr_92784_92813 = state_92779__$1;
(statearr_92784_92813[(1)] = (5));

} else {
var statearr_92785_92814 = state_92779__$1;
(statearr_92785_92814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (15))){
var inst_92739 = (state_92779[(8)]);
var inst_92754 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_92739);
var inst_92755 = cljs.core.first.call(null,inst_92754);
var inst_92756 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_92755);
var inst_92757 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_92756)].join('');
var inst_92758 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_92757);
var state_92779__$1 = state_92779;
var statearr_92786_92815 = state_92779__$1;
(statearr_92786_92815[(2)] = inst_92758);

(statearr_92786_92815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (13))){
var inst_92763 = (state_92779[(2)]);
var state_92779__$1 = state_92779;
var statearr_92787_92816 = state_92779__$1;
(statearr_92787_92816[(2)] = inst_92763);

(statearr_92787_92816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (6))){
var state_92779__$1 = state_92779;
var statearr_92788_92817 = state_92779__$1;
(statearr_92788_92817[(2)] = null);

(statearr_92788_92817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (17))){
var inst_92761 = (state_92779[(2)]);
var state_92779__$1 = state_92779;
var statearr_92789_92818 = state_92779__$1;
(statearr_92789_92818[(2)] = inst_92761);

(statearr_92789_92818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (3))){
var inst_92777 = (state_92779[(2)]);
var state_92779__$1 = state_92779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92779__$1,inst_92777);
} else {
if((state_val_92780 === (12))){
var inst_92738 = (state_92779[(9)]);
var inst_92752 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_92738,opts);
var state_92779__$1 = state_92779;
if(cljs.core.truth_(inst_92752)){
var statearr_92790_92819 = state_92779__$1;
(statearr_92790_92819[(1)] = (15));

} else {
var statearr_92791_92820 = state_92779__$1;
(statearr_92791_92820[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (2))){
var state_92779__$1 = state_92779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92779__$1,(4),ch);
} else {
if((state_val_92780 === (11))){
var inst_92739 = (state_92779[(8)]);
var inst_92744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92745 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_92739);
var inst_92746 = cljs.core.async.timeout.call(null,(1000));
var inst_92747 = [inst_92745,inst_92746];
var inst_92748 = (new cljs.core.PersistentVector(null,2,(5),inst_92744,inst_92747,null));
var state_92779__$1 = state_92779;
return cljs.core.async.ioc_alts_BANG_.call(null,state_92779__$1,(14),inst_92748);
} else {
if((state_val_92780 === (9))){
var inst_92739 = (state_92779[(8)]);
var inst_92765 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_92766 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_92739);
var inst_92767 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_92766);
var inst_92768 = [cljs.core.str("Not loading: "),cljs.core.str(inst_92767)].join('');
var inst_92769 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_92768);
var state_92779__$1 = (function (){var statearr_92792 = state_92779;
(statearr_92792[(10)] = inst_92765);

return statearr_92792;
})();
var statearr_92793_92821 = state_92779__$1;
(statearr_92793_92821[(2)] = inst_92769);

(statearr_92793_92821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (5))){
var inst_92732 = (state_92779[(7)]);
var inst_92734 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_92735 = (new cljs.core.PersistentArrayMap(null,2,inst_92734,null));
var inst_92736 = (new cljs.core.PersistentHashSet(null,inst_92735,null));
var inst_92737 = figwheel.client.focus_msgs.call(null,inst_92736,inst_92732);
var inst_92738 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_92737);
var inst_92739 = cljs.core.first.call(null,inst_92737);
var inst_92740 = figwheel.client.autoload_QMARK_.call(null);
var state_92779__$1 = (function (){var statearr_92794 = state_92779;
(statearr_92794[(9)] = inst_92738);

(statearr_92794[(8)] = inst_92739);

return statearr_92794;
})();
if(cljs.core.truth_(inst_92740)){
var statearr_92795_92822 = state_92779__$1;
(statearr_92795_92822[(1)] = (8));

} else {
var statearr_92796_92823 = state_92779__$1;
(statearr_92796_92823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (14))){
var inst_92750 = (state_92779[(2)]);
var state_92779__$1 = state_92779;
var statearr_92797_92824 = state_92779__$1;
(statearr_92797_92824[(2)] = inst_92750);

(statearr_92797_92824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (16))){
var state_92779__$1 = state_92779;
var statearr_92798_92825 = state_92779__$1;
(statearr_92798_92825[(2)] = null);

(statearr_92798_92825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (10))){
var inst_92771 = (state_92779[(2)]);
var state_92779__$1 = (function (){var statearr_92799 = state_92779;
(statearr_92799[(11)] = inst_92771);

return statearr_92799;
})();
var statearr_92800_92826 = state_92779__$1;
(statearr_92800_92826[(2)] = null);

(statearr_92800_92826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92780 === (8))){
var inst_92738 = (state_92779[(9)]);
var inst_92742 = figwheel.client.reload_file_state_QMARK_.call(null,inst_92738,opts);
var state_92779__$1 = state_92779;
if(cljs.core.truth_(inst_92742)){
var statearr_92801_92827 = state_92779__$1;
(statearr_92801_92827[(1)] = (11));

} else {
var statearr_92802_92828 = state_92779__$1;
(statearr_92802_92828[(1)] = (12));

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
});})(c__25154__auto___92810,ch))
;
return ((function (switch__25133__auto__,c__25154__auto___92810,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25134__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25134__auto____0 = (function (){
var statearr_92806 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92806[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25134__auto__);

(statearr_92806[(1)] = (1));

return statearr_92806;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25134__auto____1 = (function (state_92779){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_92779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e92807){if((e92807 instanceof Object)){
var ex__25137__auto__ = e92807;
var statearr_92808_92829 = state_92779;
(statearr_92808_92829[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92830 = state_92779;
state_92779 = G__92830;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25134__auto__ = function(state_92779){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25134__auto____1.call(this,state_92779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25134__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25134__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___92810,ch))
})();
var state__25156__auto__ = (function (){var statearr_92809 = f__25155__auto__.call(null);
(statearr_92809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___92810);

return statearr_92809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___92810,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__92831_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__92831_SHARP_));
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
var base_path_92838 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_92838){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_92836 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_92837 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_92837;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_92836;
}}catch (e92835){if((e92835 instanceof Error)){
var e = e92835;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_92838], null));
} else {
var e = e92835;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_92838))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__92839){
var map__92846 = p__92839;
var map__92846__$1 = ((((!((map__92846 == null)))?((((map__92846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92846):map__92846);
var opts = map__92846__$1;
var build_id = cljs.core.get.call(null,map__92846__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__92846,map__92846__$1,opts,build_id){
return (function (p__92848){
var vec__92849 = p__92848;
var map__92850 = cljs.core.nth.call(null,vec__92849,(0),null);
var map__92850__$1 = ((((!((map__92850 == null)))?((((map__92850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92850):map__92850);
var msg = map__92850__$1;
var msg_name = cljs.core.get.call(null,map__92850__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__92849,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__92849,map__92850,map__92850__$1,msg,msg_name,_,map__92846,map__92846__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__92849,map__92850,map__92850__$1,msg,msg_name,_,map__92846,map__92846__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__92846,map__92846__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__92856){
var vec__92857 = p__92856;
var map__92858 = cljs.core.nth.call(null,vec__92857,(0),null);
var map__92858__$1 = ((((!((map__92858 == null)))?((((map__92858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92858):map__92858);
var msg = map__92858__$1;
var msg_name = cljs.core.get.call(null,map__92858__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__92857,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__92860){
var map__92870 = p__92860;
var map__92870__$1 = ((((!((map__92870 == null)))?((((map__92870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92870):map__92870);
var on_compile_warning = cljs.core.get.call(null,map__92870__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__92870__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__92870,map__92870__$1,on_compile_warning,on_compile_fail){
return (function (p__92872){
var vec__92873 = p__92872;
var map__92874 = cljs.core.nth.call(null,vec__92873,(0),null);
var map__92874__$1 = ((((!((map__92874 == null)))?((((map__92874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92874):map__92874);
var msg = map__92874__$1;
var msg_name = cljs.core.get.call(null,map__92874__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__92873,(1));
var pred__92876 = cljs.core._EQ_;
var expr__92877 = msg_name;
if(cljs.core.truth_(pred__92876.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__92877))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__92876.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__92877))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__92870,map__92870__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__,msg_hist,msg_names,msg){
return (function (state_93093){
var state_val_93094 = (state_93093[(1)]);
if((state_val_93094 === (7))){
var inst_93017 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
if(cljs.core.truth_(inst_93017)){
var statearr_93095_93141 = state_93093__$1;
(statearr_93095_93141[(1)] = (8));

} else {
var statearr_93096_93142 = state_93093__$1;
(statearr_93096_93142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (20))){
var inst_93087 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93097_93143 = state_93093__$1;
(statearr_93097_93143[(2)] = inst_93087);

(statearr_93097_93143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (27))){
var inst_93083 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93098_93144 = state_93093__$1;
(statearr_93098_93144[(2)] = inst_93083);

(statearr_93098_93144[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (1))){
var inst_93010 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_93093__$1 = state_93093;
if(cljs.core.truth_(inst_93010)){
var statearr_93099_93145 = state_93093__$1;
(statearr_93099_93145[(1)] = (2));

} else {
var statearr_93100_93146 = state_93093__$1;
(statearr_93100_93146[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (24))){
var inst_93085 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93101_93147 = state_93093__$1;
(statearr_93101_93147[(2)] = inst_93085);

(statearr_93101_93147[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (4))){
var inst_93091 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93093__$1,inst_93091);
} else {
if((state_val_93094 === (15))){
var inst_93089 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93102_93148 = state_93093__$1;
(statearr_93102_93148[(2)] = inst_93089);

(statearr_93102_93148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (21))){
var inst_93048 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93103_93149 = state_93093__$1;
(statearr_93103_93149[(2)] = inst_93048);

(statearr_93103_93149[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (31))){
var inst_93072 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_93093__$1 = state_93093;
if(cljs.core.truth_(inst_93072)){
var statearr_93104_93150 = state_93093__$1;
(statearr_93104_93150[(1)] = (34));

} else {
var statearr_93105_93151 = state_93093__$1;
(statearr_93105_93151[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (32))){
var inst_93081 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93106_93152 = state_93093__$1;
(statearr_93106_93152[(2)] = inst_93081);

(statearr_93106_93152[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (33))){
var inst_93070 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93107_93153 = state_93093__$1;
(statearr_93107_93153[(2)] = inst_93070);

(statearr_93107_93153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (13))){
var inst_93031 = figwheel.client.heads_up.clear.call(null);
var state_93093__$1 = state_93093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93093__$1,(16),inst_93031);
} else {
if((state_val_93094 === (22))){
var inst_93052 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_93053 = figwheel.client.heads_up.append_message.call(null,inst_93052);
var state_93093__$1 = state_93093;
var statearr_93108_93154 = state_93093__$1;
(statearr_93108_93154[(2)] = inst_93053);

(statearr_93108_93154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (36))){
var inst_93079 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93109_93155 = state_93093__$1;
(statearr_93109_93155[(2)] = inst_93079);

(statearr_93109_93155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (29))){
var inst_93063 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93110_93156 = state_93093__$1;
(statearr_93110_93156[(2)] = inst_93063);

(statearr_93110_93156[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (6))){
var inst_93012 = (state_93093[(7)]);
var state_93093__$1 = state_93093;
var statearr_93111_93157 = state_93093__$1;
(statearr_93111_93157[(2)] = inst_93012);

(statearr_93111_93157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (28))){
var inst_93059 = (state_93093[(2)]);
var inst_93060 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_93061 = figwheel.client.heads_up.display_warning.call(null,inst_93060);
var state_93093__$1 = (function (){var statearr_93112 = state_93093;
(statearr_93112[(8)] = inst_93059);

return statearr_93112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93093__$1,(29),inst_93061);
} else {
if((state_val_93094 === (25))){
var inst_93057 = figwheel.client.heads_up.clear.call(null);
var state_93093__$1 = state_93093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93093__$1,(28),inst_93057);
} else {
if((state_val_93094 === (34))){
var inst_93074 = figwheel.client.heads_up.flash_loaded.call(null);
var state_93093__$1 = state_93093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93093__$1,(37),inst_93074);
} else {
if((state_val_93094 === (17))){
var inst_93039 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93113_93158 = state_93093__$1;
(statearr_93113_93158[(2)] = inst_93039);

(statearr_93113_93158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (3))){
var inst_93029 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_93093__$1 = state_93093;
if(cljs.core.truth_(inst_93029)){
var statearr_93114_93159 = state_93093__$1;
(statearr_93114_93159[(1)] = (13));

} else {
var statearr_93115_93160 = state_93093__$1;
(statearr_93115_93160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (12))){
var inst_93025 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93116_93161 = state_93093__$1;
(statearr_93116_93161[(2)] = inst_93025);

(statearr_93116_93161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (2))){
var inst_93012 = (state_93093[(7)]);
var inst_93012__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_93093__$1 = (function (){var statearr_93117 = state_93093;
(statearr_93117[(7)] = inst_93012__$1);

return statearr_93117;
})();
if(cljs.core.truth_(inst_93012__$1)){
var statearr_93118_93162 = state_93093__$1;
(statearr_93118_93162[(1)] = (5));

} else {
var statearr_93119_93163 = state_93093__$1;
(statearr_93119_93163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (23))){
var inst_93055 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_93093__$1 = state_93093;
if(cljs.core.truth_(inst_93055)){
var statearr_93120_93164 = state_93093__$1;
(statearr_93120_93164[(1)] = (25));

} else {
var statearr_93121_93165 = state_93093__$1;
(statearr_93121_93165[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (35))){
var state_93093__$1 = state_93093;
var statearr_93122_93166 = state_93093__$1;
(statearr_93122_93166[(2)] = null);

(statearr_93122_93166[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (19))){
var inst_93050 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_93093__$1 = state_93093;
if(cljs.core.truth_(inst_93050)){
var statearr_93123_93167 = state_93093__$1;
(statearr_93123_93167[(1)] = (22));

} else {
var statearr_93124_93168 = state_93093__$1;
(statearr_93124_93168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (11))){
var inst_93021 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93125_93169 = state_93093__$1;
(statearr_93125_93169[(2)] = inst_93021);

(statearr_93125_93169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (9))){
var inst_93023 = figwheel.client.heads_up.clear.call(null);
var state_93093__$1 = state_93093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93093__$1,(12),inst_93023);
} else {
if((state_val_93094 === (5))){
var inst_93014 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_93093__$1 = state_93093;
var statearr_93126_93170 = state_93093__$1;
(statearr_93126_93170[(2)] = inst_93014);

(statearr_93126_93170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (14))){
var inst_93041 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_93093__$1 = state_93093;
if(cljs.core.truth_(inst_93041)){
var statearr_93127_93171 = state_93093__$1;
(statearr_93127_93171[(1)] = (18));

} else {
var statearr_93128_93172 = state_93093__$1;
(statearr_93128_93172[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (26))){
var inst_93065 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_93093__$1 = state_93093;
if(cljs.core.truth_(inst_93065)){
var statearr_93129_93173 = state_93093__$1;
(statearr_93129_93173[(1)] = (30));

} else {
var statearr_93130_93174 = state_93093__$1;
(statearr_93130_93174[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (16))){
var inst_93033 = (state_93093[(2)]);
var inst_93034 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_93035 = figwheel.client.format_messages.call(null,inst_93034);
var inst_93036 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_93037 = figwheel.client.heads_up.display_error.call(null,inst_93035,inst_93036);
var state_93093__$1 = (function (){var statearr_93131 = state_93093;
(statearr_93131[(9)] = inst_93033);

return statearr_93131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93093__$1,(17),inst_93037);
} else {
if((state_val_93094 === (30))){
var inst_93067 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_93068 = figwheel.client.heads_up.display_warning.call(null,inst_93067);
var state_93093__$1 = state_93093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93093__$1,(33),inst_93068);
} else {
if((state_val_93094 === (10))){
var inst_93027 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93132_93175 = state_93093__$1;
(statearr_93132_93175[(2)] = inst_93027);

(statearr_93132_93175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (18))){
var inst_93043 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_93044 = figwheel.client.format_messages.call(null,inst_93043);
var inst_93045 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_93046 = figwheel.client.heads_up.display_error.call(null,inst_93044,inst_93045);
var state_93093__$1 = state_93093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93093__$1,(21),inst_93046);
} else {
if((state_val_93094 === (37))){
var inst_93076 = (state_93093[(2)]);
var state_93093__$1 = state_93093;
var statearr_93133_93176 = state_93093__$1;
(statearr_93133_93176[(2)] = inst_93076);

(statearr_93133_93176[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93094 === (8))){
var inst_93019 = figwheel.client.heads_up.flash_loaded.call(null);
var state_93093__$1 = state_93093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93093__$1,(11),inst_93019);
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
});})(c__25154__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25133__auto__,c__25154__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto____0 = (function (){
var statearr_93137 = [null,null,null,null,null,null,null,null,null,null];
(statearr_93137[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto__);

(statearr_93137[(1)] = (1));

return statearr_93137;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto____1 = (function (state_93093){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_93093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e93138){if((e93138 instanceof Object)){
var ex__25137__auto__ = e93138;
var statearr_93139_93177 = state_93093;
(statearr_93139_93177[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93178 = state_93093;
state_93093 = G__93178;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto__ = function(state_93093){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto____1.call(this,state_93093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__,msg_hist,msg_names,msg))
})();
var state__25156__auto__ = (function (){var statearr_93140 = f__25155__auto__.call(null);
(statearr_93140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_93140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__,msg_hist,msg_names,msg))
);

return c__25154__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25154__auto___93241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___93241,ch){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___93241,ch){
return (function (state_93224){
var state_val_93225 = (state_93224[(1)]);
if((state_val_93225 === (1))){
var state_93224__$1 = state_93224;
var statearr_93226_93242 = state_93224__$1;
(statearr_93226_93242[(2)] = null);

(statearr_93226_93242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93225 === (2))){
var state_93224__$1 = state_93224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93224__$1,(4),ch);
} else {
if((state_val_93225 === (3))){
var inst_93222 = (state_93224[(2)]);
var state_93224__$1 = state_93224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93224__$1,inst_93222);
} else {
if((state_val_93225 === (4))){
var inst_93212 = (state_93224[(7)]);
var inst_93212__$1 = (state_93224[(2)]);
var state_93224__$1 = (function (){var statearr_93227 = state_93224;
(statearr_93227[(7)] = inst_93212__$1);

return statearr_93227;
})();
if(cljs.core.truth_(inst_93212__$1)){
var statearr_93228_93243 = state_93224__$1;
(statearr_93228_93243[(1)] = (5));

} else {
var statearr_93229_93244 = state_93224__$1;
(statearr_93229_93244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93225 === (5))){
var inst_93212 = (state_93224[(7)]);
var inst_93214 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_93212);
var state_93224__$1 = state_93224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93224__$1,(8),inst_93214);
} else {
if((state_val_93225 === (6))){
var state_93224__$1 = state_93224;
var statearr_93230_93245 = state_93224__$1;
(statearr_93230_93245[(2)] = null);

(statearr_93230_93245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93225 === (7))){
var inst_93220 = (state_93224[(2)]);
var state_93224__$1 = state_93224;
var statearr_93231_93246 = state_93224__$1;
(statearr_93231_93246[(2)] = inst_93220);

(statearr_93231_93246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93225 === (8))){
var inst_93216 = (state_93224[(2)]);
var state_93224__$1 = (function (){var statearr_93232 = state_93224;
(statearr_93232[(8)] = inst_93216);

return statearr_93232;
})();
var statearr_93233_93247 = state_93224__$1;
(statearr_93233_93247[(2)] = null);

(statearr_93233_93247[(1)] = (2));


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
});})(c__25154__auto___93241,ch))
;
return ((function (switch__25133__auto__,c__25154__auto___93241,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25134__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25134__auto____0 = (function (){
var statearr_93237 = [null,null,null,null,null,null,null,null,null];
(statearr_93237[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25134__auto__);

(statearr_93237[(1)] = (1));

return statearr_93237;
});
var figwheel$client$heads_up_plugin_$_state_machine__25134__auto____1 = (function (state_93224){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_93224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e93238){if((e93238 instanceof Object)){
var ex__25137__auto__ = e93238;
var statearr_93239_93248 = state_93224;
(statearr_93239_93248[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93249 = state_93224;
state_93224 = G__93249;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25134__auto__ = function(state_93224){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25134__auto____1.call(this,state_93224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25134__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25134__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___93241,ch))
})();
var state__25156__auto__ = (function (){var statearr_93240 = f__25155__auto__.call(null);
(statearr_93240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___93241);

return statearr_93240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___93241,ch))
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
var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__){
return (function (state_93270){
var state_val_93271 = (state_93270[(1)]);
if((state_val_93271 === (1))){
var inst_93265 = cljs.core.async.timeout.call(null,(3000));
var state_93270__$1 = state_93270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93270__$1,(2),inst_93265);
} else {
if((state_val_93271 === (2))){
var inst_93267 = (state_93270[(2)]);
var inst_93268 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_93270__$1 = (function (){var statearr_93272 = state_93270;
(statearr_93272[(7)] = inst_93267);

return statearr_93272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93270__$1,inst_93268);
} else {
return null;
}
}
});})(c__25154__auto__))
;
return ((function (switch__25133__auto__,c__25154__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25134__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25134__auto____0 = (function (){
var statearr_93276 = [null,null,null,null,null,null,null,null];
(statearr_93276[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25134__auto__);

(statearr_93276[(1)] = (1));

return statearr_93276;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25134__auto____1 = (function (state_93270){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_93270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e93277){if((e93277 instanceof Object)){
var ex__25137__auto__ = e93277;
var statearr_93278_93280 = state_93270;
(statearr_93278_93280[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93281 = state_93270;
state_93270 = G__93281;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25134__auto__ = function(state_93270){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25134__auto____1.call(this,state_93270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25134__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25134__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__))
})();
var state__25156__auto__ = (function (){var statearr_93279 = f__25155__auto__.call(null);
(statearr_93279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_93279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__))
);

return c__25154__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__93282){
var map__93289 = p__93282;
var map__93289__$1 = ((((!((map__93289 == null)))?((((map__93289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93289):map__93289);
var ed = map__93289__$1;
var formatted_exception = cljs.core.get.call(null,map__93289__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__93289__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__93289__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__93291_93295 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__93292_93296 = null;
var count__93293_93297 = (0);
var i__93294_93298 = (0);
while(true){
if((i__93294_93298 < count__93293_93297)){
var msg_93299 = cljs.core._nth.call(null,chunk__93292_93296,i__93294_93298);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_93299);

var G__93300 = seq__93291_93295;
var G__93301 = chunk__93292_93296;
var G__93302 = count__93293_93297;
var G__93303 = (i__93294_93298 + (1));
seq__93291_93295 = G__93300;
chunk__93292_93296 = G__93301;
count__93293_93297 = G__93302;
i__93294_93298 = G__93303;
continue;
} else {
var temp__4657__auto___93304 = cljs.core.seq.call(null,seq__93291_93295);
if(temp__4657__auto___93304){
var seq__93291_93305__$1 = temp__4657__auto___93304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93291_93305__$1)){
var c__19102__auto___93306 = cljs.core.chunk_first.call(null,seq__93291_93305__$1);
var G__93307 = cljs.core.chunk_rest.call(null,seq__93291_93305__$1);
var G__93308 = c__19102__auto___93306;
var G__93309 = cljs.core.count.call(null,c__19102__auto___93306);
var G__93310 = (0);
seq__93291_93295 = G__93307;
chunk__93292_93296 = G__93308;
count__93293_93297 = G__93309;
i__93294_93298 = G__93310;
continue;
} else {
var msg_93311 = cljs.core.first.call(null,seq__93291_93305__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_93311);

var G__93312 = cljs.core.next.call(null,seq__93291_93305__$1);
var G__93313 = null;
var G__93314 = (0);
var G__93315 = (0);
seq__93291_93295 = G__93312;
chunk__93292_93296 = G__93313;
count__93293_93297 = G__93314;
i__93294_93298 = G__93315;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__93316){
var map__93319 = p__93316;
var map__93319__$1 = ((((!((map__93319 == null)))?((((map__93319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93319):map__93319);
var w = map__93319__$1;
var message = cljs.core.get.call(null,map__93319__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18286__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18286__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18286__auto__;
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
var seq__93327 = cljs.core.seq.call(null,plugins);
var chunk__93328 = null;
var count__93329 = (0);
var i__93330 = (0);
while(true){
if((i__93330 < count__93329)){
var vec__93331 = cljs.core._nth.call(null,chunk__93328,i__93330);
var k = cljs.core.nth.call(null,vec__93331,(0),null);
var plugin = cljs.core.nth.call(null,vec__93331,(1),null);
if(cljs.core.truth_(plugin)){
var pl_93333 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__93327,chunk__93328,count__93329,i__93330,pl_93333,vec__93331,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_93333.call(null,msg_hist);
});})(seq__93327,chunk__93328,count__93329,i__93330,pl_93333,vec__93331,k,plugin))
);
} else {
}

var G__93334 = seq__93327;
var G__93335 = chunk__93328;
var G__93336 = count__93329;
var G__93337 = (i__93330 + (1));
seq__93327 = G__93334;
chunk__93328 = G__93335;
count__93329 = G__93336;
i__93330 = G__93337;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__93327);
if(temp__4657__auto__){
var seq__93327__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93327__$1)){
var c__19102__auto__ = cljs.core.chunk_first.call(null,seq__93327__$1);
var G__93338 = cljs.core.chunk_rest.call(null,seq__93327__$1);
var G__93339 = c__19102__auto__;
var G__93340 = cljs.core.count.call(null,c__19102__auto__);
var G__93341 = (0);
seq__93327 = G__93338;
chunk__93328 = G__93339;
count__93329 = G__93340;
i__93330 = G__93341;
continue;
} else {
var vec__93332 = cljs.core.first.call(null,seq__93327__$1);
var k = cljs.core.nth.call(null,vec__93332,(0),null);
var plugin = cljs.core.nth.call(null,vec__93332,(1),null);
if(cljs.core.truth_(plugin)){
var pl_93342 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__93327,chunk__93328,count__93329,i__93330,pl_93342,vec__93332,k,plugin,seq__93327__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_93342.call(null,msg_hist);
});})(seq__93327,chunk__93328,count__93329,i__93330,pl_93342,vec__93332,k,plugin,seq__93327__$1,temp__4657__auto__))
);
} else {
}

var G__93343 = cljs.core.next.call(null,seq__93327__$1);
var G__93344 = null;
var G__93345 = (0);
var G__93346 = (0);
seq__93327 = G__93343;
chunk__93328 = G__93344;
count__93329 = G__93345;
i__93330 = G__93346;
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
var args93347 = [];
var len__19357__auto___93350 = arguments.length;
var i__19358__auto___93351 = (0);
while(true){
if((i__19358__auto___93351 < len__19357__auto___93350)){
args93347.push((arguments[i__19358__auto___93351]));

var G__93352 = (i__19358__auto___93351 + (1));
i__19358__auto___93351 = G__93352;
continue;
} else {
}
break;
}

var G__93349 = args93347.length;
switch (G__93349) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93347.length)].join('')));

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
var args__19364__auto__ = [];
var len__19357__auto___93358 = arguments.length;
var i__19358__auto___93359 = (0);
while(true){
if((i__19358__auto___93359 < len__19357__auto___93358)){
args__19364__auto__.push((arguments[i__19358__auto___93359]));

var G__93360 = (i__19358__auto___93359 + (1));
i__19358__auto___93359 = G__93360;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__93355){
var map__93356 = p__93355;
var map__93356__$1 = ((((!((map__93356 == null)))?((((map__93356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93356):map__93356);
var opts = map__93356__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq93354){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq93354));
});

//# sourceMappingURL=client.js.map?rel=1460037785116