"use strict";(self.webpackChunkts_mern_note_app_frontend=self.webpackChunkts_mern_note_app_frontend||[]).push([[649],{1967:function(n,e,t){var r,i=t(168),a=t(2791),o=t(5751),s=t(184),d=(0,a.memo)((function(n){var e=n.children,t=n.styles,r=n.before_obj;return(0,s.jsx)(c,{style:t,before_obj:r,children:e})}));e.Z=d;var c=o.ZP.section(r||(r=(0,i.Z)(["\n    display:flex;\n    flex-direction:column;\n    flex-wrap:wrap;\n\n    @media (min-width:700px){\n        flex-direction:unset;\n    }\n"])))},6991:function(n,e,t){var r,i,a,o,s,d,c,l,u=t(168),m=t(2791),h=t(5751),f=t(184),v=(0,m.memo)((function(n){var e=n.children,t=n.styles,r=n.page,i=n.mode;return"edit_note"===i?(0,f.jsx)(x,{className:"edit_modal_wrapper",children:e}):"note_output"===r?(0,f.jsx)(g,{style:t,children:e}):(0,f.jsx)(p,{mode:i,style:t,className:i,children:e})}));e.Z=v;var p=h.ZP.section(r||(r=(0,u.Z)(["\n    display:flex;\n    overflow:hidden;\n    position:relative;\n\n    ","\n\n    img{\n        display:flex;\n        /* width:32rem; */\n        /* height:35rem; */\n        width:clamp(23rem, 28rem, 28vw);\n        height:clamp(28rem, 32rem, 32vw);\n        transform:rotate(-20deg) scale(0.8);\n        transform-origin:center;\n    }\n"])),(function(n){switch(n.mode){case"hero":return(0,h.iv)(i||(i=(0,u.Z)(["\n                width:100%;\n                align-items:center;\n                justify-content:center;\n                transform-origin:center;\n                flex-direction:column;\n                text-align:center;\n                padding:2rem;\n\n                @media (min-width:700px){\n                    width:50%;\n                }\n            "])));case"create_note_container":return(0,h.iv)(a||(a=(0,u.Z)(["\n                padding:2rem;\n                justify-content:center;\n                margin-bottom:3rem;\n                button{\n                    width:100%;\n                }\n\n                @media (min-width:700px){\n                    margin-bottom:0rem;\n                        border-right:var(--border);\n                        height:100%;\n                        position:fixed;\n                        width:var(--width);\n                    }\n            "])));case"notes_container_wrapper":return(0,h.iv)(o||(o=(0,u.Z)(["\n                flex-direction:column;\n                @media (min-width:700px){\n                    position:relative;\n                    left:var(--width);\n                    width:calc(100% - var(--width));\n                }\n            "])));case"notes_container":return(0,h.iv)(s||(s=(0,u.Z)(["\n                justify-content:center;\n                gap:3rem;\n                padding:2rem;\n                flex-wrap:wrap;\n                @media (min-width:700px){\n                    justify-content:space-around;\n                }\n            "])));default:return(0,h.iv)(d||(d=(0,u.Z)(["\n            "])))}})),g=h.ZP.section(c||(c=(0,u.Z)(["\n    display:flex;\n    justify-content:center;\n    gap:2rem;\n    flex-wrap:wrap;\n    padding:2rem;\n\n\n    @media (min-width:700px){\n        position:relative;\n        left:var(--width);\n        width:calc(100% - var(--width));\n        justify-content:space-around;\n    }\n"]))),x=h.ZP.section(l||(l=(0,u.Z)(["\n    width:100%;\n    height:100%;\n    top:0 !important;\n    inset:0;\n    position:fixed;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    background:var(--edit-modal-bg);\n    display:none;\n    border-radius:0.5rem;\n"])))},3282:function(n,e,t){var r,i=t(168),a=t(2791),o=t(5751),s=t(184),d=(0,a.memo)((function(n){var e=n.text,t=n.styles;return(0,s.jsx)(c,{style:t,children:e})}));e.Z=d;var c=o.ZP.p(r||(r=(0,i.Z)(["\n    font-size:clamp(1.8rem, 2rem ,2vw);\n    opacity:0.9;\n    white-space:pre-line;\n    word-break:break-all;\n    margin-top:1rem;\n    /* width:max-content; */\n"])))},8094:function(n,e,t){var r,i=t(168),a=t(5751),o=t(184);e.Z=function(n){var e=n.error;return(0,o.jsx)(s,{children:e})};var s=a.ZP.p(r||(r=(0,i.Z)(["\n    color:red;\n    font-size:clamp(1.5rem,1.6rem,1.6vw);\n"])))},8956:function(n,e,t){var r,i,a,o,s,d=t(168),c=t(2791),l=t(5751),u=t(184),m=(0,c.memo)((function(n){var e=n.children,t=n.no_bg,r=n.mode,i=n.handleSubmit,a=n.styles,o=n.animate;return(0,u.jsx)(h,{onSubmit:function(n){n.preventDefault(),i&&i(n)},style:a,no_bg:t,mode:r,animate:o,children:e})}));e.Z=m;var h=l.ZP.form(r||(r=(0,d.Z)(["\n    height:45rem;\n    width:90%;\n    display:flex;\n    align-items:center;\n    flex-direction:column;\n    max-width:35rem;\n    background:var(--form-bg);\n\n    ","\n    ","\n    button{\n        margin-top:auto\n    }\n    input,textarea{\n        background:var(--input-bg);\n    }\n\n    /* animate flag */\n    ","\n\n    @keyframes animate_form{\n        0%{\n            transform:translateX(-100%);\n            background:var(--secondary-clr);\n        }\n        50%{\n            transform:translateX(50%);\n        }\n        100%{\n            transform:translateX(0%);\n        }\n    }\n\n"])),(function(n){var e=n.mode;return"login"===e||"register"===e?(0,l.iv)(i||(i=(0,d.Z)(["\n                margin: auto;\n                max-width:40rem;\n                margin-top:5rem;\n                border-radius:0.5rem;\n                box-shadow:0 0.5rem 0.5rem rgba(0,0,0,0.4);\n                padding:0 2rem 2rem 2rem;\n                >h3{\n                    padding:1rem 0 2rem 0;\n                }\n                .div{\n                    padding:0 2rem;\n                    margin-top:2rem;\n                    width:100%;\n                    display:flex;\n                    justify-content:space-between;\n                    align-items:center;\n\n                    input{\n                        background:var(--focused);\n                    }\n                }\n            "]))):"create_note"===e?(0,l.iv)(a||(a=(0,d.Z)(["\n                height:25rem;\n                @media (min-width:700px){\n                    height:50rem;\n                }\n            "]))):void 0}),(function(n){if(!0===n.no_bg)return(0,l.iv)(o||(o=(0,d.Z)(["\n            background:inherit;\n        "])))}),(function(n){if(n.animate)return(0,l.iv)(s||(s=(0,d.Z)(["\n                animation:animate_form 0.4s ease-in forwards;\n            "])))}))},9719:function(n,e,t){var r,i=t(168),a=t(2791),o=t(5751),s=t(184),d=(0,a.memo)((function(n){var e=n.text,t=n.styles,r=n.handleClick;return(0,s.jsx)(c,{style:t,onClick:r,children:e})}));e.Z=d;var c=o.ZP.h3(r||(r=(0,i.Z)(["\n    font-size:2.2rem;\n    font-weight:500;\n"])))},2296:function(n,e,t){var r=t(1413),i=t(5861),a=t(7757),o=t.n(a),s=t(2791),d=t(9271),c=t(5404);e.Z=function(n){var e=n.auth,a=void 0!==e&&e,l=(0,c.Xh)().setUser,u=(0,d.k6)();(0,s.useLayoutEffect)((function(){(0,i.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(553).then(t.bind(t,553));case 2:return n.next=4,n.sent.default();case 4:(null===(e=n.sent)||void 0===e?void 0:e._id)&&l((function(n){return(0,r.Z)((0,r.Z)({},n),{},{_id:e._id,email:null===e||void 0===e?void 0:e.email})})),a&&(null===e||void 0===e||!e._id)&&u.push("/login");case 7:case"end":return n.stop()}}),n)})))()}),[l])}},5969:function(n,e,t){var r=t(4942),i=t(1413);e.Z=function(){return{handleChange:function(n,e){e((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,r.Z)({},n.target.name,n.target.value))}))}}}},2649:function(n,e,t){t.r(e),t.d(e,{EditNoteCtx:function(){return W},default:function(){return nn},useEditNoteCtx:function(){return $}});var r,i,a,o,s,d,c,l,u,m=t(8152),h=t(2791),f=t(1967),v=t(6991),p=t(2296),g=function(n){var e=n._id,t=(0,h.useRef)(e);(0,h.useEffect)((function(){t.current=e}),[e]);var r=(0,h.useCallback)((function(n){if(n){var e=document.getElementById("modal"),t=e.parentElement,r=document.getElementById(n).getBoundingClientRect(),i=r.top,a=r.left,o=r.width,s=r.height;e.style.top=i+"px",e.style.left=a+"px",e.style.width=o+"px",e.style.height=s+"px",t.style.display="flex",e.style.display="flex",setTimeout((function(){return document.body.classList.add("edit_mode")}),20)}}),[t]);return(0,h.useEffect)((function(){r(t.current)}),[e]),{enableEditModal:r}},x=t(168),b=t(5751),w=t(5404),y=t(184),Z=(0,h.memo)((function(n){var e=n.placeholder,t=n.name,r=n.value,i=n.handleChange,a=n.mode,o=n.type,s=(0,w.ZP)().setSearch;return(0,y.jsx)(_,{type:"search"===o?"search":"text",name:t,value:r,mode:a,onChange:function(n){"search"===t?s(n.target.value):i&&i(n)},placeholder:e})})),_=b.ZP.input(r||(r=(0,x.Z)(["\n    font-size:clamp(1.6rem,1.7rem,1.7vw);\n    border:none;\n    padding:0 1rem;\n    height:3.5rem;\n    background:var(--input-bg);\n    outline:none;\n\n    ","\n    border-radius:0.3rem;\n    outline:var(--border);\n"])),(function(n){switch(n.mode){case"edit_note":return(0,b.iv)(i||(i=(0,x.Z)(["\n                background:inherit;\n                "])));case"note_title":return(0,b.iv)(a||(a=(0,x.Z)(["\n                width:100%;\n                &:hover{  background: var(--input-hover-bg);  }\n                "])));default:return(0,b.iv)(o||(o=(0,x.Z)(["\n            &:hover{  background: var(--input-hover-bg);  }\n\n            "])))}})),j=t(8781),k=t(8094),C=t(8956),E=function(n){var e=n.value,t=n.handleChange,r=n.placeholder,i=n.name,a=n.styles,o=n.hover_bg;return(0,y.jsx)(N,{name:i,value:e,placeholder:r,style:a,hover_bg:o,onChange:function(n){return t&&t(n)}})},N=b.ZP.textarea(s||(s=(0,x.Z)(["\n    width:100%;\n    height:15rem;\n    @media (min-width:700px){\n        /* height:100%; */\n        flex:1;\n    }\n    margin-bottom:2rem;\n    resize:none;\n    margin-top:1rem;\n    font-size:clamp(1.6rem,1.7rem,1.7vw);\n    border:none;\n    padding:0.5rem 1rem;\n    background:inherit;\n    outline:var(--border);\n    border-radius:0.3rem;\n    ","\n\n"])),(function(n){if(n.hover_bg)return(0,b.iv)(d||(d=(0,x.Z)(["\n                &:hover{  background: var(--input-hover-bg);  }\n            "])))})),P=t(5861),L=t(1413),S=t(7757),z=t.n(S),T=t(3109),X=function(){var n=(0,w.Xh)().setUser,e=(0,h.useState)(!1),r=(0,m.Z)(e,2),i=r[0],a=r[1],o=(0,h.useState)({err:""}),s=(0,m.Z)(o,2),d=s[0],c=s[1],l=(0,h.useState)(!1),u=(0,m.Z)(l,2),f=u[0],v=u[1];(0,h.useEffect)((function(){f&&((0,T.default)("/api/v1/user/notes").then((function(e){(null===e||void 0===e?void 0:e.notes)&&n((function(n){return(0,L.Z)((0,L.Z)({},n),{},{notes:e.notes})}))})),v(!1))}),[f]);var p=(0,h.useCallback)(function(){var n=(0,P.Z)(z().mark((function n(e,r){var i,o,s,d,c;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(!0),n.next=3,t.e(385).then(t.bind(t,385));case 3:return i=n.sent,o=i.default,n.next=7,o("/api/v1/user/notes/".concat(e));case 7:null!==(s=n.sent)&&void 0!==s&&s.success&&v(!0),d=document.getElementById("modal"),c=d.parentElement,document.body.classList.remove("edit_mode"),setTimeout((function(){c.style.display="none",d.style.display="none",r&&r({title:"",content:"",_id:"",bg:[]})}),310);case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),[]),g=(0,h.useCallback)(function(){var n=(0,P.Z)(z().mark((function n(e,r){var i,a,o,s,d;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=document.getElementById("modal"),a=i.parentElement,document.body.classList.remove("edit_mode"),setTimeout((function(){a.style.display="none",i.style.display="none",r&&r({title:"",content:"",_id:"",bg:[]})}),310),n.next=6,t.e(661).then(t.bind(t,9661));case 6:return o=n.sent,s=o.default,n.next=10,s("/api/v1/user/notes/".concat(e._id),e);case 10:(null===(d=n.sent)||void 0===d?void 0:d.success)&&v(!0);case 12:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),[]),x=(0,h.useCallback)(function(){var n=(0,P.Z)(z().mark((function n(e,r,i){var o,s,d;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),a(!0),n.next=4,t.e(279).then(t.bind(t,8279));case 4:return o=n.sent,s=o.default,n.next=8,s(r);case 8:null!==(d=n.sent)&&void 0!==d&&d.error&&c({err:d.error}),null!==d&&void 0!==d&&d.success&&(v(!0),i({title:"",content:""})),a(!1);case 12:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),[]);return{loader:i,setLoader:a,handleDeleteNote:p,handleUpdateNote:g,handleNoteSubmit:x,error:d}},D=t(5969),U=(0,h.memo)((function(){var n=(0,h.useState)({title:"",content:""}),e=(0,m.Z)(n,2),t=e[0],r=e[1],i=X(),a=i.loader,o=i.error,s=i.handleNoteSubmit,d=(0,D.Z)().handleChange,c=(0,h.useCallback)((function(n){d(n,r)}),[]);return(0,y.jsxs)(C.Z,{no_bg:!0,handleSubmit:function(n){return s(n,t,r)},mode:"create_note",children:[(0,y.jsx)(Z,{type:"title",placeholder:"note title...",name:"title",value:t.title,handleChange:c,mode:"note_title"}),(0,y.jsx)(E,{name:"content",value:t.content,handleChange:c,placeholder:"type your notes....",hover_bg:!0}),(0,y.jsx)(j.Z,{text:"create a new note",mode:"create_note_btn",loader:a}),o.err&&(0,y.jsx)(k.Z,{error:o.err})]})})),B=(0,h.memo)((function(n){var e=n.children,t=n.mode,r=$(),i=r.note,a=r.setEditNote,o=(0,h.useContext)(w.zg).dark_theme,s=X(),d=s.loader,c=s.handleDeleteNote,l=s.handleUpdateNote,u=(0,D.Z)().handleChange,m=(0,h.useCallback)((function(n){u(n,a)}),[]);return"edit_note"===t?(0,y.jsx)(v.Z,{mode:t,children:(0,y.jsxs)(I,{id:"modal",className:"edit_modal",style:{background:o?i.bg[1]:i.bg[0]},children:[(0,y.jsx)(Z,{name:"title",value:i.title,handleChange:m,mode:"edit_note"}),(0,y.jsx)(E,{name:"content",value:i.content,handleChange:m}),(0,y.jsxs)("div",{className:"btns",children:[(0,y.jsx)(j.Z,{text:"save",loader:d,handleClick:function(){return l(i)}}),(0,y.jsx)(j.Z,{text:"delete",loader:d,handleClick:function(){return c(i._id)}})]}),e]})}):(0,y.jsx)(y.Fragment,{})})),I=b.ZP.div(c||(c=(0,x.Z)(["\n    height:40rem;\n    width:100%;\n    max-width:60%;\n    border-radius:0.5rem;\n    transition:all 0.3s ease;\n    background:var(--modal-bg);\n    position:fixed;\n    overflow:hidden;\n    box-shadow:0 0.3rem 1rem rgba(0, 0, 0, 0.4);\n    flex-direction:column;\n\n    textarea{\n        flex:1;\n    }\n\n    input,textarea{\n        margin-top:0;\n        border:none !important;\n        outline:none;\n        border-radius:0;\n        font-size:clamp(1.6rem,1.7rem, 1.7vw);\n        /* background:white; */\n        &:focus{\n            background:inherit;\n        }\n    }\n    input{\n        text-align:center ;\n        font-weight:500;\n    }\n\n    .btns{\n        margin-top:auto;\n        display:flex;\n        justify-content:space-between;\n        flex-direction:row;\n        padding:2rem;\n    }\n    .save_btn{\n        background:var(--save-btn-bg);\n    }\n    .delete_btn{\n        background:var(--delete-btn-bg);\n    }\n"]))),R=(0,h.memo)((function(n){var e=n.children;return(0,y.jsx)(H,{children:e})})),H=b.ZP.div(l||(l=(0,x.Z)(["\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n    padding:1rem;\n    border-bottom:var(--border);\n"]))),M=t(3282),F=t(9719),Y=function(n){var e=n.children;return(0,y.jsx)(v.Z,{styles:{height:"90vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:e})},q=(0,h.memo)((function(n){var e=n.cls,t="#".concat(Math.random().toString(16).slice(2,8));return(0,y.jsx)("span",{className:e,style:{background:t}})})),A=(0,h.memo)((function(n){var e=n.note,t=n.styles,r=(0,h.useContext)(W).setEditNote,i=X(),a=i.loader,o=i.handleDeleteNote,s=function(){return r(e)};return(0,y.jsxs)(G,{id:e._id,style:t,className:"note",children:[(0,y.jsxs)(v.Z,{children:[(0,y.jsx)(q,{cls:"random_span"}),(0,y.jsx)(F.Z,{text:e.title,styles:{width:"100%"},handleClick:s})]}),(0,y.jsx)(v.Z,{styles:{overflow:"hidden",height:"60%"},children:(0,y.jsx)("p",{onClick:s,children:e.content})}),(0,y.jsx)(j.Z,{text:"d",mode:"delete_note_btn",handleClick:function(){return o(e._id)},loader:a})]})})),G=b.ZP.div(u||(u=(0,x.Z)(["\n    width:100%;\n    max-width:40rem;\n    height:20rem;\n    border-radius:1rem;\n    box-shadow:0 0.3rem 0.5rem rgba(0,0,0,0.1);\n    position:relative;\n    border:var(--note-border);\n   animation:animate_note calc(0.4s  * var(--note-order)) ease-in forwards;\n\n\n    h3,p{\n        font-size:clamp(1.6rem,1.7rem,1.7vw);\n        padding:0.5rem;\n    }\n    h3{\n        border-bottom:var(--border);\n        font-weight:400;\n        text-align:center;\n        width:100%;\n    }\n    p{\n        opacity:0.8;\n        white-space:pre-line;\n        word-break:break-all;\n        text-overflow:ellipsis;\n        height:100%;\n        width:100%;\n    }\n\n    span.random_span{\n        position:absolute;\n        top:0;left:0;\n        width:5rem;\n        height:5rem;\n        border-radius:50%;\n        transform:translate(-50%, -50%);\n    }\n\n    div.overlay_menu{\n        height:4rem;\n        width:100%;\n        display:flex;\n        opacity:0;\n        pointer-events:none;\n    }\n    &:hover, &:focus, &:focus-within{\n        div.overlay_menu{\n            opacity:1;\n            pointer-events:all;\n        }\n    }\n\n    @keyframes animate_note{\n        0%{\n            transform: scale(0.8);\n            animation-timing-function: ease;\n            /* background:var(--secondary-clr); */\n        }50%{\n            animation-timing-function: ease-in;\n            opacity: 1;\n            transform: scale(1.1);\n        }100%{\n            animation-timing-function: ease-out;\n            opacity: 1;\n            transform: scale(1);\n        }\n}\n"]))),J=function(){var n=(0,w.Xh)().setUser,e=(0,h.useState)(!0),r=(0,m.Z)(e,2),i=r[0],a=r[1];return(0,h.useEffect)((function(){(0,P.Z)(z().mark((function e(){var r;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.resolve().then(t.bind(t,3109));case 3:return e.next=5,e.sent.default("/api/v1/user/notes");case 5:null!==(r=e.sent)&&void 0!==r&&r.notes&&n((function(n){return(0,L.Z)((0,L.Z)({},n),{},{notes:r.notes})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:a(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[n]),{loader:i}},K=t(4268),O=(0,h.memo)((function(){var n,e,t=J().loader,r=(0,w.Xh)(),i=r.user,a=r.search,o=(0,w.oe)().dark_theme,s=null===a||void 0===a?void 0:a.trim().toLowerCase(),d=function(n){return n.title.trim().toLowerCase().includes(s)||n.content.trim().toLowerCase().includes(s)};return(0,y.jsxs)(v.Z,{mode:"notes_container_wrapper",children:[0!==(null===(n=i.notes)||void 0===n?void 0:n.length)?(0,y.jsxs)(R,{children:[(0,y.jsx)(F.Z,{text:"Your notes"}),(0,y.jsx)(Z,{type:"search",name:"search",placeholder:"search your notes..."})]}):(0,y.jsxs)(Y,{children:[(0,y.jsx)(F.Z,{text:"Haven't created any notes?"}),(0,y.jsx)(M.Z,{text:"Then let's get started. "})]}),(0,y.jsx)(v.Z,{mode:"notes_container",styles:{minHeight:"calc(100vh - 2 * var(--header-height))"},children:t?(0,y.jsx)(K.Z,{size:"big"}):null===(e=i.notes)||void 0===e?void 0:e.map((function(n,e){return(0,y.jsx)(A,{note:n,styles:{"--note-order":e+1,background:o?n.bg[1]:n.bg[0],display:d(n)?"block":"none"}},n._id)}))})]})})),Q=function(n){var e=n.eventType,t=n.handler,r=n.element,i=void 0===r?window:r,a=(0,h.useRef)(t);(0,h.useEffect)((function(){a.current=t}),[t]),(0,h.useEffect)((function(){var n=function(n){n.target.classList.contains("edit_modal_wrapper")&&document.body.classList.contains("edit_mode")&&a.current()};return null===i||void 0===i||i.addEventListener(e,n,!1),function(){null===i||void 0===i||i.removeEventListener(e,n,!1)}}),[e])},V=function(n){var e=n.eventType,t=n.handler,r=n.element,i=(0,h.useRef)(t);(0,h.useEffect)((function(){i.current=t}),[t]),(0,h.useEffect)((function(){var n=function(n){return"Escape"===n.key&&i.current()};return null===r||void 0===r||r.addEventListener(e,n),function(){null===r||void 0===r||r.removeEventListener(e,n)}}),[e])},W=(0,h.createContext)({}),$=function(){return(0,h.useContext)(W)},nn=(0,h.memo)((function(){(0,p.Z)({auth:!0});var n=(0,h.useState)({_id:"",title:"",content:"",bg:[]}),e=(0,m.Z)(n,2),t=e[0],r=e[1];g({_id:t._id});var i=X().handleUpdateNote;V({eventType:"keyup",handler:function(){return i(t,r)},element:window}),Q({eventType:"click",handler:function(){return i(t,r)},element:document.body});var a=(0,D.Z)().handleChange,o=(0,h.useCallback)((function(n){a(n,r)}),[]);return(0,y.jsxs)(f.Z,{styles:{height:"calc(100% - 5rem)",minHeight:"unset"},children:[(0,y.jsx)(v.Z,{mode:"create_note_container",children:(0,y.jsx)(U,{})}),(0,y.jsxs)(W.Provider,{value:{note:t,setEditNote:r,handleNoteChange:o},children:[(0,y.jsx)(O,{}),(0,y.jsx)(B,{mode:"edit_note"})]})]})}))},3109:function(n,e,t){t.r(e);var r=t(5861),i=t(7757),a=t.n(i),o=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e);case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}();e.default=o}}]);
//# sourceMappingURL=649.6c758ba7.chunk.js.map