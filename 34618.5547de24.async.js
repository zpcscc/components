(self.webpackChunk_zpcscc_components=self.webpackChunk_zpcscc_components||[]).push([[34618],{34618:function(){(function(n){var s={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},r={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function e(p,c){var t={};t["section-header"]={pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"};for(var u in c)t[u]=c[u];return t.tag={pattern:/([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},t.variable=r,t.comment=s,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,function(){return p}),"im"),alias:"section",inside:t}}var a={pattern:/(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},o={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:r}},i={pattern:/([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:r}};n.languages.robotframework={settings:e("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:e("Variables"),"test-cases":e("Test Cases",{"test-name":o,documentation:a,property:i}),keywords:e("Keywords",{"keyword-name":o,documentation:a,property:i}),tasks:e("Tasks",{"task-name":o,documentation:a,property:i}),comment:s},n.languages.robot=n.languages.robotframework})(Prism)}}]);
