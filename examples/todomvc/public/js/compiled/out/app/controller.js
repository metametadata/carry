// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.controller');
goog.require('cljs.core');
goog.require('cljs.core.match');
app.controller.control = (function app$controller$control(_model,signal,dispatch){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__36502 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__36502,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36527){if((e36527 instanceof Error)){
var e__20564__auto__ = e36527;
if((e__20564__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto__;
}
} else {
throw e36527;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36513){if((e36513 instanceof Error)){
var e__20564__auto__ = e36513;
if((e__20564__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36514){if((e36514 instanceof Error)){
var e__20564__auto____$1 = e36514;
if((e__20564__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__36504 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__36504,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36526){if((e36526 instanceof Error)){
var e__20564__auto____$2 = e36526;
if((e__20564__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$2;
}
} else {
throw e36526;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36515){if((e36515 instanceof Error)){
var e__20564__auto____$2 = e36515;
if((e__20564__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36516){if((e36516 instanceof Error)){
var e__20564__auto____$3 = e36516;
if((e__20564__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__36506 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__36506,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36525){if((e36525 instanceof Error)){
var e__20564__auto____$4 = e36525;
if((e__20564__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$4;
}
} else {
throw e36525;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36517){if((e36517 instanceof Error)){
var e__20564__auto____$4 = e36517;
if((e__20564__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__36508 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__36508,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36524){if((e36524 instanceof Error)){
var e__20564__auto____$5 = e36524;
if((e__20564__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$5;
}
} else {
throw e36524;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36518){if((e36518 instanceof Error)){
var e__20564__auto____$5 = e36518;
if((e__20564__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__36511 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__36511,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36521){if((e36521 instanceof Error)){
var e__20564__auto____$6 = e36521;
if((e__20564__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__36511 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__36511,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36522){if((e36522 instanceof Error)){
var e__20564__auto____$7 = e36522;
if((e__20564__auto____$7 === cljs.core.match.backtrack)){
try{var signal_0__36511 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__36511,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36523){if((e36523 instanceof Error)){
var e__20564__auto____$8 = e36523;
if((e__20564__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20564__auto____$8;
}
} else {
throw e36523;

}
}} else {
throw e__20564__auto____$7;
}
} else {
throw e36522;

}
}} else {
throw e__20564__auto____$6;
}
} else {
throw e36521;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36519){if((e36519 instanceof Error)){
var e__20564__auto____$6 = e36519;
if((e__20564__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36520){if((e36520 instanceof Error)){
var e__20564__auto____$7 = e36520;
if((e__20564__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20564__auto____$7;
}
} else {
throw e36520;

}
}} else {
throw e__20564__auto____$6;
}
} else {
throw e36519;

}
}} else {
throw e__20564__auto____$5;
}
} else {
throw e36518;

}
}} else {
throw e__20564__auto____$4;
}
} else {
throw e36517;

}
}} else {
throw e__20564__auto____$3;
}
} else {
throw e36516;

}
}} else {
throw e__20564__auto____$2;
}
} else {
throw e36515;

}
}} else {
throw e__20564__auto____$1;
}
} else {
throw e36514;

}
}} else {
throw e__20564__auto__;
}
} else {
throw e36513;

}
}});

//# sourceMappingURL=controller.js.map?rel=1456069945894