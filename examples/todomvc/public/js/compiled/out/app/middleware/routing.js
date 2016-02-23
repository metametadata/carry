// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.middleware.routing');
goog.require('cljs.core');
goog.require('mvsa.helpers');
goog.require('cljs.core.match');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.Html5History');

/**
 * @interface
 */
app.middleware.routing.HistoryProtocol = function(){};

/**
 * Starts calling back on navigation events, fires the initial callback. Returns a function which stops listening.
 */
app.middleware.routing.listen = (function app$middleware$routing$listen(this$,callback){
if((!((this$ == null))) && (!((this$.app$middleware$routing$HistoryProtocol$listen$arity$2 == null)))){
return this$.app$middleware$routing$HistoryProtocol$listen$arity$2(this$,callback);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (app.middleware.routing.listen[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,callback);
} else {
var m__17407__auto____$1 = (app.middleware.routing.listen["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,callback);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.listen",this$);
}
}
}
});

/**
 * Return current token.
 */
app.middleware.routing.token = (function app$middleware$routing$token(this$){
if((!((this$ == null))) && (!((this$.app$middleware$routing$HistoryProtocol$token$arity$1 == null)))){
return this$.app$middleware$routing$HistoryProtocol$token$arity$1(this$);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (app.middleware.routing.token[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$);
} else {
var m__17407__auto____$1 = (app.middleware.routing.token["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.token",this$);
}
}
}
});

/**
 * Replace token without firing navigation event.
 */
app.middleware.routing.replace_token = (function app$middleware$routing$replace_token(this$,token){
if((!((this$ == null))) && (!((this$.app$middleware$routing$HistoryProtocol$replace_token$arity$2 == null)))){
return this$.app$middleware$routing$HistoryProtocol$replace_token$arity$2(this$,token);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (app.middleware.routing.replace_token[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,token);
} else {
var m__17407__auto____$1 = (app.middleware.routing.replace_token["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.replace-token",this$);
}
}
}
});

app.middleware.routing._STAR__history_events_enabled_QMARK__STAR_ = true;

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
 * @implements {app.middleware.routing.HistoryProtocol}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.middleware.routing.History = (function (_goog_history,__meta,__extmap,__hash){
this._goog_history = _goog_history;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
app.middleware.routing.History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17365__auto__,k__17366__auto__){
var self__ = this;
var this__17365__auto____$1 = this;
return cljs.core._lookup.call(null,this__17365__auto____$1,k__17366__auto__,null);
});

app.middleware.routing.History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k26947,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__26949 = (((k26947 instanceof cljs.core.Keyword))?k26947.fqn:null);
switch (G__26949) {
case "-goog-history":
return self__._goog_history;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26947,else__17368__auto__);

}
});

app.middleware.routing.History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17379__auto__,writer__17380__auto__,opts__17381__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
var pr_pair__17382__auto__ = ((function (this__17379__auto____$1){
return (function (keyval__17383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,cljs.core.pr_writer,""," ","",opts__17381__auto__,keyval__17383__auto__);
});})(this__17379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,pr_pair__17382__auto__,"#app.middleware.routing.History{",", ","}",opts__17381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265),self__._goog_history],null))], null),self__.__extmap));
});

app.middleware.routing.History.prototype.cljs$core$IIterable$ = true;

app.middleware.routing.History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26946){
var self__ = this;
var G__26946__$1 = this;
return (new cljs.core.RecordIter((0),G__26946__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

app.middleware.routing.History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17363__auto__){
var self__ = this;
var this__17363__auto____$1 = this;
return self__.__meta;
});

app.middleware.routing.History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17359__auto__){
var self__ = this;
var this__17359__auto____$1 = this;
return (new app.middleware.routing.History(self__._goog_history,self__.__meta,self__.__extmap,self__.__hash));
});

app.middleware.routing.History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17369__auto__){
var self__ = this;
var this__17369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

app.middleware.routing.History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17360__auto__){
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

app.middleware.routing.History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17361__auto__,other__17362__auto__){
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

app.middleware.routing.History.prototype.app$middleware$routing$HistoryProtocol$ = true;

app.middleware.routing.History.prototype.app$middleware$routing$HistoryProtocol$listen$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
var key = goog.events.listen(self__._goog_history,goog.history.EventType.NAVIGATE,((function (this$__$1){
return (function (p1__26945_SHARP_){
if(cljs.core.truth_(app.middleware.routing._STAR__history_events_enabled_QMARK__STAR_)){
return callback.call(null,p1__26945_SHARP_.token);
} else {
return null;
}
});})(this$__$1))
);
callback.call(null,app.middleware.routing.token.call(null,this$__$1));

return ((function (key,this$__$1){
return (function (){
return goog.events.unlistenByKey(key);
});
;})(key,this$__$1))
});

app.middleware.routing.History.prototype.app$middleware$routing$HistoryProtocol$token$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__._goog_history.getToken();
});

app.middleware.routing.History.prototype.app$middleware$routing$HistoryProtocol$replace_token$arity$2 = (function (this$,new_token){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,new_token,app.middleware.routing.token.call(null,this$__$1))){
var _STAR__history_events_enabled_QMARK__STAR_26950 = app.middleware.routing._STAR__history_events_enabled_QMARK__STAR_;
app.middleware.routing._STAR__history_events_enabled_QMARK__STAR_ = false;

try{return self__._goog_history.replaceToken(new_token);
}finally {app.middleware.routing._STAR__history_events_enabled_QMARK__STAR_ = _STAR__history_events_enabled_QMARK__STAR_26950;
}} else {
return null;
}
});

app.middleware.routing.History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17374__auto__,k__17375__auto__){
var self__ = this;
var this__17374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265),null], null), null),k__17375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17374__auto____$1),self__.__meta),k__17375__auto__);
} else {
return (new app.middleware.routing.History(self__._goog_history,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17375__auto__)),null));
}
});

app.middleware.routing.History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__26946){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__26951 = cljs.core.keyword_identical_QMARK_;
var expr__26952 = k__17373__auto__;
if(cljs.core.truth_(pred__26951.call(null,new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265),expr__26952))){
return (new app.middleware.routing.History(G__26946,self__.__meta,self__.__extmap,null));
} else {
return (new app.middleware.routing.History(self__._goog_history,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__26946),null));
}
});

app.middleware.routing.History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265),self__._goog_history],null))], null),self__.__extmap));
});

app.middleware.routing.History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__26946){
var self__ = this;
var this__17364__auto____$1 = this;
return (new app.middleware.routing.History(self__._goog_history,G__26946,self__.__extmap,self__.__hash));
});

app.middleware.routing.History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17370__auto__,entry__17371__auto__){
var self__ = this;
var this__17370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17371__auto__)){
return cljs.core._assoc.call(null,this__17370__auto____$1,cljs.core._nth.call(null,entry__17371__auto__,(0)),cljs.core._nth.call(null,entry__17371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17370__auto____$1,entry__17371__auto__);
}
});

app.middleware.routing.History.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-goog-history","-goog-history",-640317504,null)], null);
});

app.middleware.routing.History.cljs$lang$type = true;

app.middleware.routing.History.cljs$lang$ctorPrSeq = (function (this__17399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"app.middleware.routing/History");
});

app.middleware.routing.History.cljs$lang$ctorPrWriter = (function (this__17399__auto__,writer__17400__auto__){
return cljs.core._write.call(null,writer__17400__auto__,"app.middleware.routing/History");
});

app.middleware.routing.__GT_History = (function app$middleware$routing$__GT_History(_goog_history){
return (new app.middleware.routing.History(_goog_history,null,null,null));
});

app.middleware.routing.map__GT_History = (function app$middleware$routing$map__GT_History(G__26948){
return (new app.middleware.routing.History(new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265).cljs$core$IFn$_invoke$arity$1(G__26948),null,cljs.core.dissoc.call(null,G__26948,new cljs.core.Keyword(null,"-goog-history","-goog-history",2014118265)),null));
});

app.middleware.routing.new_history = (function app$middleware$routing$new_history(){
return app.middleware.routing.__GT_History.call(null,(function (){var G__26956 = (new goog.history.Html5History());
G__26956.setEnabled(true);

return G__26956;
})());
});
/**
 * Sets ::token to empty string if app didn't already set it.
 */
app.middleware.routing._wrap_initial_model = (function app$middleware$routing$_wrap_initial_model(app_initial_model){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.middleware.routing","token","app.middleware.routing/token",1275550810),""], null),app_initial_model);
});
/**
 * Updates token in model on navigation signal and lets wrapped app handle the signal.
 */
app.middleware.routing._wrap_control = (function app$middleware$routing$_wrap_control(app_control){
return (function app$middleware$routing$_wrap_control_$_control(model,signal,dispatch){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__26973 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__26973,new cljs.core.Keyword("app.middleware.routing","-on-navigate","app.middleware.routing/-on-navigate",-1767349137))){
var token = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.routing","-set-token","app.middleware.routing/-set-token",-1733396343),token], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26976){if((e26976 instanceof Error)){
var e__21637__auto__ = e26976;
if((e__21637__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21637__auto__;
}
} else {
throw e26976;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26975){if((e26975 instanceof Error)){
var e__21637__auto__ = e26975;
if((e__21637__auto__ === cljs.core.match.backtrack)){
return app_control.call(null,model,signal,dispatch);
} else {
throw e__21637__auto__;
}
} else {
throw e26975;

}
}});
});
/**
 * Updates the token.
 */
app.middleware.routing._wrap_reconcile = (function app$middleware$routing$_wrap_reconcile(app_reconcile){
return (function app$middleware$routing$_wrap_reconcile_$_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__26993 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26993,new cljs.core.Keyword("app.middleware.routing","-set-token","app.middleware.routing/-set-token",-1733396343))){
var token = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword("app.middleware.routing","token","app.middleware.routing/token",1275550810),token);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26996){if((e26996 instanceof Error)){
var e__21637__auto__ = e26996;
if((e__21637__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21637__auto__;
}
} else {
throw e26996;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26995){if((e26995 instanceof Error)){
var e__21637__auto__ = e26995;
if((e__21637__auto__ === cljs.core.match.backtrack)){
return app_reconcile.call(null,model,action);
} else {
throw e__21637__auto__;
}
} else {
throw e26995;

}
}});
});
/**
 * Routing middleware which allows app react to navigation events by observing model changes.
 * 
 *   After start it begins catching navigation events and updates ::token in model accordingly.
 *   If ::token changes in model (e.g. by toggling action in debugger), then current url is updated using new token.
 *   App can set initial ::token in its initial-model.
 */
app.middleware.routing.add = (function app$middleware$routing$add(spec,history){
var unlisten = cljs.core.atom.call(null,null);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),app.middleware.routing._wrap_initial_model),new cljs.core.Keyword(null,"control","control",1892578036),app.middleware.routing._wrap_control),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),app.middleware.routing._wrap_reconcile),new cljs.core.Keyword(null,"on-start","on-start",-1839785985),mvsa.helpers.after_do,((function (unlisten){
return (function (model,dispatch_signal){
cljs.core.reset_BANG_.call(null,unlisten,app.middleware.routing.listen.call(null,history,((function (unlisten){
return (function (p1__26997_SHARP_){
return dispatch_signal.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.middleware.routing","-on-navigate","app.middleware.routing/-on-navigate",-1767349137),p1__26997_SHARP_], null));
});})(unlisten))
));

var token = reagent.ratom.make_reaction.call(null,((function (unlisten){
return (function (){
return new cljs.core.Keyword("app.middleware.routing","token","app.middleware.routing/token",1275550810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
});})(unlisten))
);
var co__20131__auto__ = reagent.ratom.make_reaction.call(null,((function (token,unlisten){
return (function (){
return app.middleware.routing.replace_token.call(null,history,cljs.core.deref.call(null,token));
});})(token,unlisten))
,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,co__20131__auto__);

return co__20131__auto__;
});})(unlisten))
),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),mvsa.helpers.before_do,((function (unlisten){
return (function (_model,_dispatch_signal){
return cljs.core.deref.call(null,unlisten).call(null);
});})(unlisten))
);
});

//# sourceMappingURL=routing.js.map?rel=1456104813041