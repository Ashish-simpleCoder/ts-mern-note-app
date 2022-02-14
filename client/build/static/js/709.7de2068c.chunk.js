"use strict";(self.webpackChunkts_mern_note_app_frontend=self.webpackChunkts_mern_note_app_frontend||[]).push([[709],{9406:function(n,e,r){var t,a=r(168),o=r(8152),i=r(2791),s=r(5751),u=r(184),l=(0,i.memo)((function(n){var e=n.children,r=(0,i.useState)(!1),t=(0,o.Z)(r,2),a=t[0],s=t[1];return(0,u.jsx)(c,{children:i.Children.map(e,(function(n){return"string"===typeof n.type?n:(0,i.cloneElement)(n,{focus:a,setFocus:s})}))})}));e.Z=l;var c=s.ZP.div(t||(t=(0,a.Z)(["\n    display:flex;\n    align-items:center;\n    width:100%;\n    position:relative;\n    margin-top:5rem;\n    /* box-shadow:0 0.1rem 0.3rem rgba(0, 0, 0, 0.5); */\n\n    /* giving margin on email form field */\n    &:nth-of-type(1){\n        margin-top:3rem;\n    }\n\n    label{\n        position:absolute;\n        top:50%;\n        left:0;\n        transform:translate(4rem, -50%);\n        pointer-events:none;\n        transition:all 0.25s;\n    }\n    .transform{\n        color:var(--transform-label-clr);\n        transform:translate(1rem, -230%);\n        font-size:clamp(1.4rem, 1.5rem, 1.5vw);\n    }\n\n    >img{\n        height:2.5rem;\n        position:absolute;\n        top:50%;\n        left: 0.5rem;\n        transform:translateY(-50%);\n    }\n\n    >input{\n        width:100%;\n        padding:1rem 0.5rem 1rem 4rem;\n    }\n"])))},2984:function(n,e,r){var t,a=r(168),o=r(5751),i=r(5455),s=r(184);e.Z=function(n){var e=n.props,r=n.setFocus,t=e.state,a=e.name,o=e.handleChanges;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{src:"./imgs/".concat(a,".avif"),alt:a}),(0,s.jsx)(u,{type:"text",value:t,name:a,onChange:function(n){return o(n)},onFocus:function(){return r&&r(!0)},onBlur:function(n){r&&r(n.target.value.length>0)}})]})};var u=o.ZP.input(t||(t=(0,a.Z)(["\n    border:none;\n    outline:none;\n    padding:0.5rem 1rem;\n    background:var(--focused) !important;\n    font-size:clamp(1.5rem, 1.6rem, 1.6vw);\n"])))},4373:function(n,e,r){var t,a=r(168),o=r(5751),i=r(184);e.Z=function(n){return(0,i.jsx)(s,{className:n.focus&&"transform",children:n.text})};var s=o.ZP.label(t||(t=(0,a.Z)(["\n    font-size:clamp(1.5rem, 1.6rem, 1.6vw);\n"])))},8094:function(n,e,r){var t,a=r(168),o=r(5751),i=r(184);e.Z=function(n){var e=n.error;return(0,i.jsx)(s,{children:e})};var s=o.ZP.p(t||(t=(0,a.Z)(["\n    color:red;\n    font-size:clamp(1.5rem,1.6rem,1.6vw);\n"])))},8956:function(n,e,r){var t,a,o,i,s=r(168),u=r(2791),l=r(5751),c=r(184),m=(0,u.memo)((function(n){var e=n.children,r=n.no_bg,t=n.mode,a=n.handleSubmit,o=n.styles;return(0,c.jsx)(d,{onSubmit:function(n){n.preventDefault(),a&&a(n)},style:o,no_bg:r,mode:t,children:e})}));e.Z=m;var d=l.ZP.form(t||(t=(0,s.Z)(["\n    height:45rem;\n    width:90%;\n    display:flex;\n    align-items:center;\n    flex-direction:column;\n    max-width:35rem;\n    background:var(--form-bg);\n\n    ","\n    ","\n    button{\n        margin-top:auto\n    }\n\n    input,textarea{\n        background:var(--input-bg);\n    }\n"])),(function(n){var e=n.mode;return"login"===e||"register"===e?(0,l.iv)(a||(a=(0,s.Z)(["\n                margin: auto;\n                max-width:40rem;\n                margin-top:5rem;\n                border-radius:0.5rem;\n                box-shadow:0 0.5rem 0.5rem rgba(0,0,0,0.4);\n                padding:0 2rem 2rem 2rem;\n                >h3{\n                    padding:1rem 0 2rem 0;\n                }\n                .div{\n                    padding:0 2rem;\n                    margin-top:2rem;\n                    width:100%;\n                    display:flex;\n                    justify-content:space-between;\n                    align-items:center;\n\n                    input{\n                        background:var(--focused);\n                    }\n                }\n            "]))):"create_note"===e?(0,l.iv)(o||(o=(0,s.Z)(["\n                height:20rem;\n                @media (min-width:700px){\n                    height:45rem;\n                }\n            "]))):void 0}),(function(n){if(!0===n.no_bg)return(0,l.iv)(i||(i=(0,s.Z)(["\n            background:inherit;\n        "])))}))},9719:function(n,e,r){var t,a=r(168),o=r(2791),i=r(5751),s=r(184),u=(0,o.memo)((function(n){var e=n.text,r=n.styles,t=n.handleClick;return(0,s.jsx)(l,{style:r,onClick:t,children:e})}));e.Z=u;var l=i.ZP.h3(t||(t=(0,a.Z)(["\n    font-size:2.2rem;\n    font-weight:500;\n"])))},4508:function(n,e,r){var t=r(1413),a=r(5861),o=r(8152),i=r(7757),s=r.n(i),u=r(2791),l=r(9271),c=r(5404),m=r(5969);e.Z=function(){var n=(0,u.useState)({email:"",password:""}),e=(0,o.Z)(n,2),r=e[0],i=e[1],d=(0,u.useState)({email:"",password:"",err:""}),p=(0,o.Z)(d,2),f=p[0],h=p[1],v=(0,u.useState)(!1),g=(0,o.Z)(v,2),x=g[0],Z=g[1],b=(0,l.k6)(),w=(0,m.Z)().handleChange,j=(0,c.ZP)().setUser,y=(0,u.useCallback)((function(n){w(n,i)}),[]),k=(0,u.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(e,r){var t,a,o,i,u;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/v1/user/login",{method:"POST",body:JSON.stringify({email:e,password:r}),headers:{"Content-Type":"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,o=a.errors,i=a._id,u=a.email,n.abrupt("return",{errors:o,_id:i,email_id:u});case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,r){return n.apply(this,arguments)}}(),[]),_=(0,u.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(e,r){var a,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/v1/user",{method:"POST",body:JSON.stringify({email:e,password:r}),headers:{"Content-Type":"application/json"}});case 3:return a=n.sent,n.next=6,a.json();case 6:return o=n.sent,n.abrupt("return",(0,t.Z)({},o));case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,r){return n.apply(this,arguments)}}(),[]),C=(0,u.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(e){var t,a,o,i,u,l=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=l.length>1&&void 0!==l[1]?l[1]:"login",e.preventDefault(),Z(!0),"login"!==a){n.next=10;break}return n.next=6,k(r.email,r.password);case 6:o=n.sent,null!==(i=o)&&void 0!==i&&i._id&&(j({_id:o._id,email:o.email_id}),b.push("/")),n.next=15;break;case 10:return n.next=12,_(r.email,r.password);case 12:if(o=n.sent,null===(u=o)||void 0===u||!u._id){n.next=15;break}return n.abrupt("return",b.push("/login"));case 15:Z(!1),(null===(t=o)||void 0===t?void 0:t.errors)&&h(o.errors);case 17:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[r,b,_]);return(0,u.useEffect)((function(){var n=f&&setTimeout((function(){return h({email:"",password:"",err:""})}),3e3);return function(){clearInterval(n)}}),[f]),{handleSubmit:C,loader:x,errors:f,state:r,setState:i,handleChanges:y}}},5709:function(n,e,r){r.r(e),r.d(e,{default:function(){return f}});var t=r(2791),a=r(9406),o=r(2984),i=r(4373),s=r(8142),u=r(8094),l=r(8956),c=r(9719),m=r(4508),d=r(184),p=function(){var n=(0,m.Z)(),e=n.handleSubmit,r=n.loader,p=n.errors,f=n.state,h=n.handleChanges,v=(0,t.useMemo)((function(){return{state:f.email,handleChanges:h,name:"email"}}),[f.email,h]),g=(0,t.useMemo)((function(){return{state:f.password,handleChanges:h,name:"password"}}),[f.password,h]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(l.Z,{mode:"login",handleSubmit:e,children:[(0,d.jsx)(c.Z,{text:"Login",styles:{color:"var(--secondary-clr)"}}),(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(i.Z,{text:"email"}),(0,d.jsx)(o.Z,{props:v})]}),(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(i.Z,{text:"password"}),(0,d.jsx)(o.Z,{props:g})]}),p.email&&(0,d.jsx)(u.Z,{error:p.email}),p.password&&(0,d.jsx)(u.Z,{error:p.password}),p.err&&(0,d.jsx)(u.Z,{error:p.err}),(0,d.jsx)(s.Z,{text:"submit",mode:"login_btn",loader:r})]})})},f=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(p,{})})}},5969:function(n,e,r){var t=r(4942),a=r(1413);e.Z=function(){return{handleChange:function(n,e){e((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,t.Z)({},n.target.name,n.target.value))}))}}}}}]);
//# sourceMappingURL=709.7de2068c.chunk.js.map