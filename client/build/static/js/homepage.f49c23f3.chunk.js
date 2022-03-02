"use strict";(self.webpackChunkts_mern_note_app_frontend=self.webpackChunkts_mern_note_app_frontend||[]).push([[131],{1967:function(t,n,e){var r,a=e(168),s=e(2791),i=e(5751),l=e(184),f=(0,s.memo)((function(t){var n=t.children,e=t.styles;return(0,l.jsx)(o,{style:e,children:n})}));n.Z=f;var o=i.ZP.section(r||(r=(0,a.Z)(["\n    display:flex;\n    flex-direction:column;\n    flex-wrap:wrap;\n\n    @media (min-width:700px){\n        flex-direction:unset;\n    }\n"])))},6991:function(t,n,e){var r,a,s,i,l,f,o,c=e(168),d=e(2791),h=e(5751),m=e(184),x=(0,d.memo)((function(t){var n=t.children,e=t.styles,r=t.mode,a=t.cls;return(0,m.jsx)(p,{mode:r,style:e,className:(r||"")+" "+(a||""),children:n})}));n.Z=x;var p=h.ZP.section(r||(r=(0,c.Z)(["\n    display:flex;\n    overflow:hidden;\n    position:relative;\n\n    ","\n\n    img{\n        display:flex;\n        width:clamp(23rem, 28rem, 28vw);\n        height:clamp(28rem, 32rem, 32vw);\n        transform:rotate(-20deg) scale(0.8);\n        transform-origin:center;\n    }\n"])),(function(t){switch(t.mode){case"hero":return(0,h.iv)(a||(a=(0,c.Z)(["\n                width:100%;\n                align-items:center;\n                justify-content:center;\n                transform-origin:center;\n                flex-direction:column;\n                text-align:center;\n                padding:2rem;\n                /* animation the every children in hero section */\n                @keyframes animateLoad {\n                    0%{\n                        transform: rotate(15deg) translateY(300%) scale(0.9);\n                        opacity: 0;\n                    }\n                    70%{\n                        transform: rotate(0) translateY(-50%) scale(1.1);\n                    }\n                    100%{ }\n                }\n                @media (min-width:700px){\n                    width:50%;\n                }\n            "])));case"create_note_container":return(0,h.iv)(s||(s=(0,c.Z)(["\n                padding:2rem;\n                justify-content:center;\n                margin-bottom:3rem;\n                button{\n                    width:100%;\n                }\n\n                @media (min-width:700px){\n                    margin-bottom:0rem;\n                        border-right:var(--border);\n                        height:100%;\n                        position:fixed;\n                        width:var(--width);\n                    }\n            "])));case"notes_container_wrapper":return(0,h.iv)(i||(i=(0,c.Z)(["\n                flex-direction:column;\n                @media (min-width:700px){\n                    position:relative;\n                    left:var(--width);\n                    width:calc(100% - var(--width));\n                }\n            "])));case"notes_container":return(0,h.iv)(l||(l=(0,c.Z)(["\n                justify-content:center;\n                gap:3rem;\n                padding:2rem;\n                flex-wrap:wrap;\n                @media (min-width:700px){\n                    justify-content:space-around;\n                }\n            "])));case"edit_note":return(0,h.iv)(f||(f=(0,c.Z)(["\n                width:100%;\n                height:100%;\n                top:0 !important;\n                inset:0;\n                position:fixed;\n                align-items:center;\n                justify-content:center;\n                background:var(--edit-modal-bg);\n                display:none;\n                border-radius:0.5rem;\n            "])));default:return(0,h.iv)(o||(o=(0,c.Z)(["\n            "])))}}))},3282:function(t,n,e){var r,a=e(168),s=e(2791),i=e(5751),l=e(184),f=(0,s.memo)((function(t){var n=t.text,e=t.styles;return(0,l.jsx)(o,{style:e,children:n})}));n.Z=f;var o=i.ZP.p(r||(r=(0,a.Z)(["\n    font-size:clamp(1.4rem, 1.5rem ,1.5vw);\n    opacity:0.8;\n    white-space:pre-line;\n    word-break:break-all;\n    margin-top:1rem;\n"])))},4380:function(t,n,e){var r,a=e(168),s=e(2791),i=e(5751),l=e(184),f=(0,s.memo)((function(t){t.text;var n=t.children,e=t.styles;return(0,l.jsx)(o,{style:e,children:n})}));n.Z=f;var o=i.ZP.h2(r||(r=(0,a.Z)(["\n    font-size:clamp(3.5rem,4rem, 4vw);\n"])))},2677:function(t,n,e){var r=e(1413),a=e(5861),s=e(7757),i=e.n(s),l=e(2791),f=e(9271),o=e(5404);n.Z=function(t){var n=t.auth,s=void 0!==n&&n,c=(0,o.X)().setUser,d=(0,f.k6)();(0,l.useEffect)((function(){(0,a.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(769).then(e.bind(e,769));case 2:return t.next=4,t.sent.default();case 4:n=t.sent,(s&&null!==n&&void 0!==n&&n._id||(null===n||void 0===n?void 0:n._id))&&c((function(t){return(0,r.Z)((0,r.Z)({},t),{},{_id:n._id,email:null===n||void 0===n?void 0:n.email})})),s&&(null===n||void 0===n||!n._id)&&d.push("/login");case 7:case"end":return t.stop()}}),t)})))()}),[c,d,s])}},4801:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a=e(2791),s=e(1967),i=e(6991),l=e(168),f=e(5751),o=e(6412),c=e(184),d=function(){var t=(0,o.oe)().dark_theme;return(0,c.jsxs)(m,{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"794.23533",height:"458.82848",viewBox:"0 0 794.23533 458.82848",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,c.jsx)("path",{d:"M569.645,655.81836a6.78564,6.78564,0,0,1-3.34668-.88574L372.80225,545.53711a6.828,6.828,0,0,1-2.58008-9.293L522.625,266.67822a6.81755,6.81755,0,0,1,9.29248-2.58008L725.41309,373.49365a6.82785,6.82785,0,0,1,2.58105,9.29248L575.59082,652.35156a6.776,6.776,0,0,1-4.11182,3.21582A6.85621,6.85621,0,0,1,569.645,655.81836Z",transform:"translate(-202.88234 -220.58576)",fill:t?"#535353":"#d6d6d6",id:"mutated_book_second"}),(0,c.jsx)("rect",{x:"618.29869",y:"218.2757",width:"1.57992",height:"234.91839",transform:"translate(-180.74045 488.83783) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"604.30254",y:"243.03172",width:"1.57992",height:"234.91839",transform:"translate(-209.39867 489.22631) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"590.30639",y:"267.78775",width:"1.57992",height:"234.91839",transform:"translate(-238.05689 489.6148) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"576.31024",y:"292.54377",width:"1.57992",height:"234.91839",transform:"translate(-266.71511 490.00329) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"562.31408",y:"317.29979",width:"1.57992",height:"234.91839",transform:"translate(-295.37333 490.39178) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"548.31793",y:"342.05581",width:"1.57992",height:"234.91839",transform:"translate(-324.03155 490.78027) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"534.32178",y:"366.81184",width:"1.57992",height:"234.91839",transform:"translate(-352.68977 491.16876) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"520.32563",y:"391.56786",width:"1.57992",height:"234.91839",transform:"translate(-381.34799 491.55725) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"506.32948",y:"416.32388",width:"1.57992",height:"234.91839",transform:"translate(-410.00621 491.94574) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"492.33333",y:"441.07991",width:"1.57992",height:"234.91839",transform:"translate(-438.66442 492.33423) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"478.33717",y:"465.83593",width:"1.57992",height:"234.91839",transform:"translate(-467.32264 492.72272) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("path",{d:"M551.645,614.81836a6.78564,6.78564,0,0,1-3.34668-.88574L354.80225,504.53711a6.828,6.828,0,0,1-2.58008-9.293L504.625,225.67822a6.81755,6.81755,0,0,1,9.29248-2.58008L707.41309,332.49365a6.82785,6.82785,0,0,1,2.58105,9.29248L557.59082,611.35156a6.776,6.776,0,0,1-4.11182,3.21582A6.85621,6.85621,0,0,1,551.645,614.81836Z",transform:"translate(-202.88234 -220.58576)",fill:t?"#646464":"#dddddd",id:"mutated_book_first"}),(0,c.jsx)("rect",{x:"600.29869",y:"177.2757",width:"1.57992",height:"234.91839",transform:"translate(-154.19084 452.34697) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"586.30254",y:"202.03172",width:"1.57992",height:"234.91839",transform:"translate(-182.84906 452.73546) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"572.30639",y:"226.78775",width:"1.57992",height:"234.91839",transform:"translate(-211.50728 453.12395) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"558.31024",y:"251.54377",width:"1.57992",height:"234.91839",transform:"translate(-240.1655 453.51244) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"544.31408",y:"276.29979",width:"1.57992",height:"234.91839",transform:"translate(-268.82372 453.90093) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"530.31793",y:"301.05581",width:"1.57992",height:"234.91839",transform:"translate(-297.48194 454.28942) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"516.32178",y:"325.81184",width:"1.57992",height:"234.91839",transform:"translate(-326.14016 454.67791) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"502.32563",y:"350.56786",width:"1.57992",height:"234.91839",transform:"translate(-354.79838 455.0664) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"488.32948",y:"375.32388",width:"1.57992",height:"234.91839",transform:"translate(-383.4566 455.45489) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"474.33333",y:"400.07991",width:"1.57992",height:"234.91839",transform:"translate(-412.11482 455.84338) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("rect",{x:"460.33717",y:"424.83593",width:"1.57992",height:"234.91839",transform:"translate(-440.77304 456.23187) rotate(-60.51777)",fill:"#fff"}),(0,c.jsx)("path",{d:"M532.36285,220.58576h-309.237v430h309.237a4.18841,4.18841,0,0,0,4.18832-4.18831V224.77407A4.18841,4.18841,0,0,0,532.36285,220.58576ZM240.57714,638.71888a7.67858,7.67858,0,1,1,7.67857-7.67857A7.67854,7.67854,0,0,1,240.57714,638.71888Zm0-39.09091a7.67857,7.67857,0,1,1,7.67857-7.67857A7.67854,7.67854,0,0,1,240.57714,599.628Zm0-39.09091a7.67857,7.67857,0,1,1,7.67857-7.67857A7.67854,7.67854,0,0,1,240.57714,560.53706Zm0-39.09091a7.67857,7.67857,0,1,1,7.67857-7.67857A7.67854,7.67854,0,0,1,240.57714,521.44615Zm0-39.09091a7.67857,7.67857,0,1,1,7.67857-7.67857A7.67854,7.67854,0,0,1,240.57714,482.35524Zm0-39.09091a7.67857,7.67857,0,1,1,7.67857-7.67857A7.67854,7.67854,0,0,1,240.57714,443.26433Zm0-39.09091a7.67857,7.67857,0,1,1,7.67857-7.67857A7.67854,7.67854,0,0,1,240.57714,404.17342Zm0-39.09091a7.67857,7.67857,0,1,1,7.67857-7.67857A7.67854,7.67854,0,0,1,240.57714,365.08251Zm0-39.09091a7.67857,7.67857,0,1,1,7.67857-7.67857A7.67854,7.67854,0,0,1,240.57714,325.9916Zm0-39.0909a7.67858,7.67858,0,1,1,7.67857-7.67858A7.67855,7.67855,0,0,1,240.57714,286.9007Zm0-39.09091a7.67858,7.67858,0,1,1,7.67857-7.67858A7.67855,7.67855,0,0,1,240.57714,247.80979Z",transform:"translate(-202.88234 -220.58576)",fill:"#3f3d56"}),(0,c.jsx)("path",{d:"M223.12584,244.31953c-2.072,0-20.2435-.09783-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.3961c-10.70281,0-17.64268,1.19807-18.76031,2.09416,1.11763.89608,8.0575,2.09415,18.76031,2.09415,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18716-8.71065-1.7015l.12015-1.39065c10.08136.8712,10.08136,2.48033,10.08136,3.086C243.36935,244.2217,225.19784,244.31953,223.12584,244.31953Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,282.71238c-2.072,0-20.2435-.09782-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026V277.128c-10.70281,0-17.64268,1.19807-18.76031,2.09415,1.11763.89609,8.0575,2.09416,18.76031,2.09416,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18717-8.71065-1.7015l.12015-1.39065c10.08136.8712,10.08136,2.48033,10.08136,3.086C243.36935,282.61456,225.19784,282.71238,223.12584,282.71238Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,321.80329c-2.072,0-20.2435-.09782-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.39611c-10.70281,0-17.64268,1.19807-18.76031,2.09415,1.11763.89609,8.0575,2.09416,18.76031,2.09416,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18717-8.71065-1.7015l.12015-1.39065c10.08136.8712,10.08136,2.48033,10.08136,3.086C243.36935,321.70547,225.19784,321.80329,223.12584,321.80329Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,360.8942c-2.072,0-20.2435-.09782-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.39611c-10.70281,0-17.64268,1.19807-18.76031,2.09415,1.11763.89609,8.0575,2.09416,18.76031,2.09416,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18717-8.71065-1.7015l.12015-1.39065c10.08136.8712,10.08136,2.48033,10.08136,3.086C243.36935,360.79638,225.19784,360.8942,223.12584,360.8942Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,399.98511c-2.072,0-20.2435-.09782-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.39611c-10.70281,0-17.64268,1.19807-18.76031,2.09415,1.11763.89608,8.0575,2.09416,18.76031,2.09416,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18717-8.71065-1.70151l.12015-1.39065c10.08136.87121,10.08136,2.48034,10.08136,3.086C243.36935,399.88729,225.19784,399.98511,223.12584,399.98511Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,439.076c-2.072,0-20.2435-.09782-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.3961c-10.70281,0-17.64268,1.19808-18.76031,2.09416,1.11763.89608,8.0575,2.09416,18.76031,2.09416,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38346-2.76111-1.18717-8.71065-1.70151l.12015-1.39065c10.08136.87121,10.08136,2.48034,10.08136,3.086C243.36935,438.9782,225.19784,439.076,223.12584,439.076Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,478.16693c-2.072,0-20.2435-.09782-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.3961c-10.70281,0-17.64268,1.19808-18.76031,2.09416,1.11763.89608,8.0575,2.09416,18.76031,2.09416,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18716-8.71065-1.7015l.12015-1.39065c10.08136.8712,10.08136,2.48034,10.08136,3.086C243.36935,478.06911,225.19784,478.16693,223.12584,478.16693Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,517.25784c-2.072,0-20.2435-.09782-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.3961c-10.70281,0-17.64268,1.19808-18.76031,2.09416,1.11763.89608,8.0575,2.09415,18.76031,2.09415,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18716-8.71065-1.7015l.12015-1.39065c10.08136.8712,10.08136,2.48034,10.08136,3.086C243.36935,517.16,225.19784,517.25784,223.12584,517.25784Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,556.34875c-2.072,0-20.2435-.09783-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.3961c-10.70281,0-17.64268,1.19807-18.76031,2.09416,1.11763.89608,8.0575,2.09415,18.76031,2.09415,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18716-8.71065-1.7015l.12015-1.39065c10.08136.8712,10.08136,2.48033,10.08136,3.086C243.36935,556.25092,225.19784,556.34875,223.12584,556.34875Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,595.43966c-2.072,0-20.2435-.09783-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.3961c-10.70281,0-17.64268,1.19807-18.76031,2.09416,1.11763.89608,8.0575,2.09415,18.76031,2.09415,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18716-8.71065-1.7015l.12015-1.39065c10.08136.8712,10.08136,2.48033,10.08136,3.086C243.36935,595.34183,225.19784,595.43966,223.12584,595.43966Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M223.12584,634.53057c-2.072,0-20.2435-.09783-20.2435-3.49026s18.1715-3.49026,20.2435-3.49026v1.3961c-10.70281,0-17.64268,1.19807-18.76031,2.09416,1.11763.89608,8.0575,2.09415,18.76031,2.09415,10.67895,0,17.61167-1.193,18.75265-2.088-.543-.38345-2.76111-1.18716-8.71065-1.7015l.12015-1.39065c10.08136.8712,10.08136,2.48033,10.08136,3.086C243.36935,634.43274,225.19784,634.53057,223.12584,634.53057Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M469.18915,384.977H315.61772a4.54253,4.54253,0,0,1-4.53733-4.53733V320.40719a4.54253,4.54253,0,0,1,4.53733-4.53734H469.18915a4.54248,4.54248,0,0,1,4.53734,4.53734v60.03247A4.54248,4.54248,0,0,1,469.18915,384.977Z",transform:"translate(-202.88234 -220.58576)",fill:"#fff"}),(0,c.jsx)("path",{d:"M411.94889,336.46238H372.858a3.49026,3.49026,0,1,1,0-6.98052h39.09091a3.49026,3.49026,0,0,1,0,6.98052Z",transform:"translate(-202.88234 -220.58576)",fill:"#f2330d"}),(0,c.jsx)("path",{d:"M433.5885,353.91368H351.21837a3.49026,3.49026,0,0,1,0-6.98052H433.5885a3.49026,3.49026,0,0,1,0,6.98052Z",transform:"translate(-202.88234 -220.58576)",fill:"#f2330d"}),(0,c.jsx)("path",{d:"M433.5885,371.365H351.21837a3.49026,3.49026,0,0,1,0-6.98052H433.5885a3.49026,3.49026,0,0,1,0,6.98052Z",transform:"translate(-202.88234 -220.58576)",fill:"#f2330d"}),(0,c.jsx)("path",{d:"M832.51129,365.51563a11.57687,11.57687,0,0,0,9.041-18.8101c-5.7026-7.12627-18.18622-6.03465-23.18046-13.67408-4.23215-6.47369-.32395-15.36376,5.31243-20.66007,11.03421-10.36844,28.69794-12.91634,42.21255-6.08893S887.84132,328.84,886.04251,343.874c-.68515,5.72635-2.27338,12.67608,2.17072,16.35174,3.94416,3.26215,9.77363,1.41057,14.72817.12586a52.54152,52.54152,0,0,1,43.15806,8.03484c10.524,7.54244,18.19488,19.72426,18.1997,32.67192s-8.81341,25.99544-21.43238,28.89436c-12.36962,2.84163-25.11995-4.0671-33.8699-13.26061s-14.75775-20.628-22.73242-30.50159-19.009-18.57028-31.69876-18.799c-7.35254-.13251-15.402,2.45505-21.64218-1.43567",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("circle",{cx:"635.08387",cy:"125.5244",r:"24.56103",fill:"#ffb8b8"}),(0,c.jsx)("path",{d:"M785.72,509.04369a10.05581,10.05581,0,0,1,8.38094-12.94279l7.502-34.93849,13.01071,13.24972L805.49494,505.559a10.11027,10.11027,0,0,1-19.77494,3.4847Z",transform:"translate(-202.88234 -220.58576)",fill:"#ffb8b8"}),(0,c.jsx)("polygon",{points:"708.994 440.209 696.945 442.469 660.62 323.16 686.404 319.823 708.994 440.209",fill:"#ffb8b8"}),(0,c.jsx)("path",{d:"M891.87193,660.29219H915.5158a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H876.98507a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,891.87193,660.29219Z",transform:"matrix(0.98285, -0.1844, 0.1844, 0.98285, -310.64467, -43.86345)",fill:"#2f2e41"}),(0,c.jsx)("polygon",{points:"630.033 446.634 617.774 446.633 615.941 336.146 642.035 336.147 630.033 446.634",fill:"#ffb8b8"}),(0,c.jsx)("path",{d:"M609.01639,443.13049h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H594.12953a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,609.01639,443.13049Z",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M813.18164,571.76855l1.126-53.99707c-.08594-.75976-8.94239-82.56689-12.24317-103.47021-3.35351-21.24121,13.97657-32.13281,14.15137-32.24023.77637-.31788,1.47754-.58692,2.17773-.84522h0a46.45906,46.45906,0,0,1,48.53907,9.86377,48.0104,48.0104,0,0,1,13.54394,48.688l-6.11328,21.16406c31.31836,56.62012,37.74512,80.98535,37.80664,81.22461l.01856.07324-.00391.07617c-1.12305,22.45508-94.4834,29.15137-98.457,29.42579Z",transform:"translate(-202.88234 -220.58576)",fill:"#f2330d"}),(0,c.jsx)("polygon",{points:"603.017 183.616 581.859 267.131 619.72 271.585 603.017 183.616",fill:"#f2330d"}),(0,c.jsx)("path",{d:"M857.045,473.233a10.05574,10.05574,0,0,1,13.38045-7.66283l22.67946-27.6156,5.492,17.739L876.218,479.19821A10.11027,10.11027,0,0,1,857.045,473.233Z",transform:"translate(-202.88234 -220.58576)",fill:"#ffb8b8"}),(0,c.jsx)("path",{d:"M886.665,473.30078,866.92383,460.5293l18.78906-19.89453-50.94531-15.50538L847.875,386.94531l16.124,2.30323,40.98731,30.36084a24.83274,24.83274,0,0,1,5.33008,34.36718l-.08887.09473Z",transform:"translate(-202.88234 -220.58576)",fill:"#f2330d"}),(0,c.jsx)("path",{d:"M815.8504,332.1502a80.48078,80.48078,0,0,0,34.8177,11.47239L846.998,339.2251a26.97055,26.97055,0,0,0,8.33123,1.65435c2.84365-.04429,5.82309-1.13924,7.437-3.481a8.48679,8.48679,0,0,0,.56807-7.83974,16.07434,16.07434,0,0,0-5.05681-6.323,30.10581,30.10581,0,0,0-28.02088-5.00785,17.993,17.993,0,0,0-8.36905,5.36846c-2.11524,2.60944-6.72881,4.95614-5.64579,8.13584Z",transform:"translate(-202.88234 -220.58576)",fill:"#2f2e41"}),(0,c.jsx)("path",{d:"M995.927,679.41424H691.633a1.19068,1.19068,0,1,1,0-2.38137H995.927a1.19069,1.19069,0,0,1,0,2.38137Z",transform:"translate(-202.88234 -220.58576)",fill:"#3f3d56"})]})},h=(0,a.memo)(d),m=f.ZP.svg(r||(r=(0,l.Z)(["\n    width:25rem;\n    height:25rem;\n    @media (min-width:700px){\n        width:30rem;\n        height:30rem;\n    }\n\n    #mutated_book_first{\n        /* fill:red; */\n        /* animation:first 2s linear infinite alternate; */\n        /* fill:#c9c9c9; */\n    }\n    #mutated_book_second{\n        /* fill:blue; */\n        /* animation:first 1s linear infinite alternate; */\n    }\n    @keyframes first{\n        0%{\n            transform:translate(-250.88234px, -220.58576px) ;\n\n        }\n        50%{\n            transform:translate(-180.88234px, -220.58576px) rotate(0);\n        }\n        100%{\n            transform:translate(-202.88234px, -220.58576px);\n        }\n    }\n    @keyframes first{\n        0%{\n            transform:translate(-250.88234px, -220.58576px) ;\n\n        }\n        50%{\n            transform:translate(-180.88234px, -220.58576px) rotate(0);\n        }\n        100%{\n            transform:translate(-202.88234px, -220.58576px);\n        }\n    }\n"]))),x=(0,a.memo)((function(){return(0,c.jsx)(i.Z,{mode:"hero",children:(0,c.jsx)(h,{})})})),p=e(9271),u=e(8781),j=e(3282),Z=e(4380),w=(0,a.memo)((function(){var t=(0,p.k6)(),n=(0,a.useCallback)((function(){return t.push("/notes")}),[t]);return(0,c.jsxs)(i.Z,{mode:"hero",children:[(0,c.jsxs)(Z.Z,{styles:{"--order":0},children:["An Amazing ",(0,c.jsx)("span",{className:"accent",children:"Note"})," App"]}),(0,c.jsx)(j.Z,{text:"Create your notes on the go, that you can easily remember.",styles:{"--order":1}}),(0,c.jsx)(u.Z,{text:"Get Started",handleClick:n,mode:"hero_btn",styles:{"--order":2}})]})})),v=(0,a.memo)((function(){return(0,c.jsxs)(s.Z,{styles:{minHeight:"calc(100vh - 6rem)"},children:[(0,c.jsx)(x,{}),(0,c.jsx)(w,{})]})})),g=e(2677),y=(0,a.memo)((function(){return(0,g.Z)({auth:!1}),(0,c.jsx)(v,{})}))}}]);
//# sourceMappingURL=homepage.f49c23f3.chunk.js.map