/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/animations.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/animations.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes slide-in {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

@keyframes slide-out {
    0% {
        transform: translateX(0%);
        display: block;
    }
    100% {
        transform: translateX(-100%);
        display: none;
    }
}

@keyframes pop-in {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 100%;
    }
}

@keyframes pop-out {
    0% {
        transform: scale(1);
        opacity: 100%;
        display: block;
    }
    100% {
        transform: scale(0);
        opacity: 0;
        display: none;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/animations.css"],"names":[],"mappings":"AAAA;IACI;QACI,4BAA4B;IAChC;IACA;QACI,yBAAyB;IAC7B;AACJ;;AAEA;IACI;QACI,yBAAyB;QACzB,cAAc;IAClB;IACA;QACI,4BAA4B;QAC5B,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,mBAAmB;QACnB,UAAU;IACd;IACA;QACI,mBAAmB;QACnB,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,mBAAmB;QACnB,aAAa;QACb,cAAc;IAClB;IACA;QACI,mBAAmB;QACnB,UAAU;QACV,aAAa;IACjB;AACJ","sourcesContent":["@keyframes slide-in {\n    0% {\n        transform: translateX(-100%);\n    }\n    100% {\n        transform: translateX(0%);\n    }\n}\n\n@keyframes slide-out {\n    0% {\n        transform: translateX(0%);\n        display: block;\n    }\n    100% {\n        transform: translateX(-100%);\n        display: none;\n    }\n}\n\n@keyframes pop-in {\n    0% {\n        transform: scale(0);\n        opacity: 0;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 100%;\n    }\n}\n\n@keyframes pop-out {\n    0% {\n        transform: scale(1);\n        opacity: 100%;\n        display: block;\n    }\n    100% {\n        transform: scale(0);\n        opacity: 0;\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/checkbox.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/checkbox.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
    Great help
    https://moderncss.dev/pure-css-custom-checkbox-style/
*/

div.days-cont > input[type="checkbox"]{
     /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: inherit;
    
    height: 2rem;
    width: 2rem;
    border: 1px solid currentColor;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    cursor: pointer;

    &::before {
        content: attr(day);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 1.1rem;
    }

    &:checked {
        background-color: limegreen;
        color: white;
    }
}

div.round > input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: inherit;

    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100px;
    cursor: pointer;

    &:checked {
        background-color: limegreen;
        display: flex;
        justify-content: center;
        align-items: center;

        &::before {
            content: '\\2713';
            font-size: 100%;
            color: var(--color);
        }
    }
}

`, "",{"version":3,"sources":["webpack://./src/styles/checkbox.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;KACK,kCAAkC;IACnC,wBAAwB;IACxB,gBAAgB;IAChB,+CAA+C;IAC/C,yBAAyB;;IAEzB,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,4BAA4B;IAC5B,2BAA2B;IAC3B,eAAe;;IAEf;QACI,kBAAkB;QAClB,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,YAAY;QACZ,WAAW;QACX,iBAAiB;IACrB;;IAEA;QACI,2BAA2B;QAC3B,YAAY;IAChB;AACJ;;AAEA;IACI,kCAAkC;IAClC,wBAAwB;IACxB,gBAAgB;IAChB,+CAA+C;IAC/C,yBAAyB;;IAEzB,cAAc;IACd,aAAa;IACb,oBAAoB;IACpB,eAAe;;IAEf;QACI,2BAA2B;QAC3B,aAAa;QACb,uBAAuB;QACvB,mBAAmB;;QAEnB;YACI,gBAAgB;YAChB,eAAe;YACf,mBAAmB;QACvB;IACJ;AACJ","sourcesContent":["/*\n    Great help\n    https://moderncss.dev/pure-css-custom-checkbox-style/\n*/\n\ndiv.days-cont > input[type=\"checkbox\"]{\n     /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    /* For iOS < 15 to remove gradient background */\n    background-color: inherit;\n    \n    height: 2rem;\n    width: 2rem;\n    border: 1px solid currentColor;\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px;\n    cursor: pointer;\n\n    &::before {\n        content: attr(day);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n        font-size: 1.1rem;\n    }\n\n    &:checked {\n        background-color: limegreen;\n        color: white;\n    }\n}\n\ndiv.round > input[type=\"checkbox\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    /* For iOS < 15 to remove gradient background */\n    background-color: inherit;\n\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 100px;\n    cursor: pointer;\n\n    &:checked {\n        background-color: limegreen;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        &::before {\n            content: '\\2713';\n            font-size: 100%;\n            color: var(--color);\n        }\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_var_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./var.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/var.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./animations.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/animations.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./checkbox.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/checkbox.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_var_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
}

#content {
    min-height: 100vh;
    color: var(--color);
    background-color: var(--background-color);
    font-family: var(--font-family);
    color-scheme: var(--color-scheme);

    /* Layout */
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
}

.flip {
    transform: rotate(180deg); 
    
    &:is(svg, i):hover{
        transform: rotate(180deg) scale(120%); 
    }
}

svg, i {
    cursor: pointer;
    
    &:hover {
        transform: scale(120%);
    }
}

.header {
    display: flex;
    justify-content: space-evenly;
    gap: var(--gap);
    padding: var(--padding-top-bottom) var(--padding-left-right);
    position: sticky;
    top: 0;
    box-shadow: var(--shadow-color) 0px 3.5px 4.5px 4.5px;

    background-color: var(--header-color);
    backdrop-filter: blur(10px);

    margin-bottom: var(--padding-top-bottom);

    z-index: 10;

    & > .logo {
        flex: 1;
        font-size: var(--title-font-size);
    }

    & ul {
        display: flex;
        justify-content: space-evenly;
        gap: calc(2 * var(--gap));
    }
}

li, .logo {
    display: flex;
    align-items: center;
    gap: var(--gap);
}

dialog, input {
    /* font and background */
    color: var(--color);
    background-color: var(--shadow-color);
    font-family: var(--font-family);

    &::backdrop {
        background-color: var(--shadow-color);
        backdrop-filter: blur(2px);
    }
}

#sidebar-dialog {

    position: fixed;
    height: 100vh;
    margin: 0;
    padding: 0;
    top: calc(2 * var(--padding-top-bottom) + var(--title-font-size) + var(--header-shadow-width));
    left: 0;
    border: none;
    outline: none;
    
    /* transition */
    animation: slide-out 0.5s ease-out;

    &[open] {
        animation: slide-in 0.5s ease-out;
    }

    & > nav {
        width: 100%;
    }

    & ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    
        & > li {
            padding: calc(0.5 * var(--gap)) var(--padding-left-right);
            cursor: pointer;

            &:hover {
                background-color: var(--background-color);
            }
        }
    }
}

main {
    padding: var(--padding-top-bottom) 0;
}

.page-container, .todo-item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap);
    width: 100%;
    margin-bottom: var(--padding-top-bottom);
}

.page-container .heading {
    font-size: 1.5rem;
    display: flex;
    gap: var(--gap);
    align-items: center;
    justify-content: flex-start;
    width: min(1000px, 98%);
    padding: var(--padding-top-bottom) 0;
    border-bottom: 4px solid var(--shadow-color);
    
    & > svg {
        cursor: auto;

        &:hover {
            transform: scale(1);
        }
    }
}

.upcoming-heading-cont {
    display: flex;
    justify-content: space-between;
    width: min(1000px, 98%);
    border-bottom: 4px solid var(--shadow-color);

    & > .heading {
        border: 0;
    }

    & > input[type="date"] {
        font-size: 1rem;
        color-scheme: var(--color-scheme);
        padding: 0 var(--padding-left-right);
        color: var(--color);
        background-color: var(--background-color);
    }
}

.todo-item-container {
    flex-direction: column-reverse;

    &:empty {
        display: none;
    }
}

.item-adder {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: var(--gap);
}

.todo-item {
    /* display and grid view */
    display: grid;
    grid-template-columns: min-content repeat(3, 1fr);
    /* grid-template-rows:  repeat(2, 1fr); */

    /* padding and width for better view */
    padding: var(--padding-top-bottom) var(--padding-left-right);
    width: min(1000px, 98%);
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--shadow-color);

    & > .todo-item-checkbox {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        height: 100%;
        display: flex;
        align-items: center;
    }

    & > .todo-item-title {
        grid-column: 2 / 4;
        grid-row: 1 / 2;
    }
    
    & > .todo-item-description {
        grid-column: 2 / 4;
        grid-row: 2 / 3;
    } 
    
    & > .todo-item-icon-set{
        grid-column: 4 / 5;
        grid-row: 1 / 2;
        
        & > ul {
            display: flex;
            justify-content: end;
            gap: var(--gap);
        }
    }

    & > .todo-item-hashtag {
        grid-column: 4 / 5;
        grid-row: 2 / 3;
        cursor: pointer;

        &:not(:empty):before {
            content: '#';
        }

        &:hover {
            text-decoration: underline;
        }
    }
    
    & > .todo-item-right {
        text-align: end;
    }

    & [class*="trash"] {
        color: red;
    }

    /* animations */
    &.add {
        animation: pop-in 0.3s ease-out;
    }
    
    &.remove {
        animation: pop-out 0.3s ease-out;
    }

    
}

div.text-container {
    width: 100%;
    text-wrap: nowrap;
    overflow: hidden !important;
    white-space: nowrap;
    text-overflow: ellipsis;
}

dialog.modal-form-container {
    border-radius: 10px;
}

form.modal-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content max-content;
    gap: var(--gap);
    justify-content: center;
    max-width: 400px;

    & > .modal-form-content {
        grid-column: 1 / 3;
        grid-row: 1 / 2;

        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: var(--gap);
        }
    }

    & > button {
        padding: 0.3rem 1rem;
        border-radius: 10px;
        font-size: 1.1rem;
        cursor: pointer;
    
        /* &[class*="cancel"] {
            background-color: red;
            color: white;
        } */

        &[class*="submit"] {
            background-color: limegreen;
            color: white;
        }
    }
}

input {
    font-size: 1.1rem;
    color: var(--color);
    background-color: var(--background-color);
    outline: none;
    border-radius: 5px;
    border: 1px solid currentColor;
}

.text-input {
    position: relative;
    height: var(--text-input-height);
    display: flex;
    justify-content: center !important;
    align-items: center !important;

    & > label {
        position: absolute;
        cursor: text;

        &:has(~ input:focus, ~ input:valid) {
            top: -0.6rem;
            left: 1rem;
            background-color: limegreen;
            color: white;
            padding: 0.2rem 0.4rem;
        }
    }

    & > input {
        align-self: flex-end;
        height: 100%;
        width: 100%;
        outline: none;
        font-size: 1.1rem;
        padding: 0 1rem;

        &:is(:focus, :valid){
            border: 2px solid limegreen;
        }

    }
}

div.date-priority-project-cont {
    display: grid !important;
    gap: var(--gap);
    text-align: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    & > div:has(input[type="date"]) {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        color-scheme: var(--color-scheme);
        color: var(--color);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(var(--text-input-height)*0.6);
        gap: var(--gap);

        & > input[type="date"] {
            width: 100%;
            height: 100%;
            text-align: center;
            padding: 0.3rem 0.1rem;
            cursor: pointer;
            background-color: var(--background-color);

            &.selected {
                background-color: limegreen;
                color: white;
            }        
        }
    }

    & > select {
        font-size: 1.05rem;
        text-align: center;
        background-color: var(--background-color);
        color: var(--color);
        border: 1px solid currentColor;
        border-radius: 5px;
        outline: 0;
        padding: 0.3rem 0.1rem;
        width: 100%;

        & > option {
            background-color: var(--background-color);
            color: var(--color);
        }

        &:valid {
            background-color: limegreen;
            color: white;
        }
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"reset.css\");\n@import url(\"var.css\");\n@import url(\"animations.css\");\n@import url(\"checkbox.css\");\n\n*{\n    box-sizing: border-box;\n}\n\n#content {\n    min-height: 100vh;\n    color: var(--color);\n    background-color: var(--background-color);\n    font-family: var(--font-family);\n    color-scheme: var(--color-scheme);\n\n    /* Layout */\n    /* display: flex;\n    flex-direction: column;\n    justify-content: space-between; */\n}\n\n.flip {\n    transform: rotate(180deg); \n    \n    &:is(svg, i):hover{\n        transform: rotate(180deg) scale(120%); \n    }\n}\n\nsvg, i {\n    cursor: pointer;\n    \n    &:hover {\n        transform: scale(120%);\n    }\n}\n\n.header {\n    display: flex;\n    justify-content: space-evenly;\n    gap: var(--gap);\n    padding: var(--padding-top-bottom) var(--padding-left-right);\n    position: sticky;\n    top: 0;\n    box-shadow: var(--shadow-color) 0px 3.5px 4.5px 4.5px;\n\n    background-color: var(--header-color);\n    backdrop-filter: blur(10px);\n\n    margin-bottom: var(--padding-top-bottom);\n\n    z-index: 10;\n\n    & > .logo {\n        flex: 1;\n        font-size: var(--title-font-size);\n    }\n\n    & ul {\n        display: flex;\n        justify-content: space-evenly;\n        gap: calc(2 * var(--gap));\n    }\n}\n\nli, .logo {\n    display: flex;\n    align-items: center;\n    gap: var(--gap);\n}\n\ndialog, input {\n    /* font and background */\n    color: var(--color);\n    background-color: var(--shadow-color);\n    font-family: var(--font-family);\n\n    &::backdrop {\n        background-color: var(--shadow-color);\n        backdrop-filter: blur(2px);\n    }\n}\n\n#sidebar-dialog {\n\n    position: fixed;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    top: calc(2 * var(--padding-top-bottom) + var(--title-font-size) + var(--header-shadow-width));\n    left: 0;\n    border: none;\n    outline: none;\n    \n    /* transition */\n    animation: slide-out 0.5s ease-out;\n\n    &[open] {\n        animation: slide-in 0.5s ease-out;\n    }\n\n    & > nav {\n        width: 100%;\n    }\n\n    & ul {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n    \n        & > li {\n            padding: calc(0.5 * var(--gap)) var(--padding-left-right);\n            cursor: pointer;\n\n            &:hover {\n                background-color: var(--background-color);\n            }\n        }\n    }\n}\n\nmain {\n    padding: var(--padding-top-bottom) 0;\n}\n\n.page-container, .todo-item-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--gap);\n    width: 100%;\n    margin-bottom: var(--padding-top-bottom);\n}\n\n.page-container .heading {\n    font-size: 1.5rem;\n    display: flex;\n    gap: var(--gap);\n    align-items: center;\n    justify-content: flex-start;\n    width: min(1000px, 98%);\n    padding: var(--padding-top-bottom) 0;\n    border-bottom: 4px solid var(--shadow-color);\n    \n    & > svg {\n        cursor: auto;\n\n        &:hover {\n            transform: scale(1);\n        }\n    }\n}\n\n.upcoming-heading-cont {\n    display: flex;\n    justify-content: space-between;\n    width: min(1000px, 98%);\n    border-bottom: 4px solid var(--shadow-color);\n\n    & > .heading {\n        border: 0;\n    }\n\n    & > input[type=\"date\"] {\n        font-size: 1rem;\n        color-scheme: var(--color-scheme);\n        padding: 0 var(--padding-left-right);\n        color: var(--color);\n        background-color: var(--background-color);\n    }\n}\n\n.todo-item-container {\n    flex-direction: column-reverse;\n\n    &:empty {\n        display: none;\n    }\n}\n\n.item-adder {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    gap: var(--gap);\n}\n\n.todo-item {\n    /* display and grid view */\n    display: grid;\n    grid-template-columns: min-content repeat(3, 1fr);\n    /* grid-template-rows:  repeat(2, 1fr); */\n\n    /* padding and width for better view */\n    padding: var(--padding-top-bottom) var(--padding-left-right);\n    width: min(1000px, 98%);\n    border-radius: 10px;\n    overflow: hidden;\n    background-color: var(--shadow-color);\n\n    & > .todo-item-checkbox {\n        grid-column: 1 / 2;\n        grid-row: 1 / 3;\n        height: 100%;\n        display: flex;\n        align-items: center;\n    }\n\n    & > .todo-item-title {\n        grid-column: 2 / 4;\n        grid-row: 1 / 2;\n    }\n    \n    & > .todo-item-description {\n        grid-column: 2 / 4;\n        grid-row: 2 / 3;\n    } \n    \n    & > .todo-item-icon-set{\n        grid-column: 4 / 5;\n        grid-row: 1 / 2;\n        \n        & > ul {\n            display: flex;\n            justify-content: end;\n            gap: var(--gap);\n        }\n    }\n\n    & > .todo-item-hashtag {\n        grid-column: 4 / 5;\n        grid-row: 2 / 3;\n        cursor: pointer;\n\n        &:not(:empty):before {\n            content: '#';\n        }\n\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n    \n    & > .todo-item-right {\n        text-align: end;\n    }\n\n    & [class*=\"trash\"] {\n        color: red;\n    }\n\n    /* animations */\n    &.add {\n        animation: pop-in 0.3s ease-out;\n    }\n    \n    &.remove {\n        animation: pop-out 0.3s ease-out;\n    }\n\n    \n}\n\ndiv.text-container {\n    width: 100%;\n    text-wrap: nowrap;\n    overflow: hidden !important;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\ndialog.modal-form-container {\n    border-radius: 10px;\n}\n\nform.modal-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: max-content max-content;\n    gap: var(--gap);\n    justify-content: center;\n    max-width: 400px;\n\n    & > .modal-form-content {\n        grid-column: 1 / 3;\n        grid-row: 1 / 2;\n\n        & > div {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin: var(--gap);\n        }\n    }\n\n    & > button {\n        padding: 0.3rem 1rem;\n        border-radius: 10px;\n        font-size: 1.1rem;\n        cursor: pointer;\n    \n        /* &[class*=\"cancel\"] {\n            background-color: red;\n            color: white;\n        } */\n\n        &[class*=\"submit\"] {\n            background-color: limegreen;\n            color: white;\n        }\n    }\n}\n\ninput {\n    font-size: 1.1rem;\n    color: var(--color);\n    background-color: var(--background-color);\n    outline: none;\n    border-radius: 5px;\n    border: 1px solid currentColor;\n}\n\n.text-input {\n    position: relative;\n    height: var(--text-input-height);\n    display: flex;\n    justify-content: center !important;\n    align-items: center !important;\n\n    & > label {\n        position: absolute;\n        cursor: text;\n\n        &:has(~ input:focus, ~ input:valid) {\n            top: -0.6rem;\n            left: 1rem;\n            background-color: limegreen;\n            color: white;\n            padding: 0.2rem 0.4rem;\n        }\n    }\n\n    & > input {\n        align-self: flex-end;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        font-size: 1.1rem;\n        padding: 0 1rem;\n\n        &:is(:focus, :valid){\n            border: 2px solid limegreen;\n        }\n\n    }\n}\n\ndiv.date-priority-project-cont {\n    display: grid !important;\n    gap: var(--gap);\n    text-align: center;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n\n    & > div:has(input[type=\"date\"]) {\n        grid-column: 1 / 3;\n        grid-row: 1 / 2;\n        color-scheme: var(--color-scheme);\n        color: var(--color);\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: calc(var(--text-input-height)*0.6);\n        gap: var(--gap);\n\n        & > input[type=\"date\"] {\n            width: 100%;\n            height: 100%;\n            text-align: center;\n            padding: 0.3rem 0.1rem;\n            cursor: pointer;\n            background-color: var(--background-color);\n\n            &.selected {\n                background-color: limegreen;\n                color: white;\n            }        \n        }\n    }\n\n    & > select {\n        font-size: 1.05rem;\n        text-align: center;\n        background-color: var(--background-color);\n        color: var(--color);\n        border: 1px solid currentColor;\n        border-radius: 5px;\n        outline: 0;\n        padding: 0.3rem 0.1rem;\n        width: 100%;\n\n        & > option {\n            background-color: var(--background-color);\n            color: var(--color);\n        }\n\n        &:valid {\n            background-color: limegreen;\n            color: white;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/var.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/var.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --title-font-size: 1.5rem;
    --padding-top-bottom: min(2vh, 1rem);
    --padding-left-right:  min(2vw, 1rem);
    --gap: 1rem;
    --font-family: 'Courier New', Courier, monospace;
    --header-color: var(--shadow-color)88;
    --header-shadow-width: 5px;

    /* Form variables */
    --text-input-width: 100%;
    --text-input-height: 4rem;

    /* Theme Dependent variables */

    --color: black;
    --background-color: white;
    --shadow-color: #e0e0e0;
    --color-scheme: light;
    
}

:root.dark {
    --color: white;
    --background-color: black;
    --shadow-color: #1f1f1f;
    --color-scheme: dark;
}`, "",{"version":3,"sources":["webpack://./src/styles/var.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,oCAAoC;IACpC,qCAAqC;IACrC,WAAW;IACX,gDAAgD;IAChD,qCAAqC;IACrC,0BAA0B;;IAE1B,mBAAmB;IACnB,wBAAwB;IACxB,yBAAyB;;IAEzB,8BAA8B;;IAE9B,cAAc;IACd,yBAAyB;IACzB,uBAAuB;IACvB,qBAAqB;;AAEzB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,uBAAuB;IACvB,oBAAoB;AACxB","sourcesContent":[":root {\n    --title-font-size: 1.5rem;\n    --padding-top-bottom: min(2vh, 1rem);\n    --padding-left-right:  min(2vw, 1rem);\n    --gap: 1rem;\n    --font-family: 'Courier New', Courier, monospace;\n    --header-color: var(--shadow-color)88;\n    --header-shadow-width: 5px;\n\n    /* Form variables */\n    --text-input-width: 100%;\n    --text-input-height: 4rem;\n\n    /* Theme Dependent variables */\n\n    --color: black;\n    --background-color: white;\n    --shadow-color: #e0e0e0;\n    --color-scheme: light;\n    \n}\n\n:root.dark {\n    --color: white;\n    --background-color: black;\n    --shadow-color: #1f1f1f;\n    --color-scheme: dark;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/feather-icons/dist/feather.js":
/*!****************************************************!*\
  !*** ./node_modules/feather-icons/dist/feather.js ***!
  \****************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_574__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_574__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_574__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_574__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_574__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_574__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_574__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_574__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_574__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_574__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_574__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_574__(__nested_webpack_require_574__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":"<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>","airplay":"<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>","alert-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","align-center":"<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>","align-justify":"<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-left":"<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-right":"<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>","anchor":"<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>","aperture":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>","archive":"<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>","arrow-down-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>","arrow-down-left":"<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>","arrow-down-right":"<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>","arrow-down":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>","arrow-left-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>","arrow-left":"<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>","arrow-right-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","arrow-right":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>","arrow-up-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>","arrow-up-left":"<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>","arrow-up-right":"<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>","arrow-up":"<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>","at-sign":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>","award":"<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>","bar-chart-2":"<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>","bar-chart":"<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>","battery-charging":"<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>","battery":"<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>","bell-off":"<path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"></path><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"></path><path d=\"M18 8a6 6 0 0 0-9.33-5\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","bell":"<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path>","bluetooth":"<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>","bold":"<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>","book-open":"<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>","book":"<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>","bookmark":"<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>","box":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","briefcase":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>","calendar":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>","camera-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>","camera":"<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>","cast":"<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2.01\" y2=\"20\"></line>","check-circle":"<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>","check-square":"<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>","check":"<polyline points=\"20 6 9 17 4 12\"></polyline>","chevron-down":"<polyline points=\"6 9 12 15 18 9\"></polyline>","chevron-left":"<polyline points=\"15 18 9 12 15 6\"></polyline>","chevron-right":"<polyline points=\"9 18 15 12 9 6\"></polyline>","chevron-up":"<polyline points=\"18 15 12 9 6 15\"></polyline>","chevrons-down":"<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>","chevrons-left":"<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>","chevrons-right":"<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>","chevrons-up":"<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>","chrome":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>","circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","clipboard":"<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>","cloud-drizzle":"<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-lightning":"<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>","cloud-off":"<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","cloud-rain":"<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-snow":"<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8.01\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12.01\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16.01\" y2=\"20\"></line>","cloud":"<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>","code":"<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>","codepen":"<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>","codesandbox":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline><polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline><polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","coffee":"<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>","columns":"<path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\"></path>","command":"<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>","compass":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>","copy":"<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>","corner-down-left":"<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>","corner-down-right":"<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>","corner-left-down":"<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>","corner-left-up":"<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>","corner-right-down":"<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>","corner-right-up":"<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>","corner-up-left":"<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>","corner-up-right":"<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>","cpu":"<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>","credit-card":"<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>","crop":"<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>","crosshair":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>","delete":"<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>","disc":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","divide-circle":"<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","divide-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>","divide":"<circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle>","dollar-sign":"<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>","download-cloud":"<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>","download":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>","dribbble":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>","droplet":"<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>","edit-2":"<path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>","edit-3":"<path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path>","edit":"<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path>","external-link":"<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>","eye-off":"<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","eye":"<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","facebook":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>","fast-forward":"<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>","feather":"<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line>","figma":"<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>","file-minus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-plus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-text":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>","file":"<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>","film":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>","filter":"<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>","folder-minus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder-plus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>","framer":"<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"></path>","frown":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","gift":"<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>","git-branch":"<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>","git-commit":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>","git-merge":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>","git-pull-request":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>","github":"<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>","gitlab":"<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>","grid":"<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>","hard-drive":"<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"></line>","hash":"<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>","headphones":"<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>","heart":"<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>","help-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","hexagon":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>","home":"<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>","image":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>","inbox":"<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>","info":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>","instagram":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>","italic":"<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>","key":"<path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path>","layers":"<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>","layout":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>","life-buoy":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>","link-2":"<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>","linkedin":"<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>","list":"<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>","loader":"<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>","lock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>","log-in":"<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>","mail":"<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>","map-pin":"<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>","map":"<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>","maximize-2":"<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","maximize":"<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>","meh":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","menu":"<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>","message-circle":"<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>","message-square":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>","mic-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","mic":"<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","minimize-2":"<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","minimize":"<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>","minus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","monitor":"<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>","moon":"<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>","more-horizontal":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>","more-vertical":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>","mouse-pointer":"<path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path>","move":"<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>","music":"<path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle>","navigation-2":"<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>","navigation":"<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>","octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>","package":"<line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"></line><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","paperclip":"<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>","pause-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>","pause":"<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>","pen-tool":"<path d=\"M12 19l7-7 3 3-7 7-3-3z\"></path><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"></path><path d=\"M2 2l7.586 7.586\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>","percent":"<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>","phone-call":"<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-forwarded":"<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-incoming":"<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-missed":"<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-off":"<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>","phone-outgoing":"<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","pie-chart":"<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>","play-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>","play":"<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>","plus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","pocket":"<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>","power":"<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>","printer":"<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>","radio":"<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>","refresh-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>","refresh-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>","repeat":"<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>","rewind":"<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>","rotate-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>","rotate-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>","rss":"<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>","save":"<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>","scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>","search":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>","send":"<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>","server":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"></line>","settings":"<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>","share":"<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>","shield-off":"<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","shield":"<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>","shopping-bag":"<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>","shopping-cart":"<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>","shuffle":"<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>","sidebar":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>","skip-back":"<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>","skip-forward":"<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>","slack":"<path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\"></path><path d=\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path><path d=\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\"></path><path d=\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z\"></path><path d=\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\"></path><path d=\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path><path d=\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\"></path><path d=\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\"></path>","slash":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>","sliders":"<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>","smartphone":"<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","smile":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","speaker":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"></line>","square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>","star":"<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>","stop-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>","sun":"<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>","sunrise":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>","sunset":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>","table":"<path d=\"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18\"></path>","tablet":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","tag":"<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line>","target":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>","terminal":"<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>","thermometer":"<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>","thumbs-down":"<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>","thumbs-up":"<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>","toggle-left":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>","toggle-right":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>","tool":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>","trash-2":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>","trash":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>","trello":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect><rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>","trending-down":"<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>","trending-up":"<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>","triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>","truck":"<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>","tv":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>","twitch":"<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7\"></path>","twitter":"<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>","type":"<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>","umbrella":"<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>","underline":"<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>","unlock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>","upload-cloud":"<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>","upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>","user-check":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>","user-minus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-x":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>","user":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>","users":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>","video-off":"<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","video":"<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>","voicemail":"<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>","volume-1":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-2":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-x":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>","volume":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>","watch":"<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>","wifi-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wifi":"<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wind":"<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>","x-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>","x":"<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>","youtube":"<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>","zap-off":"<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","zap":"<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>","zoom-in":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>","zoom-out":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>"};

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_63298__) {

__nested_webpack_require_63298__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__nested_webpack_require_63298__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
var path = __nested_webpack_require_63298__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_64448__) {

var isObject = __nested_webpack_require_64448__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_65029__) {

"use strict";

var bind = __nested_webpack_require_65029__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __nested_webpack_require_65029__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __nested_webpack_require_65029__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __nested_webpack_require_65029__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __nested_webpack_require_65029__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __nested_webpack_require_65029__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __nested_webpack_require_65029__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_67651__) {

var toIndexedObject = __nested_webpack_require_67651__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __nested_webpack_require_67651__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __nested_webpack_require_67651__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_69373__) {

var aFunction = __nested_webpack_require_69373__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_70462__) {

var anObject = __nested_webpack_require_70462__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_71399__) {

var wellKnownSymbol = __nested_webpack_require_71399__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_73157__) {

var classofRaw = __nested_webpack_require_73157__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __nested_webpack_require_73157__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_74598__) {

var has = __nested_webpack_require_74598__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __nested_webpack_require_74598__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __nested_webpack_require_74598__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __nested_webpack_require_74598__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_75897__) {

var fails = __nested_webpack_require_75897__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_76570__) {

"use strict";

var IteratorPrototype = __nested_webpack_require_76570__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __nested_webpack_require_76570__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __nested_webpack_require_76570__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __nested_webpack_require_76570__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __nested_webpack_require_76570__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_78584__) {

"use strict";

var toPrimitive = __nested_webpack_require_78584__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __nested_webpack_require_78584__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __nested_webpack_require_78584__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_79634__) {

"use strict";

var $ = __nested_webpack_require_79634__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __nested_webpack_require_79634__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __nested_webpack_require_79634__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __nested_webpack_require_79634__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __nested_webpack_require_79634__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var hide = __nested_webpack_require_79634__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __nested_webpack_require_79634__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __nested_webpack_require_79634__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __nested_webpack_require_79634__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __nested_webpack_require_79634__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __nested_webpack_require_79634__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_84693__) {

var fails = __nested_webpack_require_84693__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_85356__) {

var global = __nested_webpack_require_85356__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __nested_webpack_require_85356__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_86646__) {

var global = __nested_webpack_require_86646__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __nested_webpack_require_86646__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __nested_webpack_require_86646__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __nested_webpack_require_86646__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __nested_webpack_require_86646__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __nested_webpack_require_86646__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __nested_webpack_require_86646__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_90354__) {

var shared = __nested_webpack_require_90354__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_90907__) {

var classof = __nested_webpack_require_90907__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __nested_webpack_require_90907__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __nested_webpack_require_90907__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_91771__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_91771__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_93479__) {

var DESCRIPTORS = __nested_webpack_require_93479__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __nested_webpack_require_93479__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __nested_webpack_require_93479__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_94456__) {

var global = __nested_webpack_require_94456__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var document = global.document;

module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_95004__) {

var DESCRIPTORS = __nested_webpack_require_95004__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __nested_webpack_require_95004__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __nested_webpack_require_95004__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_95941__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __nested_webpack_require_95941__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __nested_webpack_require_95941__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_96924__) {

var NATIVE_WEAK_MAP = __nested_webpack_require_96924__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __nested_webpack_require_96924__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __nested_webpack_require_96924__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __nested_webpack_require_96924__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __nested_webpack_require_96924__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __nested_webpack_require_96924__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __nested_webpack_require_96924__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_99240__) {

var wellKnownSymbol = __nested_webpack_require_99240__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __nested_webpack_require_99240__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_100071__) {

var fails = __nested_webpack_require_100071__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_101805__) {

"use strict";

var getPrototypeOf = __nested_webpack_require_101805__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __nested_webpack_require_101805__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __nested_webpack_require_101805__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __nested_webpack_require_101805__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __nested_webpack_require_101805__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_104093__) {

var fails = __nested_webpack_require_104093__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_104753__) {

var global = __nested_webpack_require_104753__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __nested_webpack_require_104753__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_105495__) {

var anObject = __nested_webpack_require_105495__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __nested_webpack_require_105495__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __nested_webpack_require_105495__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __nested_webpack_require_105495__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __nested_webpack_require_105495__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __nested_webpack_require_105495__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __nested_webpack_require_105495__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_108128__) {

var DESCRIPTORS = __nested_webpack_require_108128__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __nested_webpack_require_108128__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __nested_webpack_require_108128__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __nested_webpack_require_108128__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_109325__) {

var DESCRIPTORS = __nested_webpack_require_109325__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __nested_webpack_require_109325__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __nested_webpack_require_109325__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __nested_webpack_require_109325__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_110737__) {

var DESCRIPTORS = __nested_webpack_require_110737__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __nested_webpack_require_110737__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __nested_webpack_require_110737__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __nested_webpack_require_110737__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __nested_webpack_require_110737__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __nested_webpack_require_110737__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __nested_webpack_require_110737__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_112539__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __nested_webpack_require_112539__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __nested_webpack_require_112539__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_113879__) {

var has = __nested_webpack_require_113879__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __nested_webpack_require_113879__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __nested_webpack_require_113879__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_113879__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_115191__) {

var has = __nested_webpack_require_115191__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __nested_webpack_require_115191__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayIncludes = __nested_webpack_require_115191__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
var hiddenKeys = __nested_webpack_require_115191__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var arrayIndexOf = arrayIncludes(false);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_116427__) {

var internalObjectKeys = __nested_webpack_require_116427__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __nested_webpack_require_116427__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_118089__) {

var validateSetPrototypeOfArguments = __nested_webpack_require_118089__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_119246__) {

var global = __nested_webpack_require_119246__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyNamesModule = __nested_webpack_require_119246__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __nested_webpack_require_119246__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __nested_webpack_require_119246__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = global.Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_120488__) {

module.exports = __nested_webpack_require_120488__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_120927__) {

var global = __nested_webpack_require_120927__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __nested_webpack_require_120927__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __nested_webpack_require_120927__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __nested_webpack_require_120927__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __nested_webpack_require_120927__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __nested_webpack_require_120927__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __nested_webpack_require_120927__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_123907__) {

var global = __nested_webpack_require_123907__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __nested_webpack_require_123907__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_124625__) {

var defineProperty = __nested_webpack_require_124625__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __nested_webpack_require_124625__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __nested_webpack_require_124625__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_125596__) {

var shared = __nested_webpack_require_125596__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __nested_webpack_require_125596__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_126233__) {

var global = __nested_webpack_require_126233__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __nested_webpack_require_126233__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __nested_webpack_require_126233__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_127243__) {

var toInteger = __nested_webpack_require_127243__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __nested_webpack_require_127243__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_128591__) {

var toInteger = __nested_webpack_require_128591__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_129459__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __nested_webpack_require_129459__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __nested_webpack_require_129459__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_130797__) {

var toInteger = __nested_webpack_require_130797__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_131499__) {

var requireObjectCoercible = __nested_webpack_require_131499__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_132177__) {

var isObject = __nested_webpack_require_132177__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_133804__) {

var isObject = __nested_webpack_require_133804__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __nested_webpack_require_133804__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_134575__) {

var global = __nested_webpack_require_134575__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __nested_webpack_require_134575__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __nested_webpack_require_134575__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __nested_webpack_require_134575__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_135577__) {

var $ = __nested_webpack_require_135577__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __nested_webpack_require_135577__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __nested_webpack_require_135577__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_136591__) {

"use strict";

var codePointAt = __nested_webpack_require_136591__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
var InternalStateModule = __nested_webpack_require_136591__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __nested_webpack_require_136591__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/default-attrs.json":
/*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
/***/ (function(module) {

module.exports = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_139336__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = __nested_webpack_require_139336__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _defaultAttrs = __nested_webpack_require_139336__(/*! ./default-attrs.json */ "./src/default-attrs.json");

var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function () {
  function Icon(name, contents) {
    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = _extends({}, _defaultAttrs2.default, { class: 'feather feather-' + name });
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */


  _createClass(Icon, [{
    key: 'toSvg',
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

      return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
    }

    /**
     * Return string representation of an `Icon`.
     *
     * Added for backward compatibility. If old code expects `feather.icons.<name>`
     * to be a string, `toString()` will get implicitly called.
     *
     * @returns {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */


function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return key + '="' + attrs[key] + '"';
  }).join(' ');
}

exports.default = Icon;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_142494__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __nested_webpack_require_142494__(/*! ./icon */ "./src/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _icons = __nested_webpack_require_142494__(/*! ../dist/icons.json */ "./dist/icons.json");

var _icons2 = _interopRequireDefault(_icons);

var _tags = __nested_webpack_require_142494__(/*! ./tags.json */ "./src/tags.json");

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.keys(_icons2.default).map(function (key) {
  return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_143470__) {

"use strict";


var _icons = __nested_webpack_require_143470__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

var _toSvg = __nested_webpack_require_143470__(/*! ./to-svg */ "./src/to-svg.js");

var _toSvg2 = _interopRequireDefault(_toSvg);

var _replace = __nested_webpack_require_143470__(/*! ./replace */ "./src/replace.js");

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

/***/ }),

/***/ "./src/replace.js":
/*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_144252__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


var _dedupe = __nested_webpack_require_144252__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _icons = __nested_webpack_require_144252__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */
function replace() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`feather.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[data-feather]');

  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, attrs);
  });
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elementAttrs = getAttrs(element);
  var name = elementAttrs['data-feather'];
  delete elementAttrs['data-feather'];

  var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  var svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

exports.default = replace;

/***/ }),

/***/ "./src/tags.json":
/*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-buoy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":["pulse","health","action","motion"],"airplay":["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],"anchor":[],"archive":["index","box"],"at-sign":["mention","at","email","message"],"award":["achievement","badge"],"aperture":["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],"battery":["power","electricity"],"battery-charging":["power","electricity"],"bell":["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],"bluetooth":["wireless"],"book-open":["read","library"],"book":["read","dictionary","booklet","magazine","library"],"bookmark":["read","clip","marker","tag"],"box":["cube"],"briefcase":["work","bag","baggage","folder"],"calendar":["date"],"camera":["photo"],"cast":["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],"circle":["off","zero","record"],"clipboard":["copy"],"clock":["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],"cloud":["weather"],"codepen":["logo"],"codesandbox":["logo"],"code":["source","programming"],"coffee":["drink","cup","mug","tea","cafe","hot","beverage"],"columns":["layout"],"command":["keyboard","cmd","terminal","prompt"],"compass":["navigation","safari","travel","direction"],"copy":["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],"cpu":["processor","technology"],"credit-card":["purchase","payment","cc"],"crop":["photo","image"],"crosshair":["aim","target"],"database":["storage","memory"],"delete":["remove"],"disc":["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],"droplet":["water"],"edit":["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],"eye":["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],"facebook":["logo","social"],"fast-forward":["music"],"figma":["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],"film":["movie","video"],"filter":["funnel","hopper"],"flag":["report"],"folder-minus":["directory"],"folder-plus":["directory"],"folder":["directory"],"framer":["logo","design","tool"],"frown":["emoji","face","bad","sad","emotion"],"gift":["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],"github":["logo","version control"],"gitlab":["logo","version control"],"globe":["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],"hash":["hashtag","number","pound"],"headphones":["music","audio","sound"],"heart":["like","love","emotion"],"help-circle":["question mark"],"hexagon":["shape","node.js","logo"],"home":["house","living"],"image":["picture"],"inbox":["email"],"instagram":["logo","camera"],"key":["password","login","authentication","secure"],"layers":["stack"],"layout":["window","webpage"],"life-buoy":["help","life ring","support"],"link":["chain","url"],"link-2":["chain","url"],"linkedin":["logo","social media"],"list":["options"],"lock":["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],"mail":["email","message"],"map-pin":["location","navigation","travel","marker"],"map":["location","navigation","travel"],"maximize":["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],"meh":["emoji","face","neutral","emotion"],"menu":["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],"mic":["record","sound","listen"],"minimize":["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],"minus":["subtract"],"monitor":["tv","screen","display"],"moon":["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],"move":["arrows"],"music":["note"],"navigation":["location","travel"],"navigation-2":["location","travel"],"octagon":["stop"],"package":["box","container"],"paperclip":["attachment"],"pause":["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],"percent":["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],"phone":["call"],"play":["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],"plus":["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],"pocket":["logo","save"],"power":["on","off"],"printer":["fax","office","device"],"radio":["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],"repeat":["loop","arrows"],"rewind":["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],"rss":["feed","subscribe"],"save":["floppy disk"],"scissors":["cut"],"search":["find","magnifier","magnifying glass"],"send":["message","mail","email","paper airplane","paper aeroplane"],"settings":["cog","edit","gear","preferences"],"share-2":["network","connections"],"shield":["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],"shuffle":["music"],"skip-back":["music"],"skip-forward":["music"],"slack":["logo"],"slash":["ban","no"],"sliders":["settings","controls"],"smartphone":["cellphone","device"],"smile":["emoji","face","happy","good","emotion"],"speaker":["audio","music"],"star":["bookmark","favorite","like"],"stop-circle":["media","music"],"sun":["brightness","weather","light"],"sunrise":["weather","time","morning","day"],"sunset":["weather","time","evening","night"],"tablet":["device"],"tag":["label"],"target":["logo","bullseye"],"terminal":["code","command line","prompt"],"thermometer":["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],"tool":["settings","spanner"],"trash":["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],"triangle":["delta"],"truck":["delivery","van","shipping","transport","lorry"],"tv":["television","stream"],"twitch":["logo"],"twitter":["logo","social"],"type":["text"],"umbrella":["rain","weather"],"unlock":["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],"user":["person","account"],"users":["group"],"video-off":["camera","movie","film"],"video":["camera","movie","film"],"voicemail":["phone"],"volume":["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],"watch":["clock","time"],"wifi-off":["disabled"],"wifi":["connection","signal","wireless"],"wind":["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],"x":["cancel","close","delete","remove","times","clear"],"youtube":["logo","video","play"],"zap-off":["flash","camera","lightning"],"zap":["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]};

/***/ }),

/***/ "./src/to-svg.js":
/*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_157390__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __nested_webpack_require_157390__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */
function toSvg(name) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');

  if (!name) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!_icons2.default[name]) {
    throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
  }

  return _icons2.default[name].toSvg(attrs);
}

exports.default = toSvg;

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_158612__) {

__nested_webpack_require_158612__(/*! core-js/es/array/from */"./node_modules/core-js/es/array/from.js");
module.exports = __nested_webpack_require_158612__(/*! /home/runner/work/feather/feather/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=feather.js.map

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/data/constants.js":
/*!*******************************!*\
  !*** ./src/data/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysOfWeek: () => (/* binding */ daysOfWeek),
/* harmony export */   defaultRoute: () => (/* binding */ defaultRoute),
/* harmony export */   priorities: () => (/* binding */ priorities)
/* harmony export */ });
const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const priorities = [
    1,
    2,
    3,
    4
];

const defaultRoute = "today";



/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checklist: () => (/* binding */ checklist),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _utils_checkStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/checkStorage */ "./src/utils/checkStorage.js");
/* harmony import */ var _dataStruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataStruct */ "./src/data/dataStruct.js");



const tasks = _utils_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_dataStruct__WEBPACK_IMPORTED_MODULE_1__.tasksTemplate)(getParsedItem("tasks")) : (0,_dataStruct__WEBPACK_IMPORTED_MODULE_1__.tasksTemplate)();
const projects = _utils_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_dataStruct__WEBPACK_IMPORTED_MODULE_1__.projectsTemplate)(getParsedItem("projects")) : (0,_dataStruct__WEBPACK_IMPORTED_MODULE_1__.projectsTemplate)();
const checklist = _utils_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_dataStruct__WEBPACK_IMPORTED_MODULE_1__.checklistTemplate)(getParsedItem("checklist")) : (0,_dataStruct__WEBPACK_IMPORTED_MODULE_1__.checklistTemplate)();

function getParsedItem (key) {
    return JSON.parse(localStorage.getItem(key));
}


/***/ }),

/***/ "./src/data/dataOp.js":
/*!****************************!*\
  !*** ./src/data/dataOp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   filterIncompleteTasks: () => (/* binding */ filterIncompleteTasks),
/* harmony export */   getChecklistTaskProject: () => (/* binding */ getChecklistTaskProject),
/* harmony export */   getProjectTasks: () => (/* binding */ getProjectTasks),
/* harmony export */   getTaskProject: () => (/* binding */ getTaskProject),
/* harmony export */   isDeadlineToday: () => (/* binding */ isDeadlineToday),
/* harmony export */   setTaskAsCompleted: () => (/* binding */ setTaskAsCompleted),
/* harmony export */   undoTaskCompletion: () => (/* binding */ undoTaskCompletion),
/* harmony export */   updateData: () => (/* binding */ updateData)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatISO.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isSameDay.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isAfter.mjs");
/* harmony import */ var _utils_checkStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/checkStorage */ "./src/utils/checkStorage.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data/data.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/data/constants.js");
/* harmony import */ var _routing_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routing/routes */ "./src/routing/routes.js");
/* harmony import */ var _pages_today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/today */ "./src/pages/today.js");







function setTaskAsCompleted (taskId, date = new Date()) {
    const task = _data__WEBPACK_IMPORTED_MODULE_1__.tasks.get(taskId);

    if (!task) throw new Error ("Invalid Task Id");

    // If one time task, delete from task list
    if (task.date) {
        _data__WEBPACK_IMPORTED_MODULE_1__.tasks.remove(taskId);
        updateData("tasks", _data__WEBPACK_IMPORTED_MODULE_1__.tasks.list);
        // Add to checklist
        _data__WEBPACK_IMPORTED_MODULE_1__.checklist.add(task);
        updateData("checklist", _data__WEBPACK_IMPORTED_MODULE_1__.checklist.list);
        return task;
    }

    // else
    const checkListTask = _data__WEBPACK_IMPORTED_MODULE_1__.checklist.get(taskId);
    // If task already in checklist
    if (checkListTask) {
        // Update the date of completion
        checkListTask.date = date;
        updateData("checklist", _data__WEBPACK_IMPORTED_MODULE_1__.checklist.list);

        if ((0,_routing_routes__WEBPACK_IMPORTED_MODULE_3__.getRoute)() === "upcoming") (0,_pages_today__WEBPACK_IMPORTED_MODULE_4__.updateTodayView)();
        
        return task;
    }
    // else

    const clonedTask = structuredClone(task);
    // Add the date of task added to checklist to remove it later
    clonedTask.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.formatISO)(date, { representation: 'date' });
    _data__WEBPACK_IMPORTED_MODULE_1__.checklist.add(clonedTask);
    updateData("checklist", _data__WEBPACK_IMPORTED_MODULE_1__.checklist.list);

    if ((0,_routing_routes__WEBPACK_IMPORTED_MODULE_3__.getRoute)() === "upcoming") (0,_pages_today__WEBPACK_IMPORTED_MODULE_4__.updateTodayView)();

    return clonedTask;

}

function undoTaskCompletion (taskId) {
    const task = _data__WEBPACK_IMPORTED_MODULE_1__.checklist.remove(taskId);

    if (!task) throw new Error ("Invalid Task Id");

    updateData("checklist", _data__WEBPACK_IMPORTED_MODULE_1__.checklist.list);
    // If one time task, add it to task list
    if (!(task.repeat && task.repeat.length)) {
        _data__WEBPACK_IMPORTED_MODULE_1__.tasks.add(task);
        updateData("tasks", _data__WEBPACK_IMPORTED_MODULE_1__.tasks.list);
        return task;
    }
    return _data__WEBPACK_IMPORTED_MODULE_1__.tasks.get(taskId);
}

function isDeadlineToday(task) {
    if (!task || typeof task !== 'object') throw new Error("Invalid Task");

    const todayDay = _constants__WEBPACK_IMPORTED_MODULE_2__.daysOfWeek[(new Date()).getDay()]
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday)(task.date) || (task.repeat && task.repeat.includes(todayDay));
}

function getProjectTasks (pId) {
    return _data__WEBPACK_IMPORTED_MODULE_1__.tasks.getTasksByProjectId(pId);
}

function getTaskProject (taskId) {
    const task = _data__WEBPACK_IMPORTED_MODULE_1__.tasks.get(taskId);
    if (!task) throw new Error("Invalid Task ID");

    return _data__WEBPACK_IMPORTED_MODULE_1__.projects.get(task.projectId);
}

function getChecklistTaskProject (taskId) {
    const task = _data__WEBPACK_IMPORTED_MODULE_1__.checklist.get(taskId);
    if (!task) throw new Error("Invalid Task ID");

    return _data__WEBPACK_IMPORTED_MODULE_1__.projects.get(task.projectId);
}

function updateData (key, value) {
    if (!_utils_checkStorage__WEBPACK_IMPORTED_MODULE_0__["default"]) return;
    
    localStorage.setItem(key, JSON.stringify(value));
}

function filterIncompleteTasks (list, date = new Date()) {
    if (!Array.isArray(list)) throw new Error("Invalid Argument");
    return list.filter(task => {
        if (typeof task !== 'object') throw new Error("Invalid Argument");
        return task.date || !_data__WEBPACK_IMPORTED_MODULE_1__.checklist.get(task.id) || !((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isSameDay)(_data__WEBPACK_IMPORTED_MODULE_1__.checklist.get(task.id).date, date) || (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.isAfter)(_data__WEBPACK_IMPORTED_MODULE_1__.checklist.get(task.id).date, date))
    })
}

function deleteProject (pId) {
    getProjectTasks(pId).forEach((task) => _data__WEBPACK_IMPORTED_MODULE_1__.tasks.remove(task.id));
    updateData("tasks", _data__WEBPACK_IMPORTED_MODULE_1__.tasks.list);
    const project = _data__WEBPACK_IMPORTED_MODULE_1__.projects.remove(pId);
    updateData("projects", _data__WEBPACK_IMPORTED_MODULE_1__.projects.list);
    return project;
}




/***/ }),

/***/ "./src/data/dataStruct.js":
/*!********************************!*\
  !*** ./src/data/dataStruct.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checklistTemplate: () => (/* binding */ checklistTemplate),
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   projectsTemplate: () => (/* binding */ projectsTemplate),
/* harmony export */   task: () => (/* binding */ task),
/* harmony export */   tasksTemplate: () => (/* binding */ tasksTemplate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isEqual.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatISO.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/getDay.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/data/constants.js");




function projectsTemplate (arr) {
    return listTemplate(arr);
}

function tasksTemplate (arr) {
    const {list, add, remove, get} = listTemplate(arr);

    const edit = (newTask) => {
        console.log(newTask)
        const index = list.findIndex(task => task.id === newTask.id);
        list[index] = newTask;
        return newTask;
    }

    const getTasksByTitle = (title) => list.filter((task) => task.title.includes(title));

    const getTasksByTaskDate = (date) => list.filter((task) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isEqual)(task.date, (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.formatISO)(date, {representation: "date"})));

    const getTaskByTaskDay = (date) => list.filter((task) => {
        if (task.repeat) return task.repeat.includes(_constants__WEBPACK_IMPORTED_MODULE_0__.daysOfWeek[(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.getDay)(date)]);
        return false;
    });

    const getTasksByDate = (date) => [
        ...getTasksByTaskDate(date),
        ...getTaskByTaskDay(date)
    ];

    const getTasksByProjectId = (id) => list.filter((task) => task.projectId === id);

    return {
        list,
        add,
        remove,
        get,
        edit,
        getTasksByTaskDate,
        getTaskByTaskDay,
        getTasksByDate,
        getTasksByTitle,
        getTasksByProjectId
    }
}

function checklistTemplate (arr) {
    const initList = arr || [];
    const list = initList.filter(task => !((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isBefore)(task.date, (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.formatISO)(new Date(), { representation: 'date' }))));

    const {add, remove, get} = listTemplate(list)
    
    return {
        list,
        add,
        remove,
        get
    };
}

function listTemplate (arr) {
    const list = arr || [];

    const add = (item) => list.push(item);

    const remove = (id) => {
        for (const i in list) {
            if (list[i].id === id) return list.splice(i, 1)[0];
        }
        return null;
    }
    const get = (id) => list.find((item) => item.id === id);

    return {
        list,
        add, 
        remove,
        get
    }
}

function project (title, color="default") {
    return {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        title,
        color
    }
};

function task ({
    id,
    title,
    description,
    date,
    repeat,
    priority,
    projectId,
}) {
    if (!title || !priority || !projectId || !(date || (Array.isArray(repeat) && repeat.length))) {
        throw new Error("Invalid arguments")
    };

    if (!id) id = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])();
    return {
        id,
        title,
        description,
        date,
        repeat,
        priority,
        projectId
    }
};

/***/ }),

/***/ "./src/pages/checklist.js":
/*!********************************!*\
  !*** ./src/pages/checklist.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendToChecklist: () => (/* binding */ appendToChecklist),
/* harmony export */   "default": () => (/* binding */ checklist)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ "./src/data/data.js");
/* harmony import */ var _ui_layout_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/layout/icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_tasks_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/tasks/icon */ "./src/pages/utils/tasks/icon.js");
/* harmony import */ var _utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/tasks/task-element */ "./src/pages/utils/tasks/task-element.js");






const taskCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
    tag: "ul",
    classList: ["todo-item-container"]
});

function checklist () {

    const liEls = _data_data__WEBPACK_IMPORTED_MODULE_0__.checklist.list.map(task => (0,_utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_4__["default"])(task, true))

    taskCont.replaceChildren(...liEls);

    const pageCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: "div",
        classList: ["page-container"],
        children: [
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
                tag: "div",
                classList: ["heading"],
                children: [
                    (0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_1__["default"])("check-circle"),
                    (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
                        tag: "h1",
                        text: "Checklist"
                    })
                ]
            }),
            taskCont
        ]
    });

    pageCont.addEventListener('click', ({target}) => (0,_utils_tasks_icon__WEBPACK_IMPORTED_MODULE_3__.handleIcons)(target));

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: "div",
        id: "checklist",
        children: [pageCont]
    });
}

function appendToChecklist (el) {
    taskCont.appendChild(el);
}

/***/ }),

/***/ "./src/pages/project-task/index.js":
/*!*****************************************!*\
  !*** ./src/pages/project-task/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectTask),
/* harmony export */   setProject: () => (/* binding */ setProject),
/* harmony export */   showNewProjectTask: () => (/* binding */ showNewProjectTask)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data */ "./src/data/data.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _ui_layout_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/layout/icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_tasks_add_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/tasks/add-task */ "./src/pages/utils/tasks/add-task.js");
/* harmony import */ var _utils_tasks_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/tasks/form */ "./src/pages/utils/tasks/form.js");
/* harmony import */ var _utils_tasks_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/tasks/icon */ "./src/pages/utils/tasks/icon.js");
/* harmony import */ var _utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/tasks/task-element */ "./src/pages/utils/tasks/task-element.js");
/* harmony import */ var _utils_update_dated_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/update-dated-view */ "./src/pages/utils/update-dated-view.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/pages/project-task/utils.js");











const taskCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "ul",
    classList: ["todo-item-container"],
});

const heading = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "h1",
});

const addTaskBtn = (0,_utils_tasks_add_task__WEBPACK_IMPORTED_MODULE_4__["default"])((task) => {
    (0,_utils_update_dated_view__WEBPACK_IMPORTED_MODULE_8__["default"])();
    if ((0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.getTaskProject)(task.id) === _data_data__WEBPACK_IMPORTED_MODULE_0__.projects.get((0,_utils__WEBPACK_IMPORTED_MODULE_9__.getProjectId)())) showNewProjectTask(task);
});

function deleteProjectEl () {
    const el = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"]) ({
        tag: "div",
        classList: ["todo-item", "item-adder"],
        children: [
            (0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_2__["default"])("trash-2"),
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
                tag: "span",
                text: "Delete Project"
            })
        ]
    });

    el.addEventListener('click', () => (0,_utils__WEBPACK_IMPORTED_MODULE_9__.removeProject)((0,_utils__WEBPACK_IMPORTED_MODULE_9__.getProjectId)()));

    return el;
}

function projectTask () {

    const pageCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "div",
        classList: ["page-container"],
        children: [
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
                tag: "div",
                classList: ["heading"],
                children: [
                    (0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_2__["default"])("folder"),
                    heading
                ]
            }),
            addTaskBtn,
            taskCont,
            deleteProjectEl()
        ]
    });

    pageCont.addEventListener('click', ({target}) => (0,_utils_tasks_icon__WEBPACK_IMPORTED_MODULE_6__.handleIcons)(target));

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "div",
        id: "project-task",
        children: [
            pageCont
        ]
    });
}

function setProject (projectId) {
    const project = _data_data__WEBPACK_IMPORTED_MODULE_0__.projects.get(projectId);
    if (!project) throw new Error("Invalid Project");

    heading.textContent = project.title;
    const projTasks = (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.getProjectTasks)(projectId);

    const liEls = (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.filterIncompleteTasks)(projTasks).map(task => (0,_utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_7__["default"])(task));
    
    taskCont.replaceChildren(...liEls);

    (0,_utils_tasks_form__WEBPACK_IMPORTED_MODULE_5__.updateTaskForm)({projectId});
}

function showNewProjectTask (task) {
    const taskEl = (0,_utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_7__["default"])(task);
    taskEl.classList.add("add");
    taskCont.appendChild(taskEl);
}

/***/ }),

/***/ "./src/pages/project-task/utils.js":
/*!*****************************************!*\
  !*** ./src/pages/project-task/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectId: () => (/* binding */ getProjectId),
/* harmony export */   removeProject: () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data */ "./src/data/data.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _routing_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routing/routes */ "./src/routing/routes.js");




function getProjectId () {
    if ((0,_routing_routes__WEBPACK_IMPORTED_MODULE_2__.getRoute)().startsWith("project-")) return (0,_routing_routes__WEBPACK_IMPORTED_MODULE_2__.getRoute)().substring(8);
    return null;
}

function removeProject (pID) {
    const project = (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(pID);
    if (!project) throw new Error ("Invalid Id");

    const projectEl = document.getElementById(pID);
    if (projectEl) projectEl.remove();

    (0,_routing_routes__WEBPACK_IMPORTED_MODULE_2__["default"])("projects");
}

/***/ }),

/***/ "./src/pages/projects/index.js":
/*!*************************************!*\
  !*** ./src/pages/projects/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data */ "./src/data/data.js");
/* harmony import */ var _ui_layout_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/layout/icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/addProject */ "./src/pages/projects/utils/addProject.js");
/* harmony import */ var _utils_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/icon */ "./src/pages/projects/utils/icon.js");
/* harmony import */ var _utils_project_el__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/project-el */ "./src/pages/projects/utils/project-el.js");







function project () {

    const liEls = _data_data__WEBPACK_IMPORTED_MODULE_0__.projects.list.map(project => (0,_utils_project_el__WEBPACK_IMPORTED_MODULE_5__["default"])(project));

    const projectCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: "ul",
        classList: ["todo-item-container"],
        children: [...liEls]
    });

    const pageCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: "div",
        classList: ["page-container"],
        children: [
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
                tag: "div",
                classList: ["heading"],
                children: [
                    (0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_1__["default"])("folder"),
                    (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
                        tag: "h1",
                        text: "My Projects"
                    })
                ]
            }),
            (0,_utils_addProject__WEBPACK_IMPORTED_MODULE_3__["default"])(projectCont),
            projectCont
        ]
    });

    pageCont.addEventListener('click', ({target}) => (0,_utils_icon__WEBPACK_IMPORTED_MODULE_4__.handleIcons)(target));

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: "div",
        id: "projects",
        children: [pageCont]
    });
}



/***/ }),

/***/ "./src/pages/projects/utils/addProject.js":
/*!************************************************!*\
  !*** ./src/pages/projects/utils/addProject.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProjectButton)
/* harmony export */ });
/* harmony import */ var _ui_list_item_adder_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/list/item-adder-btn */ "./src/ui/list/item-adder-btn.js");
/* harmony import */ var _data_dataStruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/dataStruct */ "./src/data/dataStruct.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/data */ "./src/data/data.js");
/* harmony import */ var _project_el__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-el */ "./src/pages/projects/utils/project-el.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form */ "./src/pages/projects/utils/form.js");
/* harmony import */ var _utils_tasks_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/tasks/form */ "./src/pages/utils/tasks/form.js");
/* harmony import */ var _ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/layout/modal-form */ "./src/ui/layout/modal-form.js");
/* harmony import */ var _ui_list_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/list/animation */ "./src/ui/list/animation.js");










/**
 * @param {HTMLElement} container 
 * @returns A div which can be clicked to add new projects in given container
 */
function addProjectButton (container) {
    const addProject = (formEl) => {
        const formData = new FormData(formEl);
    
        const newProject = (0,_data_dataStruct__WEBPACK_IMPORTED_MODULE_1__.project)(formData.get("title"));
    
        _data_data__WEBPACK_IMPORTED_MODULE_3__.projects.add(newProject);
    
        (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_2__.updateData)("projects", _data_data__WEBPACK_IMPORTED_MODULE_3__.projects.list);
        
        (0,_utils_tasks_form__WEBPACK_IMPORTED_MODULE_6__.updateTaskFormProjectList)();
    
        const newProjectEl = (0,_project_el__WEBPACK_IMPORTED_MODULE_4__["default"])(newProject);
        (0,_ui_list_animation__WEBPACK_IMPORTED_MODULE_8__.addWithAnimation)(newProjectEl, container);
    }

    const btn = (0,_ui_list_item_adder_btn__WEBPACK_IMPORTED_MODULE_0__["default"])("project");

    btn.addEventListener('click' ,() => {
        (0,_ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_7__.editModalForm)((0,_form__WEBPACK_IMPORTED_MODULE_5__["default"])(), addProject).showModal();
    });
    
    return btn;
}

/***/ }),

/***/ "./src/pages/projects/utils/form.js":
/*!******************************************!*\
  !*** ./src/pages/projects/utils/form.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectFormContents)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/form */ "./src/utils/form.js");



function projectFormContents (value = "") {
    const textInput = (0,_utils_form__WEBPACK_IMPORTED_MODULE_1__["default"])("Project Name", "title", value);
    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "div",
        children: [
            textInput
        ]
    });
}

/***/ }),

/***/ "./src/pages/projects/utils/icon.js":
/*!******************************************!*\
  !*** ./src/pages/projects/utils/icon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIcons: () => (/* binding */ getIcons),
/* harmony export */   handleIcons: () => (/* binding */ handleIcons)
/* harmony export */ });
/* harmony import */ var _ui_layout_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/layout/icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _ui_list_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/list/list */ "./src/ui/list/list.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./src/pages/projects/utils/tools.js");




const iconSet = [
    {
        icon: "plus",
        class: "add-task",
        function: _tools__WEBPACK_IMPORTED_MODULE_2__.addTask
    },
    {
        icon:  "edit",
        class: "edit-project",
        function: _tools__WEBPACK_IMPORTED_MODULE_2__.editProject
    },
    {
        icon: "eye",
        class: "view-project",
        function: _tools__WEBPACK_IMPORTED_MODULE_2__.viewProject
    }
]

/**
 * 
 * @returns array of project Icons
 */
function getIcons () {
    const icons = [];

    for (const each of iconSet) 
        icons.push((0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_0__["default"]) (each.icon, {classList: [each.class]}));

    return icons;
}

/**
 * 
 * @param {Element} el 
 */
function handleIcons (el) {
    // Get project Id
    const projectEl = (0,_ui_list_list__WEBPACK_IMPORTED_MODULE_1__.getClosestTodoItem)(el);
    if (!projectEl) return;

    // Execute required function
    for (const icon of iconSet) 
        if (el.closest(`.${icon.class}`)) return icon.function(projectEl);

}

/***/ }),

/***/ "./src/pages/projects/utils/project-el.js":
/*!************************************************!*\
  !*** ./src/pages/projects/utils/project-el.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectElement)
/* harmony export */ });
/* harmony import */ var _ui_list_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/list/list */ "./src/ui/list/list.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/pages/projects/utils/icon.js");



function projectElement (project) {
    const el = (0,_ui_list_list__WEBPACK_IMPORTED_MODULE_0__["default"])(project.title, "", (0,_icon__WEBPACK_IMPORTED_MODULE_1__.getIcons)());
    el.id = project.id;
    return el;
}


/***/ }),

/***/ "./src/pages/projects/utils/tools.js":
/*!*******************************************!*\
  !*** ./src/pages/projects/utils/tools.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   viewProject: () => (/* binding */ viewProject)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/data */ "./src/data/data.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/layout/modal-form */ "./src/ui/layout/modal-form.js");
/* harmony import */ var _ui_list_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/list/list */ "./src/ui/list/list.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./src/pages/projects/utils/form.js");
/* harmony import */ var _project_el__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-el */ "./src/pages/projects/utils/project-el.js");
/* harmony import */ var _routing_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../routing/routes */ "./src/routing/routes.js");
/* harmony import */ var _utils_tasks_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/tasks/form */ "./src/pages/utils/tasks/form.js");
/* harmony import */ var _utils_tasks_add_task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/tasks/add-task */ "./src/pages/utils/tasks/add-task.js");










function addTask (projectEl) {
    (0,_utils_tasks_form__WEBPACK_IMPORTED_MODULE_7__.updateTaskForm)({projectId: projectEl.id});
    (0,_ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_2__.editModalForm)((0,_utils_tasks_form__WEBPACK_IMPORTED_MODULE_7__["default"])(), (0,_utils_tasks_add_task__WEBPACK_IMPORTED_MODULE_8__.getAddTaskFn)()).showModal();
}

function viewProject (projectEl) {
    (0,_routing_routes__WEBPACK_IMPORTED_MODULE_6__.setProjectRoute)(projectEl.id);
}

function editProject (projectEl) {
    const project = _data_data__WEBPACK_IMPORTED_MODULE_0__.projects.get(projectEl.id);

    if (!project) throw new Error("Invalid Project");

    (0,_ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_2__.editModalForm)((0,_form__WEBPACK_IMPORTED_MODULE_4__["default"])(project.title), (formEl) => {
        const formData = new FormData(formEl);

        const title = formData.get("title");

        project.title = title;

        (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.updateData)("projects", _data_data__WEBPACK_IMPORTED_MODULE_0__.projects.list);

        (0,_utils_tasks_form__WEBPACK_IMPORTED_MODULE_7__.updateTaskFormProjectList)();

        (0,_ui_list_list__WEBPACK_IMPORTED_MODULE_3__.replaceTodoItem)((0,_project_el__WEBPACK_IMPORTED_MODULE_5__["default"])(project), projectEl);
    }).showModal();
}



/***/ }),

/***/ "./src/pages/today.js":
/*!****************************!*\
  !*** ./src/pages/today.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTodayTask: () => (/* binding */ appendTodayTask),
/* harmony export */   "default": () => (/* binding */ today),
/* harmony export */   updateTodayView: () => (/* binding */ updateTodayView)
/* harmony export */ });
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/constants */ "./src/data/constants.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ "./src/data/data.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _ui_layout_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/layout/icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_tasks_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/tasks/icon */ "./src/pages/utils/tasks/icon.js");
/* harmony import */ var _utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/tasks/task-element */ "./src/pages/utils/tasks/task-element.js");








const pageCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_4__["default"])({
    tag: "div",
    classList: ["page-container"],
});

function today () {

    updateTodayView();

    pageCont.addEventListener('click', ({target}) => (0,_utils_tasks_icon__WEBPACK_IMPORTED_MODULE_5__.handleIcons)(target));

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_4__["default"])({
        tag: "div",
        id: "today",
        children: [
            pageCont
        ]
    });
}

function updateTodayView () {
    const todayTasks = _data_data__WEBPACK_IMPORTED_MODULE_1__.tasks.getTasksByDate(new Date());

    const taskList = {}

    for (const i in _data_constants__WEBPACK_IMPORTED_MODULE_0__.priorities) {
        taskList["p" + _data_constants__WEBPACK_IMPORTED_MODULE_0__.priorities[i]] = [];
    }

    (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_2__.filterIncompleteTasks)(todayTasks).forEach(task => taskList["p" + task.priority].push((0,_utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_6__["default"])(task)));

    const taskCont = []
    for (const [key, value] of Object.entries(taskList)) {
        taskCont.push((0,_utils_render__WEBPACK_IMPORTED_MODULE_4__["default"])({
            tag: "ul",
            classList: ["todo-item-container", key],
            children: value
        }))
    }

    pageCont.replaceChildren((0,_utils_render__WEBPACK_IMPORTED_MODULE_4__["default"])({
        tag: "div",
        classList: ["heading"],
        children: [
            (0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_3__["default"])("hash"),
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_4__["default"])({
                tag: "h1",
                text: "Today"
            })
        ]
    }),
    ...taskCont);
}

function appendTodayTask (task) {
    const container = pageCont.querySelector(".p" + task.priority);
    if (!container) throw new Error("Invalid Task");

    const newTask = (0,_utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_6__["default"])(task);
    newTask.classList.add("add");
    container.appendChild(newTask);
}

/***/ }),

/***/ "./src/pages/upcoming.js":
/*!*******************************!*\
  !*** ./src/pages/upcoming.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ upcoming),
/* harmony export */   updateTomorrowView: () => (/* binding */ updateTomorrowView),
/* harmony export */   updateUpcomingDatedView: () => (/* binding */ updateUpcomingDatedView),
/* harmony export */   updateUpcomingView: () => (/* binding */ updateUpcomingView)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfTomorrow.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatISO.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/intlFormat.mjs");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ "./src/data/data.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _ui_layout_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/layout/icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_tasks_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/tasks/icon */ "./src/pages/utils/tasks/icon.js");
/* harmony import */ var _utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/tasks/task-element */ "./src/pages/utils/tasks/task-element.js");








const tmwTaskCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "div",
    classList: ["page-container"],
});

const datedTaskCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "div",
    classList: ["page-container"],
});

const container = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "div",
    classList: ["page-container"],
    children: [
        tmwTaskCont,
        datedTaskCont
    ]
});

function upcoming () {

    updateUpcomingView();

    container.addEventListener('click', ({target}) => (0,_utils_tasks_icon__WEBPACK_IMPORTED_MODULE_4__.handleIcons)(target));

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "div",
        id: "upcoming",
        children: [
            container
        ]
    });
}

function updateUpcomingView (date) {
    updateTomorrowView();
    updateUpcomingDatedView(date || "");
}

function updateTomorrowView () {
    const taskList = _data_data__WEBPACK_IMPORTED_MODULE_0__.tasks.getTasksByDate((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.endOfTomorrow)());

    const taskNodes = (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.filterIncompleteTasks)(taskList, (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.endOfTomorrow)()).map(task => (0,_utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_5__["default"])(task));
    
    tmwTaskCont.replaceChildren(
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
            tag: "div",
            classList: ["heading"],
            children: [
                (0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_2__["default"])("calendar"),
                (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
                    tag: "h1",
                    text: "Tomorrow"
                })
            ]
        }),
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
            tag: "ul",
            classList: ["todo-item-container"],
            props: {
                "data-date": (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.formatISO)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.endOfTomorrow)(), { representation: 'date' })
            },
            children: taskNodes
        })
    );
}

function updateUpcomingDatedView (date) {

    const dateTxt = date
                    ?
                    (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.intlFormat)(date, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }, {
                        locale: 'en-IN',
                    })
                    :
                    "Select Date"

    const headingCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "div",
        classList: ["upcoming-heading-cont"],
        children: [
            headingEl(dateTxt),
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
                tag: "input",
                classList: ["upcoming-date-picker"],
                props: {
                    type: "date",
                    value: date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.formatISO)(date, {representation: "date"}) : ""
                }
            })
        ]
    });

    headingCont.addEventListener('input', ({target}) => {
        updateUpcomingDatedView(target.value);
    })

    if (!date) {
        datedTaskCont.replaceChildren(headingCont);
        return;
    }

    const taskList = _data_data__WEBPACK_IMPORTED_MODULE_0__.tasks.getTasksByDate(date);

    const taskNodes = (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.filterIncompleteTasks)(taskList, date).map(task => (0,_utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_5__["default"])(task));
    
    datedTaskCont.replaceChildren(
        headingCont,
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
            tag: "ul",
            classList: ["todo-item-container"],
            props: {
                "data-date": date
            },
            children: taskNodes
        })
    );
}

function headingEl (text) {
    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "div",
        classList: ["heading"],
        children: [
            (0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_2__["default"])("calendar"),
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
                tag: "h1",
                text
            })
        ]
    });
}

/***/ }),

/***/ "./src/pages/utils/tasks/add-task.js":
/*!*******************************************!*\
  !*** ./src/pages/utils/tasks/add-task.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTaskButton),
/* harmony export */   getAddTaskFn: () => (/* binding */ getAddTaskFn),
/* harmony export */   getValidatedData: () => (/* binding */ getValidatedData)
/* harmony export */ });
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/constants */ "./src/data/constants.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/data */ "./src/data/data.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _data_dataStruct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/dataStruct */ "./src/data/dataStruct.js");
/* harmony import */ var _utils_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/form */ "./src/utils/form.js");
/* harmony import */ var _ui_list_item_adder_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/list/item-adder-btn */ "./src/ui/list/item-adder-btn.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ "./src/pages/utils/tasks/form.js");
/* harmony import */ var _ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/layout/modal-form */ "./src/ui/layout/modal-form.js");









function getValidatedData (formEl) {
    const formData = new FormData(formEl);

    const data = {};

    data.repeat = [];

    for (const [key, value] of formData.entries()) {
        if (key === "repeat") data.repeat.push(value);
        else data[key] = value;
    }

    if (!data.repeat.length && !data.date) {
        const err = "Please Enter either Date or select repeating days";
        const field = formEl.querySelector(`input[type=date]`);
        (0,_utils_form__WEBPACK_IMPORTED_MODULE_4__.showValidationError)(field, err);
        throw new Error(err);
    }
    return data;
} 

function getAddTaskFn (callback) {
    return (formEl)  => {
        const data = getValidatedData(formEl);

        const newTask = (0,_data_dataStruct__WEBPACK_IMPORTED_MODULE_3__.task)(data);

        _data_data__WEBPACK_IMPORTED_MODULE_1__.tasks.add(newTask);
    
        (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_2__.updateData)("tasks", _data_data__WEBPACK_IMPORTED_MODULE_1__.tasks.list);
    
        if (callback) callback(newTask);
    }
}

/**
 * @param {HTMLElement} container 
 * @param {Function} callback returns control to this function 
 * @returns A div which can be clicked to add new projects in given container
 */
function addTaskButton (callback) {
    const btn = (0,_ui_list_item_adder_btn__WEBPACK_IMPORTED_MODULE_5__["default"])("Task");

    btn.addEventListener('click', () => {
        (0,_form__WEBPACK_IMPORTED_MODULE_6__.updateTaskForm)({});
        (0,_ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_7__.editModalForm)((0,_form__WEBPACK_IMPORTED_MODULE_6__["default"])(), getAddTaskFn(callback)).showModal();
    });

    return btn;
}


/***/ }),

/***/ "./src/pages/utils/tasks/form.js":
/*!***************************************!*\
  !*** ./src/pages/utils/tasks/form.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskFormContents),
/* harmony export */   updateTaskForm: () => (/* binding */ updateTaskForm),
/* harmony export */   updateTaskFormProjectList: () => (/* binding */ updateTaskFormProjectList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatISO.mjs");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/constants */ "./src/data/constants.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/data */ "./src/data/data.js");
/* harmony import */ var _utils_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/form */ "./src/utils/form.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/render */ "./src/utils/render.js");






const title = (0,_utils_form__WEBPACK_IMPORTED_MODULE_2__["default"])("Task Name", "title");

const description = (0,_utils_form__WEBPACK_IMPORTED_MODULE_2__["default"])("Description", "description", false, 64);

const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.formatISO)(new Date(), { representation: 'date' });

const date = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "input",
    props : {
        name: "date",
        type: "date",
        id: "task-date",
        value: today,
        min: today
    },
});

const dateCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "div",
    children: [
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
            tag: "label",
            text: "Date:",
            props: {
                for: "task-date"
            }
        }),
        date
    ]
});

const days = _data_constants__WEBPACK_IMPORTED_MODULE_0__.daysOfWeek.map((day) => (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "input",
    props: {
        type: "checkbox",
        name: "repeat",
        value: day,
        day: day.substring(0, 1).toUpperCase(),
    }
}));

const repeat = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "div",
    children: [
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
            tag: "label",
            text: "Repeat:",
        }),
        ...days
    ],
    classList: ["days-cont"]
});

const priority =  (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "select",
    props: {
        name: "priority",
        required: true
    },
    children: _data_constants__WEBPACK_IMPORTED_MODULE_0__.priorities.map((prior) => (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "option",
        text: "Priority "+ prior,
        props: {
            value: prior
        }
    }))
});
priority.selectedIndex = _data_constants__WEBPACK_IMPORTED_MODULE_0__.priorities.length - 1;

const project =  (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "select",
    props: {
        name: "projectId",
        required: true
    }
});

const formContent = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "div",
    children: [
        title,
        description,
        repeat,
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"]) ({
            tag: "div",
            children: [
                dateCont,
                priority,
                project
            ],
            classList: ["date-priority-project-cont"]
        })
    ]
});

handleSchedule(date, repeat);
updateTaskFormProjectList();

function taskFormContents () {
    return formContent;
}

function updateTaskForm (task = {}) {

    title.querySelector('input').value = task.title || "";

    description.querySelector('input').value = task.description || "";

    if (task.repeat && task.repeat.length) {
        days.forEach(day => {
            if (task.repeat.includes(day.value)) day.checked = true;
        });
        date.value = "";
    }
    else if (task.date) {
        date.value = task.date;
        date.classList.add("selected");
    }
    else date.value = today;

    // Set task's priority
    priority.selectedIndex =  task.priority ? _data_constants__WEBPACK_IMPORTED_MODULE_0__.priorities.indexOf(+task.priority) : _data_constants__WEBPACK_IMPORTED_MODULE_0__.priorities.length - 1;

    project.value = task.projectId || "";
}

/**
 * Allow only repeat or date
 * @param {HTMLInputElement} dateInput 
 * @param {HTMLElement} daysInput 
 */
function handleSchedule (dateInput, daysInput) {
    if (dateInput.value) dateInput.classList.add("selected");
    dateInput.addEventListener('input', () => {
        // Unselect Days
        daysInput.querySelectorAll('input[type="checkbox"]').forEach(day => day.checked = false);

        // Provide selected class to date input for css purposes
        dateInput.classList.add("selected");

        // Remove selected class if no value
        if (!dateInput.value) dateInput.classList.remove("selected");
    });

    daysInput.addEventListener("change", () => {
        // Remove date
        dateInput.value = "";
        dateInput.classList.remove("selected");
    });
}

function updateTaskFormProjectList () {
    const projectList = _data_data__WEBPACK_IMPORTED_MODULE_1__.projects.list.map((project) => (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "option",
        text: project.title,
        props: {
            value: project.id
        }
    }));

    project.replaceChildren((0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "option",
        text: "Project",
        props: {
            disabled: true,
            selected: true,
            value: ""
        }
    }),
    ...projectList);
}

/***/ }),

/***/ "./src/pages/utils/tasks/icon.js":
/*!***************************************!*\
  !*** ./src/pages/utils/tasks/icon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIcons: () => (/* binding */ getIcons),
/* harmony export */   handleIcons: () => (/* binding */ handleIcons)
/* harmony export */ });
/* harmony import */ var _ui_layout_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/layout/icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _ui_list_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/list/list */ "./src/ui/list/list.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./src/pages/utils/tasks/tools.js");





const iconSet = [
    {
        icon:  "edit",
        class: "edit-task",
        function: _tools__WEBPACK_IMPORTED_MODULE_2__.editTask
    },
    {
        icon: "trash-2",
        class: "delete-task",
        function: _tools__WEBPACK_IMPORTED_MODULE_2__.deleteTask
    }
]

const checklistIconSet = [
    {
        icon: "trash-2",
        class: "delete-checklist-task",
        function: _tools__WEBPACK_IMPORTED_MODULE_2__.deleteChecklistTask
    }
]

/**
 * 
 * @returns array of project Icons
 */
function getIcons (checklist = false) {
    const icons = [];

    if (checklist) {
        for (const each of checklistIconSet) 
            icons.push((0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_0__["default"]) (each.icon, {classList: [each.class]}));
    }
    else {
        for (const each of iconSet) 
            icons.push((0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_0__["default"]) (each.icon, {classList: [each.class]}));
    }

    return icons;
}

/**
 * 
 * @param {Element} el 
 */
function handleIcons (el) {
    // Get project El
    const taskEl = (0,_ui_list_list__WEBPACK_IMPORTED_MODULE_1__.getClosestTodoItem)(el)
    if (!taskEl) return;

    // Execute required function
    for (const icon of iconSet) 
        if (el.closest(`.${icon.class}`)) return icon.function(taskEl);

    for (const icon of checklistIconSet) 
        if (el.closest(`.${icon.class}`)) return icon.function(taskEl);

    // If checkbox 
    const checkbox = el.closest('input[type="checkbox"]')
    if (checkbox) (0,_tools__WEBPACK_IMPORTED_MODULE_2__.toggleTaskCompletion)(checkbox, taskEl);
}

/***/ }),

/***/ "./src/pages/utils/tasks/task-element.js":
/*!***********************************************!*\
  !*** ./src/pages/utils/tasks/task-element.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskElement)
/* harmony export */ });
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _ui_list_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/list/list */ "./src/ui/list/list.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/pages/utils/tasks/icon.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools */ "./src/pages/utils/tasks/tools.js");






function taskElement (task, checklist = false) {
    if (!task || !task.id) throw new Error("Invalid Task");
    const project = checklist ? (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_0__.getChecklistTaskProject)(task.id): (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_0__.getTaskProject)(task.id);

    if (!project) throw new Error("Invalid Task");

    const el = (0,_ui_list_list__WEBPACK_IMPORTED_MODULE_1__["default"])(task.title, task.description, (0,_icon__WEBPACK_IMPORTED_MODULE_2__.getIcons)(checklist), {text: project.title, refFn: (0,_tools__WEBPACK_IMPORTED_MODULE_3__.taskProjectViewer)(project)}, true, checklist);
    el.id = task.id;
    return el;
}

/***/ }),

/***/ "./src/pages/utils/tasks/tools.js":
/*!****************************************!*\
  !*** ./src/pages/utils/tasks/tools.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteChecklistTask: () => (/* binding */ deleteChecklistTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   taskProjectViewer: () => (/* binding */ taskProjectViewer),
/* harmony export */   toggleTaskCompletion: () => (/* binding */ toggleTaskCompletion)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/data */ "./src/data/data.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _data_dataStruct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/dataStruct */ "./src/data/dataStruct.js");
/* harmony import */ var _routing_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routing/routes */ "./src/routing/routes.js");
/* harmony import */ var _ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/layout/modal-form */ "./src/ui/layout/modal-form.js");
/* harmony import */ var _ui_list_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/list/list */ "./src/ui/list/list.js");
/* harmony import */ var _ui_list_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/list/animation */ "./src/ui/list/animation.js");
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../checklist */ "./src/pages/checklist.js");
/* harmony import */ var _update_dated_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../update-dated-view */ "./src/pages/utils/update-dated-view.js");
/* harmony import */ var _add_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-task */ "./src/pages/utils/tasks/add-task.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form */ "./src/pages/utils/tasks/form.js");
/* harmony import */ var _task_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-element */ "./src/pages/utils/tasks/task-element.js");













function taskProjectViewer (projectEl) {
    const pId = projectEl.id;

    return () => (0,_routing_routes__WEBPACK_IMPORTED_MODULE_3__.setProjectRoute)(pId);
}

function editTask (taskEl) {
    const edit = (formEl) => {
        const data = (0,_add_task__WEBPACK_IMPORTED_MODULE_9__.getValidatedData)(formEl);
        data.id = taskEl.id;

        const editedTask = _data_data__WEBPACK_IMPORTED_MODULE_0__.tasks.edit((0,_data_dataStruct__WEBPACK_IMPORTED_MODULE_2__.task)(data));

        (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.updateData)("tasks", _data_data__WEBPACK_IMPORTED_MODULE_0__.tasks.list);
        (0,_ui_list_list__WEBPACK_IMPORTED_MODULE_5__.replaceTodoItem)((0,_task_element__WEBPACK_IMPORTED_MODULE_11__["default"])(editedTask), taskEl);
        (0,_update_dated_view__WEBPACK_IMPORTED_MODULE_8__["default"])();
    }
    ;(0,_form__WEBPACK_IMPORTED_MODULE_10__.updateTaskForm)(_data_data__WEBPACK_IMPORTED_MODULE_0__.tasks.get(taskEl.id));
    (0,_ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_4__.editModalForm)((0,_form__WEBPACK_IMPORTED_MODULE_10__["default"])(), edit).showModal();
}

function deleteTask (taskEl) {
    const task = _data_data__WEBPACK_IMPORTED_MODULE_0__.tasks.remove(taskEl.id);
    if (!task) throw new Error ("Invalid Id");

    (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.updateData)("tasks", _data_data__WEBPACK_IMPORTED_MODULE_0__.tasks.list);

    (0,_ui_list_animation__WEBPACK_IMPORTED_MODULE_6__.removeWithAnimation)(taskEl);
}

function deleteChecklistTask (taskEl) {
    const task = _data_data__WEBPACK_IMPORTED_MODULE_0__.checklist.remove(taskEl.id);
    if (!task) throw new Error ("Invalid Id");

    (0,_update_dated_view__WEBPACK_IMPORTED_MODULE_8__["default"])();

    (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.updateData)("checklist", _data_data__WEBPACK_IMPORTED_MODULE_0__.checklist.list);

    (0,_ui_list_animation__WEBPACK_IMPORTED_MODULE_6__.removeWithAnimation)(taskEl);

   
}

function toggleTaskCompletion (checkboxEl, taskEl) {
    const date = taskEl.parentElement.dataset?.date || new Date();

    if (checkboxEl.checked) {
        const task = (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.setTaskAsCompleted)(taskEl.id, date);
        (0,_ui_list_animation__WEBPACK_IMPORTED_MODULE_6__.removeWithAnimation)(taskEl);

        (0,_checklist__WEBPACK_IMPORTED_MODULE_7__.appendToChecklist)((0,_task_element__WEBPACK_IMPORTED_MODULE_11__["default"])(task, true));
        return;
    }

    const task = (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.undoTaskCompletion)(taskEl.id);
    (0,_ui_list_animation__WEBPACK_IMPORTED_MODULE_6__.removeWithAnimation)(taskEl);

    (0,_update_dated_view__WEBPACK_IMPORTED_MODULE_8__["default"])();
}

/***/ }),

/***/ "./src/pages/utils/update-dated-view.js":
/*!**********************************************!*\
  !*** ./src/pages/utils/update-dated-view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDatedView)
/* harmony export */ });
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../today */ "./src/pages/today.js");
/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upcoming */ "./src/pages/upcoming.js");



function updateDatedView () {
    (0,_today__WEBPACK_IMPORTED_MODULE_0__.updateTodayView)();
    (0,_upcoming__WEBPACK_IMPORTED_MODULE_1__.updateUpcomingView)();
}

/***/ }),

/***/ "./src/routing/routes.js":
/*!*******************************!*\
  !*** ./src/routing/routes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setRoute),
/* harmony export */   getRoute: () => (/* binding */ getRoute),
/* harmony export */   handleRoute: () => (/* binding */ handleRoute),
/* harmony export */   setProjectRoute: () => (/* binding */ setProjectRoute)
/* harmony export */ });
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/constants */ "./src/data/constants.js");
/* harmony import */ var _pages_project_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/project-task */ "./src/pages/project-task/index.js");



/**
 * 
 * @param {string} section 
 */
function setRoute (section) {
    setHash(section);
    handleRoute(section)
}

function handleRoute (section) {
    if (section.startsWith("project-")) handleProjectRoute(section);
    else showSection(section);
}

function showSection (section) {
    hideAllSiblings (section);
    const currSection = document.querySelector(`#${section}`) || document.querySelector(`#${_data_constants__WEBPACK_IMPORTED_MODULE_0__.defaultRoute}`);
    currSection.style.display = "block";
}

function hideAllSiblings (section) {
    const els = document.querySelector(`#${section}`)?.parentElement?.children;
    
    for (let el of els) {
        el.style.display = "none"
    }
}

function setHash (section) {
    window.location.hash = section;
}

function handleProjectRoute (section) {
    try {
        (0,_pages_project_task__WEBPACK_IMPORTED_MODULE_1__.setProject)(section.substring(8));
        showSection("project-task");
    } catch (error) {
        setRoute(_data_constants__WEBPACK_IMPORTED_MODULE_0__.defaultRoute);
        console.log(error);
    }
}

function setProjectRoute (pId) {
    setRoute("project-" + pId);
}

function getRoute () {
    return window.location.hash.substring(1);
}

window.addEventListener('hashchange', () => {
    handleRoute(getRoute());
})

/***/ }),

/***/ "./src/ui/layout/header.js":
/*!*********************************!*\
  !*** ./src/ui/layout/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ "./src/utils/render.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _navEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navEvents */ "./src/ui/layout/navEvents.js");




function header () {
    const logo = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({tag:'h1', text:"#ToDo", classList:["logo"]});

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "header",
        classList: ["header"],
        children: [
            sidebar(),
            logo,
            nav(),
        ]
    })
}

function nav () {
    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "nav",
        classList: ["main-nav", "nav"],
        children: [(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    tag: "ul",
                    children: [
                        liEl("search"),
                        liEl("plus"),
                        liEl("sun")
                    ]
                })]
    });
}

function sidebar () {
    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "ul",
        children: [
            liEl("sidebar"),
        ]
    })
}

function liEl (nav) {
    const iconLi = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "li",
        children: [(0,_icon__WEBPACK_IMPORTED_MODULE_1__["default"])(nav)]
    });

    iconLi.addEventListener('click', _navEvents__WEBPACK_IMPORTED_MODULE_2__["default"][nav]);

    return iconLi;
}

/***/ }),

/***/ "./src/ui/layout/icon.js":
/*!*******************************!*\
  !*** ./src/ui/layout/icon.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ "./src/utils/render.js");


function icon (name, htmlOptions = {}) {
    if (!htmlOptions.props) htmlOptions.props = {};
    htmlOptions.props["data-feather"] = name

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ...htmlOptions,
        tag: "i"
    })
}

/***/ }),

/***/ "./src/ui/layout/modal-form.js":
/*!*************************************!*\
  !*** ./src/ui/layout/modal-form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   editModalForm: () => (/* binding */ editModalForm)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ "./src/utils/render.js");


const modalForm = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"]) ({
    tag: "dialog",
    classList: ["modal-form-container"]
});

function editModalForm (formContents, submitFn) {

    const submitBtn = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "button",
        props: {
            type: "submit"
        },
        text: "Save",
        classList: ["modal-form-submit"]
    });

    const cancelBtn = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "button",
        text: "Cancel",
        classList:["modal-form-cancel"],
        props: {
            type: "button"
        },
    });

    cancelBtn.addEventListener('click', () => modalForm.close());

    formContents.classList.add("modal-form-content");

    const formEl = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "form",
        classList: ["modal-form"],
        children: [
            formContents,
            submitBtn,
            cancelBtn
        ]
    });

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const form = e.target.closest('form');
        submitFn(form);
        
        form.reset();
        modalForm.close();
    });

    modalForm.replaceChildren(formEl);

    return modalForm;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalForm);

/***/ }),

/***/ "./src/ui/layout/navEvents.js":
/*!************************************!*\
  !*** ./src/ui/layout/navEvents.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_project_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/project-task */ "./src/pages/project-task/index.js");
/* harmony import */ var _pages_project_task_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/project-task/utils */ "./src/pages/project-task/utils.js");
/* harmony import */ var _pages_utils_tasks_add_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/utils/tasks/add-task */ "./src/pages/utils/tasks/add-task.js");
/* harmony import */ var _pages_utils_tasks_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/utils/tasks/form */ "./src/pages/utils/tasks/form.js");
/* harmony import */ var _routing_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routing/routes */ "./src/routing/routes.js");
/* harmony import */ var _modal_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-form */ "./src/ui/layout/modal-form.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _pages_today__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/today */ "./src/pages/today.js");
/* harmony import */ var _pages_utils_update_dated_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/utils/update-dated-view */ "./src/pages/utils/update-dated-view.js");











function plus () {
    function handleAnimation (task) {
        if ((0,_routing_routes__WEBPACK_IMPORTED_MODULE_4__.getRoute)() === "today" && ((0,_data_dataOp__WEBPACK_IMPORTED_MODULE_6__.isDeadlineToday)(task))) {
            (0,_pages_today__WEBPACK_IMPORTED_MODULE_7__.appendTodayTask)(task);
            return;
        }

        if ((0,_pages_project_task_utils__WEBPACK_IMPORTED_MODULE_1__.getProjectId)() === task.projectId) (0,_pages_project_task__WEBPACK_IMPORTED_MODULE_0__.showNewProjectTask)(task);

        (0,_pages_utils_update_dated_view__WEBPACK_IMPORTED_MODULE_8__["default"])();
    }
    (0,_pages_utils_tasks_form__WEBPACK_IMPORTED_MODULE_3__.updateTaskForm)({});
    (0,_modal_form__WEBPACK_IMPORTED_MODULE_5__.editModalForm)((0,_pages_utils_tasks_form__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_pages_utils_tasks_add_task__WEBPACK_IMPORTED_MODULE_2__.getAddTaskFn)(handleAnimation)).showModal();
}

function search () {
    console.log("clicked Search");
}

function sun () {
    document.querySelector(":root").classList.toggle("dark");
}

function sidebar (e) {
    // flip sidebar svg
    e.target.closest('svg').classList.toggle("flip");

    const dialog = document.getElementById("sidebar-dialog");
    if (dialog) {
        if (dialog.open) dialog.close();
        else dialog.show();
    }
    e.stopPropagation();
    e.preventDefault();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    plus,
    search,
    sun,
    sidebar
});

/***/ }),

/***/ "./src/ui/layout/sidebar.js":
/*!**********************************!*\
  !*** ./src/ui/layout/sidebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _routing_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routing/routes */ "./src/routing/routes.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/render */ "./src/utils/render.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/ui/layout/icon.js");




const iconMapper =  {
    "today": "hash",
    "upcoming": "calendar",
    "checklist": "check-circle",
    "projects": "folder"
}

function capitalizeFirstLetter (string) {
    return string.substring(0,1).toUpperCase() + string.substring(1);
}

function liEl (nav) {

    const text = (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: "span",
        text: capitalizeFirstLetter(nav)
    });

    const li = (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: "li",
        props: {
            "data-nav": nav
        },
        children: [
            (0,_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(iconMapper[nav]),
            text
        ]
    });

    return li;
}

function sidebar () {
    const nav = (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: "nav",
        children: [
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
                tag: "ul",
                children: [
                    liEl("today"),
                    liEl("upcoming"),
                    liEl("checklist"),
                    liEl("projects")
                ]
            })
        ]
    });

    const dialog = (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: "dialog",
        id: "sidebar-dialog",
        children: [
            nav
        ]
    });

    document.addEventListener('click', ({target}) => {
        if (!dialog.open) return;

        if (!target.closest("dialog#sidebar-dialog")) {
            dialog.close();
            return;
        }
        if (target.closest("li")) {
            (0,_routing_routes__WEBPACK_IMPORTED_MODULE_0__["default"])(target.closest("li").dataset.nav);
            // Hide Sidebar
            dialog.close();
            return
        }
        
    });

    return dialog;
}

/***/ }),

/***/ "./src/ui/list/animation.js":
/*!**********************************!*\
  !*** ./src/ui/list/animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWithAnimation: () => (/* binding */ addWithAnimation),
/* harmony export */   removeWithAnimation: () => (/* binding */ removeWithAnimation)
/* harmony export */ });
function removeWithAnimation (el) {
    el.classList.add("remove");

    el.addEventListener("animationend", () => el.remove());
}

function addWithAnimation (el, container) {
    el.classList.add("add");

    el.addEventListener("animationend", () => el.classList.remove("add"));

    container.appendChild(el);
}

/***/ }),

/***/ "./src/ui/list/item-adder-btn.js":
/*!***************************************!*\
  !*** ./src/ui/list/item-adder-btn.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ itemAdderBtn)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ "./src/utils/render.js");
/* harmony import */ var _layout_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _layout_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/modal-form */ "./src/ui/layout/modal-form.js");




function itemAdderBtn (name, content, addItem) {
    const el = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"]) ({
        tag: "div",
        classList: ["todo-item", "item-adder"],
        children: [
            (0,_layout_icon__WEBPACK_IMPORTED_MODULE_1__["default"])("plus"),
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
                tag: "span",
                text: "Add new " + name
            })
        ]
    });

    // el.addEventListener ('click', () => {
    //     editModalForm(content, addItem).showModal();
         
    // })

    return el;
}

/***/ }),

/***/ "./src/ui/list/list.js":
/*!*****************************!*\
  !*** ./src/ui/list/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoItem),
/* harmony export */   getClosestTodoItem: () => (/* binding */ getClosestTodoItem),
/* harmony export */   replaceTodoItem: () => (/* binding */ replaceTodoItem)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ "./src/utils/render.js");


function checkbox (isChecked) {
    const checkbox = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "input",
        classList: ["todo-item-checkbox"],
        props: {
            type: "checkbox",
        }
    });

    if (isChecked) checkbox.checked = true;

    const checkboxCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"]) ({
        tag: "div",
        classList: ["round", "todo-item-checkbox"],
        children: [
            checkbox,
            // htmlEl({
            //     tag: "label",
            //     props: {
            //         for: "todo-item-checkbox"
            //     }
            // })
        ]
    });

    return checkboxCont;
}

function todoItem (title, description = "", iconSet = [], hashtag = {}, requiresCheckbox = false, isChecked = false) {

    const titleEl = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "div",
        text: title,
        classList: ["todo-item-title", "left", "text-container"]
    });
                        

    const descriptionEl = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "div",
        text: description,
        classList: ["todo-item-description", "todo-item-left", "text-container"]
    });

    const hashtagEl = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "div",
        text: hashtag?.text || "",
        classList: ["todo-item-hashtag", "todo-item-right","text-container"]
    });

    if (hashtag && hashtag.refFn) hashtagEl.addEventListener('click', hashtag.refFn);

    const iconList = iconSet.map(icon => (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "li",
        children: [icon]
    }));

    const iconEls = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "div",
        classList: ["todo-item-icon-set", "todo-item-right"],
        children: [(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: "ul",
            children: iconList
        })]
    });

    const components = [
        titleEl,
        descriptionEl,
        iconEls,
        hashtagEl
    ];

    if (requiresCheckbox) components.push(checkbox(isChecked));

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "li",
        classList: ["todo-item"],
        children: components
    })
}

/**
 * 
 * @param {Element} el 
 */
function getClosestTodoItem (el) {
    return el.closest("li.todo-item");
}

/**
 * 
 * @param {HTMLElement} currentItem 
 * @param {HTMLElement} newItem 
 */

function replaceTodoItem (newItem, currentItem) {
    currentItem.replaceChildren(...newItem.children);
}

/***/ }),

/***/ "./src/utils/checkStorage.js":
/*!***********************************!*\
  !*** ./src/utils/checkStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)
/* harmony export */ });
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}

const isLocalStorageAvailable = storageAvailable('localStorage');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLocalStorageAvailable);
  

/***/ }),

/***/ "./src/utils/form.js":
/*!***************************!*\
  !*** ./src/utils/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ textInputEl),
/* harmony export */   formatText: () => (/* binding */ formatText),
/* harmony export */   showValidationError: () => (/* binding */ showValidationError)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/utils/render.js");


function formatText (text) {
    return text.trim().replaceAll(" ", "-").toLowerCase();
}

function textInputEl (text, name, required = true, maxlength = 16, htmlElOptions = {}, type = "text") {

    const id =  "text-input-" + formatText(text);

    const input = (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "input",
        props: {
            type,
            name,
            maxlength
        },
        id
    });

    if (required) input.required = true;

    const label = (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "label",
        text,
        props: {
            for: id
        }
    });

    htmlElOptions.children = [
        label,
        input
    ]

    if (!htmlElOptions.classList) htmlElOptions.classList = [];

    htmlElOptions.classList.push("text-input");

    return (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"]) ({
        tag: "div",
        ...htmlElOptions
    })
}
/**
 * 
 * @param {HTMLInputElement} field 
 * @param {string} err 
 */
function showValidationError (field, err) {
    field.setCustomValidity(err);
    field.reportValidity();
    field.closest('form').addEventListener('change', () => field.setCustomValidity(''))
}


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ htmlEl)
/* harmony export */ });
/**
 * 
 * @param {*} param0 
 * @returns {HTMLElement} htmlEl
 */
function htmlEl ({tag, text = "", classList = [], id = "", children = [], props = {}}) {
    const el = document.createElement(tag);
    el.innerText = text;
    if (classList.length) el.classList.add(...classList);
    if (children.length) {
        for (const child of children) {
            el.appendChild(child);
        }
    }
    if (id) el.id = id;

    for (const [key, value] of Object.entries(props)) el.setAttribute(key, value);

    return el;
}

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/endOfTomorrow.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/endOfTomorrow.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfTomorrow: () => (/* binding */ endOfTomorrow)
/* harmony export */ });
/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @returns The end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfTomorrow);


/***/ }),

/***/ "./node_modules/date-fns/formatISO.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/formatISO.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formatISO: () => (/* binding */ formatISO)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");



/**
 * The {@link formatISO} function options.
 */

/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string (in loca.l time zone)
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */
function formatISO(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);

  if (isNaN(_date.getTime())) {
    throw new RangeError("Invalid time value");
  }

  const format = options?.format ?? "extended";
  const representation = options?.representation ?? "complete";

  let result = "";
  let tzOffset = "";

  const dateDelimiter = format === "extended" ? "-" : "";
  const timeDelimiter = format === "extended" ? ":" : "";

  // Representation is either 'date' or 'complete'
  if (representation !== "time") {
    const day = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getDate(), 2);
    const month = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getMonth() + 1, 2);
    const year = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getFullYear(), 4);

    // yyyyMMdd or yyyy-MM-dd.
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
  }

  // Representation is either 'time' or 'complete'
  if (representation !== "date") {
    // Add the timezone.
    const offset = _date.getTimezoneOffset();

    if (offset !== 0) {
      const absoluteOffset = Math.abs(offset);
      const hourOffset = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(Math.trunc(absoluteOffset / 60), 2);
      const minuteOffset = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(absoluteOffset % 60, 2);
      // If less than 0, the sign is +, because it is ahead of time.
      const sign = offset < 0 ? "+" : "-";

      tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
    } else {
      tzOffset = "Z";
    }

    const hour = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getHours(), 2);
    const minute = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getMinutes(), 2);
    const second = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getSeconds(), 2);

    // If there's also date, separate it with time with 'T'
    const separator = result === "" ? "" : "T";

    // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
    const time = [hour, minute, second].join(timeDelimiter);

    // HHmmss or HH:mm:ss.
    result = `${result}${separator}${time}${tzOffset}`;
  }

  return result;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatISO);


/***/ }),

/***/ "./node_modules/date-fns/getDay.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getDay.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDay: () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const day = _date.getDay();
  return day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDay);


/***/ }),

/***/ "./node_modules/date-fns/intlFormat.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/intlFormat.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   intlFormat: () => (/* binding */ intlFormat)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * The locale string (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
 */

/**
 * The format options (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)
 */

/**
 * The locale options.
 */

/**
 * @name intlFormat
 * @category Common Helpers
 * @summary Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 10 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */

/**
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 10 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   locale: 'ko-KR',
 * })
 * //=> 2019. 10. 4.
 */

/**
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param formatOptions - The format options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 10 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   year: 'numeric',
 *   month: 'numeric',
 *   day: 'numeric',
 *   hour: 'numeric',
 * })
 * //=> 10/4/2019, 12 PM
 */

/**
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param formatOptions - The format options
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 10 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   weekday: 'long',
 *   year: 'numeric',
 *   month: 'long',
 *   day: 'numeric',
 * }, {
 *   locale: 'de-DE',
 * })
 * //=> Freitag, 4. Oktober 2019
 */

function intlFormat(date, formatOrLocale, localeOptions) {
  let formatOptions;

  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale;
  } else {
    localeOptions = formatOrLocale;
  }

  return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format(
    (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date),
  );
}

function isFormatOptions(opts) {
  return opts !== undefined && !("locale" in opts);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intlFormat);


/***/ }),

/***/ "./node_modules/date-fns/isAfter.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isAfter.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isAfter: () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return _date.getTime() > _dateToCompare.getTime();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAfter);


/***/ }),

/***/ "./node_modules/date-fns/isBefore.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isBefore.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBefore: () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return +_date < +_dateToCompare;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ }),

/***/ "./node_modules/date-fns/isEqual.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isEqual.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isEqual: () => (/* binding */ isEqual)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual(leftDate, rightDate) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(leftDate);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(rightDate);
  return +_dateLeft === +_dateRight;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEqual);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");
/* harmony import */ var _ui_layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/layout/header */ "./src/ui/layout/header.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _ui_layout_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/layout/sidebar */ "./src/ui/layout/sidebar.js");
/* harmony import */ var _pages_today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/today */ "./src/pages/today.js");
/* harmony import */ var _pages_upcoming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/upcoming */ "./src/pages/upcoming.js");
/* harmony import */ var _pages_checklist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/checklist */ "./src/pages/checklist.js");
/* harmony import */ var _pages_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/projects */ "./src/pages/projects/index.js");
/* harmony import */ var _routing_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing/routes */ "./src/routing/routes.js");
/* harmony import */ var _ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/layout/modal-form */ "./src/ui/layout/modal-form.js");
/* harmony import */ var _pages_project_task__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/project-task */ "./src/pages/project-task/index.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/constants */ "./src/data/constants.js");












const feather = __webpack_require__(/*! feather-icons */ "./node_modules/feather-icons/dist/feather.js");

const component = (() => {
    const mainContainer = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "main",
        children: [
            (0,_pages_today__WEBPACK_IMPORTED_MODULE_4__["default"])(),
            (0,_pages_upcoming__WEBPACK_IMPORTED_MODULE_5__["default"])(),
            (0,_pages_checklist__WEBPACK_IMPORTED_MODULE_6__["default"])(),
            (0,_pages_projects__WEBPACK_IMPORTED_MODULE_7__["default"])(),
            (0,_pages_project_task__WEBPACK_IMPORTED_MODULE_10__["default"])()
        ]
    });

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: "div",
        id: "content",
        children: [
            (0,_ui_layout_header__WEBPACK_IMPORTED_MODULE_1__["default"])(),
            (0,_ui_layout_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"])(),
            mainContainer,
            _ui_layout_modal_form__WEBPACK_IMPORTED_MODULE_9__["default"]
        ]
    });
})();

function handleRoute() {
    const section = (0,_routing_routes__WEBPACK_IMPORTED_MODULE_8__.getRoute)() || _data_constants__WEBPACK_IMPORTED_MODULE_11__.defaultRoute;
    (0,_routing_routes__WEBPACK_IMPORTED_MODULE_8__["default"])(section);
}

function setTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
        document.querySelector(":root").classList.add("dark");
}

document.body.appendChild(component);

// Show SVGs
function showSVGs () {
    feather.replace();
    // Listen for changes in DOM
    const observer = new MutationObserver(() => {
        feather.replace()
    })

    observer.observe(component, {
        subtree: true,
        childList: true
    })
}

setTheme();
handleRoute();
showSVGs();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLE9BQU8sT0FBTyxLQUFLLGFBQWEsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxjQUFjLGNBQWMsWUFBWSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxZQUFZLEtBQUssYUFBYSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxhQUFhLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxZQUFZLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLE9BQU8sS0FB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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ0k7QUFDWjtBQUNjO0FBQ1I7QUFDTTtBQUNFO0FBQ0Y7QUFDYztBQUNQO0FBQ0E7QUFDQztBQUNoRCxnQkFBZ0IsbUJBQU8sQ0FBQyxtRUFBZTs7QUFFdkM7QUFDQSwwQkFBMEIseURBQU07QUFDaEM7QUFDQTtBQUNBLFlBQVksd0RBQUs7QUFDakIsWUFBWSwyREFBUTtBQUNwQixZQUFZLDREQUFTO0FBQ3JCLFlBQVksMkRBQVE7QUFDcEIsWUFBWSxnRUFBVztBQUN2QjtBQUNBLEtBQUs7O0FBRUwsV0FBVyx5REFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFNO0FBQ2xCLFlBQVksOERBQU87QUFDbkI7QUFDQSxZQUFZLDZEQUFTO0FBQ3JCO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQSxvQkFBb0IseURBQVEsTUFBTSwwREFBWTtBQUM5QyxJQUFJLDJEQUFRO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvY2hlY2tib3guY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL3Zhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZmVhdGhlci1pY29ucy9kaXN0L2ZlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kYXRhL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RhdGEvZGF0YU9wLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGF0YS9kYXRhU3RydWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvY2hlY2tsaXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvcHJvamVjdC10YXNrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvcHJvamVjdC10YXNrL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvcHJvamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9wcm9qZWN0cy91dGlscy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvcHJvamVjdHMvdXRpbHMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2VzL3Byb2plY3RzL3V0aWxzL2ljb24uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9wcm9qZWN0cy91dGlscy9wcm9qZWN0LWVsLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvcHJvamVjdHMvdXRpbHMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2VzL3VwY29taW5nLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvdXRpbHMvdGFza3MvYWRkLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy91dGlscy90YXNrcy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvdXRpbHMvdGFza3MvaWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2VzL3V0aWxzL3Rhc2tzL3Rhc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2VzL3V0aWxzL3Rhc2tzL3Rvb2xzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvdXRpbHMvdXBkYXRlLWRhdGVkLXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9yb3V0aW5nL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpL2xheW91dC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aS9sYXlvdXQvaWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpL2xheW91dC9tb2RhbC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkvbGF5b3V0L25hdkV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpL2xheW91dC9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkvbGlzdC9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aS9saXN0L2l0ZW0tYWRkZXItYnRuLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkvbGlzdC9saXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdXRpbHMvY2hlY2tTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdXRpbHMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3V0aWxzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZE9mVG9tb3Jyb3cubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0SVNPLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pbnRsRm9ybWF0Lm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzQWZ0ZXIubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNCZWZvcmUubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNFcXVhbC5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcG9wLWluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxMDAlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBwb3Atb3V0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBvcC1pbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwb3Atb3V0IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXG4gICAgR3JlYXQgaGVscFxuICAgIGh0dHBzOi8vbW9kZXJuY3NzLmRldi9wdXJlLWNzcy1jdXN0b20tY2hlY2tib3gtc3R5bGUvXG4qL1xuXG5kaXYuZGF5cy1jb250ID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xuICAgICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgXG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBhdHRyKGRheSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbmRpdi5yb3VuZCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgLyogQWRkIGlmIG5vdCB1c2luZyBhdXRvcHJlZml4ZXIgKi9cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAvKiBGb3IgaU9TIDwgMTUgdG8gcmVtb3ZlIGdyYWRpZW50IGJhY2tncm91bmQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnXFxcXDI3MTMnO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NoZWNrYm94LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7S0FDSyxrQ0FBa0M7SUFDbkMsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MseUJBQXlCOztJQUV6QixZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGVBQWU7O0lBRWY7UUFDSSxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0IsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsK0NBQStDO0lBQy9DLHlCQUF5Qjs7SUFFekIsY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZUFBZTs7SUFFZjtRQUNJLDJCQUEyQjtRQUMzQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjs7UUFFbkI7WUFDSSxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLG1CQUFtQjtRQUN2QjtJQUNKO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4gICAgR3JlYXQgaGVscFxcbiAgICBodHRwczovL21vZGVybmNzcy5kZXYvcHVyZS1jc3MtY3VzdG9tLWNoZWNrYm94LXN0eWxlL1xcbiovXFxuXFxuZGl2LmRheXMtY29udCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxuICAgICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF5KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB9XFxuXFxuICAgICY6Y2hlY2tlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuZGl2LnJvdW5kID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLyogRm9yIGlPUyA8IDE1IHRvIHJlbW92ZSBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuXFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmOmNoZWNrZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgY29udGVudDogJ1xcXFwyNzEzJztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmFyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbnMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hlY2tib3guY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbiAgICBjb2xvci1zY2hlbWU6IHZhcigtLWNvbG9yLXNjaGVtZSk7XG5cbiAgICAvKiBMYXlvdXQgKi9cbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xufVxuXG4uZmxpcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgXG4gICAgXG4gICAgJjppcyhzdmcsIGkpOmhvdmVye1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDEyMCUpOyBcbiAgICB9XG59XG5cbnN2ZywgaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSB2YXIoLS1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgMHB4IDMuNXB4IDQuNXB4IDQuNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG5cbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nLXRvcC1ib3R0b20pO1xuXG4gICAgei1pbmRleDogMTA7XG5cbiAgICAmID4gLmxvZ28ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXRpdGxlLWZvbnQtc2l6ZSk7XG4gICAgfVxuXG4gICAgJiB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBnYXA6IGNhbGMoMiAqIHZhcigtLWdhcCkpO1xuICAgIH1cbn1cblxubGksIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xufVxuXG5kaWFsb2csIGlucHV0IHtcbiAgICAvKiBmb250IGFuZCBiYWNrZ3JvdW5kICovXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XG5cbiAgICAmOjpiYWNrZHJvcCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvdy1jb2xvcik7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIH1cbn1cblxuI3NpZGViYXItZGlhbG9nIHtcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRvcDogY2FsYygyICogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSArIHZhcigtLXRpdGxlLWZvbnQtc2l6ZSkgKyB2YXIoLS1oZWFkZXItc2hhZG93LXdpZHRoKSk7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICAvKiB0cmFuc2l0aW9uICovXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC41cyBlYXNlLW91dDtcblxuICAgICZbb3Blbl0ge1xuICAgICAgICBhbmltYXRpb246IHNsaWRlLWluIDAuNXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJiA+IG5hdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICYgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBcbiAgICAgICAgJiA+IGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGMoMC41ICogdmFyKC0tZ2FwKSkgdmFyKC0tcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1haW4ge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctdG9wLWJvdHRvbSkgMDtcbn1cblxuLnBhZ2UtY29udGFpbmVyLCAudG9kby1pdGVtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmctdG9wLWJvdHRvbSk7XG59XG5cbi5wYWdlLWNvbnRhaW5lciAuaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IG1pbigxMDAwcHgsIDk4JSk7XG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSAwO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1zaGFkb3ctY29sb3IpO1xuICAgIFxuICAgICYgPiBzdmcge1xuICAgICAgICBjdXJzb3I6IGF1dG87XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udXBjb21pbmctaGVhZGluZy1jb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogbWluKDEwMDBweCwgOTglKTtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tc2hhZG93LWNvbG9yKTtcblxuICAgICYgPiAuaGVhZGluZyB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICB9XG5cbiAgICAmID4gaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGNvbG9yLXNjaGVtZTogdmFyKC0tY29sb3Itc2NoZW1lKTtcbiAgICAgICAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG59XG5cbi50b2RvLWl0ZW0tY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5pdGVtLWFkZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbn1cblxuLnRvZG8taXRlbSB7XG4gICAgLyogZGlzcGxheSBhbmQgZ3JpZCB2aWV3ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IHJlcGVhdCgzLCAxZnIpO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogIHJlcGVhdCgyLCAxZnIpOyAqL1xuXG4gICAgLyogcGFkZGluZyBhbmQgd2lkdGggZm9yIGJldHRlciB2aWV3ICovXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSB2YXIoLS1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIHdpZHRoOiBtaW4oMTAwMHB4LCA5OCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctY29sb3IpO1xuXG4gICAgJiA+IC50b2RvLWl0ZW0tY2hlY2tib3gge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICYgPiAudG9kby1pdGVtLXRpdGxlIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgfVxuICAgIFxuICAgICYgPiAudG9kby1pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICAgICAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgfSBcbiAgICBcbiAgICAmID4gLnRvZG8taXRlbS1pY29uLXNldHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgICAgIFxuICAgICAgICAmID4gdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgICAgICAgICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiA+IC50b2RvLWl0ZW0taGFzaHRhZyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpub3QoOmVtcHR5KTpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyMnO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmID4gLnRvZG8taXRlbS1yaWdodCB7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAmIFtjbGFzcyo9XCJ0cmFzaFwiXSB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgLyogYW5pbWF0aW9ucyAqL1xuICAgICYuYWRkIHtcbiAgICAgICAgYW5pbWF0aW9uOiBwb3AtaW4gMC4zcyBlYXNlLW91dDtcbiAgICB9XG4gICAgXG4gICAgJi5yZW1vdmUge1xuICAgICAgICBhbmltYXRpb246IHBvcC1vdXQgMC4zcyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICBcbn1cblxuZGl2LnRleHQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuZGlhbG9nLm1vZGFsLWZvcm0tY29udGFpbmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5mb3JtLm1vZGFsLWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG5cbiAgICAmID4gLm1vZGFsLWZvcm0tY29udGVudCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuXG4gICAgICAgICYgPiBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLWdhcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgICAgIC8qICZbY2xhc3MqPVwiY2FuY2VsXCJdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfSAqL1xuXG4gICAgICAgICZbY2xhc3MqPVwic3VibWl0XCJdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xufVxuXG4udGV4dC1pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogdmFyKC0tdGV4dC1pbnB1dC1oZWlnaHQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG5cbiAgICAmID4gbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcblxuICAgICAgICAmOmhhcyh+IGlucHV0OmZvY3VzLCB+IGlucHV0OnZhbGlkKSB7XG4gICAgICAgICAgICB0b3A6IC0wLjZyZW07XG4gICAgICAgICAgICBsZWZ0OiAxcmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgPiBpbnB1dCB7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuXG4gICAgICAgICY6aXMoOmZvY3VzLCA6dmFsaWQpe1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbGltZWdyZWVuO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmRpdi5kYXRlLXByaW9yaXR5LXByb2plY3QtY29udCB7XG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcblxuICAgICYgPiBkaXY6aGFzKGlucHV0W3R5cGU9XCJkYXRlXCJdKSB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgICAgICBjb2xvci1zY2hlbWU6IHZhcigtLWNvbG9yLXNjaGVtZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRleHQtaW5wdXQtaGVpZ2h0KSowLjYpO1xuICAgICAgICBnYXA6IHZhcigtLWdhcCk7XG5cbiAgICAgICAgJiA+IGlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuMXJlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuXG4gICAgICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gc2VsZWN0IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiA+IG9wdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOnZhbGlkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsK0JBQStCO0lBQy9CLGlDQUFpQzs7SUFFakMsV0FBVztJQUNYOztxQ0FFaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7O0lBRXpCO1FBQ0kscUNBQXFDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSxlQUFlOztJQUVmO1FBQ0ksc0JB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QXNCO1lBQ3RCLGVBQWU7WUFDZix5Q0FBeUM7O1lBRXpDO2dCQUNJLDJCQUEyQjtnQkFDM0IsWUFBWTtZQUNoQjtRQUNKO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHlDQUF5QztRQUN6QyxtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLFdBQVc7O1FBRVg7WUFDSSx5Q0FBeUM7WUFDekMsbUJBQW1CO1FBQ3ZCOztRQUVBO1lBQ0ksMkJBQTJCO1lBQzNCLFlBQVk7UUFDaEI7SUFDSjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJyZXNldC5jc3NcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwidmFyLmNzc1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJhbmltYXRpb25zLmNzc1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJjaGVja2JveC5jc3NcXFwiKTtcXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gICAgY29sb3Itc2NoZW1lOiB2YXIoLS1jb2xvci1zY2hlbWUpO1xcblxcbiAgICAvKiBMYXlvdXQgKi9cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbn1cXG5cXG4uZmxpcCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IFxcbiAgICBcXG4gICAgJjppcyhzdmcsIGkpOmhvdmVye1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgxMjAlKTsgXFxuICAgIH1cXG59XFxuXFxuc3ZnLCBpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xcbiAgICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRvcC1ib3R0b20pIHZhcigtLXBhZGRpbmctbGVmdC1yaWdodCk7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNvbG9yKSAwcHggMy41cHggNC41cHggNC41cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKTtcXG5cXG4gICAgei1pbmRleDogMTA7XFxuXFxuICAgICYgPiAubG9nbyB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS10aXRsZS1mb250LXNpemUpO1xcbiAgICB9XFxuXFxuICAgICYgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgZ2FwOiBjYWxjKDIgKiB2YXIoLS1nYXApKTtcXG4gICAgfVxcbn1cXG5cXG5saSwgLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxufVxcblxcbmRpYWxvZywgaW5wdXQge1xcbiAgICAvKiBmb250IGFuZCBiYWNrZ3JvdW5kICovXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvdy1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxuXFxuICAgICY6OmJhY2tkcm9wIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvdy1jb2xvcik7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgfVxcbn1cXG5cXG4jc2lkZWJhci1kaWFsb2cge1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdG9wOiBjYWxjKDIgKiB2YXIoLS1wYWRkaW5nLXRvcC1ib3R0b20pICsgdmFyKC0tdGl0bGUtZm9udC1zaXplKSArIHZhcigtLWhlYWRlci1zaGFkb3ctd2lkdGgpKTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBcXG4gICAgLyogdHJhbnNpdGlvbiAqL1xcbiAgICBhbmltYXRpb246IHNsaWRlLW91dCAwLjVzIGVhc2Utb3V0O1xcblxcbiAgICAmW29wZW5dIHtcXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMC41cyBlYXNlLW91dDtcXG4gICAgfVxcblxcbiAgICAmID4gbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICYgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgXFxuICAgICAgICAmID4gbGkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGMoMC41ICogdmFyKC0tZ2FwKSkgdmFyKC0tcGFkZGluZy1sZWZ0LXJpZ2h0KTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSAwO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIsIC50b2RvLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKTtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIC5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogbWluKDEwMDBweCwgOTglKTtcXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSAwO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tc2hhZG93LWNvbG9yKTtcXG4gICAgXFxuICAgICYgPiBzdmcge1xcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4udXBjb21pbmctaGVhZGluZy1jb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogbWluKDEwMDBweCwgOTglKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXNoYWRvdy1jb2xvcik7XFxuXFxuICAgICYgPiAuaGVhZGluZyB7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgIH1cXG5cXG4gICAgJiA+IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBjb2xvci1zY2hlbWU6IHZhcigtLWNvbG9yLXNjaGVtZSk7XFxuICAgICAgICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctbGVmdC1yaWdodCk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLnRvZG8taXRlbS1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuXFxuICAgICY6ZW1wdHkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4uaXRlbS1hZGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgLyogZGlzcGxheSBhbmQgZ3JpZCB2aWV3ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgcmVwZWF0KDMsIDFmcik7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogIHJlcGVhdCgyLCAxZnIpOyAqL1xcblxcbiAgICAvKiBwYWRkaW5nIGFuZCB3aWR0aCBmb3IgYmV0dGVyIHZpZXcgKi9cXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSB2YXIoLS1wYWRkaW5nLWxlZnQtcmlnaHQpO1xcbiAgICB3aWR0aDogbWluKDEwMDBweCwgOTglKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93LWNvbG9yKTtcXG5cXG4gICAgJiA+IC50b2RvLWl0ZW0tY2hlY2tib3gge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJiA+IC50b2RvLWl0ZW0tdGl0bGUge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB9XFxuICAgIFxcbiAgICAmID4gLnRvZG8taXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIH0gXFxuICAgIFxcbiAgICAmID4gLnRvZG8taXRlbS1pY29uLXNldHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIFxcbiAgICAgICAgJiA+IHVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmID4gLnRvZG8taXRlbS1oYXNodGFnIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6bm90KDplbXB0eSk6YmVmb3JlIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnIyc7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBcXG4gICAgJiA+IC50b2RvLWl0ZW0tcmlnaHQge1xcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICB9XFxuXFxuICAgICYgW2NsYXNzKj1cXFwidHJhc2hcXFwiXSB7XFxuICAgICAgICBjb2xvcjogcmVkO1xcbiAgICB9XFxuXFxuICAgIC8qIGFuaW1hdGlvbnMgKi9cXG4gICAgJi5hZGQge1xcbiAgICAgICAgYW5pbWF0aW9uOiBwb3AtaW4gMC4zcyBlYXNlLW91dDtcXG4gICAgfVxcbiAgICBcXG4gICAgJi5yZW1vdmUge1xcbiAgICAgICAgYW5pbWF0aW9uOiBwb3Atb3V0IDAuM3MgZWFzZS1vdXQ7XFxuICAgIH1cXG5cXG4gICAgXFxufVxcblxcbmRpdi50ZXh0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuZGlhbG9nLm1vZGFsLWZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZm9ybS5tb2RhbC1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcblxcbiAgICAmID4gLm1vZGFsLWZvcm0tY29udGVudCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgICAgICAmID4gZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tZ2FwKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmID4gYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gICAgICAgIC8qICZbY2xhc3MqPVxcXCJjYW5jZWxcXFwiXSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH0gKi9cXG5cXG4gICAgICAgICZbY2xhc3MqPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi50ZXh0LWlucHV0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IHZhcigtLXRleHQtaW5wdXQtaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcblxcbiAgICAmID4gbGFiZWwge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xcblxcbiAgICAgICAgJjpoYXMofiBpbnB1dDpmb2N1cywgfiBpbnB1dDp2YWxpZCkge1xcbiAgICAgICAgICAgIHRvcDogLTAuNnJlbTtcXG4gICAgICAgICAgICBsZWZ0OiAxcmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmID4gaW5wdXQge1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcXG5cXG4gICAgICAgICY6aXMoOmZvY3VzLCA6dmFsaWQpe1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpbWVncmVlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgfVxcbn1cXG5cXG5kaXYuZGF0ZS1wcmlvcml0eS1wcm9qZWN0LWNvbnQge1xcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG5cXG4gICAgJiA+IGRpdjpoYXMoaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdKSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBjb2xvci1zY2hlbWU6IHZhcigtLWNvbG9yLXNjaGVtZSk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRleHQtaW5wdXQtaGVpZ2h0KSowLjYpO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1nYXApO1xcblxcbiAgICAgICAgJiA+IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC4xcmVtO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXG4gICAgICAgICAgICAmLnNlbGVjdGVkIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgfSAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiA+IHNlbGVjdCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMDVyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgJiA+IG9wdGlvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6dmFsaWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLXBhZGRpbmctdG9wLWJvdHRvbTogbWluKDJ2aCwgMXJlbSk7XG4gICAgLS1wYWRkaW5nLWxlZnQtcmlnaHQ6ICBtaW4oMnZ3LCAxcmVtKTtcbiAgICAtLWdhcDogMXJlbTtcbiAgICAtLWZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgLS1oZWFkZXItY29sb3I6IHZhcigtLXNoYWRvdy1jb2xvcik4ODtcbiAgICAtLWhlYWRlci1zaGFkb3ctd2lkdGg6IDVweDtcblxuICAgIC8qIEZvcm0gdmFyaWFibGVzICovXG4gICAgLS10ZXh0LWlucHV0LXdpZHRoOiAxMDAlO1xuICAgIC0tdGV4dC1pbnB1dC1oZWlnaHQ6IDRyZW07XG5cbiAgICAvKiBUaGVtZSBEZXBlbmRlbnQgdmFyaWFibGVzICovXG5cbiAgICAtLWNvbG9yOiBibGFjaztcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC0tc2hhZG93LWNvbG9yOiAjZTBlMGUwO1xuICAgIC0tY29sb3Itc2NoZW1lOiBsaWdodDtcbiAgICBcbn1cblxuOnJvb3QuZGFyayB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAtLXNoYWRvdy1jb2xvcjogIzFmMWYxZjtcbiAgICAtLWNvbG9yLXNjaGVtZTogZGFyaztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQscUNBQXFDO0lBQ3JDLDBCQUEwQjs7SUFFMUIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix5QkFBeUI7O0lBRXpCLDhCQUE4Qjs7SUFFOUIsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdGl0bGUtZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0tcGFkZGluZy10b3AtYm90dG9tOiBtaW4oMnZoLCAxcmVtKTtcXG4gICAgLS1wYWRkaW5nLWxlZnQtcmlnaHQ6ICBtaW4oMnZ3LCAxcmVtKTtcXG4gICAgLS1nYXA6IDFyZW07XFxuICAgIC0tZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgLS1oZWFkZXItY29sb3I6IHZhcigtLXNoYWRvdy1jb2xvcik4ODtcXG4gICAgLS1oZWFkZXItc2hhZG93LXdpZHRoOiA1cHg7XFxuXFxuICAgIC8qIEZvcm0gdmFyaWFibGVzICovXFxuICAgIC0tdGV4dC1pbnB1dC13aWR0aDogMTAwJTtcXG4gICAgLS10ZXh0LWlucHV0LWhlaWdodDogNHJlbTtcXG5cXG4gICAgLyogVGhlbWUgRGVwZW5kZW50IHZhcmlhYmxlcyAqL1xcblxcbiAgICAtLWNvbG9yOiBibGFjaztcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1zaGFkb3ctY29sb3I6ICNlMGUwZTA7XFxuICAgIC0tY29sb3Itc2NoZW1lOiBsaWdodDtcXG4gICAgXFxufVxcblxcbjpyb290LmRhcmsge1xcbiAgICAtLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgLS1zaGFkb3ctY29sb3I6ICMxZjFmMWY7XFxuICAgIC0tY29sb3Itc2NoZW1lOiBkYXJrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZlYXRoZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZmVhdGhlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL2Rpc3QvaWNvbnMuanNvblwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2Rpc3QvaWNvbnMuanNvbiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBhY3Rpdml0eSwgYWlycGxheSwgYWxlcnQtY2lyY2xlLCBhbGVydC1vY3RhZ29uLCBhbGVydC10cmlhbmdsZSwgYWxpZ24tY2VudGVyLCBhbGlnbi1qdXN0aWZ5LCBhbGlnbi1sZWZ0LCBhbGlnbi1yaWdodCwgYW5jaG9yLCBhcGVydHVyZSwgYXJjaGl2ZSwgYXJyb3ctZG93bi1jaXJjbGUsIGFycm93LWRvd24tbGVmdCwgYXJyb3ctZG93bi1yaWdodCwgYXJyb3ctZG93biwgYXJyb3ctbGVmdC1jaXJjbGUsIGFycm93LWxlZnQsIGFycm93LXJpZ2h0LWNpcmNsZSwgYXJyb3ctcmlnaHQsIGFycm93LXVwLWNpcmNsZSwgYXJyb3ctdXAtbGVmdCwgYXJyb3ctdXAtcmlnaHQsIGFycm93LXVwLCBhdC1zaWduLCBhd2FyZCwgYmFyLWNoYXJ0LTIsIGJhci1jaGFydCwgYmF0dGVyeS1jaGFyZ2luZywgYmF0dGVyeSwgYmVsbC1vZmYsIGJlbGwsIGJsdWV0b290aCwgYm9sZCwgYm9vay1vcGVuLCBib29rLCBib29rbWFyaywgYm94LCBicmllZmNhc2UsIGNhbGVuZGFyLCBjYW1lcmEtb2ZmLCBjYW1lcmEsIGNhc3QsIGNoZWNrLWNpcmNsZSwgY2hlY2stc3F1YXJlLCBjaGVjaywgY2hldnJvbi1kb3duLCBjaGV2cm9uLWxlZnQsIGNoZXZyb24tcmlnaHQsIGNoZXZyb24tdXAsIGNoZXZyb25zLWRvd24sIGNoZXZyb25zLWxlZnQsIGNoZXZyb25zLXJpZ2h0LCBjaGV2cm9ucy11cCwgY2hyb21lLCBjaXJjbGUsIGNsaXBib2FyZCwgY2xvY2ssIGNsb3VkLWRyaXp6bGUsIGNsb3VkLWxpZ2h0bmluZywgY2xvdWQtb2ZmLCBjbG91ZC1yYWluLCBjbG91ZC1zbm93LCBjbG91ZCwgY29kZSwgY29kZXBlbiwgY29kZXNhbmRib3gsIGNvZmZlZSwgY29sdW1ucywgY29tbWFuZCwgY29tcGFzcywgY29weSwgY29ybmVyLWRvd24tbGVmdCwgY29ybmVyLWRvd24tcmlnaHQsIGNvcm5lci1sZWZ0LWRvd24sIGNvcm5lci1sZWZ0LXVwLCBjb3JuZXItcmlnaHQtZG93biwgY29ybmVyLXJpZ2h0LXVwLCBjb3JuZXItdXAtbGVmdCwgY29ybmVyLXVwLXJpZ2h0LCBjcHUsIGNyZWRpdC1jYXJkLCBjcm9wLCBjcm9zc2hhaXIsIGRhdGFiYXNlLCBkZWxldGUsIGRpc2MsIGRpdmlkZS1jaXJjbGUsIGRpdmlkZS1zcXVhcmUsIGRpdmlkZSwgZG9sbGFyLXNpZ24sIGRvd25sb2FkLWNsb3VkLCBkb3dubG9hZCwgZHJpYmJibGUsIGRyb3BsZXQsIGVkaXQtMiwgZWRpdC0zLCBlZGl0LCBleHRlcm5hbC1saW5rLCBleWUtb2ZmLCBleWUsIGZhY2Vib29rLCBmYXN0LWZvcndhcmQsIGZlYXRoZXIsIGZpZ21hLCBmaWxlLW1pbnVzLCBmaWxlLXBsdXMsIGZpbGUtdGV4dCwgZmlsZSwgZmlsbSwgZmlsdGVyLCBmbGFnLCBmb2xkZXItbWludXMsIGZvbGRlci1wbHVzLCBmb2xkZXIsIGZyYW1lciwgZnJvd24sIGdpZnQsIGdpdC1icmFuY2gsIGdpdC1jb21taXQsIGdpdC1tZXJnZSwgZ2l0LXB1bGwtcmVxdWVzdCwgZ2l0aHViLCBnaXRsYWIsIGdsb2JlLCBncmlkLCBoYXJkLWRyaXZlLCBoYXNoLCBoZWFkcGhvbmVzLCBoZWFydCwgaGVscC1jaXJjbGUsIGhleGFnb24sIGhvbWUsIGltYWdlLCBpbmJveCwgaW5mbywgaW5zdGFncmFtLCBpdGFsaWMsIGtleSwgbGF5ZXJzLCBsYXlvdXQsIGxpZmUtYnVveSwgbGluay0yLCBsaW5rLCBsaW5rZWRpbiwgbGlzdCwgbG9hZGVyLCBsb2NrLCBsb2ctaW4sIGxvZy1vdXQsIG1haWwsIG1hcC1waW4sIG1hcCwgbWF4aW1pemUtMiwgbWF4aW1pemUsIG1laCwgbWVudSwgbWVzc2FnZS1jaXJjbGUsIG1lc3NhZ2Utc3F1YXJlLCBtaWMtb2ZmLCBtaWMsIG1pbmltaXplLTIsIG1pbmltaXplLCBtaW51cy1jaXJjbGUsIG1pbnVzLXNxdWFyZSwgbWludXMsIG1vbml0b3IsIG1vb24sIG1vcmUtaG9yaXpvbnRhbCwgbW9yZS12ZXJ0aWNhbCwgbW91c2UtcG9pbnRlciwgbW92ZSwgbXVzaWMsIG5hdmlnYXRpb24tMiwgbmF2aWdhdGlvbiwgb2N0YWdvbiwgcGFja2FnZSwgcGFwZXJjbGlwLCBwYXVzZS1jaXJjbGUsIHBhdXNlLCBwZW4tdG9vbCwgcGVyY2VudCwgcGhvbmUtY2FsbCwgcGhvbmUtZm9yd2FyZGVkLCBwaG9uZS1pbmNvbWluZywgcGhvbmUtbWlzc2VkLCBwaG9uZS1vZmYsIHBob25lLW91dGdvaW5nLCBwaG9uZSwgcGllLWNoYXJ0LCBwbGF5LWNpcmNsZSwgcGxheSwgcGx1cy1jaXJjbGUsIHBsdXMtc3F1YXJlLCBwbHVzLCBwb2NrZXQsIHBvd2VyLCBwcmludGVyLCByYWRpbywgcmVmcmVzaC1jY3csIHJlZnJlc2gtY3csIHJlcGVhdCwgcmV3aW5kLCByb3RhdGUtY2N3LCByb3RhdGUtY3csIHJzcywgc2F2ZSwgc2Npc3NvcnMsIHNlYXJjaCwgc2VuZCwgc2VydmVyLCBzZXR0aW5ncywgc2hhcmUtMiwgc2hhcmUsIHNoaWVsZC1vZmYsIHNoaWVsZCwgc2hvcHBpbmctYmFnLCBzaG9wcGluZy1jYXJ0LCBzaHVmZmxlLCBzaWRlYmFyLCBza2lwLWJhY2ssIHNraXAtZm9yd2FyZCwgc2xhY2ssIHNsYXNoLCBzbGlkZXJzLCBzbWFydHBob25lLCBzbWlsZSwgc3BlYWtlciwgc3F1YXJlLCBzdGFyLCBzdG9wLWNpcmNsZSwgc3VuLCBzdW5yaXNlLCBzdW5zZXQsIHRhYmxlLCB0YWJsZXQsIHRhZywgdGFyZ2V0LCB0ZXJtaW5hbCwgdGhlcm1vbWV0ZXIsIHRodW1icy1kb3duLCB0aHVtYnMtdXAsIHRvZ2dsZS1sZWZ0LCB0b2dnbGUtcmlnaHQsIHRvb2wsIHRyYXNoLTIsIHRyYXNoLCB0cmVsbG8sIHRyZW5kaW5nLWRvd24sIHRyZW5kaW5nLXVwLCB0cmlhbmdsZSwgdHJ1Y2ssIHR2LCB0d2l0Y2gsIHR3aXR0ZXIsIHR5cGUsIHVtYnJlbGxhLCB1bmRlcmxpbmUsIHVubG9jaywgdXBsb2FkLWNsb3VkLCB1cGxvYWQsIHVzZXItY2hlY2ssIHVzZXItbWludXMsIHVzZXItcGx1cywgdXNlci14LCB1c2VyLCB1c2VycywgdmlkZW8tb2ZmLCB2aWRlbywgdm9pY2VtYWlsLCB2b2x1bWUtMSwgdm9sdW1lLTIsIHZvbHVtZS14LCB2b2x1bWUsIHdhdGNoLCB3aWZpLW9mZiwgd2lmaSwgd2luZCwgeC1jaXJjbGUsIHgtb2N0YWdvbiwgeC1zcXVhcmUsIHgsIHlvdXR1YmUsIHphcC1vZmYsIHphcCwgem9vbS1pbiwgem9vbS1vdXQsIGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7XCJhY3Rpdml0eVwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjIgMTIgMTggMTIgMTUgMjEgOSAzIDYgMTIgMiAxMlxcXCI+PC9wb2x5bGluZT5cIixcImFpcnBsYXlcIjpcIjxwYXRoIGQ9XFxcIk01IDE3SDRhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAyaC0xXFxcIj48L3BhdGg+PHBvbHlnb24gcG9pbnRzPVxcXCIxMiAxNSAxNyAyMSA3IDIxIDEyIDE1XFxcIj48L3BvbHlnb24+XCIsXCJhbGVydC1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPlwiLFwiYWxlcnQtb2N0YWdvblwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCI3Ljg2IDIgMTYuMTQgMiAyMiA3Ljg2IDIyIDE2LjE0IDE2LjE0IDIyIDcuODYgMjIgMiAxNi4xNCAyIDcuODYgNy44NiAyXFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT5cIixcImFsZXJ0LXRyaWFuZ2xlXCI6XCI8cGF0aCBkPVxcXCJNMTAuMjkgMy44NkwxLjgyIDE4YTIgMiAwIDAgMCAxLjcxIDNoMTYuOTRhMiAyIDAgMCAwIDEuNzEtM0wxMy43MSAzLjg2YTIgMiAwIDAgMC0zLjQyIDB6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT5cIixcImFsaWduLWNlbnRlclwiOlwiPGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMTBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxOFxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiNlxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJhbGlnbi1qdXN0aWZ5XCI6XCI8bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxMFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxMFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjZcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjE0XFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcImFsaWduLWxlZnRcIjpcIjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjEwXFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMTRcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTdcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwiYWxpZ24tcmlnaHRcIjpcIjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjEwXFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMTRcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwiYW5jaG9yXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI4XFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTUgMTJIMmExMCAxMCAwIDAgMCAyMCAwaC0zXFxcIj48L3BhdGg+XCIsXCJhcGVydHVyZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxNC4zMVxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIyMC4wNVxcXCIgeTI9XFxcIjE3Ljk0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjkuNjlcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMjEuMTdcXFwiIHkyPVxcXCI4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjcuMzhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjEzLjEyXFxcIiB5Mj1cXFwiMi4wNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI5LjY5XFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIzLjk1XFxcIiB5Mj1cXFwiNi4wNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNC4zMVxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMi44M1xcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2LjYyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxMC44OFxcXCIgeTI9XFxcIjIxLjk0XFxcIj48L2xpbmU+XCIsXCJhcmNoaXZlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMSA4IDIxIDIxIDMgMjEgMyA4XFxcIj48L3BvbHlsaW5lPjxyZWN0IHg9XFxcIjFcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIyMlxcXCIgaGVpZ2h0PVxcXCI1XFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjEwXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJhcnJvdy1kb3duLWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjggMTIgMTIgMTYgMTYgMTJcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT5cIixcImFycm93LWRvd24tbGVmdFwiOlwiPGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiN1xcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDE3IDcgMTcgNyA3XFxcIj48L3BvbHlsaW5lPlwiLFwiYXJyb3ctZG93bi1yaWdodFwiOlwiPGxpbmUgeDE9XFxcIjdcXFwiIHkxPVxcXCI3XFxcIiB4Mj1cXFwiMTdcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDcgMTcgMTcgNyAxN1xcXCI+PC9wb2x5bGluZT5cIixcImFycm93LWRvd25cIjpcIjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjVcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE5XFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTkgMTIgMTIgMTkgNSAxMlxcXCI+PC9wb2x5bGluZT5cIixcImFycm93LWxlZnQtY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTIgOCA4IDEyIDEyIDE2XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxNlxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJhcnJvdy1sZWZ0XCI6XCI8bGluZSB4MT1cXFwiMTlcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjVcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjEyIDE5IDUgMTIgMTIgNVxcXCI+PC9wb2x5bGluZT5cIixcImFycm93LXJpZ2h0LWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjEyIDE2IDE2IDEyIDEyIDhcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcImFycm93LXJpZ2h0XCI6XCI8bGluZSB4MT1cXFwiNVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTlcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjEyIDUgMTkgMTIgMTIgMTlcXFwiPjwvcG9seWxpbmU+XCIsXCJhcnJvdy11cC1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAxMiAxMiA4IDggMTJcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjhcXFwiPjwvbGluZT5cIixcImFycm93LXVwLWxlZnRcIjpcIjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjE3XFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCI3IDE3IDcgNyAxNyA3XFxcIj48L3BvbHlsaW5lPlwiLFwiYXJyb3ctdXAtcmlnaHRcIjpcIjxsaW5lIHgxPVxcXCI3XFxcIiB5MT1cXFwiMTdcXFwiIHgyPVxcXCIxN1xcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCI3IDcgMTcgNyAxNyAxN1xcXCI+PC9wb2x5bGluZT5cIixcImFycm93LXVwXCI6XCI8bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiNVxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjUgMTIgMTIgNSAxOSAxMlxcXCI+PC9wb2x5bGluZT5cIixcImF0LXNpZ25cIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xNiA4djVhMyAzIDAgMCAwIDYgMHYtMWExMCAxMCAwIDEgMC0zLjkyIDcuOTRcXFwiPjwvcGF0aD5cIixcImF3YXJkXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjhcXFwiIHI9XFxcIjdcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjguMjEgMTMuODkgNyAyMyAxMiAyMCAxNyAyMyAxNS43OSAxMy44OFxcXCI+PC9wb2x5bGluZT5cIixcImJhci1jaGFydC0yXCI6XCI8bGluZSB4MT1cXFwiMThcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjE4XFxcIiB5Mj1cXFwiMTBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT5cIixcImJhci1jaGFydFwiOlwiPGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxOFxcXCIgeTI9XFxcIjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiNlxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+XCIsXCJiYXR0ZXJ5LWNoYXJnaW5nXCI6XCI8cGF0aCBkPVxcXCJNNSAxOEgzYTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDMuMTlNMTUgNmgyYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAyaC0zLjE5XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjExXFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTEgNiA3IDEyIDEzIDEyIDkgMThcXFwiPjwvcG9seWxpbmU+XCIsXCJiYXR0ZXJ5XCI6XCI8cmVjdCB4PVxcXCIxXFxcIiB5PVxcXCI2XFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMTJcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjEzXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxMVxcXCI+PC9saW5lPlwiLFwiYmVsbC1vZmZcIjpcIjxwYXRoIGQ9XFxcIk0xMy43MyAyMWEyIDIgMCAwIDEtMy40NiAwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4LjYzIDEzQTE3Ljg5IDE3Ljg5IDAgMCAxIDE4IDhcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNi4yNiA2LjI2QTUuODYgNS44NiAwIDAgMCA2IDhjMCA3LTMgOS0zIDloMTRcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTggOGE2IDYgMCAwIDAtOS4zMy01XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPlwiLFwiYmVsbFwiOlwiPHBhdGggZD1cXFwiTTE4IDhBNiA2IDAgMCAwIDYgOGMwIDctMyA5LTMgOWgxOHMtMy0yLTMtOVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMy43MyAyMWEyIDIgMCAwIDEtMy40NiAwXFxcIj48L3BhdGg+XCIsXCJibHVldG9vdGhcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjYuNSA2LjUgMTcuNSAxNy41IDEyIDIzIDEyIDEgMTcuNSA2LjUgNi41IDE3LjVcXFwiPjwvcG9seWxpbmU+XCIsXCJib2xkXCI6XCI8cGF0aCBkPVxcXCJNNiA0aDhhNCA0IDAgMCAxIDQgNCA0IDQgMCAwIDEtNCA0SDZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTYgMTJoOWE0IDQgMCAwIDEgNCA0IDQgNCAwIDAgMS00IDRINnpcXFwiPjwvcGF0aD5cIixcImJvb2stb3BlblwiOlwiPHBhdGggZD1cXFwiTTIgM2g2YTQgNCAwIDAgMSA0IDR2MTRhMyAzIDAgMCAwLTMtM0gyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMiAzaC02YTQgNCAwIDAgMC00IDR2MTRhMyAzIDAgMCAxIDMtM2g3elxcXCI+PC9wYXRoPlwiLFwiYm9va1wiOlwiPHBhdGggZD1cXFwiTTQgMTkuNUEyLjUgMi41IDAgMCAxIDYuNSAxN0gyMFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk02LjUgMkgyMHYyMEg2LjVBMi41IDIuNSAwIDAgMSA0IDE5LjV2LTE1QTIuNSAyLjUgMCAwIDEgNi41IDJ6XFxcIj48L3BhdGg+XCIsXCJib29rbWFya1wiOlwiPHBhdGggZD1cXFwiTTE5IDIxbC03LTUtNyA1VjVhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAyelxcXCI+PC9wYXRoPlwiLFwiYm94XCI6XCI8cGF0aCBkPVxcXCJNMjEgMTZWOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczbDcgNGEyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZ6XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMy4yNyA2Ljk2IDEyIDEyLjAxIDIwLjczIDYuOTZcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjIuMDhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJicmllZmNhc2VcIjpcIjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjdcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIxNFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHBhdGggZD1cXFwiTTE2IDIxVjVhMiAyIDAgMCAwLTItMmgtNGEyIDIgMCAwIDAtMiAydjE2XFxcIj48L3BhdGg+XCIsXCJjYWxlbmRhclwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiNFxcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjEwXFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIxMFxcXCI+PC9saW5lPlwiLFwiY2FtZXJhLW9mZlwiOlwiPGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMSAyMUgzYTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDNtMy0zaDZsMiAzaDRhMiAyIDAgMCAxIDIgMnY5LjM0bS03LjcyLTIuMDZhNCA0IDAgMSAxLTUuNTYtNS41NlxcXCI+PC9wYXRoPlwiLFwiY2FtZXJhXCI6XCI8cGF0aCBkPVxcXCJNMjMgMTlhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDRsMi0zaDZsMiAzaDRhMiAyIDAgMCAxIDIgMnpcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEzXFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT5cIixcImNhc3RcIjpcIjxwYXRoIGQ9XFxcIk0yIDE2LjFBNSA1IDAgMCAxIDUuOSAyME0yIDEyLjA1QTkgOSAwIDAgMSA5Ljk1IDIwTTIgOFY2YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAyaC02XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjJcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjIuMDFcXFwiIHkyPVxcXCIyMFxcXCI+PC9saW5lPlwiLFwiY2hlY2stY2lyY2xlXCI6XCI8cGF0aCBkPVxcXCJNMjIgMTEuMDhWMTJhMTAgMTAgMCAxIDEtNS45My05LjE0XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjIgNCAxMiAxNC4wMSA5IDExLjAxXFxcIj48L3BvbHlsaW5lPlwiLFwiY2hlY2stc3F1YXJlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI5IDExIDEyIDE0IDIyIDRcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTIxIDEydjdhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDExXFxcIj48L3BhdGg+XCIsXCJjaGVja1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjAgNiA5IDE3IDQgMTJcXFwiPjwvcG9seWxpbmU+XCIsXCJjaGV2cm9uLWRvd25cIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjYgOSAxMiAxNSAxOCA5XFxcIj48L3BvbHlsaW5lPlwiLFwiY2hldnJvbi1sZWZ0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNSAxOCA5IDEyIDE1IDZcXFwiPjwvcG9seWxpbmU+XCIsXCJjaGV2cm9uLXJpZ2h0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI5IDE4IDE1IDEyIDkgNlxcXCI+PC9wb2x5bGluZT5cIixcImNoZXZyb24tdXBcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE4IDE1IDEyIDkgNiAxNVxcXCI+PC9wb2x5bGluZT5cIixcImNoZXZyb25zLWRvd25cIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjcgMTMgMTIgMTggMTcgMTNcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiNyA2IDEyIDExIDE3IDZcXFwiPjwvcG9seWxpbmU+XCIsXCJjaGV2cm9ucy1sZWZ0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxMSAxNyA2IDEyIDExIDdcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTggMTcgMTMgMTIgMTggN1xcXCI+PC9wb2x5bGluZT5cIixcImNoZXZyb25zLXJpZ2h0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxMyAxNyAxOCAxMiAxMyA3XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjYgMTcgMTEgMTIgNiA3XFxcIj48L3BvbHlsaW5lPlwiLFwiY2hldnJvbnMtdXBcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDExIDEyIDYgNyAxMVxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyAxOCAxMiAxMyA3IDE4XFxcIj48L3BvbHlsaW5lPlwiLFwiY2hyb21lXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjIxLjE3XFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzLjk1XFxcIiB5MT1cXFwiNi4wNlxcXCIgeDI9XFxcIjguNTRcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMC44OFxcXCIgeTE9XFxcIjIxLjk0XFxcIiB4Mj1cXFwiMTUuNDZcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPlwiLFwiY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+XCIsXCJjbGlwYm9hcmRcIjpcIjxwYXRoIGQ9XFxcIk0xNiA0aDJhMiAyIDAgMCAxIDIgMnYxNGEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJoMlxcXCI+PC9wYXRoPjxyZWN0IHg9XFxcIjhcXFwiIHk9XFxcIjJcXFwiIHdpZHRoPVxcXCI4XFxcIiBoZWlnaHQ9XFxcIjRcXFwiIHJ4PVxcXCIxXFxcIiByeT1cXFwiMVxcXCI+PC9yZWN0PlwiLFwiY2xvY2tcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxMiA2IDEyIDEyIDE2IDE0XFxcIj48L3BvbHlsaW5lPlwiLFwiY2xvdWQtZHJpenpsZVwiOlwiPGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxOVxcXCIgeDI9XFxcIjhcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIxOVxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIxM1xcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMjAgMTYuNThBNSA1IDAgMCAwIDE4IDdoLTEuMjZBOCA4IDAgMSAwIDQgMTUuMjVcXFwiPjwvcGF0aD5cIixcImNsb3VkLWxpZ2h0bmluZ1wiOlwiPHBhdGggZD1cXFwiTTE5IDE2LjlBNSA1IDAgMCAwIDE4IDdoLTEuMjZhOCA4IDAgMSAwLTExLjYyIDlcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxMyAxMSA5IDE3IDE1IDE3IDExIDIzXFxcIj48L3BvbHlsaW5lPlwiLFwiY2xvdWQtb2ZmXCI6XCI8cGF0aCBkPVxcXCJNMjIuNjEgMTYuOTVBNSA1IDAgMCAwIDE4IDEwaC0xLjI2YTggOCAwIDAgMC03LjA1LTZNNSA1YTggOCAwIDAgMCA0IDE1aDlhNSA1IDAgMCAwIDEuNy0uM1xcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT5cIixcImNsb3VkLXJhaW5cIjpcIjxsaW5lIHgxPVxcXCIxNlxcXCIgeTE9XFxcIjEzXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMjAgMTYuNThBNSA1IDAgMCAwIDE4IDdoLTEuMjZBOCA4IDAgMSAwIDQgMTUuMjVcXFwiPjwvcGF0aD5cIixcImNsb3VkLXNub3dcIjpcIjxwYXRoIGQ9XFxcIk0yMCAxNy41OEE1IDUgMCAwIDAgMTggOGgtMS4yNkE4IDggMCAxIDAgNCAxNi4yNVxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCI4LjAxXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiOC4wMVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIxMi4wMVxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjJcXFwiIHgyPVxcXCIxMi4wMVxcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxNi4wMVxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxNi4wMVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+XCIsXCJjbG91ZFwiOlwiPHBhdGggZD1cXFwiTTE4IDEwaC0xLjI2QTggOCAwIDEgMCA5IDIwaDlhNSA1IDAgMCAwIDAtMTB6XFxcIj48L3BhdGg+XCIsXCJjb2RlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAxOCAyMiAxMiAxNiA2XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjggNiAyIDEyIDggMThcXFwiPjwvcG9seWxpbmU+XCIsXCJjb2RlcGVuXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjEyIDIgMjIgOC41IDIyIDE1LjUgMTIgMjIgMiAxNS41IDIgOC41IDEyIDJcXFwiPjwvcG9seWdvbj48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTUuNVxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjIyIDguNSAxMiAxNS41IDIgOC41XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjIgMTUuNSAxMiA4LjUgMjIgMTUuNVxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI4LjVcXFwiPjwvbGluZT5cIixcImNvZGVzYW5kYm94XCI6XCI8cGF0aCBkPVxcXCJNMjEgMTZWOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczbDcgNGEyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZ6XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiNy41IDQuMjEgMTIgNi44MSAxNi41IDQuMjFcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiNy41IDE5Ljc5IDcuNSAxNC42IDMgMTJcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjEgMTIgMTYuNSAxNC42IDE2LjUgMTkuNzlcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMy4yNyA2Ljk2IDEyIDEyLjAxIDIwLjczIDYuOTZcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjIuMDhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJjb2ZmZWVcIjpcIjxwYXRoIGQ9XFxcIk0xOCA4aDFhNCA0IDAgMCAxIDAgOGgtMVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yIDhoMTZ2OWE0IDQgMCAwIDEtNCA0SDZhNCA0IDAgMCAxLTQtNFY4elxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCI0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEwXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjEwXFxcIiB5Mj1cXFwiNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNFxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjRcXFwiPjwvbGluZT5cIixcImNvbHVtbnNcIjpcIjxwYXRoIGQ9XFxcIk0xMiAzaDdhMiAyIDAgMCAxIDIgMnYxNGEyIDIgMCAwIDEtMiAyaC03bTAtMThINWEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoN20wLTE4djE4XFxcIj48L3BhdGg+XCIsXCJjb21tYW5kXCI6XCI8cGF0aCBkPVxcXCJNMTggM2EzIDMgMCAwIDAtMyAzdjEyYTMgMyAwIDAgMCAzIDMgMyAzIDAgMCAwIDMtMyAzIDMgMCAwIDAtMy0zSDZhMyAzIDAgMCAwLTMgMyAzIDMgMCAwIDAgMyAzIDMgMyAwIDAgMCAzLTNWNmEzIDMgMCAwIDAtMy0zIDMgMyAwIDAgMC0zIDMgMyAzIDAgMCAwIDMgM2gxMmEzIDMgMCAwIDAgMy0zIDMgMyAwIDAgMC0zLTN6XFxcIj48L3BhdGg+XCIsXCJjb21wYXNzXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBvbHlnb24gcG9pbnRzPVxcXCIxNi4yNCA3Ljc2IDE0LjEyIDE0LjEyIDcuNzYgMTYuMjQgOS44OCA5Ljg4IDE2LjI0IDcuNzZcXFwiPjwvcG9seWdvbj5cIixcImNvcHlcIjpcIjxyZWN0IHg9XFxcIjlcXFwiIHk9XFxcIjlcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIxM1xcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHBhdGggZD1cXFwiTTUgMTVINGEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg5YTIgMiAwIDAgMSAyIDJ2MVxcXCI+PC9wYXRoPlwiLFwiY29ybmVyLWRvd24tbGVmdFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiOSAxMCA0IDE1IDkgMjBcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTIwIDR2N2E0IDQgMCAwIDEtNCA0SDRcXFwiPjwvcGF0aD5cIixcImNvcm5lci1kb3duLXJpZ2h0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNSAxMCAyMCAxNSAxNSAyMFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNNCA0djdhNCA0IDAgMCAwIDQgNGgxMlxcXCI+PC9wYXRoPlwiLFwiY29ybmVyLWxlZnQtZG93blwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTQgMTUgOSAyMCA0IDE1XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0yMCA0aC03YTQgNCAwIDAgMC00IDR2MTJcXFwiPjwvcGF0aD5cIixcImNvcm5lci1sZWZ0LXVwXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNCA5IDkgNCA0IDlcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTIwIDIwaC03YTQgNCAwIDAgMS00LTRWNFxcXCI+PC9wYXRoPlwiLFwiY29ybmVyLXJpZ2h0LWRvd25cIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjEwIDE1IDE1IDIwIDIwIDE1XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk00IDRoN2E0IDQgMCAwIDEgNCA0djEyXFxcIj48L3BhdGg+XCIsXCJjb3JuZXItcmlnaHQtdXBcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjEwIDkgMTUgNCAyMCA5XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk00IDIwaDdhNCA0IDAgMCAwIDQtNFY0XFxcIj48L3BhdGg+XCIsXCJjb3JuZXItdXAtbGVmdFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiOSAxNCA0IDkgOSA0XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0yMCAyMHYtN2E0IDQgMCAwIDAtNC00SDRcXFwiPjwvcGF0aD5cIixcImNvcm5lci11cC1yaWdodFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTUgMTQgMjAgOSAxNSA0XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk00IDIwdi03YTQgNCAwIDAgMSA0LTRoMTJcXFwiPjwvcGF0aD5cIixcImNwdVwiOlwiPHJlY3QgeD1cXFwiNFxcXCIgeT1cXFwiNFxcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCI5XFxcIiB5PVxcXCI5XFxcIiB3aWR0aD1cXFwiNlxcXCIgaGVpZ2h0PVxcXCI2XFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCI0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjlcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjBcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI0XFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMTRcXFwiIHgyPVxcXCI0XFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT5cIixcImNyZWRpdC1jYXJkXCI6XCI8cmVjdCB4PVxcXCIxXFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiMjJcXFwiIGhlaWdodD1cXFwiMTZcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+XCIsXCJjcm9wXCI6XCI8cGF0aCBkPVxcXCJNNi4xMyAxTDYgMTZhMiAyIDAgMCAwIDIgMmgxNVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xIDYuMTNMMTYgNmEyIDIgMCAwIDEgMiAydjE1XFxcIj48L3BhdGg+XCIsXCJjcm9zc2hhaXJcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMjJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE4XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwiZGF0YWJhc2VcIjpcIjxlbGxpcHNlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjVcXFwiIHJ4PVxcXCI5XFxcIiByeT1cXFwiM1xcXCI+PC9lbGxpcHNlPjxwYXRoIGQ9XFxcIk0yMSAxMmMwIDEuNjYtNCAzLTkgM3MtOS0xLjM0LTktM1xcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zIDV2MTRjMCAxLjY2IDQgMyA5IDNzOS0xLjM0IDktM1Y1XFxcIj48L3BhdGg+XCIsXCJkZWxldGVcIjpcIjxwYXRoIGQ9XFxcIk0yMSA0SDhsLTcgOCA3IDhoMTNhMiAyIDAgMCAwIDItMlY2YTIgMiAwIDAgMC0yLTJ6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMThcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwiZGlzY1wiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwiZGl2aWRlLWNpcmNsZVwiOlwiPGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI4XFxcIj48L2xpbmU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPlwiLFwiZGl2aWRlLXNxdWFyZVwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjhcXFwiPjwvbGluZT5cIixcImRpdmlkZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCI2XFxcIiByPVxcXCIyXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiNVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTlcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPlwiLFwiZG9sbGFyLXNpZ25cIjpcIjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTE3IDVIOS41YTMuNSAzLjUgMCAwIDAgMCA3aDVhMy41IDMuNSAwIDAgMSAwIDdINlxcXCI+PC9wYXRoPlwiLFwiZG93bmxvYWQtY2xvdWRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjggMTcgMTIgMjEgMTYgMTdcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIwLjg4IDE4LjA5QTUgNSAwIDAgMCAxOCA5aC0xLjI2QTggOCAwIDEgMCAzIDE2LjI5XFxcIj48L3BhdGg+XCIsXCJkb3dubG9hZFwiOlwiPHBhdGggZD1cXFwiTTIxIDE1djRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ2LTRcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCI3IDEwIDEyIDE1IDE3IDEwXFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+XCIsXCJkcmliYmJsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk04LjU2IDIuNzVjNC4zNyA2LjAzIDYuMDIgOS40MiA4LjAzIDE3LjcybTIuNTQtMTUuMzhjLTMuNzIgNC4zNS04Ljk0IDUuNjYtMTYuODggNS44NW0xOS41IDEuOWMtMy41LS45My02LjYzLS44Mi04Ljk0IDAtMi41OC45Mi01LjAxIDIuODYtNy40NCA2LjMyXFxcIj48L3BhdGg+XCIsXCJkcm9wbGV0XCI6XCI8cGF0aCBkPVxcXCJNMTIgMi42OWw1LjY2IDUuNjZhOCA4IDAgMSAxLTExLjMxIDB6XFxcIj48L3BhdGg+XCIsXCJlZGl0LTJcIjpcIjxwYXRoIGQ9XFxcIk0xNyAzYTIuODI4IDIuODI4IDAgMSAxIDQgNEw3LjUgMjAuNSAyIDIybDEuNS01LjVMMTcgM3pcXFwiPjwvcGF0aD5cIixcImVkaXQtM1wiOlwiPHBhdGggZD1cXFwiTTEyIDIwaDlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTYuNSAzLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDcgMTlsLTQgMSAxLTRMMTYuNSAzLjV6XFxcIj48L3BhdGg+XCIsXCJlZGl0XCI6XCI8cGF0aCBkPVxcXCJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4LjUgMi41YTIuMTIxIDIuMTIxIDAgMCAxIDMgM0wxMiAxNWwtNCAxIDEtNCA5LjUtOS41elxcXCI+PC9wYXRoPlwiLFwiZXh0ZXJuYWwtbGlua1wiOlwiPHBhdGggZD1cXFwiTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDZcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNSAzIDIxIDMgMjEgOVxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTBcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiM1xcXCI+PC9saW5lPlwiLFwiZXllLW9mZlwiOlwiPHBhdGggZD1cXFwiTTE3Ljk0IDE3Ljk0QTEwLjA3IDEwLjA3IDAgMCAxIDEyIDIwYy03IDAtMTEtOC0xMS04YTE4LjQ1IDE4LjQ1IDAgMCAxIDUuMDYtNS45NE05LjkgNC4yNEE5LjEyIDkuMTIgMCAwIDEgMTIgNGM3IDAgMTEgOCAxMSA4YTE4LjUgMTguNSAwIDAgMS0yLjE2IDMuMTltLTYuNzItMS4wN2EzIDMgMCAxIDEtNC4yNC00LjI0XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPlwiLFwiZXllXCI6XCI8cGF0aCBkPVxcXCJNMSAxMnM0LTggMTEtOCAxMSA4IDExIDgtNCA4LTExIDgtMTEtOC0xMS04elxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwiZmFjZWJvb2tcIjpcIjxwYXRoIGQ9XFxcIk0xOCAyaC0zYTUgNSAwIDAgMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwIDEgMS0xaDN6XFxcIj48L3BhdGg+XCIsXCJmYXN0LWZvcndhcmRcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTMgMTkgMjIgMTIgMTMgNSAxMyAxOVxcXCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz1cXFwiMiAxOSAxMSAxMiAyIDUgMiAxOVxcXCI+PC9wb2x5Z29uPlwiLFwiZmVhdGhlclwiOlwiPHBhdGggZD1cXFwiTTIwLjI0IDEyLjI0YTYgNiAwIDAgMC04LjQ5LTguNDlMNSAxMC41VjE5aDguNXpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMlxcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3LjVcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjlcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwiZmlnbWFcIjpcIjxwYXRoIGQ9XFxcIk01IDUuNUEzLjUgMy41IDAgMCAxIDguNSAySDEydjdIOC41QTMuNSAzLjUgMCAwIDEgNSA1LjV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEyIDJoMy41YTMuNSAzLjUgMCAxIDEgMCA3SDEyVjJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEyIDEyLjVhMy41IDMuNSAwIDEgMSA3IDAgMy41IDMuNSAwIDEgMS03IDB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTUgMTkuNUEzLjUgMy41IDAgMCAxIDguNSAxNkgxMnYzLjVhMy41IDMuNSAwIDEgMS03IDB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTUgMTIuNUEzLjUgMy41IDAgMCAxIDguNSA5SDEydjdIOC41QTMuNSAzLjUgMCAwIDEgNSAxMi41elxcXCI+PC9wYXRoPlwiLFwiZmlsZS1taW51c1wiOlwiPHBhdGggZD1cXFwiTTE0IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY4elxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE0IDIgMTQgOCAyMCA4XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJmaWxlLXBsdXNcIjpcIjxwYXRoIGQ9XFxcIk0xNCAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWOHpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNCAyIDE0IDggMjAgOFxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwiZmlsZS10ZXh0XCI6XCI8cGF0aCBkPVxcXCJNMTQgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjh6XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTQgMiAxNCA4IDIwIDhcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiMTNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjhcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjEwIDkgOSA5IDggOVxcXCI+PC9wb2x5bGluZT5cIixcImZpbGVcIjpcIjxwYXRoIGQ9XFxcIk0xMyAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWOXpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxMyAyIDEzIDkgMjAgOVxcXCI+PC9wb2x5bGluZT5cIixcImZpbG1cIjpcIjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjJcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgcng9XFxcIjIuMThcXFwiIHJ5PVxcXCIyLjE4XFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjdcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjE3XFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMlxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyXFxcIiB5MT1cXFwiN1xcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCI3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjJcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjE3XFxcIiB4Mj1cXFwiMjJcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjdcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT5cIixcImZpbHRlclwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIyMiAzIDIgMyAxMCAxMi40NiAxMCAxOSAxNCAyMSAxNCAxMi40NiAyMiAzXFxcIj48L3BvbHlnb24+XCIsXCJmbGFnXCI6XCI8cGF0aCBkPVxcXCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiNFxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJmb2xkZXItbWludXNcIjpcIjxwYXRoIGQ9XFxcIk0yMiAxOWEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNWwyIDNoOWEyIDIgMCAwIDEgMiAyelxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiMTRcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+XCIsXCJmb2xkZXItcGx1c1wiOlwiPHBhdGggZD1cXFwiTTIyIDE5YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmg1bDIgM2g5YTIgMiAwIDAgMSAyIDJ6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTFcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT5cIixcImZvbGRlclwiOlwiPHBhdGggZD1cXFwiTTIyIDE5YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmg1bDIgM2g5YTIgMiAwIDAgMSAyIDJ6XFxcIj48L3BhdGg+XCIsXCJmcmFtZXJcIjpcIjxwYXRoIGQ9XFxcIk01IDE2VjloMTRWMkg1bDE0IDE0aC03bS03IDBsNyA3di03bS03IDBoN1xcXCI+PC9wYXRoPlwiLFwiZnJvd25cIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTYgMTZzLTEuNS0yLTQtMi00IDItNCAyXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiOS4wMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTUuMDFcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+XCIsXCJnaWZ0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMCAxMiAyMCAyMiA0IDIyIDQgMTJcXFwiPjwvcG9seWxpbmU+PHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiN1xcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjVcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiN1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0xMiA3SDcuNWEyLjUgMi41IDAgMCAxIDAtNUMxMSAyIDEyIDcgMTIgN3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTIgN2g0LjVhMi41IDIuNSAwIDAgMCAwLTVDMTMgMiAxMiA3IDEyIDd6XFxcIj48L3BhdGg+XCIsXCJnaXQtYnJhbmNoXCI6XCI8bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjNcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjZcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjZcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE4IDlhOSA5IDAgMCAxLTkgOVxcXCI+PC9wYXRoPlwiLFwiZ2l0LWNvbW1pdFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEuMDVcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNy4wMVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjIuOTZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPlwiLFwiZ2l0LW1lcmdlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiNlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTYgMjFWOWE5IDkgMCAwIDAgOSA5XFxcIj48L3BhdGg+XCIsXCJnaXQtcHVsbC1yZXF1ZXN0XCI6XCI8Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiNlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTEzIDZoM2EyIDIgMCAwIDEgMiAydjdcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT5cIixcImdpdGh1YlwiOlwiPHBhdGggZD1cXFwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXFxcIj48L3BhdGg+XCIsXCJnaXRsYWJcIjpcIjxwYXRoIGQ9XFxcIk0yMi42NSAxNC4zOUwxMiAyMi4xMyAxLjM1IDE0LjM5YS44NC44NCAwIDAgMS0uMy0uOTRsMS4yMi0zLjc4IDIuNDQtNy41MUEuNDIuNDIgMCAwIDEgNC44MiAyYS40My40MyAwIDAgMSAuNTggMCAuNDIuNDIgMCAwIDEgLjExLjE4bDIuNDQgNy40OWg4LjFsMi40NC03LjUxQS40Mi40MiAwIDAgMSAxOC42IDJhLjQzLjQzIDAgMCAxIC41OCAwIC40Mi40MiAwIDAgMSAuMTEuMThsMi40NCA3LjUxTDIzIDEzLjQ1YS44NC44NCAwIDAgMS0uMzUuOTR6XFxcIj48L3BhdGg+XCIsXCJnbG9iZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTEyIDJhMTUuMyAxNS4zIDAgMCAxIDQgMTAgMTUuMyAxNS4zIDAgMCAxLTQgMTAgMTUuMyAxNS4zIDAgMCAxLTQtMTAgMTUuMyAxNS4zIDAgMCAxIDQtMTB6XFxcIj48L3BhdGg+XCIsXCJncmlkXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiN1xcXCIgaGVpZ2h0PVxcXCI3XFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTRcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCI3XFxcIiBoZWlnaHQ9XFxcIjdcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxNFxcXCIgeT1cXFwiMTRcXFwiIHdpZHRoPVxcXCI3XFxcIiBoZWlnaHQ9XFxcIjdcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIxNFxcXCIgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiN1xcXCI+PC9yZWN0PlwiLFwiaGFyZC1kcml2ZVwiOlwiPGxpbmUgeDE9XFxcIjIyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjZcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjYuMDFcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMFxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTAuMDFcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPlwiLFwiaGFzaFwiOlwiPGxpbmUgeDE9XFxcIjRcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjRcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjIwXFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTBcXFwiIHkxPVxcXCIzXFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiM1xcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT5cIixcImhlYWRwaG9uZXNcIjpcIjxwYXRoIGQ9XFxcIk0zIDE4di02YTkgOSAwIDAgMSAxOCAwdjZcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjEgMTlhMiAyIDAgMCAxLTIgMmgtMWEyIDIgMCAwIDEtMi0ydi0zYTIgMiAwIDAgMSAyLTJoM3pNMyAxOWEyIDIgMCAwIDAgMiAyaDFhMiAyIDAgMCAwIDItMnYtM2EyIDIgMCAwIDAtMi0ySDN6XFxcIj48L3BhdGg+XCIsXCJoZWFydFwiOlwiPHBhdGggZD1cXFwiTTIwLjg0IDQuNjFhNS41IDUuNSAwIDAgMC03Ljc4IDBMMTIgNS42N2wtMS4wNi0xLjA2YTUuNSA1LjUgMCAwIDAtNy43OCA3Ljc4bDEuMDYgMS4wNkwxMiAyMS4yM2w3Ljc4LTcuNzggMS4wNi0xLjA2YTUuNSA1LjUgMCAwIDAgMC03Ljc4elxcXCI+PC9wYXRoPlwiLFwiaGVscC1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDNcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT5cIixcImhleGFnb25cIjpcIjxwYXRoIGQ9XFxcIk0yMSAxNlY4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNnpcXFwiPjwvcGF0aD5cIixcImhvbWVcIjpcIjxwYXRoIGQ9XFxcIk0zIDlsOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCI5IDIyIDkgMTIgMTUgMTIgMTUgMjJcXFwiPjwvcG9seWxpbmU+XCIsXCJpbWFnZVwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48Y2lyY2xlIGN4PVxcXCI4LjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjEgMTUgMTYgMTAgNSAyMVxcXCI+PC9wb2x5bGluZT5cIixcImluYm94XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelxcXCI+PC9wYXRoPlwiLFwiaW5mb1wiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxMi4wMVxcXCIgeTI9XFxcIjhcXFwiPjwvbGluZT5cIixcImluc3RhZ3JhbVwiOlwiPHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiByeD1cXFwiNVxcXCIgcnk9XFxcIjVcXFwiPjwvcmVjdD48cGF0aCBkPVxcXCJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3elxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxNy41XFxcIiB5MT1cXFwiNi41XFxcIiB4Mj1cXFwiMTcuNTFcXFwiIHkyPVxcXCI2LjVcXFwiPjwvbGluZT5cIixcIml0YWxpY1wiOlwiPGxpbmUgeDE9XFxcIjE5XFxcIiB5MT1cXFwiNFxcXCIgeDI9XFxcIjEwXFxcIiB5Mj1cXFwiNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNFxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiNVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiNFxcXCIgeDI9XFxcIjlcXFwiIHkyPVxcXCIyMFxcXCI+PC9saW5lPlwiLFwia2V5XCI6XCI8cGF0aCBkPVxcXCJNMjEgMmwtMiAybS03LjYxIDcuNjFhNS41IDUuNSAwIDEgMS03Ljc3OCA3Ljc3OCA1LjUgNS41IDAgMCAxIDcuNzc3LTcuNzc3em0wIDBMMTUuNSA3LjVtMCAwbDMgM0wyMiA3bC0zLTNtLTMuNSAzLjVMMTkgNFxcXCI+PC9wYXRoPlwiLFwibGF5ZXJzXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjEyIDIgMiA3IDEyIDEyIDIyIDcgMTIgMlxcXCI+PC9wb2x5Z29uPjxwb2x5bGluZSBwb2ludHM9XFxcIjIgMTcgMTIgMjIgMjIgMTdcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMiAxMiAxMiAxNyAyMiAxMlxcXCI+PC9wb2x5bGluZT5cIixcImxheW91dFwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcImxpZmUtYnVveVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCI0LjkzXFxcIiB5MT1cXFwiNC45M1xcXCIgeDI9XFxcIjkuMTdcXFwiIHkyPVxcXCI5LjE3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0LjgzXFxcIiB5MT1cXFwiMTQuODNcXFwiIHgyPVxcXCIxOS4wN1xcXCIgeTI9XFxcIjE5LjA3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0LjgzXFxcIiB5MT1cXFwiOS4xN1xcXCIgeDI9XFxcIjE5LjA3XFxcIiB5Mj1cXFwiNC45M1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNC44M1xcXCIgeTE9XFxcIjkuMTdcXFwiIHgyPVxcXCIxOC4zNlxcXCIgeTI9XFxcIjUuNjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNC45M1xcXCIgeTE9XFxcIjE5LjA3XFxcIiB4Mj1cXFwiOS4xN1xcXCIgeTI9XFxcIjE0LjgzXFxcIj48L2xpbmU+XCIsXCJsaW5rLTJcIjpcIjxwYXRoIGQ9XFxcIk0xNSA3aDNhNSA1IDAgMCAxIDUgNSA1IDUgMCAwIDEtNSA1aC0zbS02IDBINmE1IDUgMCAwIDEtNS01IDUgNSAwIDAgMSA1LTVoM1xcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJsaW5rXCI6XCI8cGF0aCBkPVxcXCJNMTAgMTNhNSA1IDAgMCAwIDcuNTQuNTRsMy0zYTUgNSAwIDAgMC03LjA3LTcuMDdsLTEuNzIgMS43MVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNCAxMWE1IDUgMCAwIDAtNy41NC0uNTRsLTMgM2E1IDUgMCAwIDAgNy4wNyA3LjA3bDEuNzEtMS43MVxcXCI+PC9wYXRoPlwiLFwibGlua2VkaW5cIjpcIjxwYXRoIGQ9XFxcIk0xNiA4YTYgNiAwIDAgMSA2IDZ2N2gtNHYtN2EyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDJ2N2gtNHYtN2E2IDYgMCAwIDEgNi02elxcXCI+PC9wYXRoPjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjlcXFwiIHdpZHRoPVxcXCI0XFxcIiBoZWlnaHQ9XFxcIjEyXFxcIj48L3JlY3Q+PGNpcmNsZSBjeD1cXFwiNFxcXCIgY3k9XFxcIjRcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPlwiLFwibGlzdFwiOlwiPGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjMuMDFcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjMuMDFcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIzLjAxXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcImxvYWRlclwiOlwiPGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjkzXFxcIiB5MT1cXFwiNC45M1xcXCIgeDI9XFxcIjcuNzZcXFwiIHkyPVxcXCI3Ljc2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2LjI0XFxcIiB5MT1cXFwiMTYuMjRcXFwiIHgyPVxcXCIxOS4wN1xcXCIgeTI9XFxcIjE5LjA3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjkzXFxcIiB5MT1cXFwiMTkuMDdcXFwiIHgyPVxcXCI3Ljc2XFxcIiB5Mj1cXFwiMTYuMjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTYuMjRcXFwiIHkxPVxcXCI3Ljc2XFxcIiB4Mj1cXFwiMTkuMDdcXFwiIHkyPVxcXCI0LjkzXFxcIj48L2xpbmU+XCIsXCJsb2NrXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIxMVxcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjExXFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48cGF0aCBkPVxcXCJNNyAxMVY3YTUgNSAwIDAgMSAxMCAwdjRcXFwiPjwvcGF0aD5cIixcImxvZy1pblwiOlwiPHBhdGggZD1cXFwiTTE1IDNoNGEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJoLTRcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxMCAxNyAxNSAxMiAxMCA3XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJsb2ctb3V0XCI6XCI8cGF0aCBkPVxcXCJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDRcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAxNyAyMSAxMiAxNiA3XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJtYWlsXCI6XCI8cGF0aCBkPVxcXCJNNCA0aDE2YzEuMSAwIDIgLjkgMiAydjEyYzAgMS4xLS45IDItMiAySDRjLTEuMSAwLTItLjktMi0yVjZjMC0xLjEuOS0yIDItMnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIyMiw2IDEyLDEzIDIsNlxcXCI+PC9wb2x5bGluZT5cIixcIm1hcC1waW5cIjpcIjxwYXRoIGQ9XFxcIk0yMSAxMGMwIDctOSAxMy05IDEzcy05LTYtOS0xM2E5IDkgMCAwIDEgMTggMHpcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEwXFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT5cIixcIm1hcFwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxIDYgMSAyMiA4IDE4IDE2IDIyIDIzIDE4IDIzIDIgMTYgNiA4IDIgMSA2XFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT5cIixcIm1heGltaXplLTJcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE1IDMgMjEgMyAyMSA5XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjkgMjEgMyAyMSAzIDE1XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjNcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCIyMVxcXCIgeDI9XFxcIjEwXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT5cIixcIm1heGltaXplXCI6XCI8cGF0aCBkPVxcXCJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDNcXFwiPjwvcGF0aD5cIixcIm1laFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiOS4wMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTUuMDFcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+XCIsXCJtZW51XCI6XCI8bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJtZXNzYWdlLWNpcmNsZVwiOlwiPHBhdGggZD1cXFwiTTIxIDExLjVhOC4zOCA4LjM4IDAgMCAxLS45IDMuOCA4LjUgOC41IDAgMCAxLTcuNiA0LjcgOC4zOCA4LjM4IDAgMCAxLTMuOC0uOUwzIDIxbDEuOS01LjdhOC4zOCA4LjM4IDAgMCAxLS45LTMuOCA4LjUgOC41IDAgMCAxIDQuNy03LjYgOC4zOCA4LjM4IDAgMCAxIDMuOC0uOWguNWE4LjQ4IDguNDggMCAwIDEgOCA4di41elxcXCI+PC9wYXRoPlwiLFwibWVzc2FnZS1zcXVhcmVcIjpcIjxwYXRoIGQ9XFxcIk0yMSAxNWEyIDIgMCAwIDEtMiAySDdsLTQgNFY1YTIgMiAwIDAgMSAyLTJoMTRhMiAyIDAgMCAxIDIgMnpcXFwiPjwvcGF0aD5cIixcIm1pYy1vZmZcIjpcIjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNOSA5djNhMyAzIDAgMCAwIDUuMTIgMi4xMk0xNSA5LjM0VjRhMyAzIDAgMCAwLTUuOTQtLjZcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTcgMTYuOTVBNyA3IDAgMCAxIDUgMTJ2LTJtMTQgMHYyYTcgNyAwIDAgMS0uMTEgMS4yM1xcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMjNcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJtaWNcIjpcIjxwYXRoIGQ9XFxcIk0xMiAxYTMgMyAwIDAgMC0zIDN2OGEzIDMgMCAwIDAgNiAwVjRhMyAzIDAgMCAwLTMtM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTkgMTB2MmE3IDcgMCAwIDEtMTQgMHYtMlxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMjNcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJtaW5pbWl6ZS0yXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI0IDE0IDEwIDE0IDEwIDIwXFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjIwIDEwIDE0IDEwIDE0IDRcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE0XFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTBcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPlwiLFwibWluaW1pemVcIjpcIjxwYXRoIGQ9XFxcIk04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2M1xcXCI+PC9wYXRoPlwiLFwibWludXMtY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcIm1pbnVzLXNxdWFyZVwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPlwiLFwibWludXNcIjpcIjxsaW5lIHgxPVxcXCI1XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxOVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJtb25pdG9yXCI6XCI8cmVjdCB4PVxcXCIyXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTdcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+XCIsXCJtb29uXCI6XCI8cGF0aCBkPVxcXCJNMjEgMTIuNzlBOSA5IDAgMSAxIDExLjIxIDMgNyA3IDAgMCAwIDIxIDEyLjc5elxcXCI+PC9wYXRoPlwiLFwibW9yZS1ob3Jpem9udGFsXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOVxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI1XFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjFcXFwiPjwvY2lyY2xlPlwiLFwibW9yZS12ZXJ0aWNhbFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjE5XFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT5cIixcIm1vdXNlLXBvaW50ZXJcIjpcIjxwYXRoIGQ9XFxcIk0zIDNsNy4wNyAxNi45NyAyLjUxLTcuMzkgNy4zOS0yLjUxTDMgM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTMgMTNsNiA2XFxcIj48L3BhdGg+XCIsXCJtb3ZlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI1IDkgMiAxMiA1IDE1XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjkgNSAxMiAyIDE1IDVcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTUgMTkgMTIgMjIgOSAxOVxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxOSA5IDIyIDEyIDE5IDE1XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT5cIixcIm11c2ljXCI6XCI8cGF0aCBkPVxcXCJNOSAxOFY1bDEyLTJ2MTNcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMTZcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwibmF2aWdhdGlvbi0yXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjEyIDIgMTkgMjEgMTIgMTcgNSAyMSAxMiAyXFxcIj48L3BvbHlnb24+XCIsXCJuYXZpZ2F0aW9uXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjMgMTEgMjIgMiAxMyAyMSAxMSAxMyAzIDExXFxcIj48L3BvbHlnb24+XCIsXCJvY3RhZ29uXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjcuODYgMiAxNi4xNCAyIDIyIDcuODYgMjIgMTYuMTQgMTYuMTQgMjIgNy44NiAyMiAyIDE2LjE0IDIgNy44NiA3Ljg2IDJcXFwiPjwvcG9seWdvbj5cIixcInBhY2thZ2VcIjpcIjxsaW5lIHgxPVxcXCIxNi41XFxcIiB5MT1cXFwiOS40XFxcIiB4Mj1cXFwiNy41XFxcIiB5Mj1cXFwiNC4yMVxcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMSAxNlY4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIzLjI3IDYuOTYgMTIgMTIuMDEgMjAuNzMgNi45NlxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMi4wOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcInBhcGVyY2xpcFwiOlwiPHBhdGggZD1cXFwiTTIxLjQ0IDExLjA1bC05LjE5IDkuMTlhNiA2IDAgMCAxLTguNDktOC40OWw5LjE5LTkuMTlhNCA0IDAgMCAxIDUuNjYgNS42NmwtOS4yIDkuMTlhMiAyIDAgMCAxLTIuODMtMi44M2w4LjQ5LTguNDhcXFwiPjwvcGF0aD5cIixcInBhdXNlLWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxMFxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiMTBcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0XFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcInBhdXNlXCI6XCI8cmVjdCB4PVxcXCI2XFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiNFxcXCIgaGVpZ2h0PVxcXCIxNlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjE0XFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiNFxcXCIgaGVpZ2h0PVxcXCIxNlxcXCI+PC9yZWN0PlwiLFwicGVuLXRvb2xcIjpcIjxwYXRoIGQ9XFxcIk0xMiAxOWw3LTcgMyAzLTcgNy0zLTN6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4IDEzbC0xLjUtNy41TDIgMmwzLjUgMTQuNUwxMyAxOGw1LTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIgMmw3LjU4NiA3LjU4NlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjExXFxcIiBjeT1cXFwiMTFcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPlwiLFwicGVyY2VudFwiOlwiPGxpbmUgeDE9XFxcIjE5XFxcIiB5MT1cXFwiNVxcXCIgeDI9XFxcIjVcXFwiIHkyPVxcXCIxOVxcXCI+PC9saW5lPjxjaXJjbGUgY3g9XFxcIjYuNVxcXCIgY3k9XFxcIjYuNVxcXCIgcj1cXFwiMi41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNy41XFxcIiBjeT1cXFwiMTcuNVxcXCIgcj1cXFwiMi41XFxcIj48L2NpcmNsZT5cIixcInBob25lLWNhbGxcIjpcIjxwYXRoIGQ9XFxcIk0xNS4wNSA1QTUgNSAwIDAgMSAxOSA4Ljk1TTE1LjA1IDFBOSA5IDAgMCAxIDIzIDguOTRtLTEgNy45OHYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGhvbmUtZm9yd2FyZGVkXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxOSAxIDIzIDUgMTkgOVxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI1XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCI1XFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6XFxcIj48L3BhdGg+XCIsXCJwaG9uZS1pbmNvbWluZ1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTYgMiAxNiA4IDIyIDhcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGhvbmUtbWlzc2VkXCI6XCI8bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMTdcXFwiIHkyPVxcXCI3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiN1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGhvbmUtb2ZmXCI6XCI8cGF0aCBkPVxcXCJNMTAuNjggMTMuMzFhMTYgMTYgMCAwIDAgMy40MSAyLjZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjcgMiAyIDAgMCAxIDEuNzIgMnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjQyIDE5LjQyIDAgMCAxLTMuMzMtMi42N20tMi42Ny0zLjM0YTE5Ljc5IDE5Ljc5IDAgMCAxLTMuMDctOC42M0EyIDIgMCAwIDEgNC4xMSAyaDNhMiAyIDAgMCAxIDIgMS43MiAxMi44NCAxMi44NCAwIDAgMCAuNyAyLjgxIDIgMiAwIDAgMS0uNDUgMi4xMUw4LjA5IDkuOTFcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMVxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJwaG9uZS1vdXRnb2luZ1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjMgNyAyMyAxIDE3IDFcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMVxcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGhvbmVcIjpcIjxwYXRoIGQ9XFxcIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGllLWNoYXJ0XCI6XCI8cGF0aCBkPVxcXCJNMjEuMjEgMTUuODlBMTAgMTAgMCAxIDEgOCAyLjgzXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIyIDEyQTEwIDEwIDAgMCAwIDEyIDJ2MTB6XFxcIj48L3BhdGg+XCIsXCJwbGF5LWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwb2x5Z29uIHBvaW50cz1cXFwiMTAgOCAxNiAxMiAxMCAxNiAxMCA4XFxcIj48L3BvbHlnb24+XCIsXCJwbGF5XCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjUgMyAxOSAxMiA1IDIxIDUgM1xcXCI+PC9wb2x5Z29uPlwiLFwicGx1cy1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJwbHVzLXNxdWFyZVwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJwbHVzXCI6XCI8bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI1XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI1XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxOVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJwb2NrZXRcIjpcIjxwYXRoIGQ9XFxcIk00IDNoMTZhMiAyIDAgMCAxIDIgMnY2YTEwIDEwIDAgMCAxLTEwIDEwQTEwIDEwIDAgMCAxIDIgMTFWNWEyIDIgMCAwIDEgMi0yelxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjggMTAgMTIgMTQgMTYgMTBcXFwiPjwvcG9seWxpbmU+XCIsXCJwb3dlclwiOlwiPHBhdGggZD1cXFwiTTE4LjM2IDYuNjRhOSA5IDAgMSAxLTEyLjczIDBcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPlwiLFwicHJpbnRlclwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiNiA5IDYgMiAxOCAyIDE4IDlcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTYgMThINGEyIDIgMCAwIDEtMi0ydi01YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnY1YTIgMiAwIDAgMS0yIDJoLTJcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCI2XFxcIiB5PVxcXCIxNFxcXCIgd2lkdGg9XFxcIjEyXFxcIiBoZWlnaHQ9XFxcIjhcXFwiPjwvcmVjdD5cIixcInJhZGlvXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIyXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTYuMjQgNy43NmE2IDYgMCAwIDEgMCA4LjQ5bS04LjQ4LS4wMWE2IDYgMCAwIDEgMC04LjQ5bTExLjMxLTIuODJhMTAgMTAgMCAwIDEgMCAxNC4xNG0tMTQuMTQgMGExMCAxMCAwIDAgMSAwLTE0LjE0XFxcIj48L3BhdGg+XCIsXCJyZWZyZXNoLWNjd1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMSA0IDEgMTAgNyAxMFxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIyMyAyMCAyMyAxNCAxNyAxNFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMjAuNDkgOUE5IDkgMCAwIDAgNS42NCA1LjY0TDEgMTBtMjIgNGwtNC42NCA0LjM2QTkgOSAwIDAgMSAzLjUxIDE1XFxcIj48L3BhdGg+XCIsXCJyZWZyZXNoLWN3XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMyA0IDIzIDEwIDE3IDEwXFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjEgMjAgMSAxNCA3IDE0XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0zLjUxIDlhOSA5IDAgMCAxIDE0Ljg1LTMuMzZMMjMgMTBNMSAxNGw0LjY0IDQuMzZBOSA5IDAgMCAwIDIwLjQ5IDE1XFxcIj48L3BhdGg+XCIsXCJyZXBlYXRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDEgMjEgNSAxNyA5XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0zIDExVjlhNCA0IDAgMCAxIDQtNGgxNFxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjcgMjMgMyAxOSA3IDE1XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0yMSAxM3YyYTQgNCAwIDAgMS00IDRIM1xcXCI+PC9wYXRoPlwiLFwicmV3aW5kXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjExIDE5IDIgMTIgMTEgNSAxMSAxOVxcXCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz1cXFwiMjIgMTkgMTMgMTIgMjIgNSAyMiAxOVxcXCI+PC9wb2x5Z29uPlwiLFwicm90YXRlLWNjd1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMSA0IDEgMTAgNyAxMFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMy41MSAxNWE5IDkgMCAxIDAgMi4xMy05LjM2TDEgMTBcXFwiPjwvcGF0aD5cIixcInJvdGF0ZS1jd1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjMgNCAyMyAxMCAxNyAxMFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMjAuNDkgMTVhOSA5IDAgMSAxLTIuMTItOS4zNkwyMyAxMFxcXCI+PC9wYXRoPlwiLFwicnNzXCI6XCI8cGF0aCBkPVxcXCJNNCAxMWE5IDkgMCAwIDEgOSA5XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTQgNGExNiAxNiAwIDAgMSAxNiAxNlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjVcXFwiIGN5PVxcXCIxOVxcXCIgcj1cXFwiMVxcXCI+PC9jaXJjbGU+XCIsXCJzYXZlXCI6XCI8cGF0aCBkPVxcXCJNMTkgMjFINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxMWw1IDV2MTFhMiAyIDAgMCAxLTIgMnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyAyMSAxNyAxMyA3IDEzIDcgMjFcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiNyAzIDcgOCAxNSA4XFxcIj48L3BvbHlsaW5lPlwiLFwic2Npc3NvcnNcIjpcIjxjaXJjbGUgY3g9XFxcIjZcXFwiIGN5PVxcXCI2XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjRcXFwiIHgyPVxcXCI4LjEyXFxcIiB5Mj1cXFwiMTUuODhcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTQuNDdcXFwiIHkxPVxcXCIxNC40OFxcXCIgeDI9XFxcIjIwXFxcIiB5Mj1cXFwiMjBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOC4xMlxcXCIgeTE9XFxcIjguMTJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJzZWFyY2hcIjpcIjxjaXJjbGUgY3g9XFxcIjExXFxcIiBjeT1cXFwiMTFcXFwiIHI9XFxcIjhcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTYuNjVcXFwiIHkyPVxcXCIxNi42NVxcXCI+PC9saW5lPlwiLFwic2VuZFwiOlwiPGxpbmUgeDE9XFxcIjIyXFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjExXFxcIiB5Mj1cXFwiMTNcXFwiPjwvbGluZT48cG9seWdvbiBwb2ludHM9XFxcIjIyIDIgMTUgMjIgMTEgMTMgMiA5IDIyIDJcXFwiPjwvcG9seWdvbj5cIixcInNlcnZlclwiOlwiPHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjhcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjE0XFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiOFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjZcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiNi4wMVxcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiNi4wMVxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJzZXR0aW5nc1wiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE5LjQgMTVhMS42NSAxLjY1IDAgMCAwIC4zMyAxLjgybC4wNi4wNmEyIDIgMCAwIDEgMCAyLjgzIDIgMiAwIDAgMS0yLjgzIDBsLS4wNi0uMDZhMS42NSAxLjY1IDAgMCAwLTEuODItLjMzIDEuNjUgMS42NSAwIDAgMC0xIDEuNTFWMjFhMiAyIDAgMCAxLTIgMiAyIDIgMCAwIDEtMi0ydi0uMDlBMS42NSAxLjY1IDAgMCAwIDkgMTkuNGExLjY1IDEuNjUgMCAwIDAtMS44Mi4zM2wtLjA2LjA2YTIgMiAwIDAgMS0yLjgzIDAgMiAyIDAgMCAxIDAtMi44M2wuMDYtLjA2YTEuNjUgMS42NSAwIDAgMCAuMzMtMS44MiAxLjY1IDEuNjUgMCAwIDAtMS41MS0xSDNhMiAyIDAgMCAxLTItMiAyIDIgMCAwIDEgMi0yaC4wOUExLjY1IDEuNjUgMCAwIDAgNC42IDlhMS42NSAxLjY1IDAgMCAwLS4zMy0xLjgybC0uMDYtLjA2YTIgMiAwIDAgMSAwLTIuODMgMiAyIDAgMCAxIDIuODMgMGwuMDYuMDZhMS42NSAxLjY1IDAgMCAwIDEuODIuMzNIOWExLjY1IDEuNjUgMCAwIDAgMS0xLjUxVjNhMiAyIDAgMCAxIDItMiAyIDIgMCAwIDEgMiAydi4wOWExLjY1IDEuNjUgMCAwIDAgMSAxLjUxIDEuNjUgMS42NSAwIDAgMCAxLjgyLS4zM2wuMDYtLjA2YTIgMiAwIDAgMSAyLjgzIDAgMiAyIDAgMCAxIDAgMi44M2wtLjA2LjA2YTEuNjUgMS42NSAwIDAgMC0uMzMgMS44MlY5YTEuNjUgMS42NSAwIDAgMCAxLjUxIDFIMjFhMiAyIDAgMCAxIDIgMiAyIDIgMCAwIDEtMiAyaC0uMDlhMS42NSAxLjY1IDAgMCAwLTEuNTEgMXpcXFwiPjwvcGF0aD5cIixcInNoYXJlLTJcIjpcIjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE5XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiOC41OVxcXCIgeTE9XFxcIjEzLjUxXFxcIiB4Mj1cXFwiMTUuNDJcXFwiIHkyPVxcXCIxNy40OVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNS40MVxcXCIgeTE9XFxcIjYuNTFcXFwiIHgyPVxcXCI4LjU5XFxcIiB5Mj1cXFwiMTAuNDlcXFwiPjwvbGluZT5cIixcInNoYXJlXCI6XCI8cGF0aCBkPVxcXCJNNCAxMnY4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMnYtOFxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE2IDYgMTIgMiA4IDZcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT5cIixcInNoaWVsZC1vZmZcIjpcIjxwYXRoIGQ9XFxcIk0xOS42OSAxNGE2LjkgNi45IDAgMCAwIC4zMS0yVjVsLTgtMy0zLjE2IDEuMThcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNC43MyA0LjczTDQgNXY3YzAgNiA4IDEwIDggMTBhMjAuMjkgMjAuMjkgMCAwIDAgNS42Mi00LjM4XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPlwiLFwic2hpZWxkXCI6XCI8cGF0aCBkPVxcXCJNMTIgMjJzOC00IDgtMTBWNWwtOC0zLTggM3Y3YzAgNiA4IDEwIDggMTB6XFxcIj48L3BhdGg+XCIsXCJzaG9wcGluZy1iYWdcIjpcIjxwYXRoIGQ9XFxcIk02IDJMMyA2djE0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMlY2bC0zLTR6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTE2IDEwYTQgNCAwIDAgMS04IDBcXFwiPjwvcGF0aD5cIixcInNob3BwaW5nLWNhcnRcIjpcIjxjaXJjbGUgY3g9XFxcIjlcXFwiIGN5PVxcXCIyMVxcXCIgcj1cXFwiMVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMjBcXFwiIGN5PVxcXCIyMVxcXCIgcj1cXFwiMVxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2XFxcIj48L3BhdGg+XCIsXCJzaHVmZmxlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAzIDIxIDMgMjEgOFxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjEgMTYgMjEgMjEgMTYgMjFcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjRcXFwiIHkxPVxcXCI0XFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcInNpZGViYXJcIjpcIjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxOFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIzXFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+XCIsXCJza2lwLWJhY2tcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTkgMjAgOSAxMiAxOSA0IDE5IDIwXFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjVcXFwiIHkxPVxcXCIxOVxcXCIgeDI9XFxcIjVcXFwiIHkyPVxcXCI1XFxcIj48L2xpbmU+XCIsXCJza2lwLWZvcndhcmRcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiNSA0IDE1IDEyIDUgMjAgNSA0XFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjE5XFxcIiB5MT1cXFwiNVxcXCIgeDI9XFxcIjE5XFxcIiB5Mj1cXFwiMTlcXFwiPjwvbGluZT5cIixcInNsYWNrXCI6XCI8cGF0aCBkPVxcXCJNMTQuNSAxMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41di01YzAtLjgzLjY3LTEuNSAxLjUtMS41czEuNS42NyAxLjUgMS41djVjMCAuODMtLjY3IDEuNS0xLjUgMS41elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMC41IDEwSDE5VjguNWMwLS44My42Ny0xLjUgMS41LTEuNXMxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkuNSAxNGMuODMgMCAxLjUuNjcgMS41IDEuNXY1YzAgLjgzLS42NyAxLjUtMS41IDEuNVM4IDIxLjMzIDggMjAuNXYtNWMwLS44My42Ny0xLjUgMS41LTEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMy41IDE0SDV2MS41YzAgLjgzLS42NyAxLjUtMS41IDEuNVMyIDE2LjMzIDIgMTUuNSAyLjY3IDE0IDMuNSAxNHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTQgMTQuNWMwLS44My42Ny0xLjUgMS41LTEuNWg1Yy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTVjLS44MyAwLTEuNS0uNjctMS41LTEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTUuNSAxOUgxNHYxLjVjMCAuODMuNjcgMS41IDEuNSAxLjVzMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTAgOS41QzEwIDguNjcgOS4zMyA4IDguNSA4aC01QzIuNjcgOCAyIDguNjcgMiA5LjVTMi42NyAxMSAzLjUgMTFoNWMuODMgMCAxLjUtLjY3IDEuNS0xLjV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTguNSA1SDEwVjMuNUMxMCAyLjY3IDkuMzMgMiA4LjUgMlM3IDIuNjcgNyAzLjUgNy42NyA1IDguNSA1elxcXCI+PC9wYXRoPlwiLFwic2xhc2hcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiNC45M1xcXCIgeTE9XFxcIjQuOTNcXFwiIHgyPVxcXCIxOS4wN1xcXCIgeTI9XFxcIjE5LjA3XFxcIj48L2xpbmU+XCIsXCJzbGlkZXJzXCI6XCI8bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiNFxcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjRcXFwiIHkxPVxcXCIxMFxcXCIgeDI9XFxcIjRcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPlwiLFwic21hcnRwaG9uZVwiOlwiPHJlY3QgeD1cXFwiNVxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjE0XFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcInNtaWxlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTggMTRzMS41IDIgNCAyIDQtMiA0LTJcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI5LjAxXFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxNS4wMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcInNwZWFrZXJcIjpcIjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjJcXFwiIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxNFxcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPlwiLFwic3F1YXJlXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PlwiLFwic3RhclwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxMiAyIDE1LjA5IDguMjYgMjIgOS4yNyAxNyAxNC4xNCAxOC4xOCAyMS4wMiAxMiAxNy43NyA1LjgyIDIxLjAyIDcgMTQuMTQgMiA5LjI3IDguOTEgOC4yNiAxMiAyXFxcIj48L3BvbHlnb24+XCIsXCJzdG9wLWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxyZWN0IHg9XFxcIjlcXFwiIHk9XFxcIjlcXFwiIHdpZHRoPVxcXCI2XFxcIiBoZWlnaHQ9XFxcIjZcXFwiPjwvcmVjdD5cIixcInN1blwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiNVxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjIyXFxcIiB5MT1cXFwiNC4yMlxcXCIgeDI9XFxcIjUuNjRcXFwiIHkyPVxcXCI1LjY0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE4LjM2XFxcIiB5MT1cXFwiMTguMzZcXFwiIHgyPVxcXCIxOS43OFxcXCIgeTI9XFxcIjE5Ljc4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjIyXFxcIiB5MT1cXFwiMTkuNzhcXFwiIHgyPVxcXCI1LjY0XFxcIiB5Mj1cXFwiMTguMzZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTguMzZcXFwiIHkxPVxcXCI1LjY0XFxcIiB4Mj1cXFwiMTkuNzhcXFwiIHkyPVxcXCI0LjIyXFxcIj48L2xpbmU+XCIsXCJzdW5yaXNlXCI6XCI8cGF0aCBkPVxcXCJNMTcgMThhNSA1IDAgMCAwLTEwIDBcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjQuMjJcXFwiIHkxPVxcXCIxMC4yMlxcXCIgeDI9XFxcIjUuNjRcXFwiIHkyPVxcXCIxMS42NFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTguMzZcXFwiIHkxPVxcXCIxMS42NFxcXCIgeDI9XFxcIjE5Ljc4XFxcIiB5Mj1cXFwiMTAuMjJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIyMlxcXCIgeDI9XFxcIjFcXFwiIHkyPVxcXCIyMlxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjggNiAxMiAyIDE2IDZcXFwiPjwvcG9seWxpbmU+XCIsXCJzdW5zZXRcIjpcIjxwYXRoIGQ9XFxcIk0xNyAxOGE1IDUgMCAwIDAtMTAgMFxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNC4yMlxcXCIgeTE9XFxcIjEwLjIyXFxcIiB4Mj1cXFwiNS42NFxcXCIgeTI9XFxcIjExLjY0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxOC4zNlxcXCIgeTE9XFxcIjExLjY0XFxcIiB4Mj1cXFwiMTkuNzhcXFwiIHkyPVxcXCIxMC4yMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiMVxcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTYgNSAxMiA5IDggNVxcXCI+PC9wb2x5bGluZT5cIixcInRhYmxlXCI6XCI8cGF0aCBkPVxcXCJNOSAzSDVhMiAyIDAgMCAwLTIgMnY0bTYtNmgxMGEyIDIgMCAwIDEgMiAydjRNOSAzdjE4bTAgMGgxMGEyIDIgMCAwIDAgMi0yVjlNOSAyMUg1YTIgMiAwIDAgMS0yLTJWOW0wIDBoMThcXFwiPjwvcGF0aD5cIixcInRhYmxldFwiOlwiPHJlY3QgeD1cXFwiNFxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcInRhZ1wiOlwiPHBhdGggZD1cXFwiTTIwLjU5IDEzLjQxbC03LjE3IDcuMTdhMiAyIDAgMCAxLTIuODMgMEwyIDEyVjJoMTBsOC41OSA4LjU5YTIgMiAwIDAgMSAwIDIuODJ6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjdcXFwiIHkxPVxcXCI3XFxcIiB4Mj1cXFwiNy4wMVxcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT5cIixcInRhcmdldFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjZcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPlwiLFwidGVybWluYWxcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjQgMTcgMTAgMTEgNCA1XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIxOVxcXCI+PC9saW5lPlwiLFwidGhlcm1vbWV0ZXJcIjpcIjxwYXRoIGQ9XFxcIk0xNCAxNC43NlYzLjVhMi41IDIuNSAwIDAgMC01IDB2MTEuMjZhNC41IDQuNSAwIDEgMCA1IDB6XFxcIj48L3BhdGg+XCIsXCJ0aHVtYnMtZG93blwiOlwiPHBhdGggZD1cXFwiTTEwIDE1djRhMyAzIDAgMCAwIDMgM2w0LTlWMkg1LjcyYTIgMiAwIDAgMC0yIDEuN2wtMS4zOCA5YTIgMiAwIDAgMCAyIDIuM3ptNy0xM2gyLjY3QTIuMzEgMi4zMSAwIDAgMSAyMiA0djdhMi4zMSAyLjMxIDAgMCAxLTIuMzMgMkgxN1xcXCI+PC9wYXRoPlwiLFwidGh1bWJzLXVwXCI6XCI8cGF0aCBkPVxcXCJNMTQgOVY1YTMgMyAwIDAgMC0zLTNsLTQgOXYxMWgxMS4yOGEyIDIgMCAwIDAgMi0xLjdsMS4zOC05YTIgMiAwIDAgMC0yLTIuM3pNNyAyMkg0YTIgMiAwIDAgMS0yLTJ2LTdhMiAyIDAgMCAxIDItMmgzXFxcIj48L3BhdGg+XCIsXCJ0b2dnbGUtbGVmdFwiOlwiPHJlY3QgeD1cXFwiMVxcXCIgeT1cXFwiNVxcXCIgd2lkdGg9XFxcIjIyXFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiByeD1cXFwiN1xcXCIgcnk9XFxcIjdcXFwiPjwvcmVjdD48Y2lyY2xlIGN4PVxcXCI4XFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwidG9nZ2xlLXJpZ2h0XCI6XCI8cmVjdCB4PVxcXCIxXFxcIiB5PVxcXCI1XFxcIiB3aWR0aD1cXFwiMjJcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHJ4PVxcXCI3XFxcIiByeT1cXFwiN1xcXCI+PC9yZWN0PjxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwidG9vbFwiOlwiPHBhdGggZD1cXFwiTTE0LjcgNi4zYTEgMSAwIDAgMCAwIDEuNGwxLjYgMS42YTEgMSAwIDAgMCAxLjQgMGwzLjc3LTMuNzdhNiA2IDAgMCAxLTcuOTQgNy45NGwtNi45MSA2LjkxYTIuMTIgMi4xMiAwIDAgMS0zLTNsNi45MS02LjkxYTYgNiAwIDAgMSA3Ljk0LTcuOTRsLTMuNzYgMy43NnpcXFwiPjwvcGF0aD5cIixcInRyYXNoLTJcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjMgNiA1IDYgMjEgNlxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTBcXFwiIHkxPVxcXCIxMVxcXCIgeDI9XFxcIjEwXFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTRcXFwiIHkxPVxcXCIxMVxcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT5cIixcInRyYXNoXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIzIDYgNSA2IDIxIDZcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXFxcIj48L3BhdGg+XCIsXCJ0cmVsbG9cIjpcIjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxOFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiN1xcXCIgeT1cXFwiN1xcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiOVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjE0XFxcIiB5PVxcXCI3XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCI1XFxcIj48L3JlY3Q+XCIsXCJ0cmVuZGluZy1kb3duXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMyAxOCAxMy41IDguNSA4LjUgMTMuNSAxIDZcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgMTggMjMgMTggMjMgMTJcXFwiPjwvcG9seWxpbmU+XCIsXCJ0cmVuZGluZy11cFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjMgNiAxMy41IDE1LjUgOC41IDEwLjUgMSAxOFxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyA2IDIzIDYgMjMgMTJcXFwiPjwvcG9seWxpbmU+XCIsXCJ0cmlhbmdsZVwiOlwiPHBhdGggZD1cXFwiTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAwelxcXCI+PC9wYXRoPlwiLFwidHJ1Y2tcIjpcIjxyZWN0IHg9XFxcIjFcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIxNVxcXCIgaGVpZ2h0PVxcXCIxM1xcXCI+PC9yZWN0Pjxwb2x5Z29uIHBvaW50cz1cXFwiMTYgOCAyMCA4IDIzIDExIDIzIDE2IDE2IDE2IDE2IDhcXFwiPjwvcG9seWdvbj48Y2lyY2xlIGN4PVxcXCI1LjVcXFwiIGN5PVxcXCIxOC41XFxcIiByPVxcXCIyLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE4LjVcXFwiIGN5PVxcXCIxOC41XFxcIiByPVxcXCIyLjVcXFwiPjwvY2lyY2xlPlwiLFwidHZcIjpcIjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjdcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIxNVxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgMiAxMiA3IDcgMlxcXCI+PC9wb2x5bGluZT5cIixcInR3aXRjaFwiOlwiPHBhdGggZD1cXFwiTTIxIDJIM3YxNmg1djRsNC00aDVsNC00VjJ6TTExIDExVjdNMTYgMTFWN1xcXCI+PC9wYXRoPlwiLFwidHdpdHRlclwiOlwiPHBhdGggZD1cXFwiTTIzIDNhMTAuOSAxMC45IDAgMCAxLTMuMTQgMS41MyA0LjQ4IDQuNDggMCAwIDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwIDEgMyA0cy00IDkgNSAxM2ExMS42NCAxMS42NCAwIDAgMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMCAwLS4wOC0uODNBNy43MiA3LjcyIDAgMCAwIDIzIDN6XFxcIj48L3BhdGg+XCIsXCJ0eXBlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI0IDcgNCA0IDIwIDQgMjAgN1xcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCIyMFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjRcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+XCIsXCJ1bWJyZWxsYVwiOlwiPHBhdGggZD1cXFwiTTIzIDEyYTExLjA1IDExLjA1IDAgMCAwLTIyIDB6bS01IDdhMyAzIDAgMCAxLTYgMHYtN1xcXCI+PC9wYXRoPlwiLFwidW5kZXJsaW5lXCI6XCI8cGF0aCBkPVxcXCJNNiAzdjdhNiA2IDAgMCAwIDYgNiA2IDYgMCAwIDAgNi02VjNcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPlwiLFwidW5sb2NrXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIxMVxcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjExXFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48cGF0aCBkPVxcXCJNNyAxMVY3YTUgNSAwIDAgMSA5LjktMVxcXCI+PC9wYXRoPlwiLFwidXBsb2FkLWNsb3VkXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAxNiAxMiAxMiA4IDE2XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMC4zOSAxOC4zOUE1IDUgMCAwIDAgMTggOWgtMS4yNkE4IDggMCAxIDAgMyAxNi4zXFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTYgMTYgMTIgMTIgOCAxNlxcXCI+PC9wb2x5bGluZT5cIixcInVwbG9hZFwiOlwiPHBhdGggZD1cXFwiTTIxIDE1djRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ2LTRcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyA4IDEyIDMgNyA4XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjNcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJ1c2VyLWNoZWNrXCI6XCI8cGF0aCBkPVxcXCJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg1YTQgNCAwIDAgMC00IDR2MlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjguNVxcXCIgY3k9XFxcIjdcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDExIDE5IDEzIDIzIDlcXFwiPjwvcG9seWxpbmU+XCIsXCJ1c2VyLW1pbnVzXCI6XCI8cGF0aCBkPVxcXCJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg1YTQgNCAwIDAgMC00IDR2MlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjguNVxcXCIgY3k9XFxcIjdcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjExXFxcIiB4Mj1cXFwiMTdcXFwiIHkyPVxcXCIxMVxcXCI+PC9saW5lPlwiLFwidXNlci1wbHVzXCI6XCI8cGF0aCBkPVxcXCJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg1YTQgNCAwIDAgMC00IDR2MlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjguNVxcXCIgY3k9XFxcIjdcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIyMFxcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiMTFcXFwiIHgyPVxcXCIxN1xcXCIgeTI9XFxcIjExXFxcIj48L2xpbmU+XCIsXCJ1c2VyLXhcIjpcIjxwYXRoIGQ9XFxcIk0xNiAyMXYtMmE0IDQgMCAwIDAtNC00SDVhNCA0IDAgMCAwLTQgNHYyXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiOC41XFxcIiBjeT1cXFwiN1xcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMTNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMThcXFwiIHkyPVxcXCIxM1xcXCI+PC9saW5lPlwiLFwidXNlclwiOlwiPHBhdGggZD1cXFwiTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djJcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjdcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPlwiLFwidXNlcnNcIjpcIjxwYXRoIGQ9XFxcIk0xNyAyMXYtMmE0IDQgMCAwIDAtNC00SDVhNCA0IDAgMCAwLTQgNHYyXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiOVxcXCIgY3k9XFxcIjdcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0yMyAyMXYtMmE0IDQgMCAwIDAtMy0zLjg3XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE2IDMuMTNhNCA0IDAgMCAxIDAgNy43NVxcXCI+PC9wYXRoPlwiLFwidmlkZW8tb2ZmXCI6XCI8cGF0aCBkPVxcXCJNMTYgMTZ2MWEyIDIgMCAwIDEtMiAySDNhMiAyIDAgMCAxLTItMlY3YTIgMiAwIDAgMSAyLTJoMm01LjY2IDBIMTRhMiAyIDAgMCAxIDIgMnYzLjM0bDEgMUwyMyA3djEwXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPlwiLFwidmlkZW9cIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMjMgNyAxNiAxMiAyMyAxNyAyMyA3XFxcIj48L3BvbHlnb24+PHJlY3QgeD1cXFwiMVxcXCIgeT1cXFwiNVxcXCIgd2lkdGg9XFxcIjE1XFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD5cIixcInZvaWNlbWFpbFwiOlwiPGNpcmNsZSBjeD1cXFwiNS41XFxcIiBjeT1cXFwiMTEuNVxcXCIgcj1cXFwiNC41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOC41XFxcIiBjeT1cXFwiMTEuNVxcXCIgcj1cXFwiNC41XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiNS41XFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxOC41XFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT5cIixcInZvbHVtZS0xXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjExIDUgNiA5IDIgOSAyIDE1IDYgMTUgMTEgMTkgMTEgNVxcXCI+PC9wb2x5Z29uPjxwYXRoIGQ9XFxcIk0xNS41NCA4LjQ2YTUgNSAwIDAgMSAwIDcuMDdcXFwiPjwvcGF0aD5cIixcInZvbHVtZS0yXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjExIDUgNiA5IDIgOSAyIDE1IDYgMTUgMTEgMTkgMTEgNVxcXCI+PC9wb2x5Z29uPjxwYXRoIGQ9XFxcIk0xOS4wNyA0LjkzYTEwIDEwIDAgMCAxIDAgMTQuMTRNMTUuNTQgOC40NmE1IDUgMCAwIDEgMCA3LjA3XFxcIj48L3BhdGg+XCIsXCJ2b2x1bWUteFwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDVcXFwiPjwvcG9seWdvbj48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTdcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJ2b2x1bWVcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTEgNSA2IDkgMiA5IDIgMTUgNiAxNSAxMSAxOSAxMSA1XFxcIj48L3BvbHlnb24+XCIsXCJ3YXRjaFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiN1xcXCI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTIgOSAxMiAxMiAxMy41IDEzLjVcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTE2LjUxIDE3LjM1bC0uMzUgMy44M2EyIDIgMCAwIDEtMiAxLjgySDkuODNhMiAyIDAgMCAxLTItMS44MmwtLjM1LTMuODNtLjAxLTEwLjdsLjM1LTMuODNBMiAyIDAgMCAxIDkuODMgMWg0LjM1YTIgMiAwIDAgMSAyIDEuODJsLjM1IDMuODNcXFwiPjwvcGF0aD5cIixcIndpZmktb2ZmXCI6XCI8bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTE2LjcyIDExLjA2QTEwLjk0IDEwLjk0IDAgMCAxIDE5IDEyLjU1XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTUgMTIuNTVhMTAuOTQgMTAuOTQgMCAwIDEgNS4xNy0yLjM5XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEwLjcxIDUuMDVBMTYgMTYgMCAwIDEgMjIuNTggOVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xLjQyIDlhMTUuOTEgMTUuOTEgMCAwIDEgNC43LTIuODhcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOC41MyAxNi4xMWE2IDYgMCAwIDEgNi45NSAwXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxMi4wMVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+XCIsXCJ3aWZpXCI6XCI8cGF0aCBkPVxcXCJNNSAxMi41NWExMSAxMSAwIDAgMSAxNC4wOCAwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEuNDIgOWExNiAxNiAwIDAgMSAyMS4xNiAwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTguNTMgMTYuMTFhNiA2IDAgMCAxIDYuOTUgMFxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCIyMFxcXCI+PC9saW5lPlwiLFwid2luZFwiOlwiPHBhdGggZD1cXFwiTTkuNTkgNC41OUEyIDIgMCAxIDEgMTEgOEgybTEwLjU5IDExLjQxQTIgMiAwIDEgMCAxNCAxNkgybTE1LjczLTguMjdBMi41IDIuNSAwIDEgMSAxOS41IDEySDJcXFwiPjwvcGF0aD5cIixcIngtY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjlcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT5cIixcIngtb2N0YWdvblwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCI3Ljg2IDIgMTYuMTQgMiAyMiA3Ljg2IDIyIDE2LjE0IDE2LjE0IDIyIDcuODYgMjIgMiAxNi4xNCAyIDcuODYgNy44NiAyXFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjlcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT5cIixcIngtc3F1YXJlXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJ4XCI6XCI8bGluZSB4MT1cXFwiMThcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiNlxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjZcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMThcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwieW91dHViZVwiOlwiPHBhdGggZD1cXFwiTTIyLjU0IDYuNDJhMi43OCAyLjc4IDAgMCAwLTEuOTQtMkMxOC44OCA0IDEyIDQgMTIgNHMtNi44OCAwLTguNi40NmEyLjc4IDIuNzggMCAwIDAtMS45NCAyQTI5IDI5IDAgMCAwIDEgMTEuNzVhMjkgMjkgMCAwIDAgLjQ2IDUuMzNBMi43OCAyLjc4IDAgMCAwIDMuNCAxOWMxLjcyLjQ2IDguNi40NiA4LjYuNDZzNi44OCAwIDguNi0uNDZhMi43OCAyLjc4IDAgMCAwIDEuOTQtMiAyOSAyOSAwIDAgMCAuNDYtNS4yNSAyOSAyOSAwIDAgMC0uNDYtNS4zM3pcXFwiPjwvcGF0aD48cG9seWdvbiBwb2ludHM9XFxcIjkuNzUgMTUuMDIgMTUuNSAxMS43NSA5Ljc1IDguNDggOS43NSAxNS4wMlxcXCI+PC9wb2x5Z29uPlwiLFwiemFwLW9mZlwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTIuNDEgNi43NSAxMyAyIDEwLjU3IDQuOTJcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTguNTcgMTIuOTEgMjEgMTAgMTUuNjYgMTBcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiOCA4IDMgMTQgMTIgMTQgMTEgMjIgMTYgMTZcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPlwiLFwiemFwXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjEzIDIgMyAxNCAxMiAxNCAxMSAyMiAyMSAxMCAxMiAxMCAxMyAyXFxcIj48L3BvbHlnb24+XCIsXCJ6b29tLWluXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMVxcXCIgY3k9XFxcIjExXFxcIiByPVxcXCI4XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIyMVxcXCIgeDI9XFxcIjE2LjY1XFxcIiB5Mj1cXFwiMTYuNjVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTFcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTFcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTFcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjExXFxcIj48L2xpbmU+XCIsXCJ6b29tLW91dFwiOlwiPGNpcmNsZSBjeD1cXFwiMTFcXFwiIGN5PVxcXCIxMVxcXCIgcj1cXFwiOFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIxNi42NVxcXCIgeTI9XFxcIjE2LjY1XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMVxcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiMTFcXFwiPjwvbGluZT5cIn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvZGVkdXBlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvZGVkdXBlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2xhc3NOYW1lcyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gZG9uJ3QgaW5oZXJpdCBmcm9tIE9iamVjdCBzbyB3ZSBjYW4gc2tpcCBoYXNPd25Qcm9wZXJ0eSBjaGVjayBsYXRlclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTU1MTgzMjgvY3JlYXRpbmctanMtb2JqZWN0LXdpdGgtb2JqZWN0LWNyZWF0ZW51bGwjYW5zd2VyLTIxMDc5MjMyXG5cdFx0ZnVuY3Rpb24gU3RvcmFnZU9iamVjdCgpIHt9XG5cdFx0U3RvcmFnZU9iamVjdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdFx0ZnVuY3Rpb24gX3BhcnNlQXJyYXkgKHJlc3VsdFNldCwgYXJyYXkpIHtcblx0XHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0X3BhcnNlKHJlc3VsdFNldCwgYXJyYXlbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRcdGZ1bmN0aW9uIF9wYXJzZU51bWJlciAocmVzdWx0U2V0LCBudW0pIHtcblx0XHRcdHJlc3VsdFNldFtudW1dID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBfcGFyc2VPYmplY3QgKHJlc3VsdFNldCwgb2JqZWN0KSB7XG5cdFx0XHRmb3IgKHZhciBrIGluIG9iamVjdCkge1xuXHRcdFx0XHRpZiAoaGFzT3duLmNhbGwob2JqZWN0LCBrKSkge1xuXHRcdFx0XHRcdC8vIHNldCB2YWx1ZSB0byBmYWxzZSBpbnN0ZWFkIG9mIGRlbGV0aW5nIGl0IHRvIGF2b2lkIGNoYW5naW5nIG9iamVjdCBzdHJ1Y3R1cmVcblx0XHRcdFx0XHQvLyBodHRwczovL3d3dy5zbWFzaGluZ21hZ2F6aW5lLmNvbS8yMDEyLzExL3dyaXRpbmctZmFzdC1tZW1vcnktZWZmaWNpZW50LWphdmFzY3JpcHQvI2RlLXJlZmVyZW5jaW5nLW1pc2NvbmNlcHRpb25zXG5cdFx0XHRcdFx0cmVzdWx0U2V0W2tdID0gISFvYmplY3Rba107XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgU1BBQ0UgPSAvXFxzKy87XG5cdFx0ZnVuY3Rpb24gX3BhcnNlU3RyaW5nIChyZXN1bHRTZXQsIHN0cikge1xuXHRcdFx0dmFyIGFycmF5ID0gc3RyLnNwbGl0KFNQQUNFKTtcblx0XHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0cmVzdWx0U2V0W2FycmF5W2ldXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gX3BhcnNlIChyZXN1bHRTZXQsIGFyZykge1xuXHRcdFx0aWYgKCFhcmcpIHJldHVybjtcblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0Ly8gJ2ZvbyBiYXInXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0X3BhcnNlU3RyaW5nKHJlc3VsdFNldCwgYXJnKTtcblxuXHRcdFx0Ly8gWydmb28nLCAnYmFyJywgLi4uXVxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0X3BhcnNlQXJyYXkocmVzdWx0U2V0LCBhcmcpO1xuXG5cdFx0XHQvLyB7ICdmb28nOiB0cnVlLCAuLi4gfVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRfcGFyc2VPYmplY3QocmVzdWx0U2V0LCBhcmcpO1xuXG5cdFx0XHQvLyAnMTMwJ1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRfcGFyc2VOdW1iZXIocmVzdWx0U2V0LCBhcmcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIF9jbGFzc05hbWVzICgpIHtcblx0XHRcdC8vIGRvbid0IGxlYWsgYXJndW1lbnRzXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcblx0XHRcdHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdFx0dmFyIGFyZ3MgPSBBcnJheShsZW4pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY2xhc3NTZXQgPSBuZXcgU3RvcmFnZU9iamVjdCgpO1xuXHRcdFx0X3BhcnNlQXJyYXkoY2xhc3NTZXQsIGFyZ3MpO1xuXG5cdFx0XHR2YXIgbGlzdCA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBrIGluIGNsYXNzU2V0KSB7XG5cdFx0XHRcdGlmIChjbGFzc1NldFtrXSkge1xuXHRcdFx0XHRcdGxpc3QucHVzaChrKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBsaXN0LmpvaW4oJyAnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX2NsYXNzTmFtZXM7XG5cdH0pKCk7XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHRydWUpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0IShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW10sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG5cdH0gZWxzZSB7fVxufSgpKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2VzL2FycmF5L2Zyb20uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZXMvYXJyYXkvZnJvbS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vLi4vbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5mcm9tICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanNcIik7XG52YXIgcGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uLy4uL2ludGVybmFscy9wYXRoICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoLkFycmF5LmZyb207XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9iaW5kLWNvbnRleHQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9iaW5kLWNvbnRleHQuanNcIik7XG52YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzXCIpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qc1wiKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzXCIpO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qc1wiKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanNcIik7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanNcIik7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICBpZiAoaXRlcmF0b3JNZXRob2QgIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3JNZXRob2QuY2FsbChPKTtcbiAgICByZXN1bHQgPSBuZXcgQygpO1xuICAgIGZvciAoOyEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZ1xuICAgICAgICA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKVxuICAgICAgICA6IHN0ZXAudmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgdG9JbmRleGVkT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanNcIik7XG52YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzXCIpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzXCIpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxuLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2JpbmQtY29udGV4dC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYmluZC1jb250ZXh0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24gKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWZ1bmN0aW9uLmpzXCIpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9hbi1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanNcIik7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHZhciByZXR1cm5NZXRob2QgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXR1cm5NZXRob2QuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanNcIik7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKGl0ZXJhdG9yV2l0aFJldHVybiwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG4gIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY2xhc3NvZlJhdyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jbGFzc29mLXJhdyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzXCIpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzXCIpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hhcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qc1wiKTtcbnZhciBvd25LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL293bi1rZXlzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanNcIik7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXCIpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2ZhaWxzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qc1wiKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanNcIik7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcIik7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qc1wiKTtcbnZhciBJdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXRlcmF0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzXCIpO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIEl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UsIHRydWUpO1xuICBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3Rvcjtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1wcmltaXRpdmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanNcIik7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanNcIik7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9leHBvcnQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanNcIik7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanNcIik7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qc1wiKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZiAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzXCIpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanNcIik7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oaWRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qc1wiKTtcbnZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9yZWRlZmluZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzXCIpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzXCIpO1xudmFyIElTX1BVUkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtcHVyZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanNcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qc1wiKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanNcIik7XG5cbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IEl0ZXJhdG9yc0NvcmUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUztcbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xudmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cbiAgdmFyIGdldEl0ZXJhdGlvbk1ldGhvZCA9IGZ1bmN0aW9uIChLSU5EKSB7XG4gICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG4gIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcbiAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG4gIC8vIGZpeCBuYXRpdmVcbiAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG4gICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBoaWRlKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGhpZGUoSXRlcmFibGVQcm90b3R5cGUsIElURVJBVE9SLCBkZWZhdWx0SXRlcmF0b3IpO1xuICB9XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuICAvLyBleHBvcnQgYWRkaXRpb25hbCBtZXRob2RzXG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogZ2V0SXRlcmF0aW9uTWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyBkZWZhdWx0SXRlcmF0b3IgOiBnZXRJdGVyYXRpb25NZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiBnZXRJdGVyYXRpb25NZXRob2QoRU5UUklFUylcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoS0VZIGluIG1ldGhvZHMpIHtcbiAgICAgIGlmIChCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB8fCAhKEtFWSBpbiBJdGVyYWJsZVByb3RvdHlwZSkpIHtcbiAgICAgICAgcmVkZWZpbmUoSXRlcmFibGVQcm90b3R5cGUsIEtFWSwgbWV0aG9kc1tLRVldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgJCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfSwgbWV0aG9kcyk7XG4gIH1cblxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2ZhaWxzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanNcIik7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanNcIik7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGV4aXN0ID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gZXhpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcIikuZjtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzXCIpO1xudmFyIHJlZGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3JlZGVmaW5lICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanNcIik7XG52YXIgc2V0R2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzXCIpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzXCIpO1xudmFyIGlzRm9yY2VkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qc1wiKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBoaWRlKHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgc2hhcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NoYXJlZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFyZWQoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY2xhc3NvZiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jbGFzc29mICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qc1wiKTtcbnZhciBJdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXRlcmF0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzXCIpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzXCIpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHt2YXIgTyA9ICdvYmplY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gTyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09IE8gJiYgd2luZG93KSB8fFxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSBPICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gTyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9kZXNjcmlwdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzXCIpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzXCIpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9kZXNjcmlwdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzXCIpO1xudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2ZhaWxzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanNcIik7XG52YXIgY3JlYXRlRWxlbWVudCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzXCIpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9mYWlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzXCIpO1xudmFyIGNsYXNzb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qc1wiKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBOQVRJVkVfV0VBS19NQVAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzXCIpO1xudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzXCIpO1xudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGlkZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGUuanNcIik7XG52YXIgb2JqZWN0SGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hhcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qc1wiKTtcbnZhciBzaGFyZWRLZXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2hhcmVkLWtleSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanNcIik7XG52YXIgaGlkZGVuS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oaWRkZW4ta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzXCIpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCkge1xuICB2YXIgc3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGhpZGUoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qc1wiKTtcbnZhciBJdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXRlcmF0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzXCIpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1mb3JjZWQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2ZhaWxzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanNcIik7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGdldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanNcIik7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oaWRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qc1wiKTtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzXCIpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzXCIpO1xudmFyIElTX1BVUkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtcHVyZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanNcIik7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbmlmIChJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5pZiAoIUlTX1BVUkUgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZmFpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcbnZhciBuYXRpdmVGdW5jdGlvblRvU3RyaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZy5qc1wiKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QobmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKFdlYWtNYXApKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9hbi1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanNcIik7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanNcIik7XG52YXIgZW51bUJ1Z0tleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanNcIik7XG52YXIgaGlkZGVuS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oaWRkZW4ta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzXCIpO1xudmFyIGh0bWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaHRtbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanNcIik7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanNcIik7XG52YXIgc2hhcmVkS2V5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzXCIpO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgc2NyaXB0ID0gJ3NjcmlwdCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGpzID0gJ2phdmEnICsgc2NyaXB0ICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoanMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgc2NyaXB0ICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnLycgKyBzY3JpcHQgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9kZXNjcmlwdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzXCIpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzXCIpO1xudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2FuLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qc1wiKTtcbnZhciBvYmplY3RLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qc1wiKTtcbnZhciBJRThfRE9NX0RFRklORSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzXCIpO1xudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2FuLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qc1wiKTtcbnZhciB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1wcmltaXRpdmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanNcIik7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanNcIik7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qc1wiKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qc1wiKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qc1wiKTtcbnZhciB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1wcmltaXRpdmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanNcIik7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hhcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qc1wiKTtcbnZhciBJRThfRE9NX0RFRklORSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzXCIpO1xuXG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIXByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1wiKTtcbnZhciBlbnVtQnVnS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qc1wiKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hhcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qc1wiKTtcbnZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanNcIik7XG52YXIgc2hhcmVkS2V5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzXCIpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanNcIik7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oYXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanNcIik7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanNcIik7XG52YXIgYXJyYXlJbmNsdWRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzXCIpO1xudmFyIGhpZGRlbktleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qc1wiKTtcblxudmFyIGFycmF5SW5kZXhPZiA9IGFycmF5SW5jbHVkZXMoZmFsc2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzKGhpZGRlbktleXMsIGtleSkgJiYgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzXCIpO1xudmFyIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzXCIpO1xuXG4vLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgIW5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB2YWxpZGF0ZVNldFByb3RvdHlwZU9mQXJndW1lbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLXNldC1wcm90b3R5cGUtb2YtYXJndW1lbnRzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtc2V0LXByb3RvdHlwZS1vZi1hcmd1bWVudHMuanNcIik7XG5cbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvcnJlY3RTZXR0ZXIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICBzZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQ7XG4gICAgc2V0dGVyLmNhbGwodGVzdCwgW10pO1xuICAgIGNvcnJlY3RTZXR0ZXIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgdmFsaWRhdGVTZXRQcm90b3R5cGVPZkFyZ3VtZW50cyhPLCBwcm90byk7XG4gICAgaWYgKGNvcnJlY3RTZXR0ZXIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qc1wiKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanNcIik7XG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYW4tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzXCIpO1xuXG52YXIgUmVmbGVjdCA9IGdsb2JhbC5SZWZsZWN0O1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXRoLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcbnZhciBzaGFyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2hhcmVkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzXCIpO1xudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGlkZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGUuanNcIik7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hhcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qc1wiKTtcbnZhciBzZXRHbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanNcIik7XG52YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanNcIik7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzXCIpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcpLnNwbGl0KCd0b1N0cmluZycpO1xuXG5zaGFyZWQoJ2luc3BlY3RTb3VyY2UnLCBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG59KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgdmFyIG5vVGFyZ2V0R2V0ID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5ub1RhcmdldEdldCA6IGZhbHNlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSBoaWRlKHZhbHVlLCAnbmFtZScsIGtleSk7XG4gICAgZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBzZXRHbG9iYWwoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICBzaW1wbGUgPSB0cnVlO1xuICB9XG4gIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICBlbHNlIGhpZGUoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGlkZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGUuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBoaWRlKGdsb2JhbCwga2V5LCB2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qc1wiKS5mO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oYXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanNcIik7XG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanNcIik7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBTVEFUSUMgPyBpdCA6IGl0LnByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShpdCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgc2hhcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NoYXJlZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qc1wiKTtcbnZhciB1aWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdWlkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzXCIpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG52YXIgc2V0R2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzXCIpO1xudmFyIElTX1BVUkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtcHVyZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanNcIik7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjEuMycsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1hdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLWF0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLWludGVnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzXCIpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzXCIpO1xuXG4vLyBDT05WRVJUX1RPX1NUUklORzogdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBDT05WRVJUX1RPX1NUUklORzogZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCBwb3MsIENPTlZFUlRfVE9fU1RSSU5HKSB7XG4gIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhhdCkpO1xuICB2YXIgcG9zaXRpb24gPSB0b0ludGVnZXIocG9zKTtcbiAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgdmFyIGZpcnN0LCBzZWNvbmQ7XG4gIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgcmV0dXJuIGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gc2l6ZVxuICAgIHx8IChzZWNvbmQgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSkgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGXG4gICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgIDogQ09OVkVSVF9UT19TVFJJTkcgPyBTLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIDIpIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1pbnRlZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qc1wiKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGxlbmd0aCwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanNcIik7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1sZW5ndGguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8taW50ZWdlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanNcIik7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzXCIpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qc1wiKTtcblxuLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtc2V0LXByb3RvdHlwZS1vZi1hcmd1bWVudHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtc2V0LXByb3RvdHlwZS1vZi1hcmd1bWVudHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qc1wiKTtcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9hbi1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhwcm90bykgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG52YXIgc2hhcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NoYXJlZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qc1wiKTtcbnZhciB1aWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdWlkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzXCIpO1xudmFyIE5BVElWRV9TWU1CT0wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanNcIik7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIHN0b3JlID0gc2hhcmVkKCd3a3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV1cbiAgICB8fCAoTkFUSVZFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9leHBvcnQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanNcIik7XG52YXIgZnJvbSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9hcnJheS1mcm9tICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS5qc1wiKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzXCIpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIGZyb206IGZyb21cbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb2RlUG9pbnRBdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zdHJpbmctYXQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctYXQuanNcIik7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzXCIpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvci5qc1wiKTtcblxudmFyIFNUUklOR19JVEVSQVRPUiA9ICdTdHJpbmcgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1RSSU5HX0lURVJBVE9SKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS1AQGl0ZXJhdG9yXG5kZWZpbmVJdGVyYXRvcihTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogU1RSSU5HX0lURVJBVE9SLFxuICAgIHN0cmluZzogU3RyaW5nKGl0ZXJhdGVkKSxcbiAgICBpbmRleDogMFxuICB9KTtcbi8vIGAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJXN0cmluZ2l0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiBuZXh0KCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgc3RyaW5nID0gc3RhdGUuc3RyaW5nO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleDtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9IGNvZGVQb2ludEF0KHN0cmluZywgaW5kZXgsIHRydWUpO1xuICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZGVmYXVsdC1hdHRycy5qc29uXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9kZWZhdWx0LWF0dHJzLmpzb24gKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IHhtbG5zLCB3aWR0aCwgaGVpZ2h0LCB2aWV3Qm94LCBmaWxsLCBzdHJva2UsIHN0cm9rZS13aWR0aCwgc3Ryb2tlLWxpbmVjYXAsIHN0cm9rZS1saW5lam9pbiwgZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI0LFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJmaWxsXCI6XCJub25lXCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwiLFwic3Ryb2tlLXdpZHRoXCI6MixcInN0cm9rZS1saW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlLWxpbmVqb2luXCI6XCJyb3VuZFwifTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaWNvbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2ljb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2RlZHVwZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNsYXNzbmFtZXMvZGVkdXBlICovIFwiLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9kZWR1cGUuanNcIik7XG5cbnZhciBfZGVkdXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZHVwZSk7XG5cbnZhciBfZGVmYXVsdEF0dHJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kZWZhdWx0LWF0dHJzLmpzb24gKi8gXCIuL3NyYy9kZWZhdWx0LWF0dHJzLmpzb25cIik7XG5cbnZhciBfZGVmYXVsdEF0dHJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRBdHRycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBJY29uID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJY29uKG5hbWUsIGNvbnRlbnRzKSB7XG4gICAgdmFyIHRhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEljb24pO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHM7XG4gICAgdGhpcy50YWdzID0gdGFncztcbiAgICB0aGlzLmF0dHJzID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0QXR0cnMyLmRlZmF1bHQsIHsgY2xhc3M6ICdmZWF0aGVyIGZlYXRoZXItJyArIG5hbWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIFNWRyBzdHJpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhJY29uLCBbe1xuICAgIGtleTogJ3RvU3ZnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdmcoKSB7XG4gICAgICB2YXIgYXR0cnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICB2YXIgY29tYmluZWRBdHRycyA9IF9leHRlbmRzKHt9LCB0aGlzLmF0dHJzLCBhdHRycywgeyBjbGFzczogKDAsIF9kZWR1cGUyLmRlZmF1bHQpKHRoaXMuYXR0cnMuY2xhc3MsIGF0dHJzLmNsYXNzKSB9KTtcblxuICAgICAgcmV0dXJuICc8c3ZnICcgKyBhdHRyc1RvU3RyaW5nKGNvbWJpbmVkQXR0cnMpICsgJz4nICsgdGhpcy5jb250ZW50cyArICc8L3N2Zz4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gYEljb25gLlxuICAgICAqXG4gICAgICogQWRkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIElmIG9sZCBjb2RlIGV4cGVjdHMgYGZlYXRoZXIuaWNvbnMuPG5hbWU+YFxuICAgICAqIHRvIGJlIGEgc3RyaW5nLCBgdG9TdHJpbmcoKWAgd2lsbCBnZXQgaW1wbGljaXRseSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudHM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEljb247XG59KCk7XG5cbi8qKlxuICogQ29udmVydCBhdHRyaWJ1dGVzIG9iamVjdCB0byBzdHJpbmcgb2YgSFRNTCBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gYXR0cnNUb1N0cmluZyhhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGtleSArICc9XCInICsgYXR0cnNba2V5XSArICdcIic7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gSWNvbjtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaWNvbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaWNvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pY29uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9pY29uICovIFwiLi9zcmMvaWNvbi5qc1wiKTtcblxudmFyIF9pY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ljb24pO1xuXG52YXIgX2ljb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZGlzdC9pY29ucy5qc29uICovIFwiLi9kaXN0L2ljb25zLmpzb25cIik7XG5cbnZhciBfaWNvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWNvbnMpO1xuXG52YXIgX3RhZ3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3RhZ3MuanNvbiAqLyBcIi4vc3JjL3RhZ3MuanNvblwiKTtcblxudmFyIF90YWdzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RhZ3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBPYmplY3Qua2V5cyhfaWNvbnMyLmRlZmF1bHQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBuZXcgX2ljb24yLmRlZmF1bHQoa2V5LCBfaWNvbnMyLmRlZmF1bHRba2V5XSwgX3RhZ3MyLmRlZmF1bHRba2V5XSk7XG59KS5yZWR1Y2UoZnVuY3Rpb24gKG9iamVjdCwgaWNvbikge1xuICBvYmplY3RbaWNvbi5uYW1lXSA9IGljb247XG4gIHJldHVybiBvYmplY3Q7XG59LCB7fSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfaWNvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ljb25zICovIFwiLi9zcmMvaWNvbnMuanNcIik7XG5cbnZhciBfaWNvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWNvbnMpO1xuXG52YXIgX3RvU3ZnID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90by1zdmcgKi8gXCIuL3NyYy90by1zdmcuanNcIik7XG5cbnZhciBfdG9TdmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9TdmcpO1xuXG52YXIgX3JlcGxhY2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JlcGxhY2UgKi8gXCIuL3NyYy9yZXBsYWNlLmpzXCIpO1xuXG52YXIgX3JlcGxhY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVwbGFjZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0geyBpY29uczogX2ljb25zMi5kZWZhdWx0LCB0b1N2ZzogX3RvU3ZnMi5kZWZhdWx0LCByZXBsYWNlOiBfcmVwbGFjZTIuZGVmYXVsdCB9O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9yZXBsYWNlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcmVwbGFjZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5cbnZhciBfZGVkdXBlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2xhc3NuYW1lcy9kZWR1cGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2RlZHVwZS5qc1wiKTtcblxudmFyIF9kZWR1cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVkdXBlKTtcblxudmFyIF9pY29ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaWNvbnMgKi8gXCIuL3NyYy9pY29ucy5qc1wiKTtcblxudmFyIF9pY29uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pY29ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmVwbGFjZSBhbGwgSFRNTCBlbGVtZW50cyB0aGF0IGhhdmUgYSBgZGF0YS1mZWF0aGVyYCBhdHRyaWJ1dGUgd2l0aCBTVkcgbWFya3VwXG4gKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBlbGVtZW50J3MgYGRhdGEtZmVhdGhlcmAgYXR0cmlidXRlIHZhbHVlLlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2UoKSB7XG4gIHZhciBhdHRycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmZWF0aGVyLnJlcGxhY2UoKWAgb25seSB3b3JrcyBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQuJyk7XG4gIH1cblxuICB2YXIgZWxlbWVudHNUb1JlcGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mZWF0aGVyXScpO1xuXG4gIEFycmF5LmZyb20oZWxlbWVudHNUb1JlcGxhY2UpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gcmVwbGFjZUVsZW1lbnQoZWxlbWVudCwgYXR0cnMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIGEgc2luZ2xlIEhUTUwgZWxlbWVudCB3aXRoIFNWRyBtYXJrdXBcbiAqIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGVsZW1lbnQncyBgZGF0YS1mZWF0aGVyYCBhdHRyaWJ1dGUgdmFsdWUuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxlbWVudCkge1xuICB2YXIgYXR0cnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIHZhciBlbGVtZW50QXR0cnMgPSBnZXRBdHRycyhlbGVtZW50KTtcbiAgdmFyIG5hbWUgPSBlbGVtZW50QXR0cnNbJ2RhdGEtZmVhdGhlciddO1xuICBkZWxldGUgZWxlbWVudEF0dHJzWydkYXRhLWZlYXRoZXInXTtcblxuICB2YXIgc3ZnU3RyaW5nID0gX2ljb25zMi5kZWZhdWx0W25hbWVdLnRvU3ZnKF9leHRlbmRzKHt9LCBhdHRycywgZWxlbWVudEF0dHJzLCB7IGNsYXNzOiAoMCwgX2RlZHVwZTIuZGVmYXVsdCkoYXR0cnMuY2xhc3MsIGVsZW1lbnRBdHRycy5jbGFzcykgfSkpO1xuICB2YXIgc3ZnRG9jdW1lbnQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN2Z1N0cmluZywgJ2ltYWdlL3N2Zyt4bWwnKTtcbiAgdmFyIHN2Z0VsZW1lbnQgPSBzdmdEb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcblxuICBlbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHN2Z0VsZW1lbnQsIGVsZW1lbnQpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgYXR0cmlidXRlcyBvZiBhbiBIVE1MIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRBdHRycyhlbGVtZW50KSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChhdHRycywgYXR0cikge1xuICAgIGF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIHJldHVybiBhdHRycztcbiAgfSwge30pO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSByZXBsYWNlO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90YWdzLmpzb25cIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3RhZ3MuanNvbiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogYWN0aXZpdHksIGFpcnBsYXksIGFsZXJ0LWNpcmNsZSwgYWxlcnQtb2N0YWdvbiwgYWxlcnQtdHJpYW5nbGUsIGFsaWduLWNlbnRlciwgYWxpZ24tanVzdGlmeSwgYWxpZ24tbGVmdCwgYWxpZ24tcmlnaHQsIGFuY2hvciwgYXJjaGl2ZSwgYXQtc2lnbiwgYXdhcmQsIGFwZXJ0dXJlLCBiYXItY2hhcnQsIGJhci1jaGFydC0yLCBiYXR0ZXJ5LCBiYXR0ZXJ5LWNoYXJnaW5nLCBiZWxsLCBiZWxsLW9mZiwgYmx1ZXRvb3RoLCBib29rLW9wZW4sIGJvb2ssIGJvb2ttYXJrLCBib3gsIGJyaWVmY2FzZSwgY2FsZW5kYXIsIGNhbWVyYSwgY2FzdCwgY2hldnJvbi1kb3duLCBjaGV2cm9uLXVwLCBjaXJjbGUsIGNsaXBib2FyZCwgY2xvY2ssIGNsb3VkLWRyaXp6bGUsIGNsb3VkLWxpZ2h0bmluZywgY2xvdWQtcmFpbiwgY2xvdWQtc25vdywgY2xvdWQsIGNvZGVwZW4sIGNvZGVzYW5kYm94LCBjb2RlLCBjb2ZmZWUsIGNvbHVtbnMsIGNvbW1hbmQsIGNvbXBhc3MsIGNvcHksIGNvcm5lci1kb3duLWxlZnQsIGNvcm5lci1kb3duLXJpZ2h0LCBjb3JuZXItbGVmdC1kb3duLCBjb3JuZXItbGVmdC11cCwgY29ybmVyLXJpZ2h0LWRvd24sIGNvcm5lci1yaWdodC11cCwgY29ybmVyLXVwLWxlZnQsIGNvcm5lci11cC1yaWdodCwgY3B1LCBjcmVkaXQtY2FyZCwgY3JvcCwgY3Jvc3NoYWlyLCBkYXRhYmFzZSwgZGVsZXRlLCBkaXNjLCBkb2xsYXItc2lnbiwgZHJvcGxldCwgZWRpdCwgZWRpdC0yLCBlZGl0LTMsIGV5ZSwgZXllLW9mZiwgZXh0ZXJuYWwtbGluaywgZmFjZWJvb2ssIGZhc3QtZm9yd2FyZCwgZmlnbWEsIGZpbGUtbWludXMsIGZpbGUtcGx1cywgZmlsZS10ZXh0LCBmaWxtLCBmaWx0ZXIsIGZsYWcsIGZvbGRlci1taW51cywgZm9sZGVyLXBsdXMsIGZvbGRlciwgZnJhbWVyLCBmcm93biwgZ2lmdCwgZ2l0LWJyYW5jaCwgZ2l0LWNvbW1pdCwgZ2l0LW1lcmdlLCBnaXQtcHVsbC1yZXF1ZXN0LCBnaXRodWIsIGdpdGxhYiwgZ2xvYmUsIGhhcmQtZHJpdmUsIGhhc2gsIGhlYWRwaG9uZXMsIGhlYXJ0LCBoZWxwLWNpcmNsZSwgaGV4YWdvbiwgaG9tZSwgaW1hZ2UsIGluYm94LCBpbnN0YWdyYW0sIGtleSwgbGF5ZXJzLCBsYXlvdXQsIGxpZmUtYnVveSwgbGluaywgbGluay0yLCBsaW5rZWRpbiwgbGlzdCwgbG9jaywgbG9nLWluLCBsb2ctb3V0LCBtYWlsLCBtYXAtcGluLCBtYXAsIG1heGltaXplLCBtYXhpbWl6ZS0yLCBtZWgsIG1lbnUsIG1lc3NhZ2UtY2lyY2xlLCBtZXNzYWdlLXNxdWFyZSwgbWljLW9mZiwgbWljLCBtaW5pbWl6ZSwgbWluaW1pemUtMiwgbWludXMsIG1vbml0b3IsIG1vb24sIG1vcmUtaG9yaXpvbnRhbCwgbW9yZS12ZXJ0aWNhbCwgbW91c2UtcG9pbnRlciwgbW92ZSwgbXVzaWMsIG5hdmlnYXRpb24sIG5hdmlnYXRpb24tMiwgb2N0YWdvbiwgcGFja2FnZSwgcGFwZXJjbGlwLCBwYXVzZSwgcGF1c2UtY2lyY2xlLCBwZW4tdG9vbCwgcGVyY2VudCwgcGhvbmUtY2FsbCwgcGhvbmUtZm9yd2FyZGVkLCBwaG9uZS1pbmNvbWluZywgcGhvbmUtbWlzc2VkLCBwaG9uZS1vZmYsIHBob25lLW91dGdvaW5nLCBwaG9uZSwgcGxheSwgcGllLWNoYXJ0LCBwbGF5LWNpcmNsZSwgcGx1cywgcGx1cy1jaXJjbGUsIHBsdXMtc3F1YXJlLCBwb2NrZXQsIHBvd2VyLCBwcmludGVyLCByYWRpbywgcmVmcmVzaC1jdywgcmVmcmVzaC1jY3csIHJlcGVhdCwgcmV3aW5kLCByb3RhdGUtY2N3LCByb3RhdGUtY3csIHJzcywgc2F2ZSwgc2Npc3NvcnMsIHNlYXJjaCwgc2VuZCwgc2V0dGluZ3MsIHNoYXJlLTIsIHNoaWVsZCwgc2hpZWxkLW9mZiwgc2hvcHBpbmctYmFnLCBzaG9wcGluZy1jYXJ0LCBzaHVmZmxlLCBza2lwLWJhY2ssIHNraXAtZm9yd2FyZCwgc2xhY2ssIHNsYXNoLCBzbGlkZXJzLCBzbWFydHBob25lLCBzbWlsZSwgc3BlYWtlciwgc3Rhciwgc3RvcC1jaXJjbGUsIHN1biwgc3VucmlzZSwgc3Vuc2V0LCB0YWJsZXQsIHRhZywgdGFyZ2V0LCB0ZXJtaW5hbCwgdGhlcm1vbWV0ZXIsIHRodW1icy1kb3duLCB0aHVtYnMtdXAsIHRvZ2dsZS1sZWZ0LCB0b2dnbGUtcmlnaHQsIHRvb2wsIHRyYXNoLCB0cmFzaC0yLCB0cmlhbmdsZSwgdHJ1Y2ssIHR2LCB0d2l0Y2gsIHR3aXR0ZXIsIHR5cGUsIHVtYnJlbGxhLCB1bmxvY2ssIHVzZXItY2hlY2ssIHVzZXItbWludXMsIHVzZXItcGx1cywgdXNlci14LCB1c2VyLCB1c2VycywgdmlkZW8tb2ZmLCB2aWRlbywgdm9pY2VtYWlsLCB2b2x1bWUsIHZvbHVtZS0xLCB2b2x1bWUtMiwgdm9sdW1lLXgsIHdhdGNoLCB3aWZpLW9mZiwgd2lmaSwgd2luZCwgeC1jaXJjbGUsIHgtb2N0YWdvbiwgeC1zcXVhcmUsIHgsIHlvdXR1YmUsIHphcC1vZmYsIHphcCwgem9vbS1pbiwgem9vbS1vdXQsIGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7XCJhY3Rpdml0eVwiOltcInB1bHNlXCIsXCJoZWFsdGhcIixcImFjdGlvblwiLFwibW90aW9uXCJdLFwiYWlycGxheVwiOltcInN0cmVhbVwiLFwiY2FzdFwiLFwibWlycm9yaW5nXCJdLFwiYWxlcnQtY2lyY2xlXCI6W1wid2FybmluZ1wiLFwiYWxlcnRcIixcImRhbmdlclwiXSxcImFsZXJ0LW9jdGFnb25cIjpbXCJ3YXJuaW5nXCIsXCJhbGVydFwiLFwiZGFuZ2VyXCJdLFwiYWxlcnQtdHJpYW5nbGVcIjpbXCJ3YXJuaW5nXCIsXCJhbGVydFwiLFwiZGFuZ2VyXCJdLFwiYWxpZ24tY2VudGVyXCI6W1widGV4dCBhbGlnbm1lbnRcIixcImNlbnRlclwiXSxcImFsaWduLWp1c3RpZnlcIjpbXCJ0ZXh0IGFsaWdubWVudFwiLFwianVzdGlmaWVkXCJdLFwiYWxpZ24tbGVmdFwiOltcInRleHQgYWxpZ25tZW50XCIsXCJsZWZ0XCJdLFwiYWxpZ24tcmlnaHRcIjpbXCJ0ZXh0IGFsaWdubWVudFwiLFwicmlnaHRcIl0sXCJhbmNob3JcIjpbXSxcImFyY2hpdmVcIjpbXCJpbmRleFwiLFwiYm94XCJdLFwiYXQtc2lnblwiOltcIm1lbnRpb25cIixcImF0XCIsXCJlbWFpbFwiLFwibWVzc2FnZVwiXSxcImF3YXJkXCI6W1wiYWNoaWV2ZW1lbnRcIixcImJhZGdlXCJdLFwiYXBlcnR1cmVcIjpbXCJjYW1lcmFcIixcInBob3RvXCJdLFwiYmFyLWNoYXJ0XCI6W1wic3RhdGlzdGljc1wiLFwiZGlhZ3JhbVwiLFwiZ3JhcGhcIl0sXCJiYXItY2hhcnQtMlwiOltcInN0YXRpc3RpY3NcIixcImRpYWdyYW1cIixcImdyYXBoXCJdLFwiYmF0dGVyeVwiOltcInBvd2VyXCIsXCJlbGVjdHJpY2l0eVwiXSxcImJhdHRlcnktY2hhcmdpbmdcIjpbXCJwb3dlclwiLFwiZWxlY3RyaWNpdHlcIl0sXCJiZWxsXCI6W1wiYWxhcm1cIixcIm5vdGlmaWNhdGlvblwiLFwic291bmRcIl0sXCJiZWxsLW9mZlwiOltcImFsYXJtXCIsXCJub3RpZmljYXRpb25cIixcInNpbGVudFwiXSxcImJsdWV0b290aFwiOltcIndpcmVsZXNzXCJdLFwiYm9vay1vcGVuXCI6W1wicmVhZFwiLFwibGlicmFyeVwiXSxcImJvb2tcIjpbXCJyZWFkXCIsXCJkaWN0aW9uYXJ5XCIsXCJib29rbGV0XCIsXCJtYWdhemluZVwiLFwibGlicmFyeVwiXSxcImJvb2ttYXJrXCI6W1wicmVhZFwiLFwiY2xpcFwiLFwibWFya2VyXCIsXCJ0YWdcIl0sXCJib3hcIjpbXCJjdWJlXCJdLFwiYnJpZWZjYXNlXCI6W1wid29ya1wiLFwiYmFnXCIsXCJiYWdnYWdlXCIsXCJmb2xkZXJcIl0sXCJjYWxlbmRhclwiOltcImRhdGVcIl0sXCJjYW1lcmFcIjpbXCJwaG90b1wiXSxcImNhc3RcIjpbXCJjaHJvbWVjYXN0XCIsXCJhaXJwbGF5XCJdLFwiY2hldnJvbi1kb3duXCI6W1wiZXhwYW5kXCJdLFwiY2hldnJvbi11cFwiOltcImNvbGxhcHNlXCJdLFwiY2lyY2xlXCI6W1wib2ZmXCIsXCJ6ZXJvXCIsXCJyZWNvcmRcIl0sXCJjbGlwYm9hcmRcIjpbXCJjb3B5XCJdLFwiY2xvY2tcIjpbXCJ0aW1lXCIsXCJ3YXRjaFwiLFwiYWxhcm1cIl0sXCJjbG91ZC1kcml6emxlXCI6W1wid2VhdGhlclwiLFwic2hvd2VyXCJdLFwiY2xvdWQtbGlnaHRuaW5nXCI6W1wid2VhdGhlclwiLFwiYm9sdFwiXSxcImNsb3VkLXJhaW5cIjpbXCJ3ZWF0aGVyXCJdLFwiY2xvdWQtc25vd1wiOltcIndlYXRoZXJcIixcImJsaXp6YXJkXCJdLFwiY2xvdWRcIjpbXCJ3ZWF0aGVyXCJdLFwiY29kZXBlblwiOltcImxvZ29cIl0sXCJjb2Rlc2FuZGJveFwiOltcImxvZ29cIl0sXCJjb2RlXCI6W1wic291cmNlXCIsXCJwcm9ncmFtbWluZ1wiXSxcImNvZmZlZVwiOltcImRyaW5rXCIsXCJjdXBcIixcIm11Z1wiLFwidGVhXCIsXCJjYWZlXCIsXCJob3RcIixcImJldmVyYWdlXCJdLFwiY29sdW1uc1wiOltcImxheW91dFwiXSxcImNvbW1hbmRcIjpbXCJrZXlib2FyZFwiLFwiY21kXCIsXCJ0ZXJtaW5hbFwiLFwicHJvbXB0XCJdLFwiY29tcGFzc1wiOltcIm5hdmlnYXRpb25cIixcInNhZmFyaVwiLFwidHJhdmVsXCIsXCJkaXJlY3Rpb25cIl0sXCJjb3B5XCI6W1wiY2xvbmVcIixcImR1cGxpY2F0ZVwiXSxcImNvcm5lci1kb3duLWxlZnRcIjpbXCJhcnJvd1wiLFwicmV0dXJuXCJdLFwiY29ybmVyLWRvd24tcmlnaHRcIjpbXCJhcnJvd1wiXSxcImNvcm5lci1sZWZ0LWRvd25cIjpbXCJhcnJvd1wiXSxcImNvcm5lci1sZWZ0LXVwXCI6W1wiYXJyb3dcIl0sXCJjb3JuZXItcmlnaHQtZG93blwiOltcImFycm93XCJdLFwiY29ybmVyLXJpZ2h0LXVwXCI6W1wiYXJyb3dcIl0sXCJjb3JuZXItdXAtbGVmdFwiOltcImFycm93XCJdLFwiY29ybmVyLXVwLXJpZ2h0XCI6W1wiYXJyb3dcIl0sXCJjcHVcIjpbXCJwcm9jZXNzb3JcIixcInRlY2hub2xvZ3lcIl0sXCJjcmVkaXQtY2FyZFwiOltcInB1cmNoYXNlXCIsXCJwYXltZW50XCIsXCJjY1wiXSxcImNyb3BcIjpbXCJwaG90b1wiLFwiaW1hZ2VcIl0sXCJjcm9zc2hhaXJcIjpbXCJhaW1cIixcInRhcmdldFwiXSxcImRhdGFiYXNlXCI6W1wic3RvcmFnZVwiLFwibWVtb3J5XCJdLFwiZGVsZXRlXCI6W1wicmVtb3ZlXCJdLFwiZGlzY1wiOltcImFsYnVtXCIsXCJjZFwiLFwiZHZkXCIsXCJtdXNpY1wiXSxcImRvbGxhci1zaWduXCI6W1wiY3VycmVuY3lcIixcIm1vbmV5XCIsXCJwYXltZW50XCJdLFwiZHJvcGxldFwiOltcIndhdGVyXCJdLFwiZWRpdFwiOltcInBlbmNpbFwiLFwiY2hhbmdlXCJdLFwiZWRpdC0yXCI6W1wicGVuY2lsXCIsXCJjaGFuZ2VcIl0sXCJlZGl0LTNcIjpbXCJwZW5jaWxcIixcImNoYW5nZVwiXSxcImV5ZVwiOltcInZpZXdcIixcIndhdGNoXCJdLFwiZXllLW9mZlwiOltcInZpZXdcIixcIndhdGNoXCIsXCJoaWRlXCIsXCJoaWRkZW5cIl0sXCJleHRlcm5hbC1saW5rXCI6W1wib3V0Ym91bmRcIl0sXCJmYWNlYm9va1wiOltcImxvZ29cIixcInNvY2lhbFwiXSxcImZhc3QtZm9yd2FyZFwiOltcIm11c2ljXCJdLFwiZmlnbWFcIjpbXCJsb2dvXCIsXCJkZXNpZ25cIixcInRvb2xcIl0sXCJmaWxlLW1pbnVzXCI6W1wiZGVsZXRlXCIsXCJyZW1vdmVcIixcImVyYXNlXCJdLFwiZmlsZS1wbHVzXCI6W1wiYWRkXCIsXCJjcmVhdGVcIixcIm5ld1wiXSxcImZpbGUtdGV4dFwiOltcImRhdGFcIixcInR4dFwiLFwicGRmXCJdLFwiZmlsbVwiOltcIm1vdmllXCIsXCJ2aWRlb1wiXSxcImZpbHRlclwiOltcImZ1bm5lbFwiLFwiaG9wcGVyXCJdLFwiZmxhZ1wiOltcInJlcG9ydFwiXSxcImZvbGRlci1taW51c1wiOltcImRpcmVjdG9yeVwiXSxcImZvbGRlci1wbHVzXCI6W1wiZGlyZWN0b3J5XCJdLFwiZm9sZGVyXCI6W1wiZGlyZWN0b3J5XCJdLFwiZnJhbWVyXCI6W1wibG9nb1wiLFwiZGVzaWduXCIsXCJ0b29sXCJdLFwiZnJvd25cIjpbXCJlbW9qaVwiLFwiZmFjZVwiLFwiYmFkXCIsXCJzYWRcIixcImVtb3Rpb25cIl0sXCJnaWZ0XCI6W1wicHJlc2VudFwiLFwiYm94XCIsXCJiaXJ0aGRheVwiLFwicGFydHlcIl0sXCJnaXQtYnJhbmNoXCI6W1wiY29kZVwiLFwidmVyc2lvbiBjb250cm9sXCJdLFwiZ2l0LWNvbW1pdFwiOltcImNvZGVcIixcInZlcnNpb24gY29udHJvbFwiXSxcImdpdC1tZXJnZVwiOltcImNvZGVcIixcInZlcnNpb24gY29udHJvbFwiXSxcImdpdC1wdWxsLXJlcXVlc3RcIjpbXCJjb2RlXCIsXCJ2ZXJzaW9uIGNvbnRyb2xcIl0sXCJnaXRodWJcIjpbXCJsb2dvXCIsXCJ2ZXJzaW9uIGNvbnRyb2xcIl0sXCJnaXRsYWJcIjpbXCJsb2dvXCIsXCJ2ZXJzaW9uIGNvbnRyb2xcIl0sXCJnbG9iZVwiOltcIndvcmxkXCIsXCJicm93c2VyXCIsXCJsYW5ndWFnZVwiLFwidHJhbnNsYXRlXCJdLFwiaGFyZC1kcml2ZVwiOltcImNvbXB1dGVyXCIsXCJzZXJ2ZXJcIixcIm1lbW9yeVwiLFwiZGF0YVwiXSxcImhhc2hcIjpbXCJoYXNodGFnXCIsXCJudW1iZXJcIixcInBvdW5kXCJdLFwiaGVhZHBob25lc1wiOltcIm11c2ljXCIsXCJhdWRpb1wiLFwic291bmRcIl0sXCJoZWFydFwiOltcImxpa2VcIixcImxvdmVcIixcImVtb3Rpb25cIl0sXCJoZWxwLWNpcmNsZVwiOltcInF1ZXN0aW9uIG1hcmtcIl0sXCJoZXhhZ29uXCI6W1wic2hhcGVcIixcIm5vZGUuanNcIixcImxvZ29cIl0sXCJob21lXCI6W1wiaG91c2VcIixcImxpdmluZ1wiXSxcImltYWdlXCI6W1wicGljdHVyZVwiXSxcImluYm94XCI6W1wiZW1haWxcIl0sXCJpbnN0YWdyYW1cIjpbXCJsb2dvXCIsXCJjYW1lcmFcIl0sXCJrZXlcIjpbXCJwYXNzd29yZFwiLFwibG9naW5cIixcImF1dGhlbnRpY2F0aW9uXCIsXCJzZWN1cmVcIl0sXCJsYXllcnNcIjpbXCJzdGFja1wiXSxcImxheW91dFwiOltcIndpbmRvd1wiLFwid2VicGFnZVwiXSxcImxpZmUtYnVveVwiOltcImhlbHBcIixcImxpZmUgcmluZ1wiLFwic3VwcG9ydFwiXSxcImxpbmtcIjpbXCJjaGFpblwiLFwidXJsXCJdLFwibGluay0yXCI6W1wiY2hhaW5cIixcInVybFwiXSxcImxpbmtlZGluXCI6W1wibG9nb1wiLFwic29jaWFsIG1lZGlhXCJdLFwibGlzdFwiOltcIm9wdGlvbnNcIl0sXCJsb2NrXCI6W1wic2VjdXJpdHlcIixcInBhc3N3b3JkXCIsXCJzZWN1cmVcIl0sXCJsb2ctaW5cIjpbXCJzaWduIGluXCIsXCJhcnJvd1wiLFwiZW50ZXJcIl0sXCJsb2ctb3V0XCI6W1wic2lnbiBvdXRcIixcImFycm93XCIsXCJleGl0XCJdLFwibWFpbFwiOltcImVtYWlsXCIsXCJtZXNzYWdlXCJdLFwibWFwLXBpblwiOltcImxvY2F0aW9uXCIsXCJuYXZpZ2F0aW9uXCIsXCJ0cmF2ZWxcIixcIm1hcmtlclwiXSxcIm1hcFwiOltcImxvY2F0aW9uXCIsXCJuYXZpZ2F0aW9uXCIsXCJ0cmF2ZWxcIl0sXCJtYXhpbWl6ZVwiOltcImZ1bGxzY3JlZW5cIl0sXCJtYXhpbWl6ZS0yXCI6W1wiZnVsbHNjcmVlblwiLFwiYXJyb3dzXCIsXCJleHBhbmRcIl0sXCJtZWhcIjpbXCJlbW9qaVwiLFwiZmFjZVwiLFwibmV1dHJhbFwiLFwiZW1vdGlvblwiXSxcIm1lbnVcIjpbXCJiYXJzXCIsXCJuYXZpZ2F0aW9uXCIsXCJoYW1idXJnZXJcIl0sXCJtZXNzYWdlLWNpcmNsZVwiOltcImNvbW1lbnRcIixcImNoYXRcIl0sXCJtZXNzYWdlLXNxdWFyZVwiOltcImNvbW1lbnRcIixcImNoYXRcIl0sXCJtaWMtb2ZmXCI6W1wicmVjb3JkXCIsXCJzb3VuZFwiLFwibXV0ZVwiXSxcIm1pY1wiOltcInJlY29yZFwiLFwic291bmRcIixcImxpc3RlblwiXSxcIm1pbmltaXplXCI6W1wiZXhpdCBmdWxsc2NyZWVuXCIsXCJjbG9zZVwiXSxcIm1pbmltaXplLTJcIjpbXCJleGl0IGZ1bGxzY3JlZW5cIixcImFycm93c1wiLFwiY2xvc2VcIl0sXCJtaW51c1wiOltcInN1YnRyYWN0XCJdLFwibW9uaXRvclwiOltcInR2XCIsXCJzY3JlZW5cIixcImRpc3BsYXlcIl0sXCJtb29uXCI6W1wiZGFya1wiLFwibmlnaHRcIl0sXCJtb3JlLWhvcml6b250YWxcIjpbXCJlbGxpcHNpc1wiXSxcIm1vcmUtdmVydGljYWxcIjpbXCJlbGxpcHNpc1wiXSxcIm1vdXNlLXBvaW50ZXJcIjpbXCJhcnJvd1wiLFwiY3Vyc29yXCJdLFwibW92ZVwiOltcImFycm93c1wiXSxcIm11c2ljXCI6W1wibm90ZVwiXSxcIm5hdmlnYXRpb25cIjpbXCJsb2NhdGlvblwiLFwidHJhdmVsXCJdLFwibmF2aWdhdGlvbi0yXCI6W1wibG9jYXRpb25cIixcInRyYXZlbFwiXSxcIm9jdGFnb25cIjpbXCJzdG9wXCJdLFwicGFja2FnZVwiOltcImJveFwiLFwiY29udGFpbmVyXCJdLFwicGFwZXJjbGlwXCI6W1wiYXR0YWNobWVudFwiXSxcInBhdXNlXCI6W1wibXVzaWNcIixcInN0b3BcIl0sXCJwYXVzZS1jaXJjbGVcIjpbXCJtdXNpY1wiLFwiYXVkaW9cIixcInN0b3BcIl0sXCJwZW4tdG9vbFwiOltcInZlY3RvclwiLFwiZHJhd2luZ1wiXSxcInBlcmNlbnRcIjpbXCJkaXNjb3VudFwiXSxcInBob25lLWNhbGxcIjpbXCJyaW5nXCJdLFwicGhvbmUtZm9yd2FyZGVkXCI6W1wiY2FsbFwiXSxcInBob25lLWluY29taW5nXCI6W1wiY2FsbFwiXSxcInBob25lLW1pc3NlZFwiOltcImNhbGxcIl0sXCJwaG9uZS1vZmZcIjpbXCJjYWxsXCIsXCJtdXRlXCJdLFwicGhvbmUtb3V0Z29pbmdcIjpbXCJjYWxsXCJdLFwicGhvbmVcIjpbXCJjYWxsXCJdLFwicGxheVwiOltcIm11c2ljXCIsXCJzdGFydFwiXSxcInBpZS1jaGFydFwiOltcInN0YXRpc3RpY3NcIixcImRpYWdyYW1cIl0sXCJwbGF5LWNpcmNsZVwiOltcIm11c2ljXCIsXCJzdGFydFwiXSxcInBsdXNcIjpbXCJhZGRcIixcIm5ld1wiXSxcInBsdXMtY2lyY2xlXCI6W1wiYWRkXCIsXCJuZXdcIl0sXCJwbHVzLXNxdWFyZVwiOltcImFkZFwiLFwibmV3XCJdLFwicG9ja2V0XCI6W1wibG9nb1wiLFwic2F2ZVwiXSxcInBvd2VyXCI6W1wib25cIixcIm9mZlwiXSxcInByaW50ZXJcIjpbXCJmYXhcIixcIm9mZmljZVwiLFwiZGV2aWNlXCJdLFwicmFkaW9cIjpbXCJzaWduYWxcIl0sXCJyZWZyZXNoLWN3XCI6W1wic3luY2hyb25pc2VcIixcImFycm93c1wiXSxcInJlZnJlc2gtY2N3XCI6W1wiYXJyb3dzXCJdLFwicmVwZWF0XCI6W1wibG9vcFwiLFwiYXJyb3dzXCJdLFwicmV3aW5kXCI6W1wibXVzaWNcIl0sXCJyb3RhdGUtY2N3XCI6W1wiYXJyb3dcIl0sXCJyb3RhdGUtY3dcIjpbXCJhcnJvd1wiXSxcInJzc1wiOltcImZlZWRcIixcInN1YnNjcmliZVwiXSxcInNhdmVcIjpbXCJmbG9wcHkgZGlza1wiXSxcInNjaXNzb3JzXCI6W1wiY3V0XCJdLFwic2VhcmNoXCI6W1wiZmluZFwiLFwibWFnbmlmaWVyXCIsXCJtYWduaWZ5aW5nIGdsYXNzXCJdLFwic2VuZFwiOltcIm1lc3NhZ2VcIixcIm1haWxcIixcImVtYWlsXCIsXCJwYXBlciBhaXJwbGFuZVwiLFwicGFwZXIgYWVyb3BsYW5lXCJdLFwic2V0dGluZ3NcIjpbXCJjb2dcIixcImVkaXRcIixcImdlYXJcIixcInByZWZlcmVuY2VzXCJdLFwic2hhcmUtMlwiOltcIm5ldHdvcmtcIixcImNvbm5lY3Rpb25zXCJdLFwic2hpZWxkXCI6W1wic2VjdXJpdHlcIixcInNlY3VyZVwiXSxcInNoaWVsZC1vZmZcIjpbXCJzZWN1cml0eVwiLFwiaW5zZWN1cmVcIl0sXCJzaG9wcGluZy1iYWdcIjpbXCJlY29tbWVyY2VcIixcImNhcnRcIixcInB1cmNoYXNlXCIsXCJzdG9yZVwiXSxcInNob3BwaW5nLWNhcnRcIjpbXCJlY29tbWVyY2VcIixcImNhcnRcIixcInB1cmNoYXNlXCIsXCJzdG9yZVwiXSxcInNodWZmbGVcIjpbXCJtdXNpY1wiXSxcInNraXAtYmFja1wiOltcIm11c2ljXCJdLFwic2tpcC1mb3J3YXJkXCI6W1wibXVzaWNcIl0sXCJzbGFja1wiOltcImxvZ29cIl0sXCJzbGFzaFwiOltcImJhblwiLFwibm9cIl0sXCJzbGlkZXJzXCI6W1wic2V0dGluZ3NcIixcImNvbnRyb2xzXCJdLFwic21hcnRwaG9uZVwiOltcImNlbGxwaG9uZVwiLFwiZGV2aWNlXCJdLFwic21pbGVcIjpbXCJlbW9qaVwiLFwiZmFjZVwiLFwiaGFwcHlcIixcImdvb2RcIixcImVtb3Rpb25cIl0sXCJzcGVha2VyXCI6W1wiYXVkaW9cIixcIm11c2ljXCJdLFwic3RhclwiOltcImJvb2ttYXJrXCIsXCJmYXZvcml0ZVwiLFwibGlrZVwiXSxcInN0b3AtY2lyY2xlXCI6W1wibWVkaWFcIixcIm11c2ljXCJdLFwic3VuXCI6W1wiYnJpZ2h0bmVzc1wiLFwid2VhdGhlclwiLFwibGlnaHRcIl0sXCJzdW5yaXNlXCI6W1wid2VhdGhlclwiLFwidGltZVwiLFwibW9ybmluZ1wiLFwiZGF5XCJdLFwic3Vuc2V0XCI6W1wid2VhdGhlclwiLFwidGltZVwiLFwiZXZlbmluZ1wiLFwibmlnaHRcIl0sXCJ0YWJsZXRcIjpbXCJkZXZpY2VcIl0sXCJ0YWdcIjpbXCJsYWJlbFwiXSxcInRhcmdldFwiOltcImxvZ29cIixcImJ1bGxzZXllXCJdLFwidGVybWluYWxcIjpbXCJjb2RlXCIsXCJjb21tYW5kIGxpbmVcIixcInByb21wdFwiXSxcInRoZXJtb21ldGVyXCI6W1widGVtcGVyYXR1cmVcIixcImNlbHNpdXNcIixcImZhaHJlbmhlaXRcIixcIndlYXRoZXJcIl0sXCJ0aHVtYnMtZG93blwiOltcImRpc2xpa2VcIixcImJhZFwiLFwiZW1vdGlvblwiXSxcInRodW1icy11cFwiOltcImxpa2VcIixcImdvb2RcIixcImVtb3Rpb25cIl0sXCJ0b2dnbGUtbGVmdFwiOltcIm9uXCIsXCJvZmZcIixcInN3aXRjaFwiXSxcInRvZ2dsZS1yaWdodFwiOltcIm9uXCIsXCJvZmZcIixcInN3aXRjaFwiXSxcInRvb2xcIjpbXCJzZXR0aW5nc1wiLFwic3Bhbm5lclwiXSxcInRyYXNoXCI6W1wiZ2FyYmFnZVwiLFwiZGVsZXRlXCIsXCJyZW1vdmVcIixcImJpblwiXSxcInRyYXNoLTJcIjpbXCJnYXJiYWdlXCIsXCJkZWxldGVcIixcInJlbW92ZVwiLFwiYmluXCJdLFwidHJpYW5nbGVcIjpbXCJkZWx0YVwiXSxcInRydWNrXCI6W1wiZGVsaXZlcnlcIixcInZhblwiLFwic2hpcHBpbmdcIixcInRyYW5zcG9ydFwiLFwibG9ycnlcIl0sXCJ0dlwiOltcInRlbGV2aXNpb25cIixcInN0cmVhbVwiXSxcInR3aXRjaFwiOltcImxvZ29cIl0sXCJ0d2l0dGVyXCI6W1wibG9nb1wiLFwic29jaWFsXCJdLFwidHlwZVwiOltcInRleHRcIl0sXCJ1bWJyZWxsYVwiOltcInJhaW5cIixcIndlYXRoZXJcIl0sXCJ1bmxvY2tcIjpbXCJzZWN1cml0eVwiXSxcInVzZXItY2hlY2tcIjpbXCJmb2xsb3dlZFwiLFwic3Vic2NyaWJlZFwiXSxcInVzZXItbWludXNcIjpbXCJkZWxldGVcIixcInJlbW92ZVwiLFwidW5mb2xsb3dcIixcInVuc3Vic2NyaWJlXCJdLFwidXNlci1wbHVzXCI6W1wibmV3XCIsXCJhZGRcIixcImNyZWF0ZVwiLFwiZm9sbG93XCIsXCJzdWJzY3JpYmVcIl0sXCJ1c2VyLXhcIjpbXCJkZWxldGVcIixcInJlbW92ZVwiLFwidW5mb2xsb3dcIixcInVuc3Vic2NyaWJlXCIsXCJ1bmF2YWlsYWJsZVwiXSxcInVzZXJcIjpbXCJwZXJzb25cIixcImFjY291bnRcIl0sXCJ1c2Vyc1wiOltcImdyb3VwXCJdLFwidmlkZW8tb2ZmXCI6W1wiY2FtZXJhXCIsXCJtb3ZpZVwiLFwiZmlsbVwiXSxcInZpZGVvXCI6W1wiY2FtZXJhXCIsXCJtb3ZpZVwiLFwiZmlsbVwiXSxcInZvaWNlbWFpbFwiOltcInBob25lXCJdLFwidm9sdW1lXCI6W1wibXVzaWNcIixcInNvdW5kXCIsXCJtdXRlXCJdLFwidm9sdW1lLTFcIjpbXCJtdXNpY1wiLFwic291bmRcIl0sXCJ2b2x1bWUtMlwiOltcIm11c2ljXCIsXCJzb3VuZFwiXSxcInZvbHVtZS14XCI6W1wibXVzaWNcIixcInNvdW5kXCIsXCJtdXRlXCJdLFwid2F0Y2hcIjpbXCJjbG9ja1wiLFwidGltZVwiXSxcIndpZmktb2ZmXCI6W1wiZGlzYWJsZWRcIl0sXCJ3aWZpXCI6W1wiY29ubmVjdGlvblwiLFwic2lnbmFsXCIsXCJ3aXJlbGVzc1wiXSxcIndpbmRcIjpbXCJ3ZWF0aGVyXCIsXCJhaXJcIl0sXCJ4LWNpcmNsZVwiOltcImNhbmNlbFwiLFwiY2xvc2VcIixcImRlbGV0ZVwiLFwicmVtb3ZlXCIsXCJ0aW1lc1wiLFwiY2xlYXJcIl0sXCJ4LW9jdGFnb25cIjpbXCJkZWxldGVcIixcInN0b3BcIixcImFsZXJ0XCIsXCJ3YXJuaW5nXCIsXCJ0aW1lc1wiLFwiY2xlYXJcIl0sXCJ4LXNxdWFyZVwiOltcImNhbmNlbFwiLFwiY2xvc2VcIixcImRlbGV0ZVwiLFwicmVtb3ZlXCIsXCJ0aW1lc1wiLFwiY2xlYXJcIl0sXCJ4XCI6W1wiY2FuY2VsXCIsXCJjbG9zZVwiLFwiZGVsZXRlXCIsXCJyZW1vdmVcIixcInRpbWVzXCIsXCJjbGVhclwiXSxcInlvdXR1YmVcIjpbXCJsb2dvXCIsXCJ2aWRlb1wiLFwicGxheVwiXSxcInphcC1vZmZcIjpbXCJmbGFzaFwiLFwiY2FtZXJhXCIsXCJsaWdodG5pbmdcIl0sXCJ6YXBcIjpbXCJmbGFzaFwiLFwiY2FtZXJhXCIsXCJsaWdodG5pbmdcIl0sXCJ6b29tLWluXCI6W1wibWFnbmlmeWluZyBnbGFzc1wiXSxcInpvb20tb3V0XCI6W1wibWFnbmlmeWluZyBnbGFzc1wiXX07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3RvLXN2Zy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdG8tc3ZnLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2ljb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9pY29ucyAqLyBcIi4vc3JjL2ljb25zLmpzXCIpO1xuXG52YXIgX2ljb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ljb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGUgYW4gU1ZHIHN0cmluZy5cbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1N2ZyhuYW1lKSB7XG4gIHZhciBhdHRycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgY29uc29sZS53YXJuKCdmZWF0aGVyLnRvU3ZnKCkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBmZWF0aGVyLmljb25zW25hbWVdLnRvU3ZnKCkgaW5zdGVhZC4nKTtcblxuICBpZiAoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByZXF1aXJlZCBga2V5YCAoaWNvbiBuYW1lKSBwYXJhbWV0ZXIgaXMgbWlzc2luZy4nKTtcbiAgfVxuXG4gIGlmICghX2ljb25zMi5kZWZhdWx0W25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBpY29uIG1hdGNoaW5nIFxcJycgKyBuYW1lICsgJ1xcJy4gU2VlIHRoZSBjb21wbGV0ZSBsaXN0IG9mIGljb25zIGF0IGh0dHBzOi8vZmVhdGhlcmljb25zLmNvbScpO1xuICB9XG5cbiAgcmV0dXJuIF9pY29uczIuZGVmYXVsdFtuYW1lXS50b1N2ZyhhdHRycyk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRvU3ZnO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIG11bHRpIGNvcmUtanMvZXMvYXJyYXkvZnJvbSAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29yZS1qcy9lcy9hcnJheS9mcm9tICovXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2VzL2FycmF5L2Zyb20uanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC9ob21lL3J1bm5lci93b3JrL2ZlYXRoZXIvZmVhdGhlci9zcmMvaW5kZXguanMgKi9cIi4vc3JjL2luZGV4LmpzXCIpO1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZWF0aGVyLmpzLm1hcCIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImNvbnN0IGRheXNPZldlZWsgPSBbJ3N1bmRheScsICdtb25kYXknLCAndHVlc2RheScsICd3ZWRuZXNkYXknLCAndGh1cnNkYXknLCAnZnJpZGF5JywgJ3NhdHVyZGF5J107XG5cbmNvbnN0IHByaW9yaXRpZXMgPSBbXG4gICAgMSxcbiAgICAyLFxuICAgIDMsXG4gICAgNFxuXTtcblxuY29uc3QgZGVmYXVsdFJvdXRlID0gXCJ0b2RheVwiO1xuXG5leHBvcnQge2RheXNPZldlZWssIHByaW9yaXRpZXMsIGRlZmF1bHRSb3V0ZX0iLCJpbXBvcnQgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgZnJvbSBcIi4uL3V0aWxzL2NoZWNrU3RvcmFnZVwiO1xuaW1wb3J0IHsgY2hlY2tsaXN0VGVtcGxhdGUsIHByb2plY3RzVGVtcGxhdGUsIHRhc2tzVGVtcGxhdGUgfSBmcm9tIFwiLi9kYXRhU3RydWN0XCI7XG5cbmNvbnN0IHRhc2tzID0gaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgPyB0YXNrc1RlbXBsYXRlKGdldFBhcnNlZEl0ZW0oXCJ0YXNrc1wiKSkgOiB0YXNrc1RlbXBsYXRlKCk7XG5jb25zdCBwcm9qZWN0cyA9IGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlID8gcHJvamVjdHNUZW1wbGF0ZShnZXRQYXJzZWRJdGVtKFwicHJvamVjdHNcIikpIDogcHJvamVjdHNUZW1wbGF0ZSgpO1xuY29uc3QgY2hlY2tsaXN0ID0gaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgPyBjaGVja2xpc3RUZW1wbGF0ZShnZXRQYXJzZWRJdGVtKFwiY2hlY2tsaXN0XCIpKSA6IGNoZWNrbGlzdFRlbXBsYXRlKCk7XG5cbmZ1bmN0aW9uIGdldFBhcnNlZEl0ZW0gKGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufVxuZXhwb3J0IHt0YXNrcywgcHJvamVjdHMsIGNoZWNrbGlzdH07IiwiaW1wb3J0IHsgZm9ybWF0SVNPLCBpc0FmdGVyLCBpc0JlZm9yZSwgaXNTYW1lRGF5LCBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgZnJvbSBcIi4uL3V0aWxzL2NoZWNrU3RvcmFnZVwiO1xuaW1wb3J0IHsgY2hlY2tsaXN0LCBwcm9qZWN0cywgdGFza3MgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBkYXlzT2ZXZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZXRSb3V0ZSB9IGZyb20gXCIuLi9yb3V0aW5nL3JvdXRlc1wiO1xuaW1wb3J0IHsgdXBkYXRlVG9kYXlWaWV3IH0gZnJvbSBcIi4uL3BhZ2VzL3RvZGF5XCI7XG5cbmZ1bmN0aW9uIHNldFRhc2tBc0NvbXBsZXRlZCAodGFza0lkLCBkYXRlID0gbmV3IERhdGUoKSkge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5nZXQodGFza0lkKTtcblxuICAgIGlmICghdGFzaykgdGhyb3cgbmV3IEVycm9yIChcIkludmFsaWQgVGFzayBJZFwiKTtcblxuICAgIC8vIElmIG9uZSB0aW1lIHRhc2ssIGRlbGV0ZSBmcm9tIHRhc2sgbGlzdFxuICAgIGlmICh0YXNrLmRhdGUpIHtcbiAgICAgICAgdGFza3MucmVtb3ZlKHRhc2tJZCk7XG4gICAgICAgIHVwZGF0ZURhdGEoXCJ0YXNrc1wiLCB0YXNrcy5saXN0KTtcbiAgICAgICAgLy8gQWRkIHRvIGNoZWNrbGlzdFxuICAgICAgICBjaGVja2xpc3QuYWRkKHRhc2spO1xuICAgICAgICB1cGRhdGVEYXRhKFwiY2hlY2tsaXN0XCIsIGNoZWNrbGlzdC5saXN0KTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuXG4gICAgLy8gZWxzZVxuICAgIGNvbnN0IGNoZWNrTGlzdFRhc2sgPSBjaGVja2xpc3QuZ2V0KHRhc2tJZCk7XG4gICAgLy8gSWYgdGFzayBhbHJlYWR5IGluIGNoZWNrbGlzdFxuICAgIGlmIChjaGVja0xpc3RUYXNrKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgZGF0ZSBvZiBjb21wbGV0aW9uXG4gICAgICAgIGNoZWNrTGlzdFRhc2suZGF0ZSA9IGRhdGU7XG4gICAgICAgIHVwZGF0ZURhdGEoXCJjaGVja2xpc3RcIiwgY2hlY2tsaXN0Lmxpc3QpO1xuXG4gICAgICAgIGlmIChnZXRSb3V0ZSgpID09PSBcInVwY29taW5nXCIpIHVwZGF0ZVRvZGF5VmlldygpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIC8vIGVsc2VcblxuICAgIGNvbnN0IGNsb25lZFRhc2sgPSBzdHJ1Y3R1cmVkQ2xvbmUodGFzayk7XG4gICAgLy8gQWRkIHRoZSBkYXRlIG9mIHRhc2sgYWRkZWQgdG8gY2hlY2tsaXN0IHRvIHJlbW92ZSBpdCBsYXRlclxuICAgIGNsb25lZFRhc2suZGF0ZSA9IGZvcm1hdElTTyhkYXRlLCB7IHJlcHJlc2VudGF0aW9uOiAnZGF0ZScgfSk7XG4gICAgY2hlY2tsaXN0LmFkZChjbG9uZWRUYXNrKTtcbiAgICB1cGRhdGVEYXRhKFwiY2hlY2tsaXN0XCIsIGNoZWNrbGlzdC5saXN0KTtcblxuICAgIGlmIChnZXRSb3V0ZSgpID09PSBcInVwY29taW5nXCIpIHVwZGF0ZVRvZGF5VmlldygpO1xuXG4gICAgcmV0dXJuIGNsb25lZFRhc2s7XG5cbn1cblxuZnVuY3Rpb24gdW5kb1Rhc2tDb21wbGV0aW9uICh0YXNrSWQpIHtcbiAgICBjb25zdCB0YXNrID0gY2hlY2tsaXN0LnJlbW92ZSh0YXNrSWQpO1xuXG4gICAgaWYgKCF0YXNrKSB0aHJvdyBuZXcgRXJyb3IgKFwiSW52YWxpZCBUYXNrIElkXCIpO1xuXG4gICAgdXBkYXRlRGF0YShcImNoZWNrbGlzdFwiLCBjaGVja2xpc3QubGlzdCk7XG4gICAgLy8gSWYgb25lIHRpbWUgdGFzaywgYWRkIGl0IHRvIHRhc2sgbGlzdFxuICAgIGlmICghKHRhc2sucmVwZWF0ICYmIHRhc2sucmVwZWF0Lmxlbmd0aCkpIHtcbiAgICAgICAgdGFza3MuYWRkKHRhc2spO1xuICAgICAgICB1cGRhdGVEYXRhKFwidGFza3NcIiwgdGFza3MubGlzdCk7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICByZXR1cm4gdGFza3MuZ2V0KHRhc2tJZCk7XG59XG5cbmZ1bmN0aW9uIGlzRGVhZGxpbmVUb2RheSh0YXNrKSB7XG4gICAgaWYgKCF0YXNrIHx8IHR5cGVvZiB0YXNrICE9PSAnb2JqZWN0JykgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBUYXNrXCIpO1xuXG4gICAgY29uc3QgdG9kYXlEYXkgPSBkYXlzT2ZXZWVrWyhuZXcgRGF0ZSgpKS5nZXREYXkoKV1cbiAgICByZXR1cm4gaXNUb2RheSh0YXNrLmRhdGUpIHx8ICh0YXNrLnJlcGVhdCAmJiB0YXNrLnJlcGVhdC5pbmNsdWRlcyh0b2RheURheSkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0VGFza3MgKHBJZCkge1xuICAgIHJldHVybiB0YXNrcy5nZXRUYXNrc0J5UHJvamVjdElkKHBJZCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tQcm9qZWN0ICh0YXNrSWQpIHtcbiAgICBjb25zdCB0YXNrID0gdGFza3MuZ2V0KHRhc2tJZCk7XG4gICAgaWYgKCF0YXNrKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFRhc2sgSURcIik7XG5cbiAgICByZXR1cm4gcHJvamVjdHMuZ2V0KHRhc2sucHJvamVjdElkKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hlY2tsaXN0VGFza1Byb2plY3QgKHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2sgPSBjaGVja2xpc3QuZ2V0KHRhc2tJZCk7XG4gICAgaWYgKCF0YXNrKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFRhc2sgSURcIik7XG5cbiAgICByZXR1cm4gcHJvamVjdHMuZ2V0KHRhc2sucHJvamVjdElkKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUpIHJldHVybjtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckluY29tcGxldGVUYXNrcyAobGlzdCwgZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQXJndW1lbnRcIik7XG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRhc2sgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEFyZ3VtZW50XCIpO1xuICAgICAgICByZXR1cm4gdGFzay5kYXRlIHx8ICFjaGVja2xpc3QuZ2V0KHRhc2suaWQpIHx8ICEoaXNTYW1lRGF5KGNoZWNrbGlzdC5nZXQodGFzay5pZCkuZGF0ZSwgZGF0ZSkgfHwgaXNBZnRlcihjaGVja2xpc3QuZ2V0KHRhc2suaWQpLmRhdGUsIGRhdGUpKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKHBJZCkge1xuICAgIGdldFByb2plY3RUYXNrcyhwSWQpLmZvckVhY2goKHRhc2spID0+IHRhc2tzLnJlbW92ZSh0YXNrLmlkKSk7XG4gICAgdXBkYXRlRGF0YShcInRhc2tzXCIsIHRhc2tzLmxpc3QpO1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5yZW1vdmUocElkKTtcbiAgICB1cGRhdGVEYXRhKFwicHJvamVjdHNcIiwgcHJvamVjdHMubGlzdCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCB7XG4gICAgc2V0VGFza0FzQ29tcGxldGVkLFxuICAgIHVuZG9UYXNrQ29tcGxldGlvbixcbiAgICBnZXRQcm9qZWN0VGFza3MsXG4gICAgZ2V0VGFza1Byb2plY3QsXG4gICAgZ2V0Q2hlY2tsaXN0VGFza1Byb2plY3QsXG4gICAgdXBkYXRlRGF0YSxcbiAgICBmaWx0ZXJJbmNvbXBsZXRlVGFza3MsXG4gICAgaXNEZWFkbGluZVRvZGF5LFxuICAgIGRlbGV0ZVByb2plY3Rcbn1cbiIsImltcG9ydCB7IGZvcm1hdElTTywgZ2V0RGF5LCBpc0JlZm9yZSwgaXNFcXVhbCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBkYXlzT2ZXZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0c1RlbXBsYXRlIChhcnIpIHtcbiAgICByZXR1cm4gbGlzdFRlbXBsYXRlKGFycik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrc1RlbXBsYXRlIChhcnIpIHtcbiAgICBjb25zdCB7bGlzdCwgYWRkLCByZW1vdmUsIGdldH0gPSBsaXN0VGVtcGxhdGUoYXJyKTtcblxuICAgIGNvbnN0IGVkaXQgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgICAgICBjb25zdCBpbmRleCA9IGxpc3QuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PT0gbmV3VGFzay5pZCk7XG4gICAgICAgIGxpc3RbaW5kZXhdID0gbmV3VGFzaztcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2s7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza3NCeVRpdGxlID0gKHRpdGxlKSA9PiBsaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZS5pbmNsdWRlcyh0aXRsZSkpO1xuXG4gICAgY29uc3QgZ2V0VGFza3NCeVRhc2tEYXRlID0gKGRhdGUpID0+IGxpc3QuZmlsdGVyKCh0YXNrKSA9PiBpc0VxdWFsKHRhc2suZGF0ZSwgZm9ybWF0SVNPKGRhdGUsIHtyZXByZXNlbnRhdGlvbjogXCJkYXRlXCJ9KSkpO1xuXG4gICAgY29uc3QgZ2V0VGFza0J5VGFza0RheSA9IChkYXRlKSA9PiBsaXN0LmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5yZXBlYXQpIHJldHVybiB0YXNrLnJlcGVhdC5pbmNsdWRlcyhkYXlzT2ZXZWVrW2dldERheShkYXRlKV0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRUYXNrc0J5RGF0ZSA9IChkYXRlKSA9PiBbXG4gICAgICAgIC4uLmdldFRhc2tzQnlUYXNrRGF0ZShkYXRlKSxcbiAgICAgICAgLi4uZ2V0VGFza0J5VGFza0RheShkYXRlKVxuICAgIF07XG5cbiAgICBjb25zdCBnZXRUYXNrc0J5UHJvamVjdElkID0gKGlkKSA9PiBsaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5wcm9qZWN0SWQgPT09IGlkKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3QsXG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICBnZXQsXG4gICAgICAgIGVkaXQsXG4gICAgICAgIGdldFRhc2tzQnlUYXNrRGF0ZSxcbiAgICAgICAgZ2V0VGFza0J5VGFza0RheSxcbiAgICAgICAgZ2V0VGFza3NCeURhdGUsXG4gICAgICAgIGdldFRhc2tzQnlUaXRsZSxcbiAgICAgICAgZ2V0VGFza3NCeVByb2plY3RJZFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrbGlzdFRlbXBsYXRlIChhcnIpIHtcbiAgICBjb25zdCBpbml0TGlzdCA9IGFyciB8fCBbXTtcbiAgICBjb25zdCBsaXN0ID0gaW5pdExpc3QuZmlsdGVyKHRhc2sgPT4gIShpc0JlZm9yZSh0YXNrLmRhdGUsIGZvcm1hdElTTyhuZXcgRGF0ZSgpLCB7IHJlcHJlc2VudGF0aW9uOiAnZGF0ZScgfSkpKSk7XG5cbiAgICBjb25zdCB7YWRkLCByZW1vdmUsIGdldH0gPSBsaXN0VGVtcGxhdGUobGlzdClcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0LFxuICAgICAgICBhZGQsXG4gICAgICAgIHJlbW92ZSxcbiAgICAgICAgZ2V0XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGlzdFRlbXBsYXRlIChhcnIpIHtcbiAgICBjb25zdCBsaXN0ID0gYXJyIHx8IFtdO1xuXG4gICAgY29uc3QgYWRkID0gKGl0ZW0pID0+IGxpc3QucHVzaChpdGVtKTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IChpZCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gbGlzdCkge1xuICAgICAgICAgICAgaWYgKGxpc3RbaV0uaWQgPT09IGlkKSByZXR1cm4gbGlzdC5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGdldCA9IChpZCkgPT4gbGlzdC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0LFxuICAgICAgICBhZGQsIFxuICAgICAgICByZW1vdmUsXG4gICAgICAgIGdldFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QgKHRpdGxlLCBjb2xvcj1cImRlZmF1bHRcIikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNvbG9yXG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2sgKHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkYXRlLFxuICAgIHJlcGVhdCxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0SWQsXG59KSB7XG4gICAgaWYgKCF0aXRsZSB8fCAhcHJpb3JpdHkgfHwgIXByb2plY3RJZCB8fCAhKGRhdGUgfHwgKEFycmF5LmlzQXJyYXkocmVwZWF0KSAmJiByZXBlYXQubGVuZ3RoKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudHNcIilcbiAgICB9O1xuXG4gICAgaWYgKCFpZCkgaWQgPSB1dWlkdjQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRlLFxuICAgICAgICByZXBlYXQsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBwcm9qZWN0SWRcbiAgICB9XG59OyIsImltcG9ydCB7IGNoZWNrbGlzdCBhcyBjaGVja2xpc3REYXRhIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IGljb24gZnJvbSBcIi4uL3VpL2xheW91dC9pY29uXCI7XG5pbXBvcnQgaHRtbEVsIGZyb20gXCIuLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCB7IGhhbmRsZUljb25zIH0gZnJvbSBcIi4vdXRpbHMvdGFza3MvaWNvblwiO1xuaW1wb3J0IHRhc2tFbGVtZW50IGZyb20gXCIuL3V0aWxzL3Rhc2tzL3Rhc2stZWxlbWVudFwiO1xuXG5jb25zdCB0YXNrQ29udCA9IGh0bWxFbCh7XG4gICAgdGFnOiBcInVsXCIsXG4gICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tY29udGFpbmVyXCJdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tsaXN0ICgpIHtcblxuICAgIGNvbnN0IGxpRWxzID0gY2hlY2tsaXN0RGF0YS5saXN0Lm1hcCh0YXNrID0+IHRhc2tFbGVtZW50KHRhc2ssIHRydWUpKVxuXG4gICAgdGFza0NvbnQucmVwbGFjZUNoaWxkcmVuKC4uLmxpRWxzKTtcblxuICAgIGNvbnN0IHBhZ2VDb250ID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInBhZ2UtY29udGFpbmVyXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgaHRtbEVsKHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJoZWFkaW5nXCJdLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIGljb24oXCJjaGVjay1jaXJjbGVcIiksXG4gICAgICAgICAgICAgICAgICAgIGh0bWxFbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiaDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2hlY2tsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRhc2tDb250XG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHBhZ2VDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHt0YXJnZXR9KSA9PiBoYW5kbGVJY29ucyh0YXJnZXQpKTtcblxuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGlkOiBcImNoZWNrbGlzdFwiLFxuICAgICAgICBjaGlsZHJlbjogW3BhZ2VDb250XVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9DaGVja2xpc3QgKGVsKSB7XG4gICAgdGFza0NvbnQuYXBwZW5kQ2hpbGQoZWwpO1xufSIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IHsgZmlsdGVySW5jb21wbGV0ZVRhc2tzLCBnZXRQcm9qZWN0VGFza3MsIGdldFRhc2tQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YU9wXCI7XG5pbXBvcnQgaWNvbiBmcm9tIFwiLi4vLi4vdWkvbGF5b3V0L2ljb25cIjtcbmltcG9ydCBodG1sRWwgZnJvbSBcIi4uLy4uL3V0aWxzL3JlbmRlclwiO1xuaW1wb3J0IGFkZFRhc2tCdXR0b24gZnJvbSBcIi4uL3V0aWxzL3Rhc2tzL2FkZC10YXNrXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrRm9ybSB9IGZyb20gXCIuLi91dGlscy90YXNrcy9mb3JtXCI7XG5pbXBvcnQgeyBoYW5kbGVJY29ucyB9IGZyb20gXCIuLi91dGlscy90YXNrcy9pY29uXCI7XG5pbXBvcnQgdGFza0VsZW1lbnQgZnJvbSBcIi4uL3V0aWxzL3Rhc2tzL3Rhc2stZWxlbWVudFwiO1xuaW1wb3J0IHVwZGF0ZURhdGVkVmlldyBmcm9tIFwiLi4vdXRpbHMvdXBkYXRlLWRhdGVkLXZpZXdcIjtcbmltcG9ydCB7IHJlbW92ZVByb2plY3QsIGdldFByb2plY3RJZCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IHRhc2tDb250ID0gaHRtbEVsKHtcbiAgICB0YWc6IFwidWxcIixcbiAgICBjbGFzc0xpc3Q6IFtcInRvZG8taXRlbS1jb250YWluZXJcIl0sXG59KTtcblxuY29uc3QgaGVhZGluZyA9IGh0bWxFbCh7XG4gICAgdGFnOiBcImgxXCIsXG59KTtcblxuY29uc3QgYWRkVGFza0J0biA9IGFkZFRhc2tCdXR0b24oKHRhc2spID0+IHtcbiAgICB1cGRhdGVEYXRlZFZpZXcoKTtcbiAgICBpZiAoZ2V0VGFza1Byb2plY3QodGFzay5pZCkgPT09IHByb2plY3RzLmdldChnZXRQcm9qZWN0SWQoKSkpIHNob3dOZXdQcm9qZWN0VGFzayh0YXNrKTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0RWwgKCkge1xuICAgIGNvbnN0IGVsID0gaHRtbEVsICh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW1cIiwgXCJpdGVtLWFkZGVyXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgaWNvbihcInRyYXNoLTJcIiksXG4gICAgICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEZWxldGUgUHJvamVjdFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbW92ZVByb2plY3QoZ2V0UHJvamVjdElkKCkpKTtcblxuICAgIHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdFRhc2sgKCkge1xuXG4gICAgY29uc3QgcGFnZUNvbnQgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wicGFnZS1jb250YWluZXJcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtcImhlYWRpbmdcIl0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgaWNvbihcImZvbGRlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYWRkVGFza0J0bixcbiAgICAgICAgICAgIHRhc2tDb250LFxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEVsKClcbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgcGFnZUNvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoe3RhcmdldH0pID0+IGhhbmRsZUljb25zKHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdC10YXNrXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBwYWdlQ29udFxuICAgICAgICBdXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9qZWN0IChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZ2V0KHByb2plY3RJZCk7XG4gICAgaWYgKCFwcm9qZWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFByb2plY3RcIik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBjb25zdCBwcm9qVGFza3MgPSBnZXRQcm9qZWN0VGFza3MocHJvamVjdElkKTtcblxuICAgIGNvbnN0IGxpRWxzID0gZmlsdGVySW5jb21wbGV0ZVRhc2tzKHByb2pUYXNrcykubWFwKHRhc2sgPT4gdGFza0VsZW1lbnQodGFzaykpO1xuICAgIFxuICAgIHRhc2tDb250LnJlcGxhY2VDaGlsZHJlbiguLi5saUVscyk7XG5cbiAgICB1cGRhdGVUYXNrRm9ybSh7cHJvamVjdElkfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TmV3UHJvamVjdFRhc2sgKHRhc2spIHtcbiAgICBjb25zdCB0YXNrRWwgPSB0YXNrRWxlbWVudCh0YXNrKTtcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZChcImFkZFwiKTtcbiAgICB0YXNrQ29udC5hcHBlbmRDaGlsZCh0YXNrRWwpO1xufSIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCwgdXBkYXRlRGF0YSB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFPcFwiO1xuaW1wb3J0IHNldFJvdXRlLCB7IGdldFJvdXRlIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvcm91dGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0SWQgKCkge1xuICAgIGlmIChnZXRSb3V0ZSgpLnN0YXJ0c1dpdGgoXCJwcm9qZWN0LVwiKSkgcmV0dXJuIGdldFJvdXRlKCkuc3Vic3RyaW5nKDgpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdCAocElEKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRlbGV0ZVByb2plY3QocElEKTtcbiAgICBpZiAoIXByb2plY3QpIHRocm93IG5ldyBFcnJvciAoXCJJbnZhbGlkIElkXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocElEKTtcbiAgICBpZiAocHJvamVjdEVsKSBwcm9qZWN0RWwucmVtb3ZlKCk7XG5cbiAgICBzZXRSb3V0ZShcInByb2plY3RzXCIpO1xufSIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IGljb24gZnJvbSBcIi4uLy4uL3VpL2xheW91dC9pY29uXCI7XG5pbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCBhZGRQcm9qZWN0QnV0dG9uIGZyb20gXCIuL3V0aWxzL2FkZFByb2plY3RcIjtcbmltcG9ydCB7IGhhbmRsZUljb25zIH0gZnJvbSBcIi4vdXRpbHMvaWNvblwiO1xuaW1wb3J0IHByb2plY3RFbGVtZW50IGZyb20gXCIuL3V0aWxzL3Byb2plY3QtZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdCAoKSB7XG5cbiAgICBjb25zdCBsaUVscyA9IHByb2plY3RzLmxpc3QubWFwKHByb2plY3QgPT4gcHJvamVjdEVsZW1lbnQocHJvamVjdCkpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnQgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwidWxcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tY29udGFpbmVyXCJdLFxuICAgICAgICBjaGlsZHJlbjogWy4uLmxpRWxzXVxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZUNvbnQgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wicGFnZS1jb250YWluZXJcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtcImhlYWRpbmdcIl0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgaWNvbihcImZvbGRlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEVsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJNeSBQcm9qZWN0c1wiXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uKHByb2plY3RDb250KSxcbiAgICAgICAgICAgIHByb2plY3RDb250XG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHBhZ2VDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHt0YXJnZXR9KSA9PiBoYW5kbGVJY29ucyh0YXJnZXQpKTtcblxuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGlkOiBcInByb2plY3RzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbcGFnZUNvbnRdXG4gICAgfSk7XG59XG5cbiIsImltcG9ydCBpdGVtQWRkZXJCdG4gZnJvbSBcIi4uLy4uLy4uL3VpL2xpc3QvaXRlbS1hZGRlci1idG5cIjtcbmltcG9ydCB7IHByb2plY3QgYXMgcHJvamVjdENyZWF0b3IgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhU3RydWN0XCI7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YU9wXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RhdGFcIjtcbmltcG9ydCBwcm9qZWN0RWxlbWVudCBmcm9tIFwiLi9wcm9qZWN0LWVsXCI7XG5pbXBvcnQgcHJvamVjdEZvcm1Db250ZW50cyBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrRm9ybVByb2plY3RMaXN0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Rhc2tzL2Zvcm1cIjtcbmltcG9ydCB7IGVkaXRNb2RhbEZvcm0gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGF5b3V0L21vZGFsLWZvcm1cIjtcbmltcG9ydCB7IGFkZFdpdGhBbmltYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGlzdC9hbmltYXRpb25cIjtcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgXG4gKiBAcmV0dXJucyBBIGRpdiB3aGljaCBjYW4gYmUgY2xpY2tlZCB0byBhZGQgbmV3IHByb2plY3RzIGluIGdpdmVuIGNvbnRhaW5lclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0QnV0dG9uIChjb250YWluZXIpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKGZvcm1FbCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRWwpO1xuICAgIFxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdENyZWF0b3IoZm9ybURhdGEuZ2V0KFwidGl0bGVcIikpO1xuICAgIFxuICAgICAgICBwcm9qZWN0cy5hZGQobmV3UHJvamVjdCk7XG4gICAgXG4gICAgICAgIHVwZGF0ZURhdGEoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cy5saXN0KTtcbiAgICAgICAgXG4gICAgICAgIHVwZGF0ZVRhc2tGb3JtUHJvamVjdExpc3QoKTtcbiAgICBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEVsID0gcHJvamVjdEVsZW1lbnQobmV3UHJvamVjdCk7XG4gICAgICAgIGFkZFdpdGhBbmltYXRpb24obmV3UHJvamVjdEVsLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0biA9IGl0ZW1BZGRlckJ0bihcInByb2plY3RcIik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwoKSA9PiB7XG4gICAgICAgIGVkaXRNb2RhbEZvcm0ocHJvamVjdEZvcm1Db250ZW50cygpLCBhZGRQcm9qZWN0KS5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gYnRuO1xufSIsImltcG9ydCBodG1sRWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3JlbmRlclwiO1xuaW1wb3J0IHRleHRJbnB1dEVsIGZyb20gXCIuLi8uLi8uLi91dGlscy9mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RGb3JtQ29udGVudHMgKHZhbHVlID0gXCJcIikge1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IHRleHRJbnB1dEVsKFwiUHJvamVjdCBOYW1lXCIsIFwidGl0bGVcIiwgdmFsdWUpO1xuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB0ZXh0SW5wdXRcbiAgICAgICAgXVxuICAgIH0pO1xufSIsImltcG9ydCBpY29uIGZyb20gXCIuLi8uLi8uLi91aS9sYXlvdXQvaWNvblwiO1xuaW1wb3J0IHsgZ2V0Q2xvc2VzdFRvZG9JdGVtIH0gZnJvbSBcIi4uLy4uLy4uL3VpL2xpc3QvbGlzdFwiO1xuaW1wb3J0IHsgYWRkVGFzaywgZWRpdFByb2plY3QsIHZpZXdQcm9qZWN0IH0gZnJvbSBcIi4vdG9vbHNcIjtcblxuY29uc3QgaWNvblNldCA9IFtcbiAgICB7XG4gICAgICAgIGljb246IFwicGx1c1wiLFxuICAgICAgICBjbGFzczogXCJhZGQtdGFza1wiLFxuICAgICAgICBmdW5jdGlvbjogYWRkVGFza1xuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiAgXCJlZGl0XCIsXG4gICAgICAgIGNsYXNzOiBcImVkaXQtcHJvamVjdFwiLFxuICAgICAgICBmdW5jdGlvbjogZWRpdFByb2plY3RcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWNvbjogXCJleWVcIixcbiAgICAgICAgY2xhc3M6IFwidmlldy1wcm9qZWN0XCIsXG4gICAgICAgIGZ1bmN0aW9uOiB2aWV3UHJvamVjdFxuICAgIH1cbl1cblxuLyoqXG4gKiBcbiAqIEByZXR1cm5zIGFycmF5IG9mIHByb2plY3QgSWNvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEljb25zICgpIHtcbiAgICBjb25zdCBpY29ucyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBlYWNoIG9mIGljb25TZXQpIFxuICAgICAgICBpY29ucy5wdXNoKGljb24gKGVhY2guaWNvbiwge2NsYXNzTGlzdDogW2VhY2guY2xhc3NdfSkpO1xuXG4gICAgcmV0dXJuIGljb25zO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUljb25zIChlbCkge1xuICAgIC8vIEdldCBwcm9qZWN0IElkXG4gICAgY29uc3QgcHJvamVjdEVsID0gZ2V0Q2xvc2VzdFRvZG9JdGVtKGVsKTtcbiAgICBpZiAoIXByb2plY3RFbCkgcmV0dXJuO1xuXG4gICAgLy8gRXhlY3V0ZSByZXF1aXJlZCBmdW5jdGlvblxuICAgIGZvciAoY29uc3QgaWNvbiBvZiBpY29uU2V0KSBcbiAgICAgICAgaWYgKGVsLmNsb3Nlc3QoYC4ke2ljb24uY2xhc3N9YCkpIHJldHVybiBpY29uLmZ1bmN0aW9uKHByb2plY3RFbCk7XG5cbn0iLCJpbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4uLy4uLy4uL3VpL2xpc3QvbGlzdFwiO1xuaW1wb3J0IHsgZ2V0SWNvbnMgfSBmcm9tIFwiLi9pY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RFbGVtZW50IChwcm9qZWN0KSB7XG4gICAgY29uc3QgZWwgPSB0b2RvSXRlbShwcm9qZWN0LnRpdGxlLCBcIlwiLCBnZXRJY29ucygpKTtcbiAgICBlbC5pZCA9IHByb2plY3QuaWQ7XG4gICAgcmV0dXJuIGVsO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YU9wXCI7XG5pbXBvcnQgeyBlZGl0TW9kYWxGb3JtIH0gZnJvbSBcIi4uLy4uLy4uL3VpL2xheW91dC9tb2RhbC1mb3JtXCI7XG5pbXBvcnQgeyByZXBsYWNlVG9kb0l0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGlzdC9saXN0XCI7XG5pbXBvcnQgcHJvamVjdEZvcm1Db250ZW50cyBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgcHJvamVjdEVsZW1lbnQgZnJvbSBcIi4vcHJvamVjdC1lbFwiO1xuaW1wb3J0IHsgc2V0UHJvamVjdFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvcm91dGVzXCI7XG5pbXBvcnQgdGFza0Zvcm1Db250ZW50cywgeyB1cGRhdGVUYXNrRm9ybSwgdXBkYXRlVGFza0Zvcm1Qcm9qZWN0TGlzdCB9IGZyb20gXCIuLi8uLi91dGlscy90YXNrcy9mb3JtXCI7XG5pbXBvcnQgeyBnZXRBZGRUYXNrRm4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvdGFza3MvYWRkLXRhc2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sgKHByb2plY3RFbCkge1xuICAgIHVwZGF0ZVRhc2tGb3JtKHtwcm9qZWN0SWQ6IHByb2plY3RFbC5pZH0pO1xuICAgIGVkaXRNb2RhbEZvcm0odGFza0Zvcm1Db250ZW50cygpLCBnZXRBZGRUYXNrRm4oKSkuc2hvd01vZGFsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3UHJvamVjdCAocHJvamVjdEVsKSB7XG4gICAgc2V0UHJvamVjdFJvdXRlKHByb2plY3RFbC5pZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvamVjdCAocHJvamVjdEVsKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmdldChwcm9qZWN0RWwuaWQpO1xuXG4gICAgaWYgKCFwcm9qZWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFByb2plY3RcIik7XG5cbiAgICBlZGl0TW9kYWxGb3JtKHByb2plY3RGb3JtQ29udGVudHMocHJvamVjdC50aXRsZSksIChmb3JtRWwpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuXG4gICAgICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcblxuICAgICAgICB1cGRhdGVEYXRhKFwicHJvamVjdHNcIiwgcHJvamVjdHMubGlzdCk7XG5cbiAgICAgICAgdXBkYXRlVGFza0Zvcm1Qcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgIHJlcGxhY2VUb2RvSXRlbShwcm9qZWN0RWxlbWVudChwcm9qZWN0KSwgcHJvamVjdEVsKTtcbiAgICB9KS5zaG93TW9kYWwoKTtcbn1cblxuIiwiaW1wb3J0IHsgcHJpb3JpdGllcyB9IGZyb20gXCIuLi9kYXRhL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyBmaWx0ZXJJbmNvbXBsZXRlVGFza3MgfSBmcm9tIFwiLi4vZGF0YS9kYXRhT3BcIjtcbmltcG9ydCBpY29uIGZyb20gXCIuLi91aS9sYXlvdXQvaWNvblwiO1xuaW1wb3J0IGh0bWxFbCBmcm9tIFwiLi4vdXRpbHMvcmVuZGVyXCI7XG5pbXBvcnQgeyBoYW5kbGVJY29ucyB9IGZyb20gXCIuL3V0aWxzL3Rhc2tzL2ljb25cIjtcbmltcG9ydCB0YXNrRWxlbWVudCBmcm9tIFwiLi91dGlscy90YXNrcy90YXNrLWVsZW1lbnRcIjtcblxuY29uc3QgcGFnZUNvbnQgPSBodG1sRWwoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcInBhZ2UtY29udGFpbmVyXCJdLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZGF5ICgpIHtcblxuICAgIHVwZGF0ZVRvZGF5VmlldygpO1xuXG4gICAgcGFnZUNvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoe3RhcmdldH0pID0+IGhhbmRsZUljb25zKHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgaWQ6IFwidG9kYXlcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHBhZ2VDb250XG4gICAgICAgIF1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvZGF5VmlldyAoKSB7XG4gICAgY29uc3QgdG9kYXlUYXNrcyA9IHRhc2tzLmdldFRhc2tzQnlEYXRlKG5ldyBEYXRlKCkpO1xuXG4gICAgY29uc3QgdGFza0xpc3QgPSB7fVxuXG4gICAgZm9yIChjb25zdCBpIGluIHByaW9yaXRpZXMpIHtcbiAgICAgICAgdGFza0xpc3RbXCJwXCIgKyBwcmlvcml0aWVzW2ldXSA9IFtdO1xuICAgIH1cblxuICAgIGZpbHRlckluY29tcGxldGVUYXNrcyh0b2RheVRhc2tzKS5mb3JFYWNoKHRhc2sgPT4gdGFza0xpc3RbXCJwXCIgKyB0YXNrLnByaW9yaXR5XS5wdXNoKHRhc2tFbGVtZW50KHRhc2spKSk7XG5cbiAgICBjb25zdCB0YXNrQ29udCA9IFtdXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGFza0xpc3QpKSB7XG4gICAgICAgIHRhc2tDb250LnB1c2goaHRtbEVsKHtcbiAgICAgICAgICAgIHRhZzogXCJ1bFwiLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tY29udGFpbmVyXCIsIGtleV0sXG4gICAgICAgICAgICBjaGlsZHJlbjogdmFsdWVcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcGFnZUNvbnQucmVwbGFjZUNoaWxkcmVuKGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJoZWFkaW5nXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgaWNvbihcImhhc2hcIiksXG4gICAgICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgICAgIHRhZzogXCJoMVwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVG9kYXlcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgIH0pLFxuICAgIC4uLnRhc2tDb250KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvZGF5VGFzayAodGFzaykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhZ2VDb250LnF1ZXJ5U2VsZWN0b3IoXCIucFwiICsgdGFzay5wcmlvcml0eSk7XG4gICAgaWYgKCFjb250YWluZXIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVGFza1wiKTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRWxlbWVudCh0YXNrKTtcbiAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJhZGRcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xufSIsImltcG9ydCB7IGVuZE9mVG9tb3Jyb3csIGZvcm1hdElTTywgaW50bEZvcm1hdCwgc3RhcnRPZlRvbW9ycm93IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcbmltcG9ydCB7IGZpbHRlckluY29tcGxldGVUYXNrcyB9IGZyb20gXCIuLi9kYXRhL2RhdGFPcFwiO1xuaW1wb3J0IGljb24gZnJvbSBcIi4uL3VpL2xheW91dC9pY29uXCI7XG5pbXBvcnQgaHRtbEVsIGZyb20gXCIuLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCB7IGhhbmRsZUljb25zIH0gZnJvbSBcIi4vdXRpbHMvdGFza3MvaWNvblwiO1xuaW1wb3J0IHRhc2tFbGVtZW50IGZyb20gXCIuL3V0aWxzL3Rhc2tzL3Rhc2stZWxlbWVudFwiO1xuXG5jb25zdCB0bXdUYXNrQ29udCA9IGh0bWxFbCh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wicGFnZS1jb250YWluZXJcIl0sXG59KTtcblxuY29uc3QgZGF0ZWRUYXNrQ29udCA9IGh0bWxFbCh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIGNsYXNzTGlzdDogW1wicGFnZS1jb250YWluZXJcIl0sXG59KTtcblxuY29uc3QgY29udGFpbmVyID0gaHRtbEVsKHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgY2xhc3NMaXN0OiBbXCJwYWdlLWNvbnRhaW5lclwiXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB0bXdUYXNrQ29udCxcbiAgICAgICAgZGF0ZWRUYXNrQ29udFxuICAgIF1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGNvbWluZyAoKSB7XG5cbiAgICB1cGRhdGVVcGNvbWluZ1ZpZXcoKTtcblxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh7dGFyZ2V0fSkgPT4gaGFuZGxlSWNvbnModGFyZ2V0KSk7XG5cbiAgICByZXR1cm4gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBpZDogXCJ1cGNvbWluZ1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgIF1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVwY29taW5nVmlldyAoZGF0ZSkge1xuICAgIHVwZGF0ZVRvbW9ycm93VmlldygpO1xuICAgIHVwZGF0ZVVwY29taW5nRGF0ZWRWaWV3KGRhdGUgfHwgXCJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb21vcnJvd1ZpZXcgKCkge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGFza3MuZ2V0VGFza3NCeURhdGUoZW5kT2ZUb21vcnJvdygpKTtcblxuICAgIGNvbnN0IHRhc2tOb2RlcyA9IGZpbHRlckluY29tcGxldGVUYXNrcyh0YXNrTGlzdCwgZW5kT2ZUb21vcnJvdygpKS5tYXAodGFzayA9PiB0YXNrRWxlbWVudCh0YXNrKSk7XG4gICAgXG4gICAgdG13VGFza0NvbnQucmVwbGFjZUNoaWxkcmVuKFxuICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJoZWFkaW5nXCJdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBpY29uKFwiY2FsZW5kYXJcIiksXG4gICAgICAgICAgICAgICAgaHRtbEVsKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVG9tb3Jyb3dcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLFxuICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgdGFnOiBcInVsXCIsXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFtcInRvZG8taXRlbS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIFwiZGF0YS1kYXRlXCI6IGZvcm1hdElTTyhlbmRPZlRvbW9ycm93KCksIHsgcmVwcmVzZW50YXRpb246ICdkYXRlJyB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiB0YXNrTm9kZXNcbiAgICAgICAgfSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVXBjb21pbmdEYXRlZFZpZXcgKGRhdGUpIHtcblxuICAgIGNvbnN0IGRhdGVUeHQgPSBkYXRlXG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgaW50bEZvcm1hdChkYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogJ2VuLUlOJyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICBcIlNlbGVjdCBEYXRlXCJcblxuICAgIGNvbnN0IGhlYWRpbmdDb250ID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInVwY29taW5nLWhlYWRpbmctY29udFwiXSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGhlYWRpbmdFbChkYXRlVHh0KSxcbiAgICAgICAgICAgIGh0bWxFbCh7XG4gICAgICAgICAgICAgICAgdGFnOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJ1cGNvbWluZy1kYXRlLXBpY2tlclwiXSxcbiAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGUgPyBmb3JtYXRJU08oZGF0ZSwge3JlcHJlc2VudGF0aW9uOiBcImRhdGVcIn0pIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIGhlYWRpbmdDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKHt0YXJnZXR9KSA9PiB7XG4gICAgICAgIHVwZGF0ZVVwY29taW5nRGF0ZWRWaWV3KHRhcmdldC52YWx1ZSk7XG4gICAgfSlcblxuICAgIGlmICghZGF0ZSkge1xuICAgICAgICBkYXRlZFRhc2tDb250LnJlcGxhY2VDaGlsZHJlbihoZWFkaW5nQ29udCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrTGlzdCA9IHRhc2tzLmdldFRhc2tzQnlEYXRlKGRhdGUpO1xuXG4gICAgY29uc3QgdGFza05vZGVzID0gZmlsdGVySW5jb21wbGV0ZVRhc2tzKHRhc2tMaXN0LCBkYXRlKS5tYXAodGFzayA9PiB0YXNrRWxlbWVudCh0YXNrKSk7XG4gICAgXG4gICAgZGF0ZWRUYXNrQ29udC5yZXBsYWNlQ2hpbGRyZW4oXG4gICAgICAgIGhlYWRpbmdDb250LFxuICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgdGFnOiBcInVsXCIsXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFtcInRvZG8taXRlbS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIFwiZGF0YS1kYXRlXCI6IGRhdGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogdGFza05vZGVzXG4gICAgICAgIH0pXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaGVhZGluZ0VsICh0ZXh0KSB7XG4gICAgcmV0dXJuIGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJoZWFkaW5nXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgaWNvbihcImNhbGVuZGFyXCIpLFxuICAgICAgICAgICAgaHRtbEVsKHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiaDFcIixcbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSk7XG59IiwiaW1wb3J0IHsgZGF5c09mV2VlayB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YU9wXCI7XG5pbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YVN0cnVjdFwiO1xuaW1wb3J0IHsgc2hvd1ZhbGlkYXRpb25FcnJvciB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9mb3JtXCI7XG5pbXBvcnQgaXRlbUFkZGVyQnRuIGZyb20gXCIuLi8uLi8uLi91aS9saXN0L2l0ZW0tYWRkZXItYnRuXCI7XG5pbXBvcnQgdGFza0Zvcm1Db250ZW50cywgeyB1cGRhdGVUYXNrRm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcbmltcG9ydCB7IGVkaXRNb2RhbEZvcm0gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGF5b3V0L21vZGFsLWZvcm1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkYXRlZERhdGEgKGZvcm1FbCkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbCk7XG5cbiAgICBjb25zdCBkYXRhID0ge307XG5cbiAgICBkYXRhLnJlcGVhdCA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IFwicmVwZWF0XCIpIGRhdGEucmVwZWF0LnB1c2godmFsdWUpO1xuICAgICAgICBlbHNlIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGlmICghZGF0YS5yZXBlYXQubGVuZ3RoICYmICFkYXRhLmRhdGUpIHtcbiAgICAgICAgY29uc3QgZXJyID0gXCJQbGVhc2UgRW50ZXIgZWl0aGVyIERhdGUgb3Igc2VsZWN0IHJlcGVhdGluZyBkYXlzXCI7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9ZGF0ZV1gKTtcbiAgICAgICAgc2hvd1ZhbGlkYXRpb25FcnJvcihmaWVsZCwgZXJyKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufSBcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkZFRhc2tGbiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gKGZvcm1FbCkgID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldFZhbGlkYXRlZERhdGEoZm9ybUVsKTtcblxuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFzayhkYXRhKTtcblxuICAgICAgICB0YXNrcy5hZGQobmV3VGFzayk7XG4gICAgXG4gICAgICAgIHVwZGF0ZURhdGEoXCJ0YXNrc1wiLCB0YXNrcy5saXN0KTtcbiAgICBcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhuZXdUYXNrKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgcmV0dXJucyBjb250cm9sIHRvIHRoaXMgZnVuY3Rpb24gXG4gKiBAcmV0dXJucyBBIGRpdiB3aGljaCBjYW4gYmUgY2xpY2tlZCB0byBhZGQgbmV3IHByb2plY3RzIGluIGdpdmVuIGNvbnRhaW5lclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrQnV0dG9uIChjYWxsYmFjaykge1xuICAgIGNvbnN0IGJ0biA9IGl0ZW1BZGRlckJ0bihcIlRhc2tcIik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVRhc2tGb3JtKHt9KTtcbiAgICAgICAgZWRpdE1vZGFsRm9ybSh0YXNrRm9ybUNvbnRlbnRzKCksIGdldEFkZFRhc2tGbihjYWxsYmFjaykpLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJ0bjtcbn1cbiIsImltcG9ydCB7IGZvcm1hdElTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgZGF5c09mV2VlaywgcHJpb3JpdGllcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgdGV4dElucHV0RWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Zvcm1cIjtcbmltcG9ydCBodG1sRWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3JlbmRlclwiO1xuXG5jb25zdCB0aXRsZSA9IHRleHRJbnB1dEVsKFwiVGFzayBOYW1lXCIsIFwidGl0bGVcIik7XG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gdGV4dElucHV0RWwoXCJEZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uXCIsIGZhbHNlLCA2NCk7XG5cbmNvbnN0IHRvZGF5ID0gZm9ybWF0SVNPKG5ldyBEYXRlKCksIHsgcmVwcmVzZW50YXRpb246ICdkYXRlJyB9KTtcblxuY29uc3QgZGF0ZSA9IGh0bWxFbCh7XG4gICAgdGFnOiBcImlucHV0XCIsXG4gICAgcHJvcHMgOiB7XG4gICAgICAgIG5hbWU6IFwiZGF0ZVwiLFxuICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgaWQ6IFwidGFzay1kYXRlXCIsXG4gICAgICAgIHZhbHVlOiB0b2RheSxcbiAgICAgICAgbWluOiB0b2RheVxuICAgIH0sXG59KTtcblxuY29uc3QgZGF0ZUNvbnQgPSBodG1sRWwoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgdGFnOiBcImxhYmVsXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIkRhdGU6XCIsXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGZvcjogXCJ0YXNrLWRhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZGF0ZVxuICAgIF1cbn0pO1xuXG5jb25zdCBkYXlzID0gZGF5c09mV2Vlay5tYXAoKGRheSkgPT4gaHRtbEVsKHtcbiAgICB0YWc6IFwiaW5wdXRcIixcbiAgICBwcm9wczoge1xuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIG5hbWU6IFwicmVwZWF0XCIsXG4gICAgICAgIHZhbHVlOiBkYXksXG4gICAgICAgIGRheTogZGF5LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpLFxuICAgIH1cbn0pKTtcblxuY29uc3QgcmVwZWF0ID0gaHRtbEVsKHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgaHRtbEVsKHtcbiAgICAgICAgICAgIHRhZzogXCJsYWJlbFwiLFxuICAgICAgICAgICAgdGV4dDogXCJSZXBlYXQ6XCIsXG4gICAgICAgIH0pLFxuICAgICAgICAuLi5kYXlzXG4gICAgXSxcbiAgICBjbGFzc0xpc3Q6IFtcImRheXMtY29udFwiXVxufSk7XG5cbmNvbnN0IHByaW9yaXR5ID0gIGh0bWxFbCh7XG4gICAgdGFnOiBcInNlbGVjdFwiLFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5hbWU6IFwicHJpb3JpdHlcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBwcmlvcml0aWVzLm1hcCgocHJpb3IpID0+IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJvcHRpb25cIixcbiAgICAgICAgdGV4dDogXCJQcmlvcml0eSBcIisgcHJpb3IsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJpb3JcbiAgICAgICAgfVxuICAgIH0pKVxufSk7XG5wcmlvcml0eS5zZWxlY3RlZEluZGV4ID0gcHJpb3JpdGllcy5sZW5ndGggLSAxO1xuXG5jb25zdCBwcm9qZWN0ID0gIGh0bWxFbCh7XG4gICAgdGFnOiBcInNlbGVjdFwiLFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5hbWU6IFwicHJvamVjdElkXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxufSk7XG5cbmNvbnN0IGZvcm1Db250ZW50ID0gaHRtbEVsKHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICByZXBlYXQsXG4gICAgICAgIGh0bWxFbCAoe1xuICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBkYXRlQ29udCxcbiAgICAgICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgICAgICBwcm9qZWN0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJkYXRlLXByaW9yaXR5LXByb2plY3QtY29udFwiXVxuICAgICAgICB9KVxuICAgIF1cbn0pO1xuXG5oYW5kbGVTY2hlZHVsZShkYXRlLCByZXBlYXQpO1xudXBkYXRlVGFza0Zvcm1Qcm9qZWN0TGlzdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRm9ybUNvbnRlbnRzICgpIHtcbiAgICByZXR1cm4gZm9ybUNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrRm9ybSAodGFzayA9IHt9KSB7XG5cbiAgICB0aXRsZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID0gdGFzay50aXRsZSB8fCBcIlwiO1xuXG4gICAgZGVzY3JpcHRpb24ucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb24gfHwgXCJcIjtcblxuICAgIGlmICh0YXNrLnJlcGVhdCAmJiB0YXNrLnJlcGVhdC5sZW5ndGgpIHtcbiAgICAgICAgZGF5cy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5yZXBlYXQuaW5jbHVkZXMoZGF5LnZhbHVlKSkgZGF5LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhc2suZGF0ZSkge1xuICAgICAgICBkYXRlLnZhbHVlID0gdGFzay5kYXRlO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG4gICAgZWxzZSBkYXRlLnZhbHVlID0gdG9kYXk7XG5cbiAgICAvLyBTZXQgdGFzaydzIHByaW9yaXR5XG4gICAgcHJpb3JpdHkuc2VsZWN0ZWRJbmRleCA9ICB0YXNrLnByaW9yaXR5ID8gcHJpb3JpdGllcy5pbmRleE9mKCt0YXNrLnByaW9yaXR5KSA6IHByaW9yaXRpZXMubGVuZ3RoIC0gMTtcblxuICAgIHByb2plY3QudmFsdWUgPSB0YXNrLnByb2plY3RJZCB8fCBcIlwiO1xufVxuXG4vKipcbiAqIEFsbG93IG9ubHkgcmVwZWF0IG9yIGRhdGVcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gZGF0ZUlucHV0IFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGF5c0lucHV0IFxuICovXG5mdW5jdGlvbiBoYW5kbGVTY2hlZHVsZSAoZGF0ZUlucHV0LCBkYXlzSW5wdXQpIHtcbiAgICBpZiAoZGF0ZUlucHV0LnZhbHVlKSBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgLy8gVW5zZWxlY3QgRGF5c1xuICAgICAgICBkYXlzSW5wdXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZm9yRWFjaChkYXkgPT4gZGF5LmNoZWNrZWQgPSBmYWxzZSk7XG5cbiAgICAgICAgLy8gUHJvdmlkZSBzZWxlY3RlZCBjbGFzcyB0byBkYXRlIGlucHV0IGZvciBjc3MgcHVycG9zZXNcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgICAvLyBSZW1vdmUgc2VsZWN0ZWQgY2xhc3MgaWYgbm8gdmFsdWVcbiAgICAgICAgaWYgKCFkYXRlSW5wdXQudmFsdWUpIGRhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG5cbiAgICBkYXlzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBkYXRlXG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrRm9ybVByb2plY3RMaXN0ICgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IHByb2plY3RzLmxpc3QubWFwKChwcm9qZWN0KSA9PiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwib3B0aW9uXCIsXG4gICAgICAgIHRleHQ6IHByb2plY3QudGl0bGUsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvamVjdC5pZFxuICAgICAgICB9XG4gICAgfSkpO1xuXG4gICAgcHJvamVjdC5yZXBsYWNlQ2hpbGRyZW4oaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcIm9wdGlvblwiLFxuICAgICAgICB0ZXh0OiBcIlByb2plY3RcIixcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICB9XG4gICAgfSksXG4gICAgLi4ucHJvamVjdExpc3QpO1xufSIsImltcG9ydCBpY29uIGZyb20gXCIuLi8uLi8uLi91aS9sYXlvdXQvaWNvblwiO1xuaW1wb3J0IHsgZ2V0Q2xvc2VzdFRvZG9JdGVtIH0gZnJvbSBcIi4uLy4uLy4uL3VpL2xpc3QvbGlzdFwiO1xuaW1wb3J0IHsgZGVsZXRlQ2hlY2tsaXN0VGFzaywgZGVsZXRlVGFzaywgZWRpdFRhc2ssIHRvZ2dsZVRhc2tDb21wbGV0aW9uIH0gZnJvbSBcIi4vdG9vbHNcIjtcblxuXG5jb25zdCBpY29uU2V0ID0gW1xuICAgIHtcbiAgICAgICAgaWNvbjogIFwiZWRpdFwiLFxuICAgICAgICBjbGFzczogXCJlZGl0LXRhc2tcIixcbiAgICAgICAgZnVuY3Rpb246IGVkaXRUYXNrXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGljb246IFwidHJhc2gtMlwiLFxuICAgICAgICBjbGFzczogXCJkZWxldGUtdGFza1wiLFxuICAgICAgICBmdW5jdGlvbjogZGVsZXRlVGFza1xuICAgIH1cbl1cblxuY29uc3QgY2hlY2tsaXN0SWNvblNldCA9IFtcbiAgICB7XG4gICAgICAgIGljb246IFwidHJhc2gtMlwiLFxuICAgICAgICBjbGFzczogXCJkZWxldGUtY2hlY2tsaXN0LXRhc2tcIixcbiAgICAgICAgZnVuY3Rpb246IGRlbGV0ZUNoZWNrbGlzdFRhc2tcbiAgICB9XG5dXG5cbi8qKlxuICogXG4gKiBAcmV0dXJucyBhcnJheSBvZiBwcm9qZWN0IEljb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJY29ucyAoY2hlY2tsaXN0ID0gZmFsc2UpIHtcbiAgICBjb25zdCBpY29ucyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrbGlzdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgY2hlY2tsaXN0SWNvblNldCkgXG4gICAgICAgICAgICBpY29ucy5wdXNoKGljb24gKGVhY2guaWNvbiwge2NsYXNzTGlzdDogW2VhY2guY2xhc3NdfSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGljb25TZXQpIFxuICAgICAgICAgICAgaWNvbnMucHVzaChpY29uIChlYWNoLmljb24sIHtjbGFzc0xpc3Q6IFtlYWNoLmNsYXNzXX0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvbnM7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSWNvbnMgKGVsKSB7XG4gICAgLy8gR2V0IHByb2plY3QgRWxcbiAgICBjb25zdCB0YXNrRWwgPSBnZXRDbG9zZXN0VG9kb0l0ZW0oZWwpXG4gICAgaWYgKCF0YXNrRWwpIHJldHVybjtcblxuICAgIC8vIEV4ZWN1dGUgcmVxdWlyZWQgZnVuY3Rpb25cbiAgICBmb3IgKGNvbnN0IGljb24gb2YgaWNvblNldCkgXG4gICAgICAgIGlmIChlbC5jbG9zZXN0KGAuJHtpY29uLmNsYXNzfWApKSByZXR1cm4gaWNvbi5mdW5jdGlvbih0YXNrRWwpO1xuXG4gICAgZm9yIChjb25zdCBpY29uIG9mIGNoZWNrbGlzdEljb25TZXQpIFxuICAgICAgICBpZiAoZWwuY2xvc2VzdChgLiR7aWNvbi5jbGFzc31gKSkgcmV0dXJuIGljb24uZnVuY3Rpb24odGFza0VsKTtcblxuICAgIC8vIElmIGNoZWNrYm94IFxuICAgIGNvbnN0IGNoZWNrYm94ID0gZWwuY2xvc2VzdCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICBpZiAoY2hlY2tib3gpIHRvZ2dsZVRhc2tDb21wbGV0aW9uKGNoZWNrYm94LCB0YXNrRWwpO1xufSIsImltcG9ydCB7IGdldENoZWNrbGlzdFRhc2tQcm9qZWN0LCBnZXRUYXNrUHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RhdGFPcFwiO1xuaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuLi8uLi8uLi91aS9saXN0L2xpc3RcIjtcbmltcG9ydCB7IGdldEljb25zIH0gZnJvbSBcIi4vaWNvblwiO1xuaW1wb3J0IHsgdGFza1Byb2plY3RWaWV3ZXIgfSBmcm9tIFwiLi90b29sc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tFbGVtZW50ICh0YXNrLCBjaGVja2xpc3QgPSBmYWxzZSkge1xuICAgIGlmICghdGFzayB8fCAhdGFzay5pZCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBUYXNrXCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBjaGVja2xpc3QgPyBnZXRDaGVja2xpc3RUYXNrUHJvamVjdCh0YXNrLmlkKTogZ2V0VGFza1Byb2plY3QodGFzay5pZCk7XG5cbiAgICBpZiAoIXByb2plY3QpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVGFza1wiKTtcblxuICAgIGNvbnN0IGVsID0gdG9kb0l0ZW0odGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgZ2V0SWNvbnMoY2hlY2tsaXN0KSwge3RleHQ6IHByb2plY3QudGl0bGUsIHJlZkZuOiB0YXNrUHJvamVjdFZpZXdlcihwcm9qZWN0KX0sIHRydWUsIGNoZWNrbGlzdCk7XG4gICAgZWwuaWQgPSB0YXNrLmlkO1xuICAgIHJldHVybiBlbDtcbn0iLCJpbXBvcnQgeyBjaGVja2xpc3QsIHRhc2tzIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IHsgc2V0VGFza0FzQ29tcGxldGVkLCB1bmRvVGFza0NvbXBsZXRpb24sIHVwZGF0ZURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhT3BcIjtcbmltcG9ydCB7IHRhc2sgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhU3RydWN0XCI7XG5pbXBvcnQgeyBzZXRQcm9qZWN0Um91dGUgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9yb3V0ZXNcIjtcbmltcG9ydCB7IGVkaXRNb2RhbEZvcm0gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGF5b3V0L21vZGFsLWZvcm1cIjtcbmltcG9ydCB7IHJlcGxhY2VUb2RvSXRlbSB9IGZyb20gXCIuLi8uLi8uLi91aS9saXN0L2xpc3RcIjtcbmltcG9ydCB7IHJlbW92ZVdpdGhBbmltYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGlzdC9hbmltYXRpb25cIjtcbmltcG9ydCB7IGFwcGVuZFRvQ2hlY2tsaXN0IH0gZnJvbSBcIi4uLy4uL2NoZWNrbGlzdFwiO1xuaW1wb3J0IHVwZGF0ZURhdGVkVmlldyBmcm9tIFwiLi4vdXBkYXRlLWRhdGVkLXZpZXdcIjtcbmltcG9ydCB7IGdldFZhbGlkYXRlZERhdGEgfSBmcm9tIFwiLi9hZGQtdGFza1wiO1xuaW1wb3J0IHRhc2tGb3JtQ29udGVudHMsIHsgdXBkYXRlVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgdGFza0VsZW1lbnQgZnJvbSBcIi4vdGFzay1lbGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrUHJvamVjdFZpZXdlciAocHJvamVjdEVsKSB7XG4gICAgY29uc3QgcElkID0gcHJvamVjdEVsLmlkO1xuXG4gICAgcmV0dXJuICgpID0+IHNldFByb2plY3RSb3V0ZShwSWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2sgKHRhc2tFbCkge1xuICAgIGNvbnN0IGVkaXQgPSAoZm9ybUVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRWYWxpZGF0ZWREYXRhKGZvcm1FbCk7XG4gICAgICAgIGRhdGEuaWQgPSB0YXNrRWwuaWQ7XG5cbiAgICAgICAgY29uc3QgZWRpdGVkVGFzayA9IHRhc2tzLmVkaXQodGFzayhkYXRhKSk7XG5cbiAgICAgICAgdXBkYXRlRGF0YShcInRhc2tzXCIsIHRhc2tzLmxpc3QpO1xuICAgICAgICByZXBsYWNlVG9kb0l0ZW0odGFza0VsZW1lbnQoZWRpdGVkVGFzayksIHRhc2tFbCk7XG4gICAgICAgIHVwZGF0ZURhdGVkVmlldygpO1xuICAgIH1cbiAgICB1cGRhdGVUYXNrRm9ybSh0YXNrcy5nZXQodGFza0VsLmlkKSk7XG4gICAgZWRpdE1vZGFsRm9ybSh0YXNrRm9ybUNvbnRlbnRzKCksIGVkaXQpLnNob3dNb2RhbCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayAodGFza0VsKSB7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzLnJlbW92ZSh0YXNrRWwuaWQpO1xuICAgIGlmICghdGFzaykgdGhyb3cgbmV3IEVycm9yIChcIkludmFsaWQgSWRcIik7XG5cbiAgICB1cGRhdGVEYXRhKFwidGFza3NcIiwgdGFza3MubGlzdCk7XG5cbiAgICByZW1vdmVXaXRoQW5pbWF0aW9uKHRhc2tFbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDaGVja2xpc3RUYXNrICh0YXNrRWwpIHtcbiAgICBjb25zdCB0YXNrID0gY2hlY2tsaXN0LnJlbW92ZSh0YXNrRWwuaWQpO1xuICAgIGlmICghdGFzaykgdGhyb3cgbmV3IEVycm9yIChcIkludmFsaWQgSWRcIik7XG5cbiAgICB1cGRhdGVEYXRlZFZpZXcoKTtcblxuICAgIHVwZGF0ZURhdGEoXCJjaGVja2xpc3RcIiwgY2hlY2tsaXN0Lmxpc3QpO1xuXG4gICAgcmVtb3ZlV2l0aEFuaW1hdGlvbih0YXNrRWwpO1xuXG4gICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRhc2tDb21wbGV0aW9uIChjaGVja2JveEVsLCB0YXNrRWwpIHtcbiAgICBjb25zdCBkYXRlID0gdGFza0VsLnBhcmVudEVsZW1lbnQuZGF0YXNldD8uZGF0ZSB8fCBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKGNoZWNrYm94RWwuY2hlY2tlZCkge1xuICAgICAgICBjb25zdCB0YXNrID0gc2V0VGFza0FzQ29tcGxldGVkKHRhc2tFbC5pZCwgZGF0ZSk7XG4gICAgICAgIHJlbW92ZVdpdGhBbmltYXRpb24odGFza0VsKTtcblxuICAgICAgICBhcHBlbmRUb0NoZWNrbGlzdCh0YXNrRWxlbWVudCh0YXNrLCB0cnVlKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrID0gdW5kb1Rhc2tDb21wbGV0aW9uKHRhc2tFbC5pZCk7XG4gICAgcmVtb3ZlV2l0aEFuaW1hdGlvbih0YXNrRWwpO1xuXG4gICAgdXBkYXRlRGF0ZWRWaWV3KCk7XG59IiwiaW1wb3J0IHsgdXBkYXRlVG9kYXlWaWV3IH0gZnJvbSBcIi4uL3RvZGF5XCI7XG5pbXBvcnQgeyB1cGRhdGVVcGNvbWluZ1ZpZXcgfSBmcm9tIFwiLi4vdXBjb21pbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlRGF0ZWRWaWV3ICgpIHtcbiAgICB1cGRhdGVUb2RheVZpZXcoKTtcbiAgICB1cGRhdGVVcGNvbWluZ1ZpZXcoKTtcbn0iLCJpbXBvcnQgeyBkZWZhdWx0Um91dGUgfSBmcm9tIFwiLi4vZGF0YS9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNldFByb2plY3QgfSBmcm9tIFwiLi4vcGFnZXMvcHJvamVjdC10YXNrXCI7XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VjdGlvbiBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0Um91dGUgKHNlY3Rpb24pIHtcbiAgICBzZXRIYXNoKHNlY3Rpb24pO1xuICAgIGhhbmRsZVJvdXRlKHNlY3Rpb24pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSb3V0ZSAoc2VjdGlvbikge1xuICAgIGlmIChzZWN0aW9uLnN0YXJ0c1dpdGgoXCJwcm9qZWN0LVwiKSkgaGFuZGxlUHJvamVjdFJvdXRlKHNlY3Rpb24pO1xuICAgIGVsc2Ugc2hvd1NlY3Rpb24oc2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIHNob3dTZWN0aW9uIChzZWN0aW9uKSB7XG4gICAgaGlkZUFsbFNpYmxpbmdzIChzZWN0aW9uKTtcbiAgICBjb25zdCBjdXJyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NlY3Rpb259YCkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGVmYXVsdFJvdXRlfWApO1xuICAgIGN1cnJTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGhpZGVBbGxTaWJsaW5ncyAoc2VjdGlvbikge1xuICAgIGNvbnN0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NlY3Rpb259YCk/LnBhcmVudEVsZW1lbnQ/LmNoaWxkcmVuO1xuICAgIFxuICAgIGZvciAobGV0IGVsIG9mIGVscykge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldEhhc2ggKHNlY3Rpb24pIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RSb3V0ZSAoc2VjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIHNldFByb2plY3Qoc2VjdGlvbi5zdWJzdHJpbmcoOCkpO1xuICAgICAgICBzaG93U2VjdGlvbihcInByb2plY3QtdGFza1wiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzZXRSb3V0ZShkZWZhdWx0Um91dGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvamVjdFJvdXRlIChwSWQpIHtcbiAgICBzZXRSb3V0ZShcInByb2plY3QtXCIgKyBwSWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGUgKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgIGhhbmRsZVJvdXRlKGdldFJvdXRlKCkpO1xufSkiLCJpbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCBpY29uIGZyb20gXCIuL2ljb25cIjtcbmltcG9ydCBuYXZFdmVudHMgZnJvbSBcIi4vbmF2RXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlciAoKSB7XG4gICAgY29uc3QgbG9nbyA9IGh0bWxFbCh7dGFnOidoMScsIHRleHQ6XCIjVG9Eb1wiLCBjbGFzc0xpc3Q6W1wibG9nb1wiXX0pO1xuXG4gICAgcmV0dXJuIGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJoZWFkZXJcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJoZWFkZXJcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBzaWRlYmFyKCksXG4gICAgICAgICAgICBsb2dvLFxuICAgICAgICAgICAgbmF2KCksXG4gICAgICAgIF1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuYXYgKCkge1xuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwibmF2XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wibWFpbi1uYXZcIiwgXCJuYXZcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbaHRtbEVsKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBsaUVsKFwic2VhcmNoXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlFbChcInBsdXNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBsaUVsKFwic3VuXCIpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KV1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2lkZWJhciAoKSB7XG4gICAgcmV0dXJuIGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJ1bFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbGlFbChcInNpZGViYXJcIiksXG4gICAgICAgIF1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBsaUVsIChuYXYpIHtcbiAgICBjb25zdCBpY29uTGkgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwibGlcIixcbiAgICAgICAgY2hpbGRyZW46IFtpY29uKG5hdildXG4gICAgfSk7XG5cbiAgICBpY29uTGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZFdmVudHNbbmF2XSk7XG5cbiAgICByZXR1cm4gaWNvbkxpO1xufSIsImltcG9ydCBodG1sRWwgZnJvbSBcIi4uLy4uL3V0aWxzL3JlbmRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGljb24gKG5hbWUsIGh0bWxPcHRpb25zID0ge30pIHtcbiAgICBpZiAoIWh0bWxPcHRpb25zLnByb3BzKSBodG1sT3B0aW9ucy5wcm9wcyA9IHt9O1xuICAgIGh0bWxPcHRpb25zLnByb3BzW1wiZGF0YS1mZWF0aGVyXCJdID0gbmFtZVxuXG4gICAgcmV0dXJuIGh0bWxFbCh7XG4gICAgICAgIC4uLmh0bWxPcHRpb25zLFxuICAgICAgICB0YWc6IFwiaVwiXG4gICAgfSlcbn0iLCJpbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi91dGlscy9yZW5kZXJcIlxuXG5jb25zdCBtb2RhbEZvcm0gPSBodG1sRWwgKHtcbiAgICB0YWc6IFwiZGlhbG9nXCIsXG4gICAgY2xhc3NMaXN0OiBbXCJtb2RhbC1mb3JtLWNvbnRhaW5lclwiXVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0TW9kYWxGb3JtIChmb3JtQ29udGVudHMsIHN1Ym1pdEZuKSB7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6IFwiU2F2ZVwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcIm1vZGFsLWZvcm0tc3VibWl0XCJdXG4gICAgfSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgICAgIHRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgIGNsYXNzTGlzdDpbXCJtb2RhbC1mb3JtLWNhbmNlbFwiXSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsRm9ybS5jbG9zZSgpKTtcblxuICAgIGZvcm1Db250ZW50cy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZm9ybS1jb250ZW50XCIpO1xuXG4gICAgY29uc3QgZm9ybUVsID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImZvcm1cIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJtb2RhbC1mb3JtXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgZm9ybUNvbnRlbnRzLFxuICAgICAgICAgICAgc3VibWl0QnRuLFxuICAgICAgICAgICAgY2FuY2VsQnRuXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIGZvcm1FbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgc3VibWl0Rm4oZm9ybSk7XG4gICAgICAgIFxuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIG1vZGFsRm9ybS5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgbW9kYWxGb3JtLnJlcGxhY2VDaGlsZHJlbihmb3JtRWwpO1xuXG4gICAgcmV0dXJuIG1vZGFsRm9ybTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxGb3JtOyIsImltcG9ydCB7IGlzU2FtZURheSwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgc2hvd05ld1Byb2plY3RUYXNrIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3Byb2plY3QtdGFza1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3Byb2plY3QtdGFzay91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0QWRkVGFza0ZuIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3V0aWxzL3Rhc2tzL2FkZC10YXNrXCI7XG5pbXBvcnQgdGFza0Zvcm1Db250ZW50cywgeyB1cGRhdGVUYXNrRm9ybSB9IGZyb20gXCIuLi8uLi9wYWdlcy91dGlscy90YXNrcy9mb3JtXCI7XG5pbXBvcnQgeyBnZXRSb3V0ZSB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL3JvdXRlc1wiO1xuaW1wb3J0IHsgZWRpdE1vZGFsRm9ybSB9IGZyb20gXCIuL21vZGFsLWZvcm1cIjtcbmltcG9ydCB7IGlzRGVhZGxpbmVUb2RheSB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFPcFwiO1xuaW1wb3J0IHsgYXBwZW5kVG9kYXlUYXNrIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3RvZGF5XCI7XG5pbXBvcnQgdXBkYXRlRGF0ZWRWaWV3IGZyb20gXCIuLi8uLi9wYWdlcy91dGlscy91cGRhdGUtZGF0ZWQtdmlld1wiO1xuXG5mdW5jdGlvbiBwbHVzICgpIHtcbiAgICBmdW5jdGlvbiBoYW5kbGVBbmltYXRpb24gKHRhc2spIHtcbiAgICAgICAgaWYgKGdldFJvdXRlKCkgPT09IFwidG9kYXlcIiAmJiAoaXNEZWFkbGluZVRvZGF5KHRhc2spKSkge1xuICAgICAgICAgICAgYXBwZW5kVG9kYXlUYXNrKHRhc2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdldFByb2plY3RJZCgpID09PSB0YXNrLnByb2plY3RJZCkgc2hvd05ld1Byb2plY3RUYXNrKHRhc2spO1xuXG4gICAgICAgIHVwZGF0ZURhdGVkVmlldygpO1xuICAgIH1cbiAgICB1cGRhdGVUYXNrRm9ybSh7fSk7XG4gICAgZWRpdE1vZGFsRm9ybSh0YXNrRm9ybUNvbnRlbnRzKCksIGdldEFkZFRhc2tGbihoYW5kbGVBbmltYXRpb24pKS5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgU2VhcmNoXCIpO1xufVxuXG5mdW5jdGlvbiBzdW4gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6cm9vdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbn1cblxuZnVuY3Rpb24gc2lkZWJhciAoZSkge1xuICAgIC8vIGZsaXAgc2lkZWJhciBzdmdcbiAgICBlLnRhcmdldC5jbG9zZXN0KCdzdmcnKS5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcFwiKTtcblxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1kaWFsb2dcIik7XG4gICAgaWYgKGRpYWxvZykge1xuICAgICAgICBpZiAoZGlhbG9nLm9wZW4pIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICBlbHNlIGRpYWxvZy5zaG93KCk7XG4gICAgfVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcGx1cyxcbiAgICBzZWFyY2gsXG4gICAgc3VuLFxuICAgIHNpZGViYXJcbn0iLCJpbXBvcnQgc2V0Um91dGUgZnJvbSBcIi4uLy4uL3JvdXRpbmcvcm91dGVzXCI7XG5pbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCBpY29uIGZyb20gXCIuL2ljb25cIjtcblxuY29uc3QgaWNvbk1hcHBlciA9ICB7XG4gICAgXCJ0b2RheVwiOiBcImhhc2hcIixcbiAgICBcInVwY29taW5nXCI6IFwiY2FsZW5kYXJcIixcbiAgICBcImNoZWNrbGlzdFwiOiBcImNoZWNrLWNpcmNsZVwiLFxuICAgIFwicHJvamVjdHNcIjogXCJmb2xkZXJcIlxufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKDAsMSkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zdWJzdHJpbmcoMSk7XG59XG5cbmZ1bmN0aW9uIGxpRWwgKG5hdikge1xuXG4gICAgY29uc3QgdGV4dCA9IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgIHRleHQ6IGNhcGl0YWxpemVGaXJzdExldHRlcihuYXYpXG4gICAgfSk7XG5cbiAgICBjb25zdCBsaSA9IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJsaVwiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgXCJkYXRhLW5hdlwiOiBuYXZcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGljb24oaWNvbk1hcHBlcltuYXZdKSxcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyICgpIHtcbiAgICBjb25zdCBuYXYgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwibmF2XCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgICAgIHRhZzogXCJ1bFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIGxpRWwoXCJ0b2RheVwiKSxcbiAgICAgICAgICAgICAgICAgICAgbGlFbChcInVwY29taW5nXCIpLFxuICAgICAgICAgICAgICAgICAgICBsaUVsKFwiY2hlY2tsaXN0XCIpLFxuICAgICAgICAgICAgICAgICAgICBsaUVsKFwicHJvamVjdHNcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBjb25zdCBkaWFsb2cgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGlhbG9nXCIsXG4gICAgICAgIGlkOiBcInNpZGViYXItZGlhbG9nXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBuYXZcbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoe3RhcmdldH0pID0+IHtcbiAgICAgICAgaWYgKCFkaWFsb2cub3BlbikgcmV0dXJuO1xuXG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoXCJkaWFsb2cjc2lkZWJhci1kaWFsb2dcIikpIHtcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdChcImxpXCIpKSB7XG4gICAgICAgICAgICBzZXRSb3V0ZSh0YXJnZXQuY2xvc2VzdChcImxpXCIpLmRhdGFzZXQubmF2KTtcbiAgICAgICAgICAgIC8vIEhpZGUgU2lkZWJhclxuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KTtcblxuICAgIHJldHVybiBkaWFsb2c7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdpdGhBbmltYXRpb24gKGVsKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcInJlbW92ZVwiKTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gZWwucmVtb3ZlKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkV2l0aEFuaW1hdGlvbiAoZWwsIGNvbnRhaW5lcikge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJhZGRcIik7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhZGRcIikpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcbn0iLCJpbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCBpY29uIGZyb20gXCIuLi9sYXlvdXQvaWNvblwiO1xuaW1wb3J0IHsgZWRpdE1vZGFsRm9ybSB9IGZyb20gJy4uL2xheW91dC9tb2RhbC1mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXRlbUFkZGVyQnRuIChuYW1lLCBjb250ZW50LCBhZGRJdGVtKSB7XG4gICAgY29uc3QgZWwgPSBodG1sRWwgKHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInRvZG8taXRlbVwiLCBcIml0ZW0tYWRkZXJcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBpY29uKFwicGx1c1wiKSxcbiAgICAgICAgICAgIGh0bWxFbCh7XG4gICAgICAgICAgICAgICAgdGFnOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFkZCBuZXcgXCIgKyBuYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICAvLyBlbC5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGVkaXRNb2RhbEZvcm0oY29udGVudCwgYWRkSXRlbSkuc2hvd01vZGFsKCk7XG4gICAgICAgICBcbiAgICAvLyB9KVxuXG4gICAgcmV0dXJuIGVsO1xufSIsImltcG9ydCBodG1sRWwgZnJvbSBcIi4uLy4uL3V0aWxzL3JlbmRlclwiO1xuXG5mdW5jdGlvbiBjaGVja2JveCAoaXNDaGVja2VkKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiaW5wdXRcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tY2hlY2tib3hcIl0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpc0NoZWNrZWQpIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgY2hlY2tib3hDb250ID0gaHRtbEVsICh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJyb3VuZFwiLCBcInRvZG8taXRlbS1jaGVja2JveFwiXSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGNoZWNrYm94LFxuICAgICAgICAgICAgLy8gaHRtbEVsKHtcbiAgICAgICAgICAgIC8vICAgICB0YWc6IFwibGFiZWxcIixcbiAgICAgICAgICAgIC8vICAgICBwcm9wczoge1xuICAgICAgICAgICAgLy8gICAgICAgICBmb3I6IFwidG9kby1pdGVtLWNoZWNrYm94XCJcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hlY2tib3hDb250O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uID0gXCJcIiwgaWNvblNldCA9IFtdLCBoYXNodGFnID0ge30sIHJlcXVpcmVzQ2hlY2tib3ggPSBmYWxzZSwgaXNDaGVja2VkID0gZmFsc2UpIHtcblxuICAgIGNvbnN0IHRpdGxlRWwgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInRvZG8taXRlbS10aXRsZVwiLCBcImxlZnRcIiwgXCJ0ZXh0LWNvbnRhaW5lclwiXVxuICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkVsID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICB0ZXh0OiBkZXNjcmlwdGlvbixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tZGVzY3JpcHRpb25cIiwgXCJ0b2RvLWl0ZW0tbGVmdFwiLCBcInRleHQtY29udGFpbmVyXCJdXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYXNodGFnRWwgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIHRleHQ6IGhhc2h0YWc/LnRleHQgfHwgXCJcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0taGFzaHRhZ1wiLCBcInRvZG8taXRlbS1yaWdodFwiLFwidGV4dC1jb250YWluZXJcIl1cbiAgICB9KTtcblxuICAgIGlmIChoYXNodGFnICYmIGhhc2h0YWcucmVmRm4pIGhhc2h0YWdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhc2h0YWcucmVmRm4pO1xuXG4gICAgY29uc3QgaWNvbkxpc3QgPSBpY29uU2V0Lm1hcChpY29uID0+IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJsaVwiLFxuICAgICAgICBjaGlsZHJlbjogW2ljb25dXG4gICAgfSkpO1xuXG4gICAgY29uc3QgaWNvbkVscyA9IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0taWNvbi1zZXRcIiwgXCJ0b2RvLWl0ZW0tcmlnaHRcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbaHRtbEVsKHtcbiAgICAgICAgICAgIHRhZzogXCJ1bFwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IGljb25MaXN0XG4gICAgICAgIH0pXVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtcbiAgICAgICAgdGl0bGVFbCxcbiAgICAgICAgZGVzY3JpcHRpb25FbCxcbiAgICAgICAgaWNvbkVscyxcbiAgICAgICAgaGFzaHRhZ0VsXG4gICAgXTtcblxuICAgIGlmIChyZXF1aXJlc0NoZWNrYm94KSBjb21wb25lbnRzLnB1c2goY2hlY2tib3goaXNDaGVja2VkKSk7XG5cbiAgICByZXR1cm4gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImxpXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1widG9kby1pdGVtXCJdLFxuICAgICAgICBjaGlsZHJlbjogY29tcG9uZW50c1xuICAgIH0pXG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xvc2VzdFRvZG9JdGVtIChlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KFwibGkudG9kby1pdGVtXCIpO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY3VycmVudEl0ZW0gXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBuZXdJdGVtIFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVG9kb0l0ZW0gKG5ld0l0ZW0sIGN1cnJlbnRJdGVtKSB7XG4gICAgY3VycmVudEl0ZW0ucmVwbGFjZUNoaWxkcmVuKC4uLm5ld0l0ZW0uY2hpbGRyZW4pO1xufSIsIi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJfU3RvcmFnZV9BUEkvVXNpbmdfdGhlX1dlYl9TdG9yYWdlX0FQSVxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSA9IHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpO1xuXG5leHBvcnQgZGVmYXVsdCBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZTtcbiAgIiwiaW1wb3J0IGh0bWxFbCBmcm9tIFwiLi9yZW5kZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRleHQgKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC50cmltKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRleHRJbnB1dEVsICh0ZXh0LCBuYW1lLCByZXF1aXJlZCA9IHRydWUsIG1heGxlbmd0aCA9IDE2LCBodG1sRWxPcHRpb25zID0ge30sIHR5cGUgPSBcInRleHRcIikge1xuXG4gICAgY29uc3QgaWQgPSAgXCJ0ZXh0LWlucHV0LVwiICsgZm9ybWF0VGV4dCh0ZXh0KTtcblxuICAgIGNvbnN0IGlucHV0ID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImlucHV0XCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIG1heGxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBpZFxuICAgIH0pO1xuXG4gICAgaWYgKHJlcXVpcmVkKSBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBsYWJlbCA9IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJsYWJlbFwiLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZm9yOiBpZFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBodG1sRWxPcHRpb25zLmNoaWxkcmVuID0gW1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgaW5wdXRcbiAgICBdXG5cbiAgICBpZiAoIWh0bWxFbE9wdGlvbnMuY2xhc3NMaXN0KSBodG1sRWxPcHRpb25zLmNsYXNzTGlzdCA9IFtdO1xuXG4gICAgaHRtbEVsT3B0aW9ucy5jbGFzc0xpc3QucHVzaChcInRleHQtaW5wdXRcIik7XG5cbiAgICByZXR1cm4gaHRtbEVsICh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgLi4uaHRtbEVsT3B0aW9uc1xuICAgIH0pXG59XG4vKipcbiAqIFxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBmaWVsZCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBlcnIgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93VmFsaWRhdGlvbkVycm9yIChmaWVsZCwgZXJyKSB7XG4gICAgZmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoZXJyKTtcbiAgICBmaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGZpZWxkLmNsb3Nlc3QoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBmaWVsZC5zZXRDdXN0b21WYWxpZGl0eSgnJykpXG59XG4iLCIvKipcbiAqIFxuICogQHBhcmFtIHsqfSBwYXJhbTAgXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IGh0bWxFbFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBodG1sRWwgKHt0YWcsIHRleHQgPSBcIlwiLCBjbGFzc0xpc3QgPSBbXSwgaWQgPSBcIlwiLCBjaGlsZHJlbiA9IFtdLCBwcm9wcyA9IHt9fSkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgaWYgKGNsYXNzTGlzdC5sZW5ndGgpIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaWQpIGVsLmlkID0gaWQ7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblxuICAgIHJldHVybiBlbDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHNpZ24gPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBcIjBcIik7XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufVxuIiwiLyoqXG4gKiBAbmFtZSBlbmRPZlRvbW9ycm93XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIHRvbW9ycm93LlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIHRvbW9ycm93LlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEByZXR1cm5zIFRoZSBlbmQgb2YgdG9tb3Jyb3dcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZlRvbW9ycm93KClcbiAqIC8vPT4gVHVlIE9jdCA3IDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRPZlRvbW9ycm93KCkge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gbm93LmdldE1vbnRoKCk7XG4gIGNvbnN0IGRheSA9IG5vdy5nZXREYXRlKCk7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXkgKyAxKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlbmRPZlRvbW9ycm93O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4vX2xpYi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXRJU099IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlIGFjY29yZGluZyB0byB0aGUgSVNPIDg2MDEgc3RhbmRhcmQgKGh0dHBzOi8vc3VwcG9ydC5zYXMuY29tL2RvY3VtZW50YXRpb24vY2RsL2VuL2xyZGljdC82NDMxNi9IVE1ML2RlZmF1bHQvdmlld2VyLmh0bSNhMDAzMTY5ODE0Lmh0bSkuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQuIE9wdGlvbnMgbWF5IGJlIHBhc3NlZCB0byBjb250cm9sIHRoZSBwYXJ0cyBhbmQgbm90YXRpb25zIG9mIHRoZSBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIChpbiBsb2NhLmwgdGltZSB6b25lKVxuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEgZm9ybWF0IChsb2NhbCB0aW1lIHpvbmUgaXMgVVRDKTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSlcbiAqIC8vPT4gJzIwMTktMDktMThUMTk6MDA6NTJaJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEsIHNob3J0IGZvcm1hdCAobG9jYWwgdGltZSB6b25lIGlzIFVUQyk6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXRJU08obmV3IERhdGUoMjAxOSwgOCwgMTgsIDE5LCAwLCA1MiksIHsgZm9ybWF0OiAnYmFzaWMnIH0pXG4gKiAvLz0+ICcyMDE5MDkxOFQxOTAwNTInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxOCBTZXB0ZW1iZXIgMjAxOSBpbiBJU08gODYwMSBmb3JtYXQsIGRhdGUgb25seTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSwgeyByZXByZXNlbnRhdGlvbjogJ2RhdGUnIH0pXG4gKiAvLz0+ICcyMDE5LTA5LTE4J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEgZm9ybWF0LCB0aW1lIG9ubHkgKGxvY2FsIHRpbWUgem9uZSBpcyBVVEMpOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpLCB7IHJlcHJlc2VudGF0aW9uOiAndGltZScgfSlcbiAqIC8vPT4gJzE5OjAwOjUyWidcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdElTTyhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuXG4gIGlmIChpc05hTihfZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHRpbWUgdmFsdWVcIik7XG4gIH1cblxuICBjb25zdCBmb3JtYXQgPSBvcHRpb25zPy5mb3JtYXQgPz8gXCJleHRlbmRlZFwiO1xuICBjb25zdCByZXByZXNlbnRhdGlvbiA9IG9wdGlvbnM/LnJlcHJlc2VudGF0aW9uID8/IFwiY29tcGxldGVcIjtcblxuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgbGV0IHR6T2Zmc2V0ID0gXCJcIjtcblxuICBjb25zdCBkYXRlRGVsaW1pdGVyID0gZm9ybWF0ID09PSBcImV4dGVuZGVkXCIgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IHRpbWVEZWxpbWl0ZXIgPSBmb3JtYXQgPT09IFwiZXh0ZW5kZWRcIiA/IFwiOlwiIDogXCJcIjtcblxuICAvLyBSZXByZXNlbnRhdGlvbiBpcyBlaXRoZXIgJ2RhdGUnIG9yICdjb21wbGV0ZSdcbiAgaWYgKHJlcHJlc2VudGF0aW9uICE9PSBcInRpbWVcIikge1xuICAgIGNvbnN0IGRheSA9IGFkZExlYWRpbmdaZXJvcyhfZGF0ZS5nZXREYXRlKCksIDIpO1xuICAgIGNvbnN0IG1vbnRoID0gYWRkTGVhZGluZ1plcm9zKF9kYXRlLmdldE1vbnRoKCkgKyAxLCAyKTtcbiAgICBjb25zdCB5ZWFyID0gYWRkTGVhZGluZ1plcm9zKF9kYXRlLmdldEZ1bGxZZWFyKCksIDQpO1xuXG4gICAgLy8geXl5eU1NZGQgb3IgeXl5eS1NTS1kZC5cbiAgICByZXN1bHQgPSBgJHt5ZWFyfSR7ZGF0ZURlbGltaXRlcn0ke21vbnRofSR7ZGF0ZURlbGltaXRlcn0ke2RheX1gO1xuICB9XG5cbiAgLy8gUmVwcmVzZW50YXRpb24gaXMgZWl0aGVyICd0aW1lJyBvciAnY29tcGxldGUnXG4gIGlmIChyZXByZXNlbnRhdGlvbiAhPT0gXCJkYXRlXCIpIHtcbiAgICAvLyBBZGQgdGhlIHRpbWV6b25lLlxuICAgIGNvbnN0IG9mZnNldCA9IF9kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZU9mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gICAgICBjb25zdCBob3VyT2Zmc2V0ID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzb2x1dGVPZmZzZXQgLyA2MCksIDIpO1xuICAgICAgY29uc3QgbWludXRlT2Zmc2V0ID0gYWRkTGVhZGluZ1plcm9zKGFic29sdXRlT2Zmc2V0ICUgNjAsIDIpO1xuICAgICAgLy8gSWYgbGVzcyB0aGFuIDAsIHRoZSBzaWduIGlzICssIGJlY2F1c2UgaXQgaXMgYWhlYWQgb2YgdGltZS5cbiAgICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPCAwID8gXCIrXCIgOiBcIi1cIjtcblxuICAgICAgdHpPZmZzZXQgPSBgJHtzaWdufSR7aG91ck9mZnNldH06JHttaW51dGVPZmZzZXR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHpPZmZzZXQgPSBcIlpcIjtcbiAgICB9XG5cbiAgICBjb25zdCBob3VyID0gYWRkTGVhZGluZ1plcm9zKF9kYXRlLmdldEhvdXJzKCksIDIpO1xuICAgIGNvbnN0IG1pbnV0ZSA9IGFkZExlYWRpbmdaZXJvcyhfZGF0ZS5nZXRNaW51dGVzKCksIDIpO1xuICAgIGNvbnN0IHNlY29uZCA9IGFkZExlYWRpbmdaZXJvcyhfZGF0ZS5nZXRTZWNvbmRzKCksIDIpO1xuXG4gICAgLy8gSWYgdGhlcmUncyBhbHNvIGRhdGUsIHNlcGFyYXRlIGl0IHdpdGggdGltZSB3aXRoICdUJ1xuICAgIGNvbnN0IHNlcGFyYXRvciA9IHJlc3VsdCA9PT0gXCJcIiA/IFwiXCIgOiBcIlRcIjtcblxuICAgIC8vIENyZWF0ZXMgYSB0aW1lIHN0cmluZyBjb25zaXN0aW5nIG9mIGhvdXIsIG1pbnV0ZSwgYW5kIHNlY29uZCwgc2VwYXJhdGVkIGJ5IGRlbGltaXRlcnMsIGlmIGRlZmluZWQuXG4gICAgY29uc3QgdGltZSA9IFtob3VyLCBtaW51dGUsIHNlY29uZF0uam9pbih0aW1lRGVsaW1pdGVyKTtcblxuICAgIC8vIEhIbW1zcyBvciBISDptbTpzcy5cbiAgICByZXN1bHQgPSBgJHtyZXN1bHR9JHtzZXBhcmF0b3J9JHt0aW1lfSR7dHpPZmZzZXR9YDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0SVNPO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5KG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gM1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUgbG9jYWxlIHN0cmluZyAoc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsI2xvY2FsZXNfYXJndW1lbnQpLlxuICovXG5cbi8qKlxuICogVGhlIGZvcm1hdCBvcHRpb25zIChzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwvRGF0ZVRpbWVGb3JtYXQvRGF0ZVRpbWVGb3JtYXQjb3B0aW9ucylcbiAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGUgb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGludGxGb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlIHdpdGggSW50bC5EYXRlVGltZUZvcm1hdCAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9EYXRlVGltZUZvcm1hdCkuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LlxuICogVGhlIG1ldGhvZCB1c2VzIFtgSW50bC5EYXRlVGltZUZvcm1hdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwvRGF0ZVRpbWVGb3JtYXQpIGluc2lkZS5cbiAqIGZvcm1hdE9wdGlvbnMgYXJlIHRoZSBzYW1lIGFzIFtgSW50bC5EYXRlVGltZUZvcm1hdGAgb3B0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9EYXRlVGltZUZvcm1hdCN1c2luZ19vcHRpb25zKVxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgYmVmb3JlIE5vZGUgdmVyc2lvbiAxMy4wLjAsIG9ubHkgdGhlIGxvY2FsZSBkYXRhIGZvciBlbi1VUyBpcyBhdmFpbGFibGUgYnkgZGVmYXVsdC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGZvcm1hdFxuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDEwIE9jdG9iZXIgMjAxOSBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGludGxGb3JtYXQobmV3IERhdGUoMjAxOSwgOSwgNCwgMTIsIDMwLCAxMywgNDU2KSlcbiAqIC8vPT4gMTAvNC8yMDE5XG4gKi9cblxuLyoqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGZvcm1hdFxuICogQHBhcmFtIGxvY2FsZU9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBsb2NhbGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMCBPY3RvYmVyIDIwMTkgaW4gS29yZWFuLlxuICogLy8gQ29udmVydCB0aGUgZGF0ZSB3aXRoIGxvY2FsZSdzIG9wdGlvbnMuXG4gKiBjb25zdCByZXN1bHQgPSBpbnRsRm9ybWF0KG5ldyBEYXRlKDIwMTksIDksIDQsIDEyLCAzMCwgMTMsIDQ1NiksIHtcbiAqICAgbG9jYWxlOiAna28tS1InLFxuICogfSlcbiAqIC8vPT4gMjAxOS4gMTAuIDQuXG4gKi9cblxuLyoqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGZvcm1hdFxuICogQHBhcmFtIGZvcm1hdE9wdGlvbnMgLSBUaGUgZm9ybWF0IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMCBPY3RvYmVyIDIwMTkuXG4gKiAvLyBDb252ZXJ0IHRoZSBkYXRlIHdpdGggZm9ybWF0J3Mgb3B0aW9ucy5cbiAqIGNvbnN0IHJlc3VsdCA9IGludGxGb3JtYXQuZGVmYXVsdChuZXcgRGF0ZSgyMDE5LCA5LCA0LCAxMiwgMzAsIDEzLCA0NTYpLCB7XG4gKiAgIHllYXI6ICdudW1lcmljJyxcbiAqICAgbW9udGg6ICdudW1lcmljJyxcbiAqICAgZGF5OiAnbnVtZXJpYycsXG4gKiAgIGhvdXI6ICdudW1lcmljJyxcbiAqIH0pXG4gKiAvLz0+IDEwLzQvMjAxOSwgMTIgUE1cbiAqL1xuXG4vKipcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gZm9ybWF0XG4gKiBAcGFyYW0gZm9ybWF0T3B0aW9ucyAtIFRoZSBmb3JtYXQgb3B0aW9uc1xuICogQHBhcmFtIGxvY2FsZU9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBsb2NhbGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMCBPY3RvYmVyIDIwMTkgaW4gR2VybWFuLlxuICogLy8gQ29udmVydCB0aGUgZGF0ZSB3aXRoIGZvcm1hdCdzIG9wdGlvbnMgYW5kIGxvY2FsZSdzIG9wdGlvbnMuXG4gKiBjb25zdCByZXN1bHQgPSBpbnRsRm9ybWF0KG5ldyBEYXRlKDIwMTksIDksIDQsIDEyLCAzMCwgMTMsIDQ1NiksIHtcbiAqICAgd2Vla2RheTogJ2xvbmcnLFxuICogICB5ZWFyOiAnbnVtZXJpYycsXG4gKiAgIG1vbnRoOiAnbG9uZycsXG4gKiAgIGRheTogJ251bWVyaWMnLFxuICogfSwge1xuICogICBsb2NhbGU6ICdkZS1ERScsXG4gKiB9KVxuICogLy89PiBGcmVpdGFnLCA0LiBPa3RvYmVyIDIwMTlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW50bEZvcm1hdChkYXRlLCBmb3JtYXRPckxvY2FsZSwgbG9jYWxlT3B0aW9ucykge1xuICBsZXQgZm9ybWF0T3B0aW9ucztcblxuICBpZiAoaXNGb3JtYXRPcHRpb25zKGZvcm1hdE9yTG9jYWxlKSkge1xuICAgIGZvcm1hdE9wdGlvbnMgPSBmb3JtYXRPckxvY2FsZTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbGVPcHRpb25zID0gZm9ybWF0T3JMb2NhbGU7XG4gIH1cblxuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlT3B0aW9ucz8ubG9jYWxlLCBmb3JtYXRPcHRpb25zKS5mb3JtYXQoXG4gICAgdG9EYXRlKGRhdGUpLFxuICApO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1hdE9wdGlvbnMob3B0cykge1xuICByZXR1cm4gb3B0cyAhPT0gdW5kZWZpbmVkICYmICEoXCJsb2NhbGVcIiBpbiBvcHRzKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpbnRsRm9ybWF0O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSBkYXRlVG9Db21wYXJlIC0gVGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKlxuICogQHJldHVybnMgVGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBZnRlcihkYXRlLCBkYXRlVG9Db21wYXJlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBfZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIF9kYXRlLmdldFRpbWUoKSA+IF9kYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0FmdGVyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0gZGF0ZVRvQ29tcGFyZSAtIFRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICpcbiAqIEByZXR1cm5zIFRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JlZm9yZShkYXRlLCBkYXRlVG9Db21wYXJlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBfZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuICtfZGF0ZSA8ICtfZGF0ZVRvQ29tcGFyZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0JlZm9yZTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0VxdWFsXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgZXF1YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGVxdWFsP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgZXF1YWxcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgSnVseSAyMDE0IDA2OjMwOjQ1LjAwMCBhbmQgMiBKdWx5IDIwMTQgMDY6MzA6NDUuNTAwIGVxdWFsP1xuICogY29uc3QgcmVzdWx0ID0gaXNFcXVhbChcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgMzAsIDQ1LCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgMzAsIDQ1LCA1MDApXG4gKiApXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsKGxlZnREYXRlLCByaWdodERhdGUpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGxlZnREYXRlKTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShyaWdodERhdGUpO1xuICByZXR1cm4gK19kYXRlTGVmdCA9PT0gK19kYXRlUmlnaHQ7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNFcXVhbDtcbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaHRtbEVsIGZyb20gXCIuL3V0aWxzL3JlbmRlclwiO1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi91aS9sYXlvdXQvaGVhZGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCJcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3VpL2xheW91dC9zaWRlYmFyXCI7XG5pbXBvcnQgdG9kYXkgZnJvbSBcIi4vcGFnZXMvdG9kYXlcIjtcbmltcG9ydCB1cGNvbWluZyBmcm9tIFwiLi9wYWdlcy91cGNvbWluZ1wiO1xuaW1wb3J0IGNoZWNrbGlzdCBmcm9tIFwiLi9wYWdlcy9jaGVja2xpc3RcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9wYWdlcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHNldFJvdXRlLCB7IGdldFJvdXRlIH0gZnJvbSBcIi4vcm91dGluZy9yb3V0ZXNcIjtcbmltcG9ydCBtb2RhbEZvcm0gZnJvbSBcIi4vdWkvbGF5b3V0L21vZGFsLWZvcm1cIjtcbmltcG9ydCBwcm9qZWN0VGFzayBmcm9tIFwiLi9wYWdlcy9wcm9qZWN0LXRhc2tcIjtcbmltcG9ydCB7IGRlZmF1bHRSb3V0ZSB9IGZyb20gXCIuL2RhdGEvY29uc3RhbnRzXCI7XG5jb25zdCBmZWF0aGVyID0gcmVxdWlyZSgnZmVhdGhlci1pY29ucycpO1xuXG5jb25zdCBjb21wb25lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwibWFpblwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgdG9kYXkoKSxcbiAgICAgICAgICAgIHVwY29taW5nKCksXG4gICAgICAgICAgICBjaGVja2xpc3QoKSxcbiAgICAgICAgICAgIHByb2plY3RzKCksXG4gICAgICAgICAgICBwcm9qZWN0VGFzaygpXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGlkOiBcImNvbnRlbnRcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGhlYWRlcigpLFxuICAgICAgICAgICAgc2lkZWJhcigpLFxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lcixcbiAgICAgICAgICAgIG1vZGFsRm9ybVxuICAgICAgICBdXG4gICAgfSk7XG59KSgpO1xuXG5mdW5jdGlvbiBoYW5kbGVSb3V0ZSgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZ2V0Um91dGUoKSB8fCBkZWZhdWx0Um91dGU7XG4gICAgc2V0Um91dGUoc2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIHNldFRoZW1lKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIikuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcblxuLy8gU2hvdyBTVkdzXG5mdW5jdGlvbiBzaG93U1ZHcyAoKSB7XG4gICAgZmVhdGhlci5yZXBsYWNlKCk7XG4gICAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIGluIERPTVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICBmZWF0aGVyLnJlcGxhY2UoKVxuICAgIH0pXG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudCwge1xuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICB9KVxufVxuXG5zZXRUaGVtZSgpO1xuaGFuZGxlUm91dGUoKTtcbnNob3dTVkdzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=