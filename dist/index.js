!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("react-draggable"),require("react-resizable"));else if("function"==typeof define&&define.amd)define(["react","react-draggable","react-resizable"],t);else{var n="object"==typeof exports?t(require("react"),require("react-draggable"),require("react-resizable")):t(e.react,e["react-draggable"],e["react-resizable"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(global,(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t){},function(e,t,n){var r=n(6),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=b||(b=u(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=u(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r)()(!1);o.push([e.i,'.react-resizable-handle{position:absolute;bottom:3px;right:3px;width:10px;height:10px;border-bottom:2px solid grey;border-right:2px solid grey}.windows{position:relative}.window_content{height:calc(100% - 24px)}.window_wrapper{position:absolute;top:0;left:0;height:0;width:0}.window_active{z-index:1}.fullscreen{position:absolute !important;transform:translate(0, 0) !important;width:calc(100vw - 2px) !important;height:calc(100vh - 2px) !important;transition:all 0.3s ease;top:0% !important;left:0% !important}.decorator{height:20px;background:linear-gradient(45deg, #158fbb, rgba(3,86,101,0.95));color:white;display:flex;flex-direction:row;align-items:center;padding:2px}.decorator span.title{margin-right:auto;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 50px);overflow:hidden}.decorator .decorator_toggle{width:15px;height:15px;display:block;cursor:pointer;position:relative;margin-right:10px}.decorator .decorator_toggle:before{content:"";position:absolute;border:2px solid white;width:11px;height:11px;bottom:0;left:0}.decorator .decorator_close{width:15px;height:15px;display:block;cursor:pointer;position:relative}.decorator .decorator_close:before{content:"";background:white;position:absolute;width:2px;height:125%;bottom:0;left:0;transform-origin:bottom center;transform:rotate(45deg)}.decorator .decorator_close:after{content:"";background:white;position:absolute;width:2px;height:125%;bottom:0;right:0;transform-origin:bottom center;transform:rotate(-45deg)}\n',""]),t.default=o},function(e,t,n){"use strict";n.r(t),n.d(t,"Windows",(function(){return A})),n.d(t,"Window",(function(){return N})),n.d(t,"options",(function(){return D}));var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=n(2);n(5);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(s,e);var t,n,r,i=h(s);function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={full:!1},t.onResizeStart=t.onResizeStart.bind(y(t)),t.toggle=t.toggle.bind(y(t)),t.onStart=t.onStart.bind(y(t));var n=t.props.data;t.options=void 0===n.options?{}:n.options,t.resizable=!1!==t.options.resizable,t.size=void 0!==t.options.size?t.options.size:null,t.minSize=void 0!==t.options.minSize?t.options.minSize:null!==t.size?t.size:[300,300];return t.sizableOptions={width:t.minSize[0],height:t.minSize[1],minConstraints:t.minSize,onResizeStart:t.onResizeStart,resizeHandles:!1===t.resizable?[]:void 0!==t.options.direction?t.options.direction:["se"],style:f({position:"absolute"},function(){var e=function(e){return void 0===n[e]?"100px":"function"==typeof n[e]?n[e]():n[e]};if("function"==typeof n.position)return n.position();if(!0===n.center){var r=document.querySelector(".windows"),o=(null===t.size?t.minSize:t.size,function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=(!0===e?r.offsetWidth:r.offsetHeight)/2-t.size[!0===e?0:1]/2;return(n<0?0:n)+"px"});return{left:o(),top:o(!1)}}return{left:e("left"),top:e("top")}}())},!1===t.resizable&&(t.sizableOptions.maxConstraints=t.sizableOptions.minConstraints),null!==t.size&&(t.sizableOptions.width=t.size[0],t.sizableOptions.height=t.size[1]),t.ref=o.a.createRef(),t}return t=s,(n=[{key:"onResizeStart",value:function(e){e.preventDefault()}},{key:"toggle",value:function(){this.setState({full:!this.state.full})}},{key:"getBaseActions",value:function(){var e=f(f({},this.props),{},{toggle:this.toggle,resizable:this.resizable,minimize:this.props.minimize});return e.actions=this.getExtraActions(e),e}},{key:"getExtraActions",value:function(e){return void 0!==e.data.actions?e.data.actions(e):[]}},{key:"getBaseWindow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getBaseActions();return o.a.createElement("div",{className:"window",style:e.style},o.a.createElement("div",{className:"decorator"},o.a.createElement("span",{className:"title"},e.data.title),this.getExtraActions(e),!1===this.resizable?null:o.a.createElement("span",{className:"decorator_toggle nodrag",onClick:e.toggle}),o.a.createElement("span",{className:"decorator_close nodrag",onClick:e.onClose})),o.a.createElement("div",{className:"window_content"},e.children))}},{key:"renderInnerWindow",value:function(){return void 0===this.props.decorator?this.getBaseWindow():this.props.decorator(this.getBaseActions())}},{key:"onStart",value:function(e){if(null!==e.target.closest(".nodrag"))return!1;this.props.setActive()}},{key:"render",value:function(){var e="react-draggable window_container";!0===this.state.full&&(e+=" fullscreen"),!0===this.props.active&&(e+=" window_active"),!0===this.props.minimized&&(e+=" window_minimized");var t=f({},this.sizableOptions);return void 0!==this.props.order&&(t.style.zIndex=this.props.order),o.a.createElement(a.a,{cancel:".react-resizable-handle, .nodrag",onStart:this.onStart,defaultClassName:e,bounds:void 0!==this.options.bounds?this.options.bounds:".dashboard"},o.a.createElement(c.ResizableBox,u({},this.sizableOptions,{id:this.props.data.uuid}),this.renderInnerWindow()))}}])&&d(t.prototype,n),r&&d(t,r),s}(o.a.Component);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(a,e);var t,n,r,i=_(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={windows:{},active:null},t.windowStyle={border:"1px solid #e1e1e1",height:"100%",width:"100%",background:"white",borderRadius:"2px"},t.onWindowClose=t.onWindowClose.bind(C(t)),t.externalActive=void 0!==t.props.active&&void 0!==t.props.setActive,t.minimize=t.minimize.bind(C(t)),t}return t=a,(n=[{key:"onWindowClose",value:function(e){void 0!==this.props.onClose&&this.props.onClose(e)}},{key:"toggleActive",value:function(e){if(!0===this.externalActive)return this.props.setActive(e);this.setState({active:e})}},{key:"minimize",value:function(e){this.props.minimize(e)}},{key:"render",value:function(){var e=this,t=!0===this.externalActive?this.props.active:this.state.active;return o.a.createElement("div",{className:"windows"},void 0!==this.props.dashboard?this.props.dashboard:null,Object.keys(this.props.windows).map((function(n){var r=e.props.windows[n],i=e.props.decorator;i=void 0===i?r.decorator:i;var a=void 0;return void 0!==e.props.order&&(a=e.props.order.indexOf(n)+1),o.a.createElement(g,{key:n,active:t===n,setActive:function(){return e.toggleActive(n)},data:x(x({},r),{},{uuid:n}),style:e.windowStyle,order:a,minimize:e.minimize,minimized:-1!==(e.props.minimized||[]).indexOf(n),onClose:function(){return e.onWindowClose(n)},decorator:i},r.component)})))}}])&&z(t.prototype,n),r&&z(t,r),a}(o.a.Component),R=n(4),A=E,N=g,D=n.n(R).a}])}));