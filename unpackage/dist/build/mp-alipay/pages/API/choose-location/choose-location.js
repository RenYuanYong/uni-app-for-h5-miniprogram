(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/API/choose-location/choose-location"],{"0045":function(t,a,i){"use strict";var n=i("7f37"),o=i.n(n);o.a},"0c46":function(t,a,i){"use strict";i.r(a);var n=i("abea"),o=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,function(){return n[t]})}(e);a["default"]=o.a},"7f37":function(t,a,i){},"8dc7":function(t,a,i){"use strict";i("0055");var n=e(i("c6d9")),o=e(i("3a53"));function e(t){return t&&t.__esModule?t:{default:t}}n.default.mpType="page";var c=new o.default(n.default);c.$mount()},abea:function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i("9b9a"),o=n.formatLocation,e={data:function(){return{title:"chooseLocation",hasLocation:!1,location:{},locationAddress:""}},methods:{chooseLocation:function(){var a=this;t.chooseLocation({success:function(t){a.hasLocation=!0,a.location=o(t.longitude,t.latitude),a.locationAddress=t.address}})},clear:function(){this.hasLocation=!1}}};a.default=e}).call(this,i("c11b")["default"])},c6d9:function(t,a,i){"use strict";i.r(a);var n=i("d249"),o=i("0c46");for(var e in o)"default"!==e&&function(t){i.d(a,t,function(){return o[t]})}(e);i("0045");var c=i("2877"),s=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},d249:function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("view",{attrs:{_hid:0}},[i("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),i("view",{staticClass:"uni-padding-wrap",attrs:{_hid:1003}},[i("view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"},attrs:{_hid:1004}},[i("view",{staticClass:"uni-hello-text uni-center",attrs:{_hid:1005}},[]),t._ri(!(!1!==t.hasLocation),1007)?i("block",{attrs:{_hid:1007}},[i("view",{staticClass:"uni-h2 uni-center uni-common-mt",attrs:{_hid:1008}},[])]):t._e(),t._ri(!(!0!==t.hasLocation),1010)?i("block",{attrs:{_hid:1010}},[i("view",{staticClass:"uni-hello-text uni-center",staticStyle:{"margin-top":"10px"},attrs:{_hid:1011}},[t._v(t._s(t.locationAddress),1012)]),i("view",{staticClass:"uni-h2 uni-center uni-common-mt",attrs:{_hid:1013}},[i("text",{attrs:{_hid:1014}},[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′",1015)]),i("text",{attrs:{_hid:1016}},[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′",1017)])])]):t._e()],1),i("view",{staticClass:"uni-btn-v",attrs:{_hid:1018}},[i("button",{attrs:{type:"primary",_hid:1019},on:{tap:t.chooseLocation}},[]),i("button",{attrs:{_hid:1021},on:{tap:t.clear}},[])],1)])],1)},o=[];i.d(a,"a",function(){return n}),i.d(a,"b",function(){return o})}},[["8dc7","common/runtime","common/vendor"]]]);