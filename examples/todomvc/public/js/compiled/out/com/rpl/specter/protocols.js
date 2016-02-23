// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.rpl.specter.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
com.rpl.specter.protocols.StructurePath = function(){};

com.rpl.specter.protocols.select_STAR_ = (function com$rpl$specter$protocols$select_STAR_(this$,structure,next_fn){
if((!((this$ == null))) && (!((this$.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 == null)))){
return this$.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3(this$,structure,next_fn);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (com.rpl.specter.protocols.select_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,structure,next_fn);
} else {
var m__17407__auto____$1 = (com.rpl.specter.protocols.select_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"StructurePath.select*",this$);
}
}
}
});

com.rpl.specter.protocols.transform_STAR_ = (function com$rpl$specter$protocols$transform_STAR_(this$,structure,next_fn){
if((!((this$ == null))) && (!((this$.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 == null)))){
return this$.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3(this$,structure,next_fn);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (com.rpl.specter.protocols.transform_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,structure,next_fn);
} else {
var m__17407__auto____$1 = (com.rpl.specter.protocols.transform_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"StructurePath.transform*",this$);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.protocols.Collector = function(){};

com.rpl.specter.protocols.collect_val = (function com$rpl$specter$protocols$collect_val(this$,structure){
if((!((this$ == null))) && (!((this$.com$rpl$specter$protocols$Collector$collect_val$arity$2 == null)))){
return this$.com$rpl$specter$protocols$Collector$collect_val$arity$2(this$,structure);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (com.rpl.specter.protocols.collect_val[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,structure);
} else {
var m__17407__auto____$1 = (com.rpl.specter.protocols.collect_val["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,structure);
} else {
throw cljs.core.missing_protocol.call(null,"Collector.collect-val",this$);
}
}
}
});


//# sourceMappingURL=protocols.js.map?rel=1456018592648