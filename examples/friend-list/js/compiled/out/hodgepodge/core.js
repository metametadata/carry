// Compiled by ClojureScript 1.7.228 {}
goog.provide('hodgepodge.core');
goog.require('cljs.core');
goog.require('cljs.reader');
hodgepodge.core.local_storage = localStorage;
hodgepodge.core.session_storage = sessionStorage;
hodgepodge.core.contains_key_QMARK_ = (function hodgepodge$core$contains_key_QMARK_(storage,key){
var ks = Object.keys(storage);
var idx = ks.indexOf(key);
return (idx >= (0));
});
hodgepodge.core.get_item = (function hodgepodge$core$get_item(var_args){
var args87992 = [];
var len__19357__auto___87995 = arguments.length;
var i__19358__auto___87996 = (0);
while(true){
if((i__19358__auto___87996 < len__19357__auto___87995)){
args87992.push((arguments[i__19358__auto___87996]));

var G__87997 = (i__19358__auto___87996 + (1));
i__19358__auto___87996 = G__87997;
continue;
} else {
}
break;
}

var G__87994 = args87992.length;
switch (G__87994) {
case 2:
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87992.length)].join('')));

}
});

hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2 = (function (storage,key){
return hodgepodge.core.get_item.call(null,storage,key,null);
});

hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$3 = (function (storage,key,default$){
if(cljs.core.truth_(hodgepodge.core.contains_key_QMARK_.call(null,storage,key))){
return storage.getItem(key);
} else {
return default$;
}
});

hodgepodge.core.get_item.cljs$lang$maxFixedArity = 3;
hodgepodge.core.set_item = (function hodgepodge$core$set_item(storage,key,val){
storage.setItem(key,val);

return storage;
});
hodgepodge.core.remove_item = (function hodgepodge$core$remove_item(storage,key){
storage.removeItem(key);

return storage;
});
hodgepodge.core.length = (function hodgepodge$core$length(storage){
return storage.length;
});
hodgepodge.core.clear_BANG_ = (function hodgepodge$core$clear_BANG_(storage){
return storage.clear();
});
hodgepodge.core.serialize = (function hodgepodge$core$serialize(v){
var _STAR_print_dup_STAR_88001 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_readably_STAR_88002 = cljs.core._STAR_print_readably_STAR_;
cljs.core._STAR_print_dup_STAR_ = true;

cljs.core._STAR_print_readably_STAR_ = true;

try{return cljs.core.pr_str.call(null,v);
}finally {cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_88002;

cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR_88001;
}});
hodgepodge.core.deserialize = cljs.core.memoize.call(null,cljs.reader.read_string);
Storage.prototype.cljs$core$ICounted$ = true;

Storage.prototype.cljs$core$ICounted$_count$arity$1 = (function (s){
var s__$1 = this;
return hodgepodge.core.length.call(null,s__$1);
});

Storage.prototype.cljs$core$ITransientAssociative$ = true;

Storage.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (s,key,val){
var s__$1 = this;
hodgepodge.core.set_item.call(null,s__$1,hodgepodge.core.serialize.call(null,key),hodgepodge.core.serialize.call(null,val));

return s__$1;
});

Storage.prototype.cljs$core$ITransientCollection$ = true;

Storage.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (s,kv){
var s__$1 = this;
cljs.core.assoc_BANG_.call(null,s__$1,cljs.core.key.call(null,kv),cljs.core.val.call(null,kv));

return s__$1;
});

Storage.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19071__auto__ = ((function (s__$1){
return (function hodgepodge$core$iter__88003(s__88004){
return (new cljs.core.LazySeq(null,((function (s__$1){
return (function (){
var s__88004__$1 = s__88004;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88004__$1);
if(temp__4657__auto__){
var s__88004__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88004__$2)){
var c__19069__auto__ = cljs.core.chunk_first.call(null,s__88004__$2);
var size__19070__auto__ = cljs.core.count.call(null,c__19069__auto__);
var b__88006 = cljs.core.chunk_buffer.call(null,size__19070__auto__);
if((function (){var i__88005 = (0);
while(true){
if((i__88005 < size__19070__auto__)){
var i = cljs.core._nth.call(null,c__19069__auto__,i__88005);
var k = s__$1.key(i);
var v = hodgepodge.core.get_item.call(null,s__$1,k);
cljs.core.chunk_append.call(null,b__88006,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hodgepodge.core.deserialize.call(null,k),hodgepodge.core.deserialize.call(null,v)], null));

var G__88007 = (i__88005 + (1));
i__88005 = G__88007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88006),hodgepodge$core$iter__88003.call(null,cljs.core.chunk_rest.call(null,s__88004__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88006),null);
}
} else {
var i = cljs.core.first.call(null,s__88004__$2);
var k = s__$1.key(i);
var v = hodgepodge.core.get_item.call(null,s__$1,k);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hodgepodge.core.deserialize.call(null,k),hodgepodge.core.deserialize.call(null,v)], null),hodgepodge$core$iter__88003.call(null,cljs.core.rest.call(null,s__88004__$2)));
}
} else {
return null;
}
break;
}
});})(s__$1))
,null,null));
});})(s__$1))
;
return iter__19071__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s__$1)));
})());
});

Storage.prototype.cljs$core$ITransientMap$ = true;

Storage.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (s,key){
var s__$1 = this;
hodgepodge.core.remove_item.call(null,s__$1,hodgepodge.core.serialize.call(null,key));

return s__$1;
});

Storage.prototype.cljs$core$ILookup$ = true;

Storage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (s,key){
var s__$1 = this;
return cljs.core._lookup.call(null,s__$1,key,null);
});

Storage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (s,key,not_found){
var s__$1 = this;
var sk = hodgepodge.core.serialize.call(null,key);
if(cljs.core.truth_(hodgepodge.core.contains_key_QMARK_.call(null,s__$1,sk))){
return hodgepodge.core.deserialize.call(null,hodgepodge.core.get_item.call(null,s__$1,sk));
} else {
return not_found;
}
});

//# sourceMappingURL=core.js.map?rel=1460037780717