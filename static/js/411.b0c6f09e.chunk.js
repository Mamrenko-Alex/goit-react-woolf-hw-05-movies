"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[411],{411:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var i=t(861),n=t(439),s=t(757),a=t.n(s),c=t(790),v=t(791),o=t(689),w={reviewsHeader:"MovieReviews_reviewsHeader__X4TDE",reviews:"MovieReviews_reviews__xNpDW",review:"MovieReviews_review__+XeIZ",reviewerName:"MovieReviews_reviewerName__MwNOV",reviewContent:"MovieReviews_reviewContent__QwdnS"},u=t(184),h=function(e){var r=e.reviewer,t=r.author_details,i=r.author,n=r.content;return(0,u.jsxs)("div",{className:w.review,children:[(0,u.jsx)("img",{src:t.avatar_path?"https://image.tmdb.org/t/p/w500/".concat(t.avatar_path):"https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png",alt:i,width:150}),(0,u.jsx)("h4",{className:w.reviewerName,children:i}),(0,u.jsx)("p",{className:w.reviewContent,children:n})]})},l=function(){var e=(0,o.UO)().movieId,r=(0,v.useState)({}),t=(0,n.Z)(r,2),s=t[0],l=t[1];(0,v.useEffect)((function(){var r=function(){var r=(0,i.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.a.getMovieReviews(e);case 3:t=r.sent,l(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]);var _=s.results;return(0,u.jsxs)("div",{className:w.section,children:[(0,u.jsx)("h3",{className:w.reviewsHeader,children:"Review"}),(0,u.jsx)("div",{className:w.reviews,children:_&&_.map((function(e){return(0,u.jsx)(h,{reviewer:e},e.id)}))})]})}}}]);
//# sourceMappingURL=411.b0c6f09e.chunk.js.map