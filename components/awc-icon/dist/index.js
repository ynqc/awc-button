/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        font-size: inherit;\n        display: inline-block;\n        transition: .3s;\n    }\n    .icon {\n        display: block;\n        width: 1em;\n        height: 1em;\n        margin: auto;\n        fill: currentColor;\n        overflow: hidden;\n    }\n    :host([spin]) {\n        animation: rotate 1.4s linear infinite;\n    }\n    @keyframes rotate {\n        to {\n            transform: rotate(360deg)\n        }\n    }\n</style>\n<svg class=\"icon\" aria-hidden=\"true\">\n    <path id=\"path\"></path>\n    <use id=\"use\"></use>\n</svg>\n";

/***/ }),

/***/ "./src/awc-icon.js":
/*!*************************!*\
  !*** ./src/awc-icon.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcIcon)
/* harmony export */ });
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);


class AwcIcon extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'size', 'color', 'path']
    }

    constructor() {
        super();
        this._render();
    }

    get view() {
        return this.getAttribute('view') || 1024;
    }

    get name() {
        return this.getAttribute('name');
    }

    set name(value) {
        this.setAttribute('name', value);
    }

    get path() {
        return this.getAttribute('path');
    }

    set path(value) {
        this.setAttribute('path', value);
    }

    get size() {
        return this.getAttribute('size');
    }

    set size(value) {
        this.setAttribute('size', value);
    }

    get color() {
        return this.getAttribute('color');
    }

    set color(value) {
        this.setAttribute('color', value);
    }

    connectedCallback() {
        this.iconEl = this.shadowRoot.querySelector('.icon');
        this.useEl = this.shadowRoot.querySelector('use');
        this.pathEl = this.shadowRoot.querySelector('path');
        this.size && (this.size = this.size);
        this.color && (this.color = this.color);
        this.name && (this.name = this.name);
        this.path && (this.path = this.path);
        this._initPage();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'name' && this.useEl) {
            this.useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `../assets/icon.svg#icon-${newVal}`)
        }
        if (name === 'path' && this.pathEl) {
            this.pathEl.setAttribute('d', newVal);
        }
        if (name === 'color' && this.iconEl) {
            this.iconEl.style.color = newVal;
        }
        if (name === 'size' && this.iconEl) {
            this.iconEl.style.fontSize = newVal + 'px';
        }
    }

    _render() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = (_template_html__WEBPACK_IMPORTED_MODULE_0___default());
    }

    _initPage() {
        this.iconEl.setAttribute('view', `0 0 ${this.view} ${this.view}`);
        if (this.path) {
            this.pathEl.style.display = "block";
            this.useEl.style.display = "none";
        } else {
            this.pathEl.style.display = "none";
            this.useEl.style.display = "block";
        }
    }
}

if (!customElements.get('awc-icon')) {
    customElements.define('awc-icon', AwcIcon)
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_awc_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/awc-icon */ "./src/awc-icon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_awc_icon__WEBPACK_IMPORTED_MODULE_0__.default);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsc0NBQXNDLDZCQUE2QixnQ0FBZ0MsMEJBQTBCLE9BQU8sYUFBYSx5QkFBeUIscUJBQXFCLHNCQUFzQix1QkFBdUIsNkJBQTZCLDJCQUEyQixPQUFPLHFCQUFxQixpREFBaUQsT0FBTyx5QkFBeUIsY0FBYyxrREFBa0QsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBamI7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrR0FBK0csT0FBTztBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0QsK0JBQStCLHVEQUFRO0FBQ3ZDOztBQUVBO0FBQ0EsZ0RBQWdELFdBQVcsRUFBRSxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUM3RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7O0FBRXJDLGlFQUFlLGtEQUFPLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2MtaWNvbi8uL3NyYy90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovL2F3Yy1pY29uLy4vc3JjL2F3Yy1pY29uLmpzIiwid2VicGFjazovL2F3Yy1pY29uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F3Yy1pY29uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2F3Yy1pY29uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hd2MtaWNvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F3Yy1pY29uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXdjLWljb24vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIH1cXG4gICAgLmljb24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMWVtO1xcbiAgICAgICAgaGVpZ2h0OiAxZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuICAgIDpob3N0KFtzcGluXSkge1xcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMS40cyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIH1cXG4gICAgQGtleWZyYW1lcyByb3RhdGUge1xcbiAgICAgICAgdG8ge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc3R5bGU+XFxuPHN2ZyBjbGFzcz1cXFwiaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcbiAgICA8cGF0aCBpZD1cXFwicGF0aFxcXCI+PC9wYXRoPlxcbiAgICA8dXNlIGlkPVxcXCJ1c2VcXFwiPjwvdXNlPlxcbjwvc3ZnPlxcblwiOyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NJY29uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gWyduYW1lJywgJ3NpemUnLCAnY29sb3InLCAncGF0aCddXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgIH1cblxuICAgIGdldCB2aWV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZpZXcnKSB8fCAxMDI0O1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdwYXRoJyk7XG4gICAgfVxuXG4gICAgc2V0IHBhdGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3BhdGgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2l6ZScpO1xuICAgIH1cblxuICAgIHNldCBzaXplKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzaXplJywgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBjb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIH1cblxuICAgIHNldCBjb2xvcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY29sb3InLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuaWNvbkVsID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XG4gICAgICAgIHRoaXMudXNlRWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcigndXNlJyk7XG4gICAgICAgIHRoaXMucGF0aEVsID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3BhdGgnKTtcbiAgICAgICAgdGhpcy5zaXplICYmICh0aGlzLnNpemUgPSB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmNvbG9yICYmICh0aGlzLmNvbG9yID0gdGhpcy5jb2xvcik7XG4gICAgICAgIHRoaXMubmFtZSAmJiAodGhpcy5uYW1lID0gdGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5wYXRoICYmICh0aGlzLnBhdGggPSB0aGlzLnBhdGgpO1xuICAgICAgICB0aGlzLl9pbml0UGFnZSgpO1xuICAgIH1cblxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWwsIG5ld1ZhbCkge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ25hbWUnICYmIHRoaXMudXNlRWwpIHtcbiAgICAgICAgICAgIHRoaXMudXNlRWwuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAneGxpbms6aHJlZicsIGAuLi9hc3NldHMvaWNvbi5zdmcjaWNvbi0ke25ld1ZhbH1gKVxuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSAncGF0aCcgJiYgdGhpcy5wYXRoRWwpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aEVsLnNldEF0dHJpYnV0ZSgnZCcsIG5ld1ZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT09ICdjb2xvcicgJiYgdGhpcy5pY29uRWwpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbkVsLnN0eWxlLmNvbG9yID0gbmV3VmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSAnc2l6ZScgJiYgdGhpcy5pY29uRWwpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbkVsLnN0eWxlLmZvbnRTaXplID0gbmV3VmFsICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgX2luaXRQYWdlKCkge1xuICAgICAgICB0aGlzLmljb25FbC5zZXRBdHRyaWJ1dGUoJ3ZpZXcnLCBgMCAwICR7dGhpcy52aWV3fSAke3RoaXMudmlld31gKTtcbiAgICAgICAgaWYgKHRoaXMucGF0aCkge1xuICAgICAgICAgICAgdGhpcy5wYXRoRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIHRoaXMudXNlRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXRoRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGhpcy51c2VFbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLWljb24nKSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLWljb24nLCBBd2NJY29uKVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEF3Y0ljb24gZnJvbSAnLi9zcmMvYXdjLWljb24nO1xuXG5leHBvcnQgZGVmYXVsdCBBd2NJY29uOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==