(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1565,1475,538,9236,6390,1290,7013,2950,9249,7193,2096,206,4232,7460,3021],{95697:function(e,s,t){Promise.resolve().then(t.t.bind(t,90413,23)),Promise.resolve().then(t.t.bind(t,68326,23)),Promise.resolve().then(t.bind(t,7809)),Promise.resolve().then(t.bind(t,23627)),Promise.resolve().then(t.bind(t,27010)),Promise.resolve().then(t.bind(t,53724)),Promise.resolve().then(t.bind(t,64184)),Promise.resolve().then(t.bind(t,28159))},27010:function(e,s,t){"use strict";t.r(s);var c=t(57437);s.default=e=>{let{title:s,subtitle:t,center:i=!1,bg_clr:a=!1}=e;return(0,c.jsx)("section",{className:"breadcrumb__area ".concat(i?"text-center":""," include-bg pt-95 pb-50"),style:{backgroundColor:a&&"#EFF1F5"},children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-xxl-12",children:(0,c.jsxs)("div",{className:"breadcrumb__content p-relative z-index-1",children:[(0,c.jsx)("h3",{className:"breadcrumb__title",children:s}),(0,c.jsxs)("div",{className:"breadcrumb__list",children:[(0,c.jsx)("span",{children:(0,c.jsx)("a",{href:"/",children:"Home"})}),(0,c.jsx)("span",{children:t})]})]})})})})})}},53724:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var c=t(57437),i=t(2265),a=t(81023),n=t(61396),r=t.n(n),l=t(56026),d=t(47407),h=()=>{let{total:e}=(0,d.Z)(),[s,t]=(0,i.useState)(0),a=e=>{"free"===e?t(0):t(e)};return(0,c.jsxs)("div",{className:"tp-cart-checkout-wrapper",children:[(0,c.jsxs)("div",{className:"tp-cart-checkout-top d-flex align-items-center justify-content-between",children:[(0,c.jsx)("span",{className:"tp-cart-checkout-top-title",children:"Subtotal"}),(0,c.jsxs)("span",{className:"tp-cart-checkout-top-price",children:["$",e]})]}),(0,c.jsxs)("div",{className:"tp-cart-checkout-shipping",children:[(0,c.jsx)("h4",{className:"tp-cart-checkout-shipping-title",children:"Shipping"}),(0,c.jsxs)("div",{className:"tp-cart-checkout-shipping-option-wrapper",children:[(0,c.jsxs)("div",{className:"tp-cart-checkout-shipping-option",children:[(0,c.jsx)("input",{id:"flat_rate",type:"radio",name:"shipping"}),(0,c.jsxs)("label",{htmlFor:"flat_rate",onClick:()=>a(20),children:["Flat rate: ",(0,c.jsx)("span",{children:"$20.00"})]})]}),(0,c.jsxs)("div",{className:"tp-cart-checkout-shipping-option",children:[(0,c.jsx)("input",{id:"local_pickup",type:"radio",name:"shipping"}),(0,c.jsxs)("label",{htmlFor:"local_pickup",onClick:()=>a(25),children:["Local pickup: ",(0,c.jsx)("span",{children:" $25.00"})]})]}),(0,c.jsxs)("div",{className:"tp-cart-checkout-shipping-option",children:[(0,c.jsx)("input",{id:"free_shipping",type:"radio",name:"shipping"}),(0,c.jsx)("label",{onClick:()=>a("free"),htmlFor:"free_shipping",children:"Free shipping"})]})]})]}),(0,c.jsxs)("div",{className:"tp-cart-checkout-total d-flex align-items-center justify-content-between",children:[(0,c.jsx)("span",{children:"Total"}),(0,c.jsxs)("span",{children:["$",(e+s).toFixed(2)]})]}),(0,c.jsx)("div",{className:"tp-cart-checkout-proceed",children:(0,c.jsx)(r(),{href:"/checkout",className:"tp-cart-checkout-btn w-100",children:"Proceed to Checkout"})})]})},p=t(16691),o=t.n(p),x=t(10019),m=e=>{let{product:s}=e,{_id:t,img:i,title:n,price:d,orderQuantity:h=0}=s||{},p=(0,a.I0)(),m=e=>{p((0,l.YR)(e))},j=e=>{p((0,l.nL)(e))},u=e=>{p((0,l.Le)(e))};return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"tp-cart-img",children:(0,c.jsx)(r(),{href:"/product-details/".concat(t),children:(0,c.jsx)(o(),{src:i,alt:"product img",width:70,height:100})})}),(0,c.jsx)("td",{className:"tp-cart-title",children:(0,c.jsx)(r(),{href:"/product-details/".concat(t),children:n})}),(0,c.jsx)("td",{className:"tp-cart-price",children:(0,c.jsxs)("span",{children:["$",(d*h).toFixed(2)]})}),(0,c.jsx)("td",{className:"tp-cart-quantity",children:(0,c.jsxs)("div",{className:"tp-product-quantity mt-10 mb-10",children:[(0,c.jsx)("span",{onClick:()=>j(s),className:"tp-cart-minus",children:(0,c.jsx)(x.WF,{})}),(0,c.jsx)("input",{className:"tp-cart-input",type:"text",value:h,readOnly:!0}),(0,c.jsx)("span",{onClick:()=>m(s),className:"tp-cart-plus",children:(0,c.jsx)(x.v3,{})})]})}),(0,c.jsx)("td",{className:"tp-cart-action",children:(0,c.jsxs)("button",{onClick:()=>u({title:n,id:t}),className:"tp-cart-action-btn",children:[(0,c.jsx)(x.x8,{}),(0,c.jsxs)("span",{children:[" ","Remove"]})]})})]})},j=t(92640),u=()=>{let{cart_products:e}=(0,a.v9)(e=>e.cart),s=(0,a.I0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("section",{className:"tp-cart-area pb-120",children:(0,c.jsxs)("div",{className:"container",children:[0===e.length&&(0,c.jsxs)("div",{className:"text-center pt-50",children:[(0,c.jsx)("h3",{children:"No Cart Items Found"}),(0,c.jsx)(r(),{href:"/shop",className:"tp-cart-checkout-btn mt-20",children:"Continue Shipping"})]}),e.length>0&&(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-xl-9 col-lg-8",children:[(0,c.jsxs)("div",{className:"tp-cart-list mb-25 mr-30",children:[(0,c.jsx)("div",{className:"cartmini__shipping",children:(0,c.jsx)(j.Z,{})}),(0,c.jsxs)("table",{className:"table",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{colSpan:"2",className:"tp-cart-header-product",children:"Product"}),(0,c.jsx)("th",{className:"tp-cart-header-price",children:"Price"}),(0,c.jsx)("th",{className:"tp-cart-header-quantity",children:"Quantity"}),(0,c.jsx)("th",{})]})}),(0,c.jsx)("tbody",{children:e.map((e,s)=>(0,c.jsx)(m,{product:e},s))})]})]}),(0,c.jsx)("div",{className:"tp-cart-bottom",children:(0,c.jsxs)("div",{className:"row align-items-end",children:[(0,c.jsx)("div",{className:"col-xl-6 col-md-8"}),(0,c.jsx)("div",{className:"col-xl-6 col-md-4",children:(0,c.jsx)("div",{className:"tp-cart-update text-md-end mr-30",children:(0,c.jsx)("button",{onClick:()=>s((0,l.LL)()),type:"button",className:"tp-cart-update-btn",children:"Clear Cart"})})})]})})]}),(0,c.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,c.jsx)(h,{})})]})]})})})}},24033:function(e,s,t){e.exports=t(50094)}},function(e){e.O(0,[4316,3934,3449,1566,4184,2971,2472,1744],function(){return e(e.s=95697)}),_N_E=e.O()}]);