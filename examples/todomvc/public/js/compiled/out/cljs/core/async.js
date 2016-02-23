// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22682 = [];
var len__17809__auto___22688 = arguments.length;
var i__17810__auto___22689 = (0);
while(true){
if((i__17810__auto___22689 < len__17809__auto___22688)){
args22682.push((arguments[i__17810__auto___22689]));

var G__22690 = (i__17810__auto___22689 + (1));
i__17810__auto___22689 = G__22690;
continue;
} else {
}
break;
}

var G__22684 = args22682.length;
switch (G__22684) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22682.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22685 = (function (f,blockable,meta22686){
this.f = f;
this.blockable = blockable;
this.meta22686 = meta22686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22687,meta22686__$1){
var self__ = this;
var _22687__$1 = this;
return (new cljs.core.async.t_cljs$core$async22685(self__.f,self__.blockable,meta22686__$1));
});

cljs.core.async.t_cljs$core$async22685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22687){
var self__ = this;
var _22687__$1 = this;
return self__.meta22686;
});

cljs.core.async.t_cljs$core$async22685.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22686","meta22686",881766663,null)], null);
});

cljs.core.async.t_cljs$core$async22685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22685";

cljs.core.async.t_cljs$core$async22685.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async22685");
});

cljs.core.async.__GT_t_cljs$core$async22685 = (function cljs$core$async$__GT_t_cljs$core$async22685(f__$1,blockable__$1,meta22686){
return (new cljs.core.async.t_cljs$core$async22685(f__$1,blockable__$1,meta22686));
});

}

return (new cljs.core.async.t_cljs$core$async22685(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22694 = [];
var len__17809__auto___22697 = arguments.length;
var i__17810__auto___22698 = (0);
while(true){
if((i__17810__auto___22698 < len__17809__auto___22697)){
args22694.push((arguments[i__17810__auto___22698]));

var G__22699 = (i__17810__auto___22698 + (1));
i__17810__auto___22698 = G__22699;
continue;
} else {
}
break;
}

var G__22696 = args22694.length;
switch (G__22696) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22694.length)].join('')));

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
var args22701 = [];
var len__17809__auto___22704 = arguments.length;
var i__17810__auto___22705 = (0);
while(true){
if((i__17810__auto___22705 < len__17809__auto___22704)){
args22701.push((arguments[i__17810__auto___22705]));

var G__22706 = (i__17810__auto___22705 + (1));
i__17810__auto___22705 = G__22706;
continue;
} else {
}
break;
}

var G__22703 = args22701.length;
switch (G__22703) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22701.length)].join('')));

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
var args22708 = [];
var len__17809__auto___22711 = arguments.length;
var i__17810__auto___22712 = (0);
while(true){
if((i__17810__auto___22712 < len__17809__auto___22711)){
args22708.push((arguments[i__17810__auto___22712]));

var G__22713 = (i__17810__auto___22712 + (1));
i__17810__auto___22712 = G__22713;
continue;
} else {
}
break;
}

var G__22710 = args22708.length;
switch (G__22710) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22708.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22715 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22715);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22715,ret){
return (function (){
return fn1.call(null,val_22715);
});})(val_22715,ret))
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
var args22716 = [];
var len__17809__auto___22719 = arguments.length;
var i__17810__auto___22720 = (0);
while(true){
if((i__17810__auto___22720 < len__17809__auto___22719)){
args22716.push((arguments[i__17810__auto___22720]));

var G__22721 = (i__17810__auto___22720 + (1));
i__17810__auto___22720 = G__22721;
continue;
} else {
}
break;
}

var G__22718 = args22716.length;
switch (G__22718) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22716.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17654__auto___22723 = n;
var x_22724 = (0);
while(true){
if((x_22724 < n__17654__auto___22723)){
(a[x_22724] = (0));

var G__22725 = (x_22724 + (1));
x_22724 = G__22725;
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

var G__22726 = (i + (1));
i = G__22726;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22730 = (function (alt_flag,flag,meta22731){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22731 = meta22731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22732,meta22731__$1){
var self__ = this;
var _22732__$1 = this;
return (new cljs.core.async.t_cljs$core$async22730(self__.alt_flag,self__.flag,meta22731__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22732){
var self__ = this;
var _22732__$1 = this;
return self__.meta22731;
});})(flag))
;

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22730.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22731","meta22731",2130243436,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22730";

cljs.core.async.t_cljs$core$async22730.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async22730");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22730 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22730(alt_flag__$1,flag__$1,meta22731){
return (new cljs.core.async.t_cljs$core$async22730(alt_flag__$1,flag__$1,meta22731));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22730(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22736 = (function (alt_handler,flag,cb,meta22737){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22737 = meta22737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22738,meta22737__$1){
var self__ = this;
var _22738__$1 = this;
return (new cljs.core.async.t_cljs$core$async22736(self__.alt_handler,self__.flag,self__.cb,meta22737__$1));
});

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22738){
var self__ = this;
var _22738__$1 = this;
return self__.meta22737;
});

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22737","meta22737",-1929417123,null)], null);
});

cljs.core.async.t_cljs$core$async22736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22736";

cljs.core.async.t_cljs$core$async22736.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async22736");
});

cljs.core.async.__GT_t_cljs$core$async22736 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22736(alt_handler__$1,flag__$1,cb__$1,meta22737){
return (new cljs.core.async.t_cljs$core$async22736(alt_handler__$1,flag__$1,cb__$1,meta22737));
});

}

return (new cljs.core.async.t_cljs$core$async22736(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22739_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22739_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22740_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22740_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16751__auto__ = wport;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22741 = (i + (1));
i = G__22741;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16751__auto__ = ret;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16739__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16739__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__17816__auto__ = [];
var len__17809__auto___22747 = arguments.length;
var i__17810__auto___22748 = (0);
while(true){
if((i__17810__auto___22748 < len__17809__auto___22747)){
args__17816__auto__.push((arguments[i__17810__auto___22748]));

var G__22749 = (i__17810__auto___22748 + (1));
i__17810__auto___22748 = G__22749;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22744){
var map__22745 = p__22744;
var map__22745__$1 = ((((!((map__22745 == null)))?((((map__22745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22745):map__22745);
var opts = map__22745__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22742){
var G__22743 = cljs.core.first.call(null,seq22742);
var seq22742__$1 = cljs.core.next.call(null,seq22742);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22743,seq22742__$1);
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
var args22750 = [];
var len__17809__auto___22800 = arguments.length;
var i__17810__auto___22801 = (0);
while(true){
if((i__17810__auto___22801 < len__17809__auto___22800)){
args22750.push((arguments[i__17810__auto___22801]));

var G__22802 = (i__17810__auto___22801 + (1));
i__17810__auto___22801 = G__22802;
continue;
} else {
}
break;
}

var G__22752 = args22750.length;
switch (G__22752) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22750.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22637__auto___22804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___22804){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___22804){
return (function (state_22776){
var state_val_22777 = (state_22776[(1)]);
if((state_val_22777 === (7))){
var inst_22772 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
var statearr_22778_22805 = state_22776__$1;
(statearr_22778_22805[(2)] = inst_22772);

(statearr_22778_22805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (1))){
var state_22776__$1 = state_22776;
var statearr_22779_22806 = state_22776__$1;
(statearr_22779_22806[(2)] = null);

(statearr_22779_22806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (4))){
var inst_22755 = (state_22776[(7)]);
var inst_22755__$1 = (state_22776[(2)]);
var inst_22756 = (inst_22755__$1 == null);
var state_22776__$1 = (function (){var statearr_22780 = state_22776;
(statearr_22780[(7)] = inst_22755__$1);

return statearr_22780;
})();
if(cljs.core.truth_(inst_22756)){
var statearr_22781_22807 = state_22776__$1;
(statearr_22781_22807[(1)] = (5));

} else {
var statearr_22782_22808 = state_22776__$1;
(statearr_22782_22808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (13))){
var state_22776__$1 = state_22776;
var statearr_22783_22809 = state_22776__$1;
(statearr_22783_22809[(2)] = null);

(statearr_22783_22809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (6))){
var inst_22755 = (state_22776[(7)]);
var state_22776__$1 = state_22776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22776__$1,(11),to,inst_22755);
} else {
if((state_val_22777 === (3))){
var inst_22774 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22776__$1,inst_22774);
} else {
if((state_val_22777 === (12))){
var state_22776__$1 = state_22776;
var statearr_22784_22810 = state_22776__$1;
(statearr_22784_22810[(2)] = null);

(statearr_22784_22810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (2))){
var state_22776__$1 = state_22776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22776__$1,(4),from);
} else {
if((state_val_22777 === (11))){
var inst_22765 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
if(cljs.core.truth_(inst_22765)){
var statearr_22785_22811 = state_22776__$1;
(statearr_22785_22811[(1)] = (12));

} else {
var statearr_22786_22812 = state_22776__$1;
(statearr_22786_22812[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (9))){
var state_22776__$1 = state_22776;
var statearr_22787_22813 = state_22776__$1;
(statearr_22787_22813[(2)] = null);

(statearr_22787_22813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (5))){
var state_22776__$1 = state_22776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22788_22814 = state_22776__$1;
(statearr_22788_22814[(1)] = (8));

} else {
var statearr_22789_22815 = state_22776__$1;
(statearr_22789_22815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (14))){
var inst_22770 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
var statearr_22790_22816 = state_22776__$1;
(statearr_22790_22816[(2)] = inst_22770);

(statearr_22790_22816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (10))){
var inst_22762 = (state_22776[(2)]);
var state_22776__$1 = state_22776;
var statearr_22791_22817 = state_22776__$1;
(statearr_22791_22817[(2)] = inst_22762);

(statearr_22791_22817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22777 === (8))){
var inst_22759 = cljs.core.async.close_BANG_.call(null,to);
var state_22776__$1 = state_22776;
var statearr_22792_22818 = state_22776__$1;
(statearr_22792_22818[(2)] = inst_22759);

(statearr_22792_22818[(1)] = (10));


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
});})(c__22637__auto___22804))
;
return ((function (switch__22525__auto__,c__22637__auto___22804){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_22796 = [null,null,null,null,null,null,null,null];
(statearr_22796[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_22796[(1)] = (1));

return statearr_22796;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_22776){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_22776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e22797){if((e22797 instanceof Object)){
var ex__22529__auto__ = e22797;
var statearr_22798_22819 = state_22776;
(statearr_22798_22819[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22820 = state_22776;
state_22776 = G__22820;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_22776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_22776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___22804))
})();
var state__22639__auto__ = (function (){var statearr_22799 = f__22638__auto__.call(null);
(statearr_22799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___22804);

return statearr_22799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___22804))
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
return (function (p__23004){
var vec__23005 = p__23004;
var v = cljs.core.nth.call(null,vec__23005,(0),null);
var p = cljs.core.nth.call(null,vec__23005,(1),null);
var job = vec__23005;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22637__auto___23187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___23187,res,vec__23005,v,p,job,jobs,results){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___23187,res,vec__23005,v,p,job,jobs,results){
return (function (state_23010){
var state_val_23011 = (state_23010[(1)]);
if((state_val_23011 === (1))){
var state_23010__$1 = state_23010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23010__$1,(2),res,v);
} else {
if((state_val_23011 === (2))){
var inst_23007 = (state_23010[(2)]);
var inst_23008 = cljs.core.async.close_BANG_.call(null,res);
var state_23010__$1 = (function (){var statearr_23012 = state_23010;
(statearr_23012[(7)] = inst_23007);

return statearr_23012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23010__$1,inst_23008);
} else {
return null;
}
}
});})(c__22637__auto___23187,res,vec__23005,v,p,job,jobs,results))
;
return ((function (switch__22525__auto__,c__22637__auto___23187,res,vec__23005,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0 = (function (){
var statearr_23016 = [null,null,null,null,null,null,null,null];
(statearr_23016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__);

(statearr_23016[(1)] = (1));

return statearr_23016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1 = (function (state_23010){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_23010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e23017){if((e23017 instanceof Object)){
var ex__22529__auto__ = e23017;
var statearr_23018_23188 = state_23010;
(statearr_23018_23188[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23189 = state_23010;
state_23010 = G__23189;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = function(state_23010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1.call(this,state_23010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___23187,res,vec__23005,v,p,job,jobs,results))
})();
var state__22639__auto__ = (function (){var statearr_23019 = f__22638__auto__.call(null);
(statearr_23019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___23187);

return statearr_23019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___23187,res,vec__23005,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23020){
var vec__23021 = p__23020;
var v = cljs.core.nth.call(null,vec__23021,(0),null);
var p = cljs.core.nth.call(null,vec__23021,(1),null);
var job = vec__23021;
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
var n__17654__auto___23190 = n;
var __23191 = (0);
while(true){
if((__23191 < n__17654__auto___23190)){
var G__23022_23192 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23022_23192) {
case "compute":
var c__22637__auto___23194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23191,c__22637__auto___23194,G__23022_23192,n__17654__auto___23190,jobs,results,process,async){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (__23191,c__22637__auto___23194,G__23022_23192,n__17654__auto___23190,jobs,results,process,async){
return (function (state_23035){
var state_val_23036 = (state_23035[(1)]);
if((state_val_23036 === (1))){
var state_23035__$1 = state_23035;
var statearr_23037_23195 = state_23035__$1;
(statearr_23037_23195[(2)] = null);

(statearr_23037_23195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23036 === (2))){
var state_23035__$1 = state_23035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23035__$1,(4),jobs);
} else {
if((state_val_23036 === (3))){
var inst_23033 = (state_23035[(2)]);
var state_23035__$1 = state_23035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23035__$1,inst_23033);
} else {
if((state_val_23036 === (4))){
var inst_23025 = (state_23035[(2)]);
var inst_23026 = process.call(null,inst_23025);
var state_23035__$1 = state_23035;
if(cljs.core.truth_(inst_23026)){
var statearr_23038_23196 = state_23035__$1;
(statearr_23038_23196[(1)] = (5));

} else {
var statearr_23039_23197 = state_23035__$1;
(statearr_23039_23197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23036 === (5))){
var state_23035__$1 = state_23035;
var statearr_23040_23198 = state_23035__$1;
(statearr_23040_23198[(2)] = null);

(statearr_23040_23198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23036 === (6))){
var state_23035__$1 = state_23035;
var statearr_23041_23199 = state_23035__$1;
(statearr_23041_23199[(2)] = null);

(statearr_23041_23199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23036 === (7))){
var inst_23031 = (state_23035[(2)]);
var state_23035__$1 = state_23035;
var statearr_23042_23200 = state_23035__$1;
(statearr_23042_23200[(2)] = inst_23031);

(statearr_23042_23200[(1)] = (3));


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
});})(__23191,c__22637__auto___23194,G__23022_23192,n__17654__auto___23190,jobs,results,process,async))
;
return ((function (__23191,switch__22525__auto__,c__22637__auto___23194,G__23022_23192,n__17654__auto___23190,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0 = (function (){
var statearr_23046 = [null,null,null,null,null,null,null];
(statearr_23046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__);

(statearr_23046[(1)] = (1));

return statearr_23046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1 = (function (state_23035){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_23035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e23047){if((e23047 instanceof Object)){
var ex__22529__auto__ = e23047;
var statearr_23048_23201 = state_23035;
(statearr_23048_23201[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23202 = state_23035;
state_23035 = G__23202;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = function(state_23035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1.call(this,state_23035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__;
})()
;})(__23191,switch__22525__auto__,c__22637__auto___23194,G__23022_23192,n__17654__auto___23190,jobs,results,process,async))
})();
var state__22639__auto__ = (function (){var statearr_23049 = f__22638__auto__.call(null);
(statearr_23049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___23194);

return statearr_23049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(__23191,c__22637__auto___23194,G__23022_23192,n__17654__auto___23190,jobs,results,process,async))
);


break;
case "async":
var c__22637__auto___23203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23191,c__22637__auto___23203,G__23022_23192,n__17654__auto___23190,jobs,results,process,async){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (__23191,c__22637__auto___23203,G__23022_23192,n__17654__auto___23190,jobs,results,process,async){
return (function (state_23062){
var state_val_23063 = (state_23062[(1)]);
if((state_val_23063 === (1))){
var state_23062__$1 = state_23062;
var statearr_23064_23204 = state_23062__$1;
(statearr_23064_23204[(2)] = null);

(statearr_23064_23204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (2))){
var state_23062__$1 = state_23062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23062__$1,(4),jobs);
} else {
if((state_val_23063 === (3))){
var inst_23060 = (state_23062[(2)]);
var state_23062__$1 = state_23062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23062__$1,inst_23060);
} else {
if((state_val_23063 === (4))){
var inst_23052 = (state_23062[(2)]);
var inst_23053 = async.call(null,inst_23052);
var state_23062__$1 = state_23062;
if(cljs.core.truth_(inst_23053)){
var statearr_23065_23205 = state_23062__$1;
(statearr_23065_23205[(1)] = (5));

} else {
var statearr_23066_23206 = state_23062__$1;
(statearr_23066_23206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (5))){
var state_23062__$1 = state_23062;
var statearr_23067_23207 = state_23062__$1;
(statearr_23067_23207[(2)] = null);

(statearr_23067_23207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (6))){
var state_23062__$1 = state_23062;
var statearr_23068_23208 = state_23062__$1;
(statearr_23068_23208[(2)] = null);

(statearr_23068_23208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (7))){
var inst_23058 = (state_23062[(2)]);
var state_23062__$1 = state_23062;
var statearr_23069_23209 = state_23062__$1;
(statearr_23069_23209[(2)] = inst_23058);

(statearr_23069_23209[(1)] = (3));


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
});})(__23191,c__22637__auto___23203,G__23022_23192,n__17654__auto___23190,jobs,results,process,async))
;
return ((function (__23191,switch__22525__auto__,c__22637__auto___23203,G__23022_23192,n__17654__auto___23190,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0 = (function (){
var statearr_23073 = [null,null,null,null,null,null,null];
(statearr_23073[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__);

(statearr_23073[(1)] = (1));

return statearr_23073;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1 = (function (state_23062){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_23062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e23074){if((e23074 instanceof Object)){
var ex__22529__auto__ = e23074;
var statearr_23075_23210 = state_23062;
(statearr_23075_23210[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23211 = state_23062;
state_23062 = G__23211;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = function(state_23062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1.call(this,state_23062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__;
})()
;})(__23191,switch__22525__auto__,c__22637__auto___23203,G__23022_23192,n__17654__auto___23190,jobs,results,process,async))
})();
var state__22639__auto__ = (function (){var statearr_23076 = f__22638__auto__.call(null);
(statearr_23076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___23203);

return statearr_23076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(__23191,c__22637__auto___23203,G__23022_23192,n__17654__auto___23190,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23212 = (__23191 + (1));
__23191 = G__23212;
continue;
} else {
}
break;
}

var c__22637__auto___23213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___23213,jobs,results,process,async){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___23213,jobs,results,process,async){
return (function (state_23098){
var state_val_23099 = (state_23098[(1)]);
if((state_val_23099 === (1))){
var state_23098__$1 = state_23098;
var statearr_23100_23214 = state_23098__$1;
(statearr_23100_23214[(2)] = null);

(statearr_23100_23214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (2))){
var state_23098__$1 = state_23098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23098__$1,(4),from);
} else {
if((state_val_23099 === (3))){
var inst_23096 = (state_23098[(2)]);
var state_23098__$1 = state_23098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23098__$1,inst_23096);
} else {
if((state_val_23099 === (4))){
var inst_23079 = (state_23098[(7)]);
var inst_23079__$1 = (state_23098[(2)]);
var inst_23080 = (inst_23079__$1 == null);
var state_23098__$1 = (function (){var statearr_23101 = state_23098;
(statearr_23101[(7)] = inst_23079__$1);

return statearr_23101;
})();
if(cljs.core.truth_(inst_23080)){
var statearr_23102_23215 = state_23098__$1;
(statearr_23102_23215[(1)] = (5));

} else {
var statearr_23103_23216 = state_23098__$1;
(statearr_23103_23216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (5))){
var inst_23082 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23098__$1 = state_23098;
var statearr_23104_23217 = state_23098__$1;
(statearr_23104_23217[(2)] = inst_23082);

(statearr_23104_23217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (6))){
var inst_23079 = (state_23098[(7)]);
var inst_23084 = (state_23098[(8)]);
var inst_23084__$1 = cljs.core.async.chan.call(null,(1));
var inst_23085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23086 = [inst_23079,inst_23084__$1];
var inst_23087 = (new cljs.core.PersistentVector(null,2,(5),inst_23085,inst_23086,null));
var state_23098__$1 = (function (){var statearr_23105 = state_23098;
(statearr_23105[(8)] = inst_23084__$1);

return statearr_23105;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23098__$1,(8),jobs,inst_23087);
} else {
if((state_val_23099 === (7))){
var inst_23094 = (state_23098[(2)]);
var state_23098__$1 = state_23098;
var statearr_23106_23218 = state_23098__$1;
(statearr_23106_23218[(2)] = inst_23094);

(statearr_23106_23218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23099 === (8))){
var inst_23084 = (state_23098[(8)]);
var inst_23089 = (state_23098[(2)]);
var state_23098__$1 = (function (){var statearr_23107 = state_23098;
(statearr_23107[(9)] = inst_23089);

return statearr_23107;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23098__$1,(9),results,inst_23084);
} else {
if((state_val_23099 === (9))){
var inst_23091 = (state_23098[(2)]);
var state_23098__$1 = (function (){var statearr_23108 = state_23098;
(statearr_23108[(10)] = inst_23091);

return statearr_23108;
})();
var statearr_23109_23219 = state_23098__$1;
(statearr_23109_23219[(2)] = null);

(statearr_23109_23219[(1)] = (2));


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
});})(c__22637__auto___23213,jobs,results,process,async))
;
return ((function (switch__22525__auto__,c__22637__auto___23213,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0 = (function (){
var statearr_23113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__);

(statearr_23113[(1)] = (1));

return statearr_23113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1 = (function (state_23098){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_23098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e23114){if((e23114 instanceof Object)){
var ex__22529__auto__ = e23114;
var statearr_23115_23220 = state_23098;
(statearr_23115_23220[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23221 = state_23098;
state_23098 = G__23221;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = function(state_23098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1.call(this,state_23098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___23213,jobs,results,process,async))
})();
var state__22639__auto__ = (function (){var statearr_23116 = f__22638__auto__.call(null);
(statearr_23116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___23213);

return statearr_23116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___23213,jobs,results,process,async))
);


var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__,jobs,results,process,async){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__,jobs,results,process,async){
return (function (state_23154){
var state_val_23155 = (state_23154[(1)]);
if((state_val_23155 === (7))){
var inst_23150 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23156_23222 = state_23154__$1;
(statearr_23156_23222[(2)] = inst_23150);

(statearr_23156_23222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (20))){
var state_23154__$1 = state_23154;
var statearr_23157_23223 = state_23154__$1;
(statearr_23157_23223[(2)] = null);

(statearr_23157_23223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (1))){
var state_23154__$1 = state_23154;
var statearr_23158_23224 = state_23154__$1;
(statearr_23158_23224[(2)] = null);

(statearr_23158_23224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (4))){
var inst_23119 = (state_23154[(7)]);
var inst_23119__$1 = (state_23154[(2)]);
var inst_23120 = (inst_23119__$1 == null);
var state_23154__$1 = (function (){var statearr_23159 = state_23154;
(statearr_23159[(7)] = inst_23119__$1);

return statearr_23159;
})();
if(cljs.core.truth_(inst_23120)){
var statearr_23160_23225 = state_23154__$1;
(statearr_23160_23225[(1)] = (5));

} else {
var statearr_23161_23226 = state_23154__$1;
(statearr_23161_23226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (15))){
var inst_23132 = (state_23154[(8)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23154__$1,(18),to,inst_23132);
} else {
if((state_val_23155 === (21))){
var inst_23145 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23162_23227 = state_23154__$1;
(statearr_23162_23227[(2)] = inst_23145);

(statearr_23162_23227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (13))){
var inst_23147 = (state_23154[(2)]);
var state_23154__$1 = (function (){var statearr_23163 = state_23154;
(statearr_23163[(9)] = inst_23147);

return statearr_23163;
})();
var statearr_23164_23228 = state_23154__$1;
(statearr_23164_23228[(2)] = null);

(statearr_23164_23228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (6))){
var inst_23119 = (state_23154[(7)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23154__$1,(11),inst_23119);
} else {
if((state_val_23155 === (17))){
var inst_23140 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
if(cljs.core.truth_(inst_23140)){
var statearr_23165_23229 = state_23154__$1;
(statearr_23165_23229[(1)] = (19));

} else {
var statearr_23166_23230 = state_23154__$1;
(statearr_23166_23230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (3))){
var inst_23152 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23154__$1,inst_23152);
} else {
if((state_val_23155 === (12))){
var inst_23129 = (state_23154[(10)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23154__$1,(14),inst_23129);
} else {
if((state_val_23155 === (2))){
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23154__$1,(4),results);
} else {
if((state_val_23155 === (19))){
var state_23154__$1 = state_23154;
var statearr_23167_23231 = state_23154__$1;
(statearr_23167_23231[(2)] = null);

(statearr_23167_23231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (11))){
var inst_23129 = (state_23154[(2)]);
var state_23154__$1 = (function (){var statearr_23168 = state_23154;
(statearr_23168[(10)] = inst_23129);

return statearr_23168;
})();
var statearr_23169_23232 = state_23154__$1;
(statearr_23169_23232[(2)] = null);

(statearr_23169_23232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (9))){
var state_23154__$1 = state_23154;
var statearr_23170_23233 = state_23154__$1;
(statearr_23170_23233[(2)] = null);

(statearr_23170_23233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (5))){
var state_23154__$1 = state_23154;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23171_23234 = state_23154__$1;
(statearr_23171_23234[(1)] = (8));

} else {
var statearr_23172_23235 = state_23154__$1;
(statearr_23172_23235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (14))){
var inst_23134 = (state_23154[(11)]);
var inst_23132 = (state_23154[(8)]);
var inst_23132__$1 = (state_23154[(2)]);
var inst_23133 = (inst_23132__$1 == null);
var inst_23134__$1 = cljs.core.not.call(null,inst_23133);
var state_23154__$1 = (function (){var statearr_23173 = state_23154;
(statearr_23173[(11)] = inst_23134__$1);

(statearr_23173[(8)] = inst_23132__$1);

return statearr_23173;
})();
if(inst_23134__$1){
var statearr_23174_23236 = state_23154__$1;
(statearr_23174_23236[(1)] = (15));

} else {
var statearr_23175_23237 = state_23154__$1;
(statearr_23175_23237[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (16))){
var inst_23134 = (state_23154[(11)]);
var state_23154__$1 = state_23154;
var statearr_23176_23238 = state_23154__$1;
(statearr_23176_23238[(2)] = inst_23134);

(statearr_23176_23238[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (10))){
var inst_23126 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23177_23239 = state_23154__$1;
(statearr_23177_23239[(2)] = inst_23126);

(statearr_23177_23239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (18))){
var inst_23137 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23178_23240 = state_23154__$1;
(statearr_23178_23240[(2)] = inst_23137);

(statearr_23178_23240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (8))){
var inst_23123 = cljs.core.async.close_BANG_.call(null,to);
var state_23154__$1 = state_23154;
var statearr_23179_23241 = state_23154__$1;
(statearr_23179_23241[(2)] = inst_23123);

(statearr_23179_23241[(1)] = (10));


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
});})(c__22637__auto__,jobs,results,process,async))
;
return ((function (switch__22525__auto__,c__22637__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0 = (function (){
var statearr_23183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__);

(statearr_23183[(1)] = (1));

return statearr_23183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1 = (function (state_23154){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_23154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e23184){if((e23184 instanceof Object)){
var ex__22529__auto__ = e23184;
var statearr_23185_23242 = state_23154;
(statearr_23185_23242[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23243 = state_23154;
state_23154 = G__23243;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__ = function(state_23154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1.call(this,state_23154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__,jobs,results,process,async))
})();
var state__22639__auto__ = (function (){var statearr_23186 = f__22638__auto__.call(null);
(statearr_23186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_23186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__,jobs,results,process,async))
);

return c__22637__auto__;
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
var args23244 = [];
var len__17809__auto___23247 = arguments.length;
var i__17810__auto___23248 = (0);
while(true){
if((i__17810__auto___23248 < len__17809__auto___23247)){
args23244.push((arguments[i__17810__auto___23248]));

var G__23249 = (i__17810__auto___23248 + (1));
i__17810__auto___23248 = G__23249;
continue;
} else {
}
break;
}

var G__23246 = args23244.length;
switch (G__23246) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23244.length)].join('')));

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
var args23251 = [];
var len__17809__auto___23254 = arguments.length;
var i__17810__auto___23255 = (0);
while(true){
if((i__17810__auto___23255 < len__17809__auto___23254)){
args23251.push((arguments[i__17810__auto___23255]));

var G__23256 = (i__17810__auto___23255 + (1));
i__17810__auto___23255 = G__23256;
continue;
} else {
}
break;
}

var G__23253 = args23251.length;
switch (G__23253) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23251.length)].join('')));

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
var args23258 = [];
var len__17809__auto___23311 = arguments.length;
var i__17810__auto___23312 = (0);
while(true){
if((i__17810__auto___23312 < len__17809__auto___23311)){
args23258.push((arguments[i__17810__auto___23312]));

var G__23313 = (i__17810__auto___23312 + (1));
i__17810__auto___23312 = G__23313;
continue;
} else {
}
break;
}

var G__23260 = args23258.length;
switch (G__23260) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23258.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22637__auto___23315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___23315,tc,fc){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___23315,tc,fc){
return (function (state_23286){
var state_val_23287 = (state_23286[(1)]);
if((state_val_23287 === (7))){
var inst_23282 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
var statearr_23288_23316 = state_23286__$1;
(statearr_23288_23316[(2)] = inst_23282);

(statearr_23288_23316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (1))){
var state_23286__$1 = state_23286;
var statearr_23289_23317 = state_23286__$1;
(statearr_23289_23317[(2)] = null);

(statearr_23289_23317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (4))){
var inst_23263 = (state_23286[(7)]);
var inst_23263__$1 = (state_23286[(2)]);
var inst_23264 = (inst_23263__$1 == null);
var state_23286__$1 = (function (){var statearr_23290 = state_23286;
(statearr_23290[(7)] = inst_23263__$1);

return statearr_23290;
})();
if(cljs.core.truth_(inst_23264)){
var statearr_23291_23318 = state_23286__$1;
(statearr_23291_23318[(1)] = (5));

} else {
var statearr_23292_23319 = state_23286__$1;
(statearr_23292_23319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (13))){
var state_23286__$1 = state_23286;
var statearr_23293_23320 = state_23286__$1;
(statearr_23293_23320[(2)] = null);

(statearr_23293_23320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (6))){
var inst_23263 = (state_23286[(7)]);
var inst_23269 = p.call(null,inst_23263);
var state_23286__$1 = state_23286;
if(cljs.core.truth_(inst_23269)){
var statearr_23294_23321 = state_23286__$1;
(statearr_23294_23321[(1)] = (9));

} else {
var statearr_23295_23322 = state_23286__$1;
(statearr_23295_23322[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (3))){
var inst_23284 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23286__$1,inst_23284);
} else {
if((state_val_23287 === (12))){
var state_23286__$1 = state_23286;
var statearr_23296_23323 = state_23286__$1;
(statearr_23296_23323[(2)] = null);

(statearr_23296_23323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (2))){
var state_23286__$1 = state_23286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23286__$1,(4),ch);
} else {
if((state_val_23287 === (11))){
var inst_23263 = (state_23286[(7)]);
var inst_23273 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23286__$1,(8),inst_23273,inst_23263);
} else {
if((state_val_23287 === (9))){
var state_23286__$1 = state_23286;
var statearr_23297_23324 = state_23286__$1;
(statearr_23297_23324[(2)] = tc);

(statearr_23297_23324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (5))){
var inst_23266 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23267 = cljs.core.async.close_BANG_.call(null,fc);
var state_23286__$1 = (function (){var statearr_23298 = state_23286;
(statearr_23298[(8)] = inst_23266);

return statearr_23298;
})();
var statearr_23299_23325 = state_23286__$1;
(statearr_23299_23325[(2)] = inst_23267);

(statearr_23299_23325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (14))){
var inst_23280 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
var statearr_23300_23326 = state_23286__$1;
(statearr_23300_23326[(2)] = inst_23280);

(statearr_23300_23326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (10))){
var state_23286__$1 = state_23286;
var statearr_23301_23327 = state_23286__$1;
(statearr_23301_23327[(2)] = fc);

(statearr_23301_23327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23287 === (8))){
var inst_23275 = (state_23286[(2)]);
var state_23286__$1 = state_23286;
if(cljs.core.truth_(inst_23275)){
var statearr_23302_23328 = state_23286__$1;
(statearr_23302_23328[(1)] = (12));

} else {
var statearr_23303_23329 = state_23286__$1;
(statearr_23303_23329[(1)] = (13));

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
});})(c__22637__auto___23315,tc,fc))
;
return ((function (switch__22525__auto__,c__22637__auto___23315,tc,fc){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_23307 = [null,null,null,null,null,null,null,null,null];
(statearr_23307[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_23307[(1)] = (1));

return statearr_23307;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_23286){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_23286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e23308){if((e23308 instanceof Object)){
var ex__22529__auto__ = e23308;
var statearr_23309_23330 = state_23286;
(statearr_23309_23330[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23331 = state_23286;
state_23286 = G__23331;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_23286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_23286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___23315,tc,fc))
})();
var state__22639__auto__ = (function (){var statearr_23310 = f__22638__auto__.call(null);
(statearr_23310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___23315);

return statearr_23310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___23315,tc,fc))
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
var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__){
return (function (state_23395){
var state_val_23396 = (state_23395[(1)]);
if((state_val_23396 === (7))){
var inst_23391 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23397_23418 = state_23395__$1;
(statearr_23397_23418[(2)] = inst_23391);

(statearr_23397_23418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (1))){
var inst_23375 = init;
var state_23395__$1 = (function (){var statearr_23398 = state_23395;
(statearr_23398[(7)] = inst_23375);

return statearr_23398;
})();
var statearr_23399_23419 = state_23395__$1;
(statearr_23399_23419[(2)] = null);

(statearr_23399_23419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (4))){
var inst_23378 = (state_23395[(8)]);
var inst_23378__$1 = (state_23395[(2)]);
var inst_23379 = (inst_23378__$1 == null);
var state_23395__$1 = (function (){var statearr_23400 = state_23395;
(statearr_23400[(8)] = inst_23378__$1);

return statearr_23400;
})();
if(cljs.core.truth_(inst_23379)){
var statearr_23401_23420 = state_23395__$1;
(statearr_23401_23420[(1)] = (5));

} else {
var statearr_23402_23421 = state_23395__$1;
(statearr_23402_23421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (6))){
var inst_23375 = (state_23395[(7)]);
var inst_23382 = (state_23395[(9)]);
var inst_23378 = (state_23395[(8)]);
var inst_23382__$1 = f.call(null,inst_23375,inst_23378);
var inst_23383 = cljs.core.reduced_QMARK_.call(null,inst_23382__$1);
var state_23395__$1 = (function (){var statearr_23403 = state_23395;
(statearr_23403[(9)] = inst_23382__$1);

return statearr_23403;
})();
if(inst_23383){
var statearr_23404_23422 = state_23395__$1;
(statearr_23404_23422[(1)] = (8));

} else {
var statearr_23405_23423 = state_23395__$1;
(statearr_23405_23423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (3))){
var inst_23393 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23395__$1,inst_23393);
} else {
if((state_val_23396 === (2))){
var state_23395__$1 = state_23395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23395__$1,(4),ch);
} else {
if((state_val_23396 === (9))){
var inst_23382 = (state_23395[(9)]);
var inst_23375 = inst_23382;
var state_23395__$1 = (function (){var statearr_23406 = state_23395;
(statearr_23406[(7)] = inst_23375);

return statearr_23406;
})();
var statearr_23407_23424 = state_23395__$1;
(statearr_23407_23424[(2)] = null);

(statearr_23407_23424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (5))){
var inst_23375 = (state_23395[(7)]);
var state_23395__$1 = state_23395;
var statearr_23408_23425 = state_23395__$1;
(statearr_23408_23425[(2)] = inst_23375);

(statearr_23408_23425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (10))){
var inst_23389 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23409_23426 = state_23395__$1;
(statearr_23409_23426[(2)] = inst_23389);

(statearr_23409_23426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (8))){
var inst_23382 = (state_23395[(9)]);
var inst_23385 = cljs.core.deref.call(null,inst_23382);
var state_23395__$1 = state_23395;
var statearr_23410_23427 = state_23395__$1;
(statearr_23410_23427[(2)] = inst_23385);

(statearr_23410_23427[(1)] = (10));


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
});})(c__22637__auto__))
;
return ((function (switch__22525__auto__,c__22637__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22526__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22526__auto____0 = (function (){
var statearr_23414 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23414[(0)] = cljs$core$async$reduce_$_state_machine__22526__auto__);

(statearr_23414[(1)] = (1));

return statearr_23414;
});
var cljs$core$async$reduce_$_state_machine__22526__auto____1 = (function (state_23395){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_23395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e23415){if((e23415 instanceof Object)){
var ex__22529__auto__ = e23415;
var statearr_23416_23428 = state_23395;
(statearr_23416_23428[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23429 = state_23395;
state_23395 = G__23429;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22526__auto__ = function(state_23395){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22526__auto____1.call(this,state_23395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22526__auto____0;
cljs$core$async$reduce_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22526__auto____1;
return cljs$core$async$reduce_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__))
})();
var state__22639__auto__ = (function (){var statearr_23417 = f__22638__auto__.call(null);
(statearr_23417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_23417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__))
);

return c__22637__auto__;
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
var args23430 = [];
var len__17809__auto___23482 = arguments.length;
var i__17810__auto___23483 = (0);
while(true){
if((i__17810__auto___23483 < len__17809__auto___23482)){
args23430.push((arguments[i__17810__auto___23483]));

var G__23484 = (i__17810__auto___23483 + (1));
i__17810__auto___23483 = G__23484;
continue;
} else {
}
break;
}

var G__23432 = args23430.length;
switch (G__23432) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23430.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__){
return (function (state_23457){
var state_val_23458 = (state_23457[(1)]);
if((state_val_23458 === (7))){
var inst_23439 = (state_23457[(2)]);
var state_23457__$1 = state_23457;
var statearr_23459_23486 = state_23457__$1;
(statearr_23459_23486[(2)] = inst_23439);

(statearr_23459_23486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (1))){
var inst_23433 = cljs.core.seq.call(null,coll);
var inst_23434 = inst_23433;
var state_23457__$1 = (function (){var statearr_23460 = state_23457;
(statearr_23460[(7)] = inst_23434);

return statearr_23460;
})();
var statearr_23461_23487 = state_23457__$1;
(statearr_23461_23487[(2)] = null);

(statearr_23461_23487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (4))){
var inst_23434 = (state_23457[(7)]);
var inst_23437 = cljs.core.first.call(null,inst_23434);
var state_23457__$1 = state_23457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23457__$1,(7),ch,inst_23437);
} else {
if((state_val_23458 === (13))){
var inst_23451 = (state_23457[(2)]);
var state_23457__$1 = state_23457;
var statearr_23462_23488 = state_23457__$1;
(statearr_23462_23488[(2)] = inst_23451);

(statearr_23462_23488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (6))){
var inst_23442 = (state_23457[(2)]);
var state_23457__$1 = state_23457;
if(cljs.core.truth_(inst_23442)){
var statearr_23463_23489 = state_23457__$1;
(statearr_23463_23489[(1)] = (8));

} else {
var statearr_23464_23490 = state_23457__$1;
(statearr_23464_23490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (3))){
var inst_23455 = (state_23457[(2)]);
var state_23457__$1 = state_23457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23457__$1,inst_23455);
} else {
if((state_val_23458 === (12))){
var state_23457__$1 = state_23457;
var statearr_23465_23491 = state_23457__$1;
(statearr_23465_23491[(2)] = null);

(statearr_23465_23491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (2))){
var inst_23434 = (state_23457[(7)]);
var state_23457__$1 = state_23457;
if(cljs.core.truth_(inst_23434)){
var statearr_23466_23492 = state_23457__$1;
(statearr_23466_23492[(1)] = (4));

} else {
var statearr_23467_23493 = state_23457__$1;
(statearr_23467_23493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (11))){
var inst_23448 = cljs.core.async.close_BANG_.call(null,ch);
var state_23457__$1 = state_23457;
var statearr_23468_23494 = state_23457__$1;
(statearr_23468_23494[(2)] = inst_23448);

(statearr_23468_23494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (9))){
var state_23457__$1 = state_23457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23469_23495 = state_23457__$1;
(statearr_23469_23495[(1)] = (11));

} else {
var statearr_23470_23496 = state_23457__$1;
(statearr_23470_23496[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (5))){
var inst_23434 = (state_23457[(7)]);
var state_23457__$1 = state_23457;
var statearr_23471_23497 = state_23457__$1;
(statearr_23471_23497[(2)] = inst_23434);

(statearr_23471_23497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (10))){
var inst_23453 = (state_23457[(2)]);
var state_23457__$1 = state_23457;
var statearr_23472_23498 = state_23457__$1;
(statearr_23472_23498[(2)] = inst_23453);

(statearr_23472_23498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23458 === (8))){
var inst_23434 = (state_23457[(7)]);
var inst_23444 = cljs.core.next.call(null,inst_23434);
var inst_23434__$1 = inst_23444;
var state_23457__$1 = (function (){var statearr_23473 = state_23457;
(statearr_23473[(7)] = inst_23434__$1);

return statearr_23473;
})();
var statearr_23474_23499 = state_23457__$1;
(statearr_23474_23499[(2)] = null);

(statearr_23474_23499[(1)] = (2));


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
});})(c__22637__auto__))
;
return ((function (switch__22525__auto__,c__22637__auto__){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_23478 = [null,null,null,null,null,null,null,null];
(statearr_23478[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_23478[(1)] = (1));

return statearr_23478;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_23457){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_23457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e23479){if((e23479 instanceof Object)){
var ex__22529__auto__ = e23479;
var statearr_23480_23500 = state_23457;
(statearr_23480_23500[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23501 = state_23457;
state_23457 = G__23501;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_23457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_23457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__))
})();
var state__22639__auto__ = (function (){var statearr_23481 = f__22638__auto__.call(null);
(statearr_23481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_23481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__))
);

return c__22637__auto__;
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
var x__17406__auto__ = (((_ == null))?null:_);
var m__17407__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,_);
} else {
var m__17407__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,_);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17407__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m);
} else {
var m__17407__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23723 = (function (mult,ch,cs,meta23724){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23724 = meta23724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23725,meta23724__$1){
var self__ = this;
var _23725__$1 = this;
return (new cljs.core.async.t_cljs$core$async23723(self__.mult,self__.ch,self__.cs,meta23724__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23725){
var self__ = this;
var _23725__$1 = this;
return self__.meta23724;
});})(cs))
;

cljs.core.async.t_cljs$core$async23723.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23723.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23723.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23723.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23723.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23723.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23723.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23724","meta23724",1430726163,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23723";

cljs.core.async.t_cljs$core$async23723.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async23723");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23723 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23723(mult__$1,ch__$1,cs__$1,meta23724){
return (new cljs.core.async.t_cljs$core$async23723(mult__$1,ch__$1,cs__$1,meta23724));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23723(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22637__auto___23944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___23944,cs,m,dchan,dctr,done){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___23944,cs,m,dchan,dctr,done){
return (function (state_23856){
var state_val_23857 = (state_23856[(1)]);
if((state_val_23857 === (7))){
var inst_23852 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23858_23945 = state_23856__$1;
(statearr_23858_23945[(2)] = inst_23852);

(statearr_23858_23945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (20))){
var inst_23757 = (state_23856[(7)]);
var inst_23767 = cljs.core.first.call(null,inst_23757);
var inst_23768 = cljs.core.nth.call(null,inst_23767,(0),null);
var inst_23769 = cljs.core.nth.call(null,inst_23767,(1),null);
var state_23856__$1 = (function (){var statearr_23859 = state_23856;
(statearr_23859[(8)] = inst_23768);

return statearr_23859;
})();
if(cljs.core.truth_(inst_23769)){
var statearr_23860_23946 = state_23856__$1;
(statearr_23860_23946[(1)] = (22));

} else {
var statearr_23861_23947 = state_23856__$1;
(statearr_23861_23947[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (27))){
var inst_23799 = (state_23856[(9)]);
var inst_23797 = (state_23856[(10)]);
var inst_23804 = (state_23856[(11)]);
var inst_23728 = (state_23856[(12)]);
var inst_23804__$1 = cljs.core._nth.call(null,inst_23797,inst_23799);
var inst_23805 = cljs.core.async.put_BANG_.call(null,inst_23804__$1,inst_23728,done);
var state_23856__$1 = (function (){var statearr_23862 = state_23856;
(statearr_23862[(11)] = inst_23804__$1);

return statearr_23862;
})();
if(cljs.core.truth_(inst_23805)){
var statearr_23863_23948 = state_23856__$1;
(statearr_23863_23948[(1)] = (30));

} else {
var statearr_23864_23949 = state_23856__$1;
(statearr_23864_23949[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (1))){
var state_23856__$1 = state_23856;
var statearr_23865_23950 = state_23856__$1;
(statearr_23865_23950[(2)] = null);

(statearr_23865_23950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (24))){
var inst_23757 = (state_23856[(7)]);
var inst_23774 = (state_23856[(2)]);
var inst_23775 = cljs.core.next.call(null,inst_23757);
var inst_23737 = inst_23775;
var inst_23738 = null;
var inst_23739 = (0);
var inst_23740 = (0);
var state_23856__$1 = (function (){var statearr_23866 = state_23856;
(statearr_23866[(13)] = inst_23739);

(statearr_23866[(14)] = inst_23740);

(statearr_23866[(15)] = inst_23738);

(statearr_23866[(16)] = inst_23774);

(statearr_23866[(17)] = inst_23737);

return statearr_23866;
})();
var statearr_23867_23951 = state_23856__$1;
(statearr_23867_23951[(2)] = null);

(statearr_23867_23951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (39))){
var state_23856__$1 = state_23856;
var statearr_23871_23952 = state_23856__$1;
(statearr_23871_23952[(2)] = null);

(statearr_23871_23952[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (4))){
var inst_23728 = (state_23856[(12)]);
var inst_23728__$1 = (state_23856[(2)]);
var inst_23729 = (inst_23728__$1 == null);
var state_23856__$1 = (function (){var statearr_23872 = state_23856;
(statearr_23872[(12)] = inst_23728__$1);

return statearr_23872;
})();
if(cljs.core.truth_(inst_23729)){
var statearr_23873_23953 = state_23856__$1;
(statearr_23873_23953[(1)] = (5));

} else {
var statearr_23874_23954 = state_23856__$1;
(statearr_23874_23954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (15))){
var inst_23739 = (state_23856[(13)]);
var inst_23740 = (state_23856[(14)]);
var inst_23738 = (state_23856[(15)]);
var inst_23737 = (state_23856[(17)]);
var inst_23753 = (state_23856[(2)]);
var inst_23754 = (inst_23740 + (1));
var tmp23868 = inst_23739;
var tmp23869 = inst_23738;
var tmp23870 = inst_23737;
var inst_23737__$1 = tmp23870;
var inst_23738__$1 = tmp23869;
var inst_23739__$1 = tmp23868;
var inst_23740__$1 = inst_23754;
var state_23856__$1 = (function (){var statearr_23875 = state_23856;
(statearr_23875[(13)] = inst_23739__$1);

(statearr_23875[(18)] = inst_23753);

(statearr_23875[(14)] = inst_23740__$1);

(statearr_23875[(15)] = inst_23738__$1);

(statearr_23875[(17)] = inst_23737__$1);

return statearr_23875;
})();
var statearr_23876_23955 = state_23856__$1;
(statearr_23876_23955[(2)] = null);

(statearr_23876_23955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (21))){
var inst_23778 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23880_23956 = state_23856__$1;
(statearr_23880_23956[(2)] = inst_23778);

(statearr_23880_23956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (31))){
var inst_23804 = (state_23856[(11)]);
var inst_23808 = done.call(null,null);
var inst_23809 = cljs.core.async.untap_STAR_.call(null,m,inst_23804);
var state_23856__$1 = (function (){var statearr_23881 = state_23856;
(statearr_23881[(19)] = inst_23808);

return statearr_23881;
})();
var statearr_23882_23957 = state_23856__$1;
(statearr_23882_23957[(2)] = inst_23809);

(statearr_23882_23957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (32))){
var inst_23799 = (state_23856[(9)]);
var inst_23798 = (state_23856[(20)]);
var inst_23797 = (state_23856[(10)]);
var inst_23796 = (state_23856[(21)]);
var inst_23811 = (state_23856[(2)]);
var inst_23812 = (inst_23799 + (1));
var tmp23877 = inst_23798;
var tmp23878 = inst_23797;
var tmp23879 = inst_23796;
var inst_23796__$1 = tmp23879;
var inst_23797__$1 = tmp23878;
var inst_23798__$1 = tmp23877;
var inst_23799__$1 = inst_23812;
var state_23856__$1 = (function (){var statearr_23883 = state_23856;
(statearr_23883[(9)] = inst_23799__$1);

(statearr_23883[(20)] = inst_23798__$1);

(statearr_23883[(10)] = inst_23797__$1);

(statearr_23883[(22)] = inst_23811);

(statearr_23883[(21)] = inst_23796__$1);

return statearr_23883;
})();
var statearr_23884_23958 = state_23856__$1;
(statearr_23884_23958[(2)] = null);

(statearr_23884_23958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (40))){
var inst_23824 = (state_23856[(23)]);
var inst_23828 = done.call(null,null);
var inst_23829 = cljs.core.async.untap_STAR_.call(null,m,inst_23824);
var state_23856__$1 = (function (){var statearr_23885 = state_23856;
(statearr_23885[(24)] = inst_23828);

return statearr_23885;
})();
var statearr_23886_23959 = state_23856__$1;
(statearr_23886_23959[(2)] = inst_23829);

(statearr_23886_23959[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (33))){
var inst_23815 = (state_23856[(25)]);
var inst_23817 = cljs.core.chunked_seq_QMARK_.call(null,inst_23815);
var state_23856__$1 = state_23856;
if(inst_23817){
var statearr_23887_23960 = state_23856__$1;
(statearr_23887_23960[(1)] = (36));

} else {
var statearr_23888_23961 = state_23856__$1;
(statearr_23888_23961[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (13))){
var inst_23747 = (state_23856[(26)]);
var inst_23750 = cljs.core.async.close_BANG_.call(null,inst_23747);
var state_23856__$1 = state_23856;
var statearr_23889_23962 = state_23856__$1;
(statearr_23889_23962[(2)] = inst_23750);

(statearr_23889_23962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (22))){
var inst_23768 = (state_23856[(8)]);
var inst_23771 = cljs.core.async.close_BANG_.call(null,inst_23768);
var state_23856__$1 = state_23856;
var statearr_23890_23963 = state_23856__$1;
(statearr_23890_23963[(2)] = inst_23771);

(statearr_23890_23963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (36))){
var inst_23815 = (state_23856[(25)]);
var inst_23819 = cljs.core.chunk_first.call(null,inst_23815);
var inst_23820 = cljs.core.chunk_rest.call(null,inst_23815);
var inst_23821 = cljs.core.count.call(null,inst_23819);
var inst_23796 = inst_23820;
var inst_23797 = inst_23819;
var inst_23798 = inst_23821;
var inst_23799 = (0);
var state_23856__$1 = (function (){var statearr_23891 = state_23856;
(statearr_23891[(9)] = inst_23799);

(statearr_23891[(20)] = inst_23798);

(statearr_23891[(10)] = inst_23797);

(statearr_23891[(21)] = inst_23796);

return statearr_23891;
})();
var statearr_23892_23964 = state_23856__$1;
(statearr_23892_23964[(2)] = null);

(statearr_23892_23964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (41))){
var inst_23815 = (state_23856[(25)]);
var inst_23831 = (state_23856[(2)]);
var inst_23832 = cljs.core.next.call(null,inst_23815);
var inst_23796 = inst_23832;
var inst_23797 = null;
var inst_23798 = (0);
var inst_23799 = (0);
var state_23856__$1 = (function (){var statearr_23893 = state_23856;
(statearr_23893[(9)] = inst_23799);

(statearr_23893[(20)] = inst_23798);

(statearr_23893[(10)] = inst_23797);

(statearr_23893[(21)] = inst_23796);

(statearr_23893[(27)] = inst_23831);

return statearr_23893;
})();
var statearr_23894_23965 = state_23856__$1;
(statearr_23894_23965[(2)] = null);

(statearr_23894_23965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (43))){
var state_23856__$1 = state_23856;
var statearr_23895_23966 = state_23856__$1;
(statearr_23895_23966[(2)] = null);

(statearr_23895_23966[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (29))){
var inst_23840 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23896_23967 = state_23856__$1;
(statearr_23896_23967[(2)] = inst_23840);

(statearr_23896_23967[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (44))){
var inst_23849 = (state_23856[(2)]);
var state_23856__$1 = (function (){var statearr_23897 = state_23856;
(statearr_23897[(28)] = inst_23849);

return statearr_23897;
})();
var statearr_23898_23968 = state_23856__$1;
(statearr_23898_23968[(2)] = null);

(statearr_23898_23968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (6))){
var inst_23788 = (state_23856[(29)]);
var inst_23787 = cljs.core.deref.call(null,cs);
var inst_23788__$1 = cljs.core.keys.call(null,inst_23787);
var inst_23789 = cljs.core.count.call(null,inst_23788__$1);
var inst_23790 = cljs.core.reset_BANG_.call(null,dctr,inst_23789);
var inst_23795 = cljs.core.seq.call(null,inst_23788__$1);
var inst_23796 = inst_23795;
var inst_23797 = null;
var inst_23798 = (0);
var inst_23799 = (0);
var state_23856__$1 = (function (){var statearr_23899 = state_23856;
(statearr_23899[(9)] = inst_23799);

(statearr_23899[(29)] = inst_23788__$1);

(statearr_23899[(20)] = inst_23798);

(statearr_23899[(10)] = inst_23797);

(statearr_23899[(30)] = inst_23790);

(statearr_23899[(21)] = inst_23796);

return statearr_23899;
})();
var statearr_23900_23969 = state_23856__$1;
(statearr_23900_23969[(2)] = null);

(statearr_23900_23969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (28))){
var inst_23815 = (state_23856[(25)]);
var inst_23796 = (state_23856[(21)]);
var inst_23815__$1 = cljs.core.seq.call(null,inst_23796);
var state_23856__$1 = (function (){var statearr_23901 = state_23856;
(statearr_23901[(25)] = inst_23815__$1);

return statearr_23901;
})();
if(inst_23815__$1){
var statearr_23902_23970 = state_23856__$1;
(statearr_23902_23970[(1)] = (33));

} else {
var statearr_23903_23971 = state_23856__$1;
(statearr_23903_23971[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (25))){
var inst_23799 = (state_23856[(9)]);
var inst_23798 = (state_23856[(20)]);
var inst_23801 = (inst_23799 < inst_23798);
var inst_23802 = inst_23801;
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23802)){
var statearr_23904_23972 = state_23856__$1;
(statearr_23904_23972[(1)] = (27));

} else {
var statearr_23905_23973 = state_23856__$1;
(statearr_23905_23973[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (34))){
var state_23856__$1 = state_23856;
var statearr_23906_23974 = state_23856__$1;
(statearr_23906_23974[(2)] = null);

(statearr_23906_23974[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (17))){
var state_23856__$1 = state_23856;
var statearr_23907_23975 = state_23856__$1;
(statearr_23907_23975[(2)] = null);

(statearr_23907_23975[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (3))){
var inst_23854 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23856__$1,inst_23854);
} else {
if((state_val_23857 === (12))){
var inst_23783 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23908_23976 = state_23856__$1;
(statearr_23908_23976[(2)] = inst_23783);

(statearr_23908_23976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (2))){
var state_23856__$1 = state_23856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23856__$1,(4),ch);
} else {
if((state_val_23857 === (23))){
var state_23856__$1 = state_23856;
var statearr_23909_23977 = state_23856__$1;
(statearr_23909_23977[(2)] = null);

(statearr_23909_23977[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (35))){
var inst_23838 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23910_23978 = state_23856__$1;
(statearr_23910_23978[(2)] = inst_23838);

(statearr_23910_23978[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (19))){
var inst_23757 = (state_23856[(7)]);
var inst_23761 = cljs.core.chunk_first.call(null,inst_23757);
var inst_23762 = cljs.core.chunk_rest.call(null,inst_23757);
var inst_23763 = cljs.core.count.call(null,inst_23761);
var inst_23737 = inst_23762;
var inst_23738 = inst_23761;
var inst_23739 = inst_23763;
var inst_23740 = (0);
var state_23856__$1 = (function (){var statearr_23911 = state_23856;
(statearr_23911[(13)] = inst_23739);

(statearr_23911[(14)] = inst_23740);

(statearr_23911[(15)] = inst_23738);

(statearr_23911[(17)] = inst_23737);

return statearr_23911;
})();
var statearr_23912_23979 = state_23856__$1;
(statearr_23912_23979[(2)] = null);

(statearr_23912_23979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (11))){
var inst_23757 = (state_23856[(7)]);
var inst_23737 = (state_23856[(17)]);
var inst_23757__$1 = cljs.core.seq.call(null,inst_23737);
var state_23856__$1 = (function (){var statearr_23913 = state_23856;
(statearr_23913[(7)] = inst_23757__$1);

return statearr_23913;
})();
if(inst_23757__$1){
var statearr_23914_23980 = state_23856__$1;
(statearr_23914_23980[(1)] = (16));

} else {
var statearr_23915_23981 = state_23856__$1;
(statearr_23915_23981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (9))){
var inst_23785 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23916_23982 = state_23856__$1;
(statearr_23916_23982[(2)] = inst_23785);

(statearr_23916_23982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (5))){
var inst_23735 = cljs.core.deref.call(null,cs);
var inst_23736 = cljs.core.seq.call(null,inst_23735);
var inst_23737 = inst_23736;
var inst_23738 = null;
var inst_23739 = (0);
var inst_23740 = (0);
var state_23856__$1 = (function (){var statearr_23917 = state_23856;
(statearr_23917[(13)] = inst_23739);

(statearr_23917[(14)] = inst_23740);

(statearr_23917[(15)] = inst_23738);

(statearr_23917[(17)] = inst_23737);

return statearr_23917;
})();
var statearr_23918_23983 = state_23856__$1;
(statearr_23918_23983[(2)] = null);

(statearr_23918_23983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (14))){
var state_23856__$1 = state_23856;
var statearr_23919_23984 = state_23856__$1;
(statearr_23919_23984[(2)] = null);

(statearr_23919_23984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (45))){
var inst_23846 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23920_23985 = state_23856__$1;
(statearr_23920_23985[(2)] = inst_23846);

(statearr_23920_23985[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (26))){
var inst_23788 = (state_23856[(29)]);
var inst_23842 = (state_23856[(2)]);
var inst_23843 = cljs.core.seq.call(null,inst_23788);
var state_23856__$1 = (function (){var statearr_23921 = state_23856;
(statearr_23921[(31)] = inst_23842);

return statearr_23921;
})();
if(inst_23843){
var statearr_23922_23986 = state_23856__$1;
(statearr_23922_23986[(1)] = (42));

} else {
var statearr_23923_23987 = state_23856__$1;
(statearr_23923_23987[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (16))){
var inst_23757 = (state_23856[(7)]);
var inst_23759 = cljs.core.chunked_seq_QMARK_.call(null,inst_23757);
var state_23856__$1 = state_23856;
if(inst_23759){
var statearr_23924_23988 = state_23856__$1;
(statearr_23924_23988[(1)] = (19));

} else {
var statearr_23925_23989 = state_23856__$1;
(statearr_23925_23989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (38))){
var inst_23835 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23926_23990 = state_23856__$1;
(statearr_23926_23990[(2)] = inst_23835);

(statearr_23926_23990[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (30))){
var state_23856__$1 = state_23856;
var statearr_23927_23991 = state_23856__$1;
(statearr_23927_23991[(2)] = null);

(statearr_23927_23991[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (10))){
var inst_23740 = (state_23856[(14)]);
var inst_23738 = (state_23856[(15)]);
var inst_23746 = cljs.core._nth.call(null,inst_23738,inst_23740);
var inst_23747 = cljs.core.nth.call(null,inst_23746,(0),null);
var inst_23748 = cljs.core.nth.call(null,inst_23746,(1),null);
var state_23856__$1 = (function (){var statearr_23928 = state_23856;
(statearr_23928[(26)] = inst_23747);

return statearr_23928;
})();
if(cljs.core.truth_(inst_23748)){
var statearr_23929_23992 = state_23856__$1;
(statearr_23929_23992[(1)] = (13));

} else {
var statearr_23930_23993 = state_23856__$1;
(statearr_23930_23993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (18))){
var inst_23781 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23931_23994 = state_23856__$1;
(statearr_23931_23994[(2)] = inst_23781);

(statearr_23931_23994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (42))){
var state_23856__$1 = state_23856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23856__$1,(45),dchan);
} else {
if((state_val_23857 === (37))){
var inst_23824 = (state_23856[(23)]);
var inst_23815 = (state_23856[(25)]);
var inst_23728 = (state_23856[(12)]);
var inst_23824__$1 = cljs.core.first.call(null,inst_23815);
var inst_23825 = cljs.core.async.put_BANG_.call(null,inst_23824__$1,inst_23728,done);
var state_23856__$1 = (function (){var statearr_23932 = state_23856;
(statearr_23932[(23)] = inst_23824__$1);

return statearr_23932;
})();
if(cljs.core.truth_(inst_23825)){
var statearr_23933_23995 = state_23856__$1;
(statearr_23933_23995[(1)] = (39));

} else {
var statearr_23934_23996 = state_23856__$1;
(statearr_23934_23996[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (8))){
var inst_23739 = (state_23856[(13)]);
var inst_23740 = (state_23856[(14)]);
var inst_23742 = (inst_23740 < inst_23739);
var inst_23743 = inst_23742;
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23743)){
var statearr_23935_23997 = state_23856__$1;
(statearr_23935_23997[(1)] = (10));

} else {
var statearr_23936_23998 = state_23856__$1;
(statearr_23936_23998[(1)] = (11));

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
});})(c__22637__auto___23944,cs,m,dchan,dctr,done))
;
return ((function (switch__22525__auto__,c__22637__auto___23944,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22526__auto__ = null;
var cljs$core$async$mult_$_state_machine__22526__auto____0 = (function (){
var statearr_23940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23940[(0)] = cljs$core$async$mult_$_state_machine__22526__auto__);

(statearr_23940[(1)] = (1));

return statearr_23940;
});
var cljs$core$async$mult_$_state_machine__22526__auto____1 = (function (state_23856){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_23856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e23941){if((e23941 instanceof Object)){
var ex__22529__auto__ = e23941;
var statearr_23942_23999 = state_23856;
(statearr_23942_23999[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24000 = state_23856;
state_23856 = G__24000;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22526__auto__ = function(state_23856){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22526__auto____1.call(this,state_23856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22526__auto____0;
cljs$core$async$mult_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22526__auto____1;
return cljs$core$async$mult_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___23944,cs,m,dchan,dctr,done))
})();
var state__22639__auto__ = (function (){var statearr_23943 = f__22638__auto__.call(null);
(statearr_23943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___23944);

return statearr_23943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___23944,cs,m,dchan,dctr,done))
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
var args24001 = [];
var len__17809__auto___24004 = arguments.length;
var i__17810__auto___24005 = (0);
while(true){
if((i__17810__auto___24005 < len__17809__auto___24004)){
args24001.push((arguments[i__17810__auto___24005]));

var G__24006 = (i__17810__auto___24005 + (1));
i__17810__auto___24005 = G__24006;
continue;
} else {
}
break;
}

var G__24003 = args24001.length;
switch (G__24003) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24001.length)].join('')));

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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m);
} else {
var m__17407__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,state_map);
} else {
var m__17407__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,state_map);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,mode);
} else {
var m__17407__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___24018 = arguments.length;
var i__17810__auto___24019 = (0);
while(true){
if((i__17810__auto___24019 < len__17809__auto___24018)){
args__17816__auto__.push((arguments[i__17810__auto___24019]));

var G__24020 = (i__17810__auto___24019 + (1));
i__17810__auto___24019 = G__24020;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24012){
var map__24013 = p__24012;
var map__24013__$1 = ((((!((map__24013 == null)))?((((map__24013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24013):map__24013);
var opts = map__24013__$1;
var statearr_24015_24021 = state;
(statearr_24015_24021[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24013,map__24013__$1,opts){
return (function (val){
var statearr_24016_24022 = state;
(statearr_24016_24022[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24013,map__24013__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24017_24023 = state;
(statearr_24017_24023[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24008){
var G__24009 = cljs.core.first.call(null,seq24008);
var seq24008__$1 = cljs.core.next.call(null,seq24008);
var G__24010 = cljs.core.first.call(null,seq24008__$1);
var seq24008__$2 = cljs.core.next.call(null,seq24008__$1);
var G__24011 = cljs.core.first.call(null,seq24008__$2);
var seq24008__$3 = cljs.core.next.call(null,seq24008__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24009,G__24010,G__24011,seq24008__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24187 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24188){
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
this.meta24188 = meta24188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24189,meta24188__$1){
var self__ = this;
var _24189__$1 = this;
return (new cljs.core.async.t_cljs$core$async24187(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24188__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24189){
var self__ = this;
var _24189__$1 = this;
return self__.meta24188;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24187.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24187.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24188","meta24188",1141406945,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24187";

cljs.core.async.t_cljs$core$async24187.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24187");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24187 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24187(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24188){
return (new cljs.core.async.t_cljs$core$async24187(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24188));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24187(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22637__auto___24350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___24350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___24350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24287){
var state_val_24288 = (state_24287[(1)]);
if((state_val_24288 === (7))){
var inst_24205 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24289_24351 = state_24287__$1;
(statearr_24289_24351[(2)] = inst_24205);

(statearr_24289_24351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (20))){
var inst_24217 = (state_24287[(7)]);
var state_24287__$1 = state_24287;
var statearr_24290_24352 = state_24287__$1;
(statearr_24290_24352[(2)] = inst_24217);

(statearr_24290_24352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (27))){
var state_24287__$1 = state_24287;
var statearr_24291_24353 = state_24287__$1;
(statearr_24291_24353[(2)] = null);

(statearr_24291_24353[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (1))){
var inst_24193 = (state_24287[(8)]);
var inst_24193__$1 = calc_state.call(null);
var inst_24195 = (inst_24193__$1 == null);
var inst_24196 = cljs.core.not.call(null,inst_24195);
var state_24287__$1 = (function (){var statearr_24292 = state_24287;
(statearr_24292[(8)] = inst_24193__$1);

return statearr_24292;
})();
if(inst_24196){
var statearr_24293_24354 = state_24287__$1;
(statearr_24293_24354[(1)] = (2));

} else {
var statearr_24294_24355 = state_24287__$1;
(statearr_24294_24355[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (24))){
var inst_24240 = (state_24287[(9)]);
var inst_24261 = (state_24287[(10)]);
var inst_24247 = (state_24287[(11)]);
var inst_24261__$1 = inst_24240.call(null,inst_24247);
var state_24287__$1 = (function (){var statearr_24295 = state_24287;
(statearr_24295[(10)] = inst_24261__$1);

return statearr_24295;
})();
if(cljs.core.truth_(inst_24261__$1)){
var statearr_24296_24356 = state_24287__$1;
(statearr_24296_24356[(1)] = (29));

} else {
var statearr_24297_24357 = state_24287__$1;
(statearr_24297_24357[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (4))){
var inst_24208 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
if(cljs.core.truth_(inst_24208)){
var statearr_24298_24358 = state_24287__$1;
(statearr_24298_24358[(1)] = (8));

} else {
var statearr_24299_24359 = state_24287__$1;
(statearr_24299_24359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (15))){
var inst_24234 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
if(cljs.core.truth_(inst_24234)){
var statearr_24300_24360 = state_24287__$1;
(statearr_24300_24360[(1)] = (19));

} else {
var statearr_24301_24361 = state_24287__$1;
(statearr_24301_24361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (21))){
var inst_24239 = (state_24287[(12)]);
var inst_24239__$1 = (state_24287[(2)]);
var inst_24240 = cljs.core.get.call(null,inst_24239__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24241 = cljs.core.get.call(null,inst_24239__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24242 = cljs.core.get.call(null,inst_24239__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24287__$1 = (function (){var statearr_24302 = state_24287;
(statearr_24302[(9)] = inst_24240);

(statearr_24302[(12)] = inst_24239__$1);

(statearr_24302[(13)] = inst_24241);

return statearr_24302;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24287__$1,(22),inst_24242);
} else {
if((state_val_24288 === (31))){
var inst_24269 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
if(cljs.core.truth_(inst_24269)){
var statearr_24303_24362 = state_24287__$1;
(statearr_24303_24362[(1)] = (32));

} else {
var statearr_24304_24363 = state_24287__$1;
(statearr_24304_24363[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (32))){
var inst_24246 = (state_24287[(14)]);
var state_24287__$1 = state_24287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24287__$1,(35),out,inst_24246);
} else {
if((state_val_24288 === (33))){
var inst_24239 = (state_24287[(12)]);
var inst_24217 = inst_24239;
var state_24287__$1 = (function (){var statearr_24305 = state_24287;
(statearr_24305[(7)] = inst_24217);

return statearr_24305;
})();
var statearr_24306_24364 = state_24287__$1;
(statearr_24306_24364[(2)] = null);

(statearr_24306_24364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (13))){
var inst_24217 = (state_24287[(7)]);
var inst_24224 = inst_24217.cljs$lang$protocol_mask$partition0$;
var inst_24225 = (inst_24224 & (64));
var inst_24226 = inst_24217.cljs$core$ISeq$;
var inst_24227 = (inst_24225) || (inst_24226);
var state_24287__$1 = state_24287;
if(cljs.core.truth_(inst_24227)){
var statearr_24307_24365 = state_24287__$1;
(statearr_24307_24365[(1)] = (16));

} else {
var statearr_24308_24366 = state_24287__$1;
(statearr_24308_24366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (22))){
var inst_24247 = (state_24287[(11)]);
var inst_24246 = (state_24287[(14)]);
var inst_24245 = (state_24287[(2)]);
var inst_24246__$1 = cljs.core.nth.call(null,inst_24245,(0),null);
var inst_24247__$1 = cljs.core.nth.call(null,inst_24245,(1),null);
var inst_24248 = (inst_24246__$1 == null);
var inst_24249 = cljs.core._EQ_.call(null,inst_24247__$1,change);
var inst_24250 = (inst_24248) || (inst_24249);
var state_24287__$1 = (function (){var statearr_24309 = state_24287;
(statearr_24309[(11)] = inst_24247__$1);

(statearr_24309[(14)] = inst_24246__$1);

return statearr_24309;
})();
if(cljs.core.truth_(inst_24250)){
var statearr_24310_24367 = state_24287__$1;
(statearr_24310_24367[(1)] = (23));

} else {
var statearr_24311_24368 = state_24287__$1;
(statearr_24311_24368[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (36))){
var inst_24239 = (state_24287[(12)]);
var inst_24217 = inst_24239;
var state_24287__$1 = (function (){var statearr_24312 = state_24287;
(statearr_24312[(7)] = inst_24217);

return statearr_24312;
})();
var statearr_24313_24369 = state_24287__$1;
(statearr_24313_24369[(2)] = null);

(statearr_24313_24369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (29))){
var inst_24261 = (state_24287[(10)]);
var state_24287__$1 = state_24287;
var statearr_24314_24370 = state_24287__$1;
(statearr_24314_24370[(2)] = inst_24261);

(statearr_24314_24370[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (6))){
var state_24287__$1 = state_24287;
var statearr_24315_24371 = state_24287__$1;
(statearr_24315_24371[(2)] = false);

(statearr_24315_24371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (28))){
var inst_24257 = (state_24287[(2)]);
var inst_24258 = calc_state.call(null);
var inst_24217 = inst_24258;
var state_24287__$1 = (function (){var statearr_24316 = state_24287;
(statearr_24316[(7)] = inst_24217);

(statearr_24316[(15)] = inst_24257);

return statearr_24316;
})();
var statearr_24317_24372 = state_24287__$1;
(statearr_24317_24372[(2)] = null);

(statearr_24317_24372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (25))){
var inst_24283 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24318_24373 = state_24287__$1;
(statearr_24318_24373[(2)] = inst_24283);

(statearr_24318_24373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (34))){
var inst_24281 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24319_24374 = state_24287__$1;
(statearr_24319_24374[(2)] = inst_24281);

(statearr_24319_24374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (17))){
var state_24287__$1 = state_24287;
var statearr_24320_24375 = state_24287__$1;
(statearr_24320_24375[(2)] = false);

(statearr_24320_24375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (3))){
var state_24287__$1 = state_24287;
var statearr_24321_24376 = state_24287__$1;
(statearr_24321_24376[(2)] = false);

(statearr_24321_24376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (12))){
var inst_24285 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24287__$1,inst_24285);
} else {
if((state_val_24288 === (2))){
var inst_24193 = (state_24287[(8)]);
var inst_24198 = inst_24193.cljs$lang$protocol_mask$partition0$;
var inst_24199 = (inst_24198 & (64));
var inst_24200 = inst_24193.cljs$core$ISeq$;
var inst_24201 = (inst_24199) || (inst_24200);
var state_24287__$1 = state_24287;
if(cljs.core.truth_(inst_24201)){
var statearr_24322_24377 = state_24287__$1;
(statearr_24322_24377[(1)] = (5));

} else {
var statearr_24323_24378 = state_24287__$1;
(statearr_24323_24378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (23))){
var inst_24246 = (state_24287[(14)]);
var inst_24252 = (inst_24246 == null);
var state_24287__$1 = state_24287;
if(cljs.core.truth_(inst_24252)){
var statearr_24324_24379 = state_24287__$1;
(statearr_24324_24379[(1)] = (26));

} else {
var statearr_24325_24380 = state_24287__$1;
(statearr_24325_24380[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (35))){
var inst_24272 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
if(cljs.core.truth_(inst_24272)){
var statearr_24326_24381 = state_24287__$1;
(statearr_24326_24381[(1)] = (36));

} else {
var statearr_24327_24382 = state_24287__$1;
(statearr_24327_24382[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (19))){
var inst_24217 = (state_24287[(7)]);
var inst_24236 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24217);
var state_24287__$1 = state_24287;
var statearr_24328_24383 = state_24287__$1;
(statearr_24328_24383[(2)] = inst_24236);

(statearr_24328_24383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (11))){
var inst_24217 = (state_24287[(7)]);
var inst_24221 = (inst_24217 == null);
var inst_24222 = cljs.core.not.call(null,inst_24221);
var state_24287__$1 = state_24287;
if(inst_24222){
var statearr_24329_24384 = state_24287__$1;
(statearr_24329_24384[(1)] = (13));

} else {
var statearr_24330_24385 = state_24287__$1;
(statearr_24330_24385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (9))){
var inst_24193 = (state_24287[(8)]);
var state_24287__$1 = state_24287;
var statearr_24331_24386 = state_24287__$1;
(statearr_24331_24386[(2)] = inst_24193);

(statearr_24331_24386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (5))){
var state_24287__$1 = state_24287;
var statearr_24332_24387 = state_24287__$1;
(statearr_24332_24387[(2)] = true);

(statearr_24332_24387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (14))){
var state_24287__$1 = state_24287;
var statearr_24333_24388 = state_24287__$1;
(statearr_24333_24388[(2)] = false);

(statearr_24333_24388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (26))){
var inst_24247 = (state_24287[(11)]);
var inst_24254 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24247);
var state_24287__$1 = state_24287;
var statearr_24334_24389 = state_24287__$1;
(statearr_24334_24389[(2)] = inst_24254);

(statearr_24334_24389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (16))){
var state_24287__$1 = state_24287;
var statearr_24335_24390 = state_24287__$1;
(statearr_24335_24390[(2)] = true);

(statearr_24335_24390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (38))){
var inst_24277 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24336_24391 = state_24287__$1;
(statearr_24336_24391[(2)] = inst_24277);

(statearr_24336_24391[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (30))){
var inst_24240 = (state_24287[(9)]);
var inst_24247 = (state_24287[(11)]);
var inst_24241 = (state_24287[(13)]);
var inst_24264 = cljs.core.empty_QMARK_.call(null,inst_24240);
var inst_24265 = inst_24241.call(null,inst_24247);
var inst_24266 = cljs.core.not.call(null,inst_24265);
var inst_24267 = (inst_24264) && (inst_24266);
var state_24287__$1 = state_24287;
var statearr_24337_24392 = state_24287__$1;
(statearr_24337_24392[(2)] = inst_24267);

(statearr_24337_24392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (10))){
var inst_24193 = (state_24287[(8)]);
var inst_24213 = (state_24287[(2)]);
var inst_24214 = cljs.core.get.call(null,inst_24213,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24215 = cljs.core.get.call(null,inst_24213,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24216 = cljs.core.get.call(null,inst_24213,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24217 = inst_24193;
var state_24287__$1 = (function (){var statearr_24338 = state_24287;
(statearr_24338[(16)] = inst_24216);

(statearr_24338[(17)] = inst_24215);

(statearr_24338[(7)] = inst_24217);

(statearr_24338[(18)] = inst_24214);

return statearr_24338;
})();
var statearr_24339_24393 = state_24287__$1;
(statearr_24339_24393[(2)] = null);

(statearr_24339_24393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (18))){
var inst_24231 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24340_24394 = state_24287__$1;
(statearr_24340_24394[(2)] = inst_24231);

(statearr_24340_24394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (37))){
var state_24287__$1 = state_24287;
var statearr_24341_24395 = state_24287__$1;
(statearr_24341_24395[(2)] = null);

(statearr_24341_24395[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (8))){
var inst_24193 = (state_24287[(8)]);
var inst_24210 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24193);
var state_24287__$1 = state_24287;
var statearr_24342_24396 = state_24287__$1;
(statearr_24342_24396[(2)] = inst_24210);

(statearr_24342_24396[(1)] = (10));


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
});})(c__22637__auto___24350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22525__auto__,c__22637__auto___24350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22526__auto__ = null;
var cljs$core$async$mix_$_state_machine__22526__auto____0 = (function (){
var statearr_24346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24346[(0)] = cljs$core$async$mix_$_state_machine__22526__auto__);

(statearr_24346[(1)] = (1));

return statearr_24346;
});
var cljs$core$async$mix_$_state_machine__22526__auto____1 = (function (state_24287){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_24287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e24347){if((e24347 instanceof Object)){
var ex__22529__auto__ = e24347;
var statearr_24348_24397 = state_24287;
(statearr_24348_24397[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24398 = state_24287;
state_24287 = G__24398;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22526__auto__ = function(state_24287){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22526__auto____1.call(this,state_24287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22526__auto____0;
cljs$core$async$mix_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22526__auto____1;
return cljs$core$async$mix_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___24350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22639__auto__ = (function (){var statearr_24349 = f__22638__auto__.call(null);
(statearr_24349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___24350);

return statearr_24349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___24350,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17407__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p,v,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24399 = [];
var len__17809__auto___24402 = arguments.length;
var i__17810__auto___24403 = (0);
while(true){
if((i__17810__auto___24403 < len__17809__auto___24402)){
args24399.push((arguments[i__17810__auto___24403]));

var G__24404 = (i__17810__auto___24403 + (1));
i__17810__auto___24403 = G__24404;
continue;
} else {
}
break;
}

var G__24401 = args24399.length;
switch (G__24401) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24399.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p);
} else {
var m__17407__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p);
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
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p,v);
} else {
var m__17407__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p,v);
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
var args24407 = [];
var len__17809__auto___24532 = arguments.length;
var i__17810__auto___24533 = (0);
while(true){
if((i__17810__auto___24533 < len__17809__auto___24532)){
args24407.push((arguments[i__17810__auto___24533]));

var G__24534 = (i__17810__auto___24533 + (1));
i__17810__auto___24533 = G__24534;
continue;
} else {
}
break;
}

var G__24409 = args24407.length;
switch (G__24409) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24407.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16751__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16751__auto__,mults){
return (function (p1__24406_SHARP_){
if(cljs.core.truth_(p1__24406_SHARP_.call(null,topic))){
return p1__24406_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24406_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24410 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24411){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24411 = meta24411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24412,meta24411__$1){
var self__ = this;
var _24412__$1 = this;
return (new cljs.core.async.t_cljs$core$async24410(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24411__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24412){
var self__ = this;
var _24412__$1 = this;
return self__.meta24411;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24410.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24411","meta24411",-25997711,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24410";

cljs.core.async.t_cljs$core$async24410.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24410");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24410 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24410(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24411){
return (new cljs.core.async.t_cljs$core$async24410(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24411));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24410(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22637__auto___24536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___24536,mults,ensure_mult,p){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___24536,mults,ensure_mult,p){
return (function (state_24484){
var state_val_24485 = (state_24484[(1)]);
if((state_val_24485 === (7))){
var inst_24480 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
var statearr_24486_24537 = state_24484__$1;
(statearr_24486_24537[(2)] = inst_24480);

(statearr_24486_24537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (20))){
var state_24484__$1 = state_24484;
var statearr_24487_24538 = state_24484__$1;
(statearr_24487_24538[(2)] = null);

(statearr_24487_24538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (1))){
var state_24484__$1 = state_24484;
var statearr_24488_24539 = state_24484__$1;
(statearr_24488_24539[(2)] = null);

(statearr_24488_24539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (24))){
var inst_24463 = (state_24484[(7)]);
var inst_24472 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24463);
var state_24484__$1 = state_24484;
var statearr_24489_24540 = state_24484__$1;
(statearr_24489_24540[(2)] = inst_24472);

(statearr_24489_24540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (4))){
var inst_24415 = (state_24484[(8)]);
var inst_24415__$1 = (state_24484[(2)]);
var inst_24416 = (inst_24415__$1 == null);
var state_24484__$1 = (function (){var statearr_24490 = state_24484;
(statearr_24490[(8)] = inst_24415__$1);

return statearr_24490;
})();
if(cljs.core.truth_(inst_24416)){
var statearr_24491_24541 = state_24484__$1;
(statearr_24491_24541[(1)] = (5));

} else {
var statearr_24492_24542 = state_24484__$1;
(statearr_24492_24542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (15))){
var inst_24457 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
var statearr_24493_24543 = state_24484__$1;
(statearr_24493_24543[(2)] = inst_24457);

(statearr_24493_24543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (21))){
var inst_24477 = (state_24484[(2)]);
var state_24484__$1 = (function (){var statearr_24494 = state_24484;
(statearr_24494[(9)] = inst_24477);

return statearr_24494;
})();
var statearr_24495_24544 = state_24484__$1;
(statearr_24495_24544[(2)] = null);

(statearr_24495_24544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (13))){
var inst_24439 = (state_24484[(10)]);
var inst_24441 = cljs.core.chunked_seq_QMARK_.call(null,inst_24439);
var state_24484__$1 = state_24484;
if(inst_24441){
var statearr_24496_24545 = state_24484__$1;
(statearr_24496_24545[(1)] = (16));

} else {
var statearr_24497_24546 = state_24484__$1;
(statearr_24497_24546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (22))){
var inst_24469 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
if(cljs.core.truth_(inst_24469)){
var statearr_24498_24547 = state_24484__$1;
(statearr_24498_24547[(1)] = (23));

} else {
var statearr_24499_24548 = state_24484__$1;
(statearr_24499_24548[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (6))){
var inst_24415 = (state_24484[(8)]);
var inst_24463 = (state_24484[(7)]);
var inst_24465 = (state_24484[(11)]);
var inst_24463__$1 = topic_fn.call(null,inst_24415);
var inst_24464 = cljs.core.deref.call(null,mults);
var inst_24465__$1 = cljs.core.get.call(null,inst_24464,inst_24463__$1);
var state_24484__$1 = (function (){var statearr_24500 = state_24484;
(statearr_24500[(7)] = inst_24463__$1);

(statearr_24500[(11)] = inst_24465__$1);

return statearr_24500;
})();
if(cljs.core.truth_(inst_24465__$1)){
var statearr_24501_24549 = state_24484__$1;
(statearr_24501_24549[(1)] = (19));

} else {
var statearr_24502_24550 = state_24484__$1;
(statearr_24502_24550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (25))){
var inst_24474 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
var statearr_24503_24551 = state_24484__$1;
(statearr_24503_24551[(2)] = inst_24474);

(statearr_24503_24551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (17))){
var inst_24439 = (state_24484[(10)]);
var inst_24448 = cljs.core.first.call(null,inst_24439);
var inst_24449 = cljs.core.async.muxch_STAR_.call(null,inst_24448);
var inst_24450 = cljs.core.async.close_BANG_.call(null,inst_24449);
var inst_24451 = cljs.core.next.call(null,inst_24439);
var inst_24425 = inst_24451;
var inst_24426 = null;
var inst_24427 = (0);
var inst_24428 = (0);
var state_24484__$1 = (function (){var statearr_24504 = state_24484;
(statearr_24504[(12)] = inst_24428);

(statearr_24504[(13)] = inst_24425);

(statearr_24504[(14)] = inst_24427);

(statearr_24504[(15)] = inst_24426);

(statearr_24504[(16)] = inst_24450);

return statearr_24504;
})();
var statearr_24505_24552 = state_24484__$1;
(statearr_24505_24552[(2)] = null);

(statearr_24505_24552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (3))){
var inst_24482 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24484__$1,inst_24482);
} else {
if((state_val_24485 === (12))){
var inst_24459 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
var statearr_24506_24553 = state_24484__$1;
(statearr_24506_24553[(2)] = inst_24459);

(statearr_24506_24553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (2))){
var state_24484__$1 = state_24484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24484__$1,(4),ch);
} else {
if((state_val_24485 === (23))){
var state_24484__$1 = state_24484;
var statearr_24507_24554 = state_24484__$1;
(statearr_24507_24554[(2)] = null);

(statearr_24507_24554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (19))){
var inst_24415 = (state_24484[(8)]);
var inst_24465 = (state_24484[(11)]);
var inst_24467 = cljs.core.async.muxch_STAR_.call(null,inst_24465);
var state_24484__$1 = state_24484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24484__$1,(22),inst_24467,inst_24415);
} else {
if((state_val_24485 === (11))){
var inst_24425 = (state_24484[(13)]);
var inst_24439 = (state_24484[(10)]);
var inst_24439__$1 = cljs.core.seq.call(null,inst_24425);
var state_24484__$1 = (function (){var statearr_24508 = state_24484;
(statearr_24508[(10)] = inst_24439__$1);

return statearr_24508;
})();
if(inst_24439__$1){
var statearr_24509_24555 = state_24484__$1;
(statearr_24509_24555[(1)] = (13));

} else {
var statearr_24510_24556 = state_24484__$1;
(statearr_24510_24556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (9))){
var inst_24461 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
var statearr_24511_24557 = state_24484__$1;
(statearr_24511_24557[(2)] = inst_24461);

(statearr_24511_24557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (5))){
var inst_24422 = cljs.core.deref.call(null,mults);
var inst_24423 = cljs.core.vals.call(null,inst_24422);
var inst_24424 = cljs.core.seq.call(null,inst_24423);
var inst_24425 = inst_24424;
var inst_24426 = null;
var inst_24427 = (0);
var inst_24428 = (0);
var state_24484__$1 = (function (){var statearr_24512 = state_24484;
(statearr_24512[(12)] = inst_24428);

(statearr_24512[(13)] = inst_24425);

(statearr_24512[(14)] = inst_24427);

(statearr_24512[(15)] = inst_24426);

return statearr_24512;
})();
var statearr_24513_24558 = state_24484__$1;
(statearr_24513_24558[(2)] = null);

(statearr_24513_24558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (14))){
var state_24484__$1 = state_24484;
var statearr_24517_24559 = state_24484__$1;
(statearr_24517_24559[(2)] = null);

(statearr_24517_24559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (16))){
var inst_24439 = (state_24484[(10)]);
var inst_24443 = cljs.core.chunk_first.call(null,inst_24439);
var inst_24444 = cljs.core.chunk_rest.call(null,inst_24439);
var inst_24445 = cljs.core.count.call(null,inst_24443);
var inst_24425 = inst_24444;
var inst_24426 = inst_24443;
var inst_24427 = inst_24445;
var inst_24428 = (0);
var state_24484__$1 = (function (){var statearr_24518 = state_24484;
(statearr_24518[(12)] = inst_24428);

(statearr_24518[(13)] = inst_24425);

(statearr_24518[(14)] = inst_24427);

(statearr_24518[(15)] = inst_24426);

return statearr_24518;
})();
var statearr_24519_24560 = state_24484__$1;
(statearr_24519_24560[(2)] = null);

(statearr_24519_24560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (10))){
var inst_24428 = (state_24484[(12)]);
var inst_24425 = (state_24484[(13)]);
var inst_24427 = (state_24484[(14)]);
var inst_24426 = (state_24484[(15)]);
var inst_24433 = cljs.core._nth.call(null,inst_24426,inst_24428);
var inst_24434 = cljs.core.async.muxch_STAR_.call(null,inst_24433);
var inst_24435 = cljs.core.async.close_BANG_.call(null,inst_24434);
var inst_24436 = (inst_24428 + (1));
var tmp24514 = inst_24425;
var tmp24515 = inst_24427;
var tmp24516 = inst_24426;
var inst_24425__$1 = tmp24514;
var inst_24426__$1 = tmp24516;
var inst_24427__$1 = tmp24515;
var inst_24428__$1 = inst_24436;
var state_24484__$1 = (function (){var statearr_24520 = state_24484;
(statearr_24520[(12)] = inst_24428__$1);

(statearr_24520[(13)] = inst_24425__$1);

(statearr_24520[(14)] = inst_24427__$1);

(statearr_24520[(17)] = inst_24435);

(statearr_24520[(15)] = inst_24426__$1);

return statearr_24520;
})();
var statearr_24521_24561 = state_24484__$1;
(statearr_24521_24561[(2)] = null);

(statearr_24521_24561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (18))){
var inst_24454 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
var statearr_24522_24562 = state_24484__$1;
(statearr_24522_24562[(2)] = inst_24454);

(statearr_24522_24562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24485 === (8))){
var inst_24428 = (state_24484[(12)]);
var inst_24427 = (state_24484[(14)]);
var inst_24430 = (inst_24428 < inst_24427);
var inst_24431 = inst_24430;
var state_24484__$1 = state_24484;
if(cljs.core.truth_(inst_24431)){
var statearr_24523_24563 = state_24484__$1;
(statearr_24523_24563[(1)] = (10));

} else {
var statearr_24524_24564 = state_24484__$1;
(statearr_24524_24564[(1)] = (11));

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
});})(c__22637__auto___24536,mults,ensure_mult,p))
;
return ((function (switch__22525__auto__,c__22637__auto___24536,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_24528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24528[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_24528[(1)] = (1));

return statearr_24528;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_24484){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_24484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e24529){if((e24529 instanceof Object)){
var ex__22529__auto__ = e24529;
var statearr_24530_24565 = state_24484;
(statearr_24530_24565[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24566 = state_24484;
state_24484 = G__24566;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_24484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_24484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___24536,mults,ensure_mult,p))
})();
var state__22639__auto__ = (function (){var statearr_24531 = f__22638__auto__.call(null);
(statearr_24531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___24536);

return statearr_24531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___24536,mults,ensure_mult,p))
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
var args24567 = [];
var len__17809__auto___24570 = arguments.length;
var i__17810__auto___24571 = (0);
while(true){
if((i__17810__auto___24571 < len__17809__auto___24570)){
args24567.push((arguments[i__17810__auto___24571]));

var G__24572 = (i__17810__auto___24571 + (1));
i__17810__auto___24571 = G__24572;
continue;
} else {
}
break;
}

var G__24569 = args24567.length;
switch (G__24569) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24567.length)].join('')));

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
var args24574 = [];
var len__17809__auto___24577 = arguments.length;
var i__17810__auto___24578 = (0);
while(true){
if((i__17810__auto___24578 < len__17809__auto___24577)){
args24574.push((arguments[i__17810__auto___24578]));

var G__24579 = (i__17810__auto___24578 + (1));
i__17810__auto___24578 = G__24579;
continue;
} else {
}
break;
}

var G__24576 = args24574.length;
switch (G__24576) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24574.length)].join('')));

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
var args24581 = [];
var len__17809__auto___24652 = arguments.length;
var i__17810__auto___24653 = (0);
while(true){
if((i__17810__auto___24653 < len__17809__auto___24652)){
args24581.push((arguments[i__17810__auto___24653]));

var G__24654 = (i__17810__auto___24653 + (1));
i__17810__auto___24653 = G__24654;
continue;
} else {
}
break;
}

var G__24583 = args24581.length;
switch (G__24583) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24581.length)].join('')));

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
var c__22637__auto___24656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___24656,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___24656,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24622){
var state_val_24623 = (state_24622[(1)]);
if((state_val_24623 === (7))){
var state_24622__$1 = state_24622;
var statearr_24624_24657 = state_24622__$1;
(statearr_24624_24657[(2)] = null);

(statearr_24624_24657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (1))){
var state_24622__$1 = state_24622;
var statearr_24625_24658 = state_24622__$1;
(statearr_24625_24658[(2)] = null);

(statearr_24625_24658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (4))){
var inst_24586 = (state_24622[(7)]);
var inst_24588 = (inst_24586 < cnt);
var state_24622__$1 = state_24622;
if(cljs.core.truth_(inst_24588)){
var statearr_24626_24659 = state_24622__$1;
(statearr_24626_24659[(1)] = (6));

} else {
var statearr_24627_24660 = state_24622__$1;
(statearr_24627_24660[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (15))){
var inst_24618 = (state_24622[(2)]);
var state_24622__$1 = state_24622;
var statearr_24628_24661 = state_24622__$1;
(statearr_24628_24661[(2)] = inst_24618);

(statearr_24628_24661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (13))){
var inst_24611 = cljs.core.async.close_BANG_.call(null,out);
var state_24622__$1 = state_24622;
var statearr_24629_24662 = state_24622__$1;
(statearr_24629_24662[(2)] = inst_24611);

(statearr_24629_24662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (6))){
var state_24622__$1 = state_24622;
var statearr_24630_24663 = state_24622__$1;
(statearr_24630_24663[(2)] = null);

(statearr_24630_24663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (3))){
var inst_24620 = (state_24622[(2)]);
var state_24622__$1 = state_24622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24622__$1,inst_24620);
} else {
if((state_val_24623 === (12))){
var inst_24608 = (state_24622[(8)]);
var inst_24608__$1 = (state_24622[(2)]);
var inst_24609 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24608__$1);
var state_24622__$1 = (function (){var statearr_24631 = state_24622;
(statearr_24631[(8)] = inst_24608__$1);

return statearr_24631;
})();
if(cljs.core.truth_(inst_24609)){
var statearr_24632_24664 = state_24622__$1;
(statearr_24632_24664[(1)] = (13));

} else {
var statearr_24633_24665 = state_24622__$1;
(statearr_24633_24665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (2))){
var inst_24585 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24586 = (0);
var state_24622__$1 = (function (){var statearr_24634 = state_24622;
(statearr_24634[(7)] = inst_24586);

(statearr_24634[(9)] = inst_24585);

return statearr_24634;
})();
var statearr_24635_24666 = state_24622__$1;
(statearr_24635_24666[(2)] = null);

(statearr_24635_24666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (11))){
var inst_24586 = (state_24622[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24622,(10),Object,null,(9));
var inst_24595 = chs__$1.call(null,inst_24586);
var inst_24596 = done.call(null,inst_24586);
var inst_24597 = cljs.core.async.take_BANG_.call(null,inst_24595,inst_24596);
var state_24622__$1 = state_24622;
var statearr_24636_24667 = state_24622__$1;
(statearr_24636_24667[(2)] = inst_24597);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24622__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (9))){
var inst_24586 = (state_24622[(7)]);
var inst_24599 = (state_24622[(2)]);
var inst_24600 = (inst_24586 + (1));
var inst_24586__$1 = inst_24600;
var state_24622__$1 = (function (){var statearr_24637 = state_24622;
(statearr_24637[(7)] = inst_24586__$1);

(statearr_24637[(10)] = inst_24599);

return statearr_24637;
})();
var statearr_24638_24668 = state_24622__$1;
(statearr_24638_24668[(2)] = null);

(statearr_24638_24668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (5))){
var inst_24606 = (state_24622[(2)]);
var state_24622__$1 = (function (){var statearr_24639 = state_24622;
(statearr_24639[(11)] = inst_24606);

return statearr_24639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24622__$1,(12),dchan);
} else {
if((state_val_24623 === (14))){
var inst_24608 = (state_24622[(8)]);
var inst_24613 = cljs.core.apply.call(null,f,inst_24608);
var state_24622__$1 = state_24622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24622__$1,(16),out,inst_24613);
} else {
if((state_val_24623 === (16))){
var inst_24615 = (state_24622[(2)]);
var state_24622__$1 = (function (){var statearr_24640 = state_24622;
(statearr_24640[(12)] = inst_24615);

return statearr_24640;
})();
var statearr_24641_24669 = state_24622__$1;
(statearr_24641_24669[(2)] = null);

(statearr_24641_24669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (10))){
var inst_24590 = (state_24622[(2)]);
var inst_24591 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24622__$1 = (function (){var statearr_24642 = state_24622;
(statearr_24642[(13)] = inst_24590);

return statearr_24642;
})();
var statearr_24643_24670 = state_24622__$1;
(statearr_24643_24670[(2)] = inst_24591);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24622__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (8))){
var inst_24604 = (state_24622[(2)]);
var state_24622__$1 = state_24622;
var statearr_24644_24671 = state_24622__$1;
(statearr_24644_24671[(2)] = inst_24604);

(statearr_24644_24671[(1)] = (5));


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
});})(c__22637__auto___24656,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22525__auto__,c__22637__auto___24656,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_24648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24648[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_24648[(1)] = (1));

return statearr_24648;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_24622){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_24622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e24649){if((e24649 instanceof Object)){
var ex__22529__auto__ = e24649;
var statearr_24650_24672 = state_24622;
(statearr_24650_24672[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24673 = state_24622;
state_24622 = G__24673;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_24622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_24622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___24656,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22639__auto__ = (function (){var statearr_24651 = f__22638__auto__.call(null);
(statearr_24651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___24656);

return statearr_24651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___24656,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24675 = [];
var len__17809__auto___24731 = arguments.length;
var i__17810__auto___24732 = (0);
while(true){
if((i__17810__auto___24732 < len__17809__auto___24731)){
args24675.push((arguments[i__17810__auto___24732]));

var G__24733 = (i__17810__auto___24732 + (1));
i__17810__auto___24732 = G__24733;
continue;
} else {
}
break;
}

var G__24677 = args24675.length;
switch (G__24677) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24675.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22637__auto___24735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___24735,out){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___24735,out){
return (function (state_24707){
var state_val_24708 = (state_24707[(1)]);
if((state_val_24708 === (7))){
var inst_24687 = (state_24707[(7)]);
var inst_24686 = (state_24707[(8)]);
var inst_24686__$1 = (state_24707[(2)]);
var inst_24687__$1 = cljs.core.nth.call(null,inst_24686__$1,(0),null);
var inst_24688 = cljs.core.nth.call(null,inst_24686__$1,(1),null);
var inst_24689 = (inst_24687__$1 == null);
var state_24707__$1 = (function (){var statearr_24709 = state_24707;
(statearr_24709[(7)] = inst_24687__$1);

(statearr_24709[(8)] = inst_24686__$1);

(statearr_24709[(9)] = inst_24688);

return statearr_24709;
})();
if(cljs.core.truth_(inst_24689)){
var statearr_24710_24736 = state_24707__$1;
(statearr_24710_24736[(1)] = (8));

} else {
var statearr_24711_24737 = state_24707__$1;
(statearr_24711_24737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (1))){
var inst_24678 = cljs.core.vec.call(null,chs);
var inst_24679 = inst_24678;
var state_24707__$1 = (function (){var statearr_24712 = state_24707;
(statearr_24712[(10)] = inst_24679);

return statearr_24712;
})();
var statearr_24713_24738 = state_24707__$1;
(statearr_24713_24738[(2)] = null);

(statearr_24713_24738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (4))){
var inst_24679 = (state_24707[(10)]);
var state_24707__$1 = state_24707;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24707__$1,(7),inst_24679);
} else {
if((state_val_24708 === (6))){
var inst_24703 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24714_24739 = state_24707__$1;
(statearr_24714_24739[(2)] = inst_24703);

(statearr_24714_24739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (3))){
var inst_24705 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24707__$1,inst_24705);
} else {
if((state_val_24708 === (2))){
var inst_24679 = (state_24707[(10)]);
var inst_24681 = cljs.core.count.call(null,inst_24679);
var inst_24682 = (inst_24681 > (0));
var state_24707__$1 = state_24707;
if(cljs.core.truth_(inst_24682)){
var statearr_24716_24740 = state_24707__$1;
(statearr_24716_24740[(1)] = (4));

} else {
var statearr_24717_24741 = state_24707__$1;
(statearr_24717_24741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (11))){
var inst_24679 = (state_24707[(10)]);
var inst_24696 = (state_24707[(2)]);
var tmp24715 = inst_24679;
var inst_24679__$1 = tmp24715;
var state_24707__$1 = (function (){var statearr_24718 = state_24707;
(statearr_24718[(11)] = inst_24696);

(statearr_24718[(10)] = inst_24679__$1);

return statearr_24718;
})();
var statearr_24719_24742 = state_24707__$1;
(statearr_24719_24742[(2)] = null);

(statearr_24719_24742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (9))){
var inst_24687 = (state_24707[(7)]);
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24707__$1,(11),out,inst_24687);
} else {
if((state_val_24708 === (5))){
var inst_24701 = cljs.core.async.close_BANG_.call(null,out);
var state_24707__$1 = state_24707;
var statearr_24720_24743 = state_24707__$1;
(statearr_24720_24743[(2)] = inst_24701);

(statearr_24720_24743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (10))){
var inst_24699 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24721_24744 = state_24707__$1;
(statearr_24721_24744[(2)] = inst_24699);

(statearr_24721_24744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (8))){
var inst_24687 = (state_24707[(7)]);
var inst_24686 = (state_24707[(8)]);
var inst_24688 = (state_24707[(9)]);
var inst_24679 = (state_24707[(10)]);
var inst_24691 = (function (){var cs = inst_24679;
var vec__24684 = inst_24686;
var v = inst_24687;
var c = inst_24688;
return ((function (cs,vec__24684,v,c,inst_24687,inst_24686,inst_24688,inst_24679,state_val_24708,c__22637__auto___24735,out){
return (function (p1__24674_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24674_SHARP_);
});
;})(cs,vec__24684,v,c,inst_24687,inst_24686,inst_24688,inst_24679,state_val_24708,c__22637__auto___24735,out))
})();
var inst_24692 = cljs.core.filterv.call(null,inst_24691,inst_24679);
var inst_24679__$1 = inst_24692;
var state_24707__$1 = (function (){var statearr_24722 = state_24707;
(statearr_24722[(10)] = inst_24679__$1);

return statearr_24722;
})();
var statearr_24723_24745 = state_24707__$1;
(statearr_24723_24745[(2)] = null);

(statearr_24723_24745[(1)] = (2));


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
});})(c__22637__auto___24735,out))
;
return ((function (switch__22525__auto__,c__22637__auto___24735,out){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_24727 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24727[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_24727[(1)] = (1));

return statearr_24727;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_24707){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_24707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e24728){if((e24728 instanceof Object)){
var ex__22529__auto__ = e24728;
var statearr_24729_24746 = state_24707;
(statearr_24729_24746[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24747 = state_24707;
state_24707 = G__24747;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_24707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_24707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___24735,out))
})();
var state__22639__auto__ = (function (){var statearr_24730 = f__22638__auto__.call(null);
(statearr_24730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___24735);

return statearr_24730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___24735,out))
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
var args24748 = [];
var len__17809__auto___24797 = arguments.length;
var i__17810__auto___24798 = (0);
while(true){
if((i__17810__auto___24798 < len__17809__auto___24797)){
args24748.push((arguments[i__17810__auto___24798]));

var G__24799 = (i__17810__auto___24798 + (1));
i__17810__auto___24798 = G__24799;
continue;
} else {
}
break;
}

var G__24750 = args24748.length;
switch (G__24750) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24748.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22637__auto___24801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___24801,out){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___24801,out){
return (function (state_24774){
var state_val_24775 = (state_24774[(1)]);
if((state_val_24775 === (7))){
var inst_24756 = (state_24774[(7)]);
var inst_24756__$1 = (state_24774[(2)]);
var inst_24757 = (inst_24756__$1 == null);
var inst_24758 = cljs.core.not.call(null,inst_24757);
var state_24774__$1 = (function (){var statearr_24776 = state_24774;
(statearr_24776[(7)] = inst_24756__$1);

return statearr_24776;
})();
if(inst_24758){
var statearr_24777_24802 = state_24774__$1;
(statearr_24777_24802[(1)] = (8));

} else {
var statearr_24778_24803 = state_24774__$1;
(statearr_24778_24803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (1))){
var inst_24751 = (0);
var state_24774__$1 = (function (){var statearr_24779 = state_24774;
(statearr_24779[(8)] = inst_24751);

return statearr_24779;
})();
var statearr_24780_24804 = state_24774__$1;
(statearr_24780_24804[(2)] = null);

(statearr_24780_24804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (4))){
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24774__$1,(7),ch);
} else {
if((state_val_24775 === (6))){
var inst_24769 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24781_24805 = state_24774__$1;
(statearr_24781_24805[(2)] = inst_24769);

(statearr_24781_24805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (3))){
var inst_24771 = (state_24774[(2)]);
var inst_24772 = cljs.core.async.close_BANG_.call(null,out);
var state_24774__$1 = (function (){var statearr_24782 = state_24774;
(statearr_24782[(9)] = inst_24771);

return statearr_24782;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24774__$1,inst_24772);
} else {
if((state_val_24775 === (2))){
var inst_24751 = (state_24774[(8)]);
var inst_24753 = (inst_24751 < n);
var state_24774__$1 = state_24774;
if(cljs.core.truth_(inst_24753)){
var statearr_24783_24806 = state_24774__$1;
(statearr_24783_24806[(1)] = (4));

} else {
var statearr_24784_24807 = state_24774__$1;
(statearr_24784_24807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (11))){
var inst_24751 = (state_24774[(8)]);
var inst_24761 = (state_24774[(2)]);
var inst_24762 = (inst_24751 + (1));
var inst_24751__$1 = inst_24762;
var state_24774__$1 = (function (){var statearr_24785 = state_24774;
(statearr_24785[(8)] = inst_24751__$1);

(statearr_24785[(10)] = inst_24761);

return statearr_24785;
})();
var statearr_24786_24808 = state_24774__$1;
(statearr_24786_24808[(2)] = null);

(statearr_24786_24808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (9))){
var state_24774__$1 = state_24774;
var statearr_24787_24809 = state_24774__$1;
(statearr_24787_24809[(2)] = null);

(statearr_24787_24809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (5))){
var state_24774__$1 = state_24774;
var statearr_24788_24810 = state_24774__$1;
(statearr_24788_24810[(2)] = null);

(statearr_24788_24810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (10))){
var inst_24766 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24789_24811 = state_24774__$1;
(statearr_24789_24811[(2)] = inst_24766);

(statearr_24789_24811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (8))){
var inst_24756 = (state_24774[(7)]);
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24774__$1,(11),out,inst_24756);
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
});})(c__22637__auto___24801,out))
;
return ((function (switch__22525__auto__,c__22637__auto___24801,out){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_24793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24793[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_24793[(1)] = (1));

return statearr_24793;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_24774){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_24774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e24794){if((e24794 instanceof Object)){
var ex__22529__auto__ = e24794;
var statearr_24795_24812 = state_24774;
(statearr_24795_24812[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24813 = state_24774;
state_24774 = G__24813;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_24774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_24774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___24801,out))
})();
var state__22639__auto__ = (function (){var statearr_24796 = f__22638__auto__.call(null);
(statearr_24796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___24801);

return statearr_24796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___24801,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24821 = (function (map_LT_,f,ch,meta24822){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24822 = meta24822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24823,meta24822__$1){
var self__ = this;
var _24823__$1 = this;
return (new cljs.core.async.t_cljs$core$async24821(self__.map_LT_,self__.f,self__.ch,meta24822__$1));
});

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24823){
var self__ = this;
var _24823__$1 = this;
return self__.meta24822;
});

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24824 = (function (map_LT_,f,ch,meta24822,_,fn1,meta24825){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24822 = meta24822;
this._ = _;
this.fn1 = fn1;
this.meta24825 = meta24825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24826,meta24825__$1){
var self__ = this;
var _24826__$1 = this;
return (new cljs.core.async.t_cljs$core$async24824(self__.map_LT_,self__.f,self__.ch,self__.meta24822,self__._,self__.fn1,meta24825__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24826){
var self__ = this;
var _24826__$1 = this;
return self__.meta24825;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24824.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24824.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24814_SHARP_){
return f1.call(null,(((p1__24814_SHARP_ == null))?null:self__.f.call(null,p1__24814_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24824.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24822","meta24822",1737580847,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24821","cljs.core.async/t_cljs$core$async24821",706466190,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24825","meta24825",-1896414053,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24824";

cljs.core.async.t_cljs$core$async24824.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24824");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24824 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24824(map_LT___$1,f__$1,ch__$1,meta24822__$1,___$2,fn1__$1,meta24825){
return (new cljs.core.async.t_cljs$core$async24824(map_LT___$1,f__$1,ch__$1,meta24822__$1,___$2,fn1__$1,meta24825));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24824(self__.map_LT_,self__.f,self__.ch,self__.meta24822,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16739__auto__ = ret;
if(cljs.core.truth_(and__16739__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16739__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24822","meta24822",1737580847,null)], null);
});

cljs.core.async.t_cljs$core$async24821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24821";

cljs.core.async.t_cljs$core$async24821.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24821");
});

cljs.core.async.__GT_t_cljs$core$async24821 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24821(map_LT___$1,f__$1,ch__$1,meta24822){
return (new cljs.core.async.t_cljs$core$async24821(map_LT___$1,f__$1,ch__$1,meta24822));
});

}

return (new cljs.core.async.t_cljs$core$async24821(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24830 = (function (map_GT_,f,ch,meta24831){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24831 = meta24831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24832,meta24831__$1){
var self__ = this;
var _24832__$1 = this;
return (new cljs.core.async.t_cljs$core$async24830(self__.map_GT_,self__.f,self__.ch,meta24831__$1));
});

cljs.core.async.t_cljs$core$async24830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24832){
var self__ = this;
var _24832__$1 = this;
return self__.meta24831;
});

cljs.core.async.t_cljs$core$async24830.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24830.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24830.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24831","meta24831",1944870130,null)], null);
});

cljs.core.async.t_cljs$core$async24830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24830";

cljs.core.async.t_cljs$core$async24830.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24830");
});

cljs.core.async.__GT_t_cljs$core$async24830 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24830(map_GT___$1,f__$1,ch__$1,meta24831){
return (new cljs.core.async.t_cljs$core$async24830(map_GT___$1,f__$1,ch__$1,meta24831));
});

}

return (new cljs.core.async.t_cljs$core$async24830(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24836 = (function (filter_GT_,p,ch,meta24837){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24837 = meta24837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24838,meta24837__$1){
var self__ = this;
var _24838__$1 = this;
return (new cljs.core.async.t_cljs$core$async24836(self__.filter_GT_,self__.p,self__.ch,meta24837__$1));
});

cljs.core.async.t_cljs$core$async24836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24838){
var self__ = this;
var _24838__$1 = this;
return self__.meta24837;
});

cljs.core.async.t_cljs$core$async24836.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24836.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24836.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24836.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24836.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24836.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24837","meta24837",-224545623,null)], null);
});

cljs.core.async.t_cljs$core$async24836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24836";

cljs.core.async.t_cljs$core$async24836.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24836");
});

cljs.core.async.__GT_t_cljs$core$async24836 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24836(filter_GT___$1,p__$1,ch__$1,meta24837){
return (new cljs.core.async.t_cljs$core$async24836(filter_GT___$1,p__$1,ch__$1,meta24837));
});

}

return (new cljs.core.async.t_cljs$core$async24836(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24839 = [];
var len__17809__auto___24883 = arguments.length;
var i__17810__auto___24884 = (0);
while(true){
if((i__17810__auto___24884 < len__17809__auto___24883)){
args24839.push((arguments[i__17810__auto___24884]));

var G__24885 = (i__17810__auto___24884 + (1));
i__17810__auto___24884 = G__24885;
continue;
} else {
}
break;
}

var G__24841 = args24839.length;
switch (G__24841) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24839.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22637__auto___24887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___24887,out){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___24887,out){
return (function (state_24862){
var state_val_24863 = (state_24862[(1)]);
if((state_val_24863 === (7))){
var inst_24858 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
var statearr_24864_24888 = state_24862__$1;
(statearr_24864_24888[(2)] = inst_24858);

(statearr_24864_24888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (1))){
var state_24862__$1 = state_24862;
var statearr_24865_24889 = state_24862__$1;
(statearr_24865_24889[(2)] = null);

(statearr_24865_24889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (4))){
var inst_24844 = (state_24862[(7)]);
var inst_24844__$1 = (state_24862[(2)]);
var inst_24845 = (inst_24844__$1 == null);
var state_24862__$1 = (function (){var statearr_24866 = state_24862;
(statearr_24866[(7)] = inst_24844__$1);

return statearr_24866;
})();
if(cljs.core.truth_(inst_24845)){
var statearr_24867_24890 = state_24862__$1;
(statearr_24867_24890[(1)] = (5));

} else {
var statearr_24868_24891 = state_24862__$1;
(statearr_24868_24891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (6))){
var inst_24844 = (state_24862[(7)]);
var inst_24849 = p.call(null,inst_24844);
var state_24862__$1 = state_24862;
if(cljs.core.truth_(inst_24849)){
var statearr_24869_24892 = state_24862__$1;
(statearr_24869_24892[(1)] = (8));

} else {
var statearr_24870_24893 = state_24862__$1;
(statearr_24870_24893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (3))){
var inst_24860 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24862__$1,inst_24860);
} else {
if((state_val_24863 === (2))){
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24862__$1,(4),ch);
} else {
if((state_val_24863 === (11))){
var inst_24852 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
var statearr_24871_24894 = state_24862__$1;
(statearr_24871_24894[(2)] = inst_24852);

(statearr_24871_24894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (9))){
var state_24862__$1 = state_24862;
var statearr_24872_24895 = state_24862__$1;
(statearr_24872_24895[(2)] = null);

(statearr_24872_24895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (5))){
var inst_24847 = cljs.core.async.close_BANG_.call(null,out);
var state_24862__$1 = state_24862;
var statearr_24873_24896 = state_24862__$1;
(statearr_24873_24896[(2)] = inst_24847);

(statearr_24873_24896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (10))){
var inst_24855 = (state_24862[(2)]);
var state_24862__$1 = (function (){var statearr_24874 = state_24862;
(statearr_24874[(8)] = inst_24855);

return statearr_24874;
})();
var statearr_24875_24897 = state_24862__$1;
(statearr_24875_24897[(2)] = null);

(statearr_24875_24897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (8))){
var inst_24844 = (state_24862[(7)]);
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24862__$1,(11),out,inst_24844);
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
});})(c__22637__auto___24887,out))
;
return ((function (switch__22525__auto__,c__22637__auto___24887,out){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_24879 = [null,null,null,null,null,null,null,null,null];
(statearr_24879[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_24879[(1)] = (1));

return statearr_24879;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_24862){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_24862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e24880){if((e24880 instanceof Object)){
var ex__22529__auto__ = e24880;
var statearr_24881_24898 = state_24862;
(statearr_24881_24898[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24899 = state_24862;
state_24862 = G__24899;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_24862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_24862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___24887,out))
})();
var state__22639__auto__ = (function (){var statearr_24882 = f__22638__auto__.call(null);
(statearr_24882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___24887);

return statearr_24882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___24887,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24900 = [];
var len__17809__auto___24903 = arguments.length;
var i__17810__auto___24904 = (0);
while(true){
if((i__17810__auto___24904 < len__17809__auto___24903)){
args24900.push((arguments[i__17810__auto___24904]));

var G__24905 = (i__17810__auto___24904 + (1));
i__17810__auto___24904 = G__24905;
continue;
} else {
}
break;
}

var G__24902 = args24900.length;
switch (G__24902) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24900.length)].join('')));

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
var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__){
return (function (state_25072){
var state_val_25073 = (state_25072[(1)]);
if((state_val_25073 === (7))){
var inst_25068 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25074_25115 = state_25072__$1;
(statearr_25074_25115[(2)] = inst_25068);

(statearr_25074_25115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (20))){
var inst_25038 = (state_25072[(7)]);
var inst_25049 = (state_25072[(2)]);
var inst_25050 = cljs.core.next.call(null,inst_25038);
var inst_25024 = inst_25050;
var inst_25025 = null;
var inst_25026 = (0);
var inst_25027 = (0);
var state_25072__$1 = (function (){var statearr_25075 = state_25072;
(statearr_25075[(8)] = inst_25024);

(statearr_25075[(9)] = inst_25049);

(statearr_25075[(10)] = inst_25025);

(statearr_25075[(11)] = inst_25026);

(statearr_25075[(12)] = inst_25027);

return statearr_25075;
})();
var statearr_25076_25116 = state_25072__$1;
(statearr_25076_25116[(2)] = null);

(statearr_25076_25116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (1))){
var state_25072__$1 = state_25072;
var statearr_25077_25117 = state_25072__$1;
(statearr_25077_25117[(2)] = null);

(statearr_25077_25117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (4))){
var inst_25013 = (state_25072[(13)]);
var inst_25013__$1 = (state_25072[(2)]);
var inst_25014 = (inst_25013__$1 == null);
var state_25072__$1 = (function (){var statearr_25078 = state_25072;
(statearr_25078[(13)] = inst_25013__$1);

return statearr_25078;
})();
if(cljs.core.truth_(inst_25014)){
var statearr_25079_25118 = state_25072__$1;
(statearr_25079_25118[(1)] = (5));

} else {
var statearr_25080_25119 = state_25072__$1;
(statearr_25080_25119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (15))){
var state_25072__$1 = state_25072;
var statearr_25084_25120 = state_25072__$1;
(statearr_25084_25120[(2)] = null);

(statearr_25084_25120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (21))){
var state_25072__$1 = state_25072;
var statearr_25085_25121 = state_25072__$1;
(statearr_25085_25121[(2)] = null);

(statearr_25085_25121[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (13))){
var inst_25024 = (state_25072[(8)]);
var inst_25025 = (state_25072[(10)]);
var inst_25026 = (state_25072[(11)]);
var inst_25027 = (state_25072[(12)]);
var inst_25034 = (state_25072[(2)]);
var inst_25035 = (inst_25027 + (1));
var tmp25081 = inst_25024;
var tmp25082 = inst_25025;
var tmp25083 = inst_25026;
var inst_25024__$1 = tmp25081;
var inst_25025__$1 = tmp25082;
var inst_25026__$1 = tmp25083;
var inst_25027__$1 = inst_25035;
var state_25072__$1 = (function (){var statearr_25086 = state_25072;
(statearr_25086[(8)] = inst_25024__$1);

(statearr_25086[(10)] = inst_25025__$1);

(statearr_25086[(11)] = inst_25026__$1);

(statearr_25086[(12)] = inst_25027__$1);

(statearr_25086[(14)] = inst_25034);

return statearr_25086;
})();
var statearr_25087_25122 = state_25072__$1;
(statearr_25087_25122[(2)] = null);

(statearr_25087_25122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (22))){
var state_25072__$1 = state_25072;
var statearr_25088_25123 = state_25072__$1;
(statearr_25088_25123[(2)] = null);

(statearr_25088_25123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (6))){
var inst_25013 = (state_25072[(13)]);
var inst_25022 = f.call(null,inst_25013);
var inst_25023 = cljs.core.seq.call(null,inst_25022);
var inst_25024 = inst_25023;
var inst_25025 = null;
var inst_25026 = (0);
var inst_25027 = (0);
var state_25072__$1 = (function (){var statearr_25089 = state_25072;
(statearr_25089[(8)] = inst_25024);

(statearr_25089[(10)] = inst_25025);

(statearr_25089[(11)] = inst_25026);

(statearr_25089[(12)] = inst_25027);

return statearr_25089;
})();
var statearr_25090_25124 = state_25072__$1;
(statearr_25090_25124[(2)] = null);

(statearr_25090_25124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (17))){
var inst_25038 = (state_25072[(7)]);
var inst_25042 = cljs.core.chunk_first.call(null,inst_25038);
var inst_25043 = cljs.core.chunk_rest.call(null,inst_25038);
var inst_25044 = cljs.core.count.call(null,inst_25042);
var inst_25024 = inst_25043;
var inst_25025 = inst_25042;
var inst_25026 = inst_25044;
var inst_25027 = (0);
var state_25072__$1 = (function (){var statearr_25091 = state_25072;
(statearr_25091[(8)] = inst_25024);

(statearr_25091[(10)] = inst_25025);

(statearr_25091[(11)] = inst_25026);

(statearr_25091[(12)] = inst_25027);

return statearr_25091;
})();
var statearr_25092_25125 = state_25072__$1;
(statearr_25092_25125[(2)] = null);

(statearr_25092_25125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (3))){
var inst_25070 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25072__$1,inst_25070);
} else {
if((state_val_25073 === (12))){
var inst_25058 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25093_25126 = state_25072__$1;
(statearr_25093_25126[(2)] = inst_25058);

(statearr_25093_25126[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (2))){
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25072__$1,(4),in$);
} else {
if((state_val_25073 === (23))){
var inst_25066 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25094_25127 = state_25072__$1;
(statearr_25094_25127[(2)] = inst_25066);

(statearr_25094_25127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (19))){
var inst_25053 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25095_25128 = state_25072__$1;
(statearr_25095_25128[(2)] = inst_25053);

(statearr_25095_25128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (11))){
var inst_25024 = (state_25072[(8)]);
var inst_25038 = (state_25072[(7)]);
var inst_25038__$1 = cljs.core.seq.call(null,inst_25024);
var state_25072__$1 = (function (){var statearr_25096 = state_25072;
(statearr_25096[(7)] = inst_25038__$1);

return statearr_25096;
})();
if(inst_25038__$1){
var statearr_25097_25129 = state_25072__$1;
(statearr_25097_25129[(1)] = (14));

} else {
var statearr_25098_25130 = state_25072__$1;
(statearr_25098_25130[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (9))){
var inst_25060 = (state_25072[(2)]);
var inst_25061 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25072__$1 = (function (){var statearr_25099 = state_25072;
(statearr_25099[(15)] = inst_25060);

return statearr_25099;
})();
if(cljs.core.truth_(inst_25061)){
var statearr_25100_25131 = state_25072__$1;
(statearr_25100_25131[(1)] = (21));

} else {
var statearr_25101_25132 = state_25072__$1;
(statearr_25101_25132[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (5))){
var inst_25016 = cljs.core.async.close_BANG_.call(null,out);
var state_25072__$1 = state_25072;
var statearr_25102_25133 = state_25072__$1;
(statearr_25102_25133[(2)] = inst_25016);

(statearr_25102_25133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (14))){
var inst_25038 = (state_25072[(7)]);
var inst_25040 = cljs.core.chunked_seq_QMARK_.call(null,inst_25038);
var state_25072__$1 = state_25072;
if(inst_25040){
var statearr_25103_25134 = state_25072__$1;
(statearr_25103_25134[(1)] = (17));

} else {
var statearr_25104_25135 = state_25072__$1;
(statearr_25104_25135[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (16))){
var inst_25056 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25105_25136 = state_25072__$1;
(statearr_25105_25136[(2)] = inst_25056);

(statearr_25105_25136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (10))){
var inst_25025 = (state_25072[(10)]);
var inst_25027 = (state_25072[(12)]);
var inst_25032 = cljs.core._nth.call(null,inst_25025,inst_25027);
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25072__$1,(13),out,inst_25032);
} else {
if((state_val_25073 === (18))){
var inst_25038 = (state_25072[(7)]);
var inst_25047 = cljs.core.first.call(null,inst_25038);
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25072__$1,(20),out,inst_25047);
} else {
if((state_val_25073 === (8))){
var inst_25026 = (state_25072[(11)]);
var inst_25027 = (state_25072[(12)]);
var inst_25029 = (inst_25027 < inst_25026);
var inst_25030 = inst_25029;
var state_25072__$1 = state_25072;
if(cljs.core.truth_(inst_25030)){
var statearr_25106_25137 = state_25072__$1;
(statearr_25106_25137[(1)] = (10));

} else {
var statearr_25107_25138 = state_25072__$1;
(statearr_25107_25138[(1)] = (11));

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
});})(c__22637__auto__))
;
return ((function (switch__22525__auto__,c__22637__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22526__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22526__auto____0 = (function (){
var statearr_25111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25111[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22526__auto__);

(statearr_25111[(1)] = (1));

return statearr_25111;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22526__auto____1 = (function (state_25072){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_25072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e25112){if((e25112 instanceof Object)){
var ex__22529__auto__ = e25112;
var statearr_25113_25139 = state_25072;
(statearr_25113_25139[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25140 = state_25072;
state_25072 = G__25140;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22526__auto__ = function(state_25072){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22526__auto____1.call(this,state_25072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22526__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22526__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__))
})();
var state__22639__auto__ = (function (){var statearr_25114 = f__22638__auto__.call(null);
(statearr_25114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_25114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__))
);

return c__22637__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25141 = [];
var len__17809__auto___25144 = arguments.length;
var i__17810__auto___25145 = (0);
while(true){
if((i__17810__auto___25145 < len__17809__auto___25144)){
args25141.push((arguments[i__17810__auto___25145]));

var G__25146 = (i__17810__auto___25145 + (1));
i__17810__auto___25145 = G__25146;
continue;
} else {
}
break;
}

var G__25143 = args25141.length;
switch (G__25143) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25141.length)].join('')));

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
var args25148 = [];
var len__17809__auto___25151 = arguments.length;
var i__17810__auto___25152 = (0);
while(true){
if((i__17810__auto___25152 < len__17809__auto___25151)){
args25148.push((arguments[i__17810__auto___25152]));

var G__25153 = (i__17810__auto___25152 + (1));
i__17810__auto___25152 = G__25153;
continue;
} else {
}
break;
}

var G__25150 = args25148.length;
switch (G__25150) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25148.length)].join('')));

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
var args25155 = [];
var len__17809__auto___25206 = arguments.length;
var i__17810__auto___25207 = (0);
while(true){
if((i__17810__auto___25207 < len__17809__auto___25206)){
args25155.push((arguments[i__17810__auto___25207]));

var G__25208 = (i__17810__auto___25207 + (1));
i__17810__auto___25207 = G__25208;
continue;
} else {
}
break;
}

var G__25157 = args25155.length;
switch (G__25157) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25155.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22637__auto___25210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___25210,out){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___25210,out){
return (function (state_25181){
var state_val_25182 = (state_25181[(1)]);
if((state_val_25182 === (7))){
var inst_25176 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25183_25211 = state_25181__$1;
(statearr_25183_25211[(2)] = inst_25176);

(statearr_25183_25211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (1))){
var inst_25158 = null;
var state_25181__$1 = (function (){var statearr_25184 = state_25181;
(statearr_25184[(7)] = inst_25158);

return statearr_25184;
})();
var statearr_25185_25212 = state_25181__$1;
(statearr_25185_25212[(2)] = null);

(statearr_25185_25212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (4))){
var inst_25161 = (state_25181[(8)]);
var inst_25161__$1 = (state_25181[(2)]);
var inst_25162 = (inst_25161__$1 == null);
var inst_25163 = cljs.core.not.call(null,inst_25162);
var state_25181__$1 = (function (){var statearr_25186 = state_25181;
(statearr_25186[(8)] = inst_25161__$1);

return statearr_25186;
})();
if(inst_25163){
var statearr_25187_25213 = state_25181__$1;
(statearr_25187_25213[(1)] = (5));

} else {
var statearr_25188_25214 = state_25181__$1;
(statearr_25188_25214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (6))){
var state_25181__$1 = state_25181;
var statearr_25189_25215 = state_25181__$1;
(statearr_25189_25215[(2)] = null);

(statearr_25189_25215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (3))){
var inst_25178 = (state_25181[(2)]);
var inst_25179 = cljs.core.async.close_BANG_.call(null,out);
var state_25181__$1 = (function (){var statearr_25190 = state_25181;
(statearr_25190[(9)] = inst_25178);

return statearr_25190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25181__$1,inst_25179);
} else {
if((state_val_25182 === (2))){
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25181__$1,(4),ch);
} else {
if((state_val_25182 === (11))){
var inst_25161 = (state_25181[(8)]);
var inst_25170 = (state_25181[(2)]);
var inst_25158 = inst_25161;
var state_25181__$1 = (function (){var statearr_25191 = state_25181;
(statearr_25191[(7)] = inst_25158);

(statearr_25191[(10)] = inst_25170);

return statearr_25191;
})();
var statearr_25192_25216 = state_25181__$1;
(statearr_25192_25216[(2)] = null);

(statearr_25192_25216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (9))){
var inst_25161 = (state_25181[(8)]);
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25181__$1,(11),out,inst_25161);
} else {
if((state_val_25182 === (5))){
var inst_25158 = (state_25181[(7)]);
var inst_25161 = (state_25181[(8)]);
var inst_25165 = cljs.core._EQ_.call(null,inst_25161,inst_25158);
var state_25181__$1 = state_25181;
if(inst_25165){
var statearr_25194_25217 = state_25181__$1;
(statearr_25194_25217[(1)] = (8));

} else {
var statearr_25195_25218 = state_25181__$1;
(statearr_25195_25218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (10))){
var inst_25173 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25196_25219 = state_25181__$1;
(statearr_25196_25219[(2)] = inst_25173);

(statearr_25196_25219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (8))){
var inst_25158 = (state_25181[(7)]);
var tmp25193 = inst_25158;
var inst_25158__$1 = tmp25193;
var state_25181__$1 = (function (){var statearr_25197 = state_25181;
(statearr_25197[(7)] = inst_25158__$1);

return statearr_25197;
})();
var statearr_25198_25220 = state_25181__$1;
(statearr_25198_25220[(2)] = null);

(statearr_25198_25220[(1)] = (2));


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
});})(c__22637__auto___25210,out))
;
return ((function (switch__22525__auto__,c__22637__auto___25210,out){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_25202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25202[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_25202[(1)] = (1));

return statearr_25202;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_25181){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_25181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e25203){if((e25203 instanceof Object)){
var ex__22529__auto__ = e25203;
var statearr_25204_25221 = state_25181;
(statearr_25204_25221[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25222 = state_25181;
state_25181 = G__25222;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_25181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_25181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___25210,out))
})();
var state__22639__auto__ = (function (){var statearr_25205 = f__22638__auto__.call(null);
(statearr_25205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___25210);

return statearr_25205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___25210,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25223 = [];
var len__17809__auto___25293 = arguments.length;
var i__17810__auto___25294 = (0);
while(true){
if((i__17810__auto___25294 < len__17809__auto___25293)){
args25223.push((arguments[i__17810__auto___25294]));

var G__25295 = (i__17810__auto___25294 + (1));
i__17810__auto___25294 = G__25295;
continue;
} else {
}
break;
}

var G__25225 = args25223.length;
switch (G__25225) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25223.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22637__auto___25297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___25297,out){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___25297,out){
return (function (state_25263){
var state_val_25264 = (state_25263[(1)]);
if((state_val_25264 === (7))){
var inst_25259 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25265_25298 = state_25263__$1;
(statearr_25265_25298[(2)] = inst_25259);

(statearr_25265_25298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (1))){
var inst_25226 = (new Array(n));
var inst_25227 = inst_25226;
var inst_25228 = (0);
var state_25263__$1 = (function (){var statearr_25266 = state_25263;
(statearr_25266[(7)] = inst_25227);

(statearr_25266[(8)] = inst_25228);

return statearr_25266;
})();
var statearr_25267_25299 = state_25263__$1;
(statearr_25267_25299[(2)] = null);

(statearr_25267_25299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (4))){
var inst_25231 = (state_25263[(9)]);
var inst_25231__$1 = (state_25263[(2)]);
var inst_25232 = (inst_25231__$1 == null);
var inst_25233 = cljs.core.not.call(null,inst_25232);
var state_25263__$1 = (function (){var statearr_25268 = state_25263;
(statearr_25268[(9)] = inst_25231__$1);

return statearr_25268;
})();
if(inst_25233){
var statearr_25269_25300 = state_25263__$1;
(statearr_25269_25300[(1)] = (5));

} else {
var statearr_25270_25301 = state_25263__$1;
(statearr_25270_25301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (15))){
var inst_25253 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25271_25302 = state_25263__$1;
(statearr_25271_25302[(2)] = inst_25253);

(statearr_25271_25302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (13))){
var state_25263__$1 = state_25263;
var statearr_25272_25303 = state_25263__$1;
(statearr_25272_25303[(2)] = null);

(statearr_25272_25303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (6))){
var inst_25228 = (state_25263[(8)]);
var inst_25249 = (inst_25228 > (0));
var state_25263__$1 = state_25263;
if(cljs.core.truth_(inst_25249)){
var statearr_25273_25304 = state_25263__$1;
(statearr_25273_25304[(1)] = (12));

} else {
var statearr_25274_25305 = state_25263__$1;
(statearr_25274_25305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (3))){
var inst_25261 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25263__$1,inst_25261);
} else {
if((state_val_25264 === (12))){
var inst_25227 = (state_25263[(7)]);
var inst_25251 = cljs.core.vec.call(null,inst_25227);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25263__$1,(15),out,inst_25251);
} else {
if((state_val_25264 === (2))){
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25263__$1,(4),ch);
} else {
if((state_val_25264 === (11))){
var inst_25243 = (state_25263[(2)]);
var inst_25244 = (new Array(n));
var inst_25227 = inst_25244;
var inst_25228 = (0);
var state_25263__$1 = (function (){var statearr_25275 = state_25263;
(statearr_25275[(7)] = inst_25227);

(statearr_25275[(8)] = inst_25228);

(statearr_25275[(10)] = inst_25243);

return statearr_25275;
})();
var statearr_25276_25306 = state_25263__$1;
(statearr_25276_25306[(2)] = null);

(statearr_25276_25306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (9))){
var inst_25227 = (state_25263[(7)]);
var inst_25241 = cljs.core.vec.call(null,inst_25227);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25263__$1,(11),out,inst_25241);
} else {
if((state_val_25264 === (5))){
var inst_25227 = (state_25263[(7)]);
var inst_25228 = (state_25263[(8)]);
var inst_25236 = (state_25263[(11)]);
var inst_25231 = (state_25263[(9)]);
var inst_25235 = (inst_25227[inst_25228] = inst_25231);
var inst_25236__$1 = (inst_25228 + (1));
var inst_25237 = (inst_25236__$1 < n);
var state_25263__$1 = (function (){var statearr_25277 = state_25263;
(statearr_25277[(12)] = inst_25235);

(statearr_25277[(11)] = inst_25236__$1);

return statearr_25277;
})();
if(cljs.core.truth_(inst_25237)){
var statearr_25278_25307 = state_25263__$1;
(statearr_25278_25307[(1)] = (8));

} else {
var statearr_25279_25308 = state_25263__$1;
(statearr_25279_25308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (14))){
var inst_25256 = (state_25263[(2)]);
var inst_25257 = cljs.core.async.close_BANG_.call(null,out);
var state_25263__$1 = (function (){var statearr_25281 = state_25263;
(statearr_25281[(13)] = inst_25256);

return statearr_25281;
})();
var statearr_25282_25309 = state_25263__$1;
(statearr_25282_25309[(2)] = inst_25257);

(statearr_25282_25309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (10))){
var inst_25247 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25283_25310 = state_25263__$1;
(statearr_25283_25310[(2)] = inst_25247);

(statearr_25283_25310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (8))){
var inst_25227 = (state_25263[(7)]);
var inst_25236 = (state_25263[(11)]);
var tmp25280 = inst_25227;
var inst_25227__$1 = tmp25280;
var inst_25228 = inst_25236;
var state_25263__$1 = (function (){var statearr_25284 = state_25263;
(statearr_25284[(7)] = inst_25227__$1);

(statearr_25284[(8)] = inst_25228);

return statearr_25284;
})();
var statearr_25285_25311 = state_25263__$1;
(statearr_25285_25311[(2)] = null);

(statearr_25285_25311[(1)] = (2));


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
});})(c__22637__auto___25297,out))
;
return ((function (switch__22525__auto__,c__22637__auto___25297,out){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_25289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25289[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_25289[(1)] = (1));

return statearr_25289;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_25263){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_25263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e25290){if((e25290 instanceof Object)){
var ex__22529__auto__ = e25290;
var statearr_25291_25312 = state_25263;
(statearr_25291_25312[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25313 = state_25263;
state_25263 = G__25313;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_25263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_25263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___25297,out))
})();
var state__22639__auto__ = (function (){var statearr_25292 = f__22638__auto__.call(null);
(statearr_25292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___25297);

return statearr_25292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___25297,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25314 = [];
var len__17809__auto___25388 = arguments.length;
var i__17810__auto___25389 = (0);
while(true){
if((i__17810__auto___25389 < len__17809__auto___25388)){
args25314.push((arguments[i__17810__auto___25389]));

var G__25390 = (i__17810__auto___25389 + (1));
i__17810__auto___25389 = G__25390;
continue;
} else {
}
break;
}

var G__25316 = args25314.length;
switch (G__25316) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25314.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22637__auto___25392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___25392,out){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___25392,out){
return (function (state_25358){
var state_val_25359 = (state_25358[(1)]);
if((state_val_25359 === (7))){
var inst_25354 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
var statearr_25360_25393 = state_25358__$1;
(statearr_25360_25393[(2)] = inst_25354);

(statearr_25360_25393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (1))){
var inst_25317 = [];
var inst_25318 = inst_25317;
var inst_25319 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25358__$1 = (function (){var statearr_25361 = state_25358;
(statearr_25361[(7)] = inst_25318);

(statearr_25361[(8)] = inst_25319);

return statearr_25361;
})();
var statearr_25362_25394 = state_25358__$1;
(statearr_25362_25394[(2)] = null);

(statearr_25362_25394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (4))){
var inst_25322 = (state_25358[(9)]);
var inst_25322__$1 = (state_25358[(2)]);
var inst_25323 = (inst_25322__$1 == null);
var inst_25324 = cljs.core.not.call(null,inst_25323);
var state_25358__$1 = (function (){var statearr_25363 = state_25358;
(statearr_25363[(9)] = inst_25322__$1);

return statearr_25363;
})();
if(inst_25324){
var statearr_25364_25395 = state_25358__$1;
(statearr_25364_25395[(1)] = (5));

} else {
var statearr_25365_25396 = state_25358__$1;
(statearr_25365_25396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (15))){
var inst_25348 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
var statearr_25366_25397 = state_25358__$1;
(statearr_25366_25397[(2)] = inst_25348);

(statearr_25366_25397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (13))){
var state_25358__$1 = state_25358;
var statearr_25367_25398 = state_25358__$1;
(statearr_25367_25398[(2)] = null);

(statearr_25367_25398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (6))){
var inst_25318 = (state_25358[(7)]);
var inst_25343 = inst_25318.length;
var inst_25344 = (inst_25343 > (0));
var state_25358__$1 = state_25358;
if(cljs.core.truth_(inst_25344)){
var statearr_25368_25399 = state_25358__$1;
(statearr_25368_25399[(1)] = (12));

} else {
var statearr_25369_25400 = state_25358__$1;
(statearr_25369_25400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (3))){
var inst_25356 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25358__$1,inst_25356);
} else {
if((state_val_25359 === (12))){
var inst_25318 = (state_25358[(7)]);
var inst_25346 = cljs.core.vec.call(null,inst_25318);
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25358__$1,(15),out,inst_25346);
} else {
if((state_val_25359 === (2))){
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25358__$1,(4),ch);
} else {
if((state_val_25359 === (11))){
var inst_25322 = (state_25358[(9)]);
var inst_25326 = (state_25358[(10)]);
var inst_25336 = (state_25358[(2)]);
var inst_25337 = [];
var inst_25338 = inst_25337.push(inst_25322);
var inst_25318 = inst_25337;
var inst_25319 = inst_25326;
var state_25358__$1 = (function (){var statearr_25370 = state_25358;
(statearr_25370[(11)] = inst_25336);

(statearr_25370[(12)] = inst_25338);

(statearr_25370[(7)] = inst_25318);

(statearr_25370[(8)] = inst_25319);

return statearr_25370;
})();
var statearr_25371_25401 = state_25358__$1;
(statearr_25371_25401[(2)] = null);

(statearr_25371_25401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (9))){
var inst_25318 = (state_25358[(7)]);
var inst_25334 = cljs.core.vec.call(null,inst_25318);
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25358__$1,(11),out,inst_25334);
} else {
if((state_val_25359 === (5))){
var inst_25322 = (state_25358[(9)]);
var inst_25319 = (state_25358[(8)]);
var inst_25326 = (state_25358[(10)]);
var inst_25326__$1 = f.call(null,inst_25322);
var inst_25327 = cljs.core._EQ_.call(null,inst_25326__$1,inst_25319);
var inst_25328 = cljs.core.keyword_identical_QMARK_.call(null,inst_25319,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25329 = (inst_25327) || (inst_25328);
var state_25358__$1 = (function (){var statearr_25372 = state_25358;
(statearr_25372[(10)] = inst_25326__$1);

return statearr_25372;
})();
if(cljs.core.truth_(inst_25329)){
var statearr_25373_25402 = state_25358__$1;
(statearr_25373_25402[(1)] = (8));

} else {
var statearr_25374_25403 = state_25358__$1;
(statearr_25374_25403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (14))){
var inst_25351 = (state_25358[(2)]);
var inst_25352 = cljs.core.async.close_BANG_.call(null,out);
var state_25358__$1 = (function (){var statearr_25376 = state_25358;
(statearr_25376[(13)] = inst_25351);

return statearr_25376;
})();
var statearr_25377_25404 = state_25358__$1;
(statearr_25377_25404[(2)] = inst_25352);

(statearr_25377_25404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (10))){
var inst_25341 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
var statearr_25378_25405 = state_25358__$1;
(statearr_25378_25405[(2)] = inst_25341);

(statearr_25378_25405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25359 === (8))){
var inst_25322 = (state_25358[(9)]);
var inst_25318 = (state_25358[(7)]);
var inst_25326 = (state_25358[(10)]);
var inst_25331 = inst_25318.push(inst_25322);
var tmp25375 = inst_25318;
var inst_25318__$1 = tmp25375;
var inst_25319 = inst_25326;
var state_25358__$1 = (function (){var statearr_25379 = state_25358;
(statearr_25379[(7)] = inst_25318__$1);

(statearr_25379[(8)] = inst_25319);

(statearr_25379[(14)] = inst_25331);

return statearr_25379;
})();
var statearr_25380_25406 = state_25358__$1;
(statearr_25380_25406[(2)] = null);

(statearr_25380_25406[(1)] = (2));


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
});})(c__22637__auto___25392,out))
;
return ((function (switch__22525__auto__,c__22637__auto___25392,out){
return (function() {
var cljs$core$async$state_machine__22526__auto__ = null;
var cljs$core$async$state_machine__22526__auto____0 = (function (){
var statearr_25384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25384[(0)] = cljs$core$async$state_machine__22526__auto__);

(statearr_25384[(1)] = (1));

return statearr_25384;
});
var cljs$core$async$state_machine__22526__auto____1 = (function (state_25358){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_25358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e25385){if((e25385 instanceof Object)){
var ex__22529__auto__ = e25385;
var statearr_25386_25407 = state_25358;
(statearr_25386_25407[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25408 = state_25358;
state_25358 = G__25408;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
cljs$core$async$state_machine__22526__auto__ = function(state_25358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22526__auto____1.call(this,state_25358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22526__auto____0;
cljs$core$async$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22526__auto____1;
return cljs$core$async$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___25392,out))
})();
var state__22639__auto__ = (function (){var statearr_25387 = f__22638__auto__.call(null);
(statearr_25387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___25392);

return statearr_25387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___25392,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456018611734