// Compiled by ClojureScript 1.7.170 {}
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
figwheel.client.file_reloading.queued_file_reload;
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
var or__16751__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16751__auto__){
return or__16751__auto__;
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
var or__16751__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25470_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25470_SHARP_));
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
var seq__25475 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25476 = null;
var count__25477 = (0);
var i__25478 = (0);
while(true){
if((i__25478 < count__25477)){
var n = cljs.core._nth.call(null,chunk__25476,i__25478);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25479 = seq__25475;
var G__25480 = chunk__25476;
var G__25481 = count__25477;
var G__25482 = (i__25478 + (1));
seq__25475 = G__25479;
chunk__25476 = G__25480;
count__25477 = G__25481;
i__25478 = G__25482;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25475);
if(temp__4425__auto__){
var seq__25475__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25475__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__25475__$1);
var G__25483 = cljs.core.chunk_rest.call(null,seq__25475__$1);
var G__25484 = c__17554__auto__;
var G__25485 = cljs.core.count.call(null,c__17554__auto__);
var G__25486 = (0);
seq__25475 = G__25483;
chunk__25476 = G__25484;
count__25477 = G__25485;
i__25478 = G__25486;
continue;
} else {
var n = cljs.core.first.call(null,seq__25475__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25487 = cljs.core.next.call(null,seq__25475__$1);
var G__25488 = null;
var G__25489 = (0);
var G__25490 = (0);
seq__25475 = G__25487;
chunk__25476 = G__25488;
count__25477 = G__25489;
i__25478 = G__25490;
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

var seq__25529_25536 = cljs.core.seq.call(null,deps);
var chunk__25530_25537 = null;
var count__25531_25538 = (0);
var i__25532_25539 = (0);
while(true){
if((i__25532_25539 < count__25531_25538)){
var dep_25540 = cljs.core._nth.call(null,chunk__25530_25537,i__25532_25539);
topo_sort_helper_STAR_.call(null,dep_25540,(depth + (1)),state);

var G__25541 = seq__25529_25536;
var G__25542 = chunk__25530_25537;
var G__25543 = count__25531_25538;
var G__25544 = (i__25532_25539 + (1));
seq__25529_25536 = G__25541;
chunk__25530_25537 = G__25542;
count__25531_25538 = G__25543;
i__25532_25539 = G__25544;
continue;
} else {
var temp__4425__auto___25545 = cljs.core.seq.call(null,seq__25529_25536);
if(temp__4425__auto___25545){
var seq__25529_25546__$1 = temp__4425__auto___25545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25529_25546__$1)){
var c__17554__auto___25547 = cljs.core.chunk_first.call(null,seq__25529_25546__$1);
var G__25548 = cljs.core.chunk_rest.call(null,seq__25529_25546__$1);
var G__25549 = c__17554__auto___25547;
var G__25550 = cljs.core.count.call(null,c__17554__auto___25547);
var G__25551 = (0);
seq__25529_25536 = G__25548;
chunk__25530_25537 = G__25549;
count__25531_25538 = G__25550;
i__25532_25539 = G__25551;
continue;
} else {
var dep_25552 = cljs.core.first.call(null,seq__25529_25546__$1);
topo_sort_helper_STAR_.call(null,dep_25552,(depth + (1)),state);

var G__25553 = cljs.core.next.call(null,seq__25529_25546__$1);
var G__25554 = null;
var G__25555 = (0);
var G__25556 = (0);
seq__25529_25536 = G__25553;
chunk__25530_25537 = G__25554;
count__25531_25538 = G__25555;
i__25532_25539 = G__25556;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25533){
var vec__25535 = p__25533;
var x = cljs.core.nth.call(null,vec__25535,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25535,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25535,x,xs,get_deps__$1){
return (function (p1__25491_SHARP_){
return clojure.set.difference.call(null,p1__25491_SHARP_,x);
});})(vec__25535,x,xs,get_deps__$1))
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
var seq__25569 = cljs.core.seq.call(null,provides);
var chunk__25570 = null;
var count__25571 = (0);
var i__25572 = (0);
while(true){
if((i__25572 < count__25571)){
var prov = cljs.core._nth.call(null,chunk__25570,i__25572);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25573_25581 = cljs.core.seq.call(null,requires);
var chunk__25574_25582 = null;
var count__25575_25583 = (0);
var i__25576_25584 = (0);
while(true){
if((i__25576_25584 < count__25575_25583)){
var req_25585 = cljs.core._nth.call(null,chunk__25574_25582,i__25576_25584);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25585,prov);

var G__25586 = seq__25573_25581;
var G__25587 = chunk__25574_25582;
var G__25588 = count__25575_25583;
var G__25589 = (i__25576_25584 + (1));
seq__25573_25581 = G__25586;
chunk__25574_25582 = G__25587;
count__25575_25583 = G__25588;
i__25576_25584 = G__25589;
continue;
} else {
var temp__4425__auto___25590 = cljs.core.seq.call(null,seq__25573_25581);
if(temp__4425__auto___25590){
var seq__25573_25591__$1 = temp__4425__auto___25590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25573_25591__$1)){
var c__17554__auto___25592 = cljs.core.chunk_first.call(null,seq__25573_25591__$1);
var G__25593 = cljs.core.chunk_rest.call(null,seq__25573_25591__$1);
var G__25594 = c__17554__auto___25592;
var G__25595 = cljs.core.count.call(null,c__17554__auto___25592);
var G__25596 = (0);
seq__25573_25581 = G__25593;
chunk__25574_25582 = G__25594;
count__25575_25583 = G__25595;
i__25576_25584 = G__25596;
continue;
} else {
var req_25597 = cljs.core.first.call(null,seq__25573_25591__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25597,prov);

var G__25598 = cljs.core.next.call(null,seq__25573_25591__$1);
var G__25599 = null;
var G__25600 = (0);
var G__25601 = (0);
seq__25573_25581 = G__25598;
chunk__25574_25582 = G__25599;
count__25575_25583 = G__25600;
i__25576_25584 = G__25601;
continue;
}
} else {
}
}
break;
}

var G__25602 = seq__25569;
var G__25603 = chunk__25570;
var G__25604 = count__25571;
var G__25605 = (i__25572 + (1));
seq__25569 = G__25602;
chunk__25570 = G__25603;
count__25571 = G__25604;
i__25572 = G__25605;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25569);
if(temp__4425__auto__){
var seq__25569__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25569__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__25569__$1);
var G__25606 = cljs.core.chunk_rest.call(null,seq__25569__$1);
var G__25607 = c__17554__auto__;
var G__25608 = cljs.core.count.call(null,c__17554__auto__);
var G__25609 = (0);
seq__25569 = G__25606;
chunk__25570 = G__25607;
count__25571 = G__25608;
i__25572 = G__25609;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25569__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25577_25610 = cljs.core.seq.call(null,requires);
var chunk__25578_25611 = null;
var count__25579_25612 = (0);
var i__25580_25613 = (0);
while(true){
if((i__25580_25613 < count__25579_25612)){
var req_25614 = cljs.core._nth.call(null,chunk__25578_25611,i__25580_25613);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25614,prov);

var G__25615 = seq__25577_25610;
var G__25616 = chunk__25578_25611;
var G__25617 = count__25579_25612;
var G__25618 = (i__25580_25613 + (1));
seq__25577_25610 = G__25615;
chunk__25578_25611 = G__25616;
count__25579_25612 = G__25617;
i__25580_25613 = G__25618;
continue;
} else {
var temp__4425__auto___25619__$1 = cljs.core.seq.call(null,seq__25577_25610);
if(temp__4425__auto___25619__$1){
var seq__25577_25620__$1 = temp__4425__auto___25619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25577_25620__$1)){
var c__17554__auto___25621 = cljs.core.chunk_first.call(null,seq__25577_25620__$1);
var G__25622 = cljs.core.chunk_rest.call(null,seq__25577_25620__$1);
var G__25623 = c__17554__auto___25621;
var G__25624 = cljs.core.count.call(null,c__17554__auto___25621);
var G__25625 = (0);
seq__25577_25610 = G__25622;
chunk__25578_25611 = G__25623;
count__25579_25612 = G__25624;
i__25580_25613 = G__25625;
continue;
} else {
var req_25626 = cljs.core.first.call(null,seq__25577_25620__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25626,prov);

var G__25627 = cljs.core.next.call(null,seq__25577_25620__$1);
var G__25628 = null;
var G__25629 = (0);
var G__25630 = (0);
seq__25577_25610 = G__25627;
chunk__25578_25611 = G__25628;
count__25579_25612 = G__25629;
i__25580_25613 = G__25630;
continue;
}
} else {
}
}
break;
}

var G__25631 = cljs.core.next.call(null,seq__25569__$1);
var G__25632 = null;
var G__25633 = (0);
var G__25634 = (0);
seq__25569 = G__25631;
chunk__25570 = G__25632;
count__25571 = G__25633;
i__25572 = G__25634;
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
var seq__25639_25643 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25640_25644 = null;
var count__25641_25645 = (0);
var i__25642_25646 = (0);
while(true){
if((i__25642_25646 < count__25641_25645)){
var ns_25647 = cljs.core._nth.call(null,chunk__25640_25644,i__25642_25646);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25647);

var G__25648 = seq__25639_25643;
var G__25649 = chunk__25640_25644;
var G__25650 = count__25641_25645;
var G__25651 = (i__25642_25646 + (1));
seq__25639_25643 = G__25648;
chunk__25640_25644 = G__25649;
count__25641_25645 = G__25650;
i__25642_25646 = G__25651;
continue;
} else {
var temp__4425__auto___25652 = cljs.core.seq.call(null,seq__25639_25643);
if(temp__4425__auto___25652){
var seq__25639_25653__$1 = temp__4425__auto___25652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25639_25653__$1)){
var c__17554__auto___25654 = cljs.core.chunk_first.call(null,seq__25639_25653__$1);
var G__25655 = cljs.core.chunk_rest.call(null,seq__25639_25653__$1);
var G__25656 = c__17554__auto___25654;
var G__25657 = cljs.core.count.call(null,c__17554__auto___25654);
var G__25658 = (0);
seq__25639_25643 = G__25655;
chunk__25640_25644 = G__25656;
count__25641_25645 = G__25657;
i__25642_25646 = G__25658;
continue;
} else {
var ns_25659 = cljs.core.first.call(null,seq__25639_25653__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25659);

var G__25660 = cljs.core.next.call(null,seq__25639_25653__$1);
var G__25661 = null;
var G__25662 = (0);
var G__25663 = (0);
seq__25639_25643 = G__25660;
chunk__25640_25644 = G__25661;
count__25641_25645 = G__25662;
i__25642_25646 = G__25663;
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
goog.require_figwheel_backup_ = (function (){var or__16751__auto__ = goog.require__;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
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
var G__25664__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25665__i = 0, G__25665__a = new Array(arguments.length -  0);
while (G__25665__i < G__25665__a.length) {G__25665__a[G__25665__i] = arguments[G__25665__i + 0]; ++G__25665__i;}
  args = new cljs.core.IndexedSeq(G__25665__a,0);
} 
return G__25664__delegate.call(this,args);};
G__25664.cljs$lang$maxFixedArity = 0;
G__25664.cljs$lang$applyTo = (function (arglist__25666){
var args = cljs.core.seq(arglist__25666);
return G__25664__delegate(args);
});
G__25664.cljs$core$IFn$_invoke$arity$variadic = G__25664__delegate;
return G__25664;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25668 = cljs.core._EQ_;
var expr__25669 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25669))){
var path_parts = ((function (pred__25668,expr__25669){
return (function (p1__25667_SHARP_){
return clojure.string.split.call(null,p1__25667_SHARP_,/[\/\\]/);
});})(pred__25668,expr__25669))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25668,expr__25669){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25671){if((e25671 instanceof Error)){
var e = e25671;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25671;

}
}})());
});
;})(path_parts,sep,root,pred__25668,expr__25669))
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25669))){
return ((function (pred__25668,expr__25669){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25668,expr__25669){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25668,expr__25669))
);

return deferred.addErrback(((function (deferred,pred__25668,expr__25669){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25668,expr__25669))
);
});
;})(pred__25668,expr__25669))
} else {
return ((function (pred__25668,expr__25669){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25668,expr__25669))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25672,callback){
var map__25675 = p__25672;
var map__25675__$1 = ((((!((map__25675 == null)))?((((map__25675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25675):map__25675);
var file_msg = map__25675__$1;
var request_url = cljs.core.get.call(null,map__25675__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25675,map__25675__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25675,map__25675__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__){
return (function (state_25699){
var state_val_25700 = (state_25699[(1)]);
if((state_val_25700 === (7))){
var inst_25695 = (state_25699[(2)]);
var state_25699__$1 = state_25699;
var statearr_25701_25721 = state_25699__$1;
(statearr_25701_25721[(2)] = inst_25695);

(statearr_25701_25721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (1))){
var state_25699__$1 = state_25699;
var statearr_25702_25722 = state_25699__$1;
(statearr_25702_25722[(2)] = null);

(statearr_25702_25722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (4))){
var inst_25679 = (state_25699[(7)]);
var inst_25679__$1 = (state_25699[(2)]);
var state_25699__$1 = (function (){var statearr_25703 = state_25699;
(statearr_25703[(7)] = inst_25679__$1);

return statearr_25703;
})();
if(cljs.core.truth_(inst_25679__$1)){
var statearr_25704_25723 = state_25699__$1;
(statearr_25704_25723[(1)] = (5));

} else {
var statearr_25705_25724 = state_25699__$1;
(statearr_25705_25724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (6))){
var state_25699__$1 = state_25699;
var statearr_25706_25725 = state_25699__$1;
(statearr_25706_25725[(2)] = null);

(statearr_25706_25725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (3))){
var inst_25697 = (state_25699[(2)]);
var state_25699__$1 = state_25699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25699__$1,inst_25697);
} else {
if((state_val_25700 === (2))){
var state_25699__$1 = state_25699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25699__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25700 === (11))){
var inst_25691 = (state_25699[(2)]);
var state_25699__$1 = (function (){var statearr_25707 = state_25699;
(statearr_25707[(8)] = inst_25691);

return statearr_25707;
})();
var statearr_25708_25726 = state_25699__$1;
(statearr_25708_25726[(2)] = null);

(statearr_25708_25726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (9))){
var inst_25685 = (state_25699[(9)]);
var inst_25683 = (state_25699[(10)]);
var inst_25687 = inst_25685.call(null,inst_25683);
var state_25699__$1 = state_25699;
var statearr_25709_25727 = state_25699__$1;
(statearr_25709_25727[(2)] = inst_25687);

(statearr_25709_25727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (5))){
var inst_25679 = (state_25699[(7)]);
var inst_25681 = figwheel.client.file_reloading.blocking_load.call(null,inst_25679);
var state_25699__$1 = state_25699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25699__$1,(8),inst_25681);
} else {
if((state_val_25700 === (10))){
var inst_25683 = (state_25699[(10)]);
var inst_25689 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25683);
var state_25699__$1 = state_25699;
var statearr_25710_25728 = state_25699__$1;
(statearr_25710_25728[(2)] = inst_25689);

(statearr_25710_25728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (8))){
var inst_25685 = (state_25699[(9)]);
var inst_25679 = (state_25699[(7)]);
var inst_25683 = (state_25699[(2)]);
var inst_25684 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25685__$1 = cljs.core.get.call(null,inst_25684,inst_25679);
var state_25699__$1 = (function (){var statearr_25711 = state_25699;
(statearr_25711[(9)] = inst_25685__$1);

(statearr_25711[(10)] = inst_25683);

return statearr_25711;
})();
if(cljs.core.truth_(inst_25685__$1)){
var statearr_25712_25729 = state_25699__$1;
(statearr_25712_25729[(1)] = (9));

} else {
var statearr_25713_25730 = state_25699__$1;
(statearr_25713_25730[(1)] = (10));

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
});})(c__22637__auto__))
;
return ((function (switch__22525__auto__,c__22637__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22526__auto__ = null;
var figwheel$client$file_reloading$state_machine__22526__auto____0 = (function (){
var statearr_25717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25717[(0)] = figwheel$client$file_reloading$state_machine__22526__auto__);

(statearr_25717[(1)] = (1));

return statearr_25717;
});
var figwheel$client$file_reloading$state_machine__22526__auto____1 = (function (state_25699){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_25699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e25718){if((e25718 instanceof Object)){
var ex__22529__auto__ = e25718;
var statearr_25719_25731 = state_25699;
(statearr_25719_25731[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25732 = state_25699;
state_25699 = G__25732;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22526__auto__ = function(state_25699){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22526__auto____1.call(this,state_25699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22526__auto____0;
figwheel$client$file_reloading$state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22526__auto____1;
return figwheel$client$file_reloading$state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__))
})();
var state__22639__auto__ = (function (){var statearr_25720 = f__22638__auto__.call(null);
(statearr_25720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_25720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__))
);

return c__22637__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25733,callback){
var map__25736 = p__25733;
var map__25736__$1 = ((((!((map__25736 == null)))?((((map__25736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25736):map__25736);
var file_msg = map__25736__$1;
var namespace = cljs.core.get.call(null,map__25736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25736,map__25736__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25736,map__25736__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25738){
var map__25741 = p__25738;
var map__25741__$1 = ((((!((map__25741 == null)))?((((map__25741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25741):map__25741);
var file_msg = map__25741__$1;
var namespace = cljs.core.get.call(null,map__25741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16739__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16739__auto__){
var or__16751__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
var or__16751__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16751__auto____$1)){
return or__16751__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16739__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25743,callback){
var map__25746 = p__25743;
var map__25746__$1 = ((((!((map__25746 == null)))?((((map__25746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25746):map__25746);
var file_msg = map__25746__$1;
var request_url = cljs.core.get.call(null,map__25746__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22637__auto___25834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto___25834,out){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto___25834,out){
return (function (state_25816){
var state_val_25817 = (state_25816[(1)]);
if((state_val_25817 === (1))){
var inst_25794 = cljs.core.nth.call(null,files,(0),null);
var inst_25795 = cljs.core.nthnext.call(null,files,(1));
var inst_25796 = files;
var state_25816__$1 = (function (){var statearr_25818 = state_25816;
(statearr_25818[(7)] = inst_25796);

(statearr_25818[(8)] = inst_25795);

(statearr_25818[(9)] = inst_25794);

return statearr_25818;
})();
var statearr_25819_25835 = state_25816__$1;
(statearr_25819_25835[(2)] = null);

(statearr_25819_25835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25817 === (2))){
var inst_25796 = (state_25816[(7)]);
var inst_25799 = (state_25816[(10)]);
var inst_25799__$1 = cljs.core.nth.call(null,inst_25796,(0),null);
var inst_25800 = cljs.core.nthnext.call(null,inst_25796,(1));
var inst_25801 = (inst_25799__$1 == null);
var inst_25802 = cljs.core.not.call(null,inst_25801);
var state_25816__$1 = (function (){var statearr_25820 = state_25816;
(statearr_25820[(11)] = inst_25800);

(statearr_25820[(10)] = inst_25799__$1);

return statearr_25820;
})();
if(inst_25802){
var statearr_25821_25836 = state_25816__$1;
(statearr_25821_25836[(1)] = (4));

} else {
var statearr_25822_25837 = state_25816__$1;
(statearr_25822_25837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25817 === (3))){
var inst_25814 = (state_25816[(2)]);
var state_25816__$1 = state_25816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25816__$1,inst_25814);
} else {
if((state_val_25817 === (4))){
var inst_25799 = (state_25816[(10)]);
var inst_25804 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25799);
var state_25816__$1 = state_25816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25816__$1,(7),inst_25804);
} else {
if((state_val_25817 === (5))){
var inst_25810 = cljs.core.async.close_BANG_.call(null,out);
var state_25816__$1 = state_25816;
var statearr_25823_25838 = state_25816__$1;
(statearr_25823_25838[(2)] = inst_25810);

(statearr_25823_25838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25817 === (6))){
var inst_25812 = (state_25816[(2)]);
var state_25816__$1 = state_25816;
var statearr_25824_25839 = state_25816__$1;
(statearr_25824_25839[(2)] = inst_25812);

(statearr_25824_25839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25817 === (7))){
var inst_25800 = (state_25816[(11)]);
var inst_25806 = (state_25816[(2)]);
var inst_25807 = cljs.core.async.put_BANG_.call(null,out,inst_25806);
var inst_25796 = inst_25800;
var state_25816__$1 = (function (){var statearr_25825 = state_25816;
(statearr_25825[(7)] = inst_25796);

(statearr_25825[(12)] = inst_25807);

return statearr_25825;
})();
var statearr_25826_25840 = state_25816__$1;
(statearr_25826_25840[(2)] = null);

(statearr_25826_25840[(1)] = (2));


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
});})(c__22637__auto___25834,out))
;
return ((function (switch__22525__auto__,c__22637__auto___25834,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto____0 = (function (){
var statearr_25830 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25830[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto__);

(statearr_25830[(1)] = (1));

return statearr_25830;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto____1 = (function (state_25816){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_25816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e25831){if((e25831 instanceof Object)){
var ex__22529__auto__ = e25831;
var statearr_25832_25841 = state_25816;
(statearr_25832_25841[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25842 = state_25816;
state_25816 = G__25842;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto__ = function(state_25816){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto____1.call(this,state_25816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto___25834,out))
})();
var state__22639__auto__ = (function (){var statearr_25833 = f__22638__auto__.call(null);
(statearr_25833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto___25834);

return statearr_25833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto___25834,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25843,opts){
var map__25847 = p__25843;
var map__25847__$1 = ((((!((map__25847 == null)))?((((map__25847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25847):map__25847);
var eval_body__$1 = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16739__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16739__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16739__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25849){var e = e25849;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25850_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25850_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
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
return cljs.core.map.call(null,(function (p__25855){
var vec__25856 = p__25855;
var k = cljs.core.nth.call(null,vec__25856,(0),null);
var v = cljs.core.nth.call(null,vec__25856,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25857){
var vec__25858 = p__25857;
var k = cljs.core.nth.call(null,vec__25858,(0),null);
var v = cljs.core.nth.call(null,vec__25858,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25862,p__25863){
var map__26110 = p__25862;
var map__26110__$1 = ((((!((map__26110 == null)))?((((map__26110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26110):map__26110);
var opts = map__26110__$1;
var before_jsload = cljs.core.get.call(null,map__26110__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26110__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26110__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26111 = p__25863;
var map__26111__$1 = ((((!((map__26111 == null)))?((((map__26111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26111):map__26111);
var msg = map__26111__$1;
var files = cljs.core.get.call(null,map__26111__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26111__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26111__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26264){
var state_val_26265 = (state_26264[(1)]);
if((state_val_26265 === (7))){
var inst_26126 = (state_26264[(7)]);
var inst_26127 = (state_26264[(8)]);
var inst_26125 = (state_26264[(9)]);
var inst_26128 = (state_26264[(10)]);
var inst_26133 = cljs.core._nth.call(null,inst_26126,inst_26128);
var inst_26134 = figwheel.client.file_reloading.eval_body.call(null,inst_26133,opts);
var inst_26135 = (inst_26128 + (1));
var tmp26266 = inst_26126;
var tmp26267 = inst_26127;
var tmp26268 = inst_26125;
var inst_26125__$1 = tmp26268;
var inst_26126__$1 = tmp26266;
var inst_26127__$1 = tmp26267;
var inst_26128__$1 = inst_26135;
var state_26264__$1 = (function (){var statearr_26269 = state_26264;
(statearr_26269[(7)] = inst_26126__$1);

(statearr_26269[(8)] = inst_26127__$1);

(statearr_26269[(9)] = inst_26125__$1);

(statearr_26269[(11)] = inst_26134);

(statearr_26269[(10)] = inst_26128__$1);

return statearr_26269;
})();
var statearr_26270_26356 = state_26264__$1;
(statearr_26270_26356[(2)] = null);

(statearr_26270_26356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (20))){
var inst_26168 = (state_26264[(12)]);
var inst_26176 = figwheel.client.file_reloading.sort_files.call(null,inst_26168);
var state_26264__$1 = state_26264;
var statearr_26271_26357 = state_26264__$1;
(statearr_26271_26357[(2)] = inst_26176);

(statearr_26271_26357[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (27))){
var state_26264__$1 = state_26264;
var statearr_26272_26358 = state_26264__$1;
(statearr_26272_26358[(2)] = null);

(statearr_26272_26358[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (1))){
var inst_26117 = (state_26264[(13)]);
var inst_26114 = before_jsload.call(null,files);
var inst_26115 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26116 = (function (){return ((function (inst_26117,inst_26114,inst_26115,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25859_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25859_SHARP_);
});
;})(inst_26117,inst_26114,inst_26115,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26117__$1 = cljs.core.filter.call(null,inst_26116,files);
var inst_26118 = cljs.core.not_empty.call(null,inst_26117__$1);
var state_26264__$1 = (function (){var statearr_26273 = state_26264;
(statearr_26273[(14)] = inst_26115);

(statearr_26273[(13)] = inst_26117__$1);

(statearr_26273[(15)] = inst_26114);

return statearr_26273;
})();
if(cljs.core.truth_(inst_26118)){
var statearr_26274_26359 = state_26264__$1;
(statearr_26274_26359[(1)] = (2));

} else {
var statearr_26275_26360 = state_26264__$1;
(statearr_26275_26360[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (24))){
var state_26264__$1 = state_26264;
var statearr_26276_26361 = state_26264__$1;
(statearr_26276_26361[(2)] = null);

(statearr_26276_26361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (39))){
var inst_26218 = (state_26264[(16)]);
var state_26264__$1 = state_26264;
var statearr_26277_26362 = state_26264__$1;
(statearr_26277_26362[(2)] = inst_26218);

(statearr_26277_26362[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (46))){
var inst_26259 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26278_26363 = state_26264__$1;
(statearr_26278_26363[(2)] = inst_26259);

(statearr_26278_26363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (4))){
var inst_26162 = (state_26264[(2)]);
var inst_26163 = cljs.core.List.EMPTY;
var inst_26164 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26163);
var inst_26165 = (function (){return ((function (inst_26162,inst_26163,inst_26164,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25860_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25860_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25860_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_26162,inst_26163,inst_26164,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26166 = cljs.core.filter.call(null,inst_26165,files);
var inst_26167 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26168 = cljs.core.concat.call(null,inst_26166,inst_26167);
var state_26264__$1 = (function (){var statearr_26279 = state_26264;
(statearr_26279[(12)] = inst_26168);

(statearr_26279[(17)] = inst_26162);

(statearr_26279[(18)] = inst_26164);

return statearr_26279;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26280_26364 = state_26264__$1;
(statearr_26280_26364[(1)] = (16));

} else {
var statearr_26281_26365 = state_26264__$1;
(statearr_26281_26365[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (15))){
var inst_26152 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26282_26366 = state_26264__$1;
(statearr_26282_26366[(2)] = inst_26152);

(statearr_26282_26366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (21))){
var inst_26178 = (state_26264[(19)]);
var inst_26178__$1 = (state_26264[(2)]);
var inst_26179 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26178__$1);
var state_26264__$1 = (function (){var statearr_26283 = state_26264;
(statearr_26283[(19)] = inst_26178__$1);

return statearr_26283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26264__$1,(22),inst_26179);
} else {
if((state_val_26265 === (31))){
var inst_26262 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26264__$1,inst_26262);
} else {
if((state_val_26265 === (32))){
var inst_26218 = (state_26264[(16)]);
var inst_26223 = inst_26218.cljs$lang$protocol_mask$partition0$;
var inst_26224 = (inst_26223 & (64));
var inst_26225 = inst_26218.cljs$core$ISeq$;
var inst_26226 = (inst_26224) || (inst_26225);
var state_26264__$1 = state_26264;
if(cljs.core.truth_(inst_26226)){
var statearr_26284_26367 = state_26264__$1;
(statearr_26284_26367[(1)] = (35));

} else {
var statearr_26285_26368 = state_26264__$1;
(statearr_26285_26368[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (40))){
var inst_26239 = (state_26264[(20)]);
var inst_26238 = (state_26264[(2)]);
var inst_26239__$1 = cljs.core.get.call(null,inst_26238,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26240 = cljs.core.get.call(null,inst_26238,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26241 = cljs.core.not_empty.call(null,inst_26239__$1);
var state_26264__$1 = (function (){var statearr_26286 = state_26264;
(statearr_26286[(21)] = inst_26240);

(statearr_26286[(20)] = inst_26239__$1);

return statearr_26286;
})();
if(cljs.core.truth_(inst_26241)){
var statearr_26287_26369 = state_26264__$1;
(statearr_26287_26369[(1)] = (41));

} else {
var statearr_26288_26370 = state_26264__$1;
(statearr_26288_26370[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (33))){
var state_26264__$1 = state_26264;
var statearr_26289_26371 = state_26264__$1;
(statearr_26289_26371[(2)] = false);

(statearr_26289_26371[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (13))){
var inst_26138 = (state_26264[(22)]);
var inst_26142 = cljs.core.chunk_first.call(null,inst_26138);
var inst_26143 = cljs.core.chunk_rest.call(null,inst_26138);
var inst_26144 = cljs.core.count.call(null,inst_26142);
var inst_26125 = inst_26143;
var inst_26126 = inst_26142;
var inst_26127 = inst_26144;
var inst_26128 = (0);
var state_26264__$1 = (function (){var statearr_26290 = state_26264;
(statearr_26290[(7)] = inst_26126);

(statearr_26290[(8)] = inst_26127);

(statearr_26290[(9)] = inst_26125);

(statearr_26290[(10)] = inst_26128);

return statearr_26290;
})();
var statearr_26291_26372 = state_26264__$1;
(statearr_26291_26372[(2)] = null);

(statearr_26291_26372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (22))){
var inst_26178 = (state_26264[(19)]);
var inst_26186 = (state_26264[(23)]);
var inst_26182 = (state_26264[(24)]);
var inst_26181 = (state_26264[(25)]);
var inst_26181__$1 = (state_26264[(2)]);
var inst_26182__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26181__$1);
var inst_26183 = (function (){var all_files = inst_26178;
var res_SINGLEQUOTE_ = inst_26181__$1;
var res = inst_26182__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26178,inst_26186,inst_26182,inst_26181,inst_26181__$1,inst_26182__$1,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25861_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25861_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26178,inst_26186,inst_26182,inst_26181,inst_26181__$1,inst_26182__$1,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26184 = cljs.core.filter.call(null,inst_26183,inst_26181__$1);
var inst_26185 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26186__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26185);
var inst_26187 = cljs.core.not_empty.call(null,inst_26186__$1);
var state_26264__$1 = (function (){var statearr_26292 = state_26264;
(statearr_26292[(26)] = inst_26184);

(statearr_26292[(23)] = inst_26186__$1);

(statearr_26292[(24)] = inst_26182__$1);

(statearr_26292[(25)] = inst_26181__$1);

return statearr_26292;
})();
if(cljs.core.truth_(inst_26187)){
var statearr_26293_26373 = state_26264__$1;
(statearr_26293_26373[(1)] = (23));

} else {
var statearr_26294_26374 = state_26264__$1;
(statearr_26294_26374[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (36))){
var state_26264__$1 = state_26264;
var statearr_26295_26375 = state_26264__$1;
(statearr_26295_26375[(2)] = false);

(statearr_26295_26375[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (41))){
var inst_26239 = (state_26264[(20)]);
var inst_26243 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26244 = cljs.core.map.call(null,inst_26243,inst_26239);
var inst_26245 = cljs.core.pr_str.call(null,inst_26244);
var inst_26246 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26245)].join('');
var inst_26247 = figwheel.client.utils.log.call(null,inst_26246);
var state_26264__$1 = state_26264;
var statearr_26296_26376 = state_26264__$1;
(statearr_26296_26376[(2)] = inst_26247);

(statearr_26296_26376[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (43))){
var inst_26240 = (state_26264[(21)]);
var inst_26250 = (state_26264[(2)]);
var inst_26251 = cljs.core.not_empty.call(null,inst_26240);
var state_26264__$1 = (function (){var statearr_26297 = state_26264;
(statearr_26297[(27)] = inst_26250);

return statearr_26297;
})();
if(cljs.core.truth_(inst_26251)){
var statearr_26298_26377 = state_26264__$1;
(statearr_26298_26377[(1)] = (44));

} else {
var statearr_26299_26378 = state_26264__$1;
(statearr_26299_26378[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (29))){
var inst_26218 = (state_26264[(16)]);
var inst_26184 = (state_26264[(26)]);
var inst_26178 = (state_26264[(19)]);
var inst_26186 = (state_26264[(23)]);
var inst_26182 = (state_26264[(24)]);
var inst_26181 = (state_26264[(25)]);
var inst_26214 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26217 = (function (){var all_files = inst_26178;
var res_SINGLEQUOTE_ = inst_26181;
var res = inst_26182;
var files_not_loaded = inst_26184;
var dependencies_that_loaded = inst_26186;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26218,inst_26184,inst_26178,inst_26186,inst_26182,inst_26181,inst_26214,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26216){
var map__26300 = p__26216;
var map__26300__$1 = ((((!((map__26300 == null)))?((((map__26300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26300):map__26300);
var namespace = cljs.core.get.call(null,map__26300__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26218,inst_26184,inst_26178,inst_26186,inst_26182,inst_26181,inst_26214,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26218__$1 = cljs.core.group_by.call(null,inst_26217,inst_26184);
var inst_26220 = (inst_26218__$1 == null);
var inst_26221 = cljs.core.not.call(null,inst_26220);
var state_26264__$1 = (function (){var statearr_26302 = state_26264;
(statearr_26302[(16)] = inst_26218__$1);

(statearr_26302[(28)] = inst_26214);

return statearr_26302;
})();
if(inst_26221){
var statearr_26303_26379 = state_26264__$1;
(statearr_26303_26379[(1)] = (32));

} else {
var statearr_26304_26380 = state_26264__$1;
(statearr_26304_26380[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (44))){
var inst_26240 = (state_26264[(21)]);
var inst_26253 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26240);
var inst_26254 = cljs.core.pr_str.call(null,inst_26253);
var inst_26255 = [cljs.core.str("not required: "),cljs.core.str(inst_26254)].join('');
var inst_26256 = figwheel.client.utils.log.call(null,inst_26255);
var state_26264__$1 = state_26264;
var statearr_26305_26381 = state_26264__$1;
(statearr_26305_26381[(2)] = inst_26256);

(statearr_26305_26381[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (6))){
var inst_26159 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26306_26382 = state_26264__$1;
(statearr_26306_26382[(2)] = inst_26159);

(statearr_26306_26382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (28))){
var inst_26184 = (state_26264[(26)]);
var inst_26211 = (state_26264[(2)]);
var inst_26212 = cljs.core.not_empty.call(null,inst_26184);
var state_26264__$1 = (function (){var statearr_26307 = state_26264;
(statearr_26307[(29)] = inst_26211);

return statearr_26307;
})();
if(cljs.core.truth_(inst_26212)){
var statearr_26308_26383 = state_26264__$1;
(statearr_26308_26383[(1)] = (29));

} else {
var statearr_26309_26384 = state_26264__$1;
(statearr_26309_26384[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (25))){
var inst_26182 = (state_26264[(24)]);
var inst_26198 = (state_26264[(2)]);
var inst_26199 = cljs.core.not_empty.call(null,inst_26182);
var state_26264__$1 = (function (){var statearr_26310 = state_26264;
(statearr_26310[(30)] = inst_26198);

return statearr_26310;
})();
if(cljs.core.truth_(inst_26199)){
var statearr_26311_26385 = state_26264__$1;
(statearr_26311_26385[(1)] = (26));

} else {
var statearr_26312_26386 = state_26264__$1;
(statearr_26312_26386[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (34))){
var inst_26233 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
if(cljs.core.truth_(inst_26233)){
var statearr_26313_26387 = state_26264__$1;
(statearr_26313_26387[(1)] = (38));

} else {
var statearr_26314_26388 = state_26264__$1;
(statearr_26314_26388[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (17))){
var state_26264__$1 = state_26264;
var statearr_26315_26389 = state_26264__$1;
(statearr_26315_26389[(2)] = recompile_dependents);

(statearr_26315_26389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (3))){
var state_26264__$1 = state_26264;
var statearr_26316_26390 = state_26264__$1;
(statearr_26316_26390[(2)] = null);

(statearr_26316_26390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (12))){
var inst_26155 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26317_26391 = state_26264__$1;
(statearr_26317_26391[(2)] = inst_26155);

(statearr_26317_26391[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (2))){
var inst_26117 = (state_26264[(13)]);
var inst_26124 = cljs.core.seq.call(null,inst_26117);
var inst_26125 = inst_26124;
var inst_26126 = null;
var inst_26127 = (0);
var inst_26128 = (0);
var state_26264__$1 = (function (){var statearr_26318 = state_26264;
(statearr_26318[(7)] = inst_26126);

(statearr_26318[(8)] = inst_26127);

(statearr_26318[(9)] = inst_26125);

(statearr_26318[(10)] = inst_26128);

return statearr_26318;
})();
var statearr_26319_26392 = state_26264__$1;
(statearr_26319_26392[(2)] = null);

(statearr_26319_26392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (23))){
var inst_26184 = (state_26264[(26)]);
var inst_26178 = (state_26264[(19)]);
var inst_26186 = (state_26264[(23)]);
var inst_26182 = (state_26264[(24)]);
var inst_26181 = (state_26264[(25)]);
var inst_26189 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26191 = (function (){var all_files = inst_26178;
var res_SINGLEQUOTE_ = inst_26181;
var res = inst_26182;
var files_not_loaded = inst_26184;
var dependencies_that_loaded = inst_26186;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26184,inst_26178,inst_26186,inst_26182,inst_26181,inst_26189,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26190){
var map__26320 = p__26190;
var map__26320__$1 = ((((!((map__26320 == null)))?((((map__26320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26320):map__26320);
var request_url = cljs.core.get.call(null,map__26320__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26184,inst_26178,inst_26186,inst_26182,inst_26181,inst_26189,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26192 = cljs.core.reverse.call(null,inst_26186);
var inst_26193 = cljs.core.map.call(null,inst_26191,inst_26192);
var inst_26194 = cljs.core.pr_str.call(null,inst_26193);
var inst_26195 = figwheel.client.utils.log.call(null,inst_26194);
var state_26264__$1 = (function (){var statearr_26322 = state_26264;
(statearr_26322[(31)] = inst_26189);

return statearr_26322;
})();
var statearr_26323_26393 = state_26264__$1;
(statearr_26323_26393[(2)] = inst_26195);

(statearr_26323_26393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (35))){
var state_26264__$1 = state_26264;
var statearr_26324_26394 = state_26264__$1;
(statearr_26324_26394[(2)] = true);

(statearr_26324_26394[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (19))){
var inst_26168 = (state_26264[(12)]);
var inst_26174 = figwheel.client.file_reloading.expand_files.call(null,inst_26168);
var state_26264__$1 = state_26264;
var statearr_26325_26395 = state_26264__$1;
(statearr_26325_26395[(2)] = inst_26174);

(statearr_26325_26395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (11))){
var state_26264__$1 = state_26264;
var statearr_26326_26396 = state_26264__$1;
(statearr_26326_26396[(2)] = null);

(statearr_26326_26396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (9))){
var inst_26157 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26327_26397 = state_26264__$1;
(statearr_26327_26397[(2)] = inst_26157);

(statearr_26327_26397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (5))){
var inst_26127 = (state_26264[(8)]);
var inst_26128 = (state_26264[(10)]);
var inst_26130 = (inst_26128 < inst_26127);
var inst_26131 = inst_26130;
var state_26264__$1 = state_26264;
if(cljs.core.truth_(inst_26131)){
var statearr_26328_26398 = state_26264__$1;
(statearr_26328_26398[(1)] = (7));

} else {
var statearr_26329_26399 = state_26264__$1;
(statearr_26329_26399[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (14))){
var inst_26138 = (state_26264[(22)]);
var inst_26147 = cljs.core.first.call(null,inst_26138);
var inst_26148 = figwheel.client.file_reloading.eval_body.call(null,inst_26147,opts);
var inst_26149 = cljs.core.next.call(null,inst_26138);
var inst_26125 = inst_26149;
var inst_26126 = null;
var inst_26127 = (0);
var inst_26128 = (0);
var state_26264__$1 = (function (){var statearr_26330 = state_26264;
(statearr_26330[(7)] = inst_26126);

(statearr_26330[(8)] = inst_26127);

(statearr_26330[(9)] = inst_26125);

(statearr_26330[(32)] = inst_26148);

(statearr_26330[(10)] = inst_26128);

return statearr_26330;
})();
var statearr_26331_26400 = state_26264__$1;
(statearr_26331_26400[(2)] = null);

(statearr_26331_26400[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (45))){
var state_26264__$1 = state_26264;
var statearr_26332_26401 = state_26264__$1;
(statearr_26332_26401[(2)] = null);

(statearr_26332_26401[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (26))){
var inst_26184 = (state_26264[(26)]);
var inst_26178 = (state_26264[(19)]);
var inst_26186 = (state_26264[(23)]);
var inst_26182 = (state_26264[(24)]);
var inst_26181 = (state_26264[(25)]);
var inst_26201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26203 = (function (){var all_files = inst_26178;
var res_SINGLEQUOTE_ = inst_26181;
var res = inst_26182;
var files_not_loaded = inst_26184;
var dependencies_that_loaded = inst_26186;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26184,inst_26178,inst_26186,inst_26182,inst_26181,inst_26201,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26202){
var map__26333 = p__26202;
var map__26333__$1 = ((((!((map__26333 == null)))?((((map__26333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26333):map__26333);
var namespace = cljs.core.get.call(null,map__26333__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26333__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26184,inst_26178,inst_26186,inst_26182,inst_26181,inst_26201,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26204 = cljs.core.map.call(null,inst_26203,inst_26182);
var inst_26205 = cljs.core.pr_str.call(null,inst_26204);
var inst_26206 = figwheel.client.utils.log.call(null,inst_26205);
var inst_26207 = (function (){var all_files = inst_26178;
var res_SINGLEQUOTE_ = inst_26181;
var res = inst_26182;
var files_not_loaded = inst_26184;
var dependencies_that_loaded = inst_26186;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26184,inst_26178,inst_26186,inst_26182,inst_26181,inst_26201,inst_26203,inst_26204,inst_26205,inst_26206,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26184,inst_26178,inst_26186,inst_26182,inst_26181,inst_26201,inst_26203,inst_26204,inst_26205,inst_26206,state_val_26265,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26208 = setTimeout(inst_26207,(10));
var state_26264__$1 = (function (){var statearr_26335 = state_26264;
(statearr_26335[(33)] = inst_26206);

(statearr_26335[(34)] = inst_26201);

return statearr_26335;
})();
var statearr_26336_26402 = state_26264__$1;
(statearr_26336_26402[(2)] = inst_26208);

(statearr_26336_26402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (16))){
var state_26264__$1 = state_26264;
var statearr_26337_26403 = state_26264__$1;
(statearr_26337_26403[(2)] = reload_dependents);

(statearr_26337_26403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (38))){
var inst_26218 = (state_26264[(16)]);
var inst_26235 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26218);
var state_26264__$1 = state_26264;
var statearr_26338_26404 = state_26264__$1;
(statearr_26338_26404[(2)] = inst_26235);

(statearr_26338_26404[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (30))){
var state_26264__$1 = state_26264;
var statearr_26339_26405 = state_26264__$1;
(statearr_26339_26405[(2)] = null);

(statearr_26339_26405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (10))){
var inst_26138 = (state_26264[(22)]);
var inst_26140 = cljs.core.chunked_seq_QMARK_.call(null,inst_26138);
var state_26264__$1 = state_26264;
if(inst_26140){
var statearr_26340_26406 = state_26264__$1;
(statearr_26340_26406[(1)] = (13));

} else {
var statearr_26341_26407 = state_26264__$1;
(statearr_26341_26407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (18))){
var inst_26172 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
if(cljs.core.truth_(inst_26172)){
var statearr_26342_26408 = state_26264__$1;
(statearr_26342_26408[(1)] = (19));

} else {
var statearr_26343_26409 = state_26264__$1;
(statearr_26343_26409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (42))){
var state_26264__$1 = state_26264;
var statearr_26344_26410 = state_26264__$1;
(statearr_26344_26410[(2)] = null);

(statearr_26344_26410[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (37))){
var inst_26230 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26345_26411 = state_26264__$1;
(statearr_26345_26411[(2)] = inst_26230);

(statearr_26345_26411[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (8))){
var inst_26138 = (state_26264[(22)]);
var inst_26125 = (state_26264[(9)]);
var inst_26138__$1 = cljs.core.seq.call(null,inst_26125);
var state_26264__$1 = (function (){var statearr_26346 = state_26264;
(statearr_26346[(22)] = inst_26138__$1);

return statearr_26346;
})();
if(inst_26138__$1){
var statearr_26347_26412 = state_26264__$1;
(statearr_26347_26412[(1)] = (10));

} else {
var statearr_26348_26413 = state_26264__$1;
(statearr_26348_26413[(1)] = (11));

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
});})(c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22525__auto__,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto____0 = (function (){
var statearr_26352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26352[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto__);

(statearr_26352[(1)] = (1));

return statearr_26352;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto____1 = (function (state_26264){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_26264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e26353){if((e26353 instanceof Object)){
var ex__22529__auto__ = e26353;
var statearr_26354_26414 = state_26264;
(statearr_26354_26414[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26415 = state_26264;
state_26264 = G__26415;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto__ = function(state_26264){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto____1.call(this,state_26264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22639__auto__ = (function (){var statearr_26355 = f__22638__auto__.call(null);
(statearr_26355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_26355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__,map__26110,map__26110__$1,opts,before_jsload,on_jsload,reload_dependents,map__26111,map__26111__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22637__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26418,link){
var map__26421 = p__26418;
var map__26421__$1 = ((((!((map__26421 == null)))?((((map__26421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26421):map__26421);
var file = cljs.core.get.call(null,map__26421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26421,map__26421__$1,file){
return (function (p1__26416_SHARP_,p2__26417_SHARP_){
if(cljs.core._EQ_.call(null,p1__26416_SHARP_,p2__26417_SHARP_)){
return p1__26416_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26421,map__26421__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26427){
var map__26428 = p__26427;
var map__26428__$1 = ((((!((map__26428 == null)))?((((map__26428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26428):map__26428);
var match_length = cljs.core.get.call(null,map__26428__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26428__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26423_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26423_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
var args26430 = [];
var len__17809__auto___26433 = arguments.length;
var i__17810__auto___26434 = (0);
while(true){
if((i__17810__auto___26434 < len__17809__auto___26433)){
args26430.push((arguments[i__17810__auto___26434]));

var G__26435 = (i__17810__auto___26434 + (1));
i__17810__auto___26434 = G__26435;
continue;
} else {
}
break;
}

var G__26432 = args26430.length;
switch (G__26432) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26430.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26437_SHARP_,p2__26438_SHARP_){
return cljs.core.assoc.call(null,p1__26437_SHARP_,cljs.core.get.call(null,p2__26438_SHARP_,key),p2__26438_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26439){
var map__26442 = p__26439;
var map__26442__$1 = ((((!((map__26442 == null)))?((((map__26442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26442):map__26442);
var f_data = map__26442__$1;
var file = cljs.core.get.call(null,map__26442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26444,files_msg){
var map__26451 = p__26444;
var map__26451__$1 = ((((!((map__26451 == null)))?((((map__26451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26451):map__26451);
var opts = map__26451__$1;
var on_cssload = cljs.core.get.call(null,map__26451__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26453_26457 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26454_26458 = null;
var count__26455_26459 = (0);
var i__26456_26460 = (0);
while(true){
if((i__26456_26460 < count__26455_26459)){
var f_26461 = cljs.core._nth.call(null,chunk__26454_26458,i__26456_26460);
figwheel.client.file_reloading.reload_css_file.call(null,f_26461);

var G__26462 = seq__26453_26457;
var G__26463 = chunk__26454_26458;
var G__26464 = count__26455_26459;
var G__26465 = (i__26456_26460 + (1));
seq__26453_26457 = G__26462;
chunk__26454_26458 = G__26463;
count__26455_26459 = G__26464;
i__26456_26460 = G__26465;
continue;
} else {
var temp__4425__auto___26466 = cljs.core.seq.call(null,seq__26453_26457);
if(temp__4425__auto___26466){
var seq__26453_26467__$1 = temp__4425__auto___26466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26453_26467__$1)){
var c__17554__auto___26468 = cljs.core.chunk_first.call(null,seq__26453_26467__$1);
var G__26469 = cljs.core.chunk_rest.call(null,seq__26453_26467__$1);
var G__26470 = c__17554__auto___26468;
var G__26471 = cljs.core.count.call(null,c__17554__auto___26468);
var G__26472 = (0);
seq__26453_26457 = G__26469;
chunk__26454_26458 = G__26470;
count__26455_26459 = G__26471;
i__26456_26460 = G__26472;
continue;
} else {
var f_26473 = cljs.core.first.call(null,seq__26453_26467__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26473);

var G__26474 = cljs.core.next.call(null,seq__26453_26467__$1);
var G__26475 = null;
var G__26476 = (0);
var G__26477 = (0);
seq__26453_26457 = G__26474;
chunk__26454_26458 = G__26475;
count__26455_26459 = G__26476;
i__26456_26460 = G__26477;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26451,map__26451__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26451,map__26451__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456018613717