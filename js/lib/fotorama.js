/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
fotoramaVersion="4.6.4",function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-(1/0):b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return Ib?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a){var b={};return Ib?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return isNaN(a)?b:a}function n(a,b){return m(+String(a).replace(b||"px",""))}function o(a){return/%$/.test(a)?n(a,"%"):e}function p(a,b){return m(o(a)/100*b,n(a))}function q(a){return(!isNaN(n(a))||!isNaN(n(a,"%")))&&a}function r(a,b,c,d){return(a-(d||0))*(b+(c||0))}function s(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function t(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};T(c,d[ub.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()}),b.tEnd=!0}}function u(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),t(a))}function v(a,b){if(a.length){var c=a.data();Ib?(a.css(l(0)),c.onEndFn=g,clearTimeout(c.tT)):a.stop();var d=w(b,function(){return j(a)});return a.css(k(d)),d}}function w(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function x(a,b){return Math.round(a+(b-a)/1.5)}function y(){return y.p=y.p||("https:"===c.protocol?"https://":"http://"),y.p}function z(a){var c=b.createElement("a");return c.href=a,c}function A(a,b){if("string"!=typeof a)return a;a=z(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,""),p:y()}:!1}function B(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=y()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:y()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,C(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function C(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Xb]=i[Zb]=i[Yb]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function D(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?A(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=n(c.width||a.attr("width")),g=n(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:S(c.thumbratio||n(c.thumbwidth||b&&b.attr("width")||e||f)/n(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=R(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function E(a){return 0===a.offsetWidth&&0===a.offsetHeight}function F(a){return!d.contains(b.documentElement,a)}function G(a,b,c,d){return G.i||(G.i=1,G.ii=[!0]),d=d||G.i,"undefined"==typeof G.ii[d]&&(G.ii[d]=!0),a()?b():G.ii[d]&&setTimeout(function(){G.ii[d]&&G(a,b,c,d)},c||100),G.i++}function H(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function I(a,b,c,d){var e=a.data(),f=e.measures;if(f&&(!e.l||e.l.W!==f.width||e.l.H!==f.height||e.l.r!==f.ratio||e.l.w!==b.w||e.l.h!==b.h||e.l.m!==c||e.l.p!==d)){var g=f.width,i=f.height,j=b.w/b.h,k=f.ratio>=j,l="scaledown"===c,m="contain"===c,n="cover"===c,o=$(d);k&&(l||m)||!k&&n?(g=h(b.w,0,l?g:1/0),i=g/f.ratio):(k&&n||!k&&(l||m))&&(i=h(b.h,0,l?i:1/0),g=i*f.ratio),a.css({width:g,height:i,left:p(o.x,b.w-g),top:p(o.y,b.h-i)}),e.l={W:f.width,H:f.height,r:f.ratio,w:b.w,h:b.h,m:c,p:d}}return!0}function J(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function K(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function L(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function M(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(ca(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function(c){c.moved||b.call(this,a)}}),{noMove:!0}))})}function N(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function O(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function P(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function Q(a,b,c){a.scrollLeft(b||0).scrollTop(c||0)}function R(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function S(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function T(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function U(a){return!!a.getAttribute("disabled")}function V(a){return{tabindex:-1*a+"",disabled:a}}function W(a,b){T(a,"keyup",function(c){U(a)||13==c.keyCode&&b.call(a,c)})}function X(a,b){T(a,"focus",a.onfocusin=function(c){b.call(a,c)},!0)}function Y(a,b){a.preventDefault?a.preventDefault():a.returnValue=!1,b&&a.stopPropagation&&a.stopPropagation()}function Z(a){return a?">":"<"}function $(a){return a=(a+"").split(/\s+/),{x:q(a[0])||bc,y:q(a[1])||bc}}function _(a,b){var c=a.data(),e=Math.round(b.pos),f=function(){c.sliding=!1,(b.onEnd||g)()};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function(){_(a,d.extend({},b,{overPos:b.pos,time:Math.max(Qb,b.time/2)}))});var h=d.extend(k(e),b.width&&{width:b.width});c.sliding=!0,Ib?(a.css(d.extend(l(b.time),h)),b.time>10?u(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,_b,f)}function aa(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&aa.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.removeClass(Ra+" "+Qa),a.stop().addClass(Ra),b.stop().addClass(Qa),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function ba(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now()}function ca(a,c){function e(a){return m=d(a.target),u.checked=p=q=s=!1,k||u.flow||a.touches&&a.touches.length>1||a.which>1||ec&&ec.type!==a.type&&gc||(p=c.select&&m.is(c.select,t))?p:(o="touchstart"===a.type,q=m.is("a, a *",t),n=u.control,r=u.noMove||u.noSwipe||n?16:u.snap?0:4,ba(a),l=ec=a,fc=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(c.onStart||g).call(t,a,{control:n,$target:m}),k=u.flow=!0,void((!o||u.go)&&Y(a)))}function f(a){if(a.touches&&a.touches.length>1||Nb&&!a.isPrimary||fc!==a.type||!k)return k&&h(),void(c.onTouchEnd||g)();ba(a);var b=Math.abs(a._x-l._x),d=Math.abs(a._y-l._y),e=b-d,f=(u.go||u.x||e>=0)&&!u.noSwipe,i=0>e;o&&!u.checked?(k=f)&&Y(a):(Y(a),(c.onMove||g).call(t,a,{touch:o})),!s&&Math.sqrt(Math.pow(b,2)+Math.pow(d,2))>r&&(s=!0),u.checked=u.checked||f||i}function h(a){(c.onTouchEnd||g)();var b=k;u.control=k=!1,b&&(u.flow=!1),!b||q&&!u.checked||(a&&Y(a),gc=!0,clearTimeout(hc),hc=setTimeout(function(){gc=!1},1e3),(c.onEnd||g).call(t,{moved:s,$target:m,control:n,touch:o,startEvent:l,aborted:!a||"MSPointerCancel"===a.type}))}function i(){u.flow||setTimeout(function(){u.flow=!0},10)}function j(){u.flow&&setTimeout(function(){u.flow=!1},Pb)}var k,l,m,n,o,p,q,r,s,t=a[0],u={};return Nb?(T(t,"MSPointerDown",e),T(b,"MSPointerMove",f),T(b,"MSPointerCancel",h),T(b,"MSPointerUp",h)):(T(t,"touchstart",e),T(t,"touchmove",f),T(t,"touchend",h),T(b,"touchstart",i),T(b,"touchend",j),T(b,"touchcancel",j),Eb.on("scroll",j),a.on("mousedown",e),Fb.on("mousemove",f).on("mouseup",h)),a.on("click","a",function(a){u.checked&&Y(a)}),u}function da(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:v(a,(b.getPos||g)()),(b.onStart||g).call(B,c)}function e(a,b){s=D.min,t=D.max,u=D.snap,w=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a)}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=K(n,s,t),s>=n?n=x(n,s):n>=t&&(n=x(n,t)),D.noMove||(a.css(k(n)),z||(z=!0,e.touch||Nb||a.addClass(eb)),(b.onMove||g).call(B,d,{pos:n,edge:o})))}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Nb||a.removeClass(eb),r=d.now();for(var f,i,j,k,o,q,v,x,y,z=r-Pb,C=null,E=Qb,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i}v=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Pb,L=!K&&n!==m&&v===n;u&&(v=h(Math[L?I?"floor":"ceil":"round"](n/u)*u,s,t),s=t=v),L&&(u||v===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),u||(v=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,x=o-q,u||(v=q),x=h(v+.03*x,q-50,q+50),E=Math.abs((n-x)/(y/F)))),E*=w?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&u,pos:n,newPos:v,overPos:x,time:E}))}}var j,l,m,n,o,p,q,r,s,t,u,w,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(ca(b.$wrap,d.extend({},b,{onStart:e,onMove:f,onEnd:i})),D)}function ea(a,b){var c,e,f,h=a[0],i={prevent:{}};return T(h,Ob,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)&&!Math.abs(h),l=Z(0>j),m=e===l,n=d.now(),o=Pb>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(Y(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Rb)),(b.onEnd||g)(a,b.shift?l:j)))}),i}function fa(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function ga(a){d.Fotorama.instances.push(a),fa()}function ha(a){d.Fotorama.instances.splice(a.index,1),fa()}var ia="fotorama",ja="fullscreen",ka=ia+"__wrap",la=ka+"--css2",ma=ka+"--css3",na=ka+"--video",oa=ka+"--fade",pa=ka+"--slide",qa=ka+"--no-controls",ra=ka+"--no-shadows",sa=ka+"--pan-y",ta=ka+"--rtl",ua=ka+"--only-active",va=ka+"--no-captions",wa=ka+"--toggle-arrows",xa=ia+"__stage",ya=xa+"__frame",za=ya+"--video",Aa=xa+"__shaft",Ba=ia+"__grab",Ca=ia+"__pointer",Da=ia+"__arr",Ea=Da+"--disabled",Fa=Da+"--prev",Ga=Da+"--next",Ha=ia+"__nav",Ia=Ha+"-wrap",Ja=Ha+"__shaft",Ka=Ha+"--dots",La=Ha+"--thumbs",Ma=Ha+"__frame",Na=Ma+"--dot",Oa=Ma+"--thumb",Pa=ia+"__fade",Qa=Pa+"-front",Ra=Pa+"-rear",Sa=ia+"__shadow",Ta=Sa+"s",Ua=Ta+"--left",Va=Ta+"--right",Wa=ia+"__active",Xa=ia+"__select",Ya=ia+"--hidden",Za=ia+"--fullscreen",$a=ia+"__fullscreen-icon",_a=ia+"__error",ab=ia+"__loading",bb=ia+"__loaded",cb=bb+"--full",db=bb+"--img",eb=ia+"__grabbing",fb=ia+"__img",gb=fb+"--full",hb=ia+"__dot",ib=ia+"__thumb",jb=ib+"-border",kb=ia+"__html",lb=ia+"__video",mb=lb+"-play",nb=lb+"-close",ob=ia+"__caption",pb=ia+"__caption__wrap",qb=ia+"__spinner",rb='" tabindex="0" role="button',sb=d&&d.fn.jquery.split(".");if(!sb||sb[0]<1||1==sb[0]&&sb[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var tb={},ub=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),vb={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},wb="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)vb.ok=!0;else for(var xb=0,yb=wb.length;yb>xb;xb++)if(vb.prefix=wb[xb],"undefined"!=typeof b[vb.prefix+"CancelFullScreen"]){vb.ok=!0;break}vb.ok&&(vb.event=vb.prefix+"fullscreenchange",vb.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},vb.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},vb.cancel=function(a){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var zb,Ab={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Bb={top:"auto",left:"auto",className:""};!function(a,b){zb=b()}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c)e[d]=c[d];return e}function c(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++)if(c=n[d]+b,f[c]!==e)return c;return f[b]!==e?b:void 0}function g(a,b){for(var c in b)a.style[f(a,c)||c]=b[c];return a}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===e&&(a[d]=c[d])}return a}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function j(a,b){return"string"==typeof a?a:a[b%a.length]}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q))}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k})}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))))}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++)f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(h=1;h<=d.lines;h++)f(h);return c(a,m)},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++)k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);e.timeout=e.el&&setTimeout(s,~~(1e3/o))}()}return e},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this},lines:function(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++)h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));return b},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k});var Cb,Db,Eb=d(a),Fb=d(b),Gb="quirks"===c.hash.replace("#",""),Hb=ub.csstransforms3d,Ib=Hb&&!Gb,Jb=Hb||"CSS1Compat"===b.compatMode,Kb=vb.ok,Lb=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Mb=!Ib||Lb,Nb=navigator.msPointerEnabled,Ob="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Pb=250,Qb=300,Rb=1400,Sb=5e3,Tb=2,Ub=64,Vb=500,Wb=333,Xb="$stageFrame",Yb="$navDotFrame",Zb="$navThumbFrame",$b="auto",_b=f([.1,0,.25,1]),ac=99999,bc="50%",cc={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,bottomoffset:0,ratio:null,margin:Tb,glimpse:0,fit:"contain",position:bc,thumbposition:bc,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Ub,thumbheight:Ub,thumbmargin:Tb,thumbborderwidth:Tb,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Qb,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},dc={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};G.stop=function(a){G.ii[a]=!1};var ec,fc,gc,hc;jQuery.Fotorama=function(a,e){function f(){d.each(yc,function(a,b){if(!b.i){b.i=md++;var c=A(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=B(b,yc,id),C(yc,{img:d.img,thumb:d.thumb},b.i,id)}}})}function g(a){return Zc[a]||id.fullScreen}function i(a){var b="keydown."+ia,c=ia+jd,d="keydown."+c,f="resize."+c+" orientationchange."+c;a?(Fb.on(d,function(a){var b,c;Cc&&27===a.keyCode?(b=!0,mc(Cc,!0,!0)):(id.fullScreen||e.keyboard&&!id.index)&&(27===a.keyCode?(b=!0,id.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&Y(a),c&&id.show({index:c,slow:a.altKey,user:!0})}),id.index||Fb.off(b).on(b,"textarea, input, select",function(a){!Db.hasClass(ja)&&a.stopPropagation()}),Eb.on(f,id.resize)):(Fb.off(d),Eb.off(f))}function j(b){b!==j.f&&(b?(a.html("").addClass(ia+" "+kd).append(qd).before(od).before(pd),ga(id)):(qd.detach(),od.detach(),pd.detach(),a.html(nd.urtext).removeClass(kd),ha(id)),i(b),j.f=b)}function m(){yc=id.data=yc||P(e.data)||D(a),zc=id.size=yc.length,!xc.ok&&e.shuffle&&O(yc),f(),Jd=y(Jd),zc&&j(!0)}function o(){var a=2>zc&&!e.enableifsingleframe||Cc;Md.noMove=a||Sc,Md.noSwipe=a||!e.swipe,!Wc&&sd.toggleClass(Ba,!e.click&&!Md.noMove&&!Md.noSwipe),Nb&&qd.toggleClass(sa,!Md.noSwipe)}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Sb,1.5*Vc)}function u(){function a(a,c){b[a?"add":"remove"].push(c)}id.options=e=R(e),Sc="crossfade"===e.transition||"dissolve"===e.transition,Mc=e.loop&&(zc>2||Sc&&(!Wc||"slide"!==Wc)),Vc=+e.transitionduration||Qb,Yc="rtl"===e.direction,Zc=d.extend({},e.keyboard&&dc,e.keyboard);var b={add:[],remove:[]};zc>1||e.enableifsingleframe?(Nc=e.nav,Pc="top"===e.navposition,b.remove.push(Xa),wd.toggle(!!e.arrows)):(Nc=!1,wd.hide()),Ra(),Bc=new zb(d.extend(Ab,e.spinner,Bb,{direction:Yc?-1:1})),Gb(),Hb(),e.autoplay&&t(e.autoplay),Tc=n(e.thumbwidth)||Ub,Uc=n(e.thumbheight)||Ub,Nd.ok=Pd.ok=e.trackpad&&!Mb,o(),ec(e,[Ld]),Oc="thumbs"===Nc,Oc?(lb(zc,"navThumb"),Ac=Bd,hd=Zb,J(od,d.Fotorama.jst.style({w:Tc,h:Uc,b:e.thumbborderwidth,m:e.thumbmargin,s:jd,q:!Jb})),yd.addClass(La).removeClass(Ka)):"dots"===Nc?(lb(zc,"navDot"),Ac=Ad,hd=Yb,yd.addClass(Ka).removeClass(La)):(Nc=!1,yd.removeClass(La+" "+Ka)),Nc&&(Pc?xd.insertBefore(rd):xd.insertAfter(rd),wb.nav=!1,wb(Ac,zd,"nav")),Qc=e.allowfullscreen,Qc?(Dd.prependTo(rd),Rc=Kb&&"native"===Qc):(Dd.detach(),Rc=!1),a(Sc,oa),a(!Sc,pa),a(!e.captions,va),a(Yc,ta),a("always"!==e.arrows,wa),Xc=e.shadows&&!Mb,a(!Xc,ra),qd.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Kd=d.extend({},e)}function x(a){return 0>a?(zc+a%zc)%zc:a>=zc?a%zc:a}function y(a){return h(a,0,zc-1)}function z(a){return Mc?x(a):y(a)}function E(a){return a>0||Mc?a-1:!1}function U(a){return zc-1>a||Mc?a+1:!1}function $(){Md.min=Mc?-(1/0):-r(zc-1,Ld.w,e.margin,Fc),Md.max=Mc?1/0:-r(0,Ld.w,e.margin,Fc),Md.snap=Ld.w+e.margin}function ba(){Od.min=Math.min(0,Ld.nw-zd.width()),Od.max=0,zd.toggleClass(Ba,!(Od.noMove=Od.min===Od.max))}function ca(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=yc[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function fa(a,b,c,d){(!$c||"*"===$c&&d===Lc)&&(a=q(e.width)||q(a)||Vb,b=q(e.height)||q(b)||Wb,id.resize({width:a,ratio:e.ratio||c||a/b},0,d!==Lc&&"*"))}function Pa(a,b,c,f,g,h){ca(a,b,function(a,i,j,k,l,m){function n(a){var b=x(i);fc(a,{index:b,src:w,frame:yc[b]})}function o(){t.remove(),d.Fotorama.cache[w]="error",j.html&&"stage"===b||!y||y===w?(!w||j.html||r?"stage"===b&&(k.trigger("f:load").removeClass(ab+" "+_a).addClass(bb),n("load"),fa()):(k.trigger("f:error").removeClass(ab).addClass(_a),n("error")),m.state="error",!(zc>1&&yc[i]===j)||j.html||j.deleted||j.video||r||(j.deleted=!0,id.splice(i,1))):(j[v]=w=y,Pa([i],b,c,f,g,!0))}function p(){d.Fotorama.measures[w]=u.measures=d.Fotorama.measures[w]||{width:s.width,height:s.height,ratio:s.width/s.height},fa(u.measures.width,u.measures.height,u.measures.ratio,i),t.off("load error").addClass(fb+(r?" "+gb:"")).prependTo(k),I(t,(d.isFunction(c)?c():c)||Ld,f||j.fit||e.fit,g||j.position||e.position),d.Fotorama.cache[w]=m.state="loaded",setTimeout(function(){k.trigger("f:load").removeClass(ab+" "+_a).addClass(bb+" "+(r?cb:db)),"stage"===b?n("load"):(j.thumbratio===$b||!j.thumbratio&&e.thumbratio===$b)&&(j.thumbratio=u.measures.ratio,vc())},0)}function q(){var a=10;G(function(){return!fd||!a--&&!Mb},function(){p()})}if(k){var r=id.fullScreen&&j.full&&j.full!==j.img&&!m.$full&&"stage"===b;if(!m.$img||h||r){var s=new Image,t=d(s),u=t.data();m[r?"$full":"$img"]=t;var v="stage"===b?r?"full":"img":"thumb",w=j[v],y=r?null:j["stage"===b?"thumb":"img"];if("navThumb"===b&&(k=m.$wrap),!w)return void o();d.Fotorama.cache[w]?!function z(){"error"===d.Fotorama.cache[w]?o():"loaded"===d.Fotorama.cache[w]?setTimeout(q,0):setTimeout(z,100)}():(d.Fotorama.cache[w]="*",t.on("load",q).on("error",o)),m.state="",s.src=w}}})}function Qa(a){Id.append(Bc.spin().el).appendTo(a)}function Ra(){Id.detach(),Bc&&Bc.stop()}function Sa(){var a=Dc[Xb];a&&!a.data().state&&(Qa(a),a.on("f:load f:error",function(){a.off("f:load f:error"),Ra()}))}function eb(a){W(a,sc),X(a,function(){setTimeout(function(){Q(yd)},0),Rb({time:Vc,guessIndex:d(this).data().eq,minMax:Od})})}function lb(a,b){ca(a,b,function(a,c,e,f,g,h){if(!f){f=e[g]=qd[g].clone(),h=f.data(),h.data=e;var i=f[0];"stage"===b?(e.html&&d('<div class="'+kb+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(f),e.caption&&d(N(ob,N(pb,e.caption))).appendTo(f),e.video&&f.addClass(za).append(Fd.clone()),X(i,function(){setTimeout(function(){Q(rd)},0),pc({index:h.eq,user:!0})}),td=td.add(f)):"navDot"===b?(eb(i),Ad=Ad.add(f)):"navThumb"===b&&(eb(i),h.$wrap=f.children(":first"),Bd=Bd.add(f),e.video&&h.$wrap.append(Fd.clone()))}})}function sb(a,b,c,d){return a&&a.length&&I(a,b,c,d)}function tb(a){ca(a,"stage",function(a,b,c,f,g,h){if(f){var i=x(b),j=c.fit||e.fit,k=c.position||e.position;h.eq=i,Rd[Xb][i]=f.css(d.extend({left:Sc?0:r(b,Ld.w,e.margin,Fc)},Sc&&l(0))),F(f[0])&&(f.appendTo(sd),mc(c.$video)),sb(h.$img,Ld,j,k),sb(h.$full,Ld,j,k)}})}function ub(a,b){if("thumbs"===Nc&&!isNaN(a)){var c=-a,f=-a+Ld.nw;Bd.each(function(){var a=d(this),g=a.data(),h=g.eq,i=function(){return{h:Uc,w:g.w}},j=i(),k=yc[h]||{},l=k.thumbfit||e.thumbfit,m=k.thumbposition||e.thumbposition;j.w=g.w,g.l+g.w<c||g.l>f||sb(g.$img,j,l,m)||b&&Pa([h],"navThumb",i,l,m)})}}function wb(a,b,c){if(!wb[c]){var f="nav"===c&&Oc,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=yc.length;f>e;e++)if(c.data===yc[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Uc*b.data.thumbratio)||Tc;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin}})),wb[c]=!0}}function xb(a){return a-Sd>Ld.w/3}function yb(a){return!(Mc||Jd+a&&Jd-zc+a||Cc)}function Gb(){var a=yb(0),b=yb(1);ud.toggleClass(Ea,a).attr(V(a)),vd.toggleClass(Ea,b).attr(V(b))}function Hb(){Nd.ok&&(Nd.prevent={"<":yb(0),">":yb(1)})}function Lb(a){var b,c,d=a.data();return Oc?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Ld.w-c-10*e.thumbmargin}}function Ob(a){var b=Dc[hd].data();_(Cd,{time:1.2*a,pos:b.l,width:b.w-2*e.thumbborderwidth})}function Rb(a){var b=yc[a.guessIndex][hd];if(b){var c=Od.min!==Od.max,d=a.minMax||c&&Lb(Dc[hd]),e=c&&(a.keep&&Rb.l?Rb.l:h((a.coo||Ld.nw/2)-Lb(b).c,d.min,d.max)),f=c&&h(e,Od.min,Od.max),g=1.1*a.time;_(zd,{time:g,pos:f||0,onEnd:function(){ub(f,!0)}}),lc(yd,K(f,Od.min,Od.max)),Rb.l=e}}function Tb(){_b(hd),Qd[hd].push(Dc[hd].addClass(Wa))}function _b(a){for(var b=Qd[a];b.length;)b.shift().removeClass(Wa)}function bc(a){var b=Rd[a];d.each(Ec,function(a,c){delete b[x(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function cc(a){Fc=Gc=Jd;var b=Dc[Xb];b&&(_b(Xb),Qd[Xb].push(b.addClass(Wa)),a||id.show.onEnd(!0),v(sd,0,!0),bc(Xb),tb(Ec),$(),ba())}function ec(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:S(a.ratio)})})}function fc(b,c){a.trigger(ia+":"+b,[id,c])}function gc(){clearTimeout(hc.t),fd=1,e.stopautoplayontouch?id.stopAutoplay():cd=!0}function hc(){fd&&(e.stopautoplayontouch||(ic(),jc()),hc.t=setTimeout(function(){fd=0},Qb+Pb))}function ic(){cd=!(!Cc&&!dd)}function jc(){if(clearTimeout(jc.t),G.stop(jc.w),!e.autoplay||cd)return void(id.autoplay&&(id.autoplay=!1,fc("stopautoplay")));id.autoplay||(id.autoplay=!0,fc("startautoplay"));var a=Jd,b=Dc[Xb].data();jc.w=G(function(){return b.state||a!==Jd},function(){jc.t=setTimeout(function(){if(!cd&&a===Jd){var b=Kc,c=yc[b][Xb].data();jc.w=G(function(){return c.state||b!==Kc},function(){cd||b!==Kc||id.show(Mc?Z(!Yc):Kc)})}},e.autoplay)})}function kc(){id.fullScreen&&(id.fullScreen=!1,Kb&&vb.cancel(ld),Db.removeClass(ja),Cb.removeClass(ja),a.removeClass(Za).insertAfter(pd),Ld=d.extend({},ed),mc(Cc,!0,!0),rc("x",!1),id.resize(),Pa(Ec,"stage"),Q(Eb,ad,_c),fc("fullscreenexit"))}function lc(a,b){Xc&&(a.removeClass(Ua+" "+Va),b&&!Cc&&a.addClass(b.replace(/^|\s/g," "+Ta+"--")))}function mc(a,b,c){b&&(qd.removeClass(na),Cc=!1,o()),a&&a!==Cc&&(a.remove(),fc("unloadvideo")),c&&(ic(),jc())}function nc(a){qd.toggleClass(qa,a)}function oc(a){if(!Md.flow){var b=a?a.pageX:oc.x,c=b&&!yb(xb(b))&&e.click;oc.p!==c&&rd.toggleClass(Ca,c)&&(oc.p=c,oc.x=b)}}function pc(a){clearTimeout(pc.t),e.clicktransition&&e.clicktransition!==e.transition?setTimeout(function(){var b=e.transition;id.setOptions({transition:e.clicktransition}),Wc=b,pc.t=setTimeout(function(){id.show(a)},10)},0):id.show(a)}function qc(a,b){var c=a.target,f=d(c);f.hasClass(mb)?id.playVideo():c===Ed?id.toggleFullScreen():Cc?c===Hd&&mc(Cc,!0,!0):b?nc():e.click&&pc({index:a.shiftKey||Z(xb(a._x)),slow:a.altKey,user:!0})}function rc(a,b){Md[a]=Od[a]=b}function sc(a){var b=d(this).data().eq;pc({index:b,slow:a.altKey,user:!0,coo:a._x-yd.offset().left})}function tc(a){pc({index:wd.index(this)?">":"<",slow:a.altKey,user:!0})}function uc(a){X(a,function(){setTimeout(function(){Q(rd)},0),nc(!1)})}function vc(){if(m(),u(),!vc.i){vc.i=!0;var a=e.startindex;(a||e.hash&&c.hash)&&(Lc=L(a||c.hash.replace(/^#/,""),yc,0===id.index||a,a)),Jd=Fc=Gc=Hc=Lc=z(Lc)||0}if(zc){if(wc())return;Cc&&mc(Cc,!0),Ec=[],bc(Xb),vc.ok=!0,id.show({index:Jd,time:0}),id.resize()}else id.destroy()}function wc(){return!wc.f===Yc?(wc.f=Yc,Jd=zc-1-Jd,id.reverse(),!0):void 0}function xc(){xc.ok||(xc.ok=!0,fc("ready"))}Cb=d("html"),Db=d("body");var yc,zc,Ac,Bc,Cc,Dc,Ec,Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,id=this,jd=d.now(),kd=ia+jd,ld=a[0],md=1,nd=a.data(),od=d("<style></style>"),pd=d(N(Ya)),qd=d(N(ka)),rd=d(N(xa)).appendTo(qd),sd=(rd[0],d(N(Aa)).appendTo(rd)),td=d(),ud=d(N(Da+" "+Fa+rb)),vd=d(N(Da+" "+Ga+rb)),wd=ud.add(vd).appendTo(rd),xd=d(N(Ia)),yd=d(N(Ha)).appendTo(xd),zd=d(N(Ja)).appendTo(yd),Ad=d(),Bd=d(),Cd=(sd.data(),
zd.data(),d(N(jb)).appendTo(zd)),Dd=d(N($a+rb)),Ed=Dd[0],Fd=d(N(mb)),Gd=d(N(nb)).appendTo(rd),Hd=Gd[0],Id=d(N(qb)),Jd=!1,Kd={},Ld={},Md={},Nd={},Od={},Pd={},Qd={},Rd={},Sd=0,Td=[];qd[Xb]=d(N(ya)),qd[Zb]=d(N(Ma+" "+Oa+rb,N(ib))),qd[Yb]=d(N(Ma+" "+Na+rb,N(hb))),Qd[Xb]=[],Qd[Zb]=[],Qd[Yb]=[],Rd[Xb]={},qd.addClass(Ib?ma:la).toggleClass(qa,!e.controlsonstart),nd.fotorama=this,id.startAutoplay=function(a){return id.autoplay?this:(cd=dd=!1,t(a||e.autoplay),jc(),this)},id.stopAutoplay=function(){return id.autoplay&&(cd=dd=!0,jc()),this},id.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?Gc+1:"<"===b?Gc-1:"<<"===b?0:">>"===b?zc-1:b,b=isNaN(b)?L(b,yc,!0):b,b="undefined"==typeof b?Jd||0:b,id.activeIndex=Jd=z(b),Ic=E(Jd),Jc=U(Jd),Kc=x(Jd+(Yc?-1:1)),Ec=[Jd,Ic,Jc],Gc=Mc?b:Jd;var c=Math.abs(Hc-Gc),d=w(a.time,function(){return Math.min(Vc*(1+(c-1)/12),2*Vc)}),f=a.overPos;a.slow&&(d*=10);var g=Dc;id.activeFrame=Dc=yc[Jd];var i=g===Dc&&!a.user;mc(Cc,Dc.i!==yc[x(Fc)].i),lb(Ec,"stage"),tb(Mb?[Gc]:[Gc,E(Gc),U(Gc)]),rc("go",!0),i||fc("show",{user:a.user,time:d}),cd=!0;var j=id.show.onEnd=function(b){if(!j.ok){if(j.ok=!0,b||cc(!0),i||fc("showend",{user:a.user}),!b&&Wc&&Wc!==e.transition)return id.setOptions({transition:Wc}),void(Wc=!1);Sa(),Pa(Ec,"stage"),rc("go",!1),Hb(),oc(),ic(),jc()}};if(Sc){var k=Dc[Xb],l=Jd!==Hc?yc[Hc][Xb]:null;aa(k,l,td,{time:d,method:e.transition,onEnd:j},Td)}else _(sd,{pos:-r(Gc,Ld.w,e.margin,Fc),overPos:f,time:d,onEnd:j});if(Gb(),Nc){Tb();var m=y(Jd+h(Gc-Hc,-1,1));Rb({time:d,coo:m!==Jd&&a.coo,guessIndex:"undefined"!=typeof a.coo?m:Jd,keep:i}),Oc&&Ob(d)}return bd="undefined"!=typeof Hc&&Hc!==Jd,Hc=Jd,e.hash&&bd&&!id.eq&&H(Dc.id||Jd+1),this},id.requestFullScreen=function(){return Qc&&!id.fullScreen&&(_c=Eb.scrollTop(),ad=Eb.scrollLeft(),Q(Eb),rc("x",!0),ed=d.extend({},Ld),a.addClass(Za).appendTo(Db.addClass(ja)),Cb.addClass(ja),mc(Cc,!0,!0),id.fullScreen=!0,Rc&&vb.request(ld),id.resize(),Pa(Ec,"stage"),Sa(),fc("fullscreenenter")),this},id.cancelFullScreen=function(){return Rc&&vb.is()?vb.cancel(b):kc(),this},id.toggleFullScreen=function(){return id[(id.fullScreen?"cancel":"request")+"FullScreen"]()},T(b,vb.event,function(){!yc||vb.is()||Cc||kc()}),id.resize=function(a){if(!yc)return this;var b=arguments[1]||0,c=arguments[2];ec(id.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:R(a),[Ld,c||id.fullScreen||e]);var d=Ld.width,f=Ld.height,g=Ld.ratio,i=Eb.height()-(Nc?yd.height():0);return id.fullScreen||(i-=e.bottomoffset),q(d)&&(qd.addClass(ua).css({width:d,minWidth:Ld.minwidth||0,maxWidth:Ld.maxwidth||ac}),d=Ld.W=Ld.w=qd.width(),Ld.nw=Nc&&p(e.navwidth,d)||d,e.glimpse&&(Ld.w-=Math.round(2*(p(e.glimpse,d)||0))),sd.css({width:Ld.w,marginLeft:(Ld.W-Ld.w)/2}),f=p(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Ld.h=Math.round(h(f,p(Ld.minheight,i),p(Ld.maxheight,i))),rd.stop().animate({width:d,height:f},b,function(){qd.removeClass(ua)}),cc(),Nc&&(yd.stop().animate({width:Ld.nw},b),Rb({guessIndex:Jd,time:b,keep:!0}),Oc&&wb.nav&&Ob(b)),$c=c||!0,xc())),Sd=rd.offset().left,this},id.setOptions=function(a){return d.extend(e,a),vc(),this},id.shuffle=function(){return yc&&O(yc)&&vc(),this},id.destroy=function(){return id.cancelFullScreen(),id.stopAutoplay(),yc=id.data=null,j(),Ec=[],bc(Xb),vc.ok=!1,this},id.playVideo=function(){var a=Dc,b=a.video,c=Jd;return"object"==typeof b&&a.videoReady&&(Rc&&id.fullScreen&&id.cancelFullScreen(),G(function(){return!vb.is()||c!==Jd},function(){c===Jd&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Xb]),qd.addClass(na),Cc=a.$video,o(),wd.blur(),Dd.blur(),fc("loadvideo"))})),this},id.stopVideo=function(){return mc(Cc,!0,!0),this},rd.on("mousemove",oc),Md=da(sd,{onStart:gc,onMove:function(a,b){lc(rd,b.edge)},onTouchEnd:hc,onEnd:function(a){lc(rd);var b=(Nb&&!gd||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=s(a.newPos,Ld.w,e.margin,Fc);id.show({index:c,time:Sc?Vc:a.time,overPos:a.overPos,user:!0})}else a.aborted||a.control||qc(a.startEvent,b)},timeLow:1,timeHigh:1,friction:2,select:"."+Xa+", ."+Xa+" *",$wrap:rd}),Od=da(zd,{onStart:gc,onMove:function(a,b){lc(yd,b.edge)},onTouchEnd:hc,onEnd:function(a){function b(){Rb.l=a.newPos,ic(),jc(),ub(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(cd=!0,_(zd,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),ub(a.newPos),Xc&&lc(yd,K(a.newPos,Od.min,Od.max))):b();else{var c=a.$target.closest("."+Ma,zd)[0];c&&sc.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:yd}),Nd=ea(rd,{shift:!0,onEnd:function(a,b){gc(),hc(),id.show({index:b,slow:a.altKey})}}),Pd=ea(yd,{onEnd:function(a,b){gc(),hc();var c=v(zd)+.25*b;zd.css(k(h(c,Od.min,Od.max))),Xc&&lc(yd,K(c,Od.min,Od.max)),Pd.prevent={"<":c>=Od.max,">":c<=Od.min},clearTimeout(Pd.t),Pd.t=setTimeout(function(){Rb.l=c,ub(c,!0)},Pb),ub(c)}}),qd.hover(function(){setTimeout(function(){fd||nc(!(gd=!0))},0)},function(){gd&&nc(!(gd=!1))}),M(wd,function(a){Y(a),tc.call(this,a)},{onStart:function(){gc(),Md.control=!0},onTouchEnd:hc}),wd.each(function(){W(this,function(a){tc.call(this,a)}),uc(this)}),W(Ed,id.toggleFullScreen),uc(Ed),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){id[b]=function(){return yc=yc||[],"load"!==b?Array.prototype[b].apply(yc,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(yc=P(arguments[0])),vc(),id}}),vc()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b,!0):G(function(){return!E(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},cc,a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){var b,c="";tb.escape;return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(tb.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?a.p+"youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?a.p+"player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>\n'},d(function(){d("."+ia+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);