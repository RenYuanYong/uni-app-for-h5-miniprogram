(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/countdown/countdown"],{"13d6":function(t,e,n){"use strict";var r=n("537d"),o=n.n(r);o.a},"22e4":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-countdown"},[n("view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.h))]),n("view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor}},[t._v(":")]),n("view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.i))]),n("view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor}},[t._v(":")]),n("view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.s))])])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},5106:function(t,e,n){"use strict";n.r(e);var r=n("bdb1"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"537d":function(t,e,n){},"5bfe":function(t,e,n){"use strict";n("0055");var r=i(n("b0ce")),o=i(n("dc1d"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,r.default)(o.default))},81285:function(t,e,n){"use strict";n.r(e);var r=n("22e4"),o=n("5106");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("94c5");var u=n("2877"),a=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},"94c5":function(t,e,n){"use strict";var r=n("ea18"),o=n.n(r);o.a},bdb1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"uni-countdown",props:{bgrColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},fontColor:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},timer:{type:String,default:""}},data:function(){return{setTime:null,h:"00",i:"00",s:"00",leftTime:0}},created:function(t){var e=/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/,n=this.timer.match(e);if(null==n)return console.log("时间格式错误"),!1;var r=parseInt(n[1]);if(r<1e3)return console.log("时间格式错误"),!1;var o=parseInt(n[2]),i=parseInt(n[3]),u=parseInt(n[4]);if(u<0||u>24)return console.log("时间格式错误"),!1;var a=parseInt(n[5]);if(a<0||a>60)return console.log("时间格式错误"),!1;var l=parseInt(n[6]);if(l<0||l>60)return console.log("时间格式错误"),!1;var s=new Date(r,o-1,i,u,a,l);this.leftTime=s,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(t){this.setTime=setInterval(function(){t.countDown(t)},1e3)},countDown:function(t){var e=t.leftTime-new Date;if(e>0)var n=parseInt(e/1e3/60/60,10),r=parseInt(e/1e3/60%60,10),o=parseInt(e/1e3%60,10);else n=0,r=0,o=0;n<10&&(n="0"+n),r<10&&(r="0"+r),o<10&&(o="0"+o),t.h=n,t.i=r,t.s=o}}};e.default=r},ccd9:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("page-head",{attrs:{title:t.title,mpcomid:"64dd07f7-0"}}),n("view",{staticClass:"uni-text-small uni-center title"},[t._v("示例1")]),n("view",[n("uni-countdown",{attrs:{timer:t.timer1,mpcomid:"64dd07f7-1"}})],1),n("view",{staticClass:"uni-text-small uni-center title"},[t._v("示例2")]),n("view",{staticStyle:{background:"#00B26A",padding:"50rpx 0"}},[n("uni-countdown",{attrs:{timer:t.timer2,borderColor:"#FFFFFF",splitorColor:"#FFF",fontColor:"#FFFFFF",bgrColor:"none",mpcomid:"64dd07f7-2"}})],1),n("view",{staticClass:"uni-text-small uni-center title"},[t._v("示例3")]),n("view",[n("uni-countdown",{attrs:{fontColor:"#FFFFFF",bgrColor:"#000000",timer:t.timer3,mpcomid:"64dd07f7-3"}})],1)],1)},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},cde1:function(t,e,n){"use strict";n.r(e);var r=n("d2a6"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},d2a6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("81285"));function o(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){var t=new Date,e=t.getTime(),n=this.formatDateTime(e+2e6),r=this.formatDateTime(e+3e6),o=this.formatDateTime(e+5e6);return{title:"倒计时",timer1:n,timer2:r,timer3:o}},components:{uniCountdown:r.default},methods:{formatDateTime:function(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth()+1;r=r<10?"0"+r:r;var o=e.getDate();o=o<10?"0"+o:o;var i=e.getHours();i=i<10?"0"+i:i;var u=e.getMinutes(),a=e.getSeconds();return u=u<10?"0"+u:u,a=a<10?"0"+a:a,n+"-"+r+"-"+o+" "+i+":"+u+":"+a}}};e.default=i},dc1d:function(t,e,n){"use strict";n.r(e);var r=n("ccd9"),o=n("cde1");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("13d6");var u=n("2877"),a=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},ea18:function(t,e,n){}},[["5bfe","common/runtime","common/vendor"]]]);