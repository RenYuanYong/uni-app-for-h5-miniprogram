(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/left-category/left-category"],{"118b":function(t,e,i){"use strict";i.r(e);var a=i("6683"),s=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=s.a},"1b30":function(t,e,i){"use strict";var a=i("60d3"),s=i.n(a);s.a},"60d3":function(t,e,i){},6683:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{categoryList:[],subCategoryList:[],height:0,categoryActive:0,scrollTop:0,scrollHeight:0,name:"七月_"}},methods:{scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t,e){this.categoryActive=e,this.subCategoryList=t.subCategoryList,this.scrollTop=-this.scrollHeight*e},getCategory:function(){for(var t=1;t<21;t++){for(var e=[],i=1;i<31;i++)e.push({NAME:"分类"+t+":商品"+i,LOGO:"http://placehold.it/50x50"});this.categoryList.push({NAME:"分类"+t,subCategoryList:e})}this.subCategoryList=this.categoryList[0].subCategoryList}},onLoad:function(){this.getCategory(),this.height=t.getSystemInfoSync().windowHeight}};e.default=i}).call(this,i("543d")["default"])},"856c":function(t,e,i){"use strict";i("0055");var a=c(i("b0ce")),s=c(i("f7ab"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},ede6:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"container"},[i("view",{staticClass:"page-body"},[i("scroll-view",{staticClass:"nav-left",style:"height:"+t.height+"px",attrs:{"scroll-y":""}},t._l(t.categoryList,function(e,a){return i("view",{key:a,staticClass:"nav-left-item",class:a==t.categoryActive?"active":"",attrs:{eventid:"cc8acd46-0-"+a},on:{click:function(i){t.categoryClickMain(e,a)}}},[t._v(t._s(e.NAME))])})),i("scroll-view",{staticClass:"nav-right",style:"height:"+t.height+"px",attrs:{"scroll-y":"","scroll-top":t.scrollTop,"scroll-with-animation":"",eventid:"cc8acd46-1"},on:{scroll:t.scroll}},[t._l(t.subCategoryList,function(e,a){return i("view",{key:a,staticClass:"nav-right-item",attrs:{id:0===a?"first":""}},[i("image",{attrs:{src:e.LOGO}}),i("view",[t._v(t._s(e.NAME))])])}),t.subCategoryList.length>1?i("page-foot",{attrs:{name:t.name,mpcomid:"cc8acd46-0"}}):t._e()],2)],1)])},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},f7ab:function(t,e,i){"use strict";i.r(e);var a=i("ede6"),s=i("118b");for(var c in s)"default"!==c&&function(t){i.d(e,t,function(){return s[t]})}(c);i("1b30");var o=i("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports}},[["856c","common/runtime","common/vendor"]]]);