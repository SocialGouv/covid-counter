(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[828],{7272:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(900),o=n(6672);t.default=function(){var e=(0,o.e)();return(0,r.jsx)(i.A,{data:e,href:"/",unit:"millions"})}},900:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n(5893),i=n(6265),o=n(1664),u=n(7294),c=n(3067),a=n(6672),f=n(4155);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=f.env.REFRESH_INTERVAL&&parseInt(f.env.REFRESH_INTERVAL)||100,h=function(e,t){for(var n=e;(""+n).length<t;)n="0"+n;return n},p={fontVariantNumeric:"tabular-nums",fontSize:"5rem",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",height:"80vh",margin:20},d=function(e){var t=e.data,n=e.href,i=e.unit,f=e.style,l=void 0===f?{}:f,d=t&&(0,a.q)(t),w=function(e){var t=e.referenceDate,n=e.referenceValue,r=e.nextValue,i=e.unit,o=r-n||0,a=new Date,f=o/86400*1,l=function(){var e=new Date;if(t&&!(e<t)){var r=(e.getTime()-t.getTime())/1e3,i=Math.floor(r*f);return n+i}},s=(0,u.useState)(l()),p=s[0],d=s[1];if((0,c.Z)((function(){d(l())}),v),a.getHours()>=21||a.getHours()<8)return null;if(!t||!p||p<4e7)return null;var w=Math.floor(p/1e6);if("millions"===i)return w;if("milliers"===i){var b=Math.floor((p-1e6*w)/1e3);return h(b,3)}if("unites"===i){var g=Math.floor(p/1e3);return h(Math.floor(p-1e3*g),3)}return h(p,3)}({referenceDate:d&&d[0],referenceValue:d&&d[1],nextValue:d&&d[2],unit:i}),b="calc(100vw / 3)";if(i&&(b="calc(100vw / 2)"),!t||!w)return null;var g=s(s({},p),{},{fontSize:b},l),m=(0,r.jsx)("div",{style:g,children:w});return n?(0,r.jsx)(o.default,{href:n,children:(0,r.jsx)("a",{children:m})}):m}},6672:function(e,t,n){"use strict";n.d(t,{q:function(){return w},e:function(){return b}});var r=n(5065),i=n(8140),o=n(7294),u=n(5723),c=n(1489),a=n(3465),f=n(313),l=n(9949),s=n(7349),v=n(4155),h=v.env.DATA_URL||"https://covidcounter.blob.core.windows.net/$web/latest.csv",p=v.env.DATA_URL_INTERVAL&&parseInt(v.env.DATA_URL_INTERVAL)||6e4,d=function(){return fetch(h+"?"+Math.random()).then((function(e){return e.text()})).then((function(e){return e.split("\n").filter(Boolean).map((function(e){return e.split(",")}))})).then((function(e){if(e.length){var t=e[0];if(9===t.length){var n=(0,c.Z)(new Date(t[0]),{hours:17,minutes:45,seconds:0});return[(0,a.Z)(n)].concat((0,i.Z)(t.slice(1).map((function(e){return parseInt(e)}))))}}})).catch((function(e){console.log(e)}))},w=function(e){var t=(0,r.Z)(e),n=t[0],o=t.slice(1),u=new Date,a=new Date(n);if((0,f.Z)(u,a))console.log("error: now is before referenceDate");else{var v=(0,l.Z)(u,a),h=(0,c.Z)(u,{hours:17,minutes:45,seconds:0});if(v>=1&&(0,f.Z)(u,h)&&(v-=1),!(v<0||v>7))return[(0,s.Z)(a,v)].concat((0,i.Z)(o.slice(v,v+2)))}},b=function(){var e=(0,o.useState)(null),t=e[0],n=e[1],r=(0,u.ZP)("/sample.csv",{refreshInterval:p,fetcher:d});return r.data&&(t&&r.data.join("")===t.join("")||n(r.data)),t}},76:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/millions",function(){return n(7272)}])}},function(e){e.O(0,[39,774,888,179],(function(){return t=76,e(e.s=t);var t}));var t=e.O();_N_E=t}]);