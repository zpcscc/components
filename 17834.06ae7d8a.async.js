(self.webpackChunk_zpcscc_components=self.webpackChunk_zpcscc_components||[]).push([[17834],{17834:function(W,Z,k){var J=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};var H=function(c){var q=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,U=0,A={},t={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof d?new d(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++U}),a.__id},clone:function a(e,n){n=n||{};var r,i;switch(t.util.type(e)){case"Object":if(i=t.util.objId(e),n[i])return n[i];r={},n[i]=r;for(var l in e)e.hasOwnProperty(l)&&(r[l]=a(e[l],n));return r;case"Array":return i=t.util.objId(e),n[i]?n[i]:(r=[],n[i]=r,e.forEach(function(g,u){r[u]=a(g,n)}),r);default:return e}},getLanguage:function(a){for(;a;){var e=q.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(q,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==a)return e[n]}return null}},isActive:function(a,e,n){for(var r="no-"+e;a;){var i=a.classList;if(i.contains(e))return!0;if(i.contains(r))return!1;a=a.parentElement}return!!n}},languages:{plain:A,plaintext:A,text:A,txt:A,extend:function(a,e){var n=t.util.clone(t.languages[a]);for(var r in e)n[r]=e[r];return n},insertBefore:function(a,e,n,r){r=r||t.languages;var i=r[a],l={};for(var g in i)if(i.hasOwnProperty(g)){if(g==e)for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u]);n.hasOwnProperty(g)||(l[g]=i[g])}var f=r[a];return r[a]=l,t.languages.DFS(t.languages,function(o,p){p===f&&o!=a&&(this[o]=l)}),l},DFS:function a(e,n,r,i){i=i||{};var l=t.util.objId;for(var g in e)if(e.hasOwnProperty(g)){n.call(e,g,e[g],r||g);var u=e[g],f=t.util.type(u);f==="Object"&&!i[l(u)]?(i[l(u)]=!0,a(u,n,null,i)):f==="Array"&&!i[l(u)]&&(i[l(u)]=!0,a(u,n,g,i))}}},plugins:{},highlightAll:function(a,e){t.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,n){var r={callback:n,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),t.hooks.run("before-all-elements-highlight",r);for(var i=0,l;l=r.elements[i++];)t.highlightElement(l,e===!0,r.callback)},highlightElement:function(a,e,n){var r=t.util.getLanguage(a),i=t.languages[r];t.util.setLanguage(a,r);var l=a.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&t.util.setLanguage(l,r);var g=a.textContent,u={element:a,language:r,grammar:i,code:g};function f(p){u.highlightedCode=p,t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,t.hooks.run("after-highlight",u),t.hooks.run("complete",u),n&&n.call(u.element)}if(t.hooks.run("before-sanity-check",u),l=u.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!u.code){t.hooks.run("complete",u),n&&n.call(u.element);return}if(t.hooks.run("before-highlight",u),!u.grammar){f(t.util.encode(u.code));return}if(e&&c.Worker){var o=new Worker(t.filename);o.onmessage=function(p){f(p.data)},o.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else f(t.highlight(u.code,u.grammar,u.language))},highlight:function(a,e,n){var r={code:a,grammar:e,language:n};if(t.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=t.tokenize(r.code,r.grammar),t.hooks.run("after-tokenize",r),d.stringify(t.util.encode(r.tokens),r.language)},tokenize:function(a,e){var n=e.rest;if(n){for(var r in n)e[r]=n[r];delete e.rest}var i=new R;return b(i,i.head,a),G(a,i,e,i.head,0),K(i)},hooks:{all:{},add:function(a,e){var n=t.hooks.all;n[a]=n[a]||[],n[a].push(e)},run:function(a,e){var n=t.hooks.all[a];if(!(!n||!n.length))for(var r=0,i;i=n[r++];)i(e)}},Token:d};c.Prism=t;function d(a,e,n,r){this.type=a,this.content=e,this.alias=n,this.length=(r||"").length|0}d.stringify=function a(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(f){r+=a(f,n)}),r}var i={type:e.type,content:a(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),t.hooks.run("wrap",i);var g="";for(var u in i.attributes)g+=" "+u+'="'+(i.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+g+">"+i.content+"</"+i.tag+">"};function D(a,e,n,r){a.lastIndex=e;var i=a.exec(n);if(i&&r&&i[1]){var l=i[1].length;i.index+=l,i[0]=i[0].slice(l)}return i}function G(a,e,n,r,i,l){for(var g in n)if(!(!n.hasOwnProperty(g)||!n[g])){var u=n[g];u=Array.isArray(u)?u:[u];for(var f=0;f<u.length;++f){if(l&&l.cause==g+","+f)return;var o=u[f],p=o.inside,T=!!o.lookbehind,$=!!o.greedy,Q=o.alias;if($&&!o.pattern.global){var V=o.pattern.toString().match(/[imsuy]*$/)[0];o.pattern=RegExp(o.pattern.source,V+"g")}for(var B=o.pattern||o,s=r.next,v=i;s!==e.tail&&!(l&&v>=l.reach);v+=s.value.length,s=s.next){var x=s.value;if(e.length>a.length)return;if(!(x instanceof d)){var E=1,h;if($){if(h=D(B,v,a,T),!h||h.index>=a.length)break;var P=h.index,X=h.index+h[0].length,y=v;for(y+=s.value.length;P>=y;)s=s.next,y+=s.value.length;if(y-=s.value.length,v=y,s.value instanceof d)continue;for(var m=s;m!==e.tail&&(y<X||typeof m.value=="string");m=m.next)E++,y+=m.value.length;E--,x=a.slice(v,y),h.index-=v}else if(h=D(B,0,x,T),!h)continue;var P=h.index,C=h[0],z=x.slice(0,P),F=x.slice(P+C.length),I=v+x.length;l&&I>l.reach&&(l.reach=I);var S=s.prev;z&&(S=b(e,S,z),v+=z.length),_(e,S,E);var Y=new d(g,p?t.tokenize(C,p):C,Q,C);if(s=b(e,S,Y),F&&b(e,s,F),E>1){var M={cause:g+","+f,reach:I};G(a,e,n,s.prev,v,M),l&&M.reach>l.reach&&(l.reach=M.reach)}}}}}}function R(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function b(a,e,n){var r=e.next,i={value:n,prev:e,next:r};return e.next=i,r.prev=i,a.length++,i}function _(a,e,n){for(var r=e.next,i=0;i<n&&r!==a.tail;i++)r=r.next;e.next=r,r.prev=e,a.length-=i}function K(a){for(var e=[],n=a.head.next;n!==a.tail;)e.push(n.value),n=n.next;return e}if(!c.document)return c.addEventListener&&(t.disableWorkerMessageHandler||c.addEventListener("message",function(a){var e=JSON.parse(a.data),n=e.language,r=e.code,i=e.immediateClose;c.postMessage(t.highlight(r,t.languages[n],n)),i&&c.close()},!1)),t;var w=t.util.currentScript();w&&(t.filename=w.src,w.hasAttribute("data-manual")&&(t.manual=!0));function L(){t.manual||t.highlightAll()}if(!t.manual){var O=document.readyState;O==="loading"||O==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",L):window.requestAnimationFrame?window.requestAnimationFrame(L):window.setTimeout(L,16)}return t}(J);W.exports&&(W.exports=H),typeof k.g!="undefined"&&(k.g.Prism=H)}}]);
