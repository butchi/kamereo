!function b(u,t,c){function h(bb,ub){if(!t[bb]){if(!u[bb]){var tb="function"==typeof require&&require;if(!ub&&tb)return tb(bb,!0);if(i)return i(bb,!0);var cb=new Error("Cannot find module '"+bb+"'");throw cb.code="MODULE_NOT_FOUND",cb}var hb=t[bb]={exports:{}};u[bb][0].call(hb.exports,function(b){var t=u[bb][1][b];return h(t?t:b)},hb,hb.exports,b,u,t,c)}return t[bb].exports}for(var i="function"==typeof require&&require,bb=0;bb<c.length;bb++)h(c[bb]);return h}({1:[function(b,u,t){!function(b){"use strict";function u(b){if("string"!=typeof b&&(b=String(b)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(b))throw new TypeError("Invalid character in header field name");return b.toLowerCase()}function t(b){return"string"!=typeof b&&(b=String(b)),b}function c(b){var u={next:function(){var u=b.shift();return{done:void 0===u,value:u}}};return iu.iterable&&(u[Symbol.iterator]=function(){return u}),u}function h(b){this.map={},b instanceof h?b.forEach(function(b,u){this.append(u,b)},this):b&&Object.getOwnPropertyNames(b).forEach(function(u){this.append(u,b[u])},this)}function i(b){return b.bodyUsed?Promise.reject(new TypeError("Already read")):void(b.bodyUsed=!0)}function bb(b){return new Promise(function(u,t){b.onload=function(){u(b.result)},b.onerror=function(){t(b.error)}})}function ub(b){var u=new FileReader,t=bb(u);return u.readAsArrayBuffer(b),t}function tb(b){var u=new FileReader,t=bb(u);return u.readAsText(b),t}function cb(b){for(var u=new Uint8Array(b),t=new Array(u.length),c=0;c<u.length;c++)t[c]=String.fromCharCode(u[c]);return t.join("")}function hb(b){if(b.slice)return b.slice(0);var u=new Uint8Array(b.byteLength);return u.set(new Uint8Array(b)),u.buffer}function ib(){return this.bodyUsed=!1,this._initBody=function(b){if(this._bodyInit=b,b)if("string"==typeof b)this._bodyText=b;else if(iu.blob&&Blob.prototype.isPrototypeOf(b))this._bodyBlob=b;else if(iu.formData&&FormData.prototype.isPrototypeOf(b))this._bodyFormData=b;else if(iu.searchParams&&URLSearchParams.prototype.isPrototypeOf(b))this._bodyText=b.toString();else if(iu.arrayBuffer&&iu.blob&&ut(b))this._bodyArrayBuffer=hb(b.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!iu.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(b)&&!tt(b))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=hb(b)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof b?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):iu.searchParams&&URLSearchParams.prototype.isPrototypeOf(b)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},iu.blob&&(this.blob=function(){var b=i(this);if(b)return b;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(ub)}),this.text=function(){var b=i(this);if(b)return b;if(this._bodyBlob)return tb(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(cb(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},iu.formData&&(this.formData=function(){return this.text().then(tu)}),this.json=function(){return this.text().then(JSON.parse)},this}function bu(b){var u=b.toUpperCase();return ct.indexOf(u)>-1?u:b}function uu(b,u){u=u||{};var t=u.body;if(b instanceof uu){if(b.bodyUsed)throw new TypeError("Already read");this.url=b.url,this.credentials=b.credentials,u.headers||(this.headers=new h(b.headers)),this.method=b.method,this.mode=b.mode,t||null==b._bodyInit||(t=b._bodyInit,b.bodyUsed=!0)}else this.url=String(b);if(this.credentials=u.credentials||this.credentials||"omit",(u.headers||!this.headers)&&(this.headers=new h(u.headers)),this.method=bu(u.method||this.method||"GET"),this.mode=u.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&t)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(t)}function tu(b){var u=new FormData;return b.trim().split("&").forEach(function(b){if(b){var t=b.split("="),c=t.shift().replace(/\+/g," "),h=t.join("=").replace(/\+/g," ");u.append(decodeURIComponent(c),decodeURIComponent(h))}}),u}function cu(b){var u=new h;return b.split(/\r?\n/).forEach(function(b){var t=b.split(":"),c=t.shift().trim();if(c){var h=t.join(":").trim();u.append(c,h)}}),u}function hu(b,u){u||(u={}),this.type="default",this.status="status"in u?u.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in u?u.statusText:"OK",this.headers=new h(u.headers),this.url=u.url||"",this._initBody(b)}if(!b.fetch){var iu={searchParams:"URLSearchParams"in b,iterable:"Symbol"in b&&"iterator"in Symbol,blob:"FileReader"in b&&"Blob"in b&&function(){try{return new Blob,!0}catch(b){return!1}}(),formData:"FormData"in b,arrayBuffer:"ArrayBuffer"in b};if(iu.arrayBuffer)var bt=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],ut=function(b){return b&&DataView.prototype.isPrototypeOf(b)},tt=ArrayBuffer.isView||function(b){return b&&bt.indexOf(Object.prototype.toString.call(b))>-1};h.prototype.append=function(b,c){b=u(b),c=t(c);var h=this.map[b];this.map[b]=h?h+","+c:c},h.prototype["delete"]=function(b){delete this.map[u(b)]},h.prototype.get=function(b){return b=u(b),this.has(b)?this.map[b]:null},h.prototype.has=function(b){return this.map.hasOwnProperty(u(b))},h.prototype.set=function(b,c){this.map[u(b)]=t(c)},h.prototype.forEach=function(b,u){for(var t in this.map)this.map.hasOwnProperty(t)&&b.call(u,this.map[t],t,this)},h.prototype.keys=function(){var b=[];return this.forEach(function(u,t){b.push(t)}),c(b)},h.prototype.values=function(){var b=[];return this.forEach(function(u){b.push(u)}),c(b)},h.prototype.entries=function(){var b=[];return this.forEach(function(u,t){b.push([t,u])}),c(b)},iu.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var ct=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];uu.prototype.clone=function(){return new uu(this,{body:this._bodyInit})},ib.call(uu.prototype),ib.call(hu.prototype),hu.prototype.clone=function(){return new hu(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},hu.error=function(){var b=new hu(null,{status:0,statusText:""});return b.type="error",b};var ht=[301,302,303,307,308];hu.redirect=function(b,u){if(-1===ht.indexOf(u))throw new RangeError("Invalid status code");return new hu(null,{status:u,headers:{location:b}})},b.Headers=h,b.Request=uu,b.Response=hu,b.fetch=function(b,u){return new Promise(function(t,c){var h=new uu(b,u),i=new XMLHttpRequest;i.onload=function(){var b={status:i.status,statusText:i.statusText,headers:cu(i.getAllResponseHeaders()||"")};b.url="responseURL"in i?i.responseURL:b.headers.get("X-Request-URL");var u="response"in i?i.response:i.responseText;t(new hu(u,b))},i.onerror=function(){c(new TypeError("Network request failed"))},i.ontimeout=function(){c(new TypeError("Network request failed"))},i.open(h.method,h.url,!0),"include"===h.credentials&&(i.withCredentials=!0),"responseType"in i&&iu.blob&&(i.responseType="blob"),h.headers.forEach(function(b,u){i.setRequestHeader(u,b)}),i.send("undefined"==typeof h._bodyInit?null:h._bodyInit)})},b.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},{}],2:[function(b,u,t){(function(u){"use strict";function t(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}function c(b){if(b.match(/^#[0-9a-fA-F]+$/)||b.match(/^[a-zA-Z]+$/))return[b];var u=void 0;b=b.replace(/\'/g,'"');try{u=JSON.parse(b)}catch(t){console.error("invalid color.")}return u}var h=function(){function b(b,u){var t=[],c=!0,h=!1,i=void 0;try{for(var bb,ub=b[Symbol.iterator]();!(c=(bb=ub.next()).done)&&(t.push(bb.value),!u||t.length!==u);c=!0);}catch(tb){h=!0,i=tb}finally{try{!c&&ub["return"]&&ub["return"]()}finally{if(h)throw i}}return t}return function(u,t){if(Array.isArray(u))return u;if(Symbol.iterator in Object(u))return b(u,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}();b("whatwg-fetch"),function(){var b=function(){function b(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,b),this.initialize(u)}return i(b,[{key:"initialize",value:function(){var b=this,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.elm=u.elm,this.src=this.elm.getAttribute("data-src");var t=u.from,i=u.to,bb=this.elm.getAttribute("data-color-from"),ub=this.elm.getAttribute("data-color-to");bb&&(this.fromArr=c(bb)),null==t||("string"==typeof t?this.fromArr=[t]:t instanceof Array&&(this.fromArr=t)),ub&&(this.toArr=c(ub)),null==i||("string"==typeof i?this.toArr=[i]:i instanceof Array&&(this.toArr=i)),this.apply=u.apply,fetch(this.src).then(function(b){return b.text()}).then(function(u){var t=new DOMParser,c=t.parseFromString(u,"image/svg+xml");if("function"==typeof b.apply){c=b.apply(c);var i=new XMLSerializer;u=i.serializeToString(c)}var bb=u;if(b.fromArr&&b.toArr)if(1===b.toArr.length)for(var ub=0;ub<b.fromArr.length;ub++)console.log(b.fromArr),bb=bb.replace(b.fromArr[ub],b.toArr[0]);else for(var tb=Math.min(b.fromArr.length,b.toArr.length),cb=0;tb>cb;cb++)bb=bb.replace(b.fromArr[cb],b.toArr[cb]);var hb=encodeURIComponent(bb);b.elm.style["background-image"]='url("data:image/svg+xml,'+hb+'")';var ib=u.match(/viewBox="([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+)"/).slice(3,5),bu=h(ib,2),uu=bu[0],tu=bu[1];b.elm.style.width=uu+"px",b.elm.style.height=tu+"px"})}}]),b}();u.Kamereo=b}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"whatwg-fetch":1}]},{},[2]);