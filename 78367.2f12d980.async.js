(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[78367],{78367:function(){(function(e){var a={pattern:/(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,lookbehind:!0,inside:{quoted:{pattern:/([$`])(?:(?!\1)[^\\]|\\.)*\1/,inside:{punctuation:/^[$`]|[$`]$/}},interpreted:{pattern:/'(?:[^'\\]|\\.)*'/,inside:{punctuation:/^'|'$/}},string:/"(?:[^"\\]|\\.)*"/,variable:/\w+(?==)/,punctuation:/^\[|\]$|,/,operator:/=/,"attr-value":/(?!^\s+$).+/}},n=e.languages.asciidoc={"comment-block":{pattern:/^(\/{4,})$[\s\S]*?^\1/m,alias:"comment"},table:{pattern:/^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,inside:{specifiers:{pattern:/(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*](?:[<^>](?:\.[<^>])?|\.[<^>])?|[<^>](?:\.[<^>])?|\.[<^>])[a-z]*|[a-z]+)(?=\|)/,alias:"attr-value"},punctuation:{pattern:/(^|[^\\])[|!]=*/,lookbehind:!0}}},"passthrough-block":{pattern:/^(\+{4,})$[\s\S]*?^\1$/m,inside:{punctuation:/^\++|\++$/}},"literal-block":{pattern:/^(-{4,}|\.{4,})$[\s\S]*?^\1$/m,inside:{punctuation:/^(?:-+|\.+)|(?:-+|\.+)$/}},"other-block":{pattern:/^(--|\*{4,}|_{4,}|={4,})$[\s\S]*?^\1$/m,inside:{punctuation:/^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/}},"list-punctuation":{pattern:/(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,lookbehind:!0,alias:"punctuation"},"list-label":{pattern:/(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,lookbehind:!0,alias:"symbol"},"indented-block":{pattern:/((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,lookbehind:!0},comment:/^\/\/.*/m,title:{pattern:/^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,alias:"important",inside:{punctuation:/^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/}},"attribute-entry":{pattern:/^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,alias:"tag"},attributes:a,hr:{pattern:/^'{3,}$/m,alias:"punctuation"},"page-break":{pattern:/^<{3,}$/m,alias:"punctuation"},admonition:{pattern:/^(?:CAUTION|IMPORTANT|NOTE|TIP|WARNING):/m,alias:"keyword"},callout:[{pattern:/(^[ \t]*)<?\d*>/m,lookbehind:!0,alias:"symbol"},{pattern:/<\d+>/,alias:"symbol"}],macro:{pattern:/\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:{function:/^[a-z\d-]+(?=:)/,punctuation:/^::?/,attributes:{pattern:/(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:a.inside}}},inline:{pattern:/(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,lookbehind:!0,inside:{attributes:a,url:{pattern:/^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,inside:{punctuation:/^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/}},"attribute-ref":{pattern:/^\{.+\}$/,inside:{variable:{pattern:/(^\{)[a-z\d,+_-]+/,lookbehind:!0},operator:/^[=?!#%@$]|!(?=[:}])/,punctuation:/^\{|\}$|::?/}},italic:{pattern:/^(['_])[\s\S]+\1$/,inside:{punctuation:/^(?:''?|__?)|(?:''?|__?)$/}},bold:{pattern:/^\*[\s\S]+\*$/,inside:{punctuation:/^\*\*?|\*\*?$/}},punctuation:/^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/}},replacement:{pattern:/\((?:C|R|TM)\)/,alias:"builtin"},entity:/&#?[\da-z]{1,8};/i,"line-continuation":{pattern:/(^| )\+$/m,lookbehind:!0,alias:"punctuation"}};function i(t){for(var o={},r=0,l=(t=t.split(" ")).length;r<l;r++)o[t[r]]=n[t[r]];return o}a.inside.interpreted.inside.rest=i("macro inline replacement entity"),n["passthrough-block"].inside.rest=i("macro"),n["literal-block"].inside.rest=i("callout"),n.table.inside.rest=i("comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"),n["other-block"].inside.rest=i("table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"),n.title.inside.rest=i("macro inline replacement entity"),e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),e.languages.adoc=e.languages.asciidoc})(Prism)}}]);
