(self.webpackChunk_zpcscc_components=self.webpackChunk_zpcscc_components||[]).push([[95633],{95633:function(){(function(n){function i(e,t){return e.replace(/<<(\d+)>>/g,function(a,f){return"(?:"+t[+f]+")"})}function r(e,t,a){return RegExp(i(e,t),a||"")}function d(e,t){for(var a=0;a<t;a++)e=e.replace(/<<self>>/g,function(){return"(?:"+e+")"});return e.replace(/<<self>>/g,"[^\\s\\S]")}var o={type:"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero",other:"Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within"};function g(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var s=RegExp(g(o.type+" "+o.other)),b=/\b[A-Za-z_]\w*\b/.source,u=i(/<<0>>(?:\s*\.\s*<<0>>)*/.source,[b]),l={keyword:s,punctuation:/[<>()?,.:[\]]/},p=/"(?:\\.|[^\\"])*"/.source;n.languages.qsharp=n.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[p]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source,[u]),lookbehind:!0,inside:l},{pattern:r(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source,[u]),lookbehind:!0,inside:l}],keyword:s,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),n.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var c=d(i(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source,[p]),2);n.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:r(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source,[c]),greedy:!0,inside:{interpolation:{pattern:r(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source,[c]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:n.languages.qsharp}}},string:/[\s\S]+/}}})})(Prism),Prism.languages.qs=Prism.languages.qsharp}}]);
