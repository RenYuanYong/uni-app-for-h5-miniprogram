(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/API/request-payment/request-payment"],{"0631":function(t,e,n){"use strict";n("0055");var o=i(n("9226")),a=i(n("3a53"));function i(t){return t&&t.__esModule?t:{default:t}}o.default.mpType="page";var s=new a.default(o.default);s.$mount()},"0b90":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{attrs:{_hid:0}},[n("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),n("view",{staticClass:"uni-padding-wrap",attrs:{_hid:1003}},[n("view",{staticStyle:{background:"#FFF",padding:"50rpx 0"},attrs:{_hid:1004}},[n("view",{staticClass:"uni-hello-text uni-center",attrs:{_hid:1005}},[]),n("view",{staticClass:"uni-h1 uni-center uni-common-mt",attrs:{_hid:1007}},[n("text",{staticClass:"rmbLogo",attrs:{_hid:1008}},[]),n("input",{staticClass:"price",attrs:{type:"number",value:t.price,maxlength:"3",_hid:1010,_batrs:"value"},on:{input:t.priceChange}})])]),n("view",{staticClass:"uni-btn-v uni-common-mt",attrs:{_hid:1011}})])],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"2f9e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,a,i,s){try{var c=t[i](s),r=c.value}catch(u){return void n(u)}c.done?e(r):Promise.resolve(r).then(o,a)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(o,a){var s=t.apply(e,n);function c(t){i(s,o,a,c,r,"next",t)}function r(t){i(s,o,a,c,r,"throw",t)}c(void 0)})}}var c={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{weixinPay:function(){var e=this;console.log("发起支付"),this.loading=!0,t.login({success:function(n){console.log("login success",n),t.request({url:"https://unidemo.dcloud.net.cn/payment/wx/mp?code=".concat(n.code,"&amount=").concat(e.price),success:function(n){if(console.log("pay request success",n),200===n.statusCode)if(0===n.data.ret){console.log("得到接口prepay_id",n.data.payment);var o=n.data.payment;t.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:"MD5",paySign:o.paySign,success:function(e){t.showToast({title:"感谢您的赞助!"})},fail:function(e){t.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})},complete:function(){e.loading=!1}})}else t.showModal({content:n.data.desc,showCancel:!1});else t.showModal({content:"支付失败，请重试！",showCancel:!1})},fail:function(n){console.log("fail",n),e.loading=!1,t.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},fail:function(n){console.log("fail",n),e.loading=!1,t.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},requestPayment:function(){var e=s(o.default.mark(function e(n,a){var i,s=this;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.providerList[a].loading=!0,e.next=3,this.getOrderInfo(n.id);case 3:if(i=e.sent,console.log("得到订单信息",i),200===i.statusCode){e.next=9;break}return console.log("获得订单信息失败",i),t.showModal({content:"获得订单信息失败",showCancel:!1}),e.abrupt("return");case 9:t.requestPayment({provider:n.id,orderInfo:i.data,success:function(e){console.log("success",e),t.showToast({title:"感谢您的赞助!"})},fail:function(e){console.log("fail",e),t.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})},complete:function(){s.providerList[a].loading=!1}});case 10:case"end":return e.stop()}},e,this)}));function n(t,n){return e.apply(this,arguments)}return n}(),getOrderInfo:function(e){var n="",o="https://demo.dcloud.net.cn/payment/?payid="+e+"&appid="+n+"&total="+this.price;return new Promise(function(e){t.request({url:o,success:function(t){e(t)},fail:function(t){e(t)}})})},priceChange:function(t){console.log(t.detail.value),this.price=t.detail.value}}};e.default=c}).call(this,n("c11b")["default"])},"588e":function(t,e,n){},"7a62":function(t,e,n){"use strict";n.r(e);var o=n("2f9e"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},9226:function(t,e,n){"use strict";n.r(e);var o=n("0b90"),a=n("7a62");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("ba96");var s=n("2877"),c=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},ba96:function(t,e,n){"use strict";var o=n("588e"),a=n.n(o);a.a}},[["0631","common/runtime","common/vendor"]]]);