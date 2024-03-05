"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{146:function(n,e,t){t.d(e,{e:function(){return x}});var r,a,o=t(689),u=t(168),c=t(924),i=t(87),s=t(652),p=c.ZP.li(r||(r=(0,u.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),f=(0,c.ZP)(i.rU)(a||(a=(0,u.Z)(["\n  &:hover {\n    color: #6d4b88;\n  }\n\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n    background-size: cover;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1;\n    display: block;\n    width: 400px;\n    height: 560px;\n    border-radius: 4px;\n    border: none;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  }\n"])),(function(n){return n.cover?"url('https://image.tmdb.org/t/p/w500/".concat(n.cover,"')"):"url(".concat(s,")")})),d=t(184),x=function(n){var e=n.films,t=(0,o.TH)();return(0,d.jsx)("ul",{children:e.map((function(n){return(0,d.jsx)(p,{children:(0,d.jsx)(f,{to:"/movies/".concat(n.id),state:{from:t},cover:n.poster_path,children:n.title})},n.id)}))})}},602:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,o=t(861),u=t(439),c=t(757),i=t.n(c),s=t(791),p=t(87),f=t(390),d=t(258),x=t(168),l=t(924),h=l.ZP.input(r||(r=(0,x.Z)(["\n  width: 240px;\n  height: 40px;\n  margin-right: 8px;\n  padding: 10px 15px;\n  border-radius: 6px;\n  border: 1px solid #9371ae;\n  outline: 1px solid #6d4b88;\n  font-size: 16px;\n"]))),g=l.ZP.button(a||(a=(0,x.Z)(["\n  margin-bottom: 20px;\n  padding: 10px 15px;\n  font-size: 16px;\n  background-color: #6d4b88;\n  border-radius: 6px;\n  border: none;\n  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,\n      rgba(50, 151, 211, 0.3) 0 0 0 4px;\n  }\n"]))),v=t(184),b=function(n){var e=n.searchMovies,t=(0,s.useState)(""),r=(0,u.Z)(t,2),a=r[0],o=r[1];return(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(a.toLowerCase())},children:[(0,v.jsx)(h,{type:"text",name:"query",autoFocus:!0,value:a,onChange:function(n){o(n.target.value)},placeholder:"Enter Movie"}),(0,v.jsx)(g,{type:"submit",children:"Search"})]})},m=t(146),w=function(){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,p.lr)(),c=(0,u.Z)(a,2),x=c[0],l=c[1],h=(0,s.useState)(!1),g=(0,u.Z)(h,2),w=g[0],Z=g[1],k=(0,s.useState)(!1),y=(0,u.Z)(k,2),j=y[0],_=y[1],S=x.get("query")||"";return(0,s.useEffect)((function(){var n=function(){var n=(0,o.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,f.uP)(S);case 4:e=n.sent,r(e),_(0===e.length&&""!==S),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,Z(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[S]),(0,v.jsxs)("main",{children:[(0,v.jsx)(b,{searchMovies:function(n){l(""!==n&&{query:n}),_(!1)}}),w&&(0,v.jsx)(d.a,{}),j&&(0,v.jsx)("p",{children:"There are no movies with this request. Please, try again..."}),t.length>0&&(0,v.jsx)(m.e,{films:t})]})}},390:function(n,e,t){t.d(e,{Hg:function(){return i},Jh:function(){return d},TP:function(){return p},bp:function(){return f},uP:function(){return s}});var r=t(861),a=t(757),o=t.n(a),u=t(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="6498fc8ca7823e31f972fc635d8e33da",i=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},652:function(n,e,t){n.exports=t.p+"static/media/no-image.a4fedff1a0cb7e5a0282.jpg"}}]);
//# sourceMappingURL=602.ee96bc0c.chunk.js.map