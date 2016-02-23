// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.reconciler');
goog.require('cljs.core');
goog.require('app.model');
goog.require('com.rpl.specter');
goog.require('cljs.core.match');
app.reconciler._update_todos_STAR_ = (function app$reconciler$_update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29178 = arguments.length;
var i__17810__auto___29179 = (0);
while(true){
if((i__17810__auto___29179 < len__17809__auto___29178)){
args__17816__auto__.push((arguments[i__17810__auto___29179]));

var G__29180 = (i__17810__auto___29179 + (1));
i__17810__auto___29179 = G__29180;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return app.reconciler._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

app.reconciler._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__29173_SHARP_){
return cljs.core.apply.call(null,f,p1__29173_SHARP_,args);
}),model);
});

app.reconciler._update_todos_STAR_.cljs$lang$maxFixedArity = (3);

app.reconciler._update_todos_STAR_.cljs$lang$applyTo = (function (seq29174){
var G__29175 = cljs.core.first.call(null,seq29174);
var seq29174__$1 = cljs.core.next.call(null,seq29174);
var G__29176 = cljs.core.first.call(null,seq29174__$1);
var seq29174__$2 = cljs.core.next.call(null,seq29174__$1);
var G__29177 = cljs.core.first.call(null,seq29174__$2);
var seq29174__$3 = cljs.core.next.call(null,seq29174__$2);
return app.reconciler._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29175,G__29176,G__29177,seq29174__$3);
});
app.reconciler._update_todo = (function app$reconciler$_update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29186 = arguments.length;
var i__17810__auto___29187 = (0);
while(true){
if((i__17810__auto___29187 < len__17809__auto___29186)){
args__17816__auto__.push((arguments[i__17810__auto___29187]));

var G__29188 = (i__17810__auto___29187 + (1));
i__17810__auto___29187 = G__29188;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return app.reconciler._update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

app.reconciler._update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,app.reconciler._update_todos_STAR_,model,(function (p1__29181_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29181_SHARP_),id);
}),f,args);
});

app.reconciler._update_todo.cljs$lang$maxFixedArity = (3);

app.reconciler._update_todo.cljs$lang$applyTo = (function (seq29182){
var G__29183 = cljs.core.first.call(null,seq29182);
var seq29182__$1 = cljs.core.next.call(null,seq29182);
var G__29184 = cljs.core.first.call(null,seq29182__$1);
var seq29182__$2 = cljs.core.next.call(null,seq29182__$1);
var G__29185 = cljs.core.first.call(null,seq29182__$2);
var seq29182__$3 = cljs.core.next.call(null,seq29182__$2);
return app.reconciler._update_todo.cljs$core$IFn$_invoke$arity$variadic(G__29183,G__29184,G__29185,seq29182__$3);
});
app.reconciler._update_todos = (function app$reconciler$_update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29192 = arguments.length;
var i__17810__auto___29193 = (0);
while(true){
if((i__17810__auto___29193 < len__17809__auto___29192)){
args__17816__auto__.push((arguments[i__17810__auto___29193]));

var G__29194 = (i__17810__auto___29193 + (1));
i__17810__auto___29193 = G__29194;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return app.reconciler._update_todos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

app.reconciler._update_todos.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,app.reconciler._update_todos_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

app.reconciler._update_todos.cljs$lang$maxFixedArity = (2);

app.reconciler._update_todos.cljs$lang$applyTo = (function (seq29189){
var G__29190 = cljs.core.first.call(null,seq29189);
var seq29189__$1 = cljs.core.next.call(null,seq29189);
var G__29191 = cljs.core.first.call(null,seq29189__$1);
var seq29189__$2 = cljs.core.next.call(null,seq29189__$1);
return app.reconciler._update_todos.cljs$core$IFn$_invoke$arity$variadic(G__29190,G__29191,seq29189__$2);
});
app.reconciler._find_todo = (function app$reconciler$_find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29195_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29195_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
app.reconciler._remove_todos = (function app$reconciler$_remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__29196_SHARP_){
return cljs.core.remove.call(null,pred,p1__29196_SHARP_);
}));
});
app.reconciler._remove_todo = (function app$reconciler$_remove_todo(model,id){
return app.reconciler._remove_todos.call(null,model,(function (p1__29197_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29197_SHARP_),id);
}));
});
app.reconciler.reconcile = (function app$reconciler$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29230 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29230,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29255){if((e29255 instanceof Error)){
var e__19141__auto__ = e29255;
if((e__19141__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19141__auto__;
}
} else {
throw e29255;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29241){if((e29241 instanceof Error)){
var e__19141__auto__ = e29241;
if((e__19141__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"add","add",235287739))){
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(model));
if(clojure.string.blank_QMARK_.call(null,title)){
return model;
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),""),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.model.init_todo.call(null,new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),title)], null));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e29242){if((e29242 instanceof Error)){
var e__19141__auto____$1 = e29242;
if((e__19141__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29232 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29232,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return app.reconciler._update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29254){if((e29254 instanceof Error)){
var e__19141__auto____$2 = e29254;
if((e__19141__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19141__auto____$2;
}
} else {
throw e29254;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29243){if((e29243 instanceof Error)){
var e__19141__auto____$2 = e29243;
if((e__19141__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return app.reconciler._update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29244){if((e29244 instanceof Error)){
var e__19141__auto____$3 = e29244;
if((e__19141__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29234 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29234,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return app.reconciler._update_todo.call(null,app.reconciler._update_todos.call(null,model,((function (id,action_0__29234,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__){
return (function (p1__29198_SHARP_){
return cljs.core.assoc.call(null,p1__29198_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29198_SHARP_),id));
});})(id,action_0__29234,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__))
),id,((function (id,action_0__29234,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__){
return (function (p1__29199_SHARP_){
return cljs.core.assoc.call(null,p1__29199_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__29199_SHARP_));
});})(id,action_0__29234,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29253){if((e29253 instanceof Error)){
var e__19141__auto____$4 = e29253;
if((e__19141__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19141__auto____$4;
}
} else {
throw e29253;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29245){if((e29245 instanceof Error)){
var e__19141__auto____$4 = e29245;
if((e__19141__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__29236 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29236,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return app.reconciler._update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29252){if((e29252 instanceof Error)){
var e__19141__auto____$5 = e29252;
if((e__19141__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19141__auto____$5;
}
} else {
throw e29252;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29246){if((e29246 instanceof Error)){
var e__19141__auto____$5 = e29246;
if((e__19141__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29239 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29239,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app.reconciler._find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return app.reconciler._remove_todo.call(null,model,id);
} else {
return app.reconciler._update_todos.call(null,model,((function (title,id,action_0__29239,e__19141__auto____$5,e__19141__auto____$4,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__){
return (function (p1__29200_SHARP_){
return cljs.core.assoc.call(null,p1__29200_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__29239,e__19141__auto____$5,e__19141__auto____$4,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e29249){if((e29249 instanceof Error)){
var e__19141__auto____$6 = e29249;
if((e__19141__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__29239 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29239,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return app.reconciler._update_todo.call(null,model,id,((function (id,action_0__29239,e__19141__auto____$6,e__19141__auto____$5,e__19141__auto____$4,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__){
return (function (p1__29201_SHARP_){
return cljs.core.assoc.call(null,p1__29201_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__29201_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__29239,e__19141__auto____$6,e__19141__auto____$5,e__19141__auto____$4,e__19141__auto____$3,e__19141__auto____$2,e__19141__auto____$1,e__19141__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29250){if((e29250 instanceof Error)){
var e__19141__auto____$7 = e29250;
if((e__19141__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__29239 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29239,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return app.reconciler._remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29251){if((e29251 instanceof Error)){
var e__19141__auto____$8 = e29251;
if((e__19141__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19141__auto____$8;
}
} else {
throw e29251;

}
}} else {
throw e__19141__auto____$7;
}
} else {
throw e29250;

}
}} else {
throw e__19141__auto____$6;
}
} else {
throw e29249;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29247){if((e29247 instanceof Error)){
var e__19141__auto____$6 = e29247;
if((e__19141__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return app.reconciler._remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29248){if((e29248 instanceof Error)){
var e__19141__auto____$7 = e29248;
if((e__19141__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19141__auto____$7;
}
} else {
throw e29248;

}
}} else {
throw e__19141__auto____$6;
}
} else {
throw e29247;

}
}} else {
throw e__19141__auto____$5;
}
} else {
throw e29246;

}
}} else {
throw e__19141__auto____$4;
}
} else {
throw e29245;

}
}} else {
throw e__19141__auto____$3;
}
} else {
throw e29244;

}
}} else {
throw e__19141__auto____$2;
}
} else {
throw e29243;

}
}} else {
throw e__19141__auto____$1;
}
} else {
throw e29242;

}
}} else {
throw e__19141__auto__;
}
} else {
throw e29241;

}
}});

//# sourceMappingURL=reconciler.js.map?rel=1456176286277