(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/component/slider/slider"],{"0f99":function(t,e,a){"use strict";a.r(e);var i=a("a946"),n=a("f224");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var u=a("2877"),s=Object(u["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},"990a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"slider"}},methods:{sliderChange:function(t){console.log("value 发生变化："+t.detail.value)}}};e.default=i},a86c:function(t,e,a){"use strict";a("0055");var i=r(a("0f99")),n=r(a("3a53"));function r(t){return t&&t.__esModule?t:{default:t}}i.default.mpType="page";var u=new n.default(i.default);u.$mount()},a946:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{attrs:{_hid:0}},[a("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),a("view",{staticClass:"uni-padding-wrap uni-common-mt",attrs:{_hid:1003}},[a("view",{staticClass:"uni-title",attrs:{_hid:1004}},[]),a("view",{attrs:{_hid:1006}},[a("slider",{attrs:{value:"60",step:"5",_hid:1007},on:{change:t.sliderChange}})]),a("view",{staticClass:"uni-title",attrs:{_hid:1008}},[]),a("view",{attrs:{_hid:1010}},[a("slider",{attrs:{value:"50","show-value":"true",_hid:1011},on:{change:t.sliderChange}})]),a("view",{staticClass:"uni-title",attrs:{_hid:1012}},[]),a("view",{attrs:{_hid:1014}},[a("slider",{attrs:{value:"100",min:"50",max:"200","show-value":"true",_hid:1015},on:{change:t.sliderChange}})])])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},f224:function(t,e,a){"use strict";a.r(e);var i=a("990a"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=n.a}},[["a86c","common/runtime","common/vendor"]]]);