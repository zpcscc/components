!function(){"use strict";var t="/components/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"@zpcscc/components","b":"webpack","f":[["docs__antd-components-doc__cascade.md.87917755.async.js",3017],["docs__antd-components-doc__switch.md.2e4adef3.async.js",10777],["docs__antd-components-doc__input-group.md.fd4d4d49.async.js",15534],["docs__antd-components-doc__title.md.155ca8b3.async.js",20272],["docs__antd-components-doc__radio-group.md.e95cca6d.async.js",20318],["docs__antd-components-doc__select.md.a699233f.async.js",24402],["docs__antd-components-doc__input.md.95efaa91.async.js",25603],["docs__other-components-doc__quill-editor.md.894c9da0.async.js",29693],["docs__antd-components-doc__index.md.1bd24d39.async.js",31544],["docs__antd-components-doc__slider.md.8f823838.async.js",43345],["docs__antd-components-doc__checkbox-group.md.1adfdbc6.async.js",46069],["docs__other-components-doc__simple-code-editor.md.5034d0ee.async.js",46714],["docs__other-components-doc__pdf-viewer.md.f172b346.async.js",49300],["docs__antd-components-doc__text.md.3fe5d1c2.async.js",49386],["nm__dumi__theme-default__layouts__DocLayout__index.257c37d2.async.js",52519],["55455.e8c51481.chunk.css",55455],["55455.c8fb5d33.async.js",55455],["docs__antd-components-doc__divider.md.a661729a.async.js",56221],["docs__index.md.65fb0a14.async.js",56935],["docs__antd-components-doc__collapse.md.efba1f1c.async.js",57046],["docs__antd-components-doc__textarea.md.078f2cf9.async.js",61278],["docs__antd-components-doc__button.md.1f641231.async.js",62781],["docs__other-components-doc__video-viewer.md.cd0b0fc4.async.js",64290],["docs__antd-components-doc__grid.md.f83298c4.async.js",70442],["docs__other-components-doc__index.md.9c9e15a5.async.js",74411],["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",81009],["nm__dumi__dist__client__pages__Demo__index.10def9df.async.js",81009],["dumi__tmp-production__dumi__theme__ContextWrapper.db8efb60.async.js",81923],["docs__guide.md.ef7eaee1.async.js",82937],["docs__antd-components-doc__input-number.md.e0272a49.async.js",83835],["docs__antd-components-doc__alert.md.29980578.async.js",88761],["docs__antd-components-doc__checkbox.md.5a6fa61e.async.js",92809],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",93065],["nm__dumi__dist__client__pages__404.ddca8d17.async.js",93065],["docs__antd-components-doc__space.md.6442253c.async.js",97170],["docs__other-components-doc__monaco-editor.md.9d031b32.async.js",98115],["docs__antd-components-doc__options.md.27fa8d3f.async.js",99857]],"r":{"/*":[32,33,14,15,16,27],"/":[18,14,15,16,27],"/other-components-doc":[24,14,15,16,27],"/antd-components-doc":[8,14,15,16,27],"/guide":[28,14,15,16,27],"/~demos/:id":[25,26,27],"/other-components-doc/simple-code-editor":[11,14,15,16,27],"/antd-components-doc/checkbox-group":[10,14,15,16,27],"/other-components-doc/monaco-editor":[35,14,15,16,27],"/other-components-doc/quill-editor":[7,14,15,16,27],"/other-components-doc/video-viewer":[22,14,15,16,27],"/antd-components-doc/input-number":[29,14,15,16,27],"/antd-components-doc/input-group":[2,14,15,16,27],"/antd-components-doc/radio-group":[4,14,15,16,27],"/other-components-doc/pdf-viewer":[12,14,15,16,27],"/antd-components-doc/checkbox":[31,14,15,16,27],"/antd-components-doc/collapse":[19,14,15,16,27],"/antd-components-doc/textarea":[20,14,15,16,27],"/antd-components-doc/cascade":[0,14,15,16,27],"/antd-components-doc/divider":[17,14,15,16,27],"/antd-components-doc/options":[36,14,15,16,27],"/antd-components-doc/button":[21,14,15,16,27],"/antd-components-doc/select":[5,14,15,16,27],"/antd-components-doc/slider":[9,14,15,16,27],"/antd-components-doc/switch":[1,14,15,16,27],"/antd-components-doc/alert":[30,14,15,16,27],"/antd-components-doc/input":[6,14,15,16,27],"/antd-components-doc/space":[34,14,15,16,27],"/antd-components-doc/title":[3,14,15,16,27],"/antd-components-doc/grid":[23,14,15,16,27],"/antd-components-doc/text":[13,14,15,16,27]}},{publicPath:"/components/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();