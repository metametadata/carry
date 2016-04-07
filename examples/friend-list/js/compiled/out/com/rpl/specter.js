// Compiled by ClojureScript 1.7.228 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86679 = arguments.length;
var i__19358__auto___86680 = (0);
while(true){
if((i__19358__auto___86680 < len__19357__auto___86679)){
args__19364__auto__.push((arguments[i__19358__auto___86680]));

var G__86681 = (i__19358__auto___86680 + (1));
i__19358__auto___86680 = G__86681;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq86678){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86678));
});
/**
 * Version of select that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the selector.
 */
com.rpl.specter.select = (function com$rpl$specter$select(selector,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-one that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one = (function com$rpl$specter$compiled_select_one(selector,structure){
var res = com.rpl.specter.compiled_select.call(null,selector,structure);
if((cljs.core.count.call(null,res) > (1))){
com.rpl.specter.impl.throw_illegal.call(null,"More than one element found for params: ",selector,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one = (function com$rpl$specter$select_one(selector,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-one! that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = (function com$rpl$specter$compiled_select_one_BANG_(selector,structure){
var res = com.rpl.specter.compiled_select.call(null,selector,structure);
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,res))){
com.rpl.specter.impl.throw_illegal.call(null,"Expected exactly one element for params: ",selector,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG_ = (function com$rpl$specter$select_one_BANG_(selector,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-first that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_first = (function com$rpl$specter$compiled_select_first(selector,structure){
return cljs.core.first.call(null,com.rpl.specter.compiled_select.call(null,selector,structure));
});
/**
 * Returns first element found. Not any more efficient than select, just a convenience
 */
com.rpl.specter.select_first = (function com$rpl$specter$select_first(selector,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of transform that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the selector and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform = (function com$rpl$specter$transform(selector,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure);
});
/**
 * Version of setval that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_setval = (function com$rpl$specter$compiled_setval(selector,val,structure){
return com.rpl.specter.compiled_transform.call(null,selector,(function (_){
return val;
}),structure);
});
/**
 * Navigates to each value specified by the selector and replaces it by val
 */
com.rpl.specter.setval = (function com$rpl$specter$setval(selector,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),val,structure);
});
/**
 * Version of replace-in that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = (function com$rpl$specter$compiled_replace_in(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86690 = arguments.length;
var i__19358__auto___86691 = (0);
while(true){
if((i__19358__auto___86691 < len__19357__auto___86690)){
args__19364__auto__.push((arguments[i__19358__auto___86691]));

var G__86692 = (i__19358__auto___86691 + (1));
i__19358__auto___86691 = G__86692;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((3) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19365__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__86686){
var map__86687 = p__86686;
var map__86687__$1 = ((((!((map__86687 == null)))?((((map__86687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86687):map__86687);
var merge_fn = cljs.core.get.call(null,map__86687__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,selector,((function (state,map__86687,map__86687__$1,merge_fn){
return (function() { 
var G__86693__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__86689 = res;
var ret = cljs.core.nth.call(null,vec__86689,(0),null);
var user_ret = cljs.core.nth.call(null,vec__86689,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__86693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86694__i = 0, G__86694__a = new Array(arguments.length -  0);
while (G__86694__i < G__86694__a.length) {G__86694__a[G__86694__i] = arguments[G__86694__i + 0]; ++G__86694__i;}
  args = new cljs.core.IndexedSeq(G__86694__a,0);
} 
return G__86693__delegate.call(this,args);};
G__86693.cljs$lang$maxFixedArity = 0;
G__86693.cljs$lang$applyTo = (function (arglist__86695){
var args = cljs.core.seq(arglist__86695);
return G__86693__delegate(args);
});
G__86693.cljs$core$IFn$_invoke$arity$variadic = G__86693__delegate;
return G__86693;
})()
;})(state,map__86687,map__86687__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq86682){
var G__86683 = cljs.core.first.call(null,seq86682);
var seq86682__$1 = cljs.core.next.call(null,seq86682);
var G__86684 = cljs.core.first.call(null,seq86682__$1);
var seq86682__$2 = cljs.core.next.call(null,seq86682__$1);
var G__86685 = cljs.core.first.call(null,seq86682__$2);
var seq86682__$3 = cljs.core.next.call(null,seq86682__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__86683,G__86684,G__86685,seq86682__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86703 = arguments.length;
var i__19358__auto___86704 = (0);
while(true){
if((i__19358__auto___86704 < len__19357__auto___86703)){
args__19364__auto__.push((arguments[i__19358__auto___86704]));

var G__86705 = (i__19358__auto___86704 + (1));
i__19358__auto___86704 = G__86705;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((3) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19365__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__86700){
var map__86701 = p__86700;
var map__86701__$1 = ((((!((map__86701 == null)))?((((map__86701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86701):map__86701);
var merge_fn = cljs.core.get.call(null,map__86701__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq86696){
var G__86697 = cljs.core.first.call(null,seq86696);
var seq86696__$1 = cljs.core.next.call(null,seq86696);
var G__86698 = cljs.core.first.call(null,seq86696__$1);
var seq86696__$2 = cljs.core.next.call(null,seq86696__$1);
var G__86699 = cljs.core.first.call(null,seq86696__$2);
var seq86696__$3 = cljs.core.next.call(null,seq86696__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__86697,G__86698,G__86699,seq86696__$3);
});
/**
 * Takes a compiled selector that needs late-bound params and supplies it with
 *           an array of params and a position in the array from which to begin reading
 *           params. The return value is an executable selector.
 */
com.rpl.specter.bind_params_STAR_ = com.rpl.specter.impl.bind_params_STAR_;
/**
 * Stops navigation at this point. For selection returns nothing and for 
 *        transformation returns the structure unchanged
 */
com.rpl.specter.VOID = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return null;
}),(function (structure,next_fn){
return structure;
})));
/**
 * Stays navigated at the current point. Essentially a no-op selector.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return next_fn.call(null,structure);
}),(function (structure,next_fn){
return next_fn.call(null,structure);
})));
com.rpl.specter.ALL = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_AllStructurePath.call(null));
com.rpl.specter.VAL = com.rpl.specter.impl.__GT_ValCollect.call(null);
com.rpl.specter.LAST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.last,com.rpl.specter.impl.set_last));
com.rpl.specter.FIRST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.first,com.rpl.specter.impl.set_first));
/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 2),vals__20441__auto__,structure__20443__auto__);
});
var start_fn = (params20439[(params_idx20440 + (0))]);
var end_fn = (params20439[(params_idx20440 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 2),vals__20441__auto__,structure__20443__auto__);
});
var start_fn = (params20439[(params_idx20440 + (0))]);
var end_fn = (params20439[(params_idx20440 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 2),vals__20441__auto__,structure__20443__auto__);
});
var start = (params20439[(params_idx20440 + (0))]);
var end = (params20439[(params_idx20440 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 2),vals__20441__auto__,structure__20443__auto__);
});
var start = (params20439[(params_idx20440 + (0))]);
var end = (params20439[(params_idx20440 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var aset = (params20439[(params_idx20440 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var aset = (params20439[(params_idx20440 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var afn = (params20439[(params_idx20440 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var afn = (params20439[(params_idx20440 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var afn = (params20439[(params_idx20440 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var afn = (params20439[(params_idx20440 + (0))]);
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given selector path. An element matches the selector path if calling select
 *   on that element with the selector path yields anything other than an empty sequence.
 * 
 * The input path may be parameterized, in which case the result of filterer
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.filterer = (function com$rpl$specter$filterer(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86715 = arguments.length;
var i__19358__auto___86716 = (0);
while(true){
if((i__19358__auto___86716 < len__19357__auto___86715)){
args__19364__auto__.push((arguments[i__19358__auto___86716]));

var G__86717 = (i__19358__auto___86716 + (1));
i__19358__auto___86716 = G__86717;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20460__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20461__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20460__auto__);
var offsets__20462__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20461__auto__));
var num_params86710 = cljs.core.last.call(null,offsets__20462__auto__);
var latefns86708 = cljs.core.map.call(null,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710){
return (function (o__20463__auto__,p__20464__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20464__auto__))){
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710){
return (function (params__20465__auto__,params_idx__20466__auto__){
return p__20464__auto__;
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710))
} else {
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710){
return (function (params__20465__auto__,params_idx__20466__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20464__auto__,params__20465__auto__,(params_idx__20466__auto__ + o__20463__auto__));
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710))
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710))
,offsets__20462__auto__,paths__20460__auto__);
var vec__86711 = latefns86708;
var G__86709 = cljs.core.nth.call(null,vec__86711,(0),null);
var ret__20467__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86710),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709))
;
var late = G__86709.call(null,params20439,params_idx20440);
return next_fn.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709){
return (function (p1__86706_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__86706_SHARP_);
});})(next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709))
,structure)));
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709))
,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86710),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709))
;
var late = G__86709.call(null,params20439,params_idx20440);
var vec__86712 = com.rpl.specter.impl.filter_PLUS_ancestry.call(null,late,structure);
var filtered = cljs.core.nth.call(null,vec__86712,(0),null);
var ancestry = cljs.core.nth.call(null,vec__86712,(1),null);
var next = cljs.core.vec.call(null,next_fn.call(null,filtered));
return cljs.core.reduce.call(null,((function (vec__86712,filtered,ancestry,next,next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709){
return (function (curr,p__86713){
var vec__86714 = p__86713;
var newi = cljs.core.nth.call(null,vec__86714,(0),null);
var oldi = cljs.core.nth.call(null,vec__86714,(1),null);
return cljs.core.assoc.call(null,curr,oldi,cljs.core.get.call(null,next,newi));
});})(vec__86712,filtered,ancestry,next,next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709))
,cljs.core.vec.call(null,structure),ancestry);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86710,latefns86708,vec__86711,G__86709))
),num_params86710);
if(cljs.core._EQ_.call(null,(0),num_params86710)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20467__auto__,null,(0));
} else {
return ret__20467__auto__;
}
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq86707){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86707));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var key = (params20439[(params_idx20440 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var key = (params20439[(params_idx20440 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var afn = (params20439[(params_idx20440 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var afn = (params20439[(params_idx20440 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
/**
 * Filters the current value based on whether a selector finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 * 
 *   The input path may be parameterized, in which case the result of selected?
 *   will be parameterized in the order of which the parameterized selectors
 *   were declared.
 */
com.rpl.specter.selected_QMARK_ = (function com$rpl$specter$selected_QMARK_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86725 = arguments.length;
var i__19358__auto___86726 = (0);
while(true){
if((i__19358__auto___86726 < len__19357__auto___86725)){
args__19364__auto__.push((arguments[i__19358__auto___86726]));

var G__86727 = (i__19358__auto___86726 + (1));
i__19358__auto___86726 = G__86727;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20460__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20461__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20460__auto__);
var offsets__20462__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20461__auto__));
var num_params86723 = cljs.core.last.call(null,offsets__20462__auto__);
var latefns86721 = cljs.core.map.call(null,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723){
return (function (o__20463__auto__,p__20464__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20464__auto__))){
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723){
return (function (params__20465__auto__,params_idx__20466__auto__){
return p__20464__auto__;
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723))
} else {
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723){
return (function (params__20465__auto__,params_idx__20466__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20464__auto__,params__20465__auto__,(params_idx__20466__auto__ + o__20463__auto__));
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723))
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723))
,offsets__20462__auto__,paths__20460__auto__);
var vec__86724 = latefns86721;
var G__86722 = cljs.core.nth.call(null,vec__86724,(0),null);
var ret__20467__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86723),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722))
;
var late = G__86722.call(null,params20439,params_idx20440);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722){
return (function (p1__86718_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__86718_SHARP_);
});})(next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722))
,structure,next_fn);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722))
,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86723),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722))
;
var late = G__86722.call(null,params20439,params_idx20440);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722){
return (function (p1__86719_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__86719_SHARP_);
});})(next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722))
,structure,next_fn);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86723,latefns86721,vec__86724,G__86722))
),num_params86723);
if(cljs.core._EQ_.call(null,(0),num_params86723)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20467__auto__,null,(0));
} else {
return ret__20467__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq86720){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86720));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86735 = arguments.length;
var i__19358__auto___86736 = (0);
while(true){
if((i__19358__auto___86736 < len__19357__auto___86735)){
args__19364__auto__.push((arguments[i__19358__auto___86736]));

var G__86737 = (i__19358__auto___86736 + (1));
i__19358__auto___86736 = G__86737;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20460__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20461__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20460__auto__);
var offsets__20462__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20461__auto__));
var num_params86733 = cljs.core.last.call(null,offsets__20462__auto__);
var latefns86731 = cljs.core.map.call(null,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733){
return (function (o__20463__auto__,p__20464__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20464__auto__))){
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733){
return (function (params__20465__auto__,params_idx__20466__auto__){
return p__20464__auto__;
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733))
} else {
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733){
return (function (params__20465__auto__,params_idx__20466__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20464__auto__,params__20465__auto__,(params_idx__20466__auto__ + o__20463__auto__));
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733))
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733))
,offsets__20462__auto__,paths__20460__auto__);
var vec__86734 = latefns86731;
var G__86732 = cljs.core.nth.call(null,vec__86734,(0),null);
var ret__20467__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86733),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732))
;
var late = G__86732.call(null,params20439,params_idx20440);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732){
return (function (p1__86728_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__86728_SHARP_);
});})(next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732))
,structure,next_fn);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732))
,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86733),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732))
;
var late = G__86732.call(null,params20439,params_idx20440);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732){
return (function (p1__86729_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__86729_SHARP_);
});})(next_fn,late,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732))
,structure,next_fn);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86733,latefns86731,vec__86734,G__86732))
),num_params86733);
if(cljs.core._EQ_.call(null,(0),num_params86733)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20467__auto__,null,(0));
} else {
return ret__20467__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq86730){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86730));
});
/**
 * Navigates to a view of the current value by transforming it with the
 * specified selector and update-fn.
 * 
 * The input path may be parameterized, in which case the result of transformed
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.transformed = (function com$rpl$specter$transformed(path,update_fn){
var paths__20460__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20461__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20460__auto__);
var offsets__20462__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20461__auto__));
var num_params86744 = cljs.core.last.call(null,offsets__20462__auto__);
var latefns86742 = cljs.core.map.call(null,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744){
return (function (o__20463__auto__,p__20464__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20464__auto__))){
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744){
return (function (params__20465__auto__,params_idx__20466__auto__){
return p__20464__auto__;
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744))
} else {
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744){
return (function (params__20465__auto__,params_idx__20466__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20464__auto__,params__20465__auto__,(params_idx__20466__auto__ + o__20463__auto__));
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744))
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744))
,offsets__20462__auto__,paths__20460__auto__);
var vec__86745 = latefns86742;
var G__86743 = cljs.core.nth.call(null,vec__86745,(0),null);
var ret__20467__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744,latefns86742,vec__86745,G__86743){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744,latefns86742,vec__86745,G__86743){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86744),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744,latefns86742,vec__86745,G__86743))
;
var late = G__86743.call(null,params20439,params_idx20440);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744,latefns86742,vec__86745,G__86743))
,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744,latefns86742,vec__86745,G__86743){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744,latefns86742,vec__86745,G__86743){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86744),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744,latefns86742,vec__86745,G__86743))
;
var late = G__86743.call(null,params20439,params_idx20440);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86744,latefns86742,vec__86745,G__86743))
),num_params86744);
if(cljs.core._EQ_.call(null,(0),num_params86744)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20467__auto__,null,(0));
} else {
return ret__20467__auto__;
}
});
cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return next_fn.call(null,cljs.core.get.call(null,structure,kw__$1));
});

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return cljs.core.assoc.call(null,structure,kw__$1,next_fn.call(null,cljs.core.get.call(null,structure,kw__$1)));
});
(com.rpl.specter.protocols.StructurePath["function"] = true);

(com.rpl.specter.protocols.select_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}));

(com.rpl.specter.protocols.transform_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
}));
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,aset__$1,structure,next_fn);
});

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,aset__$1,structure,next_fn);
});
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var afn = (params20439[(params_idx20440 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var afn = (params20439[(params_idx20440 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var v = (params20439[(params_idx20440 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + 1),vals__20441__auto__,structure__20443__auto__);
});
var v = (params20439[(params_idx20440 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86751 = arguments.length;
var i__19358__auto___86752 = (0);
while(true){
if((i__19358__auto___86752 < len__19357__auto___86751)){
args__19364__auto__.push((arguments[i__19358__auto___86752]));

var G__86753 = (i__19358__auto___86752 + (1));
i__19358__auto___86752 = G__86753;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20460__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20461__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20460__auto__);
var offsets__20462__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20461__auto__));
var num_params86749 = cljs.core.last.call(null,offsets__20462__auto__);
var latefns86747 = cljs.core.map.call(null,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86749){
return (function (o__20463__auto__,p__20464__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20464__auto__))){
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86749){
return (function (params__20465__auto__,params_idx__20466__auto__){
return p__20464__auto__;
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86749))
} else {
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86749){
return (function (params__20465__auto__,params_idx__20466__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20464__auto__,params__20465__auto__,(params_idx__20466__auto__ + o__20463__auto__));
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86749))
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86749))
,offsets__20462__auto__,paths__20460__auto__);
var vec__86750 = latefns86747;
var latefn86748 = cljs.core.nth.call(null,vec__86750,(0),null);
var ret__20467__auto__ = (function (){var collector__20452__auto__ = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86749,latefns86747,vec__86750,latefn86748){
return (function (params20439,params_idx20440,vals__20453__auto__,structure,next_fn__20454__auto__){
var late = latefn86748.call(null,params20439,params_idx20440);
var c__20455__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__20454__auto__.call(null,params20439,(params_idx20440 + num_params86749),cljs.core.conj.call(null,vals__20453__auto__,c__20455__auto__),structure);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86749,latefns86747,vec__86750,latefn86748))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__20452__auto__,collector__20452__auto__),num_params86749);
})();
if(cljs.core._EQ_.call(null,(0),num_params86749)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20467__auto__,null,(0));
} else {
return ret__20467__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq86746){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86746));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86759 = arguments.length;
var i__19358__auto___86760 = (0);
while(true){
if((i__19358__auto___86760 < len__19357__auto___86759)){
args__19364__auto__.push((arguments[i__19358__auto___86760]));

var G__86761 = (i__19358__auto___86760 + (1));
i__19358__auto___86760 = G__86761;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20460__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20461__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20460__auto__);
var offsets__20462__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20461__auto__));
var num_params86757 = cljs.core.last.call(null,offsets__20462__auto__);
var latefns86755 = cljs.core.map.call(null,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86757){
return (function (o__20463__auto__,p__20464__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20464__auto__))){
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86757){
return (function (params__20465__auto__,params_idx__20466__auto__){
return p__20464__auto__;
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86757))
} else {
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86757){
return (function (params__20465__auto__,params_idx__20466__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20464__auto__,params__20465__auto__,(params_idx__20466__auto__ + o__20463__auto__));
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86757))
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86757))
,offsets__20462__auto__,paths__20460__auto__);
var vec__86758 = latefns86755;
var latefn86756 = cljs.core.nth.call(null,vec__86758,(0),null);
var ret__20467__auto__ = (function (){var collector__20452__auto__ = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86757,latefns86755,vec__86758,latefn86756){
return (function (params20439,params_idx20440,vals__20453__auto__,structure,next_fn__20454__auto__){
var late = latefn86756.call(null,params20439,params_idx20440);
var c__20455__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__20454__auto__.call(null,params20439,(params_idx20440 + num_params86757),cljs.core.conj.call(null,vals__20453__auto__,c__20455__auto__),structure);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86757,latefns86755,vec__86758,latefn86756))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__20452__auto__,collector__20452__auto__),num_params86757);
})();
if(cljs.core._EQ_.call(null,(0),num_params86757)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20467__auto__,null,(0));
} else {
return ret__20467__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq86754){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86754));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__20452__auto__ = (function (params20439,params_idx20440,vals__20453__auto__,structure,next_fn__20454__auto__){
var val = (params20439[(params_idx20440 + (0))]);
var c__20455__auto__ = val;
return next_fn__20454__auto__.call(null,params20439,(params_idx20440 + 1),cljs.core.conj.call(null,vals__20453__auto__,c__20455__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__20452__auto__,collector__20452__auto__),1);
})();
/**
 * Takes in alternating cond-path selector cond-path selector...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following selector for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.cond_path = (function com$rpl$specter$cond_path(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86765 = arguments.length;
var i__19358__auto___86766 = (0);
while(true){
if((i__19358__auto___86766 < len__19357__auto___86765)){
args__19364__auto__.push((arguments[i__19358__auto___86766]));

var G__86767 = (i__19358__auto___86766 + (1));
i__19358__auto___86766 = G__86767;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__20460__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__20461__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20460__auto__);
var offsets__20462__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20461__auto__));
var num_params86764 = cljs.core.last.call(null,offsets__20462__auto__);
var latefns86763 = cljs.core.map.call(null,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764){
return (function (o__20463__auto__,p__20464__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20464__auto__))){
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764){
return (function (params__20465__auto__,params_idx__20466__auto__){
return p__20464__auto__;
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764))
} else {
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764){
return (function (params__20465__auto__,params_idx__20466__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20464__auto__,params__20465__auto__,(params_idx__20466__auto__ + o__20463__auto__));
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764))
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764))
,offsets__20462__auto__,paths__20460__auto__);
var ret__20467__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86764),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763){
return (function (l__20510__auto__){
return l__20510__auto__.call(null,params20439,params_idx20440);
});})(next_fn,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763))
,latefns86763);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4655__auto__)){
var selector = temp__4655__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763))
,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86764),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763){
return (function (l__20510__auto__){
return l__20510__auto__.call(null,params20439,params_idx20440);
});})(next_fn,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763))
,latefns86763);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4655__auto__)){
var selector = temp__4655__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86764,latefns86763))
),num_params86764);
if(cljs.core._EQ_.call(null,(0),num_params86764)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20467__auto__,null,(0));
} else {
return ret__20467__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq86762){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86762));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args86768 = [];
var len__19357__auto___86771 = arguments.length;
var i__19358__auto___86772 = (0);
while(true){
if((i__19358__auto___86772 < len__19357__auto___86771)){
args86768.push((arguments[i__19358__auto___86772]));

var G__86773 = (i__19358__auto___86772 + (1));
i__19358__auto___86772 = G__86773;
continue;
} else {
}
break;
}

var G__86770 = args86768.length;
switch (G__86770) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86768.length)].join('')));

}
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 = (function (cond_p,if_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path);
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 = (function (cond_p,if_path,else_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path,null,else_path);
});

com.rpl.specter.if_path.cljs$lang$maxFixedArity = 3;
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = (function com$rpl$specter$multi_path(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86779 = arguments.length;
var i__19358__auto___86780 = (0);
while(true){
if((i__19358__auto___86780 < len__19357__auto___86779)){
args__19364__auto__.push((arguments[i__19358__auto___86780]));

var G__86781 = (i__19358__auto___86780 + (1));
i__19358__auto___86780 = G__86781;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__20460__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__20461__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20460__auto__);
var offsets__20462__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20461__auto__));
var num_params86778 = cljs.core.last.call(null,offsets__20462__auto__);
var latefns86777 = cljs.core.map.call(null,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778){
return (function (o__20463__auto__,p__20464__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20464__auto__))){
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778){
return (function (params__20465__auto__,params_idx__20466__auto__){
return p__20464__auto__;
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778))
} else {
return ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778){
return (function (params__20465__auto__,params_idx__20466__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20464__auto__,params__20465__auto__,(params_idx__20466__auto__ + o__20463__auto__));
});
;})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778))
}
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778))
,offsets__20462__auto__,paths__20460__auto__);
var ret__20467__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86778),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777){
return (function (l__20510__auto__){
return l__20510__auto__.call(null,params20439,params_idx20440);
});})(next_fn,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777))
,latefns86777);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777){
return (function (p1__86775_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__86775_SHARP_,structure);
});})(next_fn,compiled_paths,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777))
,compiled_paths)));
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777))
,((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777){
return (function (params20439,params_idx20440,vals__20441__auto__,structure,next_fn__20442__auto__){
var next_fn = ((function (paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777){
return (function (structure__20443__auto__){
return next_fn__20442__auto__.call(null,params20439,(params_idx20440 + num_params86778),vals__20441__auto__,structure__20443__auto__);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777){
return (function (l__20510__auto__){
return l__20510__auto__.call(null,params20439,params_idx20440);
});})(next_fn,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777))
,latefns86777);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777){
return (function (structure__$1,selector){
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777))
,structure,compiled_paths);
});})(paths__20460__auto__,needed_params__20461__auto__,offsets__20462__auto__,num_params86778,latefns86777))
),num_params86778);
if(cljs.core._EQ_.call(null,(0),num_params86778)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20467__auto__,null,(0));
} else {
return ret__20467__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq86776){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86776));
});
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86783 = arguments.length;
var i__19358__auto___86784 = (0);
while(true){
if((i__19358__auto___86784 < len__19357__auto___86783)){
args__19364__auto__.push((arguments[i__19358__auto___86784]));

var G__86785 = (i__19358__auto___86784 + (1));
i__19358__auto___86784 = G__86785;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
});

com.rpl.specter.stay_then_continue.cljs$lang$maxFixedArity = (0);

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq86782){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86782));
});
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86787 = arguments.length;
var i__19358__auto___86788 = (0);
while(true){
if((i__19358__auto___86788 < len__19357__auto___86787)){
args__19364__auto__.push((arguments[i__19358__auto___86788]));

var G__86789 = (i__19358__auto___86788 + (1));
i__19358__auto___86788 = G__86789;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
});

com.rpl.specter.continue_then_stay.cljs$lang$maxFixedArity = (0);

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq86786){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86786));
});

//# sourceMappingURL=specter.js.map?rel=1460037776495