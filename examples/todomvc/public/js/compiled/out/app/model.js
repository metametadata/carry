// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.model');
goog.require('cljs.core');
goog.require('schema.core');
app.model.Schema = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"field","field",-1302436500),schema.core.Str,new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Int,new cljs.core.Keyword(null,"title","title",636505583),schema.core.Str,new cljs.core.Keyword(null,"completed?","completed?",946828354),schema.core.Bool,new cljs.core.Keyword(null,"original-title","original-title",1909208979),schema.core.Str,new cljs.core.Keyword(null,"editing?","editing?",1646440800),schema.core.Bool], null)], null),new cljs.core.Keyword(null,"next-id","next-id",-224240762),schema.core.Int,schema.core.Any,schema.core.Any], true, false);
app.model.init_todo = (function app$model$init_todo(id,title){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"completed?","completed?",946828354),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"",new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});
app.model.new_model = (function app$model$new_model(todo_titles){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,app.model.init_todo),cljs.core.map_indexed.call(null,cljs.core.vector,todo_titles)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.count.call(null,todo_titles)], null);
});

//# sourceMappingURL=model.js.map?rel=1456176285892