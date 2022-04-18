/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home(body) {
//remove all content on page
let oldContent = document.querySelector("#content");
if(oldContent){
    oldContent.remove();
}

let oldFooter = document.querySelector("#footer");
if(oldFooter){
    oldFooter.remove();
}

//conent
const content = document.createElement("div");
content.id = "content";

//create name banner
const banner = document.createElement('h1')
banner.classList.add('name');
banner.innerText = "Chewy's Gumbo";
content.append(banner);

//create about section
let about = document.createElement('div');
about.classList.add('about');
about.innerText = "This restaurant is all about the gum baby!";
content.append(about);

//create hours
const hours = document.createElement('div');
hours.classList.add('hours');
let h2 = document.createElement('h2')
h2.innerText = "Hours";
hours.append(h2);
let days = ["Monday thru Thursday: 12 - 8pm", "Friday: 12 - 10pm", "Saturday: 12 - 6pm", "Sunday: Closed"];
const hoursList = document.createElement('ul');
days.forEach(function(e){
    let li = document.createElement('li');
    li.innerText = e;
    hoursList.append(li);
});
hours.append(hoursList);
content.append(hours);

//create location
const location = document.createElement('div');
location.classList.add('location');
let h2l = document.createElement('h2')
h2.innerText = "Location";
location.append(h2l);
const address = document.createElement('div');
address.innerText = "This side of Paradise";
location.append(address);
content.append(location);

body.append(content)

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



//get element from html
const body = document.body;



//add content to dev

//header
function Fheader (body) {
    const header= document.createElement("div");
    header.id = "header";

    //array of of nav items
    let nav = ["Home", "Menu", "Contact"];
    //create list of items 
    let navList = document.createElement('ul');
    let count = 0;
    nav.forEach(function(e){
        count++;
        let li = document.createElement('li');
        li.innerText = e;
        if(count == 1){
            li.addEventListener("click", function(){
                (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])(body);
                Ffooter(body);
            });
        }
        navList.append(li);
    });
    //add to header
    header.append(navList);
    body.append(header);
}

//create footer;
function Ffooter (body) {
    const footer= document.createElement("div");
    footer.id = "footer";
    const tag = document.createElement("div");
    tag.innerText = "Made by JoBeX2 for The Odin Project";
    footer.append(tag);
    body.append(footer);
}



//add to page
Fheader(body);
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])(body);
Ffooter(body);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0w0Qjs7QUFFNUI7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQUk7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0Esb0RBQUk7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKGJvZHkpIHtcbi8vcmVtb3ZlIGFsbCBjb250ZW50IG9uIHBhZ2VcbmxldCBvbGRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuaWYob2xkQ29udGVudCl7XG4gICAgb2xkQ29udGVudC5yZW1vdmUoKTtcbn1cblxubGV0IG9sZEZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpO1xuaWYob2xkRm9vdGVyKXtcbiAgICBvbGRGb290ZXIucmVtb3ZlKCk7XG59XG5cbi8vY29uZW50XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcblxuLy9jcmVhdGUgbmFtZSBiYW5uZXJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmJhbm5lci5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG5iYW5uZXIuaW5uZXJUZXh0ID0gXCJDaGV3eSdzIEd1bWJvXCI7XG5jb250ZW50LmFwcGVuZChiYW5uZXIpO1xuXG4vL2NyZWF0ZSBhYm91dCBzZWN0aW9uXG5sZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5hYm91dC5pbm5lclRleHQgPSBcIlRoaXMgcmVzdGF1cmFudCBpcyBhbGwgYWJvdXQgdGhlIGd1bSBiYWJ5IVwiO1xuY29udGVudC5hcHBlbmQoYWJvdXQpO1xuXG4vL2NyZWF0ZSBob3Vyc1xuY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG5sZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5oMi5pbm5lclRleHQgPSBcIkhvdXJzXCI7XG5ob3Vycy5hcHBlbmQoaDIpO1xubGV0IGRheXMgPSBbXCJNb25kYXkgdGhydSBUaHVyc2RheTogMTIgLSA4cG1cIiwgXCJGcmlkYXk6IDEyIC0gMTBwbVwiLCBcIlNhdHVyZGF5OiAxMiAtIDZwbVwiLCBcIlN1bmRheTogQ2xvc2VkXCJdO1xuY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmRheXMuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVyVGV4dCA9IGU7XG4gICAgaG91cnNMaXN0LmFwcGVuZChsaSk7XG59KTtcbmhvdXJzLmFwcGVuZChob3Vyc0xpc3QpO1xuY29udGVudC5hcHBlbmQoaG91cnMpO1xuXG4vL2NyZWF0ZSBsb2NhdGlvblxuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG5sZXQgaDJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJUZXh0ID0gXCJMb2NhdGlvblwiO1xubG9jYXRpb24uYXBwZW5kKGgybCk7XG5jb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hZGRyZXNzLmlubmVyVGV4dCA9IFwiVGhpcyBzaWRlIG9mIFBhcmFkaXNlXCI7XG5sb2NhdGlvbi5hcHBlbmQoYWRkcmVzcyk7XG5jb250ZW50LmFwcGVuZChsb2NhdGlvbik7XG5cbmJvZHkuYXBwZW5kKGNvbnRlbnQpXG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuXG4vL2dldCBlbGVtZW50IGZyb20gaHRtbFxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cblxuXG4vL2FkZCBjb250ZW50IHRvIGRldlxuXG4vL2hlYWRlclxuZnVuY3Rpb24gRmhlYWRlciAoYm9keSkge1xuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuXG4gICAgLy9hcnJheSBvZiBvZiBuYXYgaXRlbXNcbiAgICBsZXQgbmF2ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICAgIC8vY3JlYXRlIGxpc3Qgb2YgaXRlbXMgXG4gICAgbGV0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbmF2LmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmlubmVyVGV4dCA9IGU7XG4gICAgICAgIGlmKGNvdW50ID09IDEpe1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaG9tZShib2R5KTtcbiAgICAgICAgICAgICAgICBGZm9vdGVyKGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbmF2TGlzdC5hcHBlbmQobGkpO1xuICAgIH0pO1xuICAgIC8vYWRkIHRvIGhlYWRlclxuICAgIGhlYWRlci5hcHBlbmQobmF2TGlzdCk7XG4gICAgYm9keS5hcHBlbmQoaGVhZGVyKTtcbn1cblxuLy9jcmVhdGUgZm9vdGVyO1xuZnVuY3Rpb24gRmZvb3RlciAoYm9keSkge1xuICAgIGNvbnN0IGZvb3Rlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIuaWQgPSBcImZvb3RlclwiO1xuICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFnLmlubmVyVGV4dCA9IFwiTWFkZSBieSBKb0JlWDIgZm9yIFRoZSBPZGluIFByb2plY3RcIjtcbiAgICBmb290ZXIuYXBwZW5kKHRhZyk7XG4gICAgYm9keS5hcHBlbmQoZm9vdGVyKTtcbn1cblxuXG5cbi8vYWRkIHRvIHBhZ2VcbkZoZWFkZXIoYm9keSk7XG5ob21lKGJvZHkpO1xuRmZvb3Rlcihib2R5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==