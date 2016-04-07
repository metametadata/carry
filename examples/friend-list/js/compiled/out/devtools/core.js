// Compiled by ClojureScript 1.7.228 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.dirac');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
goog.require('goog.userAgent');
devtools.core.known_features = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327),new cljs.core.Keyword(null,"dirac","dirac",1785994033),new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649),new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)], null);
devtools.core.missing_feature_warning = (function devtools$core$missing_feature_warning(feature,known_features){
return [cljs.core.str("No such feature '"),cljs.core.str(feature),cljs.core.str("' is currently available in cljs-devtools. "),cljs.core.str("List of supported features:"),cljs.core.str(cljs.core.keys.call(null,known_features))].join('');
});
devtools.core.warn_feature_not_available = (function devtools$core$warn_feature_not_available(feature){
return console.warn([cljs.core.str("Feature '"),cljs.core.str(cljs.core.name.call(null,feature)),cljs.core.str("' cannot be installed. Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join(''));
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(){
devtools.util.display_banner.call(null,"Installing cljs-devtools:",devtools.core.known_features);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327)))){
if(cljs.core.truth_(devtools.custom_formatters.available_QMARK_.call(null))){
devtools.custom_formatters.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)))){
if(cljs.core.truth_(devtools.sanity_hints.available_QMARK_.call(null))){
devtools.sanity_hints.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649)))){
if(cljs.core.truth_(devtools.dirac.available_QMARK_.call(null))){
return devtools.dirac.install_BANG_.call(null);
} else {
return devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"dirac","dirac",1785994033));
}
} else {
return null;
}
});
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_.call(null);

devtools.sanity_hints.uninstall_BANG_.call(null);

return devtools.dirac.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(feature,val){
var temp__4655__auto__ = feature.call(null,devtools.core.known_features);
if(cljs.core.truth_(temp__4655__auto__)){
var feature_installation_key = temp__4655__auto__;
return devtools.core.set_pref_BANG_.call(null,feature_installation_key,val);
} else {
return console.warn(devtools.core.missing_feature_warning.call(null,feature,devtools.core.known_features));
}
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,true);
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,false);
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___94523 = arguments.length;
var i__19358__auto___94524 = (0);
while(true){
if((i__19358__auto___94524 < len__19357__auto___94523)){
args__19364__auto__.push((arguments[i__19358__auto___94524]));

var G__94525 = (i__19358__auto___94524 + (1));
i__19358__auto___94524 = G__94525;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__94519 = cljs.core.seq.call(null,features);
var chunk__94520 = null;
var count__94521 = (0);
var i__94522 = (0);
while(true){
if((i__94522 < count__94521)){
var feature = cljs.core._nth.call(null,chunk__94520,i__94522);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__94526 = seq__94519;
var G__94527 = chunk__94520;
var G__94528 = count__94521;
var G__94529 = (i__94522 + (1));
seq__94519 = G__94526;
chunk__94520 = G__94527;
count__94521 = G__94528;
i__94522 = G__94529;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__94519);
if(temp__4657__auto__){
var seq__94519__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__94519__$1)){
var c__19102__auto__ = cljs.core.chunk_first.call(null,seq__94519__$1);
var G__94530 = cljs.core.chunk_rest.call(null,seq__94519__$1);
var G__94531 = c__19102__auto__;
var G__94532 = cljs.core.count.call(null,c__19102__auto__);
var G__94533 = (0);
seq__94519 = G__94530;
chunk__94520 = G__94531;
count__94521 = G__94532;
i__94522 = G__94533;
continue;
} else {
var feature = cljs.core.first.call(null,seq__94519__$1);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__94534 = cljs.core.next.call(null,seq__94519__$1);
var G__94535 = null;
var G__94536 = (0);
var G__94537 = (0);
seq__94519 = G__94534;
chunk__94520 = G__94535;
count__94521 = G__94536;
i__94522 = G__94537;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq94518){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq94518));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___94543 = arguments.length;
var i__19358__auto___94544 = (0);
while(true){
if((i__19358__auto___94544 < len__19357__auto___94543)){
args__19364__auto__.push((arguments[i__19358__auto___94544]));

var G__94545 = (i__19358__auto___94544 + (1));
i__19358__auto___94544 = G__94545;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__94539 = cljs.core.seq.call(null,features);
var chunk__94540 = null;
var count__94541 = (0);
var i__94542 = (0);
while(true){
if((i__94542 < count__94541)){
var feature = cljs.core._nth.call(null,chunk__94540,i__94542);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__94546 = seq__94539;
var G__94547 = chunk__94540;
var G__94548 = count__94541;
var G__94549 = (i__94542 + (1));
seq__94539 = G__94546;
chunk__94540 = G__94547;
count__94541 = G__94548;
i__94542 = G__94549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__94539);
if(temp__4657__auto__){
var seq__94539__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__94539__$1)){
var c__19102__auto__ = cljs.core.chunk_first.call(null,seq__94539__$1);
var G__94550 = cljs.core.chunk_rest.call(null,seq__94539__$1);
var G__94551 = c__19102__auto__;
var G__94552 = cljs.core.count.call(null,c__19102__auto__);
var G__94553 = (0);
seq__94539 = G__94550;
chunk__94540 = G__94551;
count__94541 = G__94552;
i__94542 = G__94553;
continue;
} else {
var feature = cljs.core.first.call(null,seq__94539__$1);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__94554 = cljs.core.next.call(null,seq__94539__$1);
var G__94555 = null;
var G__94556 = (0);
var G__94557 = (0);
seq__94539 = G__94554;
chunk__94540 = G__94555;
count__94541 = G__94556;
i__94542 = G__94557;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq94538){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq94538));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__94559 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__94559) {
case "custom-formatters":
return devtools.custom_formatters.available_QMARK_.call(null);

break;
case "dirac":
return devtools.dirac.available_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___94562 = arguments.length;
var i__19358__auto___94563 = (0);
while(true){
if((i__19358__auto___94563 < len__19357__auto___94562)){
args__19364__auto__.push((arguments[i__19358__auto___94563]));

var G__94564 = (i__19358__auto___94563 + (1));
i__19358__auto___94563 = G__94564;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
return cljs.core.every_QMARK_.call(null,devtools.core.single_feature_available_QMARK_,features);
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq94561){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq94561));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});

//# sourceMappingURL=core.js.map?rel=1460037788151