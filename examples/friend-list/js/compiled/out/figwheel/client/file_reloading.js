// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18298__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18298__auto__){
return or__18298__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18298__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__91128_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__91128_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__91133 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__91134 = null;
var count__91135 = (0);
var i__91136 = (0);
while(true){
if((i__91136 < count__91135)){
var n = cljs.core._nth.call(null,chunk__91134,i__91136);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__91137 = seq__91133;
var G__91138 = chunk__91134;
var G__91139 = count__91135;
var G__91140 = (i__91136 + (1));
seq__91133 = G__91137;
chunk__91134 = G__91138;
count__91135 = G__91139;
i__91136 = G__91140;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__91133);
if(temp__4657__auto__){
var seq__91133__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91133__$1)){
var c__19102__auto__ = cljs.core.chunk_first.call(null,seq__91133__$1);
var G__91141 = cljs.core.chunk_rest.call(null,seq__91133__$1);
var G__91142 = c__19102__auto__;
var G__91143 = cljs.core.count.call(null,c__19102__auto__);
var G__91144 = (0);
seq__91133 = G__91141;
chunk__91134 = G__91142;
count__91135 = G__91143;
i__91136 = G__91144;
continue;
} else {
var n = cljs.core.first.call(null,seq__91133__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__91145 = cljs.core.next.call(null,seq__91133__$1);
var G__91146 = null;
var G__91147 = (0);
var G__91148 = (0);
seq__91133 = G__91145;
chunk__91134 = G__91146;
count__91135 = G__91147;
i__91136 = G__91148;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__91187_91194 = cljs.core.seq.call(null,deps);
var chunk__91188_91195 = null;
var count__91189_91196 = (0);
var i__91190_91197 = (0);
while(true){
if((i__91190_91197 < count__91189_91196)){
var dep_91198 = cljs.core._nth.call(null,chunk__91188_91195,i__91190_91197);
topo_sort_helper_STAR_.call(null,dep_91198,(depth + (1)),state);

var G__91199 = seq__91187_91194;
var G__91200 = chunk__91188_91195;
var G__91201 = count__91189_91196;
var G__91202 = (i__91190_91197 + (1));
seq__91187_91194 = G__91199;
chunk__91188_91195 = G__91200;
count__91189_91196 = G__91201;
i__91190_91197 = G__91202;
continue;
} else {
var temp__4657__auto___91203 = cljs.core.seq.call(null,seq__91187_91194);
if(temp__4657__auto___91203){
var seq__91187_91204__$1 = temp__4657__auto___91203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91187_91204__$1)){
var c__19102__auto___91205 = cljs.core.chunk_first.call(null,seq__91187_91204__$1);
var G__91206 = cljs.core.chunk_rest.call(null,seq__91187_91204__$1);
var G__91207 = c__19102__auto___91205;
var G__91208 = cljs.core.count.call(null,c__19102__auto___91205);
var G__91209 = (0);
seq__91187_91194 = G__91206;
chunk__91188_91195 = G__91207;
count__91189_91196 = G__91208;
i__91190_91197 = G__91209;
continue;
} else {
var dep_91210 = cljs.core.first.call(null,seq__91187_91204__$1);
topo_sort_helper_STAR_.call(null,dep_91210,(depth + (1)),state);

var G__91211 = cljs.core.next.call(null,seq__91187_91204__$1);
var G__91212 = null;
var G__91213 = (0);
var G__91214 = (0);
seq__91187_91194 = G__91211;
chunk__91188_91195 = G__91212;
count__91189_91196 = G__91213;
i__91190_91197 = G__91214;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__91191){
var vec__91193 = p__91191;
var x = cljs.core.nth.call(null,vec__91193,(0),null);
var xs = cljs.core.nthnext.call(null,vec__91193,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__91193,x,xs,get_deps__$1){
return (function (p1__91149_SHARP_){
return clojure.set.difference.call(null,p1__91149_SHARP_,x);
});})(vec__91193,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__91227 = cljs.core.seq.call(null,provides);
var chunk__91228 = null;
var count__91229 = (0);
var i__91230 = (0);
while(true){
if((i__91230 < count__91229)){
var prov = cljs.core._nth.call(null,chunk__91228,i__91230);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__91231_91239 = cljs.core.seq.call(null,requires);
var chunk__91232_91240 = null;
var count__91233_91241 = (0);
var i__91234_91242 = (0);
while(true){
if((i__91234_91242 < count__91233_91241)){
var req_91243 = cljs.core._nth.call(null,chunk__91232_91240,i__91234_91242);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_91243,prov);

var G__91244 = seq__91231_91239;
var G__91245 = chunk__91232_91240;
var G__91246 = count__91233_91241;
var G__91247 = (i__91234_91242 + (1));
seq__91231_91239 = G__91244;
chunk__91232_91240 = G__91245;
count__91233_91241 = G__91246;
i__91234_91242 = G__91247;
continue;
} else {
var temp__4657__auto___91248 = cljs.core.seq.call(null,seq__91231_91239);
if(temp__4657__auto___91248){
var seq__91231_91249__$1 = temp__4657__auto___91248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91231_91249__$1)){
var c__19102__auto___91250 = cljs.core.chunk_first.call(null,seq__91231_91249__$1);
var G__91251 = cljs.core.chunk_rest.call(null,seq__91231_91249__$1);
var G__91252 = c__19102__auto___91250;
var G__91253 = cljs.core.count.call(null,c__19102__auto___91250);
var G__91254 = (0);
seq__91231_91239 = G__91251;
chunk__91232_91240 = G__91252;
count__91233_91241 = G__91253;
i__91234_91242 = G__91254;
continue;
} else {
var req_91255 = cljs.core.first.call(null,seq__91231_91249__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_91255,prov);

var G__91256 = cljs.core.next.call(null,seq__91231_91249__$1);
var G__91257 = null;
var G__91258 = (0);
var G__91259 = (0);
seq__91231_91239 = G__91256;
chunk__91232_91240 = G__91257;
count__91233_91241 = G__91258;
i__91234_91242 = G__91259;
continue;
}
} else {
}
}
break;
}

var G__91260 = seq__91227;
var G__91261 = chunk__91228;
var G__91262 = count__91229;
var G__91263 = (i__91230 + (1));
seq__91227 = G__91260;
chunk__91228 = G__91261;
count__91229 = G__91262;
i__91230 = G__91263;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__91227);
if(temp__4657__auto__){
var seq__91227__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91227__$1)){
var c__19102__auto__ = cljs.core.chunk_first.call(null,seq__91227__$1);
var G__91264 = cljs.core.chunk_rest.call(null,seq__91227__$1);
var G__91265 = c__19102__auto__;
var G__91266 = cljs.core.count.call(null,c__19102__auto__);
var G__91267 = (0);
seq__91227 = G__91264;
chunk__91228 = G__91265;
count__91229 = G__91266;
i__91230 = G__91267;
continue;
} else {
var prov = cljs.core.first.call(null,seq__91227__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__91235_91268 = cljs.core.seq.call(null,requires);
var chunk__91236_91269 = null;
var count__91237_91270 = (0);
var i__91238_91271 = (0);
while(true){
if((i__91238_91271 < count__91237_91270)){
var req_91272 = cljs.core._nth.call(null,chunk__91236_91269,i__91238_91271);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_91272,prov);

var G__91273 = seq__91235_91268;
var G__91274 = chunk__91236_91269;
var G__91275 = count__91237_91270;
var G__91276 = (i__91238_91271 + (1));
seq__91235_91268 = G__91273;
chunk__91236_91269 = G__91274;
count__91237_91270 = G__91275;
i__91238_91271 = G__91276;
continue;
} else {
var temp__4657__auto___91277__$1 = cljs.core.seq.call(null,seq__91235_91268);
if(temp__4657__auto___91277__$1){
var seq__91235_91278__$1 = temp__4657__auto___91277__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91235_91278__$1)){
var c__19102__auto___91279 = cljs.core.chunk_first.call(null,seq__91235_91278__$1);
var G__91280 = cljs.core.chunk_rest.call(null,seq__91235_91278__$1);
var G__91281 = c__19102__auto___91279;
var G__91282 = cljs.core.count.call(null,c__19102__auto___91279);
var G__91283 = (0);
seq__91235_91268 = G__91280;
chunk__91236_91269 = G__91281;
count__91237_91270 = G__91282;
i__91238_91271 = G__91283;
continue;
} else {
var req_91284 = cljs.core.first.call(null,seq__91235_91278__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_91284,prov);

var G__91285 = cljs.core.next.call(null,seq__91235_91278__$1);
var G__91286 = null;
var G__91287 = (0);
var G__91288 = (0);
seq__91235_91268 = G__91285;
chunk__91236_91269 = G__91286;
count__91237_91270 = G__91287;
i__91238_91271 = G__91288;
continue;
}
} else {
}
}
break;
}

var G__91289 = cljs.core.next.call(null,seq__91227__$1);
var G__91290 = null;
var G__91291 = (0);
var G__91292 = (0);
seq__91227 = G__91289;
chunk__91228 = G__91290;
count__91229 = G__91291;
i__91230 = G__91292;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__91297_91301 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__91298_91302 = null;
var count__91299_91303 = (0);
var i__91300_91304 = (0);
while(true){
if((i__91300_91304 < count__91299_91303)){
var ns_91305 = cljs.core._nth.call(null,chunk__91298_91302,i__91300_91304);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_91305);

var G__91306 = seq__91297_91301;
var G__91307 = chunk__91298_91302;
var G__91308 = count__91299_91303;
var G__91309 = (i__91300_91304 + (1));
seq__91297_91301 = G__91306;
chunk__91298_91302 = G__91307;
count__91299_91303 = G__91308;
i__91300_91304 = G__91309;
continue;
} else {
var temp__4657__auto___91310 = cljs.core.seq.call(null,seq__91297_91301);
if(temp__4657__auto___91310){
var seq__91297_91311__$1 = temp__4657__auto___91310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91297_91311__$1)){
var c__19102__auto___91312 = cljs.core.chunk_first.call(null,seq__91297_91311__$1);
var G__91313 = cljs.core.chunk_rest.call(null,seq__91297_91311__$1);
var G__91314 = c__19102__auto___91312;
var G__91315 = cljs.core.count.call(null,c__19102__auto___91312);
var G__91316 = (0);
seq__91297_91301 = G__91313;
chunk__91298_91302 = G__91314;
count__91299_91303 = G__91315;
i__91300_91304 = G__91316;
continue;
} else {
var ns_91317 = cljs.core.first.call(null,seq__91297_91311__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_91317);

var G__91318 = cljs.core.next.call(null,seq__91297_91311__$1);
var G__91319 = null;
var G__91320 = (0);
var G__91321 = (0);
seq__91297_91301 = G__91318;
chunk__91298_91302 = G__91319;
count__91299_91303 = G__91320;
i__91300_91304 = G__91321;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18298__auto__ = goog.require__;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__91322__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__91322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__91323__i = 0, G__91323__a = new Array(arguments.length -  0);
while (G__91323__i < G__91323__a.length) {G__91323__a[G__91323__i] = arguments[G__91323__i + 0]; ++G__91323__i;}
  args = new cljs.core.IndexedSeq(G__91323__a,0);
} 
return G__91322__delegate.call(this,args);};
G__91322.cljs$lang$maxFixedArity = 0;
G__91322.cljs$lang$applyTo = (function (arglist__91324){
var args = cljs.core.seq(arglist__91324);
return G__91322__delegate(args);
});
G__91322.cljs$core$IFn$_invoke$arity$variadic = G__91322__delegate;
return G__91322;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__91326 = cljs.core._EQ_;
var expr__91327 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__91326.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__91327))){
var path_parts = ((function (pred__91326,expr__91327){
return (function (p1__91325_SHARP_){
return clojure.string.split.call(null,p1__91325_SHARP_,/[\/\\]/);
});})(pred__91326,expr__91327))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__91326,expr__91327){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e91329){if((e91329 instanceof Error)){
var e = e91329;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e91329;

}
}})());
});
;})(path_parts,sep,root,pred__91326,expr__91327))
} else {
if(cljs.core.truth_(pred__91326.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__91327))){
return ((function (pred__91326,expr__91327){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__91326,expr__91327){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__91326,expr__91327))
);

return deferred.addErrback(((function (deferred,pred__91326,expr__91327){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__91326,expr__91327))
);
});
;})(pred__91326,expr__91327))
} else {
return ((function (pred__91326,expr__91327){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__91326,expr__91327))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__91330,callback){
var map__91333 = p__91330;
var map__91333__$1 = ((((!((map__91333 == null)))?((((map__91333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91333):map__91333);
var file_msg = map__91333__$1;
var request_url = cljs.core.get.call(null,map__91333__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__91333,map__91333__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__91333,map__91333__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__){
return (function (state_91357){
var state_val_91358 = (state_91357[(1)]);
if((state_val_91358 === (7))){
var inst_91353 = (state_91357[(2)]);
var state_91357__$1 = state_91357;
var statearr_91359_91379 = state_91357__$1;
(statearr_91359_91379[(2)] = inst_91353);

(statearr_91359_91379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91358 === (1))){
var state_91357__$1 = state_91357;
var statearr_91360_91380 = state_91357__$1;
(statearr_91360_91380[(2)] = null);

(statearr_91360_91380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91358 === (4))){
var inst_91337 = (state_91357[(7)]);
var inst_91337__$1 = (state_91357[(2)]);
var state_91357__$1 = (function (){var statearr_91361 = state_91357;
(statearr_91361[(7)] = inst_91337__$1);

return statearr_91361;
})();
if(cljs.core.truth_(inst_91337__$1)){
var statearr_91362_91381 = state_91357__$1;
(statearr_91362_91381[(1)] = (5));

} else {
var statearr_91363_91382 = state_91357__$1;
(statearr_91363_91382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91358 === (6))){
var state_91357__$1 = state_91357;
var statearr_91364_91383 = state_91357__$1;
(statearr_91364_91383[(2)] = null);

(statearr_91364_91383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91358 === (3))){
var inst_91355 = (state_91357[(2)]);
var state_91357__$1 = state_91357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91357__$1,inst_91355);
} else {
if((state_val_91358 === (2))){
var state_91357__$1 = state_91357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91357__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_91358 === (11))){
var inst_91349 = (state_91357[(2)]);
var state_91357__$1 = (function (){var statearr_91365 = state_91357;
(statearr_91365[(8)] = inst_91349);

return statearr_91365;
})();
var statearr_91366_91384 = state_91357__$1;
(statearr_91366_91384[(2)] = null);

(statearr_91366_91384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91358 === (9))){
var inst_91341 = (state_91357[(9)]);
var inst_91343 = (state_91357[(10)]);
var inst_91345 = inst_91343.call(null,inst_91341);
var state_91357__$1 = state_91357;
var statearr_91367_91385 = state_91357__$1;
(statearr_91367_91385[(2)] = inst_91345);

(statearr_91367_91385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91358 === (5))){
var inst_91337 = (state_91357[(7)]);
var inst_91339 = figwheel.client.file_reloading.blocking_load.call(null,inst_91337);
var state_91357__$1 = state_91357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91357__$1,(8),inst_91339);
} else {
if((state_val_91358 === (10))){
var inst_91341 = (state_91357[(9)]);
var inst_91347 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_91341);
var state_91357__$1 = state_91357;
var statearr_91368_91386 = state_91357__$1;
(statearr_91368_91386[(2)] = inst_91347);

(statearr_91368_91386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91358 === (8))){
var inst_91343 = (state_91357[(10)]);
var inst_91337 = (state_91357[(7)]);
var inst_91341 = (state_91357[(2)]);
var inst_91342 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_91343__$1 = cljs.core.get.call(null,inst_91342,inst_91337);
var state_91357__$1 = (function (){var statearr_91369 = state_91357;
(statearr_91369[(9)] = inst_91341);

(statearr_91369[(10)] = inst_91343__$1);

return statearr_91369;
})();
if(cljs.core.truth_(inst_91343__$1)){
var statearr_91370_91387 = state_91357__$1;
(statearr_91370_91387[(1)] = (9));

} else {
var statearr_91371_91388 = state_91357__$1;
(statearr_91371_91388[(1)] = (10));

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
});})(c__25154__auto__))
;
return ((function (switch__25133__auto__,c__25154__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25134__auto__ = null;
var figwheel$client$file_reloading$state_machine__25134__auto____0 = (function (){
var statearr_91375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91375[(0)] = figwheel$client$file_reloading$state_machine__25134__auto__);

(statearr_91375[(1)] = (1));

return statearr_91375;
});
var figwheel$client$file_reloading$state_machine__25134__auto____1 = (function (state_91357){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_91357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e91376){if((e91376 instanceof Object)){
var ex__25137__auto__ = e91376;
var statearr_91377_91389 = state_91357;
(statearr_91377_91389[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91390 = state_91357;
state_91357 = G__91390;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25134__auto__ = function(state_91357){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25134__auto____1.call(this,state_91357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25134__auto____0;
figwheel$client$file_reloading$state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25134__auto____1;
return figwheel$client$file_reloading$state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__))
})();
var state__25156__auto__ = (function (){var statearr_91378 = f__25155__auto__.call(null);
(statearr_91378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_91378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__))
);

return c__25154__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__91391,callback){
var map__91394 = p__91391;
var map__91394__$1 = ((((!((map__91394 == null)))?((((map__91394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91394):map__91394);
var file_msg = map__91394__$1;
var namespace = cljs.core.get.call(null,map__91394__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__91394,map__91394__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__91394,map__91394__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__91396){
var map__91399 = p__91396;
var map__91399__$1 = ((((!((map__91399 == null)))?((((map__91399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91399):map__91399);
var file_msg = map__91399__$1;
var namespace = cljs.core.get.call(null,map__91399__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18286__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18286__auto__){
var or__18298__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
var or__18298__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18298__auto____$1)){
return or__18298__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18286__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__91401,callback){
var map__91404 = p__91401;
var map__91404__$1 = ((((!((map__91404 == null)))?((((map__91404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91404):map__91404);
var file_msg = map__91404__$1;
var request_url = cljs.core.get.call(null,map__91404__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__91404__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25154__auto___91492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto___91492,out){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto___91492,out){
return (function (state_91474){
var state_val_91475 = (state_91474[(1)]);
if((state_val_91475 === (1))){
var inst_91452 = cljs.core.nth.call(null,files,(0),null);
var inst_91453 = cljs.core.nthnext.call(null,files,(1));
var inst_91454 = files;
var state_91474__$1 = (function (){var statearr_91476 = state_91474;
(statearr_91476[(7)] = inst_91454);

(statearr_91476[(8)] = inst_91452);

(statearr_91476[(9)] = inst_91453);

return statearr_91476;
})();
var statearr_91477_91493 = state_91474__$1;
(statearr_91477_91493[(2)] = null);

(statearr_91477_91493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91475 === (2))){
var inst_91454 = (state_91474[(7)]);
var inst_91457 = (state_91474[(10)]);
var inst_91457__$1 = cljs.core.nth.call(null,inst_91454,(0),null);
var inst_91458 = cljs.core.nthnext.call(null,inst_91454,(1));
var inst_91459 = (inst_91457__$1 == null);
var inst_91460 = cljs.core.not.call(null,inst_91459);
var state_91474__$1 = (function (){var statearr_91478 = state_91474;
(statearr_91478[(10)] = inst_91457__$1);

(statearr_91478[(11)] = inst_91458);

return statearr_91478;
})();
if(inst_91460){
var statearr_91479_91494 = state_91474__$1;
(statearr_91479_91494[(1)] = (4));

} else {
var statearr_91480_91495 = state_91474__$1;
(statearr_91480_91495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91475 === (3))){
var inst_91472 = (state_91474[(2)]);
var state_91474__$1 = state_91474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91474__$1,inst_91472);
} else {
if((state_val_91475 === (4))){
var inst_91457 = (state_91474[(10)]);
var inst_91462 = figwheel.client.file_reloading.reload_js_file.call(null,inst_91457);
var state_91474__$1 = state_91474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91474__$1,(7),inst_91462);
} else {
if((state_val_91475 === (5))){
var inst_91468 = cljs.core.async.close_BANG_.call(null,out);
var state_91474__$1 = state_91474;
var statearr_91481_91496 = state_91474__$1;
(statearr_91481_91496[(2)] = inst_91468);

(statearr_91481_91496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91475 === (6))){
var inst_91470 = (state_91474[(2)]);
var state_91474__$1 = state_91474;
var statearr_91482_91497 = state_91474__$1;
(statearr_91482_91497[(2)] = inst_91470);

(statearr_91482_91497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91475 === (7))){
var inst_91458 = (state_91474[(11)]);
var inst_91464 = (state_91474[(2)]);
var inst_91465 = cljs.core.async.put_BANG_.call(null,out,inst_91464);
var inst_91454 = inst_91458;
var state_91474__$1 = (function (){var statearr_91483 = state_91474;
(statearr_91483[(7)] = inst_91454);

(statearr_91483[(12)] = inst_91465);

return statearr_91483;
})();
var statearr_91484_91498 = state_91474__$1;
(statearr_91484_91498[(2)] = null);

(statearr_91484_91498[(1)] = (2));


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
});})(c__25154__auto___91492,out))
;
return ((function (switch__25133__auto__,c__25154__auto___91492,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto____0 = (function (){
var statearr_91488 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91488[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto__);

(statearr_91488[(1)] = (1));

return statearr_91488;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto____1 = (function (state_91474){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_91474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e91489){if((e91489 instanceof Object)){
var ex__25137__auto__ = e91489;
var statearr_91490_91499 = state_91474;
(statearr_91490_91499[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91500 = state_91474;
state_91474 = G__91500;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto__ = function(state_91474){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto____1.call(this,state_91474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto___91492,out))
})();
var state__25156__auto__ = (function (){var statearr_91491 = f__25155__auto__.call(null);
(statearr_91491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto___91492);

return statearr_91491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto___91492,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__91501,opts){
var map__91505 = p__91501;
var map__91505__$1 = ((((!((map__91505 == null)))?((((map__91505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91505):map__91505);
var eval_body__$1 = cljs.core.get.call(null,map__91505__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__91505__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18286__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18286__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18286__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e91507){var e = e91507;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__91508_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__91508_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__91513){
var vec__91514 = p__91513;
var k = cljs.core.nth.call(null,vec__91514,(0),null);
var v = cljs.core.nth.call(null,vec__91514,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__91515){
var vec__91516 = p__91515;
var k = cljs.core.nth.call(null,vec__91516,(0),null);
var v = cljs.core.nth.call(null,vec__91516,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__91520,p__91521){
var map__91768 = p__91520;
var map__91768__$1 = ((((!((map__91768 == null)))?((((map__91768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91768):map__91768);
var opts = map__91768__$1;
var before_jsload = cljs.core.get.call(null,map__91768__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__91768__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__91768__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__91769 = p__91521;
var map__91769__$1 = ((((!((map__91769 == null)))?((((map__91769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91769):map__91769);
var msg = map__91769__$1;
var files = cljs.core.get.call(null,map__91769__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__91769__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__91769__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_91922){
var state_val_91923 = (state_91922[(1)]);
if((state_val_91923 === (7))){
var inst_91783 = (state_91922[(7)]);
var inst_91785 = (state_91922[(8)]);
var inst_91786 = (state_91922[(9)]);
var inst_91784 = (state_91922[(10)]);
var inst_91791 = cljs.core._nth.call(null,inst_91784,inst_91786);
var inst_91792 = figwheel.client.file_reloading.eval_body.call(null,inst_91791,opts);
var inst_91793 = (inst_91786 + (1));
var tmp91924 = inst_91783;
var tmp91925 = inst_91785;
var tmp91926 = inst_91784;
var inst_91783__$1 = tmp91924;
var inst_91784__$1 = tmp91926;
var inst_91785__$1 = tmp91925;
var inst_91786__$1 = inst_91793;
var state_91922__$1 = (function (){var statearr_91927 = state_91922;
(statearr_91927[(7)] = inst_91783__$1);

(statearr_91927[(8)] = inst_91785__$1);

(statearr_91927[(9)] = inst_91786__$1);

(statearr_91927[(10)] = inst_91784__$1);

(statearr_91927[(11)] = inst_91792);

return statearr_91927;
})();
var statearr_91928_92014 = state_91922__$1;
(statearr_91928_92014[(2)] = null);

(statearr_91928_92014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (20))){
var inst_91826 = (state_91922[(12)]);
var inst_91834 = figwheel.client.file_reloading.sort_files.call(null,inst_91826);
var state_91922__$1 = state_91922;
var statearr_91929_92015 = state_91922__$1;
(statearr_91929_92015[(2)] = inst_91834);

(statearr_91929_92015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (27))){
var state_91922__$1 = state_91922;
var statearr_91930_92016 = state_91922__$1;
(statearr_91930_92016[(2)] = null);

(statearr_91930_92016[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (1))){
var inst_91775 = (state_91922[(13)]);
var inst_91772 = before_jsload.call(null,files);
var inst_91773 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_91774 = (function (){return ((function (inst_91775,inst_91772,inst_91773,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__91517_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__91517_SHARP_);
});
;})(inst_91775,inst_91772,inst_91773,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91775__$1 = cljs.core.filter.call(null,inst_91774,files);
var inst_91776 = cljs.core.not_empty.call(null,inst_91775__$1);
var state_91922__$1 = (function (){var statearr_91931 = state_91922;
(statearr_91931[(14)] = inst_91773);

(statearr_91931[(15)] = inst_91772);

(statearr_91931[(13)] = inst_91775__$1);

return statearr_91931;
})();
if(cljs.core.truth_(inst_91776)){
var statearr_91932_92017 = state_91922__$1;
(statearr_91932_92017[(1)] = (2));

} else {
var statearr_91933_92018 = state_91922__$1;
(statearr_91933_92018[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (24))){
var state_91922__$1 = state_91922;
var statearr_91934_92019 = state_91922__$1;
(statearr_91934_92019[(2)] = null);

(statearr_91934_92019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (39))){
var inst_91876 = (state_91922[(16)]);
var state_91922__$1 = state_91922;
var statearr_91935_92020 = state_91922__$1;
(statearr_91935_92020[(2)] = inst_91876);

(statearr_91935_92020[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (46))){
var inst_91917 = (state_91922[(2)]);
var state_91922__$1 = state_91922;
var statearr_91936_92021 = state_91922__$1;
(statearr_91936_92021[(2)] = inst_91917);

(statearr_91936_92021[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (4))){
var inst_91820 = (state_91922[(2)]);
var inst_91821 = cljs.core.List.EMPTY;
var inst_91822 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_91821);
var inst_91823 = (function (){return ((function (inst_91820,inst_91821,inst_91822,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__91518_SHARP_){
var and__18286__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__91518_SHARP_);
if(cljs.core.truth_(and__18286__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__91518_SHARP_));
} else {
return and__18286__auto__;
}
});
;})(inst_91820,inst_91821,inst_91822,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91824 = cljs.core.filter.call(null,inst_91823,files);
var inst_91825 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_91826 = cljs.core.concat.call(null,inst_91824,inst_91825);
var state_91922__$1 = (function (){var statearr_91937 = state_91922;
(statearr_91937[(17)] = inst_91822);

(statearr_91937[(12)] = inst_91826);

(statearr_91937[(18)] = inst_91820);

return statearr_91937;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_91938_92022 = state_91922__$1;
(statearr_91938_92022[(1)] = (16));

} else {
var statearr_91939_92023 = state_91922__$1;
(statearr_91939_92023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (15))){
var inst_91810 = (state_91922[(2)]);
var state_91922__$1 = state_91922;
var statearr_91940_92024 = state_91922__$1;
(statearr_91940_92024[(2)] = inst_91810);

(statearr_91940_92024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (21))){
var inst_91836 = (state_91922[(19)]);
var inst_91836__$1 = (state_91922[(2)]);
var inst_91837 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_91836__$1);
var state_91922__$1 = (function (){var statearr_91941 = state_91922;
(statearr_91941[(19)] = inst_91836__$1);

return statearr_91941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91922__$1,(22),inst_91837);
} else {
if((state_val_91923 === (31))){
var inst_91920 = (state_91922[(2)]);
var state_91922__$1 = state_91922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91922__$1,inst_91920);
} else {
if((state_val_91923 === (32))){
var inst_91876 = (state_91922[(16)]);
var inst_91881 = inst_91876.cljs$lang$protocol_mask$partition0$;
var inst_91882 = (inst_91881 & (64));
var inst_91883 = inst_91876.cljs$core$ISeq$;
var inst_91884 = (inst_91882) || (inst_91883);
var state_91922__$1 = state_91922;
if(cljs.core.truth_(inst_91884)){
var statearr_91942_92025 = state_91922__$1;
(statearr_91942_92025[(1)] = (35));

} else {
var statearr_91943_92026 = state_91922__$1;
(statearr_91943_92026[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (40))){
var inst_91897 = (state_91922[(20)]);
var inst_91896 = (state_91922[(2)]);
var inst_91897__$1 = cljs.core.get.call(null,inst_91896,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_91898 = cljs.core.get.call(null,inst_91896,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_91899 = cljs.core.not_empty.call(null,inst_91897__$1);
var state_91922__$1 = (function (){var statearr_91944 = state_91922;
(statearr_91944[(21)] = inst_91898);

(statearr_91944[(20)] = inst_91897__$1);

return statearr_91944;
})();
if(cljs.core.truth_(inst_91899)){
var statearr_91945_92027 = state_91922__$1;
(statearr_91945_92027[(1)] = (41));

} else {
var statearr_91946_92028 = state_91922__$1;
(statearr_91946_92028[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (33))){
var state_91922__$1 = state_91922;
var statearr_91947_92029 = state_91922__$1;
(statearr_91947_92029[(2)] = false);

(statearr_91947_92029[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (13))){
var inst_91796 = (state_91922[(22)]);
var inst_91800 = cljs.core.chunk_first.call(null,inst_91796);
var inst_91801 = cljs.core.chunk_rest.call(null,inst_91796);
var inst_91802 = cljs.core.count.call(null,inst_91800);
var inst_91783 = inst_91801;
var inst_91784 = inst_91800;
var inst_91785 = inst_91802;
var inst_91786 = (0);
var state_91922__$1 = (function (){var statearr_91948 = state_91922;
(statearr_91948[(7)] = inst_91783);

(statearr_91948[(8)] = inst_91785);

(statearr_91948[(9)] = inst_91786);

(statearr_91948[(10)] = inst_91784);

return statearr_91948;
})();
var statearr_91949_92030 = state_91922__$1;
(statearr_91949_92030[(2)] = null);

(statearr_91949_92030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (22))){
var inst_91840 = (state_91922[(23)]);
var inst_91844 = (state_91922[(24)]);
var inst_91836 = (state_91922[(19)]);
var inst_91839 = (state_91922[(25)]);
var inst_91839__$1 = (state_91922[(2)]);
var inst_91840__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_91839__$1);
var inst_91841 = (function (){var all_files = inst_91836;
var res_SINGLEQUOTE_ = inst_91839__$1;
var res = inst_91840__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_91840,inst_91844,inst_91836,inst_91839,inst_91839__$1,inst_91840__$1,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__91519_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__91519_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_91840,inst_91844,inst_91836,inst_91839,inst_91839__$1,inst_91840__$1,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91842 = cljs.core.filter.call(null,inst_91841,inst_91839__$1);
var inst_91843 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_91844__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_91843);
var inst_91845 = cljs.core.not_empty.call(null,inst_91844__$1);
var state_91922__$1 = (function (){var statearr_91950 = state_91922;
(statearr_91950[(26)] = inst_91842);

(statearr_91950[(23)] = inst_91840__$1);

(statearr_91950[(24)] = inst_91844__$1);

(statearr_91950[(25)] = inst_91839__$1);

return statearr_91950;
})();
if(cljs.core.truth_(inst_91845)){
var statearr_91951_92031 = state_91922__$1;
(statearr_91951_92031[(1)] = (23));

} else {
var statearr_91952_92032 = state_91922__$1;
(statearr_91952_92032[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (36))){
var state_91922__$1 = state_91922;
var statearr_91953_92033 = state_91922__$1;
(statearr_91953_92033[(2)] = false);

(statearr_91953_92033[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (41))){
var inst_91897 = (state_91922[(20)]);
var inst_91901 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_91902 = cljs.core.map.call(null,inst_91901,inst_91897);
var inst_91903 = cljs.core.pr_str.call(null,inst_91902);
var inst_91904 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_91903)].join('');
var inst_91905 = figwheel.client.utils.log.call(null,inst_91904);
var state_91922__$1 = state_91922;
var statearr_91954_92034 = state_91922__$1;
(statearr_91954_92034[(2)] = inst_91905);

(statearr_91954_92034[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (43))){
var inst_91898 = (state_91922[(21)]);
var inst_91908 = (state_91922[(2)]);
var inst_91909 = cljs.core.not_empty.call(null,inst_91898);
var state_91922__$1 = (function (){var statearr_91955 = state_91922;
(statearr_91955[(27)] = inst_91908);

return statearr_91955;
})();
if(cljs.core.truth_(inst_91909)){
var statearr_91956_92035 = state_91922__$1;
(statearr_91956_92035[(1)] = (44));

} else {
var statearr_91957_92036 = state_91922__$1;
(statearr_91957_92036[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (29))){
var inst_91842 = (state_91922[(26)]);
var inst_91840 = (state_91922[(23)]);
var inst_91844 = (state_91922[(24)]);
var inst_91876 = (state_91922[(16)]);
var inst_91836 = (state_91922[(19)]);
var inst_91839 = (state_91922[(25)]);
var inst_91872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_91875 = (function (){var all_files = inst_91836;
var res_SINGLEQUOTE_ = inst_91839;
var res = inst_91840;
var files_not_loaded = inst_91842;
var dependencies_that_loaded = inst_91844;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91842,inst_91840,inst_91844,inst_91876,inst_91836,inst_91839,inst_91872,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__91874){
var map__91958 = p__91874;
var map__91958__$1 = ((((!((map__91958 == null)))?((((map__91958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91958):map__91958);
var namespace = cljs.core.get.call(null,map__91958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91842,inst_91840,inst_91844,inst_91876,inst_91836,inst_91839,inst_91872,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91876__$1 = cljs.core.group_by.call(null,inst_91875,inst_91842);
var inst_91878 = (inst_91876__$1 == null);
var inst_91879 = cljs.core.not.call(null,inst_91878);
var state_91922__$1 = (function (){var statearr_91960 = state_91922;
(statearr_91960[(16)] = inst_91876__$1);

(statearr_91960[(28)] = inst_91872);

return statearr_91960;
})();
if(inst_91879){
var statearr_91961_92037 = state_91922__$1;
(statearr_91961_92037[(1)] = (32));

} else {
var statearr_91962_92038 = state_91922__$1;
(statearr_91962_92038[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (44))){
var inst_91898 = (state_91922[(21)]);
var inst_91911 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_91898);
var inst_91912 = cljs.core.pr_str.call(null,inst_91911);
var inst_91913 = [cljs.core.str("not required: "),cljs.core.str(inst_91912)].join('');
var inst_91914 = figwheel.client.utils.log.call(null,inst_91913);
var state_91922__$1 = state_91922;
var statearr_91963_92039 = state_91922__$1;
(statearr_91963_92039[(2)] = inst_91914);

(statearr_91963_92039[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (6))){
var inst_91817 = (state_91922[(2)]);
var state_91922__$1 = state_91922;
var statearr_91964_92040 = state_91922__$1;
(statearr_91964_92040[(2)] = inst_91817);

(statearr_91964_92040[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (28))){
var inst_91842 = (state_91922[(26)]);
var inst_91869 = (state_91922[(2)]);
var inst_91870 = cljs.core.not_empty.call(null,inst_91842);
var state_91922__$1 = (function (){var statearr_91965 = state_91922;
(statearr_91965[(29)] = inst_91869);

return statearr_91965;
})();
if(cljs.core.truth_(inst_91870)){
var statearr_91966_92041 = state_91922__$1;
(statearr_91966_92041[(1)] = (29));

} else {
var statearr_91967_92042 = state_91922__$1;
(statearr_91967_92042[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (25))){
var inst_91840 = (state_91922[(23)]);
var inst_91856 = (state_91922[(2)]);
var inst_91857 = cljs.core.not_empty.call(null,inst_91840);
var state_91922__$1 = (function (){var statearr_91968 = state_91922;
(statearr_91968[(30)] = inst_91856);

return statearr_91968;
})();
if(cljs.core.truth_(inst_91857)){
var statearr_91969_92043 = state_91922__$1;
(statearr_91969_92043[(1)] = (26));

} else {
var statearr_91970_92044 = state_91922__$1;
(statearr_91970_92044[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (34))){
var inst_91891 = (state_91922[(2)]);
var state_91922__$1 = state_91922;
if(cljs.core.truth_(inst_91891)){
var statearr_91971_92045 = state_91922__$1;
(statearr_91971_92045[(1)] = (38));

} else {
var statearr_91972_92046 = state_91922__$1;
(statearr_91972_92046[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (17))){
var state_91922__$1 = state_91922;
var statearr_91973_92047 = state_91922__$1;
(statearr_91973_92047[(2)] = recompile_dependents);

(statearr_91973_92047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (3))){
var state_91922__$1 = state_91922;
var statearr_91974_92048 = state_91922__$1;
(statearr_91974_92048[(2)] = null);

(statearr_91974_92048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (12))){
var inst_91813 = (state_91922[(2)]);
var state_91922__$1 = state_91922;
var statearr_91975_92049 = state_91922__$1;
(statearr_91975_92049[(2)] = inst_91813);

(statearr_91975_92049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (2))){
var inst_91775 = (state_91922[(13)]);
var inst_91782 = cljs.core.seq.call(null,inst_91775);
var inst_91783 = inst_91782;
var inst_91784 = null;
var inst_91785 = (0);
var inst_91786 = (0);
var state_91922__$1 = (function (){var statearr_91976 = state_91922;
(statearr_91976[(7)] = inst_91783);

(statearr_91976[(8)] = inst_91785);

(statearr_91976[(9)] = inst_91786);

(statearr_91976[(10)] = inst_91784);

return statearr_91976;
})();
var statearr_91977_92050 = state_91922__$1;
(statearr_91977_92050[(2)] = null);

(statearr_91977_92050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (23))){
var inst_91842 = (state_91922[(26)]);
var inst_91840 = (state_91922[(23)]);
var inst_91844 = (state_91922[(24)]);
var inst_91836 = (state_91922[(19)]);
var inst_91839 = (state_91922[(25)]);
var inst_91847 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_91849 = (function (){var all_files = inst_91836;
var res_SINGLEQUOTE_ = inst_91839;
var res = inst_91840;
var files_not_loaded = inst_91842;
var dependencies_that_loaded = inst_91844;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91842,inst_91840,inst_91844,inst_91836,inst_91839,inst_91847,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__91848){
var map__91978 = p__91848;
var map__91978__$1 = ((((!((map__91978 == null)))?((((map__91978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91978):map__91978);
var request_url = cljs.core.get.call(null,map__91978__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91842,inst_91840,inst_91844,inst_91836,inst_91839,inst_91847,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91850 = cljs.core.reverse.call(null,inst_91844);
var inst_91851 = cljs.core.map.call(null,inst_91849,inst_91850);
var inst_91852 = cljs.core.pr_str.call(null,inst_91851);
var inst_91853 = figwheel.client.utils.log.call(null,inst_91852);
var state_91922__$1 = (function (){var statearr_91980 = state_91922;
(statearr_91980[(31)] = inst_91847);

return statearr_91980;
})();
var statearr_91981_92051 = state_91922__$1;
(statearr_91981_92051[(2)] = inst_91853);

(statearr_91981_92051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (35))){
var state_91922__$1 = state_91922;
var statearr_91982_92052 = state_91922__$1;
(statearr_91982_92052[(2)] = true);

(statearr_91982_92052[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (19))){
var inst_91826 = (state_91922[(12)]);
var inst_91832 = figwheel.client.file_reloading.expand_files.call(null,inst_91826);
var state_91922__$1 = state_91922;
var statearr_91983_92053 = state_91922__$1;
(statearr_91983_92053[(2)] = inst_91832);

(statearr_91983_92053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (11))){
var state_91922__$1 = state_91922;
var statearr_91984_92054 = state_91922__$1;
(statearr_91984_92054[(2)] = null);

(statearr_91984_92054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (9))){
var inst_91815 = (state_91922[(2)]);
var state_91922__$1 = state_91922;
var statearr_91985_92055 = state_91922__$1;
(statearr_91985_92055[(2)] = inst_91815);

(statearr_91985_92055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (5))){
var inst_91785 = (state_91922[(8)]);
var inst_91786 = (state_91922[(9)]);
var inst_91788 = (inst_91786 < inst_91785);
var inst_91789 = inst_91788;
var state_91922__$1 = state_91922;
if(cljs.core.truth_(inst_91789)){
var statearr_91986_92056 = state_91922__$1;
(statearr_91986_92056[(1)] = (7));

} else {
var statearr_91987_92057 = state_91922__$1;
(statearr_91987_92057[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (14))){
var inst_91796 = (state_91922[(22)]);
var inst_91805 = cljs.core.first.call(null,inst_91796);
var inst_91806 = figwheel.client.file_reloading.eval_body.call(null,inst_91805,opts);
var inst_91807 = cljs.core.next.call(null,inst_91796);
var inst_91783 = inst_91807;
var inst_91784 = null;
var inst_91785 = (0);
var inst_91786 = (0);
var state_91922__$1 = (function (){var statearr_91988 = state_91922;
(statearr_91988[(7)] = inst_91783);

(statearr_91988[(8)] = inst_91785);

(statearr_91988[(32)] = inst_91806);

(statearr_91988[(9)] = inst_91786);

(statearr_91988[(10)] = inst_91784);

return statearr_91988;
})();
var statearr_91989_92058 = state_91922__$1;
(statearr_91989_92058[(2)] = null);

(statearr_91989_92058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (45))){
var state_91922__$1 = state_91922;
var statearr_91990_92059 = state_91922__$1;
(statearr_91990_92059[(2)] = null);

(statearr_91990_92059[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (26))){
var inst_91842 = (state_91922[(26)]);
var inst_91840 = (state_91922[(23)]);
var inst_91844 = (state_91922[(24)]);
var inst_91836 = (state_91922[(19)]);
var inst_91839 = (state_91922[(25)]);
var inst_91859 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_91861 = (function (){var all_files = inst_91836;
var res_SINGLEQUOTE_ = inst_91839;
var res = inst_91840;
var files_not_loaded = inst_91842;
var dependencies_that_loaded = inst_91844;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91842,inst_91840,inst_91844,inst_91836,inst_91839,inst_91859,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__91860){
var map__91991 = p__91860;
var map__91991__$1 = ((((!((map__91991 == null)))?((((map__91991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91991):map__91991);
var namespace = cljs.core.get.call(null,map__91991__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__91991__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91842,inst_91840,inst_91844,inst_91836,inst_91839,inst_91859,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91862 = cljs.core.map.call(null,inst_91861,inst_91840);
var inst_91863 = cljs.core.pr_str.call(null,inst_91862);
var inst_91864 = figwheel.client.utils.log.call(null,inst_91863);
var inst_91865 = (function (){var all_files = inst_91836;
var res_SINGLEQUOTE_ = inst_91839;
var res = inst_91840;
var files_not_loaded = inst_91842;
var dependencies_that_loaded = inst_91844;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91842,inst_91840,inst_91844,inst_91836,inst_91839,inst_91859,inst_91861,inst_91862,inst_91863,inst_91864,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_91842,inst_91840,inst_91844,inst_91836,inst_91839,inst_91859,inst_91861,inst_91862,inst_91863,inst_91864,state_val_91923,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_91866 = setTimeout(inst_91865,(10));
var state_91922__$1 = (function (){var statearr_91993 = state_91922;
(statearr_91993[(33)] = inst_91859);

(statearr_91993[(34)] = inst_91864);

return statearr_91993;
})();
var statearr_91994_92060 = state_91922__$1;
(statearr_91994_92060[(2)] = inst_91866);

(statearr_91994_92060[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (16))){
var state_91922__$1 = state_91922;
var statearr_91995_92061 = state_91922__$1;
(statearr_91995_92061[(2)] = reload_dependents);

(statearr_91995_92061[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (38))){
var inst_91876 = (state_91922[(16)]);
var inst_91893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91876);
var state_91922__$1 = state_91922;
var statearr_91996_92062 = state_91922__$1;
(statearr_91996_92062[(2)] = inst_91893);

(statearr_91996_92062[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (30))){
var state_91922__$1 = state_91922;
var statearr_91997_92063 = state_91922__$1;
(statearr_91997_92063[(2)] = null);

(statearr_91997_92063[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (10))){
var inst_91796 = (state_91922[(22)]);
var inst_91798 = cljs.core.chunked_seq_QMARK_.call(null,inst_91796);
var state_91922__$1 = state_91922;
if(inst_91798){
var statearr_91998_92064 = state_91922__$1;
(statearr_91998_92064[(1)] = (13));

} else {
var statearr_91999_92065 = state_91922__$1;
(statearr_91999_92065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (18))){
var inst_91830 = (state_91922[(2)]);
var state_91922__$1 = state_91922;
if(cljs.core.truth_(inst_91830)){
var statearr_92000_92066 = state_91922__$1;
(statearr_92000_92066[(1)] = (19));

} else {
var statearr_92001_92067 = state_91922__$1;
(statearr_92001_92067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (42))){
var state_91922__$1 = state_91922;
var statearr_92002_92068 = state_91922__$1;
(statearr_92002_92068[(2)] = null);

(statearr_92002_92068[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (37))){
var inst_91888 = (state_91922[(2)]);
var state_91922__$1 = state_91922;
var statearr_92003_92069 = state_91922__$1;
(statearr_92003_92069[(2)] = inst_91888);

(statearr_92003_92069[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91923 === (8))){
var inst_91796 = (state_91922[(22)]);
var inst_91783 = (state_91922[(7)]);
var inst_91796__$1 = cljs.core.seq.call(null,inst_91783);
var state_91922__$1 = (function (){var statearr_92004 = state_91922;
(statearr_92004[(22)] = inst_91796__$1);

return statearr_92004;
})();
if(inst_91796__$1){
var statearr_92005_92070 = state_91922__$1;
(statearr_92005_92070[(1)] = (10));

} else {
var statearr_92006_92071 = state_91922__$1;
(statearr_92006_92071[(1)] = (11));

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
}
});})(c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25133__auto__,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto____0 = (function (){
var statearr_92010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92010[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto__);

(statearr_92010[(1)] = (1));

return statearr_92010;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto____1 = (function (state_91922){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_91922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e92011){if((e92011 instanceof Object)){
var ex__25137__auto__ = e92011;
var statearr_92012_92072 = state_91922;
(statearr_92012_92072[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92073 = state_91922;
state_91922 = G__92073;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto__ = function(state_91922){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto____1.call(this,state_91922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25156__auto__ = (function (){var statearr_92013 = f__25155__auto__.call(null);
(statearr_92013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_92013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__,map__91768,map__91768__$1,opts,before_jsload,on_jsload,reload_dependents,map__91769,map__91769__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25154__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__92076,link){
var map__92079 = p__92076;
var map__92079__$1 = ((((!((map__92079 == null)))?((((map__92079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92079):map__92079);
var file = cljs.core.get.call(null,map__92079__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__92079,map__92079__$1,file){
return (function (p1__92074_SHARP_,p2__92075_SHARP_){
if(cljs.core._EQ_.call(null,p1__92074_SHARP_,p2__92075_SHARP_)){
return p1__92074_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__92079,map__92079__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__92085){
var map__92086 = p__92085;
var map__92086__$1 = ((((!((map__92086 == null)))?((((map__92086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92086):map__92086);
var match_length = cljs.core.get.call(null,map__92086__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__92086__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__92081_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__92081_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args92088 = [];
var len__19357__auto___92091 = arguments.length;
var i__19358__auto___92092 = (0);
while(true){
if((i__19358__auto___92092 < len__19357__auto___92091)){
args92088.push((arguments[i__19358__auto___92092]));

var G__92093 = (i__19358__auto___92092 + (1));
i__19358__auto___92092 = G__92093;
continue;
} else {
}
break;
}

var G__92090 = args92088.length;
switch (G__92090) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92088.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__92095_SHARP_,p2__92096_SHARP_){
return cljs.core.assoc.call(null,p1__92095_SHARP_,cljs.core.get.call(null,p2__92096_SHARP_,key),p2__92096_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__92097){
var map__92100 = p__92097;
var map__92100__$1 = ((((!((map__92100 == null)))?((((map__92100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92100):map__92100);
var f_data = map__92100__$1;
var file = cljs.core.get.call(null,map__92100__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__92102,files_msg){
var map__92109 = p__92102;
var map__92109__$1 = ((((!((map__92109 == null)))?((((map__92109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92109):map__92109);
var opts = map__92109__$1;
var on_cssload = cljs.core.get.call(null,map__92109__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__92111_92115 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__92112_92116 = null;
var count__92113_92117 = (0);
var i__92114_92118 = (0);
while(true){
if((i__92114_92118 < count__92113_92117)){
var f_92119 = cljs.core._nth.call(null,chunk__92112_92116,i__92114_92118);
figwheel.client.file_reloading.reload_css_file.call(null,f_92119);

var G__92120 = seq__92111_92115;
var G__92121 = chunk__92112_92116;
var G__92122 = count__92113_92117;
var G__92123 = (i__92114_92118 + (1));
seq__92111_92115 = G__92120;
chunk__92112_92116 = G__92121;
count__92113_92117 = G__92122;
i__92114_92118 = G__92123;
continue;
} else {
var temp__4657__auto___92124 = cljs.core.seq.call(null,seq__92111_92115);
if(temp__4657__auto___92124){
var seq__92111_92125__$1 = temp__4657__auto___92124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92111_92125__$1)){
var c__19102__auto___92126 = cljs.core.chunk_first.call(null,seq__92111_92125__$1);
var G__92127 = cljs.core.chunk_rest.call(null,seq__92111_92125__$1);
var G__92128 = c__19102__auto___92126;
var G__92129 = cljs.core.count.call(null,c__19102__auto___92126);
var G__92130 = (0);
seq__92111_92115 = G__92127;
chunk__92112_92116 = G__92128;
count__92113_92117 = G__92129;
i__92114_92118 = G__92130;
continue;
} else {
var f_92131 = cljs.core.first.call(null,seq__92111_92125__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_92131);

var G__92132 = cljs.core.next.call(null,seq__92111_92125__$1);
var G__92133 = null;
var G__92134 = (0);
var G__92135 = (0);
seq__92111_92115 = G__92132;
chunk__92112_92116 = G__92133;
count__92113_92117 = G__92134;
i__92114_92118 = G__92135;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__92109,map__92109__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__92109,map__92109__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1460037784119