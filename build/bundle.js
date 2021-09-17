var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function l(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(){return d("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e,n){const r=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&r.add(t[e].__value);return n||r.delete(e),Array.from(r)}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e){t.value=null==e?"":e}function b(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}t.selectedIndex=-1}function I(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let T;function E(t){T=t}const S=[],k=[],A=[],N=[],C=Promise.resolve();let R=!1;function D(t){A.push(t)}let O=!1;const x=new Set;function L(){if(!O){O=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];E(e),P(e.$$)}for(E(null),S.length=0;k.length;)k.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];x.has(e)||(x.add(e),e())}A.length=0}while(S.length);for(;N.length;)N.pop()();R=!1,O=!1,x.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const M=new Set;let U;function F(t,e){t&&t.i&&(M.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),U.c.push((()=>{M.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function j(t){t&&t.c()}function q(t,n,s,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=t.$$;a&&a.m(n,s),o||D((()=>{const n=c.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(D)}function $(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(S.push(t),R||(R=!0,C.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,i,s,o,a,u,l,h=[-1]){const d=T;E(e);const f=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:i.context||[]),callbacks:n(),dirty:h,skip_bound:!1,root:i.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=s?s(e,i.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),p&&B(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();i.intro&&F(e.$$.fragment),q(e,i.target,i.anchor,i.customElement),L()}E(d)}class z{$destroy(){$(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var K=function(t,e){return(K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function G(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function W(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function X(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function Q(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function J(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Y(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Z={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e}(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=t[n++]))<<12|(63&(a=t[n++]))<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{s=t[n++];var a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0,a=++i<t.length?n[t.charAt(i)]:64,c=++i<t.length?n[t.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var u=s<<2|o>>4;if(r.push(u),64!==a){var l=o<<4&240|a>>2;if(r.push(l),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},tt=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function et(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function nt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function rt(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function it(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function st(){var t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var ot=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,at.prototype.create),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}K(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e}(Error),at=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?ct(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new ot(i,a,r);return c},t}();function ct(t,e){return t.replace(ut,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var ut=/\{\$([^}]+)}/g;function lt(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],c=e[o];if(ht(a)&&ht(c)){if(!lt(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){o=l[u];if(!n.includes(o))return!1}return!0}function ht(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function dt(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r];n(s[0],s[1])}return e.length?"&"+e.join("&"):""}function ft(t){var e={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function pt(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}var gt=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"==typeof t[i])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=mt),void 0===r.error&&(r.error=mt),void 0===r.complete&&(r.complete=mt);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function mt(){}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function yt(t){return t&&t._delegate?t._delegate:t}var vt=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),wt="[DEFAULT]",_t=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new tt;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:wt})}catch(t){}try{for(var r=Q(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=J(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:c});a.resolve(u)}catch(t){}}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=wt),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return W(this,void 0,void 0,(function(){var t;return X(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Y(Y([],J(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),J(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=wt),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=wt),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=Q(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var u=J(c.value,2),l=u[0],h=u[1];s===this.normalizeInstanceIdentifier(l)&&h.resolve(o)}}catch(t){e={error:t}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var s=Q(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(t,e)}catch(t){}}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,e===wt?void 0:e),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(t){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=wt),this.component?this.component.multipleInstances?t:wt:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var bt,It,Tt=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new _t(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function Et(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(It||(It={}));var St={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},kt=It.INFO,At=((bt={})[It.DEBUG]="log",bt[It.VERBOSE]="log",bt[It.INFO]="info",bt[It.WARN]="warn",bt[It.ERROR]="error",bt),Nt=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=At[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,Et(["["+i+"]  "+t.name+":"],n))}},Ct=function(){function t(t){this.name=t,this._logLevel=kt,this._logHandler=Nt,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in It))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?St[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Et([this,It.DEBUG],t)),this._logHandler.apply(this,Et([this,It.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Et([this,It.VERBOSE],t)),this._logHandler.apply(this,Et([this,It.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Et([this,It.INFO],t)),this._logHandler.apply(this,Et([this,It.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Et([this,It.WARN],t)),this._logHandler.apply(this,Et([this,It.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Et([this,It.ERROR],t)),this._logHandler.apply(this,Et([this,It.ERROR],t))},t}();
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Rt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Dt="@firebase/app",Ot=new Ct("@firebase/app"),xt="[DEFAULT]",Lt={[Dt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Pt=new Map,Mt=new Map;function Ut(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ft(t){const e=t.name;if(Mt.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;Mt.set(e,t);for(const e of Pt.values())Ut(e,t);return!0}function Vt(t,e){return t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const jt=new at("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class qt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const $t="9.0.0";function Bt(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:xt,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw jt.create("bad-app-name",{appName:String(r)});const i=Pt.get(r);if(i){if(lt(t,i.options)&&lt(n,i.config))return i;throw jt.create("duplicate-app",{appName:r})}const s=new Tt(r);for(const t of Mt.values())s.addComponent(t);const o=new qt(t,n,s);return Pt.set(r,o),o}function Ht(t="[DEFAULT]"){const e=Pt.get(t);if(!e)throw jt.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let i=null!==(r=Lt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ot.warn(t.join(" "))}Ft(new vt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Kt;Ft(new vt("platform-logger",(t=>new Rt(t)),"PRIVATE")),zt(Dt,"0.7.0",Kt),zt("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
zt("firebase","9.0.2","app");
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
var Gt=function(t,e){return(Gt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function Wt(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var Xt,Qt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Jt=Jt||{},Yt=Qt||self;function Zt(){}function te(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ee(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ne="closure_uid_"+(1e9*Math.random()>>>0),re=0;function ie(t,e,n){return t.call.apply(t.bind,arguments)}function se(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function oe(t,e,n){return(oe=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ie:se).apply(null,arguments)}function ae(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ce(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function ue(){this.s=this.s,this.o=this.o}var le={};ue.prototype.s=!1,ue.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,ne)&&t[ne]||(t[ne]=++re)}(this);delete le[t]}},ue.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var he=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},de=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function fe(t){return Array.prototype.concat.apply([],arguments)}function pe(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function ge(t){return/^[\s\xa0]*$/.test(t)}var me,ye=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ve(t,e){return-1!=t.indexOf(e)}function we(t,e){return t<e?-1:t>e?1:0}t:{var _e=Yt.navigator;if(_e){var be=_e.userAgent;if(be){me=be;break t}}me=""}function Ie(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function Te(t){var e={};for(var n in t)e[n]=t[n];return e}var Ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<Ee.length;s++)n=Ee[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ke(t){return ke[" "](t),t}ke[" "]=Zt;var Ae,Ne,Ce=ve(me,"Opera"),Re=ve(me,"Trident")||ve(me,"MSIE"),De=ve(me,"Edge"),Oe=De||Re,xe=ve(me,"Gecko")&&!(ve(me.toLowerCase(),"webkit")&&!ve(me,"Edge"))&&!(ve(me,"Trident")||ve(me,"MSIE"))&&!ve(me,"Edge"),Le=ve(me.toLowerCase(),"webkit")&&!ve(me,"Edge");function Pe(){var t=Yt.document;return t?t.documentMode:void 0}t:{var Me="",Ue=(Ne=me,xe?/rv:([^\);]+)(\)|;)/.exec(Ne):De?/Edge\/([\d\.]+)/.exec(Ne):Re?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ne):Le?/WebKit\/(\S+)/.exec(Ne):Ce?/(?:Version)[ \/]?(\S+)/.exec(Ne):void 0);if(Ue&&(Me=Ue?Ue[1]:""),Re){var Fe=Pe();if(null!=Fe&&Fe>parseFloat(Me)){Ae=String(Fe);break t}}Ae=Me}var Ve,je={};function qe(){return function(t){var e=je;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=ye(String(Ae)).split("."),n=ye("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var s=e[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=we(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||we(0==s[2].length,0==o[2].length)||we(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(Yt.document&&Re){var $e=Pe();Ve=$e||(parseInt(Ae,10)||void 0)}else Ve=void 0;var Be=Ve,He=function(){if(!Yt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Yt.addEventListener("test",Zt,e),Yt.removeEventListener("test",Zt,e)}catch(t){}return t}();function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ke(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xe){t:{try{ke(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ge[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ke.Z.h.call(this)}}ze.prototype.h=function(){this.defaultPrevented=!0},ce(Ke,ze);var Ge={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),Xe=0;function Qe(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++Xe,this.ca=this.fa=!1}function Je(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ye(t){this.src=t,this.g={},this.h=0}function Ze(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=he(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Je(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function tn(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}Ye.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=tn(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Qe(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var en="closure_lm_"+(1e6*Math.random()|0),nn={};function rn(t,e,n,r,i){if(r&&r.once)return on(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)rn(t,e[s],n,r,i);return null}return n=fn(n),t&&t[We]?t.N(e,n,ee(r)?!!r.capture:!!r,i):sn(t,e,n,!1,r,i)}function sn(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ee(i)?!!i.capture:!!i,a=hn(t);if(a||(t[en]=a=new Ye(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=ln;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)He||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(un(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function on(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)on(t,e[s],n,r,i);return null}return n=fn(n),t&&t[We]?t.O(e,n,ee(r)?!!r.capture:!!r,i):sn(t,e,n,!0,r,i)}function an(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)an(t,e[s],n,r,i);else r=ee(r)?!!r.capture:!!r,n=fn(n),t&&t[We]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=tn(s=t.g[e],n,r,i))&&(Je(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=hn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tn(e,n,r,i)),(n=-1<t?e[t]:null)&&cn(n))}function cn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[We])Ze(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(un(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=hn(e))?(Ze(n,t),0==n.h&&(n.src=null,e[en]=null)):Je(t)}}}function un(t){return t in nn?nn[t]:nn[t]="on"+t}function ln(t,e){if(t.ca)t=!0;else{e=new Ke(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&cn(t),t=n.call(r,e)}return t}function hn(t){return(t=t[en])instanceof Ye?t:null}var dn="__closure_events_fn_"+(1e9*Math.random()>>>0);function fn(t){return"function"==typeof t?t:(t[dn]||(t[dn]=function(e){return t.handleEvent(e)}),t[dn])}function pn(){ue.call(this),this.i=new Ye(this),this.P=this,this.I=null}function gn(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;Se(e=new ze(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=mn(o,r,!0,e)&&i}if(i=mn(o=e.g=t,r,!0,e)&&i,i=mn(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=mn(o=e.g=n[s],r,!1,e)&&i}function mn(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ze(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}ce(pn,ue),pn.prototype[We]=!0,pn.prototype.removeEventListener=function(t,e,n,r){an(this,t,e,n,r)},pn.prototype.M=function(){if(pn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Je(n[r]);delete e.g[t],e.h--}}this.I=null},pn.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},pn.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var yn=Yt.JSON.stringify;function vn(){var t=kn,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var wn,_n=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=bn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),bn=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new In}),(function(t){return t.reset()})),In=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function Tn(t){Yt.setTimeout((function(){throw t}),0)}function En(t,e){wn||function(){var t=Yt.Promise.resolve(void 0);wn=function(){t.then(An)}}(),Sn||(wn(),Sn=!0),kn.add(t,e)}var Sn=!1,kn=new _n;function An(){for(var t;t=vn();){try{t.h.call(t.g)}catch(t){Tn(t)}var e=bn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sn=!1}function Nn(t,e){pn.call(this),this.h=t||1,this.g=e||Yt,this.j=oe(this.kb,this),this.l=Date.now()}function Cn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Rn(t,e,n){if("function"==typeof t)n&&(t=oe(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=oe(t.handleEvent,t)}return 2147483647<Number(e)?-1:Yt.setTimeout(t,e||0)}function Dn(t){t.g=Rn((function(){t.g=null,t.i&&(t.i=!1,Dn(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}ce(Nn,pn),(Xt=Nn.prototype).da=!1,Xt.S=null,Xt.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),gn(this,"tick"),this.da&&(Cn(this),this.start()))}},Xt.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Xt.M=function(){Nn.Z.M.call(this),Cn(this),delete this.g};var On=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}Gt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Dn(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(Yt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(ue);function xn(t){ue.call(this),this.h=t,this.g={}}ce(xn,ue);var Ln=[];function Pn(t,e,n,r){Array.isArray(n)||(n&&(Ln[0]=n.toString()),n=Ln);for(var i=0;i<n.length;i++){var s=rn(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Mn(t){Ie(t.g,(function(t,e){this.g.hasOwnProperty(e)&&cn(t)}),t),t.g={}}function Un(){this.g=!0}function Fn(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return yn(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}xn.prototype.M=function(){xn.Z.M.call(this),Mn(this)},xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Un.prototype.Aa=function(){this.g=!1},Un.prototype.info=function(){};var Vn={},jn=null;function qn(){return jn=jn||new pn}function $n(t){ze.call(this,Vn.Ma,t)}function Bn(t){var e=qn();gn(e,new $n(e,t))}function Hn(t,e){ze.call(this,Vn.STAT_EVENT,t),this.stat=e}function zn(t){var e=qn();gn(e,new Hn(e,t))}function Kn(t,e){ze.call(this,Vn.Na,t),this.size=e}function Gn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Yt.setTimeout((function(){t()}),e)}Vn.Ma="serverreachability",ce($n,ze),Vn.STAT_EVENT="statevent",ce(Hn,ze),Vn.Na="timingevent",ce(Kn,ze);var Wn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qn(){}function Jn(t){return t.h||(t.h=t.i())}function Yn(){}Qn.prototype.h=null;var Zn,tr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function er(){ze.call(this,"d")}function nr(){ze.call(this,"c")}function rr(){}function ir(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new xn(this),this.P=or,t=Oe?125:void 0,this.W=new Nn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new sr}function sr(){this.i=null,this.g="",this.h=!1}ce(er,ze),ce(nr,ze),ce(rr,Qn),rr.prototype.g=function(){return new XMLHttpRequest},rr.prototype.i=function(){return{}},Zn=new rr;var or=45e3,ar={},cr={};function ur(t,e,n){t.K=1,t.v=Or(kr(e)),t.s=n,t.U=!0,lr(t,null)}function lr(t,e){t.F=Date.now(),pr(t),t.A=kr(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),zr(n.h,"t",r),t.C=0,n=t.l.H,t.h=new sr,t.g=Ki(t.l,n?e:null,!t.s),0<t.O&&(t.L=new On(oe(t.Ia,t,t.g),t.O)),Pn(t.V,t.g,"readystatechange",t.gb),e=t.H?Te(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Bn(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function hr(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function dr(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if((r=fr(t,n))==cr){4==e&&(t.o=4,zn(14),i=!1),Fn(t.j,t.m,null,"[Incomplete Response]");break}if(r==ar){t.o=4,zn(15),Fn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Fn(t.j,t.m,r,null),wr(t,r)}hr(t)&&r!=cr&&r!=ar&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,zn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fi(e),e.L=!0,zn(11))):(Fn(t.j,t.m,n,"[Invalid Chunked Response]"),vr(t),yr(t))}function fr(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?cr:(n=Number(e.substring(n,r)),isNaN(n)?ar:(r+=1)+n>e.length?cr:(e=e.substr(r,n),t.C=r+n,e))}function pr(t){t.Y=Date.now()+t.P,gr(t,t.P)}function gr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Gn(oe(t.eb,t),e)}function mr(t){t.B&&(Yt.clearTimeout(t.B),t.B=null)}function yr(t){0==t.l.G||t.I||qi(t.l,t)}function vr(t){mr(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Cn(t.W),Mn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wr(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Yr(n.i,t)))if(n.I=t.N,!t.J&&Yr(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(s){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ji(n),Ci(n)}Ui(n),zn(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Gn(oe(n.ab,n),6e3));if(1>=Jr(n.i)&&n.ka){try{n.ka()}catch(s){}n.ka=void 0}}else Bi(n,11)}else if((t.J||n.g==t)&&ji(n),!ge(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var s=i[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(ve(l,"spdy")||ve(l,"quic")||ve(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Zr(h,h.h),h.h=null))}if(r.D){var d=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,Dr(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=t;if((r=n).oa=zi(r,r.H?r.la:null,r.W),f.J){ti(r.i,f);var p=f,g=r.K;g&&p.setTimeout(g),p.B&&(mr(p),pr(p)),r.g=f}else Mi(r);0<n.l.length&&Oi(n)}else"stop"!=s[0]&&"close"!=s[0]||Bi(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?Bi(n,7):Ni(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}Bn(4)}catch(s){}}function _r(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(te(t)||"string"==typeof t)de(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(te(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(te(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function br(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof br)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ir(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Tr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Tr(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Tr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Xt=ir.prototype).setTimeout=function(t){this.P=t},Xt.gb=function(t){t=t.target;var e=this.L;e&&3==Ti(t)?e.l():this.Ia(t)},Xt.Ia=function(t){try{if(t==this.g)t:{var e=Ti(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||Oe||this.g&&(this.h.h||this.g.ga()||Ei(this.g)))){this.I||4!=e||7==n||Bn(8==n||0>=r?3:2),mr(this);var i=this.g.ba();this.N=i;e:if(hr(this)){var s=Ei(this.g);t="";var o=s.length,a=4==Ti(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){vr(this),yr(this);var c="";break e}this.h.i=new Yt.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var u,l=this.g;if((u=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ge(u)){var h=u;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,zn(12),vr(this),yr(this);break t}Fn(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wr(this,i)}this.U?(dr(this,e,c),Oe&&this.i&&3==e&&(Pn(this.V,this.W,"tick",this.fb),this.W.start())):(Fn(this.j,this.m,c,null),wr(this,c)),4==e&&vr(this),this.i&&!this.I&&(4==e?qi(this.l,this):(this.i=!1,pr(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,zn(12)):(this.o=0,zn(13)),vr(this),yr(this)}}}catch(e){}},Xt.fb=function(){if(this.g){var t=Ti(this.g),e=this.g.ga();this.C<e.length&&(mr(this),dr(this,t,e),this.i&&4!=t&&pr(this))}},Xt.cancel=function(){this.I=!0,vr(this)},Xt.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Bn(3),zn(17)),vr(this),this.o=2,yr(this)):gr(this,this.Y-t)},(Xt=br.prototype).R=function(){Ir(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Xt.T=function(){return Ir(this),this.g.concat()},Xt.get=function(t,e){return Tr(this.h,t)?this.h[t]:e},Xt.set=function(t,e){Tr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Xt.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Er=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Sr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Sr){this.g=void 0!==e?e:t.g,Ar(this,t.j),this.s=t.s,Nr(this,t.i),Cr(this,t.m),this.l=t.l,e=t.h;var n=new qr;n.i=e.i,e.g&&(n.g=new br(e.g),n.h=e.h),Rr(this,n),this.o=t.o}else t&&(n=String(t).match(Er))?(this.g=!!e,Ar(this,n[1]||"",!0),this.s=xr(n[2]||""),Nr(this,n[3]||"",!0),Cr(this,n[4]),this.l=xr(n[5]||"",!0),Rr(this,n[6]||"",!0),this.o=xr(n[7]||"")):(this.g=!!e,this.h=new qr(null,this.g))}function kr(t){return new Sr(t)}function Ar(t,e,n){t.j=n?xr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nr(t,e,n){t.i=n?xr(e,!0):e}function Cr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rr(t,e,n){e instanceof qr?(t.h=e,function(t,e){e&&!t.j&&($r(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Br(this,e),zr(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Lr(e,Vr)),t.h=new qr(e,t.g))}function Dr(t,e,n){t.h.set(e,n)}function Or(t){return Dr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lr(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Pr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Pr(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Sr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lr(e,Mr,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Lr(e,Mr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Lr(n,"/"==n.charAt(0)?Fr:Ur,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lr(n,jr)),t.join("")};var Mr=/[#\/\?@]/g,Ur=/[#\?:]/g,Fr=/[#\?]/g,Vr=/[#\?@]/g,jr=/#/g;function qr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $r(t){t.g||(t.g=new br,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Br(t,e){$r(t),e=Kr(t,e),Tr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Tr((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ir(t)))}function Hr(t,e){return $r(t),e=Kr(t,e),Tr(t.g.h,e)}function zr(t,e,n){Br(t,e),0<n.length&&(t.i=null,t.g.set(Kr(t,e),pe(n)),t.h+=n.length)}function Kr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Xt=qr.prototype).add=function(t,e){$r(this),this.i=null,t=Kr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Xt.forEach=function(t,e){$r(this),this.g.forEach((function(n,r){de(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Xt.T=function(){$r(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},Xt.R=function(t){$r(this);var e=[];if("string"==typeof t)Hr(this,t)&&(e=fe(e,this.g.get(Kr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=fe(e,t[n])}return e},Xt.set=function(t,e){return $r(this),this.i=null,Hr(this,t=Kr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Xt.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Xt.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var Gr=function(t,e){this.h=t,this.g=e};function Wr(t){this.l=t||Xr,Yt.PerformanceNavigationTiming?t=0<(t=Yt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Yt.g&&Yt.g.Ea&&Yt.g.Ea()&&Yt.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xr=10;function Qr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Jr(t){return t.h?1:t.g?t.g.size:0}function Yr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Zr(t,e){t.g?t.g.add(e):t.h=e}function ti(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ei(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=Wt(t.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return pe(t.i)}function ni(){}function ri(){this.g=new ni}function ii(t,e,n){var r=n||"";try{_r(t,(function(t,n){var i=t;ee(t)&&(i=yn(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function si(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function oi(t){this.l=t.$b||null,this.j=t.ib||!1}function ai(t,e){pn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ci,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Wr.prototype.cancel=function(){var t,e;if(this.i=ei(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=Wt(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},ni.prototype.stringify=function(t){return Yt.JSON.stringify(t,void 0)},ni.prototype.parse=function(t){return Yt.JSON.parse(t,void 0)},ce(oi,Qn),oi.prototype.g=function(){return new ai(this.l,this.j)},oi.prototype.i=function(t){return function(){return t}}({}),ce(ai,pn);var ci=0;function ui(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function li(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hi(t)}function hi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Xt=ai.prototype).open=function(t,e){if(this.readyState!=ci)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hi(this)},Xt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Yt).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Xt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,li(this)),this.readyState=ci},Xt.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hi(this)),this.g&&(this.readyState=3,hi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Yt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ui(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Xt.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?li(this):hi(this),3==this.readyState&&ui(this)}},Xt.Ua=function(t){this.g&&(this.response=this.responseText=t,li(this))},Xt.Ta=function(t){this.g&&(this.response=t,li(this))},Xt.ha=function(){this.g&&li(this)},Xt.setRequestHeader=function(t,e){this.v.append(t,e)},Xt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Xt.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var di=Yt.JSON.parse;function fi(t){pn.call(this),this.headers=new br,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pi,this.K=this.L=!1}ce(fi,pn);var pi="",gi=/^https?$/i,mi=["POST","PUT"];function yi(t){return"content-type"==t.toLowerCase()}function vi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wi(t),bi(t)}function wi(t){t.D||(t.D=!0,gn(t,"complete"),gn(t,"error"))}function _i(t){if(t.h&&void 0!==Jt&&(!t.C[1]||4!=Ti(t)||2!=t.ba()))if(t.v&&4==Ti(t))Rn(t.Fa,0,t);else if(gn(t,"readystatechange"),4==Ti(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.H).match(Er)[1]||null;if(!s&&Yt.self&&Yt.self.location){var o=Yt.self.location.protocol;s=o.substr(0,o.length-1)}i=!gi.test(s?s.toLowerCase():"")}e=i}if(e)gn(t,"complete"),gn(t,"success");else{t.m=6;try{var a=2<Ti(t)?t.g.statusText:""}catch(t){a=""}t.j=a+" ["+t.ba()+"]",wi(t)}}finally{bi(t)}}}function bi(t,e){if(t.g){Ii(t);var n=t.g,r=t.C[0]?Zt:null;t.g=null,t.C=null,e||gn(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Ii(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Yt.clearTimeout(t.A),t.A=null)}function Ti(t){return t.g?t.g.readyState:0}function Ei(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case pi:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Si(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return Ie(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Dr(t,e,n))}function ki(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ai(t){this.za=0,this.l=[],this.h=new Un,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ki("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ki("baseRetryDelayMs",5e3,t),this.$a=ki("retryDelaySeedMs",1e4,t),this.Ya=ki("forwardChannelMaxRetries",2,t),this.ra=ki("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Wr(t&&t.concurrentRequestLimit),this.Ca=new ri,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ni(t){if(Ri(t),3==t.G){var e=t.V++,n=kr(t.F);Dr(n,"SID",t.J),Dr(n,"RID",e),Dr(n,"TYPE","terminate"),Li(t,n),(e=new ir(t,t.h,e,void 0)).K=2,e.v=Or(kr(n)),n=!1,Yt.navigator&&Yt.navigator.sendBeacon&&(n=Yt.navigator.sendBeacon(e.v.toString(),"")),!n&&Yt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ki(e.l,null),e.g.ea(e.v)),e.F=Date.now(),pr(e)}Hi(t)}function Ci(t){t.g&&(Fi(t),t.g.cancel(),t.g=null)}function Ri(t){Ci(t),t.u&&(Yt.clearTimeout(t.u),t.u=null),ji(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Yt.clearTimeout(t.m),t.m=null)}function Di(t,e){t.l.push(new Gr(t.Za++,e)),3==t.G&&Oi(t)}function Oi(t){Qr(t.i)||t.m||(t.m=!0,En(t.Ha,t),t.C=0)}function xi(t,e){var n;n=e?e.m:t.V++;var r=kr(t.F);Dr(r,"SID",t.J),Dr(r,"RID",n),Dr(r,"AID",t.U),Li(t,r),t.o&&t.s&&Si(r,t.o,t.s),n=new ir(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Pi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Zr(t.i,n),ur(n,r,e)}function Li(t,e){t.j&&_r({},(function(t,n){Dr(e,n,t)}))}function Pi(t,e,n){n=Math.min(t.l.length,n);var r=t.j?oe(t.j.Oa,t.j,t):null;t:for(var i=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(0>(u-=s))s=Math.max(0,i[c].h-100),a=!1;else try{ii(l,o,"req"+u+"_")}catch(t){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function Mi(t){t.g||t.u||(t.Y=1,En(t.Ga,t),t.A=0)}function Ui(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Gn(oe(t.Ga,t),$i(t,t.A)),t.A++,!0)}function Fi(t){null!=t.B&&(Yt.clearTimeout(t.B),t.B=null)}function Vi(t){t.g=new ir(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=kr(t.oa);Dr(e,"RID","rpc"),Dr(e,"SID",t.J),Dr(e,"CI",t.N?"0":"1"),Dr(e,"AID",t.U),Li(t,e),Dr(e,"TYPE","xmlhttp"),t.o&&t.s&&Si(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Or(kr(e)),n.s=null,n.U=!0,lr(n,t)}function ji(t){null!=t.v&&(Yt.clearTimeout(t.v),t.v=null)}function qi(t,e){var n=null;if(t.g==e){ji(t),Fi(t),t.g=null;var r=2}else{if(!Yr(t.i,e))return;n=e.D,ti(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;gn(r=qn(),new Kn(r,n,e,i)),Oi(t)}else Mi(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Jr(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Gn(oe(t.Ha,t,e),$i(t,t.C)),t.C++,0)))}(t,e)||2==r&&Ui(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Bi(t,5);break;case 4:Bi(t,10);break;case 3:Bi(t,6);break;default:Bi(t,2)}}function $i(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Bi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=oe(t.jb,t);n||(n=new Sr("//www.google.com/images/cleardot.gif"),Yt.location&&"http"==Yt.location.protocol||Ar(n,"https"),Or(n)),function(t,e){var n=new Un;if(Yt.Image){var r=new Image;r.onload=ae(si,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ae(si,n,r,"TestLoadImage: error",!1,e),r.onabort=ae(si,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ae(si,n,r,"TestLoadImage: timeout",!1,e),Yt.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else zn(2);t.G=0,t.j&&t.j.va(e),Hi(t),Ri(t)}function Hi(t){t.G=0,t.I=-1,t.j&&(0==ei(t.i).length&&0==t.l.length||(t.i.i.length=0,pe(t.l),t.l.length=0),t.j.ua())}function zi(t,e,n){var r=function(t){return t instanceof Sr?kr(t):new Sr(t,void 0)}(n);if(""!=r.i)e&&Nr(r,e+"."+r.i),Cr(r,r.m);else{var i=Yt.location;r=function(t,e,n,r){var i=new Sr(null,void 0);return t&&Ar(i,t),e&&Nr(i,e),n&&Cr(i,n),r&&(i.l=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Ie(t.aa,(function(t,e){Dr(r,e,t)})),e=t.D,n=t.sa,e&&n&&Dr(r,e,n),Dr(r,"VER",t.ma),Li(t,r),r}function Ki(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new fi(new oi({ib:!0})):new fi(t.qa)).L=t.H,e}function Gi(){}function Wi(){if(Re&&!(10<=Number(Be)))throw Error("Environmental error: no available transport.")}function Xi(t,e){pn.call(this),this.g=new Ai(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ge(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ge(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Yi(this)}function Qi(t){er.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ji(){nr.call(this),this.status=1}function Yi(t){this.g=t}(Xt=fi.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Zn.g(),this.C=this.u?Jn(this.u):Jn(Zn),this.g.onreadystatechange=oe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void vi(this,t)}t=n||"";var i=new br(this.headers);r&&_r(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=yi,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Yt.FormData&&t instanceof Yt.FormData,!(0<=he(mi,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ii(this),0<this.B&&((this.K=function(t){return Re&&qe()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=oe(this.pa,this)):this.A=Rn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){vi(this,t)}},Xt.pa=function(){void 0!==Jt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,gn(this,"timeout"),this.abort(8))},Xt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,gn(this,"complete"),gn(this,"abort"),bi(this))},Xt.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bi(this,!0)),fi.Z.M.call(this)},Xt.Fa=function(){this.s||(this.F||this.v||this.l?_i(this):this.cb())},Xt.cb=function(){_i(this)},Xt.ba=function(){try{return 2<Ti(this)?this.g.status:-1}catch(t){return-1}},Xt.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Xt.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),di(e)}},Xt.Da=function(){return this.m},Xt.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Xt=Ai.prototype).ma=8,Xt.G=1,Xt.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Xt.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new ir(this,this.h,t,void 0),n=this.s;if(this.P&&(n?Se(n=Te(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=Pi(this,e,r),Dr(i=kr(this.F),"RID",t),Dr(i,"CVER",22),this.D&&Dr(i,"X-HTTP-Session-Id",this.D),Li(this,i),this.o&&n&&Si(i,this.o,n),Zr(this.i,e),this.Ra&&Dr(i,"TYPE","init"),this.ja?(Dr(i,"$req",r),Dr(i,"SID","null"),e.$=!0,ur(e,i,null)):ur(e,i,r),this.G=2}}else 3==this.G&&(t?xi(this,t):0==this.l.length||Qr(this.i)||xi(this))},Xt.Ga=function(){if(this.u=null,Vi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Gn(oe(this.bb,this),t)}},Xt.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,zn(10),Ci(this),Vi(this))},Xt.ab=function(){null!=this.v&&(this.v=null,Ci(this),Ui(this),zn(19))},Xt.jb=function(t){t?(this.h.info("Successfully pinged google.com"),zn(2)):(this.h.info("Failed to ping google.com"),zn(1))},(Xt=Gi.prototype).xa=function(){},Xt.wa=function(){},Xt.va=function(){},Xt.ua=function(){},Xt.Oa=function(){},Wi.prototype.g=function(t,e){return new Xi(t,e)},ce(Xi,pn),Xi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),En(oe(t.hb,t,e))),zn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=zi(t,null,t.W),Oi(t)},Xi.prototype.close=function(){Ni(this.g)},Xi.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Di(this.g,e)}else this.v?((e={}).__data__=yn(t),Di(this.g,e)):Di(this.g,t)},Xi.prototype.M=function(){this.g.j=null,delete this.j,Ni(this.g),delete this.g,Xi.Z.M.call(this)},ce(Qi,er),ce(Ji,nr),ce(Yi,Gi),Yi.prototype.xa=function(){gn(this.g,"a")},Yi.prototype.wa=function(t){gn(this.g,new Qi(t))},Yi.prototype.va=function(t){gn(this.g,new Ji(t))},Yi.prototype.ua=function(){gn(this.g,"b")},Wi.prototype.createWebChannel=Wi.prototype.g,Xi.prototype.send=Xi.prototype.u,Xi.prototype.open=Xi.prototype.m,Xi.prototype.close=Xi.prototype.close,Wn.NO_ERROR=0,Wn.TIMEOUT=8,Wn.HTTP_ERROR=6,Xn.COMPLETE="complete",Yn.EventType=tr,tr.OPEN="a",tr.CLOSE="b",tr.ERROR="c",tr.MESSAGE="d",pn.prototype.listen=pn.prototype.N,fi.prototype.listenOnce=fi.prototype.O,fi.prototype.getLastError=fi.prototype.La,fi.prototype.getLastErrorCode=fi.prototype.Da,fi.prototype.getStatus=fi.prototype.ba,fi.prototype.getResponseJson=fi.prototype.Qa,fi.prototype.getResponseText=fi.prototype.ga,fi.prototype.send=fi.prototype.ea;var Zi=Wn,ts=Xn,es=Vn,ns=10,rs=11,is=oi,ss=Yn,os=fi;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class as{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}as.UNAUTHENTICATED=new as(null),as.GOOGLE_CREDENTIALS=new as("google-credentials-uid"),as.FIRST_PARTY=new as("first-party-uid"),as.MOCK_USER=new as("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let cs="9.0.2";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const us=new Ct("@firebase/firestore");function ls(){return us.logLevel}function hs(t,...e){if(us.logLevel<=It.DEBUG){const n=e.map(ps);us.debug(`Firestore (${cs}): ${t}`,...n)}}function ds(t,...e){if(us.logLevel<=It.ERROR){const n=e.map(ps);us.error(`Firestore (${cs}): ${t}`,...n)}}function fs(t,...e){if(us.logLevel<=It.WARN){const n=e.map(ps);us.warn(`Firestore (${cs}): ${t}`,...n)}}function ps(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function gs(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw ds(e),new Error(e)}function ms(t,e){t||gs()}function ys(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const vs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ws extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _s{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bs{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class Is{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(as.UNAUTHENTICATED)))}shutdown(){}}class Ts{constructor(t){this.t=t,this.currentUser=as.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new _s;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _s,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{hs("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(hs("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _s)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(hs("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ms("string"==typeof e.accessToken),new bs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ms(null===t||"string"==typeof t),new as(t)}}class Es{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=as.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class Ss{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Es(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(as.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ks{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function As(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ks.T=-1;class Ns{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=As(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Cs(t,e){return t<e?-1:t>e?1:0}function Rs(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ds{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ws(vs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ws(vs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ws(vs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ws(vs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ds.fromMillis(Date.now())}static fromDate(t){return Ds.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ds(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Cs(this.nanoseconds,t.nanoseconds):Cs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Os{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Os(t)}static min(){return new Os(new Ds(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function xs(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ps(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ms{constructor(t,e,n){void 0===e?e=0:e>t.length&&gs(),void 0===n?n=t.length-e:n>t.length-e&&gs(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ms.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ms?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Us extends Ms{construct(t,e,n){return new Us(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ws(vs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Us(e)}static emptyPath(){return new Us([])}}const Fs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vs extends Ms{construct(t,e,n){return new Vs(t,e,n)}static isValidIdentifier(t){return Fs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vs.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Vs(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ws(vs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ws(vs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ws(vs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ws(vs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Vs(e)}static emptyPath(){return new Vs([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class js{constructor(t){this.fields=t,t.sort(Vs.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Rs(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qs{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new qs(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new qs(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Cs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qs.EMPTY_BYTE_STRING=new qs("");const $s=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bs(t){if(ms(!!t),"string"==typeof t){let e=0;const n=$s.exec(t);if(ms(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Hs(t.seconds),nanos:Hs(t.nanos)}}function Hs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function zs(t){return"string"==typeof t?qs.fromBase64String(t):qs.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ks(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Gs(t){const e=t.mapValue.fields.__previous_value__;return Ks(e)?Gs(e):e}function Ws(t){const e=Bs(t.mapValue.fields.__local_write_time__.timestampValue);return new Ds(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xs(t){return null==t}function Qs(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Js{constructor(t){this.path=t}static fromPath(t){return new Js(Us.fromString(t))}static fromName(t){return new Js(Us.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Us.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Us.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Js(new Us(t.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ks(t)?4:10:gs()}function Zs(t,e){const n=Ys(t);if(n!==Ys(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ws(t).isEqual(Ws(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Bs(t.timestampValue),r=Bs(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return zs(t.bytesValue).isEqual(zs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Hs(t.geoPointValue.latitude)===Hs(e.geoPointValue.latitude)&&Hs(t.geoPointValue.longitude)===Hs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Hs(t.integerValue)===Hs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Hs(t.doubleValue),r=Hs(e.doubleValue);return n===r?Qs(n)===Qs(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],Zs);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(xs(n)!==xs(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Zs(n[t],r[t])))return!1;return!0}(t,e);default:return gs()}}function to(t,e){return void 0!==(t.values||[]).find((t=>Zs(t,e)))}function eo(t,e){const n=Ys(t),r=Ys(e);if(n!==r)return Cs(n,r);switch(n){case 0:return 0;case 1:return Cs(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Hs(t.integerValue||t.doubleValue),r=Hs(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return no(t.timestampValue,e.timestampValue);case 4:return no(Ws(t),Ws(e));case 5:return Cs(t.stringValue,e.stringValue);case 6:return function(t,e){const n=zs(t),r=zs(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Cs(n[t],r[t]);if(0!==e)return e}return Cs(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Cs(Hs(t.latitude),Hs(e.latitude));return 0!==n?n:Cs(Hs(t.longitude),Hs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=eo(n[t],r[t]);if(e)return e}return Cs(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Cs(r[t],s[t]);if(0!==e)return e;const o=eo(n[r[t]],i[s[t]]);if(0!==o)return o}return Cs(r.length,s.length)}(t.mapValue,e.mapValue);default:throw gs()}}function no(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Cs(t,e);const n=Bs(t),r=Bs(e),i=Cs(n.seconds,r.seconds);return 0!==i?i:Cs(n.nanos,r.nanos)}function ro(t){return io(t)}function io(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Bs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Js.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=io(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${io(t.fields[i])}`;return n+"}"}(t.mapValue):gs();var e,n}function so(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function oo(t){return!!t&&"integerValue"in t}function ao(t){return!!t&&"arrayValue"in t}function co(t){return!!t&&"nullValue"in t}function uo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function ho(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ls(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ho(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fo{constructor(t){this.value=t}static empty(){return new fo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!lo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ho(e)}setAll(t){let e=Vs.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ho(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());lo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];lo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ls(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new fo(ho(this.value))}}function po(t){const e=[];return Ls(t.fields,((t,n)=>{const r=new Vs([t]);if(lo(n)){const t=po(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new js(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class go{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new go(t,0,Os.min(),fo.empty(),0)}static newFoundDocument(t,e,n){return new go(t,1,e,n,0)}static newNoDocument(t,e){return new go(t,2,e,fo.empty(),0)}static newUnknownDocument(t,e){return new go(t,3,e,fo.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof go&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new go(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mo{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function yo(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mo(t,e,n,r,i,s,o)}function vo(t){const e=ys(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+ro(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Xs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Do(e.startAt)),e.endAt&&(t+="|ub:",t+=Do(e.endAt)),e.A=t}return e.A}function wo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Zs(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Po(t.startAt,e.startAt)&&Po(t.endAt,e.endAt)}function _o(t){return Js.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class bo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Io(t,e,n):"array-contains"===e?new ko(t,n):"in"===e?new Ao(t,n):"not-in"===e?new No(t,n):"array-contains-any"===e?new Co(t,n):new bo(t,e,n)}static R(t,e,n){return"in"===e?new To(t,n):new Eo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(eo(e,this.value)):null!==e&&Ys(this.value)===Ys(e)&&this.P(eo(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return gs()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Io extends bo{constructor(t,e,n){super(t,e,n),this.key=Js.fromName(n.referenceValue)}matches(t){const e=Js.comparator(t.key,this.key);return this.P(e)}}class To extends bo{constructor(t,e){super(t,"in",e),this.keys=So("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Eo extends bo{constructor(t,e){super(t,"not-in",e),this.keys=So("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function So(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Js.fromName(t.referenceValue)))}class ko extends bo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ao(e)&&to(e.arrayValue,this.value)}}class Ao extends bo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&to(this.value.arrayValue,e)}}class No extends bo{constructor(t,e){super(t,"not-in",e)}matches(t){if(to(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!to(this.value.arrayValue,e)}}class Co extends bo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ao(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>to(this.value.arrayValue,t)))}}class Ro{constructor(t,e){this.position=t,this.before=e}}function Do(t){return`${t.before?"b":"a"}:${t.position.map((t=>ro(t))).join(",")}`}class Oo{constructor(t,e="asc"){this.field=t,this.dir=e}}function xo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Lo(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Js.comparator(Js.fromName(o.referenceValue),n.key):eo(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Po(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zs(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mo{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Uo(t){return new Mo(t)}function Fo(t){return!Xs(t.limit)&&"F"===t.limitType}function Vo(t){return!Xs(t.limit)&&"L"===t.limitType}function jo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function qo(t){for(const e of t.filters)if(e.v())return e.field;return null}function $o(t){return null!==t.collectionGroup}function Bo(t){const e=ys(t);if(null===e.V){e.V=[];const t=qo(e),n=jo(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Oo(t)),e.V.push(new Oo(Vs.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Oo(Vs.keyField(),t))}}}return e.V}function Ho(t){const e=ys(t);if(!e.S)if("F"===e.limitType)e.S=yo(e.path,e.collectionGroup,Bo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Bo(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Oo(n.field,e))}const n=e.endAt?new Ro(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Ro(e.startAt.position,!e.startAt.before):null;e.S=yo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function zo(t,e){return wo(Ho(t),Ho(e))&&t.limitType===e.limitType}function Ko(t){return`${vo(Ho(t))}|lt:${t.limitType}`}function Go(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ro(e.value)}`;var e})).join(", ")}]`),Xs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+Do(t.startAt)),t.endAt&&(e+=", endAt: "+Do(t.endAt)),`Target(${e})`}(Ho(t))}; limitType=${t.limitType})`}function Wo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Js.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Lo(t.startAt,Bo(t),e))&&(!t.endAt||!Lo(t.endAt,Bo(t),e))}(t,e)}function Xo(t){return(e,n)=>{let r=!1;for(const i of Bo(t)){const t=Qo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Qo(t,e,n){const r=t.field.isKeyField()?Js.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?eo(r,i):gs()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return gs()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Jo(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qs(e)?"-0":e}}function Yo(t){return{integerValue:""+t}}function Zo(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Qs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Yo(e):Jo(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ta{constructor(){this._=void 0}}function ea(t,e,n){return t instanceof ia?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof sa?oa(t,e):t instanceof aa?ca(t,e):function(t,e){const n=ra(t,e),r=la(n)+la(t.C);return oo(n)&&oo(t.C)?Yo(r):Jo(t.N,r)}(t,e)}function na(t,e,n){return t instanceof sa?oa(t,e):t instanceof aa?ca(t,e):n}function ra(t,e){return t instanceof ua?oo(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ia extends ta{}class sa extends ta{constructor(t){super(),this.elements=t}}function oa(t,e){const n=ha(e);for(const e of t.elements)n.some((t=>Zs(t,e)))||n.push(e);return{arrayValue:{values:n}}}class aa extends ta{constructor(t){super(),this.elements=t}}function ca(t,e){let n=ha(e);for(const e of t.elements)n=n.filter((t=>!Zs(t,e)));return{arrayValue:{values:n}}}class ua extends ta{constructor(t,e){super(),this.N=t,this.C=e}}function la(t){return Hs(t.integerValue||t.doubleValue)}function ha(t){return ao(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class da{constructor(t,e){this.field=t,this.transform=e}}class fa{constructor(t,e){this.version=t,this.transformResults=e}}class pa{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new pa}static exists(t){return new pa(void 0,t)}static updateTime(t){return new pa(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ga(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ma{}function ya(t,e,n){t instanceof Ia?function(t,e,n){const r=t.value.clone(),i=Sa(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ta?function(t,e,n){if(!ga(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Sa(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ea(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function va(t,e,n){t instanceof Ia?function(t,e,n){if(!ga(t.precondition,e))return;const r=t.value.clone(),i=ka(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(ba(e),r).setHasLocalMutations()}(t,e,n):t instanceof Ta?function(t,e,n){if(!ga(t.precondition,e))return;const r=ka(t.fieldTransforms,n,e),i=e.data;i.setAll(Ea(t)),i.setAll(r),e.convertToFoundDocument(ba(e),i).setHasLocalMutations()}(t,e,n):function(t,e){ga(t.precondition,e)&&e.convertToNoDocument(Os.min())}(t,e)}function wa(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ra(r.transform,t||null);null!=i&&(null==n&&(n=fo.empty()),n.set(r.field,i))}return n||null}function _a(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Rs(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof sa&&e instanceof sa||t instanceof aa&&e instanceof aa?Rs(t.elements,e.elements,Zs):t instanceof ua&&e instanceof ua?Zs(t.C,e.C):t instanceof ia&&e instanceof ia}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ba(t){return t.isFoundDocument()?t.version:Os.min()}class Ia extends ma{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ta extends ma{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ea(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Sa(t,e,n){const r=new Map;ms(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,na(o,a,n[i]))}return r}function ka(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ea(t,s,e))}return r}class Aa extends ma{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Na extends ma{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ca{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ra,Da;function Oa(t){if(void 0===t)return ds("GRPC error has no .code"),vs.UNKNOWN;switch(t){case Ra.OK:return vs.OK;case Ra.CANCELLED:return vs.CANCELLED;case Ra.UNKNOWN:return vs.UNKNOWN;case Ra.DEADLINE_EXCEEDED:return vs.DEADLINE_EXCEEDED;case Ra.RESOURCE_EXHAUSTED:return vs.RESOURCE_EXHAUSTED;case Ra.INTERNAL:return vs.INTERNAL;case Ra.UNAVAILABLE:return vs.UNAVAILABLE;case Ra.UNAUTHENTICATED:return vs.UNAUTHENTICATED;case Ra.INVALID_ARGUMENT:return vs.INVALID_ARGUMENT;case Ra.NOT_FOUND:return vs.NOT_FOUND;case Ra.ALREADY_EXISTS:return vs.ALREADY_EXISTS;case Ra.PERMISSION_DENIED:return vs.PERMISSION_DENIED;case Ra.FAILED_PRECONDITION:return vs.FAILED_PRECONDITION;case Ra.ABORTED:return vs.ABORTED;case Ra.OUT_OF_RANGE:return vs.OUT_OF_RANGE;case Ra.UNIMPLEMENTED:return vs.UNIMPLEMENTED;case Ra.DATA_LOSS:return vs.DATA_LOSS;default:return gs()}}(Da=Ra||(Ra={}))[Da.OK=0]="OK",Da[Da.CANCELLED=1]="CANCELLED",Da[Da.UNKNOWN=2]="UNKNOWN",Da[Da.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Da[Da.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Da[Da.NOT_FOUND=5]="NOT_FOUND",Da[Da.ALREADY_EXISTS=6]="ALREADY_EXISTS",Da[Da.PERMISSION_DENIED=7]="PERMISSION_DENIED",Da[Da.UNAUTHENTICATED=16]="UNAUTHENTICATED",Da[Da.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Da[Da.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Da[Da.ABORTED=10]="ABORTED",Da[Da.OUT_OF_RANGE=11]="OUT_OF_RANGE",Da[Da.UNIMPLEMENTED=12]="UNIMPLEMENTED",Da[Da.INTERNAL=13]="INTERNAL",Da[Da.UNAVAILABLE=14]="UNAVAILABLE",Da[Da.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class xa{constructor(t,e){this.comparator=t,this.root=e||Pa.EMPTY}insert(t,e){return new xa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Pa.BLACK,null,null))}remove(t){return new xa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Pa.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new La(this.root,t,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new La(this.root,t,this.comparator,!0)}}class La{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Pa{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Pa.RED,this.left=null!=r?r:Pa.EMPTY,this.right=null!=i?i:Pa.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Pa(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Pa.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Pa.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Pa.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Pa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw gs();if(this.right.isRed())throw gs();const t=this.left.check();if(t!==this.right.check())throw gs();return t+(this.isRed()?0:1)}}Pa.EMPTY=null,Pa.RED=!0,Pa.BLACK=!1,Pa.EMPTY=new class{constructor(){this.size=0}get key(){throw gs()}get value(){throw gs()}get color(){throw gs()}get left(){throw gs()}get right(){throw gs()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Pa(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ma{constructor(t){this.comparator=t,this.data=new xa(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ua(this.data.getIterator())}getIteratorFrom(t){return new Ua(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ma))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ma(this.comparator);return e.data=t,e}}class Ua{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Fa=new xa(Js.comparator);function Va(){return Fa}const ja=new xa(Js.comparator);function qa(){return ja}const $a=new xa(Js.comparator);const Ba=new Ma(Js.comparator);function Ha(...t){let e=Ba;for(const n of t)e=e.add(n);return e}const za=new Ma(Cs);function Ka(){return za}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ga{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Wa.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ga(Os.min(),n,Ka(),Va(),Ha())}}class Wa{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Wa(qs.EMPTY_BYTE_STRING,e,Ha(),Ha(),Ha())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xa{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class Qa{constructor(t,e){this.targetId=t,this.O=e}}class Ja{constructor(t,e,n=qs.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ya{constructor(){this.F=0,this.M=ec(),this.L=qs.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Ha(),e=Ha(),n=Ha();return this.M.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:gs()}})),new Wa(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=ec()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Za{constructor(t){this.tt=t,this.et=new Map,this.nt=Va(),this.st=tc(),this.it=new Ma(Cs)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,(e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:gs()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,n)=>{this.ht(n)&&e(n)}))}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(_o(t))if(0===n){const n=new Js(t.path);this.at(e,n,go.newNoDocument(n,Os.min()))}else ms(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&_o(i.target)){const e=new Js(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,go.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}}));let n=Ha();this.st.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new Ga(t,e,this.it,this.nt,n);return this.nt=Va(),this.st=tc(),this.it=new Ma(Cs),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new Ya,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Ma(Cs),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||hs("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new Ya),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function tc(){return new xa(Js.comparator)}function ec(){return new xa(Js.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const nc={asc:"ASCENDING",desc:"DESCENDING"},rc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class ic{constructor(t,e){this.databaseId=t,this.D=e}}function sc(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oc(t,e){return t.D?e.toBase64():e.toUint8Array()}function ac(t,e){return sc(t,e.toTimestamp())}function cc(t){return ms(!!t),Os.fromTimestamp(function(t){const e=Bs(t);return new Ds(e.seconds,e.nanos)}(t))}function uc(t,e){return function(t){return new Us(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function lc(t){const e=Us.fromString(t);return ms(Rc(e)),e}function hc(t,e){return uc(t.databaseId,e.path)}function dc(t,e){const n=lc(e);if(n.get(1)!==t.databaseId.projectId)throw new ws(vs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ws(vs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Js(gc(n))}function fc(t,e){return uc(t.databaseId,e)}function pc(t){return new Us(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gc(t){return ms(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function mc(t,e,n){return{name:hc(t,e),fields:n.value.mapValue.fields}}function yc(t,e){return{documents:[fc(t,e.path)]}}function vc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=fc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(uo(t.value))return{unaryFilter:{field:Sc(t.field),op:"IS_NAN"}};if(co(t.value))return{unaryFilter:{field:Sc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(uo(t.value))return{unaryFilter:{field:Sc(t.field),op:"IS_NOT_NAN"}};if(co(t.value))return{unaryFilter:{field:Sc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sc(t.field),op:Ec(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Sc(t.field),direction:Tc(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||Xs(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=bc(e.startAt)),e.endAt&&(n.structuredQuery.endAt=bc(e.endAt)),n}function wc(t){let e=function(t){const e=lc(t);return 4===e.length?Us.emptyPath():gc(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ms(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=_c(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Oo(kc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Xs(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Ic(n.startAt));let u=null;return n.endAt&&(u=Ic(n.endAt)),function(t,e,n,r,i,s,o,a){return new Mo(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function _c(t){return t?void 0!==t.unaryFilter?[Nc(t)]:void 0!==t.fieldFilter?[Ac(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>_c(t))).reduce(((t,e)=>t.concat(e))):gs():[]}function bc(t){return{before:t.before,values:t.position}}function Ic(t){const e=!!t.before,n=t.values||[];return new Ro(n,e)}function Tc(t){return nc[t]}function Ec(t){return rc[t]}function Sc(t){return{fieldPath:t.canonicalString()}}function kc(t){return Vs.fromServerFormat(t.fieldPath)}function Ac(t){return bo.create(kc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return gs()}}(t.fieldFilter.op),t.fieldFilter.value)}function Nc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=kc(t.unaryFilter.field);return bo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=kc(t.unaryFilter.field);return bo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=kc(t.unaryFilter.field);return bo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=kc(t.unaryFilter.field);return bo.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return gs()}}function Cc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Rc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Dc{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&gs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Dc(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Dc?e:Dc.resolve(e)}catch(t){return Dc.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Dc.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Dc.reject(e)}static resolve(t){return new Dc(((e,n)=>{e(t)}))}static reject(t){return new Dc(((e,n)=>{n(t)}))}static waitFor(t){return new Dc(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Dc.resolve(!1);for(const n of t)e=e.next((t=>t?Dc.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}function Oc(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xc{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&ya(r,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&va(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&va(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Os.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ha())}isEqual(t){return this.batchId===t.batchId&&Rs(this.mutations,t.mutations,((t,e)=>_a(t,e)))&&Rs(this.baseMutations,t.baseMutations,((t,e)=>_a(t,e)))}}class Lc{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ms(t.mutations.length===n.length);let r=$a;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new Lc(t,e,n,r)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pc{constructor(t,e,n,r,i=Os.min(),s=Os.min(),o=qs.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Pc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Pc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Pc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mc{constructor(t){this.Wt=t}}function Uc(t){const e=wc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fc{constructor(){this.Gt=new Vc}addToCollectionParentIndex(t,e){return this.Gt.add(e),Dc.resolve()}getCollectionParents(t,e){return Dc.resolve(this.Gt.getEntries(e))}}class Vc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ma(Us.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ma(Us.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jc{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new jc(0)}static ie(){return new jc(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function qc(t){if(t.code!==vs.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;hs("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $c{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){Ls(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return Ps(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bc{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}Pn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Js.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):$o(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Js(e)).next((t=>{let e=qa();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const r=e.collectionGroup;let i=qa();return this.Ht.getCollectionParents(t,r).next((s=>Dc.forEach(s,(s=>{const o=function(t,e){return new Mo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Cn(t,i,r).next((t=>{r=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=go.newInvalidDocument(n),r=r.insert(n,i)),va(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{Wo(e,n)||(r=r.remove(t))})),r)))}Cn(t,e,n){let r=Ha();for(const t of e)for(const e of t.mutations)e instanceof Ta&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Ha(),r=Ha();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Hc(t,e.fromCache,n,r)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zc{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Os.min())?this.Fn(t,e):this.On.Pn(t,r).next((i=>{const s=this.Mn(e,i);return(Fo(e)||Vo(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(ls()<=It.DEBUG&&hs("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Go(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Mn(t,e){let n=new Ma(Xo(t));return e.forEach(((e,r)=>{Wo(t,r)&&(n=n.add(r))})),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return ls()<=It.DEBUG&&hs("QueryEngine","Using full collection scan to execute query:",Go(e)),this.On.getDocumentsMatchingQuery(t,e,Os.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kc{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new xa(Cs),this.qn=new $c((t=>vo(t)),wo),this.Kn=Os.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Bc(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}async function Gc(t,e){const n=ys(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.In.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Bc(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=Ha();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function Wc(t){const e=ys(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function Xc(t,e){const n=ys(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.ze.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return ms(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}}));let a=Va();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=Ha();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Va();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Os.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):hs("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(Os.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next((e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Dc.waitFor(o).next((()=>s.apply(t))).next((()=>n.Qn.vn(t,a))).next((()=>a))})).then((t=>(n.Un=i,t)))}function Qc(t,e){const n=ys(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e))))}async function Jc(t,e,n){const r=ys(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Oc(t))throw t;hs("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Yc(t,e,n){const r=ys(t);let i=Os.min(),s=Ha();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=ys(t),i=r.qn.get(n);return void 0!==i?Dc.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Ho(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:Os.min(),n?s:Ha()))).next((t=>({documents:t,Gn:s})))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zc{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Dc.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:cc(n.createTime)}),Dc.resolve()}getNamedQuery(t,e){return Dc.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Uc(t.bundledQuery),readTime:cc(t.readTime)}}(e)),Dc.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tu{constructor(){this.Zn=new Ma(eu.ts),this.es=new Ma(eu.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new eu(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new eu(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new Js(new Us([])),n=new eu(e,t),r=new eu(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Js(new Us([])),n=new eu(e,t),r=new eu(e,t+1);let i=Ha();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new eu(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class eu{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Js.comparator(t.key,e.key)||Cs(t.ls,e.ls)}static ns(t,e){return Cs(t.ls,e.ls)||Js.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nu{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Ma(eu.ts)}checkEmpty(t){return Dc.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new xc(i,e,n,r);this.In.push(s);for(const e of r)this.ds=this.ds.add(new eu(e.key,i)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return Dc.resolve(s)}lookupMutationBatch(t,e){return Dc.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return Dc.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Dc.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Dc.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new eu(e,0),r=new eu(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this.ws(t.ls);i.push(e)})),Dc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ma(Cs);return e.forEach((t=>{const e=new eu(t,0),r=new eu(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Dc.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Js.isDocumentKey(i)||(i=i.child(""));const s=new eu(new Js(i),0);let o=new Ma(Cs);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),Dc.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ms(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Dc.forEach(e.mutations,(r=>{const i=new eu(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new eu(e,0),r=this.ds.firstAfterOrEqual(n);return Dc.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Dc.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ru{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new xa(Js.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Dc.resolve(n?n.document.clone():go.newInvalidDocument(e))}getEntries(t,e){let n=Va();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():go.newInvalidDocument(t))})),Dc.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Va();const i=new Js(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Wo(e,i)&&(r=r.insert(i.key,i.clone()))}return Dc.resolve(r)}Es(t,e){return Dc.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new iu(this)}getSize(t){return Dc.resolve(this.size)}}class iu extends class{constructor(){this.changes=new $c((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:Os.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:go.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Dc.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),Dc.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class su{constructor(t){this.persistence=t,this.Ts=new $c((t=>vo(t)),wo),this.lastRemoteSnapshotVersion=Os.min(),this.highestTargetId=0,this.Is=0,this.As=new tu,this.targetCount=0,this.Rs=jc.se()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Dc.resolve()}getLastRemoteSnapshotVersion(t){return Dc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Dc.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Dc.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Dc.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new jc(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Dc.resolve()}updateTargetData(t,e){return this.ae(e),Dc.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Dc.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Dc.waitFor(i).next((()=>r))}getTargetCount(t){return Dc.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Dc.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Dc.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Dc.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Dc.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Dc.resolve(n)}containsKey(t,e){return Dc.resolve(this.As.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ou{constructor(t,e){this.bs={},this.Le=new ks(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new su(this),this.Ht=new Fc,this.He=function(t,e){return new ru(t,e)}(this.Ht,(t=>this.referenceDelegate.Ps(t))),this.N=new Mc(e),this.Je=new Zc(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new nu(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){hs("MemoryPersistence","Starting transaction:",t);const r=new au(this.Le.next());return this.referenceDelegate.vs(),n(r).next((t=>this.referenceDelegate.Vs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ss(t,e){return Dc.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class au extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class cu{constructor(t){this.persistence=t,this.Ds=new tu,this.Cs=null}static Ns(t){return new cu(t)}get xs(){if(this.Cs)return this.Cs;throw gs()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Dc.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Dc.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Dc.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Dc.forEach(this.xs,(n=>{const r=Js.fromPath(n);return this.ks(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}Ps(t){return 0}ks(t,e){return Dc.or([()=>Dc.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}class uu{constructor(){this.activeTargetIds=Ka()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lu{constructor(){this.yi=new uu,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new uu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hu{Ei(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class du{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){hs("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){hs("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const fu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pu{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);hs("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then((t=>(hs("RestConnection","Received: ",t),t)),(e=>{throw fs("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+cs,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=fu[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise(((i,s)=>{const o=new os;o.listenOnce(ts.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Zi.NO_ERROR:const e=o.getResponseJson();hs("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Zi.TIMEOUT:hs("Connection",'RPC "'+t+'" timed out'),s(new ws(vs.DEADLINE_EXCEEDED,"Request time out"));break;case Zi.HTTP_ERROR:const n=o.getStatus();if(hs("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(vs).indexOf(e)>=0?e:vs.UNKNOWN}(t.status);s(new ws(e,t.message))}else s(new ws(vs.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ws(vs.UNAVAILABLE,"Connection failed."));break;default:gs()}}finally{hs("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new Wi,i=qn(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new is({})),this.Ui(s.initMessageHeaders,e),nt()||it()||et().indexOf("Electron/")>=0||st()||et().indexOf("MSAppHost/")>=0||rt()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");hs("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,u=!1;const l=new pu({vi:t=>{u?hs("Connection","Not sending because WebChannel is closed:",t):(c||(hs("Connection","Opening WebChannel transport."),a.open(),c=!0),hs("Connection","WebChannel sending:",t),a.send(t))},Vi:()=>a.close()}),h=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(a,ss.EventType.OPEN,(()=>{u||hs("Connection","WebChannel transport opened.")})),h(a,ss.EventType.CLOSE,(()=>{u||(u=!0,hs("Connection","WebChannel transport closed"),l.$i())})),h(a,ss.EventType.ERROR,(t=>{u||(u=!0,fs("Connection","WebChannel transport errored:",t),l.$i(new ws(vs.UNAVAILABLE,"The operation could not be completed")))})),h(a,ss.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];ms(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){hs("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ra[t];if(void 0!==e)return Oa(e)}(t),n=i.message;void 0===e&&(e=vs.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.$i(new ws(e,n)),a.close()}else hs("Connection","WebChannel received:",n),l.Oi(n)}})),h(i,es.STAT_EVENT,(t=>{t.stat===ns?hs("Connection","Detected buffering proxy"):t.stat===rs&&hs("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.ki()}),0),l}}function mu(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function yu(t){return new ic(t,!0)}class vu{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&hs("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wu{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new vu(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===vs.RESOURCE_EXHAUSTED?(ds(e.toString()),ds("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===vs.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then((t=>{this.sr===e&&this.yr(t)}),(e=>{t((()=>{const t=new ws(vs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)}))}))}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si((()=>{e((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.pr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(t){return hs("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget((()=>this.sr===t?e():(hs("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _u extends wu{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:gs()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(ms(void 0===e||"string"==typeof e),qs.fromBase64String(e||"")):(ms(void 0===e||e instanceof Uint8Array),qs.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?vs.UNKNOWN:Oa(t.code);return new ws(e,t.message||"")}(o);n=new Ja(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=dc(t,r.document.name),s=cc(r.document.updateTime),o=new fo({mapValue:{fields:r.document.fields}}),a=go.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Xa(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=dc(t,r.document),s=r.readTime?cc(r.readTime):Os.min(),o=go.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=dc(t,r.document),s=r.removedTargetIds||[];n=new Xa([],s,i,null)}else{if(!("filter"in e))return gs();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ca(r),s=t.targetId;n=new Qa(s,i)}}return n}(this.N,t),n=function(t){if(!("targetChange"in t))return Os.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Os.min():e.readTime?cc(e.readTime):Os.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=pc(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=_o(r)?{documents:yc(t,r)}:{query:vc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=oc(t,e.resumeToken):e.snapshotVersion.compareTo(Os.min())>0&&(n.readTime=sc(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return gs()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=pc(this.N),e.removeTarget=t,this.wr(e)}}class bu extends wu{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(ms(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=function(t,e){return t&&t.length>0?(ms(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?cc(t.updateTime):cc(e);return n.isEqual(Os.min())&&(n=cc(e)),new fa(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=cc(t.commitTime);return this.listener.vr(n,e)}return ms(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=pc(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Ia)n={update:mc(t,e.key,e.value)};else if(e instanceof Aa)n={delete:hc(t,e.key)};else if(e instanceof Ta)n={update:mc(t,e.key,e.data),updateMask:Cc(e.fieldMask)};else{if(!(e instanceof Na))return gs();n={verify:hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ia)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sa)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof aa)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ua)return{fieldPath:e.field.canonicalString(),increment:n.C};throw gs()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ac(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:gs()}(t,e.precondition)),n}(this.N,t)))};this.wr(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Iu extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new ws(vs.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===vs.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new ws(vs.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===vs.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new ws(vs.UNKNOWN,t.toString())}))}terminate(){this.Dr=!0}}class Tu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(ds(e),this.$r=!1):hs("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((t=>{n.enqueueAndForget((async()=>{xu(this)&&(hs("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ys(t);e.Kr.add(4),await ku(e),e.Wr.set("Unknown"),e.Kr.delete(4),await Su(e)}(this))}))})),this.Wr=new Tu(n,r)}}async function Su(t){if(xu(t))for(const e of t.jr)await e(!0)}async function ku(t){for(const e of t.jr)await e(!1)}function Au(t,e){const n=ys(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Ou(n)?Du(n):Xu(n).cr()&&Cu(n,e))}function Nu(t,e){const n=ys(t),r=Xu(n);n.qr.delete(e),r.cr()&&Ru(n,e),0===n.qr.size&&(r.cr()?r.lr():xu(n)&&n.Wr.set("Unknown"))}function Cu(t,e){t.Gr.Y(e.targetId),Xu(t).Ir(e)}function Ru(t,e){t.Gr.Y(e),Xu(t).Ar(e)}function Du(t){t.Gr=new Za({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Xu(t).start(),t.Wr.Or()}function Ou(t){return xu(t)&&!Xu(t).ar()&&t.qr.size>0}function xu(t){return 0===ys(t).Kr.size}function Lu(t){t.Gr=void 0}async function Pu(t){t.qr.forEach(((e,n)=>{Cu(t,e)}))}async function Mu(t,e){Lu(t),Ou(t)?(t.Wr.Lr(e),Du(t)):t.Wr.set("Unknown")}async function Uu(t,e,n){if(t.Wr.set("Online"),e instanceof Ja&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){hs("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Fu(t,n)}else if(e instanceof Xa?t.Gr.rt(e):e instanceof Qa?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(Os.min()))try{const e=await Wc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(qs.EMPTY_BYTE_STRING,n.snapshotVersion)),Ru(t,e);const r=new Pc(n.target,e,1,n.sequenceNumber);Cu(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){hs("RemoteStore","Failed to raise snapshot:",e),await Fu(t,e)}}async function Fu(t,e,n){if(!Oc(e))throw e;t.Kr.add(1),await ku(t),t.Wr.set("Offline"),n||(n=()=>Wc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{hs("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Su(t)}))}function Vu(t,e){return e().catch((n=>Fu(t,n,e)))}async function ju(t){const e=ys(t),n=Qu(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;qu(e);)try{const t=await Qc(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,$u(e,t)}catch(t){await Fu(e,t)}Bu(e)&&Hu(e)}function qu(t){return xu(t)&&t.Ur.length<10}function $u(t,e){t.Ur.push(e);const n=Qu(t);n.cr()&&n.br&&n.Pr(e.mutations)}function Bu(t){return xu(t)&&!Qu(t).ar()&&t.Ur.length>0}function Hu(t){Qu(t).start()}async function zu(t){Qu(t).Sr()}async function Ku(t){const e=Qu(t);for(const n of t.Ur)e.Pr(n.mutations)}async function Gu(t,e,n){const r=t.Ur.shift(),i=Lc.from(r,e,n);await Vu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await ju(t)}async function Wu(t,e){e&&Qu(t).br&&await async function(t,e){if(function(t){switch(t){case vs.OK:return gs();case vs.CANCELLED:case vs.UNKNOWN:case vs.DEADLINE_EXCEEDED:case vs.RESOURCE_EXHAUSTED:case vs.INTERNAL:case vs.UNAVAILABLE:case vs.UNAUTHENTICATED:return!1;case vs.INVALID_ARGUMENT:case vs.NOT_FOUND:case vs.ALREADY_EXISTS:case vs.PERMISSION_DENIED:case vs.FAILED_PRECONDITION:case vs.ABORTED:case vs.OUT_OF_RANGE:case vs.UNIMPLEMENTED:case vs.DATA_LOSS:return!0;default:return gs()}}(n=e.code)&&n!==vs.ABORTED){const n=t.Ur.shift();Qu(t).hr(),await Vu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ju(t)}var n}(t,e),Bu(t)&&Hu(t)}function Xu(t){return t.zr||(t.zr=function(t,e,n){const r=ys(t);return r.Cr(),new _u(e,r.nr,r.credentials,r.N,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{Si:Pu.bind(null,t),Ci:Mu.bind(null,t),Tr:Uu.bind(null,t)}),t.jr.push((async e=>{e?(t.zr.hr(),Ou(t)?Du(t):t.Wr.set("Unknown")):(await t.zr.stop(),Lu(t))}))),t.zr}function Qu(t){return t.Hr||(t.Hr=function(t,e,n){const r=ys(t);return r.Cr(),new bu(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:zu.bind(null,t),Ci:Wu.bind(null,t),Vr:Ku.bind(null,t),vr:Gu.bind(null,t)}),t.jr.push((async e=>{e?(t.Hr.hr(),await ju(t)):(await t.Hr.stop(),t.Ur.length>0&&(hs("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))}))),t.Hr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Ju{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _s,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Ju(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ws(vs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yu(t,e){if(ds("AsyncQueue",`${e}: ${t}`),Oc(t))return new ws(vs.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Js.comparator(e.key,n.key):(t,e)=>Js.comparator(t.key,e.key),this.keyedMap=qa(),this.sortedSet=new xa(this.comparator)}static emptySet(t){return new Zu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Zu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Zu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tl{constructor(){this.Jr=new xa(Js.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):gs():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class el{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new el(t,e,Zu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nl{constructor(){this.Xr=void 0,this.listeners=[]}}class rl{constructor(){this.queries=new $c((t=>Ko(t)),zo),this.onlineState="Unknown",this.Zr=new Set}}async function il(t,e){const n=ys(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new nl),i)try{s.Xr=await n.onListen(r)}catch(t){const n=Yu(t,`Initialization of query '${Go(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&cl(n)}async function sl(t,e){const n=ys(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ol(t,e){const n=ys(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.no(t)&&(r=!0);i.Xr=t}}r&&cl(n)}function al(t,e,n){const r=ys(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function cl(t){t.Zr.forEach((t=>{t.next()}))}class ul{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new el(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.uo&&n||t.docs.isEmpty()&&"Offline"!==e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=el.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ll{constructor(t){this.key=t}}class hl{constructor(t){this.key=t}}class dl{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Ha(),this.mutatedKeys=Ha(),this.po=Xo(t),this.Eo=new Zu(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new tl,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Fo(this.query)&&r.size===this.query.limit?r.last():null,c=Vo(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Wo(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),Fo(this.query)||Vo(this.query))for(;s.size>this.query.limit;){const t=Fo(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return gs()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.po(t.doc,e.doc))),this.bo(n);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new el(this.query,t.Eo,r,i,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new tl,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach((t=>this._o=this._o.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this._o=this._o.delete(t))),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Ha(),this.Eo.forEach((t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))}));const e=[];return t.forEach((t=>{this.yo.has(t)||e.push(new hl(t))})),this.yo.forEach((n=>{t.has(n)||e.push(new ll(n))})),e}So(t){this._o=t.Gn,this.yo=Ha();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return el.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class fl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class pl{constructor(t){this.key=t,this.Co=!1}}class gl{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new $c((t=>Ko(t)),zo),this.ko=new Map,this.$o=new Set,this.Oo=new xa(Js.comparator),this.Fo=new Map,this.Mo=new tu,this.Lo={},this.Bo=new Map,this.Uo=jc.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function ml(t,e){const n=function(t){const e=ys(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bl.bind(null,e),e.No.Tr=ol.bind(null,e.eventManager),e.No.jo=al.bind(null,e.eventManager),e}(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const t=await function(t,e){const n=ys(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.ze.getTargetData(t,e).next((i=>i?(r=i,Dc.resolve(r)):n.ze.allocateTargetId(t).next((i=>(r=new Pc(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t}))}(n.localStore,Ho(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await Yc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Io(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Nl(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const i=await Yc(t.localStore,e,!0),s=new dl(e,i.Gn),o=s.Io(i.documents),a=Wa.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Nl(t,n,c.vo);const u=new fl(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&Au(n.remoteStore,t)}return i}async function yl(t,e){const n=ys(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((t=>!zo(t,e)))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Jc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Nu(n.remoteStore,r.targetId),kl(n,r.targetId)})).catch(qc)):(kl(n,r.targetId),await Jc(n.localStore,r.targetId,!0))}async function vl(t,e,n){const r=function(t){const e=ys(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Il.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tl.bind(null,e),e}(t);try{const t=await function(t,e){const n=ys(t),r=Ds.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ha());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Qn.Pn(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=wa(t,s.get(t.key));null!=e&&o.push(new Ta(t.key,e,po(e.value.mapValue),pa.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new xa(Cs)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await Dl(r,t.changes),await ju(r.remoteStore)}catch(t){const e=Yu(t,"Failed to persist write");n.reject(e)}}async function wl(t,e){const n=ys(t);try{const t=await Xc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Fo.get(e);r&&(ms(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?ms(r.Co):t.removedDocuments.size>0&&(ms(r.Co),r.Co=!1))})),await Dl(n,t,e)}catch(t){await qc(t)}}function _l(t,e,n){const r=ys(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ys(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.eo(e)&&(r=!0)})),r&&cl(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bl(t,e,n){const r=ys(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let t=new xa(Js.comparator);t=t.insert(s,go.newNoDocument(s,Os.min()));const n=Ha().add(s),i=new Ga(Os.min(),new Map,new Ma(Cs),t,n);await wl(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(e),Rl(r)}else await Jc(r.localStore,e,!1).then((()=>kl(r,e,n))).catch(qc)}async function Il(t,e){const n=ys(t),r=e.batch.batchId;try{const t=await function(t,e){const n=ys(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Dc.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);ms(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))}))})),o.next((()=>t.In.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,r)))}))}(n.localStore,e);Sl(n,r,null),El(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dl(n,t)}catch(t){await qc(t)}}async function Tl(t,e,n){const r=ys(t);try{const t=await function(t,e){const n=ys(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.In.lookupMutationBatch(t,e).next((e=>(ms(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e)))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,r)))}))}(r.localStore,e);Sl(r,e,n),El(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Dl(r,t)}catch(n){await qc(n)}}function El(t,e){(t.Bo.get(e)||[]).forEach((t=>{t.resolve()})),t.Bo.delete(e)}function Sl(t,e,n){const r=ys(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function kl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach((e=>{t.Mo.containsKey(e)||Al(t,e)}))}function Al(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(Nu(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Rl(t))}function Nl(t,e,n){for(const r of n)r instanceof ll?(t.Mo.addReference(r.key,e),Cl(t,r)):r instanceof hl?(hs("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||Al(t,r.key)):gs()}function Cl(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(hs("SyncEngine","New document in limbo: "+n),t.$o.add(r),Rl(t))}function Rl(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Js(Us.fromString(e)),r=t.Uo.next();t.Fo.set(r,new pl(n)),t.Oo=t.Oo.insert(n,r),Au(t.remoteStore,new Pc(Ho(Uo(n.path)),r,2,ks.T))}}async function Dl(t,e,n){const r=ys(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((t,a)=>{o.push(r.Ko(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Hc.kn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.No.Tr(i),await async function(t,e){const n=ys(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Dc.forEach(e,(e=>Dc.forEach(e.Nn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Dc.forEach(e.xn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Oc(t))throw t;hs("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,s))}async function Ol(t,e){const n=ys(t);if(!n.currentUser.isEqual(e)){hs("SyncEngine","User change. New user:",e.toKey());const t=await Gc(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach((t=>{t.forEach((t=>{t.reject(new ws(vs.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Bo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Dl(n,t.Wn)}}function xl(t,e){const n=ys(t),r=n.Fo.get(e);if(r&&r.Co)return Ha().add(r.key);{let t=Ha();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}class Ll{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=yu(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return function(t,e,n,r){return new Kc(t,e,n,r)}(this.persistence,new zc,t.initialUser,this.N)}Go(t){return new ou(cu.Ns,this.N)}Wo(t){return new lu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Pl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>_l(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ol.bind(null,this.syncEngine),await async function(t,e){const n=ys(t);e?(n.Kr.delete(2),await Su(n)):e||(n.Kr.add(2),await ku(n),n.Wr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new rl}createDatastore(t){const e=yu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new gu(r));var r;return function(t,e,n){return new Iu(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>_l(this.syncEngine,t,0),s=du.bt()?new du:new hu,new Eu(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new gl(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ys(t);hs("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await ku(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ml{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ul{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=as.UNAUTHENTICATED,this.clientId=Ns.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{hs("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ws(vs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _s;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Yu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Fl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(hs("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),hs("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Gc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new Ll)),t.offlineComponents}(t);hs("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>async function(t,e){const n=ys(t);n.asyncQueue.verifyOperationInProgress(),hs("RemoteStore","RemoteStore received new credentials");const r=xu(n);n.Kr.add(3),await ku(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await Su(n)}(e.remoteStore,t))),t.onlineComponents=e}async function Vl(t){return t.onlineComponents||(hs("FirestoreClient","Using default OnlineComponentProvider"),await Fl(t,new Pl)),t.onlineComponents}async function jl(t){const e=await Vl(t),n=e.eventManager;return n.onListen=ml.bind(null,e.syncEngine),n.onUnlisten=yl.bind(null,e.syncEngine),n}class ql{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class $l{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $l&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Bl=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Hl(t,e,n){if(!n)throw new ws(vs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zl(t){if(!Js.isDocumentKey(t))throw new ws(vs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kl(t){if(Js.isDocumentKey(t))throw new ws(vs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":gs()}function Wl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ws(vs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gl(t);throw new ws(vs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ws(vs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ws(vs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new ws(vs.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ql{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xl({}),this._settingsFrozen=!1,t instanceof $l?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ws(vs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $l(t.options.projectId)}(t))}get app(){if(!this._app)throw new ws(vs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ws(vs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xl(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new Is;switch(t.type){case"gapi":const e=t.client;return ms(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Ss(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ws(vs.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Bl.get(t);e&&(hs("ComponentProvider","Removing Datastore"),Bl.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jl(this.firestore,t,this._key)}}class Yl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Yl(this.firestore,t,this._query)}}class Zl extends Yl{constructor(t,e,n){super(t,e,Uo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jl(this.firestore,null,new Js(t))}withConverter(t){return new Zl(this.firestore,t,this._path)}}function th(t,e,...n){if(t=yt(t),Hl("collection","path",e),t instanceof Ql){const r=Us.fromString(e,...n);return Kl(r),new Zl(t,null,r)}{if(!(t instanceof Jl||t instanceof Zl))throw new ws(vs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Us.fromString(e,...n));return Kl(r),new Zl(t.firestore,null,r)}}function eh(t,e,...n){if(t=yt(t),1===arguments.length&&(e=Ns.I()),Hl("doc","path",e),t instanceof Ql){const r=Us.fromString(e,...n);return zl(r),new Jl(t,null,new Js(r))}{if(!(t instanceof Jl||t instanceof Zl))throw new ws(vs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Us.fromString(e,...n));return zl(r),new Jl(t.firestore,t instanceof Zl?t.converter:null,new Js(r))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nh{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new vu(this,"async_queue_retry"),this.Ea=()=>{const t=mu();t&&hs("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=mu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=mu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise((()=>{}));const e=new _s;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.da.push(t),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!Oc(t))throw t;hs("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(t){const e=this.fa.then((()=>(this.ga=!0,t().catch((t=>{throw this.ma=t,this.ga=!1,ds("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),t})).then((t=>(this.ga=!1,t))))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Ju.createAndSchedule(this,t,e,n,(t=>this.Ra(t)));return this._a.push(r),r}Ta(){this.ma&&gs()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then((()=>{this._a.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()}))}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class rh extends Ql{constructor(t,e){super(t,e),this.type="firestore",this._queue=new nh,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||oh(this),this._firestoreClient.terminate()}}function ih(t=Ht()){return Vt(t,"firestore").getImmediate()}function sh(t){return t._firestoreClient||oh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function oh(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new ql(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ul(t._credentials,t._queue,r)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ah{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ws(vs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vs(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ch{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ch(qs.fromBase64String(t))}catch(t){throw new ws(vs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ch(qs.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uh{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ws(vs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ws(vs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Cs(this._lat,t._lat)||Cs(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const hh=/^__.*__$/;class dh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ta(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ia(t,this.data,e,this.fieldTransforms)}}class fh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ta(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ph(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw gs()}}class gh{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new gh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return Nh(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(ph(this.Da)&&hh.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class mh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||yu(t)}Ba(t,e,n,r=!1){return new gh({Da:t,methodName:e,La:n,path:Vs.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function yh(t){const e=t._freezeSettings(),n=yu(t._databaseId);return new mh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vh(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);Eh("Data must be an object, but it was:",o,r);const a=Ih(r,o);let c,u;if(s.merge)c=new js(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Sh(e,r,n);if(!o.contains(i))throw new ws(vs.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ch(t,i)||t.push(i)}c=new js(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new dh(new fo(a),c,u)}class wh extends uh{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(`${this._methodName}() can only appear at the top level of your update data`):t.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof wh}}class _h extends uh{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=function(t,e,n){return new gh({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}(this,t,!0),n=this.Ua.map((t=>bh(t,e))),r=new sa(n);return new da(t.path,r)}isEqual(t){return this===t}}function bh(t,e){if(Th(t=yt(t)))return Eh("Unsupported field value:",e,t),Ih(t,e);if(t instanceof uh)return function(t,e){if(!ph(e.Da))throw e.Fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=bh(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=yt(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Zo(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ds.fromDate(t);return{timestampValue:sc(e.N,n)}}if(t instanceof Ds){const n=new Ds(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:sc(e.N,n)}}if(t instanceof lh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ch)return{bytesValue:oc(e.N,t._byteString)};if(t instanceof Jl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:uc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa(`Unsupported field value: ${Gl(t)}`)}(t,e)}function Ih(t,e){const n={};return Ps(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,((t,r)=>{const i=bh(r,e.Na(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Th(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ds||t instanceof lh||t instanceof ch||t instanceof Jl||t instanceof uh)}function Eh(t,e,n){if(!Th(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Gl(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function Sh(t,e,n){if((e=yt(e))instanceof ah)return e._internalPath;if("string"==typeof e)return Ah(t,e);throw Nh("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const kh=new RegExp("[~\\*/\\[\\]]");function Ah(t,e,n){if(e.search(kh)>=0)throw Nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ah(...e.split("."))._internalPath}catch(r){throw Nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ws(vs.INVALID_ARGUMENT,a+t+c)}function Ch(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Jl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Dh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Oh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Dh extends Rh{data(){return super.data()}}function Oh(t,e){return"string"==typeof e?Ah(t,e):e instanceof ah?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Lh extends Rh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ph(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Oh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ph extends Lh{data(t={}){return super.data(t)}}class Mh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new xh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ph(this._firestore,this._userDataWriter,n.key,n,new xh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ws(vs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Ph(t._firestore,t._userDataWriter,n.doc.key,n.doc,new xh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Ph(t._firestore,t._userDataWriter,e.doc.key,e.doc,new xh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Uh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Uh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return gs()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Fh(t,...e){for(const n of e)t=n._apply(t);return t}class Vh extends class{}{constructor(t,e,n){super(),this.Ka=t,this.ja=e,this.Qa=n,this.type="where"}_apply(t){const e=yh(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ws(vs.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){$h(o,s);const e=[];for(const n of o)e.push(qh(r,t,n));a={arrayValue:{values:e}}}else a=qh(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||$h(o,s),a=function(t,e,n,r=!1){return bh(n,t.Ba(r?4:3,e))}(n,"where",o,"in"===s||"not-in"===s);const c=bo.create(i,s,a);return function(t,e){if(e.v()){const n=qo(t);if(null!==n&&!n.isEqual(e.field))throw new ws(vs.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=jo(t);null!==r&&function(t,e,n){if(!n.isEqual(e))throw new ws(vs.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(0,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ws(vs.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ws(vs.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,0,e,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Yl(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function jh(t,e,n){const r=e,i=Oh("where",t);return new Vh(i,r,n)}function qh(t,e,n){if("string"==typeof(n=yt(n))){if(""===n)throw new ws(vs.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!$o(e)&&-1!==n.indexOf("/"))throw new ws(vs.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Us.fromString(n));if(!Js.isDocumentKey(r))throw new ws(vs.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return so(t,new Js(r))}if(n instanceof Jl)return so(t,n._key);throw new ws(vs.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gl(n)}.`)}function $h(t,e){if(!Array.isArray(t)||0===t.length)throw new ws(vs.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new ws(vs.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Bh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Hh(t){t=Wl(t,Jl);const e=Wl(t.firestore,rh);return function(t,e,n={}){const r=new _s;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Ml({next:s=>{e.enqueueAndForget((()=>sl(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ws(vs.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ws(vs.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new ul(Uo(n.path),s,{includeMetadataChanges:!0,uo:!0});return il(t,o)}(await jl(t),t.asyncQueue,e,n,r))),r.promise}(sh(e),t._key).then((n=>function(t,e,n){const r=n.docs.get(e._key),i=new zh(t);return new Lh(t,i,e._key,r,new xh(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))}class zh extends class{convertValue(t,e="none"){switch(Ys(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Hs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(zs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw gs()}}convertObject(t,e){const n={};return Ls(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new lh(Hs(t.latitude),Hs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Gs(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ws(t));default:return null}}convertTimestamp(t){const e=Bs(t);return new Ds(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Us.fromString(t);ms(Rc(n));const r=new $l(n.get(1),n.get(3)),i=new Js(n.popFirst(5));return r.isEqual(e)||ds(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new ch(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Jl(this.firestore,null,e)}}function Kh(t){t=Wl(t,Yl);const e=Wl(t.firestore,rh),n=sh(e),r=new zh(e);return function(t){if(Vo(t)&&0===t.explicitOrderBy.length)throw new ws(vs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),function(t,e,n={}){const r=new _s;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Ml({next:n=>{e.enqueueAndForget((()=>sl(t,o))),n.fromCache&&"server"===r.source?i.reject(new ws(vs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new ul(n,s,{includeMetadataChanges:!0,uo:!0});return il(t,o)}(await jl(t),t.asyncQueue,e,n,r))),r.promise}(n,t._query).then((n=>new Mh(e,r,t,n)))}function Gh(t,e,n,...r){t=Wl(t,Jl);const i=Wl(t.firestore,rh),s=yh(i);let o;return o="string"==typeof(e=yt(e))||e instanceof ah?function(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[Sh(e,r,n)],c=[i];if(s.length%2!=0)throw new ws(vs.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)a.push(Sh(e,s[t])),c.push(s[t+1]);const u=[],l=fo.empty();for(let t=a.length-1;t>=0;--t)if(!Ch(u,a[t])){const e=a[t];let n=c[t];n=yt(n);const r=o.$a(e);if(n instanceof wh)u.push(e);else{const t=bh(n,r);null!=t&&(u.push(e),l.set(e,t))}}const h=new js(u);return new fh(l,h,o.fieldTransforms)}(s,"updateDoc",t._key,e,n,r):function(t,e,n,r){const i=t.Ba(1,e,n);Eh("Data must be an object, but it was:",i,r);const s=[],o=fo.empty();Ls(r,((t,r)=>{const a=Ah(e,t,n);r=yt(r);const c=i.$a(a);if(r instanceof wh)s.push(a);else{const t=bh(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new js(s);return new fh(o,a,i.fieldTransforms)}(s,"updateDoc",t._key,e),Wh(i,[o.toMutation(t._key,pa.exists(!0))])}function Wh(t,e){return function(t,e){const n=new _s;return t.asyncQueue.enqueueAndForget((async()=>vl(await function(t){return Vl(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(sh(t),e)}function Xh(...t){return new _h("arrayUnion",t)}var Qh;cs="9.0.0",Ft(new vt("firestore",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new rh(n,new Ts(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r}),"PUBLIC")),zt("@firebase/firestore","3.0.2",undefined),function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(Qh||(Qh={}));
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Jh="firebasestorage.googleapis.com";class Yh extends ot{constructor(t,e){super(Zh(t),`Firebase Storage: ${e} (${Zh(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Yh.prototype)}_codeEquals(t){return Zh(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Zh(t){return"storage/"+t}function td(t){return new Yh("invalid-argument",t)}function ed(){return new Yh("app-deleted","The Firebase app was deleted.")}function nd(t){throw new Yh("internal-error","Internal error: "+t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rd{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Qh.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Qh.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Qh.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw nd("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const t in r)r.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,r[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw nd("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw nd("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponseText(){if(!this.sent_)throw nd("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class id{createConnection(){return new rd}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sd{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=sd.makeFromUrl(t,e)}catch(e){return new sd(t,"")}if(""===n.path)return n;throw new Yh("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${e===Jh?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let e=0;e<a.length;e++){const r=a[e],i=r.regex.exec(t);if(i){const t=i[r.indices.bucket];let e=i[r.indices.path];e||(e=""),n=new sd(t,e),r.postModify(n);break}}if(null==n)throw function(t){return new Yh("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class od{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ad(t,e,n,r){if(r<e)throw td(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw td(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class cd{constructor(t,e,n,r,i,s,o,a,c,u,l){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=s.slice(),this.callback_=o,this.errorCallback_=a,this.progressCallback_=u,this.timeout_=c,this.pool_=l,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=this;function e(e,n){const r=t.resolve_,i=t.reject_,s=n.connection;if(n.wasSuccessCode)try{const e=t.callback_(s,s.getResponseText());!
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(t){return void 0!==t}(e)?r():r(e)}catch(t){i(t)}else if(null!==s){const e=new Yh("unknown","An unknown error occurred, please check the error payload for server response.");e.serverResponse=s.getResponseText(),t.errorCallback_?i(t.errorCallback_(s,e)):i(e)}else if(n.canceled){i(t.appDelete_?ed():new Yh("canceled","User canceled the upload/download."))}else{i(new Yh("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?e(0,new ud(!1,null,!0)):this.backoffId_=function(t,e,n){let r=1,i=null,s=!1,o=0;function a(){return 2===o}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function l(e){i=setTimeout((()=>{i=null,t(h,a())}),e)}function h(t,...e){if(c)return;if(t)return void u.call(null,t,...e);if(a()||s)return void u.call(null,t,...e);let n;r<64&&(r*=2),1===o?(o=2,n=0):n=1e3*(r+Math.random()),l(n)}let d=!1;function f(t){d||(d=!0,c||(null!==i?(t||(o=2),clearTimeout(i),l(0)):t||(o=1)))}return l(0),setTimeout((()=>{s=!0,f(!0)}),n),f}((function(e,n){if(n)return void e(!1,new ud(!1,null,!0));const r=t.pool_.createConnection();function i(e){const n=e.loaded,r=e.lengthComputable?e.total:-1;null!==t.progressCallback_&&t.progressCallback_(n,r)}t.pendingConnection_=r,null!==t.progressCallback_&&r.addUploadProgressListener(i),r.send(t.url_,t.method_,t.body_,t.headers_).then((()=>{null!==t.progressCallback_&&r.removeUploadProgressListener(i),t.pendingConnection_=null;const n=r.getErrorCode()===Qh.NO_ERROR,s=r.getStatus();if(!n||t.isRetryStatusCode_(s)){const t=r.getErrorCode()===Qh.ABORT;return void e(!1,new ud(!1,null,t))}const o=-1!==t.successCodes_.indexOf(s);e(!0,new ud(o,r))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&function(t){t(!1)}(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||n||r}}class ud{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function ld(t,e,n,r,i,s){const o=function(t){const e=encodeURIComponent;let n="?";for(const r in t)t.hasOwnProperty(r)&&(n=n+(e(r)+"=")+e(t[r])+"&");return n=n.slice(0,-1),n}(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(c,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(c,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(c,s),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(c,r),new cd(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class hd{constructor(t,e){this._service=t,this._location=e instanceof sd?e:sd.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new hd(t,e)}get root(){const t=new sd(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new sd(this._location.bucket,t);return new hd(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new Yh("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function dd(t,e){const n=null==e?void 0:e.storageBucket;return null==n?null:sd.makeFromBucketSpec(n,t)}class fd{constructor(t,e,n,r,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Jh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?sd.makeFromBucketSpec(i,this._host):dd(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=sd.makeFromBucketSpec(this._url,t):this._bucket=dd(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ad("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ad("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new hd(this,t)}_makeRequest(t,e,n){if(this._deleted)return new od(ed());{const r=ld(t,this._appId,e,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t){const[e,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n)}}const pd="storage";function gd(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new fd(n,r,i,new id,e,$t)}function md(t,e,n){const r=t.slice();return r[20]=e[n],r}function yd(t,e,n){const r=t.slice();return r[20]=e[n],r}function vd(t,e,n){const r=t.slice();return r[20]=e[n],r}function wd(t,e,n){const r=t.slice();return r[27]=e[n],r}function _d(e){let n,r,i,s=e[27]+"";return{c(){n=l("option"),r=d(s),n.__value=i=e[27],n.value=n.__value},m(t,e){a(t,n,e),o(n,r)},p:t,d(t){t&&c(n)}}}function bd(t){let e,n=t[6].IT,r=[];for(let e=0;e<n.length;e+=1)r[e]=Ed(md(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=p()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);a(t,e,n)},p(t,i){if(64&i){let s;for(n=t[6].IT,s=0;s<n.length;s+=1){const o=md(t,n,s);r[s]?r[s].p(o,i):(r[s]=Ed(o),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){u(r,t),t&&c(e)}}}function Id(t){let e,n=t[6].Chemistry,r=[];for(let e=0;e<n.length;e+=1)r[e]=Sd(yd(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=p()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);a(t,e,n)},p(t,i){if(64&i){let s;for(n=t[6].Chemistry,s=0;s<n.length;s+=1){const o=yd(t,n,s);r[s]?r[s].p(o,i):(r[s]=Sd(o),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){u(r,t),t&&c(e)}}}function Td(t){let e,n=t[6].Physics,r=[];for(let e=0;e<n.length;e+=1)r[e]=kd(vd(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=p()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);a(t,e,n)},p(t,i){if(64&i){let s;for(n=t[6].Physics,s=0;s<n.length;s+=1){const o=vd(t,n,s);r[s]?r[s].p(o,i):(r[s]=kd(o),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){u(r,t),t&&c(e)}}}function Ed(e){let n,r,i,s=e[20]+"";return{c(){n=l("option"),r=d(s),n.__value=i=e[20],n.value=n.__value},m(t,e){a(t,n,e),o(n,r)},p:t,d(t){t&&c(n)}}}function Sd(e){let n,r,i,s=e[20]+"";return{c(){n=l("option"),r=d(s),n.__value=i=e[20],n.value=n.__value},m(t,e){a(t,n,e),o(n,r)},p:t,d(t){t&&c(n)}}}function kd(e){let n,r,i,s=e[20]+"";return{c(){n=l("option"),r=d(s),n.__value=i=e[20],n.value=n.__value},m(t,e){a(t,n,e),o(n,r)},p:t,d(t){t&&c(n)}}}function Ad(e){let n,i,s,h,p,m,v,I,T,E,S,k,A,N,C,R,O,x,L,P,M,U,F,V,j,q,$,B,H,z,K,G,W,X,Q,J,Y,Z,tt,et,nt=e[6].subjects,rt=[];for(let t=0;t<nt.length;t+=1)rt[t]=_d(wd(e,nt,t));function it(t,e){return t[0]==t[6].subjects[0]?Td:t[0]==t[6].subjects[1]?Id:t[0]==t[6].subjects[2]?bd:void 0}let st=it(e),ot=st&&st(e);return{c(){n=l("main"),i=l("form"),s=l("label"),s.textContent="Subject:",h=f(),p=l("select");for(let t=0;t<rt.length;t+=1)rt[t].c();m=f(),v=l("label"),I=d(e[0]),T=d("-topics\r\n            "),E=l("select"),ot&&ot.c(),k=f(),A=l("label"),N=d("question-link:\r\n            "),C=l("br"),R=f(),O=l("input"),x=f(),L=l("label"),P=d("answer-link:\r\n            "),M=l("br"),U=f(),F=l("input"),V=f(),j=l("label"),q=d("Question-Origin:\r\n            "),$=l("br"),B=f(),H=l("input"),z=f(),K=l("br"),G=f(),W=l("label"),X=l("select"),Q=l("option"),Q.textContent="pdf",J=l("option"),J.textContent="PNG",Y=f(),Z=l("button"),Z.textContent="Submit",y(s,"for","subject"),void 0===e[0]&&D((()=>e[8].call(p))),void 0===e[1]&&D((()=>e[9].call(E))),y(v,"class","mt-5"),y(v,"for",S=e[0]+"-topics"),y(O,"type","text"),y(A,"class","mt-5"),y(A,"for","question-link"),y(F,"type","text"),y(L,"class","mt-5"),y(L,"for","answer-link"),y(H,"type","text"),y(j,"class","mt-5"),y(j,"for","questionOrigin"),Q.__value="pdf",Q.value=Q.__value,J.__value="PNG",J.value=J.__value,void 0===e[5]&&D((()=>e[13].call(X))),y(W,"for","file-type"),y(i,"action",""),y(i,"class",""),y(Z,"class","mt-5 px-5 py-1"),y(n,"class","mx-auto rounded-sm w-8/12 bg-red-300 mt-20 p-5")},m(t,r){a(t,n,r),o(n,i),o(i,s),o(i,h),o(i,p);for(let t=0;t<rt.length;t+=1)rt[t].m(p,null);b(p,e[0]),o(i,m),o(i,v),o(v,I),o(v,T),o(v,E),ot&&ot.m(E,null),b(E,e[1]),o(i,k),o(i,A),o(A,N),o(A,C),o(A,R),o(A,O),_(O,e[2]),o(i,x),o(i,L),o(L,P),o(L,M),o(L,U),o(L,F),_(F,e[3]),o(i,V),o(i,j),o(j,q),o(j,$),o(j,B),o(j,H),_(H,e[4]),o(i,z),o(i,K),o(i,G),o(i,W),o(W,X),o(X,Q),o(X,J),b(X,e[5]),o(n,Y),o(n,Z),tt||(et=[g(p,"change",e[8]),g(E,"change",e[9]),g(O,"input",e[10]),g(F,"input",e[11]),g(H,"input",e[12]),g(X,"change",e[13]),g(Z,"click",e[7])],tt=!0)},p(t,[e]){if(64&e){let n;for(nt=t[6].subjects,n=0;n<nt.length;n+=1){const r=wd(t,nt,n);rt[n]?rt[n].p(r,e):(rt[n]=_d(r),rt[n].c(),rt[n].m(p,null))}for(;n<rt.length;n+=1)rt[n].d(1);rt.length=nt.length}65&e&&b(p,t[0]),1&e&&w(I,t[0]),st===(st=it(t))&&ot?ot.p(t,e):(ot&&ot.d(1),ot=st&&st(t),ot&&(ot.c(),ot.m(E,null))),66&e&&b(E,t[1]),65&e&&S!==(S=t[0]+"-topics")&&y(v,"for",S),4&e&&O.value!==t[2]&&_(O,t[2]),8&e&&F.value!==t[3]&&_(F,t[3]),16&e&&H.value!==t[4]&&_(H,t[4]),32&e&&b(X,t[5])},i:t,o:t,d(t){t&&c(n),u(rt,t),ot&&ot.d(),tt=!1,r(et)}}}function Nd(t,e,n){Bt({apiKey:"AIzaSyDo8hrI5KuCFH1cibXKhtz-st4eLMBJblA",authDomain:"revision-site-48465.firebaseapp.com",databaseURL:"https://revision-site-48465-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"revision-site-48465",storageBucket:"revision-site-48465.appspot.com",messagingSenderId:"72568118803",appId:"1:72568118803:web:7e880faa7845e6d04d69e6"});const r=ih();!function(t=Ht(),e){Vt(t=yt(t),pd).getImmediate({identifier:e})}();const i={subjects:["Physics","Chemistry","IT","Biology"],Physics:["Physical quantities and units","Kinematics","Dynamics","Forces, density and pressure","Work, energy and power","Deformation of solids","Waves","Superposition","Electricity","D.C. circuits","Particle physics"],Chemistry:["Atomic structure","Atoms, molecules and stoichiometry","Chemical bonding","States of matter","Chemical energetics","Electrochemistry","Equilibria","Reaction kinetics","Periodic Table","Group 2","Group 17","Nitrogen and sulfur","Introduction to organic chemistry","Hydrocarbons","Halogen compounds","Hydroxy compounds","Carbonyl compounds","Carboxylic acids and derivatives","Nitrogen compounds","Polymerisation","Organic synthesis"],IT:["Data processing and information","Hardware and software","Monitoring and control","Algorithms and flow charts","eSecurity","The digital divide","Expert systems","Spreadsheets","Database and file concepts","Sound and video editing"]};let s,o,a,c,u,l;return[s,o,a,c,u,l,i,function(){try{const t=function(t,e){const n=Wl(t.firestore,rh),r=eh(t),i=Bh(t.converter,e);return Wh(n,[vh(yh(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,pa.exists(!1))]).then((()=>r))}(th(r,s),{subject:s,topic:o,questionLink:a,answerLink:c,questionOrigin:u,fileType:l});console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}},function(){s=I(this),n(0,s),n(6,i)},function(){o=I(this),n(1,o),n(6,i)},function(){a=this.value,n(2,a)},function(){c=this.value,n(3,c)},function(){u=this.value,n(4,u)},function(){l=I(this),n(5,l)}]}Ft(new vt(pd,gd,"PUBLIC").setMultipleInstances(!0)),zt("@firebase/storage","0.8.2");class Cd extends z{constructor(t){super(),H(this,t,Nd,Ad,s,{})}}function Rd(e){let n,r,i;return{c(){n=l("div"),n.innerHTML='<h1 class="text-center text-white text-2xl font-extrabold py-6">A new and upcoming website for Cambrdige AS/A levels resources</h1>',r=f(),i=l("div"),i.innerHTML='<h3 class="text-3xl font-extrabold text-center">Features that set us apart from other CIE resources:</h3> \n  <div class="flex mt-10"><div class="w-6/12 text-red-400"><div class="font-bold text-lg px-10"><h5>- Collaborative approach where users can contribute to the project</h5> \n          <h5>- Questions only on the chapters that you select</h5> \n          <h5>- Answers attached with questions easily accessible</h5> \n          <h5>- Constantly increasing questions bank</h5></div></div> \n    <div class="w-6/12 bg-red-400"><h5 class="font-bold text-white p-5 text-center">- An interactive clean and easy to use UI</h5></div></div>',y(n,"class","mt-20 mx-auto bg-red-400 w-10/12 rounded-xl"),y(i,"class","mt-10")},m(t,e){a(t,n,e),a(t,r,e),a(t,i,e)},p:t,i:t,o:t,d(t){t&&c(n),t&&c(r),t&&c(i)}}}class Dd extends z{constructor(t){super(),H(this,t,null,Rd,s,{})}}function Od(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xd=Od,Ld=new at("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Pd=new Ct("@firebase/auth");function Md(t,...e){Pd.logLevel<=It.ERROR&&Pd.error(`Auth (9.0.0): ${t}`,...e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ud(t,...e){throw Vd(t,...e)}function Fd(t,...e){return Vd(t,...e)}function Vd(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ld.create(t,...e)}function jd(t,e,...n){if(!t)throw Vd(e,...n)}function qd(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Md(e),new Error(e)}function $d(t,e){t||qd(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Bd=new Map;function Hd(t){$d(t instanceof Function,"Expected a class definition");let e=Bd.get(t);return e?($d(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bd.set(t,e),e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function zd(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Kd(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Gd(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Kd()&&"https:"!==Kd()&&!rt()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Wd{constructor(t,e){this.shortDelay=t,this.longDelay=e,$d(e>t,"Short delay should be less than long delay!"),this.isMobile=nt()||it()}get(){return Gd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xd(t,e){$d(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qd{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void qd("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void qd("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void qd("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Jd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Yd=new Wd(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Zd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tf(t,e,n,r,i={}){return ef(t,i,(()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=dt(Object.assign({key:t.config.apiKey},s)).slice(1),a=new(Qd.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&a.set("X-Firebase-Locale",t.languageCode),Qd.fetch()(rf(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function ef(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jd),e);try{const e=new sf(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw of(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw of(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw of(t,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(t,e,n){const r=Object.assign(Object.assign({},xd()),{[e]:n});return new at("auth","Firebase",r).create(e,{appName:t.name})}(t,a,o);Ud(t,a)}}catch(e){if(e instanceof ot)throw e;Ud(t,"network-request-failed")}}async function nf(t,e,n,r,i={}){const s=await tf(t,e,n,r,i);return"mfaPendingCredential"in s&&Ud(t,"multi-factor-auth-required",{serverResponse:s}),s}function rf(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xd(t.config,i):`${t.config.apiScheme}://${i}`}class sf{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Fd(this.auth,"timeout"))),Yd.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function of(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Fd(t,e,r);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function af(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function cf(t){return 1e3*Number(t)}function uf(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return Md("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return Z.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return t?JSON.parse(t):(Md("Failed to decode base64 JWT payload"),null)}catch(t){return Md("Caught error parsing JWT payload as JSON",t),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function lf(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof ot&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class hf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class df{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=af(this.lastLoginAt),this.creationTime=af(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ff(t){var e;const n=t.auth,r=await t.getIdToken(),i=await lf(t,async function(t,e){return tf(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));jd(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=G(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new df(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class pf{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){jd(t.idToken,"internal-error"),jd(void 0!==t.idToken,"internal-error"),jd(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=uf(t);return jd(e,"internal-error"),jd(void 0!==e.exp,"internal-error"),jd(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return jd(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e){const n=await ef(t,{},(()=>{const n=dt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=rf(t,r,"/v1/token",`key=${i}`);return Qd.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new pf;return n&&(jd("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(jd("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(jd("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pf,this.toJSON())}_performRefresh(){return qd("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function gf(t,e){jd("string"==typeof t||void 0===t,"internal-error",{appName:e})}class mf{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=G(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new hf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new df(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await lf(this,this.stsTokenManager.getToken(this.auth,t));return jd(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=uf(r);jd(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:af(cf(i.auth_time)),issuedAtTime:af(cf(i.iat)),expirationTime:af(cf(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=yt(t);await ff(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(jd(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new mf(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){jd(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await ff(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await lf(this,async function(t,e){return tf(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=e;jd(v&&I,t,"internal-error");const T=pf.fromJSON(this.name,I);jd("string"==typeof v,t,"internal-error"),gf(l,t.name),gf(h,t.name),jd("boolean"==typeof w,t,"internal-error"),jd("boolean"==typeof _,t,"internal-error"),gf(d,t.name),gf(f,t.name),gf(p,t.name),gf(g,t.name),gf(m,t.name),gf(y,t.name);const E=new mf({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(E.providerData=b.map((t=>Object.assign({},t)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(t,e,n=!1){const r=new pf;r.updateFromServerResponse(e);const i=new mf({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await ff(i),i}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}yf.type="NONE";const vf=yf;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wf(t,e,n){return`firebase:${t}:${e}:${n}`}class _f{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=wf(this.userKey,r.apiKey,i),this.fullPersistenceKey=wf("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?mf._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new _f(Hd(vf),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||Hd(vf);const s=wf(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=mf._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new _f(i,t,n)):new _f(i,t,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function bf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(If(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Af(e))return"Blackberry";if(Nf(e))return"Webos";if(Tf(e))return"Safari";if((e.includes("chrome/")||Ef(e))&&!e.includes("edge/"))return"Chrome";if(kf(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function If(t=et()){return/firefox\//i.test(t)}function Tf(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ef(t=et()){return/crios\//i.test(t)}function Sf(t=et()){return/iemobile/i.test(t)}function kf(t=et()){return/android/i.test(t)}function Af(t=et()){return/blackberry/i.test(t)}function Nf(t=et()){return/webos/i.test(t)}function Cf(t=et()){return/iphone|ipad|ipod/i.test(t)}function Rf(t=et()){return Cf(t)||kf(t)||Nf(t)||Af(t)||/windows phone/i.test(t)||Sf(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Df(t,e=[]){let n;switch(t){case"Browser":n=bf(et());break;case"Worker":n=`${bf(et())}-${t}`;break;default:n=t}return`${n}/JsCore/9.0.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Of{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lf(this),this.idTokenSubscription=new Lf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ld,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Hd(e)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await _f.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(jd(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ff(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?yt(t):null;return e&&jd(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&jd(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Hd(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new at("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Hd(t)||this._popupRedirectResolver;jd(e,this,"argument-error"),this.redirectPersistenceManager=await _f.create(this,[Hd(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return jd(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return jd(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Df(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function xf(t){return yt(t)}class Lf{constructor(t){var e,n;this.auth=t,this.observer=null,this.addObserver=(n=new gt((t=>this.observer=t),e)).subscribe.bind(n)}get next(){return jd(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pf{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return qd("not implemented")}_getIdTokenResponse(t){return qd("not implemented")}_linkToIdToken(t,e){return qd("not implemented")}_getReauthenticationResolver(t){return qd("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Mf extends Pf{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Mf(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Mf(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(t,e){return nf(t,"POST","/v1/accounts:signInWithPassword",Zd(t,e))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return nf(t,"POST","/v1/accounts:signInWithEmailLink",Zd(t,e))}(t,{email:this._email,oobCode:this._password});default:Ud(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return async function(t,e){return tf(t,"POST","/v1/accounts:update",e)}(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return nf(t,"POST","/v1/accounts:signInWithEmailLink",Zd(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Ud(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Uf(t,e){return nf(t,"POST","/v1/accounts:signInWithIdp",Zd(t,e))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ff extends Pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ff(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ud("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=G(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ff(n,r);return Object.assign(s,i),s}_getIdTokenResponse(t){return Uf(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Uf(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Uf(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=dt(e)}return t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vf{constructor(t){var e,n,r,i,s,o;const a=ft(pt(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);jd(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=ft(pt(t)).link,n=e?ft(pt(e)).deep_link_id:null,r=ft(pt(t)).deep_link_id;return(r?ft(pt(r)).link:null)||r||n||e||t}(t);try{return new Vf(e)}catch(t){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jf{constructor(){this.providerId=jf.PROVIDER_ID}static credential(t,e){return Mf._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Vf.parseLink(e);return jd(n,"argument-error"),Mf._fromEmailAndCode(t,n.code,n.tenantId)}}jf.PROVIDER_ID="password",jf.EMAIL_PASSWORD_SIGN_IN_METHOD="password",jf.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class qf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $f extends qf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bf extends $f{constructor(){super("facebook.com")}static credential(t){return Ff._fromParams({providerId:Bf.PROVIDER_ID,signInMethod:Bf.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bf.credentialFromTaggedObject(t)}static credentialFromError(t){return Bf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Bf.credential(t.oauthAccessToken)}catch(t){return null}}}Bf.FACEBOOK_SIGN_IN_METHOD="facebook.com",Bf.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Hf extends $f{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ff._fromParams({providerId:Hf.PROVIDER_ID,signInMethod:Hf.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Hf.credentialFromTaggedObject(t)}static credentialFromError(t){return Hf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Hf.credential(e,n)}catch(t){return null}}}Hf.GOOGLE_SIGN_IN_METHOD="google.com",Hf.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class zf extends $f{constructor(){super("github.com")}static credential(t){return Ff._fromParams({providerId:zf.PROVIDER_ID,signInMethod:zf.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zf.credentialFromTaggedObject(t)}static credentialFromError(t){return zf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return zf.credential(t.oauthAccessToken)}catch(t){return null}}}zf.GITHUB_SIGN_IN_METHOD="github.com",zf.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Kf extends $f{constructor(){super("twitter.com")}static credential(t,e){return Ff._fromParams({providerId:Kf.PROVIDER_ID,signInMethod:Kf.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Kf.credentialFromTaggedObject(t)}static credentialFromError(t){return Kf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Kf.credential(e,n)}catch(t){return null}}}Kf.TWITTER_SIGN_IN_METHOD="twitter.com",Kf.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Gf{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await mf._fromIdTokenResponse(t,n,r),s=Wf(n);return new Gf({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Wf(n);return new Gf({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Wf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xf extends ot{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Xf.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new Xf(t,e,n,r)}}function Qf(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Xf._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Jf(t,e,n=!1){const r="signIn",i=await Qf(t,r,e),s=await Gf._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Yf(t,e,n){const r=xf(t),i=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e){return nf(t,"POST","/v1/accounts:signUp",Zd(t,e))}(r,{returnSecureToken:!0,email:e,password:n}),s=await Gf._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Zf(t,e,n){return async function(t,e){return Jf(xf(t),e)}(yt(t),jf.credential(e,n))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function tp(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const r=yt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await lf(r,async function(t,e){return tf(t,"POST","/v1/accounts:update",e)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:t})=>"password"===t));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function ep(t,e,n,r){return yt(t).onAuthStateChanged(e,n,r)}const np="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rp{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(np,"1"),this.storage.removeItem(np),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ip extends rp{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=et();return Tf(t)||Cf(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Rf(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);st()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ip.type="LOCAL";const sp=ip;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class op extends rp{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}op.type="SESSION";const ap=op;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class cp{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new cp(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function up(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */cp.receivers=[];class lp{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=up("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function hp(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function dp(){return void 0!==hp().WorkerGlobalScope&&"function"==typeof hp().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const fp="firebaseLocalStorageDb",pp="firebaseLocalStorage",gp="fbase_key";class mp{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function yp(t,e){return t.transaction([pp],e?"readwrite":"readonly").objectStore(pp)}function vp(){const t=indexedDB.open(fp,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(pp,{keyPath:gp})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(pp)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(fp);return new mp(t).toPromise()}(),e(await vp()))}))}))}async function wp(t,e,n){const r=yp(t,!0).put({[gp]:e,value:n});return new mp(r).toPromise()}function _p(t,e){const n=yp(t,!0).delete(e);return new mp(n).toPromise()}class bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await vp()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cp._getInstance(dp()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new lp(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&function(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await vp();return await wp(t,np,"1"),await _p(t,np),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>wp(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=yp(t,!1).get(e),r=await new mp(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>_p(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=yp(t,!1).getAll();return new mp(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bp.type="LOCAL";const Ip=bp;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Tp(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=Fd("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",function(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}().appendChild(r)}))}new Wd(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ep extends Pf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Uf(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Uf(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Uf(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Sp(t){return Jf(t.auth,new Ep(t),t.bypassAuthState)}function kp(t){const{auth:e,user:n}=t;return jd(n,e,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await lf(t,Qf(r,i,e,t),n);jd(s.idToken,r,"internal-error");const o=uf(s.idToken);jd(o,r,"internal-error");const{sub:a}=o;return jd(t.uid===a,r,"user-mismatch"),Gf._forOperation(t,i,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Ud(r,"user-mismatch"),t}}(n,new Ep(t),t.bypassAuthState)}async function Ap(t){const{auth:e,user:n}=t;return jd(n,e,"internal-error"),async function(t,e,n=!1){const r=await lf(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gf._forOperation(t,"link",r)}(n,new Ep(t),t.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Np{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Sp;case"linkViaPopup":case"linkViaRedirect":return Ap;case"reauthViaPopup":case"reauthViaRedirect":return kp;default:Ud(this.auth,"internal-error")}}resolve(t){$d(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$d(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Cp=new Wd(2e3,1e4);class Rp extends Np{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Rp.currentPopupAction&&Rp.currentPopupAction.cancel(),Rp.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return jd(t,this.auth,"internal-error"),t}async onExecution(){$d(1===this.filter.length,"Popup operations only handle one event");const t=up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Fd(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Fd(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rp.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Fd(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Cp.get())};t()}}Rp.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Dp="pendingRedirect",Op=new Map;class xp extends Np{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Op.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return wf(Dp,t.config.apiKey,t.name)}(e),r="true"===await Lp(t)._get(n);return await Lp(t)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Op.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Lp(t){return Hd(t._redirectPersistence)}async function Pp(t,e,n=!1){const r=xf(t),i=
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(t,e){return e?Hd(e):(jd(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}(r,e),s=new xp(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mp{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fp(t);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Fp(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Fd(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Up(t))}saveEventToCache(t){this.cachedEventUids.add(Up(t)),this.lastProcessedEventTime=Date.now()}}function Up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Fp({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Vp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jp=/^https?/;async function qp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return tf(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if($p(t))return}catch(t){}Ud(t,"unauthorized-domain")}function $p(t){const e=zd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!jp.test(n))return!1;if(Vp.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Bp=new Wd(3e4,6e4);function Hp(){const t=hp().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function zp(t){return new Promise(((e,n)=>{var r,i,s;function o(){Hp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hp(),n(Fd(t,"network-request-failed"))},timeout:Bp.get()})}if(null===(i=null===(r=hp().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=hp().gapi)||void 0===s?void 0:s.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return hp()[e]=()=>{gapi.load?o():n(Fd(t,"network-request-failed"))},Tp(`https://apis.google.com/js/api.js?onload=${e}`)}o()}})).catch((t=>{throw Kp=null,t}))}let Kp=null;
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Gp=new Wd(5e3,15e3),Wp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Xp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qp(t){const e=t.config;jd(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xd(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:$t},i=Xp.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${dt(r).slice(1)}`}async function Jp(t){const e=await function(t){return Kp=Kp||zp(t),Kp}(t),n=hp().gapi;return jd(n,t,"internal-error"),e.open({where:document.body,url:Qp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wp,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=Fd(t,"network-request-failed"),s=hp().setTimeout((()=>{r(i)}),Gp.get());function o(){hp().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Yp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Zp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function tg(t,e,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yp),{width:r.toString(),height:i.toString(),top:s,left:o}),u=et().toLowerCase();n&&(a=Ef(u)?"_blank":n),If(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=et()){var e;return Cf(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e||"",a),new Zp(null);const h=window.open(e||"",a,l);jd(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Zp(h)}const eg="__/auth/handler",ng="emulator/auth/handler";function rg(t,e,n,r,i,s){jd(t.config.authDomain,t,"auth-domain-config-required"),jd(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$t,eventId:i};if(e instanceof qf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof $f){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/${eg}`;return Xd(t,ng)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}?${dt(a).slice(1)}`}const ig="webStorageSupport";const sg=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ap,this._completeRedirectFn=Pp}async _openPopup(t,e,n,r){var i;$d(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return tg(t,rg(t,e,n,zd(),r),up())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=rg(t,e,n,zd(),r),hp().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):($d(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Jp(t),n=new Mp(t);return e.register("authEvent",(e=>{jd(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(ig,{type:ig},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),Ud(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=qp(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Rf()||Tf()||Cf()}};var og;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ag{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){jd(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function cg(t=Ht()){const e=Vt(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=Vt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(lt(n.getOptions(),null!=e?e:{}))return t;Ud(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:sg,persistence:[Ip,sp,ap]})}function ug(e){let n,i,s,u,h,p,v,b,I,T,E,S,k,A,N,C,R,D,O,x,L,P,M,U,F,V,j,q,$,B,H,z,K,G,W,X,Q,J,Y,Z,tt;return{c(){n=l("div"),i=l("form"),s=l("br"),u=l("br"),h=f(),p=l("h2"),p.textContent="Sign up",v=f(),b=l("input"),I=f(),T=l("input"),E=f(),S=l("input"),k=f(),A=l("input"),N=f(),C=l("br"),R=f(),D=l("h2"),D.textContent="Sign in",O=f(),x=l("input"),L=f(),P=l("input"),M=f(),U=l("input"),F=f(),V=l("p"),j=d("Hey "),q=d(e[2]),$=d(", welcome back"),B=f(),H=l("p"),H.textContent=`${e[5]}`,z=f(),K=l("p"),G=d(e[3]),W=f(),X=l("p"),Q=d(e[4]),J=f(),Y=l("button"),Y.textContent="Sign-out",y(p,"class","text-lg text-red-500 font-bold"),y(b,"type","text"),y(T,"type","email"),y(S,"type","password"),y(A,"type","submit"),y(D,"class","text-lg text-red-500 font-bold"),y(x,"type","email"),y(P,"type","password"),y(U,"type","submit"),y(i,"action",""),y(n,"class","mx-auto")},m(t,r){a(t,n,r),o(n,i),o(i,s),o(i,u),o(i,h),o(i,p),o(i,v),o(i,b),_(b,e[2]),o(i,I),o(i,T),_(T,e[0]),o(i,E),o(i,S),_(S,e[1]),o(i,k),o(i,A),o(i,N),o(i,C),o(i,R),o(i,D),o(i,O),o(i,x),_(x,e[0]),o(i,L),o(i,P),_(P,e[1]),o(i,M),o(i,U),o(n,F),o(n,V),o(V,j),o(V,q),o(V,$),o(n,B),o(n,H),o(n,z),o(n,K),o(K,G),o(n,W),o(n,X),o(X,Q),o(n,J),o(n,Y),Z||(tt=[g(b,"input",e[9]),g(T,"input",e[10]),g(S,"input",e[11]),g(A,"click",m(e[6])),g(x,"input",e[12]),g(P,"input",e[13]),g(U,"click",m(e[7])),g(Y,"click",e[8])],Z=!0)},p(t,[e]){4&e&&b.value!==t[2]&&_(b,t[2]),1&e&&T.value!==t[0]&&_(T,t[0]),2&e&&S.value!==t[1]&&_(S,t[1]),1&e&&x.value!==t[0]&&_(x,t[0]),2&e&&P.value!==t[1]&&_(P,t[1]),4&e&&w(q,t[2]),8&e&&w(G,t[3]),16&e&&w(Q,t[4])},i:t,o:t,d(t){t&&c(n),Z=!1,r(tt)}}}function lg(t,e,n){let r,i,s,o,a,c;Bt({apiKey:"AIzaSyDo8hrI5KuCFH1cibXKhtz-st4eLMBJblA",authDomain:"revision-site-48465.firebaseapp.com",databaseURL:"https://revision-site-48465-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"revision-site-48465",storageBucket:"revision-site-48465.appspot.com",messagingSenderId:"72568118803",appId:"1:72568118803:web:7e880faa7845e6d04d69e6"});const u=ih(),l=cg();return[r,i,o,a,c,undefined,function(){Yf(l,r,i).then((t=>{s=t.user,console.log(s),async function(){console.log(s.uid),await function(t,e,n){t=Wl(t,Jl);const r=Wl(t.firestore,rh),i=Bh(t.converter,e,n);return Wh(r,[vh(yh(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,pa.none())])}(eh(u,"users",s.uid),{Chemistry:[],Physics:[],IT:[]}),console.log(s.uid)}()})).catch((t=>{t.code,n(3,a=t.message)})),tp(l.currentUser,{displayName:o,photoURL:""}).then((()=>{})).catch((t=>{}))},function(){Zf(l,r,i).then((t=>{s=t.user,n(2,o=s.displayName),n(4,c=s.email),console.log(c),console.log(o),console.log(s)})).catch((t=>{t.code,n(3,a=t.message)})),n(1,i="")},async function(){(function(t){return yt(t).signOut()})(l).then((()=>{console.log("signed out")})).catch((t=>{console.log(t)}))},function(){o=this.value,n(2,o)},function(){r=this.value,n(0,r)},function(){i=this.value,n(1,i)},function(){r=this.value,n(0,r)},function(){i=this.value,n(1,i)}]}og="Browser",Ft(new vt("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(t=>{jd(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),jd(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:i,clientPlatform:og,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Df(og)},s=new Of(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hd);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Ft(new vt("auth-internal",(t=>(t=>new ag(t))(xf(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),zt("@firebase/auth","0.17.2",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(og));class hg extends z{constructor(t){super(),H(this,t,lg,ug,s,{})}}function dg(e){let n,r,i,s;return i=new hg({}),{c(){n=l("div"),r=d("Profile\r\n    "),j(i.$$.fragment)},m(t,e){a(t,n,e),o(n,r),q(i,n,null),s=!0},p:t,i(t){s||(F(i.$$.fragment,t),s=!0)},o(t){V(i.$$.fragment,t),s=!1},d(t){t&&c(n),$(i)}}}class fg extends z{constructor(t){super(),H(this,t,null,dg,s,{})}}function pg(t,e,n){const r=t.slice();return r[35]=e[n],r}function gg(t,e,n){const r=t.slice();return r[32]=e[n],r}function mg(t,e,n){const r=t.slice();return r[29]=e[n],r}function yg(t,e,n){const r=t.slice();return r[38]=e[n],r}function vg(t){let e,n,r,i,s,u=t[38]+"";function h(){return t[11](t[38])}return{c(){e=l("div"),n=d(u),y(e,"class",r="mx-6 px-12 py-4 rounded-md hover:bg-red-500 hover:text-white ring-2 ring-red-500 "+(t[2]==t[38]?"bg-red-500 text-white":"text-red-400"))},m(t,r){a(t,e,r),o(e,n),i||(s=g(e,"click",h),i=!0)},p(n,i){t=n,4&i[0]&&r!==(r="mx-6 px-12 py-4 rounded-md hover:bg-red-500 hover:text-white ring-2 ring-red-500 "+(t[2]==t[38]?"bg-red-500 text-white":"text-red-400"))&&y(e,"class",r)},d(t){t&&c(e),i=!1,s()}}}function wg(t){let e,n=t[5].IT,r=[];for(let e=0;e<n.length;e+=1)r[e]=Ig(pg(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=p()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);a(t,e,n)},p(t,i){if(34&i[0]){let s;for(n=t[5].IT,s=0;s<n.length;s+=1){const o=pg(t,n,s);r[s]?r[s].p(o,i):(r[s]=Ig(o),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){u(r,t),t&&c(e)}}}function _g(t){let e,n=t[5].Chemistry,r=[];for(let e=0;e<n.length;e+=1)r[e]=Tg(gg(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=p()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);a(t,e,n)},p(t,i){if(34&i[0]){let s;for(n=t[5].Chemistry,s=0;s<n.length;s+=1){const o=gg(t,n,s);r[s]?r[s].p(o,i):(r[s]=Tg(o),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){u(r,t),t&&c(e)}}}function bg(t){let e,n=t[5].Physics,r=[];for(let e=0;e<n.length;e+=1)r[e]=Eg(mg(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=p()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);a(t,e,n)},p(t,i){if(34&i[0]){let s;for(n=t[5].Physics,s=0;s<n.length;s+=1){const o=mg(t,n,s);r[s]?r[s].p(o,i):(r[s]=Eg(o),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){u(r,t),t&&c(e)}}}function Ig(t){let e,n,r,i,s,u,h,p,m=t[35]+"";return{c(){e=l("label"),n=l("input"),i=f(),s=d(m),u=f(),y(n,"type","checkbox"),n.__value=r=t[35],n.value=n.__value,t[13][2].push(n),y(e,"class","m-1")},m(r,c){a(r,e,c),o(e,n),n.checked=~t[1].IT.indexOf(n.__value),o(e,i),o(e,s),o(e,u),h||(p=g(n,"change",t[15]),h=!0)},p(t,e){2&e[0]&&(n.checked=~t[1].IT.indexOf(n.__value))},d(r){r&&c(e),t[13][2].splice(t[13][2].indexOf(n),1),h=!1,p()}}}function Tg(t){let e,n,r,i,s,u,h,p,m=t[32]+"";return{c(){e=l("label"),n=l("input"),i=f(),s=d(m),u=f(),y(n,"type","checkbox"),n.__value=r=t[32],n.value=n.__value,t[13][1].push(n),y(e,"class","m-1")},m(r,c){a(r,e,c),o(e,n),n.checked=~t[1].Chemistry.indexOf(n.__value),o(e,i),o(e,s),o(e,u),h||(p=g(n,"change",t[14]),h=!0)},p(t,e){2&e[0]&&(n.checked=~t[1].Chemistry.indexOf(n.__value))},d(r){r&&c(e),t[13][1].splice(t[13][1].indexOf(n),1),h=!1,p()}}}function Eg(t){let e,n,r,i,s,u,h,p,m=t[29]+"";return{c(){e=l("label"),n=l("input"),i=f(),s=d(m),u=f(),y(n,"type","checkbox"),n.__value=r=t[29],n.value=n.__value,t[13][0].push(n),y(e,"class","m-1")},m(r,c){a(r,e,c),o(e,n),n.checked=~t[1].Physics.indexOf(n.__value),o(e,i),o(e,s),o(e,u),h||(p=g(n,"change",t[12]),h=!0)},p(t,e){2&e[0]&&(n.checked=~t[1].Physics.indexOf(n.__value))},d(r){r&&c(e),t[13][0].splice(t[13][0].indexOf(n),1),h=!1,p()}}}function Sg(e){let n,r,i;return{c(){n=l("button"),n.textContent="Show question",y(n,"class","border-white border-2 px-4 py-2 rounded-xl hover:text-red-500 hover:bg-white")},m(t,s){a(t,n,s),r||(i=g(n,"click",e[17]),r=!0)},p:t,d(t){t&&c(n),r=!1,i()}}}function kg(e){let n,r,i;return{c(){n=l("button"),n.textContent="Reveal answer",y(n,"class","border-white border-2 px-4 py-2 rounded-xl hover:text-red-500 hover:bg-white")},m(t,s){a(t,n,s),r||(i=g(n,"click",e[16]),r=!0)},p:t,d(t){t&&c(n),r=!1,i()}}}function Ag(e){let n,i,s,h,p,m,v,_,b,I,T,E,S,k,A,N,C,R,D,O,x,L,P,M,U,F,V,j,q,$,B,H,z,K,G,W,X,Q=e[3]+1+"",J=e[5].subjects,Y=[];for(let t=0;t<J.length;t+=1)Y[t]=vg(yg(e,J,t));function Z(t,e){return t[2]==t[5].subjects[0]?bg:t[2]==t[5].subjects[1]?_g:t[2]==t[5].subjects[2]?wg:void 0}let tt=Z(e),et=tt&&tt(e);function nt(t,e){return 0==t[4]?kg:1==t[4]?Sg:void 0}let rt=nt(e),it=rt&&rt(e);return{c(){n=l("div"),i=l("h2"),i.textContent="Select Subject",s=f(),h=l("div");for(let t=0;t<Y.length;t+=1)Y[t].c();p=f(),m=l("div"),v=l("div"),_=l("h2"),_.textContent="Select Topics",b=f(),et&&et.c(),I=f(),T=l("button"),T.textContent="Apply",E=f(),S=l("div"),k=l("div"),A=l("button"),A.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>',N=f(),it&&it.c(),C=f(),R=l("div"),D=l("p"),O=d("Index: "),x=d(Q),L=d("/"),P=d(e[0]),M=f(),U=l("div"),F=f(),V=l("button"),V.textContent="answered",j=f(),q=l("button"),q.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>',$=f(),B=l("div"),z=f(),K=l("div"),y(i,"class","text-red-500 text-3xl text-center my-7"),y(h,"class","flex justify-center"),y(_,"class","font-extrabold my-8 text-center text-2xl"),y(T,"class","my-6 mx-auto w-3/6 border-white border-4 py-3 rounded-full hover:bg-white hover:text-red-500 font-extrabold"),y(v,"class","w-3/12 bg-red-500 flex flex-col text-white text-sm font-bold my-10"),y(A,"class","border-none"),y(U,"id","details"),y(R,"class","flex flex-col"),y(V,"class","border-white border-2 px-4 py-2 rounded-xl hover:text-red-500 hover:bg-white"),y(q,"class","border-none"),y(k,"class","bg-red-500 py-2 flex justify-between text-white px-6"),y(B,"id","question-holder"),y(B,"class",H="rounded-lg "+(0==e[4]?"block":"hidden")),y(K,"id","answer-holder"),y(K,"class",G="rounded-lg "+(0==e[4]?"hidden":"block")),y(S,"class","w-8/12 mx-auto ring-4 ring-red-500 rounded-lg mb-10"),y(m,"class","flex my-14"),y(n,"class","mx-auto rounded-sm")},m(t,r){a(t,n,r),o(n,i),o(n,s),o(n,h);for(let t=0;t<Y.length;t+=1)Y[t].m(h,null);o(n,p),o(n,m),o(m,v),o(v,_),o(v,b),et&&et.m(v,null),o(v,I),o(v,T),o(m,E),o(m,S),o(S,k),o(k,A),o(k,N),it&&it.m(k,null),o(k,C),o(k,R),o(R,D),o(D,O),o(D,x),o(D,L),o(D,P),o(R,M),o(R,U),o(k,F),o(k,V),o(k,j),o(k,q),o(S,$),o(S,B),o(S,z),o(S,K),W||(X=[g(T,"click",e[6]),g(A,"click",e[8]),g(V,"click",e[9]),g(q,"click",e[7])],W=!0)},p(t,e){if(36&e[0]){let n;for(J=t[5].subjects,n=0;n<J.length;n+=1){const r=yg(t,J,n);Y[n]?Y[n].p(r,e):(Y[n]=vg(r),Y[n].c(),Y[n].m(h,null))}for(;n<Y.length;n+=1)Y[n].d(1);Y.length=J.length}tt===(tt=Z(t))&&et?et.p(t,e):(et&&et.d(1),et=tt&&tt(t),et&&(et.c(),et.m(v,I))),rt===(rt=nt(t))&&it?it.p(t,e):(it&&it.d(1),it=rt&&rt(t),it&&(it.c(),it.m(k,C))),8&e[0]&&Q!==(Q=t[3]+1+"")&&w(x,Q),1&e[0]&&w(P,t[0]),16&e[0]&&H!==(H="rounded-lg "+(0==t[4]?"block":"hidden"))&&y(B,"class",H),16&e[0]&&G!==(G="rounded-lg "+(0==t[4]?"hidden":"block"))&&y(K,"class",G)},i:t,o:t,d(t){t&&c(n),u(Y,t),et&&et.d(),it&&it.d(),W=!1,r(X)}}}function Ng(t,e,n){Bt({apiKey:"AIzaSyDo8hrI5KuCFH1cibXKhtz-st4eLMBJblA",authDomain:"revision-site-48465.firebaseapp.com",databaseURL:"https://revision-site-48465-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"revision-site-48465",storageBucket:"revision-site-48465.appspot.com",messagingSenderId:"72568118803",appId:"1:72568118803:web:7e880faa7845e6d04d69e6"});const r=ih();let i,s;ep(cg(),(t=>{if(t){async function e(){const t=eh(r,"users",i),e=await Hh(t);e.exists()?n(10,s=e.data()):console.log("No such document!")}i=t.uid,e(),console.log(t)}}));const o={subjects:["Physics","Chemistry","IT","Biology"],Physics:["Physical quantities and units","Kinematics","Dynamics","Forces, density and pressure","Work, energy and power","Deformation of solids","Waves","Superposition","Electricity","D.C. circuits","Particle physics"],Chemistry:["Atomic structure","Atoms, molecules and stoichiometry","Chemical bonding","States of matter","Chemical energetics","Electrochemistry","Equilibria","Reaction kinetics","Periodic Table","Group 2","Group 17","Nitrogen and sulfur","Introduction to organic chemistry","Hydrocarbons","Halogen compounds","Hydroxy compounds","Carbonyl compounds","Carboxylic acids and derivatives","Nitrogen compounds","Polymerisation","Organic synthesis"],IT:["Data processing and information","Hardware and software","Monitoring and control","Algorithms and flow charts","eSecurity","The digital divide","Expert systems","Spreadsheets","Database and file concepts","Sound and video editing"]},a={Physics:[],Chemistry:[],Maths:[],IT:[]};let c=0,u="placeholder",l=[],h=[];let d=0,f=!1;function p(){"pdf"==h[d].fileType?document.getElementById("question-holder").innerHTML=`<iframe src="${h[d].questionLink}#toolbar=0" class="w-full rounded-xl" height="650px"></iframe>`:"PNG"==h[d].fileType&&(document.getElementById("question-holder").innerHTML=`<img src="${h[d].questionLink}" alt="" class="w-full">`),document.getElementById("answer-holder").innerHTML=`<img src="${h[d].answerLink}" class="w-full rounded-xl">`,document.getElementById("details").innerHTML=`<p>Chapter: ${h[d].topic}</p>`,console.log(l[d])}console.log(s);const g=[[],[],[]];return t.$$.update=()=>{1024&t.$$.dirty[0]&&console.log(s),1&t.$$.dirty[0]&&console.log(c)},[c,a,u,d,f,o,async function(){let t;u==o.subjects[0]?(t=Fh(th(r,u),jh("topic","in",a.Physics)),console.log("physics")):u==o.subjects[1]?(t=Fh(th(r,u),jh("topic","in",a.Chemistry)),console.log("chem")):u==o.subjects[2]&&(t=Fh(th(r,u),jh("topic","in",a.IT)),console.log("IT"));const e=await Kh(t);console.log(e),e.forEach((t=>{"Physics"==u?s.Physics.includes(t.id)||(h.push(t.data()),l.push(t.id),n(0,c++,c)):"Chemistry"==u?s.Chemistry.includes(t.id)||(h.push(t.data()),l.push(t.id),n(0,c++,c)):"IT"==u&&(s.IT.includes(t.id)||(h.push(t.data()),l.push(t.id),n(0,c++,c)))})),p()},function(){h.length>d+1&&(n(4,f=!1),n(3,d++,d),p())},function(){d>=1&&(n(4,f=!1),n(3,d--,d),p())},async function(){const t=eh(r,"users",i);console.log("answered",i,l[d],u),"Physics"==u?await Gh(t,{Physics:Xh(l[d])}):"Chemistry"==u?await Gh(t,{Chemistry:Xh(l[d])}):"IT"==u&&await Gh(t,{IT:Xh(l[d])})},s,t=>n(2,u=t),function(){a.Physics=v(g[0],this.__value,this.checked),n(1,a)},g,function(){a.Chemistry=v(g[1],this.__value,this.checked),n(1,a)},function(){a.IT=v(g[2],this.__value,this.checked),n(1,a)},()=>n(4,f=!0),()=>n(4,f=!1)]}class Cg extends z{constructor(t){super(),H(this,t,Ng,Ag,s,{},null,[-1,-1])}}function Rg(t,e,n){const r=t.slice();return r[14]=e[n],r}function Dg(t){let e,n,r,i,s,u=t[14]+"";function h(){return t[5](t[14])}return{c(){e=l("button"),n=d(u),y(e,"id",r=t[14]),y(e,"class","border-none font-bold my-auto")},m(t,r){a(t,e,r),o(e,n),i||(s=g(e,"click",h),i=!0)},p(e,n){t=e},d(t){t&&c(e),i=!1,s()}}}function Og(e){let n,r,i;return{c(){n=l("button"),n.textContent="Login",y(n,"class","border-white border-2 font-bold my-auto py-2 px-4 rounded-xl")},m(t,s){a(t,n,s),r||(i=g(n,"click",e[6]),r=!0)},p:t,d(t){t&&c(n),r=!1,i()}}}function xg(t){let e,n,r,i,s,u,p,g,m,v,_;return{c(){e=h("svg"),n=h("path"),r=f(),i=l("div"),s=l("p"),u=d("Name: "),p=d(t[2]),g=f(),m=l("p"),v=d("Email: "),_=d(t[1]),y(n,"stroke-linecap","round"),y(n,"stroke-linejoin","round"),y(n,"stroke-width","2"),y(n,"d","M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"class","h-8 w-8"),y(e,"fill","none"),y(e,"viewBox","0 0 24 24"),y(e,"stroke","currentColor")},m(t,c){a(t,e,c),o(e,n),a(t,r,c),a(t,i,c),o(i,s),o(s,u),o(s,p),o(i,g),o(i,m),o(m,v),o(m,_)},p(t,e){4&e&&w(p,t[2]),2&e&&w(_,t[1])},d(t){t&&c(e),t&&c(r),t&&c(i)}}}function Lg(t){let e,n;return e=new Cd({}),{c(){j(e.$$.fragment)},m(t,r){q(e,t,r),n=!0},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function Pg(t){let e,n;return e=new fg({}),{c(){j(e.$$.fragment)},m(t,r){q(e,t,r),n=!0},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function Mg(t){let e,n;return e=new Cg({}),{c(){j(e.$$.fragment)},m(t,r){q(e,t,r),n=!0},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function Ug(t){let e,n;return e=new Dd({}),{c(){j(e.$$.fragment)},m(t,r){q(e,t,r),n=!0},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function Fg(t){let e,n,i,s,h,d,g,m,v,w,_,b=t[4],I=[];for(let e=0;e<b.length;e+=1)I[e]=Dg(Rg(t,b,e));function T(t,e){return null!=t[3]?xg:Og}let E=T(t),S=E(t);const k=[Ug,Mg,Pg,Lg],A=[];function N(t,e){return"Home"==t[0]?0:"Study"==t[0]?1:"Profile"==t[0]?2:"Admin"==t[0]?3:-1}return~(m=N(t))&&(v=A[m]=k[m](t)),{c(){e=l("nav"),n=l("div"),n.innerHTML='<h3>CAIE <span class="bg-white text-red-600 px-2 mx-2 rounded-lg">Express</span></h3>',i=f(),s=l("div");for(let t=0;t<I.length;t+=1)I[t].c();h=f(),d=l("div"),S.c(),g=f(),v&&v.c(),w=p(),y(n,"class","bg-red-500 w-2/12 text-center p-2 text-white font-bold text-lg"),y(s,"class","flex justify-around w-8/12 text-white mx-auto"),y(d,"class","w-3/12 p-3 text-white font-bold text-sm flex justify-evenly"),y(e,"class","bg-red-400 flex")},m(t,r){a(t,e,r),o(e,n),o(e,i),o(e,s);for(let t=0;t<I.length;t+=1)I[t].m(s,null);o(e,h),o(e,d),S.m(d,null),a(t,g,r),~m&&A[m].m(t,r),a(t,w,r),_=!0},p(t,[e]){if(17&e){let n;for(b=t[4],n=0;n<b.length;n+=1){const r=Rg(t,b,n);I[n]?I[n].p(r,e):(I[n]=Dg(r),I[n].c(),I[n].m(s,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=b.length}E===(E=T(t))&&S?S.p(t,e):(S.d(1),S=E(t),S&&(S.c(),S.m(d,null)));let n=m;m=N(t),m!==n&&(v&&(U={r:0,c:[],p:U},V(A[n],1,1,(()=>{A[n]=null})),U.r||r(U.c),U=U.p),~m?(v=A[m],v||(v=A[m]=k[m](t),v.c()),F(v,1),v.m(w.parentNode,w)):v=null)},i(t){_||(F(v),_=!0)},o(t){V(v),_=!1},d(t){t&&c(e),u(I,t),S.d(),t&&c(g),~m&&A[m].d(t),t&&c(w)}}}function Vg(t,e,n){Bt({apiKey:"AIzaSyDo8hrI5KuCFH1cibXKhtz-st4eLMBJblA",authDomain:"revision-site-48465.firebaseapp.com",databaseURL:"https://revision-site-48465-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"revision-site-48465",storageBucket:"revision-site-48465.appspot.com",messagingSenderId:"72568118803",appId:"1:72568118803:web:7e880faa7845e6d04d69e6"});let r="Home";let i,s,o;ep(cg(),(t=>{t&&(n(3,o=t.uid),n(1,i=t.email),n(2,s=t.displayName))}));return[r,i,s,o,["Home","Study","Admin","Profile"],t=>n(0,r=t),()=>n(0,r="Profile")]}return new class extends z{constructor(t){super(),H(this,t,Vg,Fg,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
