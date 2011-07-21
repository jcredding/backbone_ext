// Underscore.js 1.1.7
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var p=this,C=p._,m={},i=Array.prototype,n=Object.prototype,f=i.slice,D=i.unshift,E=n.toString,l=n.hasOwnProperty,s=i.forEach,t=i.map,u=i.reduce,v=i.reduceRight,w=i.filter,x=i.every,y=i.some,o=i.indexOf,z=i.lastIndexOf;n=Array.isArray;var F=Object.keys,q=Function.prototype.bind,b=function(a){return new j(a)};typeof module!=="undefined"&&module.exports?(module.exports=b,b._=b):p._=b;b.VERSION="1.1.7";var h=b.each=b.forEach=function(a,c,b){if(a!=null)if(s&&a.forEach===s)a.forEach(c,b);else if(a.length===
+a.length)for(var e=0,k=a.length;e<k;e++){if(e in a&&c.call(b,a[e],e,a)===m)break}else for(e in a)if(l.call(a,e)&&c.call(b,a[e],e,a)===m)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(t&&a.map===t)return a.map(c,b);h(a,function(a,g,G){e[e.length]=c.call(b,a,g,G)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var k=d!==void 0;a==null&&(a=[]);if(u&&a.reduce===u)return e&&(c=b.bind(c,e)),k?a.reduce(c,d):a.reduce(c);h(a,function(a,b,f){k?d=c.call(e,d,a,b,f):(d=a,k=!0)});if(!k)throw new TypeError("Reduce of empty array with no initial value");
return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(v&&a.reduceRight===v)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;A(a,function(a,g,f){if(c.call(b,a,g,f))return e=a,!0});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.filter===w)return a.filter(c,b);h(a,function(a,g,f){c.call(b,a,g,f)&&(e[e.length]=a)});return e};
b.reject=function(a,c,b){var e=[];if(a==null)return e;h(a,function(a,g,f){c.call(b,a,g,f)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=!0;if(a==null)return e;if(x&&a.every===x)return a.every(c,b);h(a,function(a,g,f){if(!(e=e&&c.call(b,a,g,f)))return m});return e};var A=b.some=b.any=function(a,c,d){c=c||b.identity;var e=!1;if(a==null)return e;if(y&&a.some===y)return a.some(c,d);h(a,function(a,b,f){if(e|=c.call(d,a,b,f))return m});return!!e};b.include=b.contains=function(a,c){var b=
!1;if(a==null)return b;if(o&&a.indexOf===o)return a.indexOf(c)!=-1;A(a,function(a){if(b=a===c)return!0});return b};b.invoke=function(a,c){var d=f.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,
c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,b){var d={};h(a,function(a,f){var g=b(a,f);(d[g]||(d[g]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||
(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){if(!a)return[];if(a.toArray)return a.toArray();if(b.isArray(a))return f.call(a);if(b.isArguments(a))return f.call(a);return b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?f.call(a,0,b):a[0]};b.rest=b.tail=function(a,b,d){return f.call(a,b==null||d?1:b)};b.last=function(a){return a[a.length-1]};b.compact=function(a){return b.filter(a,
function(a){return!!a})};b.flatten=function(a){return b.reduce(a,function(a,d){if(b.isArray(d))return a.concat(b.flatten(d));a[a.length]=d;return a},[])};b.without=function(a){return b.difference(a,f.call(arguments,1))};b.uniq=b.unique=function(a,c){return b.reduce(a,function(a,e,f){if(0==f||(c===!0?b.last(a)!=e:!b.include(a,e)))a[a.length]=e;return a},[])};b.union=function(){return b.uniq(b.flatten(arguments))};b.intersection=b.intersect=function(a){var c=f.call(arguments,1);return b.filter(b.uniq(a),
function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=f.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(o&&a.indexOf===o)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,
b){if(a==null)return-1;if(z&&a.lastIndexOf===z)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);d=arguments[2]||1;for(var e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};b.bind=function(a,b){if(a.bind===q&&q)return q.apply(a,f.call(arguments,1));var d=f.call(arguments,2);return function(){return a.apply(b,d.concat(f.call(arguments)))}};b.bindAll=function(a){var c=f.call(arguments,1);
c.length==0&&(c=b.functions(a));h(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return l.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=function(a,b){var d=f.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(f.call(arguments,1)))};var B=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;
a.apply(f,g)};d&&clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};b.throttle=function(a,b){return B(a,b,!1)};b.debounce=function(a,b){return B(a,b,!0)};b.once=function(a){var b=!1,d;return function(){if(b)return d;b=!0;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(f.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=f.call(arguments);return function(){for(var b=f.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=
function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=F||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)l.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){h(f.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){h(f.call(arguments,
1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,c){if(a===c)return!0;var d=typeof a;if(d!=typeof c)return!1;if(a==c)return!0;if(!a&&c||a&&!c)return!1;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual)return a.isEqual(c);if(c.isEqual)return c.isEqual(a);if(b.isDate(a)&&b.isDate(c))return a.getTime()===c.getTime();if(b.isNaN(a)&&b.isNaN(c))return!1;
if(b.isRegExp(a)&&b.isRegExp(c))return a.source===c.source&&a.global===c.global&&a.ignoreCase===c.ignoreCase&&a.multiline===c.multiline;if(d!=="object")return!1;if(a.length&&a.length!==c.length)return!1;d=b.keys(a);var e=b.keys(c);if(d.length!=e.length)return!1;for(var f in a)if(!(f in c)||!b.isEqual(a[f],c[f]))return!1;return!0};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(l.call(a,c))return!1;return!0};b.isElement=function(a){return!!(a&&a.nodeType==
1)};b.isArray=n||function(a){return E.call(a)==="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return!(!a||!l.call(a,"callee"))};b.isFunction=function(a){return!(!a||!a.constructor||!a.call||!a.apply)};b.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};b.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===!0||a===!1};b.isDate=function(a){return!(!a||!a.getTimezoneOffset||
!a.setUTCFullYear)};b.isRegExp=function(a){return!(!a||!a.test||!a.exec||!(a.ignoreCase||a.ignoreCase===!1))};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.noConflict=function(){p._=C;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.mixin=function(a){h(b.functions(a),function(c){H(c,b[c]=a[c])})};var I=0;b.uniqueId=function(a){var b=I++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};
b.template=function(a,c){var d=b.templateSettings;d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";d=new Function("obj",d);return c?d(c):d};
var j=function(a){this._wrapped=a};b.prototype=j.prototype;var r=function(a,c){return c?b(a).chain():a},H=function(a,c){j.prototype[a]=function(){var a=f.call(arguments);D.call(a,this._wrapped);return r(c.apply(b,a),this._chain)}};b.mixin(b);h(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=i[a];j.prototype[a]=function(){b.apply(this._wrapped,arguments);return r(this._wrapped,this._chain)}});h(["concat","join","slice"],function(a){var b=i[a];j.prototype[a]=function(){return r(b.apply(this._wrapped,
arguments),this._chain)}});j.prototype.chain=function(){this._chain=!0;return this};j.prototype.value=function(){return this._wrapped}})();
// Backbone.js 0.5.1
// (c) 2010 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://documentcloud.github.com/backbone
(function(){var h=this,p=h.Backbone,e;e=typeof exports!=="undefined"?exports:h.Backbone={};e.VERSION="0.5.1";var f=h._;if(!f&&typeof require!=="undefined")f=require("underscore")._;var g=h.jQuery||h.Zepto;e.noConflict=function(){h.Backbone=p;return this};e.emulateHTTP=!1;e.emulateJSON=!1;e.Events={bind:function(a,b){var c=this._callbacks||(this._callbacks={});(c[a]||(c[a]=[])).push(b);return this},unbind:function(a,b){var c;if(a){if(c=this._callbacks)if(b){c=c[a];if(!c)return this;for(var d=0,e=c.length;d<
e;d++)if(b===c[d]){c[d]=null;break}}else c[a]=[]}else this._callbacks={};return this},trigger:function(a){var b,c,d,e,f=2;if(!(c=this._callbacks))return this;for(;f--;)if(b=f?a:"all",b=c[b])for(var g=0,h=b.length;g<h;g++)(d=b[g])?(e=f?Array.prototype.slice.call(arguments,1):arguments,d.apply(this,e)):(b.splice(g,1),g--,h--);return this}};e.Model=function(a,b){var c;a||(a={});if(c=this.defaults)f.isFunction(c)&&(c=c()),a=f.extend({},c,a);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");
this.set(a,{silent:!0});this._changed=!1;this._previousAttributes=f.clone(this.attributes);if(b&&b.collection)this.collection=b.collection;this.initialize(a,b)};f.extend(e.Model.prototype,e.Events,{_previousAttributes:null,_changed:!1,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.attributes[a];return this._escapedAttributes[a]=(b==null?"":
""+b).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27").replace(/\//g,"&#x2F;")},has:function(a){return this.attributes[a]!=null},set:function(a,b){b||(b={});if(!a)return this;if(a.attributes)a=a.attributes;var c=this.attributes,d=this._escapedAttributes;if(!b.silent&&this.validate&&!this._performValidation(a,b))return!1;if(this.idAttribute in a)this.id=a[this.idAttribute];var e=this._changing;this._changing=!0;
for(var g in a){var h=a[g];if(!f.isEqual(c[g],h))c[g]=h,delete d[g],this._changed=!0,b.silent||this.trigger("change:"+g,this,h,b)}!e&&!b.silent&&this._changed&&this.change(b);this._changing=!1;return this},unset:function(a,b){if(!(a in this.attributes))return this;b||(b={});var c={};c[a]=void 0;if(!b.silent&&this.validate&&!this._performValidation(c,b))return!1;delete this.attributes[a];delete this._escapedAttributes[a];a==this.idAttribute&&delete this.id;this._changed=!0;b.silent||(this.trigger("change:"+
a,this,void 0,b),this.change(b));return this},clear:function(a){a||(a={});var b,c=this.attributes,d={};for(b in c)d[b]=void 0;if(!a.silent&&this.validate&&!this._performValidation(d,a))return!1;this.attributes={};this._escapedAttributes={};this._changed=!0;if(!a.silent){for(b in c)this.trigger("change:"+b,this,void 0,a);this.change(a)}return this},fetch:function(a){a||(a={});var b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};a.error=i(a.error,b,a);return(this.sync||
e.sync).call(this,"read",this,a)},save:function(a,b){b||(b={});if(a&&!this.set(a,b))return!1;var c=this,d=b.success;b.success=function(a,e,f){if(!c.set(c.parse(a,f),b))return!1;d&&d(c,a,f)};b.error=i(b.error,c,b);var f=this.isNew()?"create":"update";return(this.sync||e.sync).call(this,f,this,b)},destroy:function(a){a||(a={});if(this.isNew())return this.trigger("destroy",this,this.collection,a);var b=this,c=a.success;a.success=function(d){b.trigger("destroy",b,b.collection,a);c&&c(b,d)};a.error=i(a.error,
b,a);return(this.sync||e.sync).call(this,"delete",this,a)},url:function(){var a=k(this.collection)||this.urlRoot||l();if(this.isNew())return a;return a+(a.charAt(a.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this)},isNew:function(){return this.id==null},change:function(a){this.trigger("change",this,a);this._previousAttributes=f.clone(this.attributes);this._changed=!1},hasChanged:function(a){if(a)return this._previousAttributes[a]!=
this.attributes[a];return this._changed},changedAttributes:function(a){a||(a=this.attributes);var b=this._previousAttributes,c=!1,d;for(d in a)f.isEqual(b[d],a[d])||(c=c||{},c[d]=a[d]);return c},previous:function(a){if(!a||!this._previousAttributes)return null;return this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},_performValidation:function(a,b){var c=this.validate(a);if(c)return b.error?b.error(this,c,b):this.trigger("error",this,c,b),!1;return!0}});
e.Collection=function(a,b){b||(b={});if(b.comparator)this.comparator=b.comparator;f.bindAll(this,"_onModelEvent","_removeReference");this._reset();a&&this.reset(a,{silent:!0});this.initialize.apply(this,arguments)};f.extend(e.Collection.prototype,e.Events,{model:e.Model,initialize:function(){},toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,b){if(f.isArray(a))for(var c=0,d=a.length;c<d;c++)this._add(a[c],b);else this._add(a,b);return this},remove:function(a,b){if(f.isArray(a))for(var c=
0,d=a.length;c<d;c++)this._remove(a[c],b);else this._remove(a,b);return this},get:function(a){if(a==null)return null;return this._byId[a.id!=null?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");this.models=this.sortBy(this.comparator);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},
reset:function(a,b){a||(a=[]);b||(b={});this.each(this._removeReference);this._reset();this.add(a,{silent:!0});b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a||(a={});var b=this,c=a.success;a.success=function(d,f,e){b[a.add?"add":"reset"](b.parse(d,e),a);c&&c(b,d)};a.error=i(a.error,b,a);return(this.sync||e.sync).call(this,"read",this,a)},create:function(a,b){var c=this;b||(b={});a=this._prepareModel(a,b);if(!a)return!1;var d=b.success;b.success=function(a,e,f){c.add(a,b);
d&&d(a,e,f)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_prepareModel:function(a,b){if(a instanceof e.Model){if(!a.collection)a.collection=this}else{var c=a;a=new this.model(c,{collection:this});a.validate&&!a._performValidation(c,b)&&(a=!1)}return a},_add:function(a,b){b||(b={});a=this._prepareModel(a,b);if(!a)return!1;var c=this.getByCid(a)||this.get(a);if(c)throw Error(["Can't add the same model to a set twice",
c.id]);this._byId[a.id]=a;this._byCid[a.cid]=a;this.models.splice(b.at!=null?b.at:this.comparator?this.sortedIndex(a,this.comparator):this.length,0,a);a.bind("all",this._onModelEvent);this.length++;b.silent||a.trigger("add",a,this,b);return a},_remove:function(a,b){b||(b={});a=this.getByCid(a)||this.get(a);if(!a)return null;delete this._byId[a.id];delete this._byCid[a.cid];this.models.splice(this.indexOf(a),1);this.length--;b.silent||a.trigger("remove",a,this,b);this._removeReference(a);return a},
_removeReference:function(a){this==a.collection&&delete a.collection;a.unbind("all",this._onModelEvent)},_onModelEvent:function(a,b,c,d){(a=="add"||a=="remove")&&c!=this||(a=="destroy"&&this._remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,arguments))}});f.each(["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max",
"min","sortBy","sortedIndex","toArray","size","first","rest","last","without","indexOf","lastIndexOf","isEmpty"],function(a){e.Collection.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});e.Router=function(a){a||(a={});if(a.routes)this.routes=a.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var q=/:([\w\d]+)/g,r=/\*([\w\d]+)/g,s=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(e.Router.prototype,e.Events,{initialize:function(){},route:function(a,b,c){e.history||
(e.history=new e.History);f.isRegExp(a)||(a=this._routeToRegExp(a));e.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d))},this))},navigate:function(a,b){e.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(s,"\\$&").replace(q,"([^/]*)").replace(r,
"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});e.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")};var j=/^#*/,t=/msie [\w.]+/,m=!1;f.extend(e.History.prototype,{interval:50,getFragment:function(a,b){if(a==null)if(this._hasPushState||b){a=window.location.pathname;var c=window.location.search;c&&(a+=c);a.indexOf(this.options.root)==0&&(a=a.substr(this.options.root.length))}else a=window.location.hash;return a.replace(j,"")},start:function(a){if(m)throw Error("Backbone.history has already been started");
this.options=f.extend({},{root:"/"},this.options,a);this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||!window.history||!window.history.pushState);a=this.getFragment();var b=document.documentMode;if(b=t.exec(navigator.userAgent.toLowerCase())&&(!b||b<=7))this.iframe=g('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?g(window).bind("popstate",this.checkUrl):"onhashchange"in window&&!b?
g(window).bind("hashchange",this.checkUrl):setInterval(this.checkUrl,this.interval);this.fragment=a;m=!0;a=window.location;b=a.pathname==this.options.root;if(this._wantsPushState&&!this._hasPushState&&!b)this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment);else if(this._wantsPushState&&this._hasPushState&&b&&a.hash)this.fragment=a.hash.replace(j,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment);
return this.loadUrl()},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.iframe.location.hash));if(a==this.fragment||a==decodeURIComponent(this.fragment))return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(window.location.hash)},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},
navigate:function(a,b){var c=(a||"").replace(j,"");if(!(this.fragment==c||this.fragment==decodeURIComponent(c))){if(this._hasPushState){var d=window.location;c.indexOf(this.options.root)!=0&&(c=this.options.root+c);this.fragment=c;window.history.pushState({},document.title,d.protocol+"//"+d.host+c)}else if(window.location.hash=this.fragment=c,this.iframe&&c!=this.getFragment(this.iframe.location.hash))this.iframe.document.open().close(),this.iframe.location.hash=c;b&&this.loadUrl(a)}}});e.View=function(a){this.cid=
f.uniqueId("view");this._configure(a||{});this._ensureElement();this.delegateEvents();this.initialize.apply(this,arguments)};var u=/^(\S+)\s*(.*)$/,n=["model","collection","el","id","attributes","className","tagName"];f.extend(e.View.prototype,e.Events,{tagName:"div",$:function(a){return g(a,this.el)},initialize:function(){},render:function(){return this},remove:function(){g(this.el).remove();return this},make:function(a,b,c){a=document.createElement(a);b&&g(a).attr(b);c&&g(a).html(c);return a},delegateEvents:function(a){if(a||
(a=this.events))for(var b in g(this.el).unbind(".delegateEvents"+this.cid),a){var c=this[a[b]];if(!c)throw Error('Event "'+a[b]+'" does not exist');var d=b.match(u),e=d[1];d=d[2];c=f.bind(c,this);e+=".delegateEvents"+this.cid;d===""?g(this.el).bind(e,c):g(this.el).delegate(d,e,c)}},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=n.length;b<c;b++){var d=n[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el){if(f.isString(this.el))this.el=
g(this.el).get(0)}else{var a=this.attributes||{};if(this.id)a.id=this.id;if(this.className)a["class"]=this.className;this.el=this.make(this.tagName,a)}}});e.Model.extend=e.Collection.extend=e.Router.extend=e.View.extend=function(a,b){var c=v(this,a,b);c.extend=this.extend;return c};var w={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};e.sync=function(a,b,c){var d=w[a];c=f.extend({type:d,dataType:"json",processData:!1},c);if(!c.url)c.url=k(b)||l();if(!c.data&&b&&(a=="create"||a=="update"))c.contentType=
"application/json",c.data=JSON.stringify(b.toJSON());if(e.emulateJSON)c.contentType="application/x-www-form-urlencoded",c.processData=!0,c.data=c.data?{model:c.data}:{};if(e.emulateHTTP&&(d==="PUT"||d==="DELETE")){if(e.emulateJSON)c.data._method=d;c.type="POST";c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)}}return g.ajax(c)};var o=function(){},v=function(a,b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){return a.apply(this,arguments)};f.extend(d,
a);o.prototype=a.prototype;d.prototype=new o;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},k=function(a){if(!a||!a.url)return null;return f.isFunction(a.url)?a.url():a.url},l=function(){throw Error('A "url" property or function must be specified');},i=function(a,b,c){return function(d){a?a(b,d,c):b.trigger("error",b,d,c)}}}).call(this);
(function() {
  /*
  BackboneExt.js 0.0.1
  (c) 2011 John Redding
  BackboneExt may be freely distributed under the MIT license.
  https://github.com/jcredding/backbone_ext
  */  window.BackboneExt = {
    Utilities: {}
  };
  window.App = {
    Models: {},
    Views: {},
    Routers: {}
  };
}).call(this);
(function() {
  var checkName;
  checkName = function(model) {
    if (model.railsName == null) {
      throw "A 'railsName' property must be specified.";
    }
    return model;
  };
  BackboneExt.Utilities = {
    wrapAttributes: function(model, attrs) {
      var data;
      checkName(model);
      data = {};
      data[model.railsName] = attrs;
      return data;
    },
    unwrapAttributes: function(model, attrs) {
      checkName(model);
      return attrs[model.railsName];
    }
  };
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  BackboneExt.Utilities.DataParser = {
    parse: function() {
      var dataScripts;
      dataScripts = $('SCRIPT[data-name][type="application/json"]');
      _.each(dataScripts, __bind(function(dataScript) {
        dataScript = $(dataScript);
        if (!(this.object != null)) {
          this.object = {};
        }
        if (dataScript.attr('data-merge')) {
          return this.object = $.extend(true, this.object, $.parseJSON(dataScript.html()));
        } else {
          return this.object[dataScript.attr('data-name')] = $.parseJSON(dataScript.html());
        }
      }, this));
      return this.object || {};
    }
  };
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  BackboneExt.Utilities.RouteParser = {
    load: function(options) {
      _.bindAll(this, "parse");
      options || (options = {});
      this.onSuccess = options['success'];
      $.ajax({
        url: "/routes.json",
        method: "GET",
        dataType: "json",
        success: this.parse
      });
      return true;
    },
    parse: function(data) {
      this.routes = new BackboneExt.Utilities.RoutesCollection();
      _.each(data, __bind(function(route) {
        return this.routes.add(route);
      }, this));
      if (this.onSuccess) {
        this.onSuccess(this.routes);
      }
      return this.routes;
    }
  };
}).call(this);
(function() {
  var addFormat, generatorMethod, namedSegmentsRegExp, subNamedSegments;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  addFormat = function(path, options) {
    var format;
    format = options['format'] ? "." + options['format'] : "";
    delete options['format'];
    return path.replace(/\(\.\:format\)/g, format);
  };
  namedSegmentsRegExp = /(\:[a-z_]+)/g;
  subNamedSegments = function(path, options) {
    var matches;
    matches = path.match(namedSegmentsRegExp);
    _.each(matches, __bind(function(key) {
      var name, regexp;
      name = key.split(':')[1];
      regexp = new RegExp(key, 'g');
      path = path.replace(regexp, options[name] || key);
      delete options[name];
      return path;
    }, this));
    return path;
  };
  generatorMethod = function(route) {
    return function(options) {
      var parts, path;
      options = _.clone(options || {});
      path = route.path;
      path = addFormat(path, options);
      path = subNamedSegments(path, options);
      parts = [path, $.param(options)];
      parts = _.reject(parts, function(str) {
        return !str;
      });
      return parts.join("?");
    };
  };
  BackboneExt.Utilities.RoutesCollection = (function() {
    function RoutesCollection(routes) {
      routes || (routes = []);
      _.each(routes, __bind(function(route) {
        return this.add(route);
      }, this));
    }
    RoutesCollection.prototype.add = function(route) {
      var methodName;
      methodName = "" + route.name + "_path";
      return this[methodName] = generatorMethod(route);
    };
    return RoutesCollection;
  })();
}).call(this);
(function() {
  var cleanPath;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  cleanPath = function(path) {
    return path.replace(/^\//, '');
  };
  BackboneExt.App = (function() {
    App.prototype.config = {
      dataParser: BackboneExt.Utilities.DataParser,
      routeParser: BackboneExt.Utilities.RouteParser,
      routersNamespace: window.App.Routers
    };
    function App(config) {
      var onRouteParseSuccess;
      _.bindAll(this, "setup", "start", "navigateTo", "navigate");
      config || (config = {});
      this.config = _.extend(this.config, config);
      this.page = cleanPath(window.location.pathname);
      if (!_.isEmpty(this.config.routersNamespace)) {
        if (this.config.dataParser != null) {
          this.data = this.config.dataParser.parse();
        }
        if (this.config.routeParser != null) {
          this.delayStart = true;
          onRouteParseSuccess = __bind(function(routes) {
            this.routes = routes;
            if (this.delayStart) {
              this.start();
            }
            return true;
          }, this);
          this.config.routeParser.load({
            success: onRouteParseSuccess
          });
        }
      }
      this.start();
    }
    App.prototype.start = function() {
      var handler;
      if (!this.delayStart || this.routes) {
        this.routers = {};
        _.each(_.keys(this.config.routersNamespace), __bind(function(routerName) {
          var options;
          options = {
            app: this
          };
          return this.routers[routerName] = new this.config.routersNamespace[routerName](options);
        }, this));
        this.setup();
        this.hasRouters = !_.isEmpty(this.routers);
        this.hasHistory = window.history && window.history.pushState;
        if (this.hasRouters && this.hasHistory) {
          Backbone.history.start({
            pushState: true
          });
        } else if (this.hasRouters) {
          handler = _.detect(Backbone.history.handlers, __bind(function(handler) {
            return handler.route.test(this.page);
          }, this));
          handler.callback(this.page);
        }
        return this.routers;
      } else {
        return false;
      }
    };
    App.prototype.setup = function() {};
    App.prototype.navigateTo = function(path) {
      path = cleanPath(path);
      if (this.hasHistory) {
        this.navigate(path);
        path = Backbone.history.getFragment();
        return this.navigate(path, true);
      } else {
        return this.navigate(path, true);
      }
    };
    App.prototype.navigate = function(path, trigger) {
      path = cleanPath(path);
      if (this.hasHistory) {
        return Backbone.history.navigate(path, trigger);
      } else {
        if (trigger) {
          return window.location = path;
        }
      }
    };
    return App;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  BackboneExt.Router = Backbone.Router.extend({
    initialize: function(options) {
      var methods, routeMethods;
      routeMethods = _.uniq(_.values(this.routes));
      methods = _.flatten([routeMethods, 'currentlyAt', 'navigateTo']);
      _.each(methods, __bind(function(method) {
        return _.bindAll(this, method);
      }, this));
      _.each(this.routes, __bind(function(method, path) {
        if (!path.match(/\?\*params$/)) {
          return this.route("" + path + "?*params", method, this[method]);
        }
      }, this));
      this.app = options.app;
      if (this.setup != null) {
        return this.setup();
      }
    },
    setCurrentView: function(view) {
      this.view = view;
      this.view.bind("navigate", this.navigateTo);
      this.view.bind("at", this.currentlyAt);
      return this.view;
    },
    currentlyAt: function(path, trigger) {
      return this.app.navigate(path, trigger);
    },
    navigateTo: function(path) {
      return this.app.navigateTo(path);
    },
    _parseParams: function(params) {
      var iterator;
      if (params) {
        iterator = function(object, keyvalue) {
          var parts;
          parts = keyvalue.split("=");
          object[parts[0]] = parts[1];
          return object;
        };
        return _.inject(params.split("&"), iterator, {}, this);
      } else {
        return [];
      }
    }
  });
}).call(this);
(function() {
  var methodMap, onSaveError, onSaveSuccess, onlySaveable;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  methodMap = {
    create: 'POST',
    update: 'PUT',
    "delete": 'DELETE',
    read: 'GET'
  };
  onSaveSuccess = function(onSuccess, model, options) {
    return function(response) {
      model.errors = {};
      if (model.set(model.parse(response), options)) {
        if (onSuccess) {
          return onSuccess(model, response);
        }
      } else {
        return false;
      }
    };
  };
  onSaveError = function(onError, model, options) {
    return function(response) {
      if ((response.status === 422) && (response.responseText != null) && !_.isEmpty(response.responseText)) {
        model.errors = JSON.parse(response.responseText);
      }
      if (onError != null) {
        return onError(model, response);
      } else {
        return model.trigger('error', model, response, options);
      }
    };
  };
  onlySaveable = function(model) {
    var attrs, iterator;
    if ((model.attrSaveable != null) && !_.isEmpty(model.attrSaveable)) {
      iterator = __bind(function(hash, v, k) {
        if (_.include(model.attrSaveable, k)) {
          hash[k] = v;
        }
        return hash;
      }, this);
      attrs = _.inject(model.attributes, iterator, {});
      return BackboneExt.Utilities.wrapAttributes(model, attrs);
    } else {
      return model.toJSON();
    }
  };
  BackboneExt.Model = Backbone.Model.extend({
    _railsModel: true,
    attrSaveable: [],
    errors: {},
    routes: {},
    parse: function(response) {
      return BackboneExt.Utilities.unwrapAttributes(this, response);
    },
    toJSON: function() {
      return BackboneExt.Utilities.wrapAttributes(this, _.clone(this.attributes));
    },
    toBackboneJSON: function() {
      return _.clone(this.attributes);
    },
    save: function(attrs, options) {
      var method, model, syncOptions;
      options || (options = {});
      if ((attrs != null) && this.set(attrs, options)) {
        model = this;
        method = this.isNew() ? 'create' : 'update';
        syncOptions = {
          success: onSaveSuccess(options.success, model, options),
          error: onSaveError(options.error, model, options)
        };
        (this.sync || Backbone.sync)(method, this, syncOptions);
        return this;
      } else {
        return false;
      }
    },
    sync: function(method, model, options) {
      var modelJSON, params, requestURL, type, urlMethod;
      type = methodMap[method];
      urlMethod = (method === 'read' && model.isNew() ? 'newURL' : 'url');
      modelJSON = method === 'create' || method === 'update' ? JSON.stringify(onlySaveable(model)) : void 0;
      if (model.authenticity_token != null) {
        modelJSON.authenticity_token = model.authenticity_token;
      }
      requestURL = _.isFunction(model[urlMethod]) ? model[urlMethod]() : model[urlMethod];
      if (requestURL != null) {
        params = {
          url: requestURL,
          type: type,
          contentType: 'application/json',
          data: modelJSON,
          dataType: 'json',
          processData: false,
          global: false,
          success: options.success,
          error: options.error
        };
        return $.ajax(params);
      } else {
        throw "A url could not be determined";
      }
    },
    isRails: function() {
      return this._railsModel;
    }
  });
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  BackboneExt.Collection = Backbone.Collection.extend({
    _railsModel: true,
    routes: {},
    parse: function(response) {
      var json, name;
      json = !_.isArray(response) ? (name = _.isFunction(this.pluralRailsName) ? this.pluralRailsName() : this.pluralRailsName, _.isArray(response[name]) ? (this.parsePagination(response), response[name]) : response) : response;
      return _.map(json, __bind(function(data) {
        return BackboneExt.Utilities.unwrapAttributes(this, data);
      }, this));
    },
    parsePagination: function(response) {
      this.pagination = {
        current: response.current,
        per_page: response.per_page,
        total: response.total_pages,
        entries: response.total_entries
      };
      return this.pagination;
    },
    pluralRailsName: function() {
      return "" + this.railsName + "s";
    },
    isRails: function() {
      return this._railsModel;
    }
  });
}).call(this);
(function() {
  var onAssociations;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __slice = Array.prototype.slice;
  onAssociations = function(method, names, associations) {
    if (!_.isEmpty(names)) {
      _.each(names, __bind(function(name) {
        return associations.config[name][method]();
      }, this));
    } else {
      _.each(associations.config, __bind(function(association, name) {
        return association[method]();
      }, this));
    }
    return this;
  };
  BackboneExt.Associations = (function() {
    function Associations(model) {
      this.model = model;
      _.bindAll(this, "store", "load", "associationLoaded");
      this.config = {};
      this.loaded = [];
      this.allLoaded = false;
    }
    Associations.prototype.store = function(type, name, options) {
      options.on = this.model;
      this.config[name] = (function() {
        switch (type) {
          case "belongsTo":
            return new BackboneExt.Associations.BelongsTo(name, options);
            break;
          case "hasMany":
            return new BackboneExt.Associations.HasMany(name, options);
            break;
          case "hasOne":
            return new BackboneExt.Associations.HasOne(name, options);
        }
      })();
      this.config[name].bind("loaded", this.associationLoaded);
      return this;
    };
    Associations.prototype.load = function() {
      var names;
      names = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.allLoaded = false;
      return onAssociations("load", names, this);
    };
    Associations.prototype.refresh = function() {
      var names;
      names = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return onAssociations("refresh", names, this);
    };
    Associations.prototype.associationLoaded = function(association) {
      var name;
      name = association.name;
      this.loaded.push(name);
      this.loaded = _.uniq(this.loaded);
      this.model.trigger("association:" + name + ":loaded", this.model[name], name);
      this.allLoaded = this.loaded.length === _.values(this.config).length;
      if (this.allLoaded) {
        return this.model.trigger("associations:loaded", this.model);
      }
    };
    return Associations;
  })();
  _.extend(BackboneExt.Associations.prototype, Backbone.Events);
}).call(this);
(function() {
  var checkOptions;
  checkOptions = function(name, options, type) {
    var needed;
    if (type == null) {
      throw "Association has no type";
    }
    needed = (function() {
      switch (type) {
        case "belongsTo":
          return "model";
        case "hasMany":
        case "hasOne":
          return "collection";
      }
    })();
    if ((needed != null) && !(options[needed] != null)) {
      throw "The " + type + " association " + name + " requires a '" + needed + "' option.";
    }
    options.type = type;
    return options;
  };
  BackboneExt.Associations.Base = (function() {
    function Base(name, options) {
      this.name = name;
      this.options = options;
      _.bindAll(this, "load", "refresh", "afterRefresh");
      this.options = checkOptions(this.name, this.options, this.type);
      this.loaded = false;
      this.model = this.options.on;
    }
    Base.prototype.load = function() {
      this.loaded = false;
      return this.refresh();
    };
    Base.prototype.afterRefresh = function() {
      this.loaded = true;
      this.trigger("loaded", this);
      return false;
    };
    Base.prototype._buildFromAttributes = function(attrs) {
      this.model.unset(this.name, {
        silent: true
      });
      this.afterRefresh();
      return this;
    };
    return Base;
  })();
  _.extend(BackboneExt.Associations.Base.prototype, Backbone.Events);
}).call(this);
(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  BackboneExt.Associations.BelongsTo = (function() {
    __extends(BelongsTo, BackboneExt.Associations.Base);
    function BelongsTo(name, options) {
      var _base;
      this.name = name;
      this.options = options;
      this.type = "BelongsTo";
      BelongsTo.__super__.constructor.call(this, this.name, this.options);
      (_base = this.options).key || (_base.key = "" + name + "_id");
    }
    BelongsTo.prototype.refresh = function() {
      var attrs, id;
      if (((attrs = _.clone(this.model.attributes[this.name])) != null) && !_.isEmpty(attrs)) {
        return this._buildFromAttributes(attrs);
      } else if ((id = this.model.attributes[this.options.key])) {
        return this._fetchModel(id);
      } else {
        this.model[this.name] = null;
        return this.afterRefresh();
      }
    };
    BelongsTo.prototype._fetchModel = function(id) {
      this.model[this.name] = new this.options['model']({
        'id': id
      });
      this.model[this.name].fetch({
        success: this.afterRefresh
      });
      return this;
    };
    BelongsTo.prototype._buildFromAttributes = function(attrs) {
      this.model[this.name] = new this.options['model'](attrs);
      return BelongsTo.__super__._buildFromAttributes.call(this, attrs);
    };
    return BelongsTo;
  })();
}).call(this);
(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  BackboneExt.Associations.HasMany = (function() {
    __extends(HasMany, BackboneExt.Associations.Base);
    function HasMany(name, options) {
      this.name = name;
      this.options = options;
      this.type = "HasMany";
      HasMany.__super__.constructor.call(this, this.name, this.options);
    }
    HasMany.prototype.refresh = function() {
      var attrs, id;
      if (((attrs = _.clone(this.model.attributes[this.name])) != null) && !_.isEmpty(attrs)) {
        return this._buildFromAttributes(attrs);
      } else if ((id = this.model.id)) {
        return this._fetchModel(id);
      } else {
        return this.afterRefresh();
      }
    };
    HasMany.prototype._fetchModel = function(id) {
      var args;
      if (!this.options.where) {
        this.options.where = {};
        this.options.where["" + this.model.railsName + "_id"] = id;
      }
      args = {
        where: (_.isFunction(this.options.where) ? this.options.where(this.model) : this.options.where)
      };
      this.model[this.name] = new this.options['collection']([], args);
      this.model[this.name].fetch({
        success: this.afterRefresh
      });
      return this;
    };
    HasMany.prototype._buildFromAttributes = function(attrs) {
      this.model[this.name] = new this.options['collection'](attrs);
      return HasMany.__super__._buildFromAttributes.call(this, attrs);
    };
    return HasMany;
  })();
}).call(this);
(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  BackboneExt.Associations.HasOne = (function() {
    __extends(HasOne, BackboneExt.Associations.Base);
    function HasOne(name, options) {
      this.name = name;
      this.options = options;
      this.type = "HasOne";
      HasOne.__super__.constructor.call(this, this.name, this.options);
    }
    HasOne.prototype.refresh = function() {
      var attrs, id;
      if (((attrs = _.clone(this.model.attributes[this.name])) != null) && !_.isEmpty(attrs)) {
        return this._buildFromAttributes(attrs);
      } else if ((id = this.model.id)) {
        return this._fetchModel(id);
      } else {
        return this.afterRefresh();
      }
    };
    HasOne.prototype.afterRefresh = function(collection, response) {
      this.model[this.name] = (collection != null) && !collection.isEmpty() ? collection.models[0] : null;
      return HasOne.__super__.afterRefresh.call(this);
    };
    HasOne.prototype._fetchModel = function(id) {
      var args, collection;
      if (!this.options.where) {
        this.options.where = {};
        this.options.where["" + this.model.railsName + "_id"] = id;
      }
      args = {
        limit: 1,
        where: (_.isFunction(this.options.where) ? this.options.where(this.model) : this.options.where)
      };
      collection = new this.options['collection']([], args);
      collection["" + this.model.railsName + "_id"] = id;
      this.model[this.name] = new collection['model']();
      return collection.fetch({
        success: this.afterRefresh
      });
    };
    HasOne.prototype._buildFromAttributes = function(attrs) {
      var collection;
      collection = new this.options['collection']();
      this.model[this.name] = new collection['model'](attrs);
      return HasOne.__super__._buildFromAttributes.call(this, attrs);
    };
    return HasOne;
  })();
}).call(this);
(function() {
  var defineAssociation;
  defineAssociation = function(object, type, name, options) {
    object._buildAssociations();
    object.associations.store(type, name, options);
    object[name] = null;
    return object;
  };
  BackboneExt.Helpers || (BackboneExt.Helpers = {});
  BackboneExt.Helpers.Associations = {
    _buildAssociations: function() {
      return this.associations || (this.associations = new BackboneExt.Associations(this));
    },
    belongsTo: function(name, options) {
      return defineAssociation(this, "belongsTo", name, options);
    },
    hasMany: function(name, options) {
      return defineAssociation(this, "hasMany", name, options);
    },
    hasOne: function(name, options) {
      return defineAssociation(this, "hasOne", name, options);
    },
    toJSON: function() {
      var attrs, iterator;
      iterator = function(attrs, options, name) {
        var assocAttrs, associationJSON;
        if (this[name] != null) {
          associationJSON = {};
          assocAttrs = BackboneExt.Utilities.unwrapAttributes(this[name], this[name].toJSON());
          attrs[name] = assocAttrs;
          return attrs;
        } else {
          return attrs;
        }
      };
      attrs = _.clone(this.attributes);
      if (this.associations != null) {
        attrs = _.inject(this.associations.config, iterator, attrs, this);
      }
      return BackboneExt.Utilities.wrapAttributes(this, attrs);
    }
  };
  _.extend(BackboneExt.Model.prototype, BackboneExt.Helpers.Associations);
}).call(this);
(function() {
  var _base;
  BackboneExt.Helpers || (BackboneExt.Helpers = {});
  (_base = BackboneExt.Helpers).Routes || (_base.Routes = {});
  BackboneExt.Helpers.Routes.Model = {
    url: function(options) {
      options || (options = {});
      if (options.format == null) {
        options.format = 'json';
      }
      if (!this.isNew()) {
        if (this.routes.show != null) {
          options.id = this.id;
          if (_.isFunction(this.routes.show)) {
            return this.routes.show(this, options);
          } else {
            return this.routes.show;
          }
        } else {
          return null;
        }
      } else {
        if (this.routes.index != null) {
          if (_.isFunction(this.routes.index)) {
            return this.routes.index(this, options);
          } else {
            return this.routes.index;
          }
        } else {
          return null;
        }
      }
    },
    newURL: function(options) {
      var _name;
      options || (options = {});
      if (options.format == null) {
        options.format = 'json';
      }
      options[_name = this.railsName] || (options[_name] = this.toBackboneJSON());
      if (this.routes["new"] != null) {
        if (_.isFunction(this.routes["new"])) {
          return this.routes["new"](this, options);
        } else {
          return this.routes["new"];
        }
      } else {
        return null;
      }
    }
  };
  _.extend(BackboneExt.Model.prototype, BackboneExt.Helpers.Routes.Model);
  BackboneExt.Helpers.Routes.Collection = {
    url: function(options) {
      var iterator, routeOptions, scopeOptions, urlOptions;
      options || (options = {});
      if (options.format == null) {
        options.format = 'json';
      }
      if (this.routes.index != null) {
        if (_.isFunction(this.routes.index)) {
          if (this.routes.belongsTo != null) {
            iterator = function(hash, name) {
              var idMethod;
              idMethod = "" + name + "_id";
              hash[idMethod] = this[idMethod];
              return hash;
            };
            routeOptions = _.inject(this.routes.belongsTo, iterator, {}, this);
            options = _.extend(routeOptions, options || {});
          }
          scopeOptions = {};
          if (this.where != null) {
            scopeOptions.where || (scopeOptions.where = this.where);
          }
          if (this.limit != null) {
            scopeOptions.limit || (scopeOptions.limit = this.limit);
          }
          if (this.order != null) {
            scopeOptions.order || (scopeOptions.order = this.order);
          }
          if (this.group != null) {
            scopeOptions.group || (scopeOptions.group = this.group);
          }
          urlOptions = _.extend({}, this.params || {}, scopeOptions, options);
          return this.routes.index(urlOptions);
        } else {
          return this.routes.index;
        }
      } else {
        return null;
      }
    }
  };
  _.extend(BackboneExt.Collection.prototype, BackboneExt.Helpers.Routes.Collection);
}).call(this);
//
