// Compiled by ClojureScript 1.7.228 {}
goog.provide('middleware.history');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.history.Html5History');
goog.require('goog.History');

/**
 * @interface
 */
middleware.history.HistoryProtocol = function(){};

/**
 * Starts calling back on history events.
 *        Callback function signature: [token browser-event? event-data], where:
 *          token - new token
 *          browser-event? - true if event was initiated by action in browser, e.g. clicking Back button
 *          event-data - data which was passed from replace-token/push-token
 *        Returns a function which stops listening.
 */
middleware.history.listen = (function middleware$history$listen(this$,callback){
if((!((this$ == null))) && (!((this$.middleware$history$HistoryProtocol$listen$arity$2 == null)))){
return this$.middleware$history$HistoryProtocol$listen$arity$2(this$,callback);
} else {
var x__18954__auto__ = (((this$ == null))?null:this$);
var m__18955__auto__ = (middleware.history.listen[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,this$,callback);
} else {
var m__18955__auto____$1 = (middleware.history.listen["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,this$,callback);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.listen",this$);
}
}
}
});

/**
 * Replace token and fire an event with additional data passed (data is nil if not specified);
 *               do nothing if current token is already equal to the specified one.
 */
middleware.history.replace_token = (function middleware$history$replace_token(var_args){
var args92161 = [];
var len__19357__auto___92167 = arguments.length;
var i__19358__auto___92168 = (0);
while(true){
if((i__19358__auto___92168 < len__19357__auto___92167)){
args92161.push((arguments[i__19358__auto___92168]));

var G__92169 = (i__19358__auto___92168 + (1));
i__19358__auto___92168 = G__92169;
continue;
} else {
}
break;
}

var G__92163 = args92161.length;
switch (G__92163) {
case 2:
return middleware.history.replace_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return middleware.history.replace_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92161.length)].join('')));

}
});

middleware.history.replace_token.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.middleware$history$HistoryProtocol$replace_token$arity$2 == null)))){
return this$.middleware$history$HistoryProtocol$replace_token$arity$2(this$,token);
} else {
var x__18954__auto__ = (((this$ == null))?null:this$);
var m__18955__auto__ = (middleware.history.replace_token[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,this$,token);
} else {
var m__18955__auto____$1 = (middleware.history.replace_token["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.replace-token",this$);
}
}
}
});

middleware.history.replace_token.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,event_data){
if((!((this$ == null))) && (!((this$.middleware$history$HistoryProtocol$replace_token$arity$3 == null)))){
return this$.middleware$history$HistoryProtocol$replace_token$arity$3(this$,token,event_data);
} else {
var x__18954__auto__ = (((this$ == null))?null:this$);
var m__18955__auto__ = (middleware.history.replace_token[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,this$,token,event_data);
} else {
var m__18955__auto____$1 = (middleware.history.replace_token["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,this$,token,event_data);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.replace-token",this$);
}
}
}
});

middleware.history.replace_token.cljs$lang$maxFixedArity = 3;

/**
 * Push token and fire an event with additional data passed (data is nil if not specified);
 *            do nothing if current token is already equal to the specified one.
 */
middleware.history.push_token = (function middleware$history$push_token(var_args){
var args92164 = [];
var len__19357__auto___92171 = arguments.length;
var i__19358__auto___92172 = (0);
while(true){
if((i__19358__auto___92172 < len__19357__auto___92171)){
args92164.push((arguments[i__19358__auto___92172]));

var G__92173 = (i__19358__auto___92172 + (1));
i__19358__auto___92172 = G__92173;
continue;
} else {
}
break;
}

var G__92166 = args92164.length;
switch (G__92166) {
case 2:
return middleware.history.push_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return middleware.history.push_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92164.length)].join('')));

}
});

middleware.history.push_token.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.middleware$history$HistoryProtocol$push_token$arity$2 == null)))){
return this$.middleware$history$HistoryProtocol$push_token$arity$2(this$,token);
} else {
var x__18954__auto__ = (((this$ == null))?null:this$);
var m__18955__auto__ = (middleware.history.push_token[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,this$,token);
} else {
var m__18955__auto____$1 = (middleware.history.push_token["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.push-token",this$);
}
}
}
});

middleware.history.push_token.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,event_data){
if((!((this$ == null))) && (!((this$.middleware$history$HistoryProtocol$push_token$arity$3 == null)))){
return this$.middleware$history$HistoryProtocol$push_token$arity$3(this$,token,event_data);
} else {
var x__18954__auto__ = (((this$ == null))?null:this$);
var m__18955__auto__ = (middleware.history.push_token[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,this$,token,event_data);
} else {
var m__18955__auto____$1 = (middleware.history.push_token["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,this$,token,event_data);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.push-token",this$);
}
}
}
});

middleware.history.push_token.cljs$lang$maxFixedArity = 3;

/**
 * Return current token.
 */
middleware.history.token = (function middleware$history$token(this$){
if((!((this$ == null))) && (!((this$.middleware$history$HistoryProtocol$token$arity$1 == null)))){
return this$.middleware$history$HistoryProtocol$token$arity$1(this$);
} else {
var x__18954__auto__ = (((this$ == null))?null:this$);
var m__18955__auto__ = (middleware.history.token[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,this$);
} else {
var m__18955__auto____$1 = (middleware.history.token["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.token",this$);
}
}
}
});

/**
 * Returns the href for the specified token to be used in HTML links.
 */
middleware.history.token__GT_href = (function middleware$history$token__GT_href(this$,token){
if((!((this$ == null))) && (!((this$.middleware$history$HistoryProtocol$token__GT_href$arity$2 == null)))){
return this$.middleware$history$HistoryProtocol$token__GT_href$arity$2(this$,token);
} else {
var x__18954__auto__ = (((this$ == null))?null:this$);
var m__18955__auto__ = (middleware.history.token__GT_href[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,this$,token);
} else {
var m__18955__auto____$1 = (middleware.history.token__GT_href["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.token->href",this$);
}
}
}
});

middleware.history._STAR__history_event_data_STAR_ = null;

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
 * @implements {middleware.history.HistoryProtocol}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
middleware.history._History = (function (_goog_history,__meta,__extmap,__hash){
this._goog_history = _goog_history;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
middleware.history._History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18913__auto__,k__18914__auto__){
var self__ = this;
var this__18913__auto____$1 = this;
return cljs.core._lookup.call(null,this__18913__auto____$1,k__18914__auto__,null);
});

middleware.history._History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18915__auto__,k92177,else__18916__auto__){
var self__ = this;
var this__18915__auto____$1 = this;
var G__92179 = (((k92177 instanceof cljs.core.Keyword))?k92177.fqn:null);
switch (G__92179) {
case "-goog-history":
return self__._goog_history;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k92177,else__18916__auto__);

}
});

middleware.history._History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18927__auto__,writer__18928__auto__,opts__18929__auto__){
var self__ = this;
var this__18927__auto____$1 = this;
var pr_pair__18930__auto__ = ((function (this__18927__auto____$1){
return (function (keyval__18931__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,cljs.core.pr_writer,""," ","",opts__18929__auto__,keyval__18931__auto__);
});})(this__18927__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18928__auto__,pr_pair__18930__auto__,"#middleware.history.-History{",", ","}",opts__18929__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265),self__._goog_history],null))], null),self__.__extmap));
});

middleware.history._History.prototype.cljs$core$IIterable$ = true;

middleware.history._History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__92176){
var self__ = this;
var G__92176__$1 = this;
return (new cljs.core.RecordIter((0),G__92176__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

middleware.history._History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18911__auto__){
var self__ = this;
var this__18911__auto____$1 = this;
return self__.__meta;
});

middleware.history._History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18907__auto__){
var self__ = this;
var this__18907__auto____$1 = this;
return (new middleware.history._History(self__._goog_history,self__.__meta,self__.__extmap,self__.__hash));
});

middleware.history._History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18917__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

middleware.history._History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18908__auto__){
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

middleware.history._History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18909__auto__,other__18910__auto__){
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

middleware.history._History.prototype.middleware$history$HistoryProtocol$ = true;

middleware.history._History.prototype.middleware$history$HistoryProtocol$listen$arity$2 = (function (_this,callback){
var self__ = this;
var _this__$1 = this;
var key = goog.events.listen(self__._goog_history,goog.history.EventType.NAVIGATE,((function (_this__$1){
return (function (p1__92175_SHARP_){
return callback.call(null,p1__92175_SHARP_.token,p1__92175_SHARP_.isNavigation,middleware.history._STAR__history_event_data_STAR_);
});})(_this__$1))
);
return ((function (key,_this__$1){
return (function (){
return goog.events.unlistenByKey(key);
});
;})(key,_this__$1))
});

middleware.history._History.prototype.middleware$history$HistoryProtocol$replace_token$arity$2 = (function (this$,new_token){
var self__ = this;
var this$__$1 = this;
return middleware.history.replace_token.call(null,this$__$1,new_token,null);
});

middleware.history._History.prototype.middleware$history$HistoryProtocol$replace_token$arity$3 = (function (this$,new_token,event_data){
var self__ = this;
var this$__$1 = this;
var _STAR__history_event_data_STAR_92180 = middleware.history._STAR__history_event_data_STAR_;
middleware.history._STAR__history_event_data_STAR_ = event_data;

try{if(cljs.core.not_EQ_.call(null,middleware.history.token.call(null,this$__$1),new_token)){
return self__._goog_history.replaceToken(new_token);
} else {
return null;
}
}finally {middleware.history._STAR__history_event_data_STAR_ = _STAR__history_event_data_STAR_92180;
}});

middleware.history._History.prototype.middleware$history$HistoryProtocol$push_token$arity$2 = (function (this$,token){
var self__ = this;
var this$__$1 = this;
return middleware.history.push_token.call(null,this$__$1,token,null);
});

middleware.history._History.prototype.middleware$history$HistoryProtocol$push_token$arity$3 = (function (_this,token,event_data){
var self__ = this;
var _this__$1 = this;
var _STAR__history_event_data_STAR_92181 = middleware.history._STAR__history_event_data_STAR_;
middleware.history._STAR__history_event_data_STAR_ = event_data;

try{return self__._goog_history.setToken(token);
}finally {middleware.history._STAR__history_event_data_STAR_ = _STAR__history_event_data_STAR_92181;
}});

middleware.history._History.prototype.middleware$history$HistoryProtocol$token$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__._goog_history.getToken();
});

middleware.history._History.prototype.middleware$history$HistoryProtocol$token__GT_href$arity$2 = (function (_this,token){
var self__ = this;
var _this__$1 = this;
return self__._goog_history.getUrl_(token);
});

middleware.history._History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18922__auto__,k__18923__auto__){
var self__ = this;
var this__18922__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265),null], null), null),k__18923__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18922__auto____$1),self__.__meta),k__18923__auto__);
} else {
return (new middleware.history._History(self__._goog_history,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18923__auto__)),null));
}
});

middleware.history._History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18920__auto__,k__18921__auto__,G__92176){
var self__ = this;
var this__18920__auto____$1 = this;
var pred__92182 = cljs.core.keyword_identical_QMARK_;
var expr__92183 = k__18921__auto__;
if(cljs.core.truth_(pred__92182.call(null,new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265),expr__92183))){
return (new middleware.history._History(G__92176,self__.__meta,self__.__extmap,null));
} else {
return (new middleware.history._History(self__._goog_history,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18921__auto__,G__92176),null));
}
});

middleware.history._History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18925__auto__){
var self__ = this;
var this__18925__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265),self__._goog_history],null))], null),self__.__extmap));
});

middleware.history._History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18912__auto__,G__92176){
var self__ = this;
var this__18912__auto____$1 = this;
return (new middleware.history._History(self__._goog_history,G__92176,self__.__extmap,self__.__hash));
});

middleware.history._History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18918__auto__,entry__18919__auto__){
var self__ = this;
var this__18918__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18919__auto__)){
return cljs.core._assoc.call(null,this__18918__auto____$1,cljs.core._nth.call(null,entry__18919__auto__,(0)),cljs.core._nth.call(null,entry__18919__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18918__auto____$1,entry__18919__auto__);
}
});

middleware.history._History.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-goog-history","-goog-history",-640317504,null)], null);
});

middleware.history._History.cljs$lang$type = true;

middleware.history._History.cljs$lang$ctorPrSeq = (function (this__18947__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"middleware.history/-History");
});

middleware.history._History.cljs$lang$ctorPrWriter = (function (this__18947__auto__,writer__18948__auto__){
return cljs.core._write.call(null,writer__18948__auto__,"middleware.history/-History");
});

middleware.history.__GT__History = (function middleware$history$__GT__History(_goog_history){
return (new middleware.history._History(_goog_history,null,null,null));
});

middleware.history.map__GT__History = (function middleware$history$map__GT__History(G__92178){
return (new middleware.history._History(new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265).cljs$core$IFn$_invoke$arity$1(G__92178),null,cljs.core.dissoc.call(null,G__92178,new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265)),null));
});

/**
 * For history management using hashes. Should work in Opera Mini.
 */
middleware.history.new_legacy_hash_history = (function middleware$history$new_legacy_hash_history(){
var history = (new goog.History());
history.setEnabled(true);

return middleware.history.__GT__History.call(null,history);
});
/**
 * For history management using hashes based on onhashchange event. Will not correctly work in Opera Mini: http://caniuse.com/#search=hash
 */
middleware.history.new_hash_history = (function middleware$history$new_hash_history(){
var history = (new goog.history.Html5History());
history.setUseFragment(true);

history.setEnabled(true);

return middleware.history.__GT__History.call(null,history);
});
/**
 * For history management using pushState. Supported browsers: http://caniuse.com/#search=pushstate
 */
middleware.history.new_history = (function middleware$history$new_history(){
var history = (new goog.history.Html5History());
history.setPathPrefix("");

history.setUseFragment(false);

history.setEnabled(true);

return middleware.history.__GT__History.call(null,history);
});
middleware.history._wrap_initial_model = (function middleware$history$_wrap_initial_model(app_initial_model){
return cljs.core.assoc.call(null,app_initial_model,new cljs.core.Keyword("middleware.history","token","middleware.history/token",828993913),"/");
});
middleware.history._wrap_control = (function middleware$history$_wrap_control(app_control,history){
var unlisten = cljs.core.atom.call(null,null);
return ((function (unlisten){
return (function middleware$history$_wrap_control_$_control(model,signal,dispatch_signal,dispatch_action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-start","on-start",-1839785985))){
app_control.call(null,model,signal,dispatch_signal,dispatch_action);

cljs.core.println.call(null,"[routing] start");

cljs.core.add_watch.call(null,model,new cljs.core.Keyword("middleware.history","token-watcher","middleware.history/token-watcher",525976836),((function (unlisten){
return (function (_key,_atom,old_state,new_state){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("middleware.history","token","middleware.history/token",828993913).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("middleware.history","token","middleware.history/token",828993913).cljs$core$IFn$_invoke$arity$1(new_state))){
return middleware.history.replace_token.call(null,history,new cljs.core.Keyword("middleware.history","token","middleware.history/token",828993913).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
});})(unlisten))
);

cljs.core.reset_BANG_.call(null,unlisten,middleware.history.listen.call(null,history,((function (unlisten){
return (function (p1__92186_SHARP_,p2__92187_SHARP_,p3__92188_SHARP_){
return dispatch_signal.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.history","on-history-event","middleware.history/on-history-event",-1476729220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),p1__92186_SHARP_,new cljs.core.Keyword(null,"browser-event?","browser-event?",-1474062560),p2__92187_SHARP_,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),p3__92188_SHARP_], null)], null));
});})(unlisten))
));

return dispatch_signal.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.history","on-history-event","middleware.history/on-history-event",-1476729220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),middleware.history.token.call(null,history),new cljs.core.Keyword(null,"browser-event?","browser-event?",-1474062560),true,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),null], null)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e92256){if((e92256 instanceof Error)){
var e__22955__auto__ = e92256;
if((e__22955__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515))){
cljs.core.deref.call(null,unlisten).call(null);

return app_control.call(null,model,signal,dispatch_signal,dispatch_action);
} else {
throw cljs.core.match.backtrack;

}
}catch (e92257){if((e92257 instanceof Error)){
var e__22955__auto____$1 = e92257;
if((e__22955__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__92247 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__92247,new cljs.core.Keyword("middleware.history","on-history-event","middleware.history/on-history-event",-1476729220))){
try{var signal_1__92248 = cljs.core.nth.call(null,signal,(1));
if(((!((signal_1__92248 == null)))?((((signal_1__92248.cljs$lang$protocol_mask$partition0$ & (256))) || (signal_1__92248.cljs$core$ILookup$))?true:(((!signal_1__92248.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,signal_1__92248):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,signal_1__92248))){
try{var signal_1__92248_browser_event_QMARK___92253 = cljs.core.get.call(null,signal_1__92248,new cljs.core.Keyword(null,"browser-event?","browser-event?",-1474062560),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,signal_1__92248_browser_event_QMARK___92253,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var signal_1__92248_token__92254 = cljs.core.get.call(null,signal_1__92248,new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,signal_1__92248_token__92254,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var signal_1__92248_event_data__92255 = cljs.core.get.call(null,signal_1__92248,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,signal_1__92248_event_data__92255,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var event_data = cljs.core.get.call(null,signal_1__92248,new cljs.core.Keyword(null,"event-data","event-data",-1726012139));
var token = cljs.core.get.call(null,signal_1__92248,new cljs.core.Keyword(null,"token","token",-1211463215));
var browser_event_QMARK_ = cljs.core.get.call(null,signal_1__92248,new cljs.core.Keyword(null,"browser-event?","browser-event?",-1474062560));
dispatch_action.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.history","set-token","middleware.history/set-token",-695771821),token], null));

if(cljs.core.truth_((function (){var or__18298__auto__ = browser_event_QMARK_;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return new cljs.core.Keyword(null,"browser-event?","browser-event?",-1474062560).cljs$core$IFn$_invoke$arity$1(event_data);
}
})())){
return dispatch_signal.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("middleware.history","on-enter","middleware.history/on-enter",1107503248),token], null));
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e92264){if((e92264 instanceof Error)){
var e__22955__auto____$2 = e92264;
if((e__22955__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$2;
}
} else {
throw e92264;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e92263){if((e92263 instanceof Error)){
var e__22955__auto____$2 = e92263;
if((e__22955__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$2;
}
} else {
throw e92263;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e92262){if((e92262 instanceof Error)){
var e__22955__auto____$2 = e92262;
if((e__22955__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$2;
}
} else {
throw e92262;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e92260){if((e92260 instanceof Error)){
var e__22955__auto____$2 = e92260;
if((e__22955__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$2;
}
} else {
throw e92260;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e92259){if((e92259 instanceof Error)){
var e__22955__auto____$2 = e92259;
if((e__22955__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto____$2;
}
} else {
throw e92259;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e92258){if((e92258 instanceof Error)){
var e__22955__auto____$2 = e92258;
if((e__22955__auto____$2 === cljs.core.match.backtrack)){
return app_control.call(null,model,signal,dispatch_signal,dispatch_action);
} else {
throw e__22955__auto____$2;
}
} else {
throw e92258;

}
}} else {
throw e__22955__auto____$1;
}
} else {
throw e92257;

}
}} else {
throw e__22955__auto__;
}
} else {
throw e92256;

}
}});
;})(unlisten))
});
/**
 * Updates the token.
 */
middleware.history._wrap_reconcile = (function middleware$history$_wrap_reconcile(app_reconcile){
return (function middleware$history$_wrap_reconcile_$_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__92281 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__92281,new cljs.core.Keyword("middleware.history","set-token","middleware.history/set-token",-695771821))){
var token = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword("middleware.history","token","middleware.history/token",828993913),token);
} else {
throw cljs.core.match.backtrack;

}
}catch (e92284){if((e92284 instanceof Error)){
var e__22955__auto__ = e92284;
if((e__22955__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__22955__auto__;
}
} else {
throw e92284;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e92283){if((e92283 instanceof Error)){
var e__22955__auto__ = e92283;
if((e__22955__auto__ === cljs.core.match.backtrack)){
return app_reconcile.call(null,model,action);
} else {
throw e__22955__auto__;
}
} else {
throw e92283;

}
}});
});
/**
 * Applies middleware which allows app model always be in sync with current history.
 * 
 *   After start it begins catching history events and updates ::token in model accordingly.
 *   If ::token changes in model (e.g. by toggling action in debugger), then current url is replaced using new token.
 * 
 *   Sends [::on-enter token] signal to app after handling token change event initiated from browser (e.g. on clicking Back button).
 *   So using HistoryProtocol's replace-token/push-token would not trigger this signal.
 *   You can still force sending this signal by passing {:browser-event? true} event-data to these functions.
 */
middleware.history.add = (function middleware$history$add(spec,history){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),middleware.history._wrap_initial_model),new cljs.core.Keyword(null,"control","control",1892578036),middleware.history._wrap_control,history),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),middleware.history._wrap_reconcile);
});
/**
 * Returns false if the user did a middle-click, right-click, or used a modifier
 */
middleware.history._pure_click_QMARK_ = (function middleware$history$_pure_click_QMARK_(e){
return cljs.core.not.call(null,(function (){var or__18298__auto__ = e.altKey;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
var or__18298__auto____$1 = e.ctrlKey;
if(cljs.core.truth_(or__18298__auto____$1)){
return or__18298__auto____$1;
} else {
var or__18298__auto____$2 = e.metaKey;
if(cljs.core.truth_(or__18298__auto____$2)){
return or__18298__auto____$2;
} else {
var or__18298__auto____$3 = e.shiftKey;
if(cljs.core.truth_(or__18298__auto____$3)){
return or__18298__auto____$3;
} else {
return !((e.button === (0)));
}
}
}
}
})());
});
middleware.history._on_click = (function middleware$history$_on_click(e,history,token,replace_QMARK_){
if(cljs.core.truth_(middleware.history._pure_click_QMARK_.call(null,e))){
e.preventDefault();

if(cljs.core.truth_(replace_QMARK_)){
return middleware.history.replace_token.call(null,history,token,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"browser-event?","browser-event?",-1474062560),true], null));
} else {
return middleware.history.push_token.call(null,history,token,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"browser-event?","browser-event?",-1474062560),true], null));
}
} else {
return null;
}
});
/**
 * Link component which changes current URL without sending request to server.
 *   Will replace current token instead of pushing if :replace? attribute is true.
 * 
 *   If history middleware is added then clicking the link will produce :on-enter signal.
 */
middleware.history.link = (function middleware$history$link(var_args){
var args__19364__auto__ = [];
var len__19357__auto___92293 = arguments.length;
var i__19358__auto___92294 = (0);
while(true){
if((i__19358__auto___92294 < len__19357__auto___92293)){
args__19364__auto__.push((arguments[i__19358__auto___92294]));

var G__92295 = (i__19358__auto___92294 + (1));
i__19358__auto___92294 = G__92295;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((3) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((3)),(0))):null);
return middleware.history.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19365__auto__);
});

middleware.history.link.cljs$core$IFn$_invoke$arity$variadic = (function (history,token,p__92290,body){
var map__92291 = p__92290;
var map__92291__$1 = ((((!((map__92291 == null)))?((((map__92291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92291):map__92291);
var attrs = map__92291__$1;
var replace_QMARK_ = cljs.core.get.call(null,map__92291__$1,new cljs.core.Keyword(null,"replace?","replace?",-877816403));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),middleware.history.token__GT_href.call(null,history,token),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__92291,map__92291__$1,attrs,replace_QMARK_){
return (function (p1__92285_SHARP_){
return middleware.history._on_click.call(null,p1__92285_SHARP_,history,token,replace_QMARK_);
});})(map__92291,map__92291__$1,attrs,replace_QMARK_))
], null))], null),body);
});

middleware.history.link.cljs$lang$maxFixedArity = (3);

middleware.history.link.cljs$lang$applyTo = (function (seq92286){
var G__92287 = cljs.core.first.call(null,seq92286);
var seq92286__$1 = cljs.core.next.call(null,seq92286);
var G__92288 = cljs.core.first.call(null,seq92286__$1);
var seq92286__$2 = cljs.core.next.call(null,seq92286__$1);
var G__92289 = cljs.core.first.call(null,seq92286__$2);
var seq92286__$3 = cljs.core.next.call(null,seq92286__$2);
return middleware.history.link.cljs$core$IFn$_invoke$arity$variadic(G__92287,G__92288,G__92289,seq92286__$3);
});

//# sourceMappingURL=history.js.map?rel=1460037784409