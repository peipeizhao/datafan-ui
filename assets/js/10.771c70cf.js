(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{875:function(t,e,r){var a=r(17),s=r(19),n=r(57),o=r(94).f,c=r(27),p=s((function(){o(1)}));a({target:"Object",stat:!0,forced:!c||p,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(n(t),e)}})},876:function(t,e,r){var a=r(17),s=r(27),n=r(255).f;a({target:"Object",stat:!0,forced:Object.defineProperties!==n,sham:!s},{defineProperties:n})},877:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(186),r(113),r(84),r(28),r(875),r(187),r(254),r(556),r(876),r(185);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},982:function(t,e,r){"use strict";r.r(e);var a=r(877),s={name:"component-doc",components:{"render-demo-0":Object(a.a)({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DEmpty")],1)},staticRenderFns:[]},{}),"render-demo-1":Object(a.a)({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DEmpty",{attrs:{text:"这里是提示",description:"这里是详细说明"}})],1)},staticRenderFns:[]},{})}},n=r(16),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"empty-空状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#empty-空状态"}},[t._v("#")]),t._v(" Empty 空状态")]),t._v(" "),r("p",[t._v("当内容为空时，使用空状态组件提示。")]),t._v(" "),r("h2",{attrs:{id:"基本用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),r("p",[t._v("适用大部分默认场景")]),t._v(" "),r("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[r("template",{slot:"demo"},[[r("render-demo-0")]],2),t._v(" "),r("template",{slot:"source"},[r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DEmpty")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n")])])])])],2),r("h2",{attrs:{id:"配置属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置属性"}},[t._v("#")]),t._v(" 配置属性")]),t._v(" "),r("p",[t._v("根据场景自定义提示")]),t._v(" "),r("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[r("template",{slot:"demo"},[[r("render-demo-1")]],2),t._v(" "),r("template",{slot:"source"},[r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DEmpty")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("text")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这里是提示"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("description")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这里是详细说明"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  \n")])])])])],2),r("h2",{attrs:{id:"api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),r("h3",{attrs:{id:"props"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("text")]),t._v(" "),r("td",[t._v("空状态提示")]),t._v(" "),r("td",[r("code",[t._v("String")])]),t._v(" "),r("td",[r("code",[t._v("暂无数据")])])]),t._v(" "),r("tr",[r("td",[t._v("description")]),t._v(" "),r("td",[t._v("空状态提示详情")]),t._v(" "),r("td",[r("code",[t._v("String")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("color")]),t._v(" "),r("td",[t._v("提示字体颜色")]),t._v(" "),r("td",[r("code",[t._v("String")])]),t._v(" "),r("td",[t._v("-")])])])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);