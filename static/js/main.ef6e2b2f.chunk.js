(this.webpackJsonpalexwebsite=this.webpackJsonpalexwebsite||[]).push([[0],{11:function(e,t,c){},35:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),r=c.n(s),a=c(19),o=c.n(a),i=(c(35),c(15)),l=c.n(i),j=c(20),b=c(21),h=c(22),u=c(29),O=c(27),x=(c(11),c(9)),d=c(3),p=c(23),m=c(25);var f=function(){return Object(n.jsxs)("div",{className:"overnav",children:[Object(n.jsx)(x.b,{style:{textDecoration:"none",color:"black"},to:"/",children:Object(n.jsx)("h3",{className:"header",children:"PHOTOS BY ALEX TANG \xa9"})}),Object(n.jsx)("input",{type:"checkbox",id:"toggle"}),Object(n.jsx)("nav",{className:"navBar",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.instagram.com/alexhtang/",children:"IG: @ALEXHTANG"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.bostonglobe.com/lifestyle/2016/09/22/chronicling-his-city-and-his-adventures/yqagLtfu50aIvEC598DSrJ/story.html",children:"GLOBE INTERVIEW"})}),Object(n.jsx)("li",{children:"FAVORITE PHOTOS"}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://open.spotify.com/user/alxtng",children:"MY SPOTIFY"})}),Object(n.jsx)(x.b,{style:{textDecoration:"none",color:"black"},to:"/about",children:Object(n.jsx)("li",{children:"ABOUT"})})]})}),Object(n.jsx)("label",{for:"toggle",children:Object(n.jsx)(p.a,{className:"baricon",icon:m.a})})]})};var v=function(){return Object(n.jsx)("h1",{children:"ABOUT PAGE"})},g=c(28),y=c(26),k=c.n(y),w={default:3,1100:2,800:1};var N=function(e){var t=Object(s.useState)("true"),c=Object(g.a)(t,2),r=(c[0],c[1],e.photos.map((function(e,t){return Object(n.jsx)("div",{className:"picsdiv",children:Object(n.jsx)("img",{className:"pics",src:e.photos[0].original_size.url,alt:"from tumblr"},t)})})));return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(k.a,{breakpointCols:w,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:r})})};var E=function(e){Object(u.a)(c,e);var t=Object(O.a)(c);function c(){var e;return Object(b.a)(this,c),(e=t.call(this)).state={photos:[]},e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.tumblr.com/v2/blog/alxtng.tumblr.com/posts?limit=50&api_key=6EoBI1MKO1yikEq2btHFUTGzZWAdvwzx3NIr7OTCOksb2NWyvR").then(function(){var t=Object(j.a)(l.a.mark((function t(c){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.ok){t.next=2;break}throw Error("Unsuccessful fetch");case 2:return t.prev=2,t.next=5,c.json();case 5:n=t.sent,e.setState({photos:n.response.posts}),t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(2),Error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){return console.log("HOME"),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(N,{photos:this.state.photos})})}}]),c}(s.Component),T=function(){return Object(n.jsx)(x.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(f,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",exact:!0,component:E}),Object(n.jsx)(d.a,{path:"/about",component:v})]})]})})};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ef6e2b2f.chunk.js.map