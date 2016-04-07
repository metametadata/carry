// Compiled by ClojureScript 1.7.228 {}
goog.provide('middleware.logging');
goog.require('cljs.core');
/**
 * Will print all signals and actions to console.
 */
middleware.logging.add = (function middleware$logging$add(var_args){
var args93363 = [];
var len__19357__auto___93366 = arguments.length;
var i__19358__auto___93367 = (0);
while(true){
if((i__19358__auto___93367 < len__19357__auto___93366)){
args93363.push((arguments[i__19358__auto___93367]));

var G__93368 = (i__19358__auto___93367 + (1));
i__19358__auto___93367 = G__93368;
continue;
} else {
}
break;
}

var G__93365 = args93363.length;
switch (G__93365) {
case 1:
return middleware.logging.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return middleware.logging.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93363.length)].join('')));

}
});

middleware.logging.add.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return middleware.logging.add.call(null,spec,"");
});

middleware.logging.add.cljs$core$IFn$_invoke$arity$2 = (function (spec,prefix){
if(cljs.core.truth_(new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(spec))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Symbol(null,"spec","spec",1988051928,null))))].join('')));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reconcile","reconcile",-728661830).cljs$core$IFn$_invoke$arity$1(spec))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),new cljs.core.Symbol(null,"spec","spec",1988051928,null))))].join('')));
}

return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),(function middleware$logging$wrap_control(control){
return (function middleware$logging$wrap_control_$_logged_control(model,signal,dispatch_signal,dispatch_action){
try{console.group([cljs.core.str(prefix),cljs.core.str("signal "),cljs.core.str(cljs.core.pr_str.call(null,signal))].join(''));

return control.call(null,model,signal,dispatch_signal,dispatch_action);
}finally {console.groupEnd();
}});
})),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),(function middleware$logging$wrap_control(reconcile){
return (function middleware$logging$wrap_control_$_logged_reconcile(model,action){
cljs.core.println.call(null,[cljs.core.str(prefix),cljs.core.str("action")].join(''),cljs.core.pr_str.call(null,action));

return reconcile.call(null,model,action);
});
}));
});

middleware.logging.add.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=logging.js.map?rel=1460037785161