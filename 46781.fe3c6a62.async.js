(self.webpackChunk_zpcscc_components=self.webpackChunk_zpcscc_components||[]).push([[46781],{46781:function(){(function(a){var d=a.languages.javascript["template-string"],T=d.pattern.source,h=d.inside.interpolation,q=h.inside["interpolation-punctuation"],x=h.pattern.source;function v(t,n){if(a.languages[t])return{pattern:RegExp("((?:"+n+")\\s*)"+T),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}a.languages.javascript["template-string"]=[v("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),v("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),v("svg",/\bsvg/.source),v("markdown",/\b(?:markdown|md)/.source),v("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),v("sql",/\bsql/.source),d].filter(Boolean);function O(t,n){return"___"+n.toUpperCase()+"_"+t+"___"}function m(t,n,r){var e={code:t,grammar:n,language:r};return a.hooks.run("before-tokenize",e),e.tokens=a.tokenize(e.code,e.grammar),a.hooks.run("after-tokenize",e),e.tokens}function E(t){var n={};n["interpolation-punctuation"]=q;var r=a.tokenize(t,n);if(r.length===3){var e=[1,1];e.push.apply(e,m(r[1],a.languages.javascript,"javascript")),r.splice.apply(r,e)}return new a.Token("interpolation",r,h.alias,t)}function S(t,n,r){var e=a.tokenize(t,{interpolation:{pattern:RegExp(x),lookbehind:!0}}),l=0,f={},p=e.map(function(o){if(typeof o=="string")return o;for(var s=o.content,i;t.indexOf(i=O(l++,r))!==-1;);return f[i]=s,i}).join(""),c=m(p,n,r),y=Object.keys(f);l=0;function u(o){for(var s=0;s<o.length;s++){if(l>=y.length)return;var i=o[s];if(typeof i=="string"||typeof i.content=="string"){var k=y[l],j=typeof i=="string"?i:i.content,_=j.indexOf(k);if(_!==-1){++l;var w=j.substring(0,_),G=E(f[k]),A=j.substring(_+k.length),g=[];if(w&&g.push(w),g.push(G),A){var C=[A];u(C),g.push.apply(g,C)}typeof i=="string"?(o.splice.apply(o,[s,1].concat(g)),s+=g.length-1):i.content=g}}else{var z=i.content;Array.isArray(z)?u(z):u([z])}}}return u(c),new a.Token(r,c,"language-"+r,t)}var L={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};a.hooks.add("after-tokenize",function(t){if(!(t.language in L))return;function n(r){for(var e=0,l=r.length;e<l;e++){var f=r[e];if(typeof f!="string"){var p=f.content;if(!Array.isArray(p)){typeof p!="string"&&n([p]);continue}if(f.type==="template-string"){var c=p[1];if(p.length===3&&typeof c!="string"&&c.type==="embedded-code"){var y=b(c),u=c.alias,o=Array.isArray(u)?u[0]:u,s=a.languages[o];if(!s)continue;p[1]=S(y,s,o)}}else n(p)}}}n(t.tokens)});function b(t){return typeof t=="string"?t:Array.isArray(t)?t.map(b).join(""):b(t.content)}})(Prism)}}]);
