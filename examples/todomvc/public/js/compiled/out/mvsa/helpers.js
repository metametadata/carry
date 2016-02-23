// Compiled by ClojureScript 1.7.170 {}
goog.provide('mvsa.helpers');
goog.require('cljs.core');
goog.require('reagent.core');
/**
 * Returns a map containing Reagent reactions to map entries specified by keys.
 */
mvsa.helpers.track_keys = (function mvsa$helpers$track_keys(map_ratom,keyseq){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17523__auto__ = (function mvsa$helpers$track_keys_$_iter__20045(s__20046){
return (new cljs.core.LazySeq(null,(function (){
var s__20046__$1 = s__20046;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20046__$1);
if(temp__4425__auto__){
var s__20046__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20046__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__20046__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__20048 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__20047 = (0);
while(true){
if((i__20047 < size__17522__auto__)){
var key = cljs.core._nth.call(null,c__17521__auto__,i__20047);
cljs.core.chunk_append.call(null,b__20048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (i__20047,key,c__17521__auto__,size__17522__auto__,b__20048,s__20046__$2,temp__4425__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(i__20047,key,c__17521__auto__,size__17522__auto__,b__20048,s__20046__$2,temp__4425__auto__))
)], null));

var G__20049 = (i__20047 + (1));
i__20047 = G__20049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20048),mvsa$helpers$track_keys_$_iter__20045.call(null,cljs.core.chunk_rest.call(null,s__20046__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20048),null);
}
} else {
var key = cljs.core.first.call(null,s__20046__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (key,s__20046__$2,temp__4425__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(key,s__20046__$2,temp__4425__auto__))
)], null),mvsa$helpers$track_keys_$_iter__20045.call(null,cljs.core.rest.call(null,s__20046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,keyseq);
})());
});
/**
 * Returns a new function which calls f1 and then calls f2. Useful in spec middleware for wrapping :on-start.
 */
mvsa.helpers.after_do = (function mvsa$helpers$after_do(f1,f2){
return (function() { 
var G__20050__delegate = function (args){
cljs.core.apply.call(null,f1,args);

return cljs.core.apply.call(null,f2,args);
};
var G__20050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20051__i = 0, G__20051__a = new Array(arguments.length -  0);
while (G__20051__i < G__20051__a.length) {G__20051__a[G__20051__i] = arguments[G__20051__i + 0]; ++G__20051__i;}
  args = new cljs.core.IndexedSeq(G__20051__a,0);
} 
return G__20050__delegate.call(this,args);};
G__20050.cljs$lang$maxFixedArity = 0;
G__20050.cljs$lang$applyTo = (function (arglist__20052){
var args = cljs.core.seq(arglist__20052);
return G__20050__delegate(args);
});
G__20050.cljs$core$IFn$_invoke$arity$variadic = G__20050__delegate;
return G__20050;
})()
;
});
/**
 * Returns a new function which calls f2 and then calls f1. Useful in spec middleware for wrapping :on-stop.
 */
mvsa.helpers.before_do = (function mvsa$helpers$before_do(f1,f2){
return (function() { 
var G__20053__delegate = function (args){
cljs.core.apply.call(null,f2,args);

return cljs.core.apply.call(null,f1,args);
};
var G__20053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20054__i = 0, G__20054__a = new Array(arguments.length -  0);
while (G__20054__i < G__20054__a.length) {G__20054__a[G__20054__i] = arguments[G__20054__i + 0]; ++G__20054__i;}
  args = new cljs.core.IndexedSeq(G__20054__a,0);
} 
return G__20053__delegate.call(this,args);};
G__20053.cljs$lang$maxFixedArity = 0;
G__20053.cljs$lang$applyTo = (function (arglist__20055){
var args = cljs.core.seq(arglist__20055);
return G__20053__delegate(args);
});
G__20053.cljs$core$IFn$_invoke$arity$variadic = G__20053__delegate;
return G__20053;
})()
;
});

//# sourceMappingURL=helpers.js.map?rel=1456018599289