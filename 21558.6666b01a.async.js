(self.webpackChunk_zpcscc_components=self.webpackChunk_zpcscc_components||[]).push([[21558],{21558:function(){(function(e){var a="(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";e.languages.phpdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+a+"\\s+)?)\\$\\w+"),lookbehind:!0}}),e.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+a),lookbehind:!0,inside:{keyword:/\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,punctuation:/[|\\[\]()]/}}]}),e.languages.javadoclike.addSupport("php",e.languages.phpdoc)})(Prism)}}]);
