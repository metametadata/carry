// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__86794__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__86794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86795__i = 0, G__86795__a = new Array(arguments.length -  0);
while (G__86795__i < G__86795__a.length) {G__86795__a[G__86795__i] = arguments[G__86795__i + 0]; ++G__86795__i;}
  args = new cljs.core.IndexedSeq(G__86795__a,0);
} 
return G__86794__delegate.call(this,args);};
G__86794.cljs$lang$maxFixedArity = 0;
G__86794.cljs$lang$applyTo = (function (arglist__86796){
var args = cljs.core.seq(arglist__86796);
return G__86794__delegate(args);
});
G__86794.cljs$core$IFn$_invoke$arity$variadic = G__86794__delegate;
return G__86794;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__86797__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__86797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86798__i = 0, G__86798__a = new Array(arguments.length -  0);
while (G__86798__i < G__86798__a.length) {G__86798__a[G__86798__i] = arguments[G__86798__i + 0]; ++G__86798__i;}
  args = new cljs.core.IndexedSeq(G__86798__a,0);
} 
return G__86797__delegate.call(this,args);};
G__86797.cljs$lang$maxFixedArity = 0;
G__86797.cljs$lang$applyTo = (function (arglist__86799){
var args = cljs.core.seq(arglist__86799);
return G__86797__delegate(args);
});
G__86797.cljs$core$IFn$_invoke$arity$variadic = G__86797__delegate;
return G__86797;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1460037776546