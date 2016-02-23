// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.logic');
goog.require('cljs.core');
goog.require('app.middleware.routing');
goog.require('mvsa.helpers');
goog.require('cljs.core.match');
goog.require('reagent.core');
goog.require('com.rpl.specter');
app.logic._init_todo = (function app$logic$_init_todo(id,title){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"completed?","completed?",946828354),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"",new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});
app.logic.new_model = (function app$logic$new_model(todo_titles){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,app.logic._init_todo),cljs.core.map_indexed.call(null,cljs.core.vector,todo_titles)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.count.call(null,todo_titles)], null);
});
app.logic._update_todos_STAR_ = (function app$logic$_update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___33574 = arguments.length;
var i__17810__auto___33575 = (0);
while(true){
if((i__17810__auto___33575 < len__17809__auto___33574)){
args__17816__auto__.push((arguments[i__17810__auto___33575]));

var G__33576 = (i__17810__auto___33575 + (1));
i__17810__auto___33575 = G__33576;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return app.logic._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

app.logic._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__33569_SHARP_){
return cljs.core.apply.call(null,f,p1__33569_SHARP_,args);
}),model);
});

app.logic._update_todos_STAR_.cljs$lang$maxFixedArity = (3);

app.logic._update_todos_STAR_.cljs$lang$applyTo = (function (seq33570){
var G__33571 = cljs.core.first.call(null,seq33570);
var seq33570__$1 = cljs.core.next.call(null,seq33570);
var G__33572 = cljs.core.first.call(null,seq33570__$1);
var seq33570__$2 = cljs.core.next.call(null,seq33570__$1);
var G__33573 = cljs.core.first.call(null,seq33570__$2);
var seq33570__$3 = cljs.core.next.call(null,seq33570__$2);
return app.logic._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33571,G__33572,G__33573,seq33570__$3);
});
app.logic._update_todo = (function app$logic$_update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___33582 = arguments.length;
var i__17810__auto___33583 = (0);
while(true){
if((i__17810__auto___33583 < len__17809__auto___33582)){
args__17816__auto__.push((arguments[i__17810__auto___33583]));

var G__33584 = (i__17810__auto___33583 + (1));
i__17810__auto___33583 = G__33584;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return app.logic._update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

app.logic._update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,app.logic._update_todos_STAR_,model,(function (p1__33577_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33577_SHARP_),id);
}),f,args);
});

app.logic._update_todo.cljs$lang$maxFixedArity = (3);

app.logic._update_todo.cljs$lang$applyTo = (function (seq33578){
var G__33579 = cljs.core.first.call(null,seq33578);
var seq33578__$1 = cljs.core.next.call(null,seq33578);
var G__33580 = cljs.core.first.call(null,seq33578__$1);
var seq33578__$2 = cljs.core.next.call(null,seq33578__$1);
var G__33581 = cljs.core.first.call(null,seq33578__$2);
var seq33578__$3 = cljs.core.next.call(null,seq33578__$2);
return app.logic._update_todo.cljs$core$IFn$_invoke$arity$variadic(G__33579,G__33580,G__33581,seq33578__$3);
});
app.logic._update_todos = (function app$logic$_update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___33588 = arguments.length;
var i__17810__auto___33589 = (0);
while(true){
if((i__17810__auto___33589 < len__17809__auto___33588)){
args__17816__auto__.push((arguments[i__17810__auto___33589]));

var G__33590 = (i__17810__auto___33589 + (1));
i__17810__auto___33589 = G__33590;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return app.logic._update_todos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

app.logic._update_todos.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,app.logic._update_todos_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

app.logic._update_todos.cljs$lang$maxFixedArity = (2);

app.logic._update_todos.cljs$lang$applyTo = (function (seq33585){
var G__33586 = cljs.core.first.call(null,seq33585);
var seq33585__$1 = cljs.core.next.call(null,seq33585);
var G__33587 = cljs.core.first.call(null,seq33585__$1);
var seq33585__$2 = cljs.core.next.call(null,seq33585__$1);
return app.logic._update_todos.cljs$core$IFn$_invoke$arity$variadic(G__33586,G__33587,seq33585__$2);
});
app.logic._find_todo = (function app$logic$_find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__33591_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33591_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
app.logic._remove_todos = (function app$logic$_remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__33592_SHARP_){
return cljs.core.remove.call(null,pred,p1__33592_SHARP_);
}));
});
app.logic._remove_todo = (function app$logic$_remove_todo(model,id){
return app.logic._remove_todos.call(null,model,(function (p1__33593_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33593_SHARP_),id);
}));
});
app.logic.control = (function app$logic$control(_model,signal,dispatch){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__33622 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__33622,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33647){if((e33647 instanceof Error)){
var e__20564__auto__ = e33647;
if((e__20564__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto__;
}
} else {
throw e33647;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33633){if((e33633 instanceof Error)){
var e__20564__auto__ = e33633;
if((e__20564__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33634){if((e33634 instanceof Error)){
var e__20564__auto____$1 = e33634;
if((e__20564__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__33624 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__33624,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33646){if((e33646 instanceof Error)){
var e__20564__auto____$2 = e33646;
if((e__20564__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$2;
}
} else {
throw e33646;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33635){if((e33635 instanceof Error)){
var e__20564__auto____$2 = e33635;
if((e__20564__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33636){if((e33636 instanceof Error)){
var e__20564__auto____$3 = e33636;
if((e__20564__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__33626 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__33626,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33645){if((e33645 instanceof Error)){
var e__20564__auto____$4 = e33645;
if((e__20564__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$4;
}
} else {
throw e33645;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33637){if((e33637 instanceof Error)){
var e__20564__auto____$4 = e33637;
if((e__20564__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__33628 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__33628,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33644){if((e33644 instanceof Error)){
var e__20564__auto____$5 = e33644;
if((e__20564__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$5;
}
} else {
throw e33644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33638){if((e33638 instanceof Error)){
var e__20564__auto____$5 = e33638;
if((e__20564__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__33631 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__33631,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33641){if((e33641 instanceof Error)){
var e__20564__auto____$6 = e33641;
if((e__20564__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__33631 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__33631,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33642){if((e33642 instanceof Error)){
var e__20564__auto____$7 = e33642;
if((e__20564__auto____$7 === cljs.core.match.backtrack)){
try{var signal_0__33631 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__33631,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33643){if((e33643 instanceof Error)){
var e__20564__auto____$8 = e33643;
if((e__20564__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$8;
}
} else {
throw e33643;

}
}} else {
throw e__20564__auto____$7;
}
} else {
throw e33642;

}
}} else {
throw e__20564__auto____$6;
}
} else {
throw e33641;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33639){if((e33639 instanceof Error)){
var e__20564__auto____$6 = e33639;
if((e__20564__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33640){if((e33640 instanceof Error)){
var e__20564__auto____$7 = e33640;
if((e__20564__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20564__auto____$7;
}
} else {
throw e33640;

}
}} else {
throw e__20564__auto____$6;
}
} else {
throw e33639;

}
}} else {
throw e__20564__auto____$5;
}
} else {
throw e33638;

}
}} else {
throw e__20564__auto____$4;
}
} else {
throw e33637;

}
}} else {
throw e__20564__auto____$3;
}
} else {
throw e33636;

}
}} else {
throw e__20564__auto____$2;
}
} else {
throw e33635;

}
}} else {
throw e__20564__auto____$1;
}
} else {
throw e33634;

}
}} else {
throw e__20564__auto__;
}
} else {
throw e33633;

}
}});
app.logic.reconcile = (function app$logic$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__33680 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__33680,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33705){if((e33705 instanceof Error)){
var e__20564__auto__ = e33705;
if((e__20564__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto__;
}
} else {
throw e33705;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33691){if((e33691 instanceof Error)){
var e__20564__auto__ = e33691;
if((e__20564__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"add","add",235287739))){
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(model));
if(clojure.string.blank_QMARK_.call(null,title)){
return model;
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),""),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.logic._init_todo.call(null,new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),title)], null));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33692){if((e33692 instanceof Error)){
var e__20564__auto____$1 = e33692;
if((e__20564__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__33682 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__33682,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return app.logic._update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33704){if((e33704 instanceof Error)){
var e__20564__auto____$2 = e33704;
if((e__20564__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$2;
}
} else {
throw e33704;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33693){if((e33693 instanceof Error)){
var e__20564__auto____$2 = e33693;
if((e__20564__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return app.logic._update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33694){if((e33694 instanceof Error)){
var e__20564__auto____$3 = e33694;
if((e__20564__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__33684 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__33684,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return app.logic._update_todo.call(null,app.logic._update_todos.call(null,model,((function (id,action_0__33684,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__){
return (function (p1__33648_SHARP_){
return cljs.core.assoc.call(null,p1__33648_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33648_SHARP_),id));
});})(id,action_0__33684,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__))
),id,((function (id,action_0__33684,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__){
return (function (p1__33649_SHARP_){
return cljs.core.assoc.call(null,p1__33649_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__33649_SHARP_));
});})(id,action_0__33684,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33703){if((e33703 instanceof Error)){
var e__20564__auto____$4 = e33703;
if((e__20564__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$4;
}
} else {
throw e33703;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33695){if((e33695 instanceof Error)){
var e__20564__auto____$4 = e33695;
if((e__20564__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__33686 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__33686,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return app.logic._update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33702){if((e33702 instanceof Error)){
var e__20564__auto____$5 = e33702;
if((e__20564__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$5;
}
} else {
throw e33702;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33696){if((e33696 instanceof Error)){
var e__20564__auto____$5 = e33696;
if((e__20564__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__33689 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__33689,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app.logic._find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return app.logic._remove_todo.call(null,model,id);
} else {
return app.logic._update_todos.call(null,model,((function (title,id,action_0__33689,e__20564__auto____$5,e__20564__auto____$4,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__){
return (function (p1__33650_SHARP_){
return cljs.core.assoc.call(null,p1__33650_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__33689,e__20564__auto____$5,e__20564__auto____$4,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e33699){if((e33699 instanceof Error)){
var e__20564__auto____$6 = e33699;
if((e__20564__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__33689 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__33689,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return app.logic._update_todo.call(null,model,id,((function (id,action_0__33689,e__20564__auto____$6,e__20564__auto____$5,e__20564__auto____$4,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__){
return (function (p1__33651_SHARP_){
return cljs.core.assoc.call(null,p1__33651_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__33651_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__33689,e__20564__auto____$6,e__20564__auto____$5,e__20564__auto____$4,e__20564__auto____$3,e__20564__auto____$2,e__20564__auto____$1,e__20564__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33700){if((e33700 instanceof Error)){
var e__20564__auto____$7 = e33700;
if((e__20564__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__33689 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__33689,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return app.logic._remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33701){if((e33701 instanceof Error)){
var e__20564__auto____$8 = e33701;
if((e__20564__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$8;
}
} else {
throw e33701;

}
}} else {
throw e__20564__auto____$7;
}
} else {
throw e33700;

}
}} else {
throw e__20564__auto____$6;
}
} else {
throw e33699;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33697){if((e33697 instanceof Error)){
var e__20564__auto____$6 = e33697;
if((e__20564__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return app.logic._remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e33698){if((e33698 instanceof Error)){
var e__20564__auto____$7 = e33698;
if((e__20564__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20564__auto____$7;
}
} else {
throw e33698;

}
}} else {
throw e__20564__auto____$6;
}
} else {
throw e33697;

}
}} else {
throw e__20564__auto____$5;
}
} else {
throw e33696;

}
}} else {
throw e__20564__auto____$4;
}
} else {
throw e33695;

}
}} else {
throw e__20564__auto____$3;
}
} else {
throw e33694;

}
}} else {
throw e__20564__auto____$2;
}
} else {
throw e33693;

}
}} else {
throw e__20564__auto____$1;
}
} else {
throw e33692;

}
}} else {
throw e__20564__auto__;
}
} else {
throw e33691;

}
}});
app.logic._visibility = (function app$logic$_visibility(visibility_spec,model){
var temp__4423__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__33706_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(p1__33706_SHARP_),new cljs.core.Keyword("app.middleware.routing","token","app.middleware.routing/token",1275550810).cljs$core$IFn$_invoke$arity$1(model));
}),visibility_spec)));
if(cljs.core.truth_(temp__4423__auto__)){
var result = temp__4423__auto__;
return result;
} else {
console.log("ERROR: Could not determine visibility for token",cljs.core.pr_str.call(null,new cljs.core.Keyword("app.middleware.routing","token","app.middleware.routing/token",1275550810).cljs$core$IFn$_invoke$arity$1(model)),". Will use some default visibility.");

return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,visibility_spec));
}
});
app.logic.view_model = (function app$logic$view_model(model){
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
return app.logic._visibility.call(null,cljs.core.deref.call(null,visibility_spec),cljs.core.deref.call(null,model));
});})(visibility_spec,all_todos))
);
return cljs.core.assoc.call(null,mvsa.helpers.track_keys.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500)], null)),new cljs.core.Keyword(null,"visibility-spec","visibility-spec",2039132286),visibility_spec,new cljs.core.Keyword(null,"visibility","visibility",1338380893),visibility,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793),reagent.ratom.make_reaction.call(null,((function (visibility_spec,all_todos,visibility){
return (function (){
return (cljs.core.count.call(null,cljs.core.deref.call(null,all_todos)) > (0));
});})(visibility_spec,all_todos,visibility))
),new cljs.core.Keyword(null,"todos","todos",630308868),reagent.ratom.make_reaction.call(null,((function (visibility_spec,all_todos,visibility){
return (function (){
return cljs.core.filter.call(null,(function (){var G__33708 = (((cljs.core.deref.call(null,visibility) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,visibility).fqn:null);
switch (G__33708) {
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
app.logic.on_start = (function app$logic$on_start(_model,_dispatch_signal){
return cljs.core.println.call(null,"[todos] custom start code");
});
app.logic.on_stop = (function app$logic$on_stop(_model,_dispatch_signal){
return cljs.core.println.call(null,"[todos] custom stop code");
});
app.logic.new_spec = (function app$logic$new_spec(history,todo_titles){
return app.middleware.routing.add.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),app.logic.new_model.call(null,todo_titles),new cljs.core.Keyword(null,"control","control",1892578036),app.logic.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),app.logic.reconcile,new cljs.core.Keyword(null,"on-start","on-start",-1839785985),app.logic.on_start,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),app.logic.on_stop], null),history);
});

//# sourceMappingURL=todos.js.map?rel=1456022753096