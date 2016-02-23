// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('hodgepodge.core');
goog.require('mvsa.core');
goog.require('app.middleware.routing');
goog.require('reagent.core');
goog.require('app.view_model');
goog.require('app.middleware.devtools');
goog.require('app.spec');
goog.require('app.view');
goog.require('app.middleware.logging');
goog.require('devtools.core');
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.enable_feature_BANG_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
devtools.core.install_BANG_.call(null);
app.core.main = (function app$core$main(){
cljs.core.println.call(null,"Hi.");

var history = app.middleware.routing.new_history.call(null);
var storage = hodgepodge.core.local_storage;
var app_spec = app.middleware.logging.add.call(null,app.middleware.devtools.add_debugger.call(null,app.spec.new_spec.call(null,history,storage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Finish this project","Take a bath"], null)),storage,new cljs.core.Keyword(null,"debugger-model","debugger-model",1637157572)),"[debugger] ");
var app__$1 = mvsa.core.app.call(null,app_spec);
var vec__29262 = mvsa.core.connect_ui.call(null,app__$1,app.view_model.view_model,app.view.view);
var app_view_model = cljs.core.nth.call(null,vec__29262,(0),null);
var app_view = cljs.core.nth.call(null,vec__29262,(1),null);
var vec__29263 = app.middleware.devtools.connect_debugger_ui.call(null,app__$1);
var _ = cljs.core.nth.call(null,vec__29263,(0),null);
var debugger_view = cljs.core.nth.call(null,vec__29263,(1),null);
new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(app__$1).call(null);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),app_view,debugger_view], null),document.getElementById("root"));

return cljs.core.assoc.call(null,app__$1,new cljs.core.Keyword(null,"view-model","view-model",-895405675),app_view_model);
});
app.core.app = app.core.main.call(null);
app.core.before_jsload = (function app$core$before_jsload(){
return new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(app.core.app).call(null);
});
app.core.on_jsload = (function app$core$on_jsload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1456176286483