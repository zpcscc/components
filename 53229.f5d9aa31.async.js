(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[53229],{43108:function(){(function(s){function n(t,o){return t.replace(/<<(\d+)>>/g,function(p,H){return"(?:"+o[+H]+")"})}function e(t,o,p){return RegExp(n(t,o),p||"")}function d(t,o){for(var p=0;p<o;p++)t=t.replace(/<<self>>/g,function(){return"(?:"+t+")"});return t.replace(/<<self>>/g,"[^\\s\\S]")}var w="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",c="class enum interface record struct",x="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",m="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function u(t){return"\\b(?:"+t.trim().replace(/ /g,"|")+")\\b"}var v=u(c),g=RegExp(u(w+" "+c+" "+x+" "+m)),P=u(c+" "+x+" "+m),U=u(w+" "+c+" "+m),b=d("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),h=d("\\((?:[^()]|<<self>>)*\\)",2),i="@?\\b[A-Za-z_]\\w*\\b",f=n("<<0>>(?:\\s*<<1>>)?",[i,b]),r=n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[P,f]),k="\\[\\s*(?:,\\s*)*\\]",Z=n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[r,k]),q=n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[b,h,k]),D=n("\\(<<0>>+(?:,<<0>>+)+\\)",[q]),l=n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[D,r,k]),a={keyword:g,punctuation:/[<>()?,.:[\]]/},_=`'(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,$=`"(?:\\\\.|[^\\\\"\r
])*"`;s.languages.csharp=s.languages.extend("clike",{string:[{pattern:e("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:e("(^|[^@$\\\\])<<0>>",[$]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[r]),lookbehind:!0,inside:a},{pattern:e("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[i,l]),lookbehind:!0,inside:a},{pattern:e("(\\busing\\s+)<<0>>(?=\\s*=)",[i]),lookbehind:!0},{pattern:e("(\\b<<0>>\\s+)<<1>>",[v,f]),lookbehind:!0,inside:a},{pattern:e("(\\bcatch\\s*\\(\\s*)<<0>>",[r]),lookbehind:!0,inside:a},{pattern:e("(\\bwhere\\s+)<<0>>",[i]),lookbehind:!0},{pattern:e("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[Z]),lookbehind:!0,inside:a},{pattern:e("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[l,U,i]),inside:a}],keyword:g,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),s.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),s.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e("([(,]\\s*)<<0>>(?=\\s*:)",[i]),lookbehind:!0,alias:"punctuation"}}),s.languages.insertBefore("csharp","class-name",{namespace:{pattern:e("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[i]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[h]),lookbehind:!0,alias:"class-name",inside:a},"return-type":{pattern:e("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[l,r]),inside:a,alias:"class-name"},"constructor-invocation":{pattern:e("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[l]),lookbehind:!0,inside:a,alias:"class-name"},"generic-method":{pattern:e("<<0>>\\s*<<1>>(?=\\s*\\()",[i,b]),inside:{function:e("^<<0>>",[i]),generic:{pattern:RegExp(b),alias:"class-name",inside:a}}},"type-list":{pattern:e("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[v,f,i,l,g.source,h,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:e("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[f,h]),lookbehind:!0,greedy:!0,inside:s.languages.csharp},keyword:g,"class-name":{pattern:RegExp(l),greedy:!0,inside:a},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var B=$+"|"+_,E=n(`/(?![*/])|//[^\r
]*[\r
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,[B]),R=d(n(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[E]),2),z="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",G=n("<<0>>(?:\\s*\\(<<1>>*\\))?",[r,R]);s.languages.insertBefore("csharp","class-name",{attribute:{pattern:e("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[z,G]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e("^<<0>>(?=\\s*:)",[z]),alias:"keyword"},"attribute-arguments":{pattern:e("\\(<<0>>*\\)",[R]),inside:s.languages.csharp},"class-name":{pattern:RegExp(r),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var y=`:[^}\r
]+`,S=d(n(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[E]),2),j=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[S,y]),A=d(n(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,[B]),2),C=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[A,y]);function F(t,o){return{interpolation:{pattern:e("((?:^|[^{])(?:\\{\\{)*)<<0>>",[t]),lookbehind:!0,inside:{"format-string":{pattern:e("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[o,y]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:s.languages.csharp}}},string:/[\s\S]+/}}s.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[j]),lookbehind:!0,greedy:!0,inside:F(j,S)},{pattern:e('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[C]),lookbehind:!0,greedy:!0,inside:F(C,A)}],char:{pattern:RegExp(_),greedy:!0}}),s.languages.dotnet=s.languages.cs=s.languages.csharp})(Prism)}}]);