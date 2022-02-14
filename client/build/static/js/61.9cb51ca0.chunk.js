"use strict";(self.webpackChunkts_mern_note_app_frontend=self.webpackChunkts_mern_note_app_frontend||[]).push([[61],{1967:function(n,e,t){var r,i=t(168),a=t(2791),o=t(5751),s=t(184),c=(0,a.memo)((function(n){var e=n.children,t=n.styles;return(0,s.jsx)(d,{style:t,children:e})}));e.Z=c;var d=o.ZP.section(r||(r=(0,i.Z)(["\n    display:flex;\n    /* width:100%; */\n    flex-direction:column;\n    flex-wrap:wrap;\n    /* min-height:100vh; */\n    /* height:calc(100vh - 5rem); */\n\n    @media (min-width:700px){\n        /* max-height:60rem; */\n        flex-direction:unset;\n    }\n"])))},6991:function(n,e,t){var r,i,a,o,s,c,d,l,m=t(168),u=t(2791),h=t(5751),p=t(184),f=(0,u.memo)((function(n){var e=n.children,t=n.styles,r=n.page,i=n.mode;return"edit_note"===i?(0,p.jsx)(w,{className:"edit_modal_wrapper",children:e}):"note_output"===r?(0,p.jsx)(x,{style:t,children:e}):(0,p.jsx)(v,{mode:i,style:t,className:i,children:e})}));e.Z=f;var v=h.ZP.section(r||(r=(0,m.Z)(["\n    display:flex;\n    overflow:hidden;\n    position:relative;\n\n    ","\n\n    img{\n        display:flex;\n        /* width:32rem; */\n        /* height:35rem; */\n        width:clamp(23rem, 28rem, 28vw);\n        height:clamp(28rem, 32rem, 32vw);\n        transform:rotate(-20deg) scale(0.8);\n        transform-origin:center;\n    }\n"])),(function(n){switch(n.mode){case"hero":return(0,h.iv)(i||(i=(0,m.Z)(["\n                width:100%;\n                align-items:center;\n                justify-content:center;\n                transform-origin:center;\n                flex-direction:column;\n                text-align:center;\n                padding:2rem;\n\n                @media (min-width:700px){\n                    width:50%;\n                }\n            "])));case"create_note_container":return(0,h.iv)(a||(a=(0,m.Z)(["\n                padding:2rem;\n                justify-content:center;\n                margin-bottom:3rem;\n                button{\n                    width:100%;\n                }\n\n                @media (min-width:700px){\n                    margin-bottom:0rem;\n                        border-right:var(--border);\n                        height:100%;\n                        position:fixed;\n                        width:var(--width);\n                    }\n            "])));case"notes_container_wrapper":return(0,h.iv)(o||(o=(0,m.Z)(["\n                flex-direction:column;\n                @media (min-width:700px){\n                    position:relative;\n                    left:var(--width);\n                    width:calc(100% - var(--width));\n                }\n            "])));case"notes_container":return(0,h.iv)(s||(s=(0,m.Z)(["\n                justify-content:center;\n                gap:3rem;\n                padding:2rem;\n                flex-wrap:wrap;\n                @media (min-width:700px){\n                    justify-content:space-around;\n                }\n            "])));default:return(0,h.iv)(c||(c=(0,m.Z)(["\n            "])))}})),x=h.ZP.section(d||(d=(0,m.Z)(["\n    display:flex;\n    justify-content:center;\n    gap:2rem;\n    flex-wrap:wrap;\n    padding:2rem;\n\n\n    @media (min-width:700px){\n        position:relative;\n        left:var(--width);\n        width:calc(100% - var(--width));\n        justify-content:space-around;\n    }\n"]))),w=h.ZP.section(l||(l=(0,m.Z)(["\n    width:100%;\n    height:100%;\n    top:0 !important;\n    inset:0;\n    position:fixed;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    background:var(--edit-modal-bg);\n    display:none;\n    border-radius:0.5rem;\n"])))},3282:function(n,e,t){var r,i=t(168),a=t(2791),o=t(5751),s=t(184),c=(0,a.memo)((function(n){var e=n.text,t=n.styles;return(0,s.jsx)(d,{style:t,children:e})}));e.Z=c;var d=o.ZP.p(r||(r=(0,i.Z)(["\n    font-size:clamp(1.8rem, 2rem ,2vw);\n    opacity:0.9;\n    white-space:pre-line;\n    word-break:break-all;\n    margin-top:1rem;\n    /* width:max-content; */\n"])))},4380:function(n,e,t){var r,i=t(168),a=t(2791),o=t(5751),s=t(184),c=(0,a.memo)((function(n){n.text;var e=n.children,t=n.styles;return(0,s.jsx)(d,{style:t,children:e})}));e.Z=c;var d=o.ZP.h2(r||(r=(0,i.Z)(["\n    font-size:clamp(3.5rem,4rem, 4vw);\n    /* font-weight:500; */\n"])))},3061:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(2791),i=t(1967),a=t(6991),o=t(5455),s=t(184),c=(0,r.memo)((function(){return(0,s.jsx)(a.Z,{mode:"hero",children:(0,s.jsx)(o.Z,{src:"./imgs/hero_notes.png",alt:"hero banner",cls:"invert-3",animate:!0})})})),d=t(9271),l=t(8142),m=t(3282),u=t(4380),h=(0,r.memo)((function(){var n=(0,d.k6)();return(0,s.jsxs)(a.Z,{mode:"hero",children:[(0,s.jsxs)(u.Z,{styles:{"--order":0},children:["An Amazing ",(0,s.jsx)("span",{className:"accent",children:"Note"})," App"]}),(0,s.jsx)(m.Z,{text:"Create your notes on the go, that you can easily remember.",styles:{"--order":1}}),(0,s.jsx)(l.Z,{text:"Get Started",handleClick:function(){return n.push("/notes")},mode:"hero_btn",styles:{"--order":2}})]})})),p=(0,r.memo)((function(){return(0,s.jsxs)(i.Z,{styles:{minHeight:"calc(100vh - 6rem)"},children:[(0,s.jsx)(c,{}),(0,s.jsx)(h,{})]})})),f=t(5716),v=(0,r.memo)((function(){return(0,f.Z)({auth:!1}),(0,s.jsx)(p,{})}))},5716:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(5861),i=t(7757),a=t.n(i),o=t(2791),s=t(9271),c=t(5404),d=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/v1/user",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",{_id:t._id,email:t.email});case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),l=d,m=function(n){var e=n.auth,t=void 0!==e&&e,i=(0,c.Xh)().setUser,d=(0,s.k6)();(0,o.useLayoutEffect)((function(){(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l();case 2:(null===(e=n.sent)||void 0===e?void 0:e._id)&&i({_id:e._id,email:null===e||void 0===e?void 0:e.email}),t&&(null===e||void 0===e||!e._id)&&d.push("/login");case 5:case"end":return n.stop()}}),n)})))()}),[i])}}}]);
//# sourceMappingURL=61.9cb51ca0.chunk.js.map