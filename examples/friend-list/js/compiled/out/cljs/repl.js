// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__86970_86984 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__86971_86985 = null;
var count__86972_86986 = (0);
var i__86973_86987 = (0);
while(true){
if((i__86973_86987 < count__86972_86986)){
var f_86988 = cljs.core._nth.call(null,chunk__86971_86985,i__86973_86987);
cljs.core.println.call(null,"  ",f_86988);

var G__86989 = seq__86970_86984;
var G__86990 = chunk__86971_86985;
var G__86991 = count__86972_86986;
var G__86992 = (i__86973_86987 + (1));
seq__86970_86984 = G__86989;
chunk__86971_86985 = G__86990;
count__86972_86986 = G__86991;
i__86973_86987 = G__86992;
continue;
} else {
var temp__4657__auto___86993 = cljs.core.seq.call(null,seq__86970_86984);
if(temp__4657__auto___86993){
var seq__86970_86994__$1 = temp__4657__auto___86993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86970_86994__$1)){
var c__19102__auto___86995 = cljs.core.chunk_first.call(null,seq__86970_86994__$1);
var G__86996 = cljs.core.chunk_rest.call(null,seq__86970_86994__$1);
var G__86997 = c__19102__auto___86995;
var G__86998 = cljs.core.count.call(null,c__19102__auto___86995);
var G__86999 = (0);
seq__86970_86984 = G__86996;
chunk__86971_86985 = G__86997;
count__86972_86986 = G__86998;
i__86973_86987 = G__86999;
continue;
} else {
var f_87000 = cljs.core.first.call(null,seq__86970_86994__$1);
cljs.core.println.call(null,"  ",f_87000);

var G__87001 = cljs.core.next.call(null,seq__86970_86994__$1);
var G__87002 = null;
var G__87003 = (0);
var G__87004 = (0);
seq__86970_86984 = G__87001;
chunk__86971_86985 = G__87002;
count__86972_86986 = G__87003;
i__86973_86987 = G__87004;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_87005 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18298__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_87005);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_87005)))?cljs.core.second.call(null,arglists_87005):arglists_87005));
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
var seq__86974 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__86975 = null;
var count__86976 = (0);
var i__86977 = (0);
while(true){
if((i__86977 < count__86976)){
var vec__86978 = cljs.core._nth.call(null,chunk__86975,i__86977);
var name = cljs.core.nth.call(null,vec__86978,(0),null);
var map__86979 = cljs.core.nth.call(null,vec__86978,(1),null);
var map__86979__$1 = ((((!((map__86979 == null)))?((((map__86979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86979):map__86979);
var doc = cljs.core.get.call(null,map__86979__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__86979__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__87006 = seq__86974;
var G__87007 = chunk__86975;
var G__87008 = count__86976;
var G__87009 = (i__86977 + (1));
seq__86974 = G__87006;
chunk__86975 = G__87007;
count__86976 = G__87008;
i__86977 = G__87009;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__86974);
if(temp__4657__auto__){
var seq__86974__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86974__$1)){
var c__19102__auto__ = cljs.core.chunk_first.call(null,seq__86974__$1);
var G__87010 = cljs.core.chunk_rest.call(null,seq__86974__$1);
var G__87011 = c__19102__auto__;
var G__87012 = cljs.core.count.call(null,c__19102__auto__);
var G__87013 = (0);
seq__86974 = G__87010;
chunk__86975 = G__87011;
count__86976 = G__87012;
i__86977 = G__87013;
continue;
} else {
var vec__86981 = cljs.core.first.call(null,seq__86974__$1);
var name = cljs.core.nth.call(null,vec__86981,(0),null);
var map__86982 = cljs.core.nth.call(null,vec__86981,(1),null);
var map__86982__$1 = ((((!((map__86982 == null)))?((((map__86982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86982):map__86982);
var doc = cljs.core.get.call(null,map__86982__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__86982__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__87014 = cljs.core.next.call(null,seq__86974__$1);
var G__87015 = null;
var G__87016 = (0);
var G__87017 = (0);
seq__86974 = G__87014;
chunk__86975 = G__87015;
count__86976 = G__87016;
i__86977 = G__87017;
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

//# sourceMappingURL=repl.js.map?rel=1460037777201