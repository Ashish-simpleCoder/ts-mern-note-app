"use strict";(self.webpackChunkts_mern_note_app_frontend=self.webpackChunkts_mern_note_app_frontend||[]).push([[373],{9406:function(n,e,r){var t,a=r(168),s=r(8152),o=r(2791),i=r(5751),u=r(184),l=(0,o.memo)((function(n){var e=n.children,r=(0,o.useState)(!1),t=(0,s.Z)(r,2),a=t[0],i=t[1];return(0,u.jsx)(c,{children:o.Children.map(e,(function(n){return"string"===typeof n.type?n:(0,o.cloneElement)(n,{focus:a,setFocus:i})}))})}));e.Z=l;var c=i.ZP.div(t||(t=(0,a.Z)(["\n    display:flex;\n    align-items:center;\n    width:100%;\n    position:relative;\n    margin-top:5rem;\n    /* box-shadow:0 0.1rem 0.3rem rgba(0, 0, 0, 0.5); */\n\n    /* giving margin on email form field */\n    &:nth-of-type(1){\n        margin-top:3rem;\n    }\n\n    label{\n        position:absolute;\n        top:50%;\n        left:0;\n        transform:translate(4rem, -50%);\n        pointer-events:none;\n        transition:all 0.25s;\n    }\n    .transform{\n        color:var(--transform-label-clr);\n        transform:translate(1rem, -230%);\n        font-size:clamp(1.4rem, 1.5rem, 1.5vw);\n    }\n\n    >img{\n        height:2.5rem;\n        position:absolute;\n        top:50%;\n        left: 0.5rem;\n        transform:translateY(-50%);\n    }\n\n    >input{\n        width:100%;\n        padding:1rem 0.5rem 1rem 4rem;\n    }\n"])))},2984:function(n,e,r){var t,a=r(168),s=r(5751),o=r(5455),i=r(184);e.Z=function(n){var e=n.props,r=n.setFocus,t=e.state,a=e.name,s=e.handleChange;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{src:"./imgs/".concat(a,".avif"),alt:a}),(0,i.jsx)(u,{type:"text",value:t,name:a,onChange:function(n){return s(n)},onFocus:function(){return r&&r(!0)},onBlur:function(n){r&&r(n.target.value.length>0)}})]})};var u=s.ZP.input(t||(t=(0,a.Z)(["\n    border:none;\n    outline:none;\n    padding:0.5rem 1rem;\n    background:var(--focused) !important;\n    font-size:clamp(1.5rem, 1.6rem, 1.6vw);\n"])))},4373:function(n,e,r){var t,a=r(168),s=r(5751),o=r(184);e.Z=function(n){return(0,o.jsx)(i,{className:n.focus&&"transform",children:n.text})};var i=s.ZP.label(t||(t=(0,a.Z)(["\n    font-size:clamp(1.5rem, 1.6rem, 1.6vw);\n"])))},6777:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t=r(5861),a=r(4942),s=r(1413),o=r(8152),i=r(7757),u=r.n(i),l=r(2791),c=r(9271),m=r(9406),p=r(2984),d=r(4373),f=r(8142),v=r(8094),h=r(8956),Z=r(9719),x=r(5404),g=r(184),j=(0,l.memo)((function(){var n=(0,l.useState)({email:"",password:""}),e=(0,o.Z)(n,2),r=e[0],i=e[1],j=(0,l.useState)(),w=(0,o.Z)(j,2),b=w[0],_=w[1],k=(0,x.ZP)().setUser,C=(0,c.k6)(),y=(0,l.useState)(!1),S=(0,o.Z)(y,2),F=S[0],P=S[1],z=(0,l.useCallback)((function(n){i((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,a.Z)({},n.target.name,n.target.value))}))}),[i]),M=(0,l.useCallback)(function(){var n=(0,t.Z)(u().mark((function n(e,r){var t,a,s,o;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/v1/user",{method:"POST",body:JSON.stringify({email:e,password:r}),headers:{"Content-Type":"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,s=a.errors,o=a._id,n.abrupt("return",{errors:s,_id:o});case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,r){return n.apply(this,arguments)}}(),[]),N=(0,l.useCallback)(function(){var n=(0,t.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),P(!0),n.next=4,M(r.email,r.password);case 4:null!==(t=n.sent)&&void 0!==t&&t._id&&(k((function(n){return(0,s.Z)((0,s.Z)({},n),{},{_id:t._id})})),C.push("/login")),P(!1),(null===t||void 0===t?void 0:t.errors)&&_(t.errors);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[r,k,C,M]),O=(0,l.useMemo)((function(){return{state:r.email,handleChange:z,name:"email"}}),[r.email,z]),T=(0,l.useMemo)((function(){return{state:r.password,handleChange:z,name:"password"}}),[r.password,z]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(h.Z,{mode:"register",handleSubmit:N,children:[(0,g.jsx)(Z.Z,{text:"Register"}),(0,g.jsxs)(m.Z,{children:[(0,g.jsx)(d.Z,{text:"email"}),(0,g.jsx)(p.Z,{props:O})]}),(0,g.jsxs)(m.Z,{children:[(0,g.jsx)(d.Z,{text:"password"}),(0,g.jsx)(p.Z,{props:T})]}),(null===b||void 0===b?void 0:b.email)&&(0,g.jsx)(v.Z,{error:b.email}),(null===b||void 0===b?void 0:b.password)&&(0,g.jsx)(v.Z,{error:b.password}),(0,g.jsx)(f.Z,{text:"submit",mode:"login_btn",loader:F})]})})})),w=j,b=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(w,{})})}}}]);
//# sourceMappingURL=373.29b21df4.chunk.js.map