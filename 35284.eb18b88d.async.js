(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[35284],{35284:function(){(function(e){function r(n,i){return n.replace(/<<(\d+)>>/g,function(t,b){return"(?:"+i[+b]+")"})}function a(n,i,t){return RegExp(r(n,i),t||"")}var s=RegExp("\\b(?:"+"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within".trim().replace(/ /g,"|")+")\\b"),o=r("<<0>>(?:\\s*\\.\\s*<<0>>)*",["\\b[A-Za-z_]\\w*\\b"]),l={keyword:s,punctuation:/[<>()?,.:[\]]/},u='"(?:\\\\.|[^\\\\"])*"';e.languages.qsharp=e.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:a("(^|[^$\\\\])<<0>>",[u]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:a("(\\b(?:as|open)\\s+)<<0>>(?=\\s*(?:;|as\\b))",[o]),lookbehind:!0,inside:l},{pattern:a("(\\bnamespace\\s+)<<0>>(?=\\s*\\{)",[o]),lookbehind:!0,inside:l}],keyword:s,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),e.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var p=function(n,i){for(var t=0;t<2;t++)n=n.replace(/<<self>>/g,function(){return"(?:"+n+")"});return n.replace(/<<self>>/g,"[^\\s\\S]")}(r('\\{(?:[^"{}]|<<0>>|<<self>>)*\\}',[u]));e.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:a('\\$"(?:\\\\.|<<0>>|[^\\\\"{])*"',[p]),greedy:!0,inside:{interpolation:{pattern:a("((?:^|[^\\\\])(?:\\\\\\\\)*)<<0>>",[p]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:e.languages.qsharp}}},string:/[\s\S]+/}}})})(Prism),Prism.languages.qs=Prism.languages.qsharp}}]);