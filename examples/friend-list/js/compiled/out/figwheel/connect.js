// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('app.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__95399__delegate = function (x){
if(cljs.core.truth_(app.core.on_jsload)){
return cljs.core.apply.call(null,app.core.on_jsload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'app.core/on-jsload' is missing");
}
};
var G__95399 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__95400__i = 0, G__95400__a = new Array(arguments.length -  0);
while (G__95400__i < G__95400__a.length) {G__95400__a[G__95400__i] = arguments[G__95400__i + 0]; ++G__95400__i;}
  x = new cljs.core.IndexedSeq(G__95400__a,0);
} 
return G__95399__delegate.call(this,x);};
G__95399.cljs$lang$maxFixedArity = 0;
G__95399.cljs$lang$applyTo = (function (arglist__95401){
var x = cljs.core.seq(arglist__95401);
return G__95399__delegate(x);
});
G__95399.cljs$core$IFn$_invoke$arity$variadic = G__95399__delegate;
return G__95399;
})()
,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),(function() { 
var G__95402__delegate = function (x){
if(cljs.core.truth_(app.core.before_jsload)){
return cljs.core.apply.call(null,app.core.before_jsload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :before-jsload hook 'app.core/before-jsload' is missing");
}
};
var G__95402 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__95403__i = 0, G__95403__a = new Array(arguments.length -  0);
while (G__95403__i < G__95403__a.length) {G__95403__a[G__95403__i] = arguments[G__95403__i + 0]; ++G__95403__i;}
  x = new cljs.core.IndexedSeq(G__95403__a,0);
} 
return G__95402__delegate.call(this,x);};
G__95402.cljs$lang$maxFixedArity = 0;
G__95402.cljs$lang$applyTo = (function (arglist__95404){
var x = cljs.core.seq(arglist__95404);
return G__95402__delegate(x);
});
G__95402.cljs$core$IFn$_invoke$arity$variadic = G__95402__delegate;
return G__95402;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1460037795668