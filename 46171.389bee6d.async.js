(self.webpackChunk_zpcscc_components=self.webpackChunk_zpcscc_components||[]).push([[46171],{46171:function(){(function(n){for(var e=`[^<()"']|\\((?:<expr>)*\\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\\\"]|\\\\.)*"|'(?:[^\\\\']|\\\\.)*'`,r=0;r<2;r++)e=e.replace(/<expr>/g,function(){return e});e=e.replace(/<expr>/g,"[^\\s\\S]");var t={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp(`("|')(?:(?!\\1|\\$\\{)[^\\\\]|\\\\.|\\$\\{(?:(?!\\})(?:<expr>))*\\})*\\1`.replace(/<expr>/g,function(){return e})),greedy:!0,inside:{interpolation:{pattern:RegExp("((?:^|[^\\\\])(?:\\\\\\\\)*)\\$\\{(?:(?!\\})(?:<expr>))*\\}".replace(/<expr>/g,function(){return e})),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\b\w+(?=\s*\()/,number:/\b\d+(?:\.\d+)?\b/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};t.string[1].inside.interpolation.inside.rest=t,n.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:t}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:t}}}},n.hooks.add("before-tokenize",function(i){var a=RegExp("<#--[^]*?-->|</?[#@][a-zA-Z](?:<expr>)*?>|\\$\\{(?:<expr>)*?\\}".replace(/<expr>/g,function(){return e}),"gi");n.languages["markup-templating"].buildPlaceholders(i,"ftl",a)}),n.hooks.add("after-tokenize",function(i){n.languages["markup-templating"].tokenizePlaceholders(i,"ftl")})})(Prism)}}]);
