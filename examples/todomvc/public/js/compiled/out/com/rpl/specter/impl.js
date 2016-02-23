// Compiled by ClojureScript 1.7.170 {}
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
var x__17406__auto__ = (((paths == null))?null:paths);
var m__17407__auto__ = (com.rpl.specter.impl.comp_paths_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,paths);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.comp_paths_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,paths);
} else {
throw cljs.core.missing_protocol.call(null,"PathComposer.comp-paths*",paths);
}
}
}
});

com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__17816__auto__ = [];
var len__17809__auto___18179 = arguments.length;
var i__17810__auto___18180 = (0);
while(true){
if((i__17810__auto___18180 < len__17809__auto___18179)){
args__17816__auto__.push((arguments[i__17810__auto___18180]));

var G__18181 = (i__17810__auto___18180 + (1));
i__17810__auto___18180 = G__18181;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq18178){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18178));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__17679__auto__ = cljs.core.system_time.call(null);
var ret__17680__auto__ = (function (){var n__17654__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__17654__auto__)){
afn.call(null);

var G__18182 = (_ + (1));
_ = G__18182;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__17679__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__17680__auto__;
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

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/ExecutorFunctions");
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
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17365__auto__,k__17366__auto__){
var self__ = this;
var this__17365__auto____$1 = this;
return cljs.core._lookup.call(null,this__17365__auto____$1,k__17366__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k18184,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__18186 = (((k18184 instanceof cljs.core.Keyword))?k18184.fqn:null);
switch (G__18186) {
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
return cljs.core.get.call(null,self__.__extmap,k18184,else__17368__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17379__auto__,writer__17380__auto__,opts__17381__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
var pr_pair__17382__auto__ = ((function (this__17379__auto____$1){
return (function (keyval__17383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,cljs.core.pr_writer,""," ","",opts__17381__auto__,keyval__17383__auto__);
});})(this__17379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,pr_pair__17382__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__17381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18183){
var self__ = this;
var G__18183__$1 = this;
return (new cljs.core.RecordIter((0),G__18183__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17363__auto__){
var self__ = this;
var this__17363__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17359__auto__){
var self__ = this;
var this__17359__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17369__auto__){
var self__ = this;
var this__17369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17360__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var h__17186__auto__ = self__.__hash;
if(!((h__17186__auto__ == null))){
return h__17186__auto__;
} else {
var h__17186__auto____$1 = cljs.core.hash_imap.call(null,this__17360__auto____$1);
self__.__hash = h__17186__auto____$1;

return h__17186__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17361__auto__,other__17362__auto__){
var self__ = this;
var this__17361__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16739__auto__ = other__17362__auto__;
if(cljs.core.truth_(and__16739__auto__)){
var and__16739__auto____$1 = (this__17361__auto____$1.constructor === other__17362__auto__.constructor);
if(and__16739__auto____$1){
return cljs.core.equiv_map.call(null,this__17361__auto____$1,other__17362__auto__);
} else {
return and__16739__auto____$1;
}
} else {
return and__16739__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17374__auto__,k__17375__auto__){
var self__ = this;
var this__17374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__17375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17374__auto____$1),self__.__meta),k__17375__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17375__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__18183){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__18187 = cljs.core.keyword_identical_QMARK_;
var expr__18188 = k__17373__auto__;
if(cljs.core.truth_(pred__18187.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__18188))){
return (new com.rpl.specter.impl.TransformFunctions(G__18183,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18187.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__18188))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__18183,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18187.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__18188))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__18183,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__18183),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__18183){
var self__ = this;
var this__17364__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__18183,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17370__auto__,entry__17371__auto__){
var self__ = this;
var this__17370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17371__auto__)){
return cljs.core._assoc.call(null,this__17370__auto____$1,cljs.core._nth.call(null,entry__17371__auto__,(0)),cljs.core._nth.call(null,entry__17371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17370__auto____$1,entry__17371__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__17399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__17399__auto__,writer__17400__auto__){
return cljs.core._write.call(null,writer__17400__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__18185){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__18185),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__18185),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__18185),null,cljs.core.dissoc.call(null,G__18185,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
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
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17365__auto__,k__17366__auto__){
var self__ = this;
var this__17365__auto____$1 = this;
return cljs.core._lookup.call(null,this__17365__auto____$1,k__17366__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k18192,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__18194 = (((k18192 instanceof cljs.core.Keyword))?k18192.fqn:null);
switch (G__18194) {
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
return cljs.core.get.call(null,self__.__extmap,k18192,else__17368__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17379__auto__,writer__17380__auto__,opts__17381__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
var pr_pair__17382__auto__ = ((function (this__17379__auto____$1){
return (function (keyval__17383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,cljs.core.pr_writer,""," ","",opts__17381__auto__,keyval__17383__auto__);
});})(this__17379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,pr_pair__17382__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__17381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18191){
var self__ = this;
var G__18191__$1 = this;
return (new cljs.core.RecordIter((0),G__18191__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17363__auto__){
var self__ = this;
var this__17363__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17359__auto__){
var self__ = this;
var this__17359__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17369__auto__){
var self__ = this;
var this__17369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17360__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var h__17186__auto__ = self__.__hash;
if(!((h__17186__auto__ == null))){
return h__17186__auto__;
} else {
var h__17186__auto____$1 = cljs.core.hash_imap.call(null,this__17360__auto____$1);
self__.__hash = h__17186__auto____$1;

return h__17186__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17361__auto__,other__17362__auto__){
var self__ = this;
var this__17361__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16739__auto__ = other__17362__auto__;
if(cljs.core.truth_(and__16739__auto__)){
var and__16739__auto____$1 = (this__17361__auto____$1.constructor === other__17362__auto__.constructor);
if(and__16739__auto____$1){
return cljs.core.equiv_map.call(null,this__17361__auto____$1,other__17362__auto__);
} else {
return and__16739__auto____$1;
}
} else {
return and__16739__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17374__auto__,k__17375__auto__){
var self__ = this;
var this__17374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__17375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17374__auto____$1),self__.__meta),k__17375__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17375__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__18191){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__18195 = cljs.core.keyword_identical_QMARK_;
var expr__18196 = k__17373__auto__;
if(cljs.core.truth_(pred__18195.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__18196))){
return (new com.rpl.specter.impl.CompiledPath(G__18191,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18195.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__18196))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__18191,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18195.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__18196))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__18191,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__18191),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__18191){
var self__ = this;
var this__17364__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__18191,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17370__auto__,entry__17371__auto__){
var self__ = this;
var this__17370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17371__auto__)){
return cljs.core._assoc.call(null,this__17370__auto____$1,cljs.core._nth.call(null,entry__17371__auto__,(0)),cljs.core._nth.call(null,entry__17371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17370__auto____$1,entry__17371__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__17399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__17399__auto__,writer__17400__auto__){
return cljs.core._write.call(null,writer__17400__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__18193){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__18193),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__18193),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__18193),null,cljs.core.dissoc.call(null,G__18193,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
});

com.rpl.specter.impl.compiled_path_QMARK_ = (function com$rpl$specter$impl$compiled_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.CompiledPath);
});
com.rpl.specter.impl.no_params_compiled_path = (function com$rpl$specter$impl$no_params_compiled_path(transform_fns){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,transform_fns,null,(0));
});
com.rpl.specter.impl.bind_params_STAR_;

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
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17365__auto__,k__17366__auto__){
var self__ = this;
var this__17365__auto____$1 = this;
return cljs.core._lookup.call(null,this__17365__auto____$1,k__17366__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k18411,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__18414 = (((k18411 instanceof cljs.core.Keyword))?k18411.fqn:null);
switch (G__18414) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18411,else__17368__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17379__auto__,writer__17380__auto__,opts__17381__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
var pr_pair__17382__auto__ = ((function (this__17379__auto____$1){
return (function (keyval__17383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,cljs.core.pr_writer,""," ","",opts__17381__auto__,keyval__17383__auto__);
});})(this__17379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,pr_pair__17382__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__17381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18410){
var self__ = this;
var G__18410__$1 = this;
return (new cljs.core.RecordIter((0),G__18410__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__18419 = null;
var G__18419__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__2 = (function (self__,G__18200){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(1));
(array18199[(0)] = G__18200);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__3 = (function (self__,G__18201,G__18202){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(2));
(array18199[(0)] = G__18201);

(array18199[(1)] = G__18202);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__4 = (function (self__,G__18203,G__18204,G__18205){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(3));
(array18199[(0)] = G__18203);

(array18199[(1)] = G__18204);

(array18199[(2)] = G__18205);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__5 = (function (self__,G__18206,G__18207,G__18208,G__18209){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(4));
(array18199[(0)] = G__18206);

(array18199[(1)] = G__18207);

(array18199[(2)] = G__18208);

(array18199[(3)] = G__18209);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__6 = (function (self__,G__18210,G__18211,G__18212,G__18213,G__18214){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(5));
(array18199[(0)] = G__18210);

(array18199[(1)] = G__18211);

(array18199[(2)] = G__18212);

(array18199[(3)] = G__18213);

(array18199[(4)] = G__18214);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__7 = (function (self__,G__18215,G__18216,G__18217,G__18218,G__18219,G__18220){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(6));
(array18199[(0)] = G__18215);

(array18199[(1)] = G__18216);

(array18199[(2)] = G__18217);

(array18199[(3)] = G__18218);

(array18199[(4)] = G__18219);

(array18199[(5)] = G__18220);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__8 = (function (self__,G__18221,G__18222,G__18223,G__18224,G__18225,G__18226,G__18227){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(7));
(array18199[(0)] = G__18221);

(array18199[(1)] = G__18222);

(array18199[(2)] = G__18223);

(array18199[(3)] = G__18224);

(array18199[(4)] = G__18225);

(array18199[(5)] = G__18226);

(array18199[(6)] = G__18227);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__9 = (function (self__,G__18228,G__18229,G__18230,G__18231,G__18232,G__18233,G__18234,G__18235){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(8));
(array18199[(0)] = G__18228);

(array18199[(1)] = G__18229);

(array18199[(2)] = G__18230);

(array18199[(3)] = G__18231);

(array18199[(4)] = G__18232);

(array18199[(5)] = G__18233);

(array18199[(6)] = G__18234);

(array18199[(7)] = G__18235);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__10 = (function (self__,G__18236,G__18237,G__18238,G__18239,G__18240,G__18241,G__18242,G__18243,G__18244){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(9));
(array18199[(0)] = G__18236);

(array18199[(1)] = G__18237);

(array18199[(2)] = G__18238);

(array18199[(3)] = G__18239);

(array18199[(4)] = G__18240);

(array18199[(5)] = G__18241);

(array18199[(6)] = G__18242);

(array18199[(7)] = G__18243);

(array18199[(8)] = G__18244);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__11 = (function (self__,G__18245,G__18246,G__18247,G__18248,G__18249,G__18250,G__18251,G__18252,G__18253,G__18254){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(10));
(array18199[(0)] = G__18245);

(array18199[(1)] = G__18246);

(array18199[(2)] = G__18247);

(array18199[(3)] = G__18248);

(array18199[(4)] = G__18249);

(array18199[(5)] = G__18250);

(array18199[(6)] = G__18251);

(array18199[(7)] = G__18252);

(array18199[(8)] = G__18253);

(array18199[(9)] = G__18254);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__12 = (function (self__,G__18255,G__18256,G__18257,G__18258,G__18259,G__18260,G__18261,G__18262,G__18263,G__18264,G__18265){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(11));
(array18199[(0)] = G__18255);

(array18199[(1)] = G__18256);

(array18199[(2)] = G__18257);

(array18199[(3)] = G__18258);

(array18199[(4)] = G__18259);

(array18199[(5)] = G__18260);

(array18199[(6)] = G__18261);

(array18199[(7)] = G__18262);

(array18199[(8)] = G__18263);

(array18199[(9)] = G__18264);

(array18199[(10)] = G__18265);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__13 = (function (self__,G__18266,G__18267,G__18268,G__18269,G__18270,G__18271,G__18272,G__18273,G__18274,G__18275,G__18276,G__18277){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(12));
(array18199[(0)] = G__18266);

(array18199[(1)] = G__18267);

(array18199[(2)] = G__18268);

(array18199[(3)] = G__18269);

(array18199[(4)] = G__18270);

(array18199[(5)] = G__18271);

(array18199[(6)] = G__18272);

(array18199[(7)] = G__18273);

(array18199[(8)] = G__18274);

(array18199[(9)] = G__18275);

(array18199[(10)] = G__18276);

(array18199[(11)] = G__18277);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__14 = (function (self__,G__18278,G__18279,G__18280,G__18281,G__18282,G__18283,G__18284,G__18285,G__18286,G__18287,G__18288,G__18289,G__18290){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(13));
(array18199[(0)] = G__18278);

(array18199[(1)] = G__18279);

(array18199[(2)] = G__18280);

(array18199[(3)] = G__18281);

(array18199[(4)] = G__18282);

(array18199[(5)] = G__18283);

(array18199[(6)] = G__18284);

(array18199[(7)] = G__18285);

(array18199[(8)] = G__18286);

(array18199[(9)] = G__18287);

(array18199[(10)] = G__18288);

(array18199[(11)] = G__18289);

(array18199[(12)] = G__18290);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__15 = (function (self__,G__18291,G__18292,G__18293,G__18294,G__18295,G__18296,G__18297,G__18298,G__18299,G__18300,G__18301,G__18302,G__18303,G__18304){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(14));
(array18199[(0)] = G__18291);

(array18199[(1)] = G__18292);

(array18199[(2)] = G__18293);

(array18199[(3)] = G__18294);

(array18199[(4)] = G__18295);

(array18199[(5)] = G__18296);

(array18199[(6)] = G__18297);

(array18199[(7)] = G__18298);

(array18199[(8)] = G__18299);

(array18199[(9)] = G__18300);

(array18199[(10)] = G__18301);

(array18199[(11)] = G__18302);

(array18199[(12)] = G__18303);

(array18199[(13)] = G__18304);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__16 = (function (self__,G__18305,G__18306,G__18307,G__18308,G__18309,G__18310,G__18311,G__18312,G__18313,G__18314,G__18315,G__18316,G__18317,G__18318,G__18319){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(15));
(array18199[(0)] = G__18305);

(array18199[(1)] = G__18306);

(array18199[(2)] = G__18307);

(array18199[(3)] = G__18308);

(array18199[(4)] = G__18309);

(array18199[(5)] = G__18310);

(array18199[(6)] = G__18311);

(array18199[(7)] = G__18312);

(array18199[(8)] = G__18313);

(array18199[(9)] = G__18314);

(array18199[(10)] = G__18315);

(array18199[(11)] = G__18316);

(array18199[(12)] = G__18317);

(array18199[(13)] = G__18318);

(array18199[(14)] = G__18319);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__17 = (function (self__,G__18320,G__18321,G__18322,G__18323,G__18324,G__18325,G__18326,G__18327,G__18328,G__18329,G__18330,G__18331,G__18332,G__18333,G__18334,G__18335){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(16));
(array18199[(0)] = G__18320);

(array18199[(1)] = G__18321);

(array18199[(2)] = G__18322);

(array18199[(3)] = G__18323);

(array18199[(4)] = G__18324);

(array18199[(5)] = G__18325);

(array18199[(6)] = G__18326);

(array18199[(7)] = G__18327);

(array18199[(8)] = G__18328);

(array18199[(9)] = G__18329);

(array18199[(10)] = G__18330);

(array18199[(11)] = G__18331);

(array18199[(12)] = G__18332);

(array18199[(13)] = G__18333);

(array18199[(14)] = G__18334);

(array18199[(15)] = G__18335);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__18 = (function (self__,G__18336,G__18337,G__18338,G__18339,G__18340,G__18341,G__18342,G__18343,G__18344,G__18345,G__18346,G__18347,G__18348,G__18349,G__18350,G__18351,G__18352){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(17));
(array18199[(0)] = G__18336);

(array18199[(1)] = G__18337);

(array18199[(2)] = G__18338);

(array18199[(3)] = G__18339);

(array18199[(4)] = G__18340);

(array18199[(5)] = G__18341);

(array18199[(6)] = G__18342);

(array18199[(7)] = G__18343);

(array18199[(8)] = G__18344);

(array18199[(9)] = G__18345);

(array18199[(10)] = G__18346);

(array18199[(11)] = G__18347);

(array18199[(12)] = G__18348);

(array18199[(13)] = G__18349);

(array18199[(14)] = G__18350);

(array18199[(15)] = G__18351);

(array18199[(16)] = G__18352);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__19 = (function (self__,G__18353,G__18354,G__18355,G__18356,G__18357,G__18358,G__18359,G__18360,G__18361,G__18362,G__18363,G__18364,G__18365,G__18366,G__18367,G__18368,G__18369,G__18370){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(18));
(array18199[(0)] = G__18353);

(array18199[(1)] = G__18354);

(array18199[(2)] = G__18355);

(array18199[(3)] = G__18356);

(array18199[(4)] = G__18357);

(array18199[(5)] = G__18358);

(array18199[(6)] = G__18359);

(array18199[(7)] = G__18360);

(array18199[(8)] = G__18361);

(array18199[(9)] = G__18362);

(array18199[(10)] = G__18363);

(array18199[(11)] = G__18364);

(array18199[(12)] = G__18365);

(array18199[(13)] = G__18366);

(array18199[(14)] = G__18367);

(array18199[(15)] = G__18368);

(array18199[(16)] = G__18369);

(array18199[(17)] = G__18370);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__20 = (function (self__,G__18371,G__18372,G__18373,G__18374,G__18375,G__18376,G__18377,G__18378,G__18379,G__18380,G__18381,G__18382,G__18383,G__18384,G__18385,G__18386,G__18387,G__18388,G__18389){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(19));
(array18199[(0)] = G__18371);

(array18199[(1)] = G__18372);

(array18199[(2)] = G__18373);

(array18199[(3)] = G__18374);

(array18199[(4)] = G__18375);

(array18199[(5)] = G__18376);

(array18199[(6)] = G__18377);

(array18199[(7)] = G__18378);

(array18199[(8)] = G__18379);

(array18199[(9)] = G__18380);

(array18199[(10)] = G__18381);

(array18199[(11)] = G__18382);

(array18199[(12)] = G__18383);

(array18199[(13)] = G__18384);

(array18199[(14)] = G__18385);

(array18199[(15)] = G__18386);

(array18199[(16)] = G__18387);

(array18199[(17)] = G__18388);

(array18199[(18)] = G__18389);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__21 = (function (self__,G__18390,G__18391,G__18392,G__18393,G__18394,G__18395,G__18396,G__18397,G__18398,G__18399,G__18400,G__18401,G__18402,G__18403,G__18404,G__18405,G__18406,G__18407,G__18408,G__18409){
var self__ = this;
var self____$1 = this;
var this__18128__auto__ = self____$1;
var array18199 = cljs.core.object_array.call(null,(20));
(array18199[(0)] = G__18390);

(array18199[(1)] = G__18391);

(array18199[(2)] = G__18392);

(array18199[(3)] = G__18393);

(array18199[(4)] = G__18394);

(array18199[(5)] = G__18395);

(array18199[(6)] = G__18396);

(array18199[(7)] = G__18397);

(array18199[(8)] = G__18398);

(array18199[(9)] = G__18399);

(array18199[(10)] = G__18400);

(array18199[(11)] = G__18401);

(array18199[(12)] = G__18402);

(array18199[(13)] = G__18403);

(array18199[(14)] = G__18404);

(array18199[(15)] = G__18405);

(array18199[(16)] = G__18406);

(array18199[(17)] = G__18407);

(array18199[(18)] = G__18408);

(array18199[(19)] = G__18409);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});
var G__18419__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__18419 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__18419__1.call(this,self__);
case 2:
return G__18419__2.call(this,self__,p01);
case 3:
return G__18419__3.call(this,self__,p01,p02);
case 4:
return G__18419__4.call(this,self__,p01,p02,p03);
case 5:
return G__18419__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__18419__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__18419__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__18419__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__18419__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__18419__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__18419__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__18419__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__18419__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__18419__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__18419__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__18419__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__18419__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__18419__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__18419__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__18419__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__18419__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__18419__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18419.cljs$core$IFn$_invoke$arity$1 = G__18419__1;
G__18419.cljs$core$IFn$_invoke$arity$2 = G__18419__2;
G__18419.cljs$core$IFn$_invoke$arity$3 = G__18419__3;
G__18419.cljs$core$IFn$_invoke$arity$4 = G__18419__4;
G__18419.cljs$core$IFn$_invoke$arity$5 = G__18419__5;
G__18419.cljs$core$IFn$_invoke$arity$6 = G__18419__6;
G__18419.cljs$core$IFn$_invoke$arity$7 = G__18419__7;
G__18419.cljs$core$IFn$_invoke$arity$8 = G__18419__8;
G__18419.cljs$core$IFn$_invoke$arity$9 = G__18419__9;
G__18419.cljs$core$IFn$_invoke$arity$10 = G__18419__10;
G__18419.cljs$core$IFn$_invoke$arity$11 = G__18419__11;
G__18419.cljs$core$IFn$_invoke$arity$12 = G__18419__12;
G__18419.cljs$core$IFn$_invoke$arity$13 = G__18419__13;
G__18419.cljs$core$IFn$_invoke$arity$14 = G__18419__14;
G__18419.cljs$core$IFn$_invoke$arity$15 = G__18419__15;
G__18419.cljs$core$IFn$_invoke$arity$16 = G__18419__16;
G__18419.cljs$core$IFn$_invoke$arity$17 = G__18419__17;
G__18419.cljs$core$IFn$_invoke$arity$18 = G__18419__18;
G__18419.cljs$core$IFn$_invoke$arity$19 = G__18419__19;
G__18419.cljs$core$IFn$_invoke$arity$20 = G__18419__20;
G__18419.cljs$core$IFn$_invoke$arity$21 = G__18419__21;
G__18419.cljs$core$IFn$_invoke$arity$22 = G__18419__22;
return G__18419;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args18413){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18413)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__18200){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(1));
(array18199[(0)] = G__18200);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__18201,G__18202){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(2));
(array18199[(0)] = G__18201);

(array18199[(1)] = G__18202);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__18203,G__18204,G__18205){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(3));
(array18199[(0)] = G__18203);

(array18199[(1)] = G__18204);

(array18199[(2)] = G__18205);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__18206,G__18207,G__18208,G__18209){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(4));
(array18199[(0)] = G__18206);

(array18199[(1)] = G__18207);

(array18199[(2)] = G__18208);

(array18199[(3)] = G__18209);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__18210,G__18211,G__18212,G__18213,G__18214){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(5));
(array18199[(0)] = G__18210);

(array18199[(1)] = G__18211);

(array18199[(2)] = G__18212);

(array18199[(3)] = G__18213);

(array18199[(4)] = G__18214);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__18215,G__18216,G__18217,G__18218,G__18219,G__18220){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(6));
(array18199[(0)] = G__18215);

(array18199[(1)] = G__18216);

(array18199[(2)] = G__18217);

(array18199[(3)] = G__18218);

(array18199[(4)] = G__18219);

(array18199[(5)] = G__18220);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__18221,G__18222,G__18223,G__18224,G__18225,G__18226,G__18227){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(7));
(array18199[(0)] = G__18221);

(array18199[(1)] = G__18222);

(array18199[(2)] = G__18223);

(array18199[(3)] = G__18224);

(array18199[(4)] = G__18225);

(array18199[(5)] = G__18226);

(array18199[(6)] = G__18227);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__18228,G__18229,G__18230,G__18231,G__18232,G__18233,G__18234,G__18235){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(8));
(array18199[(0)] = G__18228);

(array18199[(1)] = G__18229);

(array18199[(2)] = G__18230);

(array18199[(3)] = G__18231);

(array18199[(4)] = G__18232);

(array18199[(5)] = G__18233);

(array18199[(6)] = G__18234);

(array18199[(7)] = G__18235);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__18236,G__18237,G__18238,G__18239,G__18240,G__18241,G__18242,G__18243,G__18244){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(9));
(array18199[(0)] = G__18236);

(array18199[(1)] = G__18237);

(array18199[(2)] = G__18238);

(array18199[(3)] = G__18239);

(array18199[(4)] = G__18240);

(array18199[(5)] = G__18241);

(array18199[(6)] = G__18242);

(array18199[(7)] = G__18243);

(array18199[(8)] = G__18244);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__18245,G__18246,G__18247,G__18248,G__18249,G__18250,G__18251,G__18252,G__18253,G__18254){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(10));
(array18199[(0)] = G__18245);

(array18199[(1)] = G__18246);

(array18199[(2)] = G__18247);

(array18199[(3)] = G__18248);

(array18199[(4)] = G__18249);

(array18199[(5)] = G__18250);

(array18199[(6)] = G__18251);

(array18199[(7)] = G__18252);

(array18199[(8)] = G__18253);

(array18199[(9)] = G__18254);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__18255,G__18256,G__18257,G__18258,G__18259,G__18260,G__18261,G__18262,G__18263,G__18264,G__18265){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(11));
(array18199[(0)] = G__18255);

(array18199[(1)] = G__18256);

(array18199[(2)] = G__18257);

(array18199[(3)] = G__18258);

(array18199[(4)] = G__18259);

(array18199[(5)] = G__18260);

(array18199[(6)] = G__18261);

(array18199[(7)] = G__18262);

(array18199[(8)] = G__18263);

(array18199[(9)] = G__18264);

(array18199[(10)] = G__18265);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__18266,G__18267,G__18268,G__18269,G__18270,G__18271,G__18272,G__18273,G__18274,G__18275,G__18276,G__18277){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(12));
(array18199[(0)] = G__18266);

(array18199[(1)] = G__18267);

(array18199[(2)] = G__18268);

(array18199[(3)] = G__18269);

(array18199[(4)] = G__18270);

(array18199[(5)] = G__18271);

(array18199[(6)] = G__18272);

(array18199[(7)] = G__18273);

(array18199[(8)] = G__18274);

(array18199[(9)] = G__18275);

(array18199[(10)] = G__18276);

(array18199[(11)] = G__18277);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__18278,G__18279,G__18280,G__18281,G__18282,G__18283,G__18284,G__18285,G__18286,G__18287,G__18288,G__18289,G__18290){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(13));
(array18199[(0)] = G__18278);

(array18199[(1)] = G__18279);

(array18199[(2)] = G__18280);

(array18199[(3)] = G__18281);

(array18199[(4)] = G__18282);

(array18199[(5)] = G__18283);

(array18199[(6)] = G__18284);

(array18199[(7)] = G__18285);

(array18199[(8)] = G__18286);

(array18199[(9)] = G__18287);

(array18199[(10)] = G__18288);

(array18199[(11)] = G__18289);

(array18199[(12)] = G__18290);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__18291,G__18292,G__18293,G__18294,G__18295,G__18296,G__18297,G__18298,G__18299,G__18300,G__18301,G__18302,G__18303,G__18304){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(14));
(array18199[(0)] = G__18291);

(array18199[(1)] = G__18292);

(array18199[(2)] = G__18293);

(array18199[(3)] = G__18294);

(array18199[(4)] = G__18295);

(array18199[(5)] = G__18296);

(array18199[(6)] = G__18297);

(array18199[(7)] = G__18298);

(array18199[(8)] = G__18299);

(array18199[(9)] = G__18300);

(array18199[(10)] = G__18301);

(array18199[(11)] = G__18302);

(array18199[(12)] = G__18303);

(array18199[(13)] = G__18304);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__18305,G__18306,G__18307,G__18308,G__18309,G__18310,G__18311,G__18312,G__18313,G__18314,G__18315,G__18316,G__18317,G__18318,G__18319){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(15));
(array18199[(0)] = G__18305);

(array18199[(1)] = G__18306);

(array18199[(2)] = G__18307);

(array18199[(3)] = G__18308);

(array18199[(4)] = G__18309);

(array18199[(5)] = G__18310);

(array18199[(6)] = G__18311);

(array18199[(7)] = G__18312);

(array18199[(8)] = G__18313);

(array18199[(9)] = G__18314);

(array18199[(10)] = G__18315);

(array18199[(11)] = G__18316);

(array18199[(12)] = G__18317);

(array18199[(13)] = G__18318);

(array18199[(14)] = G__18319);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__18320,G__18321,G__18322,G__18323,G__18324,G__18325,G__18326,G__18327,G__18328,G__18329,G__18330,G__18331,G__18332,G__18333,G__18334,G__18335){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(16));
(array18199[(0)] = G__18320);

(array18199[(1)] = G__18321);

(array18199[(2)] = G__18322);

(array18199[(3)] = G__18323);

(array18199[(4)] = G__18324);

(array18199[(5)] = G__18325);

(array18199[(6)] = G__18326);

(array18199[(7)] = G__18327);

(array18199[(8)] = G__18328);

(array18199[(9)] = G__18329);

(array18199[(10)] = G__18330);

(array18199[(11)] = G__18331);

(array18199[(12)] = G__18332);

(array18199[(13)] = G__18333);

(array18199[(14)] = G__18334);

(array18199[(15)] = G__18335);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__18336,G__18337,G__18338,G__18339,G__18340,G__18341,G__18342,G__18343,G__18344,G__18345,G__18346,G__18347,G__18348,G__18349,G__18350,G__18351,G__18352){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(17));
(array18199[(0)] = G__18336);

(array18199[(1)] = G__18337);

(array18199[(2)] = G__18338);

(array18199[(3)] = G__18339);

(array18199[(4)] = G__18340);

(array18199[(5)] = G__18341);

(array18199[(6)] = G__18342);

(array18199[(7)] = G__18343);

(array18199[(8)] = G__18344);

(array18199[(9)] = G__18345);

(array18199[(10)] = G__18346);

(array18199[(11)] = G__18347);

(array18199[(12)] = G__18348);

(array18199[(13)] = G__18349);

(array18199[(14)] = G__18350);

(array18199[(15)] = G__18351);

(array18199[(16)] = G__18352);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__18353,G__18354,G__18355,G__18356,G__18357,G__18358,G__18359,G__18360,G__18361,G__18362,G__18363,G__18364,G__18365,G__18366,G__18367,G__18368,G__18369,G__18370){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(18));
(array18199[(0)] = G__18353);

(array18199[(1)] = G__18354);

(array18199[(2)] = G__18355);

(array18199[(3)] = G__18356);

(array18199[(4)] = G__18357);

(array18199[(5)] = G__18358);

(array18199[(6)] = G__18359);

(array18199[(7)] = G__18360);

(array18199[(8)] = G__18361);

(array18199[(9)] = G__18362);

(array18199[(10)] = G__18363);

(array18199[(11)] = G__18364);

(array18199[(12)] = G__18365);

(array18199[(13)] = G__18366);

(array18199[(14)] = G__18367);

(array18199[(15)] = G__18368);

(array18199[(16)] = G__18369);

(array18199[(17)] = G__18370);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__18371,G__18372,G__18373,G__18374,G__18375,G__18376,G__18377,G__18378,G__18379,G__18380,G__18381,G__18382,G__18383,G__18384,G__18385,G__18386,G__18387,G__18388,G__18389){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(19));
(array18199[(0)] = G__18371);

(array18199[(1)] = G__18372);

(array18199[(2)] = G__18373);

(array18199[(3)] = G__18374);

(array18199[(4)] = G__18375);

(array18199[(5)] = G__18376);

(array18199[(6)] = G__18377);

(array18199[(7)] = G__18378);

(array18199[(8)] = G__18379);

(array18199[(9)] = G__18380);

(array18199[(10)] = G__18381);

(array18199[(11)] = G__18382);

(array18199[(12)] = G__18383);

(array18199[(13)] = G__18384);

(array18199[(14)] = G__18385);

(array18199[(15)] = G__18386);

(array18199[(16)] = G__18387);

(array18199[(17)] = G__18388);

(array18199[(18)] = G__18389);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__18390,G__18391,G__18392,G__18393,G__18394,G__18395,G__18396,G__18397,G__18398,G__18399,G__18400,G__18401,G__18402,G__18403,G__18404,G__18405,G__18406,G__18407,G__18408,G__18409){
var self__ = this;
var this__18128__auto__ = this;
var array18199 = cljs.core.object_array.call(null,(20));
(array18199[(0)] = G__18390);

(array18199[(1)] = G__18391);

(array18199[(2)] = G__18392);

(array18199[(3)] = G__18393);

(array18199[(4)] = G__18394);

(array18199[(5)] = G__18395);

(array18199[(6)] = G__18396);

(array18199[(7)] = G__18397);

(array18199[(8)] = G__18398);

(array18199[(9)] = G__18399);

(array18199[(10)] = G__18400);

(array18199[(11)] = G__18401);

(array18199[(12)] = G__18402);

(array18199[(13)] = G__18403);

(array18199[(14)] = G__18404);

(array18199[(15)] = G__18405);

(array18199[(16)] = G__18406);

(array18199[(17)] = G__18407);

(array18199[(18)] = G__18408);

(array18199[(19)] = G__18409);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18128__auto__,array18199,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17363__auto__){
var self__ = this;
var this__17363__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17359__auto__){
var self__ = this;
var this__17359__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17369__auto__){
var self__ = this;
var this__17369__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17360__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var h__17186__auto__ = self__.__hash;
if(!((h__17186__auto__ == null))){
return h__17186__auto__;
} else {
var h__17186__auto____$1 = cljs.core.hash_imap.call(null,this__17360__auto____$1);
self__.__hash = h__17186__auto____$1;

return h__17186__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17361__auto__,other__17362__auto__){
var self__ = this;
var this__17361__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16739__auto__ = other__17362__auto__;
if(cljs.core.truth_(and__16739__auto__)){
var and__16739__auto____$1 = (this__17361__auto____$1.constructor === other__17362__auto__.constructor);
if(and__16739__auto____$1){
return cljs.core.equiv_map.call(null,this__17361__auto____$1,other__17362__auto__);
} else {
return and__16739__auto____$1;
}
} else {
return and__16739__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17374__auto__,k__17375__auto__){
var self__ = this;
var this__17374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__17375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17374__auto____$1),self__.__meta),k__17375__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17375__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__18410){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__18415 = cljs.core.keyword_identical_QMARK_;
var expr__18416 = k__17373__auto__;
if(cljs.core.truth_(pred__18415.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__18416))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__18410,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18415.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__18416))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__18410,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__18410),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__18410){
var self__ = this;
var this__17364__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__18410,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17370__auto__,entry__17371__auto__){
var self__ = this;
var this__17370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17371__auto__)){
return cljs.core._assoc.call(null,this__17370__auto____$1,cljs.core._nth.call(null,entry__17371__auto__,(0)),cljs.core._nth.call(null,entry__17371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17370__auto____$1,entry__17371__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__17399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__17399__auto__,writer__17400__auto__){
return cljs.core._write.call(null,writer__17400__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__18412){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__18412),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__18412),null,cljs.core.dissoc.call(null,G__18412,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__18428,G__18429,G__18430){
return com.rpl.specter.protocols.select_STAR_.call(null,G__18428,G__18429,G__18430);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__18432,G__18433,G__18434){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__18432,G__18433,G__18434);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__18439,G__18440){
return com.rpl.specter.protocols.collect_val.call(null,G__18439,G__18440);
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
var or__16751__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__16751__auto__){
return or__16751__auto__;
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
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$);
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
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__18447){
var vec__18449 = p__18447;
var f = cljs.core.nth.call(null,vec__18449,(0),null);
var _ = cljs.core.nthnext.call(null,vec__18449,(1));
var all = vec__18449;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__18449,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__18449,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__18449,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__18449,f,_,all))
);
});
;})(exs,t,vec__18449,f,_,all))
});})(exs,t,vec__18449,f,_,all))
:((function (exs,t,vec__18449,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__18449,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__18449,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__18449,f,_,all))
);
});
;})(exs,t,vec__18449,f,_,all))
});})(exs,t,vec__18449,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__18449,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__18449,f,_,all))
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
return (function (p1__18450_SHARP_){
return (p1__18450_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
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
var x__17406__auto__ = (((cell == null))?null:cell);
var m__17407__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,cell,x);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,cell,x);
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

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args18451 = [];
var len__17809__auto___18454 = arguments.length;
var i__17810__auto___18455 = (0);
while(true){
if((i__17810__auto___18455 < len__17809__auto___18454)){
args18451.push((arguments[i__17810__auto___18455]));

var G__18456 = (i__17810__auto___18455 + (1));
i__17810__auto___18455 = G__18456;
continue;
} else {
}
break;
}

var G__18453 = args18451.length;
switch (G__18453) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18451.length)].join('')));

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
var x__17406__auto__ = (((s == null))?null:s);
var m__17407__auto__ = (com.rpl.specter.impl.set_first[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,s,val);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.set_first["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,s,val);
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
var x__17406__auto__ = (((s == null))?null:s);
var m__17407__auto__ = (com.rpl.specter.impl.set_last[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,s,val);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.set_last["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,s,val);
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
if(cljs.core.truth_((function (){var and__16739__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__16739__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__16739__auto__;
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
return (function (p__18460,i){
var vec__18461 = p__18460;
var s = cljs.core.nth.call(null,vec__18461,(0),null);
var m = cljs.core.nth.call(null,vec__18461,(1),null);
var orig = vec__18461;
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

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/AllStructurePath");
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

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/ValCollect");
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

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/PosStructurePath");
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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p__18464){
var vec__18465 = p__18464;
var c_selector = cljs.core.nth.call(null,vec__18465,(0),null);
var _ = cljs.core.nth.call(null,vec__18465,(1),null);
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

//# sourceMappingURL=impl.js.map?rel=1456018594349