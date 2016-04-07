// Compiled by ClojureScript 1.7.228 {}
goog.provide('schema.spec.leaf');
goog.require('cljs.core');
goog.require('schema.spec.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18913__auto__,k__18914__auto__){
var self__ = this;
var this__18913__auto____$1 = this;
return cljs.core._lookup.call(null,this__18913__auto____$1,k__18914__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18915__auto__,k87484,else__18916__auto__){
var self__ = this;
var this__18915__auto____$1 = this;
var G__87486 = (((k87484 instanceof cljs.core.Keyword))?k87484.fqn:null);
switch (G__87486) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k87484,else__18916__auto__);

}
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var or__18298__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18927__auto__,writer__18928__auto__,opts__18929__auto__){
var self__ = this;
var this__18927__auto____$1 = this;
var pr_pair__18930__auto__ = ((function (this__18927__auto____$1){
return (function (keyval__18931__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,cljs.core.pr_writer,""," ","",opts__18929__auto__,keyval__18931__auto__);
});})(this__18927__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,pr_pair__18930__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__18929__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87483){
var self__ = this;
var G__87483__$1 = this;
return (new cljs.core.RecordIter((0),G__87483__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18911__auto__){
var self__ = this;
var this__18911__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18907__auto__){
var self__ = this;
var this__18907__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18917__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18908__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18909__auto__,other__18910__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18922__auto__,k__18923__auto__){
var self__ = this;
var this__18922__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),null], null), null),k__18923__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18922__auto____$1),self__.__meta),k__18923__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18923__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18920__auto__,k__18921__auto__,G__87483){
var self__ = this;
var this__18920__auto____$1 = this;
var pred__87487 = cljs.core.keyword_identical_QMARK_;
var expr__87488 = k__18921__auto__;
if(cljs.core.truth_(pred__87487.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__87488))){
return (new schema.spec.leaf.LeafSpec(G__87483,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18921__auto__,G__87483),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18925__auto__){
var self__ = this;
var this__18925__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18912__auto__,G__87483){
var self__ = this;
var this__18912__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__87483,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18918__auto__,entry__18919__auto__){
var self__ = this;
var this__18918__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18919__auto__)){
return cljs.core._assoc.call(null,this__18918__auto____$1,cljs.core._nth.call(null,entry__18919__auto__,(0)),cljs.core._nth.call(null,entry__18919__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18918__auto____$1,entry__18919__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null)], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__18947__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__18947__auto__,writer__18948__auto__){
return cljs.core._write.call(null,writer__18948__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__87485){
return (new schema.spec.leaf.LeafSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__87485),null,cljs.core.dissoc.call(null,G__87485,new cljs.core.Keyword(null,"pre","pre",2118456869)),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec.call(null,pre);
});

//# sourceMappingURL=leaf.js.map?rel=1460037778705