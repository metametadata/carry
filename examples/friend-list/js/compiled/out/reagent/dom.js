// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__18298__auto__ = (function (){var and__18286__auto__ = typeof ReactDOM !== 'undefined';
if(and__18286__auto__){
return ReactDOM;
} else {
return and__18286__auto__;
}
})();
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
var and__18286__auto__ = typeof require !== 'undefined';
if(and__18286__auto__){
return require("react-dom");
} else {
return and__18286__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_88164 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_88164){
return (function (){
var _STAR_always_update_STAR_88165 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_88165;
}});})(_STAR_always_update_STAR_88164))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_88164;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args88166 = [];
var len__19357__auto___88169 = arguments.length;
var i__19358__auto___88170 = (0);
while(true){
if((i__19358__auto___88170 < len__19357__auto___88169)){
args88166.push((arguments[i__19358__auto___88170]));

var G__88171 = (i__19358__auto___88170 + (1));
i__19358__auto___88170 = G__88171;
continue;
} else {
}
break;
}

var G__88168 = args88166.length;
switch (G__88168) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88166.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__88177_88181 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__88178_88182 = null;
var count__88179_88183 = (0);
var i__88180_88184 = (0);
while(true){
if((i__88180_88184 < count__88179_88183)){
var v_88185 = cljs.core._nth.call(null,chunk__88178_88182,i__88180_88184);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_88185);

var G__88186 = seq__88177_88181;
var G__88187 = chunk__88178_88182;
var G__88188 = count__88179_88183;
var G__88189 = (i__88180_88184 + (1));
seq__88177_88181 = G__88186;
chunk__88178_88182 = G__88187;
count__88179_88183 = G__88188;
i__88180_88184 = G__88189;
continue;
} else {
var temp__4657__auto___88190 = cljs.core.seq.call(null,seq__88177_88181);
if(temp__4657__auto___88190){
var seq__88177_88191__$1 = temp__4657__auto___88190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88177_88191__$1)){
var c__19102__auto___88192 = cljs.core.chunk_first.call(null,seq__88177_88191__$1);
var G__88193 = cljs.core.chunk_rest.call(null,seq__88177_88191__$1);
var G__88194 = c__19102__auto___88192;
var G__88195 = cljs.core.count.call(null,c__19102__auto___88192);
var G__88196 = (0);
seq__88177_88181 = G__88193;
chunk__88178_88182 = G__88194;
count__88179_88183 = G__88195;
i__88180_88184 = G__88196;
continue;
} else {
var v_88197 = cljs.core.first.call(null,seq__88177_88191__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_88197);

var G__88198 = cljs.core.next.call(null,seq__88177_88191__$1);
var G__88199 = null;
var G__88200 = (0);
var G__88201 = (0);
seq__88177_88181 = G__88198;
chunk__88178_88182 = G__88199;
count__88179_88183 = G__88200;
i__88180_88184 = G__88201;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1460037781083