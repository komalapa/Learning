(function(t){function e(e){for(var n,o,a=e[0],c=e[1],l=e[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/js2-test-vue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"3ed7":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrp",attrs:{id:"shoppy-app"}},[r("connection-error",{attrs:{gl:t.goodsList}},[t._v("Внимание! Отсутствует соединение с сервером")]),r("header",[r("a",{staticClass:"logo",attrs:{href:"#"}},[t._v("Shoppy")]),r("SearchForm",{on:{submit:function(e){return e.preventDefault(),t.filter()}},model:{value:t.searchLine,callback:function(e){t.searchLine=e},expression:"searchLine"}})],1),t._m(0),r("main",[r("CartSection",{attrs:{cart:t.cart,isVisibleCart:t.isVisibleCart}}),r("GoodsSection",{attrs:{cart:t.cart,filteredGoods:t.filteredGoods}})],1),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"menu"},[r("ul",{staticClass:"menu-list"},[r("li",[r("a",{attrs:{href:"#"}},[t._v("Home")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Sale")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Handbags")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Wallets")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Accessories")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Mens Store")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Shoes")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Vintage")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Services")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Contact us")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("section",{staticClass:"copyrights"},[r("p",[t._v("Copyright © 2013 "),r("a",{attrs:{href:"http://psd-html-css.ru/templates/psd-shablon-internet-magazina"}},[t._v(" Css Author")])])])])}],o=(r("99af"),r("4de4"),r("4160"),r("c975"),r("a434"),r("d3b7"),r("159b"),r("d4ec")),a=r("bee2"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isVisibleCart?r("section",{staticClass:"cart-wrp"},[r("span",{staticClass:"cart-title"},[r("span",{staticClass:"cart"},[r("svg",{staticClass:"cart-icon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"45",height:"39",viewBox:"0 0 45 39"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M21.896118,1.0094223 C20.430176,1.0094223 19.228394,2.015686 18.956665,3.3909397 C18.956665,3.3909397 18.880127,3.3909397 18.880127,3.3909397 C18.880127,3.3909397 9.230957,14.131458 9.230957,14.131458 C9.230957,14.131458 14.055542,14.131458 14.055542,14.131458 C14.055542,14.131458 20.729858,6.7112865 20.729858,6.7112865 C21.089111,6.86195 21.483887,6.9741573 21.896118,6.9741573 C22.315186,6.9741573 22.702515,6.86195 23.069214,6.7112865 C23.069214,6.7112865 29.735962,14.131458 29.735962,14.131458 C29.735962,14.131458 34.568115,14.131458 34.568115,14.131458 C34.568115,14.131458 24.912231,3.3909397 24.912231,3.3909397 C24.912231,3.3909397 24.834839,3.3909397 24.834839,3.3909397 C24.57129,2.015686 23.368896,1.0094223 21.896118,1.0094223 C21.896118,1.0094223 21.896118,1.0094223 21.896118,1.0094223 ZM4.4072266,16.514553 C3.0690918,16.514553 1.9910889,17.58059 1.9910889,18.903515 C1.9910889,18.903515 1.9910889,20.096306 1.9910889,20.096306 C1.9910889,21.355068 2.9682007,22.345428 4.218628,22.445122 C4.218628,22.445122 8.023315,35.602905 8.023315,35.602905 C9.230957,37.990402 10.439331,37.990402 11.639404,37.990402 C11.639404,37.990402 33.35962,37.990402 33.35962,37.990402 C34.568115,37.990402 35.76819,37.990402 36.976562,35.602905 C36.976562,35.602905 40.78882,22.445122 40.78882,22.445122 C42.030884,22.345428 43.00879,21.355068 43.00879,20.096306 C43.00879,20.096306 43.00879,18.903515 43.00879,18.903515 C43.00879,17.58059 41.936768,16.514553 40.60022,16.514553 C40.60022,16.514553 4.4072266,16.514553 4.4072266,16.514553 C4.4072266,16.514553 4.4072266,16.514553 4.4072266,16.514553 ZM11.193359,22.47929 C11.193359,22.47929 11.793457,22.47929 11.793457,22.47929 C13.131348,22.47929 14.450928,23.475407 14.73291,24.716122 C14.73291,24.716122 16.429443,32.137875 16.429443,32.137875 C16.713013,33.384342 15.847046,34.408764 14.509155,34.408764 C14.509155,34.408764 13.901489,34.408764 13.901489,34.408764 C12.565796,34.408764 11.246338,33.384342 10.962769,32.137875 C10.962769,32.137875 9.266235,24.716122 9.266235,24.716122 C8.984253,23.475407 9.855347,22.47929 11.193359,22.47929 C11.193359,22.47929 11.193359,22.47929 11.193359,22.47929 ZM22.503662,22.47929 C23.84021,22.47929 24.912231,23.545326 24.912231,24.868366 C24.912231,24.868366 24.912231,32.025665 24.912231,32.025665 C24.912231,33.348705 23.84021,34.408764 22.503662,34.408764 C21.16565,34.408764 20.087769,33.348705 20.087769,32.025665 C20.087769,32.025665 20.087769,24.868366 20.087769,24.868366 C20.087769,23.545326 21.16565,22.47929 22.503662,22.47929 C22.503662,22.47929 22.503662,22.47929 22.503662,22.47929 ZM33.20642,22.47929 C33.20642,22.47929 33.814087,22.47929 33.814087,22.47929 C35.150513,22.47929 36.015625,23.475407 35.733643,24.716122 C35.733643,24.716122 34.03711,32.137875 34.03711,32.137875 C33.75354,33.384342 32.435547,34.408764 31.097656,34.408764 C31.097656,34.408764 30.48999,34.408764 30.48999,34.408764 C29.154297,34.408764 28.288452,33.384342 28.570435,32.137875 C28.570435,32.137875 30.266968,24.716122 30.266968,24.716122 C30.550537,23.475407 31.86853,22.47929 33.20642,22.47929 C33.20642,22.47929 33.20642,22.47929 33.20642,22.47929 Z"}})]),r("span",{staticClass:"cart-sum"},[t._v("\\$"+t._s(t.cart.sum))])])]),r("div",{staticClass:"cart-list"},t._l(t.cart.orderList,(function(e){return r("GoodsItemRender",{key:e.art,attrs:{good:e,cart:t.cart}})})),1)]):t._e()},l=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-item"},[r("div",{staticClass:"img-wrp"},[r("img",{attrs:{src:t.good.img,alt:"shoes"}})]),r("span",{staticClass:"goods-item-title"},[t._v(t._s(t.good.title))]),r("div",{staticClass:"goods-item-buy-wrp"},[r("span",{staticClass:"goods-item-price"},[t._v("$"+t._s(t.good.price))]),r("button",{staticClass:"goods-item-buy btn",on:{click:function(e){return e.preventDefault(),t.cart.addItem(t.good)}}},[t._v("bUY NOW")])]),r("div",{staticClass:"goods-item-in-cart"},[t._v(" Qty: "+t._s(t.good.countInCart)+" ")]),r("button",{staticClass:"cart-delete",on:{click:function(e){return e.preventDefault(),t.cart.deleteItem(t.good)}}},[t._v("✘")])])},d=[],f={name:"GoodsItemRender",props:{good:Object,cart:Object}},p=f,h=(r("b073"),r("2877")),C=Object(h["a"])(p,u,d,!1,null,null,null),m=C.exports,g={name:"CartSection",props:{cart:Object,isVisibleCart:Boolean},components:{GoodsItemRender:m}},v=g,b=(r("a86c"),Object(h["a"])(v,c,l,!1,null,null,null)),_=b.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.gl.goods.length?t._e():r("div",{staticClass:"error-not-connected"},[t._t("default")],2)},y=[],O={name:"ConnectionError",props:{gl:Object}},L=O,x=(r("df79"),Object(h["a"])(L,w,y,!1,null,null,null)),S=x.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"goods"},[r("span",{staticClass:"goods-title"},[t._v("FEATURED goods")]),t.filteredGoods.length?t._e():r("span",{staticClass:"not-found-msg"},[t._v("Нет данных")]),t.filteredGoods.length?r("div",{staticClass:"goods-list"},t._l(t.filteredGoods,(function(e){return r("GoodsItemRender",{key:e.art,attrs:{good:e,cart:t.cart}})})),1):t._e()])},E=[],k={name:"GoodsSection",props:{cart:Object,filteredGoods:Array},components:{GoodsItemRender:m}},G=k,I=(r("891d"),Object(h["a"])(G,j,E,!1,null,null,null)),D=I.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"search",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[r("input",{attrs:{type:"text",id:"search-input"},domProps:{value:this.searchLine},on:{input:function(e){return t.$emit("input",e.target.value)}}}),r("button",{staticClass:"search-btn",on:{click:t.search}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"22",height:"22",viewBox:"0 0 26 26"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M23.51477,22.871792 C23.51477,22.871792 22.870789,23.515156 22.870789,23.515156 C22.22406,24.161343 21.175537,24.161343 20.52887,23.515156 C20.52887,23.515156 16.477356,19.467545 16.477356,19.467545 C15.023132,20.377842 13.303833,20.904713 11.461182,20.904713 C6.235901,20.904713 1.9998779,16.672718 1.9998779,11.452278 C1.9998779,6.2318344 6.235901,1.9998417 11.461182,1.9998417 C16.686523,1.9998417 20.922485,6.2318344 20.922485,11.452278 C20.922485,13.303993 20.389038,15.030983 19.468079,16.489124 C19.468079,16.489124 23.51477,20.532001 23.51477,20.532001 C24.161499,21.178185 24.161499,22.225723 23.51477,22.871792 ZM11.461182,4.615925 C7.682068,4.615925 4.618408,7.67667 4.618408,11.452278 C4.618408,15.227882 7.682068,18.288628 11.461182,18.288628 C15.240356,18.288628 18.304016,15.227882 18.304016,11.452278 C18.304016,7.67667 15.240356,4.615925 11.461182,4.615925 Z"}})])])])},M=[],$={name:"SearchForm",methods:{search:function(){this.$parent.filter()}}},A=$,B=(r("7ab0"),Object(h["a"])(A,R,M,!1,null,null,null)),T=B.exports,H=function(){function t(e,r,n,s){Object(o["a"])(this,t),this.title=e,this.price=r,this.img=n,this.countInCart=0,console.log("art "),this.art=s}return Object(a["a"])(t,[{key:"render",value:function(){return'<div class="goods-item">\n                <div class="img-wrp"><img src="'.concat(this.img,'" alt="shoes"></div>\n                <span class="goods-item-title">').concat(this.title,'</span>\n                <div class="goods-item-buy-wrp">  \n                    <span class="goods-item-price">$').concat(this.price,'</span>\n                    <button class="goods-item-buy btn">bUY NOW</button>\n                    <button class="cart-delete">&#10008;</button>\n                </div>  \n            </div> ')}}]),t}(),N=function(){function t(){Object(o["a"])(this,t),this.goods=[],console.log(this.goods),this.fetchGoods()}return Object(a["a"])(t,[{key:"fetchGoods",value:function(){var t=this,e=[{title:"BRANDED SHOE",price:150,img:"img/product1.png",art:1},{title:"BRANDED T-SHIRT",price:50,img:"img/product2.png",art:2},{title:"BRANDED T-SHIRT",price:20,img:"img/product3.png",art:3},{title:"BRANDED THING",price:300,img:"img/product4.png",art:4},{title:"BRANDED BAG",price:400,img:"img/product5.png",art:5},{title:"BRANDED BREECHES",price:150,img:"img/product6.png",art:6}],r=new Promise((function(r,n){setTimeout((function(){e.forEach((function(e){var r=new H(e.title,e.price,e.img,e.art);t.goods.push(r)})),t.goods?r():n()}),0)}));return r}},{key:"render",value:function(){var t="";this.goods.forEach((function(e){t+=e.render()})),document.querySelector(".goods-list").innerHTML=t}},{key:"sumAll",value:function(){var t=0;return this.goods.forEach((function(e){t+=e.price})),t}}]),t}(),P=function(){function t(){Object(o["a"])(this,t),this.orderList=[],this.sum=0,this.finSum=0}return Object(a["a"])(t,[{key:"addItem",value:function(t){this.orderList.indexOf(t)>=0?this.orderList[this.orderList.indexOf(t)].countInCart++:(t.countInCart++,this.orderList.push(t)),this.sum+=t.price}},{key:"deleteItem",value:function(t){t.countInCart>1?(this.orderList[this.orderList.indexOf(t)].countInCart--,this.sum-=t.price):this.orderList.indexOf(t)>=0&&(this.orderList.splice(this.orderList.indexOf(t),1),this.sum-=t.price)}},{key:"sale",value:function(t,e){this.sum>t?this.finSum=this.sum*(1-e/100):this.finSum=this.sum}},{key:"consoleLogList",value:function(){this.orderList.forEach((function(t){return console.log(t)}))}},{key:"renderCartList",value:function(){var t="";this.orderList.forEach((function(e){t+=e.render()})),document.querySelector(".cart-list").innerHTML=t}}]),t}(),Z={name:"App",components:{SearchForm:T,GoodsSection:D,ConnectionError:S,CartSection:_},data:function(){return{goodsList:new N,filteredGoods:[],searchLine:"",cart:new P}},computed:{isVisibleCart:function(){return Boolean(this.cart.orderList.length)}},methods:{filter:function(){var t=this;this.filteredGoods=this.goodsList.goods.filter((function(e){return e.title.toLowerCase().indexOf(t.searchLine.toLowerCase())>=0}))}},mounted:function(){this.filteredGoods=this.goodsList.goods}},V=Z,F=(r("034f"),Object(h["a"])(V,s,i,!1,null,null,null)),U=F.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(U)}}).$mount("#app")},"5c18":function(t,e,r){},"7ab0":function(t,e,r){"use strict";var n=r("5c18"),s=r.n(n);s.a},"85ec":function(t,e,r){},"891d":function(t,e,r){"use strict";var n=r("ec52"),s=r.n(n);s.a},"92ab":function(t,e,r){},9538:function(t,e,r){},a86c:function(t,e,r){"use strict";var n=r("3ed7"),s=r.n(n);s.a},b073:function(t,e,r){"use strict";var n=r("9538"),s=r.n(n);s.a},df79:function(t,e,r){"use strict";var n=r("92ab"),s=r.n(n);s.a},ec52:function(t,e,r){}});
//# sourceMappingURL=app.227a599e.js.map