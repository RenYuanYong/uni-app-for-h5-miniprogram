(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/form/form"],{1031:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("page-head",{attrs:{title:t.title,mpcomid:"03318744-0"}}),i("view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("form",{attrs:{eventid:"03318744-0"},on:{submit:t.formSubmit,reset:t.formReset}},[i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("switch")]),i("view",[i("switch",{attrs:{name:"switch"}})])]),i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("radio")]),i("radio-group",{attrs:{name:"radio",mpcomid:"03318744-1"}},[i("label",[i("radio",{attrs:{value:"radio1"}}),t._v("选项一")],1),i("label",[i("radio",{attrs:{value:"radio2"}}),t._v("选项二")],1)],1)],1),i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("checkbox")]),i("checkbox-group",{attrs:{name:"checkbox",mpcomid:"03318744-2"}},[i("label",[i("checkbox",{attrs:{value:"checkbox1"}}),t._v("选项一")],1),i("label",[i("checkbox",{attrs:{value:"checkbox2"}}),t._v("选项二")],1)],1)],1),i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("slider")]),i("slider",{attrs:{value:"50",name:"slider","show-value":""}})]),i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("input")]),i("input",{staticClass:"uni-input",attrs:{name:"input",placeholder:"这是一个输入框"}})]),i("view",{staticClass:"uni-btn-v"},[i("button",{attrs:{formType:"submit"}},[t._v("Submit")]),i("button",{attrs:{type:"default",formType:"reset"}},[t._v("Reset")])],1)])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"3da9":function(t,e,i){"use strict";var n=i("c8cd"),a=i.n(n);a.a},"45f2":function(t,e,i){"use strict";i("0055");var n=s(i("b0ce")),a=s(i("9efa"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},5215:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"form",pickerHidden:!0,chosen:""}},methods:{pickerConfirm:function(t){this.pickerHidden=!0,this.chosen=t.target.value},pickerCancel:function(t){this.pickerHidden=!0},pickerShow:function(t){this.pickerHidden=!1},formSubmit:function(t){console.log("form发生了submit事件，携带数据为："+JSON.stringify(t.detail.value))},formReset:function(t){console.log("清空数据"),this.chosen=""}}};e.default=n},"9efa":function(t,e,i){"use strict";i.r(e);var n=i("1031"),a=i("e234");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("3da9");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},c8cd:function(t,e,i){},e234:function(t,e,i){"use strict";i.r(e);var n=i("5215"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a}},[["45f2","common/runtime","common/vendor"]]]);