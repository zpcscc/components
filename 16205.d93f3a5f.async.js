(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[16205],{16205:function(){(function(n){function u(e){return e=e.replace(/<inner>/g,function(){return`(?:\\\\.|[^\\\\
\r]|(?:
|\r
?)(?![\r
]))`}),RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:"+e+")")}var g="(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",d=`\\|?__(?:\\|__)+\\|?(?:(?:
|\r
?)|(?![^]))`.replace(/__/g,function(){return g}),c=`\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:
|\r
?)`;n.languages.markdown=n.languages.extend("markup",{}),n.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:n.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+d+c+"(?:"+d+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+d+c+")(?:"+d+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(g),inside:n.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+d+")"+c+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+d+"$"),inside:{"table-header":{pattern:RegExp(g),alias:"important",inside:n.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:u("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:u("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:u("(~~?)(?:(?!~)<inner>)+\\2"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:u('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(e){["url","bold","italic","strike","code-snippet"].forEach(function(t){e!==t&&(n.languages.markdown[e].inside.content.inside[t]=n.languages.markdown[t])})}),n.hooks.add("after-tokenize",function(e){e.language!=="markdown"&&e.language!=="md"||function t(r){if(r&&typeof r!="string")for(var p=0,k=r.length;p<k;p++){var l=r[p];if(l.type==="code"){var s=l.content[1],a=l.content[3];if(s&&a&&s.type==="code-language"&&a.type==="code-block"&&typeof s.content=="string"){var o=s.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),i="language-"+(o=(/[a-z][\w-]*/i.exec(o)||[""])[0].toLowerCase());a.alias?typeof a.alias=="string"?a.alias=[a.alias,i]:a.alias.push(i):a.alias=[i]}}else t(l.content)}}(e.tokens)}),n.hooks.add("wrap",function(e){if(e.type==="code-block"){for(var t="",r=0,p=e.classes.length;r<p;r++){var k=e.classes[r],l=/language-(.+)/.exec(k);if(l){t=l[1];break}}var s=n.languages[t];if(s)e.content=n.highlight(e.content.replace(h,"").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(o,i){var b;return(i=i.toLowerCase())[0]==="#"?(b=i[1]==="x"?parseInt(i.slice(2),16):Number(i.slice(1)),f(b)):m[i]||o}),s,t);else if(t&&t!=="none"&&n.plugins.autoloader){var a="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random());e.attributes.id=a,n.plugins.autoloader.loadLanguages(t,function(){var o=document.getElementById(a);o&&(o.innerHTML=n.highlight(o.textContent,n.languages[t],t))})}}});var h=RegExp(n.languages.markup.tag.pattern.source,"gi"),m={amp:"&",lt:"<",gt:">",quot:'"'},f=String.fromCodePoint||String.fromCharCode;n.languages.md=n.languages.markdown})(Prism)}}]);
