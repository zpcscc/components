(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[88257],{88257:function(){(function(a){var p=a.util.clone(a.languages.javascript),f=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,u=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function r(e,n){return e=e.replace(/<S>/g,function(){return f}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return u}),RegExp(e,n)}u=r(u).source,a.languages.jsx=a.languages.extend("markup",p),a.languages.jsx.tag.pattern=r(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),a.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,a.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,a.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,a.languages.jsx.tag.inside.comment=p.comment,a.languages.insertBefore("inside","attr-name",{spread:{pattern:r(/<SPREAD>/.source),inside:a.languages.jsx}},a.languages.jsx.tag),a.languages.insertBefore("inside","special-attr",{script:{pattern:r(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:a.languages.jsx}}},a.languages.jsx.tag);var g=function(e){return e?typeof e=="string"?e:typeof e.content=="string"?e.content:e.content.map(g).join(""):""},l=function(e){for(var n=[],s=0;s<e.length;s++){var t=e[s],i=!1;if(typeof t!="string"&&(t.type==="tag"&&t.content[0]&&t.content[0].type==="tag"?t.content[0].content[0].content==="</"?n.length>0&&n[n.length-1].tagName===g(t.content[0].content[1])&&n.pop():t.content[t.content.length-1].content==="/>"||n.push({tagName:g(t.content[0].content[1]),openedBraces:0}):n.length>0&&t.type==="punctuation"&&t.content==="{"?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&t.type==="punctuation"&&t.content==="}"?n[n.length-1].openedBraces--:i=!0),(i||typeof t=="string")&&n.length>0&&n[n.length-1].openedBraces===0){var c=g(t);s<e.length-1&&(typeof e[s+1]=="string"||e[s+1].type==="plain-text")&&(c+=g(e[s+1]),e.splice(s+1,1)),s>0&&(typeof e[s-1]=="string"||e[s-1].type==="plain-text")&&(c=g(e[s-1])+c,e.splice(s-1,1),s--),e[s]=new a.Token("plain-text",c,null,c)}t.content&&typeof t.content!="string"&&l(t.content)}};a.hooks.add("after-tokenize",function(e){e.language!=="jsx"&&e.language!=="tsx"||l(e.tokens)})})(Prism)}}]);
