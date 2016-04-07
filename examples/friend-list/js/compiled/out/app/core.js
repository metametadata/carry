// Compiled by ClojureScript 1.7.228 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('hodgepodge.core');
goog.require('app.api');
goog.require('reagent.core');
goog.require('friend_list.core');
goog.require('reagent_mvsa.core');
goog.require('middleware.logging');
goog.require('middleware.devtools');
goog.require('middleware.history');
cljs.core.enable_console_print_BANG_.call(null);
app.core.main = (function app$core$main(){
var history = middleware.history.new_hash_history.call(null);
var storage = hodgepodge.core.local_storage;
var app_spec = middleware.logging.add.call(null,middleware.devtools.add_debugger.call(null,friend_list.core.new_spec.call(null,history,app.api.search),storage,new cljs.core.Keyword(null,"friend-list-debugger-model","friend-list-debugger-model",1869212771)));
var app__$1 = reagent_mvsa.core.app.call(null,app_spec);
var vec__95395 = reagent_mvsa.core.connect_ui.call(null,app__$1,friend_list.core.view_model,friend_list.core.view);
var app_view_model = cljs.core.nth.call(null,vec__95395,(0),null);
var app_view = cljs.core.nth.call(null,vec__95395,(1),null);
var vec__95396 = middleware.devtools.connect_debugger_ui.call(null,app__$1);
var _ = cljs.core.nth.call(null,vec__95396,(0),null);
var debugger_view = cljs.core.nth.call(null,vec__95396,(1),null);
new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591).cljs$core$IFn$_invoke$arity$1(app__$1).call(null,new cljs.core.Keyword(null,"on-start","on-start",-1839785985));

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),app_view,debugger_view], null),document.getElementById("root"));

return cljs.core.assoc.call(null,app__$1,new cljs.core.Keyword(null,"view-model","view-model",-895405675),app_view_model);
});
app.core.app = app.core.main.call(null);
app.core.before_jsload = (function app$core$before_jsload(){
return new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591).cljs$core$IFn$_invoke$arity$1(app.core.app).call(null,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
});
app.core.on_jsload = (function app$core$on_jsload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1460037795659