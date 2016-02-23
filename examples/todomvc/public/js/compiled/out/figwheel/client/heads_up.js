// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17816__auto__ = [];
var len__17809__auto___27025 = arguments.length;
var i__17810__auto___27026 = (0);
while(true){
if((i__17810__auto___27026 < len__17809__auto___27025)){
args__17816__auto__.push((arguments[i__17810__auto___27026]));

var G__27027 = (i__17810__auto___27026 + (1));
i__17810__auto___27026 = G__27027;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27017_27028 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27018_27029 = null;
var count__27019_27030 = (0);
var i__27020_27031 = (0);
while(true){
if((i__27020_27031 < count__27019_27030)){
var k_27032 = cljs.core._nth.call(null,chunk__27018_27029,i__27020_27031);
e.setAttribute(cljs.core.name.call(null,k_27032),cljs.core.get.call(null,attrs,k_27032));

var G__27033 = seq__27017_27028;
var G__27034 = chunk__27018_27029;
var G__27035 = count__27019_27030;
var G__27036 = (i__27020_27031 + (1));
seq__27017_27028 = G__27033;
chunk__27018_27029 = G__27034;
count__27019_27030 = G__27035;
i__27020_27031 = G__27036;
continue;
} else {
var temp__4425__auto___27037 = cljs.core.seq.call(null,seq__27017_27028);
if(temp__4425__auto___27037){
var seq__27017_27038__$1 = temp__4425__auto___27037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27017_27038__$1)){
var c__17554__auto___27039 = cljs.core.chunk_first.call(null,seq__27017_27038__$1);
var G__27040 = cljs.core.chunk_rest.call(null,seq__27017_27038__$1);
var G__27041 = c__17554__auto___27039;
var G__27042 = cljs.core.count.call(null,c__17554__auto___27039);
var G__27043 = (0);
seq__27017_27028 = G__27040;
chunk__27018_27029 = G__27041;
count__27019_27030 = G__27042;
i__27020_27031 = G__27043;
continue;
} else {
var k_27044 = cljs.core.first.call(null,seq__27017_27038__$1);
e.setAttribute(cljs.core.name.call(null,k_27044),cljs.core.get.call(null,attrs,k_27044));

var G__27045 = cljs.core.next.call(null,seq__27017_27038__$1);
var G__27046 = null;
var G__27047 = (0);
var G__27048 = (0);
seq__27017_27028 = G__27045;
chunk__27018_27029 = G__27046;
count__27019_27030 = G__27047;
i__27020_27031 = G__27048;
continue;
}
} else {
}
}
break;
}

var seq__27021_27049 = cljs.core.seq.call(null,children);
var chunk__27022_27050 = null;
var count__27023_27051 = (0);
var i__27024_27052 = (0);
while(true){
if((i__27024_27052 < count__27023_27051)){
var ch_27053 = cljs.core._nth.call(null,chunk__27022_27050,i__27024_27052);
e.appendChild(ch_27053);

var G__27054 = seq__27021_27049;
var G__27055 = chunk__27022_27050;
var G__27056 = count__27023_27051;
var G__27057 = (i__27024_27052 + (1));
seq__27021_27049 = G__27054;
chunk__27022_27050 = G__27055;
count__27023_27051 = G__27056;
i__27024_27052 = G__27057;
continue;
} else {
var temp__4425__auto___27058 = cljs.core.seq.call(null,seq__27021_27049);
if(temp__4425__auto___27058){
var seq__27021_27059__$1 = temp__4425__auto___27058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27021_27059__$1)){
var c__17554__auto___27060 = cljs.core.chunk_first.call(null,seq__27021_27059__$1);
var G__27061 = cljs.core.chunk_rest.call(null,seq__27021_27059__$1);
var G__27062 = c__17554__auto___27060;
var G__27063 = cljs.core.count.call(null,c__17554__auto___27060);
var G__27064 = (0);
seq__27021_27049 = G__27061;
chunk__27022_27050 = G__27062;
count__27023_27051 = G__27063;
i__27024_27052 = G__27064;
continue;
} else {
var ch_27065 = cljs.core.first.call(null,seq__27021_27059__$1);
e.appendChild(ch_27065);

var G__27066 = cljs.core.next.call(null,seq__27021_27059__$1);
var G__27067 = null;
var G__27068 = (0);
var G__27069 = (0);
seq__27021_27049 = G__27066;
chunk__27022_27050 = G__27067;
count__27023_27051 = G__27068;
i__27024_27052 = G__27069;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27014){
var G__27015 = cljs.core.first.call(null,seq27014);
var seq27014__$1 = cljs.core.next.call(null,seq27014);
var G__27016 = cljs.core.first.call(null,seq27014__$1);
var seq27014__$2 = cljs.core.next.call(null,seq27014__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27015,G__27016,seq27014__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17665__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17668__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17664__auto__,prefer_table__17665__auto__,method_cache__17666__auto__,cached_hierarchy__17667__auto__,hierarchy__17668__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17664__auto__,prefer_table__17665__auto__,method_cache__17666__auto__,cached_hierarchy__17667__auto__,hierarchy__17668__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17668__auto__,method_table__17664__auto__,prefer_table__17665__auto__,method_cache__17666__auto__,cached_hierarchy__17667__auto__));
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
var el_27070 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27070.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27070.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27070.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27070);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27071,st_map){
var map__27076 = p__27071;
var map__27076__$1 = ((((!((map__27076 == null)))?((((map__27076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27076):map__27076);
var container_el = cljs.core.get.call(null,map__27076__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27076,map__27076__$1,container_el){
return (function (p__27078){
var vec__27079 = p__27078;
var k = cljs.core.nth.call(null,vec__27079,(0),null);
var v = cljs.core.nth.call(null,vec__27079,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27076,map__27076__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27080,dom_str){
var map__27083 = p__27080;
var map__27083__$1 = ((((!((map__27083 == null)))?((((map__27083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27083):map__27083);
var c = map__27083__$1;
var content_area_el = cljs.core.get.call(null,map__27083__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27085){
var map__27088 = p__27085;
var map__27088__$1 = ((((!((map__27088 == null)))?((((map__27088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27088):map__27088);
var content_area_el = cljs.core.get.call(null,map__27088__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__){
return (function (state_27131){
var state_val_27132 = (state_27131[(1)]);
if((state_val_27132 === (1))){
var inst_27116 = (state_27131[(7)]);
var inst_27116__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27117 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27118 = ["10px","10px","100%","68px","1.0"];
var inst_27119 = cljs.core.PersistentHashMap.fromArrays(inst_27117,inst_27118);
var inst_27120 = cljs.core.merge.call(null,inst_27119,style);
var inst_27121 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27116__$1,inst_27120);
var inst_27122 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27116__$1,msg);
var inst_27123 = cljs.core.async.timeout.call(null,(300));
var state_27131__$1 = (function (){var statearr_27133 = state_27131;
(statearr_27133[(8)] = inst_27121);

(statearr_27133[(7)] = inst_27116__$1);

(statearr_27133[(9)] = inst_27122);

return statearr_27133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27131__$1,(2),inst_27123);
} else {
if((state_val_27132 === (2))){
var inst_27116 = (state_27131[(7)]);
var inst_27125 = (state_27131[(2)]);
var inst_27126 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27127 = ["auto"];
var inst_27128 = cljs.core.PersistentHashMap.fromArrays(inst_27126,inst_27127);
var inst_27129 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27116,inst_27128);
var state_27131__$1 = (function (){var statearr_27134 = state_27131;
(statearr_27134[(10)] = inst_27125);

return statearr_27134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27131__$1,inst_27129);
} else {
return null;
}
}
});})(c__22637__auto__))
;
return ((function (switch__22525__auto__,c__22637__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto____0 = (function (){
var statearr_27138 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27138[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto__);

(statearr_27138[(1)] = (1));

return statearr_27138;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto____1 = (function (state_27131){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_27131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e27139){if((e27139 instanceof Object)){
var ex__22529__auto__ = e27139;
var statearr_27140_27142 = state_27131;
(statearr_27140_27142[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27143 = state_27131;
state_27131 = G__27143;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto__ = function(state_27131){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto____1.call(this,state_27131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__))
})();
var state__22639__auto__ = (function (){var statearr_27141 = f__22638__auto__.call(null);
(statearr_27141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_27141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__))
);

return c__22637__auto__;
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
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27145 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__27145,(0),null);
var ln = cljs.core.nth.call(null,vec__27145,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27148 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27148,(0),null);
var file_line = cljs.core.nth.call(null,vec__27148,(1),null);
var file_column = cljs.core.nth.call(null,vec__27148,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27148,file_name,file_line,file_column){
return (function (p1__27146_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27146_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27148,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16751__auto__ = file_line;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
var and__16739__auto__ = cause;
if(cljs.core.truth_(and__16739__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16739__auto__;
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
var map__27151 = figwheel.client.heads_up.ensure_container.call(null);
var map__27151__$1 = ((((!((map__27151 == null)))?((((map__27151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27151):map__27151);
var content_area_el = cljs.core.get.call(null,map__27151__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__){
return (function (state_27199){
var state_val_27200 = (state_27199[(1)]);
if((state_val_27200 === (1))){
var inst_27182 = (state_27199[(7)]);
var inst_27182__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27183 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27184 = ["0.0"];
var inst_27185 = cljs.core.PersistentHashMap.fromArrays(inst_27183,inst_27184);
var inst_27186 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27182__$1,inst_27185);
var inst_27187 = cljs.core.async.timeout.call(null,(300));
var state_27199__$1 = (function (){var statearr_27201 = state_27199;
(statearr_27201[(7)] = inst_27182__$1);

(statearr_27201[(8)] = inst_27186);

return statearr_27201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27199__$1,(2),inst_27187);
} else {
if((state_val_27200 === (2))){
var inst_27182 = (state_27199[(7)]);
var inst_27189 = (state_27199[(2)]);
var inst_27190 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27191 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27192 = cljs.core.PersistentHashMap.fromArrays(inst_27190,inst_27191);
var inst_27193 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27182,inst_27192);
var inst_27194 = cljs.core.async.timeout.call(null,(200));
var state_27199__$1 = (function (){var statearr_27202 = state_27199;
(statearr_27202[(9)] = inst_27189);

(statearr_27202[(10)] = inst_27193);

return statearr_27202;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27199__$1,(3),inst_27194);
} else {
if((state_val_27200 === (3))){
var inst_27182 = (state_27199[(7)]);
var inst_27196 = (state_27199[(2)]);
var inst_27197 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27182,"");
var state_27199__$1 = (function (){var statearr_27203 = state_27199;
(statearr_27203[(11)] = inst_27196);

return statearr_27203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27199__$1,inst_27197);
} else {
return null;
}
}
}
});})(c__22637__auto__))
;
return ((function (switch__22525__auto__,c__22637__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22526__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22526__auto____0 = (function (){
var statearr_27207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27207[(0)] = figwheel$client$heads_up$clear_$_state_machine__22526__auto__);

(statearr_27207[(1)] = (1));

return statearr_27207;
});
var figwheel$client$heads_up$clear_$_state_machine__22526__auto____1 = (function (state_27199){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_27199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e27208){if((e27208 instanceof Object)){
var ex__22529__auto__ = e27208;
var statearr_27209_27211 = state_27199;
(statearr_27209_27211[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27212 = state_27199;
state_27199 = G__27212;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22526__auto__ = function(state_27199){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22526__auto____1.call(this,state_27199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22526__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22526__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__))
})();
var state__22639__auto__ = (function (){var statearr_27210 = f__22638__auto__.call(null);
(statearr_27210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_27210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__))
);

return c__22637__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22637__auto__){
return (function (){
var f__22638__auto__ = (function (){var switch__22525__auto__ = ((function (c__22637__auto__){
return (function (state_27244){
var state_val_27245 = (state_27244[(1)]);
if((state_val_27245 === (1))){
var inst_27234 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27244__$1 = state_27244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27244__$1,(2),inst_27234);
} else {
if((state_val_27245 === (2))){
var inst_27236 = (state_27244[(2)]);
var inst_27237 = cljs.core.async.timeout.call(null,(400));
var state_27244__$1 = (function (){var statearr_27246 = state_27244;
(statearr_27246[(7)] = inst_27236);

return statearr_27246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27244__$1,(3),inst_27237);
} else {
if((state_val_27245 === (3))){
var inst_27239 = (state_27244[(2)]);
var inst_27240 = figwheel.client.heads_up.clear.call(null);
var state_27244__$1 = (function (){var statearr_27247 = state_27244;
(statearr_27247[(8)] = inst_27239);

return statearr_27247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27244__$1,(4),inst_27240);
} else {
if((state_val_27245 === (4))){
var inst_27242 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27244__$1,inst_27242);
} else {
return null;
}
}
}
}
});})(c__22637__auto__))
;
return ((function (switch__22525__auto__,c__22637__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto____0 = (function (){
var statearr_27251 = [null,null,null,null,null,null,null,null,null];
(statearr_27251[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto__);

(statearr_27251[(1)] = (1));

return statearr_27251;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto____1 = (function (state_27244){
while(true){
var ret_value__22527__auto__ = (function (){try{while(true){
var result__22528__auto__ = switch__22525__auto__.call(null,state_27244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22528__auto__;
}
break;
}
}catch (e27252){if((e27252 instanceof Object)){
var ex__22529__auto__ = e27252;
var statearr_27253_27255 = state_27244;
(statearr_27253_27255[(5)] = ex__22529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27256 = state_27244;
state_27244 = G__27256;
continue;
} else {
return ret_value__22527__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto__ = function(state_27244){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto____1.call(this,state_27244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22526__auto__;
})()
;})(switch__22525__auto__,c__22637__auto__))
})();
var state__22639__auto__ = (function (){var statearr_27254 = f__22638__auto__.call(null);
(statearr_27254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22637__auto__);

return statearr_27254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22639__auto__);
});})(c__22637__auto__))
);

return c__22637__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1456018617825