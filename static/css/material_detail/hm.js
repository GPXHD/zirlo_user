(function(){var h={},mt={},c={id:"bff7e1fc5b2ac418f5d9e0c5c7414a11",dm:["atsteel.com.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'FD95F5EAC369F771',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,u=!0,v=null,w=!1;mt.cookie={};mt.cookie.set=function(a,b,g){var d;g.Q&&(d=new Date,d.setTime(d.getTime()+g.Q));document.cookie=a+"="+b+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(d?"; expires="+d.toGMTString():"")+(g.Ec?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:v};
mt.cookie.ec=function(a,b){try{var g="Hm_ck_"+ +new Date;mt.cookie.set(g,"is-cookie-enabled",{domain:a,path:b,Q:r});var d="is-cookie-enabled"===mt.cookie.get(g)?"1":"0";mt.cookie.set(g,"",{domain:a,path:b,Q:-1});return d}catch(e){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Wa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.H=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.h=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.G=function(a,b){var g=w;if(a==v||!mt.lang.d(a,"Array")||b===r)return g;if(Array.prototype.indexOf)g=-1!==a.indexOf(b);else for(var d=0;d<a.length;d++)if(a[d]===b){g=u;break}return g};mt.url={};mt.url.m=function(a,b){var g=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return g?g[3]:v};
mt.url.Ac=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:v};mt.url.Ib=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):v};mt.url.L=function(a){return(a=mt.url.Ib(a))?a.replace(/:\d+$/,""):a};mt.url.ua=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};
(function(){var a=mt.lang,b=mt.url;mt.f={};mt.f.Ra=function(a){return document.getElementById(a)};mt.f.sa=function(a){if(!a)return v;try{a=String(a);if(0===a.indexOf("!HMCQ!"))return a;if(0===a.indexOf("!HMCC!"))return document.querySelector(a.substring(6,a.length));for(var d=a.split(">"),e=document.body,b=d.length-1;0<=b;b--)if(-1<d[b].indexOf("#")){var f=d[b].split("#")[1];(e=document.getElementById(f))||(e=document.getElementById(decodeURIComponent(f)));d=d.splice(b+1,d.length-(b+1));break}for(a=
0;e&&a<d.length;){var m=String(d[a]).toLowerCase();if(!("html"===m||"body"===m)){var b=0,p=d[a].match(/\[(\d+)\]/i),f=[];if(p)b=p[1]-1,m=m.split("[")[0];else if(1!==e.childNodes.length){for(var s=0,t=0,q=e.childNodes.length;t<q;t++){var y=e.childNodes[t];1===y.nodeType&&y.nodeName.toLowerCase()===m&&s++;if(1<s)return v}if(1!==s)return v}for(s=0;s<e.childNodes.length;s++)1===e.childNodes[s].nodeType&&e.childNodes[s].nodeName.toLowerCase()===m&&f.push(e.childNodes[s]);if(!f[b])return v;e=f[b]}a++}return e}catch(k){return v}};
mt.f.ua=function(a,d){var b=[],l=[];if(!a)return l;for(;a.parentNode!=v;){for(var f=0,m=0,p=a.parentNode.childNodes.length,s=0;s<p;s++){var t=a.parentNode.childNodes[s];if(t.nodeName===a.nodeName&&(f++,t===a&&(m=f),0<m&&1<f))break}if((p=""!==a.id)&&d){b.unshift("#"+encodeURIComponent(a.id));break}else p&&(p="#"+encodeURIComponent(a.id),p=0<b.length?p+">"+b.join(">"):p,l.push(p)),b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<f?"["+m+"]":""));a=a.parentNode}l.push(b.join(">"));return l};
mt.f.va=function(a){return(a=mt.f.ua(a,u))&&a.length?String(a[0]):""};mt.f.Mb=function(a){return mt.f.ua(a,w)};mt.f.Cb=function(a){var d;for(d="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return v};mt.f.Eb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.Kb=function(a){var d={top:0,left:0};if(!a)return d;var b=mt.f.Eb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect());return{top:d.top+(window.pageYOffset||b.scrollTop)-
(b.clientTop||0),left:d.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};mt.f.getAttribute=function(a,d){var b=a.getAttribute&&a.getAttribute(d)||v;if(!b&&a.attributes&&a.attributes.length)for(var l=a.attributes,f=l.length,m=0;m<f;m++)l[m].nodeName===d&&(b=l[m].nodeValue);return b};mt.f.T=function(a){var d="document";a.tagName!==r&&(d=a.tagName);return d.toLowerCase()};mt.f.Pb=function(b){var d="";b.textContent?d=a.trim(b.textContent):b.innerText&&(d=a.trim(b.innerText));d&&(d=d.replace(/\s+/g,
" ").substring(0,255));return d};mt.f.S=function(g,d){var e;a.H(g)&&0===String(g).indexOf("!HMCQ!")?(e=String(g),e=b.m(document.location.href,e.substring(6,e.length))):a.H(g)||(e=mt.f.T(g),"input"===e&&d&&("button"===g.type||"submit"===g.type)?e=a.trim(g.value)||"":"input"===e&&!d&&"password"!==g.type?e=a.trim(g.value)||"":"img"===e?(e=mt.f.getAttribute,e=e(g,"alt")||e(g,"title")||e(g,"src")):e="body"===e||"html"===e?["(hm-default-content-for-",e,")"].join(""):mt.f.Pb(g));return String(e||"").substring(0,
255)};(function(){(mt.f.cb=function(){function a(){if(!a.ea){a.ea=u;for(var d=0,b=l.length;d<b;d++)l[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var b=w,l=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,w);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!b)if(b=u,"complete"===document.readyState)a.ea=u;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var l=w;try{l=window.frameElement==v}catch(p){}document.documentElement.doScroll&&l&&d()}})();return function(d){a.ea?d():l.push(d)}}()).ea=w})();return mt.f})();mt.event={};
mt.event.e=function(a,b,g){a.attachEvent?a.attachEvent("on"+b,function(d){g.call(a,d)}):a.addEventListener&&a.addEventListener(b,g,w)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};
(function(){var a=mt.event;mt.g={};mt.g.Aa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.Jb=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.g.bc=function(){try{return!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&"undefined"!==typeof document.body.style.webkitFilter&&!window.chrome}catch(a){return w}};mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();
mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.hc=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.U=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.M=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.lb=
0;mt.g.Rb=function(){var a=document;return parseInt(window.innerWidth||a.documentElement.clientWidth||a.body.offsetWidth||0,10)};mt.g.orientation=0;(function(){function b(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a;mt.g.lb=mt.g.Rb()}b();a.e(window,"orientationchange",b)})();return mt.g})();mt.o={};mt.o.parse=function(a){return(new Function("return ("+a+")"))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=g[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===v)return"null";if(d instanceof Array){var e=["["],g=d.length,f,m,p;for(m=0;m<g;m++)switch(p=d[m],typeof p){case "undefined":case "function":case "unknown":break;default:f&&e.push(","),e.push(mt.o.stringify(p)),f=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';f=["{"];m=mt.o.stringify;for(g in d)if(Object.prototype.hasOwnProperty.call(d,g))switch(p=
d[g],typeof p){case "undefined":case "unknown":case "function":break;default:e&&f.push(","),e=1,f.push(m(g)+":"+m(p))}f.push("}");return f.join("")}}}();mt.localStorage={};mt.localStorage.la=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return w}return u};
mt.localStorage.set=function(a,b,g){var d=new Date;d.setTime(d.getTime()+g||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.la()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(e){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),g=a.substring(0,b)-0;if(g&&g>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.la())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(d){}return v};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.la())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(g){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):v}catch(b){return v}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.hb={};mt.hb.log=function(a,b){var g=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=g;g.onload=function(){g.onload=v;g=window[d]=v;b&&b(a)};g.src=a};mt.Ha={};
mt.Ha.Qb=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return a};
mt.Ha.zc=function(a,b,g,d,e){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+g+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(e||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+g+'" height="'+d+'" src="'+b+'" flashvars="'+(e||"")+'" allowscriptaccess="always" /></object>'};
h.D={Bc:"http://tongji.baidu.com/hm-web/welcome/ico",bb:"hm.baidu.com/hm.gif",rb:/^(tongji|hmcdn).baidu.com$/,jb:"tongji.baidu.com",Vb:"hmmd",Wb:"hmpl",tc:"utm_medium",Ub:"hmkw",vc:"utm_term",Sb:"hmci",sc:"utm_content",Xb:"hmsr",uc:"utm_source",Tb:"hmcu",rc:"utm_campaign",N:0,J:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",Ba:"https:",Cc:0,xc:6E5,Dc:6E5,ic:5E3,yc:5,oa:1024,wc:1,Da:2147483647,ib:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
V:u,Oa:["a","input","button"],La:{id:"data-hm-id",aa:"data-hm-class",$:"data-hm-xpath",content:"data-hm-content",ha:"data-hm-tag",link:"data-hm-link"},Na:"data-hm-enabled",Ma:"data-hm-disabled",fc:"https://hmcdn.baidu.com/static/tongji/plugins/",ab:["UrlChangeTracker"]};(function(){var a={F:{},e:function(a,g){this.F[a]=this.F[a]||[];this.F[a].push(g)},K:function(a,g){this.F[a]=this.F[a]||[];for(var d=this.F[a].length,e=0;e<d;e++)this.F[a][e](g)}};return h.z=a})();
(function(){function a(a,d){var e=document.createElement("script");e.charset="utf-8";b.d(d,"Function")&&(e.readyState?e.onreadystatechange=function(){if("loaded"===e.readyState||"complete"===e.readyState)e.onreadystatechange=v,d()}:e.onload=function(){d()});e.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(e,l)}var b=mt.lang;return h.load=a})();
(function(){var a=mt.cookie,b=mt.localStorage,g=mt.sessionStorage,d={getData:function(d){try{return a.get(d)||g.get(d)||b.get(d)}catch(l){}},setData:function(e,l,f){try{a.set(e,l,{domain:d.R(),path:d.ca(),Q:f}),f?b.set(e,l,f):g.set(e,l)}catch(m){}},removeData:function(e){try{a.set(e,"",{domain:d.R(),path:d.ca(),Q:-1}),g.remove(e),b.remove(e)}catch(l){}},W:function(a,d){a="."+a.replace(/:\d+/,"");d="."+d.replace(/:\d+/,"");var b=a.indexOf(d);return-1<b&&b+d.length===a.length},fa:function(a,d){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(d)},R:function(){for(var a=document.location.hostname,b=0,f=c.dm.length;b<f;b++)if(d.W(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ca:function(){for(var a=0,b=c.dm.length;a<b;a++){var f=c.dm[a];if(-1<f.indexOf("/")&&d.fa(document.location.href,f))return f.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.pa=d})();
(function(){var a=mt.lang,b=mt.o,g=h.pa,d={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},e={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},l=["session","user"],f="Hm_up_"+c.id,m={init:function(){m.$b()},$b:function(){try{var e=b.parse(decodeURIComponent(g.getData(f)));a.d(e,"Object")&&(d.user=e)}catch(s){}},A:function(a){var b={};d[a]!==r&&(b=d[a]);a=this.wa();for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},wa:function(){for(var a={},b,e=l.length-
1;0<=e;e--){b=d[l[e]];for(var q in b)b.hasOwnProperty(q)&&(a[q]=b[q])}return a},setProperty:function(e,f,g){var q=d[e];if(a.d(q,"Object")&&a.d(f,"Object")){for(var y in f)if(f.hasOwnProperty(y)){var k=a.h(String(y));if(g||!/^_/.test(k)&&!/_$/.test(k)||/^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)){var n=f[y];if(n==v)delete q[k];else{if(a.d(n,"Object")||a.d(n,"Array"))n=b.stringify(n);n=a.h(String(n));m.dc(e,k,n)&&(q[k]={value:n,scope:m.Ta(e)})}}}"user"===e&&m.Fa()}},s:function(b){b!==r&&("userId"===
b&&a.d(d.user,"Object")?(delete d.user.uid_,m.Fa()):"user"===b&&a.d(d.user,"Object")?(b=d.user.uid_,d.user=b===r?{}:{uid_:b},m.Fa()):d[b]!==r&&(d[b]={}))},Fa:function(){try{g.setData(f,encodeURIComponent(b.stringify(d.user)),c.age)}catch(a){}},dc:function(a,b,e){var q=u,f=d[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(e)).length)q=w;else{var k=f[b];f[b]={value:e,scope:m.Ta(a)};a=m.O(m.A(a));2048<encodeURIComponent(a).length&&(k!==r?f[b]=k:delete f[b],q=w)}return q},
O:function(a){var d=[],b,e;for(e in a)a.hasOwnProperty(e)&&(b=[e,a[e].value],(1===a[e].scope||2===a[e].scope)&&b.push(a[e].scope),d.push(b.join("*")));return d.join("!")},Ta:function(a){a=e[a];return a!==r?a:e.others}};return h.P=m})();
(function(){var a=mt.f,b=mt.lang,g=mt.o,d=h.z,e=h.P,l=e.O;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var f={$a:{},ia:{},init:function(){for(var a,d=0;d<c.cptrk.length;d++)try{if(a=g.parse(decodeURIComponent(String(c.cptrk[d]))),a.a!==r&&b.d(a.a,"Object")){var e=a.a,l;for(l in e)e.hasOwnProperty(l)&&(f.ia[l]=String(e[l]))}}catch(q){}},Za:function(){var d,b,e;for(e in f.ia)if(f.ia.hasOwnProperty(e)&&f.$a[e]===r&&(d=f.ia[e],d=a.sa(d)))b=b===r?{}:b,b[e]=a.S(d,w),f.$a[e]=u;return b},ya:function(){var a=
f.Za();a&&f.kc(a)},Zb:function(){"MutationObserver"in window?(new MutationObserver(f.ya)).observe(document.body,{childList:u,subtree:u}):window.setInterval(f.ya,15E3)},kc:function(a){if(b.d(a,"Object")){e.setProperty("pageview",a);a=h.c.b.p;var d=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=l(e.A("pageview"));h.c.i();h.c.b.p=a;h.c.b.ep=d;e.s("pageview")}}};f.init();d.e("pv-b",function(){var a=f.Za();a&&e.setProperty("pageview",a)});f.Zb();a.cb(f.ya)}})();
(function(){var a=mt.lang,b=mt.f,g={ba:function(a,e){return function(l){var f=l.target||l.srcElement;if(f){var m=f.getAttribute(a.ka);l=l.clientX+":"+l.clientY;if(m&&m===l)f.removeAttribute(a.ka);else if(e&&0<e.length&&(f=b.Mb(f))&&f.length)if(m=f.length,l=f[f.length-1],1E4>m*l.split(">").length)for(l=0;l<m;l++)g.gb(a,f[l]);else g.gb(a,l)}}},gb:function(d,b){for(var g={},f=String(b).split(">").length,m=0;m<f;m++)g[b]="",b=b.substring(0,b.lastIndexOf(">"));d&&(a.d(d,"Object")&&d.Pa)&&d.Pa(g)},gc:function(a,
b){return function(g){(g.target||g.srcElement).setAttribute(a.ka,g.clientX+":"+g.clientY);a&&a.w&&(b?a.w(b):a.w("#"+encodeURIComponent(this.id),g.type))}}};return h.ra=g})();
(function(){var a=mt.f,b=mt.o,g=mt.event,d=mt.lang,e=h.D,l=h.ra,f=h.P,m=f.O,p={ka:"HM_ce",mb:function(){if(c.cetrk&&c.cetrk.length){g.e(document,"click",l.ba(p,c.cetrk));for(var d=0,e=c.cetrk.length;d<e;d++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(y){f={}}var k=f.p||"";-1===k.indexOf(">")&&(0===k.indexOf("#")&&(k=k.substring(1)),(k=a.Ra(k))&&g.e(k,"click",l.gc(p,f)))}}},Pa:function(a){if(c.cetrk&&c.cetrk.length)for(var d=0,e=c.cetrk.length;d<e;d++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(k){f=
{}}var n=p.Gb(f.p,a);n&&p.w(f,n)}},Gb:function(a,b){a=String(a);if(0<a.indexOf("*")){var d=RegExp("^"+a.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\*/,"\\d+")+"$"),e;for(e in b)if(b.hasOwnProperty(e)&&d.test(e))return e;return v}return b.hasOwnProperty(a)?a:v},w:function(b,e){h.c.b.et=7;var q=b&&b.k||"",q=d.h(q),g={};if(b&&b.a&&d.d(b.a,"Object")){var k=b.a,n;for(n in k)if(k.hasOwnProperty(n)){var x=p.Nb(k[n]||"",e),x=x?a.S(x,w):"";g[n]=x}}g=p.Db(g,e||b&&b.p);g._iden=q;f.setProperty("customEvent",
g);h.c.b.ep="";h.c.b.p=m(f.A("customEvent"));h.c.i();h.c.b.p="";f.s("customEvent")},Db:function(b,d){var f=a.sa(d),g=e.La;f&&(c.aet&&c.aet.length?(b.ei_=a.getAttribute(f,g.id)||a.getAttribute(f,"id")||"",b.ec_=a.getAttribute(f,g.aa)||a.getAttribute(f,"class")||"",b.ex_=a.getAttribute(f,g.$)||a.va(f),b.en_=a.getAttribute(f,g.content)||a.S(f,u),b.et_=a.getAttribute(f,g.ha)||a.T(f),b.el_=a.getAttribute(f,g.link)||a.getAttribute(f,"href")||""):(b.ex_=a.getAttribute(f,g.$)||a.va(f),b.en_=a.getAttribute(f,
g.content)||a.S(f,u)));return b},Nb:function(b,d){b=String(b);d=String(d);if(0<b.indexOf("*")){var e=/.*\[(\d+)\]$/.exec(d);b=b.replace("*",e?e[1]:"1")}return a.sa(b)}};h.z.e("pv-b",p.mb);return p})();
(function(){var a=mt.lang,b=mt.f,g=mt.event,d=mt.g,e=h.D,l=h.z,f=h.P,m=f.O,p=+new Date,s=[],t={ba:function(){return function(d){if(h.c&&h.c.V&&c.aet&&c.aet.length){var f=d.target||d.srcElement;if(f){var k=h.c.Oa,n=b.getAttribute(f,e.Na)!=v?u:w;if(b.getAttribute(f,e.Ma)==v)if(n)t.ma(t.ta(f,d));else{var x=b.T(f);if(a.G(k,"*")||a.G(k,x))t.ma(t.ta(f,d));else for(;f.parentNode!=v;){var n=f.parentNode,x=b.T(n),z="a"===x&&a.G(k,"a")?u:w,x="button"===x&&a.G(k,"button")?u:w,A=b.getAttribute(n,e.Na)!=v?u:w;
if(b.getAttribute(n,e.Ma)==v&&(z||x||A)){t.ma(t.ta(n,d));break}f=f.parentNode}}}}}},ta:function(f,g){var k={},n=e.La;k.id=b.getAttribute(f,n.id)||b.getAttribute(f,"id")||"";k.aa=b.getAttribute(f,n.aa)||b.getAttribute(f,"class")||"";k.$=b.getAttribute(f,n.$)||b.va(f);k.content=b.getAttribute(f,n.content)||b.S(f,u);k.ha=b.getAttribute(f,n.ha)||b.T(f);k.link=b.getAttribute(f,n.link)||b.getAttribute(f,"href")||"";k.type=g.type||"click";n=a.Wa(f.offsetTop)?f.offsetTop:0;"click"===g.type?n=d.Aa?g.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.Ya&&g.Ya.changedTouches)&&(n=g.Ya.changedTouches[0].pageY);k.qc=n;n=this.Fb(g);k.Ca=n.Ca||0;k.Ea=n.Ea||0;k.Ka=n.Ka||0;k.xa=n.xa||0;k.Ia=n.Ia||"b";return k},Fb:function(f){var e=f.target||f.srcElement,g;if(d.Aa){var n=Math.max(document.documentElement.scrollTop,document.body.scrollTop);g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);g=f.clientX+g;f=f.clientY+n}else g=f.pageX,
f=f.pageY;var x=n=0,z=0,A=0;if(e&&(n=e.offsetWidth||e.clientWidth,x=e.offsetHeight||e.clientHeight,A=b.Kb(e),z=A.left,A=A.top,a.d(e.getBBox,"Function")&&(x=e.getBBox(),n=x.width,x=x.height),"html"===(e.tagName||"").toLowerCase()))n=Math.max(n,e.clientWidth),x=Math.max(x,e.clientHeight);return{Ca:Math.round(100*((g-z)/n)),Ea:Math.round(100*((f-A)/x)),Ka:n,xa:x,Ia:("a"===(e.tagName||"").toLowerCase()?e:b.Cb(e))?"a":"b"}},ma:function(b){var d=a.h;b=[+new Date-(h.c.X!==r?h.c.X:p),d(b.id),d(b.aa),d(b.ha),
d(b.$),d(b.link),d(b.content),b.type,b.qc,b.Ca,b.Ea,b.Ka,b.xa,b.Ia].join("*");t.na(b);a.d(this.Z(),"Function")&&this.Z()()},na:function(a){a.length>e.oa||(encodeURIComponent(s.join("!")+a).length>e.oa&&(t.w(s.join("!")),s=[]),s.push(a))},w:function(a){h.c.b.et=5;h.c.b.ep=a;h.c.b.p=m(f.A("autoEventTracking"));h.c.i();h.c.b.p=""},Z:function(){return function(){s&&s.length&&(t.w(s.join("!")),s=[])}}};a.H(c.aet)&&""!==c.aet&&l.e("pv-b",function(){g.e(document,"click",t.ba());"ontouchend"in document&&
g.e(window,"touchend",t.ba());g.e(window,"unload",t.Z())});return t})();
(function(){var a=mt.lang,b=mt.event,g=mt.g,d=h.D,e=h.z,l=+new Date,f=[],m=v,p={pb:function(){a.H(c.aet)&&""!==c.aet&&setInterval(p.fb,d.ic)},fb:function(){var a=g.U()+g.M();0<a-h.c.b.vl&&(h.c.b.vl=a)}},s={yb:function(){return function(){h.c&&(h.c.V&&c.aet&&c.aet.length)&&(window.clearTimeout(m),m=window.setTimeout(function(){s.ob(g.U()+g.M())},150))}},ob:function(a){s.na([+new Date-(h.c.X!==r?h.c.X:l),a].join("*"))},na:function(a){if(encodeURIComponent(f.join("!")+a).length>d.oa||3<f.length)s.w(f.join("!")),
f=[];f.push(a)},w:function(a){p.fb();h.c.b.et=6;h.c.b.vh=g.M();h.c.b.ep=a;h.c.i()},Z:function(){return function(){f&&f.length&&(s.w(f.join("!")),f=[])}}};a.H(c.aet)&&""!==c.aet&&e.e("pv-b",function(){b.e(window,"scroll",s.yb());b.e(window,"unload",s.Z());p.pb()});return s})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.qa.Lb()+","+h.qa.Hb();h.c.b.hca=c.hca;h.c.i()}}function b(){clearTimeout(z);var a;n&&(a="visible"==document[n]);x&&(a=!document[x]);m="undefined"==typeof a?u:a;if((!f||!p)&&m&&s)k=u,q=+new Date;else if(f&&p&&(!m||!s))k=w,y+=+new Date-q;f=m;p=s;z=setTimeout(b,100)}function g(a){var n=document,b="";if(a in n)b=a;else for(var d=["webkit","ms","moz","o"],f=0;f<d.length;f++){var e=d[f]+a.charAt(0).toUpperCase()+a.slice(1);
if(e in n){b=e;break}}return b}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))s="focus"==a.type||"focusin"==a.type?u:w,b()}var e=mt.event,l=h.z,f=u,m=u,p=u,s=u,t=+new Date,q=t,y=0,k=u,n=g("visibilityState"),x=g("hidden"),z;b();(function(){var a=n.replace(/[vV]isibilityState/,"visibilitychange");e.e(document,a,b);e.e(window,"pageshow",b);e.e(window,"pagehide",b);"object"==typeof document.onfocusin?(e.e(document,"focusin",d),e.e(document,"focusout",d)):(e.e(window,
"focus",d),e.e(window,"blur",d))})();h.qa={Lb:function(){return+new Date-t},Hb:function(){return k?+new Date-q+y:y}};l.e("pv-b",function(){e.e(window,"unload",a())});l.e("duration-send",a());l.e("duration-done",function(){q=t=+new Date;y=0});return h.qa})();
(function(){var a=mt.lang,b=h.D,g=h.load,d={Yb:function(d){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var l=h.c.R();g([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),d)}},pc:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.wb=d})();
(function(){function a(a,b,d,f){if(!(a===r||b===r||f===r)){if(""===a)return[b,d,f].join("*");a=String(a).split("!");for(var e,g=w,k=0;k<a.length;k++)if(e=a[k].split("*"),String(b)===e[0]){e[1]=d;e[2]=f;a[k]=e.join("*");g=u;break}g||a.push([b,d,f].join("*"));return a.join("!")}}function b(a){for(var f in a)if({}.hasOwnProperty.call(a,f)){var e=a[f];d.d(e,"Object")||d.d(e,"Array")?b(e):a[f]=String(e)}}var g=mt.url,d=mt.lang,e=mt.o,l=mt.g,f=h.D,m=h.z,p=h.wb,s=h.load,t=h.pa,q=h.P,y=q.O,k={Y:[],ga:0,Xa:w,
C:{Ja:"",page:""},init:function(){k.j=0;q.init();m.e("pv-b",function(){k.xb();k.zb()});m.e("pv-d",function(){k.Ab();k.C.page=""});m.e("stag-b",function(){h.c.b.api=k.j||k.ga?k.j+"_"+k.ga:"";h.c.b.ct=[decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),k.C.Ja,k.C.page].join("!")});m.e("stag-d",function(){h.c.b.api=0;k.j=0;k.ga=0})},xb:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var n=arguments[b];
d.d(n,"Array")&&(a.cmd[a.id].push(n),"_setAccount"===n[0]&&(1<n.length&&/^[0-9a-f]{32}$/.test(n[1]))&&(n=n[1],a.id=n,a.cmd[n]=a.cmd[n]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},zb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order)$/,f=0,e=b.length;f<e;f++){var g=b[f];d.test(g[0])?k.Y.push(g):k.Ga(g)}a.cmd[c.id]={push:k.Ga}},Ab:function(){if(0<k.Y.length)for(var a=0,b=k.Y.length;a<b;a++)k.Ga(k.Y[a]);k.Y=v},Ga:function(a){var b=
a[0];if(k.hasOwnProperty(b)&&d.d(k[b],"Function"))k[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(k.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||u===a))k.j|=2,h.c.Ua=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){k.j|=4;h.c.b.sn=h.c.Sa();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=l.U()+l.M();h.c.b.kb=0;h.c.za?(h.c.b.nv=0,h.c.b.st=4):h.c.za=u;var b=h.c.b.u,d=h.c.b.su;h.c.b.u=f.protocol+"//"+document.location.host+a[1];k.Xa||(h.c.b.su=
document.location.href);h.c.b.p=y(q.A("pageview"));h.c.i();h.c.b.u=b;h.c.b.su=d;h.c.b.p="";h.c.X=+new Date;q.s("pageview")}},_trackEvent:function(a){2<a.length&&(k.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=d.h(a[1])+"*"+d.h(a[2])+(a[3]?"*"+d.h(a[3]):"")+(a[4]?"*"+d.h(a[4]):""),h.c.b.p=y(q.wa()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],f=a[4]||3;if(0<b&&6>b&&0<f&&4>f){k.ga++;for(var e=(h.c.b.cv||"*").split("!"),g=e.length;g<b-1;g++)e.push("*");e[b-1]=f+"*"+d.h(a[2])+
"*"+d.h(a[3]);h.c.b.cv=e.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?t.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):t.removeData("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==r&&b!==r){var e=decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),e=a(e,f,1,b);t.setData("Hm_ct_"+c.id,encodeURIComponent(e),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==r&&b!==r){var e=
k.C.Ja,e=a(e,f,2,b);k.C.Ja=e}}},_setPageTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==r&&b!==r){var e=k.C.page,e=a(e,f,3,b);k.C.page=e}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?f.protocol+"//"+window.location.host+a[1]:a[1],k.Xa=u)},_trackOrder:function(a){a=a[1];d.d(a,"Object")&&(b(a),k.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=e.stringify(a),h.c.b.p=y(q.wa()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])k.j|=32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];p.Yb();p.pc(a)},_setUserId:function(a){a=a[1];if(a!==r&&(d.H(a)||d.Wa(a))){var b=q.A("user").uid_;if(!(b&&b.value===d.h(String(a)))){var b=h.c.b.p,f=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+d.h(String(a));h.c.i();var e={};e.uid_=a;q.setProperty("user",e,u);h.c.b.p=b;h.c.b.ep=f}}},_clearUserId:function(a){1<a.length&&u===a[1]&&q.s("userId")},_setUserProperty:function(a){a=a[1];
d.d(a,"Object")&&q.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&u===a[1]&&q.s("user")},_setSessionProperty:function(a){a=a[1];d.d(a,"Object")&&q.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&u===a[1]&&q.s("session")},_setPageviewProperty:function(a){a=a[1];d.d(a,"Object")&&q.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&u===a[1]&&q.s("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];d.d(a,"Object")&&q.setProperty("autoEventTracking",
a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&u===a[1]&&q.s("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.Va=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.V=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):m.K("duration-send");m.K("duration-done")},_require:function(a){1<a.length&&(a=a[1],f.rb.test(g.L(a))&&s(a))},_providePlugin:function(a){if(1<
a.length){var b=window._hmt,e=a[1];a=a[2];if(d.G(f.ab,e)&&d.d(a,"Function")&&(b.plugins=b.plugins||{},b.I=b.I||{},b.plugins[e]=a,b.B=b.B||[],a=b.B.slice(),e&&a.length&&a[0][1]===e))for(var g=0,k=a.length;g<k;g++){var l=a[g][2]||{};if(b.plugins[e]&&!b.I[e])b.I[e]=new b.plugins[e](l),b.B.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],g=a[2]||{};if(d.G(f.ab,e))if(b.plugins=b.plugins||{},b.I=b.I||{},b.plugins[e]&&!b.I[e])b.I[e]=new b.plugins[e](g);else{b.B=b.B||
[];for(var g=0,l=b.B.length;g<l;g++)if(b.B[g][1]===e)return;b.B.push(a);k._require([v,f.fc+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];d.d(a,"Object")||(a={});a._iden=b;q.setProperty("customEvent",a);h.c.b.et=7;h.c.b.ep="";h.c.b.p=y(q.A("customEvent"));h.c.i();h.c.b.p="";q.s("customEvent")}}};k.init();h.tb=k;return h.tb})();
(function(){var a=h.z;c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),a.e("pv-b",function(){""!==window.location.hash&&(h.c.b.u=window.location.href)}))})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Va=this.Ua=u,this.V=k.V,this.Oa=e.H(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.za=w,this.init())}var b=mt.url,g=mt.hb,d=mt.Ha,e=mt.lang,l=mt.cookie,f=mt.g,m=mt.sessionStorage,p=mt.o,s=mt.event,t=h.pa,q=h.P,y=q.O,k=h.D,n=h.load,x=h.z;a.prototype={W:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},fa:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},da:function(a){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.fa(a,c.dm[d]))return u}else{var e=b.L(a);if(e&&this.W(e,c.dm[d]))return u}return w},R:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.W(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ca:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.fa(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Ob:function(){if(!document.referrer)return k.J-k.N>c.vdur?1:4;var a=w;this.da(document.referrer)&&this.da(document.location.href)?a=u:(a=b.L(document.referrer),a=this.W(a||"",document.location.hostname));return a?k.J-k.N>c.vdur?1:4:3},nc:function(){var a,b,d,e,f,g;k.N=t.getData("Hm_lpvt_"+c.id)||0;13===k.N.length&&(k.N=Math.round(k.N/1E3));b=this.Ob();a=4!==b?1:0;if(g=t.getData("Hm_lvt_"+c.id)){e=g.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/
1E3));for(;2592E3<k.J-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(k.J);4<e.length;)e.shift();g=e.join(",");e=e[e.length-1]}else g=k.J,e="",f=1;this.ac()?(t.setData("Hm_lvt_"+c.id,g,c.age),t.setData("Hm_lpvt_"+c.id,k.J),d=l.ec(this.R(),this.ca())):this.Bb();if(0===c.nv&&this.da(document.location.href)&&(""===document.referrer||this.da(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=e;this.b.lv=f},ac:function(){var a=b.L(document.location.href);return!e.G("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
a)},Bb:function(){for(var a=document.cookie.split(";"),b=0;b<a.length;b++){var d=a[b].split("=");d.length&&/Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0]))&&t.removeData(d[0]);d.length&&/Hm_ck_[0-9]{13}/.test(String(d[0]))&&t.removeData(d[0])}},mc:function(){for(var a=[],b=this.b.et,d=0,e=k.ib.length;d<e;d++){var f=k.ib[d],g=this.b[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}return a.join("&")},oc:function(){this.nc();
this.b.si=c.id;this.b.sn=this.Sa();this.b.su=document.referrer;this.b.ds=f.hc;this.b.cl=f.colorDepth+"-bit";this.b.ln=String(f.language).toLowerCase();this.b.ja=f.javaEnabled?1:0;this.b.ck=f.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=d.Qb();this.b.v="1.2.74";this.b.cv=decodeURIComponent(t.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=f.U()+f.M();var a=document.location.href;this.b.cm=b.m(a,k.Vb)||"";this.b.cp=b.m(a,k.Wb)||b.m(a,k.tc)||"";this.b.cw=b.m(a,
k.Ub)||b.m(a,k.vc)||"";this.b.ci=b.m(a,k.Sb)||b.m(a,k.sc)||"";this.b.cf=b.m(a,k.Xb)||b.m(a,k.uc)||"";this.b.cu=b.m(a,k.Tb)||b.m(a,k.rc)||"";f.bc()&&(this.b.u=window.location.href)},init:function(){try{this.oc(),0===this.b.nv?this.lc():this.Qa(),h.c=this,this.vb(),this.ub(),x.K("pv-b"),this.jc()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));g.log(k.Ba+"//"+k.bb+"?"+b.join("&"))}},
jc:function(){function a(){x.K("pv-d")}this.Ua?(this.za=u,this.b.et=0,this.b.ep="",this.b.p=y(q.A("pageview")),this.b.vl=f.U()+f.M(),this.i(a),this.b.p=""):a();this.X=+new Date;q.s("pageview")},i:function(a){if(this.Va){var b=this;b.b.rnd=Math.round(Math.random()*k.Da);b.b.r=f.orientation;b.b.ww=f.lb;x.K("stag-b");var d=k.Ba+"//"+k.bb+"?"+b.mc();x.K("stag-d");b.qb(d);g.log(d,function(d){b.eb(d);e.d(a,"Function")&&a.call(b)})}},vb:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),
e=b.L(document.referrer)===k.jb?1:0,f=b.m(a,"jn"),g=/^select$/.test(f);a&&(d.test(a)&&e&&g)&&(this.b.rnd=Math.round(Math.random()*k.Da),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},ub:function(){if(window.postMessage&&window.self!==window.parent){var a=this;s.e(window,"message",function(d){if(b.L(d.origin)===
k.jb){d=d.data||{};var e=d.jn||"",f=/^customevent$|^heatmap$|^pageclick$/.test(e);if(RegExp(c.id).test(d.sd||"")&&f)a.b.rnd=Math.round(Math.random()*k.Da),n(k.protocol+"//"+c.js+e+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},qb:function(a){var b;try{b=p.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);m.set("Hm_unsent_"+
c.id,p.stringify(b))},eb:function(a){var b;try{b=p.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?m.set("Hm_unsent_"+c.id,p.stringify(b)):this.Qa()}},Qa:function(){m.remove("Hm_unsent_"+c.id)},lc:function(){var a=this,b;try{b=p.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){g.log(k.Ba+"//"+b,function(b){a.eb(b)})},
f=0;f<b.length;f++)e(b[f])},Sa:function(){return Math.round(+new Date/1E3)%65535}};return new a})();var B=h.D,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var a=mt.g,b=mt.lang,g=mt.event,d=mt.o;if("undefined"!==typeof h.c&&(c.med||(!a.Aa||7<a.Jb())&&c.cvcc)){var e,l,f,m,p=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},s=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},t=function(a,g){var k={};k.n=e;k.t="clk";k.v=a;if(g){var l=g.getAttribute("href"),m=g.getAttribute("onclick")?""+g.getAttribute("onclick"):v,p=g.getAttribute("id")||"";f.test(l)?(k.sn=
"mediate",k.snv=l):b.d(m,"String")&&f.test(m)&&(k.sn="wrap",k.snv=m);k.id=p}h.c.b.et=86;h.c.b.ep=d.stringify(k);h.c.i();for(k=+new Date;400>=+new Date-k;);};if(c.med)l="/zoosnet",e="swt",f=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(f.test(e)||f.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";e="other";f=c.cvcc.q||r;var q=c.cvcc.id||r;m={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],f!==r?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),q?(d=d.getAttribute("id"),(f.test(e)||
f.test(g)||q.test(d))&&a.push(b[k])):(f.test(e)||f.test(g))&&a.push(b[k])):q!==r&&(d=d.getAttribute("id"),q.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof f){var y;l+=/\/$/.test(l)?"":"/";var k=function(a,d){if(y===d)return t(l+a,d),w;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(y===d[e])return t(l+a+"/"+(e+1),d[e]),w};g.e(document,"mousedown",function(a){a=a||window.event;y=a.target||a.srcElement;var d={};for(s(m,function(a,e){d[a]=b.d(e,
"Function")?e():document.getElementById(e)});y&&y!==document&&s(d,k)!==w;)y=y.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,g=mt.event,d=mt.o;if("undefined"!==typeof h.c&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var e={nb:function(){for(var b=c.cvcf.length,d,m=0;m<b;m++)(d=a.Ra(decodeURIComponent(c.cvcf[m])))&&g.e(d,"click",e.ra())},ra:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=d.stringify(a);h.c.i()}}};a.cb(function(){e.nb()})}})();
(function(){var a=mt.event,b=mt.o;if(c.med&&"undefined"!==typeof h.c){var g={n:"anti",sb:0,kb:0,clk:0},d=function(){h.c.b.et=86;h.c.b.ep=b.stringify(g);h.c.i()};a.e(document,"click",function(){g.clk++});a.e(document,"keyup",function(){g.kb=1});a.e(window,"scroll",function(){g.sb++});a.e(window,"load",function(){setTimeout(d,5E3)})}})();})();
