"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{146:function(n,e,t){t.d(e,{e:function(){return l}});var r,a,c=t(689),u=t(168),o=t(924),i=t(87),s=t(652),p=o.ZP.li(r||(r=(0,u.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),f=(0,o.ZP)(i.rU)(a||(a=(0,u.Z)(["\n  &:hover {\n    color: #6d4b88;\n  }\n\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n    background-size: cover;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1;\n    display: block;\n    width: 400px;\n    height: 560px;\n    border-radius: 4px;\n    border: none;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  }\n"])),(function(n){return n.cover?"url('https://image.tmdb.org/t/p/w500/".concat(n.cover,"')"):"url(".concat(s,")")})),d=t(184),l=function(n){var e=n.films,t=(0,c.TH)();return(0,d.jsx)("ul",{children:e.map((function(n){return(0,d.jsx)(p,{children:(0,d.jsx)(f,{to:"/movies/".concat(n.id),state:{from:t},cover:n.poster_path,children:n.title})},n.id)}))})}},544:function(n,e,t){t.r(e);var r=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),i=t(390),s=t(258),p=t(146),f=t(184);e.default=function(){var n=(0,o.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],d=(0,o.useState)(!0),l=(0,a.Z)(d,2),v=l[0],h=l[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Hg)();case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:return n.prev=10,h(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(p.e,{films:t}),v&&(0,f.jsx)(s.a,{})]})}},390:function(n,e,t){t.d(e,{Hg:function(){return i},Jh:function(){return d},TP:function(){return p},bp:function(){return f},uP:function(){return s}});var r=t(861),a=t(757),c=t.n(a),u=t(294);u.Z.defaults.baseURL="http://api.themoviedb.org/3/";var o="6498fc8ca7823e31f972fc635d8e33da",i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},652:function(n,e,t){n.exports=t.p+"static/media/no-image.a4fedff1a0cb7e5a0282.jpg"}}]);
//# sourceMappingURL=544.f38a7794.chunk.js.map