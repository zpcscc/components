(self.webpackChunk_zpcscc_components=self.webpackChunk_zpcscc_components||[]).push([[68615],{68615:function(){Prism.languages.haxe=Prism.languages.extend("clike",{string:{pattern:/"(?:[^"\\]|\\[\s\S])*"/,greedy:!0},"class-name":[{pattern:/(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,lookbehind:!0},/\b[A-Z]\w*/],keyword:/\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,function:{pattern:/\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i,greedy:!0},operator:/\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/}),Prism.languages.insertBefore("haxe","string",{"string-interpolation":{pattern:/'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{interpolation:{pattern:/(^|[^\\])\$(?:\w+|\{[^{}]+\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:Prism.languages.haxe}}},string:/[\s\S]+/}}}),Prism.languages.insertBefore("haxe","class-name",{regex:{pattern:/~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,greedy:!0,inside:{"regex-flags":/\b[a-z]+$/,"regex-source":{pattern:/^(~\/)[\s\S]+(?=\/$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^~\/|\/$/}}}),Prism.languages.insertBefore("haxe","keyword",{preprocessor:{pattern:/#(?:else|elseif|end|if)\b.*/,alias:"property"},metadata:{pattern:/@:?[\w.]+/,alias:"symbol"},reification:{pattern:/\$(?:\w+|(?=\{))/,alias:"important"}})}}]);
