/*! For license information please see 22.5e7172b8.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmood_tracker=globalThis.webpackChunkmood_tracker||[]).push([[22],{22:(t,e,r)=>{r.r(e),r.d(e,{createSwipeBackGesture:()=>c});var n=r(811),o=r(507),a=r(909);const c=(t,e,r,c,i)=>{const s=t.ownerDocument.defaultView;let l=(0,o.i)(t);const h=t=>l?-t.deltaX:t.deltaX;return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(l=(0,o.i)(t),(t=>{const{startX:e}=t;return l?e>=s.innerWidth-50:e<=50})(r)&&e()),onStart:r,onMove:t=>{const e=h(t)/s.innerWidth;c(e)},onEnd:t=>{const e=h(t),r=s.innerWidth,o=e/r,a=(t=>l?-t.velocityX:t.velocityX)(t),c=a>=0&&(a>.2||e>r/2),u=(c?1-o:o)*r;let d=0;if(u>5){const t=u/Math.abs(a);d=Math.min(t,540)}i(c,o<=0?.01:(0,n.m)(0,o,.9999),d)}})}}}]);
//# sourceMappingURL=22.5e7172b8.chunk.js.map