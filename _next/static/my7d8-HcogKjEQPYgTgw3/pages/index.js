(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return y}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),u=o.a.createElement,c=function(e){var t=e.children;return u(o.a.Fragment,null,u(i.a,null,u("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),u("meta",{charSet:"utf-8"}),u("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge;chrome=1"}),u("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),u("meta",{name:"theme-color",content:"#0069A0"}),u("link",{rel:"shortcut icon",type:"image/x-icon",href:"/img/favicon.png"})),u("div",{className:"layout"},t))},l=n("Kaae"),s=o.a.createElement,f=function(e){var t=e.text,n=e.employer;return s("div",{className:"hero-banner"},s("h1",{className:"hero-banner-text"},t," ",s(l.a,{anchor:n}),"."))},p=o.a.createElement,d=function(e){var t=e.email,n=e.linkedinUrl;return p("footer",{className:"footer"},p(l.a,{anchor:t}),p(l.a,{anchor:{href:"/CV-Mathieu-Wrzesien.pdf",text:"CV"}}),p(l.a,{anchor:{href:n,text:"LinkedIn"}}))},m=n("Z4sG"),h=n("DOXl"),v=o.a.createElement,y=!0;t.default=function(e){var t=e.workExperiences,n="I\u2019m Mathieu Wrzesien, a software developer living in Montr\xe9al, currently working for";return v(o.a.Fragment,null,v(i.a,null,v("title",null,"Mathieu Wrzesien - Software Developer"),v("meta",{name:"description",content:n+" Bell Media"})),v(c,null,v("header",null,v(f,{text:n,employer:{href:"https://www.bellmedia.ca",text:"Bell Media"}})),v("main",null,v("section",null,v(m.a,{text:"Work Experience"}),v(h.a,{workExperiences:t}))),v(d,{email:{href:"mailto:mathieu.wrzesien@outlook.com",text:"Email"},linkedinUrl:"https://www.linkedin.com/in/mathieu-wrzesien-93763890/"})))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=o.props[l],p=r[l]||new Set;p.has(s)?a=!1:(p.add(s),r[l]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=a.default();function m(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}m.rewind=d.rewind,t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},DOXl:function(e,t,n){"use strict";var r=n("wx14"),o=n("q1tI"),a=n.n(o),i=a.a.createElement,u=function(e){var t=e.text;return i("div",{className:"technology"},t)},c=a.a.createElement,l=function(e){var t=e.technologies;return c("ul",{className:"technology-list"},function(e){return e.map((function(e,t){return c("li",{key:t},c(u,{text:e}))}))}(t))},s=a.a.createElement,f=function(e){var t=e.employer,n=e.position,r=e.timeFrame,o=e.technologies,a=e.accomplishments;return s("div",{className:"work-experience"},s("div",{className:"work-experience-heading"},s("p",null,"".concat(t," - ").concat(n," "),s("small",null,r))),s("div",{className:"work-experience-technologies"},s(l,{technologies:o})),a&&s("div",{className:"work-experience-accomplishments"},s("ul",null,function(e){return e.map((function(e,t){return s("li",{key:t},e)}))}(a))))},p=a.a.createElement;t.a=function(e){var t=e.workExperiences;return p("div",{className:"work-experience-list"},function(e){return e.map((function(e,t){return p(f,Object(r.a)({key:t},e))}))}(t))}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},Kaae:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;t.a=function(e){var t=e.anchor;return o("a",{className:"anchor",href:t.href,target:"_blank",rel:"noopener noreferrer"},t.text)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("a1gu"),a=n("Nsbk"),i=n("PJYZ"),u=n("W8MJ"),c=n("7W2i"),l=n("RIqP");Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){function s(e){var u;return r(this,s),u=o(this,a(s).call(this,e)),f&&(t.add(i(u)),n(i(u))),u}return c(s,l),u(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(s.Component)}},Z4sG:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;t.a=function(e){var t=e.text;return o("div",{className:"heading"},o("h2",{className:"heading-text"},t))}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["/EDR",0,1]]]);