(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),r=n(22),i=n.n(r),c=(n(31),n(13)),o=(n(32),n(8)),u=n(9),l=n(15),h=n(14),j=(n(33),n(2)),d=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={text:"",onSearch:t.onSearch||function(){}},s}return Object(u.a)(n,[{key:"onChange",value:function(t){var e=t.target.value;e.startsWith("r/")&&(e=e.substring(2)),this.setState({text:e})}},{key:"onKeyUp",value:function(t){"Enter"===t.key&&(this.onChange(t),this.onSubmit())}},{key:"onSubmit",value:function(){this.state.text.length>0&&this.state.onSearch(this.state.text)}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{onChange:function(e){return t.onChange(e)},onKeyUp:function(e){return t.onKeyUp(e)},className:"SearchBox-Input",placeholder:"Subreddit Name"}),Object(j.jsx)("button",{onClick:function(){return t.onSubmit()},disabled:0===this.state.text.length,className:"SearchBox-Button",children:"Go"})]})}}]),n}(s.Component),b=(n(35),n(0)),v=n(10),p=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,null,[{key:"getFavourites",value:function(){var t=JSON.parse(window.localStorage.getItem("favourites"))||{},e={},n=!1;for(var s in t){var a=t[s];"string"===typeof s&&a&&a.id&&a.url&&a.title?e[s]=a:n=!0}return n&&this.setFavourites(e),e}},{key:"setFavourites",value:function(t){window.localStorage.setItem("favourites",JSON.stringify(t))}},{key:"toggleFavourite",value:function(e){var n=t.getFavourites();n[e.id]?n[e.id]=null:n[e.id]=e,t.setFavourites(n)}}]),t}(),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"hasPosts",get:function(){return this.props.posts&&this.props.posts.length>0}},{key:"toggleFavourite",value:function(t){p.toggleFavourite(t),this.forceUpdate()}},{key:"render",value:function(){var t=this;if(this.hasPosts){var e=p.getFavourites();return Object(j.jsx)("div",{className:"PostList-List",children:this.props.posts.map((function(n){return Object(j.jsxs)("div",{className:"PostList-Post",children:[n.thumbnail?Object(j.jsx)("img",{src:n.thumbnail,alt:"",onError:function(t){return t.target.style.display="none"}}):null,Object(j.jsxs)("div",{className:"PostList-PostBody",children:[Object(j.jsx)("a",{href:n.url,children:n.title}),Object(j.jsx)("div",{className:"PostList-Score",children:n.score})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b.b.Provider,{value:{color:"inherit"},children:Object(j.jsx)("div",{className:"PostList-Favourite",onClick:function(){return t.toggleFavourite(n)},children:e[n.id]?Object(j.jsx)(v.a,{}):Object(j.jsx)(v.d,{})})})})]},n.id)}))})}return Object(j.jsx)("div",{className:"PostList-Empty",children:this.props.empty_message||"No posts loaded"})}}]),n}(s.Component),O=n(18),x=n.n(O),g=n(23),m=n(24),y=n.n(m),F=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,null,[{key:"getHotPosts",value:function(){var t=Object(g.a)(x.a.mark((function t(e){var n,s,a,r=arguments;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:10,t.next=3,y()("https://reddit.com/r/".concat(e,"/hot.json"),{jsonpCallback:"jsonp"}).then((function(t){return t.json()}));case 3:return s=t.sent,a=[],s.data.children.forEach((function(t){"t3"===t.kind&&a.length<n&&a.push({id:t.data.permalink,url:"https://reddit.com"+t.data.permalink,title:t.data.title,thumbnail:t.data.thumbnail,score:t.data.score})})),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}();var N=function(){var t=Object(s.useState)(null),e=Object(c.a)(t,2),n=e[0],a=e[1],r=Object(s.useState)(null),i=Object(c.a)(r,2),o=i[0],u=i[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"App-Header",children:["Top Posts",Object(j.jsxs)("a",{className:"App-Navigation",href:"#/favourites",children:["Favourites",Object(j.jsx)(b.b.Provider,{value:{color:"inherit"},children:Object(j.jsx)(v.c,{})})]}),Object(j.jsx)(d,{onSearch:function(t){t!==n&&(a(t),F.getHotPosts(t).then(u))}})]}),Object(j.jsx)("div",{className:"App-Content",children:Object(j.jsx)(f,{posts:o})})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),s(t),a(t),r(t),i(t)}))},S=n(25),P=n(3);n(37);var C=function(){var t=Object(s.useState)((function(){return Object.values(p.getFavourites())})),e=Object(c.a)(t,2),n=e[0];return e[1],Object(j.jsxs)("div",{className:"Favourite",children:[Object(j.jsxs)("div",{className:"Favourite-Header",children:["Favourites",Object(j.jsxs)("a",{className:"Favourite-Navigation",href:"#/",children:[Object(j.jsx)(b.b.Provider,{value:{color:"inherit"},children:Object(j.jsx)(v.b,{})}),"Top"]})]}),Object(j.jsx)("div",{className:"Favourite-Content",children:Object(j.jsx)(f,{posts:n,empty_message:"No favourites"})})]})};i.a.render(Object(j.jsxs)(a.a.StrictMode,{children:[Object(j.jsxs)(S.a,{children:[Object(j.jsx)(P.a,{exact:!0,path:"/favourites",component:C}),Object(j.jsx)(P.a,{exact:!0,path:"/",component:N})]}),Object(j.jsxs)("div",{id:"Author-Overlay",children:["Austin Zalac 7900020",Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"https://azalac.github.io/AWF_A1/#/",children:"Github Pages"})]})]}),document.getElementById("root")),k()}},[[43,1,2]]]);
//# sourceMappingURL=main.5a528e40.chunk.js.map