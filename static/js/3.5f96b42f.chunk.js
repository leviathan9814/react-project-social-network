(this["webpackJsonpmy-network"]=this["webpackJsonpmy-network"]||[]).push([[3],{318:function(t,e,n){},319:function(t,e,n){},320:function(t,e,n){},321:function(t,e,n){},322:function(t,e,n){},323:function(t,e,n){},324:function(t,e,n){},327:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var a=n(3),i=n(42),c=n(27),o=n(28),r=n(101),l=n(30),s=n(29),u=n(1),d=(n(318),n(0)),b=function(t){var e=t.liked,n=t.allPosts;return Object(d.jsxs)("div",{className:"todo-header d-flex",children:[Object(d.jsx)("h1",{children:"My todo"}),Object(d.jsxs)("h2",{children:[n," records, of which I liked ",e]})]})},j=n(73),h=(n(319),function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c="app-list-item d-flex justify-content-between";return t.important&&(c+=" important"),t.like&&(c+=" like"),Object(d.jsxs)("div",{className:c,children:[Object(d.jsx)("span",{className:"app-list-item-label",onClick:i,children:e}),Object(d.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(d.jsx)("button",{className:"btn-star btn-sm",type:"button",onClick:a,children:Object(d.jsx)("i",{className:"fa fa-star"})}),Object(d.jsx)("button",{className:"btn-trash btn-sm",onClick:n,children:Object(d.jsx)("i",{className:"fa fa-trash-o"})}),Object(d.jsx)("i",{className:"fa fa-heart"})]})]})}}]),n}(u.Component)),f=(n(320),function(t){var e=t.posts,n=t.onDelete,i=t.onToggleImportant,c=t.onToggleLiked,o=e.map((function(t){var e=t.id,o=Object(j.a)(t,["id"]);return Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsx)(h,Object(a.a)(Object(a.a)({},o),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return i(e)},onToggleLiked:function(){return c(e)}}))},e)}));return Object(d.jsx)("ul",{className:"app-list list-group",children:o})}),m=(n(321),function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"All"},{name:"like",label:"Liked"}],a}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,a=e.label,i=t.props,c=i.filter,o=i.onFilterSelect,r=c===n?"btn-info":"btn-outline-dark";return Object(d.jsx)("button",{type:"button",className:"btn ".concat(r),onClick:function(){return o(n)},children:a},n)}));return Object(d.jsx)("div",{className:"btn-group",children:e})}}]),n}(u.Component)),p=(n(322),function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(r.a)(a)),a}return Object(o.a)(n,[{key:"onUpdateSearch",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.onUpdateSearch(e)}},{key:"render",value:function(){return Object(d.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"Record search",value:this.state.term,onChange:this.onUpdateSearch})}}]),n}(u.Component)),O=(n(323),function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(r.a)(a)),a.onSubmit=a.onSubmit.bind(Object(r.a)(a)),a}return Object(o.a)(n,[{key:"onValueChange",value:function(t){this.setState({text:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(d.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit,children:[Object(d.jsx)("input",{type:"text",placeholder:"What are you thinking about now?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),Object(d.jsx)("button",{type:"submit",className:"btn btn-outline-dark",children:"Add"})]})}}]),n}(u.Component)),k=(n(324),function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={data:[{label:"Going to learn React",important:!0,like:!1,id:1},{label:"That is so good",important:!1,like:!1,id:2},{label:"I need a break...",important:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(r.a)(a)),a.addItem=a.addItem.bind(Object(r.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(r.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(r.a)(a)),a.searchPost=a.searchPost.bind(Object(r.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(r.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(r.a)(a)),a.maxId=4,a}return Object(o.a)(n,[{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),c=n.slice(0,a),o=n.slice(a+1);return{data:[].concat(Object(i.a)(c),Object(i.a)(o))}}))}},{key:"addItem",value:function(t){var e={label:t,important:!1,id:this.maxId++};this.setState((function(t){var n=t.data;return{data:[].concat(Object(i.a)(n),[e])}}))}},{key:"onToggleImportant",value:function(t){this.setState((function(e){var n=e.data,c=n.findIndex((function(e){return e.id===t})),o=n[c],r=Object(a.a)(Object(a.a)({},o),{},{important:!o.important});return{data:[].concat(Object(i.a)(n.slice(0,c)),[r],Object(i.a)(n.slice(c+1)))}}))}},{key:"onToggleLiked",value:function(t){this.setState((function(e){var n=e.data,c=n.findIndex((function(e){return e.id===t})),o=n[c],r=Object(a.a)(Object(a.a)({},o),{},{like:!o.like});return{data:[].concat(Object(i.a)(n.slice(0,c)),[r],Object(i.a)(n.slice(c+1)))}}))}},{key:"searchPost",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"filterPost",value:function(t,e){return"like"===e?t.filter((function(t){return t.like})):t}},{key:"onUpdateSearch",value:function(t){this.setState({term:t})}},{key:"onFilterSelect",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,a=t.filter,i=e.filter((function(t){return t.like})).length,c=e.length,o=this.filterPost(this.searchPost(e,n),a);return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)(b,{liked:i,allPosts:c}),Object(d.jsxs)("div",{className:"search-panel d-flex",children:[Object(d.jsx)(p,{onUpdateSearch:this.onUpdateSearch}),Object(d.jsx)(m,{filter:a,onFilterSelect:this.onFilterSelect})]}),Object(d.jsx)(f,{posts:o,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),Object(d.jsx)(O,{onAdd:this.addItem})]})}}]),n}(u.Component))}}]);
//# sourceMappingURL=3.5f96b42f.chunk.js.map