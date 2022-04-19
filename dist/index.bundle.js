/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _supplemental_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplemental.js */ "./src/supplemental.js");


function contact(body) {
    //remove all content on page
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.removeOld)();

    //content
    const content = document.createElement("div");
    content.id = "content";

    //create name banner
    const banner = document.createElement('h1')
    banner.classList.add('name');
    banner.innerText = "Contact Us";
    content.append(banner);

    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Location","555 South 123 North, Mount Arayakyak, Kashyyyk", content);
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Email","wookieegumbo@superfakeresturant.com", content);

    //set up form
    let form = document.createElement('form');
    form.setAttribute("action", "");
    //name
    let person = document.createElement('input');
    let personLabel = document.createElement('label');
    personLabel.setAttribute('for', 'name');
    personLabel.innerText = 'Name';
    let nameAttributes = {
        name:"name",
        placeholder: "Name",
        autocomplete: "off",
        type: "text"
    }
    Object.keys(nameAttributes).forEach(attr => {
        person.setAttribute(attr, nameAttributes[attr]);
    });

    //email
    let email = document.createElement('input');
    let emailLabel = document.createElement('label');
    emailLabel.innerText = 'Email';
    emailLabel.setAttribute('for', 'email')
    let emailAttributes = {
        name:"enail",
        placeholder: "youremail@example.com",
        type: "email"
    }
    Object.keys(emailAttributes).forEach(attr => {
        email.setAttribute(attr, emailAttributes[attr]);
    })

    //message
    let message = document.createElement('textarea');
    message.setAttribute('name', 'message');
    message.setAttribute('placeholder', 'Your message here');
    let messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message')
    messageLabel.innerText = 'Message';


    //submit
    let submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    

    form.append(personLabel);
    form.append(person);
    form.append(emailLabel);
    form.append(email);
    form.append(messageLabel);
    form.append(message);
    form.append(submit);
    content.append(form);
    body.append(content);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _supplemental_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplemental.js */ "./src/supplemental.js");



function home(body) {
    //remove all content on page
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.removeOld)();
    //content
    const content = document.createElement("div");
    content.id = "content";

    //create name banner
    const banner = document.createElement('h1')
    banner.classList.add('name');
    banner.innerText = "Chewy's Gumbo";
    content.append(banner);

    body.append(content);

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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _supplemental_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplemental.js */ "./src/supplemental.js");


function menu(body) {
    //remove all content on page
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.removeOld)();

    //content
    const content = document.createElement("div");
    content.id = "content";

    //create name banner
    const banner = document.createElement('h1')
    banner.classList.add('name');
    banner.innerText = "Menu";
    content.append(banner);

    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuSection)("Beverages", content);
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Blue Milk", "The best darn milk you have ever tasted", content);
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Wookie Whiskey", "When you need somthing a bit stronger to calm down after a long day in the cockpit", content);
    
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuSection)("Appetizers", content);
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Fried Jaw Plant", "When they aren't eating you, try eating them!", content);
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Wookie Wambos", "I know you have never heard of them, but they are actually pretty good", content);
    
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuSection)("Entrees", content);
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Terentatek Steak", "Cooked to perfection, with just the right amount of spice.", content);
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Shi-Shok Salad", "Fresh and crisp, with the shi-shok taste you love", content);
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Araykyak Gumbo", "You know you want it, the best gumbo in the Mid Rim", content);

    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuSection)("Dessert", content);
    (0,_supplemental_js__WEBPACK_IMPORTED_MODULE_0__.menuItem)("Kashyyyk Cake", "Made from the finest locally sourced Wyyyschokk. So good", content);

    body.append(content)
}

/***/ }),

/***/ "./src/supplemental.js":
/*!*****************************!*\
  !*** ./src/supplemental.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItem": () => (/* binding */ menuItem),
/* harmony export */   "menuSection": () => (/* binding */ menuSection),
/* harmony export */   "removeOld": () => (/* binding */ removeOld)
/* harmony export */ });
function removeOld() {
    let oldContent = document.querySelector("#content");
    if(oldContent){
        oldContent.remove();
    }

    let oldFooter = document.querySelector("#footer");
    if(oldFooter){
        oldFooter.remove();
    }
}

function menuSection(type, content) {

    const section = document.createElement('div');
    section.classList.add('menu-sectionBorder');
    let h2 = document.createElement('h2')
    h2.classList.add('menu-sectionHeader');
    h2.innerText = type;
    section.append(h2);
    content.append(section);
}

function menuItem(name, discription, content) {

    //item container
    const itemContainer= document.createElement('div');
    itemContainer.classList.add('menu-itemContainer');
    //item name
    let h3 = document.createElement('h3')
    h3.classList.add('menu-itemName');
    h3.innerText = name;
    itemContainer.append(h3);
    //item discription
    let discript = document.createElement("div");
    discript.classList.add('menu-itemDiscription');
    discript.innerText = discription;
    itemContainer.append(discript);

    content.append(itemContainer);
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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");





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
        else if(count == 2){
            li.addEventListener("click", function(){
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])(body);
                Ffooter(body);
            });
        }
        else if(count == 3){
            li.addEventListener("click", function(){
                (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0Esb0RBQUk7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdXBwbGVtZW50YWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVtb3ZlT2xkLG1lbnVJdGVtfSBmcm9tICcuL3N1cHBsZW1lbnRhbC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdChib2R5KSB7XG4gICAgLy9yZW1vdmUgYWxsIGNvbnRlbnQgb24gcGFnZVxuICAgIHJlbW92ZU9sZCgpO1xuXG4gICAgLy9jb250ZW50XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXG4gICAgLy9jcmVhdGUgbmFtZSBiYW5uZXJcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBiYW5uZXIuaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzXCI7XG4gICAgY29udGVudC5hcHBlbmQoYmFubmVyKTtcblxuICAgIG1lbnVJdGVtKFwiTG9jYXRpb25cIixcIjU1NSBTb3V0aCAxMjMgTm9ydGgsIE1vdW50IEFyYXlha3lhaywgS2FzaHl5eWtcIiwgY29udGVudCk7XG4gICAgbWVudUl0ZW0oXCJFbWFpbFwiLFwid29va2llZWd1bWJvQHN1cGVyZmFrZXJlc3R1cmFudC5jb21cIiwgY29udGVudCk7XG5cbiAgICAvL3NldCB1cCBmb3JtXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgLy9uYW1lXG4gICAgbGV0IHBlcnNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGV0IHBlcnNvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwZXJzb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgcGVyc29uTGFiZWwuaW5uZXJUZXh0ID0gJ05hbWUnO1xuICAgIGxldCBuYW1lQXR0cmlidXRlcyA9IHtcbiAgICAgICAgbmFtZTpcIm5hbWVcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmFtZVwiLFxuICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgfVxuICAgIE9iamVjdC5rZXlzKG5hbWVBdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBwZXJzb24uc2V0QXR0cmlidXRlKGF0dHIsIG5hbWVBdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9KTtcblxuICAgIC8vZW1haWxcbiAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlbWFpbExhYmVsLmlubmVyVGV4dCA9ICdFbWFpbCc7XG4gICAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpXG4gICAgbGV0IGVtYWlsQXR0cmlidXRlcyA9IHtcbiAgICAgICAgbmFtZTpcImVuYWlsXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcInlvdXJlbWFpbEBleGFtcGxlLmNvbVwiLFxuICAgICAgICB0eXBlOiBcImVtYWlsXCJcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoZW1haWxBdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoYXR0ciwgZW1haWxBdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9KVxuXG4gICAgLy9tZXNzYWdlXG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKTtcbiAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBtZXNzYWdlIGhlcmUnKTtcbiAgICBsZXQgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBtZXNzYWdlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVzc2FnZScpXG4gICAgbWVzc2FnZUxhYmVsLmlubmVyVGV4dCA9ICdNZXNzYWdlJztcblxuXG4gICAgLy9zdWJtaXRcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBcblxuICAgIGZvcm0uYXBwZW5kKHBlcnNvbkxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZChwZXJzb24pO1xuICAgIGZvcm0uYXBwZW5kKGVtYWlsTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kKGVtYWlsKTtcbiAgICBmb3JtLmFwcGVuZChtZXNzYWdlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kKG1lc3NhZ2UpO1xuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdCk7XG4gICAgY29udGVudC5hcHBlbmQoZm9ybSk7XG4gICAgYm9keS5hcHBlbmQoY29udGVudCk7XG59IiwiaW1wb3J0IHtyZW1vdmVPbGQsIGJhbm5lcn0gZnJvbSAnLi9zdXBwbGVtZW50YWwuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZShib2R5KSB7XG4gICAgLy9yZW1vdmUgYWxsIGNvbnRlbnQgb24gcGFnZVxuICAgIHJlbW92ZU9sZCgpO1xuICAgIC8vY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcblxuICAgIC8vY3JlYXRlIG5hbWUgYmFubmVyXG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgYmFubmVyLmlubmVyVGV4dCA9IFwiQ2hld3kncyBHdW1ib1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kKGJhbm5lcik7XG5cbiAgICBib2R5LmFwcGVuZChjb250ZW50KTtcblxuICAgIC8vY3JlYXRlIGFib3V0IHNlY3Rpb25cbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICAgIGFib3V0LmlubmVyVGV4dCA9IFwiVGhpcyByZXN0YXVyYW50IGlzIGFsbCBhYm91dCB0aGUgZ3VtIGJhYnkhXCI7XG4gICAgY29udGVudC5hcHBlbmQoYWJvdXQpO1xuXG4gICAgLy9jcmVhdGUgaG91cnNcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGgyLmlubmVyVGV4dCA9IFwiSG91cnNcIjtcbiAgICBob3Vycy5hcHBlbmQoaDIpO1xuICAgIGxldCBkYXlzID0gW1wiTW9uZGF5IHRocnUgVGh1cnNkYXk6IDEyIC0gOHBtXCIsIFwiRnJpZGF5OiAxMiAtIDEwcG1cIiwgXCJTYXR1cmRheTogMTIgLSA2cG1cIiwgXCJTdW5kYXk6IENsb3NlZFwiXTtcbiAgICBjb25zdCBob3Vyc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGRheXMuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gZTtcbiAgICAgICAgaG91cnNMaXN0LmFwcGVuZChsaSk7XG4gICAgfSk7XG4gICAgaG91cnMuYXBwZW5kKGhvdXJzTGlzdCk7XG4gICAgY29udGVudC5hcHBlbmQoaG91cnMpO1xuXG4gICAgLy9jcmVhdGUgbG9jYXRpb25cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgbGV0IGgybCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoMi5pbm5lclRleHQgPSBcIkxvY2F0aW9uXCI7XG4gICAgbG9jYXRpb24uYXBwZW5kKGgybCk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZHJlc3MuaW5uZXJUZXh0ID0gXCJUaGlzIHNpZGUgb2YgUGFyYWRpc2VcIjtcbiAgICBsb2NhdGlvbi5hcHBlbmQoYWRkcmVzcyk7XG4gICAgY29udGVudC5hcHBlbmQobG9jYXRpb24pO1xuXG4gICAgYm9keS5hcHBlbmQoY29udGVudClcblxufSIsImltcG9ydCB7cmVtb3ZlT2xkLG1lbnVTZWN0aW9uLG1lbnVJdGVtfSBmcm9tICcuL3N1cHBsZW1lbnRhbC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudShib2R5KSB7XG4gICAgLy9yZW1vdmUgYWxsIGNvbnRlbnQgb24gcGFnZVxuICAgIHJlbW92ZU9sZCgpO1xuXG4gICAgLy9jb250ZW50XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXG4gICAgLy9jcmVhdGUgbmFtZSBiYW5uZXJcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBiYW5uZXIuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgY29udGVudC5hcHBlbmQoYmFubmVyKTtcblxuICAgIG1lbnVTZWN0aW9uKFwiQmV2ZXJhZ2VzXCIsIGNvbnRlbnQpO1xuICAgIG1lbnVJdGVtKFwiQmx1ZSBNaWxrXCIsIFwiVGhlIGJlc3QgZGFybiBtaWxrIHlvdSBoYXZlIGV2ZXIgdGFzdGVkXCIsIGNvbnRlbnQpO1xuICAgIG1lbnVJdGVtKFwiV29va2llIFdoaXNrZXlcIiwgXCJXaGVuIHlvdSBuZWVkIHNvbXRoaW5nIGEgYml0IHN0cm9uZ2VyIHRvIGNhbG0gZG93biBhZnRlciBhIGxvbmcgZGF5IGluIHRoZSBjb2NrcGl0XCIsIGNvbnRlbnQpO1xuICAgIFxuICAgIG1lbnVTZWN0aW9uKFwiQXBwZXRpemVyc1wiLCBjb250ZW50KTtcbiAgICBtZW51SXRlbShcIkZyaWVkIEphdyBQbGFudFwiLCBcIldoZW4gdGhleSBhcmVuJ3QgZWF0aW5nIHlvdSwgdHJ5IGVhdGluZyB0aGVtIVwiLCBjb250ZW50KTtcbiAgICBtZW51SXRlbShcIldvb2tpZSBXYW1ib3NcIiwgXCJJIGtub3cgeW91IGhhdmUgbmV2ZXIgaGVhcmQgb2YgdGhlbSwgYnV0IHRoZXkgYXJlIGFjdHVhbGx5IHByZXR0eSBnb29kXCIsIGNvbnRlbnQpO1xuICAgIFxuICAgIG1lbnVTZWN0aW9uKFwiRW50cmVlc1wiLCBjb250ZW50KTtcbiAgICBtZW51SXRlbShcIlRlcmVudGF0ZWsgU3RlYWtcIiwgXCJDb29rZWQgdG8gcGVyZmVjdGlvbiwgd2l0aCBqdXN0IHRoZSByaWdodCBhbW91bnQgb2Ygc3BpY2UuXCIsIGNvbnRlbnQpO1xuICAgIG1lbnVJdGVtKFwiU2hpLVNob2sgU2FsYWRcIiwgXCJGcmVzaCBhbmQgY3Jpc3AsIHdpdGggdGhlIHNoaS1zaG9rIHRhc3RlIHlvdSBsb3ZlXCIsIGNvbnRlbnQpO1xuICAgIG1lbnVJdGVtKFwiQXJheWt5YWsgR3VtYm9cIiwgXCJZb3Uga25vdyB5b3Ugd2FudCBpdCwgdGhlIGJlc3QgZ3VtYm8gaW4gdGhlIE1pZCBSaW1cIiwgY29udGVudCk7XG5cbiAgICBtZW51U2VjdGlvbihcIkRlc3NlcnRcIiwgY29udGVudCk7XG4gICAgbWVudUl0ZW0oXCJLYXNoeXl5ayBDYWtlXCIsIFwiTWFkZSBmcm9tIHRoZSBmaW5lc3QgbG9jYWxseSBzb3VyY2VkIFd5eXlzY2hva2suIFNvIGdvb2RcIiwgY29udGVudCk7XG5cbiAgICBib2R5LmFwcGVuZChjb250ZW50KVxufSIsImZ1bmN0aW9uIHJlbW92ZU9sZCgpIHtcbiAgICBsZXQgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBpZihvbGRDb250ZW50KXtcbiAgICAgICAgb2xkQ29udGVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgb2xkRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXJcIik7XG4gICAgaWYob2xkRm9vdGVyKXtcbiAgICAgICAgb2xkRm9vdGVyLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVudVNlY3Rpb24odHlwZSwgY29udGVudCkge1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uQm9yZGVyJyk7XG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGgyLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbkhlYWRlcicpO1xuICAgIGgyLmlubmVyVGV4dCA9IHR5cGU7XG4gICAgc2VjdGlvbi5hcHBlbmQoaDIpO1xuICAgIGNvbnRlbnQuYXBwZW5kKHNlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBtZW51SXRlbShuYW1lLCBkaXNjcmlwdGlvbiwgY29udGVudCkge1xuXG4gICAgLy9pdGVtIGNvbnRhaW5lclxuICAgIGNvbnN0IGl0ZW1Db250YWluZXI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtQ29udGFpbmVyJyk7XG4gICAgLy9pdGVtIG5hbWVcbiAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtTmFtZScpO1xuICAgIGgzLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaDMpO1xuICAgIC8vaXRlbSBkaXNjcmlwdGlvblxuICAgIGxldCBkaXNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlzY3JpcHQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtRGlzY3JpcHRpb24nKTtcbiAgICBkaXNjcmlwdC5pbm5lclRleHQgPSBkaXNjcmlwdGlvbjtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChkaXNjcmlwdCk7XG5cbiAgICBjb250ZW50LmFwcGVuZChpdGVtQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHtcbiAgICByZW1vdmVPbGQsXG4gICAgbWVudVNlY3Rpb24sXG4gICAgbWVudUl0ZW1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJ1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuXG4vL2dldCBlbGVtZW50IGZyb20gaHRtbFxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cblxuXG4vL2FkZCBjb250ZW50IHRvIGRldlxuXG4vL2hlYWRlclxuZnVuY3Rpb24gRmhlYWRlciAoYm9keSkge1xuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuXG4gICAgLy9hcnJheSBvZiBvZiBuYXYgaXRlbXNcbiAgICBsZXQgbmF2ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICAgIC8vY3JlYXRlIGxpc3Qgb2YgaXRlbXMgXG4gICAgbGV0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbmF2LmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmlubmVyVGV4dCA9IGU7XG4gICAgICAgIGlmKGNvdW50ID09IDEpe1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaG9tZShib2R5KTtcbiAgICAgICAgICAgICAgICBGZm9vdGVyKGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjb3VudCA9PSAyKXtcbiAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIG1lbnUoYm9keSk7XG4gICAgICAgICAgICAgICAgRmZvb3Rlcihib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY291bnQgPT0gMyl7XG4gICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb250YWN0KGJvZHkpO1xuICAgICAgICAgICAgICAgIEZmb290ZXIoYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBuYXZMaXN0LmFwcGVuZChsaSk7XG4gICAgfSk7XG4gICAgLy9hZGQgdG8gaGVhZGVyXG4gICAgaGVhZGVyLmFwcGVuZChuYXZMaXN0KTtcbiAgICBib2R5LmFwcGVuZChoZWFkZXIpO1xufVxuXG4vL2NyZWF0ZSBmb290ZXI7XG5mdW5jdGlvbiBGZm9vdGVyIChib2R5KSB7XG4gICAgY29uc3QgZm9vdGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3Rlci5pZCA9IFwiZm9vdGVyXCI7XG4gICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWcuaW5uZXJUZXh0ID0gXCJNYWRlIGJ5IEpvQmVYMiBmb3IgVGhlIE9kaW4gUHJvamVjdFwiO1xuICAgIGZvb3Rlci5hcHBlbmQodGFnKTtcbiAgICBib2R5LmFwcGVuZChmb290ZXIpO1xufVxuXG5cblxuLy9hZGQgdG8gcGFnZVxuRmhlYWRlcihib2R5KTtcbmhvbWUoYm9keSk7XG5GZm9vdGVyKGJvZHkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9