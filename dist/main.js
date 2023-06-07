(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n\n.gameboard {\n  display: grid;\n  width: 600px;\n  height: 600px;\n  grid-template-rows: repeat(8, 1fr);\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  pointer-events: none;\n}\n\n.black {\n  background-color: rgb(111, 94, 133);\n}\n\n.black:hover {\n  background-color: rgb(88, 88, 88);\n}\n\n.white {\n  background-color: rgb(230, 204, 204);\n}\n\n.white:hover {\n  background-color: rgb(189, 189, 189);\n}\n\n.instructions {\n  background-color: antiquewhite;\n  font-size: larger;\n  padding: 0px 16px;\n}\n\n.hidden {\n  /* display: none; */\n  opacity: 0;\n  transition: opacity 500ms ease-in-out\n}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e){this.root=this.buildKnight(e,[])}buildKnight(e,t){const n=function(e,t){return{position:e,path:t,moves:[]}}(e,t);return n}#e(e,t){const n=e.position;return n[0]===t[0]&&n[1]===t[1]}#t(e){return e[0]>=0&&e[0]<8&&e[1]>=0&&e[1]<8}#n(e){let t=[];return[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]].forEach((n=>{const r=n[0]+e[0],o=n[1]+e[1];r>=0&&r<8&&o>=0&&o<8&&t.push([r,o])})),t}buildMoves(e,t=[this.root]){const n=t.shift();if(null===n)return null;const r=n.position;return this.#e(n,e)?n:(this.#n(r).forEach((e=>{const r=this.buildKnight(e);r.path=n.path.concat([e]),n.moves.push(r),t.push(r)})),this.buildMoves(e,t))}}var t=n(379),r=n.n(t),o=n(795),i=n.n(o),a=n(569),s=n.n(a),c=n(565),u=n.n(c),l=n(216),d=n.n(l),p=n(589),f=n.n(p),h=n(426),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;let m=[4,4];function y(){document.querySelectorAll(".square").forEach((e=>e.addEventListener("click",g)))}function g(t){document.querySelectorAll(".square").forEach((e=>e.removeEventListener("click",g)));const n=(r=t.target.id,[parseInt(r.charAt(1),10),parseInt(r.charAt(3),10)]);var r;const o=function(t,n){let r=new e(t).buildMoves(n).path,o=r.length,i=`[${t}]`;r.forEach((e=>{i+=`, [${e}]`}));const a=[];return a[0]=`Start: [${t}], Finish: [${n}]`,a[1]=`Shortest path is ${o} moves.`,a[2]=`Path: ${i}`,a[3]=r,a}(m,n);!function(e){document.querySelector("#display1").textContent=e[0],document.querySelector("#display2").textContent=e[1],document.querySelector("#display3").textContent=e[2]}(o);const i=o[3];let a=Promise.resolve();i.forEach((e=>{a=a.then((()=>{return t=m,n=e,document.querySelector(`#x${t[0]}y${t[1]}`).firstChild.classList.add("hidden"),document.querySelector(`#x${n[0]}y${n[1]}`).firstChild.classList.remove("hidden"),m=n,new Promise((e=>{setTimeout(e,1e3)}));var t,n}))})),a.then((()=>{y()}))}!function(){const e=document.querySelector(".gameboard");let t="b";for(let n=7;n>=0;n--){t=n%2!=0?"b":"w";for(let r=0;r<8;r++){const o=document.createElement("div");o.classList.add("square"),o.id=`x${r}y${n}`,"b"===t?(o.classList.add("black"),t="w"):(o.classList.add("white"),t="b"),e.appendChild(o);const i=document.createElement("img");i.src="./images/chess-knight.png",i.classList.add("hidden"),o.appendChild(i)}}document.querySelector(`#x${m[0]}y${m[1]}`).firstChild.classList.remove("hidden"),y()}()})()})();