(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[67696],{67696:function(){(function(t){var n={pattern:/^[;#].*/m,greedy:!0},e=`"(?:[^\r
"\\\\]|\\\\(?:[^\r]|\r
?))*"(?!\\S)`;t.languages.systemd={comment:n,section:{pattern:/^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,greedy:!0,inside:{punctuation:/^\[|\]$/,"section-name":{pattern:/[\s\S]+/,alias:"selector"}}},key:{pattern:/^[^\s=]+(?=[ \t]*=)/m,greedy:!0,alias:"attr-name"},value:{pattern:RegExp("(=[ 	]*(?!\\s))(?:"+e+`|(?=[^"\r
]))(?:[^\\s\\\\]|[ 	]+(?:(?![ 	"])|`+e+`)|\\\\[\r
]+(?:[#;].*[\r
]+)*(?![#;]))*`),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:n,quoted:{pattern:RegExp("(^|\\s)"+e),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}})(Prism)}}]);
