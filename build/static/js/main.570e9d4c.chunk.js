(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){e.exports={modalBackdrop:"Update_modalBackdrop__1nHVk",modalBox:"Update_modalBox__18ASO",modalInput:"Update_modalInput__1CthD",modalTextarea:"Update_modalTextarea__8idQ2",modalButtons:"Update_modalButtons__w2URE"}},14:function(e,t,n){e.exports={mainAuth:"Auth_mainAuth__31C1t",toggleAuth:"Auth_toggleAuth__3B4hF",submitAuth:"Auth_submitAuth__3K4-I"}},23:function(e,t,n){e.exports={cursorNone:"AddNote_cursorNone__12mbc",cursorPointer:"AddNote_cursorPointer__LcK9-"}},37:function(e,t,n){},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(25),r=n.n(a),o=n(10),i=(n(37),n(38),n(3)),l=n(6),d=n(22),u=n.n(d),j=n(8),b=n(26),O=n(5);function f(){for(var e="abcdefghijklmnopqrstuvwxyz",t=e.toUpperCase(),n=e+t+"1234567890",c="",s=0;s<30;s++)c+=n[Math.floor(Math.random()*n.length)];return c}var m=n(0),h=s.a.createContext({logIn:function(){},logOut:function(){},isLoading:!1,isLoggedIn:!1,posts:[],addPost:function(){},deletePost:function(){},updatePost:function(){}});function p(e){var t=Object(c.useState)([]),n=Object(O.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(!1),o=Object(O.a)(r,2),i=o[0],d=o[1],p=Object(c.useState)(!1),x=Object(O.a)(p,2),g=x[0],v=x[1];Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t,n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,fetch("/api/user",{credentials:"include"});case 4:if(!e.sent.ok){e.next=16;break}return e.next=8,fetch("/api/posts",{credentials:"include"});case 8:return n=e.sent,e.next=11,n.json();case 11:c=e.sent,t=c,v(!0),e.next=17;break;case 16:throw new Error("offline mode activated");case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0.message),localStorage.getItem("myPostIt")?(t=JSON.parse(localStorage.getItem("myPostIt")),localStorage.getItem("myPostItUpdate")||(s=Object(j.a)(t).reverse(),localStorage.setItem("myPostIt",JSON.stringify(s)),t=s,localStorage.setItem("myPostItUpdate",JSON.stringify({reversedArray:!0})))):(t=[{_id:f(),item:"\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e41\u0e23\u0e01\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19",des:"\u0e14\u0e39\u0e41\u0e25\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e1e\u0e14\u0e49\u0e27\u0e22\u0e07\u0e31\u0e1a",date:(new Date).getTime()},{_id:f(),item:"\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e40\u0e0a\u0e49\u0e32",des:"\u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18 \u0e40\u0e02\u0e49\u0e32zoom\u0e01\u0e48\u0e2d\u0e19 10 \u0e42\u0e21\u0e07",date:(new Date).getTime()},{_id:f(),item:"\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c\u0e2b\u0e19\u0e49\u0e32",des:"\u0e17\u0e33 OT ...",date:(new Date).getTime()},{_id:f(),item:"\u0e2b\u0e22\u0e38\u0e14\u0e1b\u0e35\u0e43\u0e2b\u0e21\u0e48",des:"\u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e25\u0e49\u0e27!",date:(new Date).getTime()}],localStorage.setItem("myPostIt",JSON.stringify(t)),localStorage.setItem("myPostItUpdate",JSON.stringify({reversedArray:!0}))),v(!1);case 24:a(t),d(!1);case 26:case"end":return e.stop()}}),e,null,[[1,19]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g]);var y={logIn:function(){v(!0)},logOut:function(){fetch("/api/logout",{credentials:"include",method:"POST"}).then((function(e){e.ok&&(console.log("logged out successfully"),v(!1))}))},isLoading:i,isLoggedIn:g,posts:s,addPost:function(e,t){if(g){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:e,des:t}),credentials:"include"};fetch("/api/posts",n).then((function(e){if(e.ok)return e.json();if(400===e.status)throw new Error("title is requied.");if(403===e.status)throw v(!1),new Error("no authentication")})).then((function(n){a((function(c){return[].concat(Object(j.a)(c),[{_id:n.id,item:e,des:t,date:n.date}])}))})).catch((function(e){return console.log(e.message)}))}else{var c=(new Date).getTime(),r=[].concat(Object(j.a)(s),[{_id:f(),item:e,des:t,date:c}]);a(r),localStorage.setItem("myPostIt",JSON.stringify(r))}},deletePost:function(e){if(g)fetch("/api/posts/"+e,{method:"DELETE",credentials:"include"}).then((function(t){if(!t.ok)throw 403===t.status?(v(!1),new Error("no authentication")):new Error("deleting failed.");a((function(t){return t.filter((function(t){return t._id.toString()!==e.toString()}))}))})).catch((function(e){return console.log("Delete Error:",e.message)}));else{var t=s.filter((function(t){return t._id.toString()!==e.toString()}));a(t),localStorage.setItem("myPostIt",JSON.stringify(t))}},updatePost:function(e,t,n){if(g){var c={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:t,des:n}),credentials:"include"};fetch("/api/posts/"+e,c).then((function(c){if(!c.ok)throw 400===c.status?new Error("no title defined."):403===c.status?(v(!1),new Error("no authentication")):new Error("updating failed.");a((function(c){return c.map((function(c){return c._id.toString()===e.toString()?Object(l.a)(Object(l.a)({},c),{},{item:t,des:n}):c}))}))})).catch((function(e){return console.log(e.message)}))}else{var r=s.map((function(c){return c._id.toString()===e.toString()?Object(l.a)(Object(l.a)({},c),{},{item:t,des:n}):c}));a(r),localStorage.setItem("myPostIt",JSON.stringify(r))}}};return Object(m.jsx)(h.Provider,{value:y,children:e.children})}var x=h,g=n(27),v=n.n(g);function y(e){var t=Object(c.useContext)(x).deletePost;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{className:"delete-button",onClick:function(){t(e.id)},children:Object(m.jsx)(v.a,{})})})}var N=n(29),S=n.n(N);function _(e){var t=new Date(e.date).getDate().toString()+"/"+(new Date(e.date).getMonth()+1).toString()+"/"+new Date(e.date).getFullYear().toString()||"no date described.";return Object(m.jsx)("div",{className:"Item-block",children:Object(m.jsxs)("div",{className:"item-block-flex",children:[Object(m.jsx)("div",{className:"item-block-flex-heading",children:Object(m.jsx)("h3",{children:e.item})}),Object(m.jsx)("div",{className:"item-block-flex-body",children:Object(m.jsx)("p",{className:"description-text",children:e.des})}),Object(m.jsxs)("div",{className:"item-block-footer item-block-flex-footer",children:[Object(m.jsx)("p",{className:"date-text",children:t}),Object(m.jsxs)("div",{className:"footer-buttons",children:[Object(m.jsx)(o.b,{to:"/posts/edit/".concat(e.id),children:Object(m.jsx)(S.a,{})}),Object(m.jsx)(y,{id:e.id})]})]})]})})}function w(e){var t=Object(j.a)(e.posts);return Object(m.jsx)("div",{className:"Show-item",children:t.reverse().map((function(e){return Object(m.jsx)(_,{id:e._id,item:e.item,des:e.des,date:e.date},e._id)}))})}var k=n(30),I=n.n(k);function C(e){var t=Object(c.useState)({id:"",des:""}),n=Object(O.a)(t,2),s=n[0],a=n[1],r=Object(c.useRef)(),o=Object(c.useContext)(x).updatePost,i=Object(j.a)(e.posts);return 0===i.length?Object(m.jsx)("div",{className:"no-posts-update",children:Object(m.jsx)("p",{children:"\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e2d\u0e34\u0e17\u0e01\u0e31\u0e19\u0e40\u0e25\u0e22!"})}):Object(m.jsx)("div",{className:"Update-item",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("select",{value:s.id,onChange:function(e){var t=e.target.value;r.current.focus();var n=i.find((function(e){return e._id===t})).des;a((function(e){return Object(l.a)(Object(l.a)({},e),{},{des:n})})),a((function(e){return Object(l.a)(Object(l.a)({},e),{},{id:t})}))},children:[Object(m.jsx)("option",{hidden:!0,defaultValue:!0,children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e42\u0e1e\u0e2a\u0e15\u0e4c"}),i.reverse().map((function(e){return Object(m.jsx)("option",{value:e._id,children:e.item},e._id)}))]}),Object(m.jsx)("input",{className:"install-font",ref:r,onChange:function(e){var t=e.target.value;a((function(e){return Object(l.a)(Object(l.a)({},e),{},{des:t})}))},value:s.des,type:"text",name:"des",placeholder:"\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15\u0e42\u0e1e\u0e2a\u0e15\u0e4c",autoComplete:"off"}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault();var t=s.id,n=s.des.trim(),c=i.find((function(e){return e._id===t})).item;0!==t.length?0!==n.length?n.length>90?alert("\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e22\u0e32\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b"):(o(t,c,n),a((function(e){return Object(l.a)(Object(l.a)({},e),{},{des:""})}))):alert("\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15"):alert("\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15")},children:Object(m.jsx)(I.a,{})})]})})}var P=n(7),A=n(23),T=n.n(A),D=n(31),E=n.n(D);function J(e){var t=Object(c.useState)({item:"",des:""}),n=Object(O.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(!1),o=Object(O.a)(r,2),i=o[0],d=o[1],u=Object(c.useRef)(),j=Object(c.useContext)(x).addPost;function b(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(P.a)({},n,c))}))}return Object(m.jsx)("div",{className:"Add-item",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"Two-input ".concat(i?T.a.cursorNone:T.a.cursorPointer),children:[Object(m.jsx)("input",{className:"install-font",id:"First-input",onChange:b,onClick:function(){!1===i&&d(!0)},value:s.item,type:"text",name:"item",placeholder:i?"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d":"\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e2d\u0e34\u0e17 !",autoComplete:"off",ref:u}),i&&Object(m.jsx)("input",{className:"install-font",id:"Second-input",onChange:b,value:s.des,type:"text",name:"des",placeholder:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14",autoComplete:"off"})]}),Object(m.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var t=s.item.trim(),n=s.des.trim();""!==t?t.length>25?alert("\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e22\u0e32\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b"):n.length>90?alert("\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e22\u0e32\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b"):(j(t,n),a({item:"",des:""}),u.current.focus()):alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e30\u0e1a\u0e38\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d")},children:Object(m.jsx)(E.a,{})})]})})}function U(){return Object(m.jsxs)("div",{className:"main-nav",children:[Object(m.jsx)(o.c,{className:function(e){return e.isActive?"route-active":"route"},to:"/",children:"\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e2d\u0e34\u0e17"}),Object(m.jsx)(o.c,{className:function(e){return e.isActive?"route-active":"route"},to:"/authentication",children:"\u0e1a\u0e31\u0e0d\u0e0a\u0e35"})]})}function B(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("p",{children:"Copyright 2021 \xa9 created and designed by Kiart Tantasi"})})}var L=n(14),R=n.n(L);function F(){var e=Object(c.useContext)(x),t=e.isLoggedIn,n=e.logIn,s=e.logOut,a=Object(c.useRef)(""),r=Object(c.useRef)(""),o=Object(i.g)(),l=Object(c.useState)(!1),d=Object(O.a)(l,2),u=d[0],j=d[1],b=u?"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19":"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a";return t?Object(m.jsxs)("div",{className:R.a.mainAuth,children:[Object(m.jsx)("h1",{children:" POST IT APP "}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:s,children:"Log Out"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}):Object(m.jsxs)("div",{className:R.a.mainAuth,children:[Object(m.jsxs)("button",{className:R.a.toggleAuth,onClick:function(){j(!u)},children:["\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",u?"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a":"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19"]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("form",{children:[Object(m.jsx)("label",{htmlFor:"username",children:"username"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",ref:a,name:"username",autoComplete:"off"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"password",children:"password"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"password",ref:r,name:"password",autoComplete:"off"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:R.a.submitAuth,onClick:function(e){e.preventDefault();var t=a.current.value,c=r.current.value;if(t&&c){var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:c}),credentials:"include"};u?fetch("/api/register",s).then((function(e){e.ok?(console.log("registered successfully"),n()):403===e.status?alert("username \u0e19\u0e35\u0e49\u0e16\u0e39\u0e01\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e41\u0e25\u0e49\u0e27"):alert("\u0e01\u0e32\u0e23\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27")})):fetch("/api/login",s).then((function(e){e.ok?(console.log("logged in successfully"),n(),o("/",{replace:!0})):401===e.status?alert("username \u0e2b\u0e23\u0e37\u0e2d password \u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"):alert("\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27")}))}else alert("\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38 username \u0e41\u0e25\u0e30 password")},type:"submit",children:b}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{children:Object(m.jsx)("a",{href:"/api/auth/google",children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a/\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e42\u0e14\u0e22 GOOGLE ACCOUNT"})})]})]})}var K=n(12),M=n.n(K);function q(){var e=Object(i.h)().postId,t=Object(c.useContext)(x),n=t.posts,s=t.updatePost,a=n.find((function(t){return t._id.toString()===e})),r=Object(i.g)(),o=Object(c.useRef)(),l=Object(c.useRef)();function d(t){t.preventDefault();var n=e,c=o.current.value,i=l.current.value;c!==a.item||i!==a.des?0!==c.length?c.length>25?alert("\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e22\u0e32\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b"):i.length>90?alert("\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e22\u0e32\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b"):(s(n,c,i),r("/posts",{replace:!0})):alert("\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d"):r("/posts",{replace:!0})}return Object(c.useEffect)((function(){n.length>0&&(o.current.value=a.item,l.current.value=a.des,l.current.focus())}),[n,a]),window.onclick=function(e){e.target===document.querySelector(".backdrop-div")&&r("/posts",{replace:!0})},Object(m.jsx)("div",{className:"backdrop-div ".concat(M.a.modalBackdrop),children:Object(m.jsx)("div",{className:M.a.modalBox,children:Object(m.jsxs)("form",{onSubmit:d,children:[Object(m.jsx)("input",{type:"text",ref:o,className:M.a.modalInput}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("textarea",{onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),d(e))},type:"text",ref:l,className:M.a.modalTextarea}),Object(m.jsxs)("div",{className:M.a.modalButtons,children:[Object(m.jsx)("button",{type:"button",onClick:function(e){r("/posts",{replace:!0})},children:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"}),Object(m.jsx)("button",{type:"submit",children:"\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15"})]})]})})})}function G(){return Object(m.jsx)(i.d,{children:Object(m.jsx)(i.b,{path:"edit",children:Object(m.jsx)(i.b,{path:":postId",element:Object(m.jsx)(q,{})})})})}function z(){var e=Object(c.useContext)(x).isLoading,t=Object(c.useContext)(x).posts;return e?Object(m.jsx)("div",{children:Object(m.jsx)("h1",{style:{textAlign:"center",marginTop:"30px"},children:"LOADING..."})}):Object(m.jsxs)("div",{className:"flex-container",children:[Object(m.jsx)(U,{}),Object(m.jsx)("div",{className:"flex-main-body",children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{path:"/posts/*",element:Object(m.jsxs)("div",{children:[Object(m.jsx)(J,{}),Object(m.jsx)(w,{posts:t}),Object(m.jsx)(G,{})]})}),Object(m.jsx)(i.b,{path:"/update",element:Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{posts:t}),Object(m.jsx)(w,{posts:t})]})}),Object(m.jsx)(i.b,{path:"/authentication",element:Object(m.jsx)(F,{})}),Object(m.jsx)(i.b,{path:"/*",element:Object(m.jsx)(i.a,{to:"/posts"})})]})}),Object(m.jsx)(B,{})]})}r.a.render(Object(m.jsx)(p,{children:Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(z,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.570e9d4c.chunk.js.map