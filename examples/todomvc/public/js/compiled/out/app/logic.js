// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.reconciler');
goog.require('cljs.core');
goog.require('app.model');
goog.require('com.rpl.specter');
goog.require('cljs.core.match');
app.reconciler._update_todos_STAR_ = (function app$reconciler$_update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___36205 = arguments.length;
var i__17810__auto___36206 = (0);
while(true){
if((i__17810__auto___36206 < len__17809__auto___36205)){
args__17816__auto__.push((arguments[i__17810__auto___36206]));

var G__36207 = (i__17810__auto___36206 + (1));
i__17810__auto___36206 = G__36207;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return app.reconciler._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

app.reconciler._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__36200_SHARP_){
return cljs.core.apply.call(null,f,p1__36200_SHARP_,args);
}),model);
});

app.reconciler._update_todos_STAR_.cljs$lang$maxFixedArity = (3);

app.reconciler._update_todos_STAR_.cljs$lang$applyTo = (function (seq36201){
var G__36202 = cljs.core.first.call(null,seq36201);
var seq36201__$1 = cljs.core.next.call(null,seq36201);
var G__36203 = cljs.core.first.call(null,seq36201__$1);
var seq36201__$2 = cljs.core.next.call(null,seq36201__$1);
var G__36204 = cljs.core.first.call(null,seq36201__$2);
var seq36201__$3 = cljs.core.next.call(null,seq36201__$2);
return app.reconciler._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__36202,G__36203,G__36204,seq36201__$3);
});
app.reconciler._update_todo = (function app$reconciler$_update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___36213 = arguments.length;
var i__17810__auto___36214 = (0);
while(true){
if((i__17810__auto___36214 < len__17809__auto___36213)){
args__17816__auto__.push((arguments[i__17810__auto___36214]));

var G__36215 = (i__17810__auto___36214 + (1));
i__17810__auto___36214 = G__36215;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return app.reconciler._update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

app.reconciler._update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,app.reconciler._update_todos_STAR_,model,(function (p1__36208_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36208_SHARP_),id);
}),f,args);
});

app.reconciler._update_todo.cljs$lang$maxFixedArity = (3);

app.reconciler._update_todo.cljs$lang$applyTo = (function (seq36209){
var G__36210 = cljs.core.first.call(null,seq36209);
var seq36209__$1 = cljs.core.next.call(null,seq36209);
var G__36211 = cljs.core.first.call(null,seq36209__$1);
var seq36209__$2 = cljs.core.next.call(null,seq36209__$1);
var G__36212 = cljs.core.first.call(null,seq36209__$2);
var seq36209__$3 = cljs.core.next.call(null,seq36209__$2);
return app.reconciler._update_todo.cljs$core$IFn$_invoke$arity$variadic(G__36210,G__36211,G__36212,seq36209__$3);
});
app.reconciler._update_todos = (function app$reconciler$_update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___36219 = arguments.length;
var i__17810__auto___36220 = (0);
while(true){
if((i__17810__auto___36220 < len__17809__auto___36219)){
args__17816__auto__.push((arguments[i__17810__auto___36220]));

var G__36221 = (i__17810__auto___36220 + (1));
i__17810__auto___36220 = G__36221;
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

app.reconciler._update_todos.cljs$lang$applyTo = (function (seq36216){
var G__36217 = cljs.core.first.call(null,seq36216);
var seq36216__$1 = cljs.core.next.call(null,seq36216);
var G__36218 = cljs.core.first.call(null,seq36216__$1);
var seq36216__$2 = cljs.core.next.call(null,seq36216__$1);
return app.reconciler._update_todos.cljs$core$IFn$_invoke$arity$variadic(G__36217,G__36218,seq36216__$2);
});
app.reconciler._find_todo = (function app$reconciler$_find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__36222_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36222_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
app.reconciler._remove_todos = (function app$reconciler$_remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__36223_SHARP_){
return cljs.core.remove.call(null,pred,p1__36223_SHARP_);
}));
});
app.reconciler._remove_todo = (function app$reconciler$_remove_todo(model,id){
return app.reconciler._remove_todos.call(null,model,(function (p1__36224_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36224_SHARP_),id);
}));
});
app.reconciler.reconcile = (function app$reconciler$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__36257 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__36257,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36282){if((e36282 instanceof Error)){
var e__20564__auto__ = e36282;
if((e__20564__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto__;
}
} else {
throw e36282;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36268){if((e36268 instanceof Error)){
var e__20564__auto__ = e36268;
if((e__20564__auto__ === cljs.core.match.backtrack)){
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
}catch (e36269){if((e36269 instanceof Error)){
var e__20564__auto____$1 = e36269;
if((e__20564__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__36259 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__36259,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return app.reconciler._update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36281){if((e36281 instanceof Error)){
var e__20564__auto____$2 = e36281;
if((e__20564__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$2;
}
} else {
throw e36281;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36270){if((e36270 instanceof Error)){
var e__20564__auto____$2 = e36270;
if((e__20564__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return app.reconciler._update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36271){if((e36271 instanceof Error)){
var e__20564__auto____$3 = e36271;
if((e__20564__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__36261 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__36261,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return app.reconciler._update_todo.call(null,app.reconciler._update_todos.call(null,model,((function (id,action_0__36261,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__){
return (function (p1__36225_SHARP_){
return cljs.core.assoc.call(null,p1__36225_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36225_SHARP_),id));
});})(id,action_0__36261,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__))
),id,((function (id,action_0__36261,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__){
return (function (p1__36226_SHARP_){
return cljs.core.assoc.call(null,p1__36226_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__36226_SHARP_));
});})(id,action_0__36261,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36280){if((e36280 instanceof Error)){
var e__20564__auto____$4 = e36280;
if((e__20564__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$4;
}
} else {
throw e36280;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36272){if((e36272 instanceof Error)){
var e__20564__auto____$4 = e36272;
if((e__20564__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__36263 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__36263,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return app.reconciler._update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36279){if((e36279 instanceof Error)){
var e__20564__auto____$5 = e36279;
if((e__20564__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$5;
}
} else {
throw e36279;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36273){if((e36273 instanceof Error)){
var e__20564__auto____$5 = e36273;
if((e__20564__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__36266 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__36266,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app.reconciler._find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return app.reconciler._remove_todo.call(null,model,id);
} else {
return app.reconciler._update_todos.call(null,model,((function (title,id,action_0__36266,e__20564__auto____$5,e__20564__auto____$4,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__){
return (function (p1__36227_SHARP_){
return cljs.core.assoc.call(null,p1__36227_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__36266,e__20564__auto____$5,e__20564__auto____$4,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e36276){if((e36276 instanceof Error)){
var e__20564__auto____$6 = e36276;
if((e__20564__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__36266 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__36266,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return app.reconciler._update_todo.call(null,model,id,((function (id,action_0__36266,e__20564__auto____$6,e__20564__auto____$5,e__20564__auto____$4,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__){
return (function (p1__36228_SHARP_){
return cljs.core.assoc.call(null,p1__36228_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__36228_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__36266,e__20564__auto____$6,e__20564__auto____$5,e__20564__auto____$4,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36277){if((e36277 instanceof Error)){
var e__20564__auto____$7 = e36277;
if((e__20564__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__36266 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__36266,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return app.reconciler._remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36278){if((e36278 instanceof Error)){
var e__20564__auto____$8 = e36278;
if((e__20564__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$8;
}
} else {
throw e36278;

}
}} else {
throw e__20564__auto____$7;
}
} else {
throw e36277;

}
}} else {
throw e__20564__auto____$6;
}
} else {
throw e36276;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36274){if((e36274 instanceof Error)){
var e__20564__auto____$6 = e36274;
if((e__20564__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return app.reconciler._remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36275){if((e36275 instanceof Error)){
var e__20564__auto____$7 = e36275;
if((e__20564__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20564__auto____$7;
}
} else {
throw e36275;

}
}} else {
throw e__20564__auto____$6;
}
} else {
throw e36274;

}
}} else {
throw e__20564__auto____$5;
}
} else {
throw e36273;

}
}} else {
throw e__20564__auto____$4;
}
} else {
throw e36272;

}
}} else {
throw e__20564__auto____$3;
}
} else {
throw e36271;

}
}} else {
throw e__20564__auto____$2;
}
} else {
throw e36270;

}
}} else {
throw e__20564__auto____$1;
}
} else {
throw e36269;

}
}} else {
throw e__20564__auto__;
}
} else {
throw e36268;

}
}});

//# sourceMappingURL=logic.js.map?rel=1456069800698