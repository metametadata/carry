// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.middleware.logging');
goog.require('cljs.core');
goog.require('mvsa.helpers');
/**
 * Will print all signals and actions to console.
 */
app.middleware.logging.add = (function app$middleware$logging$add(var_args){
var args26635 = [];
var len__17809__auto___26638 = arguments.length;
var i__17810__auto___26639 = (0);
while(true){
if((i__17810__auto___26639 < len__17809__auto___26638)){
args26635.push((arguments[i__17810__auto___26639]));

var G__26640 = (i__17810__auto___26639 + (1));
i__17810__auto___26639 = G__26640;
continue;
} else {
}
break;
}

var G__26637 = args26635.length;
switch (G__26637) {
case 1:
return app.middleware.logging.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.middleware.logging.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26635.length)].join('')));

}
});

app.middleware.logging.add.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return app.middleware.logging.add.call(null,spec,"");
});

app.middleware.logging.add.cljs$core$IFn$_invoke$arity$2 = (function (spec,prefix){
if(cljs.core.truth_(new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(spec))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Symbol(null,"spec","spec",1988051928,null))))].join('')));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reconcile","reconcile",-728661830).cljs$core$IFn$_invoke$arity$1(spec))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),new cljs.core.Symbol(null,"spec","spec",1988051928,null))))].join('')));
}

return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),(function app$middleware$logging$wrap_control(control){
return (function app$middleware$logging$wrap_control_$_logged_control(model,signal,dispatch){
try{console.group([cljs.core.str(prefix),cljs.core.str("signal =")].join(''),cljs.core.pr_str.call(null,signal));

return control.call(null,model,signal,dispatch);
}finally {console.groupEnd();
}});
})),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),mvsa.helpers.before_do,(function (_model,action){
return cljs.core.println.call(null,[cljs.core.str(prefix),cljs.core.str("  action =")].join(''),cljs.core.pr_str.call(null,action));
}));
});

app.middleware.logging.add.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=logging.js.map?rel=1456100291544