// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26955_26969 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26956_26970 = null;
var count__26957_26971 = (0);
var i__26958_26972 = (0);
while(true){
if((i__26958_26972 < count__26957_26971)){
var f_26973 = cljs.core._nth.call(null,chunk__26956_26970,i__26958_26972);
cljs.core.println.call(null,"  ",f_26973);

var G__26974 = seq__26955_26969;
var G__26975 = chunk__26956_26970;
var G__26976 = count__26957_26971;
var G__26977 = (i__26958_26972 + (1));
seq__26955_26969 = G__26974;
chunk__26956_26970 = G__26975;
count__26957_26971 = G__26976;
i__26958_26972 = G__26977;
continue;
} else {
var temp__4425__auto___26978 = cljs.core.seq.call(null,seq__26955_26969);
if(temp__4425__auto___26978){
var seq__26955_26979__$1 = temp__4425__auto___26978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26955_26979__$1)){
var c__17554__auto___26980 = cljs.core.chunk_first.call(null,seq__26955_26979__$1);
var G__26981 = cljs.core.chunk_rest.call(null,seq__26955_26979__$1);
var G__26982 = c__17554__auto___26980;
var G__26983 = cljs.core.count.call(null,c__17554__auto___26980);
var G__26984 = (0);
seq__26955_26969 = G__26981;
chunk__26956_26970 = G__26982;
count__26957_26971 = G__26983;
i__26958_26972 = G__26984;
continue;
} else {
var f_26985 = cljs.core.first.call(null,seq__26955_26979__$1);
cljs.core.println.call(null,"  ",f_26985);

var G__26986 = cljs.core.next.call(null,seq__26955_26979__$1);
var G__26987 = null;
var G__26988 = (0);
var G__26989 = (0);
seq__26955_26969 = G__26986;
chunk__26956_26970 = G__26987;
count__26957_26971 = G__26988;
i__26958_26972 = G__26989;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26990 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26990);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26990)))?cljs.core.second.call(null,arglists_26990):arglists_26990));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26959 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26960 = null;
var count__26961 = (0);
var i__26962 = (0);
while(true){
if((i__26962 < count__26961)){
var vec__26963 = cljs.core._nth.call(null,chunk__26960,i__26962);
var name = cljs.core.nth.call(null,vec__26963,(0),null);
var map__26964 = cljs.core.nth.call(null,vec__26963,(1),null);
var map__26964__$1 = ((((!((map__26964 == null)))?((((map__26964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26964):map__26964);
var doc = cljs.core.get.call(null,map__26964__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26964__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26991 = seq__26959;
var G__26992 = chunk__26960;
var G__26993 = count__26961;
var G__26994 = (i__26962 + (1));
seq__26959 = G__26991;
chunk__26960 = G__26992;
count__26961 = G__26993;
i__26962 = G__26994;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26959);
if(temp__4425__auto__){
var seq__26959__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26959__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__26959__$1);
var G__26995 = cljs.core.chunk_rest.call(null,seq__26959__$1);
var G__26996 = c__17554__auto__;
var G__26997 = cljs.core.count.call(null,c__17554__auto__);
var G__26998 = (0);
seq__26959 = G__26995;
chunk__26960 = G__26996;
count__26961 = G__26997;
i__26962 = G__26998;
continue;
} else {
var vec__26966 = cljs.core.first.call(null,seq__26959__$1);
var name = cljs.core.nth.call(null,vec__26966,(0),null);
var map__26967 = cljs.core.nth.call(null,vec__26966,(1),null);
var map__26967__$1 = ((((!((map__26967 == null)))?((((map__26967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26967):map__26967);
var doc = cljs.core.get.call(null,map__26967__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26967__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26999 = cljs.core.next.call(null,seq__26959__$1);
var G__27000 = null;
var G__27001 = (0);
var G__27002 = (0);
seq__26959 = G__26999;
chunk__26960 = G__27000;
count__26961 = G__27001;
i__26962 = G__27002;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1456018617141