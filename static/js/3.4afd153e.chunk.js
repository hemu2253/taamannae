(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{40:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.title,a=e.pageNo,n=e.width,i=void 0===n?"100%":n,l=e.borderColor,o=void 0===l?"#000":l;return r.a.createElement("div",{className:"section-title d-flex align-items-center justify-content-between",style:{paddingBottom:18,borderBottom:"1px solid ".concat(o),width:i}},r.a.createElement("div",null,t),r.a.createElement("div",null,a))}},43:function(e,t,a){},44:function(e,t,a){"use strict";e.exports=a(45)},45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a(6);var i=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(n),l=function(e,t,a){var n;null===(n=e.current)||void 0===n||n.scrollIntoView({behavior:t,block:a,inline:a})};function o(e,t){void 0===t&&(t={});var a=r.useLocation(),i=a.hash,o=a.pathname,s=n.useRef(null),c=t.behavior,m=void 0===c?"smooth":c,u=t.position,h=void 0===u?"center":u,d=t.scrollFunc,p=void 0===d?l:d,v=t.requiredPathname;return"#"!==e.charAt(0)&&(e="#"+e),"string"==typeof v&&(v=[v]),n.useEffect(function(){i!==e||void 0!==v&&!v.includes(o)||s.current&&p(s,m,h)},[i,s,e,v,o,p,m,h]),s}var s=function(e){var t=e.hash,a=e.children,r=o(t,{behavior:e.behavior,position:e.position,requiredPathname:e.requiredPathname,scrollFunc:e.scrollFunc});return n.cloneElement(a,{ref:r})},c=function(e,t,a,n){var r,i,o,s,c,m,u,h=a.behavior,d=a.position,p=a.requiredPathname,v=a.scrollFunc,f=null!==(r=t.requiredPathname)&&void 0!==r?r:p;"string"==typeof f&&(f=[f]);var E=null!==(o=null!==(i=t.behavior)&&void 0!==i?i:h)&&void 0!==o?o:"smooth",g=null!==(c=null!==(s=t.position)&&void 0!==s?s:d)&&void 0!==c?c:"center",y=null!==(u=null!==(m=t.scrollFunc)&&void 0!==m?m:v)&&void 0!==u?u:l;return function(){(void 0===f||f.includes(n))&&e.current&&y(e,E,g)}},m=function(){return(m=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.ChildrenHash=function(e){var t=e.hashes,a=e.children,r=e.behavior,l=e.position,o=e.requiredPathname,c=e.scrollFunc;return t.length,a.length,i.default.createElement(i.default.Fragment,null,a.map(function(e,a){return i.default.createElement(n.Fragment,{key:a},function(e,t,a){return a?"string"==typeof a?i.default.createElement(s,m({},t,{hash:a}),e):i.default.createElement(s,m({},t,a),e):e}(e,{behavior:r,position:l,requiredPathname:o,scrollFunc:c},t[a]))}))},t.DEFAULT_SCROLL_BEHAVIOR="smooth",t.DEFAULT_SCROLL_FUNC=l,t.DEFAULT_SCROLL_POSITION="center",t.HashScroll=s,t.MultiHash=function(e){var t=e.hashes,a=e.children,l=e.behavior,o=e.position,s=e.requiredPathname,m=e.scrollFunc,u=r.useLocation(),h=u.hash,d=u.pathname,p=n.useMemo(function(){return{behavior:l,position:o,requiredPathname:s,scrollFunc:m}},[l,o,s,m]),v=n.useMemo(function(){return{}},[t,p,d]);return n.useMemo(function(){for(var e in t){var a=t[e];"#"!==e.charAt(0)&&(e="#"+e),Array.isArray(a)?v[e]=c(a[0],a[1],p,d):v[e]=c(a,{},p,d)}},[t,p,d]),n.useEffect(function(){var e=v[h];"function"==typeof e&&e()},[h,v]),i.default.createElement(i.default.Fragment,null,a)},t.useHashScroll=o},47:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(0),i=a.n(r),l=(a(43),a(40)),o=a(44),s=a(1),c=["I studied stats, CS & neuroscience","Bubble tea is my favourite food group","I value empathy & vulnerability","I have been to 14 countries","Seriously, I really love playing Minecraft"];t.default=function(){var e=Object(s.k)(),t=window.innerWidth<=991,a=i.a.useState(0),m=Object(n.a)(a,2),u=m[0],h=m[1];return Object(r.useEffect)(function(){var e=setInterval(function(){return h(function(e){return(e+1)%c.length}),function(){clearInterval(e)}},2500)},[]),i.a.createElement("div",{className:"container"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"header-about"},i.a.createElement("h1",null,i.a.createElement("span",{className:"header-color-span"},i.a.createElement("span",{className:"header-weight-span"},"Hello"),"! I'm Tammy,"),i.a.createElement("br",null),i.a.createElement("span",{className:"textloop-cont"},i.a.createElement("span",{className:"textloop"},i.a.createElement("div",{className:"x0 x1 x2 x3"},i.a.createElement("div",{style:{width:t?"100%":"552px",height:"150px",transition:"width 150ms linear 0s"}},c.map(function(e,t){return u===t?i.a.createElement("div",{key:t,className:"x1 x4 x5 x6",style:{opacity:1,transform:"translateY(0px)",position:"absolute"}},i.a.createElement("span",null,e)):null}))))))),i.a.createElement("div",{className:"header-welcome"},i.a.createElement("h5",null,"Welcome to my portfolio"),i.a.createElement("p",null,"I am a product designer & front-end engineer with some illustration chops. I have a wide range of experience from big tech and agency to and startups. Co-Founder @ Octoshop. Incoming @ Figma. Previously @",i.a.createElement("span",{className:"header-serif"},"Meta, Xbox & Wish")),i.a.createElement("h5",{style:{paddingTop:"48px"}},"It\u2019s nice to meet you, check out my work below"))),i.a.createElement(o.HashScroll,{hash:"#work",behavior:"smooth",position:"nearest"},i.a.createElement("div",null,i.a.createElement(l.a,{title:"Work",pageNo:"001"}),i.a.createElement("div",{className:"home projects"},i.a.createElement("div",{className:"home home-project meta light-in-dark",onClick:function(){return e.push("/clock-work")}},i.a.createElement("div",{className:"homes info meta light-in-dark"},i.a.createElement("div",null,i.a.createElement("h2",{className:"homes internships meta light-in-dark"},"Clock Work"),i.a.createElement("p",{className:"homes para meta light-in-dark"},"Overview \u2022 Internship \u2022 Product Design"))),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement("img",{className:"homes image-inner meta light-in-dark",src:"".concat("assets/home/","meta-home.svg"),alt:""}))),i.a.createElement("div",{className:"home home-project mi-sched",onClick:function(){return e.push("/home-seeker")}},i.a.createElement("div",{className:"homes info mi-sched"},i.a.createElement("div",null,i.a.createElement("h2",{className:"homes internships mi-sched"},"Home Seeker"),i.a.createElement("p",{className:"homes para mi-sched"},"Product Design \u2022 Personal Project \u2022 Shipped"))),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement("img",{className:"homes image-inner mi-sched",src:"".concat("assets/home/","mimain.svg"),alt:""}))),i.a.createElement("div",{className:"home home-project finary light-in-dark",onClick:function(){return e.push("/bright-minds")}},i.a.createElement("div",{className:"homes info finary light-in-dark"},i.a.createElement("div",null,i.a.createElement("h2",{className:"homes internships finary light-in-dark"},"Bright Minds"," ",i.a.createElement("span",{role:"img","aria-label":"icon"},"\ud83d\udd12")),i.a.createElement("p",{className:"homes para finary light-in-dark"},"NFT Gallery \u2022 Product Design \u2022 Capstone"))),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement("img",{className:"homes image-inner finary light-in-dark",src:"".concat("assets/home/","finhome.jpg"),alt:""})))))))}}}]);
//# sourceMappingURL=3.4afd153e.chunk.js.map