!function 赤(橙,黄,緑){function 青(紫,赤赤){if(!黄[紫]){if(!橙[紫]){var 橙赤="function"==typeof require&&require;if(!赤赤&&橙赤)return 橙赤(紫,!0);if(藍)return 藍(紫,!0);var 黄赤=new Error("Cannot find module '"+紫+"'");throw 黄赤.code="MODULE_NOT_FOUND",黄赤}var 緑赤=黄[紫]={exports:{}};橙[紫][0].call(緑赤.exports,function(赤){var 黄=橙[紫][1][赤];return 青(黄?黄:赤)},緑赤,緑赤.exports,赤,橙,黄,緑)}return 黄[紫].exports}for(var 藍="function"==typeof require&&require,紫=0;紫<緑.length;紫++)青(緑[紫]);return 青}({1:[function(赤,橙,黄){!function(赤){"use strict";function 橙(赤){if("string"!=typeof 赤&&(赤=String(赤)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(赤))throw new TypeError("Invalid character in header field name");return 赤.toLowerCase()}function 黄(赤){return"string"!=typeof 赤&&(赤=String(赤)),赤}function 緑(赤){var 橙={next:function(){var 橙=赤.shift();return{done:void 0===橙,value:橙}}};return 緑橙.iterable&&(橙[Symbol.iterator]=function(){return 橙}),橙}function 青(赤){this.map={},赤 instanceof 青?赤.forEach(function(赤,橙){this.append(橙,赤)},this):赤&&Object.getOwnPropertyNames(赤).forEach(function(橙){this.append(橙,赤[橙])},this)}function 藍(赤){return 赤.bodyUsed?Promise.reject(new TypeError("Already read")):void(赤.bodyUsed=!0)}function 紫(赤){return new Promise(function(橙,黄){赤.onload=function(){橙(赤.result)},赤.onerror=function(){黄(赤.error)}})}function 赤赤(赤){var 橙=new FileReader,黄=紫(橙);return 橙.readAsArrayBuffer(赤),黄}function 橙赤(赤){var 橙=new FileReader,黄=紫(橙);return 橙.readAsText(赤),黄}function 黄赤(赤){for(var 橙=new Uint8Array(赤),黄=new Array(橙.length),緑=0;緑<橙.length;緑++)黄[緑]=String.fromCharCode(橙[緑]);return 黄.join("")}function 緑赤(赤){if(赤.slice)return 赤.slice(0);var 橙=new Uint8Array(赤.byteLength);return 橙.set(new Uint8Array(赤)),橙.buffer}function 青赤(){return this.bodyUsed=!1,this._initBody=function(赤){if(this._bodyInit=赤,赤)if("string"==typeof 赤)this._bodyText=赤;else if(緑橙.blob&&Blob.prototype.isPrototypeOf(赤))this._bodyBlob=赤;else if(緑橙.formData&&FormData.prototype.isPrototypeOf(赤))this._bodyFormData=赤;else if(緑橙.searchParams&&URLSearchParams.prototype.isPrototypeOf(赤))this._bodyText=赤.toString();else if(緑橙.arrayBuffer&&緑橙.blob&&藍橙(赤))this._bodyArrayBuffer=緑赤(赤.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!緑橙.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(赤)&&!紫橙(赤))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=緑赤(赤)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof 赤?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):緑橙.searchParams&&URLSearchParams.prototype.isPrototypeOf(赤)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},緑橙.blob&&(this.blob=function(){var 赤=藍(this);if(赤)return 赤;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?藍(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(赤赤)}),this.text=function(){var 赤=藍(this);if(赤)return 赤;if(this._bodyBlob)return 橙赤(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(黄赤(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},緑橙.formData&&(this.formData=function(){return this.text().then(赤橙)}),this.json=function(){return this.text().then(JSON.parse)},this}function 藍赤(赤){var 橙=赤.toUpperCase();return 赤黄.indexOf(橙)>-1?橙:赤}function 紫赤(赤,橙){橙=橙||{};var 黄=橙.body;if(赤 instanceof 紫赤){if(赤.bodyUsed)throw new TypeError("Already read");this.url=赤.url,this.credentials=赤.credentials,橙.headers||(this.headers=new 青(赤.headers)),this.method=赤.method,this.mode=赤.mode,黄||null==赤._bodyInit||(黄=赤._bodyInit,赤.bodyUsed=!0)}else this.url=String(赤);if(this.credentials=橙.credentials||this.credentials||"omit",(橙.headers||!this.headers)&&(this.headers=new 青(橙.headers)),this.method=藍赤(橙.method||this.method||"GET"),this.mode=橙.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&黄)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(黄)}function 赤橙(赤){var 橙=new FormData;return 赤.trim().split("&").forEach(function(赤){if(赤){var 黄=赤.split("="),緑=黄.shift().replace(/\+/g," "),青=黄.join("=").replace(/\+/g," ");橙.append(decodeURIComponent(緑),decodeURIComponent(青))}}),橙}function 橙橙(赤){var 橙=new 青;return 赤.split(/\r?\n/).forEach(function(赤){var 黄=赤.split(":"),緑=黄.shift().trim();if(緑){var 青=黄.join(":").trim();橙.append(緑,青)}}),橙}function 黄橙(赤,橙){橙||(橙={}),this.type="default",this.status="status"in 橙?橙.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in 橙?橙.statusText:"OK",this.headers=new 青(橙.headers),this.url=橙.url||"",this._initBody(赤)}if(!赤.fetch){var 緑橙={searchParams:"URLSearchParams"in 赤,iterable:"Symbol"in 赤&&"iterator"in Symbol,blob:"FileReader"in 赤&&"Blob"in 赤&&function(){try{return new Blob,!0}catch(赤){return!1}}(),formData:"FormData"in 赤,arrayBuffer:"ArrayBuffer"in 赤};if(緑橙.arrayBuffer)var 青橙=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],藍橙=function(赤){return 赤&&DataView.prototype.isPrototypeOf(赤)},紫橙=ArrayBuffer.isView||function(赤){return 赤&&青橙.indexOf(Object.prototype.toString.call(赤))>-1};青.prototype.append=function(赤,緑){赤=橙(赤),緑=黄(緑);var 青=this.map[赤];this.map[赤]=青?青+","+緑:緑},青.prototype["delete"]=function(赤){delete this.map[橙(赤)]},青.prototype.get=function(赤){return 赤=橙(赤),this.has(赤)?this.map[赤]:null},青.prototype.has=function(赤){return this.map.hasOwnProperty(橙(赤))},青.prototype.set=function(赤,緑){this.map[橙(赤)]=黄(緑)},青.prototype.forEach=function(赤,橙){for(var 黄 in this.map)this.map.hasOwnProperty(黄)&&赤.call(橙,this.map[黄],黄,this)},青.prototype.keys=function(){var 赤=[];return this.forEach(function(橙,黄){赤.push(黄)}),緑(赤)},青.prototype.values=function(){var 赤=[];return this.forEach(function(橙){赤.push(橙)}),緑(赤)},青.prototype.entries=function(){var 赤=[];return this.forEach(function(橙,黄){赤.push([黄,橙])}),緑(赤)},緑橙.iterable&&(青.prototype[Symbol.iterator]=青.prototype.entries);var 赤黄=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];紫赤.prototype.clone=function(){return new 紫赤(this,{body:this._bodyInit})},青赤.call(紫赤.prototype),青赤.call(黄橙.prototype),黄橙.prototype.clone=function(){return new 黄橙(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new 青(this.headers),url:this.url})},黄橙.error=function(){var 赤=new 黄橙(null,{status:0,statusText:""});return 赤.type="error",赤};var 橙黄=[301,302,303,307,308];黄橙.redirect=function(赤,橙){if(-1===橙黄.indexOf(橙))throw new RangeError("Invalid status code");return new 黄橙(null,{status:橙,headers:{location:赤}})},赤.Headers=青,赤.Request=紫赤,赤.Response=黄橙,赤.fetch=function(赤,橙){return new Promise(function(黄,緑){var 青=new 紫赤(赤,橙),藍=new XMLHttpRequest;藍.onload=function(){var 赤={status:藍.status,statusText:藍.statusText,headers:橙橙(藍.getAllResponseHeaders()||"")};赤.url="responseURL"in 藍?藍.responseURL:赤.headers.get("X-Request-URL");var 橙="response"in 藍?藍.response:藍.responseText;黄(new 黄橙(橙,赤))},藍.onerror=function(){緑(new TypeError("Network request failed"))},藍.ontimeout=function(){緑(new TypeError("Network request failed"))},藍.open(青.method,青.url,!0),"include"===青.credentials&&(藍.withCredentials=!0),"responseType"in 藍&&緑橙.blob&&(藍.responseType="blob"),青.headers.forEach(function(赤,橙){藍.setRequestHeader(橙,赤)}),藍.send("undefined"==typeof 青._bodyInit?null:青._bodyInit)})},赤.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},{}],2:[function(赤,橙,黄){"use strict";function 緑(赤,橙){if(!(赤 instanceof 橙))throw new TypeError("Cannot call a class as a function")}function 青(赤){if(赤.match(/^#[0-9a-fA-F]+$/)||赤.match(/^[a-zA-Z]+$/))return[赤];var 橙=void 0;赤=赤.replace(/\'/g,'"');try{橙=JSON.parse(赤)}catch(黄){console.error("invalid color.")}return 橙}Object.defineProperty(黄,"__esModule",{value:!0});var 藍=function(){function 赤(赤,橙){var 黄=[],緑=!0,青=!1,藍=void 0;try{for(var 紫,赤赤=赤[Symbol.iterator]();!(緑=(紫=赤赤.next()).done)&&(黄.push(紫.value),!橙||黄.length!==橙);緑=!0);}catch(橙赤){青=!0,藍=橙赤}finally{try{!緑&&赤赤["return"]&&赤赤["return"]()}finally{if(青)throw 藍}}return 黄}return function(橙,黄){if(Array.isArray(橙))return 橙;if(Symbol.iterator in Object(橙))return 赤(橙,黄);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),紫=function(){function 赤(赤,橙){for(var 黄=0;黄<橙.length;黄++){var 緑=橙[黄];緑.enumerable=緑.enumerable||!1,緑.configurable=!0,"value"in 緑&&(緑.writable=!0),Object.defineProperty(赤,緑.key,緑)}}return function(橙,黄,緑){return 黄&&赤(橙.prototype,黄),緑&&赤(橙,緑),橙}}(),赤赤=function(){function 赤(){var 橙=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};緑(this,赤),this.initialize(橙)}return 紫(赤,[{key:"initialize",value:function(){var 赤=this,橙=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.elm=橙.elm,this.src=this.elm.getAttribute("data-src");var 黄=橙.from,緑=橙.to,紫=this.elm.getAttribute("data-color-from"),赤赤=this.elm.getAttribute("data-color-to");紫&&(this.fromArr=青(紫)),null==黄||("string"==typeof 黄?this.fromArr=[黄]:黄 instanceof Array&&(this.fromArr=黄)),赤赤&&(this.toArr=青(赤赤)),null==緑||("string"==typeof 緑?this.toArr=[緑]:緑 instanceof Array&&(this.toArr=緑)),this.apply=橙.apply,fetch(this.src).then(function(赤){return 赤.text()}).then(function(橙){var 黄=new DOMParser,緑=黄.parseFromString(橙,"image/svg+xml");if("function"==typeof 赤.apply){緑=赤.apply(緑);var 青=new XMLSerializer;橙=青.serializeToString(緑)}var 紫=橙;if(赤.fromArr&&赤.toArr)if(1===赤.toArr.length)for(var 赤赤=0;赤赤<赤.fromArr.length;赤赤++)紫=紫.replace(赤.fromArr[赤赤],赤.toArr[0]);else for(var 橙赤=Math.min(赤.fromArr.length,赤.toArr.length),黄赤=0;橙赤>黄赤;黄赤++)紫=紫.replace(赤.fromArr[黄赤],赤.toArr[黄赤]);var 緑赤=encodeURIComponent(紫);赤.elm.style["background-image"]='url("data:image/svg+xml,'+緑赤+'")';var 青赤=橙.match(/viewBox="([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+)"/).slice(3,5),藍赤=藍(青赤,2),紫赤=藍赤[0],赤橙=藍赤[1];赤.elm.style.width=紫赤+"px",赤.elm.style.height=赤橙+"px"})}}]),赤}();黄["default"]=赤赤},{}],3:[function(赤,橙,黄){(function(橙){"use strict";function 緑(赤){return 赤&&赤.__esModule?赤:{"default":赤}}function 青(赤,橙){if(!(赤 instanceof 橙))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(黄,"__esModule",{value:!0});var 藍=function(){function 赤(赤,橙){for(var 黄=0;黄<橙.length;黄++){var 緑=橙[黄];緑.enumerable=緑.enumerable||!1,緑.configurable=!0,"value"in 緑&&(緑.writable=!0),Object.defineProperty(赤,緑.key,緑)}}return function(橙,黄,緑){return 黄&&赤(橙.prototype,黄),緑&&赤(橙,緑),橙}}();赤("whatwg-fetch");var 紫=赤("./KamereoCore"),赤赤=緑(紫);if(橙.document){var 橙赤=document.querySelectorAll("[data-kamereo-element]");[].forEach.call(橙赤,function(赤){new 赤赤["default"]({elm:赤})})}var 黄赤=function(){function 赤(){var 橙=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};青(this,赤),this.initialize(橙)}return 藍(赤,[{key:"initialize",value:function(){var 赤=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};new 赤赤["default"](赤)}}]),赤}();黄["default"]=黄赤,jQuery&&(jQuery.fn.kamereo=function(){var 赤=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};赤.elm=this[0],new 赤赤["default"](赤)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./KamereoCore":2,"whatwg-fetch":1}]},{},[3]);