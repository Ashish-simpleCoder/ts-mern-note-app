"use strict";(self.webpackChunkts_mern_note_app_frontend=self.webpackChunkts_mern_note_app_frontend||[]).push([[709],{9406:function(n,e,r){var t,a=r(168),i=r(8152),o=r(2791),s=r(5751),u=r(184),l=(0,o.memo)((function(n){var e=n.children,r=(0,o.useState)(!1),t=(0,i.Z)(r,2),a=t[0],s=t[1];return(0,u.jsx)(m,{children:o.Children.map(e,(function(n){return"string"===typeof n.type?n:(0,o.cloneElement)(n,{focus:a,setFocus:s})}))})}));e.Z=l;var m=s.ZP.div(t||(t=(0,a.Z)(["\n    display:flex;\n    align-items:center;\n    width:100%;\n    position:relative;\n    margin-top:5rem;\n\n    /* giving margin on email form field */\n    &:nth-of-type(1){\n        margin-top:3rem;\n    }\n\n    label{\n        position:absolute;\n        top:50%;\n        left:0;\n        transform:translate(4rem, -50%);\n        pointer-events:none;\n        transition:all 0.25s;\n    }\n    .transform{\n        color:var(--transform-label-clr);\n        transform:translate(1rem, -230%);\n        font-size:clamp(1.4rem, 1.5rem, 1.5vw);\n    }\n\n    >img{\n        height:2.5rem;\n        position:absolute;\n        top:50%;\n        left: 0.5rem;\n        transform:translateY(-50%);\n    }\n\n    >input{\n        width:100%;\n        padding:1rem 0.5rem 1rem 4rem;\n    }\n"])))},2984:function(n,e,r){var t,a=r(168),i=r(5751),o=r(5455),s=r(184);e.Z=function(n){var e=n.props,r=n.setFocus,t=e.state,a=e.name,i=e.handleChanges;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{src:"./imgs/".concat(a,".avif"),alt:a}),(0,s.jsx)(u,{type:"text",value:t,name:a,onChange:function(n){return i(n)},onFocus:function(){return r&&r(!0)},onBlur:function(n){r&&r(n.target.value.length>0)}})]})};var u=i.ZP.input(t||(t=(0,a.Z)(["\n    border:none;\n    outline:none;\n    /* padding:0.5rem 1rem; */\n    height:4rem;\n    background:var(--login-input-bg);\n    font-size:clamp(1.6rem, 1.7rem, 1.7vw);\n    &:hover{\n        background:var(--input-hover-bg) !important;\n    }\n"])))},4373:function(n,e,r){var t,a=r(168),i=r(5751),o=r(184);e.Z=function(n){return(0,o.jsx)(s,{className:n.focus&&"transform",children:n.text})};var s=i.ZP.label(t||(t=(0,a.Z)(["\n    font-size:clamp(1.5rem, 1.6rem, 1.6vw);\n"])))},8094:function(n,e,r){var t,a=r(168),i=r(5751),o=r(184);e.Z=function(n){var e=n.error;return(0,o.jsx)(s,{children:e})};var s=i.ZP.p(t||(t=(0,a.Z)(["\n    color:red;\n    font-size:clamp(1.5rem,1.6rem,1.6vw);\n"])))},8956:function(n,e,r){var t,a,i,o,s,u=r(168),l=r(2791),m=r(5751),c=r(184),d=(0,l.memo)((function(n){var e=n.children,r=n.no_bg,t=n.mode,a=n.handleSubmit,i=n.styles,o=n.animate;return(0,c.jsx)(f,{onSubmit:function(n){n.preventDefault(),a&&a(n)},style:i,no_bg:r,mode:t,animate:o,children:e})}));e.Z=d;var f=m.ZP.form(t||(t=(0,u.Z)(["\n    height:45rem;\n    width:90%;\n    display:flex;\n    align-items:center;\n    flex-direction:column;\n    max-width:35rem;\n    background:var(--form-bg);\n\n    ","\n    ","\n    button{\n        margin-top:auto   //button will be at the bottom of the form\n    }\n\n    /* animate flag */\n    ","\n\n    @keyframes animate_form{\n        0%{\n            opacity:0;\n            transform:translateX(-100%);\n        }\n        50%{\n            transform:translateX(50%);\n        }\n    }\n\n"])),(function(n){var e=n.mode;return"login"===e||"register"===e?(0,m.iv)(a||(a=(0,u.Z)(["\n                margin: auto;\n                max-width:40rem;\n                margin-top:5rem;\n                border-radius:0.5rem;\n                box-shadow:0 0.3rem 0.3rem rgba(0,0,0,0.3);\n                padding:0 2rem 2rem 2rem;\n                >h3{\n                    padding:1rem 0 2rem 0;\n                }\n                .div{\n                    padding:0 2rem;\n                    margin-top:2rem;\n                    width:100%;\n                    display:flex;\n                    justify-content:space-between;\n                    align-items:center;\n                }\n            "]))):"create_note"===e?(0,m.iv)(i||(i=(0,u.Z)(["\n                height:25rem;\n                @media (min-width:700px){\n                    height:50rem;\n                }\n            "]))):void 0}),(function(n){if(!0===n.no_bg)return(0,m.iv)(o||(o=(0,u.Z)(["\n            background:inherit;\n        "])))}),(function(n){if(n.animate)return(0,m.iv)(s||(s=(0,u.Z)(["\n                animation:animate_form 0.4s ease-in forwards;\n            "])))}))},9719:function(n,e,r){var t,a=r(168),i=r(2791),o=r(5751),s=r(184),u=(0,i.memo)((function(n){var e=n.text,r=n.styles,t=n.handleClick;return(0,s.jsx)(l,{style:r,onClick:t,children:e})}));e.Z=u;var l=o.ZP.h3(t||(t=(0,a.Z)(["\n    font-size:2.2rem;\n    font-weight:500;\n"])))},4508:function(n,e,r){var t=r(1413),a=r(5861),i=r(8152),o=r(7757),s=r.n(o),u=r(2791),l=r(9271),m=r(5404),c=r(5969);e.Z=function(){var n=(0,u.useState)({email:"",password:""}),e=(0,i.Z)(n,2),r=e[0],o=e[1],d=(0,u.useState)({email:"",password:"",err:""}),f=(0,i.Z)(d,2),p=f[0],h=f[1],v=(0,u.useState)(!1),g=(0,i.Z)(v,2),Z=g[0],x=g[1],b=(0,l.k6)(),w=(0,c.Z)().handleChange,j=(0,m.ZP)().setUser,y=(0,u.useCallback)((function(n){w(n,o)}),[]),_=(0,u.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(e,r){var t,a,i,o,u;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/v1/user/login",{method:"POST",body:JSON.stringify({email:e,password:r}),headers:{"Content-Type":"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,i=a.errors,o=a._id,u=a.email,n.abrupt("return",{errors:i,_id:o,email_id:u});case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,r){return n.apply(this,arguments)}}(),[]),k=(0,u.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(e,r){var a,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/v1/user",{method:"POST",body:JSON.stringify({email:e,password:r}),headers:{"Content-Type":"application/json"}});case 3:return a=n.sent,n.next=6,a.json();case 6:return i=n.sent,n.abrupt("return",(0,t.Z)({},i));case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,r){return n.apply(this,arguments)}}(),[]),C=(0,u.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(e){var t,a,i,o,u,l=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=l.length>1&&void 0!==l[1]?l[1]:"login",e.preventDefault(),x(!0),"login"!==a){n.next=10;break}return n.next=6,_(r.email,r.password);case 6:i=n.sent,null!==(o=i)&&void 0!==o&&o._id&&(j({_id:i._id,email:i.email_id}),b.push("/")),n.next=15;break;case 10:return n.next=12,k(r.email,r.password);case 12:if(i=n.sent,null===(u=i)||void 0===u||!u._id){n.next=15;break}return n.abrupt("return",b.push("/login"));case 15:x(!1),(null===(t=i)||void 0===t?void 0:t.errors)&&h(i.errors);case 17:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[r,b,k]);return(0,u.useEffect)((function(){var n=p&&setTimeout((function(){return h({email:"",password:"",err:""})}),3e3);return function(){clearInterval(n)}}),[p]),{handleSubmit:C,loader:Z,errors:p,state:r,setState:o,handleChanges:y}}},5709:function(n,e,r){r.r(e),r.d(e,{default:function(){return p}});var t=r(2791),a=r(9406),i=r(2984),o=r(4373),s=r(8781),u=r(8094),l=r(8956),m=r(9719),c=r(4508),d=r(184),f=function(){var n=(0,c.Z)(),e=n.handleSubmit,r=n.loader,f=n.errors,p=n.state,h=n.handleChanges,v=(0,t.useMemo)((function(){return{state:p.email,handleChanges:h,name:"email"}}),[p.email,h]),g=(0,t.useMemo)((function(){return{state:p.password,handleChanges:h,name:"password"}}),[p.password,h]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(l.Z,{mode:"login",handleSubmit:e,animate:!0,children:[(0,d.jsx)(m.Z,{text:"Login",styles:{color:"var(--secondary-clr)"}}),(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(o.Z,{text:"email"}),(0,d.jsx)(i.Z,{props:v})]}),(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(o.Z,{text:"password"}),(0,d.jsx)(i.Z,{props:g})]}),f.email&&(0,d.jsx)(u.Z,{error:f.email}),f.password&&(0,d.jsx)(u.Z,{error:f.password}),f.err&&(0,d.jsx)(u.Z,{error:f.err}),(0,d.jsx)(s.Z,{text:"submit",mode:"login_btn",loader:r})]})})},p=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(f,{})})}},5969:function(n,e,r){var t=r(4942),a=r(1413);e.Z=function(){return{handleChange:function(n,e){e((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,t.Z)({},n.target.name,n.target.value))}))}}}}}]);
//# sourceMappingURL=709.92556488.chunk.js.map