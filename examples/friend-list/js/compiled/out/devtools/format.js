// Compiled by ClojureScript 1.7.228 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.prefs');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__18954__auto__ = (((value == null))?null:value);
var m__18955__auto__ = (devtools.format._header[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,value);
} else {
var m__18955__auto____$1 = (devtools.format._header["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__18954__auto__ = (((value == null))?null:value);
var m__18955__auto__ = (devtools.format._has_body[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,value);
} else {
var m__18955__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__18954__auto__ = (((value == null))?null:value);
var m__18955__auto__ = (devtools.format._body[goog.typeOf(x__18954__auto__)]);
if(!((m__18955__auto__ == null))){
return m__18955__auto__.call(null,value);
} else {
var m__18955__auto____$1 = (devtools.format._body["_"]);
if(!((m__18955__auto____$1 == null))){
return m__18955__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format._STAR_current_state_STAR_ = null;
devtools.format.get_current_state = (function devtools$format$get_current_state(){
return devtools.format._STAR_current_state_STAR_;
});
devtools.format.update_current_state_BANG_ = (function devtools$format$update_current_state_BANG_(var_args){
var args__19364__auto__ = [];
var len__19357__auto___94426 = arguments.length;
var i__19358__auto___94427 = (0);
while(true){
if((i__19358__auto___94427 < len__19357__auto___94426)){
args__19364__auto__.push((arguments[i__19358__auto___94427]));

var G__94428 = (i__19358__auto___94427 + (1));
i__19358__auto___94427 = G__94428;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((1) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((1)),(0))):null);
return devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19365__auto__);
});

devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return devtools.format._STAR_current_state_STAR_ = cljs.core.apply.call(null,f,devtools.format._STAR_current_state_STAR_,args);
});

devtools.format.update_current_state_BANG_.cljs$lang$maxFixedArity = (1);

devtools.format.update_current_state_BANG_.cljs$lang$applyTo = (function (seq94424){
var G__94425 = cljs.core.first.call(null,seq94424);
var seq94424__$1 = cljs.core.next.call(null,seq94424);
return devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__94425,seq94424__$1);
});
devtools.format.push_object_to_current_history_BANG_ = (function devtools$format$push_object_to_current_history_BANG_(object){
return devtools.format.update_current_state_BANG_.call(null,cljs.core.update,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,object);
});
devtools.format.get_current_history = (function devtools$format$get_current_history(){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(devtools.format.get_current_state.call(null));
});
devtools.format.cljs_value_QMARK_ = (function devtools$format$cljs_value_QMARK_(value){
if(cljs.core.truth_(goog.isObject(value))){
var temp__4657__auto__ = goog.object.get(value,"constructor");
if(cljs.core.truth_(temp__4657__auto__)){
var o__23769__auto__ = temp__4657__auto__;
return goog.object.get(o__23769__auto__,"cljs$lang$type");
} else {
return null;
}
} else {
return null;
}
});
devtools.format.prevent_recursion_QMARK_ = (function devtools$format$prevent_recursion_QMARK_(){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606).cljs$core$IFn$_invoke$arity$1(devtools.format.get_current_state.call(null)));
});
devtools.format.set_prevent_recursion_BANG_ = (function devtools$format$set_prevent_recursion_BANG_(){
return devtools.format.update_current_state_BANG_.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606),true);
});
devtools.format.template = (function devtools$format$template(var_args){
var args__19364__auto__ = [];
var len__19357__auto___94436 = arguments.length;
var i__19358__auto___94437 = (0);
while(true){
if((i__19358__auto___94437 < len__19357__auto___94436)){
args__19364__auto__.push((arguments[i__19358__auto___94437]));

var G__94438 = (i__19358__auto___94437 + (1));
i__19358__auto___94437 = G__94438;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((2) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((2)),(0))):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19365__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var resolve_pref = (function (pref_or_val){
if((pref_or_val instanceof cljs.core.Keyword)){
return devtools.prefs.pref.call(null,pref_or_val);
} else {
return pref_or_val;
}
});
var tag__$1 = resolve_pref.call(null,tag);
var style__$1 = resolve_pref.call(null,style);
var js_array = [tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?{}:{"style": style__$1})];
var seq__94432_94439 = cljs.core.seq.call(null,children);
var chunk__94433_94440 = null;
var count__94434_94441 = (0);
var i__94435_94442 = (0);
while(true){
if((i__94435_94442 < count__94434_94441)){
var child_94443 = cljs.core._nth.call(null,chunk__94433_94440,i__94435_94442);
if(cljs.core.coll_QMARK_.call(null,child_94443)){
(js_array["push"]).apply(js_array,cljs.core.into_array.call(null,child_94443));
} else {
js_array.push(resolve_pref.call(null,child_94443));
}

var G__94444 = seq__94432_94439;
var G__94445 = chunk__94433_94440;
var G__94446 = count__94434_94441;
var G__94447 = (i__94435_94442 + (1));
seq__94432_94439 = G__94444;
chunk__94433_94440 = G__94445;
count__94434_94441 = G__94446;
i__94435_94442 = G__94447;
continue;
} else {
var temp__4657__auto___94448 = cljs.core.seq.call(null,seq__94432_94439);
if(temp__4657__auto___94448){
var seq__94432_94449__$1 = temp__4657__auto___94448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__94432_94449__$1)){
var c__19102__auto___94450 = cljs.core.chunk_first.call(null,seq__94432_94449__$1);
var G__94451 = cljs.core.chunk_rest.call(null,seq__94432_94449__$1);
var G__94452 = c__19102__auto___94450;
var G__94453 = cljs.core.count.call(null,c__19102__auto___94450);
var G__94454 = (0);
seq__94432_94439 = G__94451;
chunk__94433_94440 = G__94452;
count__94434_94441 = G__94453;
i__94435_94442 = G__94454;
continue;
} else {
var child_94455 = cljs.core.first.call(null,seq__94432_94449__$1);
if(cljs.core.coll_QMARK_.call(null,child_94455)){
(js_array["push"]).apply(js_array,cljs.core.into_array.call(null,child_94455));
} else {
js_array.push(resolve_pref.call(null,child_94455));
}

var G__94456 = cljs.core.next.call(null,seq__94432_94449__$1);
var G__94457 = null;
var G__94458 = (0);
var G__94459 = (0);
seq__94432_94439 = G__94456;
chunk__94433_94440 = G__94457;
count__94434_94441 = G__94458;
i__94435_94442 = G__94459;
continue;
}
} else {
}
}
break;
}

return js_array;
});

devtools.format.template.cljs$lang$maxFixedArity = (2);

devtools.format.template.cljs$lang$applyTo = (function (seq94429){
var G__94430 = cljs.core.first.call(null,seq94429);
var seq94429__$1 = cljs.core.next.call(null,seq94429);
var G__94431 = cljs.core.first.call(null,seq94429__$1);
var seq94429__$2 = cljs.core.next.call(null,seq94429__$1);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(G__94430,G__94431,seq94429__$2);
});
devtools.format.surrogate_QMARK_ = (function devtools$format$surrogate_QMARK_(value){
var and__18286__auto__ = !((value == null));
if(and__18286__auto__){
return (value[devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"surrogate-key","surrogate-key",391132006))]);
} else {
return and__18286__auto__;
}
});
devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args94460 = [];
var len__19357__auto___94466 = arguments.length;
var i__19358__auto___94467 = (0);
while(true){
if((i__19358__auto___94467 < len__19357__auto___94466)){
args94460.push((arguments[i__19358__auto___94467]));

var G__94468 = (i__19358__auto___94467 + (1));
i__19358__auto___94467 = G__94468;
continue;
} else {
}
break;
}

var G__94462 = args94460.length;
switch (G__94462) {
case 2:
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args94460.length)].join('')));

}
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.format.surrogate.call(null,object,header,true);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,has_body){
return devtools.format.surrogate.call(null,object,header,has_body,null);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,has_body,body_template){
var G__94463 = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"surrogate-key","surrogate-key",391132006));
var obj94465 = {"target":object,"header":header,"hasBody":has_body,"bodyTemplate":body_template};
(obj94465[G__94463] = true);

return obj94465;
});

devtools.format.surrogate.cljs$lang$maxFixedArity = 4;
devtools.format.get_target_object = (function devtools$format$get_target_object(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_.call(null,value))){
return goog.object.get(value,"target");
} else {
return value;
}
});
devtools.format.positions = (function devtools$format$positions(pred,coll){
return cljs.core.keep_indexed.call(null,(function (idx,x){
if(cljs.core.truth_(pred.call(null,x))){
return idx;
} else {
return null;
}
}),coll);
});
devtools.format.remove_positions = (function devtools$format$remove_positions(coll,indices){
return cljs.core.keep_indexed.call(null,(function (idx,x){
if(!(cljs.core.contains_QMARK_.call(null,indices,idx))){
return x;
} else {
return null;
}
}),coll);
});
devtools.format.is_circular_QMARK__BANG_ = (function devtools$format$is_circular_QMARK__BANG_(object){
var current_state = devtools.format.get_current_state.call(null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"entered-reference","entered-reference",2117851020).cljs$core$IFn$_invoke$arity$1(current_state))){
devtools.format.update_current_state_BANG_.call(null,cljs.core.dissoc,new cljs.core.Keyword(null,"entered-reference","entered-reference",2117851020));

return false;
} else {
var history = devtools.format.get_current_history.call(null);
return cljs.core.some.call(null,((function (history,current_state){
return (function (p1__94470_SHARP_){
return (p1__94470_SHARP_ === object);
});})(history,current_state))
,history);
}
});
devtools.format.circular_reference_template = (function devtools$format$circular_reference_template(content_group){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"circular-reference-wrapper-style","circular-reference-wrapper-style",-329208502)).concat([devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"circular-reference-style","circular-reference-style",2114427386),[cljs.core.str(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"circular-reference-label","circular-reference-label",1854246641)))].join(''))],content_group);
});
devtools.format.reference = (function devtools$format$reference(object){
devtools.format.update_current_state_BANG_.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"entered-reference","entered-reference",2117851020),true);

return ["object",{"object": object, "config": devtools.format.get_current_state.call(null)}];
});
devtools.format.index_template = (function devtools$format$index_template(value){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"index-style","index-style",93813430),value,new cljs.core.Keyword(null,"line-index-separator","line-index-separator",-1735989246));
});
devtools.format.number_template = (function devtools$format$number_template(value){
if(cljs.core.integer_QMARK_.call(null,value)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"integer-style","integer-style",1568434578),value);
} else {
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"float-style","float-style",705926672),value);
}
});
devtools.format.meta_template = (function devtools$format$meta_template(value){
var header_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"meta-style","meta-style",1528213407),"meta");
var body_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"meta-body-style","meta-body-style",-1858094980),devtools.format.build_header.call(null,value));
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"meta-reference-style","meta-reference-style",-1930118462),devtools.format.reference.call(null,devtools.format.surrogate.call(null,value,header_template,true,body_template)));
});
devtools.format.abbreviate_long_string = (function devtools$format$abbreviate_long_string(string){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)),string))),cljs.core.str(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-abbreviation-marker","string-abbreviation-marker",-347785112))),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)),string)))].join('');
});
devtools.format.string_template = (function devtools$format$string_template(source_string){
var dq = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dq","dq",-1690275860));
var re_nl = (new RegExp("\n","g"));
var inline_string = source_string.replace(re_nl,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"new-line-string-replacer","new-line-string-replacer",-753206206)));
var max_inline_string_size = (devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)) + devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)));
if((cljs.core.count.call(null,inline_string) <= max_inline_string_size)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"string-style","string-style",744195825),[cljs.core.str(dq),cljs.core.str(inline_string),cljs.core.str(dq)].join(''));
} else {
var abbreviated_string_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"string-style","string-style",744195825),[cljs.core.str(dq),cljs.core.str(devtools.format.abbreviate_long_string.call(null,inline_string)),cljs.core.str(dq)].join(''));
var string_with_nl_markers = source_string.replace(re_nl,[cljs.core.str(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"new-line-string-replacer","new-line-string-replacer",-753206206))),cljs.core.str("\n")].join(''));
var body_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"expanded-string-style","expanded-string-style",-543781397),string_with_nl_markers);
return devtools.format.reference.call(null,devtools.format.surrogate.call(null,source_string,abbreviated_string_template,true,body_template));
}
});
devtools.format.bool_QMARK_ = (function devtools$format$bool_QMARK_(value){
return (value === true) || (value === false);
});
devtools.format.atomic_template = (function devtools$format$atomic_template(value){
if((value == null)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
if(cljs.core.truth_(devtools.format.bool_QMARK_.call(null,value))){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"bool-style","bool-style",-1275737743),value);
} else {
if(typeof value === 'string'){
return devtools.format.string_template.call(null,value);
} else {
if(typeof value === 'number'){
return devtools.format.number_template.call(null,value);
} else {
if((value instanceof cljs.core.Keyword)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"keyword-style","keyword-style",-780643937),[cljs.core.str(value)].join(''));
} else {
if((value instanceof cljs.core.Symbol)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"symbol-style","symbol-style",1022654848),[cljs.core.str(value)].join(''));
} else {
return null;
}
}
}
}
}
}
});
devtools.format.abbreviated_QMARK_ = (function devtools$format$abbreviated_QMARK_(template){
return cljs.core.some.call(null,(function (p1__94471_SHARP_){
return cljs.core._EQ_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"more-marker","more-marker",-14717935)),p1__94471_SHARP_);
}),template);
});
devtools.format.seq_count_is_greater_or_equal_QMARK_ = (function devtools$format$seq_count_is_greater_or_equal_QMARK_(seq,limit){
var chunk = cljs.core.take.call(null,limit,seq);
return cljs.core._EQ_.call(null,cljs.core.count.call(null,chunk),limit);
});
devtools.format.expandable_QMARK_ = (function devtools$format$expandable_QMARK_(obj){
var and__18286__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"seqables-always-expandable","seqables-always-expandable",-1995087215));
if(cljs.core.truth_(and__18286__auto__)){
var and__18286__auto____$1 = cljs.core.seqable_QMARK_.call(null,obj);
if(and__18286__auto____$1){
return devtools.format.seq_count_is_greater_or_equal_QMARK_.call(null,obj,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"min-sequable-count-for-expansion","min-sequable-count-for-expansion",1409206097)));
} else {
return and__18286__auto____$1;
}
} else {
return and__18286__auto__;
}
});

/**
* @constructor
 * @implements {devtools.format.Object}
 * @implements {cljs.core.IWriter}
*/
devtools.format.TemplateWriter = (function (group){
this.group = group;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devtools.format.TemplateWriter.prototype.merge = (function (a){
var self__ = this;
var _ = this;
return self__.group.push.apply(self__.group,a);
});

devtools.format.TemplateWriter.prototype.get_group = (function (){
var self__ = this;
var _ = this;
return self__.group;
});

devtools.format.TemplateWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return self__.group.push(o);
});

devtools.format.TemplateWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

devtools.format.TemplateWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"group","group",-2071839637,null)], null);
});

devtools.format.TemplateWriter.cljs$lang$type = true;

devtools.format.TemplateWriter.cljs$lang$ctorStr = "devtools.format/TemplateWriter";

devtools.format.TemplateWriter.cljs$lang$ctorPrWriter = (function (this__18897__auto__,writer__18898__auto__,opt__18899__auto__){
return cljs.core._write.call(null,writer__18898__auto__,"devtools.format/TemplateWriter");
});

devtools.format.__GT_TemplateWriter = (function devtools$format$__GT_TemplateWriter(group){
return (new devtools.format.TemplateWriter(group));
});

devtools.format.make_template_writer = (function devtools$format$make_template_writer(){
return (new devtools.format.TemplateWriter([]));
});
devtools.format.wrap_group_in_reference_if_needed = (function devtools$format$wrap_group_in_reference_if_needed(group,obj){
if(cljs.core.truth_((function (){var or__18298__auto__ = devtools.format.expandable_QMARK_.call(null,obj);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return devtools.format.abbreviated_QMARK_.call(null,group);
}
})())){
return [devtools.format.reference.call(null,devtools.format.surrogate.call(null,obj,devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"header-style","header-style",-2122121341)).concat(group)))];
} else {
return group;
}
});
devtools.format.wrap_group_in_circular_warning_if_needed = (function devtools$format$wrap_group_in_circular_warning_if_needed(group,circular_QMARK_){
if(cljs.core.truth_(circular_QMARK_)){
return [devtools.format.circular_reference_template.call(null,group)];
} else {
return group;
}
});
devtools.format.detect_edge_case_and_patch_it = (function devtools$format$detect_edge_case_and_patch_it(group,obj){
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(5))) && (cljs.core._EQ_.call(null,(group[(0)]),"#object[")) && (cljs.core._EQ_.call(null,(group[(4)]),"\"]"))) || ((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(5))) && (cljs.core._EQ_.call(null,(group[(0)]),"#object[")) && (cljs.core._EQ_.call(null,(group[(4)]),"]"))) || ((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(3))) && (cljs.core._EQ_.call(null,(group[(0)]),"#object[")) && (cljs.core._EQ_.call(null,(group[(2)]),"]")))){
devtools.format.set_prevent_recursion_BANG_.call(null);

return [devtools.format.reference.call(null,obj)];
} else {
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(3))) && (cljs.core._EQ_.call(null,(group[(0)]),"#<")) && (cljs.core._EQ_.call(null,[cljs.core.str(obj)].join(''),(group[(1)]))) && (cljs.core._EQ_.call(null,(group[(2)]),">"))){
devtools.format.set_prevent_recursion_BANG_.call(null);

return [(group[(0)]),devtools.format.reference.call(null,obj),(group[(2)])];
} else {
return group;

}
}
});
devtools.format.alt_printer_impl = (function devtools$format$alt_printer_impl(obj,writer,opts){
var _STAR_current_state_STAR_94475 = devtools.format._STAR_current_state_STAR_;
devtools.format._STAR_current_state_STAR_ = devtools.format.get_current_state.call(null);

try{if((function (){var and__18286__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"entered-reference","entered-reference",2117851020).cljs$core$IFn$_invoke$arity$1(devtools.format._STAR_current_state_STAR_));
if(and__18286__auto__){
if(!((obj == null))){
if((false) || (obj.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,obj);
}
} else {
return and__18286__auto__;
}
})()){
return cljs.core._write.call(null,writer,devtools.format.reference.call(null,obj));
} else {
var circular_QMARK_ = devtools.format.is_circular_QMARK__BANG_.call(null,obj);
devtools.format.push_object_to_current_history_BANG_.call(null,obj);

var temp__4655__auto__ = devtools.format.atomic_template.call(null,obj);
if(cljs.core.truth_(temp__4655__auto__)){
var tmpl = temp__4655__auto__;
return cljs.core._write.call(null,writer,tmpl);
} else {
var inner_writer = devtools.format.make_template_writer.call(null);
var default_impl = new cljs.core.Keyword(null,"fallback-impl","fallback-impl",-1501286995).cljs$core$IFn$_invoke$arity$1(opts);
var inner_opts = ((cljs.core._EQ_.call(null,cljs.core._STAR_print_level_STAR_,(1)))?cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(0)):opts);
default_impl.call(null,obj,inner_writer,inner_opts);

var final_group = devtools.format.wrap_group_in_circular_warning_if_needed.call(null,devtools.format.wrap_group_in_reference_if_needed.call(null,devtools.format.detect_edge_case_and_patch_it.call(null,inner_writer.get_group(),obj),obj),circular_QMARK_);
return writer.merge(final_group);
}
}
}finally {devtools.format._STAR_current_state_STAR_ = _STAR_current_state_STAR_94475;
}});
devtools.format.managed_pr_str = (function devtools$format$managed_pr_str(value,style,print_level){
var tmpl = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),style);
var writer = (new devtools.format.TemplateWriter(tmpl));
var _STAR_print_level_STAR_94479_94480 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = print_level;

try{cljs.core.pr_seq_writer.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),writer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595),devtools.format.alt_printer_impl,new cljs.core.Keyword(null,"print-length","print-length",1931866356),devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"max-header-elements","max-header-elements",713629864)),new cljs.core.Keyword(null,"more-marker","more-marker",-14717935),devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"more-marker","more-marker",-14717935))], null));
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_94479_94480;
}
return tmpl;
});
devtools.format.build_header = (function devtools$format$build_header(value){
var value_template = devtools.format.managed_pr_str.call(null,value,new cljs.core.Keyword(null,"header-style","header-style",-2122121341),(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"max-print-level","max-print-level",-462237413)) + (1)));
var temp__4655__auto__ = (cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"print-meta-data","print-meta-data",1409048509)))?cljs.core.meta.call(null,value):null);
if(cljs.core.truth_(temp__4655__auto__)){
var meta_data = temp__4655__auto__;
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"meta-wrapper-style","meta-wrapper-style",-1627075237),value_template,devtools.format.meta_template.call(null,meta_data));
} else {
return value_template;
}
});
devtools.format.build_header_wrapped = (function devtools$format$build_header_wrapped(value){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"cljs-style","cljs-style",1984116061),devtools.format.build_header.call(null,value));
});
devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args94482 = [];
var len__19357__auto___94485 = arguments.length;
var i__19358__auto___94486 = (0);
while(true){
if((i__19358__auto___94486 < len__19357__auto___94485)){
args94482.push((arguments[i__19358__auto___94486]));

var G__94487 = (i__19358__auto___94486 + (1));
i__19358__auto___94486 = G__94487;
continue;
} else {
}
break;
}

var G__94484 = args94482.length;
switch (G__94484) {
case 1:
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args94482.length)].join('')));

}
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$1 = (function (lines){
return devtools.format.standard_body_template.call(null,lines,true);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$2 = (function (lines,margin_QMARK_){
var ol_style = (cljs.core.truth_(margin_QMARK_)?new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615):new cljs.core.Keyword(null,"standard-ol-no-margin-style","standard-ol-no-margin-style",-1701969586));
var li_style = (cljs.core.truth_(margin_QMARK_)?new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955):new cljs.core.Keyword(null,"standard-li-no-margin-style","standard-li-no-margin-style",87138485));
return devtools.format.template.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),ol_style,cljs.core.map.call(null,((function (ol_style,li_style){
return (function (p1__94481_SHARP_){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"li","li",723558921),li_style,p1__94481_SHARP_);
});})(ol_style,li_style))
,lines));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = 2;
devtools.format.body_line_template = (function devtools$format$body_line_template(index,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.format.index_template.call(null,index),devtools.format.managed_pr_str.call(null,value,new cljs.core.Keyword(null,"item-style","item-style",-188747722),(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"body-line-max-print-level","body-line-max-print-level",571158623)) + (1)))], null);
});
devtools.format.prepare_body_lines = (function devtools$format$prepare_body_lines(data,starting_index){
var work = data;
var index = starting_index;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,work)){
return lines;
} else {
var G__94489 = cljs.core.rest.call(null,work);
var G__94490 = (index + (1));
var G__94491 = cljs.core.conj.call(null,lines,devtools.format.body_line_template.call(null,index,cljs.core.first.call(null,work)));
work = G__94489;
index = G__94490;
lines = G__94491;
continue;
}
break;
}
});
devtools.format.body_lines_templates = (function devtools$format$body_lines_templates(value,starting_index){
var seq = cljs.core.seq.call(null,value);
var max_number_body_items = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"max-number-body-items","max-number-body-items",299914624));
var chunk = cljs.core.take.call(null,max_number_body_items,seq);
var rest = cljs.core.drop.call(null,max_number_body_items,seq);
var lines = devtools.format.prepare_body_lines.call(null,chunk,starting_index);
var continue_QMARK_ = !(cljs.core.empty_QMARK_.call(null,cljs.core.take.call(null,(1),rest)));
if(!(continue_QMARK_)){
return lines;
} else {
var more_label_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"body-items-more-label-style","body-items-more-label-style",-1440170470),devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"body-items-more-label","body-items-more-label",-1561152123)));
var surrogate_object = devtools.format.surrogate.call(null,rest,more_label_template);
(surrogate_object["startingIndex"] = (starting_index + max_number_body_items));

return cljs.core.conj.call(null,lines,devtools.format.reference.call(null,surrogate_object));
}
});
devtools.format.build_body = (function devtools$format$build_body(value,starting_index){
var is_body_QMARK_ = (starting_index === (0));
var result = devtools.format.standard_body_template.call(null,devtools.format.body_lines_templates.call(null,value,starting_index),is_body_QMARK_);
if(is_body_QMARK_){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"body-style","body-style",1462943820),result);
} else {
return result;
}
});
devtools.format.build_surrogate_body = (function devtools$format$build_surrogate_body(value){
var temp__4655__auto__ = (value["bodyTemplate"]);
if(cljs.core.truth_(temp__4655__auto__)){
var body_template = temp__4655__auto__;
return body_template;
} else {
var target = (value["target"]);
if(cljs.core.seqable_QMARK_.call(null,target)){
var starting_index = (function (){var or__18298__auto__ = (value["startingIndex"]);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (0);
}
})();
return devtools.format.build_body.call(null,target,starting_index);
} else {
return devtools.format.template.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.template.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.reference.call(null,target)));
}
}
});
devtools.format.want_value_QMARK__STAR_ = (function devtools$format$want_value_QMARK__STAR_(value){
if(cljs.core.truth_(devtools.format.prevent_recursion_QMARK_.call(null))){
return false;
} else {
var or__18298__auto__ = devtools.format.cljs_value_QMARK_.call(null,value);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return devtools.format.surrogate_QMARK_.call(null,value);
}
}
});
devtools.format.header_STAR_ = (function devtools$format$header_STAR_(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_.call(null,value))){
return (value["header"]);
} else {
if(((!((value == null)))?(((false) || (value.devtools$format$IDevtoolsFormat$))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value):false)):cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value))){
return devtools.format._header.call(null,value);
} else {
return devtools.format.build_header_wrapped.call(null,value);

}
}
});
devtools.format.has_body_STAR_ = (function devtools$format$has_body_STAR_(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_.call(null,value))){
return (value["hasBody"]);
} else {
if(((!((value == null)))?(((false) || (value.devtools$format$IDevtoolsFormat$))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value):false)):cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value))){
return devtools.format._has_body.call(null,value);
} else {
return false;

}
}
});
devtools.format.body_STAR_ = (function devtools$format$body_STAR_(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_.call(null,value))){
return devtools.format.build_surrogate_body.call(null,value);
} else {
if(((!((value == null)))?(((false) || (value.devtools$format$IDevtoolsFormat$))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value):false)):cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value))){
return devtools.format._body.call(null,value);
} else {
return null;
}
}
});
devtools.format.config_wrapper = (function devtools$format$config_wrapper(raw_fn){
return (function (value,config){
var _STAR_current_state_STAR_94499 = devtools.format._STAR_current_state_STAR_;
devtools.format._STAR_current_state_STAR_ = (function (){var or__18298__auto__ = config;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return raw_fn.call(null,value);
}finally {devtools.format._STAR_current_state_STAR_ = _STAR_current_state_STAR_94499;
}});
});
devtools.format.want_value_QMARK_ = devtools.format.config_wrapper.call(null,devtools.format.want_value_QMARK__STAR_);
devtools.format.header = devtools.format.config_wrapper.call(null,devtools.format.header_STAR_);
devtools.format.has_body = devtools.format.config_wrapper.call(null,devtools.format.has_body_STAR_);
devtools.format.body = devtools.format.config_wrapper.call(null,devtools.format.body_STAR_);
devtools.format.build_api_call = (function devtools$format$build_api_call(raw_fn,pre_handler_key,post_handler_key){

return (function (value,config){
var pre_handler = (function (){var or__18298__auto__ = devtools.prefs.pref.call(null,pre_handler_key);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return cljs.core.identity;
}
})();
var post_handler = (function (){var or__18298__auto__ = devtools.prefs.pref.call(null,post_handler_key);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return cljs.core.identity;
}
})();
var preprocessed_value = pre_handler.call(null,value);
var result = (cljs.core.truth_(devtools.format.want_value_QMARK_.call(null,preprocessed_value,config))?raw_fn.call(null,preprocessed_value,config):null);
return post_handler.call(null,result);
});
});
devtools.format.header_api_call = devtools.format.build_api_call.call(null,devtools.format.header,new cljs.core.Keyword(null,"header-pre-handler","header-pre-handler",-1997722262),new cljs.core.Keyword(null,"header-post-handler","header-post-handler",514828618));
devtools.format.has_body_api_call = devtools.format.build_api_call.call(null,devtools.format.has_body,new cljs.core.Keyword(null,"has-body-pre-handler","has-body-pre-handler",1787020038),new cljs.core.Keyword(null,"has-body-post-handler","has-body-post-handler",-863451271));
devtools.format.body_api_call = devtools.format.build_api_call.call(null,devtools.format.body,new cljs.core.Keyword(null,"body-pre-handler","body-pre-handler",1211926529),new cljs.core.Keyword(null,"body-post-handler","body-post-handler",-1040905424));

//# sourceMappingURL=format.js.map?rel=1460037788025