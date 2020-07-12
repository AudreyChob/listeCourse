function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function asyncGeneratorStep(e,n,t,r,i,a,o){try{var c=e[a](o),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){asyncGeneratorStep(a,r,i,o,c,"next",e)}function c(e){asyncGeneratorStep(a,r,i,o,c,"throw",e)}o(void 0)}))}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return u})),t.d(n,"e",(function(){return c}));var r={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var n=this.getEngine();if(n){var t=this.isCapacitor()?e.style.toUpperCase():e.style;n.impact({style:t})}},notification:function(e){var n=this.getEngine();if(n){var t=this.isCapacitor()?e.style.toUpperCase():e.style;n.notification({style:t})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=function(){r.selection()},a=function(){r.selectionStart()},o=function(){r.selectionChanged()},c=function(){r.selectionEnd()},u=function(e){r.impact(e)}},"6i10":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,n,t){var r=e*n/t-e+"ms",i=2*Math.PI*n/t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,n,t){var r=n/t,i=e*r-e+"ms",a=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,n,t){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":e*n/t-e+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,n,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":e*n/t-e+"ms"}}}}}},EnSQ:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("fXoL"),i=function(){var e=function(){function e(){_classCallCheck(this,e),this.messages=[{fromName:"Matt Chorsey",subject:"New event: Trip to Vegas",date:"9:32 AM",id:0,read:!1},{fromName:"Lauren Ruthford",subject:"Long time no chat",date:"6:12 AM",id:1,read:!1},{fromName:"Jordan Firth",subject:"Report Results",date:"4:55 AM",id:2,read:!1},{fromName:"Bill Thomas",subject:"The situation",date:"Yesterday",id:3,read:!1},{fromName:"Joanne Pollan",subject:"Updated invitation: Swim lessons",date:"Yesterday",id:4,read:!1},{fromName:"Andrea Cornerston",subject:"Last minute ask",date:"Yesterday",id:5,read:!1},{fromName:"Moe Chamont",subject:"Family Calendar - Version 1",date:"Last Week",id:6,read:!1},{fromName:"Kelly Richardson",subject:"Placeholder Headhots",date:"Last Week",id:7,read:!1}]}return _createClass(e,[{key:"getMessages",value:function(){return this.messages}},{key:"getMessageById",value:function(e){return this.messages[e]}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=r.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},NKIX:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("QX1p"),i=t("ItpF"),a=t("2c9M"),o=function(e,n){var t,o,c=function(e,r,i){if("undefined"!=typeof document){var a=document.elementFromPoint(e,r);a&&n(a)?a!==t&&(s(),u(a,i)):s()}},u=function(e,n){t=e,o||(o=t);var i=t;Object(r.n)((function(){return i.classList.add("ion-activated")})),n()},s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t){var n=t;Object(r.n)((function(){return n.classList.remove("ion-activated")})),e&&o!==t&&t.click(),t=void 0}};return Object(i.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:function(e){return c(e.currentX,e.currentY,a.a)},onMove:function(e){return c(e.currentX,e.currentY,a.b)},onEnd:function(){s(!0),Object(a.e)(),o=void 0}})}},NqGI:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r,i,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return",n.attachViewToDom(t,r,a,i));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r,i&&i.forEach((function(e){return o.classList.add(e)})),a&&Object.assign(o,a),t.appendChild(o),e.t0=o.componentOnReady,!e.t0){e.next=12;break}return e.next=12,o.componentOnReady();case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(n,t,r,i,a){return e.apply(this,arguments)}}(),i=function(e,n){if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},hcCc:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return c}));var r=function(e,n){return null!==n.closest(e)},i=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-"+e,!0):void 0},a=function(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return n[e]=!0})),n},o=/^[a-z][a-z0-9+\-.]*:/,c=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r,i){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n||"#"===n[0]||o.test(n)){e.next=4;break}if(!(a=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=t&&t.preventDefault(),a.push(n,r,i)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r,i){return e.apply(this,arguments)}}()}}]);