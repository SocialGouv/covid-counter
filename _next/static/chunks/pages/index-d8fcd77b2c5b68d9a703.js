(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var i=o(t(7294)),c=t(9414),u=t(4651),a=t(7426),l={};function s(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=(0,u.useRouter)(),f=i.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],u=t[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):u||i}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var L=(n=i.Children.only(p))&&"object"===typeof n&&n.ref,w=(0,a.useIntersection)({rootMargin:"200px"}),b=r(w,2),T=b[0],E=b[1],_=i.default.useCallback((function(e){T(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[L,T]);(0,i.useEffect)((function(){var e=E&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof g?g:o&&o.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&s(o,d,h,{locale:n})}),[h,d,E,g,t,o]);var C={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,u,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:a,scroll:u}))}(e,o,d,h,v,m,y,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var x="undefined"!==typeof g?g:o&&o.locale,k=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(h,x,o&&o.locales,o&&o.domainLocales);C.href=k||(0,c.addBasePath)((0,c.addLocale)(h,x,o&&o.defaultLocale))}return i.default.cloneElement(n,C)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,a=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],h=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||f||e&&e.tagName&&(a.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[h,f]};var o=t(7294),i=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},2562:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(1664),i=t(4155),c={height:"80vh",margin:"20vh",fontSize:"2rem",alignItems:"center",justifyContent:"center"};n.default=function(){return(0,r.jsxs)("div",{style:c,children:[(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"".concat(i.env.PUBLIC_URL,"/counter"),children:"Compteur Global"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"".concat(i.env.PUBLIC_URL,"/millions"),children:"1) millions"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"".concat(i.env.PUBLIC_URL,"/milliers"),children:"2) milliers"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"".concat(i.env.PUBLIC_URL,"/unites"),children:"3) unit\xe9s"})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])},1664:function(e,n,t){e.exports=t(2167)},4155:function(e){var n,t,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"===typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var u,a=[],l=!1,s=-1;function f(){l&&u&&(l=!1,u.length?a=u.concat(a):s=-1,a.length&&d())}function d(){if(!l){var e=c(f);l=!0;for(var n=a.length;n;){for(u=a,a=[];++s<n;)u&&u[s].run();s=-1,n=a.length}u=null,l=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function p(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];a.push(new h(e,n)),1!==a.length||l||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);