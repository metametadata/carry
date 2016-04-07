// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19364__auto__ = [];
var len__19357__auto___92400 = arguments.length;
var i__19358__auto___92401 = (0);
while(true){
if((i__19358__auto___92401 < len__19357__auto___92400)){
args__19364__auto__.push((arguments[i__19358__auto___92401]));

var G__92402 = (i__19358__auto___92401 + (1));
i__19358__auto___92401 = G__92402;
continue;
} else {
}
break;
}

var argseq__19365__auto__ = ((((2) < args__19364__auto__.length))?(new cljs.core.IndexedSeq(args__19364__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19365__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__92392_92403 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__92393_92404 = null;
var count__92394_92405 = (0);
var i__92395_92406 = (0);
while(true){
if((i__92395_92406 < count__92394_92405)){
var k_92407 = cljs.core._nth.call(null,chunk__92393_92404,i__92395_92406);
e.setAttribute(cljs.core.name.call(null,k_92407),cljs.core.get.call(null,attrs,k_92407));

var G__92408 = seq__92392_92403;
var G__92409 = chunk__92393_92404;
var G__92410 = count__92394_92405;
var G__92411 = (i__92395_92406 + (1));
seq__92392_92403 = G__92408;
chunk__92393_92404 = G__92409;
count__92394_92405 = G__92410;
i__92395_92406 = G__92411;
continue;
} else {
var temp__4657__auto___92412 = cljs.core.seq.call(null,seq__92392_92403);
if(temp__4657__auto___92412){
var seq__92392_92413__$1 = temp__4657__auto___92412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92392_92413__$1)){
var c__19102__auto___92414 = cljs.core.chunk_first.call(null,seq__92392_92413__$1);
var G__92415 = cljs.core.chunk_rest.call(null,seq__92392_92413__$1);
var G__92416 = c__19102__auto___92414;
var G__92417 = cljs.core.count.call(null,c__19102__auto___92414);
var G__92418 = (0);
seq__92392_92403 = G__92415;
chunk__92393_92404 = G__92416;
count__92394_92405 = G__92417;
i__92395_92406 = G__92418;
continue;
} else {
var k_92419 = cljs.core.first.call(null,seq__92392_92413__$1);
e.setAttribute(cljs.core.name.call(null,k_92419),cljs.core.get.call(null,attrs,k_92419));

var G__92420 = cljs.core.next.call(null,seq__92392_92413__$1);
var G__92421 = null;
var G__92422 = (0);
var G__92423 = (0);
seq__92392_92403 = G__92420;
chunk__92393_92404 = G__92421;
count__92394_92405 = G__92422;
i__92395_92406 = G__92423;
continue;
}
} else {
}
}
break;
}

var seq__92396_92424 = cljs.core.seq.call(null,children);
var chunk__92397_92425 = null;
var count__92398_92426 = (0);
var i__92399_92427 = (0);
while(true){
if((i__92399_92427 < count__92398_92426)){
var ch_92428 = cljs.core._nth.call(null,chunk__92397_92425,i__92399_92427);
e.appendChild(ch_92428);

var G__92429 = seq__92396_92424;
var G__92430 = chunk__92397_92425;
var G__92431 = count__92398_92426;
var G__92432 = (i__92399_92427 + (1));
seq__92396_92424 = G__92429;
chunk__92397_92425 = G__92430;
count__92398_92426 = G__92431;
i__92399_92427 = G__92432;
continue;
} else {
var temp__4657__auto___92433 = cljs.core.seq.call(null,seq__92396_92424);
if(temp__4657__auto___92433){
var seq__92396_92434__$1 = temp__4657__auto___92433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92396_92434__$1)){
var c__19102__auto___92435 = cljs.core.chunk_first.call(null,seq__92396_92434__$1);
var G__92436 = cljs.core.chunk_rest.call(null,seq__92396_92434__$1);
var G__92437 = c__19102__auto___92435;
var G__92438 = cljs.core.count.call(null,c__19102__auto___92435);
var G__92439 = (0);
seq__92396_92424 = G__92436;
chunk__92397_92425 = G__92437;
count__92398_92426 = G__92438;
i__92399_92427 = G__92439;
continue;
} else {
var ch_92440 = cljs.core.first.call(null,seq__92396_92434__$1);
e.appendChild(ch_92440);

var G__92441 = cljs.core.next.call(null,seq__92396_92434__$1);
var G__92442 = null;
var G__92443 = (0);
var G__92444 = (0);
seq__92396_92424 = G__92441;
chunk__92397_92425 = G__92442;
count__92398_92426 = G__92443;
i__92399_92427 = G__92444;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq92389){
var G__92390 = cljs.core.first.call(null,seq92389);
var seq92389__$1 = cljs.core.next.call(null,seq92389);
var G__92391 = cljs.core.first.call(null,seq92389__$1);
var seq92389__$2 = cljs.core.next.call(null,seq92389__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__92390,G__92391,seq92389__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19212__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19213__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19214__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19215__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19216__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19212__auto__,prefer_table__19213__auto__,method_cache__19214__auto__,cached_hierarchy__19215__auto__,hierarchy__19216__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19212__auto__,prefer_table__19213__auto__,method_cache__19214__auto__,cached_hierarchy__19215__auto__,hierarchy__19216__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19216__auto__,method_table__19212__auto__,prefer_table__19213__auto__,method_cache__19214__auto__,cached_hierarchy__19215__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_92445 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_92445.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_92445.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_92445.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_92445);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__92446,st_map){
var map__92451 = p__92446;
var map__92451__$1 = ((((!((map__92451 == null)))?((((map__92451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92451):map__92451);
var container_el = cljs.core.get.call(null,map__92451__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__92451,map__92451__$1,container_el){
return (function (p__92453){
var vec__92454 = p__92453;
var k = cljs.core.nth.call(null,vec__92454,(0),null);
var v = cljs.core.nth.call(null,vec__92454,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__92451,map__92451__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__92455,dom_str){
var map__92458 = p__92455;
var map__92458__$1 = ((((!((map__92458 == null)))?((((map__92458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92458):map__92458);
var c = map__92458__$1;
var content_area_el = cljs.core.get.call(null,map__92458__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__92460){
var map__92463 = p__92460;
var map__92463__$1 = ((((!((map__92463 == null)))?((((map__92463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92463):map__92463);
var content_area_el = cljs.core.get.call(null,map__92463__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__){
return (function (state_92506){
var state_val_92507 = (state_92506[(1)]);
if((state_val_92507 === (1))){
var inst_92491 = (state_92506[(7)]);
var inst_92491__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_92492 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_92493 = ["10px","10px","100%","68px","1.0"];
var inst_92494 = cljs.core.PersistentHashMap.fromArrays(inst_92492,inst_92493);
var inst_92495 = cljs.core.merge.call(null,inst_92494,style);
var inst_92496 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_92491__$1,inst_92495);
var inst_92497 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_92491__$1,msg);
var inst_92498 = cljs.core.async.timeout.call(null,(300));
var state_92506__$1 = (function (){var statearr_92508 = state_92506;
(statearr_92508[(8)] = inst_92497);

(statearr_92508[(9)] = inst_92496);

(statearr_92508[(7)] = inst_92491__$1);

return statearr_92508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92506__$1,(2),inst_92498);
} else {
if((state_val_92507 === (2))){
var inst_92491 = (state_92506[(7)]);
var inst_92500 = (state_92506[(2)]);
var inst_92501 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_92502 = ["auto"];
var inst_92503 = cljs.core.PersistentHashMap.fromArrays(inst_92501,inst_92502);
var inst_92504 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_92491,inst_92503);
var state_92506__$1 = (function (){var statearr_92509 = state_92506;
(statearr_92509[(10)] = inst_92500);

return statearr_92509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92506__$1,inst_92504);
} else {
return null;
}
}
});})(c__25154__auto__))
;
return ((function (switch__25133__auto__,c__25154__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto____0 = (function (){
var statearr_92513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_92513[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto__);

(statearr_92513[(1)] = (1));

return statearr_92513;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto____1 = (function (state_92506){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_92506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e92514){if((e92514 instanceof Object)){
var ex__25137__auto__ = e92514;
var statearr_92515_92517 = state_92506;
(statearr_92515_92517[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92518 = state_92506;
state_92506 = G__92518;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto__ = function(state_92506){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto____1.call(this,state_92506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__))
})();
var state__25156__auto__ = (function (){var statearr_92516 = f__25155__auto__.call(null);
(statearr_92516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_92516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__))
);

return c__25154__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__92520 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__92520,(0),null);
var ln = cljs.core.nth.call(null,vec__92520,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__92523 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__92523,(0),null);
var file_line = cljs.core.nth.call(null,vec__92523,(1),null);
var file_column = cljs.core.nth.call(null,vec__92523,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__92523,file_name,file_line,file_column){
return (function (p1__92521_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__92521_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__92523,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18298__auto__ = file_line;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
var and__18286__auto__ = cause;
if(cljs.core.truth_(and__18286__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18286__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__92526 = figwheel.client.heads_up.ensure_container.call(null);
var map__92526__$1 = ((((!((map__92526 == null)))?((((map__92526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92526):map__92526);
var content_area_el = cljs.core.get.call(null,map__92526__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__){
return (function (state_92574){
var state_val_92575 = (state_92574[(1)]);
if((state_val_92575 === (1))){
var inst_92557 = (state_92574[(7)]);
var inst_92557__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_92558 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_92559 = ["0.0"];
var inst_92560 = cljs.core.PersistentHashMap.fromArrays(inst_92558,inst_92559);
var inst_92561 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_92557__$1,inst_92560);
var inst_92562 = cljs.core.async.timeout.call(null,(300));
var state_92574__$1 = (function (){var statearr_92576 = state_92574;
(statearr_92576[(8)] = inst_92561);

(statearr_92576[(7)] = inst_92557__$1);

return statearr_92576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92574__$1,(2),inst_92562);
} else {
if((state_val_92575 === (2))){
var inst_92557 = (state_92574[(7)]);
var inst_92564 = (state_92574[(2)]);
var inst_92565 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_92566 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_92567 = cljs.core.PersistentHashMap.fromArrays(inst_92565,inst_92566);
var inst_92568 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_92557,inst_92567);
var inst_92569 = cljs.core.async.timeout.call(null,(200));
var state_92574__$1 = (function (){var statearr_92577 = state_92574;
(statearr_92577[(9)] = inst_92564);

(statearr_92577[(10)] = inst_92568);

return statearr_92577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92574__$1,(3),inst_92569);
} else {
if((state_val_92575 === (3))){
var inst_92557 = (state_92574[(7)]);
var inst_92571 = (state_92574[(2)]);
var inst_92572 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_92557,"");
var state_92574__$1 = (function (){var statearr_92578 = state_92574;
(statearr_92578[(11)] = inst_92571);

return statearr_92578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92574__$1,inst_92572);
} else {
return null;
}
}
}
});})(c__25154__auto__))
;
return ((function (switch__25133__auto__,c__25154__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__25134__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__25134__auto____0 = (function (){
var statearr_92582 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92582[(0)] = figwheel$client$heads_up$clear_$_state_machine__25134__auto__);

(statearr_92582[(1)] = (1));

return statearr_92582;
});
var figwheel$client$heads_up$clear_$_state_machine__25134__auto____1 = (function (state_92574){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_92574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e92583){if((e92583 instanceof Object)){
var ex__25137__auto__ = e92583;
var statearr_92584_92586 = state_92574;
(statearr_92584_92586[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92587 = state_92574;
state_92574 = G__92587;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__25134__auto__ = function(state_92574){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__25134__auto____1.call(this,state_92574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__25134__auto____0;
figwheel$client$heads_up$clear_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__25134__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__))
})();
var state__25156__auto__ = (function (){var statearr_92585 = f__25155__auto__.call(null);
(statearr_92585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_92585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__))
);

return c__25154__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__25154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25154__auto__){
return (function (){
var f__25155__auto__ = (function (){var switch__25133__auto__ = ((function (c__25154__auto__){
return (function (state_92619){
var state_val_92620 = (state_92619[(1)]);
if((state_val_92620 === (1))){
var inst_92609 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_92619__$1 = state_92619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92619__$1,(2),inst_92609);
} else {
if((state_val_92620 === (2))){
var inst_92611 = (state_92619[(2)]);
var inst_92612 = cljs.core.async.timeout.call(null,(400));
var state_92619__$1 = (function (){var statearr_92621 = state_92619;
(statearr_92621[(7)] = inst_92611);

return statearr_92621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92619__$1,(3),inst_92612);
} else {
if((state_val_92620 === (3))){
var inst_92614 = (state_92619[(2)]);
var inst_92615 = figwheel.client.heads_up.clear.call(null);
var state_92619__$1 = (function (){var statearr_92622 = state_92619;
(statearr_92622[(8)] = inst_92614);

return statearr_92622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92619__$1,(4),inst_92615);
} else {
if((state_val_92620 === (4))){
var inst_92617 = (state_92619[(2)]);
var state_92619__$1 = state_92619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92619__$1,inst_92617);
} else {
return null;
}
}
}
}
});})(c__25154__auto__))
;
return ((function (switch__25133__auto__,c__25154__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto____0 = (function (){
var statearr_92626 = [null,null,null,null,null,null,null,null,null];
(statearr_92626[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto__);

(statearr_92626[(1)] = (1));

return statearr_92626;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto____1 = (function (state_92619){
while(true){
var ret_value__25135__auto__ = (function (){try{while(true){
var result__25136__auto__ = switch__25133__auto__.call(null,state_92619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25136__auto__;
}
break;
}
}catch (e92627){if((e92627 instanceof Object)){
var ex__25137__auto__ = e92627;
var statearr_92628_92630 = state_92619;
(statearr_92628_92630[(5)] = ex__25137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92631 = state_92619;
state_92619 = G__92631;
continue;
} else {
return ret_value__25135__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto__ = function(state_92619){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto____1.call(this,state_92619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__25134__auto__;
})()
;})(switch__25133__auto__,c__25154__auto__))
})();
var state__25156__auto__ = (function (){var statearr_92629 = f__25155__auto__.call(null);
(statearr_92629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25154__auto__);

return statearr_92629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25156__auto__);
});})(c__25154__auto__))
);

return c__25154__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1460037784723