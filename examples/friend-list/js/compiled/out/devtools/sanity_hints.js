// Compiled by ClojureScript 1.7.228 {}
goog.provide('devtools.sanity_hints');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('cljs.stacktrace');
goog.require('goog.labs.userAgent.browser');
devtools.sanity_hints.available_QMARK_ = (function devtools$sanity_hints$available_QMARK_(){
return true;
});
if(typeof devtools.sanity_hints._STAR_installed_QMARK__STAR_ !== 'undefined'){
} else {
devtools.sanity_hints._STAR_installed_QMARK__STAR_ = false;
}
if(typeof devtools.sanity_hints._STAR_original_global_error_handler_STAR_ !== 'undefined'){
} else {
devtools.sanity_hints._STAR_original_global_error_handler_STAR_ = null;
}
if(typeof devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_ !== 'undefined'){
} else {
devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_ = null;
}
if(typeof devtools.sanity_hints._STAR_processed_errors_STAR_ !== 'undefined'){
} else {
devtools.sanity_hints._STAR_processed_errors_STAR_ = ((typeof WeakSet !== 'undefined')?(new WeakSet()):null);
}
devtools.sanity_hints.empty_as_nil = (function devtools$sanity_hints$empty_as_nil(str){
if(cljs.core.empty_QMARK_.call(null,str)){
return null;
} else {
return str;
}
});
devtools.sanity_hints.ajax_reader = (function devtools$sanity_hints$ajax_reader(url){
var xhr = (new XMLHttpRequest());
xhr.open("GET",url,false);

xhr.send();

return devtools.sanity_hints.empty_as_nil.call(null,xhr.responseText);
});
devtools.sanity_hints.retrieve_javascript_source = (function devtools$sanity_hints$retrieve_javascript_source(where){
var reader = (function (){var or__18298__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"file-reader","file-reader",-450847664));
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return devtools.sanity_hints.ajax_reader;
}
})();
return reader.call(null,where);
});
devtools.sanity_hints.get_line = (function devtools$sanity_hints$get_line(lines,line_number){
return (lines[(line_number - (1))]);
});
devtools.sanity_hints.extend_content = (function devtools$sanity_hints$extend_content(content,lines,line_number,min_length){
if(((cljs.core.count.call(null,content) > min_length)) || (!((line_number > (0))))){
return content;
} else {
var prev_line_number = (line_number - (1));
var prev_line = devtools.sanity_hints.get_line.call(null,lines,prev_line_number);
var new_content = [cljs.core.str(prev_line),cljs.core.str("\n"),cljs.core.str(content)].join('');
return devtools$sanity_hints$extend_content.call(null,new_content,lines,prev_line_number,min_length);
}
});
devtools.sanity_hints.mark_call_closed_at_column = (function devtools$sanity_hints$mark_call_closed_at_column(line,column){
var n = (column - (1));
var prefix = line.substring((0),n);
var postfix = line.substring(n);
return [cljs.core.str(prefix),cljs.core.str(" <<< \u2622 NULL \u2622 <<< "),cljs.core.str(postfix)].join('');
});
devtools.sanity_hints.mark_null_call_site_location = (function devtools$sanity_hints$mark_null_call_site_location(file,line_number,column){
var content = devtools.sanity_hints.retrieve_javascript_source.call(null,file);
var lines = content.split("\n");
var line = devtools.sanity_hints.get_line.call(null,lines,line_number);
var marked_line = devtools.sanity_hints.mark_call_closed_at_column.call(null,line,column);
var min_length = (function (){var or__18298__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"sanity-hint-min-length","sanity-hint-min-length",104958154));
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (128);
}
})();
return devtools.sanity_hints.extend_content.call(null,marked_line,lines,line_number,min_length);
});
devtools.sanity_hints.make_sense_of_the_error = (function devtools$sanity_hints$make_sense_of_the_error(message,file,line_number,column){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/Cannot read property 'call' of.*/,message))){
return devtools.sanity_hints.mark_null_call_site_location.call(null,file,line_number,column);
} else {
return null;

}
});
devtools.sanity_hints.error_object_sense = (function devtools$sanity_hints$error_object_sense(error){
try{var native_stack_trace = error.stack;
var stack_trace = cljs.stacktrace.parse_stacktrace.call(null,cljs.core.PersistentArrayMap.EMPTY,native_stack_trace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ua-product","ua-product",938384227),new cljs.core.Keyword(null,"chrome","chrome",1718738387)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),""], null));
var top_item = cljs.core.second.call(null,stack_trace);
var map__88156 = top_item;
var map__88156__$1 = ((((!((map__88156 == null)))?((((map__88156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88156):map__88156);
var file = cljs.core.get.call(null,map__88156__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__88156__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__88156__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return devtools.sanity_hints.make_sense_of_the_error.call(null,error.message,file,line,column);
}catch (e88155){var _e = e88155;
return false;
}});
devtools.sanity_hints.type_error_to_string = (function devtools$sanity_hints$type_error_to_string(){
var self = this;
if(cljs.core.truth_(devtools.sanity_hints._STAR_processed_errors_STAR_)){
if(cljs.core.truth_(devtools.sanity_hints._STAR_processed_errors_STAR_.has(self))){
} else {
devtools.sanity_hints._STAR_processed_errors_STAR_.add(self);

var temp__4657__auto___88158 = devtools.sanity_hints.error_object_sense.call(null,self);
if(cljs.core.truth_(temp__4657__auto___88158)){
var sense_88159 = temp__4657__auto___88158;
self.message = [cljs.core.str(self.message),cljs.core.str(", a sanity hint:\n"),cljs.core.str(sense_88159)].join('');
} else {
}
}
} else {
}

return devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_.call(self);
});
devtools.sanity_hints.global_error_handler = (function devtools$sanity_hints$global_error_handler(message,url,line,column,error){
var res = (cljs.core.truth_(devtools.sanity_hints._STAR_original_global_error_handler_STAR_)?devtools.sanity_hints._STAR_original_global_error_handler_STAR_.call(null,message,url,line,column,error):null);
if(cljs.core.not.call(null,res)){
var temp__4657__auto__ = devtools.sanity_hints.error_object_sense.call(null,error);
if(cljs.core.truth_(temp__4657__auto__)){
var sense = temp__4657__auto__;
console.info("A sanity hint for incoming uncaught error:\n",sense);

return false;
} else {
return null;
}
} else {
return true;
}
});
devtools.sanity_hints.install_type_error_enhancer = (function devtools$sanity_hints$install_type_error_enhancer(){
devtools.sanity_hints._STAR_original_global_error_handler_STAR_ = window.onerror;

window.onerror = devtools.sanity_hints.global_error_handler;

var prototype = TypeError.prototype;
devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_ = prototype.toString;

return prototype.toString = devtools.sanity_hints.type_error_to_string;
});
devtools.sanity_hints.install_BANG_ = (function devtools$sanity_hints$install_BANG_(){
if(cljs.core.truth_((function (){var and__18286__auto__ = cljs.core.not.call(null,devtools.sanity_hints._STAR_installed_QMARK__STAR_);
if(and__18286__auto__){
return devtools.sanity_hints.available_QMARK_.call(null);
} else {
return and__18286__auto__;
}
})())){
devtools.sanity_hints._STAR_installed_QMARK__STAR_ = true;

devtools.sanity_hints.install_type_error_enhancer.call(null);

return true;
} else {
return null;
}
});
devtools.sanity_hints.uninstall_BANG_ = (function devtools$sanity_hints$uninstall_BANG_(){
if(cljs.core.truth_(devtools.sanity_hints._STAR_installed_QMARK__STAR_)){
devtools.sanity_hints._STAR_installed_QMARK__STAR_ = false;

if(cljs.core.truth_(devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"*original-type-error-prototype-to-string*","*original-type-error-prototype-to-string*",1345252009,null)))].join('')));
}

window.onerror = devtools.sanity_hints._STAR_original_global_error_handler_STAR_;

var prototype = TypeError.prototype;
return prototype.toString = devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_;
} else {
return null;
}
});

//# sourceMappingURL=sanity_hints.js.map?rel=1460037781023