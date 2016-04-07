// Compiled by ClojureScript 1.7.228 {}
goog.provide('schema.spec.variant');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.variant.option_step = (function schema$spec$variant$option_step(o,params,else$){
var g = new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(o);
var c = schema.spec.core.sub_checker.call(null,o,params);
var step = (cljs.core.truth_(g)?((function (g,c){
return (function (x){
var guard_result = (function (){try{return g.call(null,x);
}catch (e87465){if((e87465 instanceof Object)){
var e_SHARP_ = e87465;
return new cljs.core.Keyword("schema.spec.variant","exception","schema.spec.variant/exception",-253680523);
} else {
throw e87465;

}
}})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("schema.spec.variant","exception","schema.spec.variant/exception",-253680523),guard_result)){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(o),x,(new cljs.core.Delay(((function (guard_result,g,c){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),cljs.core.symbol.call(null,schema.utils.fn_name.call(null,g)));
});})(guard_result,g,c))
,null)),new cljs.core.Symbol(null,"throws?","throws?",789734533,null)));
} else {
if(cljs.core.truth_(guard_result)){
return c.call(null,x);
} else {
return else$.call(null,x);

}
}
});})(g,c))
:c);
var temp__4655__auto__ = new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(temp__4655__auto__)){
var wrap_error = temp__4655__auto__;
return ((function (wrap_error,temp__4655__auto__,g,c,step){
return (function (x){
var res = step.call(null,x);
var temp__4655__auto____$1 = schema.utils.error_val.call(null,res);
if(cljs.core.truth_(temp__4655__auto____$1)){
var e = temp__4655__auto____$1;
return schema.utils.error.call(null,wrap_error.call(null,e));
} else {
return res;
}
});
;})(wrap_error,temp__4655__auto__,g,c,step))
} else {
return step;
}
});

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
schema.spec.variant.VariantSpec = (function (pre,options,err_f,post,__meta,__extmap,__hash){
this.pre = pre;
this.options = options;
this.err_f = err_f;
this.post = post;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18913__auto__,k__18914__auto__){
var self__ = this;
var this__18913__auto____$1 = this;
return cljs.core._lookup.call(null,this__18913__auto____$1,k__18914__auto__,null);
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18915__auto__,k87467,else__18916__auto__){
var self__ = this;
var this__18915__auto____$1 = this;
var G__87469 = (((k87467 instanceof cljs.core.Keyword))?k87467.fqn:null);
switch (G__87469) {
case "pre":
return self__.pre;

break;
case "options":
return self__.options;

break;
case "err-f":
return self__.err_f;

break;
case "post":
return self__.post;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k87467,else__18916__auto__);

}
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.options);
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.reduce.call(null,((function (this$__$1){
return (function (f,o){
return schema.spec.variant.option_step.call(null,o,params,f);
});})(this$__$1))
,((function (this$__$1){
return (function (x){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return self__.err_f.call(null,schema.utils.value_name.call(null,x));
});})(this$__$1))
,null)),null));
});})(this$__$1))
,cljs.core.reverse.call(null,self__.options));
if(cljs.core.truth_(self__.post)){
return ((function (t,this$__$1){
return (function (x){
var or__18298__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
var v = t.call(null,x);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,v))){
return v;
} else {
var or__18298__auto____$1 = self__.post.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?v:x));
if(cljs.core.truth_(or__18298__auto____$1)){
return or__18298__auto____$1;
} else {
return v;
}
}
}
});
;})(t,this$__$1))
} else {
return ((function (t,this$__$1){
return (function (x){
var or__18298__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return t.call(null,x);
}
});
;})(t,this$__$1))
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18927__auto__,writer__18928__auto__,opts__18929__auto__){
var self__ = this;
var this__18927__auto____$1 = this;
var pr_pair__18930__auto__ = ((function (this__18927__auto____$1){
return (function (keyval__18931__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,cljs.core.pr_writer,""," ","",opts__18929__auto__,keyval__18931__auto__);
});})(this__18927__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,pr_pair__18930__auto__,"#schema.spec.variant.VariantSpec{",", ","}",opts__18929__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-f","err-f",651620941),self__.err_f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post","post",269697687),self__.post],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87466){
var self__ = this;
var G__87466__$1 = this;
return (new cljs.core.RecordIter((0),G__87466__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"err-f","err-f",651620941),new cljs.core.Keyword(null,"post","post",269697687)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18911__auto__){
var self__ = this;
var this__18911__auto____$1 = this;
return self__.__meta;
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18907__auto__){
var self__ = this;
var this__18907__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18917__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18908__auto__){
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

schema.spec.variant.VariantSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18909__auto__,other__18910__auto__){
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

schema.spec.variant.VariantSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18922__auto__,k__18923__auto__){
var self__ = this;
var this__18922__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"err-f","err-f",651620941),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"options","options",99638489),null], null), null),k__18923__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18922__auto____$1),self__.__meta),k__18923__auto__);
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18923__auto__)),null));
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18920__auto__,k__18921__auto__,G__87466){
var self__ = this;
var this__18920__auto____$1 = this;
var pred__87470 = cljs.core.keyword_identical_QMARK_;
var expr__87471 = k__18921__auto__;
if(cljs.core.truth_(pred__87470.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__87471))){
return (new schema.spec.variant.VariantSpec(G__87466,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87470.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__87471))){
return (new schema.spec.variant.VariantSpec(self__.pre,G__87466,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87470.call(null,new cljs.core.Keyword(null,"err-f","err-f",651620941),expr__87471))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,G__87466,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87470.call(null,new cljs.core.Keyword(null,"post","post",269697687),expr__87471))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,G__87466,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18921__auto__,G__87466),null));
}
}
}
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18925__auto__){
var self__ = this;
var this__18925__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-f","err-f",651620941),self__.err_f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post","post",269697687),self__.post],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18912__auto__,G__87466){
var self__ = this;
var this__18912__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,G__87466,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18918__auto__,entry__18919__auto__){
var self__ = this;
var this__18918__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18919__auto__)){
return cljs.core._assoc.call(null,this__18918__auto____$1,cljs.core._nth.call(null,entry__18919__auto__,(0)),cljs.core._nth.call(null,entry__18919__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18918__auto____$1,entry__18919__auto__);
}
});

schema.spec.variant.VariantSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"err-f","err-f",-2002814828,null),new cljs.core.Symbol(null,"post","post",1910229214,null)], null);
});

schema.spec.variant.VariantSpec.cljs$lang$type = true;

schema.spec.variant.VariantSpec.cljs$lang$ctorPrSeq = (function (this__18947__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.VariantSpec.cljs$lang$ctorPrWriter = (function (this__18947__auto__,writer__18948__auto__){
return cljs.core._write.call(null,writer__18948__auto__,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.__GT_VariantSpec = (function schema$spec$variant$__GT_VariantSpec(pre,options,err_f,post){
return (new schema.spec.variant.VariantSpec(pre,options,err_f,post,null,null,null));
});

schema.spec.variant.map__GT_VariantSpec = (function schema$spec$variant$map__GT_VariantSpec(G__87468){
return (new schema.spec.variant.VariantSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__87468),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__87468),new cljs.core.Keyword(null,"err-f","err-f",651620941).cljs$core$IFn$_invoke$arity$1(G__87468),new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(G__87468),null,cljs.core.dissoc.call(null,G__87468,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"err-f","err-f",651620941),new cljs.core.Keyword(null,"post","post",269697687)),null));
});

/**
 * A variant spec represents a choice between a set of alternative
 * subschemas, e.g., a tagged union. It has an overall precondition,
 * set of options, and error function.
 * 
 * The semantics of `options` is that the options are processed in
 * order. During checking, the datum must match the schema for the
 * first option for which `guard` passes. During generation, any datum
 * generated from an option will pass the corresponding `guard`.
 * 
 * err-f is a function to produce an error message if none
 * of the guards match (and must be passed unless the last option has no
 * guard).
 */
schema.spec.variant.variant_spec = (function schema$spec$variant$variant_spec(var_args){
var args87474 = [];
var len__19357__auto___87477 = arguments.length;
var i__19358__auto___87478 = (0);
while(true){
if((i__19358__auto___87478 < len__19357__auto___87477)){
args87474.push((arguments[i__19358__auto___87478]));

var G__87479 = (i__19358__auto___87478 + (1));
i__19358__auto___87478 = G__87479;
continue;
} else {
}
break;
}

var G__87476 = args87474.length;
switch (G__87476) {
case 2:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87474.length)].join('')));

}
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2 = (function (pre,options){
return schema.spec.variant.variant_spec.call(null,pre,options,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3 = (function (pre,options,err_f){
return schema.spec.variant.variant_spec.call(null,pre,options,err_f,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4 = (function (pre,options,err_f,post){
if(cljs.core.truth_((function (){var or__18298__auto__ = err_f;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,options)) == null);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"when last option has a guard, err-f must be provided")));
}

return schema.spec.variant.__GT_VariantSpec.call(null,pre,options,err_f,post);
});

schema.spec.variant.variant_spec.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=variant.js.map?rel=1460037778653