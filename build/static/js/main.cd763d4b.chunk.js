(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){e.exports={noTitle:"Note_noTitle__3yhs-",withTitle:"Note_withTitle__3Kw89","Item-block":"Note_Item-block__3tgU5","description-text":"Note_description-text__3dt3t","item-block-footer":"Note_item-block-footer__2wNfO","date-text":"Note_date-text__3BMF6","footer-buttons":"Note_footer-buttons__3r1ym","spinner-ui":"Note_spinner-ui__3dbuM","item-block-flex-container":"Note_item-block-flex-container__glae5","item-block-flex-footer":"Note_item-block-flex-footer__1Uvhb","item-block-flex-body":"Note_item-block-flex-body__27nY9","footer-date":"Note_footer-date__12Frm"}},17:function(e,t,n){e.exports={mainAuth:"Auth_mainAuth__2ZaZ0",toggleAuth:"Auth_toggleAuth__1_tZS",submitAuth:"Auth_submitAuth__3-hrr","spinner-ui":"Auth_spinner-ui__16gXx",googleAuth:"Auth_googleAuth__3v-IN",googleA:"Auth_googleA__1NmnJ",labelUsernamePassword:"Auth_labelUsernamePassword__2VK9P",userName:"Auth_userName__2pbIz",logoutButton:"Auth_logoutButton__1Q9iA"}},24:function(e,t,n){e.exports={cursorNone:"AddNote_cursorNone__d9LIG",cursorPointer:"AddNote_cursorPointer__1F34S","Add-item":"AddNote_Add-item__3Vgbj","title-input":"AddNote_title-input__nPgHt","Two-input":"AddNote_Two-input__2V-Uv","spinner-ui":"AddNote_spinner-ui__118O-"}},27:function(e,t,n){e.exports={"main-nav":"Nav_main-nav__3LSxB",route:"Nav_route__3xW3k","route-active":"Nav_route-active__24Xg2"}},28:function(e,t,n){e.exports={modalBackdrop:"EditModal_modalBackdrop__3QvLq",modalBox:"EditModal_modalBox__2wodi",modalInput:"EditModal_modalInput__3ITpW",modalTextarea:"EditModal_modalTextarea__11_oI",modalButtons:"EditModal_modalButtons__1PPq9"}},39:function(e,t,n){e.exports={modalBackdrop:"AlertModal_modalBackdrop__gkwGj",modalBox:"AlertModal_modalBox__1E7Of",modalContent:"AlertModal_modalContent__3saFV"}},40:function(e,t,n){e.exports={"pop-up":"Popup_pop-up__3AX5t","button-container":"Popup_button-container__I1CYw",button:"Popup_button__2M-QY"}},52:function(e,t,n){e.exports={footer:"Footer_footer__Uthdt"}},58:function(e,t,n){e.exports={notes:"Notes_notes__VPg_J"}},72:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(51),c=n.n(a),s=n(20),i=n(4),u=n(11),l=n(8),d=n.n(l),j=n(19),b=n(16),f=n(5);function m(){for(var e="abcdefghijklmnopqrstuvwxyz",t=e.toUpperCase(),n=e+t+"1234567890",o="",r=0;r<30;r++)o+=n[Math.floor(Math.random()*n.length)];return o}var p=[{_id:m(),item:"\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e41\u0e23\u0e01\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19",des:"\u0e14\u0e39\u0e41\u0e25\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e1e\u0e14\u0e49\u0e27\u0e22\u0e07\u0e31\u0e1a",date:(new Date).getTime()},{_id:m(),item:"\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e40\u0e0a\u0e49\u0e32",des:"\u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18 \u0e40\u0e02\u0e49\u0e32zoom\u0e01\u0e48\u0e2d\u0e19 10 \u0e42\u0e21\u0e07",date:(new Date).getTime()},{_id:m(),item:"\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c\u0e2b\u0e19\u0e49\u0e32",des:"\u0e17\u0e33 OT ...",date:(new Date).getTime()},{_id:m(),item:"\u0e2b\u0e22\u0e38\u0e14\u0e1b\u0e35\u0e43\u0e2b\u0e21\u0e48",des:"\u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e25\u0e49\u0e27!",date:(new Date).getTime()}];function O(){var e=localStorage.getItem("myPostIt"),t=localStorage.getItem("myPostItUpdate");if(e&&t)return JSON.parse(e);if(e&&!t){var n=JSON.parse(e),o=Object(u.a)(n).reverse();return localStorage.setItem("myPostIt",JSON.stringify(o)),localStorage.setItem("myPostItUpdate",JSON.stringify({reversedArray:!0})),o}return e?[]:(localStorage.setItem("myPostIt",JSON.stringify(p)),localStorage.setItem("myPostItUpdate",JSON.stringify({reversedArray:!0})),p)}function h(){var e=Object(o.useContext)(v).logOut;function t(){return(t=Object(b.a)(d.a.mark((function t(n){var o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:n.item,des:n.des}),credentials:"include"},t.abrupt("return",fetch("/api/posts",o).then((function(t){if(t.ok)return t.json();throw 400===t.status?new Error("No information sent"):(e(),new Error("No authentication"))})).then((function(e){return{id:e.id,date:e.date}})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("/api/posts/"+n.id.toString(),{method:"DELETE",credentials:"include"}).then((function(t){if(t.ok)return"success";throw 403===t.status?(e(),new Error("No authentication")):(e(),new Error("deleting failed."))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function r(){return(r=Object(b.a)(d.a.mark((function t(n){var o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:n.item,des:n.des}),credentials:"include"},t.abrupt("return",fetch("/api/posts/"+n.id,o).then((function(t){if(t.ok)return"success";throw 400===t.status?new Error("No information sent"):403===t.status?(e(),new Error("No authentication")):(e(),new Error("updating failed."))})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{getPostsAndUserName:Object(o.useCallback)(Object(b.a)(d.a.mark((function e(){var t,n,o,r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/user",{credentials:"include"});case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("offline mode activated");case 6:return e.next=8,r.json();case 8:a=e.sent,t=a.posts,n=a.userName,o=!0,e.next=21;break;case 14:e.prev=14,e.t0=e.catch(0),c=O(),t=c,n=null,o=!1,console.log(e.t0.message||"getting posts failed.");case 21:return e.abrupt("return",{posts:t,isLoggedIn:o,userName:n});case 22:case"end":return e.stop()}}),e,null,[[0,14]])}))),[]),addPost:function(e){return t.apply(this,arguments)},editPost:function(e){return r.apply(this,arguments)},deletePost:function(e){return n.apply(this,arguments)}}}var x=n(0),g=r.a.createContext({});function _(e){var t=Object(o.useState)([]),n=Object(f.a)(t,2),r=n[0],a=n[1],c=Object(o.useState)(!1),s=Object(f.a)(c,2),i=s[0],l=s[1],m=Object(o.useState)(""),p=Object(f.a)(m,2),O=p[0],_=p[1],v=Object(o.useState)(!1),N=Object(f.a)(v,2),w=N[0],y=N[1],k=h().getPostsAndUserName,S=Object(o.useState)(!1),A=Object(f.a)(S,2),P=A[0],I=A[1],C=Object(o.useCallback)(Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,k();case 3:t=e.sent,n=t.posts.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{pending:!1})})),a(n),l(t.isLoggedIn),_(t.userName),y(!1);case 9:case"end":return e.stop()}}),e)}))),[k]);var T={logIn:function(){l(!0),C()},logOut:function(){l(!1),C()},isLoggedIn:i,isLoading:w,userName:O,getData:C,posts:r,addPost:function(e,t,n,o){a((function(r){return[].concat(Object(u.a)(r),[{_id:e,item:t,des:n,date:o}])}))},deletePost:function(e){a((function(t){return t.filter((function(t){return t._id.toString()!==e.toString()}))}))},editPost:function(e,t,n){i?a((function(o){return o.map((function(o){return o._id.toString()===e.toString()?Object(j.a)(Object(j.a)({},o),{},{item:t,des:n,pending:!1}):o}))})):i||a((function(o){return o.map((function(o){return o._id.toString()===e.toString()?Object(j.a)(Object(j.a)({},o),{},{item:t,des:n}):o}))}))},turnPendingOn:function(e){a((function(t){return t.map((function(t){return t._id.toString()===e.toString()?Object(j.a)(Object(j.a)({},t),{},{pending:!0}):t}))}))},initiated:P,init:function(){I(!0)}};return Object(x.jsx)(g.Provider,{value:T,children:e.children})}var v=g,N=n(27),w=n.n(N);function y(){return Object(x.jsxs)("div",{className:w.a["main-nav"],children:[Object(x.jsx)(s.c,{className:function(e){return e.isActive?w.a["route-active"]:w.a.route},to:"/posts",children:"\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e2d\u0e34\u0e17"}),Object(x.jsx)(s.c,{className:function(e){return e.isActive?w.a["route-active"]:w.a.route},to:"/account",children:"\u0e1a\u0e31\u0e0d\u0e0a\u0e35"})]})}var k=n(52),S=n.n(k);function A(){return Object(x.jsx)("footer",{className:S.a.footer,children:Object(x.jsx)("p",{children:"Copyright 2022 \xa9 created and designed by Kiart Tantasi"})})}function P(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{}),e.children,Object(x.jsx)(A,{})]})}var I=n(24),C=n.n(I),T=n(39),D=n.n(T);function E(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:" ".concat(D.a.modalBackdrop," close-modal")}),Object(x.jsxs)("div",{className:"".concat(D.a.modalBox," ").concat(D.a.modalContent),children:[Object(x.jsx)("h1",{children:e.message}),Object(x.jsx)("button",{onClick:e.handleButton,children:"\u0e1b\u0e34\u0e14"})]})]})}var B=n(53),J=n.n(B),U=n(85);function L(){var e=Object(o.useRef)(),t=Object(o.useRef)(),n=Object(o.useState)(!1),r=Object(f.a)(n,2),a=r[0],c=r[1],s=Object(o.useState)(""),i=Object(f.a)(s,2),l=i[0],j=i[1],p=Object(o.useState)(!1),O=Object(f.a)(p,2),g=O[0],_=O[1],N=Object(o.useContext)(v),w=N.posts,y=N.addPost,k=N.isLoggedIn,S=h().addPost,A=Object(o.useState)(!1),P=Object(f.a)(A,2),I=P[0],T=P[1];function D(){_(!1)}return window.onclick=function(e){e.target===document.querySelector(".close-modal")&&D()},window.onkeydown=function(e){g&&("Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),D()))},Object(x.jsxs)(x.Fragment,{children:[g&&Object(x.jsx)(E,{message:l,handleButton:D}),Object(x.jsxs)("div",{className:C.a["Add-item"],children:[Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:" ".concat(C.a["Two-input"]," ").concat(a?C.a.cursorNone:C.a.cursorPointer),children:[a&&Object(x.jsx)("input",{className:C.a["title-input"],onKeyDown:function(e){"Enter"!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),t.current.focus())},type:"text",placeholder:"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d (optional)",autoComplete:"off",ref:e}),Object(x.jsx)("input",{className:C.a["des-input"],onClick:function(){!1===a&&c(!0)},onKeyDown:function(t){"ArrowUp"===t.key&&(t.preventDefault(),e.current.focus())},type:"text",placeholder:"\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e2d\u0e34\u0e17 !",autoComplete:"off",ref:t})]}),!I&&Object(x.jsx)("button",{type:"submit",onClick:function(n){if(n.preventDefault(),!1===a)return j("\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"),void _(!0);var o=e.current.value.trim()||"",r=t.current.value.trim()||"";if(!o&&!r)return j("\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"),void _(!0);if(o.length>25)return j("\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e22\u0e32\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b"),void _(!0);if(0!==o.length&&r.length>95)return j("\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e22\u0e32\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b"),void _(!0);if(0===o.length&&r.length>120)return j("\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e22\u0e32\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b"),void _(!0);if(k){var c=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({item:o,des:r});case 3:t=e.sent,y(t.id,o,r,t.date),T(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),"No information sent"===e.t0.message&&T(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();T(!0),c()}else{var s=m(),i=(new Date).getTime(),l=[].concat(Object(u.a)(w),[{_id:s,item:o,des:r,date:i}]);localStorage.setItem("myPostIt",JSON.stringify(l)),y(s,o,r,i)}e.current.value="",t.current.value="",t.current.focus()},children:Object(x.jsx)(J.a,{})})]}),I&&Object(x.jsx)(U.a,{color:"inherit",className:C.a["spinner-ui"]})]})]})}var M=n(56),F=n.n(M);function K(e){var t=Object(o.useContext)(v),n=t.posts,r=t.deletePost,a=t.isLoggedIn,c=Object(o.useState)(!1),s=Object(f.a)(c,2),i=s[0],u=s[1],l=h().deletePost,j=e.id;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("button",{className:"delete-button",onClick:function(){if(a){var e=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({id:j.toString()});case 3:r(j),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message||"delete request failed.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();u(!0),e()}else{var t=n.filter((function(e){return e._id.toString()!==j.toString()}));localStorage.setItem("myPostIt",JSON.stringify(t)),r(j)}},children:[!i&&Object(x.jsx)(F.a,{}),i&&Object(x.jsx)(U.a,{size:20,color:"inherit",className:e.classProp})]})})}var q=n(57),z=n.n(q),R=n(15),G=n.n(R);function V(e){var t=new Date(e.date).getDate().toString()+"/"+(new Date(e.date).getMonth()+1).toString()+"/"+new Date(e.date).getFullYear().toString()||"no date described.",n=e.pending;return Object(x.jsx)("div",{className:G.a["Item-block"],children:Object(x.jsxs)("div",{className:G.a["item-block-flex-container"],children:[Object(x.jsxs)("div",{className:G.a["item-block-flex-body"],children:[Object(x.jsx)("h3",{children:e.item}),Object(x.jsx)("p",{className:" ".concat(G.a["description-text"]," ").concat(""===e.item?G.a.noTitle:G.a.withTitle),children:e.des})]}),Object(x.jsxs)("div",{className:" ".concat(G.a["item-block-footer"]," ").concat(G.a["item-block-flex-footer"]," "),children:[Object(x.jsx)("div",{className:G.a["footer-date"],children:Object(x.jsx)("p",{className:G.a["date-text"],children:t})}),Object(x.jsxs)("div",{className:G.a["footer-buttons"],children:[n&&Object(x.jsx)(U.a,{size:20,color:"inherit",className:G.a["spinner-ui"]}),!n&&Object(x.jsx)(s.b,{to:"/posts/edit/".concat(e.id),children:Object(x.jsx)("button",{children:Object(x.jsx)(z.a,{className:"edit-icon"})})}),Object(x.jsx)(K,{id:e.id,classProp:G.a["spinner-ui"]})]})]})]})})}var Y=n(58),Q=n.n(Y);function X(){var e=Object(o.useContext)(v).posts,t=Object(u.a)(e).reverse();return Object(x.jsx)("div",{className:Q.a.notes,children:t.map((function(e){return Object(x.jsx)(V,{id:e._id,item:e.item,des:e.des,date:e.date,pending:e.pending},e._id)}))})}var Z=n(28),H=n.n(Z);function W(){var e=Object(i.h)().postId,t=Object(o.useContext)(v),n=t.isLoggedIn,r=t.posts,a=t.editPost,c=t.turnPendingOn,s=r.find((function(t){return t._id.toString()===e})),u=h().editPost,l=Object(i.g)(),m=Object(o.useRef)(),p=Object(o.useRef)(),O=Object(o.useState)({border:"1px solid rgba(0,0,0,0.5)"}),g=Object(f.a)(O,2),_=g[0],N=g[1],w=Object(o.useState)({border:"1px solid rgba(0,0,0,0.5)"}),y=Object(f.a)(w,2),k=y[0],S=y[1];function A(){l("/posts",{replace:!0})}function P(t){t.preventDefault();var o=e,i=m.current.value.trim(),f=p.current.value.trim();function O(){N({border:"1px solid red"}),setTimeout((function(){N({border:"1px solid rgba(0,0,0,0.5)"})}),3e3)}function h(){S({border:"1px solid red"}),setTimeout((function(){S({border:"1px solid rgba(0,0,0,0.5)"})}),3e3)}if(i===s.item&&f===s.des)return console.log("no changes found."),void l("/posts");if(0===i.length&&0===f.length)return O(),void h();if(i.length>25&&f.length>95)return O(),void h();if(i.length>25)O();else if(f.length>95&&0!==i.length)h();else if(f.length>120&&0===i.length)h();else{if(n){var x=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u({item:i,des:f,id:o});case 3:a(o,i,f),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();c(o),x()}else{var g=r.map((function(e){return e._id.toString()===o.toString()?Object(j.a)(Object(j.a)({},e),{},{item:i,des:f}):e}));localStorage.setItem("myPostIt",JSON.stringify(g)),a(o,i,f)}l("/posts",{replace:!0})}}return Object(o.useEffect)((function(){s?(m.current.value=s.item||"",p.current.value=s.des||"",p.current.focus()):console.log("loading data for editing...")}),[s]),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{onClick:A,className:"backdrop-div ".concat(H.a.modalBackdrop)}),Object(x.jsx)("div",{className:H.a.modalBox,children:Object(x.jsxs)("form",{onSubmit:P,children:[Object(x.jsx)("input",{type:"text",ref:m,className:H.a.modalInput,style:_,onKeyDown:function(e){"ArrowDown"===e.key&&(e.preventDefault(),p.current.focus())}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("textarea",{onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),P(e))},type:"text",ref:p,className:H.a.modalTextarea,style:k}),Object(x.jsxs)("div",{className:H.a.modalButtons,children:[Object(x.jsx)("button",{type:"button",onClick:A,children:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"}),Object(x.jsx)("button",{type:"submit",children:"\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15"})]})]})})]})}function $(){return Object(x.jsx)(i.d,{children:Object(x.jsx)(i.b,{path:"edit",children:Object(x.jsx)(i.b,{path:":postId",element:Object(x.jsx)(W,{})})})})}function ee(){return Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)(L,{}),Object(x.jsx)(X,{}),Object(x.jsx)($,{})]})}var te=n(17),ne=n.n(te),oe=n(40),re=n.n(oe);function ae(e){return Object(x.jsxs)("div",{className:re.a["pop-up"],children:[Object(x.jsx)("p",{children:e.children}),Object(x.jsx)("div",{className:re.a["button-container"],children:Object(x.jsx)("button",{className:re.a.button,onClick:e.onClick,children:"\u0e1b\u0e34\u0e14"})})]})}function ce(){var e=Object(o.useContext)(v),t=e.isLoggedIn,n=e.logIn,r=e.logOut,a=e.userName,c=e.initiated,s=e.init,u=Object(o.useRef)(""),l=Object(o.useRef)(""),d=Object(i.g)(),j=Object(o.useState)(!1),b=Object(f.a)(j,2),m=b[0],p=b[1],O=Object(o.useState)(""),h=Object(f.a)(O,2),g=h[0],_=h[1],N=Object(o.useState)(!1),w=Object(f.a)(N,2),y=w[0],k=w[1],S=Object(o.useState)(!1),A=Object(f.a)(S,2),P=A[0],I=A[1],C=Object(o.useState)(!1),T=Object(f.a)(C,2),D=T[0],B=T[1];function J(){k(!1)}return window.onclick=function(e){e.target===document.querySelector(".close-modal")&&J()},window.onkeydown=function(e){y&&("Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),J()))},t?Object(x.jsxs)("div",{className:ne.a.mainAuth,children:[!D&&Object(x.jsx)("h1",{className:ne.a.userName,children:a||""}),Object(x.jsx)("br",{}),!D&&Object(x.jsx)("button",{className:ne.a.logoutButton,type:"button",onClick:function(){B(!0),fetch("/api/logout",{credentials:"include",method:"POST"}).then((function(e){if(!e.ok)throw r(),new Error("failed logging out.");console.log("logged out successfully"),r()})).catch((function(e){return console.log(e.message)}))},children:"\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a"}),D&&Object(x.jsx)(U.a,{color:"inherit",className:ne.a["spinner-ui"]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}):Object(x.jsxs)(x.Fragment,{children:[y&&Object(x.jsx)(E,{message:g,handleButton:J}),!c&&Object(x.jsx)(ae,{onClick:s,children:"\u0e17\u0e14\u0e25\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 username = admin \u0e41\u0e25\u0e30 password = password"}),Object(x.jsxs)("div",{className:ne.a.mainAuth,children:[Object(x.jsxs)("button",{className:ne.a.toggleAuth,onClick:function(){p(!m)},children:["\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",m?"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a":"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19"]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=u.current.value,o=l.current.value;if(!t||!o)return _("\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38 username \u0e41\u0e25\u0e30 password"),void k(!0);var r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:o}),credentials:"include"};m?(I(!0),fetch("/api/register",r).then((function(e){e.ok?(console.log("registered successfully"),u.current.value="",l.current.value="",I(!1),_("\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),k(!0),p(!1)):403===e.status?(I(!1),_("username \u0e19\u0e35\u0e49\u0e16\u0e39\u0e01\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e41\u0e25\u0e49\u0e27"),k(!0)):(I(!1),_("\u0e01\u0e32\u0e23\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27"),k(!0))}))):m||(I(!0),fetch("/api/login",r).then((function(e){e.ok?(console.log("logged in successfully"),n(),d("/posts",{replace:!0})):401===e.status?(I(!1),_("username \u0e2b\u0e23\u0e37\u0e2d password \u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"),k(!0)):(I(!1),_("\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27"),k(!0))})).catch((function(e){I(!1),console.log(e.message)})))},children:[Object(x.jsx)("label",{htmlFor:"username",className:ne.a.labelUsernamePassword,children:"username"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",ref:u,name:"username",autoComplete:"off",onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),l.current.focus())}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{htmlFor:"password",className:ne.a.labelUsernamePassword,children:"password"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"password",ref:l,name:"password",autoComplete:"off"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),!P&&Object(x.jsx)("button",{className:ne.a.submitAuth,type:"submit",children:m?"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19":"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"}),P&&Object(x.jsx)(U.a,{size:25,color:"inherit",className:ne.a["spinner-ui"]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:ne.a.googleAuth,children:Object(x.jsx)("a",{className:ne.a.googleA,href:"/api/auth/google",children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a/\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e14\u0e49\u0e27\u0e22 GOOGLE ACCOUNT"})})]})]})]})}n(72);function se(){var e=Object(o.useContext)(v),t=e.getData,n=e.isLoading;return Object(o.useEffect)((function(){t()}),[t]),n?Object(x.jsx)("div",{children:Object(x.jsx)("h1",{className:"loading-text",children:"LOADING..."})}):Object(x.jsx)("div",{className:"flex-container",children:Object(x.jsx)(P,{children:Object(x.jsx)("div",{className:"flex-main-body",children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{path:"/posts/*",element:Object(x.jsx)(ee,{})}),Object(x.jsx)(i.b,{path:"/account",element:Object(x.jsx)(ce,{})}),Object(x.jsx)(i.b,{path:"/*",element:Object(x.jsx)(i.a,{to:"/posts"})})]})})})})}c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(_,{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(se,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.cd763d4b.chunk.js.map