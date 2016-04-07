// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.dom.server');
goog.require('reagent.dom');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
reagent.core.is_client = reagent.impl.util.is_client;
reagent.core.react = reagent.impl.util.react;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 * That means the second argument must be a javascript object (or nil), and
 * that any Reagent hiccup forms must be processed with as-element. For example
 * like this:
 * 
 * (r/create-element "div" #js{:className "foo"}
 *    "Hi " (r/as-element [:strong "world!"])
 * 
 * which is equivalent to
 * 
 * [:div.foo "Hi" [:strong "world!"]]
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
var args88204 = [];
var len__19357__auto___88211 = arguments.length;
var i__19358__auto___88212 = (0);
while(true){
if((i__19358__auto___88212 < len__19357__auto___88211)){
args88204.push((arguments[i__19358__auto___88212]));

var G__88213 = (i__19358__auto___88212 + (1));
i__19358__auto___88212 = G__88213;
continue;
} else {
}
break;
}

var G__88210 = args88204.length;
switch (G__88210) {
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19376__auto__ = (new cljs.core.IndexedSeq(args88204.slice((3)),(0)));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19376__auto__);

}
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.call(null,type,null);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))))].join('')));
}

return (reagent.core.react["createElement"])(type,props);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))))].join('')));
}

return (reagent.core.react["createElement"])(type,props,child);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))))].join('')));
}

return cljs.core.apply.call(null,(reagent.core.react["createElement"]),type,props,child,children);
});

reagent.core.create_element.cljs$lang$applyTo = (function (seq88205){
var G__88206 = cljs.core.first.call(null,seq88205);
var seq88205__$1 = cljs.core.next.call(null,seq88205);
var G__88207 = cljs.core.first.call(null,seq88205__$1);
var seq88205__$2 = cljs.core.next.call(null,seq88205__$1);
var G__88208 = cljs.core.first.call(null,seq88205__$2);
var seq88205__$3 = cljs.core.next.call(null,seq88205__$2);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__88206,G__88207,G__88208,seq88205__$3);
});

reagent.core.create_element.cljs$lang$maxFixedArity = (3);
/**
 * Turns a vector of Hiccup syntax into a React element. Returns form unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element.call(null,form);
});
/**
 * Returns an adapter for a native React class, that may be used
 * just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null)))].join('')));
}

return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null)))].join('')));
}

return reagent.impl.component.reactify_component.call(null,c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be 
 * either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 * Optionally takes a callback that is called when the component is in place.
 * 
 * Returns the mounted component instance.
 */
reagent.core.render = (function reagent$core$render(var_args){
var args88215 = [];
var len__19357__auto___88218 = arguments.length;
var i__19358__auto___88219 = (0);
while(true){
if((i__19358__auto___88219 < len__19357__auto___88218)){
args88215.push((arguments[i__19358__auto___88219]));

var G__88220 = (i__19358__auto___88219 + (1));
i__19358__auto___88219 = G__88220;
continue;
} else {
}
break;
}

var G__88217 = args88215.length;
switch (G__88217) {
case 2:
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88215.length)].join('')));

}
});

reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container);
});

reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return reagent.dom.render.call(null,comp,container,callback);
});

reagent.core.render.cljs$lang$maxFixedArity = 3;
/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.dom.unmount_component_at_node.call(null,container);
});
/**
 * Turns a component into an HTML string.
 */
reagent.core.render_to_string = (function reagent$core$render_to_string(component){
return reagent.dom.server.render_to_string.call(null,component);
});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
reagent.core.render_component_to_string = reagent.core.render_to_string;
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.core.render_to_static_markup = (function reagent$core$render_to_static_markup(component){
return reagent.dom.server.render_to_static_markup.call(null,component);
});
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
reagent.core.force_update_all = (function reagent$core$force_update_all(){
return reagent.dom.force_update_all.call(null);
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 * looking like this:
 * {:get-initial-state (fn [this])
 * :component-will-receive-props (fn [this new-argv])
 * :should-component-update (fn [this old-argv new-argv])
 * :component-will-mount (fn [this])
 * :component-did-mount (fn [this])
 * :component-will-update (fn [this new-argv])
 * :component-did-update (fn [this old-argv])
 * :component-will-unmount (fn [this])
 * :reagent-render (fn [args....])   ;; or :render (fn [this])
 * }
 * 
 * Everything is optional, except either :reagent-render or :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 * Equivalent to (deref (r/state-atom this))
 */
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 * Equivalent to (reset! (state-atom this) new-state)
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 * Equivalent to (swap! (state-atom this) merge new-state)
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
var args88222 = [];
var len__19357__auto___88225 = arguments.length;
var i__19358__auto___88226 = (0);
while(true){
if((i__19358__auto___88226 < len__19357__auto___88225)){
args88222.push((arguments[i__19358__auto___88226]));

var G__88227 = (i__19358__auto___88226 + (1));
i__19358__auto___88226 = G__88227;
continue;
} else {
}
break;
}

var G__88224 = args88222.length;
switch (G__88224) {
case 1:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88222.length)].join('')));

}
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.call(null,this$,false);
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
return reagent.impl.util.force_update.call(null,this$,deep);
});

reagent.core.force_update.cljs$lang$maxFixedArity = 2;
/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return reagent.dom.dom_node.call(null,this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 * specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 * Note that this may not work in event handlers, since React.js does
 * batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * Reagent components that derefs one of these are automatically
 * re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
var args88229 = [];
var len__19357__auto___88234 = arguments.length;
var i__19358__auto___88235 = (0);
while(true){
if((i__19358__auto___88235 < len__19357__auto___88234)){
args88229.push((arguments[i__19358__auto___88235]));

var G__88236 = (i__19358__auto___88235 + (1));
i__19358__auto___88235 = G__88236;
continue;
} else {
}
break;
}

var G__88233 = args88229.length;
switch (G__88233) {
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__19376__auto__ = (new cljs.core.IndexedSeq(args88229.slice((1)),(0)));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19376__auto__);

}
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
});

reagent.core.atom.cljs$lang$applyTo = (function (seq88230){
var G__88231 = cljs.core.first.call(null,seq88230);
var seq88230__$1 = cljs.core.next.call(null,seq88230);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__88231,seq88230__$1);
});

reagent.core.atom.cljs$lang$maxFixedArity = (1);
/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
reagent.core.track = (function reagent$core$track(var_args){
var args__19364__auto__ = [];
var len__19357__auto___88240 = arguments.length;
var i__19358__auto___88241 = (0);
while(true){
if((i__19358__auto___88241 < len__19357__auto___88240)){
args__19364__auto__.push((arguments[i__19358__auto___88241]));

var G__88242 = (i__19358__auto___88241 + (1));
i__19358__auto___88241 = G__88242;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((1) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((1)),(0))):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19365__auto__);
});

reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return reagent.ratom.make_track.call(null,f,args);
});

reagent.core.track.cljs$lang$maxFixedArity = (1);

reagent.core.track.cljs$lang$applyTo = (function (seq88238){
var G__88239 = cljs.core.first.call(null,seq88238);
var seq88238__$1 = cljs.core.next.call(null,seq88238);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(G__88239,seq88238__$1);
});
/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___88245 = arguments.length;
var i__19358__auto___88246 = (0);
while(true){
if((i__19358__auto___88246 < len__19357__auto___88245)){
args__19364__auto__.push((arguments[i__19358__auto___88246]));

var G__88247 = (i__19358__auto___88246 + (1));
i__19358__auto___88246 = G__88247;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((1) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((1)),(0))):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19365__auto__);
});

reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
});

reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq88243){
var G__88244 = cljs.core.first.call(null,seq88243);
var seq88243__$1 = cljs.core.next.call(null,seq88243);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__88244,seq88243__$1);
});
/**
 * Stop the result of track! from updating.
 */
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__19364__auto__ = [];
var len__19357__auto___88251 = arguments.length;
var i__19358__auto___88252 = (0);
while(true){
if((i__19358__auto___88252 < len__19357__auto___88251)){
args__19364__auto__.push((arguments[i__19358__auto___88252]));

var G__88253 = (i__19358__auto___88252 + (1));
i__19358__auto___88252 = G__88253;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((2) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((2)),(0))):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19365__auto__);
});

reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"reset-fn","reset-fn",949643977,null))))].join('')));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
});

reagent.core.wrap.cljs$lang$maxFixedArity = (2);

reagent.core.wrap.cljs$lang$applyTo = (function (seq88248){
var G__88249 = cljs.core.first.call(null,seq88248);
var seq88248__$1 = cljs.core.next.call(null,seq88248);
var G__88250 = cljs.core.first.call(null,seq88248__$1);
var seq88248__$2 = cljs.core.next.call(null,seq88248__$1);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic(G__88249,G__88250,seq88248__$2);
});
/**
 * Provide a cursor into a Reagent atom.
 * 
 * Behaves like a Reagent atom but focuses updates and derefs to
 * the specified path within the wrapped Reagent atom. e.g.,
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 * 
 * The first parameter can also be a function, that should look something
 * like this:
 * 
 * (defn set-get
 *   ([k] (get-in @state k))
 *   ([k v] (swap! state assoc-in k v)))
 * 
 * The function will be called with one argument – the path passed to
 * cursor – when the cursor is deref'ed, and two arguments (path and new
 * value) when the cursor is modified.
 * 
 * Given that set-get function, (and that state is a Reagent atom, or
 * another cursor) these cursors are equivalent:
 * (cursor state [:foo]) and (cursor set-get [:foo]).
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___88260 = arguments.length;
var i__19358__auto___88261 = (0);
while(true){
if((i__19358__auto___88261 < len__19357__auto___88260)){
args__19364__auto__.push((arguments[i__19358__auto___88261]));

var G__88262 = (i__19358__auto___88261 + (1));
i__19358__auto___88261 = G__88262;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((2) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((2)),(0))):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19365__auto__);
});

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if(((!((a == null)))?((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || (a.cljs$core$IAtom$))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"a","a",-482876059,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__18298__auto__ = a.rswapfs;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__88254_SHARP_){
return cljs.core.apply.call(null,f,p1__88254_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__4659__auto__ = (function (){var G__88259 = a.rswapfs;
if((G__88259 == null)){
return null;
} else {
return G__88259.shift();
}
})();
if((temp__4659__auto__ == null)){
return s;
} else {
var sf = temp__4659__auto__;
var G__88263 = sf.call(null,s);
s = G__88263;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq88255){
var G__88256 = cljs.core.first.call(null,seq88255);
var seq88255__$1 = cljs.core.next.call(null,seq88255);
var G__88257 = cljs.core.first.call(null,seq88255__$1);
var seq88255__$2 = cljs.core.next.call(null,seq88255__$1);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__88256,G__88257,seq88255__$2);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after components are rendered.
 */
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, except that it is an IFn, and
 * the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__19364__auto__ = [];
var len__19357__auto___88266 = arguments.length;
var i__19358__auto___88267 = (0);
while(true){
if((i__19358__auto___88267 < len__19357__auto___88266)){
args__19364__auto__.push((arguments[i__19358__auto___88267]));

var G__88268 = (i__19358__auto___88267 + (1));
i__19358__auto___88267 = G__88268;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((1) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((1)),(0))):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19365__auto__);
});

reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
});

reagent.core.partial.cljs$lang$maxFixedArity = (1);

reagent.core.partial.cljs$lang$applyTo = (function (seq88264){
var G__88265 = cljs.core.first.call(null,seq88264);
var seq88264__$1 = cljs.core.next.call(null,seq88264);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(G__88265,seq88264__$1);
});
reagent.core.component_path = (function reagent$core$component_path(c){
return reagent.impl.component.component_path.call(null,c);
});

//# sourceMappingURL=core.js.map?rel=1460037781240