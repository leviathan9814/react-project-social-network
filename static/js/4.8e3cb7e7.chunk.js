(this["webpackJsonpmy-network"]=this["webpackJsonpmy-network"]||[]).push([[4],{315:function(e,s,t){},316:function(e,s,t){},317:function(e,s,t){},328:function(e,s,t){"use strict";t.r(s);t(1);var a=t(12),c=t(68),n=(t(315),t(0)),i=function(e){return Object(n.jsx)("div",{className:"item",children:Object(n.jsxs)("div",{className:"user-message-block",children:[Object(n.jsx)("img",{src:c.a,className:"user-photo"}),Object(n.jsx)(a.b,{to:"/messages/"+e.id,children:e.name}),Object(n.jsx)("div",{className:"line-message"})]})})},d=(t(316),function(e){return Object(n.jsxs)("div",{className:"dialog-items",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:c.a,className:"user-photo-dialogs"}),Object(n.jsx)("b",{children:"User Name"})]}),Object(n.jsx)("p",{children:e.text})]})}),r=t(21),j=t(94),o=t(135),l=t(11),m=(t(46),t(26),t(317),Object(o.a)({form:"dialogAddMessageForm"})((function(e){var s=e.handleSubmit;return Object(n.jsxs)("form",{onSubmit:s,className:"add-message",children:[Object(n.jsx)(j.a,{component:"textarea",name:"newMessageBody",placeholder:"Enter your message",className:"add-message-textarea"}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"btn btn-outline-dark btn-send",children:"Send"})})]})}))),b=function(e){var s=e.dialogsPage,t=s.messagesData.map((function(e){return Object(n.jsx)(i,{name:e.name,id:e.id},e.id)})),a=s.dialogsData.map((function(e){return Object(n.jsx)(d,{text:e.text},e.id)}));return e.isAuth?Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"messages",children:[Object(n.jsx)("div",{className:"messages-items",children:t}),Object(n.jsx)("div",{className:"line-dialogs"}),Object(n.jsxs)("div",{className:"dialog-items",children:[a,Object(n.jsx)("div",{children:Object(n.jsx)(m,{onSubmit:function(s,t){e.sendMessage(s.newMessageBody),t(Object(r.a)("dialogAddMessageForm"))}})})]})]})}):Object(n.jsx)(l.a,{to:"/login"})},u=t(134),g=t(13),x=t(10),O=t(54),h=function(e){return e.dialogsPage},f=Object(x.d)(Object(g.b)((function(e){return{dialogsPage:h(e),isAuth:Object(O.a)(e)}}),{sendMessage:u.b}))(b);s.default=f}}]);
//# sourceMappingURL=4.8e3cb7e7.chunk.js.map