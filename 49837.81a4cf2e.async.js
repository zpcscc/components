(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[49837],{49837:function(){(function(s){function f(n,t){return"___"+n.toUpperCase()+t+"___"}Object.defineProperties(s.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,p,u){if(n.language===t){var r=n.tokenStack=[];n.code=n.code.replace(p,function(a){if(typeof u=="function"&&!u(a))return a;for(var o,e=r.length;n.code.indexOf(o=f(t,e))!==-1;)++e;return r[e]=a,o}),n.grammar=s.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=s.languages[t];var p=0,u=Object.keys(n.tokenStack);(function r(a){for(var o=0;o<a.length&&!(p>=u.length);o++){var e=a[o];if(typeof e=="string"||e.content&&typeof e.content=="string"){var g=u[p],k=n.tokenStack[g],i=typeof e=="string"?e:e.content,d=f(t,g),l=i.indexOf(d);if(l>-1){++p;var h=i.substring(0,l),_=new s.Token(t,s.tokenize(k,n.grammar),"language-"+t,k),m=i.substring(l+d.length),c=[];h&&c.push.apply(c,r([h])),c.push(_),m&&c.push.apply(c,r([m])),typeof e=="string"?a.splice.apply(a,[o,1].concat(c)):e.content=c}}else e.content&&r(e.content)}return a})(n.tokens)}}}})})(Prism)}}]);