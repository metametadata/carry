// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('app.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29266__delegate = function (x){
if(cljs.core.truth_(app.core.on_jsload)){
return cljs.core.apply.call(null,app.core.on_jsload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'app.core/on-jsload' is missing");
}
};
var G__29266 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29267__i = 0, G__29267__a = new Array(arguments.length -  0);
while (G__29267__i < G__29267__a.length) {G__29267__a[G__29267__i] = arguments[G__29267__i + 0]; ++G__29267__i;}
  x = new cljs.core.IndexedSeq(G__29267__a,0);
} 
return G__29266__delegate.call(this,x);};
G__29266.cljs$lang$maxFixedArity = 0;
G__29266.cljs$lang$applyTo = (function (arglist__29268){
var x = cljs.core.seq(arglist__29268);
return G__29266__delegate(x);
});
G__29266.cljs$core$IFn$_invoke$arity$variadic = G__29266__delegate;
return G__29266;
})()
,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),(function() { 
var G__29269__delegate = function (x){
if(cljs.core.truth_(app.core.before_jsload)){
return cljs.core.apply.call(null,app.core.before_jsload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :before-jsload hook 'app.core/before-jsload' is missing");
}
};
var G__29269 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29270__i = 0, G__29270__a = new Array(arguments.length -  0);
while (G__29270__i < G__29270__a.length) {G__29270__a[G__29270__i] = arguments[G__29270__i + 0]; ++G__29270__i;}
  x = new cljs.core.IndexedSeq(G__29270__a,0);
} 
return G__29269__delegate.call(this,x);};
G__29269.cljs$lang$maxFixedArity = 0;
G__29269.cljs$lang$applyTo = (function (arglist__29271){
var x = cljs.core.seq(arglist__29271);
return G__29269__delegate(x);
});
G__29269.cljs$core$IFn$_invoke$arity$variadic = G__29269__delegate;
return G__29269;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1456176286520