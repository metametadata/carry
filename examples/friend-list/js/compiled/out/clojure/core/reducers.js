// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return f.call(null);
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return task.call(null);
});
/**
 * Like core/reduce except:
 *   When init is not provided, (f) is used.
 *   Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(var_args){
var args86222 = [];
var len__19357__auto___86225 = arguments.length;
var i__19358__auto___86226 = (0);
while(true){
if((i__19358__auto___86226 < len__19357__auto___86225)){
args86222.push((arguments[i__19358__auto___86226]));

var G__86227 = (i__19358__auto___86226 + (1));
i__19358__auto___86226 = G__86227;
continue;
} else {
}
break;
}

var G__86224 = args86222.length;
switch (G__86224) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86222.length)].join('')));

}
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.call(null,f,f.call(null),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_.call(null,coll)){
return cljs.core.array_reduce.call(null,coll,f,init);
} else {
return cljs.core._reduce.call(null,coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
clojure.core.reducers.CollFold = function(){};

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((!((coll == null))) && (!((coll.clojure$core$reducers$CollFold$coll_fold$arity$4 == null)))){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__18954__auto__ = (((coll == null))?null:coll);
var m__18955__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,coll,n,combinef,reducef);
} else {
var m__18955__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,coll,n,combinef,reducef);
} else {
throw cljs.core.missing_protocol.call(null,"CollFold.coll-fold",coll);
}
}
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 *   strategy. The collection is partitioned into groups of approximately
 *   n (default 512), each of which is reduced with reducef (with a seed
 *   value obtained by calling (combinef) with no arguments). The results
 *   of these reductions are then reduced with combinef (default
 *   reducef). combinef must be associative, and, when called with no
 *   arguments, (combinef) must produce its identity element. These
 *   operations may be performed in parallel, but the results will
 *   preserve order.
 * 
 *   Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(var_args){
var args86229 = [];
var len__19357__auto___86232 = arguments.length;
var i__19358__auto___86233 = (0);
while(true){
if((i__19358__auto___86233 < len__19357__auto___86232)){
args86229.push((arguments[i__19358__auto___86233]));

var G__86234 = (i__19358__auto___86233 + (1));
i__19358__auto___86233 = G__86234;
continue;
} else {
}
break;
}

var G__86231 = args86229.length;
switch (G__86231) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86229.length)].join('')));

}
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.call(null,reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.call(null,(512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold.call(null,coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4;
/**
 * Given a reducible collection, and a transformation function xf,
 *   returns a reducible collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers86239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers86239 = (function (reducer,coll,xf,meta86240){
this.reducer = reducer;
this.coll = coll;
this.xf = xf;
this.meta86240 = meta86240;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers86239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86241,meta86240__$1){
var self__ = this;
var _86241__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers86239(self__.reducer,self__.coll,self__.xf,meta86240__$1));
});

clojure.core.reducers.t_clojure$core$reducers86239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86241){
var self__ = this;
var _86241__$1 = this;
return self__.meta86240;
});

clojure.core.reducers.t_clojure$core$reducers86239.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers86239.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers86239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a reducible collection, and a transformation function xf,\n  returns a reducible collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn."], null)),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta86240","meta86240",-650098852,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers86239.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers86239.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers86239";

clojure.core.reducers.t_clojure$core$reducers86239.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"clojure.core.reducers/t_clojure$core$reducers86239");
});

clojure.core.reducers.__GT_t_clojure$core$reducers86239 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers86239(reducer__$1,coll__$1,xf__$1,meta86240){
return (new clojure.core.reducers.t_clojure$core$reducers86239(reducer__$1,coll__$1,xf__$1,meta86240));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers86239(clojure$core$reducers$reducer,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers86245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers86245 = (function (folder,coll,xf,meta86246){
this.folder = folder;
this.coll = coll;
this.xf = xf;
this.meta86246 = meta86246;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers86245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86247,meta86246__$1){
var self__ = this;
var _86247__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers86245(self__.folder,self__.coll,self__.xf,meta86246__$1));
});

clojure.core.reducers.t_clojure$core$reducers86245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86247){
var self__ = this;
var _86247__$1 = this;
return self__.meta86246;
});

clojure.core.reducers.t_clojure$core$reducers86245.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers86245.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers86245.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.t_clojure$core$reducers86245.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
});

clojure.core.reducers.t_clojure$core$reducers86245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"folder","folder",-1138554033,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a foldable collection, and a transformation function xf,\n  returns a foldable collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn."], null)),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta86246","meta86246",-186552092,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers86245.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers86245.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers86245";

clojure.core.reducers.t_clojure$core$reducers86245.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"clojure.core.reducers/t_clojure$core$reducers86245");
});

clojure.core.reducers.__GT_t_clojure$core$reducers86245 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers86245(folder__$1,coll__$1,xf__$1,meta86246){
return (new clojure.core.reducers.t_clojure$core$reducers86245(folder__$1,coll__$1,xf__$1,meta86246));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers86245(clojure$core$reducers$folder,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var args86248 = [];
var len__19357__auto___86251 = arguments.length;
var i__19358__auto___86252 = (0);
while(true){
if((i__19358__auto___86252 < len__19357__auto___86251)){
args86248.push((arguments[i__19358__auto___86252]));

var G__86253 = (i__19358__auto___86252 + (1));
i__19358__auto___86252 = G__86253;
continue;
} else {
}
break;
}

var G__86250 = args86248.length;
switch (G__86250) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86248.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__18740__auto__){
return clojure.core.reducers.map.call(null,f,x__18740__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__86255 = null;
var G__86255__0 = (function (){
return f1.call(null);
});
var G__86255__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__86255__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__86255 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__86255__0.call(this);
case 2:
return G__86255__2.call(this,ret,k);
case 3:
return G__86255__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86255.cljs$core$IFn$_invoke$arity$0 = G__86255__0;
G__86255.cljs$core$IFn$_invoke$arity$2 = G__86255__2;
G__86255.cljs$core$IFn$_invoke$arity$3 = G__86255__3;
return G__86255;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;
/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var args86256 = [];
var len__19357__auto___86259 = arguments.length;
var i__19358__auto___86260 = (0);
while(true){
if((i__19358__auto___86260 < len__19357__auto___86259)){
args86256.push((arguments[i__19358__auto___86260]));

var G__86261 = (i__19358__auto___86260 + (1));
i__19358__auto___86260 = G__86261;
continue;
} else {
}
break;
}

var G__86258 = args86256.length;
switch (G__86258) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86256.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__18740__auto__){
return clojure.core.reducers.mapcat.call(null,f,x__18740__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__86263 = null;
var G__86263__0 = (function (){
return f1.call(null);
});
var G__86263__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__86263__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__86263 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__86263__0.call(this);
case 2:
return G__86263__2.call(this,ret,k);
case 3:
return G__86263__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86263.cljs$core$IFn$_invoke$arity$0 = G__86263__0;
G__86263.cljs$core$IFn$_invoke$arity$2 = G__86263__2;
G__86263.cljs$core$IFn$_invoke$arity$3 = G__86263__3;
return G__86263;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;
/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var args86264 = [];
var len__19357__auto___86267 = arguments.length;
var i__19358__auto___86268 = (0);
while(true){
if((i__19358__auto___86268 < len__19357__auto___86267)){
args86264.push((arguments[i__19358__auto___86268]));

var G__86269 = (i__19358__auto___86268 + (1));
i__19358__auto___86268 = G__86269;
continue;
} else {
}
break;
}

var G__86266 = args86264.length;
switch (G__86266) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86264.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__18740__auto__){
return clojure.core.reducers.filter.call(null,pred,x__18740__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__86271 = null;
var G__86271__0 = (function (){
return f1.call(null);
});
var G__86271__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__86271__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__86271 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__86271__0.call(this);
case 2:
return G__86271__2.call(this,ret,k);
case 3:
return G__86271__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86271.cljs$core$IFn$_invoke$arity$0 = G__86271__0;
G__86271.cljs$core$IFn$_invoke$arity$2 = G__86271__2;
G__86271.cljs$core$IFn$_invoke$arity$3 = G__86271__3;
return G__86271;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2;
/**
 * Takes any nested combination of sequential things (lists, vectors,
 *   etc.) and returns their contents as a single, flat foldable
 *   collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(var_args){
var args86272 = [];
var len__19357__auto___86275 = arguments.length;
var i__19358__auto___86276 = (0);
while(true){
if((i__19358__auto___86276 < len__19357__auto___86275)){
args86272.push((arguments[i__19358__auto___86276]));

var G__86277 = (i__19358__auto___86276 + (1));
i__19358__auto___86276 = G__86277;
continue;
} else {
}
break;
}

var G__86274 = args86272.length;
switch (G__86274) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86272.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__18740__auto__){
return clojure.core.reducers.flatten.call(null,x__18740__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__86279 = null;
var G__86279__0 = (function (){
return f1.call(null);
});
var G__86279__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure.core.reducers.flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__86279 = function(ret,v){
switch(arguments.length){
case 0:
return G__86279__0.call(this);
case 2:
return G__86279__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86279.cljs$core$IFn$_invoke$arity$0 = G__86279__0;
G__86279.cljs$core$IFn$_invoke$arity$2 = G__86279__2;
return G__86279;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;
/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var args86280 = [];
var len__19357__auto___86283 = arguments.length;
var i__19358__auto___86284 = (0);
while(true){
if((i__19358__auto___86284 < len__19357__auto___86283)){
args86280.push((arguments[i__19358__auto___86284]));

var G__86285 = (i__19358__auto___86284 + (1));
i__19358__auto___86284 = G__86285;
continue;
} else {
}
break;
}

var G__86282 = args86280.length;
switch (G__86282) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86280.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__18740__auto__){
return clojure.core.reducers.remove.call(null,pred,x__18740__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(var_args){
var args86287 = [];
var len__19357__auto___86290 = arguments.length;
var i__19358__auto___86291 = (0);
while(true){
if((i__19358__auto___86291 < len__19357__auto___86290)){
args86287.push((arguments[i__19358__auto___86291]));

var G__86292 = (i__19358__auto___86291 + (1));
i__19358__auto___86291 = G__86292;
continue;
} else {
}
break;
}

var G__86289 = args86287.length;
switch (G__86289) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86287.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__18740__auto__){
return clojure.core.reducers.take_while.call(null,pred,x__18740__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__86294 = null;
var G__86294__0 = (function (){
return f1.call(null);
});
var G__86294__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__86294__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__86294 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__86294__0.call(this);
case 2:
return G__86294__2.call(this,ret,k);
case 3:
return G__86294__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86294.cljs$core$IFn$_invoke$arity$0 = G__86294__0;
G__86294.cljs$core$IFn$_invoke$arity$2 = G__86294__2;
G__86294.cljs$core$IFn$_invoke$arity$3 = G__86294__3;
return G__86294;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var args86295 = [];
var len__19357__auto___86298 = arguments.length;
var i__19358__auto___86299 = (0);
while(true){
if((i__19358__auto___86299 < len__19357__auto___86298)){
args86295.push((arguments[i__19358__auto___86299]));

var G__86300 = (i__19358__auto___86299 + (1));
i__19358__auto___86299 = G__86300;
continue;
} else {
}
break;
}

var G__86297 = args86295.length;
switch (G__86297) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86295.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__18740__auto__){
return clojure.core.reducers.take.call(null,n,x__18740__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__86302 = null;
var G__86302__0 = (function (){
return f1.call(null);
});
var G__86302__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__86302__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__86302 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__86302__0.call(this);
case 2:
return G__86302__2.call(this,ret,k);
case 3:
return G__86302__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86302.cljs$core$IFn$_invoke$arity$0 = G__86302__0;
G__86302.cljs$core$IFn$_invoke$arity$2 = G__86302__2;
G__86302.cljs$core$IFn$_invoke$arity$3 = G__86302__3;
return G__86302;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;
/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var args86303 = [];
var len__19357__auto___86306 = arguments.length;
var i__19358__auto___86307 = (0);
while(true){
if((i__19358__auto___86307 < len__19357__auto___86306)){
args86303.push((arguments[i__19358__auto___86307]));

var G__86308 = (i__19358__auto___86307 + (1));
i__19358__auto___86307 = G__86308;
continue;
} else {
}
break;
}

var G__86305 = args86303.length;
switch (G__86305) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86303.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__18740__auto__){
return clojure.core.reducers.drop.call(null,n,x__18740__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__86310 = null;
var G__86310__0 = (function (){
return f1.call(null);
});
var G__86310__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__86310__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__86310 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__86310__0.call(this);
case 2:
return G__86310__2.call(this,ret,k);
case 3:
return G__86310__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86310.cljs$core$IFn$_invoke$arity$0 = G__86310__0;
G__86310.cljs$core$IFn$_invoke$arity$2 = G__86310__2;
G__86310.cljs$core$IFn$_invoke$arity$3 = G__86310__3;
return G__86310;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,reducef);
});

clojure.core.reducers.Cat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 *   reduced values. The result is reducible, foldable, seqable and
 *   counted, providing the identity collections are reducible, seqable
 *   and counted. The single argument version will build a combining fn
 *   with the supplied identity constructor. Tests for identity
 *   with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(var_args){
var args86311 = [];
var len__19357__auto___86314 = arguments.length;
var i__19358__auto___86315 = (0);
while(true){
if((i__19358__auto___86315 < len__19357__auto___86314)){
args86311.push((arguments[i__19358__auto___86315]));

var G__86316 = (i__19358__auto___86315 + (1));
i__19358__auto___86315 = G__86316;
continue;
} else {
}
break;
}

var G__86313 = args86311.length;
switch (G__86313) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86311.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__86318 = null;
var G__86318__0 = (function (){
return ctor.call(null);
});
var G__86318__2 = (function (left,right){
return clojure.core.reducers.cat.call(null,left,right);
});
G__86318 = function(left,right){
switch(arguments.length){
case 0:
return G__86318__0.call(this);
case 2:
return G__86318__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86318.cljs$core$IFn$_invoke$arity$0 = G__86318__0;
G__86318.cljs$core$IFn$_invoke$arity$2 = G__86318__2;
return G__86318;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count.call(null,left) === (0))){
return right;
} else {
if((cljs.core.count.call(null,right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2;
/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__86320 = acc;
G__86320.push(x);

return G__86320;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return ctor.call(null);
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return op.call(null,a,b);
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_.call(null,v)){
return combinef.call(null);
} else {
if((cljs.core.count.call(null,v) <= n)){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),v);
} else {
var split = cljs.core.quot.call(null,cljs.core.count.call(null,v),(2));
var v1 = cljs.core.subvec.call(null,v,(0),split);
var v2 = cljs.core.subvec.call(null,v,split,cljs.core.count.call(null,v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return clojure$core$reducers$foldvec.call(null,child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke.call(null,((function (split,v1,v2,fc){
return (function (){
var f1 = fc.call(null,v1);
var t2 = clojure.core.reducers.fjtask.call(null,fc.call(null,v2));
clojure.core.reducers.fjfork.call(null,t2);

return combinef.call(null,f1.call(null),clojure.core.reducers.fjjoin.call(null,t2));
});})(split,v1,v2,fc))
);

}
}
});
(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return combinef.call(null);
}));

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),coll);
}));

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = true;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec.call(null,v__$1,n,combinef,reducef);
});

//# sourceMappingURL=reducers.js.map?rel=1460037775189