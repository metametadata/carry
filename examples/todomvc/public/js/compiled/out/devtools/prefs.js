// Compiled by ClojureScript 1.7.170 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('clojure.string');
devtools.prefs.signature_color = "rgba(100, 255, 100, 1);";
devtools.prefs.string_color = "rgba(255, 100, 100, 1);";
devtools.prefs.color_with_opacity = (function devtools$prefs$color_with_opacity(color,opacity){
return clojure.string.replace.call(null,color,"1);",[cljs.core.str(opacity),cljs.core.str(");")].join(''));
});
devtools.prefs.signature_background = devtools.prefs.color_with_opacity.call(null,devtools.prefs.signature_color,0.08);
devtools.prefs.body_border_color = devtools.prefs.color_with_opacity.call(null,devtools.prefs.signature_color,0.4);
devtools.prefs.string_background = devtools.prefs.color_with_opacity.call(null,devtools.prefs.string_color,0.08);
devtools.prefs.string_border_color = devtools.prefs.color_with_opacity.call(null,devtools.prefs.string_color,0.4);
devtools.prefs.default_prefs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-number-body-items","max-number-body-items",299914624),new cljs.core.Keyword(null,"symbol-style","symbol-style",1022654848),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"body-pre-handler","body-pre-handler",1211926529),new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327),new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239),new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145),new cljs.core.Keyword(null,"line-index-separator","line-index-separator",-1735989246),new cljs.core.Keyword(null,"new-line-string-replacer","new-line-string-replacer",-753206206),new cljs.core.Keyword(null,"dirac-print-length","dirac-print-length",1240393954),new cljs.core.Keyword(null,"header-style","header-style",-2122121341),new cljs.core.Keyword(null,"body-items-more-label","body-items-more-label",-1561152123),new cljs.core.Keyword(null,"has-body-pre-handler","has-body-pre-handler",1787020038),new cljs.core.Keyword(null,"surrogate-key","surrogate-key",391132006),new cljs.core.Keyword(null,"string-abbreviation-marker","string-abbreviation-marker",-347785112),new cljs.core.Keyword(null,"max-header-elements","max-header-elements",713629864),new cljs.core.Keyword(null,"dirac-print-level","dirac-print-level",1233865961),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"sanity-hint-min-length","sanity-hint-min-length",104958154),new cljs.core.Keyword(null,"circular-reference-wrapper-style","circular-reference-wrapper-style",-329208502),new cljs.core.Keyword(null,"header-pre-handler","header-pre-handler",-1997722262),new cljs.core.Keyword(null,"expanded-string-style","expanded-string-style",-543781397),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),new cljs.core.Keyword(null,"body-style","body-style",1462943820),new cljs.core.Keyword(null,"dq","dq",-1690275860),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203),new cljs.core.Keyword(null,"standard-ol-no-margin-style","standard-ol-no-margin-style",-1701969586),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),new cljs.core.Keyword(null,"file-reader","file-reader",-450847664),new cljs.core.Keyword(null,"float-style","float-style",705926672),new cljs.core.Keyword(null,"body-post-handler","body-post-handler",-1040905424),new cljs.core.Keyword(null,"more-marker","more-marker",-14717935),new cljs.core.Keyword(null,"bool-style","bool-style",-1275737743),new cljs.core.Keyword(null,"seqables-always-expandable","seqables-always-expandable",-1995087215),new cljs.core.Keyword(null,"string-style","string-style",744195825),new cljs.core.Keyword(null,"circular-reference-label","circular-reference-label",1854246641),new cljs.core.Keyword(null,"min-sequable-count-for-expansion","min-sequable-count-for-expansion",1409206097),new cljs.core.Keyword(null,"integer-style","integer-style",1568434578),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"spacer","spacer",2067425139),new cljs.core.Keyword(null,"standard-li-no-margin-style","standard-li-no-margin-style",87138485),new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963),new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"item-style","item-style",-188747722),new cljs.core.Keyword(null,"index-style","index-style",93813430),new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649),new cljs.core.Keyword(null,"has-body-post-handler","has-body-post-handler",-863451271),new cljs.core.Keyword(null,"circular-reference-style","circular-reference-style",2114427386),new cljs.core.Keyword(null,"body-items-more-label-style","body-items-more-label-style",-1440170470),new cljs.core.Keyword(null,"max-print-level","max-print-level",-462237413),new cljs.core.Keyword(null,"meta-wrapper-style","meta-wrapper-style",-1627075237),new cljs.core.Keyword(null,"header-post-handelr","header-post-handelr",1525935099),new cljs.core.Keyword(null,"meta-body-style","meta-body-style",-1858094980),new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332),new cljs.core.Keyword(null,"cljs-style","cljs-style",1984116061),new cljs.core.Keyword(null,"print-meta-data","print-meta-data",1409048509),new cljs.core.Keyword(null,"body-line-max-print-level","body-line-max-print-level",571158623),new cljs.core.Keyword(null,"keyword-style","keyword-style",-780643937),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"meta-style","meta-style",1528213407)],[(100),"color:#000000","color:#808080",null,true,"color:red",false,"","\u21B5",(10),"white-space: nowrap","more\u2026",null,"$$this-is-cljs-devtools-surrogate"," \u2026 ",(5),(1),"li",(128),"",null,[cljs.core.str("padding: 0px 12px 0px 12px;"),cljs.core.str("color:#C41A16;"),cljs.core.str("white-space: pre;"),cljs.core.str("border-top: 1px solid "),cljs.core.str(devtools.prefs.string_border_color),cljs.core.str(";"),cljs.core.str("border-radius:1px;"),cljs.core.str("margin: 0px 0px 2px 0px;"),cljs.core.str("background-color:"),cljs.core.str(devtools.prefs.string_background),cljs.core.str(";")].join(''),"margin-left:16px",[cljs.core.str("display:inline-block;"),cljs.core.str("padding: 0px;"),cljs.core.str("border-top: 1px solid "),cljs.core.str(devtools.prefs.body_border_color),cljs.core.str(";"),cljs.core.str("border-radius:1px;"),cljs.core.str("margin: 0px 0px 2px 0px;"),cljs.core.str("background-color:"),cljs.core.str(devtools.prefs.signature_background),cljs.core.str(";")].join(''),"\"","nil",[cljs.core.str("list-style-type:none;"),cljs.core.str("padding-left:0px;"),cljs.core.str("margin-top:0px;"),cljs.core.str("margin-bottom:0px;"),cljs.core.str("margin-left:0px")].join(''),[cljs.core.str("list-style-type:none;"),cljs.core.str("padding-left:0px;"),cljs.core.str("margin-top:0px;"),cljs.core.str("margin-bottom:0px;"),cljs.core.str("margin-left:0px")].join(''),null,"color:#1C88CF",null,"\u2026","color:#099",true,"color:#C41A16","\u221E",(3),"color:#1C00CF","ol"," ","margin-left:0px",(20),"color:#090",[cljs.core.str("display: inline-block;"),cljs.core.str("white-space: nowrap;"),cljs.core.str("border-left: 2px solid rgba(100, 100, 100, 0.2);"),cljs.core.str("padding: 0px 4px 0px 4px;"),cljs.core.str("margin: 1px 0px 0px 0px;")].join(''),[cljs.core.str("min-width: 50px;"),cljs.core.str("display: inline-block;"),cljs.core.str("text-align: right;"),cljs.core.str("vertical-align: top;"),cljs.core.str("background-color:#ddd;"),cljs.core.str("color:#000;"),cljs.core.str("opacity: 0.5;"),cljs.core.str("margin-right: 3px;"),cljs.core.str("padding: 0px 4px 0px 4px;"),cljs.core.str("margin: 1px 0px 0px 0px;"),cljs.core.str("-webkit-user-select: none;")].join(''),false,null,[cljs.core.str("background-color:#f88;"),cljs.core.str("color:#fff;"),cljs.core.str("opacity: 0.5;"),cljs.core.str("margin-right: 3px;"),cljs.core.str("padding: 0px 4px 0px 4px;"),cljs.core.str("border-radius:2px;"),cljs.core.str("-webkit-user-select: none;")].join(''),[cljs.core.str("background-color:#999;"),cljs.core.str("min-width: 50px;"),cljs.core.str("display: inline-block;"),cljs.core.str("color: #fff;"),cljs.core.str("cursor: pointer;"),cljs.core.str("line-height: 14px;"),cljs.core.str("font-size: 10px;"),cljs.core.str("border-radius:2px;"),cljs.core.str("padding: 0px 4px 0px 4px;"),cljs.core.str("margin: 1px 0px 0px 0px;"),cljs.core.str("-webkit-user-select: none;")].join(''),(2),[cljs.core.str("background-color:#efe;"),cljs.core.str("border:1px solid #ada;"),cljs.core.str("border-radius:2px;")].join(''),null,[cljs.core.str("border:1px solid #ada;"),cljs.core.str("position:relative;"),cljs.core.str("left:1px;"),cljs.core.str("top:-1px;"),cljs.core.str("margin-left:-1px;"),cljs.core.str("padding:1px;"),cljs.core.str("border-bottom-left-radius:2px;"),cljs.core.str("border-bottom-right-radius:2px;")].join(''),(20),[cljs.core.str("background-color:"),cljs.core.str(devtools.prefs.signature_background),cljs.core.str(";")].join(''),true,(3),"color:#881391","span",[cljs.core.str("background-color:#ada;"),cljs.core.str("color:#fff;"),cljs.core.str("padding:0px 2px 0px 4px;"),cljs.core.str("-webkit-user-select: none;")].join('')]);
devtools.prefs._STAR_prefs_STAR_ = devtools.prefs.default_prefs;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs._STAR_prefs_STAR_);
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___18089 = arguments.length;
var i__17810__auto___18090 = (0);
while(true){
if((i__17810__auto___18090 < len__17809__auto___18089)){
args__17816__auto__.push((arguments[i__17810__auto___18090]));

var G__18091 = (i__17810__auto___18090 + (1));
i__17810__auto___18090 = G__18091;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq18086){
var G__18087 = cljs.core.first.call(null,seq18086);
var seq18086__$1 = cljs.core.next.call(null,seq18086);
var G__18088 = cljs.core.first.call(null,seq18086__$1);
var seq18086__$2 = cljs.core.next.call(null,seq18086__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18087,G__18088,seq18086__$2);
});

//# sourceMappingURL=prefs.js.map?rel=1456150483614