(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4011,538,7013,9236,1475,6390,1290,2950,9249,7193,206,2096,7460,4232,3021],{89983:function(e,s,i){Promise.resolve().then(i.t.bind(i,90413,23)),Promise.resolve().then(i.t.bind(i,68326,23)),Promise.resolve().then(i.bind(i,7809)),Promise.resolve().then(i.bind(i,23627)),Promise.resolve().then(i.bind(i,27010)),Promise.resolve().then(i.bind(i,50170)),Promise.resolve().then(i.bind(i,64184)),Promise.resolve().then(i.bind(i,28159))},50170:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return b}});var l=i(57437),n=i(2265),r=i(61396),a=i.n(r),t=i(10495),o=i(61865),d=i(89701),m=i(35691),c=i(24033),p=i(10019),h=i(2205),x=i(26248),u=i(44997);let j=m.Ry().shape({name:m.Z_().required().label("Name"),email:m.Z_().required().email().label("Email"),password:m.Z_().required().min(6).label("Password"),remember:m.Xg().oneOf([!0],"You must agree to the terms and conditions to proceed.").label("Terms and Conditions")});var v=()=>{var e,s,i,r;let[a,t]=(0,n.useState)(!1),[m]=(0,u.DW)(),v=(0,c.useRouter)(),{register:g,handleSubmit:b,formState:{errors:N},reset:f}=(0,o.cI)({resolver:(0,d.X)(j)});return(0,l.jsxs)("form",{onSubmit:b(e=>{m({name:e.name,email:e.email,password:e.password}).then(e=>{if(null==e?void 0:e.error)(0,x.cB)("Register Failed");else{var s;(0,x.t5)(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message),v.push("/checkout")}}),f()}),children:[(0,l.jsxs)("div",{className:"tp-login-input-wrapper",children:[(0,l.jsxs)("div",{className:"tp-login-input-box",children:[(0,l.jsx)("div",{className:"tp-login-input",children:(0,l.jsx)("input",{...g("name",{required:"Name is required!"}),id:"name",name:"name",type:"text",placeholder:"Shahnewaz Sakil"})}),(0,l.jsx)("div",{className:"tp-login-input-title",children:(0,l.jsx)("label",{htmlFor:"name",children:"Your Name"})}),(0,l.jsx)(h.Z,{msg:null===(e=N.name)||void 0===e?void 0:e.message})]}),(0,l.jsxs)("div",{className:"tp-login-input-box",children:[(0,l.jsx)("div",{className:"tp-login-input",children:(0,l.jsx)("input",{...g("email",{required:"Email is required!"}),id:"email",name:"email",type:"email",placeholder:"shofy@mail.com"})}),(0,l.jsx)("div",{className:"tp-login-input-title",children:(0,l.jsx)("label",{htmlFor:"email",children:"Your Email"})}),(0,l.jsx)(h.Z,{msg:null===(s=N.email)||void 0===s?void 0:s.message})]}),(0,l.jsxs)("div",{className:"tp-login-input-box",children:[(0,l.jsxs)("div",{className:"p-relative",children:[(0,l.jsx)("div",{className:"tp-login-input",children:(0,l.jsx)("input",{...g("password",{required:"Password is required!"}),id:"password",name:"password",type:a?"text":"password",placeholder:"Min. 6 character"})}),(0,l.jsx)("div",{className:"tp-login-input-eye",id:"password-show-toggle",children:(0,l.jsx)("span",{className:"open-eye",onClick:()=>t(!a),children:a?(0,l.jsx)(p.Yo,{}):(0,l.jsx)(p.jd,{})})}),(0,l.jsx)("div",{className:"tp-login-input-title",children:(0,l.jsx)("label",{htmlFor:"password",children:"Password"})})]}),(0,l.jsx)(h.Z,{msg:null===(i=N.password)||void 0===i?void 0:i.message})]})]}),(0,l.jsx)("div",{className:"tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20",children:(0,l.jsxs)("div",{className:"tp-login-remeber",children:[(0,l.jsx)("input",{...g("remember",{required:"Terms and Conditions is required!"}),id:"remember",name:"remember",type:"checkbox"}),(0,l.jsxs)("label",{htmlFor:"remember",children:["I accept the terms of the Service & ",(0,l.jsx)("a",{href:"#",children:"Privacy Policy"}),"."]}),(0,l.jsx)(h.Z,{msg:null===(r=N.remember)||void 0===r?void 0:r.message})]})}),(0,l.jsx)("div",{className:"tp-login-bottom",children:(0,l.jsx)("button",{type:"submit",className:"tp-login-btn w-100",children:"Sign Up"})})]})},g=i(48504),b=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("section",{className:"tp-login-area pb-140 p-relative z-index-1 fix",children:[(0,l.jsx)(t.Z,{}),(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-xl-6 col-lg-8",children:(0,l.jsxs)("div",{className:"tp-login-wrapper",children:[(0,l.jsxs)("div",{className:"tp-login-top text-center mb-30",children:[(0,l.jsx)("h3",{className:"tp-login-title",children:"Sign Up Shofy."}),(0,l.jsxs)("p",{children:["Already have an account?"," ",(0,l.jsx)("span",{children:(0,l.jsx)(a(),{href:"/login",children:"Sign In"})})]})]}),(0,l.jsxs)("div",{className:"tp-login-option",children:[(0,l.jsx)("div",{className:"tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center",children:(0,l.jsx)("div",{className:"tp-login-option-item has-google",children:(0,l.jsx)(g.Z,{})})}),(0,l.jsx)("div",{className:"tp-login-mail text-center mb-40",children:(0,l.jsxs)("p",{children:["or Sign up with ",(0,l.jsx)("a",{href:"#",children:"Email"})]})}),(0,l.jsx)(v,{})]})]})})})})]})})}},function(e){e.O(0,[4316,3934,3964,3449,1566,4184,4349,2971,2472,1744],function(){return e(e.s=89983)}),_N_E=e.O()}]);