(self.webpackChunk_zpcscc_components=self.webpackChunk_zpcscc_components||[]).push([[88486],{88486:function(){(function(n){n.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var s={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(s).forEach(function(e){var c=s[e],i=[];/^\w+$/.test(e)||i.push(/\w+/.exec(e)[0]),e==="diff"&&i.push("bold"),n.languages.diff[e]={pattern:RegExp("^(?:["+c+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:i,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(n.languages.diff,"PREFIXES",{value:s})})(Prism)}}]);
