(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/API/set-navigation-bar-title/set-navigation-bar-title"],{"338a":function(t,i,e){"use strict";e.r(i);var a=e("91b1"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},"788e":function(t,i,e){"use strict";e.r(i);var a=e("b215"),n=e("338a");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);var r=e("2877"),l=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);i["default"]=l.exports},"91b1":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"setNaivgationBarTitle"}},methods:{setNaivgationBarTitle:function(i){var e=i.detail.value.title;t.setNavigationBarTitle({title:e,success:function(){console.log("setNavigationBarTitle success")},fail:function(t){console.log("setNavigationBarTitle fail, err is",t)}})}}};i.default=e}).call(this,e("c11b")["default"])},b215:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{attrs:{_hid:0}},[e("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),e("view",{attrs:{_hid:1003}},[e("form",{attrs:{_hid:1004},on:{submit:t.setNaivgationBarTitle}},[e("view",{staticClass:"uni-list",attrs:{_hid:1005}},[e("view",{staticClass:"uni-list-cell",attrs:{_hid:1006}},[e("view",{staticClass:"uni-list-cell-left",attrs:{_hid:1007}},[]),e("view",{staticClass:"uni-list-cell-db",attrs:{_hid:1009}},[e("input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入页面标题并点击设置即可",name:"title",_hid:1010}})])])]),e("view",{staticClass:"uni-padding-wrap",attrs:{_hid:1011}},[e("view",{staticClass:"uni-btn-v",attrs:{_hid:1012}},[e("button",{attrs:{type:"primary",formType:"submit",_hid:1013}},[])],1)])])],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},dc98:function(t,i,e){"use strict";e("0055");var a=s(e("788e")),n=s(e("3a53"));function s(t){return t&&t.__esModule?t:{default:t}}a.default.mpType="page";var r=new n.default(a.default);r.$mount()}},[["dc98","common/runtime","common/vendor"]]]);