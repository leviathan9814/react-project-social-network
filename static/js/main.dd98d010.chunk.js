(this["webpackJsonpmy-network"]=this["webpackJsonpmy-network"]||[]).push([[0],{134:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(42),s=n(3),c="SEND-MESSAGE",a={messagesData:[{id:1,name:"Yura"},{id:2,name:"Masha"},{id:3,name:"Christina"},{id:4,name:"Roma"}],dialogsData:[{id:1,text:"Hi"},{id:2,text:"I learning React"},{id:3,text:"and Redux"},{id:4,text:"I looking for a job"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(s.a)(Object(s.a)({},e),{},{dialogsData:[].concat(Object(r.a)(e.dialogsData),[{id:5,text:n}])});default:return e}}},141:function(e,t,n){e.exports={loginForm:"login_loginForm__1xxdW"}},172:function(e,t,n){},184:function(e,t,n){},186:function(e,t,n){},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var r=n(3),s=n(73),c=(n(1),n(94)),a=n(39),i=n.n(a),o=n(0),u=function(e){e.input;var t=e.meta,n=(e.child,Object(s.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(r?i.a.error:""),children:[Object(o.jsx)("div",{children:n.children}),r&&Object(o.jsx)("span",{children:t.error})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({component:e,name:t,validate:n,placeholder:s},a)),i]})}},306:function(e,t,n){},307:function(e,t,n){},308:function(e,t,n){},309:function(e,t,n){},310:function(e,t,n){},311:function(e,t,n){},312:function(e,t,n){},313:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(50),a=n.n(c),i=(n(172),n(27)),o=n(28),u=n(30),l=n(29),j=n(3),d=n(13),b=n(94),f=n(135),p=n(22),h=n(95),O=n.n(h),x=(n(184),n(0));O.a.setAppElement("#root");var m=function(e){var t=Object(r.useState)(!1),n=Object(p.a)(t,2),s=n[0],c=n[1],a=function(){c(!1)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"btn btn-dark",onClick:function(){c(!0)},children:"My CV"}),Object(x.jsxs)(O.a,{isOpen:s,onRequestClose:a,children:[Object(x.jsx)("h2",{children:"Modal"}),Object(x.jsx)("p",{children:"body"}),Object(x.jsx)("button",{onClick:a,children:"Close CV"})]})]})},v=(n(186),Object(f.a)({form:"headerSearchForm"})((function(e){return Object(x.jsx)("form",{onSubmit:e.handleSubmit,children:Object(x.jsx)(b.a,{component:"input",name:"headerSearch",placeholder:"search...",className:"header-search"})})})),function(e){return Object(x.jsx)("header",{className:"header",children:Object(x.jsxs)("div",{className:"header-title",children:[Object(x.jsx)("h1",{children:"My network"}),Object(x.jsx)("div",{className:"cv-block",children:Object(x.jsx)(m,{})}),e.isAuth?Object(x.jsxs)("div",{children:[e.login," - ",Object(x.jsx)("button",{className:"btn-logout",onClick:e.logout,children:"Log out"})," "]}):Object(x.jsx)(d.b,{className:"btn btn-outline-dark",to:"/login",children:"Sign in"})]})})}),g=n(8),w=n.n(g),P=n(15),S=n(139).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"e4bb28f3-b839-4c8a-81b2-0e7fd20c91c3"}}),y={getUsers:function(e,t){return S.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return S.post("follow/".concat(e))},unfollow:function(e){return S.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),k.getProfile(e)}},k={getProfile:function(e){return S.get("profile/".concat(e))},getStatus:function(e){return S.get("profile/status/".concat(e))},updateStatus:function(e){return S.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),S.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return S.put("profile",e)}},C=function(){return S.get("auth/me")},N=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return S.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},_=function(){return S.delete("auth/login")},I=function(){return S.get("/security/get-captcha-url")},U=n(21),A="SET-USER-DATA",F="GET-CAPTCHA-URL-SUCCESS",E={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},T=function(e,t,n,r){return{type:A,payload:{userId:e,email:t,login:n,isAuth:r}}},M=function(e){return{type:F,payload:{captchaUrl:e}}},z=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){var n,r,s,c,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,c=r.email,a=r.login,t(T(s,c,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:n=e.sent,r=n.data.url,t(M(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:case F:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},L=n(12),R=n(54),G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(v,Object(j.a)({},this.props))})}}]),n}(s.a.Component),J=Object(L.b)((function(e){return{isAuth:Object(R.a)(e),login:Object(R.b)(e)}}),{logout:function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:0===e.sent.data.resultCode&&t(T(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(G),W=(n(306),function(e){return Object(x.jsx)("nav",{className:"nav",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:"/profile",children:[Object(x.jsx)("i",{className:"fas fa-user-circle"})," My Profile"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:"/messages",children:[Object(x.jsx)("i",{className:"fas fa-envelope"})," Messages"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:"/users",children:[Object(x.jsx)("i",{className:"fas fa-users"})," Users"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:"/todo",children:[Object(x.jsx)("i",{className:"fas fa-list-ul"})," Todo List"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:"/weather",children:[Object(x.jsx)("i",{className:"fas fa-cloud"})," Weather"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:"/feed",children:[Object(x.jsx)("i",{className:"fas fa-comment-alt"})," Feed"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:"/music",children:[Object(x.jsx)("i",{className:"fas fa-play-circle"})," Music"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:"/photo-video",children:[Object(x.jsx)("i",{className:"fas fa-image"})," Photo | Video"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{to:"/settings",children:[Object(x.jsx)("i",{className:"fas fa-cog"})," Settings"]})})]})})}),V=n(11),q=n(70),H=n(47),X=n.n(H),Z=n(140),K=n.n(Z),Y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,c=e.onPageChanged,a=e.portionSize,i=void 0===a?10:a,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var j=Math.ceil(o/i),d=Object(r.useState)(1),b=Object(p.a)(d,2),f=b[0],h=b[1],O=(f-1)*i+1,m=f*i;return Object(x.jsxs)("div",{className:X.a.paginator,children:[f>1&&Object(x.jsx)("button",{className:X.a.paginatorButton,onClick:function(){h(f-1)},children:"\u2039 Prev"}),u.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(x.jsx)("span",{className:K()(Object(q.a)({},X.a.selectedPage,s===e),X.a.pageNumber),onClick:function(t){return c(e)},children:e},e)})),j>f&&Object(x.jsx)("button",{className:X.a.paginatorButton,onClick:function(){h(f+1)},children:"Next \u203a"})]})},Q=n(68),$=n(59),ee=n.n($),te=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,s=e.follow;return Object(x.jsxs)("div",{className:ee.a.userItem,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)(d.b,{to:"/profile/"+t.id,children:Object(x.jsx)("img",{src:null!=t.photos.small?t.photos.small:Q.a,className:ee.a.userPhoto})})}),Object(x.jsx)("div",{className:ee.a.userFollowed,children:t.followed?Object(x.jsx)("button",{className:"btn btn-outline-dark",disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(x.jsx)("button",{className:"btn btn-outline-dark",disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})})]}),Object(x.jsx)("div",{className:ee.a.userInfo,children:Object(x.jsxs)("span",{children:[Object(x.jsx)("div",{children:t.name}),Object(x.jsx)("div",{children:t.status})]})})]},t.id)},ne=(n(307),function(){return Object(x.jsx)("div",{className:"lds-css ng-scope",children:Object(x.jsxs)("div",{className:"lds-spin",children:[Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{})})]})})}),re=(n(308),function(e){var t=e.users,n=e.totalUsersCount,s=e.pageSize,c=e.onPageChanged,a=e.currentPage,i=e.follow,o=e.isFetching,u=e.unfollow,l=e.followingInProgress,j=Object(r.useState)(1),d=Object(p.a)(j,2),b=d[0],f=d[1],h=function(e){f(e)};return Object(x.jsxs)("div",{children:[Object(x.jsx)(Y,{totalItemsCount:n,pageSize:s,onPageChanged:c,currentPage:a}),o?Object(x.jsx)(ne,{}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"bloc-tabs",children:[Object(x.jsx)("button",{className:1===b?"tabs active-tabs":"tabs",onClick:function(){return h(1)},children:"All users"}),Object(x.jsx)("button",{className:2===b?"tabs active-tabs":"tabs",onClick:function(){return h(2)},children:"Followed users"})]}),Object(x.jsx)("div",{className:"content-tabs",children:t.followed?Object(x.jsx)("div",{className:2===b?"content active-content":"content",children:t.map((function(e){return Object(x.jsx)(te,{user:e,follow:i,unfollow:u,followingInProgress:l})}))}):Object(x.jsx)("div",{className:1===b?"content active-content":"content",children:t.map((function(e){return Object(x.jsx)(te,{user:e,follow:i,unfollow:u,followingInProgress:l})}))})})]})]})}),se=n(42),ce="FOLLOW",ae="UNFOLLOW",ie="SET-USERS",oe="SET-TOTAL-USERS-COUNT",ue="SET-CURRENT-PAGE",le="TOGGLE-IS-FETCHING",je="TOGGLE-IS-FOLLOWING-PROGRESS",de={users:[],pageSize:12,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},be=function(e){return{type:ce,userId:e}},fe=function(e){return{type:ae,userId:e}},pe=function(e){return{type:le,isFetching:e}},he=function(e,t){return{type:je,isFetching:e,userId:t}},Oe=function(){var e=Object(P.a)(w.a.mark((function e(t,n,r,s){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(he(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(he(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case ae:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case ie:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case oe:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.totalUsersCount});case ue:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case le:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case je:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(se.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},me=n(10),ve=function(e){return e.usersPage.users},ge=function(e){return e.usersPage.totalUsersCount},we=function(e){return e.usersPage.currentPage},Pe=function(e){return e.usersPage.pageSize},Se=function(e){return e.usersPage.isFetching},ye=function(e){return e.usersPage.followingInProgress},ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(re,Object(j.a)(Object(j.a)({},this.props),{},{onPageChanged:this.onPageChanged}))})}}]),n}(s.a.Component),Ce=Object(me.d)(Object(L.b)((function(e){return{users:ve(e),totalUsersCount:ge(e),currentPage:we(e),pageSize:Pe(e),isFetching:Se(e),followingInProgress:ye(e)}}),{follow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Oe(n,e,y.follow.bind(y),be);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Oe(n,e,y.unfollow.bind(y),fe);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleIsFollowingProgress:he,requestUsers:function(e,t){return function(){var n=Object(P.a)(w.a.mark((function n(r){var s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(pe(!0)),r({type:ue,currentPage:e}),n.next=4,y.getUsers(e,t);case 4:s=n.sent,r(pe(!1)),r((a=s.items,{type:ie,users:a})),r((c=s.totalCount,{type:oe,totalUsersCount:c}));case 8:case"end":return n.stop()}var c,a}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ke),Ne=(n(309),function(e){return Object(x.jsxs)("div",{className:"post",children:[Object(x.jsxs)("div",{class:"post-item",children:[Object(x.jsx)("img",{src:"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"}),Object(x.jsx)(x.Fragment,{children:e.message})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("span",{children:[Object(x.jsx)("i",{class:"far fa-heart"})," ",e.count]}),Object(x.jsx)("span",{children:Object(x.jsx)("i",{class:"far fa-comment"})}),Object(x.jsx)("span",{children:Object(x.jsx)("i",{class:"fas fa-share"})})]})]})}),_e=n(46),Ie=n(26),Ue=(n(310),s.a.memo((function(e){var t=e.posts.map((function(e){return Object(x.jsx)(Ne,{message:e.message,count:e.count},e.id)}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"my-posts",children:[Object(x.jsx)("h3",{children:"My Posts"}),Object(x.jsx)(Ae,{onSubmit:function(t,n){e.addPost(t.newPostText),n(Object(U.a)("ProfileAddPost"))}})]}),Object(x.jsx)("div",{children:t})]})}))),Ae=Object(f.a)({form:"ProfileAddPost"})((function(e){var t=e.handleSubmit;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsx)("div",{children:Object(x.jsx)(b.a,{component:"textarea",name:"newPostText",validate:[_e.a],placeholder:"What's new?",className:"add-post-textarea"})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"btn btn-outline-dark add-post",children:"Add Post"})})]})})),Fe=Ue,Ee="ADD-POST",Te="SET-USER-PROFILE",Me="SET-STATUS",ze="SAVE-PHOTO-SUCCESS",De={posts:[{id:1,message:"Hi, how are you",count:5},{id:2,message:"Im fine",count:7},{id:3,message:"Nice",count:3}],profile:null,status:"",newPostText:""},Be=function(e){return{type:Me,status:e}},Le=function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getProfile(e);case 2:r=t.sent,n((s=r.data,{type:Te,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(j.a)(Object(j.a)({},e),{},{posts:[].concat(Object(se.a)(e.posts),[{id:4,message:t.newPostText,count:21}])});case Te:return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});case Me:return Object(j.a)(Object(j.a)({},e),{},{status:t.status});case ze:return Object(j.a)(Object(j.a)({},e),{},{profile:Object(j.a)(Object(j.a)({},e.profile),{},{photos:t.photos})});default:return e}},Ge=function(e){return e.profilePage.profile},Je=function(e){return e.profilePage.status},We=function(e){return e.auth.userId},Ve=function(e){return e.profilePage.posts},qe=function(e){return e.profilePage.newPostText},He=Object(L.b)((function(e){return{posts:Ve(e),newPostText:qe(e)}}),{addPost:function(e){return{type:Ee,newPostText:e}}})(Fe),Xe=function(e){var t=Object(r.useState)(!1),n=Object(p.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(e.status),i=Object(p.a)(a,2),o=i[0],u=i[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(x.jsxs)("div",{children:[!s&&Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Status: "}),Object(x.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status||"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441"})]}),s&&Object(x.jsx)("div",{children:Object(x.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(o)},value:o})})]})},Ze=n(75),Ke=n.n(Ze),Ye=function(e){var t=e.profile,n=e.isOwner,r=e.savePhoto;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{className:Ke.a.mainPhoto,src:t.photos.large||Q.a}),n&&Object(x.jsx)("div",{className:Ke.a.inputWrapper,children:Object(x.jsxs)("label",{className:Ke.a.customFileUpload,children:[Object(x.jsx)("input",{type:"file",multiple:!0,onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),Object(x.jsx)("i",{className:"fa fa-cloud-upload"})," Change photo"]})})]})},Qe=n(39),$e=n.n(Qe),et=n(35),tt=n.n(et),nt=(n(311),Object(f.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("button",{class:"btn btn-outline-dark",children:"Save"})}),r&&Object(x.jsx)("div",{className:$e.a.formSummaryError,children:r})]}),Object(x.jsxs)("div",{className:"full-name",children:[Object(x.jsx)("b",{children:"Full name"}),":",Object(x.jsx)(b.a,{component:"input",name:"fullName",validate:[],placeholder:"Full name"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Looking for a job"}),":",Object(x.jsx)(b.a,{component:"input",name:"lookingForAJob",validate:[],type:"checkbox"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"My professional skills"}),":",Object(x.jsx)(b.a,{component:"textarea",name:"lookingForAJobDescription",validate:[],placeholder:"My professional skills"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"About me"}),":",Object(x.jsx)(b.a,{component:"textarea",name:"aboutMe",validate:[],placeholder:"About me"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Contacts"}),": ",Object.keys(n.contacts).map((function(e){return Object(x.jsx)("div",{className:tt.a.contact,children:Object(x.jsxs)("b",{children:[e,":",Object(x.jsx)(b.a,{component:"input",name:"contacts"+e,validate:[],placeholder:e})]})},e)}))]})]})}))),rt=function(e){var t=e.profile,n=e.isOwner,r=e.goToEditMode;return Object(x.jsxs)("div",{children:[n&&Object(x.jsx)("div",{children:Object(x.jsx)("button",{class:"btn btn-outline-dark",onClick:r,children:"Edit"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Full name"}),": ",t.fullName]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(e){return Object(x.jsx)(st,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},st=function(e){var t=e.contactTitle,n=e.contactValue;return Object(x.jsxs)("div",{className:tt.a.contact,children:[Object(x.jsx)("b",{children:t}),": ",n]})},ct=function(e){var t=e.profile,n=e.status,s=e.updateStatus,c=e.isOwner,a=e.savePhoto,i=e.saveProfile,o=Object(r.useState)(!1),u=Object(p.a)(o,2),l=u[0],j=u[1];if(!t)return Object(x.jsx)(ne,{});return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:tt.a.descriptionBlock,children:[Object(x.jsx)("div",{className:tt.a.avatarBlock,children:Object(x.jsx)(Ye,{profile:t,isOwner:c,savePhoto:a})}),Object(x.jsxs)("div",{className:tt.a.statusAndDataBlock,children:[Object(x.jsx)("div",{className:tt.a.statusBlock,children:Object(x.jsx)(Xe,{status:n,updateStatus:s})}),Object(x.jsx)("div",{children:l?Object(x.jsx)(nt,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){j(!1)}))}}):Object(x.jsx)(rt,{goToEditMode:function(){j(!0)},profile:t,isOwner:c})})]})]})})},at=(n(312),function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(ct,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(x.jsx)(He,{})]})}),it=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.props.isAuth?Object(x.jsx)("div",{children:Object(x.jsx)(at,Object(j.a)(Object(j.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}):Object(x.jsx)(V.a,{to:"/login"})}}]),n}(s.a.Component),ot=Object(me.d)(Object(L.b)((function(e){return{profile:Ge(e),isAuth:Object(R.a)(e),status:Je(e),authorizedUserId:We(e)}}),{getUserProfile:Le,updateStatus:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(Be(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.getStatus(e);case 2:r=t.sent,n(Be(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((s=r.data.data.photos,{type:ze,photos:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n,r){var s,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,k.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(Le(s)),t.next=10;break;case 8:return n(Object(U.b)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),V.g)(it),ut=n(141),lt=n.n(ut),jt=Object(f.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(Ie.b)(Ie.a,"email",[_e.a],"email"),Object(Ie.b)(Ie.a,"password",[_e.a],"password",{type:"password"}),r&&Object(x.jsx)("img",{src:r}),r&&Object(Ie.b)(Ie.a,"captcha",[_e.a],"Symbols from image"),n&&Object(x.jsx)("div",{className:$e.a.formSummaryError,children:n}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"btn btn-outline-dark",children:"Login"})})]})})),dt=Object(L.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var s=Object(P.a)(w.a.mark((function s(c){var a,i;return w.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,N(e,t,n,r);case 2:0===(a=s.sent).data.resultCode?c(z()):(10===a.data.resultCode&&c(D()),i=a.data.messages.length>0?a.data.messages[0]:"Some error",c(Object(U.b)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuth,r=e.captchaUrl;return n?Object(x.jsx)(V.a,{to:"/profile"}):Object(x.jsxs)("div",{className:lt.a.loginForm,children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsx)("h5",{children:"Use your account"}),Object(x.jsx)(jt,{onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:r})]})})),bt="INITIALIZED_SUCCESS",ft={initialized:!1},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case bt:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},ht=(n(313),s.a.lazy((function(){return n.e(4).then(n.bind(null,328))}))),Ot=s.a.lazy((function(){return n.e(3).then(n.bind(null,327))})),xt=s.a.lazy((function(){return n.e(5).then(n.bind(null,326))})),mt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(x.jsxs)("div",{className:"app-wrapper",children:[Object(x.jsx)(J,{}),Object(x.jsx)(W,{}),Object(x.jsx)("div",{className:"app-wrapper-content",children:Object(x.jsxs)(V.d,{children:[Object(x.jsx)(V.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(V.a,{to:"/profile"})}}),Object(x.jsx)(V.b,{path:"/profile/:userId?",render:function(){return Object(x.jsx)(ot,{})}}),Object(x.jsx)(V.b,{path:"/messages",render:function(){return Object(x.jsx)(s.a.Suspense,{fallback:Object(x.jsx)(ne,{}),children:Object(x.jsx)(ht,{})})}}),Object(x.jsx)(V.b,{path:"/todo",render:function(){return Object(x.jsx)(s.a.Suspense,{fallback:Object(x.jsx)(ne,{}),children:Object(x.jsx)(Ot,{})})}}),Object(x.jsx)(V.b,{path:"/users",render:function(){return Object(x.jsx)(Ce,{})}}),Object(x.jsx)(V.b,{path:"/weather",render:function(){return Object(x.jsx)(s.a.Suspense,{fallback:Object(x.jsx)(ne,{}),children:Object(x.jsx)(xt,{})})}}),Object(x.jsx)(V.b,{path:"/login",render:function(){return Object(x.jsx)(dt,{})}}),Object(x.jsx)(V.b,{path:"*",render:function(){return Object(x.jsx)("div",{children:"404 not founded!"})}})]})})]}):Object(x.jsx)(ne,{})}}]),n}(s.a.Component),vt=Object(me.d)(V.g,Object(L.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(z()).then((function(){e({type:bt})}))}}}))(mt),gt=n(134),wt=n(136),Pt=n(142),St=Object(me.c)({profilePage:Re,dialogsPage:gt.a,usersPage:xe,form:wt.a,auth:B,app:pt}),yt=Object(me.e)(St,Object(me.a)(Pt.a));a.a.render(Object(x.jsx)(d.a,{children:Object(x.jsx)(L.a,{store:yt,children:Object(x.jsx)(vt,{})})}),document.getElementById("root"))},35:function(e,t,n){e.exports={descriptionBlock:"descriptionUser_descriptionBlock__1rfD-",statusAndDataBlock:"descriptionUser_statusAndDataBlock__16b6B",statusBlock:"descriptionUser_statusBlock__1Cxv_",contact:"descriptionUser_contact__2aXF3"}},39:function(e,t,n){e.exports={formControl:"formsControls_formControl__1UIHp",error:"formsControls_error__1AROk",formSummaryError:"formsControls_formSummaryError__21xmZ"}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){if(!e)return"Field is required"}},47:function(e,t,n){e.exports={paginator:"paginator_paginator__2EAor",pageNumber:"paginator_pageNumber__2knGM",active:"paginator_active__2jgJJ",selectedPage:"paginator_selectedPage__3jfh8",paginatorButton:"paginator_paginatorButton__27Ouz"}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var r=function(e){return e.auth.isAuth},s=function(e){return e.auth.login}},59:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1ZgkX",userItem:"users_userItem__quOI6",userFollowed:"users_userFollowed__1IswC",userInfo:"users_userInfo__3NUCE"}},68:function(e,t,n){"use strict";t.a=n.p+"static/media/user.bf28321f.png"},75:function(e,t,n){e.exports={mainPhoto:"profileAvatar_mainPhoto__35t5G",inputWrapper:"profileAvatar_inputWrapper__2a5XP",customFileUpload:"profileAvatar_customFileUpload__wFkKE"}}},[[314,1,2]]]);
//# sourceMappingURL=main.dd98d010.chunk.js.map