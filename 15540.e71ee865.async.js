(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[15540],{15540:function(){(function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",function(a){var n=/<%[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(a,"etlua",n)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"etlua")})})(Prism)}}]);
