// Compiled by ClojureScript 1.7.228 {}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.walk');
goog.require('clojure.core.reducers');
goog.require('clojure.string');
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.call(null,e);

return e;
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(paths){
if((!((paths == null))) && (!((paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 == null)))){
return paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1(paths);
} else {
var x__18954__auto__ = (((paths == null))?null:paths);
var m__18955__auto__ = (com.rpl.specter.impl.comp_paths_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,paths);
} else {
var m__18955__auto____$1 = (com.rpl.specter.impl.comp_paths_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,paths);
} else {
throw cljs.core.missing_protocol.call(null,"PathComposer.comp-paths*",paths);
}
}
}
});

com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.pr_str.call(null,o);
} else {
return [cljs.core.str(o)].join('');
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86385 = arguments.length;
var i__19358__auto___86386 = (0);
while(true){
if((i__19358__auto___86386 < len__19357__auto___86385)){
args__19364__auto__.push((arguments[i__19358__auto___86386]));

var G__86387 = (i__19358__auto___86386 + (1));
i__19358__auto___86386 = G__86387;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq86384){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86384));
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__19364__auto__ = [];
var len__19357__auto___86389 = arguments.length;
var i__19358__auto___86390 = (0);
while(true){
if((i__19358__auto___86390 < len__19357__auto___86389)){
args__19364__auto__.push((arguments[i__19358__auto___86390]));

var G__86391 = (i__19358__auto___86390 + (1));
i__19358__auto___86390 = G__86391;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((0) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__19365__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq86388){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86388));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__19227__auto__ = cljs.core.system_time.call(null);
var ret__19228__auto__ = (function (){var n__19202__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__19202__auto__)){
afn.call(null);

var G__86392 = (_ + (1));
_ = G__86392;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__19227__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__19228__auto__;
});

/**
* @constructor
*/
com.rpl.specter.impl.ExecutorFunctions = (function (type,select_executor,transform_executor){
this.type = type;
this.select_executor = select_executor;
this.transform_executor = transform_executor;
})

com.rpl.specter.impl.ExecutorFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"select-executor","select-executor",140452237,null),new cljs.core.Symbol(null,"transform-executor","transform-executor",-31221519,null)], null);
});

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$type = true;

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorStr = "com.rpl.specter.impl/ExecutorFunctions";

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"com.rpl.specter.impl/ExecutorFunctions");
});

com.rpl.specter.impl.__GT_ExecutorFunctions = (function com$rpl$specter$impl$__GT_ExecutorFunctions(type,select_executor,transform_executor){
return (new com.rpl.specter.impl.ExecutorFunctions(type,select_executor,transform_executor));
});

com.rpl.specter.impl.RichPathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"richpath","richpath",-150197948),(function (params,params_idx,selector,structure){
return selector.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(!(cljs.core.empty_QMARK_.call(null,vals))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,vals,structure__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(cljs.core.empty_QMARK_.call(null,vals)){
return transform_fn.call(null,structure__$1);
} else {
return cljs.core.apply.call(null,transform_fn,cljs.core.conj.call(null,vals,structure__$1));
}
}));
}));
com.rpl.specter.impl.StructurePathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"spath","spath",-1857758005),(function (params,params_idx,selector,structure){
return selector.call(null,structure,(function (structure__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,structure,transform_fn);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.TransformFunctions = (function (executors,selector,transformer,__meta,__extmap,__hash){
this.executors = executors;
this.selector = selector;
this.transformer = transformer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18913__auto__,k__18914__auto__){
var self__ = this;
var this__18913__auto____$1 = this;
return cljs.core._lookup.call(null,this__18913__auto____$1,k__18914__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18915__auto__,k86394,else__18916__auto__){
var self__ = this;
var this__18915__auto____$1 = this;
var G__86396 = (((k86394 instanceof cljs.core.Keyword))?k86394.fqn:null);
switch (G__86396) {
case "executors":
return self__.executors;

break;
case "selector":
return self__.selector;

break;
case "transformer":
return self__.transformer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k86394,else__18916__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18927__auto__,writer__18928__auto__,opts__18929__auto__){
var self__ = this;
var this__18927__auto____$1 = this;
var pr_pair__18930__auto__ = ((function (this__18927__auto____$1){
return (function (keyval__18931__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,cljs.core.pr_writer,""," ","",opts__18929__auto__,keyval__18931__auto__);
});})(this__18927__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,pr_pair__18930__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__18929__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86393){
var self__ = this;
var G__86393__$1 = this;
return (new cljs.core.RecordIter((0),G__86393__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18911__auto__){
var self__ = this;
var this__18911__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18907__auto__){
var self__ = this;
var this__18907__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18917__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18908__auto__){
var self__ = this;
var this__18908__auto____$1 = this;
var h__18734__auto__ = self__.__hash;
if(!((h__18734__auto__ == null))){
return h__18734__auto__;
} else {
var h__18734__auto____$1 = cljs.core.hash_imap.call(null,this__18908__auto____$1);
self__.__hash = h__18734__auto____$1;

return h__18734__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18909__auto__,other__18910__auto__){
var self__ = this;
var this__18909__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18286__auto__ = other__18910__auto__;
if(cljs.core.truth_(and__18286__auto__)){
var and__18286__auto____$1 = (this__18909__auto____$1.constructor === other__18910__auto__.constructor);
if(and__18286__auto____$1){
return cljs.core.equiv_map.call(null,this__18909__auto____$1,other__18910__auto__);
} else {
return and__18286__auto____$1;
}
} else {
return and__18286__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18922__auto__,k__18923__auto__){
var self__ = this;
var this__18922__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__18923__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18922__auto____$1),self__.__meta),k__18923__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18923__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18920__auto__,k__18921__auto__,G__86393){
var self__ = this;
var this__18920__auto____$1 = this;
var pred__86397 = cljs.core.keyword_identical_QMARK_;
var expr__86398 = k__18921__auto__;
if(cljs.core.truth_(pred__86397.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__86398))){
return (new com.rpl.specter.impl.TransformFunctions(G__86393,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86397.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__86398))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__86393,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86397.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__86398))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__86393,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18921__auto__,G__86393),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18925__auto__){
var self__ = this;
var this__18925__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18912__auto__,G__86393){
var self__ = this;
var this__18912__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__86393,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18918__auto__,entry__18919__auto__){
var self__ = this;
var this__18918__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18919__auto__)){
return cljs.core._assoc.call(null,this__18918__auto____$1,cljs.core._nth.call(null,entry__18919__auto__,(0)),cljs.core._nth.call(null,entry__18919__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18918__auto____$1,entry__18919__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__18947__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__18947__auto__,writer__18948__auto__){
return cljs.core._write.call(null,writer__18948__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__86395){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__86395),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__86395),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__86395),null,cljs.core.dissoc.call(null,G__86395,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CompiledPath = (function (transform_fns,params,params_idx,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.params = params;
this.params_idx = params_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18913__auto__,k__18914__auto__){
var self__ = this;
var this__18913__auto____$1 = this;
return cljs.core._lookup.call(null,this__18913__auto____$1,k__18914__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18915__auto__,k86402,else__18916__auto__){
var self__ = this;
var this__18915__auto____$1 = this;
var G__86404 = (((k86402 instanceof cljs.core.Keyword))?k86402.fqn:null);
switch (G__86404) {
case "transform-fns":
return self__.transform_fns;

break;
case "params":
return self__.params;

break;
case "params-idx":
return self__.params_idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k86402,else__18916__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18927__auto__,writer__18928__auto__,opts__18929__auto__){
var self__ = this;
var this__18927__auto____$1 = this;
var pr_pair__18930__auto__ = ((function (this__18927__auto____$1){
return (function (keyval__18931__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,cljs.core.pr_writer,""," ","",opts__18929__auto__,keyval__18931__auto__);
});})(this__18927__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,pr_pair__18930__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__18929__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86401){
var self__ = this;
var G__86401__$1 = this;
return (new cljs.core.RecordIter((0),G__86401__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18911__auto__){
var self__ = this;
var this__18911__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18907__auto__){
var self__ = this;
var this__18907__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18917__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18908__auto__){
var self__ = this;
var this__18908__auto____$1 = this;
var h__18734__auto__ = self__.__hash;
if(!((h__18734__auto__ == null))){
return h__18734__auto__;
} else {
var h__18734__auto____$1 = cljs.core.hash_imap.call(null,this__18908__auto____$1);
self__.__hash = h__18734__auto____$1;

return h__18734__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18909__auto__,other__18910__auto__){
var self__ = this;
var this__18909__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18286__auto__ = other__18910__auto__;
if(cljs.core.truth_(and__18286__auto__)){
var and__18286__auto____$1 = (this__18909__auto____$1.constructor === other__18910__auto__.constructor);
if(and__18286__auto____$1){
return cljs.core.equiv_map.call(null,this__18909__auto____$1,other__18910__auto__);
} else {
return and__18286__auto____$1;
}
} else {
return and__18286__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18922__auto__,k__18923__auto__){
var self__ = this;
var this__18922__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__18923__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18922__auto____$1),self__.__meta),k__18923__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18923__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18920__auto__,k__18921__auto__,G__86401){
var self__ = this;
var this__18920__auto____$1 = this;
var pred__86405 = cljs.core.keyword_identical_QMARK_;
var expr__86406 = k__18921__auto__;
if(cljs.core.truth_(pred__86405.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__86406))){
return (new com.rpl.specter.impl.CompiledPath(G__86401,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86405.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__86406))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__86401,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86405.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__86406))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__86401,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18921__auto__,G__86401),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18925__auto__){
var self__ = this;
var this__18925__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18912__auto__,G__86401){
var self__ = this;
var this__18912__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__86401,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18918__auto__,entry__18919__auto__){
var self__ = this;
var this__18918__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18919__auto__)){
return cljs.core._assoc.call(null,this__18918__auto____$1,cljs.core._nth.call(null,entry__18919__auto__,(0)),cljs.core._nth.call(null,entry__18919__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18918__auto____$1,entry__18919__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__18947__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__18947__auto__,writer__18948__auto__){
return cljs.core._write.call(null,writer__18948__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__86403){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__86403),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__86403),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__86403),null,cljs.core.dissoc.call(null,G__86403,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
});

com.rpl.specter.impl.compiled_path_QMARK_ = (function com$rpl$specter$impl$compiled_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.CompiledPath);
});
com.rpl.specter.impl.no_params_compiled_path = (function com$rpl$specter$impl$no_params_compiled_path(transform_fns){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,transform_fns,null,(0));
});
com.rpl.specter.impl.fast_object_array = (function com$rpl$specter$impl$fast_object_array(i){
return cljs.core.object_array.call(null,i);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.ParamsNeededPath = (function (transform_fns,num_needed_params,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.num_needed_params = num_needed_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18913__auto__,k__18914__auto__){
var self__ = this;
var this__18913__auto____$1 = this;
return cljs.core._lookup.call(null,this__18913__auto____$1,k__18914__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18915__auto__,k86621,else__18916__auto__){
var self__ = this;
var this__18915__auto____$1 = this;
var G__86624 = (((k86621 instanceof cljs.core.Keyword))?k86621.fqn:null);
switch (G__86624) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k86621,else__18916__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18927__auto__,writer__18928__auto__,opts__18929__auto__){
var self__ = this;
var this__18927__auto____$1 = this;
var pr_pair__18930__auto__ = ((function (this__18927__auto____$1){
return (function (keyval__18931__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,cljs.core.pr_writer,""," ","",opts__18929__auto__,keyval__18931__auto__);
});})(this__18927__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,pr_pair__18930__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__18929__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86620){
var self__ = this;
var G__86620__$1 = this;
return (new cljs.core.RecordIter((0),G__86620__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__86629 = null;
var G__86629__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__2 = (function (self__,G__86410){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(1));
(array86409[(0)] = G__86410);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__3 = (function (self__,G__86411,G__86412){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(2));
(array86409[(0)] = G__86411);

(array86409[(1)] = G__86412);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__4 = (function (self__,G__86413,G__86414,G__86415){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(3));
(array86409[(0)] = G__86413);

(array86409[(1)] = G__86414);

(array86409[(2)] = G__86415);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__5 = (function (self__,G__86416,G__86417,G__86418,G__86419){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(4));
(array86409[(0)] = G__86416);

(array86409[(1)] = G__86417);

(array86409[(2)] = G__86418);

(array86409[(3)] = G__86419);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__6 = (function (self__,G__86420,G__86421,G__86422,G__86423,G__86424){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(5));
(array86409[(0)] = G__86420);

(array86409[(1)] = G__86421);

(array86409[(2)] = G__86422);

(array86409[(3)] = G__86423);

(array86409[(4)] = G__86424);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__7 = (function (self__,G__86425,G__86426,G__86427,G__86428,G__86429,G__86430){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(6));
(array86409[(0)] = G__86425);

(array86409[(1)] = G__86426);

(array86409[(2)] = G__86427);

(array86409[(3)] = G__86428);

(array86409[(4)] = G__86429);

(array86409[(5)] = G__86430);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__8 = (function (self__,G__86431,G__86432,G__86433,G__86434,G__86435,G__86436,G__86437){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(7));
(array86409[(0)] = G__86431);

(array86409[(1)] = G__86432);

(array86409[(2)] = G__86433);

(array86409[(3)] = G__86434);

(array86409[(4)] = G__86435);

(array86409[(5)] = G__86436);

(array86409[(6)] = G__86437);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__9 = (function (self__,G__86438,G__86439,G__86440,G__86441,G__86442,G__86443,G__86444,G__86445){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(8));
(array86409[(0)] = G__86438);

(array86409[(1)] = G__86439);

(array86409[(2)] = G__86440);

(array86409[(3)] = G__86441);

(array86409[(4)] = G__86442);

(array86409[(5)] = G__86443);

(array86409[(6)] = G__86444);

(array86409[(7)] = G__86445);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__10 = (function (self__,G__86446,G__86447,G__86448,G__86449,G__86450,G__86451,G__86452,G__86453,G__86454){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(9));
(array86409[(0)] = G__86446);

(array86409[(1)] = G__86447);

(array86409[(2)] = G__86448);

(array86409[(3)] = G__86449);

(array86409[(4)] = G__86450);

(array86409[(5)] = G__86451);

(array86409[(6)] = G__86452);

(array86409[(7)] = G__86453);

(array86409[(8)] = G__86454);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__11 = (function (self__,G__86455,G__86456,G__86457,G__86458,G__86459,G__86460,G__86461,G__86462,G__86463,G__86464){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(10));
(array86409[(0)] = G__86455);

(array86409[(1)] = G__86456);

(array86409[(2)] = G__86457);

(array86409[(3)] = G__86458);

(array86409[(4)] = G__86459);

(array86409[(5)] = G__86460);

(array86409[(6)] = G__86461);

(array86409[(7)] = G__86462);

(array86409[(8)] = G__86463);

(array86409[(9)] = G__86464);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__12 = (function (self__,G__86465,G__86466,G__86467,G__86468,G__86469,G__86470,G__86471,G__86472,G__86473,G__86474,G__86475){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(11));
(array86409[(0)] = G__86465);

(array86409[(1)] = G__86466);

(array86409[(2)] = G__86467);

(array86409[(3)] = G__86468);

(array86409[(4)] = G__86469);

(array86409[(5)] = G__86470);

(array86409[(6)] = G__86471);

(array86409[(7)] = G__86472);

(array86409[(8)] = G__86473);

(array86409[(9)] = G__86474);

(array86409[(10)] = G__86475);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__13 = (function (self__,G__86476,G__86477,G__86478,G__86479,G__86480,G__86481,G__86482,G__86483,G__86484,G__86485,G__86486,G__86487){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(12));
(array86409[(0)] = G__86476);

(array86409[(1)] = G__86477);

(array86409[(2)] = G__86478);

(array86409[(3)] = G__86479);

(array86409[(4)] = G__86480);

(array86409[(5)] = G__86481);

(array86409[(6)] = G__86482);

(array86409[(7)] = G__86483);

(array86409[(8)] = G__86484);

(array86409[(9)] = G__86485);

(array86409[(10)] = G__86486);

(array86409[(11)] = G__86487);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__14 = (function (self__,G__86488,G__86489,G__86490,G__86491,G__86492,G__86493,G__86494,G__86495,G__86496,G__86497,G__86498,G__86499,G__86500){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(13));
(array86409[(0)] = G__86488);

(array86409[(1)] = G__86489);

(array86409[(2)] = G__86490);

(array86409[(3)] = G__86491);

(array86409[(4)] = G__86492);

(array86409[(5)] = G__86493);

(array86409[(6)] = G__86494);

(array86409[(7)] = G__86495);

(array86409[(8)] = G__86496);

(array86409[(9)] = G__86497);

(array86409[(10)] = G__86498);

(array86409[(11)] = G__86499);

(array86409[(12)] = G__86500);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__15 = (function (self__,G__86501,G__86502,G__86503,G__86504,G__86505,G__86506,G__86507,G__86508,G__86509,G__86510,G__86511,G__86512,G__86513,G__86514){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(14));
(array86409[(0)] = G__86501);

(array86409[(1)] = G__86502);

(array86409[(2)] = G__86503);

(array86409[(3)] = G__86504);

(array86409[(4)] = G__86505);

(array86409[(5)] = G__86506);

(array86409[(6)] = G__86507);

(array86409[(7)] = G__86508);

(array86409[(8)] = G__86509);

(array86409[(9)] = G__86510);

(array86409[(10)] = G__86511);

(array86409[(11)] = G__86512);

(array86409[(12)] = G__86513);

(array86409[(13)] = G__86514);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__16 = (function (self__,G__86515,G__86516,G__86517,G__86518,G__86519,G__86520,G__86521,G__86522,G__86523,G__86524,G__86525,G__86526,G__86527,G__86528,G__86529){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(15));
(array86409[(0)] = G__86515);

(array86409[(1)] = G__86516);

(array86409[(2)] = G__86517);

(array86409[(3)] = G__86518);

(array86409[(4)] = G__86519);

(array86409[(5)] = G__86520);

(array86409[(6)] = G__86521);

(array86409[(7)] = G__86522);

(array86409[(8)] = G__86523);

(array86409[(9)] = G__86524);

(array86409[(10)] = G__86525);

(array86409[(11)] = G__86526);

(array86409[(12)] = G__86527);

(array86409[(13)] = G__86528);

(array86409[(14)] = G__86529);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__17 = (function (self__,G__86530,G__86531,G__86532,G__86533,G__86534,G__86535,G__86536,G__86537,G__86538,G__86539,G__86540,G__86541,G__86542,G__86543,G__86544,G__86545){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(16));
(array86409[(0)] = G__86530);

(array86409[(1)] = G__86531);

(array86409[(2)] = G__86532);

(array86409[(3)] = G__86533);

(array86409[(4)] = G__86534);

(array86409[(5)] = G__86535);

(array86409[(6)] = G__86536);

(array86409[(7)] = G__86537);

(array86409[(8)] = G__86538);

(array86409[(9)] = G__86539);

(array86409[(10)] = G__86540);

(array86409[(11)] = G__86541);

(array86409[(12)] = G__86542);

(array86409[(13)] = G__86543);

(array86409[(14)] = G__86544);

(array86409[(15)] = G__86545);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__18 = (function (self__,G__86546,G__86547,G__86548,G__86549,G__86550,G__86551,G__86552,G__86553,G__86554,G__86555,G__86556,G__86557,G__86558,G__86559,G__86560,G__86561,G__86562){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(17));
(array86409[(0)] = G__86546);

(array86409[(1)] = G__86547);

(array86409[(2)] = G__86548);

(array86409[(3)] = G__86549);

(array86409[(4)] = G__86550);

(array86409[(5)] = G__86551);

(array86409[(6)] = G__86552);

(array86409[(7)] = G__86553);

(array86409[(8)] = G__86554);

(array86409[(9)] = G__86555);

(array86409[(10)] = G__86556);

(array86409[(11)] = G__86557);

(array86409[(12)] = G__86558);

(array86409[(13)] = G__86559);

(array86409[(14)] = G__86560);

(array86409[(15)] = G__86561);

(array86409[(16)] = G__86562);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__19 = (function (self__,G__86563,G__86564,G__86565,G__86566,G__86567,G__86568,G__86569,G__86570,G__86571,G__86572,G__86573,G__86574,G__86575,G__86576,G__86577,G__86578,G__86579,G__86580){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(18));
(array86409[(0)] = G__86563);

(array86409[(1)] = G__86564);

(array86409[(2)] = G__86565);

(array86409[(3)] = G__86566);

(array86409[(4)] = G__86567);

(array86409[(5)] = G__86568);

(array86409[(6)] = G__86569);

(array86409[(7)] = G__86570);

(array86409[(8)] = G__86571);

(array86409[(9)] = G__86572);

(array86409[(10)] = G__86573);

(array86409[(11)] = G__86574);

(array86409[(12)] = G__86575);

(array86409[(13)] = G__86576);

(array86409[(14)] = G__86577);

(array86409[(15)] = G__86578);

(array86409[(16)] = G__86579);

(array86409[(17)] = G__86580);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__20 = (function (self__,G__86581,G__86582,G__86583,G__86584,G__86585,G__86586,G__86587,G__86588,G__86589,G__86590,G__86591,G__86592,G__86593,G__86594,G__86595,G__86596,G__86597,G__86598,G__86599){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(19));
(array86409[(0)] = G__86581);

(array86409[(1)] = G__86582);

(array86409[(2)] = G__86583);

(array86409[(3)] = G__86584);

(array86409[(4)] = G__86585);

(array86409[(5)] = G__86586);

(array86409[(6)] = G__86587);

(array86409[(7)] = G__86588);

(array86409[(8)] = G__86589);

(array86409[(9)] = G__86590);

(array86409[(10)] = G__86591);

(array86409[(11)] = G__86592);

(array86409[(12)] = G__86593);

(array86409[(13)] = G__86594);

(array86409[(14)] = G__86595);

(array86409[(15)] = G__86596);

(array86409[(16)] = G__86597);

(array86409[(17)] = G__86598);

(array86409[(18)] = G__86599);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__21 = (function (self__,G__86600,G__86601,G__86602,G__86603,G__86604,G__86605,G__86606,G__86607,G__86608,G__86609,G__86610,G__86611,G__86612,G__86613,G__86614,G__86615,G__86616,G__86617,G__86618,G__86619){
var self__ = this;
var self____$1 = this;
var this__19433__auto__ = self____$1;
var array86409 = cljs.core.object_array.call(null,(20));
(array86409[(0)] = G__86600);

(array86409[(1)] = G__86601);

(array86409[(2)] = G__86602);

(array86409[(3)] = G__86603);

(array86409[(4)] = G__86604);

(array86409[(5)] = G__86605);

(array86409[(6)] = G__86606);

(array86409[(7)] = G__86607);

(array86409[(8)] = G__86608);

(array86409[(9)] = G__86609);

(array86409[(10)] = G__86610);

(array86409[(11)] = G__86611);

(array86409[(12)] = G__86612);

(array86409[(13)] = G__86613);

(array86409[(14)] = G__86614);

(array86409[(15)] = G__86615);

(array86409[(16)] = G__86616);

(array86409[(17)] = G__86617);

(array86409[(18)] = G__86618);

(array86409[(19)] = G__86619);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});
var G__86629__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__86629 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__86629__1.call(this,self__);
case 2:
return G__86629__2.call(this,self__,p01);
case 3:
return G__86629__3.call(this,self__,p01,p02);
case 4:
return G__86629__4.call(this,self__,p01,p02,p03);
case 5:
return G__86629__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__86629__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__86629__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__86629__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__86629__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__86629__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__86629__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__86629__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__86629__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__86629__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__86629__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__86629__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__86629__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__86629__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__86629__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__86629__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__86629__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__86629__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86629.cljs$core$IFn$_invoke$arity$1 = G__86629__1;
G__86629.cljs$core$IFn$_invoke$arity$2 = G__86629__2;
G__86629.cljs$core$IFn$_invoke$arity$3 = G__86629__3;
G__86629.cljs$core$IFn$_invoke$arity$4 = G__86629__4;
G__86629.cljs$core$IFn$_invoke$arity$5 = G__86629__5;
G__86629.cljs$core$IFn$_invoke$arity$6 = G__86629__6;
G__86629.cljs$core$IFn$_invoke$arity$7 = G__86629__7;
G__86629.cljs$core$IFn$_invoke$arity$8 = G__86629__8;
G__86629.cljs$core$IFn$_invoke$arity$9 = G__86629__9;
G__86629.cljs$core$IFn$_invoke$arity$10 = G__86629__10;
G__86629.cljs$core$IFn$_invoke$arity$11 = G__86629__11;
G__86629.cljs$core$IFn$_invoke$arity$12 = G__86629__12;
G__86629.cljs$core$IFn$_invoke$arity$13 = G__86629__13;
G__86629.cljs$core$IFn$_invoke$arity$14 = G__86629__14;
G__86629.cljs$core$IFn$_invoke$arity$15 = G__86629__15;
G__86629.cljs$core$IFn$_invoke$arity$16 = G__86629__16;
G__86629.cljs$core$IFn$_invoke$arity$17 = G__86629__17;
G__86629.cljs$core$IFn$_invoke$arity$18 = G__86629__18;
G__86629.cljs$core$IFn$_invoke$arity$19 = G__86629__19;
G__86629.cljs$core$IFn$_invoke$arity$20 = G__86629__20;
G__86629.cljs$core$IFn$_invoke$arity$21 = G__86629__21;
G__86629.cljs$core$IFn$_invoke$arity$22 = G__86629__22;
return G__86629;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args86623){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args86623)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__86410){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(1));
(array86409[(0)] = G__86410);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__86411,G__86412){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(2));
(array86409[(0)] = G__86411);

(array86409[(1)] = G__86412);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__86413,G__86414,G__86415){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(3));
(array86409[(0)] = G__86413);

(array86409[(1)] = G__86414);

(array86409[(2)] = G__86415);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__86416,G__86417,G__86418,G__86419){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(4));
(array86409[(0)] = G__86416);

(array86409[(1)] = G__86417);

(array86409[(2)] = G__86418);

(array86409[(3)] = G__86419);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__86420,G__86421,G__86422,G__86423,G__86424){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(5));
(array86409[(0)] = G__86420);

(array86409[(1)] = G__86421);

(array86409[(2)] = G__86422);

(array86409[(3)] = G__86423);

(array86409[(4)] = G__86424);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__86425,G__86426,G__86427,G__86428,G__86429,G__86430){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(6));
(array86409[(0)] = G__86425);

(array86409[(1)] = G__86426);

(array86409[(2)] = G__86427);

(array86409[(3)] = G__86428);

(array86409[(4)] = G__86429);

(array86409[(5)] = G__86430);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__86431,G__86432,G__86433,G__86434,G__86435,G__86436,G__86437){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(7));
(array86409[(0)] = G__86431);

(array86409[(1)] = G__86432);

(array86409[(2)] = G__86433);

(array86409[(3)] = G__86434);

(array86409[(4)] = G__86435);

(array86409[(5)] = G__86436);

(array86409[(6)] = G__86437);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__86438,G__86439,G__86440,G__86441,G__86442,G__86443,G__86444,G__86445){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(8));
(array86409[(0)] = G__86438);

(array86409[(1)] = G__86439);

(array86409[(2)] = G__86440);

(array86409[(3)] = G__86441);

(array86409[(4)] = G__86442);

(array86409[(5)] = G__86443);

(array86409[(6)] = G__86444);

(array86409[(7)] = G__86445);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__86446,G__86447,G__86448,G__86449,G__86450,G__86451,G__86452,G__86453,G__86454){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(9));
(array86409[(0)] = G__86446);

(array86409[(1)] = G__86447);

(array86409[(2)] = G__86448);

(array86409[(3)] = G__86449);

(array86409[(4)] = G__86450);

(array86409[(5)] = G__86451);

(array86409[(6)] = G__86452);

(array86409[(7)] = G__86453);

(array86409[(8)] = G__86454);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__86455,G__86456,G__86457,G__86458,G__86459,G__86460,G__86461,G__86462,G__86463,G__86464){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(10));
(array86409[(0)] = G__86455);

(array86409[(1)] = G__86456);

(array86409[(2)] = G__86457);

(array86409[(3)] = G__86458);

(array86409[(4)] = G__86459);

(array86409[(5)] = G__86460);

(array86409[(6)] = G__86461);

(array86409[(7)] = G__86462);

(array86409[(8)] = G__86463);

(array86409[(9)] = G__86464);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__86465,G__86466,G__86467,G__86468,G__86469,G__86470,G__86471,G__86472,G__86473,G__86474,G__86475){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(11));
(array86409[(0)] = G__86465);

(array86409[(1)] = G__86466);

(array86409[(2)] = G__86467);

(array86409[(3)] = G__86468);

(array86409[(4)] = G__86469);

(array86409[(5)] = G__86470);

(array86409[(6)] = G__86471);

(array86409[(7)] = G__86472);

(array86409[(8)] = G__86473);

(array86409[(9)] = G__86474);

(array86409[(10)] = G__86475);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__86476,G__86477,G__86478,G__86479,G__86480,G__86481,G__86482,G__86483,G__86484,G__86485,G__86486,G__86487){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(12));
(array86409[(0)] = G__86476);

(array86409[(1)] = G__86477);

(array86409[(2)] = G__86478);

(array86409[(3)] = G__86479);

(array86409[(4)] = G__86480);

(array86409[(5)] = G__86481);

(array86409[(6)] = G__86482);

(array86409[(7)] = G__86483);

(array86409[(8)] = G__86484);

(array86409[(9)] = G__86485);

(array86409[(10)] = G__86486);

(array86409[(11)] = G__86487);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__86488,G__86489,G__86490,G__86491,G__86492,G__86493,G__86494,G__86495,G__86496,G__86497,G__86498,G__86499,G__86500){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(13));
(array86409[(0)] = G__86488);

(array86409[(1)] = G__86489);

(array86409[(2)] = G__86490);

(array86409[(3)] = G__86491);

(array86409[(4)] = G__86492);

(array86409[(5)] = G__86493);

(array86409[(6)] = G__86494);

(array86409[(7)] = G__86495);

(array86409[(8)] = G__86496);

(array86409[(9)] = G__86497);

(array86409[(10)] = G__86498);

(array86409[(11)] = G__86499);

(array86409[(12)] = G__86500);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__86501,G__86502,G__86503,G__86504,G__86505,G__86506,G__86507,G__86508,G__86509,G__86510,G__86511,G__86512,G__86513,G__86514){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(14));
(array86409[(0)] = G__86501);

(array86409[(1)] = G__86502);

(array86409[(2)] = G__86503);

(array86409[(3)] = G__86504);

(array86409[(4)] = G__86505);

(array86409[(5)] = G__86506);

(array86409[(6)] = G__86507);

(array86409[(7)] = G__86508);

(array86409[(8)] = G__86509);

(array86409[(9)] = G__86510);

(array86409[(10)] = G__86511);

(array86409[(11)] = G__86512);

(array86409[(12)] = G__86513);

(array86409[(13)] = G__86514);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__86515,G__86516,G__86517,G__86518,G__86519,G__86520,G__86521,G__86522,G__86523,G__86524,G__86525,G__86526,G__86527,G__86528,G__86529){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(15));
(array86409[(0)] = G__86515);

(array86409[(1)] = G__86516);

(array86409[(2)] = G__86517);

(array86409[(3)] = G__86518);

(array86409[(4)] = G__86519);

(array86409[(5)] = G__86520);

(array86409[(6)] = G__86521);

(array86409[(7)] = G__86522);

(array86409[(8)] = G__86523);

(array86409[(9)] = G__86524);

(array86409[(10)] = G__86525);

(array86409[(11)] = G__86526);

(array86409[(12)] = G__86527);

(array86409[(13)] = G__86528);

(array86409[(14)] = G__86529);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__86530,G__86531,G__86532,G__86533,G__86534,G__86535,G__86536,G__86537,G__86538,G__86539,G__86540,G__86541,G__86542,G__86543,G__86544,G__86545){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(16));
(array86409[(0)] = G__86530);

(array86409[(1)] = G__86531);

(array86409[(2)] = G__86532);

(array86409[(3)] = G__86533);

(array86409[(4)] = G__86534);

(array86409[(5)] = G__86535);

(array86409[(6)] = G__86536);

(array86409[(7)] = G__86537);

(array86409[(8)] = G__86538);

(array86409[(9)] = G__86539);

(array86409[(10)] = G__86540);

(array86409[(11)] = G__86541);

(array86409[(12)] = G__86542);

(array86409[(13)] = G__86543);

(array86409[(14)] = G__86544);

(array86409[(15)] = G__86545);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__86546,G__86547,G__86548,G__86549,G__86550,G__86551,G__86552,G__86553,G__86554,G__86555,G__86556,G__86557,G__86558,G__86559,G__86560,G__86561,G__86562){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(17));
(array86409[(0)] = G__86546);

(array86409[(1)] = G__86547);

(array86409[(2)] = G__86548);

(array86409[(3)] = G__86549);

(array86409[(4)] = G__86550);

(array86409[(5)] = G__86551);

(array86409[(6)] = G__86552);

(array86409[(7)] = G__86553);

(array86409[(8)] = G__86554);

(array86409[(9)] = G__86555);

(array86409[(10)] = G__86556);

(array86409[(11)] = G__86557);

(array86409[(12)] = G__86558);

(array86409[(13)] = G__86559);

(array86409[(14)] = G__86560);

(array86409[(15)] = G__86561);

(array86409[(16)] = G__86562);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__86563,G__86564,G__86565,G__86566,G__86567,G__86568,G__86569,G__86570,G__86571,G__86572,G__86573,G__86574,G__86575,G__86576,G__86577,G__86578,G__86579,G__86580){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(18));
(array86409[(0)] = G__86563);

(array86409[(1)] = G__86564);

(array86409[(2)] = G__86565);

(array86409[(3)] = G__86566);

(array86409[(4)] = G__86567);

(array86409[(5)] = G__86568);

(array86409[(6)] = G__86569);

(array86409[(7)] = G__86570);

(array86409[(8)] = G__86571);

(array86409[(9)] = G__86572);

(array86409[(10)] = G__86573);

(array86409[(11)] = G__86574);

(array86409[(12)] = G__86575);

(array86409[(13)] = G__86576);

(array86409[(14)] = G__86577);

(array86409[(15)] = G__86578);

(array86409[(16)] = G__86579);

(array86409[(17)] = G__86580);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__86581,G__86582,G__86583,G__86584,G__86585,G__86586,G__86587,G__86588,G__86589,G__86590,G__86591,G__86592,G__86593,G__86594,G__86595,G__86596,G__86597,G__86598,G__86599){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(19));
(array86409[(0)] = G__86581);

(array86409[(1)] = G__86582);

(array86409[(2)] = G__86583);

(array86409[(3)] = G__86584);

(array86409[(4)] = G__86585);

(array86409[(5)] = G__86586);

(array86409[(6)] = G__86587);

(array86409[(7)] = G__86588);

(array86409[(8)] = G__86589);

(array86409[(9)] = G__86590);

(array86409[(10)] = G__86591);

(array86409[(11)] = G__86592);

(array86409[(12)] = G__86593);

(array86409[(13)] = G__86594);

(array86409[(14)] = G__86595);

(array86409[(15)] = G__86596);

(array86409[(16)] = G__86597);

(array86409[(17)] = G__86598);

(array86409[(18)] = G__86599);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__86600,G__86601,G__86602,G__86603,G__86604,G__86605,G__86606,G__86607,G__86608,G__86609,G__86610,G__86611,G__86612,G__86613,G__86614,G__86615,G__86616,G__86617,G__86618,G__86619){
var self__ = this;
var this__19433__auto__ = this;
var array86409 = cljs.core.object_array.call(null,(20));
(array86409[(0)] = G__86600);

(array86409[(1)] = G__86601);

(array86409[(2)] = G__86602);

(array86409[(3)] = G__86603);

(array86409[(4)] = G__86604);

(array86409[(5)] = G__86605);

(array86409[(6)] = G__86606);

(array86409[(7)] = G__86607);

(array86409[(8)] = G__86608);

(array86409[(9)] = G__86609);

(array86409[(10)] = G__86610);

(array86409[(11)] = G__86611);

(array86409[(12)] = G__86612);

(array86409[(13)] = G__86613);

(array86409[(14)] = G__86614);

(array86409[(15)] = G__86615);

(array86409[(16)] = G__86616);

(array86409[(17)] = G__86617);

(array86409[(18)] = G__86618);

(array86409[(19)] = G__86619);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19433__auto__,array86409,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18911__auto__){
var self__ = this;
var this__18911__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18907__auto__){
var self__ = this;
var this__18907__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18917__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18908__auto__){
var self__ = this;
var this__18908__auto____$1 = this;
var h__18734__auto__ = self__.__hash;
if(!((h__18734__auto__ == null))){
return h__18734__auto__;
} else {
var h__18734__auto____$1 = cljs.core.hash_imap.call(null,this__18908__auto____$1);
self__.__hash = h__18734__auto____$1;

return h__18734__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18909__auto__,other__18910__auto__){
var self__ = this;
var this__18909__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18286__auto__ = other__18910__auto__;
if(cljs.core.truth_(and__18286__auto__)){
var and__18286__auto____$1 = (this__18909__auto____$1.constructor === other__18910__auto__.constructor);
if(and__18286__auto____$1){
return cljs.core.equiv_map.call(null,this__18909__auto____$1,other__18910__auto__);
} else {
return and__18286__auto____$1;
}
} else {
return and__18286__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18922__auto__,k__18923__auto__){
var self__ = this;
var this__18922__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__18923__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18922__auto____$1),self__.__meta),k__18923__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18923__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18920__auto__,k__18921__auto__,G__86620){
var self__ = this;
var this__18920__auto____$1 = this;
var pred__86625 = cljs.core.keyword_identical_QMARK_;
var expr__86626 = k__18921__auto__;
if(cljs.core.truth_(pred__86625.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__86626))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__86620,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86625.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__86626))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__86620,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18921__auto__,G__86620),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18925__auto__){
var self__ = this;
var this__18925__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18912__auto__,G__86620){
var self__ = this;
var this__18912__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__86620,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18918__auto__,entry__18919__auto__){
var self__ = this;
var this__18918__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18919__auto__)){
return cljs.core._assoc.call(null,this__18918__auto____$1,cljs.core._nth.call(null,entry__18919__auto__,(0)),cljs.core._nth.call(null,entry__18919__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18918__auto____$1,entry__18919__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__18947__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__18947__auto__,writer__18948__auto__){
return cljs.core._write.call(null,writer__18948__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__86622){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__86622),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__86622),null,cljs.core.dissoc.call(null,G__86622,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
});

com.rpl.specter.impl.bind_params_STAR_ = (function com$rpl$specter$impl$bind_params_STAR_(params_needed_path,params,idx){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,params_needed_path.transform_fns,params,idx);
});
com.rpl.specter.impl.seq_contains_QMARK_ = (function com$rpl$specter$impl$seq_contains_QMARK_(aseq,val){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,val),aseq)));
});
com.rpl.specter.impl.no_prot_error_str = (function com$rpl$specter$impl$no_prot_error_str(obj){
return [cljs.core.str("Protocol implementation cannot be found for object.\n        Extending Specter protocols should not be done inline in a deftype definition\n        because that prevents Specter from finding the protocol implementations for\n        optimized performance. Instead, you should extend the protocols via an\n        explicit extend-protocol call. \n"),cljs.core.str(obj)].join('');
});
com.rpl.specter.impl.structure_path_impl = (function com$rpl$specter$impl$structure_path_impl(obj){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__86638,G__86639,G__86640){
return com.rpl.specter.protocols.select_STAR_.call(null,G__86638,G__86639,G__86640);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__86642,G__86643,G__86644){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__86642,G__86643,G__86644);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__86649,G__86650){
return com.rpl.specter.protocols.collect_val.call(null,G__86649,G__86650);
}):com.rpl.specter.protocols.collect_val)], null);
});
com.rpl.specter.impl.coerce_collector = (function com$rpl$specter$impl$coerce_collector(this$){
var cfn = new cljs.core.Keyword(null,"collect-val","collect-val",801894069).cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.collector_impl.call(null,this$));
var afn = ((function (cfn){
return (function (params,params_idx,vals,structure,next_fn){
return next_fn.call(null,params,params_idx,cljs.core.conj.call(null,vals,cfn.call(null,this$,structure)),structure);
});})(cfn))
;
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,afn,afn));
});
com.rpl.specter.impl.coerce_structure_path = (function com$rpl$specter$impl$coerce_structure_path(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return selector.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return transformer.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.coerce_structure_path_rich = (function com$rpl$specter$impl$coerce_structure_path_rich(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.structure_path_QMARK_ = (function com$rpl$specter$impl$structure_path_QMARK_(obj){
var or__18298__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__18298__auto__){
return or__18298__auto__;
} else {
if(!((obj == null))){
if((false) || (obj.com$rpl$specter$protocols$StructurePath$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__18954__auto__ = (((this$ == null))?null:this$);
var m__18955__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,this$);
} else {
var m__18955__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CoercePath.coerce-path",this$);
}
}
}
});

(com.rpl.specter.impl.CoercePath["null"] = true);

(com.rpl.specter.impl.coerce_path["null"] = (function (this$){
return com.rpl.specter.impl.coerce_structure_path.call(null,null);
}));

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.comp_paths_STAR_.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

(com.rpl.specter.impl.CoercePath["_"] = true);

(com.rpl.specter.impl.coerce_path["_"] = (function (this$){
if(cljs.core.truth_(com.rpl.specter.impl.structure_path_QMARK_.call(null,this$))){
return com.rpl.specter.impl.coerce_structure_path.call(null,this$);
} else {
if(((!((this$ == null)))?(((false) || (this$.com$rpl$specter$protocols$Collector$))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$))){
return com.rpl.specter.impl.coerce_collector.call(null,this$);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,com.rpl.specter.impl.no_prot_error_str.call(null,this$));

}
}
}));
com.rpl.specter.impl.extype = (function com$rpl$specter$impl$extype(f){
var exs = f.executors;
return exs.type;
});
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__86657){
var vec__86659 = p__86657;
var f = cljs.core.nth.call(null,vec__86659,(0),null);
var _ = cljs.core.nthnext.call(null,vec__86659,(1));
var all = vec__86659;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__86659,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__86659,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__86659,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__86659,f,_,all))
);
});
;})(exs,t,vec__86659,f,_,all))
});})(exs,t,vec__86659,f,_,all))
:((function (exs,t,vec__86659,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__86659,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__86659,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__86659,f,_,all))
);
});
;})(exs,t,vec__86659,f,_,all))
});})(exs,t,vec__86659,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__86659,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__86659,f,_,all))
,all);
});
com.rpl.specter.impl.coerce_tfns_rich = (function com$rpl$specter$impl$coerce_tfns_rich(tfns){
if(cljs.core._EQ_.call(null,com.rpl.specter.impl.extype.call(null,tfns),new cljs.core.Keyword(null,"richpath","richpath",-150197948))){
return tfns;
} else {
var selector = tfns.selector;
var transformer = tfns.transformer;
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
);
}
});
com.rpl.specter.impl.capture_params_internally = (function com$rpl$specter$impl$capture_params_internally(path){
if(!((path instanceof com.rpl.specter.impl.CompiledPath))){
return path;
} else {
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(path);
var params_idx = new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(path);
var selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
var transformer = new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
if(cljs.core.empty_QMARK_.call(null,params)){
return path;
} else {
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return selector.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return transformer.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
));
}
}
});
(com.rpl.specter.impl.PathComposer["null"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["null"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

(com.rpl.specter.impl.PathComposer["_"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["_"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 = (function (structure_paths){
var structure_paths__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure_paths__$1)){
return com.rpl.specter.impl.coerce_path.call(null,null);
} else {
var coerced = cljs.core.map.call(null,com.rpl.specter.impl.capture_params_internally,cljs.core.map.call(null,com.rpl.specter.impl.coerce_path,structure_paths__$1));
var combined = cljs.core.map.call(null,com.rpl.specter.impl.combine_same_types,cljs.core.partition_by.call(null,com.rpl.specter.impl.extype,cljs.core.map.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),coerced)));
var result_tfn = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,combined)))?cljs.core.first.call(null,combined):com.rpl.specter.impl.combine_same_types.call(null,cljs.core.map.call(null,com.rpl.specter.impl.coerce_tfns_rich,combined)));
var needs_params_paths = cljs.core.filter.call(null,((function (coerced,combined,result_tfn,structure_paths__$1){
return (function (p1__86660_SHARP_){
return (p1__86660_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
});})(coerced,combined,result_tfn,structure_paths__$1))
,coerced);
if(cljs.core.empty_QMARK_.call(null,needs_params_paths)){
return com.rpl.specter.impl.no_params_compiled_path.call(null,result_tfn);
} else {
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.coerce_tfns_rich.call(null,result_tfn),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),needs_params_paths)));
}
}
});
com.rpl.specter.impl.num_needed_params = (function com$rpl$specter$impl$num_needed_params(path){
if((path instanceof com.rpl.specter.impl.CompiledPath)){
return (0);
} else {
return new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(path);
}
});

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((!((cell == null))) && (!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__18954__auto__ = (((cell == null))?null:cell);
var m__18955__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,cell,x);
} else {
var m__18955__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,cell,x);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableCell.set_cell",cell);
}
}
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
})
com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = true;

com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

com.rpl.specter.impl.MutableCell.cljs$lang$type = true;

com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell";

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args86661 = [];
var len__19357__auto___86664 = arguments.length;
var i__19358__auto___86665 = (0);
while(true){
if((i__19358__auto___86665 < len__19357__auto___86664)){
args86661.push((arguments[i__19358__auto___86665]));

var G__86666 = (i__19358__auto___86665 + (1));
i__19358__auto___86665 = G__86666;
continue;
} else {
}
break;
}

var G__86663 = args86661.length;
switch (G__86663) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86661.length)].join('')));

}
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.call(null,null);
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
});

com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1;
com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell.call(null,cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = afn.call(null,com.rpl.specter.impl.get_cell.call(null,cell));
com.rpl.specter.impl.set_cell_BANG_.call(null,cell,ret);

return ret;
});
com.rpl.specter.impl.append = (function com$rpl$specter$impl$append(coll,elem){
return cljs.core.conj.call(null,cljs.core.vec.call(null,coll),elem);
});

/**
 * @interface
 */
com.rpl.specter.impl.SetExtremes = function(){};

com.rpl.specter.impl.set_first = (function com$rpl$specter$impl$set_first(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_first$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_first$arity$2(s,val);
} else {
var x__18954__auto__ = (((s == null))?null:s);
var m__18955__auto__ = (com.rpl.specter.impl.set_first[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,s,val);
} else {
var m__18955__auto____$1 = (com.rpl.specter.impl.set_first["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-first",s);
}
}
}
});

com.rpl.specter.impl.set_last = (function com$rpl$specter$impl$set_last(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_last$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_last$arity$2(s,val);
} else {
var x__18954__auto__ = (((s == null))?null:s);
var m__18955__auto__ = (com.rpl.specter.impl.set_last[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,s,val);
} else {
var m__18955__auto____$1 = (com.rpl.specter.impl.set_last["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-last",s);
}
}
}
});

com.rpl.specter.impl.set_first_list = (function com$rpl$specter$impl$set_first_list(l,v){
return cljs.core.cons.call(null,v,cljs.core.rest.call(null,l));
});
com.rpl.specter.impl.set_last_list = (function com$rpl$specter$impl$set_last_list(l,v){
return com.rpl.specter.impl.append.call(null,cljs.core.butlast.call(null,l),v);
});
cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_first$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(0),val);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_last$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(cljs.core.count.call(null,v__$1) - (1)),val);
});

(com.rpl.specter.impl.SetExtremes["_"] = true);

(com.rpl.specter.impl.set_first["_"] = (function (l,val){
return com.rpl.specter.impl.set_first_list.call(null,l,val);
}));

(com.rpl.specter.impl.set_last["_"] = (function (l,val){
return com.rpl.specter.impl.set_last_list.call(null,l,val);
}));
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
return clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return ((f instanceof clojure.lang.Cons)) || ((f instanceof clojure.lang.LazySeq)) || (cljs.core.list_QMARK_.call(null,f));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__18286__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__18286__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__18286__auto__;
}
})())){
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.conj_all_BANG_ = (function com$rpl$specter$impl$conj_all_BANG_(cell,elems){
return com.rpl.specter.impl.set_cell_BANG_.call(null,cell,cljs.core.concat.call(null,com.rpl.specter.impl.get_cell.call(null,cell),elems));
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.select_executor.call(null,path.params,path.params_idx,tfns.selector,structure);
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(path,transform_fn,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.transform_executor.call(null,path.params,path.params_idx,tfns.transformer,transform_fn,structure);
});
com.rpl.specter.impl.not_selected_QMARK__STAR_ = (function com$rpl$specter$impl$not_selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.selected_QMARK__STAR_ = (function com$rpl$specter$impl$selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.not.call(null,com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.PersistentVector.EMPTY);
var walker = ((function (ret){
return (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_(pred.call(null,structure__$1))){
return com.rpl.specter.impl.conj_all_BANG_.call(null,ret,continue_fn.call(null,structure__$1));
} else {
return clojure.walk.walk.call(null,com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});})(ret))
;
walker.call(null,structure);

return com.rpl.specter.impl.get_cell.call(null,ret);
});
com.rpl.specter.impl.filter_PLUS_ancestry = (function com$rpl$specter$impl$filter_PLUS_ancestry(path,aseq){
var aseq__$1 = cljs.core.vec.call(null,aseq);
return cljs.core.reduce.call(null,((function (aseq__$1){
return (function (p__86670,i){
var vec__86671 = p__86670;
var s = cljs.core.nth.call(null,vec__86671,(0),null);
var m = cljs.core.nth.call(null,vec__86671,(1),null);
var orig = vec__86671;
var e = cljs.core.get.call(null,aseq__$1,i);
var pos = cljs.core.count.call(null,s);
if(cljs.core.truth_(com.rpl.specter.impl.selected_QMARK__STAR_.call(null,path,e))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,s,e),cljs.core.assoc.call(null,m,pos,i)], null);
} else {
return orig;
}
});})(aseq__$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.range.call(null,cljs.core.count.call(null,aseq__$1)));
});
com.rpl.specter.impl.key_select = (function com$rpl$specter$impl$key_select(akey,structure,next_fn){
return next_fn.call(null,cljs.core.get.call(null,structure,akey));
});
com.rpl.specter.impl.key_transform = (function com$rpl$specter$impl$key_transform(akey,structure,next_fn){
return cljs.core.assoc.call(null,structure,akey,next_fn.call(null,cljs.core.get.call(null,structure,akey)));
});

/**
* @constructor
*/
com.rpl.specter.impl.AllStructurePath = (function (){
})

com.rpl.specter.impl.AllStructurePath.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.AllStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/AllStructurePath";

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"com.rpl.specter.impl/AllStructurePath");
});

com.rpl.specter.impl.__GT_AllStructurePath = (function com$rpl$specter$impl$__GT_AllStructurePath(){
return (new com.rpl.specter.impl.AllStructurePath());
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,clojure.core.reducers.mapcat.call(null,next_fn,structure));
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
var empty_structure = cljs.core.empty.call(null,structure);
if(cljs.core.list_QMARK_.call(null,empty_structure)){
return cljs.core.doall.call(null,cljs.core.map.call(null,next_fn,structure));
} else {
return cljs.core.into.call(null,empty_structure,clojure.core.reducers.map.call(null,next_fn,structure));
}
});

/**
* @constructor
*/
com.rpl.specter.impl.ValCollect = (function (){
})

com.rpl.specter.impl.ValCollect.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.ValCollect.cljs$lang$type = true;

com.rpl.specter.impl.ValCollect.cljs$lang$ctorStr = "com.rpl.specter.impl/ValCollect";

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"com.rpl.specter.impl/ValCollect");
});

com.rpl.specter.impl.__GT_ValCollect = (function com$rpl$specter$impl$__GT_ValCollect(){
return (new com.rpl.specter.impl.ValCollect());
});

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$ = true;

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$collect_val$arity$2 = (function (this$,structure){
var this$__$1 = this;
return structure;
});

/**
* @constructor
*/
com.rpl.specter.impl.PosStructurePath = (function (getter,setter){
this.getter = getter;
this.setter = setter;
})

com.rpl.specter.impl.PosStructurePath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

com.rpl.specter.impl.PosStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/PosStructurePath";

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"com.rpl.specter.impl/PosStructurePath");
});

com.rpl.specter.impl.__GT_PosStructurePath = (function com$rpl$specter$impl$__GT_PosStructurePath(getter,setter){
return (new com.rpl.specter.impl.PosStructurePath(getter,setter));
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(!(cljs.core.empty_QMARK_.call(null,structure))){
return next_fn.call(null,this$__$1.getter.call(null,structure));
} else {
return null;
}
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure)){
return structure;
} else {
return this$__$1.setter.call(null,structure,next_fn.call(null,this$__$1.getter.call(null,structure)));
}
});
com.rpl.specter.impl.srange_select = (function com$rpl$specter$impl$srange_select(structure,start,end,next_fn){
return next_fn.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end));
});
com.rpl.specter.impl.srange_transform = (function com$rpl$specter$impl$srange_transform(structure,start,end,next_fn){
var structurev = cljs.core.vec.call(null,structure);
var newpart = next_fn.call(null,cljs.core.subvec.call(null,structurev,start,end));
var res = cljs.core.concat.call(null,cljs.core.subvec.call(null,structurev,(0),start),newpart,cljs.core.subvec.call(null,structurev,end,cljs.core.count.call(null,structure)));
if(cljs.core.vector_QMARK_.call(null,structure)){
return cljs.core.vec.call(null,res);
} else {
return res;
}
});
(com.rpl.specter.protocols.StructurePath["null"] = true);

(com.rpl.specter.protocols.select_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));

(com.rpl.specter.protocols.transform_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));
com.rpl.specter.impl.retrieve_cond_selector = (function com$rpl$specter$impl$retrieve_cond_selector(cond_paths,structure){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p__86674){
var vec__86675 = p__86674;
var c_selector = cljs.core.nth.call(null,vec__86675,(0),null);
var _ = cljs.core.nth.call(null,vec__86675,(1),null);
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,c_selector,structure));
}),cljs.core.partition.call(null,(2),cond_paths))));
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return null;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return structure;
}
});
com.rpl.specter.impl.compiled_selector = (function com$rpl$specter$impl$compiled_selector(path){
var tfns = path.transform_fns;
return tfns.selector;
});
com.rpl.specter.impl.compiled_transformer = (function com$rpl$specter$impl$compiled_transformer(path){
var tfns = path.transform_fns;
return tfns.transformer;
});
com.rpl.specter.impl.params_needed_selector = (function com$rpl$specter$impl$params_needed_selector(path){
var tfns = path.transform_fns;
return tfns.selector;
});
com.rpl.specter.impl.params_needed_transformer = (function com$rpl$specter$impl$params_needed_transformer(path){
var tfns = path.transform_fns;
return tfns.transformer;
});

//# sourceMappingURL=impl.js.map?rel=1460037776093