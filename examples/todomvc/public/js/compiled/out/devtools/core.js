// Compiled by ClojureScript 1.7.170 {}
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
var temp__4423__auto__ = feature.call(null,devtools.core.known_features);
if(cljs.core.truth_(temp__4423__auto__)){
var feature_installation_key = temp__4423__auto__;
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
var args__17816__auto__ = [];
var len__17809__auto___18499 = arguments.length;
var i__17810__auto___18500 = (0);
while(true){
if((i__17810__auto___18500 < len__17809__auto___18499)){
args__17816__auto__.push((arguments[i__17810__auto___18500]));

var G__18501 = (i__17810__auto___18500 + (1));
i__17810__auto___18500 = G__18501;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__18495 = cljs.core.seq.call(null,features);
var chunk__18496 = null;
var count__18497 = (0);
var i__18498 = (0);
while(true){
if((i__18498 < count__18497)){
var feature = cljs.core._nth.call(null,chunk__18496,i__18498);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__18502 = seq__18495;
var G__18503 = chunk__18496;
var G__18504 = count__18497;
var G__18505 = (i__18498 + (1));
seq__18495 = G__18502;
chunk__18496 = G__18503;
count__18497 = G__18504;
i__18498 = G__18505;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18495);
if(temp__4425__auto__){
var seq__18495__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18495__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__18495__$1);
var G__18506 = cljs.core.chunk_rest.call(null,seq__18495__$1);
var G__18507 = c__17554__auto__;
var G__18508 = cljs.core.count.call(null,c__17554__auto__);
var G__18509 = (0);
seq__18495 = G__18506;
chunk__18496 = G__18507;
count__18497 = G__18508;
i__18498 = G__18509;
continue;
} else {
var feature = cljs.core.first.call(null,seq__18495__$1);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__18510 = cljs.core.next.call(null,seq__18495__$1);
var G__18511 = null;
var G__18512 = (0);
var G__18513 = (0);
seq__18495 = G__18510;
chunk__18496 = G__18511;
count__18497 = G__18512;
i__18498 = G__18513;
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

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq18494){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18494));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___18519 = arguments.length;
var i__17810__auto___18520 = (0);
while(true){
if((i__17810__auto___18520 < len__17809__auto___18519)){
args__17816__auto__.push((arguments[i__17810__auto___18520]));

var G__18521 = (i__17810__auto___18520 + (1));
i__17810__auto___18520 = G__18521;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__18515 = cljs.core.seq.call(null,features);
var chunk__18516 = null;
var count__18517 = (0);
var i__18518 = (0);
while(true){
if((i__18518 < count__18517)){
var feature = cljs.core._nth.call(null,chunk__18516,i__18518);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__18522 = seq__18515;
var G__18523 = chunk__18516;
var G__18524 = count__18517;
var G__18525 = (i__18518 + (1));
seq__18515 = G__18522;
chunk__18516 = G__18523;
count__18517 = G__18524;
i__18518 = G__18525;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18515);
if(temp__4425__auto__){
var seq__18515__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18515__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__18515__$1);
var G__18526 = cljs.core.chunk_rest.call(null,seq__18515__$1);
var G__18527 = c__17554__auto__;
var G__18528 = cljs.core.count.call(null,c__17554__auto__);
var G__18529 = (0);
seq__18515 = G__18526;
chunk__18516 = G__18527;
count__18517 = G__18528;
i__18518 = G__18529;
continue;
} else {
var feature = cljs.core.first.call(null,seq__18515__$1);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__18530 = cljs.core.next.call(null,seq__18515__$1);
var G__18531 = null;
var G__18532 = (0);
var G__18533 = (0);
seq__18515 = G__18530;
chunk__18516 = G__18531;
count__18517 = G__18532;
i__18518 = G__18533;
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

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq18514){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18514));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__18535 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__18535) {
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
var args__17816__auto__ = [];
var len__17809__auto___18538 = arguments.length;
var i__17810__auto___18539 = (0);
while(true){
if((i__17810__auto___18539 < len__17809__auto___18538)){
args__17816__auto__.push((arguments[i__17810__auto___18539]));

var G__18540 = (i__17810__auto___18539 + (1));
i__17810__auto___18539 = G__18540;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
return cljs.core.every_QMARK_.call(null,devtools.core.single_feature_available_QMARK_,features);
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq18537){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18537));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});

//# sourceMappingURL=core.js.map?rel=1456150485928