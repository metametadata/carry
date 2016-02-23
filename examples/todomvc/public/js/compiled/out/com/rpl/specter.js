// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19490 = arguments.length;
var i__17810__auto___19491 = (0);
while(true){
if((i__17810__auto___19491 < len__17809__auto___19490)){
args__17816__auto__.push((arguments[i__17810__auto___19491]));

var G__19492 = (i__17810__auto___19491 + (1));
i__17810__auto___19491 = G__19492;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq19489){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19489));
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
var args__17816__auto__ = [];
var len__17809__auto___19501 = arguments.length;
var i__17810__auto___19502 = (0);
while(true){
if((i__17810__auto___19502 < len__17809__auto___19501)){
args__17816__auto__.push((arguments[i__17810__auto___19502]));

var G__19503 = (i__17810__auto___19502 + (1));
i__17810__auto___19502 = G__19503;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__19497){
var map__19498 = p__19497;
var map__19498__$1 = ((((!((map__19498 == null)))?((((map__19498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19498):map__19498);
var merge_fn = cljs.core.get.call(null,map__19498__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,selector,((function (state,map__19498,map__19498__$1,merge_fn){
return (function (e){
var res = transform_fn.call(null,e);
if(cljs.core.truth_(res)){
var vec__19500 = res;
var ret = cljs.core.nth.call(null,vec__19500,(0),null);
var user_ret = cljs.core.nth.call(null,vec__19500,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return e;
}
});})(state,map__19498,map__19498__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq19493){
var G__19494 = cljs.core.first.call(null,seq19493);
var seq19493__$1 = cljs.core.next.call(null,seq19493);
var G__19495 = cljs.core.first.call(null,seq19493__$1);
var seq19493__$2 = cljs.core.next.call(null,seq19493__$1);
var G__19496 = cljs.core.first.call(null,seq19493__$2);
var seq19493__$3 = cljs.core.next.call(null,seq19493__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__19494,G__19495,G__19496,seq19493__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformd in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19511 = arguments.length;
var i__17810__auto___19512 = (0);
while(true){
if((i__17810__auto___19512 < len__17809__auto___19511)){
args__17816__auto__.push((arguments[i__17810__auto___19512]));

var G__19513 = (i__17810__auto___19512 + (1));
i__17810__auto___19512 = G__19513;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__19508){
var map__19509 = p__19508;
var map__19509__$1 = ((((!((map__19509 == null)))?((((map__19509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19509):map__19509);
var merge_fn = cljs.core.get.call(null,map__19509__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq19504){
var G__19505 = cljs.core.first.call(null,seq19504);
var seq19504__$1 = cljs.core.next.call(null,seq19504);
var G__19506 = cljs.core.first.call(null,seq19504__$1);
var seq19504__$2 = cljs.core.next.call(null,seq19504__$1);
var G__19507 = cljs.core.first.call(null,seq19504__$2);
var seq19504__$3 = cljs.core.next.call(null,seq19504__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__19505,G__19506,G__19507,seq19504__$3);
});
/**
 * Takes a compiled selector that needs late-bound params and supplies it with
 *           an array of params and a position in the array from which to begin reading
 *           params. The return value is an executable selector.
 */
com.rpl.specter.bind_params_STAR_ = com.rpl.specter.impl.bind_params_STAR_;
com.rpl.specter.ALL = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_AllStructurePath.call(null));
com.rpl.specter.VAL = com.rpl.specter.impl.__GT_ValCollect.call(null);
com.rpl.specter.LAST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.last,com.rpl.specter.impl.set_last));
com.rpl.specter.FIRST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.first,com.rpl.specter.impl.set_first));
/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 2),vals__19403__auto__,structure__19405__auto__);
});
var start_fn = (params19401[(params_idx19402 + (0))]);
var end_fn = (params19401[(params_idx19402 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 2),vals__19403__auto__,structure__19405__auto__);
});
var start_fn = (params19401[(params_idx19402 + (0))]);
var end_fn = (params19401[(params_idx19402 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 2),vals__19403__auto__,structure__19405__auto__);
});
var start = (params19401[(params_idx19402 + (0))]);
var end = (params19401[(params_idx19402 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 2),vals__19403__auto__,structure__19405__auto__);
});
var start = (params19401[(params_idx19402 + (0))]);
var end = (params19401[(params_idx19402 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var aset = (params19401[(params_idx19402 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var aset = (params19401[(params_idx19402 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var afn = (params19401[(params_idx19402 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var afn = (params19401[(params_idx19402 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var afn = (params19401[(params_idx19402 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var afn = (params19401[(params_idx19402 + (0))]);
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
var args__17816__auto__ = [];
var len__17809__auto___19523 = arguments.length;
var i__17810__auto___19524 = (0);
while(true){
if((i__17810__auto___19524 < len__17809__auto___19523)){
args__17816__auto__.push((arguments[i__17810__auto___19524]));

var G__19525 = (i__17810__auto___19524 + (1));
i__17810__auto___19524 = G__19525;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19422__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19423__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19422__auto__);
var offsets__19424__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19423__auto__));
var num_params19518 = cljs.core.last.call(null,offsets__19424__auto__);
var latefns19516 = cljs.core.map.call(null,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518){
return (function (o__19425__auto__,p__19426__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19426__auto__))){
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518){
return (function (params__19427__auto__,params_idx__19428__auto__){
return p__19426__auto__;
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518))
} else {
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518){
return (function (params__19427__auto__,params_idx__19428__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19426__auto__,params__19427__auto__,(params_idx__19428__auto__ + o__19425__auto__));
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518))
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518))
,offsets__19424__auto__,paths__19422__auto__);
var vec__19519 = latefns19516;
var G__19517 = cljs.core.nth.call(null,vec__19519,(0),null);
var ret__19429__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19518),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517))
;
var late = G__19517.call(null,params19401,params_idx19402);
return next_fn.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517){
return (function (p1__19514_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19514_SHARP_);
});})(next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517))
,structure)));
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517))
,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19518),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517))
;
var late = G__19517.call(null,params19401,params_idx19402);
var vec__19520 = com.rpl.specter.impl.filter_PLUS_ancestry.call(null,late,structure);
var filtered = cljs.core.nth.call(null,vec__19520,(0),null);
var ancestry = cljs.core.nth.call(null,vec__19520,(1),null);
var next = cljs.core.vec.call(null,next_fn.call(null,filtered));
return cljs.core.reduce.call(null,((function (vec__19520,filtered,ancestry,next,next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517){
return (function (curr,p__19521){
var vec__19522 = p__19521;
var newi = cljs.core.nth.call(null,vec__19522,(0),null);
var oldi = cljs.core.nth.call(null,vec__19522,(1),null);
return cljs.core.assoc.call(null,curr,oldi,cljs.core.get.call(null,next,newi));
});})(vec__19520,filtered,ancestry,next,next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517))
,cljs.core.vec.call(null,structure),ancestry);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19518,latefns19516,vec__19519,G__19517))
),num_params19518);
if(cljs.core._EQ_.call(null,(0),num_params19518)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19429__auto__,null,(0));
} else {
return ret__19429__auto__;
}
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq19515){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19515));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var key = (params19401[(params_idx19402 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var key = (params19401[(params_idx19402 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var afn = (params19401[(params_idx19402 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var afn = (params19401[(params_idx19402 + (0))]);
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
var args__17816__auto__ = [];
var len__17809__auto___19533 = arguments.length;
var i__17810__auto___19534 = (0);
while(true){
if((i__17810__auto___19534 < len__17809__auto___19533)){
args__17816__auto__.push((arguments[i__17810__auto___19534]));

var G__19535 = (i__17810__auto___19534 + (1));
i__17810__auto___19534 = G__19535;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19422__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19423__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19422__auto__);
var offsets__19424__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19423__auto__));
var num_params19531 = cljs.core.last.call(null,offsets__19424__auto__);
var latefns19529 = cljs.core.map.call(null,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531){
return (function (o__19425__auto__,p__19426__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19426__auto__))){
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531){
return (function (params__19427__auto__,params_idx__19428__auto__){
return p__19426__auto__;
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531))
} else {
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531){
return (function (params__19427__auto__,params_idx__19428__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19426__auto__,params__19427__auto__,(params_idx__19428__auto__ + o__19425__auto__));
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531))
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531))
,offsets__19424__auto__,paths__19422__auto__);
var vec__19532 = latefns19529;
var G__19530 = cljs.core.nth.call(null,vec__19532,(0),null);
var ret__19429__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19531),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530))
;
var late = G__19530.call(null,params19401,params_idx19402);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530){
return (function (p1__19526_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19526_SHARP_);
});})(next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530))
,structure,next_fn);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530))
,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19531),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530))
;
var late = G__19530.call(null,params19401,params_idx19402);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530){
return (function (p1__19527_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19527_SHARP_);
});})(next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530))
,structure,next_fn);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19531,latefns19529,vec__19532,G__19530))
),num_params19531);
if(cljs.core._EQ_.call(null,(0),num_params19531)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19429__auto__,null,(0));
} else {
return ret__19429__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq19528){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19528));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19543 = arguments.length;
var i__17810__auto___19544 = (0);
while(true){
if((i__17810__auto___19544 < len__17809__auto___19543)){
args__17816__auto__.push((arguments[i__17810__auto___19544]));

var G__19545 = (i__17810__auto___19544 + (1));
i__17810__auto___19544 = G__19545;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19422__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19423__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19422__auto__);
var offsets__19424__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19423__auto__));
var num_params19541 = cljs.core.last.call(null,offsets__19424__auto__);
var latefns19539 = cljs.core.map.call(null,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541){
return (function (o__19425__auto__,p__19426__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19426__auto__))){
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541){
return (function (params__19427__auto__,params_idx__19428__auto__){
return p__19426__auto__;
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541))
} else {
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541){
return (function (params__19427__auto__,params_idx__19428__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19426__auto__,params__19427__auto__,(params_idx__19428__auto__ + o__19425__auto__));
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541))
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541))
,offsets__19424__auto__,paths__19422__auto__);
var vec__19542 = latefns19539;
var G__19540 = cljs.core.nth.call(null,vec__19542,(0),null);
var ret__19429__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19541),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540))
;
var late = G__19540.call(null,params19401,params_idx19402);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540){
return (function (p1__19536_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__19536_SHARP_);
});})(next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540))
,structure,next_fn);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540))
,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19541),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540))
;
var late = G__19540.call(null,params19401,params_idx19402);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540){
return (function (p1__19537_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__19537_SHARP_);
});})(next_fn,late,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540))
,structure,next_fn);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19541,latefns19539,vec__19542,G__19540))
),num_params19541);
if(cljs.core._EQ_.call(null,(0),num_params19541)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19429__auto__,null,(0));
} else {
return ret__19429__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq19538){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19538));
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
var paths__19422__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19423__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19422__auto__);
var offsets__19424__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19423__auto__));
var num_params19552 = cljs.core.last.call(null,offsets__19424__auto__);
var latefns19550 = cljs.core.map.call(null,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552){
return (function (o__19425__auto__,p__19426__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19426__auto__))){
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552){
return (function (params__19427__auto__,params_idx__19428__auto__){
return p__19426__auto__;
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552))
} else {
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552){
return (function (params__19427__auto__,params_idx__19428__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19426__auto__,params__19427__auto__,(params_idx__19428__auto__ + o__19425__auto__));
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552))
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552))
,offsets__19424__auto__,paths__19422__auto__);
var vec__19553 = latefns19550;
var G__19551 = cljs.core.nth.call(null,vec__19553,(0),null);
var ret__19429__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552,latefns19550,vec__19553,G__19551){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552,latefns19550,vec__19553,G__19551){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19552),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552,latefns19550,vec__19553,G__19551))
;
var late = G__19551.call(null,params19401,params_idx19402);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552,latefns19550,vec__19553,G__19551))
,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552,latefns19550,vec__19553,G__19551){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552,latefns19550,vec__19553,G__19551){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19552),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552,latefns19550,vec__19553,G__19551))
;
var late = G__19551.call(null,params19401,params_idx19402);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19552,latefns19550,vec__19553,G__19551))
),num_params19552);
if(cljs.core._EQ_.call(null,(0),num_params19552)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19429__auto__,null,(0));
} else {
return ret__19429__auto__;
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
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var afn = (params19401[(params_idx19402 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var afn = (params19401[(params_idx19402 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var v = (params19401[(params_idx19402 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + 1),vals__19403__auto__,structure__19405__auto__);
});
var v = (params19401[(params_idx19402 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19559 = arguments.length;
var i__17810__auto___19560 = (0);
while(true){
if((i__17810__auto___19560 < len__17809__auto___19559)){
args__17816__auto__.push((arguments[i__17810__auto___19560]));

var G__19561 = (i__17810__auto___19560 + (1));
i__17810__auto___19560 = G__19561;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19422__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19423__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19422__auto__);
var offsets__19424__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19423__auto__));
var num_params19557 = cljs.core.last.call(null,offsets__19424__auto__);
var latefns19555 = cljs.core.map.call(null,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19557){
return (function (o__19425__auto__,p__19426__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19426__auto__))){
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19557){
return (function (params__19427__auto__,params_idx__19428__auto__){
return p__19426__auto__;
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19557))
} else {
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19557){
return (function (params__19427__auto__,params_idx__19428__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19426__auto__,params__19427__auto__,(params_idx__19428__auto__ + o__19425__auto__));
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19557))
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19557))
,offsets__19424__auto__,paths__19422__auto__);
var vec__19558 = latefns19555;
var latefn19556 = cljs.core.nth.call(null,vec__19558,(0),null);
var ret__19429__auto__ = (function (){var collector__19414__auto__ = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19557,latefns19555,vec__19558,latefn19556){
return (function (params19401,params_idx19402,vals__19415__auto__,structure,next_fn__19416__auto__){
var late = latefn19556.call(null,params19401,params_idx19402);
var c__19417__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__19416__auto__.call(null,params19401,(params_idx19402 + num_params19557),cljs.core.conj.call(null,vals__19415__auto__,c__19417__auto__),structure);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19557,latefns19555,vec__19558,latefn19556))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19414__auto__,collector__19414__auto__),num_params19557);
})();
if(cljs.core._EQ_.call(null,(0),num_params19557)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19429__auto__,null,(0));
} else {
return ret__19429__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq19554){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19554));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19567 = arguments.length;
var i__17810__auto___19568 = (0);
while(true){
if((i__17810__auto___19568 < len__17809__auto___19567)){
args__17816__auto__.push((arguments[i__17810__auto___19568]));

var G__19569 = (i__17810__auto___19568 + (1));
i__17810__auto___19568 = G__19569;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19422__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19423__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19422__auto__);
var offsets__19424__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19423__auto__));
var num_params19565 = cljs.core.last.call(null,offsets__19424__auto__);
var latefns19563 = cljs.core.map.call(null,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19565){
return (function (o__19425__auto__,p__19426__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19426__auto__))){
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19565){
return (function (params__19427__auto__,params_idx__19428__auto__){
return p__19426__auto__;
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19565))
} else {
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19565){
return (function (params__19427__auto__,params_idx__19428__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19426__auto__,params__19427__auto__,(params_idx__19428__auto__ + o__19425__auto__));
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19565))
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19565))
,offsets__19424__auto__,paths__19422__auto__);
var vec__19566 = latefns19563;
var latefn19564 = cljs.core.nth.call(null,vec__19566,(0),null);
var ret__19429__auto__ = (function (){var collector__19414__auto__ = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19565,latefns19563,vec__19566,latefn19564){
return (function (params19401,params_idx19402,vals__19415__auto__,structure,next_fn__19416__auto__){
var late = latefn19564.call(null,params19401,params_idx19402);
var c__19417__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__19416__auto__.call(null,params19401,(params_idx19402 + num_params19565),cljs.core.conj.call(null,vals__19415__auto__,c__19417__auto__),structure);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19565,latefns19563,vec__19566,latefn19564))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19414__auto__,collector__19414__auto__),num_params19565);
})();
if(cljs.core._EQ_.call(null,(0),num_params19565)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19429__auto__,null,(0));
} else {
return ret__19429__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq19562){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19562));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__19414__auto__ = (function (params19401,params_idx19402,vals__19415__auto__,structure,next_fn__19416__auto__){
var val = (params19401[(params_idx19402 + (0))]);
var c__19417__auto__ = val;
return next_fn__19416__auto__.call(null,params19401,(params_idx19402 + 1),cljs.core.conj.call(null,vals__19415__auto__,c__19417__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19414__auto__,collector__19414__auto__),1);
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
var args__17816__auto__ = [];
var len__17809__auto___19573 = arguments.length;
var i__17810__auto___19574 = (0);
while(true){
if((i__17810__auto___19574 < len__17809__auto___19573)){
args__17816__auto__.push((arguments[i__17810__auto___19574]));

var G__19575 = (i__17810__auto___19574 + (1));
i__17810__auto___19574 = G__19575;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__19422__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__19423__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19422__auto__);
var offsets__19424__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19423__auto__));
var num_params19572 = cljs.core.last.call(null,offsets__19424__auto__);
var latefns19571 = cljs.core.map.call(null,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572){
return (function (o__19425__auto__,p__19426__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19426__auto__))){
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572){
return (function (params__19427__auto__,params_idx__19428__auto__){
return p__19426__auto__;
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572))
} else {
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572){
return (function (params__19427__auto__,params_idx__19428__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19426__auto__,params__19427__auto__,(params_idx__19428__auto__ + o__19425__auto__));
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572))
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572))
,offsets__19424__auto__,paths__19422__auto__);
var ret__19429__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19572),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571){
return (function (l__19472__auto__){
return l__19472__auto__.call(null,params19401,params_idx19402);
});})(next_fn,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571))
,latefns19571);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571))
,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19572),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571){
return (function (l__19472__auto__){
return l__19472__auto__.call(null,params19401,params_idx19402);
});})(next_fn,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571))
,latefns19571);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19572,latefns19571))
),num_params19572);
if(cljs.core._EQ_.call(null,(0),num_params19572)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19429__auto__,null,(0));
} else {
return ret__19429__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq19570){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19570));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args19576 = [];
var len__17809__auto___19579 = arguments.length;
var i__17810__auto___19580 = (0);
while(true){
if((i__17810__auto___19580 < len__17809__auto___19579)){
args19576.push((arguments[i__17810__auto___19580]));

var G__19581 = (i__17810__auto___19580 + (1));
i__17810__auto___19580 = G__19581;
continue;
} else {
}
break;
}

var G__19578 = args19576.length;
switch (G__19578) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19576.length)].join('')));

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
var args__17816__auto__ = [];
var len__17809__auto___19587 = arguments.length;
var i__17810__auto___19588 = (0);
while(true){
if((i__17810__auto___19588 < len__17809__auto___19587)){
args__17816__auto__.push((arguments[i__17810__auto___19588]));

var G__19589 = (i__17810__auto___19588 + (1));
i__17810__auto___19588 = G__19589;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__19422__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__19423__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19422__auto__);
var offsets__19424__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19423__auto__));
var num_params19586 = cljs.core.last.call(null,offsets__19424__auto__);
var latefns19585 = cljs.core.map.call(null,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586){
return (function (o__19425__auto__,p__19426__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19426__auto__))){
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586){
return (function (params__19427__auto__,params_idx__19428__auto__){
return p__19426__auto__;
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586))
} else {
return ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586){
return (function (params__19427__auto__,params_idx__19428__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19426__auto__,params__19427__auto__,(params_idx__19428__auto__ + o__19425__auto__));
});
;})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586))
}
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586))
,offsets__19424__auto__,paths__19422__auto__);
var ret__19429__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19586),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585){
return (function (l__19472__auto__){
return l__19472__auto__.call(null,params19401,params_idx19402);
});})(next_fn,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585))
,latefns19585);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585){
return (function (p1__19583_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__19583_SHARP_,structure);
});})(next_fn,compiled_paths,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585))
,compiled_paths)));
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585))
,((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585){
return (function (params19401,params_idx19402,vals__19403__auto__,structure,next_fn__19404__auto__){
var next_fn = ((function (paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585){
return (function (structure__19405__auto__){
return next_fn__19404__auto__.call(null,params19401,(params_idx19402 + num_params19586),vals__19403__auto__,structure__19405__auto__);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585){
return (function (l__19472__auto__){
return l__19472__auto__.call(null,params19401,params_idx19402);
});})(next_fn,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585))
,latefns19585);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585){
return (function (structure__$1,selector){
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585))
,structure,compiled_paths);
});})(paths__19422__auto__,needed_params__19423__auto__,offsets__19424__auto__,num_params19586,latefns19585))
),num_params19586);
if(cljs.core._EQ_.call(null,(0),num_params19586)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19429__auto__,null,(0));
} else {
return ret__19429__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq19584){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19584));
});

//# sourceMappingURL=specter.js.map?rel=1456018596082