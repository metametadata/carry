// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.view_model');
goog.require('cljs.core');
goog.require('app.middleware.routing');
goog.require('mvsa.helpers');
app.view_model._visibility = (function app$view_model$_visibility(visibility_spec,model){
var temp__4423__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27000_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(p1__27000_SHARP_),new cljs.core.Keyword("app.middleware.routing","token","app.middleware.routing/token",1275550810).cljs$core$IFn$_invoke$arity$1(model));
}),visibility_spec)));
if(cljs.core.truth_(temp__4423__auto__)){
var result = temp__4423__auto__;
return result;
} else {
console.log("ERROR: Could not determine visibility for token",cljs.core.pr_str.call(null,new cljs.core.Keyword("app.middleware.routing","token","app.middleware.routing/token",1275550810).cljs$core$IFn$_invoke$arity$1(model)),". Will use some default visibility.");

return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,visibility_spec));
}
});
app.view_model.view_model = (function app$view_model$view_model(model){
var visibility_spec = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"/",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["/active",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["/completed",null], null), null)], null)], null);
}));
var all_todos = reagent.ratom.make_reaction.call(null,((function (visibility_spec){
return (function (){
return new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
});})(visibility_spec))
);
var visibility = reagent.ratom.make_reaction.call(null,((function (visibility_spec,all_todos){
return (function (){
return app.view_model._visibility.call(null,cljs.core.deref.call(null,visibility_spec),cljs.core.deref.call(null,model));
});})(visibility_spec,all_todos))
);
return cljs.core.assoc.call(null,mvsa.helpers.track_keys.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500)], null)),new cljs.core.Keyword(null,"visibility-spec","visibility-spec",2039132286),visibility_spec,new cljs.core.Keyword(null,"visibility","visibility",1338380893),visibility,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793),reagent.ratom.make_reaction.call(null,((function (visibility_spec,all_todos,visibility){
return (function (){
return (cljs.core.count.call(null,cljs.core.deref.call(null,all_todos)) > (0));
});})(visibility_spec,all_todos,visibility))
),new cljs.core.Keyword(null,"todos","todos",630308868),reagent.ratom.make_reaction.call(null,((function (visibility_spec,all_todos,visibility){
return (function (){
return cljs.core.filter.call(null,(function (){var G__27002 = (((cljs.core.deref.call(null,visibility) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,visibility).fqn:null);
switch (G__27002) {
case "all":
return cljs.core.constantly.call(null,true);

break;
case "active":
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354));

break;
case "completed":
return new cljs.core.Keyword(null,"completed?","completed?",946828354);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,visibility))].join('')));

}
})(),cljs.core.deref.call(null,all_todos));
});})(visibility_spec,all_todos,visibility))
),new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888),reagent.ratom.make_reaction.call(null,((function (visibility_spec,all_todos,visibility){
return (function (){
return cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.deref.call(null,all_todos));
});})(visibility_spec,all_todos,visibility))
),new cljs.core.Keyword(null,"active-count","active-count",676410108),reagent.ratom.make_reaction.call(null,((function (visibility_spec,all_todos,visibility){
return (function (){
return cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354)),cljs.core.deref.call(null,all_todos)));
});})(visibility_spec,all_todos,visibility))
),new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313),reagent.ratom.make_reaction.call(null,((function (visibility_spec,all_todos,visibility){
return (function (){
return (cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.deref.call(null,all_todos))) > (0));
});})(visibility_spec,all_todos,visibility))
));
});

//# sourceMappingURL=view_model.js.map?rel=1456104813160