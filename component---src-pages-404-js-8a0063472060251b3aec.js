(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(208),o=n(206);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},202:function(t,e,n){var a;t.exports=(a=n(205))&&a.default||a},203:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(68),o=n.n(i);n.d(e,"a",function(){return o.a});n(202),n(10).default.enqueue,r.a.createContext({})},204:function(t){t.exports={data:{site:{siteMetadata:{title:"DIY Compendium"}}}}},205:function(t,e,n){"use strict";n.r(e);n(52),n(17),n(14),n(15),n(8),n(22);var a=n(0),r=n.n(a),i=n(95);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(i.a,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({location:e,pageResources:n},n.json)):null}},206:function(t,e,n){"use strict";var a=n(207),r=n(0),i=n.n(r),o=n(210),c=n.n(o);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,l=a.data.site,u=e||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},207:function(t){t.exports={data:{site:{siteMetadata:{title:"DIY Compendium",description:"A knowledge base with DIY e-liquid mixing information.",author:"@ayan4m1"}}}}},208:function(t,e,n){"use strict";var a=n(204),r=n(0),i=n.n(r),o=n(203),c=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};c.defaultProps={siteTitle:""};var l=c;n(209),e.a=function(t){var e=t.children,n=a.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-8a0063472060251b3aec.js.map