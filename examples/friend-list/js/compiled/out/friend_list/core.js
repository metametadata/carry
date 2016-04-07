// Compiled by ClojureScript 1.7.228 {}
goog.provide('friend_list.core');
goog.require('cljs.core');
goog.require('goog.functions');
goog.require('schema.core');
goog.require('middleware.schema');
goog.require('reagent.core');
goog.require('reagent_mvsa.core');
goog.require('middleware.history');
goog.require('cljs.core.match');
friend_list.core.Schema = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Str,new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Int,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str,new cljs.core.Keyword(null,"username","username",1605666410),schema.core.Str], null)], null),schema.core.Any,schema.core.Any], true, false);
friend_list.core._initial_model = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),"",new cljs.core.Keyword(null,"friends","friends",-127631374),null], null);
friend_list.core._new_control = (function friend_list$core$_new_control(history,api_search){
var search = (function (q,dispatch_signal){
return api_search.call(null,q,(function (p1__92298_SHARP_){
return dispatch_signal.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-search-success","on-search-success",68379197),q,p1__92298_SHARP_], null));
}));
});
var search_on_input = goog.functions.debounce(((function (search){
return (function (q,dispatch_signal){
middleware.history.push_token.call(null,history,q);

return search.call(null,q,dispatch_signal);
});})(search))
,(300));
return ((function (search,search_on_input){
return (function friend_list$core$_new_control_$_control(model,signal,dispatch_signal,dispatch_action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-start","on-start",-1839785985))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e92344){if((e92344 instanceof Error)){
var e__22955__auto__ = e92344;
if((e__22955__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e92345){if((e92345 instanceof Error)){
var e__22955__auto____$1 = e92345;
if((e__22955__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__92339 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__92339,new cljs.core.Keyword(null,"on-input","on-input",-267523366))){
var q = cljs.core.nth.call(null,signal,(1));
dispatch_action.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-query","set-query",-898596586),q], null));

return search_on_input.call(null,q,dispatch_signal);
} else {
throw cljs.core.match.backtrack;

}
}catch (e92349){if((e92349 instanceof Error)){
var e__22955__auto____$2 = e92349;
if((e__22955__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__92339 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__92339,new cljs.core.Keyword("middleware.history","on-enter","middleware.history/on-enter",1107503248))){
var token = cljs.core.nth.call(null,signal,(1));
dispatch_action.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-query","set-query",-898596586),token], null));

return search.call(null,token,dispatch_signal);
} else {
throw cljs.core.match.backtrack;

}
}catch (e92350){if((e92350 instanceof Error)){
var e__22955__auto____$3 = e92350;
if((e__22955__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$3;
}
} else {
throw e92350;

}
}} else {
throw e__22955__auto____$2;
}
} else {
throw e92349;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e92346){if((e92346 instanceof Error)){
var e__22955__auto____$2 = e92346;
if((e__22955__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__92341 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__92341,new cljs.core.Keyword(null,"on-search-success","on-search-success",68379197))){
var q = cljs.core.nth.call(null,signal,(1));
var friends = cljs.core.nth.call(null,signal,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model)),q)){
return dispatch_action.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-friends","set-friends",-871727276),friends], null));
} else {
return cljs.core.println.call(null,"ignore response for",cljs.core.pr_str.call(null,q),"because current query is",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model))));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e92348){if((e92348 instanceof Error)){
var e__22955__auto____$3 = e92348;
if((e__22955__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$3;
}
} else {
throw e92348;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e92347){if((e92347 instanceof Error)){
var e__22955__auto____$3 = e92347;
if((e__22955__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__22955__auto____$3;
}
} else {
throw e92347;

}
}} else {
throw e__22955__auto____$2;
}
} else {
throw e92346;

}
}} else {
throw e__22955__auto____$1;
}
} else {
throw e92345;

}
}} else {
throw e__22955__auto__;
}
} else {
throw e92344;

}
}});
;})(search,search_on_input))
});
friend_list.core._reconcile = (function friend_list$core$_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__92358 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__92358,new cljs.core.Keyword(null,"set-query","set-query",-898596586))){
var q = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"query","query",-1288509510),q);
} else {
throw cljs.core.match.backtrack;

}
}catch (e92361){if((e92361 instanceof Error)){
var e__22955__auto__ = e92361;
if((e__22955__auto__ === cljs.core.match.backtrack)){
try{var action_0__92358 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__92358,new cljs.core.Keyword(null,"set-friends","set-friends",-871727276))){
var friends = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"friends","friends",-127631374),friends);
} else {
throw cljs.core.match.backtrack;

}
}catch (e92362){if((e92362 instanceof Error)){
var e__22955__auto____$1 = e92362;
if((e__22955__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$1;
}
} else {
throw e92362;

}
}} else {
throw e__22955__auto__;
}
} else {
throw e92361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e92360){if((e92360 instanceof Error)){
var e__22955__auto__ = e92360;
if((e__22955__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__22955__auto__;
}
} else {
throw e92360;

}
}});
friend_list.core.view_model = (function friend_list$core$view_model(model){
return reagent_mvsa.core.track_keys.call(null,model,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null));
});
friend_list.core._search_field = (function friend_list$core$_search_field(_query,_dispatch){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (query,dispatch){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search friends...",new cljs.core.Keyword(null,"value","value",305978217),query,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__92363_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-input","on-input",-267523366),p1__92363_SHARP_.target.value], null));
})], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return reagent.core.dom_node.call(null,this$).focus();
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return reagent.core.dom_node.call(null,this$).focus();
})], null));
});
friend_list.core._friend_list = (function friend_list$core$_friend_list(friends){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0)], null)], null),(function (){var iter__19071__auto__ = (function friend_list$core$_friend_list_$_iter__92368(s__92369){
return (new cljs.core.LazySeq(null,(function (){
var s__92369__$1 = s__92369;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__92369__$1);
if(temp__4657__auto__){
var s__92369__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__92369__$2)){
var c__19069__auto__ = cljs.core.chunk_first.call(null,s__92369__$2);
var size__19070__auto__ = cljs.core.count.call(null,c__19069__auto__);
var b__92371 = cljs.core.chunk_buffer.call(null,size__19070__auto__);
if((function (){var i__92370 = (0);
while(true){
if((i__92370 < size__19070__auto__)){
var f = cljs.core._nth.call(null,c__19069__auto__,i__92370);
cljs.core.chunk_append.call(null,b__92371,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(17)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f)], null)," ",new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(f)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f)], null)));

var G__92372 = (i__92370 + (1));
i__92370 = G__92372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92371),friend_list$core$_friend_list_$_iter__92368.call(null,cljs.core.chunk_rest.call(null,s__92369__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92371),null);
}
} else {
var f = cljs.core.first.call(null,s__92369__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(17)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f)], null)," ",new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(f)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f)], null)),friend_list$core$_friend_list_$_iter__92368.call(null,cljs.core.rest.call(null,s__92369__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19071__auto__.call(null,friends);
})()], null);
});
friend_list.core.view = (function friend_list$core$view(p__92373,dispatch){
var map__92376 = p__92373;
var map__92376__$1 = ((((!((map__92376 == null)))?((((map__92376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92376):map__92376);
var _view_model = map__92376__$1;
var query = cljs.core.get.call(null,map__92376__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var friends = cljs.core.get.call(null,map__92376__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [friend_list.core._search_field,cljs.core.deref.call(null,query),dispatch], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [friend_list.core._friend_list,cljs.core.deref.call(null,friends)], null)], null);
});
friend_list.core.new_spec = (function friend_list$core$new_spec(history,api_search){
return middleware.history.add.call(null,middleware.schema.add.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),friend_list.core._initial_model,new cljs.core.Keyword(null,"control","control",1892578036),friend_list.core._new_control.call(null,history,api_search),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),friend_list.core._reconcile], null),friend_list.core.Schema),history);
});

//# sourceMappingURL=core.js.map?rel=1460037784512