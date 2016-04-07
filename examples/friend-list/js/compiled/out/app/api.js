// Compiled by ClojureScript 1.7.228 {}
goog.provide('app.api');
goog.require('cljs.core');
app.api._friends = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Bruce Wayne",new cljs.core.Keyword(null,"username","username",1605666410),"@Batman"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Clark Kent",new cljs.core.Keyword(null,"username","username",1605666410),"@Superman"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Maz 'Magnus' Eisenhardt",new cljs.core.Keyword(null,"username","username",1605666410),"@Magneto"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"Reed Richards",new cljs.core.Keyword(null,"username","username",1605666410),"@Mister-Fantastic"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"Charles Francis Xavier",new cljs.core.Keyword(null,"username","username",1605666410),"@ProfessorX"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"name","name",1843675177),"Lex Luthor",new cljs.core.Keyword(null,"username","username",1605666410),"@LexLuthor"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"name","name",1843675177),"Benjamin Grimm",new cljs.core.Keyword(null,"username","username",1605666410),"@Thing"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"name","name",1843675177),"Walter Langkowski",new cljs.core.Keyword(null,"username","username",1605666410),"@Sasquatch"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(9),new cljs.core.Keyword(null,"name","name",1843675177),"Andrew Nolan",new cljs.core.Keyword(null,"username","username",1605666410),"@Ferro-Lad"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(10),new cljs.core.Keyword(null,"name","name",1843675177),"Jonathan Osterman",new cljs.core.Keyword(null,"username","username",1605666410),"@Dr.Manhattan"], null)], null);
/**
 * Async.
 */
app.api.search = (function app$api$search(query,on_success){
var query__$1 = clojure.string.lower_case.call(null,clojure.string.trim.call(null,query));
var result = cljs.core.filter.call(null,((function (query__$1){
return (function (f){
return cljs.core.some.call(null,((function (query__$1){
return (function (p1__86876_SHARP_){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,p1__86876_SHARP_),query__$1);
});})(query__$1))
,cljs.core.map.call(null,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"username","username",1605666410)], null)));
});})(query__$1))
,app.api._friends);
var t = cljs.core.rand_int.call(null,(1000));
cljs.core.println.call(null,"search",cljs.core.pr_str.call(null,query__$1)," t =",t);

return window.setTimeout(((function (query__$1,result,t){
return (function (){
return on_success.call(null,result);
});})(query__$1,result,t))
,t);
});

//# sourceMappingURL=api.js.map?rel=1460037776925