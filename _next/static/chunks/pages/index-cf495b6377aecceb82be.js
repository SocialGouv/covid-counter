(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(900),o=n(6672),u={height:"200px",display:"inline-block",fontSize:"calc(100vw / 6)"};t.default=function(){var e=(0,o.e)();return(0,r.jsxs)("div",{style:{textAlign:"center",height:"20vh",marginTop:"10vh"},children:[(0,r.jsx)("h2",{children:"Simulation du nombre de primo-vaccin\xe9s"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(i.A,{data:e,unit:"millions",href:"/millions",style:u}),(0,r.jsx)(i.A,{data:e,unit:"milliers",href:"/milliers",style:u}),(0,r.jsx)(i.A,{data:e,unit:"unites",href:"/unites",style:u})]})}},900:function(e,t,n){"use strict";n.d(t,{A:function(){return j}});var r=n(5893),i=n(6265),o=n(1664),u=n(7294),c=n(3067),a=n(6672),s=n(4155);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=s.env.REFRESH_INTERVAL&&parseInt(s.env.REFRESH_INTERVAL)||100,v=function(e,t){for(var n=e;(""+n).length<t;)n="0"+n;return n},b={fontVariantNumeric:"tabular-nums",fontSize:"5rem",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",height:"80vh",margin:20},j=function(e){var t=e.data,n=e.href,i=e.unit,s=e.style,l=void 0===s?{}:s,j=t&&(0,a.q)(t),p=function(e){var t=e.referenceDate,n=e.referenceValue,r=e.nextValue,i=e.unit,o=r-n||0,a=new Date,s=o/86400*1,l=function(){var e=new Date;if(t&&!(e<t)){var r=(e.getTime()-t.getTime())/1e3,i=Math.floor(r*s);return n+i}},f=(0,u.useState)(l()),b=f[0],j=f[1];if((0,c.Z)((function(){j(l())}),h),a.getHours()>=21||a.getHours()<8)return null;if(!t||!b||b<4e7)return null;var p=Math.floor(b/1e6);if("millions"===i)return p;if("milliers"===i){var d=Math.floor((b-1e6*p)/1e3);return v(d,3)}if("unites"===i){var m=Math.floor(b/1e3);return v(Math.floor(b-1e3*m),3)}return v(b,3)}({referenceDate:j&&j[0],referenceValue:j&&j[1],nextValue:j&&j[2],unit:i}),d="calc(100vw / 3)";if(i&&(d="calc(100vw / 2)"),!t||!p)return null;var m=f(f({},b),{},{fontSize:d},l),x=(0,r.jsx)("div",{style:m,children:p});return n?(0,r.jsx)(o.default,{href:n,children:(0,r.jsx)("a",{children:x})}):x}},6672:function(e,t,n){"use strict";n.d(t,{q:function(){return p},e:function(){return d}});var r=n(5065),i=n(8140),o=n(7294),u=n(5723),c=n(1489),a=n(3465),s=n(313),l=n(9949),f=n(7349),h=n(4155),v=h.env.DATA_URL||"https://covidcounter.blob.core.windows.net/$web/latest.csv",b=h.env.DATA_URL_INTERVAL&&parseInt(h.env.DATA_URL_INTERVAL)||6e4,j=function(){return fetch(v+"?"+Math.random()).then((function(e){return e.text()})).then((function(e){return e.split("\n").filter(Boolean).map((function(e){return e.split(",")}))})).then((function(e){if(e.length){var t=e[0];if(9===t.length){var n=(0,c.Z)(new Date(t[0]),{hours:17,minutes:45,seconds:0});return[(0,a.Z)(n)].concat((0,i.Z)(t.slice(1).map((function(e){return parseInt(e)}))))}}})).catch((function(e){console.log(e)}))},p=function(e){var t=(0,r.Z)(e),n=t[0],o=t.slice(1),u=new Date,a=new Date(n);if((0,s.Z)(u,a))console.log("error: now is before referenceDate");else{var h=(0,l.Z)(u,a),v=(0,c.Z)(u,{hours:17,minutes:45,seconds:0});if(h>=1&&(0,s.Z)(u,v)&&(h-=1),!(h<0||h>7))return[(0,f.Z)(a,h)].concat((0,i.Z)(o.slice(h,h+2)))}},d=function(){var e=(0,o.useState)(null),t=e[0],n=e[1],r=(0,u.ZP)("/sample.csv",{refreshInterval:b,fetcher:j});return r.data&&(t&&r.data.join("")===t.join("")||n(r.data)),t}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2562)}])}},function(e){e.O(0,[39,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);