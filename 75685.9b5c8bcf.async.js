(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[75685],{75685:function(){(function(i){var n="\\\\\\((?:[^()]|\\([^()]*\\))*\\)",t=RegExp(`(^|[^\\\\])"(?:[^"\r
\\\\]|\\\\[^\r
(]|__)*"`.replace(/__/g,function(){return n})),e={interpolation:{pattern:RegExp("((?:^|[^\\\\])(?:\\\\{2})*)"+n),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},o=i.languages.jq={comment:/#.*/,property:{pattern:RegExp(t.source+"(?=\\s*:(?!:))"),lookbehind:!0,greedy:!0,inside:e},string:{pattern:t,lookbehind:!0,greedy:!0,inside:e},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};e.interpolation.inside.content.inside=o})(Prism)}}]);
