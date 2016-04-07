// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args88372 = [];
var len__19357__auto___88378 = arguments.length;
var i__19358__auto___88379 = (0);
while(true){
if((i__19358__auto___88379 < len__19357__auto___88378)){
args88372.push((arguments[i__19358__auto___88379]));

var G__88380 = (i__19358__auto___88379 + (1));
i__19358__auto___88379 = G__88380;
continue;
} else {
}
break;
}

var G__88374 = args88372.length;
switch (G__88374) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88372.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async88375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88375 = (function (f,blockable,meta88376){
this.f = f;
this.blockable = blockable;
this.meta88376 = meta88376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async88375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88377,meta88376__$1){
var self__ = this;
var _88377__$1 = this;
return (new cljs.core.async.t_cljs$core$async88375(self__.f,self__.blockable,meta88376__$1));
});

cljs.core.async.t_cljs$core$async88375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88377){
var self__ = this;
var _88377__$1 = this;
return self__.meta88376;
});

cljs.core.async.t_cljs$core$async88375.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async88375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async88375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async88375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async88375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta88376","meta88376",1246332679,null)], null);
});

cljs.core.async.t_cljs$core$async88375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88375";

cljs.core.async.t_cljs$core$async88375.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async88375");
});

cljs.core.async.__GT_t_cljs$core$async88375 = (function cljs$core$async$__GT_t_cljs$core$async88375(f__$1,blockable__$1,meta88376){
return (new cljs.core.async.t_cljs$core$async88375(f__$1,blockable__$1,meta88376));
});

}

return (new cljs.core.async.t_cljs$core$async88375(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args88384 = [];
var len__19357__auto___88387 = arguments.length;
var i__19358__auto___88388 = (0);
while(true){
if((i__19358__auto___88388 < len__19357__auto___88387)){
args88384.push((arguments[i__19358__auto___88388]));

var G__88389 = (i__19358__auto___88388 + (1));
i__19358__auto___88388 = G__88389;
continue;
} else {
}
break;
}

var G__88386 = args88384.length;
switch (G__88386) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88384.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args88391 = [];
var len__19357__auto___88394 = arguments.length;
var i__19358__auto___88395 = (0);
while(true){
if((i__19358__auto___88395 < len__19357__auto___88394)){
args88391.push((arguments[i__19358__auto___88395]));

var G__88396 = (i__19358__auto___88395 + (1));
i__19358__auto___88395 = G__88396;
continue;
} else {
}
break;
}

var G__88393 = args88391.length;
switch (G__88393) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88391.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args88398 = [];
var len__19357__auto___88401 = arguments.length;
var i__19358__auto___88402 = (0);
while(true){
if((i__19358__auto___88402 < len__19357__auto___88401)){
args88398.push((arguments[i__19358__auto___88402]));

var G__88403 = (i__19358__auto___88402 + (1));
i__19358__auto___88402 = G__88403;
continue;
} else {
}
break;
}

var G__88400 = args88398.length;
switch (G__88400) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88398.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_88405 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_88405);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_88405,ret){
return (function (){
return fn1.call(null,val_88405);
});})(val_88405,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args88406 = [];
var len__19357__auto___88409 = arguments.length;
var i__19358__auto___88410 = (0);
while(true){
if((i__19358__auto___88410 < len__19357__auto___88409)){
args88406.push((arguments[i__19358__auto___88410]));

var G__88411 = (i__19358__auto___88410 + (1));
i__19358__auto___88410 = G__88411;
continue;
} else {
}
break;
}

var G__88408 = args88406.length;
switch (G__88408) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88406.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19202__auto___88413 = n;
var x_88414 = (0);
while(true){
if((x_88414 < n__19202__auto___88413)){
(a[x_88414] = (0));

var G__88415 = (x_88414 + (1));
x_88414 = G__88415;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__88416 = (i + (1));
i = G__88416;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async88420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88420 = (function (alt_flag,flag,meta88421){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta88421 = meta88421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async88420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_88422,meta88421__$1){
var self__ = this;
var _88422__$1 = this;
return (new cljs.core.async.t_cljs$core$async88420(self__.alt_flag,self__.flag,meta88421__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async88420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_88422){
var self__ = this;
var _88422__$1 = this;
return self__.meta88421;
});})(flag))
;

cljs.core.async.t_cljs$core$async88420.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async88420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async88420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async88420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async88420.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta88421","meta88421",-391309629,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async88420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88420";

cljs.core.async.t_cljs$core$async88420.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async88420");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async88420 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async88420(alt_flag__$1,flag__$1,meta88421){
return (new cljs.core.async.t_cljs$core$async88420(alt_flag__$1,flag__$1,meta88421));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async88420(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async88426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88426 = (function (alt_handler,flag,cb,meta88427){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta88427 = meta88427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async88426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88428,meta88427__$1){
var self__ = this;
var _88428__$1 = this;
return (new cljs.core.async.t_cljs$core$async88426(self__.alt_handler,self__.flag,self__.cb,meta88427__$1));
});

cljs.core.async.t_cljs$core$async88426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88428){
var self__ = this;
var _88428__$1 = this;
return self__.meta88427;
});

cljs.core.async.t_cljs$core$async88426.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async88426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async88426.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async88426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async88426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta88427","meta88427",-867380502,null)], null);
});

cljs.core.async.t_cljs$core$async88426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88426";

cljs.core.async.t_cljs$core$async88426.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async88426");
});

cljs.core.async.__GT_t_cljs$core$async88426 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async88426(alt_handler__$1,flag__$1,cb__$1,meta88427){
return (new cljs.core.async.t_cljs$core$async88426(alt_handler__$1,flag__$1,cb__$1,meta88427));
});

}

return (new cljs.core.async.t_cljs$core$async88426(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__88429_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__88429_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__88430_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__88430_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18298__auto__ = wport;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return port;
}
})()], null));
} else {
var G__88431 = (i + (1));
i = G__88431;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18298__auto__ = ret;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18286__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18286__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18286__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___88437 = arguments.length;
var i__19358__auto___88438 = (0);
while(true){
if((i__19358__auto___88438 < len__19357__auto___88437)){
args__19364__auto__.push((arguments[i__19358__auto___88438]));

var G__88439 = (i__19358__auto___88438 + (1));
i__19358__auto___88438 = G__88439;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((1) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19365__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__88434){
var map__88435 = p__88434;
var map__88435__$1 = ((((!((map__88435 == null)))?((((map__88435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88435):map__88435);
var opts = map__88435__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq88432){
var G__88433 = cljs.core.first.call(null,seq88432);
var seq88432__$1 = cljs.core.next.call(null,seq88432);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__88433,seq88432__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args88440 = [];
var len__19357__auto___88490 = arguments.length;
var i__19358__auto___88491 = (0);
while(true){
if((i__19358__auto___88491 < len__19357__auto___88490)){
args88440.push((arguments[i__19358__auto___88491]));

var G__88492 = (i__19358__auto___88491 + (1));
i__19358__auto___88491 = G__88492;
continue;
} else {
}
break;
}

var G__88442 = args88440.length;
switch (G__88442) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88440.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25154__auto___88494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___88494){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___88494){
return (function (state_88466){
var state_val_88467 = (state_88466[(1)]);
if((state_val_88467 === (7))){
var inst_88462 = (state_88466[(2)]);
var state_88466__$1 = state_88466;
var statearr_88468_88495 = state_88466__$1;
(statearr_88468_88495[(2)] = inst_88462);

(statearr_88468_88495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (1))){
var state_88466__$1 = state_88466;
var statearr_88469_88496 = state_88466__$1;
(statearr_88469_88496[(2)] = null);

(statearr_88469_88496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (4))){
var inst_88445 = (state_88466[(7)]);
var inst_88445__$1 = (state_88466[(2)]);
var inst_88446 = (inst_88445__$1 == null);
var state_88466__$1 = (function (){var statearr_88470 = state_88466;
(statearr_88470[(7)] = inst_88445__$1);

return statearr_88470;
})();
if(cljs.core.truth_(inst_88446)){
var statearr_88471_88497 = state_88466__$1;
(statearr_88471_88497[(1)] = (5));

} else {
var statearr_88472_88498 = state_88466__$1;
(statearr_88472_88498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (13))){
var state_88466__$1 = state_88466;
var statearr_88473_88499 = state_88466__$1;
(statearr_88473_88499[(2)] = null);

(statearr_88473_88499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (6))){
var inst_88445 = (state_88466[(7)]);
var state_88466__$1 = state_88466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88466__$1,(11),to,inst_88445);
} else {
if((state_val_88467 === (3))){
var inst_88464 = (state_88466[(2)]);
var state_88466__$1 = state_88466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88466__$1,inst_88464);
} else {
if((state_val_88467 === (12))){
var state_88466__$1 = state_88466;
var statearr_88474_88500 = state_88466__$1;
(statearr_88474_88500[(2)] = null);

(statearr_88474_88500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (2))){
var state_88466__$1 = state_88466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88466__$1,(4),from);
} else {
if((state_val_88467 === (11))){
var inst_88455 = (state_88466[(2)]);
var state_88466__$1 = state_88466;
if(cljs.core.truth_(inst_88455)){
var statearr_88475_88501 = state_88466__$1;
(statearr_88475_88501[(1)] = (12));

} else {
var statearr_88476_88502 = state_88466__$1;
(statearr_88476_88502[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (9))){
var state_88466__$1 = state_88466;
var statearr_88477_88503 = state_88466__$1;
(statearr_88477_88503[(2)] = null);

(statearr_88477_88503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (5))){
var state_88466__$1 = state_88466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_88478_88504 = state_88466__$1;
(statearr_88478_88504[(1)] = (8));

} else {
var statearr_88479_88505 = state_88466__$1;
(statearr_88479_88505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (14))){
var inst_88460 = (state_88466[(2)]);
var state_88466__$1 = state_88466;
var statearr_88480_88506 = state_88466__$1;
(statearr_88480_88506[(2)] = inst_88460);

(statearr_88480_88506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (10))){
var inst_88452 = (state_88466[(2)]);
var state_88466__$1 = state_88466;
var statearr_88481_88507 = state_88466__$1;
(statearr_88481_88507[(2)] = inst_88452);

(statearr_88481_88507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88467 === (8))){
var inst_88449 = cljs.core.async.close_BANG_.call(null,to);
var state_88466__$1 = state_88466;
var statearr_88482_88508 = state_88466__$1;
(statearr_88482_88508[(2)] = inst_88449);

(statearr_88482_88508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___88494))
;
return ((function (switch__25133__auto__,c__25154__auto___88494){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_88486 = [null,null,null,null,null,null,null,null];
(statearr_88486[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_88486[(1)] = (1));

return statearr_88486;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_88466){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_88466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e88487){if((e88487 instanceof Object)){
var ex__25137__auto__ = e88487;
var statearr_88488_88509 = state_88466;
(statearr_88488_88509[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88510 = state_88466;
state_88466 = G__88510;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_88466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_88466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___88494))
})();
var state__25156__auto__ = (function (){var statearr_88489 = f__25155__auto__.call(null);
(statearr_88489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___88494);

return statearr_88489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___88494))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__88694){
var vec__88695 = p__88694;
var v = cljs.core.nth.call(null,vec__88695,(0),null);
var p = cljs.core.nth.call(null,vec__88695,(1),null);
var job = vec__88695;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25154__auto___88877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___88877,res,vec__88695,v,p,job,jobs,results){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___88877,res,vec__88695,v,p,job,jobs,results){
return (function (state_88700){
var state_val_88701 = (state_88700[(1)]);
if((state_val_88701 === (1))){
var state_88700__$1 = state_88700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88700__$1,(2),res,v);
} else {
if((state_val_88701 === (2))){
var inst_88697 = (state_88700[(2)]);
var inst_88698 = cljs.core.async.close_BANG_.call(null,res);
var state_88700__$1 = (function (){var statearr_88702 = state_88700;
(statearr_88702[(7)] = inst_88697);

return statearr_88702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88700__$1,inst_88698);
} else {
return null;
}
}
});})(c__25154__auto___88877,res,vec__88695,v,p,job,jobs,results))
;
return ((function (switch__25133__auto__,c__25154__auto___88877,res,vec__88695,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0 = (function (){
var statearr_88706 = [null,null,null,null,null,null,null,null];
(statearr_88706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__);

(statearr_88706[(1)] = (1));

return statearr_88706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1 = (function (state_88700){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_88700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e88707){if((e88707 instanceof Object)){
var ex__25137__auto__ = e88707;
var statearr_88708_88878 = state_88700;
(statearr_88708_88878[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88879 = state_88700;
state_88700 = G__88879;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = function(state_88700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1.call(this,state_88700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___88877,res,vec__88695,v,p,job,jobs,results))
})();
var state__25156__auto__ = (function (){var statearr_88709 = f__25155__auto__.call(null);
(statearr_88709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___88877);

return statearr_88709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___88877,res,vec__88695,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__88710){
var vec__88711 = p__88710;
var v = cljs.core.nth.call(null,vec__88711,(0),null);
var p = cljs.core.nth.call(null,vec__88711,(1),null);
var job = vec__88711;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19202__auto___88880 = n;
var __88881 = (0);
while(true){
if((__88881 < n__19202__auto___88880)){
var G__88712_88882 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__88712_88882) {
case "compute":
var c__25154__auto___88884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__88881,c__25154__auto___88884,G__88712_88882,n__19202__auto___88880,jobs,results,process,async){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (__88881,c__25154__auto___88884,G__88712_88882,n__19202__auto___88880,jobs,results,process,async){
return (function (state_88725){
var state_val_88726 = (state_88725[(1)]);
if((state_val_88726 === (1))){
var state_88725__$1 = state_88725;
var statearr_88727_88885 = state_88725__$1;
(statearr_88727_88885[(2)] = null);

(statearr_88727_88885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88726 === (2))){
var state_88725__$1 = state_88725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88725__$1,(4),jobs);
} else {
if((state_val_88726 === (3))){
var inst_88723 = (state_88725[(2)]);
var state_88725__$1 = state_88725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88725__$1,inst_88723);
} else {
if((state_val_88726 === (4))){
var inst_88715 = (state_88725[(2)]);
var inst_88716 = process.call(null,inst_88715);
var state_88725__$1 = state_88725;
if(cljs.core.truth_(inst_88716)){
var statearr_88728_88886 = state_88725__$1;
(statearr_88728_88886[(1)] = (5));

} else {
var statearr_88729_88887 = state_88725__$1;
(statearr_88729_88887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88726 === (5))){
var state_88725__$1 = state_88725;
var statearr_88730_88888 = state_88725__$1;
(statearr_88730_88888[(2)] = null);

(statearr_88730_88888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88726 === (6))){
var state_88725__$1 = state_88725;
var statearr_88731_88889 = state_88725__$1;
(statearr_88731_88889[(2)] = null);

(statearr_88731_88889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88726 === (7))){
var inst_88721 = (state_88725[(2)]);
var state_88725__$1 = state_88725;
var statearr_88732_88890 = state_88725__$1;
(statearr_88732_88890[(2)] = inst_88721);

(statearr_88732_88890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__88881,c__25154__auto___88884,G__88712_88882,n__19202__auto___88880,jobs,results,process,async))
;
return ((function (__88881,switch__25133__auto__,c__25154__auto___88884,G__88712_88882,n__19202__auto___88880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0 = (function (){
var statearr_88736 = [null,null,null,null,null,null,null];
(statearr_88736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__);

(statearr_88736[(1)] = (1));

return statearr_88736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1 = (function (state_88725){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_88725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e88737){if((e88737 instanceof Object)){
var ex__25137__auto__ = e88737;
var statearr_88738_88891 = state_88725;
(statearr_88738_88891[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88892 = state_88725;
state_88725 = G__88892;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = function(state_88725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1.call(this,state_88725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__;
})()
;})(__88881,switch__25133__auto__,c__25154__auto___88884,G__88712_88882,n__19202__auto___88880,jobs,results,process,async))
})();
var state__25156__auto__ = (function (){var statearr_88739 = f__25155__auto__.call(null);
(statearr_88739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___88884);

return statearr_88739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(__88881,c__25154__auto___88884,G__88712_88882,n__19202__auto___88880,jobs,results,process,async))
);


break;
case "async":
var c__25154__auto___88893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__88881,c__25154__auto___88893,G__88712_88882,n__19202__auto___88880,jobs,results,process,async){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (__88881,c__25154__auto___88893,G__88712_88882,n__19202__auto___88880,jobs,results,process,async){
return (function (state_88752){
var state_val_88753 = (state_88752[(1)]);
if((state_val_88753 === (1))){
var state_88752__$1 = state_88752;
var statearr_88754_88894 = state_88752__$1;
(statearr_88754_88894[(2)] = null);

(statearr_88754_88894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88753 === (2))){
var state_88752__$1 = state_88752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88752__$1,(4),jobs);
} else {
if((state_val_88753 === (3))){
var inst_88750 = (state_88752[(2)]);
var state_88752__$1 = state_88752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88752__$1,inst_88750);
} else {
if((state_val_88753 === (4))){
var inst_88742 = (state_88752[(2)]);
var inst_88743 = async.call(null,inst_88742);
var state_88752__$1 = state_88752;
if(cljs.core.truth_(inst_88743)){
var statearr_88755_88895 = state_88752__$1;
(statearr_88755_88895[(1)] = (5));

} else {
var statearr_88756_88896 = state_88752__$1;
(statearr_88756_88896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88753 === (5))){
var state_88752__$1 = state_88752;
var statearr_88757_88897 = state_88752__$1;
(statearr_88757_88897[(2)] = null);

(statearr_88757_88897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88753 === (6))){
var state_88752__$1 = state_88752;
var statearr_88758_88898 = state_88752__$1;
(statearr_88758_88898[(2)] = null);

(statearr_88758_88898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88753 === (7))){
var inst_88748 = (state_88752[(2)]);
var state_88752__$1 = state_88752;
var statearr_88759_88899 = state_88752__$1;
(statearr_88759_88899[(2)] = inst_88748);

(statearr_88759_88899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__88881,c__25154__auto___88893,G__88712_88882,n__19202__auto___88880,jobs,results,process,async))
;
return ((function (__88881,switch__25133__auto__,c__25154__auto___88893,G__88712_88882,n__19202__auto___88880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0 = (function (){
var statearr_88763 = [null,null,null,null,null,null,null];
(statearr_88763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__);

(statearr_88763[(1)] = (1));

return statearr_88763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1 = (function (state_88752){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_88752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e88764){if((e88764 instanceof Object)){
var ex__25137__auto__ = e88764;
var statearr_88765_88900 = state_88752;
(statearr_88765_88900[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88901 = state_88752;
state_88752 = G__88901;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = function(state_88752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1.call(this,state_88752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__;
})()
;})(__88881,switch__25133__auto__,c__25154__auto___88893,G__88712_88882,n__19202__auto___88880,jobs,results,process,async))
})();
var state__25156__auto__ = (function (){var statearr_88766 = f__25155__auto__.call(null);
(statearr_88766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___88893);

return statearr_88766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(__88881,c__25154__auto___88893,G__88712_88882,n__19202__auto___88880,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__88902 = (__88881 + (1));
__88881 = G__88902;
continue;
} else {
}
break;
}

var c__25154__auto___88903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___88903,jobs,results,process,async){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___88903,jobs,results,process,async){
return (function (state_88788){
var state_val_88789 = (state_88788[(1)]);
if((state_val_88789 === (1))){
var state_88788__$1 = state_88788;
var statearr_88790_88904 = state_88788__$1;
(statearr_88790_88904[(2)] = null);

(statearr_88790_88904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88789 === (2))){
var state_88788__$1 = state_88788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88788__$1,(4),from);
} else {
if((state_val_88789 === (3))){
var inst_88786 = (state_88788[(2)]);
var state_88788__$1 = state_88788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88788__$1,inst_88786);
} else {
if((state_val_88789 === (4))){
var inst_88769 = (state_88788[(7)]);
var inst_88769__$1 = (state_88788[(2)]);
var inst_88770 = (inst_88769__$1 == null);
var state_88788__$1 = (function (){var statearr_88791 = state_88788;
(statearr_88791[(7)] = inst_88769__$1);

return statearr_88791;
})();
if(cljs.core.truth_(inst_88770)){
var statearr_88792_88905 = state_88788__$1;
(statearr_88792_88905[(1)] = (5));

} else {
var statearr_88793_88906 = state_88788__$1;
(statearr_88793_88906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88789 === (5))){
var inst_88772 = cljs.core.async.close_BANG_.call(null,jobs);
var state_88788__$1 = state_88788;
var statearr_88794_88907 = state_88788__$1;
(statearr_88794_88907[(2)] = inst_88772);

(statearr_88794_88907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88789 === (6))){
var inst_88769 = (state_88788[(7)]);
var inst_88774 = (state_88788[(8)]);
var inst_88774__$1 = cljs.core.async.chan.call(null,(1));
var inst_88775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88776 = [inst_88769,inst_88774__$1];
var inst_88777 = (new cljs.core.PersistentVector(null,2,(5),inst_88775,inst_88776,null));
var state_88788__$1 = (function (){var statearr_88795 = state_88788;
(statearr_88795[(8)] = inst_88774__$1);

return statearr_88795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88788__$1,(8),jobs,inst_88777);
} else {
if((state_val_88789 === (7))){
var inst_88784 = (state_88788[(2)]);
var state_88788__$1 = state_88788;
var statearr_88796_88908 = state_88788__$1;
(statearr_88796_88908[(2)] = inst_88784);

(statearr_88796_88908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88789 === (8))){
var inst_88774 = (state_88788[(8)]);
var inst_88779 = (state_88788[(2)]);
var state_88788__$1 = (function (){var statearr_88797 = state_88788;
(statearr_88797[(9)] = inst_88779);

return statearr_88797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88788__$1,(9),results,inst_88774);
} else {
if((state_val_88789 === (9))){
var inst_88781 = (state_88788[(2)]);
var state_88788__$1 = (function (){var statearr_88798 = state_88788;
(statearr_88798[(10)] = inst_88781);

return statearr_88798;
})();
var statearr_88799_88909 = state_88788__$1;
(statearr_88799_88909[(2)] = null);

(statearr_88799_88909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___88903,jobs,results,process,async))
;
return ((function (switch__25133__auto__,c__25154__auto___88903,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0 = (function (){
var statearr_88803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__);

(statearr_88803[(1)] = (1));

return statearr_88803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1 = (function (state_88788){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_88788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e88804){if((e88804 instanceof Object)){
var ex__25137__auto__ = e88804;
var statearr_88805_88910 = state_88788;
(statearr_88805_88910[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88911 = state_88788;
state_88788 = G__88911;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = function(state_88788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1.call(this,state_88788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___88903,jobs,results,process,async))
})();
var state__25156__auto__ = (function (){var statearr_88806 = f__25155__auto__.call(null);
(statearr_88806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___88903);

return statearr_88806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___88903,jobs,results,process,async))
);


var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__,jobs,results,process,async){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__,jobs,results,process,async){
return (function (state_88844){
var state_val_88845 = (state_88844[(1)]);
if((state_val_88845 === (7))){
var inst_88840 = (state_88844[(2)]);
var state_88844__$1 = state_88844;
var statearr_88846_88912 = state_88844__$1;
(statearr_88846_88912[(2)] = inst_88840);

(statearr_88846_88912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (20))){
var state_88844__$1 = state_88844;
var statearr_88847_88913 = state_88844__$1;
(statearr_88847_88913[(2)] = null);

(statearr_88847_88913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (1))){
var state_88844__$1 = state_88844;
var statearr_88848_88914 = state_88844__$1;
(statearr_88848_88914[(2)] = null);

(statearr_88848_88914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (4))){
var inst_88809 = (state_88844[(7)]);
var inst_88809__$1 = (state_88844[(2)]);
var inst_88810 = (inst_88809__$1 == null);
var state_88844__$1 = (function (){var statearr_88849 = state_88844;
(statearr_88849[(7)] = inst_88809__$1);

return statearr_88849;
})();
if(cljs.core.truth_(inst_88810)){
var statearr_88850_88915 = state_88844__$1;
(statearr_88850_88915[(1)] = (5));

} else {
var statearr_88851_88916 = state_88844__$1;
(statearr_88851_88916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (15))){
var inst_88822 = (state_88844[(8)]);
var state_88844__$1 = state_88844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88844__$1,(18),to,inst_88822);
} else {
if((state_val_88845 === (21))){
var inst_88835 = (state_88844[(2)]);
var state_88844__$1 = state_88844;
var statearr_88852_88917 = state_88844__$1;
(statearr_88852_88917[(2)] = inst_88835);

(statearr_88852_88917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (13))){
var inst_88837 = (state_88844[(2)]);
var state_88844__$1 = (function (){var statearr_88853 = state_88844;
(statearr_88853[(9)] = inst_88837);

return statearr_88853;
})();
var statearr_88854_88918 = state_88844__$1;
(statearr_88854_88918[(2)] = null);

(statearr_88854_88918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (6))){
var inst_88809 = (state_88844[(7)]);
var state_88844__$1 = state_88844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88844__$1,(11),inst_88809);
} else {
if((state_val_88845 === (17))){
var inst_88830 = (state_88844[(2)]);
var state_88844__$1 = state_88844;
if(cljs.core.truth_(inst_88830)){
var statearr_88855_88919 = state_88844__$1;
(statearr_88855_88919[(1)] = (19));

} else {
var statearr_88856_88920 = state_88844__$1;
(statearr_88856_88920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (3))){
var inst_88842 = (state_88844[(2)]);
var state_88844__$1 = state_88844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88844__$1,inst_88842);
} else {
if((state_val_88845 === (12))){
var inst_88819 = (state_88844[(10)]);
var state_88844__$1 = state_88844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88844__$1,(14),inst_88819);
} else {
if((state_val_88845 === (2))){
var state_88844__$1 = state_88844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88844__$1,(4),results);
} else {
if((state_val_88845 === (19))){
var state_88844__$1 = state_88844;
var statearr_88857_88921 = state_88844__$1;
(statearr_88857_88921[(2)] = null);

(statearr_88857_88921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (11))){
var inst_88819 = (state_88844[(2)]);
var state_88844__$1 = (function (){var statearr_88858 = state_88844;
(statearr_88858[(10)] = inst_88819);

return statearr_88858;
})();
var statearr_88859_88922 = state_88844__$1;
(statearr_88859_88922[(2)] = null);

(statearr_88859_88922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (9))){
var state_88844__$1 = state_88844;
var statearr_88860_88923 = state_88844__$1;
(statearr_88860_88923[(2)] = null);

(statearr_88860_88923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (5))){
var state_88844__$1 = state_88844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_88861_88924 = state_88844__$1;
(statearr_88861_88924[(1)] = (8));

} else {
var statearr_88862_88925 = state_88844__$1;
(statearr_88862_88925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (14))){
var inst_88824 = (state_88844[(11)]);
var inst_88822 = (state_88844[(8)]);
var inst_88822__$1 = (state_88844[(2)]);
var inst_88823 = (inst_88822__$1 == null);
var inst_88824__$1 = cljs.core.not.call(null,inst_88823);
var state_88844__$1 = (function (){var statearr_88863 = state_88844;
(statearr_88863[(11)] = inst_88824__$1);

(statearr_88863[(8)] = inst_88822__$1);

return statearr_88863;
})();
if(inst_88824__$1){
var statearr_88864_88926 = state_88844__$1;
(statearr_88864_88926[(1)] = (15));

} else {
var statearr_88865_88927 = state_88844__$1;
(statearr_88865_88927[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (16))){
var inst_88824 = (state_88844[(11)]);
var state_88844__$1 = state_88844;
var statearr_88866_88928 = state_88844__$1;
(statearr_88866_88928[(2)] = inst_88824);

(statearr_88866_88928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (10))){
var inst_88816 = (state_88844[(2)]);
var state_88844__$1 = state_88844;
var statearr_88867_88929 = state_88844__$1;
(statearr_88867_88929[(2)] = inst_88816);

(statearr_88867_88929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (18))){
var inst_88827 = (state_88844[(2)]);
var state_88844__$1 = state_88844;
var statearr_88868_88930 = state_88844__$1;
(statearr_88868_88930[(2)] = inst_88827);

(statearr_88868_88930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88845 === (8))){
var inst_88813 = cljs.core.async.close_BANG_.call(null,to);
var state_88844__$1 = state_88844;
var statearr_88869_88931 = state_88844__$1;
(statearr_88869_88931[(2)] = inst_88813);

(statearr_88869_88931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto__,jobs,results,process,async))
;
return ((function (switch__25133__auto__,c__25154__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0 = (function (){
var statearr_88873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__);

(statearr_88873[(1)] = (1));

return statearr_88873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1 = (function (state_88844){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_88844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e88874){if((e88874 instanceof Object)){
var ex__25137__auto__ = e88874;
var statearr_88875_88932 = state_88844;
(statearr_88875_88932[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88933 = state_88844;
state_88844 = G__88933;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__ = function(state_88844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1.call(this,state_88844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__,jobs,results,process,async))
})();
var state__25156__auto__ = (function (){var statearr_88876 = f__25155__auto__.call(null);
(statearr_88876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_88876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__,jobs,results,process,async))
);

return c__25154__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args88934 = [];
var len__19357__auto___88937 = arguments.length;
var i__19358__auto___88938 = (0);
while(true){
if((i__19358__auto___88938 < len__19357__auto___88937)){
args88934.push((arguments[i__19358__auto___88938]));

var G__88939 = (i__19358__auto___88938 + (1));
i__19358__auto___88938 = G__88939;
continue;
} else {
}
break;
}

var G__88936 = args88934.length;
switch (G__88936) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88934.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args88941 = [];
var len__19357__auto___88944 = arguments.length;
var i__19358__auto___88945 = (0);
while(true){
if((i__19358__auto___88945 < len__19357__auto___88944)){
args88941.push((arguments[i__19358__auto___88945]));

var G__88946 = (i__19358__auto___88945 + (1));
i__19358__auto___88945 = G__88946;
continue;
} else {
}
break;
}

var G__88943 = args88941.length;
switch (G__88943) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88941.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args88948 = [];
var len__19357__auto___89001 = arguments.length;
var i__19358__auto___89002 = (0);
while(true){
if((i__19358__auto___89002 < len__19357__auto___89001)){
args88948.push((arguments[i__19358__auto___89002]));

var G__89003 = (i__19358__auto___89002 + (1));
i__19358__auto___89002 = G__89003;
continue;
} else {
}
break;
}

var G__88950 = args88948.length;
switch (G__88950) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88948.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25154__auto___89005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___89005,tc,fc){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___89005,tc,fc){
return (function (state_88976){
var state_val_88977 = (state_88976[(1)]);
if((state_val_88977 === (7))){
var inst_88972 = (state_88976[(2)]);
var state_88976__$1 = state_88976;
var statearr_88978_89006 = state_88976__$1;
(statearr_88978_89006[(2)] = inst_88972);

(statearr_88978_89006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (1))){
var state_88976__$1 = state_88976;
var statearr_88979_89007 = state_88976__$1;
(statearr_88979_89007[(2)] = null);

(statearr_88979_89007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (4))){
var inst_88953 = (state_88976[(7)]);
var inst_88953__$1 = (state_88976[(2)]);
var inst_88954 = (inst_88953__$1 == null);
var state_88976__$1 = (function (){var statearr_88980 = state_88976;
(statearr_88980[(7)] = inst_88953__$1);

return statearr_88980;
})();
if(cljs.core.truth_(inst_88954)){
var statearr_88981_89008 = state_88976__$1;
(statearr_88981_89008[(1)] = (5));

} else {
var statearr_88982_89009 = state_88976__$1;
(statearr_88982_89009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (13))){
var state_88976__$1 = state_88976;
var statearr_88983_89010 = state_88976__$1;
(statearr_88983_89010[(2)] = null);

(statearr_88983_89010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (6))){
var inst_88953 = (state_88976[(7)]);
var inst_88959 = p.call(null,inst_88953);
var state_88976__$1 = state_88976;
if(cljs.core.truth_(inst_88959)){
var statearr_88984_89011 = state_88976__$1;
(statearr_88984_89011[(1)] = (9));

} else {
var statearr_88985_89012 = state_88976__$1;
(statearr_88985_89012[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (3))){
var inst_88974 = (state_88976[(2)]);
var state_88976__$1 = state_88976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88976__$1,inst_88974);
} else {
if((state_val_88977 === (12))){
var state_88976__$1 = state_88976;
var statearr_88986_89013 = state_88976__$1;
(statearr_88986_89013[(2)] = null);

(statearr_88986_89013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (2))){
var state_88976__$1 = state_88976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88976__$1,(4),ch);
} else {
if((state_val_88977 === (11))){
var inst_88953 = (state_88976[(7)]);
var inst_88963 = (state_88976[(2)]);
var state_88976__$1 = state_88976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88976__$1,(8),inst_88963,inst_88953);
} else {
if((state_val_88977 === (9))){
var state_88976__$1 = state_88976;
var statearr_88987_89014 = state_88976__$1;
(statearr_88987_89014[(2)] = tc);

(statearr_88987_89014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (5))){
var inst_88956 = cljs.core.async.close_BANG_.call(null,tc);
var inst_88957 = cljs.core.async.close_BANG_.call(null,fc);
var state_88976__$1 = (function (){var statearr_88988 = state_88976;
(statearr_88988[(8)] = inst_88956);

return statearr_88988;
})();
var statearr_88989_89015 = state_88976__$1;
(statearr_88989_89015[(2)] = inst_88957);

(statearr_88989_89015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (14))){
var inst_88970 = (state_88976[(2)]);
var state_88976__$1 = state_88976;
var statearr_88990_89016 = state_88976__$1;
(statearr_88990_89016[(2)] = inst_88970);

(statearr_88990_89016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (10))){
var state_88976__$1 = state_88976;
var statearr_88991_89017 = state_88976__$1;
(statearr_88991_89017[(2)] = fc);

(statearr_88991_89017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88977 === (8))){
var inst_88965 = (state_88976[(2)]);
var state_88976__$1 = state_88976;
if(cljs.core.truth_(inst_88965)){
var statearr_88992_89018 = state_88976__$1;
(statearr_88992_89018[(1)] = (12));

} else {
var statearr_88993_89019 = state_88976__$1;
(statearr_88993_89019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___89005,tc,fc))
;
return ((function (switch__25133__auto__,c__25154__auto___89005,tc,fc){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_88997 = [null,null,null,null,null,null,null,null,null];
(statearr_88997[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_88997[(1)] = (1));

return statearr_88997;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_88976){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_88976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e88998){if((e88998 instanceof Object)){
var ex__25137__auto__ = e88998;
var statearr_88999_89020 = state_88976;
(statearr_88999_89020[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89021 = state_88976;
state_88976 = G__89021;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_88976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_88976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___89005,tc,fc))
})();
var state__25156__auto__ = (function (){var statearr_89000 = f__25155__auto__.call(null);
(statearr_89000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___89005);

return statearr_89000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___89005,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__){
return (function (state_89085){
var state_val_89086 = (state_89085[(1)]);
if((state_val_89086 === (7))){
var inst_89081 = (state_89085[(2)]);
var state_89085__$1 = state_89085;
var statearr_89087_89108 = state_89085__$1;
(statearr_89087_89108[(2)] = inst_89081);

(statearr_89087_89108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89086 === (1))){
var inst_89065 = init;
var state_89085__$1 = (function (){var statearr_89088 = state_89085;
(statearr_89088[(7)] = inst_89065);

return statearr_89088;
})();
var statearr_89089_89109 = state_89085__$1;
(statearr_89089_89109[(2)] = null);

(statearr_89089_89109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89086 === (4))){
var inst_89068 = (state_89085[(8)]);
var inst_89068__$1 = (state_89085[(2)]);
var inst_89069 = (inst_89068__$1 == null);
var state_89085__$1 = (function (){var statearr_89090 = state_89085;
(statearr_89090[(8)] = inst_89068__$1);

return statearr_89090;
})();
if(cljs.core.truth_(inst_89069)){
var statearr_89091_89110 = state_89085__$1;
(statearr_89091_89110[(1)] = (5));

} else {
var statearr_89092_89111 = state_89085__$1;
(statearr_89092_89111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89086 === (6))){
var inst_89068 = (state_89085[(8)]);
var inst_89072 = (state_89085[(9)]);
var inst_89065 = (state_89085[(7)]);
var inst_89072__$1 = f.call(null,inst_89065,inst_89068);
var inst_89073 = cljs.core.reduced_QMARK_.call(null,inst_89072__$1);
var state_89085__$1 = (function (){var statearr_89093 = state_89085;
(statearr_89093[(9)] = inst_89072__$1);

return statearr_89093;
})();
if(inst_89073){
var statearr_89094_89112 = state_89085__$1;
(statearr_89094_89112[(1)] = (8));

} else {
var statearr_89095_89113 = state_89085__$1;
(statearr_89095_89113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89086 === (3))){
var inst_89083 = (state_89085[(2)]);
var state_89085__$1 = state_89085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89085__$1,inst_89083);
} else {
if((state_val_89086 === (2))){
var state_89085__$1 = state_89085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89085__$1,(4),ch);
} else {
if((state_val_89086 === (9))){
var inst_89072 = (state_89085[(9)]);
var inst_89065 = inst_89072;
var state_89085__$1 = (function (){var statearr_89096 = state_89085;
(statearr_89096[(7)] = inst_89065);

return statearr_89096;
})();
var statearr_89097_89114 = state_89085__$1;
(statearr_89097_89114[(2)] = null);

(statearr_89097_89114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89086 === (5))){
var inst_89065 = (state_89085[(7)]);
var state_89085__$1 = state_89085;
var statearr_89098_89115 = state_89085__$1;
(statearr_89098_89115[(2)] = inst_89065);

(statearr_89098_89115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89086 === (10))){
var inst_89079 = (state_89085[(2)]);
var state_89085__$1 = state_89085;
var statearr_89099_89116 = state_89085__$1;
(statearr_89099_89116[(2)] = inst_89079);

(statearr_89099_89116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89086 === (8))){
var inst_89072 = (state_89085[(9)]);
var inst_89075 = cljs.core.deref.call(null,inst_89072);
var state_89085__$1 = state_89085;
var statearr_89100_89117 = state_89085__$1;
(statearr_89100_89117[(2)] = inst_89075);

(statearr_89100_89117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto__))
;
return ((function (switch__25133__auto__,c__25154__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25134__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25134__auto____0 = (function (){
var statearr_89104 = [null,null,null,null,null,null,null,null,null,null];
(statearr_89104[(0)] = cljs$core$async$reduce_$_state_machine__25134__auto__);

(statearr_89104[(1)] = (1));

return statearr_89104;
});
var cljs$core$async$reduce_$_state_machine__25134__auto____1 = (function (state_89085){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_89085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e89105){if((e89105 instanceof Object)){
var ex__25137__auto__ = e89105;
var statearr_89106_89118 = state_89085;
(statearr_89106_89118[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89119 = state_89085;
state_89085 = G__89119;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25134__auto__ = function(state_89085){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25134__auto____1.call(this,state_89085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25134__auto____0;
cljs$core$async$reduce_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25134__auto____1;
return cljs$core$async$reduce_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__))
})();
var state__25156__auto__ = (function (){var statearr_89107 = f__25155__auto__.call(null);
(statearr_89107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_89107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__))
);

return c__25154__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args89120 = [];
var len__19357__auto___89172 = arguments.length;
var i__19358__auto___89173 = (0);
while(true){
if((i__19358__auto___89173 < len__19357__auto___89172)){
args89120.push((arguments[i__19358__auto___89173]));

var G__89174 = (i__19358__auto___89173 + (1));
i__19358__auto___89173 = G__89174;
continue;
} else {
}
break;
}

var G__89122 = args89120.length;
switch (G__89122) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89120.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__){
return (function (state_89147){
var state_val_89148 = (state_89147[(1)]);
if((state_val_89148 === (7))){
var inst_89129 = (state_89147[(2)]);
var state_89147__$1 = state_89147;
var statearr_89149_89176 = state_89147__$1;
(statearr_89149_89176[(2)] = inst_89129);

(statearr_89149_89176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (1))){
var inst_89123 = cljs.core.seq.call(null,coll);
var inst_89124 = inst_89123;
var state_89147__$1 = (function (){var statearr_89150 = state_89147;
(statearr_89150[(7)] = inst_89124);

return statearr_89150;
})();
var statearr_89151_89177 = state_89147__$1;
(statearr_89151_89177[(2)] = null);

(statearr_89151_89177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (4))){
var inst_89124 = (state_89147[(7)]);
var inst_89127 = cljs.core.first.call(null,inst_89124);
var state_89147__$1 = state_89147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89147__$1,(7),ch,inst_89127);
} else {
if((state_val_89148 === (13))){
var inst_89141 = (state_89147[(2)]);
var state_89147__$1 = state_89147;
var statearr_89152_89178 = state_89147__$1;
(statearr_89152_89178[(2)] = inst_89141);

(statearr_89152_89178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (6))){
var inst_89132 = (state_89147[(2)]);
var state_89147__$1 = state_89147;
if(cljs.core.truth_(inst_89132)){
var statearr_89153_89179 = state_89147__$1;
(statearr_89153_89179[(1)] = (8));

} else {
var statearr_89154_89180 = state_89147__$1;
(statearr_89154_89180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (3))){
var inst_89145 = (state_89147[(2)]);
var state_89147__$1 = state_89147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89147__$1,inst_89145);
} else {
if((state_val_89148 === (12))){
var state_89147__$1 = state_89147;
var statearr_89155_89181 = state_89147__$1;
(statearr_89155_89181[(2)] = null);

(statearr_89155_89181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (2))){
var inst_89124 = (state_89147[(7)]);
var state_89147__$1 = state_89147;
if(cljs.core.truth_(inst_89124)){
var statearr_89156_89182 = state_89147__$1;
(statearr_89156_89182[(1)] = (4));

} else {
var statearr_89157_89183 = state_89147__$1;
(statearr_89157_89183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (11))){
var inst_89138 = cljs.core.async.close_BANG_.call(null,ch);
var state_89147__$1 = state_89147;
var statearr_89158_89184 = state_89147__$1;
(statearr_89158_89184[(2)] = inst_89138);

(statearr_89158_89184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (9))){
var state_89147__$1 = state_89147;
if(cljs.core.truth_(close_QMARK_)){
var statearr_89159_89185 = state_89147__$1;
(statearr_89159_89185[(1)] = (11));

} else {
var statearr_89160_89186 = state_89147__$1;
(statearr_89160_89186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (5))){
var inst_89124 = (state_89147[(7)]);
var state_89147__$1 = state_89147;
var statearr_89161_89187 = state_89147__$1;
(statearr_89161_89187[(2)] = inst_89124);

(statearr_89161_89187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (10))){
var inst_89143 = (state_89147[(2)]);
var state_89147__$1 = state_89147;
var statearr_89162_89188 = state_89147__$1;
(statearr_89162_89188[(2)] = inst_89143);

(statearr_89162_89188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89148 === (8))){
var inst_89124 = (state_89147[(7)]);
var inst_89134 = cljs.core.next.call(null,inst_89124);
var inst_89124__$1 = inst_89134;
var state_89147__$1 = (function (){var statearr_89163 = state_89147;
(statearr_89163[(7)] = inst_89124__$1);

return statearr_89163;
})();
var statearr_89164_89189 = state_89147__$1;
(statearr_89164_89189[(2)] = null);

(statearr_89164_89189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto__))
;
return ((function (switch__25133__auto__,c__25154__auto__){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_89168 = [null,null,null,null,null,null,null,null];
(statearr_89168[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_89168[(1)] = (1));

return statearr_89168;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_89147){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_89147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e89169){if((e89169 instanceof Object)){
var ex__25137__auto__ = e89169;
var statearr_89170_89190 = state_89147;
(statearr_89170_89190[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89191 = state_89147;
state_89147 = G__89191;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_89147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_89147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__))
})();
var state__25156__auto__ = (function (){var statearr_89171 = f__25155__auto__.call(null);
(statearr_89171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_89171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__))
);

return c__25154__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18954__auto__ = (((_ == null))?null:_);
var m__18955__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,_);
} else {
var m__18955__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18954__auto__ = (((m == null))?null:m);
var m__18955__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18955__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18954__auto__ = (((m == null))?null:m);
var m__18955__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,m,ch);
} else {
var m__18955__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18954__auto__ = (((m == null))?null:m);
var m__18955__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,m);
} else {
var m__18955__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async89413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89413 = (function (mult,ch,cs,meta89414){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta89414 = meta89414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async89413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_89415,meta89414__$1){
var self__ = this;
var _89415__$1 = this;
return (new cljs.core.async.t_cljs$core$async89413(self__.mult,self__.ch,self__.cs,meta89414__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async89413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_89415){
var self__ = this;
var _89415__$1 = this;
return self__.meta89414;
});})(cs))
;

cljs.core.async.t_cljs$core$async89413.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async89413.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async89413.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async89413.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async89413.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async89413.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async89413.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta89414","meta89414",336396024,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async89413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89413";

cljs.core.async.t_cljs$core$async89413.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async89413");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async89413 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async89413(mult__$1,ch__$1,cs__$1,meta89414){
return (new cljs.core.async.t_cljs$core$async89413(mult__$1,ch__$1,cs__$1,meta89414));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async89413(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25154__auto___89634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___89634,cs,m,dchan,dctr,done){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___89634,cs,m,dchan,dctr,done){
return (function (state_89546){
var state_val_89547 = (state_89546[(1)]);
if((state_val_89547 === (7))){
var inst_89542 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
var statearr_89548_89635 = state_89546__$1;
(statearr_89548_89635[(2)] = inst_89542);

(statearr_89548_89635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (20))){
var inst_89447 = (state_89546[(7)]);
var inst_89457 = cljs.core.first.call(null,inst_89447);
var inst_89458 = cljs.core.nth.call(null,inst_89457,(0),null);
var inst_89459 = cljs.core.nth.call(null,inst_89457,(1),null);
var state_89546__$1 = (function (){var statearr_89549 = state_89546;
(statearr_89549[(8)] = inst_89458);

return statearr_89549;
})();
if(cljs.core.truth_(inst_89459)){
var statearr_89550_89636 = state_89546__$1;
(statearr_89550_89636[(1)] = (22));

} else {
var statearr_89551_89637 = state_89546__$1;
(statearr_89551_89637[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (27))){
var inst_89489 = (state_89546[(9)]);
var inst_89418 = (state_89546[(10)]);
var inst_89487 = (state_89546[(11)]);
var inst_89494 = (state_89546[(12)]);
var inst_89494__$1 = cljs.core._nth.call(null,inst_89487,inst_89489);
var inst_89495 = cljs.core.async.put_BANG_.call(null,inst_89494__$1,inst_89418,done);
var state_89546__$1 = (function (){var statearr_89552 = state_89546;
(statearr_89552[(12)] = inst_89494__$1);

return statearr_89552;
})();
if(cljs.core.truth_(inst_89495)){
var statearr_89553_89638 = state_89546__$1;
(statearr_89553_89638[(1)] = (30));

} else {
var statearr_89554_89639 = state_89546__$1;
(statearr_89554_89639[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (1))){
var state_89546__$1 = state_89546;
var statearr_89555_89640 = state_89546__$1;
(statearr_89555_89640[(2)] = null);

(statearr_89555_89640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (24))){
var inst_89447 = (state_89546[(7)]);
var inst_89464 = (state_89546[(2)]);
var inst_89465 = cljs.core.next.call(null,inst_89447);
var inst_89427 = inst_89465;
var inst_89428 = null;
var inst_89429 = (0);
var inst_89430 = (0);
var state_89546__$1 = (function (){var statearr_89556 = state_89546;
(statearr_89556[(13)] = inst_89430);

(statearr_89556[(14)] = inst_89429);

(statearr_89556[(15)] = inst_89427);

(statearr_89556[(16)] = inst_89428);

(statearr_89556[(17)] = inst_89464);

return statearr_89556;
})();
var statearr_89557_89641 = state_89546__$1;
(statearr_89557_89641[(2)] = null);

(statearr_89557_89641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (39))){
var state_89546__$1 = state_89546;
var statearr_89561_89642 = state_89546__$1;
(statearr_89561_89642[(2)] = null);

(statearr_89561_89642[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (4))){
var inst_89418 = (state_89546[(10)]);
var inst_89418__$1 = (state_89546[(2)]);
var inst_89419 = (inst_89418__$1 == null);
var state_89546__$1 = (function (){var statearr_89562 = state_89546;
(statearr_89562[(10)] = inst_89418__$1);

return statearr_89562;
})();
if(cljs.core.truth_(inst_89419)){
var statearr_89563_89643 = state_89546__$1;
(statearr_89563_89643[(1)] = (5));

} else {
var statearr_89564_89644 = state_89546__$1;
(statearr_89564_89644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (15))){
var inst_89430 = (state_89546[(13)]);
var inst_89429 = (state_89546[(14)]);
var inst_89427 = (state_89546[(15)]);
var inst_89428 = (state_89546[(16)]);
var inst_89443 = (state_89546[(2)]);
var inst_89444 = (inst_89430 + (1));
var tmp89558 = inst_89429;
var tmp89559 = inst_89427;
var tmp89560 = inst_89428;
var inst_89427__$1 = tmp89559;
var inst_89428__$1 = tmp89560;
var inst_89429__$1 = tmp89558;
var inst_89430__$1 = inst_89444;
var state_89546__$1 = (function (){var statearr_89565 = state_89546;
(statearr_89565[(13)] = inst_89430__$1);

(statearr_89565[(14)] = inst_89429__$1);

(statearr_89565[(15)] = inst_89427__$1);

(statearr_89565[(18)] = inst_89443);

(statearr_89565[(16)] = inst_89428__$1);

return statearr_89565;
})();
var statearr_89566_89645 = state_89546__$1;
(statearr_89566_89645[(2)] = null);

(statearr_89566_89645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (21))){
var inst_89468 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
var statearr_89570_89646 = state_89546__$1;
(statearr_89570_89646[(2)] = inst_89468);

(statearr_89570_89646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (31))){
var inst_89494 = (state_89546[(12)]);
var inst_89498 = done.call(null,null);
var inst_89499 = cljs.core.async.untap_STAR_.call(null,m,inst_89494);
var state_89546__$1 = (function (){var statearr_89571 = state_89546;
(statearr_89571[(19)] = inst_89498);

return statearr_89571;
})();
var statearr_89572_89647 = state_89546__$1;
(statearr_89572_89647[(2)] = inst_89499);

(statearr_89572_89647[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (32))){
var inst_89486 = (state_89546[(20)]);
var inst_89489 = (state_89546[(9)]);
var inst_89488 = (state_89546[(21)]);
var inst_89487 = (state_89546[(11)]);
var inst_89501 = (state_89546[(2)]);
var inst_89502 = (inst_89489 + (1));
var tmp89567 = inst_89486;
var tmp89568 = inst_89488;
var tmp89569 = inst_89487;
var inst_89486__$1 = tmp89567;
var inst_89487__$1 = tmp89569;
var inst_89488__$1 = tmp89568;
var inst_89489__$1 = inst_89502;
var state_89546__$1 = (function (){var statearr_89573 = state_89546;
(statearr_89573[(20)] = inst_89486__$1);

(statearr_89573[(9)] = inst_89489__$1);

(statearr_89573[(22)] = inst_89501);

(statearr_89573[(21)] = inst_89488__$1);

(statearr_89573[(11)] = inst_89487__$1);

return statearr_89573;
})();
var statearr_89574_89648 = state_89546__$1;
(statearr_89574_89648[(2)] = null);

(statearr_89574_89648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (40))){
var inst_89514 = (state_89546[(23)]);
var inst_89518 = done.call(null,null);
var inst_89519 = cljs.core.async.untap_STAR_.call(null,m,inst_89514);
var state_89546__$1 = (function (){var statearr_89575 = state_89546;
(statearr_89575[(24)] = inst_89518);

return statearr_89575;
})();
var statearr_89576_89649 = state_89546__$1;
(statearr_89576_89649[(2)] = inst_89519);

(statearr_89576_89649[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (33))){
var inst_89505 = (state_89546[(25)]);
var inst_89507 = cljs.core.chunked_seq_QMARK_.call(null,inst_89505);
var state_89546__$1 = state_89546;
if(inst_89507){
var statearr_89577_89650 = state_89546__$1;
(statearr_89577_89650[(1)] = (36));

} else {
var statearr_89578_89651 = state_89546__$1;
(statearr_89578_89651[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (13))){
var inst_89437 = (state_89546[(26)]);
var inst_89440 = cljs.core.async.close_BANG_.call(null,inst_89437);
var state_89546__$1 = state_89546;
var statearr_89579_89652 = state_89546__$1;
(statearr_89579_89652[(2)] = inst_89440);

(statearr_89579_89652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (22))){
var inst_89458 = (state_89546[(8)]);
var inst_89461 = cljs.core.async.close_BANG_.call(null,inst_89458);
var state_89546__$1 = state_89546;
var statearr_89580_89653 = state_89546__$1;
(statearr_89580_89653[(2)] = inst_89461);

(statearr_89580_89653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (36))){
var inst_89505 = (state_89546[(25)]);
var inst_89509 = cljs.core.chunk_first.call(null,inst_89505);
var inst_89510 = cljs.core.chunk_rest.call(null,inst_89505);
var inst_89511 = cljs.core.count.call(null,inst_89509);
var inst_89486 = inst_89510;
var inst_89487 = inst_89509;
var inst_89488 = inst_89511;
var inst_89489 = (0);
var state_89546__$1 = (function (){var statearr_89581 = state_89546;
(statearr_89581[(20)] = inst_89486);

(statearr_89581[(9)] = inst_89489);

(statearr_89581[(21)] = inst_89488);

(statearr_89581[(11)] = inst_89487);

return statearr_89581;
})();
var statearr_89582_89654 = state_89546__$1;
(statearr_89582_89654[(2)] = null);

(statearr_89582_89654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (41))){
var inst_89505 = (state_89546[(25)]);
var inst_89521 = (state_89546[(2)]);
var inst_89522 = cljs.core.next.call(null,inst_89505);
var inst_89486 = inst_89522;
var inst_89487 = null;
var inst_89488 = (0);
var inst_89489 = (0);
var state_89546__$1 = (function (){var statearr_89583 = state_89546;
(statearr_89583[(27)] = inst_89521);

(statearr_89583[(20)] = inst_89486);

(statearr_89583[(9)] = inst_89489);

(statearr_89583[(21)] = inst_89488);

(statearr_89583[(11)] = inst_89487);

return statearr_89583;
})();
var statearr_89584_89655 = state_89546__$1;
(statearr_89584_89655[(2)] = null);

(statearr_89584_89655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (43))){
var state_89546__$1 = state_89546;
var statearr_89585_89656 = state_89546__$1;
(statearr_89585_89656[(2)] = null);

(statearr_89585_89656[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (29))){
var inst_89530 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
var statearr_89586_89657 = state_89546__$1;
(statearr_89586_89657[(2)] = inst_89530);

(statearr_89586_89657[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (44))){
var inst_89539 = (state_89546[(2)]);
var state_89546__$1 = (function (){var statearr_89587 = state_89546;
(statearr_89587[(28)] = inst_89539);

return statearr_89587;
})();
var statearr_89588_89658 = state_89546__$1;
(statearr_89588_89658[(2)] = null);

(statearr_89588_89658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (6))){
var inst_89478 = (state_89546[(29)]);
var inst_89477 = cljs.core.deref.call(null,cs);
var inst_89478__$1 = cljs.core.keys.call(null,inst_89477);
var inst_89479 = cljs.core.count.call(null,inst_89478__$1);
var inst_89480 = cljs.core.reset_BANG_.call(null,dctr,inst_89479);
var inst_89485 = cljs.core.seq.call(null,inst_89478__$1);
var inst_89486 = inst_89485;
var inst_89487 = null;
var inst_89488 = (0);
var inst_89489 = (0);
var state_89546__$1 = (function (){var statearr_89589 = state_89546;
(statearr_89589[(20)] = inst_89486);

(statearr_89589[(9)] = inst_89489);

(statearr_89589[(30)] = inst_89480);

(statearr_89589[(29)] = inst_89478__$1);

(statearr_89589[(21)] = inst_89488);

(statearr_89589[(11)] = inst_89487);

return statearr_89589;
})();
var statearr_89590_89659 = state_89546__$1;
(statearr_89590_89659[(2)] = null);

(statearr_89590_89659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (28))){
var inst_89486 = (state_89546[(20)]);
var inst_89505 = (state_89546[(25)]);
var inst_89505__$1 = cljs.core.seq.call(null,inst_89486);
var state_89546__$1 = (function (){var statearr_89591 = state_89546;
(statearr_89591[(25)] = inst_89505__$1);

return statearr_89591;
})();
if(inst_89505__$1){
var statearr_89592_89660 = state_89546__$1;
(statearr_89592_89660[(1)] = (33));

} else {
var statearr_89593_89661 = state_89546__$1;
(statearr_89593_89661[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (25))){
var inst_89489 = (state_89546[(9)]);
var inst_89488 = (state_89546[(21)]);
var inst_89491 = (inst_89489 < inst_89488);
var inst_89492 = inst_89491;
var state_89546__$1 = state_89546;
if(cljs.core.truth_(inst_89492)){
var statearr_89594_89662 = state_89546__$1;
(statearr_89594_89662[(1)] = (27));

} else {
var statearr_89595_89663 = state_89546__$1;
(statearr_89595_89663[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (34))){
var state_89546__$1 = state_89546;
var statearr_89596_89664 = state_89546__$1;
(statearr_89596_89664[(2)] = null);

(statearr_89596_89664[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (17))){
var state_89546__$1 = state_89546;
var statearr_89597_89665 = state_89546__$1;
(statearr_89597_89665[(2)] = null);

(statearr_89597_89665[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (3))){
var inst_89544 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89546__$1,inst_89544);
} else {
if((state_val_89547 === (12))){
var inst_89473 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
var statearr_89598_89666 = state_89546__$1;
(statearr_89598_89666[(2)] = inst_89473);

(statearr_89598_89666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (2))){
var state_89546__$1 = state_89546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89546__$1,(4),ch);
} else {
if((state_val_89547 === (23))){
var state_89546__$1 = state_89546;
var statearr_89599_89667 = state_89546__$1;
(statearr_89599_89667[(2)] = null);

(statearr_89599_89667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (35))){
var inst_89528 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
var statearr_89600_89668 = state_89546__$1;
(statearr_89600_89668[(2)] = inst_89528);

(statearr_89600_89668[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (19))){
var inst_89447 = (state_89546[(7)]);
var inst_89451 = cljs.core.chunk_first.call(null,inst_89447);
var inst_89452 = cljs.core.chunk_rest.call(null,inst_89447);
var inst_89453 = cljs.core.count.call(null,inst_89451);
var inst_89427 = inst_89452;
var inst_89428 = inst_89451;
var inst_89429 = inst_89453;
var inst_89430 = (0);
var state_89546__$1 = (function (){var statearr_89601 = state_89546;
(statearr_89601[(13)] = inst_89430);

(statearr_89601[(14)] = inst_89429);

(statearr_89601[(15)] = inst_89427);

(statearr_89601[(16)] = inst_89428);

return statearr_89601;
})();
var statearr_89602_89669 = state_89546__$1;
(statearr_89602_89669[(2)] = null);

(statearr_89602_89669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (11))){
var inst_89427 = (state_89546[(15)]);
var inst_89447 = (state_89546[(7)]);
var inst_89447__$1 = cljs.core.seq.call(null,inst_89427);
var state_89546__$1 = (function (){var statearr_89603 = state_89546;
(statearr_89603[(7)] = inst_89447__$1);

return statearr_89603;
})();
if(inst_89447__$1){
var statearr_89604_89670 = state_89546__$1;
(statearr_89604_89670[(1)] = (16));

} else {
var statearr_89605_89671 = state_89546__$1;
(statearr_89605_89671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (9))){
var inst_89475 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
var statearr_89606_89672 = state_89546__$1;
(statearr_89606_89672[(2)] = inst_89475);

(statearr_89606_89672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (5))){
var inst_89425 = cljs.core.deref.call(null,cs);
var inst_89426 = cljs.core.seq.call(null,inst_89425);
var inst_89427 = inst_89426;
var inst_89428 = null;
var inst_89429 = (0);
var inst_89430 = (0);
var state_89546__$1 = (function (){var statearr_89607 = state_89546;
(statearr_89607[(13)] = inst_89430);

(statearr_89607[(14)] = inst_89429);

(statearr_89607[(15)] = inst_89427);

(statearr_89607[(16)] = inst_89428);

return statearr_89607;
})();
var statearr_89608_89673 = state_89546__$1;
(statearr_89608_89673[(2)] = null);

(statearr_89608_89673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (14))){
var state_89546__$1 = state_89546;
var statearr_89609_89674 = state_89546__$1;
(statearr_89609_89674[(2)] = null);

(statearr_89609_89674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (45))){
var inst_89536 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
var statearr_89610_89675 = state_89546__$1;
(statearr_89610_89675[(2)] = inst_89536);

(statearr_89610_89675[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (26))){
var inst_89478 = (state_89546[(29)]);
var inst_89532 = (state_89546[(2)]);
var inst_89533 = cljs.core.seq.call(null,inst_89478);
var state_89546__$1 = (function (){var statearr_89611 = state_89546;
(statearr_89611[(31)] = inst_89532);

return statearr_89611;
})();
if(inst_89533){
var statearr_89612_89676 = state_89546__$1;
(statearr_89612_89676[(1)] = (42));

} else {
var statearr_89613_89677 = state_89546__$1;
(statearr_89613_89677[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (16))){
var inst_89447 = (state_89546[(7)]);
var inst_89449 = cljs.core.chunked_seq_QMARK_.call(null,inst_89447);
var state_89546__$1 = state_89546;
if(inst_89449){
var statearr_89614_89678 = state_89546__$1;
(statearr_89614_89678[(1)] = (19));

} else {
var statearr_89615_89679 = state_89546__$1;
(statearr_89615_89679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (38))){
var inst_89525 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
var statearr_89616_89680 = state_89546__$1;
(statearr_89616_89680[(2)] = inst_89525);

(statearr_89616_89680[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (30))){
var state_89546__$1 = state_89546;
var statearr_89617_89681 = state_89546__$1;
(statearr_89617_89681[(2)] = null);

(statearr_89617_89681[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (10))){
var inst_89430 = (state_89546[(13)]);
var inst_89428 = (state_89546[(16)]);
var inst_89436 = cljs.core._nth.call(null,inst_89428,inst_89430);
var inst_89437 = cljs.core.nth.call(null,inst_89436,(0),null);
var inst_89438 = cljs.core.nth.call(null,inst_89436,(1),null);
var state_89546__$1 = (function (){var statearr_89618 = state_89546;
(statearr_89618[(26)] = inst_89437);

return statearr_89618;
})();
if(cljs.core.truth_(inst_89438)){
var statearr_89619_89682 = state_89546__$1;
(statearr_89619_89682[(1)] = (13));

} else {
var statearr_89620_89683 = state_89546__$1;
(statearr_89620_89683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (18))){
var inst_89471 = (state_89546[(2)]);
var state_89546__$1 = state_89546;
var statearr_89621_89684 = state_89546__$1;
(statearr_89621_89684[(2)] = inst_89471);

(statearr_89621_89684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (42))){
var state_89546__$1 = state_89546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89546__$1,(45),dchan);
} else {
if((state_val_89547 === (37))){
var inst_89505 = (state_89546[(25)]);
var inst_89418 = (state_89546[(10)]);
var inst_89514 = (state_89546[(23)]);
var inst_89514__$1 = cljs.core.first.call(null,inst_89505);
var inst_89515 = cljs.core.async.put_BANG_.call(null,inst_89514__$1,inst_89418,done);
var state_89546__$1 = (function (){var statearr_89622 = state_89546;
(statearr_89622[(23)] = inst_89514__$1);

return statearr_89622;
})();
if(cljs.core.truth_(inst_89515)){
var statearr_89623_89685 = state_89546__$1;
(statearr_89623_89685[(1)] = (39));

} else {
var statearr_89624_89686 = state_89546__$1;
(statearr_89624_89686[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89547 === (8))){
var inst_89430 = (state_89546[(13)]);
var inst_89429 = (state_89546[(14)]);
var inst_89432 = (inst_89430 < inst_89429);
var inst_89433 = inst_89432;
var state_89546__$1 = state_89546;
if(cljs.core.truth_(inst_89433)){
var statearr_89625_89687 = state_89546__$1;
(statearr_89625_89687[(1)] = (10));

} else {
var statearr_89626_89688 = state_89546__$1;
(statearr_89626_89688[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___89634,cs,m,dchan,dctr,done))
;
return ((function (switch__25133__auto__,c__25154__auto___89634,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25134__auto__ = null;
var cljs$core$async$mult_$_state_machine__25134__auto____0 = (function (){
var statearr_89630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89630[(0)] = cljs$core$async$mult_$_state_machine__25134__auto__);

(statearr_89630[(1)] = (1));

return statearr_89630;
});
var cljs$core$async$mult_$_state_machine__25134__auto____1 = (function (state_89546){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_89546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e89631){if((e89631 instanceof Object)){
var ex__25137__auto__ = e89631;
var statearr_89632_89689 = state_89546;
(statearr_89632_89689[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89690 = state_89546;
state_89546 = G__89690;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25134__auto__ = function(state_89546){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25134__auto____1.call(this,state_89546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25134__auto____0;
cljs$core$async$mult_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25134__auto____1;
return cljs$core$async$mult_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___89634,cs,m,dchan,dctr,done))
})();
var state__25156__auto__ = (function (){var statearr_89633 = f__25155__auto__.call(null);
(statearr_89633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___89634);

return statearr_89633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___89634,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args89691 = [];
var len__19357__auto___89694 = arguments.length;
var i__19358__auto___89695 = (0);
while(true){
if((i__19358__auto___89695 < len__19357__auto___89694)){
args89691.push((arguments[i__19358__auto___89695]));

var G__89696 = (i__19358__auto___89695 + (1));
i__19358__auto___89695 = G__89696;
continue;
} else {
}
break;
}

var G__89693 = args89691.length;
switch (G__89693) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89691.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18954__auto__ = (((m == null))?null:m);
var m__18955__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,m,ch);
} else {
var m__18955__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18954__auto__ = (((m == null))?null:m);
var m__18955__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,m,ch);
} else {
var m__18955__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18954__auto__ = (((m == null))?null:m);
var m__18955__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,m);
} else {
var m__18955__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18954__auto__ = (((m == null))?null:m);
var m__18955__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,m,state_map);
} else {
var m__18955__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18954__auto__ = (((m == null))?null:m);
var m__18955__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,m,mode);
} else {
var m__18955__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___89708 = arguments.length;
var i__19358__auto___89709 = (0);
while(true){
if((i__19358__auto___89709 < len__19357__auto___89708)){
args__19364__auto__.push((arguments[i__19358__auto___89709]));

var G__89710 = (i__19358__auto___89709 + (1));
i__19358__auto___89709 = G__89710;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((3) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19365__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__89702){
var map__89703 = p__89702;
var map__89703__$1 = ((((!((map__89703 == null)))?((((map__89703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89703):map__89703);
var opts = map__89703__$1;
var statearr_89705_89711 = state;
(statearr_89705_89711[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__89703,map__89703__$1,opts){
return (function (val){
var statearr_89706_89712 = state;
(statearr_89706_89712[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__89703,map__89703__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_89707_89713 = state;
(statearr_89707_89713[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq89698){
var G__89699 = cljs.core.first.call(null,seq89698);
var seq89698__$1 = cljs.core.next.call(null,seq89698);
var G__89700 = cljs.core.first.call(null,seq89698__$1);
var seq89698__$2 = cljs.core.next.call(null,seq89698__$1);
var G__89701 = cljs.core.first.call(null,seq89698__$2);
var seq89698__$3 = cljs.core.next.call(null,seq89698__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89699,G__89700,G__89701,seq89698__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async89877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89877 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta89878){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta89878 = meta89878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89879,meta89878__$1){
var self__ = this;
var _89879__$1 = this;
return (new cljs.core.async.t_cljs$core$async89877(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta89878__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89879){
var self__ = this;
var _89879__$1 = this;
return self__.meta89878;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89877.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89877.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta89878","meta89878",1286570389,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89877";

cljs.core.async.t_cljs$core$async89877.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async89877");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async89877 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async89877(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta89878){
return (new cljs.core.async.t_cljs$core$async89877(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta89878));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async89877(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25154__auto___90040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___90040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___90040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_89977){
var state_val_89978 = (state_89977[(1)]);
if((state_val_89978 === (7))){
var inst_89895 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
var statearr_89979_90041 = state_89977__$1;
(statearr_89979_90041[(2)] = inst_89895);

(statearr_89979_90041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (20))){
var inst_89907 = (state_89977[(7)]);
var state_89977__$1 = state_89977;
var statearr_89980_90042 = state_89977__$1;
(statearr_89980_90042[(2)] = inst_89907);

(statearr_89980_90042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (27))){
var state_89977__$1 = state_89977;
var statearr_89981_90043 = state_89977__$1;
(statearr_89981_90043[(2)] = null);

(statearr_89981_90043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (1))){
var inst_89883 = (state_89977[(8)]);
var inst_89883__$1 = calc_state.call(null);
var inst_89885 = (inst_89883__$1 == null);
var inst_89886 = cljs.core.not.call(null,inst_89885);
var state_89977__$1 = (function (){var statearr_89982 = state_89977;
(statearr_89982[(8)] = inst_89883__$1);

return statearr_89982;
})();
if(inst_89886){
var statearr_89983_90044 = state_89977__$1;
(statearr_89983_90044[(1)] = (2));

} else {
var statearr_89984_90045 = state_89977__$1;
(statearr_89984_90045[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (24))){
var inst_89951 = (state_89977[(9)]);
var inst_89930 = (state_89977[(10)]);
var inst_89937 = (state_89977[(11)]);
var inst_89951__$1 = inst_89930.call(null,inst_89937);
var state_89977__$1 = (function (){var statearr_89985 = state_89977;
(statearr_89985[(9)] = inst_89951__$1);

return statearr_89985;
})();
if(cljs.core.truth_(inst_89951__$1)){
var statearr_89986_90046 = state_89977__$1;
(statearr_89986_90046[(1)] = (29));

} else {
var statearr_89987_90047 = state_89977__$1;
(statearr_89987_90047[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (4))){
var inst_89898 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
if(cljs.core.truth_(inst_89898)){
var statearr_89988_90048 = state_89977__$1;
(statearr_89988_90048[(1)] = (8));

} else {
var statearr_89989_90049 = state_89977__$1;
(statearr_89989_90049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (15))){
var inst_89924 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
if(cljs.core.truth_(inst_89924)){
var statearr_89990_90050 = state_89977__$1;
(statearr_89990_90050[(1)] = (19));

} else {
var statearr_89991_90051 = state_89977__$1;
(statearr_89991_90051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (21))){
var inst_89929 = (state_89977[(12)]);
var inst_89929__$1 = (state_89977[(2)]);
var inst_89930 = cljs.core.get.call(null,inst_89929__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_89931 = cljs.core.get.call(null,inst_89929__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_89932 = cljs.core.get.call(null,inst_89929__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_89977__$1 = (function (){var statearr_89992 = state_89977;
(statearr_89992[(10)] = inst_89930);

(statearr_89992[(12)] = inst_89929__$1);

(statearr_89992[(13)] = inst_89931);

return statearr_89992;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_89977__$1,(22),inst_89932);
} else {
if((state_val_89978 === (31))){
var inst_89959 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
if(cljs.core.truth_(inst_89959)){
var statearr_89993_90052 = state_89977__$1;
(statearr_89993_90052[(1)] = (32));

} else {
var statearr_89994_90053 = state_89977__$1;
(statearr_89994_90053[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (32))){
var inst_89936 = (state_89977[(14)]);
var state_89977__$1 = state_89977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89977__$1,(35),out,inst_89936);
} else {
if((state_val_89978 === (33))){
var inst_89929 = (state_89977[(12)]);
var inst_89907 = inst_89929;
var state_89977__$1 = (function (){var statearr_89995 = state_89977;
(statearr_89995[(7)] = inst_89907);

return statearr_89995;
})();
var statearr_89996_90054 = state_89977__$1;
(statearr_89996_90054[(2)] = null);

(statearr_89996_90054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (13))){
var inst_89907 = (state_89977[(7)]);
var inst_89914 = inst_89907.cljs$lang$protocol_mask$partition0$;
var inst_89915 = (inst_89914 & (64));
var inst_89916 = inst_89907.cljs$core$ISeq$;
var inst_89917 = (inst_89915) || (inst_89916);
var state_89977__$1 = state_89977;
if(cljs.core.truth_(inst_89917)){
var statearr_89997_90055 = state_89977__$1;
(statearr_89997_90055[(1)] = (16));

} else {
var statearr_89998_90056 = state_89977__$1;
(statearr_89998_90056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (22))){
var inst_89936 = (state_89977[(14)]);
var inst_89937 = (state_89977[(11)]);
var inst_89935 = (state_89977[(2)]);
var inst_89936__$1 = cljs.core.nth.call(null,inst_89935,(0),null);
var inst_89937__$1 = cljs.core.nth.call(null,inst_89935,(1),null);
var inst_89938 = (inst_89936__$1 == null);
var inst_89939 = cljs.core._EQ_.call(null,inst_89937__$1,change);
var inst_89940 = (inst_89938) || (inst_89939);
var state_89977__$1 = (function (){var statearr_89999 = state_89977;
(statearr_89999[(14)] = inst_89936__$1);

(statearr_89999[(11)] = inst_89937__$1);

return statearr_89999;
})();
if(cljs.core.truth_(inst_89940)){
var statearr_90000_90057 = state_89977__$1;
(statearr_90000_90057[(1)] = (23));

} else {
var statearr_90001_90058 = state_89977__$1;
(statearr_90001_90058[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (36))){
var inst_89929 = (state_89977[(12)]);
var inst_89907 = inst_89929;
var state_89977__$1 = (function (){var statearr_90002 = state_89977;
(statearr_90002[(7)] = inst_89907);

return statearr_90002;
})();
var statearr_90003_90059 = state_89977__$1;
(statearr_90003_90059[(2)] = null);

(statearr_90003_90059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (29))){
var inst_89951 = (state_89977[(9)]);
var state_89977__$1 = state_89977;
var statearr_90004_90060 = state_89977__$1;
(statearr_90004_90060[(2)] = inst_89951);

(statearr_90004_90060[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (6))){
var state_89977__$1 = state_89977;
var statearr_90005_90061 = state_89977__$1;
(statearr_90005_90061[(2)] = false);

(statearr_90005_90061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (28))){
var inst_89947 = (state_89977[(2)]);
var inst_89948 = calc_state.call(null);
var inst_89907 = inst_89948;
var state_89977__$1 = (function (){var statearr_90006 = state_89977;
(statearr_90006[(7)] = inst_89907);

(statearr_90006[(15)] = inst_89947);

return statearr_90006;
})();
var statearr_90007_90062 = state_89977__$1;
(statearr_90007_90062[(2)] = null);

(statearr_90007_90062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (25))){
var inst_89973 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
var statearr_90008_90063 = state_89977__$1;
(statearr_90008_90063[(2)] = inst_89973);

(statearr_90008_90063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (34))){
var inst_89971 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
var statearr_90009_90064 = state_89977__$1;
(statearr_90009_90064[(2)] = inst_89971);

(statearr_90009_90064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (17))){
var state_89977__$1 = state_89977;
var statearr_90010_90065 = state_89977__$1;
(statearr_90010_90065[(2)] = false);

(statearr_90010_90065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (3))){
var state_89977__$1 = state_89977;
var statearr_90011_90066 = state_89977__$1;
(statearr_90011_90066[(2)] = false);

(statearr_90011_90066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (12))){
var inst_89975 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89977__$1,inst_89975);
} else {
if((state_val_89978 === (2))){
var inst_89883 = (state_89977[(8)]);
var inst_89888 = inst_89883.cljs$lang$protocol_mask$partition0$;
var inst_89889 = (inst_89888 & (64));
var inst_89890 = inst_89883.cljs$core$ISeq$;
var inst_89891 = (inst_89889) || (inst_89890);
var state_89977__$1 = state_89977;
if(cljs.core.truth_(inst_89891)){
var statearr_90012_90067 = state_89977__$1;
(statearr_90012_90067[(1)] = (5));

} else {
var statearr_90013_90068 = state_89977__$1;
(statearr_90013_90068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (23))){
var inst_89936 = (state_89977[(14)]);
var inst_89942 = (inst_89936 == null);
var state_89977__$1 = state_89977;
if(cljs.core.truth_(inst_89942)){
var statearr_90014_90069 = state_89977__$1;
(statearr_90014_90069[(1)] = (26));

} else {
var statearr_90015_90070 = state_89977__$1;
(statearr_90015_90070[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (35))){
var inst_89962 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
if(cljs.core.truth_(inst_89962)){
var statearr_90016_90071 = state_89977__$1;
(statearr_90016_90071[(1)] = (36));

} else {
var statearr_90017_90072 = state_89977__$1;
(statearr_90017_90072[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (19))){
var inst_89907 = (state_89977[(7)]);
var inst_89926 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89907);
var state_89977__$1 = state_89977;
var statearr_90018_90073 = state_89977__$1;
(statearr_90018_90073[(2)] = inst_89926);

(statearr_90018_90073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (11))){
var inst_89907 = (state_89977[(7)]);
var inst_89911 = (inst_89907 == null);
var inst_89912 = cljs.core.not.call(null,inst_89911);
var state_89977__$1 = state_89977;
if(inst_89912){
var statearr_90019_90074 = state_89977__$1;
(statearr_90019_90074[(1)] = (13));

} else {
var statearr_90020_90075 = state_89977__$1;
(statearr_90020_90075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (9))){
var inst_89883 = (state_89977[(8)]);
var state_89977__$1 = state_89977;
var statearr_90021_90076 = state_89977__$1;
(statearr_90021_90076[(2)] = inst_89883);

(statearr_90021_90076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (5))){
var state_89977__$1 = state_89977;
var statearr_90022_90077 = state_89977__$1;
(statearr_90022_90077[(2)] = true);

(statearr_90022_90077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (14))){
var state_89977__$1 = state_89977;
var statearr_90023_90078 = state_89977__$1;
(statearr_90023_90078[(2)] = false);

(statearr_90023_90078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (26))){
var inst_89937 = (state_89977[(11)]);
var inst_89944 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_89937);
var state_89977__$1 = state_89977;
var statearr_90024_90079 = state_89977__$1;
(statearr_90024_90079[(2)] = inst_89944);

(statearr_90024_90079[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (16))){
var state_89977__$1 = state_89977;
var statearr_90025_90080 = state_89977__$1;
(statearr_90025_90080[(2)] = true);

(statearr_90025_90080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (38))){
var inst_89967 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
var statearr_90026_90081 = state_89977__$1;
(statearr_90026_90081[(2)] = inst_89967);

(statearr_90026_90081[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (30))){
var inst_89930 = (state_89977[(10)]);
var inst_89937 = (state_89977[(11)]);
var inst_89931 = (state_89977[(13)]);
var inst_89954 = cljs.core.empty_QMARK_.call(null,inst_89930);
var inst_89955 = inst_89931.call(null,inst_89937);
var inst_89956 = cljs.core.not.call(null,inst_89955);
var inst_89957 = (inst_89954) && (inst_89956);
var state_89977__$1 = state_89977;
var statearr_90027_90082 = state_89977__$1;
(statearr_90027_90082[(2)] = inst_89957);

(statearr_90027_90082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (10))){
var inst_89883 = (state_89977[(8)]);
var inst_89903 = (state_89977[(2)]);
var inst_89904 = cljs.core.get.call(null,inst_89903,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_89905 = cljs.core.get.call(null,inst_89903,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_89906 = cljs.core.get.call(null,inst_89903,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_89907 = inst_89883;
var state_89977__$1 = (function (){var statearr_90028 = state_89977;
(statearr_90028[(16)] = inst_89906);

(statearr_90028[(7)] = inst_89907);

(statearr_90028[(17)] = inst_89905);

(statearr_90028[(18)] = inst_89904);

return statearr_90028;
})();
var statearr_90029_90083 = state_89977__$1;
(statearr_90029_90083[(2)] = null);

(statearr_90029_90083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (18))){
var inst_89921 = (state_89977[(2)]);
var state_89977__$1 = state_89977;
var statearr_90030_90084 = state_89977__$1;
(statearr_90030_90084[(2)] = inst_89921);

(statearr_90030_90084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (37))){
var state_89977__$1 = state_89977;
var statearr_90031_90085 = state_89977__$1;
(statearr_90031_90085[(2)] = null);

(statearr_90031_90085[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89978 === (8))){
var inst_89883 = (state_89977[(8)]);
var inst_89900 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89883);
var state_89977__$1 = state_89977;
var statearr_90032_90086 = state_89977__$1;
(statearr_90032_90086[(2)] = inst_89900);

(statearr_90032_90086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___90040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25133__auto__,c__25154__auto___90040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25134__auto__ = null;
var cljs$core$async$mix_$_state_machine__25134__auto____0 = (function (){
var statearr_90036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90036[(0)] = cljs$core$async$mix_$_state_machine__25134__auto__);

(statearr_90036[(1)] = (1));

return statearr_90036;
});
var cljs$core$async$mix_$_state_machine__25134__auto____1 = (function (state_89977){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_89977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e90037){if((e90037 instanceof Object)){
var ex__25137__auto__ = e90037;
var statearr_90038_90087 = state_89977;
(statearr_90038_90087[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90088 = state_89977;
state_89977 = G__90088;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25134__auto__ = function(state_89977){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25134__auto____1.call(this,state_89977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25134__auto____0;
cljs$core$async$mix_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25134__auto____1;
return cljs$core$async$mix_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___90040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25156__auto__ = (function (){var statearr_90039 = f__25155__auto__.call(null);
(statearr_90039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___90040);

return statearr_90039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___90040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18954__auto__ = (((p == null))?null:p);
var m__18955__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18955__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18954__auto__ = (((p == null))?null:p);
var m__18955__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,p,v,ch);
} else {
var m__18955__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args90089 = [];
var len__19357__auto___90092 = arguments.length;
var i__19358__auto___90093 = (0);
while(true){
if((i__19358__auto___90093 < len__19357__auto___90092)){
args90089.push((arguments[i__19358__auto___90093]));

var G__90094 = (i__19358__auto___90093 + (1));
i__19358__auto___90093 = G__90094;
continue;
} else {
}
break;
}

var G__90091 = args90089.length;
switch (G__90091) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90089.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18954__auto__ = (((p == null))?null:p);
var m__18955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,p);
} else {
var m__18955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18954__auto__ = (((p == null))?null:p);
var m__18955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,p,v);
} else {
var m__18955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args90097 = [];
var len__19357__auto___90222 = arguments.length;
var i__19358__auto___90223 = (0);
while(true){
if((i__19358__auto___90223 < len__19357__auto___90222)){
args90097.push((arguments[i__19358__auto___90223]));

var G__90224 = (i__19358__auto___90223 + (1));
i__19358__auto___90223 = G__90224;
continue;
} else {
}
break;
}

var G__90099 = args90097.length;
switch (G__90099) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90097.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18298__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18298__auto__,mults){
return (function (p1__90096_SHARP_){
if(cljs.core.truth_(p1__90096_SHARP_.call(null,topic))){
return p1__90096_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__90096_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18298__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async90100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90100 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta90101){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta90101 = meta90101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_90102,meta90101__$1){
var self__ = this;
var _90102__$1 = this;
return (new cljs.core.async.t_cljs$core$async90100(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta90101__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async90100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_90102){
var self__ = this;
var _90102__$1 = this;
return self__.meta90101;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async90100.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async90100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async90100.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async90100.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async90100.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async90100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async90100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async90100.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta90101","meta90101",-4204511,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async90100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90100";

cljs.core.async.t_cljs$core$async90100.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async90100");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async90100 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async90100(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta90101){
return (new cljs.core.async.t_cljs$core$async90100(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta90101));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async90100(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25154__auto___90226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___90226,mults,ensure_mult,p){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___90226,mults,ensure_mult,p){
return (function (state_90174){
var state_val_90175 = (state_90174[(1)]);
if((state_val_90175 === (7))){
var inst_90170 = (state_90174[(2)]);
var state_90174__$1 = state_90174;
var statearr_90176_90227 = state_90174__$1;
(statearr_90176_90227[(2)] = inst_90170);

(statearr_90176_90227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (20))){
var state_90174__$1 = state_90174;
var statearr_90177_90228 = state_90174__$1;
(statearr_90177_90228[(2)] = null);

(statearr_90177_90228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (1))){
var state_90174__$1 = state_90174;
var statearr_90178_90229 = state_90174__$1;
(statearr_90178_90229[(2)] = null);

(statearr_90178_90229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (24))){
var inst_90153 = (state_90174[(7)]);
var inst_90162 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_90153);
var state_90174__$1 = state_90174;
var statearr_90179_90230 = state_90174__$1;
(statearr_90179_90230[(2)] = inst_90162);

(statearr_90179_90230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (4))){
var inst_90105 = (state_90174[(8)]);
var inst_90105__$1 = (state_90174[(2)]);
var inst_90106 = (inst_90105__$1 == null);
var state_90174__$1 = (function (){var statearr_90180 = state_90174;
(statearr_90180[(8)] = inst_90105__$1);

return statearr_90180;
})();
if(cljs.core.truth_(inst_90106)){
var statearr_90181_90231 = state_90174__$1;
(statearr_90181_90231[(1)] = (5));

} else {
var statearr_90182_90232 = state_90174__$1;
(statearr_90182_90232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (15))){
var inst_90147 = (state_90174[(2)]);
var state_90174__$1 = state_90174;
var statearr_90183_90233 = state_90174__$1;
(statearr_90183_90233[(2)] = inst_90147);

(statearr_90183_90233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (21))){
var inst_90167 = (state_90174[(2)]);
var state_90174__$1 = (function (){var statearr_90184 = state_90174;
(statearr_90184[(9)] = inst_90167);

return statearr_90184;
})();
var statearr_90185_90234 = state_90174__$1;
(statearr_90185_90234[(2)] = null);

(statearr_90185_90234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (13))){
var inst_90129 = (state_90174[(10)]);
var inst_90131 = cljs.core.chunked_seq_QMARK_.call(null,inst_90129);
var state_90174__$1 = state_90174;
if(inst_90131){
var statearr_90186_90235 = state_90174__$1;
(statearr_90186_90235[(1)] = (16));

} else {
var statearr_90187_90236 = state_90174__$1;
(statearr_90187_90236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (22))){
var inst_90159 = (state_90174[(2)]);
var state_90174__$1 = state_90174;
if(cljs.core.truth_(inst_90159)){
var statearr_90188_90237 = state_90174__$1;
(statearr_90188_90237[(1)] = (23));

} else {
var statearr_90189_90238 = state_90174__$1;
(statearr_90189_90238[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (6))){
var inst_90155 = (state_90174[(11)]);
var inst_90153 = (state_90174[(7)]);
var inst_90105 = (state_90174[(8)]);
var inst_90153__$1 = topic_fn.call(null,inst_90105);
var inst_90154 = cljs.core.deref.call(null,mults);
var inst_90155__$1 = cljs.core.get.call(null,inst_90154,inst_90153__$1);
var state_90174__$1 = (function (){var statearr_90190 = state_90174;
(statearr_90190[(11)] = inst_90155__$1);

(statearr_90190[(7)] = inst_90153__$1);

return statearr_90190;
})();
if(cljs.core.truth_(inst_90155__$1)){
var statearr_90191_90239 = state_90174__$1;
(statearr_90191_90239[(1)] = (19));

} else {
var statearr_90192_90240 = state_90174__$1;
(statearr_90192_90240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (25))){
var inst_90164 = (state_90174[(2)]);
var state_90174__$1 = state_90174;
var statearr_90193_90241 = state_90174__$1;
(statearr_90193_90241[(2)] = inst_90164);

(statearr_90193_90241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (17))){
var inst_90129 = (state_90174[(10)]);
var inst_90138 = cljs.core.first.call(null,inst_90129);
var inst_90139 = cljs.core.async.muxch_STAR_.call(null,inst_90138);
var inst_90140 = cljs.core.async.close_BANG_.call(null,inst_90139);
var inst_90141 = cljs.core.next.call(null,inst_90129);
var inst_90115 = inst_90141;
var inst_90116 = null;
var inst_90117 = (0);
var inst_90118 = (0);
var state_90174__$1 = (function (){var statearr_90194 = state_90174;
(statearr_90194[(12)] = inst_90118);

(statearr_90194[(13)] = inst_90140);

(statearr_90194[(14)] = inst_90117);

(statearr_90194[(15)] = inst_90115);

(statearr_90194[(16)] = inst_90116);

return statearr_90194;
})();
var statearr_90195_90242 = state_90174__$1;
(statearr_90195_90242[(2)] = null);

(statearr_90195_90242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (3))){
var inst_90172 = (state_90174[(2)]);
var state_90174__$1 = state_90174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90174__$1,inst_90172);
} else {
if((state_val_90175 === (12))){
var inst_90149 = (state_90174[(2)]);
var state_90174__$1 = state_90174;
var statearr_90196_90243 = state_90174__$1;
(statearr_90196_90243[(2)] = inst_90149);

(statearr_90196_90243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (2))){
var state_90174__$1 = state_90174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90174__$1,(4),ch);
} else {
if((state_val_90175 === (23))){
var state_90174__$1 = state_90174;
var statearr_90197_90244 = state_90174__$1;
(statearr_90197_90244[(2)] = null);

(statearr_90197_90244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (19))){
var inst_90155 = (state_90174[(11)]);
var inst_90105 = (state_90174[(8)]);
var inst_90157 = cljs.core.async.muxch_STAR_.call(null,inst_90155);
var state_90174__$1 = state_90174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90174__$1,(22),inst_90157,inst_90105);
} else {
if((state_val_90175 === (11))){
var inst_90115 = (state_90174[(15)]);
var inst_90129 = (state_90174[(10)]);
var inst_90129__$1 = cljs.core.seq.call(null,inst_90115);
var state_90174__$1 = (function (){var statearr_90198 = state_90174;
(statearr_90198[(10)] = inst_90129__$1);

return statearr_90198;
})();
if(inst_90129__$1){
var statearr_90199_90245 = state_90174__$1;
(statearr_90199_90245[(1)] = (13));

} else {
var statearr_90200_90246 = state_90174__$1;
(statearr_90200_90246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (9))){
var inst_90151 = (state_90174[(2)]);
var state_90174__$1 = state_90174;
var statearr_90201_90247 = state_90174__$1;
(statearr_90201_90247[(2)] = inst_90151);

(statearr_90201_90247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (5))){
var inst_90112 = cljs.core.deref.call(null,mults);
var inst_90113 = cljs.core.vals.call(null,inst_90112);
var inst_90114 = cljs.core.seq.call(null,inst_90113);
var inst_90115 = inst_90114;
var inst_90116 = null;
var inst_90117 = (0);
var inst_90118 = (0);
var state_90174__$1 = (function (){var statearr_90202 = state_90174;
(statearr_90202[(12)] = inst_90118);

(statearr_90202[(14)] = inst_90117);

(statearr_90202[(15)] = inst_90115);

(statearr_90202[(16)] = inst_90116);

return statearr_90202;
})();
var statearr_90203_90248 = state_90174__$1;
(statearr_90203_90248[(2)] = null);

(statearr_90203_90248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (14))){
var state_90174__$1 = state_90174;
var statearr_90207_90249 = state_90174__$1;
(statearr_90207_90249[(2)] = null);

(statearr_90207_90249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (16))){
var inst_90129 = (state_90174[(10)]);
var inst_90133 = cljs.core.chunk_first.call(null,inst_90129);
var inst_90134 = cljs.core.chunk_rest.call(null,inst_90129);
var inst_90135 = cljs.core.count.call(null,inst_90133);
var inst_90115 = inst_90134;
var inst_90116 = inst_90133;
var inst_90117 = inst_90135;
var inst_90118 = (0);
var state_90174__$1 = (function (){var statearr_90208 = state_90174;
(statearr_90208[(12)] = inst_90118);

(statearr_90208[(14)] = inst_90117);

(statearr_90208[(15)] = inst_90115);

(statearr_90208[(16)] = inst_90116);

return statearr_90208;
})();
var statearr_90209_90250 = state_90174__$1;
(statearr_90209_90250[(2)] = null);

(statearr_90209_90250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (10))){
var inst_90118 = (state_90174[(12)]);
var inst_90117 = (state_90174[(14)]);
var inst_90115 = (state_90174[(15)]);
var inst_90116 = (state_90174[(16)]);
var inst_90123 = cljs.core._nth.call(null,inst_90116,inst_90118);
var inst_90124 = cljs.core.async.muxch_STAR_.call(null,inst_90123);
var inst_90125 = cljs.core.async.close_BANG_.call(null,inst_90124);
var inst_90126 = (inst_90118 + (1));
var tmp90204 = inst_90117;
var tmp90205 = inst_90115;
var tmp90206 = inst_90116;
var inst_90115__$1 = tmp90205;
var inst_90116__$1 = tmp90206;
var inst_90117__$1 = tmp90204;
var inst_90118__$1 = inst_90126;
var state_90174__$1 = (function (){var statearr_90210 = state_90174;
(statearr_90210[(17)] = inst_90125);

(statearr_90210[(12)] = inst_90118__$1);

(statearr_90210[(14)] = inst_90117__$1);

(statearr_90210[(15)] = inst_90115__$1);

(statearr_90210[(16)] = inst_90116__$1);

return statearr_90210;
})();
var statearr_90211_90251 = state_90174__$1;
(statearr_90211_90251[(2)] = null);

(statearr_90211_90251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (18))){
var inst_90144 = (state_90174[(2)]);
var state_90174__$1 = state_90174;
var statearr_90212_90252 = state_90174__$1;
(statearr_90212_90252[(2)] = inst_90144);

(statearr_90212_90252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90175 === (8))){
var inst_90118 = (state_90174[(12)]);
var inst_90117 = (state_90174[(14)]);
var inst_90120 = (inst_90118 < inst_90117);
var inst_90121 = inst_90120;
var state_90174__$1 = state_90174;
if(cljs.core.truth_(inst_90121)){
var statearr_90213_90253 = state_90174__$1;
(statearr_90213_90253[(1)] = (10));

} else {
var statearr_90214_90254 = state_90174__$1;
(statearr_90214_90254[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___90226,mults,ensure_mult,p))
;
return ((function (switch__25133__auto__,c__25154__auto___90226,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_90218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90218[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_90218[(1)] = (1));

return statearr_90218;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_90174){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_90174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e90219){if((e90219 instanceof Object)){
var ex__25137__auto__ = e90219;
var statearr_90220_90255 = state_90174;
(statearr_90220_90255[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90256 = state_90174;
state_90174 = G__90256;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_90174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_90174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___90226,mults,ensure_mult,p))
})();
var state__25156__auto__ = (function (){var statearr_90221 = f__25155__auto__.call(null);
(statearr_90221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___90226);

return statearr_90221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___90226,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args90257 = [];
var len__19357__auto___90260 = arguments.length;
var i__19358__auto___90261 = (0);
while(true){
if((i__19358__auto___90261 < len__19357__auto___90260)){
args90257.push((arguments[i__19358__auto___90261]));

var G__90262 = (i__19358__auto___90261 + (1));
i__19358__auto___90261 = G__90262;
continue;
} else {
}
break;
}

var G__90259 = args90257.length;
switch (G__90259) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90257.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args90264 = [];
var len__19357__auto___90267 = arguments.length;
var i__19358__auto___90268 = (0);
while(true){
if((i__19358__auto___90268 < len__19357__auto___90267)){
args90264.push((arguments[i__19358__auto___90268]));

var G__90269 = (i__19358__auto___90268 + (1));
i__19358__auto___90268 = G__90269;
continue;
} else {
}
break;
}

var G__90266 = args90264.length;
switch (G__90266) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90264.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args90271 = [];
var len__19357__auto___90342 = arguments.length;
var i__19358__auto___90343 = (0);
while(true){
if((i__19358__auto___90343 < len__19357__auto___90342)){
args90271.push((arguments[i__19358__auto___90343]));

var G__90344 = (i__19358__auto___90343 + (1));
i__19358__auto___90343 = G__90344;
continue;
} else {
}
break;
}

var G__90273 = args90271.length;
switch (G__90273) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90271.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25154__auto___90346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___90346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___90346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_90312){
var state_val_90313 = (state_90312[(1)]);
if((state_val_90313 === (7))){
var state_90312__$1 = state_90312;
var statearr_90314_90347 = state_90312__$1;
(statearr_90314_90347[(2)] = null);

(statearr_90314_90347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (1))){
var state_90312__$1 = state_90312;
var statearr_90315_90348 = state_90312__$1;
(statearr_90315_90348[(2)] = null);

(statearr_90315_90348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (4))){
var inst_90276 = (state_90312[(7)]);
var inst_90278 = (inst_90276 < cnt);
var state_90312__$1 = state_90312;
if(cljs.core.truth_(inst_90278)){
var statearr_90316_90349 = state_90312__$1;
(statearr_90316_90349[(1)] = (6));

} else {
var statearr_90317_90350 = state_90312__$1;
(statearr_90317_90350[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (15))){
var inst_90308 = (state_90312[(2)]);
var state_90312__$1 = state_90312;
var statearr_90318_90351 = state_90312__$1;
(statearr_90318_90351[(2)] = inst_90308);

(statearr_90318_90351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (13))){
var inst_90301 = cljs.core.async.close_BANG_.call(null,out);
var state_90312__$1 = state_90312;
var statearr_90319_90352 = state_90312__$1;
(statearr_90319_90352[(2)] = inst_90301);

(statearr_90319_90352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (6))){
var state_90312__$1 = state_90312;
var statearr_90320_90353 = state_90312__$1;
(statearr_90320_90353[(2)] = null);

(statearr_90320_90353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (3))){
var inst_90310 = (state_90312[(2)]);
var state_90312__$1 = state_90312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90312__$1,inst_90310);
} else {
if((state_val_90313 === (12))){
var inst_90298 = (state_90312[(8)]);
var inst_90298__$1 = (state_90312[(2)]);
var inst_90299 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_90298__$1);
var state_90312__$1 = (function (){var statearr_90321 = state_90312;
(statearr_90321[(8)] = inst_90298__$1);

return statearr_90321;
})();
if(cljs.core.truth_(inst_90299)){
var statearr_90322_90354 = state_90312__$1;
(statearr_90322_90354[(1)] = (13));

} else {
var statearr_90323_90355 = state_90312__$1;
(statearr_90323_90355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (2))){
var inst_90275 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_90276 = (0);
var state_90312__$1 = (function (){var statearr_90324 = state_90312;
(statearr_90324[(9)] = inst_90275);

(statearr_90324[(7)] = inst_90276);

return statearr_90324;
})();
var statearr_90325_90356 = state_90312__$1;
(statearr_90325_90356[(2)] = null);

(statearr_90325_90356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (11))){
var inst_90276 = (state_90312[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90312,(10),Object,null,(9));
var inst_90285 = chs__$1.call(null,inst_90276);
var inst_90286 = done.call(null,inst_90276);
var inst_90287 = cljs.core.async.take_BANG_.call(null,inst_90285,inst_90286);
var state_90312__$1 = state_90312;
var statearr_90326_90357 = state_90312__$1;
(statearr_90326_90357[(2)] = inst_90287);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90312__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (9))){
var inst_90276 = (state_90312[(7)]);
var inst_90289 = (state_90312[(2)]);
var inst_90290 = (inst_90276 + (1));
var inst_90276__$1 = inst_90290;
var state_90312__$1 = (function (){var statearr_90327 = state_90312;
(statearr_90327[(10)] = inst_90289);

(statearr_90327[(7)] = inst_90276__$1);

return statearr_90327;
})();
var statearr_90328_90358 = state_90312__$1;
(statearr_90328_90358[(2)] = null);

(statearr_90328_90358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (5))){
var inst_90296 = (state_90312[(2)]);
var state_90312__$1 = (function (){var statearr_90329 = state_90312;
(statearr_90329[(11)] = inst_90296);

return statearr_90329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90312__$1,(12),dchan);
} else {
if((state_val_90313 === (14))){
var inst_90298 = (state_90312[(8)]);
var inst_90303 = cljs.core.apply.call(null,f,inst_90298);
var state_90312__$1 = state_90312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90312__$1,(16),out,inst_90303);
} else {
if((state_val_90313 === (16))){
var inst_90305 = (state_90312[(2)]);
var state_90312__$1 = (function (){var statearr_90330 = state_90312;
(statearr_90330[(12)] = inst_90305);

return statearr_90330;
})();
var statearr_90331_90359 = state_90312__$1;
(statearr_90331_90359[(2)] = null);

(statearr_90331_90359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (10))){
var inst_90280 = (state_90312[(2)]);
var inst_90281 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_90312__$1 = (function (){var statearr_90332 = state_90312;
(statearr_90332[(13)] = inst_90280);

return statearr_90332;
})();
var statearr_90333_90360 = state_90312__$1;
(statearr_90333_90360[(2)] = inst_90281);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90312__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90313 === (8))){
var inst_90294 = (state_90312[(2)]);
var state_90312__$1 = state_90312;
var statearr_90334_90361 = state_90312__$1;
(statearr_90334_90361[(2)] = inst_90294);

(statearr_90334_90361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___90346,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25133__auto__,c__25154__auto___90346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_90338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90338[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_90338[(1)] = (1));

return statearr_90338;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_90312){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_90312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e90339){if((e90339 instanceof Object)){
var ex__25137__auto__ = e90339;
var statearr_90340_90362 = state_90312;
(statearr_90340_90362[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90363 = state_90312;
state_90312 = G__90363;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_90312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_90312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___90346,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25156__auto__ = (function (){var statearr_90341 = f__25155__auto__.call(null);
(statearr_90341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___90346);

return statearr_90341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___90346,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args90365 = [];
var len__19357__auto___90421 = arguments.length;
var i__19358__auto___90422 = (0);
while(true){
if((i__19358__auto___90422 < len__19357__auto___90421)){
args90365.push((arguments[i__19358__auto___90422]));

var G__90423 = (i__19358__auto___90422 + (1));
i__19358__auto___90422 = G__90423;
continue;
} else {
}
break;
}

var G__90367 = args90365.length;
switch (G__90367) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90365.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25154__auto___90425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___90425,out){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___90425,out){
return (function (state_90397){
var state_val_90398 = (state_90397[(1)]);
if((state_val_90398 === (7))){
var inst_90376 = (state_90397[(7)]);
var inst_90377 = (state_90397[(8)]);
var inst_90376__$1 = (state_90397[(2)]);
var inst_90377__$1 = cljs.core.nth.call(null,inst_90376__$1,(0),null);
var inst_90378 = cljs.core.nth.call(null,inst_90376__$1,(1),null);
var inst_90379 = (inst_90377__$1 == null);
var state_90397__$1 = (function (){var statearr_90399 = state_90397;
(statearr_90399[(9)] = inst_90378);

(statearr_90399[(7)] = inst_90376__$1);

(statearr_90399[(8)] = inst_90377__$1);

return statearr_90399;
})();
if(cljs.core.truth_(inst_90379)){
var statearr_90400_90426 = state_90397__$1;
(statearr_90400_90426[(1)] = (8));

} else {
var statearr_90401_90427 = state_90397__$1;
(statearr_90401_90427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (1))){
var inst_90368 = cljs.core.vec.call(null,chs);
var inst_90369 = inst_90368;
var state_90397__$1 = (function (){var statearr_90402 = state_90397;
(statearr_90402[(10)] = inst_90369);

return statearr_90402;
})();
var statearr_90403_90428 = state_90397__$1;
(statearr_90403_90428[(2)] = null);

(statearr_90403_90428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (4))){
var inst_90369 = (state_90397[(10)]);
var state_90397__$1 = state_90397;
return cljs.core.async.ioc_alts_BANG_.call(null,state_90397__$1,(7),inst_90369);
} else {
if((state_val_90398 === (6))){
var inst_90393 = (state_90397[(2)]);
var state_90397__$1 = state_90397;
var statearr_90404_90429 = state_90397__$1;
(statearr_90404_90429[(2)] = inst_90393);

(statearr_90404_90429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (3))){
var inst_90395 = (state_90397[(2)]);
var state_90397__$1 = state_90397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90397__$1,inst_90395);
} else {
if((state_val_90398 === (2))){
var inst_90369 = (state_90397[(10)]);
var inst_90371 = cljs.core.count.call(null,inst_90369);
var inst_90372 = (inst_90371 > (0));
var state_90397__$1 = state_90397;
if(cljs.core.truth_(inst_90372)){
var statearr_90406_90430 = state_90397__$1;
(statearr_90406_90430[(1)] = (4));

} else {
var statearr_90407_90431 = state_90397__$1;
(statearr_90407_90431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (11))){
var inst_90369 = (state_90397[(10)]);
var inst_90386 = (state_90397[(2)]);
var tmp90405 = inst_90369;
var inst_90369__$1 = tmp90405;
var state_90397__$1 = (function (){var statearr_90408 = state_90397;
(statearr_90408[(10)] = inst_90369__$1);

(statearr_90408[(11)] = inst_90386);

return statearr_90408;
})();
var statearr_90409_90432 = state_90397__$1;
(statearr_90409_90432[(2)] = null);

(statearr_90409_90432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (9))){
var inst_90377 = (state_90397[(8)]);
var state_90397__$1 = state_90397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90397__$1,(11),out,inst_90377);
} else {
if((state_val_90398 === (5))){
var inst_90391 = cljs.core.async.close_BANG_.call(null,out);
var state_90397__$1 = state_90397;
var statearr_90410_90433 = state_90397__$1;
(statearr_90410_90433[(2)] = inst_90391);

(statearr_90410_90433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (10))){
var inst_90389 = (state_90397[(2)]);
var state_90397__$1 = state_90397;
var statearr_90411_90434 = state_90397__$1;
(statearr_90411_90434[(2)] = inst_90389);

(statearr_90411_90434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (8))){
var inst_90378 = (state_90397[(9)]);
var inst_90369 = (state_90397[(10)]);
var inst_90376 = (state_90397[(7)]);
var inst_90377 = (state_90397[(8)]);
var inst_90381 = (function (){var cs = inst_90369;
var vec__90374 = inst_90376;
var v = inst_90377;
var c = inst_90378;
return ((function (cs,vec__90374,v,c,inst_90378,inst_90369,inst_90376,inst_90377,state_val_90398,c__25154__auto___90425,out){
return (function (p1__90364_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__90364_SHARP_);
});
;})(cs,vec__90374,v,c,inst_90378,inst_90369,inst_90376,inst_90377,state_val_90398,c__25154__auto___90425,out))
})();
var inst_90382 = cljs.core.filterv.call(null,inst_90381,inst_90369);
var inst_90369__$1 = inst_90382;
var state_90397__$1 = (function (){var statearr_90412 = state_90397;
(statearr_90412[(10)] = inst_90369__$1);

return statearr_90412;
})();
var statearr_90413_90435 = state_90397__$1;
(statearr_90413_90435[(2)] = null);

(statearr_90413_90435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___90425,out))
;
return ((function (switch__25133__auto__,c__25154__auto___90425,out){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_90417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90417[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_90417[(1)] = (1));

return statearr_90417;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_90397){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_90397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e90418){if((e90418 instanceof Object)){
var ex__25137__auto__ = e90418;
var statearr_90419_90436 = state_90397;
(statearr_90419_90436[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90437 = state_90397;
state_90397 = G__90437;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_90397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_90397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___90425,out))
})();
var state__25156__auto__ = (function (){var statearr_90420 = f__25155__auto__.call(null);
(statearr_90420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___90425);

return statearr_90420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___90425,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args90438 = [];
var len__19357__auto___90487 = arguments.length;
var i__19358__auto___90488 = (0);
while(true){
if((i__19358__auto___90488 < len__19357__auto___90487)){
args90438.push((arguments[i__19358__auto___90488]));

var G__90489 = (i__19358__auto___90488 + (1));
i__19358__auto___90488 = G__90489;
continue;
} else {
}
break;
}

var G__90440 = args90438.length;
switch (G__90440) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90438.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25154__auto___90491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___90491,out){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___90491,out){
return (function (state_90464){
var state_val_90465 = (state_90464[(1)]);
if((state_val_90465 === (7))){
var inst_90446 = (state_90464[(7)]);
var inst_90446__$1 = (state_90464[(2)]);
var inst_90447 = (inst_90446__$1 == null);
var inst_90448 = cljs.core.not.call(null,inst_90447);
var state_90464__$1 = (function (){var statearr_90466 = state_90464;
(statearr_90466[(7)] = inst_90446__$1);

return statearr_90466;
})();
if(inst_90448){
var statearr_90467_90492 = state_90464__$1;
(statearr_90467_90492[(1)] = (8));

} else {
var statearr_90468_90493 = state_90464__$1;
(statearr_90468_90493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90465 === (1))){
var inst_90441 = (0);
var state_90464__$1 = (function (){var statearr_90469 = state_90464;
(statearr_90469[(8)] = inst_90441);

return statearr_90469;
})();
var statearr_90470_90494 = state_90464__$1;
(statearr_90470_90494[(2)] = null);

(statearr_90470_90494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90465 === (4))){
var state_90464__$1 = state_90464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90464__$1,(7),ch);
} else {
if((state_val_90465 === (6))){
var inst_90459 = (state_90464[(2)]);
var state_90464__$1 = state_90464;
var statearr_90471_90495 = state_90464__$1;
(statearr_90471_90495[(2)] = inst_90459);

(statearr_90471_90495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90465 === (3))){
var inst_90461 = (state_90464[(2)]);
var inst_90462 = cljs.core.async.close_BANG_.call(null,out);
var state_90464__$1 = (function (){var statearr_90472 = state_90464;
(statearr_90472[(9)] = inst_90461);

return statearr_90472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90464__$1,inst_90462);
} else {
if((state_val_90465 === (2))){
var inst_90441 = (state_90464[(8)]);
var inst_90443 = (inst_90441 < n);
var state_90464__$1 = state_90464;
if(cljs.core.truth_(inst_90443)){
var statearr_90473_90496 = state_90464__$1;
(statearr_90473_90496[(1)] = (4));

} else {
var statearr_90474_90497 = state_90464__$1;
(statearr_90474_90497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90465 === (11))){
var inst_90441 = (state_90464[(8)]);
var inst_90451 = (state_90464[(2)]);
var inst_90452 = (inst_90441 + (1));
var inst_90441__$1 = inst_90452;
var state_90464__$1 = (function (){var statearr_90475 = state_90464;
(statearr_90475[(8)] = inst_90441__$1);

(statearr_90475[(10)] = inst_90451);

return statearr_90475;
})();
var statearr_90476_90498 = state_90464__$1;
(statearr_90476_90498[(2)] = null);

(statearr_90476_90498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90465 === (9))){
var state_90464__$1 = state_90464;
var statearr_90477_90499 = state_90464__$1;
(statearr_90477_90499[(2)] = null);

(statearr_90477_90499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90465 === (5))){
var state_90464__$1 = state_90464;
var statearr_90478_90500 = state_90464__$1;
(statearr_90478_90500[(2)] = null);

(statearr_90478_90500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90465 === (10))){
var inst_90456 = (state_90464[(2)]);
var state_90464__$1 = state_90464;
var statearr_90479_90501 = state_90464__$1;
(statearr_90479_90501[(2)] = inst_90456);

(statearr_90479_90501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90465 === (8))){
var inst_90446 = (state_90464[(7)]);
var state_90464__$1 = state_90464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90464__$1,(11),out,inst_90446);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___90491,out))
;
return ((function (switch__25133__auto__,c__25154__auto___90491,out){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_90483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90483[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_90483[(1)] = (1));

return statearr_90483;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_90464){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_90464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e90484){if((e90484 instanceof Object)){
var ex__25137__auto__ = e90484;
var statearr_90485_90502 = state_90464;
(statearr_90485_90502[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90503 = state_90464;
state_90464 = G__90503;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_90464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_90464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___90491,out))
})();
var state__25156__auto__ = (function (){var statearr_90486 = f__25155__auto__.call(null);
(statearr_90486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___90491);

return statearr_90486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___90491,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async90511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90511 = (function (map_LT_,f,ch,meta90512){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta90512 = meta90512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90513,meta90512__$1){
var self__ = this;
var _90513__$1 = this;
return (new cljs.core.async.t_cljs$core$async90511(self__.map_LT_,self__.f,self__.ch,meta90512__$1));
});

cljs.core.async.t_cljs$core$async90511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90513){
var self__ = this;
var _90513__$1 = this;
return self__.meta90512;
});

cljs.core.async.t_cljs$core$async90511.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async90511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90511.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async90511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async90514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90514 = (function (map_LT_,f,ch,meta90512,_,fn1,meta90515){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta90512 = meta90512;
this._ = _;
this.fn1 = fn1;
this.meta90515 = meta90515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_90516,meta90515__$1){
var self__ = this;
var _90516__$1 = this;
return (new cljs.core.async.t_cljs$core$async90514(self__.map_LT_,self__.f,self__.ch,self__.meta90512,self__._,self__.fn1,meta90515__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async90514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_90516){
var self__ = this;
var _90516__$1 = this;
return self__.meta90515;
});})(___$1))
;

cljs.core.async.t_cljs$core$async90514.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async90514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async90514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async90514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__90504_SHARP_){
return f1.call(null,(((p1__90504_SHARP_ == null))?null:self__.f.call(null,p1__90504_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async90514.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90512","meta90512",-1803854636,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async90511","cljs.core.async/t_cljs$core$async90511",605082459,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta90515","meta90515",2044518435,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async90514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90514";

cljs.core.async.t_cljs$core$async90514.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async90514");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async90514 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async90514(map_LT___$1,f__$1,ch__$1,meta90512__$1,___$2,fn1__$1,meta90515){
return (new cljs.core.async.t_cljs$core$async90514(map_LT___$1,f__$1,ch__$1,meta90512__$1,___$2,fn1__$1,meta90515));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async90514(self__.map_LT_,self__.f,self__.ch,self__.meta90512,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18286__auto__ = ret;
if(cljs.core.truth_(and__18286__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18286__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async90511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async90511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async90511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90512","meta90512",-1803854636,null)], null);
});

cljs.core.async.t_cljs$core$async90511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90511";

cljs.core.async.t_cljs$core$async90511.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async90511");
});

cljs.core.async.__GT_t_cljs$core$async90511 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async90511(map_LT___$1,f__$1,ch__$1,meta90512){
return (new cljs.core.async.t_cljs$core$async90511(map_LT___$1,f__$1,ch__$1,meta90512));
});

}

return (new cljs.core.async.t_cljs$core$async90511(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async90520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90520 = (function (map_GT_,f,ch,meta90521){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta90521 = meta90521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90522,meta90521__$1){
var self__ = this;
var _90522__$1 = this;
return (new cljs.core.async.t_cljs$core$async90520(self__.map_GT_,self__.f,self__.ch,meta90521__$1));
});

cljs.core.async.t_cljs$core$async90520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90522){
var self__ = this;
var _90522__$1 = this;
return self__.meta90521;
});

cljs.core.async.t_cljs$core$async90520.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async90520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90520.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async90520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async90520.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async90520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async90520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90521","meta90521",594182110,null)], null);
});

cljs.core.async.t_cljs$core$async90520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90520";

cljs.core.async.t_cljs$core$async90520.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async90520");
});

cljs.core.async.__GT_t_cljs$core$async90520 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async90520(map_GT___$1,f__$1,ch__$1,meta90521){
return (new cljs.core.async.t_cljs$core$async90520(map_GT___$1,f__$1,ch__$1,meta90521));
});

}

return (new cljs.core.async.t_cljs$core$async90520(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async90526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90526 = (function (filter_GT_,p,ch,meta90527){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta90527 = meta90527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90528,meta90527__$1){
var self__ = this;
var _90528__$1 = this;
return (new cljs.core.async.t_cljs$core$async90526(self__.filter_GT_,self__.p,self__.ch,meta90527__$1));
});

cljs.core.async.t_cljs$core$async90526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90528){
var self__ = this;
var _90528__$1 = this;
return self__.meta90527;
});

cljs.core.async.t_cljs$core$async90526.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async90526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90526.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90526.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async90526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async90526.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async90526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async90526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90527","meta90527",1773082227,null)], null);
});

cljs.core.async.t_cljs$core$async90526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90526";

cljs.core.async.t_cljs$core$async90526.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"cljs.core.async/t_cljs$core$async90526");
});

cljs.core.async.__GT_t_cljs$core$async90526 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async90526(filter_GT___$1,p__$1,ch__$1,meta90527){
return (new cljs.core.async.t_cljs$core$async90526(filter_GT___$1,p__$1,ch__$1,meta90527));
});

}

return (new cljs.core.async.t_cljs$core$async90526(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args90529 = [];
var len__19357__auto___90573 = arguments.length;
var i__19358__auto___90574 = (0);
while(true){
if((i__19358__auto___90574 < len__19357__auto___90573)){
args90529.push((arguments[i__19358__auto___90574]));

var G__90575 = (i__19358__auto___90574 + (1));
i__19358__auto___90574 = G__90575;
continue;
} else {
}
break;
}

var G__90531 = args90529.length;
switch (G__90531) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90529.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25154__auto___90577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___90577,out){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___90577,out){
return (function (state_90552){
var state_val_90553 = (state_90552[(1)]);
if((state_val_90553 === (7))){
var inst_90548 = (state_90552[(2)]);
var state_90552__$1 = state_90552;
var statearr_90554_90578 = state_90552__$1;
(statearr_90554_90578[(2)] = inst_90548);

(statearr_90554_90578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90553 === (1))){
var state_90552__$1 = state_90552;
var statearr_90555_90579 = state_90552__$1;
(statearr_90555_90579[(2)] = null);

(statearr_90555_90579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90553 === (4))){
var inst_90534 = (state_90552[(7)]);
var inst_90534__$1 = (state_90552[(2)]);
var inst_90535 = (inst_90534__$1 == null);
var state_90552__$1 = (function (){var statearr_90556 = state_90552;
(statearr_90556[(7)] = inst_90534__$1);

return statearr_90556;
})();
if(cljs.core.truth_(inst_90535)){
var statearr_90557_90580 = state_90552__$1;
(statearr_90557_90580[(1)] = (5));

} else {
var statearr_90558_90581 = state_90552__$1;
(statearr_90558_90581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90553 === (6))){
var inst_90534 = (state_90552[(7)]);
var inst_90539 = p.call(null,inst_90534);
var state_90552__$1 = state_90552;
if(cljs.core.truth_(inst_90539)){
var statearr_90559_90582 = state_90552__$1;
(statearr_90559_90582[(1)] = (8));

} else {
var statearr_90560_90583 = state_90552__$1;
(statearr_90560_90583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90553 === (3))){
var inst_90550 = (state_90552[(2)]);
var state_90552__$1 = state_90552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90552__$1,inst_90550);
} else {
if((state_val_90553 === (2))){
var state_90552__$1 = state_90552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90552__$1,(4),ch);
} else {
if((state_val_90553 === (11))){
var inst_90542 = (state_90552[(2)]);
var state_90552__$1 = state_90552;
var statearr_90561_90584 = state_90552__$1;
(statearr_90561_90584[(2)] = inst_90542);

(statearr_90561_90584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90553 === (9))){
var state_90552__$1 = state_90552;
var statearr_90562_90585 = state_90552__$1;
(statearr_90562_90585[(2)] = null);

(statearr_90562_90585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90553 === (5))){
var inst_90537 = cljs.core.async.close_BANG_.call(null,out);
var state_90552__$1 = state_90552;
var statearr_90563_90586 = state_90552__$1;
(statearr_90563_90586[(2)] = inst_90537);

(statearr_90563_90586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90553 === (10))){
var inst_90545 = (state_90552[(2)]);
var state_90552__$1 = (function (){var statearr_90564 = state_90552;
(statearr_90564[(8)] = inst_90545);

return statearr_90564;
})();
var statearr_90565_90587 = state_90552__$1;
(statearr_90565_90587[(2)] = null);

(statearr_90565_90587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90553 === (8))){
var inst_90534 = (state_90552[(7)]);
var state_90552__$1 = state_90552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90552__$1,(11),out,inst_90534);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___90577,out))
;
return ((function (switch__25133__auto__,c__25154__auto___90577,out){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_90569 = [null,null,null,null,null,null,null,null,null];
(statearr_90569[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_90569[(1)] = (1));

return statearr_90569;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_90552){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_90552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e90570){if((e90570 instanceof Object)){
var ex__25137__auto__ = e90570;
var statearr_90571_90588 = state_90552;
(statearr_90571_90588[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90589 = state_90552;
state_90552 = G__90589;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_90552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_90552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___90577,out))
})();
var state__25156__auto__ = (function (){var statearr_90572 = f__25155__auto__.call(null);
(statearr_90572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___90577);

return statearr_90572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___90577,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args90590 = [];
var len__19357__auto___90593 = arguments.length;
var i__19358__auto___90594 = (0);
while(true){
if((i__19358__auto___90594 < len__19357__auto___90593)){
args90590.push((arguments[i__19358__auto___90594]));

var G__90595 = (i__19358__auto___90594 + (1));
i__19358__auto___90594 = G__90595;
continue;
} else {
}
break;
}

var G__90592 = args90590.length;
switch (G__90592) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90590.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__){
return (function (state_90762){
var state_val_90763 = (state_90762[(1)]);
if((state_val_90763 === (7))){
var inst_90758 = (state_90762[(2)]);
var state_90762__$1 = state_90762;
var statearr_90764_90805 = state_90762__$1;
(statearr_90764_90805[(2)] = inst_90758);

(statearr_90764_90805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (20))){
var inst_90728 = (state_90762[(7)]);
var inst_90739 = (state_90762[(2)]);
var inst_90740 = cljs.core.next.call(null,inst_90728);
var inst_90714 = inst_90740;
var inst_90715 = null;
var inst_90716 = (0);
var inst_90717 = (0);
var state_90762__$1 = (function (){var statearr_90765 = state_90762;
(statearr_90765[(8)] = inst_90714);

(statearr_90765[(9)] = inst_90715);

(statearr_90765[(10)] = inst_90739);

(statearr_90765[(11)] = inst_90716);

(statearr_90765[(12)] = inst_90717);

return statearr_90765;
})();
var statearr_90766_90806 = state_90762__$1;
(statearr_90766_90806[(2)] = null);

(statearr_90766_90806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (1))){
var state_90762__$1 = state_90762;
var statearr_90767_90807 = state_90762__$1;
(statearr_90767_90807[(2)] = null);

(statearr_90767_90807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (4))){
var inst_90703 = (state_90762[(13)]);
var inst_90703__$1 = (state_90762[(2)]);
var inst_90704 = (inst_90703__$1 == null);
var state_90762__$1 = (function (){var statearr_90768 = state_90762;
(statearr_90768[(13)] = inst_90703__$1);

return statearr_90768;
})();
if(cljs.core.truth_(inst_90704)){
var statearr_90769_90808 = state_90762__$1;
(statearr_90769_90808[(1)] = (5));

} else {
var statearr_90770_90809 = state_90762__$1;
(statearr_90770_90809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (15))){
var state_90762__$1 = state_90762;
var statearr_90774_90810 = state_90762__$1;
(statearr_90774_90810[(2)] = null);

(statearr_90774_90810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (21))){
var state_90762__$1 = state_90762;
var statearr_90775_90811 = state_90762__$1;
(statearr_90775_90811[(2)] = null);

(statearr_90775_90811[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (13))){
var inst_90714 = (state_90762[(8)]);
var inst_90715 = (state_90762[(9)]);
var inst_90716 = (state_90762[(11)]);
var inst_90717 = (state_90762[(12)]);
var inst_90724 = (state_90762[(2)]);
var inst_90725 = (inst_90717 + (1));
var tmp90771 = inst_90714;
var tmp90772 = inst_90715;
var tmp90773 = inst_90716;
var inst_90714__$1 = tmp90771;
var inst_90715__$1 = tmp90772;
var inst_90716__$1 = tmp90773;
var inst_90717__$1 = inst_90725;
var state_90762__$1 = (function (){var statearr_90776 = state_90762;
(statearr_90776[(8)] = inst_90714__$1);

(statearr_90776[(9)] = inst_90715__$1);

(statearr_90776[(11)] = inst_90716__$1);

(statearr_90776[(14)] = inst_90724);

(statearr_90776[(12)] = inst_90717__$1);

return statearr_90776;
})();
var statearr_90777_90812 = state_90762__$1;
(statearr_90777_90812[(2)] = null);

(statearr_90777_90812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (22))){
var state_90762__$1 = state_90762;
var statearr_90778_90813 = state_90762__$1;
(statearr_90778_90813[(2)] = null);

(statearr_90778_90813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (6))){
var inst_90703 = (state_90762[(13)]);
var inst_90712 = f.call(null,inst_90703);
var inst_90713 = cljs.core.seq.call(null,inst_90712);
var inst_90714 = inst_90713;
var inst_90715 = null;
var inst_90716 = (0);
var inst_90717 = (0);
var state_90762__$1 = (function (){var statearr_90779 = state_90762;
(statearr_90779[(8)] = inst_90714);

(statearr_90779[(9)] = inst_90715);

(statearr_90779[(11)] = inst_90716);

(statearr_90779[(12)] = inst_90717);

return statearr_90779;
})();
var statearr_90780_90814 = state_90762__$1;
(statearr_90780_90814[(2)] = null);

(statearr_90780_90814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (17))){
var inst_90728 = (state_90762[(7)]);
var inst_90732 = cljs.core.chunk_first.call(null,inst_90728);
var inst_90733 = cljs.core.chunk_rest.call(null,inst_90728);
var inst_90734 = cljs.core.count.call(null,inst_90732);
var inst_90714 = inst_90733;
var inst_90715 = inst_90732;
var inst_90716 = inst_90734;
var inst_90717 = (0);
var state_90762__$1 = (function (){var statearr_90781 = state_90762;
(statearr_90781[(8)] = inst_90714);

(statearr_90781[(9)] = inst_90715);

(statearr_90781[(11)] = inst_90716);

(statearr_90781[(12)] = inst_90717);

return statearr_90781;
})();
var statearr_90782_90815 = state_90762__$1;
(statearr_90782_90815[(2)] = null);

(statearr_90782_90815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (3))){
var inst_90760 = (state_90762[(2)]);
var state_90762__$1 = state_90762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90762__$1,inst_90760);
} else {
if((state_val_90763 === (12))){
var inst_90748 = (state_90762[(2)]);
var state_90762__$1 = state_90762;
var statearr_90783_90816 = state_90762__$1;
(statearr_90783_90816[(2)] = inst_90748);

(statearr_90783_90816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (2))){
var state_90762__$1 = state_90762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90762__$1,(4),in$);
} else {
if((state_val_90763 === (23))){
var inst_90756 = (state_90762[(2)]);
var state_90762__$1 = state_90762;
var statearr_90784_90817 = state_90762__$1;
(statearr_90784_90817[(2)] = inst_90756);

(statearr_90784_90817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (19))){
var inst_90743 = (state_90762[(2)]);
var state_90762__$1 = state_90762;
var statearr_90785_90818 = state_90762__$1;
(statearr_90785_90818[(2)] = inst_90743);

(statearr_90785_90818[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (11))){
var inst_90714 = (state_90762[(8)]);
var inst_90728 = (state_90762[(7)]);
var inst_90728__$1 = cljs.core.seq.call(null,inst_90714);
var state_90762__$1 = (function (){var statearr_90786 = state_90762;
(statearr_90786[(7)] = inst_90728__$1);

return statearr_90786;
})();
if(inst_90728__$1){
var statearr_90787_90819 = state_90762__$1;
(statearr_90787_90819[(1)] = (14));

} else {
var statearr_90788_90820 = state_90762__$1;
(statearr_90788_90820[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (9))){
var inst_90750 = (state_90762[(2)]);
var inst_90751 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_90762__$1 = (function (){var statearr_90789 = state_90762;
(statearr_90789[(15)] = inst_90750);

return statearr_90789;
})();
if(cljs.core.truth_(inst_90751)){
var statearr_90790_90821 = state_90762__$1;
(statearr_90790_90821[(1)] = (21));

} else {
var statearr_90791_90822 = state_90762__$1;
(statearr_90791_90822[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (5))){
var inst_90706 = cljs.core.async.close_BANG_.call(null,out);
var state_90762__$1 = state_90762;
var statearr_90792_90823 = state_90762__$1;
(statearr_90792_90823[(2)] = inst_90706);

(statearr_90792_90823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (14))){
var inst_90728 = (state_90762[(7)]);
var inst_90730 = cljs.core.chunked_seq_QMARK_.call(null,inst_90728);
var state_90762__$1 = state_90762;
if(inst_90730){
var statearr_90793_90824 = state_90762__$1;
(statearr_90793_90824[(1)] = (17));

} else {
var statearr_90794_90825 = state_90762__$1;
(statearr_90794_90825[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (16))){
var inst_90746 = (state_90762[(2)]);
var state_90762__$1 = state_90762;
var statearr_90795_90826 = state_90762__$1;
(statearr_90795_90826[(2)] = inst_90746);

(statearr_90795_90826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90763 === (10))){
var inst_90715 = (state_90762[(9)]);
var inst_90717 = (state_90762[(12)]);
var inst_90722 = cljs.core._nth.call(null,inst_90715,inst_90717);
var state_90762__$1 = state_90762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90762__$1,(13),out,inst_90722);
} else {
if((state_val_90763 === (18))){
var inst_90728 = (state_90762[(7)]);
var inst_90737 = cljs.core.first.call(null,inst_90728);
var state_90762__$1 = state_90762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90762__$1,(20),out,inst_90737);
} else {
if((state_val_90763 === (8))){
var inst_90716 = (state_90762[(11)]);
var inst_90717 = (state_90762[(12)]);
var inst_90719 = (inst_90717 < inst_90716);
var inst_90720 = inst_90719;
var state_90762__$1 = state_90762;
if(cljs.core.truth_(inst_90720)){
var statearr_90796_90827 = state_90762__$1;
(statearr_90796_90827[(1)] = (10));

} else {
var statearr_90797_90828 = state_90762__$1;
(statearr_90797_90828[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto__))
;
return ((function (switch__25133__auto__,c__25154__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25134__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25134__auto____0 = (function (){
var statearr_90801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90801[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25134__auto__);

(statearr_90801[(1)] = (1));

return statearr_90801;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25134__auto____1 = (function (state_90762){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_90762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e90802){if((e90802 instanceof Object)){
var ex__25137__auto__ = e90802;
var statearr_90803_90829 = state_90762;
(statearr_90803_90829[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90830 = state_90762;
state_90762 = G__90830;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25134__auto__ = function(state_90762){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25134__auto____1.call(this,state_90762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25134__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25134__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__))
})();
var state__25156__auto__ = (function (){var statearr_90804 = f__25155__auto__.call(null);
(statearr_90804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_90804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__))
);

return c__25154__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args90831 = [];
var len__19357__auto___90834 = arguments.length;
var i__19358__auto___90835 = (0);
while(true){
if((i__19358__auto___90835 < len__19357__auto___90834)){
args90831.push((arguments[i__19358__auto___90835]));

var G__90836 = (i__19358__auto___90835 + (1));
i__19358__auto___90835 = G__90836;
continue;
} else {
}
break;
}

var G__90833 = args90831.length;
switch (G__90833) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90831.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args90838 = [];
var len__19357__auto___90841 = arguments.length;
var i__19358__auto___90842 = (0);
while(true){
if((i__19358__auto___90842 < len__19357__auto___90841)){
args90838.push((arguments[i__19358__auto___90842]));

var G__90843 = (i__19358__auto___90842 + (1));
i__19358__auto___90842 = G__90843;
continue;
} else {
}
break;
}

var G__90840 = args90838.length;
switch (G__90840) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90838.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args90845 = [];
var len__19357__auto___90896 = arguments.length;
var i__19358__auto___90897 = (0);
while(true){
if((i__19358__auto___90897 < len__19357__auto___90896)){
args90845.push((arguments[i__19358__auto___90897]));

var G__90898 = (i__19358__auto___90897 + (1));
i__19358__auto___90897 = G__90898;
continue;
} else {
}
break;
}

var G__90847 = args90845.length;
switch (G__90847) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90845.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25154__auto___90900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___90900,out){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___90900,out){
return (function (state_90871){
var state_val_90872 = (state_90871[(1)]);
if((state_val_90872 === (7))){
var inst_90866 = (state_90871[(2)]);
var state_90871__$1 = state_90871;
var statearr_90873_90901 = state_90871__$1;
(statearr_90873_90901[(2)] = inst_90866);

(statearr_90873_90901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90872 === (1))){
var inst_90848 = null;
var state_90871__$1 = (function (){var statearr_90874 = state_90871;
(statearr_90874[(7)] = inst_90848);

return statearr_90874;
})();
var statearr_90875_90902 = state_90871__$1;
(statearr_90875_90902[(2)] = null);

(statearr_90875_90902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90872 === (4))){
var inst_90851 = (state_90871[(8)]);
var inst_90851__$1 = (state_90871[(2)]);
var inst_90852 = (inst_90851__$1 == null);
var inst_90853 = cljs.core.not.call(null,inst_90852);
var state_90871__$1 = (function (){var statearr_90876 = state_90871;
(statearr_90876[(8)] = inst_90851__$1);

return statearr_90876;
})();
if(inst_90853){
var statearr_90877_90903 = state_90871__$1;
(statearr_90877_90903[(1)] = (5));

} else {
var statearr_90878_90904 = state_90871__$1;
(statearr_90878_90904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90872 === (6))){
var state_90871__$1 = state_90871;
var statearr_90879_90905 = state_90871__$1;
(statearr_90879_90905[(2)] = null);

(statearr_90879_90905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90872 === (3))){
var inst_90868 = (state_90871[(2)]);
var inst_90869 = cljs.core.async.close_BANG_.call(null,out);
var state_90871__$1 = (function (){var statearr_90880 = state_90871;
(statearr_90880[(9)] = inst_90868);

return statearr_90880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90871__$1,inst_90869);
} else {
if((state_val_90872 === (2))){
var state_90871__$1 = state_90871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90871__$1,(4),ch);
} else {
if((state_val_90872 === (11))){
var inst_90851 = (state_90871[(8)]);
var inst_90860 = (state_90871[(2)]);
var inst_90848 = inst_90851;
var state_90871__$1 = (function (){var statearr_90881 = state_90871;
(statearr_90881[(7)] = inst_90848);

(statearr_90881[(10)] = inst_90860);

return statearr_90881;
})();
var statearr_90882_90906 = state_90871__$1;
(statearr_90882_90906[(2)] = null);

(statearr_90882_90906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90872 === (9))){
var inst_90851 = (state_90871[(8)]);
var state_90871__$1 = state_90871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90871__$1,(11),out,inst_90851);
} else {
if((state_val_90872 === (5))){
var inst_90848 = (state_90871[(7)]);
var inst_90851 = (state_90871[(8)]);
var inst_90855 = cljs.core._EQ_.call(null,inst_90851,inst_90848);
var state_90871__$1 = state_90871;
if(inst_90855){
var statearr_90884_90907 = state_90871__$1;
(statearr_90884_90907[(1)] = (8));

} else {
var statearr_90885_90908 = state_90871__$1;
(statearr_90885_90908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90872 === (10))){
var inst_90863 = (state_90871[(2)]);
var state_90871__$1 = state_90871;
var statearr_90886_90909 = state_90871__$1;
(statearr_90886_90909[(2)] = inst_90863);

(statearr_90886_90909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90872 === (8))){
var inst_90848 = (state_90871[(7)]);
var tmp90883 = inst_90848;
var inst_90848__$1 = tmp90883;
var state_90871__$1 = (function (){var statearr_90887 = state_90871;
(statearr_90887[(7)] = inst_90848__$1);

return statearr_90887;
})();
var statearr_90888_90910 = state_90871__$1;
(statearr_90888_90910[(2)] = null);

(statearr_90888_90910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___90900,out))
;
return ((function (switch__25133__auto__,c__25154__auto___90900,out){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_90892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90892[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_90892[(1)] = (1));

return statearr_90892;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_90871){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_90871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e90893){if((e90893 instanceof Object)){
var ex__25137__auto__ = e90893;
var statearr_90894_90911 = state_90871;
(statearr_90894_90911[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90912 = state_90871;
state_90871 = G__90912;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_90871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_90871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___90900,out))
})();
var state__25156__auto__ = (function (){var statearr_90895 = f__25155__auto__.call(null);
(statearr_90895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___90900);

return statearr_90895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___90900,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args90913 = [];
var len__19357__auto___90983 = arguments.length;
var i__19358__auto___90984 = (0);
while(true){
if((i__19358__auto___90984 < len__19357__auto___90983)){
args90913.push((arguments[i__19358__auto___90984]));

var G__90985 = (i__19358__auto___90984 + (1));
i__19358__auto___90984 = G__90985;
continue;
} else {
}
break;
}

var G__90915 = args90913.length;
switch (G__90915) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90913.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25154__auto___90987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___90987,out){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___90987,out){
return (function (state_90953){
var state_val_90954 = (state_90953[(1)]);
if((state_val_90954 === (7))){
var inst_90949 = (state_90953[(2)]);
var state_90953__$1 = state_90953;
var statearr_90955_90988 = state_90953__$1;
(statearr_90955_90988[(2)] = inst_90949);

(statearr_90955_90988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (1))){
var inst_90916 = (new Array(n));
var inst_90917 = inst_90916;
var inst_90918 = (0);
var state_90953__$1 = (function (){var statearr_90956 = state_90953;
(statearr_90956[(7)] = inst_90918);

(statearr_90956[(8)] = inst_90917);

return statearr_90956;
})();
var statearr_90957_90989 = state_90953__$1;
(statearr_90957_90989[(2)] = null);

(statearr_90957_90989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (4))){
var inst_90921 = (state_90953[(9)]);
var inst_90921__$1 = (state_90953[(2)]);
var inst_90922 = (inst_90921__$1 == null);
var inst_90923 = cljs.core.not.call(null,inst_90922);
var state_90953__$1 = (function (){var statearr_90958 = state_90953;
(statearr_90958[(9)] = inst_90921__$1);

return statearr_90958;
})();
if(inst_90923){
var statearr_90959_90990 = state_90953__$1;
(statearr_90959_90990[(1)] = (5));

} else {
var statearr_90960_90991 = state_90953__$1;
(statearr_90960_90991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (15))){
var inst_90943 = (state_90953[(2)]);
var state_90953__$1 = state_90953;
var statearr_90961_90992 = state_90953__$1;
(statearr_90961_90992[(2)] = inst_90943);

(statearr_90961_90992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (13))){
var state_90953__$1 = state_90953;
var statearr_90962_90993 = state_90953__$1;
(statearr_90962_90993[(2)] = null);

(statearr_90962_90993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (6))){
var inst_90918 = (state_90953[(7)]);
var inst_90939 = (inst_90918 > (0));
var state_90953__$1 = state_90953;
if(cljs.core.truth_(inst_90939)){
var statearr_90963_90994 = state_90953__$1;
(statearr_90963_90994[(1)] = (12));

} else {
var statearr_90964_90995 = state_90953__$1;
(statearr_90964_90995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (3))){
var inst_90951 = (state_90953[(2)]);
var state_90953__$1 = state_90953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90953__$1,inst_90951);
} else {
if((state_val_90954 === (12))){
var inst_90917 = (state_90953[(8)]);
var inst_90941 = cljs.core.vec.call(null,inst_90917);
var state_90953__$1 = state_90953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90953__$1,(15),out,inst_90941);
} else {
if((state_val_90954 === (2))){
var state_90953__$1 = state_90953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90953__$1,(4),ch);
} else {
if((state_val_90954 === (11))){
var inst_90933 = (state_90953[(2)]);
var inst_90934 = (new Array(n));
var inst_90917 = inst_90934;
var inst_90918 = (0);
var state_90953__$1 = (function (){var statearr_90965 = state_90953;
(statearr_90965[(10)] = inst_90933);

(statearr_90965[(7)] = inst_90918);

(statearr_90965[(8)] = inst_90917);

return statearr_90965;
})();
var statearr_90966_90996 = state_90953__$1;
(statearr_90966_90996[(2)] = null);

(statearr_90966_90996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (9))){
var inst_90917 = (state_90953[(8)]);
var inst_90931 = cljs.core.vec.call(null,inst_90917);
var state_90953__$1 = state_90953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90953__$1,(11),out,inst_90931);
} else {
if((state_val_90954 === (5))){
var inst_90921 = (state_90953[(9)]);
var inst_90918 = (state_90953[(7)]);
var inst_90917 = (state_90953[(8)]);
var inst_90926 = (state_90953[(11)]);
var inst_90925 = (inst_90917[inst_90918] = inst_90921);
var inst_90926__$1 = (inst_90918 + (1));
var inst_90927 = (inst_90926__$1 < n);
var state_90953__$1 = (function (){var statearr_90967 = state_90953;
(statearr_90967[(11)] = inst_90926__$1);

(statearr_90967[(12)] = inst_90925);

return statearr_90967;
})();
if(cljs.core.truth_(inst_90927)){
var statearr_90968_90997 = state_90953__$1;
(statearr_90968_90997[(1)] = (8));

} else {
var statearr_90969_90998 = state_90953__$1;
(statearr_90969_90998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (14))){
var inst_90946 = (state_90953[(2)]);
var inst_90947 = cljs.core.async.close_BANG_.call(null,out);
var state_90953__$1 = (function (){var statearr_90971 = state_90953;
(statearr_90971[(13)] = inst_90946);

return statearr_90971;
})();
var statearr_90972_90999 = state_90953__$1;
(statearr_90972_90999[(2)] = inst_90947);

(statearr_90972_90999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (10))){
var inst_90937 = (state_90953[(2)]);
var state_90953__$1 = state_90953;
var statearr_90973_91000 = state_90953__$1;
(statearr_90973_91000[(2)] = inst_90937);

(statearr_90973_91000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90954 === (8))){
var inst_90917 = (state_90953[(8)]);
var inst_90926 = (state_90953[(11)]);
var tmp90970 = inst_90917;
var inst_90917__$1 = tmp90970;
var inst_90918 = inst_90926;
var state_90953__$1 = (function (){var statearr_90974 = state_90953;
(statearr_90974[(7)] = inst_90918);

(statearr_90974[(8)] = inst_90917__$1);

return statearr_90974;
})();
var statearr_90975_91001 = state_90953__$1;
(statearr_90975_91001[(2)] = null);

(statearr_90975_91001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___90987,out))
;
return ((function (switch__25133__auto__,c__25154__auto___90987,out){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_90979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90979[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_90979[(1)] = (1));

return statearr_90979;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_90953){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_90953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e90980){if((e90980 instanceof Object)){
var ex__25137__auto__ = e90980;
var statearr_90981_91002 = state_90953;
(statearr_90981_91002[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91003 = state_90953;
state_90953 = G__91003;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_90953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_90953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___90987,out))
})();
var state__25156__auto__ = (function (){var statearr_90982 = f__25155__auto__.call(null);
(statearr_90982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___90987);

return statearr_90982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___90987,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args91004 = [];
var len__19357__auto___91078 = arguments.length;
var i__19358__auto___91079 = (0);
while(true){
if((i__19358__auto___91079 < len__19357__auto___91078)){
args91004.push((arguments[i__19358__auto___91079]));

var G__91080 = (i__19358__auto___91079 + (1));
i__19358__auto___91079 = G__91080;
continue;
} else {
}
break;
}

var G__91006 = args91004.length;
switch (G__91006) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91004.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25154__auto___91082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___91082,out){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___91082,out){
return (function (state_91048){
var state_val_91049 = (state_91048[(1)]);
if((state_val_91049 === (7))){
var inst_91044 = (state_91048[(2)]);
var state_91048__$1 = state_91048;
var statearr_91050_91083 = state_91048__$1;
(statearr_91050_91083[(2)] = inst_91044);

(statearr_91050_91083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (1))){
var inst_91007 = [];
var inst_91008 = inst_91007;
var inst_91009 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_91048__$1 = (function (){var statearr_91051 = state_91048;
(statearr_91051[(7)] = inst_91009);

(statearr_91051[(8)] = inst_91008);

return statearr_91051;
})();
var statearr_91052_91084 = state_91048__$1;
(statearr_91052_91084[(2)] = null);

(statearr_91052_91084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (4))){
var inst_91012 = (state_91048[(9)]);
var inst_91012__$1 = (state_91048[(2)]);
var inst_91013 = (inst_91012__$1 == null);
var inst_91014 = cljs.core.not.call(null,inst_91013);
var state_91048__$1 = (function (){var statearr_91053 = state_91048;
(statearr_91053[(9)] = inst_91012__$1);

return statearr_91053;
})();
if(inst_91014){
var statearr_91054_91085 = state_91048__$1;
(statearr_91054_91085[(1)] = (5));

} else {
var statearr_91055_91086 = state_91048__$1;
(statearr_91055_91086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (15))){
var inst_91038 = (state_91048[(2)]);
var state_91048__$1 = state_91048;
var statearr_91056_91087 = state_91048__$1;
(statearr_91056_91087[(2)] = inst_91038);

(statearr_91056_91087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (13))){
var state_91048__$1 = state_91048;
var statearr_91057_91088 = state_91048__$1;
(statearr_91057_91088[(2)] = null);

(statearr_91057_91088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (6))){
var inst_91008 = (state_91048[(8)]);
var inst_91033 = inst_91008.length;
var inst_91034 = (inst_91033 > (0));
var state_91048__$1 = state_91048;
if(cljs.core.truth_(inst_91034)){
var statearr_91058_91089 = state_91048__$1;
(statearr_91058_91089[(1)] = (12));

} else {
var statearr_91059_91090 = state_91048__$1;
(statearr_91059_91090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (3))){
var inst_91046 = (state_91048[(2)]);
var state_91048__$1 = state_91048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91048__$1,inst_91046);
} else {
if((state_val_91049 === (12))){
var inst_91008 = (state_91048[(8)]);
var inst_91036 = cljs.core.vec.call(null,inst_91008);
var state_91048__$1 = state_91048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91048__$1,(15),out,inst_91036);
} else {
if((state_val_91049 === (2))){
var state_91048__$1 = state_91048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91048__$1,(4),ch);
} else {
if((state_val_91049 === (11))){
var inst_91016 = (state_91048[(10)]);
var inst_91012 = (state_91048[(9)]);
var inst_91026 = (state_91048[(2)]);
var inst_91027 = [];
var inst_91028 = inst_91027.push(inst_91012);
var inst_91008 = inst_91027;
var inst_91009 = inst_91016;
var state_91048__$1 = (function (){var statearr_91060 = state_91048;
(statearr_91060[(7)] = inst_91009);

(statearr_91060[(11)] = inst_91026);

(statearr_91060[(12)] = inst_91028);

(statearr_91060[(8)] = inst_91008);

return statearr_91060;
})();
var statearr_91061_91091 = state_91048__$1;
(statearr_91061_91091[(2)] = null);

(statearr_91061_91091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (9))){
var inst_91008 = (state_91048[(8)]);
var inst_91024 = cljs.core.vec.call(null,inst_91008);
var state_91048__$1 = state_91048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91048__$1,(11),out,inst_91024);
} else {
if((state_val_91049 === (5))){
var inst_91009 = (state_91048[(7)]);
var inst_91016 = (state_91048[(10)]);
var inst_91012 = (state_91048[(9)]);
var inst_91016__$1 = f.call(null,inst_91012);
var inst_91017 = cljs.core._EQ_.call(null,inst_91016__$1,inst_91009);
var inst_91018 = cljs.core.keyword_identical_QMARK_.call(null,inst_91009,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_91019 = (inst_91017) || (inst_91018);
var state_91048__$1 = (function (){var statearr_91062 = state_91048;
(statearr_91062[(10)] = inst_91016__$1);

return statearr_91062;
})();
if(cljs.core.truth_(inst_91019)){
var statearr_91063_91092 = state_91048__$1;
(statearr_91063_91092[(1)] = (8));

} else {
var statearr_91064_91093 = state_91048__$1;
(statearr_91064_91093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (14))){
var inst_91041 = (state_91048[(2)]);
var inst_91042 = cljs.core.async.close_BANG_.call(null,out);
var state_91048__$1 = (function (){var statearr_91066 = state_91048;
(statearr_91066[(13)] = inst_91041);

return statearr_91066;
})();
var statearr_91067_91094 = state_91048__$1;
(statearr_91067_91094[(2)] = inst_91042);

(statearr_91067_91094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (10))){
var inst_91031 = (state_91048[(2)]);
var state_91048__$1 = state_91048;
var statearr_91068_91095 = state_91048__$1;
(statearr_91068_91095[(2)] = inst_91031);

(statearr_91068_91095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91049 === (8))){
var inst_91016 = (state_91048[(10)]);
var inst_91008 = (state_91048[(8)]);
var inst_91012 = (state_91048[(9)]);
var inst_91021 = inst_91008.push(inst_91012);
var tmp91065 = inst_91008;
var inst_91008__$1 = tmp91065;
var inst_91009 = inst_91016;
var state_91048__$1 = (function (){var statearr_91069 = state_91048;
(statearr_91069[(7)] = inst_91009);

(statearr_91069[(14)] = inst_91021);

(statearr_91069[(8)] = inst_91008__$1);

return statearr_91069;
})();
var statearr_91070_91096 = state_91048__$1;
(statearr_91070_91096[(2)] = null);

(statearr_91070_91096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25154__auto___91082,out))
;
return ((function (switch__25133__auto__,c__25154__auto___91082,out){
return (function() {
var cljs$core$async$state_machine__25134__auto__ = null;
var cljs$core$async$state_machine__25134__auto____0 = (function (){
var statearr_91074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91074[(0)] = cljs$core$async$state_machine__25134__auto__);

(statearr_91074[(1)] = (1));

return statearr_91074;
});
var cljs$core$async$state_machine__25134__auto____1 = (function (state_91048){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_91048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e91075){if((e91075 instanceof Object)){
var ex__25137__auto__ = e91075;
var statearr_91076_91097 = state_91048;
(statearr_91076_91097[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91098 = state_91048;
state_91048 = G__91098;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
cljs$core$async$state_machine__25134__auto__ = function(state_91048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25134__auto____1.call(this,state_91048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25134__auto____0;
cljs$core$async$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25134__auto____1;
return cljs$core$async$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___91082,out))
})();
var state__25156__auto__ = (function (){var statearr_91077 = f__25155__auto__.call(null);
(statearr_91077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___91082);

return statearr_91077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___91082,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1460037783366