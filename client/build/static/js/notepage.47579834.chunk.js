"use strict";(self.webpackChunkts_mern_note_app_frontend=self.webpackChunkts_mern_note_app_frontend||[]).push([[656],{1967:function(e,n,t){var r,i=t(168),o=t(2791),a=t(5751),s=t(184),c=(0,o.memo)((function(e){var n=e.children,t=e.styles,r=e.before_obj;return(0,s.jsx)(l,{style:t,before_obj:r,children:n})}));n.Z=c;var l=a.ZP.section(r||(r=(0,i.Z)(["\n    display:flex;\n    flex-direction:column;\n    flex-wrap:wrap;\n\n    @media (min-width:700px){\n        flex-direction:unset;\n    }\n"])))},7042:function(e,n,t){var r,i=t(168),o=t(5751),a=t(184);n.Z=function(e){var n=e.children,t=e.cls;return(0,a.jsx)(s,{className:"overlay-menu "+t,children:n})};var s=o.ZP.div(r||(r=(0,i.Z)(["\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n    flex-direction:row;\n"])))},6991:function(e,n,t){var r,i,o,a,s,c,l,d=t(168),u=t(2791),m=t(5751),f=t(184),v=(0,u.memo)((function(e){var n=e.children,t=e.styles,r=e.mode,i=e.cls;return"edit_note"===r?(0,f.jsx)(h,{mode:"edit_note",className:"edit_modal_wrapper ",children:n}):(0,f.jsx)(h,{mode:r,style:t,className:(r&&r)+" "+i,children:n})}));n.Z=v;var h=m.ZP.section(r||(r=(0,d.Z)(["\n    display:flex;\n    overflow:hidden;\n    position:relative;\n\n    ","\n\n    img{\n        display:flex;\n        width:clamp(23rem, 28rem, 28vw);\n        height:clamp(28rem, 32rem, 32vw);\n        transform:rotate(-20deg) scale(0.8);\n        transform-origin:center;\n    }\n"])),(function(e){switch(e.mode){case"hero":return(0,m.iv)(i||(i=(0,d.Z)(["\n                width:100%;\n                align-items:center;\n                justify-content:center;\n                transform-origin:center;\n                flex-direction:column;\n                text-align:center;\n                padding:2rem;\n                /* animation the every children in hero section */\n                @keyframes animateLoad {\n                    0%{\n                        transform: rotate(15deg) translateY(300%) scale(0.9);\n                        opacity: 0;\n                    }\n                    70%{\n                        transform: rotate(0) translateY(-50%) scale(1.1);\n                    }\n                    100%{ }\n                }\n                @media (min-width:700px){\n                    width:50%;\n                }\n            "])));case"create_note_container":return(0,m.iv)(o||(o=(0,d.Z)(["\n                padding:2rem;\n                justify-content:center;\n                margin-bottom:3rem;\n                button{\n                    width:100%;\n                }\n\n                @media (min-width:700px){\n                    margin-bottom:0rem;\n                        border-right:var(--border);\n                        height:100%;\n                        position:fixed;\n                        width:var(--width);\n                    }\n            "])));case"notes_container_wrapper":return(0,m.iv)(a||(a=(0,d.Z)(["\n                flex-direction:column;\n                @media (min-width:700px){\n                    position:relative;\n                    left:var(--width);\n                    width:calc(100% - var(--width));\n                }\n            "])));case"notes_container":return(0,m.iv)(s||(s=(0,d.Z)(["\n                justify-content:center;\n                gap:3rem;\n                padding:2rem;\n                flex-wrap:wrap;\n                @media (min-width:700px){\n                    justify-content:space-around;\n                }\n            "])));case"edit_note":return(0,m.iv)(c||(c=(0,d.Z)(["\n                width:100%;\n                height:100%;\n                top:0 !important;\n                inset:0;\n                position:fixed;\n                align-items:center;\n                justify-content:center;\n                background:var(--edit-modal-bg);\n                display:none;\n                border-radius:0.5rem;\n            "])));default:return(0,m.iv)(l||(l=(0,d.Z)(["\n            "])))}}))},6310:function(e,n,t){var r,i=t(168),o=t(5751),a=t(184);n.Z=function(e){var n=e.children,t=e.handleClick;return(0,a.jsx)(s,{onClick:t,children:n})};var s=o.ZP.div(r||(r=(0,i.Z)(["\n    position:relative;\n    overflow:none;\n    cursor: pointer;\n\n    >p{\n        position:absolute;\n        top:100%;\n        pointer-events:none;\n        opacity:0;\n        pointer-events:none;\n        font-size:clamp(1.3rem, 1.4rem, 1.4vw);\n    }\n\n    &:hover{\n        >p{        //displaying tooltip text on hover\n            animation:show 3s ease both;\n        }\n    }\n    .clr-list{\n        opacity:0;\n        pointer-events:none;\n    }\n\n    &:focus-within, &:focus{\n        .clr-list{\n            opacity:1;\n            pointer-events:all;\n        }\n    }\n\n"])))},3282:function(e,n,t){var r,i=t(168),o=t(2791),a=t(5751),s=t(184),c=(0,o.memo)((function(e){var n=e.text,t=e.styles;return(0,s.jsx)(l,{style:t,children:n})}));n.Z=c;var l=a.ZP.p(r||(r=(0,i.Z)(["\n    font-size:clamp(1.8rem, 2rem ,2vw);\n    opacity:0.9;\n    white-space:pre-line;\n    word-break:break-all;\n    margin-top:1rem;\n    /* width:max-content; */\n"])))},8094:function(e,n,t){var r,i=t(168),o=t(5751),a=t(184);n.Z=function(e){var n=e.error;return(0,a.jsx)(s,{children:n})};var s=o.ZP.p(r||(r=(0,i.Z)(["\n    color:red;\n    font-size:clamp(1.5rem,1.6rem,1.6vw);\n"])))},8956:function(e,n,t){var r,i,o,a,s,c=t(168),l=t(2791),d=t(5751),u=t(184),m=(0,l.memo)((function(e){var n=e.children,t=e.no_bg,r=e.mode,i=e.handleSubmit,o=e.styles,a=e.animate;return(0,u.jsx)(f,{onSubmit:function(e){e.preventDefault(),i&&i(e)},style:o,no_bg:t,mode:r,animate:a,children:n})}));n.Z=m;var f=d.ZP.form(r||(r=(0,c.Z)(["\n    height:45rem;\n    width:90%;\n    display:flex;\n    align-items:center;\n    flex-direction:column;\n    max-width:35rem;\n    background:var(--form-bg);\n\n    ","\n    ","\n    button{\n        margin-top:auto   //button will be at the bottom of the form\n    }\n\n    /* animate flag */\n    ","\n\n    @keyframes animate_form{\n        0%{\n            opacity:0;\n            transform:translateX(-100%);\n        }\n        50%{\n            transform:translateX(50%);\n        }\n    }\n\n"])),(function(e){var n=e.mode;return"login"===n||"register"===n?(0,d.iv)(i||(i=(0,c.Z)(["\n                margin: auto;\n                max-width:40rem;\n                margin-top:5rem;\n                border-radius:0.5rem;\n                box-shadow:0 0.3rem 0.3rem rgba(0,0,0,0.3);\n                padding:0 2rem 2rem 2rem;\n                //heading of the form\n                >h3{\n                    padding:1rem 0 2rem 0;\n                }\n                //containers of input and label\n                .div{\n                    padding:0 2rem;\n                    margin-top:2rem;\n                    width:100%;\n                    display:flex;\n                    justify-content:space-between;\n                    align-items:center;\n                }\n            "]))):"create_note"===n?(0,d.iv)(o||(o=(0,c.Z)(["\n                height:25rem;\n                @media (min-width:700px){\n                    height:50rem;\n                }\n            "]))):void 0}),(function(e){if(!0===e.no_bg)return(0,d.iv)(a||(a=(0,c.Z)(["\n            background:inherit;\n        "])))}),(function(e){if(e.animate)return(0,d.iv)(s||(s=(0,c.Z)(["\n                animation:animate_form 0.4s ease-in forwards;\n            "])))}))},9719:function(e,n,t){var r,i=t(168),o=t(2791),a=t(5751),s=t(184),c=(0,o.memo)((function(e){var n=e.text,t=e.styles,r=e.handleClick,i=e.cls;return(0,s.jsx)(l,{style:t,onClick:r,className:i,children:n})}));n.Z=c;var l=a.ZP.h3(r||(r=(0,i.Z)(["\n    font-size:2.2rem;\n    font-weight:500;\n"])))},8197:function(e,n,t){var r=t(5404),i=t(184);n.Z=function(){var e=(0,r.oe)().dark_theme;return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:e?"hsl(0, 0%, 80%)":"hsl(0, 0%, 10%)",children:[(0,i.jsx)("path",{d:"M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"}),(0,i.jsx)("circle",{cx:"6.5",cy:"11.5",r:"1.5"}),(0,i.jsx)("circle",{cx:"9.5",cy:"7.5",r:"1.5"}),(0,i.jsx)("circle",{cx:"14.5",cy:"7.5",r:"1.5"}),(0,i.jsx)("circle",{cx:"17.5",cy:"11.5",r:"1.5"})]})})}},2677:function(e,n,t){var r=t(1413),i=t(5861),o=t(7757),a=t.n(o),s=t(2791),c=t(9271),l=t(5404);n.Z=function(e){var n=e.auth,o=void 0!==n&&n,d=(0,l.Xh)().setUser,u=(0,c.k6)();(0,s.useEffect)((function(){(0,i.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(769).then(t.bind(t,769));case 2:return e.next=4,e.sent.default();case 4:n=e.sent,(o&&null!==n&&void 0!==n&&n._id||(null===n||void 0===n?void 0:n._id))&&d((function(e){return(0,r.Z)((0,r.Z)({},e),{},{_id:n._id,email:null===n||void 0===n?void 0:n.email})})),o&&(null===n||void 0===n||!n._id)&&u.push("/login");case 7:case"end":return e.stop()}}),e)})))()}),[d,u,o])}},142:function(e,n,t){var r=t(4942),i=t(1413);n.Z=function(){return{handleChange:function(e,n){n((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,r.Z)({},e.target.name,e.target.value))}))}}}},3543:function(e,n,t){t.r(n),t.d(n,{default:function(){return le},useEditNoteCtx:function(){return ce}});var r,i,o,a,s,c,l,d,u,m=t(1413),f=t(8152),v=t(2791),h=t(1967),p=t(6991),x=t(2677),g=function(e){var n=e._id,t=(0,v.useRef)(n);(0,v.useEffect)((function(){t.current=n}),[n]);var r=(0,v.useCallback)((function(e){var n=document.getElementById("modal"),t=n.parentElement,r=document.getElementById(e).getBoundingClientRect(),i=r.top,o=r.left,a=r.width,s=r.height;n.style.top=i+"px",n.style.left=o+"px",n.style.width=a+"px",n.style.height=s+"px",t.style.display="flex",n.style.display="flex",setTimeout((function(){return document.body.classList.add("edit_mode")}),10)}),[]);return(0,v.useEffect)((function(){n&&r(t.current)}),[n,r]),{enableEditModal:r}},b=t(168),y=t(5751),Z=t(5404),w=t(184),_=(0,v.memo)((function(e){var n=e.placeholder,t=e.name,r=e.value,i=e.handleChange,o=e.mode,a=e.type,s=(0,Z.Xh)().setSearch;return(0,w.jsx)(j,{type:"search"===a?"search":"text",name:t,value:r,mode:o,onChange:function(e){"search"===t?s(e.target.value):i&&i(e)},placeholder:n})})),j=y.ZP.input(r||(r=(0,b.Z)(["\n    font-size:clamp(1.6rem,1.7rem,1.7vw);\n    border:none;\n    padding:0 1rem;\n    height:3.5rem;\n    background:var(--input-bg);\n    outline:none;\n\n    ","\n    border-radius:0.3rem;\n    outline:var(--border);\n"])),(function(e){switch(e.mode){case"edit_note":return(0,y.iv)(i||(i=(0,b.Z)(["\n                background:inherit;\n                "])));case"note_title":return(0,y.iv)(o||(o=(0,b.Z)(["\n                width:100%;\n                &:hover{  background: var(--input-hover-bg);  }\n                "])));default:return(0,y.iv)(a||(a=(0,b.Z)(["\n            &:hover{  background: var(--input-hover-bg);  }\n            "])))}})),k=t(8781),C=t(8094),E=t(8956),N=function(e){var n=e.value,t=e.handleChange,r=e.placeholder,i=e.name,o=e.styles,a=e.hover_bg;return(0,w.jsx)(L,{name:i,value:n,placeholder:r,style:o,hover_bg:a,onChange:function(e){return t&&t(e)}})},L=y.ZP.textarea(s||(s=(0,b.Z)(["\n    width:100%;\n    height:15rem;\n    @media (min-width:700px){\n        flex:1;\n    }\n    margin-bottom:2rem;\n    resize:none;\n    margin-top:1rem;\n    font-size:clamp(1.6rem,1.7rem,1.7vw);\n    border:none;\n    padding:0.5rem 1rem;\n    background:var(--input-bg);\n    outline:var(--border);\n    border-radius:0.3rem;\n    ","\n\n"])),(function(e){if(e.hover_bg)return(0,y.iv)(c||(c=(0,b.Z)(["\n                &:hover{  background: var(--input-hover-bg);  }\n            "])))})),T=t(3439),P=(0,v.memo)((function(){var e=(0,T.Z)(),n=e.loader,t=e.error,r=e.handleNoteSubmit,i=e.handleNoteChange,o=e.note;return(0,w.jsxs)(E.Z,{no_bg:!0,handleSubmit:r,mode:"create_note",children:[(0,w.jsx)(_,{type:"title",name:"title",value:o.title,handleChange:i,placeholder:"note title...",mode:"note_title"}),(0,w.jsx)(N,{name:"content",value:o.content,handleChange:i,placeholder:"type your notes....",hover_bg:!0}),t.err&&(0,w.jsx)(C.Z,{error:t.err}),(0,w.jsx)(k.Z,{text:"create note",mode:"create_note_btn",loader:n})]})})),S=t(7042),M=t(6310),z=t(8197),O=(0,v.memo)((function(e){var n=e.mode,t=ce(),r=t.note,i=t.handleNoteChange,o=(0,v.useContext)(Z.zg).dark_theme,a=(0,T.Z)(),s=a.loader,c=a.handleDeleteNote,l=ce().setMenuDetails;return"edit_note"===n?(0,w.jsx)(p.Z,{mode:n,children:(0,w.jsxs)(B,{id:"modal",className:"edit_modal",style:{background:o?r.bg[1]:r.bg[0],border:"var(--border)"},children:[(0,w.jsx)(_,{name:"title",value:r.title,handleChange:i,mode:"edit_note"}),(0,w.jsx)(N,{name:"content",value:r.content,handleChange:i,styles:{background:"inherit"}}),(0,w.jsxs)(S.Z,{children:[(0,w.jsx)(M.Z,{handleClick:function(e){l(e,r)},children:(0,w.jsx)(z.Z,{})}),(0,w.jsx)(k.Z,{mode:"delete_note_btn",handleClick:function(){return c({_id:r._id})},loader:s})]})]})}):(0,w.jsx)(w.Fragment,{})})),B=y.ZP.div(l||(l=(0,b.Z)(["\n    height:40rem;\n    width:100%;\n    max-width:60%;\n    border-radius:0.5rem;\n    transition:all 0.3s linear;\n    background:var(--modal-bg);\n    position:fixed;\n    overflow:hidden;\n    box-shadow:0 0.3rem 1rem rgba(0, 0, 0, 0.4);\n    flex-direction:column;\n    border:var(--border);\n\n    input{\n        border-bottom:var(--border);\n    }\n\n    textarea{\n        flex:1;\n        border:none;\n        outline:none;\n    }\n\n    input,textarea{\n        margin-top:0;\n        &:focus{\n            background:inherit;\n        }\n    }\n    input{\n        text-align:center;\n    }\n\n    .btns{\n        margin-top:auto;\n        display:flex;\n        justify-content:space-between;\n        flex-direction:row;\n        padding:2rem;\n    }\n    .save_btn{\n        background:var(--save-btn-bg);\n    }\n    .delete_btn{\n        background:var(--delete-btn-bg);\n    }\n"]))),D=(0,v.memo)((function(e){var n=e.children;return(0,w.jsx)(R,{children:n})})),R=y.ZP.div(d||(d=(0,b.Z)(["\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n    padding:1rem;\n    border-bottom:var(--border);\n"]))),I=t(3282),X=t(9719),U=function(e){var n=e.children;return(0,w.jsx)(p.Z,{styles:{height:"90vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:n})},H=t(9482),V=t(9249),Y=t(4268),A=function(){var e=(0,Z.Xh)().user,n=ce().setEditNote,t=(0,v.useCallback)((function(t){if(t.target.classList.contains("note-title")||t.target.classList.contains("note-content")){var r,i=t.target.parentElement.parentElement;i.style.opacity="0";var o=i.id,a=null===(r=e.notes)||void 0===r?void 0:r.filter((function(e){return e._id===o}));a&&n(a[0])}}),[e.notes,n]);return(0,v.useEffect)((function(){var e=setTimeout((function(){return document.body.addEventListener("click",t,!1)}),1e3);return function(){clearTimeout(e),document.body.removeEventListener("click",t,!1)}}),[e.notes,t]),{listenClickEnv:t}},q=(0,v.memo)((function(){var e,n,t,r=(0,V.Z)().loader,i=(0,Z.Xh)(),o=i.user,a=i.search,s=(0,Z.oe)().dark_theme,c=null===a||void 0===a?void 0:a.trim().toLowerCase(),l=(0,v.useCallback)((function(e){return e.title.trim().toLowerCase().includes(c)||e.content.trim().toLowerCase().includes(c)}),[c]);return A(),(0,w.jsxs)(p.Z,{mode:"notes_container_wrapper",children:[0!==(null===(e=o.notes)||void 0===e?void 0:e.length)?(0,w.jsxs)(D,{children:[(0,w.jsx)(X.Z,{text:"Your notes"}),(0,w.jsx)(_,{type:"search",name:"search",placeholder:"search your notes..."})]}):(0,w.jsxs)(U,{children:[(0,w.jsx)(X.Z,{text:"Haven't created any notes?"}),(0,w.jsx)(I.Z,{text:"Then let's get started. "})]}),0!==(null===(n=o.notes)||void 0===n?void 0:n.length)&&(0,w.jsx)(p.Z,{mode:"notes_container",styles:{minHeight:"calc(100vh - 2 * var(--header-height))"},children:r?(0,w.jsx)(Y.Z,{size:"big"}):null===(t=o.notes)||void 0===t?void 0:t.map((function(e,n){return e.delete?null:(0,w.jsx)(H.Z,{note:e,styles:{"--note-order":n+1,background:s?e.bg[1]:e.bg[0],display:l(e)?"flex":"none"}},e._id)}))})]})})),F=function(e){var n=e.eventType,t=e.handler,r=e.element,i=void 0===r?window:r,o=(0,v.useRef)(t);(0,v.useEffect)((function(){o.current=t}),[t]),(0,v.useEffect)((function(){var e=function(e){e.target.classList.contains("edit_modal_wrapper")&&document.body.classList.contains("edit_mode")&&o.current()};return null===i||void 0===i||i.addEventListener(n,e,!1),function(){null===i||void 0===i||i.removeEventListener(n,e,!1)}}),[n,i])},J=function(e){var n=e.eventType,t=e.handler,r=e.element,i=(0,v.useRef)(t);(0,v.useEffect)((function(){i.current=t}),[t]),(0,v.useEffect)((function(){var e=function(e){return"Escape"===e.key&&i.current()};return null===r||void 0===r||r.addEventListener(n,e),function(){return null===r||void 0===r?void 0:r.removeEventListener(n,e)}}),[n,r])},G=t(142),K=function(e){var n=e.element,t=e.element2,r=void 0===t?window:t,i=e.handler,o=e.eventType,a=e.eventType2,s=void 0===a?"keyup":a,c=(0,v.useState)({enable:!1,item:{title:"",content:"",bg:[],_id:""},position:{top:"",left:""}}),l=(0,f.Z)(c,2),d=l[0],u=l[1],m=(0,v.useCallback)((function(e,t){var r=e.currentTarget.getBoundingClientRect(),i=r.top,o=r.left;u({enable:!0,position:{top:i+20+"px",left:o+20+"px"},item:t}),n.classList.add("show_overlay")}),[n]),h=(0,v.useRef)(i);return(0,v.useEffect)((function(){h.current=i}),[i]),(0,v.useEffect)((function(){var e=function(e){e.target.classList.contains("overlay")&&(h.current(),n.classList.remove("show_overlay"))},t=function(e){"Escape"===e.key&&(h.current(),n.classList.remove("show_overlay"))};return d.enable&&(null===n||void 0===n||n.addEventListener(o,e,!1)),d.enable&&(null===r||void 0===r||r.addEventListener(s,t,!1)),!d.enable&&(null===n||void 0===n||n.removeEventListener(o,e,!1)),!d.enable&&(null===r||void 0===r||r.removeEventListener(s,t,!1)),function(){null===n||void 0===n||n.removeEventListener(o,e,!1),null===r||void 0===r||r.removeEventListener(s,t,!1)}}),[o,d.enable,n,r,s]),{setMenu:u,menu:d,setMenuDetails:m}},Q=t(5861),W=t(7757),$=t.n(W),ee=[{white:["#fff","#000"]},{green:["hsl(146, 85%, 75%)","hsl(146, 85%, 15%)"]},{yellow:["hsl(58, 85%, 75%)","hsl(58, 85%, 15%)"]},{purple:["hsl(276, 85%, 75%)","hsl(276, 85%, 15%)"]},{red:["hsl(348, 85%, 75%)","hsl(348, 85%, 15%)"]}],ne=t(9661),te=t(3109),re=(0,v.memo)((function(e){var n=e.styles,t=(0,Z.Xh)().setUser,r=ce(),i=r.menu,o=r.setEditNote,a=r.setMenu,s=(0,v.useCallback)(function(){var e=(0,Q.Z)($().mark((function e(n,r,s){var c;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.stopPropagation(),null!==i&&void 0!==i&&i.item){e.next=3;break}return e.abrupt("return");case 3:if(!i.item.bg.includes(r)){e.next=5;break}return e.abrupt("return");case 5:return(0,ne.default)("/api/v1/user/notes/".concat(null===i||void 0===i?void 0:i.item._id),(0,m.Z)((0,m.Z)({},i.item),{},{bg:s[Object.keys(s)[0]]})),e.next=8,(0,te.default)("/api/v1/user/notes");case 8:if(null!==(c=e.sent)&&void 0!==c&&c.notes){e.next=11;break}return e.abrupt("return");case 11:t((function(e){return(0,m.Z)((0,m.Z)({},e),{},{notes:c.notes})})),o((function(e){return(0,m.Z)((0,m.Z)({},e),{},{bg:s[Object.keys(s)[0]]})})),a&&a((function(e){return(0,m.Z)((0,m.Z)({},e),{},{item:(0,m.Z)((0,m.Z)({},e.item),{},{bg:s[Object.keys(s)[0]]})})}));case 14:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),[i,t,o,a]);return(0,w.jsx)(ae,{className:"clr-list",style:n,children:ee.map((function(e,n){return(0,w.jsx)(oe,{clr:e,handleClick:s},n)}))})})),ie=re,oe=(0,v.memo)((function(e){var n=e.clr,t=e.handleClick,r=(0,Z.oe)().dark_theme,i=n[Object.keys(n)[0]][r?1:0],o=(0,v.useCallback)((function(e){return t(e,i,n)}),[n,i,t]);return(0,w.jsx)("div",{style:{background:i,width:"3rem",height:"3rem",borderRadius:"50%"},onClick:o})})),ae=y.ZP.div(u||(u=(0,b.Z)(["\n   display:flex;\n   position:fixed;\n   flex-direction:row;\n   align-items:center;\n   justify-content:space-between;\n   gap:1rem;\n   z-index:3;\n   >div{\n      cursor:pointer;\n   }\n"]))),se=(0,v.createContext)({}),ce=function(){return(0,v.useContext)(se)},le=(0,v.memo)((function(){(0,x.Z)({auth:!0});var e=(0,v.useState)({_id:"",title:"",content:"",bg:[]}),n=(0,f.Z)(e,2),t=n[0],r=n[1];g({_id:t._id});var i=(0,T.Z)().handleUpdateNote;J({eventType:"keyup",handler:function(){return i(t,r)},element:window}),F({eventType:"click",handler:function(){return i(t,r)},element:document.body});var o=(0,G.Z)().handleChange,a=(0,v.useCallback)((function(e){o(e,r)}),[o]),s=K({element:document.querySelector(".overlay"),handler:function(){return d((function(e){return(0,m.Z)((0,m.Z)({},e),{},{enable:!1})}))},eventType:"click"}),c=s.menu,l=s.setMenuDetails,d=s.setMenu;return(0,w.jsxs)(h.Z,{styles:{height:"calc(100% - 5rem)",minHeight:"unset"},children:[(0,w.jsx)(p.Z,{mode:"create_note_container",children:(0,w.jsx)(P,{})}),(0,w.jsxs)(se.Provider,{value:{note:t,setEditNote:r,handleNoteChange:a,menu:c,setMenuDetails:l,setMenu:d},children:[(0,w.jsx)(q,{}),(0,w.jsx)(O,{mode:"edit_note",children:c.enable&&(0,w.jsx)(ie,{styles:c.position})}),c.enable&&(0,w.jsx)(ie,{styles:c.position})]})]})}))},9482:function(e,n,t){t.d(n,{Z:function(){return g}});var r,i=t(168),o=t(1413),a=t(2791),s=t(5751),c=t(7042),l=t(8781),d=t(9719),u=t(184),m=(0,a.memo)((function(e){var n=e.cls,t="#".concat(Math.random().toString(16).slice(2,8));return(0,u.jsx)("span",{className:n,style:{background:t}})})),f=t(3543),v=t(8197),h=t(6310),p=t(6991),x=t(3439),g=(0,a.memo)((function(e){var n=e.note,t=e.styles,r=e.mode,i=void 0===r?"note.page":r,a=(0,f.useEditNoteCtx)().setMenuDetails,s=(0,x.Z)(),g=s.loader,y=s.handleDeleteNote;return(0,u.jsxs)(b,{id:n._id,style:(0,o.Z)({},t),className:"note",children:[(0,u.jsxs)(p.Z,{styles:{padding:"0.5rem",borderBottom:"var(--border)"},children:[(0,u.jsx)(m,{cls:"random_span"}),(0,u.jsx)(d.Z,{text:n.title,styles:{width:"100%"},cls:"note-title"})]}),(0,u.jsx)(p.Z,{styles:{overflow:"hidden",flex:"1",padding:"0.5rem"},children:(0,u.jsx)("p",{className:"note-content",children:n.content})}),"note.page"===i&&(0,u.jsxs)(c.Z,{children:[(0,u.jsx)(h.Z,{handleClick:function(e){a(e,n)},children:(0,u.jsx)(v.Z,{})}),(0,u.jsx)(l.Z,{mode:"delete_note_btn",handleClick:function(){return y({_id:n._id})},loader:g})]}),"recycle.page"===i&&(0,u.jsxs)(c.Z,{cls:"bin-menu",children:[(0,u.jsx)(l.Z,{mode:"restore_btn",handleClick:function(){return y({_id:n._id,MOVE_TO_BIN:!1,RESTORE:!0})},loader:g,text:"restore"}),(0,u.jsx)(l.Z,{mode:"delete_note_btn",handleClick:function(){return y({_id:n._id,MOVE_TO_BIN:!1})},loader:g})]})]})})),b=s.ZP.div(r||(r=(0,i.Z)(["\n    width:100%;\n    max-width:40rem;\n    height:20rem;\n    border-radius:1rem;\n    box-shadow:0 0.3rem 0.5rem rgba(0,0,0,0.1);\n    position:relative;\n    border:var(--note-border);\n    animation:animate_note calc(0.4s  * var(--note-order)) ease-in;\n    display:flex;\n    flex-direction:column;\n\n\n    /* title and content */\n    h3,p{\n        font-size:clamp(1.6rem,1.7rem,1.7vw);\n        /* padding:0.5rem; */\n    }\n    h3{\n        /* border-bottom:var(--border); */\n        font-weight:400;\n        text-align:center;\n        width:100%;\n    }\n    p{\n        opacity:0.8;\n        white-space:pre-line;\n        word-break:break-all;\n        width:100%;\n    }\n\n    /* random span at the left top of the note */\n    span.random_span{\n        position:absolute;\n        top:0;left:0;\n        width:5rem;\n        height:5rem;\n        border-radius:50%;\n        transform:translate(-50%, -50%);\n    }\n\n    @media (max-width:700px){\n        .overlay-menu{\n            display:none;\n        }\n    }\n\n    /* making the permanent delete and restore btn visible in bin page for every note */\n    .bin-menu{\n        display:flex;\n    }\n    @media (min-width:700px){\n        div.overlay-menu {\n            height:4rem;\n            width:100%;\n            display:flex;\n            opacity:0;\n            pointer-events:none;\n        }\n        &:hover{\n            div.overlay-menu{\n                opacity:1;\n                pointer-events:all;\n            }\n        }\n    }\n\n    @keyframes animate_note{\n        0%{\n            transform: scale(0.8);\n            animation-timing-function: ease;\n            /* background:var(--secondary-clr); */\n        }50%{\n            animation-timing-function: ease-in;\n            opacity: 1;\n            transform: scale(1.1);\n        }100%{\n            /* animation-timing-function: ease-out;\n            opacity: 1;\n            transform: scale(1); */\n        }\n}\n"])))},9249:function(e,n,t){var r=t(1413),i=t(5861),o=t(8152),a=t(7757),s=t.n(a),c=t(2791),l=t(5404);n.Z=function(){var e=(0,l.Xh)().setUser,n=(0,c.useState)(!0),a=(0,o.Z)(n,2),d=a[0],u=a[1];return(0,c.useEffect)((function(){(0,i.Z)(s().mark((function n(){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Promise.resolve().then(t.bind(t,3109));case 3:return n.next=5,n.sent.default("/api/v1/user/notes");case 5:null!==(i=n.sent)&&void 0!==i&&i.notes&&e((function(e){return(0,r.Z)((0,r.Z)({},e),{},{notes:i.notes})})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:u(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()}),[e]),{loader:d}}},3439:function(e,n,t){var r=t(5861),i=t(1413),o=t(8152),a=t(7757),s=t.n(a),c=t(2791),l=t(5404),d=t(3109),u=t(142);n.Z=function(){var e=(0,c.useState)({title:"",content:""}),n=(0,o.Z)(e,2),a=n[0],m=n[1],f=(0,l.Xh)().setUser,v=(0,c.useState)(!1),h=(0,o.Z)(v,2),p=h[0],x=h[1],g=(0,c.useState)({err:""}),b=(0,o.Z)(g,2),y=b[0],Z=b[1],w=(0,c.useState)(!1),_=(0,o.Z)(w,2),j=_[0],k=_[1],C=(0,u.Z)().handleChange,E=(0,c.useCallback)((function(e){C(e,m)}),[C]);(0,c.useEffect)((function(){j&&((0,d.default)("/api/v1/user/notes").then((function(e){(null===e||void 0===e?void 0:e.notes)&&f((function(n){return(0,i.Z)((0,i.Z)({},n),{},{notes:e.notes})}))})),k(!1))}),[j,f]),(0,c.useEffect)((function(){var e;return y.err&&(e=setTimeout((function(){return Z({err:""})}),3e3)),function(){return clearInterval(e)}}),[y]);var N=(0,c.useCallback)(function(){var e=(0,r.Z)(s().mark((function e(n){var r,i,o,a,c,l,d,u,m,f,v;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n._id,i=n.setEditNote,o=n.MOVE_TO_BIN,a=void 0===o||o,c=n.RESTORE,l=void 0!==c&&c,x(!0),e.next=4,t.e(385).then(t.bind(t,385));case 4:return d=e.sent,u=d.default,e.next=8,u("/api/v1/user/notes/".concat(r),a,l);case 8:null!==(m=e.sent)&&void 0!==m&&m.success&&k(!0),(i||a)&&(f=document.getElementById("modal"),v=f.parentElement,document.body.classList.remove("edit_mode"),setTimeout((function(){v.style.display="none",f.style.display="none",i&&i({title:"",content:"",_id:"",bg:[]})}),310)),x(!1);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]),L=(0,c.useCallback)(function(){var e=(0,r.Z)(s().mark((function e(n,r){var i,o,a,c,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=document.getElementById("modal"),o=i.parentElement,document.body.classList.remove("edit_mode"),setTimeout((function(){o.style.display="none",i.style.display="none";var e=document.getElementById(n._id);e&&(e.style.opacity="1"),r&&r({title:"",content:"",_id:"",bg:[]})}),310),e.next=6,Promise.resolve().then(t.bind(t,9661));case 6:return a=e.sent,c=a.default,e.next=10,c("/api/v1/user/notes/".concat(n._id),n);case 10:(null===(l=e.sent)||void 0===l?void 0:l.success)&&k(!0);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),[]),T=(0,c.useCallback)(function(){var e=(0,r.Z)(s().mark((function e(n){var r,i,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),n.stopPropagation(),x(!0),e.next=5,t.e(279).then(t.bind(t,8279));case 5:return r=e.sent,i=r.default,e.next=9,i(a);case 9:null!==(o=e.sent)&&void 0!==o&&o.error&&Z({err:o.error}),null!==o&&void 0!==o&&o.success&&(k(!0),m({title:"",content:""})),x(!1);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[a]);return{loader:p,setLoader:x,handleDeleteNote:N,handleUpdateNote:L,handleNoteSubmit:T,error:y,handleNoteChange:E,note:a}}},3109:function(e,n,t){t.r(n);var r=t(5861),i=t(7757),o=t.n(i),a=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();n.default=a},9661:function(e,n,t){t.r(n);var r=t(5861),i=t(7757),o=t.n(i),a=function(){var e=(0,r.Z)(o().mark((function e(n,t){var r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n,{method:"PATCH",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}();n.default=a}}]);
//# sourceMappingURL=notepage.47579834.chunk.js.map