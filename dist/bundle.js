(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f0f0f0;\n  margin: 0;\n}\n\n#container {\n  max-width: 800px;\n  margin: 0 auto;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 20px;\n}\n\n#Navbar {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n  border-radius: 5px 5px 0 0;\n}\n\nh1 {\n  font-size: 24px;\n}\n\n#body-div {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start\n}\n\nli {\n  margin-bottom: 10px;\n}\n\nbutton {\n  width: 150px;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  /* margin-right: 10px; */\n  transition: background 0.3s;\n  display: flex;\n  align-items: center;\n}\n\nbutton:hover {\n  background: #f0f0f0;\n  color: #333;\n}\n\n#list {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  flex-grow: 1;\n}\n\n#task-heading {\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n\n.input-field {\n  padding: 10px;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n}\n\n.add-button, .cancel-button {\n  background-color: #007BFF;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.add-button:hover, .cancel-button:hover {\n  background-color: #0056b3;\n}\n\n.task-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  margin: 5px 0;\n  background-color: #f9f9f9;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.task-title .task-completed {\n  text-decoration: line-through;\n  color: lightgray;\n}\n\n.task-title .task-date {\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n.task-title .delete-button {\n  background-color: #dc3545;\n  color: #fff;\n  border: none;\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.task-title .delete-button:hover {\n  background-color: #bb2d3b;\n}\n\n.add-button {\n  width: 75px; \n  background: #28a745; \n  color: #fff;\n  border: none;\n  padding: 10px;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background 0.3s;\n  display: inline-block;\n}\n\n.add-button:hover {\n  background: #1f8d1f; \n}\n\n\n.cancel-button {\n  width: 75px; \n  background: #dc3545; \n  color: #fff;\n  border: none;\n  padding: 10px;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background 0.3s;\n  display: inline-block;\n}\n\n.cancel-button:hover {\n  background: #b92b3a;\n}",""]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=e(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var d=r(n,o),c=0;c<i.length;c++){var l=e(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),i=e(569),a=e.n(i),s=e(565),d=e.n(s),c=e(216),l=e.n(c),p=e(589),u=e.n(p),h=e(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;class m{constructor(n,t){this.text=n,this.date=t,this.completed=!1}toggleCompletion(){this.completed=!this.completed}}new class{constructor(){this.taskArr=[],this.list=document.getElementById("list"),this.btn=document.getElementById("list-btn"),this.input=document.createElement("input"),this.input.id="task",this.input.type="text",this.input.classList.add("input-field"),this.addCancelDiv=document.createElement("div"),this.createButtons(),this.btn.addEventListener("click",(()=>this.addTaskInput()))}createButtons(){const n=document.createElement("button");n.textContent="Add Date";const t=document.createElement("button");t.textContent="Add",t.classList.add("add-button");const e=document.createElement("button");e.textContent="Cancel",e.classList.add("cancel-button"),n.addEventListener("click",(()=>this.addDateInput())),t.addEventListener("click",(()=>this.createTask())),e.addEventListener("click",(()=>this.removeTaskInput())),this.addCancelDiv.appendChild(n),this.addCancelDiv.appendChild(t),this.addCancelDiv.appendChild(e)}addTaskInput(){this.list.appendChild(this.input),this.list.appendChild(this.addCancelDiv)}addDateInput(){const n=document.createElement("input");n.type="date",this.list.appendChild(n)}removeTaskInput(){this.list.removeChild(this.input),this.list.removeChild(this.addCancelDiv)}createTask(){const n=this.input.value.trim(),t=this.list.querySelector('input[type="date"]').value;if(n&&t){const e=new m(n,t);this.taskArr.push(e),console.log("Task Added:",e);const r=document.createElement("div");r.classList.add("task-title");const o=document.createElement("div");o.style.display="flex",o.style.alignItems="center";const i=document.createElement("input");i.type="checkbox",i.style.marginRight="6px",i.addEventListener("change",(()=>{e.toggleCompletion(),this.updateTaskAppearance(e,r)}));const a=document.createElement("div");a.innerText=e.text,o.appendChild(i),o.appendChild(a);const s=document.createElement("div");s.style.display="flex",s.style.alignItems="center";const d=document.createElement("button");d.textContent="Delete",d.style.marginRight="6px",d.addEventListener("click",(()=>this.deleteTask(e,r))),s.appendChild(document.createTextNode(t)),s.appendChild(d),r.appendChild(o),r.appendChild(s),this.list.removeChild(this.input),this.list.removeChild(this.list.querySelector('input[type="date"]')),this.list.removeChild(this.addCancelDiv),this.updateTaskAppearance(e,r),this.list.appendChild(r),this.input.value=""}}updateTaskAppearance(n,t){n.completed?(t.style.textDecoration="line-through",t.style.color="lightgray"):(t.style.textDecoration="none",t.style.color="black")}deleteTask(n,t){const e=this.taskArr.indexOf(n);-1!==e&&this.taskArr.splice(e,1),this.list.removeChild(t)}}})()})();