"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[805],{805:function(e,i,t){t.r(i);var n=t(861),s=t(439),a=t(757),r=t.n(a),o=t(790),c=t(791),l=t(689),d=t(87),v=t(738),m=t(976),_=t(184);i.default=function(){var e=(0,l.UO)().movieId,i=(0,c.useState)({}),t=(0,s.Z)(i,2),a=t[0],h=t[1],u=(0,l.TH)();(0,c.useEffect)((function(){var i=function(){var i=(0,n.Z)(r().mark((function i(){var t;return r().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,o.a.getMovieDetail(e);case 3:t=i.sent,h(t),i.next=10;break;case 7:i.prev=7,i.t0=i.catch(0),console.error("Error fetching movie detail:",i.t0);case 10:case"end":return i.stop()}}),i,null,[[0,7]])})));return function(){return i.apply(this,arguments)}}();i()}),[e]);var f=a.title,p=a.release_date,x=a.poster_path,j=a.vote_average,g=a.vote_count,k=a.overview,Z=a.genres;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m.x,{}),(0,_.jsxs)("section",{className:v.Z.movieInfoContainer,children:[(0,_.jsxs)("div",{className:v.Z.movieInfo,children:[(0,_.jsx)("div",{className:v.Z.poster,children:(0,_.jsx)("img",{src:x?"https://image.tmdb.org/t/p/w500".concat(x):"https://cdn0.iconfinder.com/data/icons/videographer-filmmaker-and-cameraman/237/filming-002-512.png",alt:f})}),(0,_.jsxs)("div",{className:v.Z.details,children:[(0,_.jsx)("h1",{className:v.Z.title,children:f}),(0,_.jsx)("p",{children:p}),(0,_.jsxs)("p",{className:v.Z.rating,children:["The rating is ",Number(j).toFixed(2)," based on"," ",g," reviews"]}),(0,_.jsxs)("div",{className:v.Z.description,children:[(0,_.jsx)("h3",{className:v.Z.headers,children:"Description"}),(0,_.jsx)("p",{children:k})]}),(0,_.jsxs)("div",{className:v.Z.genres,children:[(0,_.jsx)("h3",{className:v.Z.headers,children:"Genres"}),(0,_.jsx)("div",{className:v.Z.genresItem,children:Z&&Z.map((function(e){var i=e.name;return(0,_.jsx)("p",{children:i},i)}))})]})]})]}),(0,_.jsxs)("div",{className:v.Z.linkContainer,children:[(0,_.jsx)(d.rU,{className:v.Z.linkButton,to:"/movies/".concat(e,"/cast"),state:{from:u},children:"Cast list"}),(0,_.jsx)(d.rU,{className:v.Z.linkButton,to:"/movies/".concat(e,"/reviews"),state:{from:u},children:"Reviews List"})]}),(0,_.jsx)(l.j3,{})]})]})}},976:function(e,i,t){t.d(i,{x:function(){return o}});t(791);var n=t(689),s=t(87),a=t(738),r=t(184),o=function(){var e,i,t=null!==(e=null===(i=(0,n.TH)().state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/";return(0,r.jsx)(s.rU,{className:a.Z.linkButton,to:t,children:"Back to movies"})}},738:function(e,i){i.Z={movieInfo:"MovieDetail_movieInfo__zsqnx",movieInfoContainer:"MovieDetail_movieInfoContainer__enhxg",headers:"MovieDetail_headers__3wszz",poster:"MovieDetail_poster__T7D7-",details:"MovieDetail_details__Hma5d",title:"MovieDetail_title__amPFL",rating:"MovieDetail_rating__mmICX",description:"MovieDetail_description__3dsPu",genres:"MovieDetail_genres__D1T60",genresItem:"MovieDetail_genresItem__54b8h",linkContainer:"MovieDetail_linkContainer__kNTQJ",linkButton:"MovieDetail_linkButton__9rK4n"}}}]);
//# sourceMappingURL=805.b63df8ea.chunk.js.map