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
    }
}

#sidebar-dialog {

    position: fixed;
    height: 100vh;
    margin: 0;
    padding: 0;
    top: calc(2 * var(--padding-top-bottom) + var(--title-font-size) + var(--header-shadow-width));
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
}

.page-container > .heading {
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
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"reset.css\");\n@import url(\"var.css\");\n@import url(\"animations.css\");\n@import url(\"checkbox.css\");\n\n*{\n    box-sizing: border-box;\n}\n\n#content {\n    min-height: 100vh;\n    color: var(--color);\n    background-color: var(--background-color);\n    font-family: var(--font-family);\n    color-scheme: var(--color-scheme);\n\n    /* Layout */\n    /* display: flex;\n    flex-direction: column;\n    justify-content: space-between; */\n}\n\n.flip {\n    transform: rotate(180deg); \n    \n    &:is(svg, i):hover{\n        transform: rotate(180deg) scale(120%); \n    }\n}\n\nsvg, i {\n    cursor: pointer;\n    \n    &:hover {\n        transform: scale(120%);\n    }\n}\n\n.header {\n    display: flex;\n    justify-content: space-evenly;\n    gap: var(--gap);\n    padding: var(--padding-top-bottom) var(--padding-left-right);\n    position: sticky;\n    top: 0;\n    box-shadow: var(--shadow-color) 0px 3.5px 4.5px 4.5px;\n\n    background-color: var(--header-color);\n    backdrop-filter: blur(10px);\n\n    margin-bottom: var(--padding-top-bottom);\n\n    z-index: 10;\n\n    & > .logo {\n        flex: 1;\n        font-size: var(--title-font-size);\n    }\n\n    & ul {\n        display: flex;\n        justify-content: space-evenly;\n        gap: calc(2 * var(--gap));\n    }\n}\n\nli, .logo {\n    display: flex;\n    align-items: center;\n    gap: var(--gap);\n}\n\ndialog, input {\n    /* font and background */\n    color: var(--color);\n    background-color: var(--shadow-color);\n    font-family: var(--font-family);\n\n    &::backdrop {\n        background-color: var(--shadow-color);\n    }\n}\n\n#sidebar-dialog {\n\n    position: fixed;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    top: calc(2 * var(--padding-top-bottom) + var(--title-font-size) + var(--header-shadow-width));\n    border: none;\n    outline: none;\n    \n    /* transition */\n    animation: slide-out 0.5s ease-out;\n\n    &[open] {\n        animation: slide-in 0.5s ease-out;\n    }\n\n    & > nav {\n        width: 100%;\n    }\n\n    & ul {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n    \n        & > li {\n            padding: calc(0.5 * var(--gap)) var(--padding-left-right);\n            cursor: pointer;\n\n            &:hover {\n                background-color: var(--background-color);\n            }\n        }\n    }\n}\n\nmain {\n    padding: var(--padding-top-bottom) 0;\n}\n\n.page-container, .todo-item-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--gap);\n    width: 100%;\n}\n\n.page-container > .heading {\n    font-size: 1.5rem;\n    display: flex;\n    gap: var(--gap);\n    align-items: center;\n    justify-content: flex-start;\n    width: min(1000px, 98%);\n    padding: var(--padding-top-bottom) 0;\n    border-bottom: 4px solid var(--shadow-color);\n    \n    & > svg {\n        cursor: auto;\n\n        &:hover {\n            transform: scale(1);\n        }\n    }\n}\n\n.todo-item-container {\n    flex-direction: column-reverse;\n\n    &:empty {\n        display: none;\n    }\n}\n\n.item-adder {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    gap: var(--gap);\n}\n\n.todo-item {\n    /* display and grid view */\n    display: grid;\n    grid-template-columns: min-content repeat(3, 1fr);\n    /* grid-template-rows:  repeat(2, 1fr); */\n\n    /* padding and width for better view */\n    padding: var(--padding-top-bottom) var(--padding-left-right);\n    width: min(1000px, 98%);\n    border-radius: 10px;\n    overflow: hidden;\n    background-color: var(--shadow-color);\n\n    & > .todo-item-checkbox {\n        grid-column: 1 / 2;\n        grid-row: 1 / 3;\n        height: 100%;\n        display: flex;\n        align-items: center;\n    }\n\n    & > .todo-item-title {\n        grid-column: 2 / 4;\n        grid-row: 1 / 2;\n    }\n    \n    & > .todo-item-description {\n        grid-column: 2 / 4;\n        grid-row: 2 / 3;\n    } \n    \n    & > .todo-item-icon-set{\n        grid-column: 4 / 5;\n        grid-row: 1 / 2;\n        \n        & > ul {\n            display: flex;\n            justify-content: end;\n            gap: var(--gap);\n        }\n    }\n\n    & > .todo-item-hashtag {\n        grid-column: 4 / 5;\n        grid-row: 2 / 3;\n        cursor: pointer;\n\n        &:not(:empty):before {\n            content: '#';\n        }\n\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n    \n    & > .todo-item-right {\n        text-align: end;\n    }\n\n    & [class*=\"trash\"] {\n        color: red;\n    }\n\n    /* animations */\n    &.add {\n        animation: pop-in 0.3s ease-out;\n    }\n    \n    &.remove {\n        animation: pop-out 0.3s ease-out;\n    }\n\n    \n}\n\ndiv.text-container {\n    width: 100%;\n    text-wrap: nowrap;\n    overflow: hidden !important;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\ndialog.modal-form-container {\n    border-radius: 10px;\n}\n\nform.modal-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: max-content max-content;\n    gap: var(--gap);\n    justify-content: center;\n    max-width: 400px;\n\n    & > .modal-form-content {\n        grid-column: 1 / 3;\n        grid-row: 1 / 2;\n\n        & > div {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin: var(--gap);\n        }\n    }\n\n    & > button {\n        padding: 0.3rem 1rem;\n        border-radius: 10px;\n        font-size: 1.1rem;\n        cursor: pointer;\n    \n        /* &[class*=\"cancel\"] {\n            background-color: red;\n            color: white;\n        } */\n\n        &[class*=\"submit\"] {\n            background-color: limegreen;\n            color: white;\n        }\n    }\n}\n\ninput {\n    font-size: 1.1rem;\n    color: var(--color);\n    background-color: var(--background-color);\n    outline: none;\n    border-radius: 5px;\n    border: 1px solid currentColor;\n}\n\n.text-input {\n    position: relative;\n    height: var(--text-input-height);\n    display: flex;\n    justify-content: center !important;\n    align-items: center !important;\n\n    & > label {\n        position: absolute;\n        cursor: text;\n\n        &:has(~ input:focus, ~ input:valid) {\n            top: -0.6rem;\n            left: 1rem;\n            background-color: limegreen;\n            color: white;\n            padding: 0.2rem 0.4rem;\n        }\n    }\n\n    & > input {\n        align-self: flex-end;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        font-size: 1.1rem;\n        padding: 0 1rem;\n\n        &:is(:focus, :valid){\n            border: 2px solid limegreen;\n        }\n\n    }\n}\n\ndiv.date-priority-project-cont {\n    display: grid !important;\n    gap: var(--gap);\n    text-align: center;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n\n    & > div:has(input[type=\"date\"]) {\n        grid-column: 1 / 3;\n        grid-row: 1 / 2;\n        color-scheme: var(--color-scheme);\n        color: var(--color);\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: calc(var(--text-input-height)*0.6);\n        gap: var(--gap);\n\n        & > input[type=\"date\"] {\n            width: 100%;\n            height: 100%;\n            text-align: center;\n            padding: 0.3rem 0.1rem;\n            cursor: pointer;\n            background-color: var(--background-color);\n\n            &.selected {\n                background-color: limegreen;\n                color: white;\n            }        \n        }\n    }\n\n    & > select {\n        font-size: 1.05rem;\n        text-align: center;\n        background-color: var(--background-color);\n        color: var(--color);\n        border: 1px solid currentColor;\n        border-radius: 5px;\n        outline: 0;\n        padding: 0.3rem 0.1rem;\n        width: 100%;\n\n        & > option {\n            background-color: var(--background-color);\n            color: var(--color);\n        }\n\n        &:valid {\n            background-color: limegreen;\n            color: white;\n        }\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatISO.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isSameDay.mjs");
/* harmony import */ var _utils_checkStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/checkStorage */ "./src/utils/checkStorage.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data/data.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/data/constants.js");





function setTaskAsCompleted (taskId) {
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
    
    const clonedTask = structuredClone(task);
    // Add the date of task added to checklist to remove it later
    clonedTask.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.formatISO)(new Date(), { representation: 'date' });
    _data__WEBPACK_IMPORTED_MODULE_1__.checklist.add(clonedTask);
    updateData("checklist", _data__WEBPACK_IMPORTED_MODULE_1__.checklist.list);
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
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isToday)(task.date) || (task.repeat && task.repeat.includes(todayDay));
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
        return task.date || !(_data__WEBPACK_IMPORTED_MODULE_1__.checklist.get(task.id) && (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isSameDay)(_data__WEBPACK_IMPORTED_MODULE_1__.checklist.get(task.id).date, date))
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
/* harmony export */   updateUpcomingView: () => (/* binding */ updateUpcomingView)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfTomorrow.mjs");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ "./src/data/data.js");
/* harmony import */ var _data_dataOp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/dataOp */ "./src/data/dataOp.js");
/* harmony import */ var _ui_layout_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/layout/icon */ "./src/ui/layout/icon.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_tasks_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/tasks/icon */ "./src/pages/utils/tasks/icon.js");
/* harmony import */ var _utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/tasks/task-element */ "./src/pages/utils/tasks/task-element.js");








const pageCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
    tag: "div",
    classList: ["page-container"],
});

function upcoming () {

    updateUpcomingView();

    pageCont.addEventListener('click', ({target}) => (0,_utils_tasks_icon__WEBPACK_IMPORTED_MODULE_4__.handleIcons)(target));

    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "div",
        id: "upcoming",
        children: [
            pageCont
        ]
    });
}

function updateUpcomingView () {
    const tomorrowTasks = _data_data__WEBPACK_IMPORTED_MODULE_0__.tasks.getTasksByDate((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.startOfTomorrow)());

    const liEls = (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.filterIncompleteTasks)(tomorrowTasks, (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.startOfTomorrow)()).map(task => (0,_utils_tasks_task_element__WEBPACK_IMPORTED_MODULE_5__["default"])(task));
    
    const taskCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "ul",
        classList: ["todo-item-container"],
        children: liEls
    });

    pageCont.replaceChildren((0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tag: "div",
        classList: ["heading"],
        children: [
            (0,_ui_layout_icon__WEBPACK_IMPORTED_MODULE_2__["default"])("calendar"),
            (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
                tag: "h1",
                text: "Upcoming"
            })
        ]
    }),
    taskCont);
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
    if (el.closest('input[type="checkbox"]')) (0,_tools__WEBPACK_IMPORTED_MODULE_2__.toggleTaskCompletion)(checkbox, taskEl);
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

    (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.updateData)("checklist", _data_data__WEBPACK_IMPORTED_MODULE_0__.checklist.list);

    (0,_ui_list_animation__WEBPACK_IMPORTED_MODULE_6__.removeWithAnimation)(taskEl);

   
}

function toggleTaskCompletion (checkboxEl, taskEl) {
    if (checkboxEl.checked) {
        const task = (0,_data_dataOp__WEBPACK_IMPORTED_MODULE_1__.setTaskAsCompleted)(taskEl.id);
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
        text: "Add",
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
        children: [
            (0,_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(iconMapper[nav]),
            text
        ]
    });

    li.addEventListener('click', (e) => {
        (0,_routing_routes__WEBPACK_IMPORTED_MODULE_0__["default"])(nav);
        // Hide Sidebar
        // e.target.closest("dialog").close();
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
    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: "dialog",
        id: "sidebar-dialog",
        children: [
            nav
        ]
    });;
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

/***/ "./node_modules/date-fns/startOfTomorrow.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfTomorrow.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfTomorrow: () => (/* binding */ startOfTomorrow)
/* harmony export */ });
/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @description
 * Return the start of tomorrow.
 *
 * @returns The start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfTomorrow);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsTUFBTSxPQUFPLE9BQU8sS0FBSyxhQUFhLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxhQUFhLGFBQWEsY0FBYyxjQUFjLFlBQVksS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxZQUFZLEtBQUssYUFBYSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxXQUFXLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLGFBQWEsTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFlBQVksS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsTUFBTSxZQUFZLFlBQVksS0FBSyxV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REFBSztBQUNqQixZQUFZLDJEQUFRO0FBQ3BCLFlBQVksNERBQVM7QUFDckIsWUFBWSwyREFBUTtBQUNwQixZQUFZLGdFQUFXO0FBQ3ZCO0FBQ0EsS0FBSzs7QUFFTCxXQUFXLHlEQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQU07QUFDbEIsWUFBWSw4REFBTztBQUNuQjtBQUNBLFlBQVksNkRBQVM7QUFDckI7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBLG9CQUFvQix5REFBUSxNQUFNLDBEQUFZO0FBQzlDLElBQUksMkRBQVE7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9jaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvdmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9mZWF0aGVyLWljb25zL2Rpc3QvZmVhdGhlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RhdGEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGF0YS9kYXRhT3AuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kYXRhL2RhdGFTdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9jaGVja2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9wcm9qZWN0LXRhc2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9wcm9qZWN0LXRhc2svdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9wcm9qZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2VzL3Byb2plY3RzL3V0aWxzL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9wcm9qZWN0cy91dGlscy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvcHJvamVjdHMvdXRpbHMvaWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2VzL3Byb2plY3RzL3V0aWxzL3Byb2plY3QtZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9wcm9qZWN0cy91dGlscy90b29scy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2VzL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvdXBjb21pbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy91dGlscy90YXNrcy9hZGQtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2VzL3V0aWxzL3Rhc2tzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy91dGlscy90YXNrcy9pY29uLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvdXRpbHMvdGFza3MvdGFzay1lbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvdXRpbHMvdGFza3MvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy91dGlscy91cGRhdGUtZGF0ZWQtdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3JvdXRpbmcvcm91dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkvbGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpL2xheW91dC9pY29uLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkvbGF5b3V0L21vZGFsLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aS9sYXlvdXQvbmF2RXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkvbGF5b3V0L3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aS9saXN0L2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpL2xpc3QvaXRlbS1hZGRlci1idG4uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aS9saXN0L2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91dGlscy9jaGVja1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91dGlscy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdXRpbHMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9hZGRMZWFkaW5nWmVyb3MubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0SVNPLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0JlZm9yZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0VxdWFsLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZURheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZlRvbW9ycm93Lm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcG9wLWluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxMDAlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBwb3Atb3V0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBvcC1pbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwb3Atb3V0IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXG4gICAgR3JlYXQgaGVscFxuICAgIGh0dHBzOi8vbW9kZXJuY3NzLmRldi9wdXJlLWNzcy1jdXN0b20tY2hlY2tib3gtc3R5bGUvXG4qL1xuXG5kaXYuZGF5cy1jb250ID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xuICAgICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgXG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBhdHRyKGRheSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbmRpdi5yb3VuZCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgLyogQWRkIGlmIG5vdCB1c2luZyBhdXRvcHJlZml4ZXIgKi9cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAvKiBGb3IgaU9TIDwgMTUgdG8gcmVtb3ZlIGdyYWRpZW50IGJhY2tncm91bmQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnXFxcXDI3MTMnO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NoZWNrYm94LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7S0FDSyxrQ0FBa0M7SUFDbkMsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MseUJBQXlCOztJQUV6QixZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGVBQWU7O0lBRWY7UUFDSSxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0IsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsK0NBQStDO0lBQy9DLHlCQUF5Qjs7SUFFekIsY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZUFBZTs7SUFFZjtRQUNJLDJCQUEyQjtRQUMzQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjs7UUFFbkI7WUFDSSxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLG1CQUFtQjtRQUN2QjtJQUNKO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4gICAgR3JlYXQgaGVscFxcbiAgICBodHRwczovL21vZGVybmNzcy5kZXYvcHVyZS1jc3MtY3VzdG9tLWNoZWNrYm94LXN0eWxlL1xcbiovXFxuXFxuZGl2LmRheXMtY29udCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxuICAgICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF5KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB9XFxuXFxuICAgICY6Y2hlY2tlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuZGl2LnJvdW5kID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLyogRm9yIGlPUyA8IDE1IHRvIHJlbW92ZSBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuXFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmOmNoZWNrZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgY29udGVudDogJ1xcXFwyNzEzJztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmFyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbnMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hlY2tib3guY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbiAgICBjb2xvci1zY2hlbWU6IHZhcigtLWNvbG9yLXNjaGVtZSk7XG5cbiAgICAvKiBMYXlvdXQgKi9cbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xufVxuXG4uZmxpcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgXG4gICAgXG4gICAgJjppcyhzdmcsIGkpOmhvdmVye1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDEyMCUpOyBcbiAgICB9XG59XG5cbnN2ZywgaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSB2YXIoLS1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgMHB4IDMuNXB4IDQuNXB4IDQuNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG5cbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nLXRvcC1ib3R0b20pO1xuXG4gICAgei1pbmRleDogMTA7XG5cbiAgICAmID4gLmxvZ28ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXRpdGxlLWZvbnQtc2l6ZSk7XG4gICAgfVxuXG4gICAgJiB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBnYXA6IGNhbGMoMiAqIHZhcigtLWdhcCkpO1xuICAgIH1cbn1cblxubGksIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xufVxuXG5kaWFsb2csIGlucHV0IHtcbiAgICAvKiBmb250IGFuZCBiYWNrZ3JvdW5kICovXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XG5cbiAgICAmOjpiYWNrZHJvcCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvdy1jb2xvcik7XG4gICAgfVxufVxuXG4jc2lkZWJhci1kaWFsb2cge1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdG9wOiBjYWxjKDIgKiB2YXIoLS1wYWRkaW5nLXRvcC1ib3R0b20pICsgdmFyKC0tdGl0bGUtZm9udC1zaXplKSArIHZhcigtLWhlYWRlci1zaGFkb3ctd2lkdGgpKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICAvKiB0cmFuc2l0aW9uICovXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC41cyBlYXNlLW91dDtcblxuICAgICZbb3Blbl0ge1xuICAgICAgICBhbmltYXRpb246IHNsaWRlLWluIDAuNXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJiA+IG5hdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICYgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBcbiAgICAgICAgJiA+IGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGMoMC41ICogdmFyKC0tZ2FwKSkgdmFyKC0tcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1haW4ge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctdG9wLWJvdHRvbSkgMDtcbn1cblxuLnBhZ2UtY29udGFpbmVyLCAudG9kby1pdGVtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1nYXApO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFnZS1jb250YWluZXIgPiAuaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IG1pbigxMDAwcHgsIDk4JSk7XG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSAwO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1zaGFkb3ctY29sb3IpO1xuICAgIFxuICAgICYgPiBzdmcge1xuICAgICAgICBjdXJzb3I6IGF1dG87XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9kby1pdGVtLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uaXRlbS1hZGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG59XG5cbi50b2RvLWl0ZW0ge1xuICAgIC8qIGRpc3BsYXkgYW5kIGdyaWQgdmlldyAqL1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCByZXBlYXQoMywgMWZyKTtcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6ICByZXBlYXQoMiwgMWZyKTsgKi9cblxuICAgIC8qIHBhZGRpbmcgYW5kIHdpZHRoIGZvciBiZXR0ZXIgdmlldyAqL1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctdG9wLWJvdHRvbSkgdmFyKC0tcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICB3aWR0aDogbWluKDEwMDBweCwgOTglKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93LWNvbG9yKTtcblxuICAgICYgPiAudG9kby1pdGVtLWNoZWNrYm94IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmID4gLnRvZG8taXRlbS10aXRsZSB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIH1cbiAgICBcbiAgICAmID4gLnRvZG8taXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIH0gXG4gICAgXG4gICAgJiA+IC50b2RvLWl0ZW0taWNvbi1zZXR7XG4gICAgICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgICAgICBcbiAgICAgICAgJiA+IHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICAgICAgICAgIGdhcDogdmFyKC0tZ2FwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgPiAudG9kby1pdGVtLWhhc2h0YWcge1xuICAgICAgICBncmlkLWNvbHVtbjogNCAvIDU7XG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6bm90KDplbXB0eSk6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcjJztcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJiA+IC50b2RvLWl0ZW0tcmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuXG4gICAgJiBbY2xhc3MqPVwidHJhc2hcIl0ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cblxuICAgIC8qIGFuaW1hdGlvbnMgKi9cbiAgICAmLmFkZCB7XG4gICAgICAgIGFuaW1hdGlvbjogcG9wLWluIDAuM3MgZWFzZS1vdXQ7XG4gICAgfVxuICAgIFxuICAgICYucmVtb3ZlIHtcbiAgICAgICAgYW5pbWF0aW9uOiBwb3Atb3V0IDAuM3MgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgXG59XG5cbmRpdi50ZXh0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmRpYWxvZy5tb2RhbC1mb3JtLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZm9ybS5tb2RhbC1mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xuICAgIGdhcDogdmFyKC0tZ2FwKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuXG4gICAgJiA+IC5tb2RhbC1mb3JtLWNvbnRlbnQge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcblxuICAgICAgICAmID4gZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1nYXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiA+IGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICAgICAgICAvKiAmW2NsYXNzKj1cImNhbmNlbFwiXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH0gKi9cblxuICAgICAgICAmW2NsYXNzKj1cInN1Ym1pdFwiXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlucHV0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cblxuLnRleHQtaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IHZhcigtLXRleHQtaW5wdXQtaGVpZ2h0KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuXG4gICAgJiA+IGxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjdXJzb3I6IHRleHQ7XG5cbiAgICAgICAgJjpoYXMofiBpbnB1dDpmb2N1cywgfiBpbnB1dDp2YWxpZCkge1xuICAgICAgICAgICAgdG9wOiAtMC42cmVtO1xuICAgICAgICAgICAgbGVmdDogMXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gaW5wdXQge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcblxuICAgICAgICAmOmlzKDpmb2N1cywgOnZhbGlkKXtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpbWVncmVlbjtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5kaXYuZGF0ZS1wcmlvcml0eS1wcm9qZWN0LWNvbnQge1xuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgICBnYXA6IHZhcigtLWdhcCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG5cbiAgICAmID4gZGl2OmhhcyhpbnB1dFt0eXBlPVwiZGF0ZVwiXSkge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICAgICAgY29sb3Itc2NoZW1lOiB2YXIoLS1jb2xvci1zY2hlbWUpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS10ZXh0LWlucHV0LWhlaWdodCkqMC42KTtcbiAgICAgICAgZ2FwOiB2YXIoLS1nYXApO1xuXG4gICAgICAgICYgPiBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjFyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiA+IHNlbGVjdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgPiBvcHRpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjp2YWxpZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLCtCQUErQjtJQUMvQixpQ0FBaUM7O0lBRWpDLFdBQVc7SUFDWDs7cUNBRWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCOztJQUV6QjtRQUNJLHFDQUFxQztJQUN6QztBQUNKOztBQUVBO0lBQ0ksZUFBZTs7SUFFZjtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsNERBQTREO0lBQzVELGdCQUFnQjtJQUNoQixNQUFNO0lBQ04scURBQXFEOztJQUVyRCxxQ0FBcUM7SUFDckMsMkJBQTJCOztJQUUzQix3Q0FBd0M7O0lBRXhDLFdBQVc7O0lBRVg7UUFDSSxPQUFPO1FBQ1AsaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDZCQUE2QjtRQUM3Qix5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLCtCQUErQjs7SUFFL0I7UUFDSSxxQ0FBcUM7SUFDekM7QUFDSjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1YsOEZBQThGO0lBQzlGLFlBQVk7SUFDWixhQUFhOztJQUViLGVBQWU7SUFDZixrQ0FBa0M7O0lBRWxDO1FBQ0ksaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qiw2QkFBNkI7O1FBRTdCO1lBQ0kseURBQXlEO1lBQ3pELGVBQWU7O1lBRWY7Z0JBQ0kseUNBQXlDO1lBQzdDO1FBQ0o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyw0Q0FBNEM7O0lBRTVDO1FBQ0ksWUFBWTs7UUFFWjtZQUNJLG1CQUFtQjtRQUN2QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSw4QkFBOEI7O0lBRTlCO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELHlDQUF5Qzs7SUFFekMsc0NBQXNDO0lBQ3RDLDREQUE0RDtJQUM1RCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQ0FBcUM7O0lBRXJDO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTs7UUFFZjtZQUNJLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIsZUFBZTtRQUNuQjtJQUNKOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixlQUFlOztRQUVmO1lBQ0ksWUFBWTtRQUNoQjs7UUFFQTtZQUNJLDBCQUEwQjtRQUM5QjtJQUNKOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQSxlQUFlO0lBQ2Y7UUFDSSwrQkFBK0I7SUFDbkM7O0lBRUE7UUFDSSxnQ0FBZ0M7SUFDcEM7OztBQUdKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCOztJQUVoQjtRQUNJLGtCQUFrQjtRQUNsQixlQUFlOztRQUVmO1lBQ0ksYUFBYTtZQUNiLDhCQUE4QjtZQUM5QixtQkFBbUI7WUFDbkIsa0JBQWtCO1FBQ3RCO0lBQ0o7O0lBRUE7UUFDSSxvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlOztRQUVmOzs7V0FHRzs7UUFFSDtZQUNJLDJCQUEyQjtZQUMzQixZQUFZO1FBQ2hCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDhCQUE4Qjs7SUFFOUI7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTs7UUFFWjtZQUNJLFlBQVk7WUFDWixVQUFVO1lBQ1YsMkJBQTJCO1lBQzNCLFlBQVk7WUFDWixzQkFBc0I7UUFDMUI7SUFDSjs7SUFFQTtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZUFBZTs7UUFFZjtZQUNJLDJCQUEyQjtRQUMvQjs7SUFFSjtBQUNKOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLDJCQUEyQjs7SUFFM0I7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGlDQUFpQztRQUNqQyxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLDBDQUEwQztRQUMxQyxlQUFlOztRQUVmO1lBQ0ksV0FBVztZQUNYLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLGVBQWU7WUFDZix5Q0FBeUM7O1lBRXpDO2dCQUNJLDJCQUEyQjtnQkFDM0IsWUFBWTtZQUNoQjtRQUNKO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHlDQUF5QztRQUN6QyxtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLFdBQVc7O1FBRVg7WUFDSSx5Q0FBeUM7WUFDekMsbUJBQW1CO1FBQ3ZCOztRQUVBO1lBQ0ksMkJBQTJCO1lBQzNCLFlBQVk7UUFDaEI7SUFDSjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJyZXNldC5jc3NcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwidmFyLmNzc1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJhbmltYXRpb25zLmNzc1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJjaGVja2JveC5jc3NcXFwiKTtcXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gICAgY29sb3Itc2NoZW1lOiB2YXIoLS1jb2xvci1zY2hlbWUpO1xcblxcbiAgICAvKiBMYXlvdXQgKi9cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbn1cXG5cXG4uZmxpcCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IFxcbiAgICBcXG4gICAgJjppcyhzdmcsIGkpOmhvdmVye1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgxMjAlKTsgXFxuICAgIH1cXG59XFxuXFxuc3ZnLCBpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xcbiAgICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRvcC1ib3R0b20pIHZhcigtLXBhZGRpbmctbGVmdC1yaWdodCk7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNvbG9yKSAwcHggMy41cHggNC41cHggNC41cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKTtcXG5cXG4gICAgei1pbmRleDogMTA7XFxuXFxuICAgICYgPiAubG9nbyB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS10aXRsZS1mb250LXNpemUpO1xcbiAgICB9XFxuXFxuICAgICYgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgZ2FwOiBjYWxjKDIgKiB2YXIoLS1nYXApKTtcXG4gICAgfVxcbn1cXG5cXG5saSwgLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxufVxcblxcbmRpYWxvZywgaW5wdXQge1xcbiAgICAvKiBmb250IGFuZCBiYWNrZ3JvdW5kICovXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvdy1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxuXFxuICAgICY6OmJhY2tkcm9wIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvdy1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuI3NpZGViYXItZGlhbG9nIHtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRvcDogY2FsYygyICogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSArIHZhcigtLXRpdGxlLWZvbnQtc2l6ZSkgKyB2YXIoLS1oZWFkZXItc2hhZG93LXdpZHRoKSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgXFxuICAgIC8qIHRyYW5zaXRpb24gKi9cXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC41cyBlYXNlLW91dDtcXG5cXG4gICAgJltvcGVuXSB7XFxuICAgICAgICBhbmltYXRpb246IHNsaWRlLWluIDAuNXMgZWFzZS1vdXQ7XFxuICAgIH1cXG5cXG4gICAgJiA+IG5hdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAmIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIFxcbiAgICAgICAgJiA+IGxpIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiBjYWxjKDAuNSAqIHZhcigtLWdhcCkpIHZhcigtLXBhZGRpbmctbGVmdC1yaWdodCk7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctdG9wLWJvdHRvbSkgMDtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyLCAudG9kby1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciA+IC5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogbWluKDEwMDBweCwgOTglKTtcXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3AtYm90dG9tKSAwO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tc2hhZG93LWNvbG9yKTtcXG4gICAgXFxuICAgICYgPiBzdmcge1xcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4udG9kby1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG5cXG4gICAgJjplbXB0eSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbi5pdGVtLWFkZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgICAvKiBkaXNwbGF5IGFuZCBncmlkIHZpZXcgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCByZXBlYXQoMywgMWZyKTtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgcmVwZWF0KDIsIDFmcik7ICovXFxuXFxuICAgIC8qIHBhZGRpbmcgYW5kIHdpZHRoIGZvciBiZXR0ZXIgdmlldyAqL1xcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRvcC1ib3R0b20pIHZhcigtLXBhZGRpbmctbGVmdC1yaWdodCk7XFxuICAgIHdpZHRoOiBtaW4oMTAwMHB4LCA5OCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctY29sb3IpO1xcblxcbiAgICAmID4gLnRvZG8taXRlbS1jaGVja2JveCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmID4gLnRvZG8taXRlbS10aXRsZSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIH1cXG4gICAgXFxuICAgICYgPiAudG9kby1pdGVtLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgfSBcXG4gICAgXFxuICAgICYgPiAudG9kby1pdGVtLWljb24tc2V0e1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgXFxuICAgICAgICAmID4gdWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgPiAudG9kby1pdGVtLWhhc2h0YWcge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpub3QoOmVtcHR5KTpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcjJztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgICAmID4gLnRvZG8taXRlbS1yaWdodCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIH1cXG5cXG4gICAgJiBbY2xhc3MqPVxcXCJ0cmFzaFxcXCJdIHtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG5cXG4gICAgLyogYW5pbWF0aW9ucyAqL1xcbiAgICAmLmFkZCB7XFxuICAgICAgICBhbmltYXRpb246IHBvcC1pbiAwLjNzIGVhc2Utb3V0O1xcbiAgICB9XFxuICAgIFxcbiAgICAmLnJlbW92ZSB7XFxuICAgICAgICBhbmltYXRpb246IHBvcC1vdXQgMC4zcyBlYXNlLW91dDtcXG4gICAgfVxcblxcbiAgICBcXG59XFxuXFxuZGl2LnRleHQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtd3JhcDogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5kaWFsb2cubW9kYWwtZm9ybS1jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5mb3JtLm1vZGFsLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuXFxuICAgICYgPiAubW9kYWwtZm9ybS1jb250ZW50IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgICAgICYgPiBkaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1nYXApO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgPiBidXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbiAgICAgICAgLyogJltjbGFzcyo9XFxcImNhbmNlbFxcXCJdIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgfSAqL1xcblxcbiAgICAgICAgJltjbGFzcyo9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLnRleHQtaW5wdXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogdmFyKC0tdGV4dC1pbnB1dC1oZWlnaHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxuXFxuICAgICYgPiBsYWJlbCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxuXFxuICAgICAgICAmOmhhcyh+IGlucHV0OmZvY3VzLCB+IGlucHV0OnZhbGlkKSB7XFxuICAgICAgICAgICAgdG9wOiAtMC42cmVtO1xcbiAgICAgICAgICAgIGxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgPiBpbnB1dCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xcblxcbiAgICAgICAgJjppcyg6Zm9jdXMsIDp2YWxpZCl7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbGltZWdyZWVuO1xcbiAgICAgICAgfVxcblxcbiAgICB9XFxufVxcblxcbmRpdi5kYXRlLXByaW9yaXR5LXByb2plY3QtY29udCB7XFxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcblxcbiAgICAmID4gZGl2OmhhcyhpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0pIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGNvbG9yLXNjaGVtZTogdmFyKC0tY29sb3Itc2NoZW1lKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tdGV4dC1pbnB1dC1oZWlnaHQpKjAuNik7XFxuICAgICAgICBnYXA6IHZhcigtLWdhcCk7XFxuXFxuICAgICAgICAmID4gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjFyZW07XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcbiAgICAgICAgICAgICYuc2VsZWN0ZWQge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICB9ICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmID4gc2VsZWN0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC4xcmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAmID4gb3B0aW9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjp2YWxpZCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0tcGFkZGluZy10b3AtYm90dG9tOiBtaW4oMnZoLCAxcmVtKTtcbiAgICAtLXBhZGRpbmctbGVmdC1yaWdodDogIG1pbigydncsIDFyZW0pO1xuICAgIC0tZ2FwOiAxcmVtO1xuICAgIC0tZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICAtLWhlYWRlci1jb2xvcjogdmFyKC0tc2hhZG93LWNvbG9yKTg4O1xuICAgIC0taGVhZGVyLXNoYWRvdy13aWR0aDogNXB4O1xuXG4gICAgLyogRm9ybSB2YXJpYWJsZXMgKi9cbiAgICAtLXRleHQtaW5wdXQtd2lkdGg6IDEwMCU7XG4gICAgLS10ZXh0LWlucHV0LWhlaWdodDogNHJlbTtcblxuICAgIC8qIFRoZW1lIERlcGVuZGVudCB2YXJpYWJsZXMgKi9cblxuICAgIC0tY29sb3I6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLS1zaGFkb3ctY29sb3I6ICNlMGUwZTA7XG4gICAgLS1jb2xvci1zY2hlbWU6IGxpZ2h0O1xuICAgIFxufVxuXG46cm9vdC5kYXJrIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIC0tc2hhZG93LWNvbG9yOiAjMWYxZjFmO1xuICAgIC0tY29sb3Itc2NoZW1lOiBkYXJrO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsV0FBVztJQUNYLGdEQUFnRDtJQUNoRCxxQ0FBcUM7SUFDckMsMEJBQTBCOztJQUUxQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHlCQUF5Qjs7SUFFekIsOEJBQThCOztJQUU5QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1wYWRkaW5nLXRvcC1ib3R0b206IG1pbigydmgsIDFyZW0pO1xcbiAgICAtLXBhZGRpbmctbGVmdC1yaWdodDogIG1pbigydncsIDFyZW0pO1xcbiAgICAtLWdhcDogMXJlbTtcXG4gICAgLS1mb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAtLWhlYWRlci1jb2xvcjogdmFyKC0tc2hhZG93LWNvbG9yKTg4O1xcbiAgICAtLWhlYWRlci1zaGFkb3ctd2lkdGg6IDVweDtcXG5cXG4gICAgLyogRm9ybSB2YXJpYWJsZXMgKi9cXG4gICAgLS10ZXh0LWlucHV0LXdpZHRoOiAxMDAlO1xcbiAgICAtLXRleHQtaW5wdXQtaGVpZ2h0OiA0cmVtO1xcblxcbiAgICAvKiBUaGVtZSBEZXBlbmRlbnQgdmFyaWFibGVzICovXFxuXFxuICAgIC0tY29sb3I6IGJsYWNrO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAtLXNoYWRvdy1jb2xvcjogI2UwZTBlMDtcXG4gICAgLS1jb2xvci1zY2hlbWU6IGxpZ2h0O1xcbiAgICBcXG59XFxuXFxuOnJvb3QuZGFyayB7XFxuICAgIC0tY29sb3I6IHdoaXRlO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAtLXNoYWRvdy1jb2xvcjogIzFmMWYxZjtcXG4gICAgLS1jb2xvci1zY2hlbWU6IGRhcms7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZmVhdGhlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmZWF0aGVyXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vZGlzdC9pY29ucy5qc29uXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vZGlzdC9pY29ucy5qc29uICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGFjdGl2aXR5LCBhaXJwbGF5LCBhbGVydC1jaXJjbGUsIGFsZXJ0LW9jdGFnb24sIGFsZXJ0LXRyaWFuZ2xlLCBhbGlnbi1jZW50ZXIsIGFsaWduLWp1c3RpZnksIGFsaWduLWxlZnQsIGFsaWduLXJpZ2h0LCBhbmNob3IsIGFwZXJ0dXJlLCBhcmNoaXZlLCBhcnJvdy1kb3duLWNpcmNsZSwgYXJyb3ctZG93bi1sZWZ0LCBhcnJvdy1kb3duLXJpZ2h0LCBhcnJvdy1kb3duLCBhcnJvdy1sZWZ0LWNpcmNsZSwgYXJyb3ctbGVmdCwgYXJyb3ctcmlnaHQtY2lyY2xlLCBhcnJvdy1yaWdodCwgYXJyb3ctdXAtY2lyY2xlLCBhcnJvdy11cC1sZWZ0LCBhcnJvdy11cC1yaWdodCwgYXJyb3ctdXAsIGF0LXNpZ24sIGF3YXJkLCBiYXItY2hhcnQtMiwgYmFyLWNoYXJ0LCBiYXR0ZXJ5LWNoYXJnaW5nLCBiYXR0ZXJ5LCBiZWxsLW9mZiwgYmVsbCwgYmx1ZXRvb3RoLCBib2xkLCBib29rLW9wZW4sIGJvb2ssIGJvb2ttYXJrLCBib3gsIGJyaWVmY2FzZSwgY2FsZW5kYXIsIGNhbWVyYS1vZmYsIGNhbWVyYSwgY2FzdCwgY2hlY2stY2lyY2xlLCBjaGVjay1zcXVhcmUsIGNoZWNrLCBjaGV2cm9uLWRvd24sIGNoZXZyb24tbGVmdCwgY2hldnJvbi1yaWdodCwgY2hldnJvbi11cCwgY2hldnJvbnMtZG93biwgY2hldnJvbnMtbGVmdCwgY2hldnJvbnMtcmlnaHQsIGNoZXZyb25zLXVwLCBjaHJvbWUsIGNpcmNsZSwgY2xpcGJvYXJkLCBjbG9jaywgY2xvdWQtZHJpenpsZSwgY2xvdWQtbGlnaHRuaW5nLCBjbG91ZC1vZmYsIGNsb3VkLXJhaW4sIGNsb3VkLXNub3csIGNsb3VkLCBjb2RlLCBjb2RlcGVuLCBjb2Rlc2FuZGJveCwgY29mZmVlLCBjb2x1bW5zLCBjb21tYW5kLCBjb21wYXNzLCBjb3B5LCBjb3JuZXItZG93bi1sZWZ0LCBjb3JuZXItZG93bi1yaWdodCwgY29ybmVyLWxlZnQtZG93biwgY29ybmVyLWxlZnQtdXAsIGNvcm5lci1yaWdodC1kb3duLCBjb3JuZXItcmlnaHQtdXAsIGNvcm5lci11cC1sZWZ0LCBjb3JuZXItdXAtcmlnaHQsIGNwdSwgY3JlZGl0LWNhcmQsIGNyb3AsIGNyb3NzaGFpciwgZGF0YWJhc2UsIGRlbGV0ZSwgZGlzYywgZGl2aWRlLWNpcmNsZSwgZGl2aWRlLXNxdWFyZSwgZGl2aWRlLCBkb2xsYXItc2lnbiwgZG93bmxvYWQtY2xvdWQsIGRvd25sb2FkLCBkcmliYmJsZSwgZHJvcGxldCwgZWRpdC0yLCBlZGl0LTMsIGVkaXQsIGV4dGVybmFsLWxpbmssIGV5ZS1vZmYsIGV5ZSwgZmFjZWJvb2ssIGZhc3QtZm9yd2FyZCwgZmVhdGhlciwgZmlnbWEsIGZpbGUtbWludXMsIGZpbGUtcGx1cywgZmlsZS10ZXh0LCBmaWxlLCBmaWxtLCBmaWx0ZXIsIGZsYWcsIGZvbGRlci1taW51cywgZm9sZGVyLXBsdXMsIGZvbGRlciwgZnJhbWVyLCBmcm93biwgZ2lmdCwgZ2l0LWJyYW5jaCwgZ2l0LWNvbW1pdCwgZ2l0LW1lcmdlLCBnaXQtcHVsbC1yZXF1ZXN0LCBnaXRodWIsIGdpdGxhYiwgZ2xvYmUsIGdyaWQsIGhhcmQtZHJpdmUsIGhhc2gsIGhlYWRwaG9uZXMsIGhlYXJ0LCBoZWxwLWNpcmNsZSwgaGV4YWdvbiwgaG9tZSwgaW1hZ2UsIGluYm94LCBpbmZvLCBpbnN0YWdyYW0sIGl0YWxpYywga2V5LCBsYXllcnMsIGxheW91dCwgbGlmZS1idW95LCBsaW5rLTIsIGxpbmssIGxpbmtlZGluLCBsaXN0LCBsb2FkZXIsIGxvY2ssIGxvZy1pbiwgbG9nLW91dCwgbWFpbCwgbWFwLXBpbiwgbWFwLCBtYXhpbWl6ZS0yLCBtYXhpbWl6ZSwgbWVoLCBtZW51LCBtZXNzYWdlLWNpcmNsZSwgbWVzc2FnZS1zcXVhcmUsIG1pYy1vZmYsIG1pYywgbWluaW1pemUtMiwgbWluaW1pemUsIG1pbnVzLWNpcmNsZSwgbWludXMtc3F1YXJlLCBtaW51cywgbW9uaXRvciwgbW9vbiwgbW9yZS1ob3Jpem9udGFsLCBtb3JlLXZlcnRpY2FsLCBtb3VzZS1wb2ludGVyLCBtb3ZlLCBtdXNpYywgbmF2aWdhdGlvbi0yLCBuYXZpZ2F0aW9uLCBvY3RhZ29uLCBwYWNrYWdlLCBwYXBlcmNsaXAsIHBhdXNlLWNpcmNsZSwgcGF1c2UsIHBlbi10b29sLCBwZXJjZW50LCBwaG9uZS1jYWxsLCBwaG9uZS1mb3J3YXJkZWQsIHBob25lLWluY29taW5nLCBwaG9uZS1taXNzZWQsIHBob25lLW9mZiwgcGhvbmUtb3V0Z29pbmcsIHBob25lLCBwaWUtY2hhcnQsIHBsYXktY2lyY2xlLCBwbGF5LCBwbHVzLWNpcmNsZSwgcGx1cy1zcXVhcmUsIHBsdXMsIHBvY2tldCwgcG93ZXIsIHByaW50ZXIsIHJhZGlvLCByZWZyZXNoLWNjdywgcmVmcmVzaC1jdywgcmVwZWF0LCByZXdpbmQsIHJvdGF0ZS1jY3csIHJvdGF0ZS1jdywgcnNzLCBzYXZlLCBzY2lzc29ycywgc2VhcmNoLCBzZW5kLCBzZXJ2ZXIsIHNldHRpbmdzLCBzaGFyZS0yLCBzaGFyZSwgc2hpZWxkLW9mZiwgc2hpZWxkLCBzaG9wcGluZy1iYWcsIHNob3BwaW5nLWNhcnQsIHNodWZmbGUsIHNpZGViYXIsIHNraXAtYmFjaywgc2tpcC1mb3J3YXJkLCBzbGFjaywgc2xhc2gsIHNsaWRlcnMsIHNtYXJ0cGhvbmUsIHNtaWxlLCBzcGVha2VyLCBzcXVhcmUsIHN0YXIsIHN0b3AtY2lyY2xlLCBzdW4sIHN1bnJpc2UsIHN1bnNldCwgdGFibGUsIHRhYmxldCwgdGFnLCB0YXJnZXQsIHRlcm1pbmFsLCB0aGVybW9tZXRlciwgdGh1bWJzLWRvd24sIHRodW1icy11cCwgdG9nZ2xlLWxlZnQsIHRvZ2dsZS1yaWdodCwgdG9vbCwgdHJhc2gtMiwgdHJhc2gsIHRyZWxsbywgdHJlbmRpbmctZG93biwgdHJlbmRpbmctdXAsIHRyaWFuZ2xlLCB0cnVjaywgdHYsIHR3aXRjaCwgdHdpdHRlciwgdHlwZSwgdW1icmVsbGEsIHVuZGVybGluZSwgdW5sb2NrLCB1cGxvYWQtY2xvdWQsIHVwbG9hZCwgdXNlci1jaGVjaywgdXNlci1taW51cywgdXNlci1wbHVzLCB1c2VyLXgsIHVzZXIsIHVzZXJzLCB2aWRlby1vZmYsIHZpZGVvLCB2b2ljZW1haWwsIHZvbHVtZS0xLCB2b2x1bWUtMiwgdm9sdW1lLXgsIHZvbHVtZSwgd2F0Y2gsIHdpZmktb2ZmLCB3aWZpLCB3aW5kLCB4LWNpcmNsZSwgeC1vY3RhZ29uLCB4LXNxdWFyZSwgeCwgeW91dHViZSwgemFwLW9mZiwgemFwLCB6b29tLWluLCB6b29tLW91dCwgZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcImFjdGl2aXR5XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMiAxMiAxOCAxMiAxNSAyMSA5IDMgNiAxMiAyIDEyXFxcIj48L3BvbHlsaW5lPlwiLFwiYWlycGxheVwiOlwiPHBhdGggZD1cXFwiTTUgMTdINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxNmEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJoLTFcXFwiPjwvcGF0aD48cG9seWdvbiBwb2ludHM9XFxcIjEyIDE1IDE3IDIxIDcgMjEgMTIgMTVcXFwiPjwvcG9seWdvbj5cIixcImFsZXJ0LWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxMi4wMVxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+XCIsXCJhbGVydC1vY3RhZ29uXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjcuODYgMiAxNi4xNCAyIDIyIDcuODYgMjIgMTYuMTQgMTYuMTQgMjIgNy44NiAyMiAyIDE2LjE0IDIgNy44NiA3Ljg2IDJcXFwiPjwvcG9seWdvbj48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPlwiLFwiYWxlcnQtdHJpYW5nbGVcIjpcIjxwYXRoIGQ9XFxcIk0xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE3XFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPlwiLFwiYWxpZ24tY2VudGVyXCI6XCI8bGluZSB4MT1cXFwiMThcXFwiIHkxPVxcXCIxMFxcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCIxMFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjZcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjE0XFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcImFsaWduLWp1c3RpZnlcIjpcIjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjEwXFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMTRcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwiYWxpZ24tbGVmdFwiOlwiPGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMTBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJhbGlnbi1yaWdodFwiOlwiPGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCI3XFxcIiB5Mj1cXFwiMTBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJhbmNob3JcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjhcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNNSAxMkgyYTEwIDEwIDAgMCAwIDIwIDBoLTNcXFwiPjwvcGF0aD5cIixcImFwZXJ0dXJlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjE0LjMxXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjIwLjA1XFxcIiB5Mj1cXFwiMTcuOTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOS42OVxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIyMS4xN1xcXCIgeTI9XFxcIjhcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNy4zOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTMuMTJcXFwiIHkyPVxcXCIyLjA2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjkuNjlcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjMuOTVcXFwiIHkyPVxcXCI2LjA2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0LjMxXFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIyLjgzXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTYuNjJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjEwLjg4XFxcIiB5Mj1cXFwiMjEuOTRcXFwiPjwvbGluZT5cIixcImFyY2hpdmVcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjIxIDggMjEgMjEgMyAyMSAzIDhcXFwiPjwvcG9seWxpbmU+PHJlY3QgeD1cXFwiMVxcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjIyXFxcIiBoZWlnaHQ9XFxcIjVcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTBcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcImFycm93LWRvd24tY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz1cXFwiOCAxMiAxMiAxNiAxNiAxMlxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPlwiLFwiYXJyb3ctZG93bi1sZWZ0XCI6XCI8bGluZSB4MT1cXFwiMTdcXFwiIHkxPVxcXCI3XFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgMTcgNyAxNyA3IDdcXFwiPjwvcG9seWxpbmU+XCIsXCJhcnJvdy1kb3duLXJpZ2h0XCI6XCI8bGluZSB4MT1cXFwiN1xcXCIgeTE9XFxcIjdcXFwiIHgyPVxcXCIxN1xcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgNyAxNyAxNyA3IDE3XFxcIj48L3BvbHlsaW5lPlwiLFwiYXJyb3ctZG93blwiOlwiPGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiNVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTlcXFwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxOSAxMiAxMiAxOSA1IDEyXFxcIj48L3BvbHlsaW5lPlwiLFwiYXJyb3ctbGVmdC1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxMiA4IDggMTIgMTIgMTZcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcImFycm93LWxlZnRcIjpcIjxsaW5lIHgxPVxcXCIxOVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiNVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTIgMTkgNSAxMiAxMiA1XFxcIj48L3BvbHlsaW5lPlwiLFwiYXJyb3ctcmlnaHQtY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTIgMTYgMTYgMTIgMTIgOFxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPlwiLFwiYXJyb3ctcmlnaHRcIjpcIjxsaW5lIHgxPVxcXCI1XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxOVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTIgNSAxOSAxMiAxMiAxOVxcXCI+PC9wb2x5bGluZT5cIixcImFycm93LXVwLWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjE2IDEyIDEyIDggOCAxMlxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPlwiLFwiYXJyb3ctdXAtbGVmdFwiOlwiPGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiMTdcXFwiIHgyPVxcXCI3XFxcIiB5Mj1cXFwiN1xcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjcgMTcgNyA3IDE3IDdcXFwiPjwvcG9seWxpbmU+XCIsXCJhcnJvdy11cC1yaWdodFwiOlwiPGxpbmUgeDE9XFxcIjdcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjE3XFxcIiB5Mj1cXFwiN1xcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjcgNyAxNyA3IDE3IDE3XFxcIj48L3BvbHlsaW5lPlwiLFwiYXJyb3ctdXBcIjpcIjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI1XFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiNSAxMiAxMiA1IDE5IDEyXFxcIj48L3BvbHlsaW5lPlwiLFwiYXQtc2lnblwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE2IDh2NWEzIDMgMCAwIDAgNiAwdi0xYTEwIDEwIDAgMSAwLTMuOTIgNy45NFxcXCI+PC9wYXRoPlwiLFwiYXdhcmRcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiOFxcXCIgcj1cXFwiN1xcXCI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz1cXFwiOC4yMSAxMy44OSA3IDIzIDEyIDIwIDE3IDIzIDE1Ljc5IDEzLjg4XFxcIj48L3BvbHlsaW5lPlwiLFwiYmFyLWNoYXJ0LTJcIjpcIjxsaW5lIHgxPVxcXCIxOFxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMThcXFwiIHkyPVxcXCIxMFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjZcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPlwiLFwiYmFyLWNoYXJ0XCI6XCI8bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMThcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjE4XFxcIiB5Mj1cXFwiNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT5cIixcImJhdHRlcnktY2hhcmdpbmdcIjpcIjxwYXRoIGQ9XFxcIk01IDE4SDNhMiAyIDAgMCAxLTItMlY4YTIgMiAwIDAgMSAyLTJoMy4xOU0xNSA2aDJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJoLTMuMTlcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIxM1xcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMTFcXFwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxMSA2IDcgMTIgMTMgMTIgOSAxOFxcXCI+PC9wb2x5bGluZT5cIixcImJhdHRlcnlcIjpcIjxyZWN0IHg9XFxcIjFcXFwiIHk9XFxcIjZcXFwiIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjExXFxcIj48L2xpbmU+XCIsXCJiZWxsLW9mZlwiOlwiPHBhdGggZD1cXFwiTTEzLjczIDIxYTIgMiAwIDAgMS0zLjQ2IDBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTguNjMgMTNBMTcuODkgMTcuODkgMCAwIDEgMTggOFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk02LjI2IDYuMjZBNS44NiA1Ljg2IDAgMCAwIDYgOGMwIDctMyA5LTMgOWgxNFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOCA4YTYgNiAwIDAgMC05LjMzLTVcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJiZWxsXCI6XCI8cGF0aCBkPVxcXCJNMTggOEE2IDYgMCAwIDAgNiA4YzAgNy0zIDktMyA5aDE4cy0zLTItMy05XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEzLjczIDIxYTIgMiAwIDAgMS0zLjQ2IDBcXFwiPjwvcGF0aD5cIixcImJsdWV0b290aFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiNi41IDYuNSAxNy41IDE3LjUgMTIgMjMgMTIgMSAxNy41IDYuNSA2LjUgMTcuNVxcXCI+PC9wb2x5bGluZT5cIixcImJvbGRcIjpcIjxwYXRoIGQ9XFxcIk02IDRoOGE0IDQgMCAwIDEgNCA0IDQgNCAwIDAgMS00IDRINnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNiAxMmg5YTQgNCAwIDAgMSA0IDQgNCA0IDAgMCAxLTQgNEg2elxcXCI+PC9wYXRoPlwiLFwiYm9vay1vcGVuXCI6XCI8cGF0aCBkPVxcXCJNMiAzaDZhNCA0IDAgMCAxIDQgNHYxNGEzIDMgMCAwIDAtMy0zSDJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIyIDNoLTZhNCA0IDAgMCAwLTQgNHYxNGEzIDMgMCAwIDEgMy0zaDd6XFxcIj48L3BhdGg+XCIsXCJib29rXCI6XCI8cGF0aCBkPVxcXCJNNCAxOS41QTIuNSAyLjUgMCAwIDEgNi41IDE3SDIwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTYuNSAySDIwdjIwSDYuNUEyLjUgMi41IDAgMCAxIDQgMTkuNXYtMTVBMi41IDIuNSAwIDAgMSA2LjUgMnpcXFwiPjwvcGF0aD5cIixcImJvb2ttYXJrXCI6XCI8cGF0aCBkPVxcXCJNMTkgMjFsLTctNS03IDVWNWEyIDIgMCAwIDEgMi0yaDEwYTIgMiAwIDAgMSAyIDJ6XFxcIj48L3BhdGg+XCIsXCJib3hcIjpcIjxwYXRoIGQ9XFxcIk0yMSAxNlY4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIzLjI3IDYuOTYgMTIgMTIuMDEgMjAuNzMgNi45NlxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMi4wOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcImJyaWVmY2FzZVwiOlwiPHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiN1xcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48cGF0aCBkPVxcXCJNMTYgMjFWNWEyIDIgMCAwIDAtMi0yaC00YTIgMiAwIDAgMC0yIDJ2MTZcXFwiPjwvcGF0aD5cIixcImNhbGVuZGFyXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIxNlxcXCIgeTE9XFxcIjJcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjJcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+XCIsXCJjYW1lcmEtb2ZmXCI6XCI8bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIxIDIxSDNhMiAyIDAgMCAxLTItMlY4YTIgMiAwIDAgMSAyLTJoM20zLTNoNmwyIDNoNGEyIDIgMCAwIDEgMiAydjkuMzRtLTcuNzItMi4wNmE0IDQgMCAxIDEtNS41Ni01LjU2XFxcIj48L3BhdGg+XCIsXCJjYW1lcmFcIjpcIjxwYXRoIGQ9XFxcIk0yMyAxOWEyIDIgMCAwIDEtMiAySDNhMiAyIDAgMCAxLTItMlY4YTIgMiAwIDAgMSAyLTJoNGwyLTNoNmwyIDNoNGEyIDIgMCAwIDEgMiAyelxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTNcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPlwiLFwiY2FzdFwiOlwiPHBhdGggZD1cXFwiTTIgMTYuMUE1IDUgMCAwIDEgNS45IDIwTTIgMTIuMDVBOSA5IDAgMCAxIDkuOTUgMjBNMiA4VjZhMiAyIDAgMCAxIDItMmgxNmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJoLTZcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMlxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMi4wMVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+XCIsXCJjaGVjay1jaXJjbGVcIjpcIjxwYXRoIGQ9XFxcIk0yMiAxMS4wOFYxMmExMCAxMCAwIDEgMS01LjkzLTkuMTRcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIyMiA0IDEyIDE0LjAxIDkgMTEuMDFcXFwiPjwvcG9seWxpbmU+XCIsXCJjaGVjay1zcXVhcmVcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjkgMTEgMTIgMTQgMjIgNFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMjEgMTJ2N2EyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMTFcXFwiPjwvcGF0aD5cIixcImNoZWNrXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMCA2IDkgMTcgNCAxMlxcXCI+PC9wb2x5bGluZT5cIixcImNoZXZyb24tZG93blwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiNiA5IDEyIDE1IDE4IDlcXFwiPjwvcG9seWxpbmU+XCIsXCJjaGV2cm9uLWxlZnRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE1IDE4IDkgMTIgMTUgNlxcXCI+PC9wb2x5bGluZT5cIixcImNoZXZyb24tcmlnaHRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjkgMTggMTUgMTIgOSA2XFxcIj48L3BvbHlsaW5lPlwiLFwiY2hldnJvbi11cFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTggMTUgMTIgOSA2IDE1XFxcIj48L3BvbHlsaW5lPlwiLFwiY2hldnJvbnMtZG93blwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiNyAxMyAxMiAxOCAxNyAxM1xcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCI3IDYgMTIgMTEgMTcgNlxcXCI+PC9wb2x5bGluZT5cIixcImNoZXZyb25zLWxlZnRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjExIDE3IDYgMTIgMTEgN1xcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxOCAxNyAxMyAxMiAxOCA3XFxcIj48L3BvbHlsaW5lPlwiLFwiY2hldnJvbnMtcmlnaHRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjEzIDE3IDE4IDEyIDEzIDdcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiNiAxNyAxMSAxMiA2IDdcXFwiPjwvcG9seWxpbmU+XCIsXCJjaGV2cm9ucy11cFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgMTEgMTIgNiA3IDExXFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDE4IDEyIDEzIDcgMThcXFwiPjwvcG9seWxpbmU+XCIsXCJjaHJvbWVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMjEuMTdcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjMuOTVcXFwiIHkxPVxcXCI2LjA2XFxcIiB4Mj1cXFwiOC41NFxcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEwLjg4XFxcIiB5MT1cXFwiMjEuOTRcXFwiIHgyPVxcXCIxNS40NlxcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+XCIsXCJjaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT5cIixcImNsaXBib2FyZFwiOlwiPHBhdGggZD1cXFwiTTE2IDRoMmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgyXFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiOFxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjhcXFwiIGhlaWdodD1cXFwiNFxcXCIgcng9XFxcIjFcXFwiIHJ5PVxcXCIxXFxcIj48L3JlY3Q+XCIsXCJjbG9ja1wiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjEyIDYgMTIgMTIgMTYgMTRcXFwiPjwvcG9seWxpbmU+XCIsXCJjbG91ZC1kcml6emxlXCI6XCI8bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxM1xcXCIgeDI9XFxcIjhcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNlxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNlxcXCIgeTE9XFxcIjEzXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMCAxNi41OEE1IDUgMCAwIDAgMTggN2gtMS4yNkE4IDggMCAxIDAgNCAxNS4yNVxcXCI+PC9wYXRoPlwiLFwiY2xvdWQtbGlnaHRuaW5nXCI6XCI8cGF0aCBkPVxcXCJNMTkgMTYuOUE1IDUgMCAwIDAgMTggN2gtMS4yNmE4IDggMCAxIDAtMTEuNjIgOVxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjEzIDExIDkgMTcgMTUgMTcgMTEgMjNcXFwiPjwvcG9seWxpbmU+XCIsXCJjbG91ZC1vZmZcIjpcIjxwYXRoIGQ9XFxcIk0yMi42MSAxNi45NUE1IDUgMCAwIDAgMTggMTBoLTEuMjZhOCA4IDAgMCAwLTcuMDUtNk01IDVhOCA4IDAgMCAwIDQgMTVoOWE1IDUgMCAwIDAgMS43LS4zXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPlwiLFwiY2xvdWQtcmFpblwiOlwiPGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxM1xcXCIgeDI9XFxcIjhcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMCAxNi41OEE1IDUgMCAwIDAgMTggN2gtMS4yNkE4IDggMCAxIDAgNCAxNS4yNVxcXCI+PC9wYXRoPlwiLFwiY2xvdWQtc25vd1wiOlwiPHBhdGggZD1cXFwiTTIwIDE3LjU4QTUgNSAwIDAgMCAxOCA4aC0xLjI2QTggOCAwIDEgMCA0IDE2LjI1XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjguMDFcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCI4LjAxXFxcIiB5Mj1cXFwiMjBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMlxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjE2LjAxXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjE2LjAxXFxcIiB5Mj1cXFwiMjBcXFwiPjwvbGluZT5cIixcImNsb3VkXCI6XCI8cGF0aCBkPVxcXCJNMTggMTBoLTEuMjZBOCA4IDAgMSAwIDkgMjBoOWE1IDUgMCAwIDAgMC0xMHpcXFwiPjwvcGF0aD5cIixcImNvZGVcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE2IDE4IDIyIDEyIDE2IDZcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiOCA2IDIgMTIgOCAxOFxcXCI+PC9wb2x5bGluZT5cIixcImNvZGVwZW5cIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTIgMiAyMiA4LjUgMjIgMTUuNSAxMiAyMiAyIDE1LjUgMiA4LjUgMTIgMlxcXCI+PC9wb2x5Z29uPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNS41XFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjIgOC41IDEyIDE1LjUgMiA4LjVcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMiAxNS41IDEyIDguNSAyMiAxNS41XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjguNVxcXCI+PC9saW5lPlwiLFwiY29kZXNhbmRib3hcIjpcIjxwYXRoIGQ9XFxcIk0yMSAxNlY4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCI3LjUgNC4yMSAxMiA2LjgxIDE2LjUgNC4yMVxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCI3LjUgMTkuNzkgNy41IDE0LjYgMyAxMlxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIyMSAxMiAxNi41IDE0LjYgMTYuNSAxOS43OVxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIzLjI3IDYuOTYgMTIgMTIuMDEgMjAuNzMgNi45NlxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMi4wOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcImNvZmZlZVwiOlwiPHBhdGggZD1cXFwiTTE4IDhoMWE0IDQgMCAwIDEgMCA4aC0xXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIgOGgxNnY5YTQgNCAwIDAgMS00IDRINmE0IDQgMCAwIDEtNC00Vjh6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjZcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiNlxcXCIgeTI9XFxcIjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTBcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMTBcXFwiIHkyPVxcXCI0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0XFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiNFxcXCI+PC9saW5lPlwiLFwiY29sdW1uc1wiOlwiPHBhdGggZD1cXFwiTTEyIDNoN2EyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJoLTdtMC0xOEg1YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmg3bTAtMTh2MThcXFwiPjwvcGF0aD5cIixcImNvbW1hbmRcIjpcIjxwYXRoIGQ9XFxcIk0xOCAzYTMgMyAwIDAgMC0zIDN2MTJhMyAzIDAgMCAwIDMgMyAzIDMgMCAwIDAgMy0zIDMgMyAwIDAgMC0zLTNINmEzIDMgMCAwIDAtMyAzIDMgMyAwIDAgMCAzIDMgMyAzIDAgMCAwIDMtM1Y2YTMgMyAwIDAgMC0zLTMgMyAzIDAgMCAwLTMgMyAzIDMgMCAwIDAgMyAzaDEyYTMgMyAwIDAgMCAzLTMgMyAzIDAgMCAwLTMtM3pcXFwiPjwvcGF0aD5cIixcImNvbXBhc3NcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cG9seWdvbiBwb2ludHM9XFxcIjE2LjI0IDcuNzYgMTQuMTIgMTQuMTIgNy43NiAxNi4yNCA5Ljg4IDkuODggMTYuMjQgNy43NlxcXCI+PC9wb2x5Z29uPlwiLFwiY29weVwiOlwiPHJlY3QgeD1cXFwiOVxcXCIgeT1cXFwiOVxcXCIgd2lkdGg9XFxcIjEzXFxcIiBoZWlnaHQ9XFxcIjEzXFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48cGF0aCBkPVxcXCJNNSAxNUg0YTIgMiAwIDAgMS0yLTJWNGEyIDIgMCAwIDEgMi0yaDlhMiAyIDAgMCAxIDIgMnYxXFxcIj48L3BhdGg+XCIsXCJjb3JuZXItZG93bi1sZWZ0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI5IDEwIDQgMTUgOSAyMFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMjAgNHY3YTQgNCAwIDAgMS00IDRINFxcXCI+PC9wYXRoPlwiLFwiY29ybmVyLWRvd24tcmlnaHRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE1IDEwIDIwIDE1IDE1IDIwXFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk00IDR2N2E0IDQgMCAwIDAgNCA0aDEyXFxcIj48L3BhdGg+XCIsXCJjb3JuZXItbGVmdC1kb3duXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNCAxNSA5IDIwIDQgMTVcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTIwIDRoLTdhNCA0IDAgMCAwLTQgNHYxMlxcXCI+PC9wYXRoPlwiLFwiY29ybmVyLWxlZnQtdXBcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE0IDkgOSA0IDQgOVxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMjAgMjBoLTdhNCA0IDAgMCAxLTQtNFY0XFxcIj48L3BhdGg+XCIsXCJjb3JuZXItcmlnaHQtZG93blwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTAgMTUgMTUgMjAgMjAgMTVcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTQgNGg3YTQgNCAwIDAgMSA0IDR2MTJcXFwiPjwvcGF0aD5cIixcImNvcm5lci1yaWdodC11cFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTAgOSAxNSA0IDIwIDlcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTQgMjBoN2E0IDQgMCAwIDAgNC00VjRcXFwiPjwvcGF0aD5cIixcImNvcm5lci11cC1sZWZ0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI5IDE0IDQgOSA5IDRcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTIwIDIwdi03YTQgNCAwIDAgMC00LTRINFxcXCI+PC9wYXRoPlwiLFwiY29ybmVyLXVwLXJpZ2h0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNSAxNCAyMCA5IDE1IDRcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTQgMjB2LTdhNCA0IDAgMCAxIDQtNGgxMlxcXCI+PC9wYXRoPlwiLFwiY3B1XCI6XCI8cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMTZcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjlcXFwiIHk9XFxcIjlcXFwiIHdpZHRoPVxcXCI2XFxcIiBoZWlnaHQ9XFxcIjZcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCI5XFxcIiB5Mj1cXFwiNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIwXFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjE0XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjRcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjRcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPlwiLFwiY3JlZGl0LWNhcmRcIjpcIjxyZWN0IHg9XFxcIjFcXFwiIHk9XFxcIjRcXFwiIHdpZHRoPVxcXCIyMlxcXCIgaGVpZ2h0PVxcXCIxNlxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxMFxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMTBcXFwiPjwvbGluZT5cIixcImNyb3BcIjpcIjxwYXRoIGQ9XFxcIk02LjEzIDFMNiAxNmEyIDIgMCAwIDAgMiAyaDE1XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEgNi4xM0wxNiA2YTIgMiAwIDAgMSAyIDJ2MTVcXFwiPjwvcGF0aD5cIixcImNyb3NzaGFpclwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyMlxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMThcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJkYXRhYmFzZVwiOlwiPGVsbGlwc2UgY3g9XFxcIjEyXFxcIiBjeT1cXFwiNVxcXCIgcng9XFxcIjlcXFwiIHJ5PVxcXCIzXFxcIj48L2VsbGlwc2U+PHBhdGggZD1cXFwiTTIxIDEyYzAgMS42Ni00IDMtOSAzcy05LTEuMzQtOS0zXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMgNXYxNGMwIDEuNjYgNCAzIDkgM3M5LTEuMzQgOS0zVjVcXFwiPjwvcGF0aD5cIixcImRlbGV0ZVwiOlwiPHBhdGggZD1cXFwiTTIxIDRIOGwtNyA4IDcgOGgxM2EyIDIgMCAwIDAgMi0yVjZhMiAyIDAgMCAwLTItMnpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMThcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxOFxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJkaXNjXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+XCIsXCJkaXZpZGUtY2lyY2xlXCI6XCI8bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjhcXFwiPjwvbGluZT48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+XCIsXCJkaXZpZGUtc3F1YXJlXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPlwiLFwiZGl2aWRlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjZcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCI1XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxOVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiMlxcXCI+PC9jaXJjbGU+XCIsXCJkb2xsYXItc2lnblwiOlwiPGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMTcgNUg5LjVhMy41IDMuNSAwIDAgMCAwIDdoNWEzLjUgMy41IDAgMCAxIDAgN0g2XFxcIj48L3BhdGg+XCIsXCJkb3dubG9hZC1jbG91ZFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiOCAxNyAxMiAyMSAxNiAxN1xcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMjAuODggMTguMDlBNSA1IDAgMCAwIDE4IDloLTEuMjZBOCA4IDAgMSAwIDMgMTYuMjlcXFwiPjwvcGF0aD5cIixcImRvd25sb2FkXCI6XCI8cGF0aCBkPVxcXCJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNFxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjcgMTAgMTIgMTUgMTcgMTBcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjNcXFwiPjwvbGluZT5cIixcImRyaWJiYmxlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTguNTYgMi43NWM0LjM3IDYuMDMgNi4wMiA5LjQyIDguMDMgMTcuNzJtMi41NC0xNS4zOGMtMy43MiA0LjM1LTguOTQgNS42Ni0xNi44OCA1Ljg1bTE5LjUgMS45Yy0zLjUtLjkzLTYuNjMtLjgyLTguOTQgMC0yLjU4LjkyLTUuMDEgMi44Ni03LjQ0IDYuMzJcXFwiPjwvcGF0aD5cIixcImRyb3BsZXRcIjpcIjxwYXRoIGQ9XFxcIk0xMiAyLjY5bDUuNjYgNS42NmE4IDggMCAxIDEtMTEuMzEgMHpcXFwiPjwvcGF0aD5cIixcImVkaXQtMlwiOlwiPHBhdGggZD1cXFwiTTE3IDNhMi44MjggMi44MjggMCAxIDEgNCA0TDcuNSAyMC41IDIgMjJsMS41LTUuNUwxNyAzelxcXCI+PC9wYXRoPlwiLFwiZWRpdC0zXCI6XCI8cGF0aCBkPVxcXCJNMTIgMjBoOVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNi41IDMuNWEyLjEyMSAyLjEyMSAwIDAgMSAzIDNMNyAxOWwtNCAxIDEtNEwxNi41IDMuNXpcXFwiPjwvcGF0aD5cIixcImVkaXRcIjpcIjxwYXRoIGQ9XFxcIk0xMSA0SDRhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTdcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTguNSAyLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDEyIDE1bC00IDEgMS00IDkuNS05LjV6XFxcIj48L3BhdGg+XCIsXCJleHRlcm5hbC1saW5rXCI6XCI8cGF0aCBkPVxcXCJNMTggMTN2NmEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY4YTIgMiAwIDAgMSAyLTJoNlxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE1IDMgMjEgMyAyMSA5XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMFxcXCIgeTE9XFxcIjE0XFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+XCIsXCJleWUtb2ZmXCI6XCI8cGF0aCBkPVxcXCJNMTcuOTQgMTcuOTRBMTAuMDcgMTAuMDcgMCAwIDEgMTIgMjBjLTcgMC0xMS04LTExLThhMTguNDUgMTguNDUgMCAwIDEgNS4wNi01Ljk0TTkuOSA0LjI0QTkuMTIgOS4xMiAwIDAgMSAxMiA0YzcgMCAxMSA4IDExIDhhMTguNSAxOC41IDAgMCAxLTIuMTYgMy4xOW0tNi43Mi0xLjA3YTMgMyAwIDEgMS00LjI0LTQuMjRcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJleWVcIjpcIjxwYXRoIGQ9XFxcIk0xIDEyczQtOCAxMS04IDExIDggMTEgOC00IDgtMTEgOC0xMS04LTExLTh6XFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+XCIsXCJmYWNlYm9va1wiOlwiPHBhdGggZD1cXFwiTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3pcXFwiPjwvcGF0aD5cIixcImZhc3QtZm9yd2FyZFwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxMyAxOSAyMiAxMiAxMyA1IDEzIDE5XFxcIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPVxcXCIyIDE5IDExIDEyIDIgNSAyIDE5XFxcIj48L3BvbHlnb24+XCIsXCJmZWF0aGVyXCI6XCI8cGF0aCBkPVxcXCJNMjAuMjQgMTIuMjRhNiA2IDAgMCAwLTguNDktOC40OUw1IDEwLjVWMTloOC41elxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxNlxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIyXFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTcuNVxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJmaWdtYVwiOlwiPHBhdGggZD1cXFwiTTUgNS41QTMuNSAzLjUgMCAwIDEgOC41IDJIMTJ2N0g4LjVBMy41IDMuNSAwIDAgMSA1IDUuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTIgMmgzLjVhMy41IDMuNSAwIDEgMSAwIDdIMTJWMnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTIgMTIuNWEzLjUgMy41IDAgMSAxIDcgMCAzLjUgMy41IDAgMSAxLTcgMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNSAxOS41QTMuNSAzLjUgMCAwIDEgOC41IDE2SDEydjMuNWEzLjUgMy41IDAgMSAxLTcgMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNSAxMi41QTMuNSAzLjUgMCAwIDEgOC41IDlIMTJ2N0g4LjVBMy41IDMuNSAwIDAgMSA1IDEyLjV6XFxcIj48L3BhdGg+XCIsXCJmaWxlLW1pbnVzXCI6XCI8cGF0aCBkPVxcXCJNMTQgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjh6XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTQgMiAxNCA4IDIwIDhcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT5cIixcImZpbGUtcGx1c1wiOlwiPHBhdGggZD1cXFwiTTE0IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY4elxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE0IDIgMTQgOCAyMCA4XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJmaWxlLXRleHRcIjpcIjxwYXRoIGQ9XFxcIk0xNCAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWOHpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNCAyIDE0IDggMjAgOFxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIxM1xcXCIgeDI9XFxcIjhcXFwiIHkyPVxcXCIxM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNlxcXCIgeTE9XFxcIjE3XFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTAgOSA5IDkgOCA5XFxcIj48L3BvbHlsaW5lPlwiLFwiZmlsZVwiOlwiPHBhdGggZD1cXFwiTTEzIDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY5elxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjEzIDIgMTMgOSAyMCA5XFxcIj48L3BvbHlsaW5lPlwiLFwiZmlsbVwiOlwiPHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiByeD1cXFwiMi4xOFxcXCIgcnk9XFxcIjIuMThcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiN1xcXCIgeTE9XFxcIjJcXFwiIHgyPVxcXCI3XFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTdcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTdcXFwiIHkyPVxcXCIyMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjJcXFwiIHkxPVxcXCI3XFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMlxcXCIgeTE9XFxcIjE3XFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiMTdcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiN1xcXCIgeDI9XFxcIjIyXFxcIiB5Mj1cXFwiN1xcXCI+PC9saW5lPlwiLFwiZmlsdGVyXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjIyIDMgMiAzIDEwIDEyLjQ2IDEwIDE5IDE0IDIxIDE0IDEyLjQ2IDIyIDNcXFwiPjwvcG9seWdvbj5cIixcImZsYWdcIjpcIjxwYXRoIGQ9XFxcIk00IDE1czEtMSA0LTEgNSAyIDggMiA0LTEgNC0xVjNzLTEgMS00IDEtNS0yLTgtMi00IDEtNCAxelxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI0XFxcIiB5MT1cXFwiMjJcXFwiIHgyPVxcXCI0XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT5cIixcImZvbGRlci1taW51c1wiOlwiPHBhdGggZD1cXFwiTTIyIDE5YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmg1bDIgM2g5YTIgMiAwIDAgMSAyIDJ6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT5cIixcImZvbGRlci1wbHVzXCI6XCI8cGF0aCBkPVxcXCJNMjIgMTlhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDVsMiAzaDlhMiAyIDAgMCAxIDIgMnpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxMVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjE0XFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPlwiLFwiZm9sZGVyXCI6XCI8cGF0aCBkPVxcXCJNMjIgMTlhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDVsMiAzaDlhMiAyIDAgMCAxIDIgMnpcXFwiPjwvcGF0aD5cIixcImZyYW1lclwiOlwiPHBhdGggZD1cXFwiTTUgMTZWOWgxNFYySDVsMTQgMTRoLTdtLTcgMGw3IDd2LTdtLTcgMGg3XFxcIj48L3BhdGg+XCIsXCJmcm93blwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xNiAxNnMtMS41LTItNC0yLTQgMi00IDJcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI5LjAxXFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxNS4wMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcImdpZnRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjIwIDEyIDIwIDIyIDQgMjIgNCAxMlxcXCI+PC9wb2x5bGluZT48cmVjdCB4PVxcXCIyXFxcIiB5PVxcXCI3XFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiNVxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI3XFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTEyIDdINy41YTIuNSAyLjUgMCAwIDEgMC01QzExIDIgMTIgNyAxMiA3elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMiA3aDQuNWEyLjUgMi41IDAgMCAwIDAtNUMxMyAyIDEyIDcgMTIgN3pcXFwiPjwvcGF0aD5cIixcImdpdC1icmFuY2hcIjpcIjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiM1xcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiNlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNlxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTggOWE5IDkgMCAwIDEtOSA5XFxcIj48L3BhdGg+XCIsXCJnaXQtY29tbWl0XCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMS4wNVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3LjAxXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyMi45NlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJnaXQtbWVyZ2VcIjpcIjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjZcXFwiIGN5PVxcXCI2XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNNiAyMVY5YTkgOSAwIDAgMCA5IDlcXFwiPjwvcGF0aD5cIixcImdpdC1wdWxsLXJlcXVlc3RcIjpcIjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjZcXFwiIGN5PVxcXCI2XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTMgNmgzYTIgMiAwIDAgMSAyIDJ2N1xcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPlwiLFwiZ2l0aHViXCI6XCI8cGF0aCBkPVxcXCJNOSAxOWMtNSAxLjUtNS0yLjUtNy0zbTE0IDZ2LTMuODdhMy4zNyAzLjM3IDAgMCAwLS45NC0yLjYxYzMuMTQtLjM1IDYuNDQtMS41NCA2LjQ0LTdBNS40NCA1LjQ0IDAgMCAwIDIwIDQuNzcgNS4wNyA1LjA3IDAgMCAwIDE5LjkxIDFTMTguNzMuNjUgMTYgMi40OGExMy4zOCAxMy4zOCAwIDAgMC03IDBDNi4yNy42NSA1LjA5IDEgNS4wOSAxQTUuMDcgNS4wNyAwIDAgMCA1IDQuNzdhNS40NCA1LjQ0IDAgMCAwLTEuNSAzLjc4YzAgNS40MiAzLjMgNi42MSA2LjQ0IDdBMy4zNyAzLjM3IDAgMCAwIDkgMTguMTNWMjJcXFwiPjwvcGF0aD5cIixcImdpdGxhYlwiOlwiPHBhdGggZD1cXFwiTTIyLjY1IDE0LjM5TDEyIDIyLjEzIDEuMzUgMTQuMzlhLjg0Ljg0IDAgMCAxLS4zLS45NGwxLjIyLTMuNzggMi40NC03LjUxQS40Mi40MiAwIDAgMSA0LjgyIDJhLjQzLjQzIDAgMCAxIC41OCAwIC40Mi40MiAwIDAgMSAuMTEuMThsMi40NCA3LjQ5aDguMWwyLjQ0LTcuNTFBLjQyLjQyIDAgMCAxIDE4LjYgMmEuNDMuNDMgMCAwIDEgLjU4IDAgLjQyLjQyIDAgMCAxIC4xMS4xOGwyLjQ0IDcuNTFMMjMgMTMuNDVhLjg0Ljg0IDAgMCAxLS4zNS45NHpcXFwiPjwvcGF0aD5cIixcImdsb2JlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjIyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMTIgMmExNS4zIDE1LjMgMCAwIDEgNCAxMCAxNS4zIDE1LjMgMCAwIDEtNCAxMCAxNS4zIDE1LjMgMCAwIDEtNC0xMCAxNS4zIDE1LjMgMCAwIDEgNC0xMHpcXFwiPjwvcGF0aD5cIixcImdyaWRcIjpcIjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCI3XFxcIiBoZWlnaHQ9XFxcIjdcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxNFxcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiN1xcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjE0XFxcIiB5PVxcXCIxNFxcXCIgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiN1xcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjE0XFxcIiB3aWR0aD1cXFwiN1xcXCIgaGVpZ2h0PVxcXCI3XFxcIj48L3JlY3Q+XCIsXCJoYXJkLWRyaXZlXCI6XCI8bGluZSB4MT1cXFwiMjJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiNi4wMVxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEwXFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxMC4wMVxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+XCIsXCJoYXNoXCI6XCI8bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIyMFxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMFxcXCIgeTE9XFxcIjNcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIzXFxcIiB4Mj1cXFwiMTRcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPlwiLFwiaGVhZHBob25lc1wiOlwiPHBhdGggZD1cXFwiTTMgMTh2LTZhOSA5IDAgMCAxIDE4IDB2NlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMSAxOWEyIDIgMCAwIDEtMiAyaC0xYTIgMiAwIDAgMS0yLTJ2LTNhMiAyIDAgMCAxIDItMmgzek0zIDE5YTIgMiAwIDAgMCAyIDJoMWEyIDIgMCAwIDAgMi0ydi0zYTIgMiAwIDAgMC0yLTJIM3pcXFwiPjwvcGF0aD5cIixcImhlYXJ0XCI6XCI8cGF0aCBkPVxcXCJNMjAuODQgNC42MWE1LjUgNS41IDAgMCAwLTcuNzggMEwxMiA1LjY3bC0xLjA2LTEuMDZhNS41IDUuNSAwIDAgMC03Ljc4IDcuNzhsMS4wNiAxLjA2TDEyIDIxLjIzbDcuNzgtNy43OCAxLjA2LTEuMDZhNS41IDUuNSAwIDAgMCAwLTcuNzh6XFxcIj48L3BhdGg+XCIsXCJoZWxwLWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk05LjA5IDlhMyAzIDAgMCAxIDUuODMgMWMwIDItMyAzLTMgM1xcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE3XFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPlwiLFwiaGV4YWdvblwiOlwiPHBhdGggZD1cXFwiTTIxIDE2VjhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M2w3IDRhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2elxcXCI+PC9wYXRoPlwiLFwiaG9tZVwiOlwiPHBhdGggZD1cXFwiTTMgOWw5LTcgOSA3djExYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yelxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjkgMjIgOSAxMiAxNSAxMiAxNSAyMlxcXCI+PC9wb2x5bGluZT5cIixcImltYWdlXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxjaXJjbGUgY3g9XFxcIjguNVxcXCIgY3k9XFxcIjguNVxcXCIgcj1cXFwiMS41XFxcIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPVxcXCIyMSAxNSAxNiAxMCA1IDIxXFxcIj48L3BvbHlsaW5lPlwiLFwiaW5ib3hcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjIyIDEyIDE2IDEyIDE0IDE1IDEwIDE1IDggMTIgMiAxMlxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XFxcIj48L3BhdGg+XCIsXCJpbmZvXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPlwiLFwiaW5zdGFncmFtXCI6XCI8cmVjdCB4PVxcXCIyXFxcIiB5PVxcXCIyXFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHJ4PVxcXCI1XFxcIiByeT1cXFwiNVxcXCI+PC9yZWN0PjxwYXRoIGQ9XFxcIk0xNiAxMS4zN0E0IDQgMCAxIDEgMTIuNjMgOCA0IDQgMCAwIDEgMTYgMTEuMzd6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjE3LjVcXFwiIHkxPVxcXCI2LjVcXFwiIHgyPVxcXCIxNy41MVxcXCIgeTI9XFxcIjYuNVxcXCI+PC9saW5lPlwiLFwiaXRhbGljXCI6XCI8bGluZSB4MT1cXFwiMTlcXFwiIHkxPVxcXCI0XFxcIiB4Mj1cXFwiMTBcXFwiIHkyPVxcXCI0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCI1XFxcIiB5Mj1cXFwiMjBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI0XFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+XCIsXCJrZXlcIjpcIjxwYXRoIGQ9XFxcIk0yMSAybC0yIDJtLTcuNjEgNy42MWE1LjUgNS41IDAgMSAxLTcuNzc4IDcuNzc4IDUuNSA1LjUgMCAwIDEgNy43NzctNy43Nzd6bTAgMEwxNS41IDcuNW0wIDBsMyAzTDIyIDdsLTMtM20tMy41IDMuNUwxOSA0XFxcIj48L3BhdGg+XCIsXCJsYXllcnNcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTIgMiAyIDcgMTIgMTIgMjIgNyAxMiAyXFxcIj48L3BvbHlnb24+PHBvbHlsaW5lIHBvaW50cz1cXFwiMiAxNyAxMiAyMiAyMiAxN1xcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIyIDEyIDEyIDE3IDIyIDEyXFxcIj48L3BvbHlsaW5lPlwiLFwibGF5b3V0XCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCI5XFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPlwiLFwibGlmZS1idW95XCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjQuOTNcXFwiIHkxPVxcXCI0LjkzXFxcIiB4Mj1cXFwiOS4xN1xcXCIgeTI9XFxcIjkuMTdcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTQuODNcXFwiIHkxPVxcXCIxNC44M1xcXCIgeDI9XFxcIjE5LjA3XFxcIiB5Mj1cXFwiMTkuMDdcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTQuODNcXFwiIHkxPVxcXCI5LjE3XFxcIiB4Mj1cXFwiMTkuMDdcXFwiIHkyPVxcXCI0LjkzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0LjgzXFxcIiB5MT1cXFwiOS4xN1xcXCIgeDI9XFxcIjE4LjM2XFxcIiB5Mj1cXFwiNS42NFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjkzXFxcIiB5MT1cXFwiMTkuMDdcXFwiIHgyPVxcXCI5LjE3XFxcIiB5Mj1cXFwiMTQuODNcXFwiPjwvbGluZT5cIixcImxpbmstMlwiOlwiPHBhdGggZD1cXFwiTTE1IDdoM2E1IDUgMCAwIDEgNSA1IDUgNSAwIDAgMS01IDVoLTNtLTYgMEg2YTUgNSAwIDAgMS01LTUgNSA1IDAgMCAxIDUtNWgzXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcImxpbmtcIjpcIjxwYXRoIGQ9XFxcIk0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxXFxcIj48L3BhdGg+XCIsXCJsaW5rZWRpblwiOlwiPHBhdGggZD1cXFwiTTE2IDhhNiA2IDAgMCAxIDYgNnY3aC00di03YTIgMiAwIDAgMC0yLTIgMiAyIDAgMCAwLTIgMnY3aC00di03YTYgNiAwIDAgMSA2LTZ6XFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiOVxcXCIgd2lkdGg9XFxcIjRcXFwiIGhlaWdodD1cXFwiMTJcXFwiPjwvcmVjdD48Y2lyY2xlIGN4PVxcXCI0XFxcIiBjeT1cXFwiNFxcXCIgcj1cXFwiMlxcXCI+PC9jaXJjbGU+XCIsXCJsaXN0XCI6XCI8bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjZcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMy4wMVxcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMy4wMVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjMuMDFcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwibG9hZGVyXCI6XCI8bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjQuOTNcXFwiIHkxPVxcXCI0LjkzXFxcIiB4Mj1cXFwiNy43NlxcXCIgeTI9XFxcIjcuNzZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTYuMjRcXFwiIHkxPVxcXCIxNi4yNFxcXCIgeDI9XFxcIjE5LjA3XFxcIiB5Mj1cXFwiMTkuMDdcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMlxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiNlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjQuOTNcXFwiIHkxPVxcXCIxOS4wN1xcXCIgeDI9XFxcIjcuNzZcXFwiIHkyPVxcXCIxNi4yNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNi4yNFxcXCIgeTE9XFxcIjcuNzZcXFwiIHgyPVxcXCIxOS4wN1xcXCIgeTI9XFxcIjQuOTNcXFwiPjwvbGluZT5cIixcImxvY2tcIjpcIjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjExXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMTFcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxwYXRoIGQ9XFxcIk03IDExVjdhNSA1IDAgMCAxIDEwIDB2NFxcXCI+PC9wYXRoPlwiLFwibG9nLWluXCI6XCI8cGF0aCBkPVxcXCJNMTUgM2g0YTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMmgtNFxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjEwIDE3IDE1IDEyIDEwIDdcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcImxvZy1vdXRcIjpcIjxwYXRoIGQ9XFxcIk05IDIxSDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNFxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE2IDE3IDIxIDEyIDE2IDdcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCI5XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcIm1haWxcIjpcIjxwYXRoIGQ9XFxcIk00IDRoMTZjMS4xIDAgMiAuOSAyIDJ2MTJjMCAxLjEtLjkgMi0yIDJINGMtMS4xIDAtMi0uOS0yLTJWNmMwLTEuMS45LTIgMi0yelxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjIyLDYgMTIsMTMgMiw2XFxcIj48L3BvbHlsaW5lPlwiLFwibWFwLXBpblwiOlwiPHBhdGggZD1cXFwiTTIxIDEwYzAgNy05IDEzLTkgMTNzLTktNi05LTEzYTkgOSAwIDAgMSAxOCAwelxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTBcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwibWFwXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjEgNiAxIDIyIDggMTggMTYgMjIgMjMgMTggMjMgMiAxNiA2IDggMiAxIDZcXFwiPjwvcG9seWdvbj48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjJcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIyMlxcXCI+PC9saW5lPlwiLFwibWF4aW1pemUtMlwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTUgMyAyMSAzIDIxIDlcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiOSAyMSAzIDIxIDMgMTVcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiM1xcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiMTBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTBcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPlwiLFwibWF4aW1pemVcIjpcIjxwYXRoIGQ9XFxcIk04IDNINWEyIDIgMCAwIDAtMiAydjNtMTggMFY1YTIgMiAwIDAgMC0yLTJoLTNtMCAxOGgzYTIgMiAwIDAgMCAyLTJ2LTNNMyAxNnYzYTIgMiAwIDAgMCAyIDJoM1xcXCI+PC9wYXRoPlwiLFwibWVoXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI5LjAxXFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxNS4wMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcIm1lbnVcIjpcIjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcIm1lc3NhZ2UtY2lyY2xlXCI6XCI8cGF0aCBkPVxcXCJNMjEgMTEuNWE4LjM4IDguMzggMCAwIDEtLjkgMy44IDguNSA4LjUgMCAwIDEtNy42IDQuNyA4LjM4IDguMzggMCAwIDEtMy44LS45TDMgMjFsMS45LTUuN2E4LjM4IDguMzggMCAwIDEtLjktMy44IDguNSA4LjUgMCAwIDEgNC43LTcuNiA4LjM4IDguMzggMCAwIDEgMy44LS45aC41YTguNDggOC40OCAwIDAgMSA4IDh2LjV6XFxcIj48L3BhdGg+XCIsXCJtZXNzYWdlLXNxdWFyZVwiOlwiPHBhdGggZD1cXFwiTTIxIDE1YTIgMiAwIDAgMS0yIDJIN2wtNCA0VjVhMiAyIDAgMCAxIDItMmgxNGEyIDIgMCAwIDEgMiAyelxcXCI+PC9wYXRoPlwiLFwibWljLW9mZlwiOlwiPGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk05IDl2M2EzIDMgMCAwIDAgNS4xMiAyLjEyTTE1IDkuMzRWNGEzIDMgMCAwIDAtNS45NC0uNlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNyAxNi45NUE3IDcgMCAwIDEgNSAxMnYtMm0xNCAwdjJhNyA3IDAgMCAxLS4xMSAxLjIzXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTlcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIyM1xcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT5cIixcIm1pY1wiOlwiPHBhdGggZD1cXFwiTTEyIDFhMyAzIDAgMCAwLTMgM3Y4YTMgMyAwIDAgMCA2IDBWNGEzIDMgMCAwIDAtMy0zelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOSAxMHYyYTcgNyAwIDAgMS0xNCAwdi0yXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTlcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIyM1xcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT5cIixcIm1pbmltaXplLTJcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjQgMTQgMTAgMTQgMTAgMjBcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjAgMTAgMTQgMTAgMTQgNFxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTRcXFwiIHkxPVxcXCIxMFxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIxMFxcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+XCIsXCJtaW5pbWl6ZVwiOlwiPHBhdGggZD1cXFwiTTggM3YzYTIgMiAwIDAgMS0yIDJIM20xOCAwaC0zYTIgMiAwIDAgMS0yLTJWM20wIDE4di0zYTIgMiAwIDAgMSAyLTJoM00zIDE2aDNhMiAyIDAgMCAxIDIgMnYzXFxcIj48L3BhdGg+XCIsXCJtaW51cy1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPlwiLFwibWludXMtc3F1YXJlXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJtaW51c1wiOlwiPGxpbmUgeDE9XFxcIjVcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE5XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcIm1vbml0b3JcIjpcIjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIxNFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIyMVxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT5cIixcIm1vb25cIjpcIjxwYXRoIGQ9XFxcIk0yMSAxMi43OUE5IDkgMCAxIDEgMTEuMjEgMyA3IDcgMCAwIDAgMjEgMTIuNzl6XFxcIj48L3BhdGg+XCIsXCJtb3JlLWhvcml6b250YWxcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjFcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE5XFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjFcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjVcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMVxcXCI+PC9jaXJjbGU+XCIsXCJtb3JlLXZlcnRpY2FsXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjFcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTlcXFwiIHI9XFxcIjFcXFwiPjwvY2lyY2xlPlwiLFwibW91c2UtcG9pbnRlclwiOlwiPHBhdGggZD1cXFwiTTMgM2w3LjA3IDE2Ljk3IDIuNTEtNy4zOSA3LjM5LTIuNTFMMyAzelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMyAxM2w2IDZcXFwiPjwvcGF0aD5cIixcIm1vdmVcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjUgOSAyIDEyIDUgMTVcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiOSA1IDEyIDIgMTUgNVxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNSAxOSAxMiAyMiA5IDE5XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjE5IDkgMjIgMTIgMTkgMTVcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjIyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyMlxcXCI+PC9saW5lPlwiLFwibXVzaWNcIjpcIjxwYXRoIGQ9XFxcIk05IDE4VjVsMTItMnYxM1xcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjZcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMThcXFwiIGN5PVxcXCIxNlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+XCIsXCJuYXZpZ2F0aW9uLTJcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTIgMiAxOSAyMSAxMiAxNyA1IDIxIDEyIDJcXFwiPjwvcG9seWdvbj5cIixcIm5hdmlnYXRpb25cIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMyAxMSAyMiAyIDEzIDIxIDExIDEzIDMgMTFcXFwiPjwvcG9seWdvbj5cIixcIm9jdGFnb25cIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiNy44NiAyIDE2LjE0IDIgMjIgNy44NiAyMiAxNi4xNCAxNi4xNCAyMiA3Ljg2IDIyIDIgMTYuMTQgMiA3Ljg2IDcuODYgMlxcXCI+PC9wb2x5Z29uPlwiLFwicGFja2FnZVwiOlwiPGxpbmUgeDE9XFxcIjE2LjVcXFwiIHkxPVxcXCI5LjRcXFwiIHgyPVxcXCI3LjVcXFwiIHkyPVxcXCI0LjIxXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIxIDE2VjhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M2w3IDRhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2elxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjMuMjcgNi45NiAxMiAxMi4wMSAyMC43MyA2Ljk2XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIyLjA4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPlwiLFwicGFwZXJjbGlwXCI6XCI8cGF0aCBkPVxcXCJNMjEuNDQgMTEuMDVsLTkuMTkgOS4xOWE2IDYgMCAwIDEtOC40OS04LjQ5bDkuMTktOS4xOWE0IDQgMCAwIDEgNS42NiA1LjY2bC05LjIgOS4xOWEyIDIgMCAwIDEtMi44My0yLjgzbDguNDktOC40OFxcXCI+PC9wYXRoPlwiLFwicGF1c2UtY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEwXFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIxMFxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTRcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPlwiLFwicGF1c2VcIjpcIjxyZWN0IHg9XFxcIjZcXFwiIHk9XFxcIjRcXFwiIHdpZHRoPVxcXCI0XFxcIiBoZWlnaHQ9XFxcIjE2XFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTRcXFwiIHk9XFxcIjRcXFwiIHdpZHRoPVxcXCI0XFxcIiBoZWlnaHQ9XFxcIjE2XFxcIj48L3JlY3Q+XCIsXCJwZW4tdG9vbFwiOlwiPHBhdGggZD1cXFwiTTEyIDE5bDctNyAzIDMtNyA3LTMtM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTggMTNsLTEuNS03LjVMMiAybDMuNSAxNC41TDEzIDE4bDUtNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMiAybDcuNTg2IDcuNTg2XFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiMTFcXFwiIGN5PVxcXCIxMVxcXCIgcj1cXFwiMlxcXCI+PC9jaXJjbGU+XCIsXCJwZXJjZW50XCI6XCI8bGluZSB4MT1cXFwiMTlcXFwiIHkxPVxcXCI1XFxcIiB4Mj1cXFwiNVxcXCIgeTI9XFxcIjE5XFxcIj48L2xpbmU+PGNpcmNsZSBjeD1cXFwiNi41XFxcIiBjeT1cXFwiNi41XFxcIiByPVxcXCIyLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE3LjVcXFwiIGN5PVxcXCIxNy41XFxcIiByPVxcXCIyLjVcXFwiPjwvY2lyY2xlPlwiLFwicGhvbmUtY2FsbFwiOlwiPHBhdGggZD1cXFwiTTE1LjA1IDVBNSA1IDAgMCAxIDE5IDguOTVNMTUuMDUgMUE5IDkgMCAwIDEgMjMgOC45NG0tMSA3Ljk4djNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6XFxcIj48L3BhdGg+XCIsXCJwaG9uZS1mb3J3YXJkZWRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE5IDEgMjMgNSAxOSA5XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjVcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjVcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMjIgMTYuOTJ2M2EyIDIgMCAwIDEtMi4xOCAyIDE5Ljc5IDE5Ljc5IDAgMCAxLTguNjMtMy4wNyAxOS41IDE5LjUgMCAwIDEtNi02IDE5Ljc5IDE5Ljc5IDAgMCAxLTMuMDctOC42N0EyIDIgMCAwIDEgNC4xMSAyaDNhMiAyIDAgMCAxIDIgMS43MiAxMi44NCAxMi44NCAwIDAgMCAuNyAyLjgxIDIgMiAwIDAgMS0uNDUgMi4xMUw4LjA5IDkuOTFhMTYgMTYgMCAwIDAgNiA2bDEuMjctMS4yN2EyIDIgMCAwIDEgMi4xMS0uNDUgMTIuODQgMTIuODQgMCAwIDAgMi44MS43QTIgMiAwIDAgMSAyMiAxNi45MnpcXFwiPjwvcGF0aD5cIixcInBob25lLWluY29taW5nXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAyIDE2IDggMjIgOFxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCI4XFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6XFxcIj48L3BhdGg+XCIsXCJwaG9uZS1taXNzZWRcIjpcIjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIxN1xcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTdcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCI3XFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6XFxcIj48L3BhdGg+XCIsXCJwaG9uZS1vZmZcIjpcIjxwYXRoIGQ9XFxcIk0xMC42OCAxMy4zMWExNiAxNiAwIDAgMCAzLjQxIDIuNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuNyAyIDIgMCAwIDEgMS43MiAydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNDIgMTkuNDIgMCAwIDEtMy4zMy0yLjY3bS0yLjY3LTMuMzRhMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjYzQTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MVxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIxXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT5cIixcInBob25lLW91dGdvaW5nXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMyA3IDIzIDEgMTcgMVxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6XFxcIj48L3BhdGg+XCIsXCJwaG9uZVwiOlwiPHBhdGggZD1cXFwiTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6XFxcIj48L3BhdGg+XCIsXCJwaWUtY2hhcnRcIjpcIjxwYXRoIGQ9XFxcIk0yMS4yMSAxNS44OUExMCAxMCAwIDEgMSA4IDIuODNcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjIgMTJBMTAgMTAgMCAwIDAgMTIgMnYxMHpcXFwiPjwvcGF0aD5cIixcInBsYXktY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBvbHlnb24gcG9pbnRzPVxcXCIxMCA4IDE2IDEyIDEwIDE2IDEwIDhcXFwiPjwvcG9seWdvbj5cIixcInBsYXlcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiNSAzIDE5IDEyIDUgMjEgNSAzXFxcIj48L3BvbHlnb24+XCIsXCJwbHVzLWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcInBsdXMtc3F1YXJlXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcInBsdXNcIjpcIjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjVcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjVcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE5XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcInBvY2tldFwiOlwiPHBhdGggZD1cXFwiTTQgM2gxNmEyIDIgMCAwIDEgMiAydjZhMTAgMTAgMCAwIDEtMTAgMTBBMTAgMTAgMCAwIDEgMiAxMVY1YTIgMiAwIDAgMSAyLTJ6XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiOCAxMCAxMiAxNCAxNiAxMFxcXCI+PC9wb2x5bGluZT5cIixcInBvd2VyXCI6XCI8cGF0aCBkPVxcXCJNMTguMzYgNi42NGE5IDkgMCAxIDEtMTIuNzMgMFxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJwcmludGVyXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI2IDkgNiAyIDE4IDIgMTggOVxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNNiAxOEg0YTIgMiAwIDAgMS0yLTJ2LTVhMiAyIDAgMCAxIDItMmgxNmEyIDIgMCAwIDEgMiAydjVhMiAyIDAgMCAxLTIgMmgtMlxcXCI+PC9wYXRoPjxyZWN0IHg9XFxcIjZcXFwiIHk9XFxcIjE0XFxcIiB3aWR0aD1cXFwiMTJcXFwiIGhlaWdodD1cXFwiOFxcXCI+PC9yZWN0PlwiLFwicmFkaW9cIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xNi4yNCA3Ljc2YTYgNiAwIDAgMSAwIDguNDltLTguNDgtLjAxYTYgNiAwIDAgMSAwLTguNDltMTEuMzEtMi44MmExMCAxMCAwIDAgMSAwIDE0LjE0bS0xNC4xNCAwYTEwIDEwIDAgMCAxIDAtMTQuMTRcXFwiPjwvcGF0aD5cIixcInJlZnJlc2gtY2N3XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxIDQgMSAxMCA3IDEwXFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjIzIDIwIDIzIDE0IDE3IDE0XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0yMC40OSA5QTkgOSAwIDAgMCA1LjY0IDUuNjRMMSAxMG0yMiA0bC00LjY0IDQuMzZBOSA5IDAgMCAxIDMuNTEgMTVcXFwiPjwvcGF0aD5cIixcInJlZnJlc2gtY3dcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjIzIDQgMjMgMTAgMTcgMTBcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMSAyMCAxIDE0IDcgMTRcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTMuNTEgOWE5IDkgMCAwIDEgMTQuODUtMy4zNkwyMyAxME0xIDE0bDQuNjQgNC4zNkE5IDkgMCAwIDAgMjAuNDkgMTVcXFwiPjwvcGF0aD5cIixcInJlcGVhdFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgMSAyMSA1IDE3IDlcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTMgMTFWOWE0IDQgMCAwIDEgNC00aDE0XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiNyAyMyAzIDE5IDcgMTVcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTIxIDEzdjJhNCA0IDAgMCAxLTQgNEgzXFxcIj48L3BhdGg+XCIsXCJyZXdpbmRcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTEgMTkgMiAxMiAxMSA1IDExIDE5XFxcIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPVxcXCIyMiAxOSAxMyAxMiAyMiA1IDIyIDE5XFxcIj48L3BvbHlnb24+XCIsXCJyb3RhdGUtY2N3XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxIDQgMSAxMCA3IDEwXFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0zLjUxIDE1YTkgOSAwIDEgMCAyLjEzLTkuMzZMMSAxMFxcXCI+PC9wYXRoPlwiLFwicm90YXRlLWN3XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMyA0IDIzIDEwIDE3IDEwXFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0yMC40OSAxNWE5IDkgMCAxIDEtMi4xMi05LjM2TDIzIDEwXFxcIj48L3BhdGg+XCIsXCJyc3NcIjpcIjxwYXRoIGQ9XFxcIk00IDExYTkgOSAwIDAgMSA5IDlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNCA0YTE2IDE2IDAgMCAxIDE2IDE2XFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiNVxcXCIgY3k9XFxcIjE5XFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT5cIixcInNhdmVcIjpcIjxwYXRoIGQ9XFxcIk0xOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDExbDUgNXYxMWEyIDIgMCAwIDEtMiAyelxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDIxIDE3IDEzIDcgMTMgNyAyMVxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCI3IDMgNyA4IDE1IDhcXFwiPjwvcG9seWxpbmU+XCIsXCJzY2lzc29yc1wiOlwiPGNpcmNsZSBjeD1cXFwiNlxcXCIgY3k9XFxcIjZcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjZcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjIwXFxcIiB5MT1cXFwiNFxcXCIgeDI9XFxcIjguMTJcXFwiIHkyPVxcXCIxNS44OFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNC40N1xcXCIgeTE9XFxcIjE0LjQ4XFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIyMFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4LjEyXFxcIiB5MT1cXFwiOC4xMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcInNlYXJjaFwiOlwiPGNpcmNsZSBjeD1cXFwiMTFcXFwiIGN5PVxcXCIxMVxcXCIgcj1cXFwiOFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIxNi42NVxcXCIgeTI9XFxcIjE2LjY1XFxcIj48L2xpbmU+XCIsXCJzZW5kXCI6XCI8bGluZSB4MT1cXFwiMjJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTFcXFwiIHkyPVxcXCIxM1xcXCI+PC9saW5lPjxwb2x5Z29uIHBvaW50cz1cXFwiMjIgMiAxNSAyMiAxMSAxMyAyIDkgMjIgMlxcXCI+PC9wb2x5Z29uPlwiLFwic2VydmVyXCI6XCI8cmVjdCB4PVxcXCIyXFxcIiB5PVxcXCIyXFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiOFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiMTRcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCI4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjZcXFwiIHgyPVxcXCI2LjAxXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCI2LjAxXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcInNldHRpbmdzXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTkuNCAxNWExLjY1IDEuNjUgMCAwIDAgLjMzIDEuODJsLjA2LjA2YTIgMiAwIDAgMSAwIDIuODMgMiAyIDAgMCAxLTIuODMgMGwtLjA2LS4wNmExLjY1IDEuNjUgMCAwIDAtMS44Mi0uMzMgMS42NSAxLjY1IDAgMCAwLTEgMS41MVYyMWEyIDIgMCAwIDEtMiAyIDIgMiAwIDAgMS0yLTJ2LS4wOUExLjY1IDEuNjUgMCAwIDAgOSAxOS40YTEuNjUgMS42NSAwIDAgMC0xLjgyLjMzbC0uMDYuMDZhMiAyIDAgMCAxLTIuODMgMCAyIDIgMCAwIDEgMC0yLjgzbC4wNi0uMDZhMS42NSAxLjY1IDAgMCAwIC4zMy0xLjgyIDEuNjUgMS42NSAwIDAgMC0xLjUxLTFIM2EyIDIgMCAwIDEtMi0yIDIgMiAwIDAgMSAyLTJoLjA5QTEuNjUgMS42NSAwIDAgMCA0LjYgOWExLjY1IDEuNjUgMCAwIDAtLjMzLTEuODJsLS4wNi0uMDZhMiAyIDAgMCAxIDAtMi44MyAyIDIgMCAwIDEgMi44MyAwbC4wNi4wNmExLjY1IDEuNjUgMCAwIDAgMS44Mi4zM0g5YTEuNjUgMS42NSAwIDAgMCAxLTEuNTFWM2EyIDIgMCAwIDEgMi0yIDIgMiAwIDAgMSAyIDJ2LjA5YTEuNjUgMS42NSAwIDAgMCAxIDEuNTEgMS42NSAxLjY1IDAgMCAwIDEuODItLjMzbC4wNi0uMDZhMiAyIDAgMCAxIDIuODMgMCAyIDIgMCAwIDEgMCAyLjgzbC0uMDYuMDZhMS42NSAxLjY1IDAgMCAwLS4zMyAxLjgyVjlhMS42NSAxLjY1IDAgMCAwIDEuNTEgMUgyMWEyIDIgMCAwIDEgMiAyIDIgMiAwIDAgMS0yIDJoLS4wOWExLjY1IDEuNjUgMCAwIDAtMS41MSAxelxcXCI+PC9wYXRoPlwiLFwic2hhcmUtMlwiOlwiPGNpcmNsZSBjeD1cXFwiMThcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMTlcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCI4LjU5XFxcIiB5MT1cXFwiMTMuNTFcXFwiIHgyPVxcXCIxNS40MlxcXCIgeTI9XFxcIjE3LjQ5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE1LjQxXFxcIiB5MT1cXFwiNi41MVxcXCIgeDI9XFxcIjguNTlcXFwiIHkyPVxcXCIxMC40OVxcXCI+PC9saW5lPlwiLFwic2hhcmVcIjpcIjxwYXRoIGQ9XFxcIk00IDEydjhhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0ydi04XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTYgNiAxMiAyIDggNlxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwic2hpZWxkLW9mZlwiOlwiPHBhdGggZD1cXFwiTTE5LjY5IDE0YTYuOSA2LjkgMCAwIDAgLjMxLTJWNWwtOC0zLTMuMTYgMS4xOFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk00LjczIDQuNzNMNCA1djdjMCA2IDggMTAgOCAxMGEyMC4yOSAyMC4yOSAwIDAgMCA1LjYyLTQuMzhcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJzaGllbGRcIjpcIjxwYXRoIGQ9XFxcIk0xMiAyMnM4LTQgOC0xMFY1bC04LTMtOCAzdjdjMCA2IDggMTAgOCAxMHpcXFwiPjwvcGF0aD5cIixcInNob3BwaW5nLWJhZ1wiOlwiPHBhdGggZD1cXFwiTTYgMkwzIDZ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0yVjZsLTMtNHpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjZcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMTYgMTBhNCA0IDAgMCAxLTggMFxcXCI+PC9wYXRoPlwiLFwic2hvcHBpbmctY2FydFwiOlwiPGNpcmNsZSBjeD1cXFwiOVxcXCIgY3k9XFxcIjIxXFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIyMFxcXCIgY3k9XFxcIjIxXFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMSAxaDRsMi42OCAxMy4zOWEyIDIgMCAwIDAgMiAxLjYxaDkuNzJhMiAyIDAgMCAwIDItMS42MUwyMyA2SDZcXFwiPjwvcGF0aD5cIixcInNodWZmbGVcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE2IDMgMjEgMyAyMSA4XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCI0XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjNcXFwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIyMSAxNiAyMSAyMSAxNiAyMVxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjRcXFwiIHgyPVxcXCI5XFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPlwiLFwic2lkZWJhclwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjNcXFwiIHgyPVxcXCI5XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT5cIixcInNraXAtYmFja1wiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxOSAyMCA5IDEyIDE5IDQgMTkgMjBcXFwiPjwvcG9seWdvbj48bGluZSB4MT1cXFwiNVxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiNVxcXCIgeTI9XFxcIjVcXFwiPjwvbGluZT5cIixcInNraXAtZm9yd2FyZFwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCI1IDQgMTUgMTIgNSAyMCA1IDRcXFwiPjwvcG9seWdvbj48bGluZSB4MT1cXFwiMTlcXFwiIHkxPVxcXCI1XFxcIiB4Mj1cXFwiMTlcXFwiIHkyPVxcXCIxOVxcXCI+PC9saW5lPlwiLFwic2xhY2tcIjpcIjxwYXRoIGQ9XFxcIk0xNC41IDEwYy0uODMgMC0xLjUtLjY3LTEuNS0xLjV2LTVjMC0uODMuNjctMS41IDEuNS0xLjVzMS41LjY3IDEuNSAxLjV2NWMwIC44My0uNjcgMS41LTEuNSAxLjV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIwLjUgMTBIMTlWOC41YzAtLjgzLjY3LTEuNSAxLjUtMS41czEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOS41IDE0Yy44MyAwIDEuNS42NyAxLjUgMS41djVjMCAuODMtLjY3IDEuNS0xLjUgMS41UzggMjEuMzMgOCAyMC41di01YzAtLjgzLjY3LTEuNSAxLjUtMS41elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zLjUgMTRINXYxLjVjMCAuODMtLjY3IDEuNS0xLjUgMS41UzIgMTYuMzMgMiAxNS41IDIuNjcgMTQgMy41IDE0elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNCAxNC41YzAtLjgzLjY3LTEuNSAxLjUtMS41aDVjLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNWgtNWMtLjgzIDAtMS41LS42Ny0xLjUtMS41elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNS41IDE5SDE0djEuNWMwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjUtLjY3LTEuNS0xLjUtMS41elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMCA5LjVDMTAgOC42NyA5LjMzIDggOC41IDhoLTVDMi42NyA4IDIgOC42NyAyIDkuNVMyLjY3IDExIDMuNSAxMWg1Yy44MyAwIDEuNS0uNjcgMS41LTEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOC41IDVIMTBWMy41QzEwIDIuNjcgOS4zMyAyIDguNSAyUzcgMi42NyA3IDMuNSA3LjY3IDUgOC41IDV6XFxcIj48L3BhdGg+XCIsXCJzbGFzaFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCI0LjkzXFxcIiB5MT1cXFwiNC45M1xcXCIgeDI9XFxcIjE5LjA3XFxcIiB5Mj1cXFwiMTkuMDdcXFwiPjwvbGluZT5cIixcInNsaWRlcnNcIjpcIjxsaW5lIHgxPVxcXCI0XFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCI0XFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjEwXFxcIiB4Mj1cXFwiNFxcXCIgeTI9XFxcIjNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIwXFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIyMFxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIwXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyMFxcXCIgeTI9XFxcIjNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjE0XFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCI4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+XCIsXCJzbWFydHBob25lXCI6XCI8cmVjdCB4PVxcXCI1XFxcIiB5PVxcXCIyXFxcIiB3aWR0aD1cXFwiMTRcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwic21pbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNOCAxNHMxLjUgMiA0IDIgNC0yIDQtMlxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjkuMDFcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjE1LjAxXFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPlwiLFwic3BlYWtlclwiOlwiPHJlY3QgeD1cXFwiNFxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjE0XFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+XCIsXCJzcXVhcmVcIjpcIjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxOFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+XCIsXCJzdGFyXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjEyIDIgMTUuMDkgOC4yNiAyMiA5LjI3IDE3IDE0LjE0IDE4LjE4IDIxLjAyIDEyIDE3Ljc3IDUuODIgMjEuMDIgNyAxNC4xNCAyIDkuMjcgOC45MSA4LjI2IDEyIDJcXFwiPjwvcG9seWdvbj5cIixcInN0b3AtY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHJlY3QgeD1cXFwiOVxcXCIgeT1cXFwiOVxcXCIgd2lkdGg9XFxcIjZcXFwiIGhlaWdodD1cXFwiNlxcXCI+PC9yZWN0PlwiLFwic3VuXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCI1XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjQuMjJcXFwiIHkxPVxcXCI0LjIyXFxcIiB4Mj1cXFwiNS42NFxcXCIgeTI9XFxcIjUuNjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTguMzZcXFwiIHkxPVxcXCIxOC4zNlxcXCIgeDI9XFxcIjE5Ljc4XFxcIiB5Mj1cXFwiMTkuNzhcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjQuMjJcXFwiIHkxPVxcXCIxOS43OFxcXCIgeDI9XFxcIjUuNjRcXFwiIHkyPVxcXCIxOC4zNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxOC4zNlxcXCIgeTE9XFxcIjUuNjRcXFwiIHgyPVxcXCIxOS43OFxcXCIgeTI9XFxcIjQuMjJcXFwiPjwvbGluZT5cIixcInN1bnJpc2VcIjpcIjxwYXRoIGQ9XFxcIk0xNyAxOGE1IDUgMCAwIDAtMTAgMFxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNC4yMlxcXCIgeTE9XFxcIjEwLjIyXFxcIiB4Mj1cXFwiNS42NFxcXCIgeTI9XFxcIjExLjY0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxOC4zNlxcXCIgeTE9XFxcIjExLjY0XFxcIiB4Mj1cXFwiMTkuNzhcXFwiIHkyPVxcXCIxMC4yMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiMVxcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiOCA2IDEyIDIgMTYgNlxcXCI+PC9wb2x5bGluZT5cIixcInN1bnNldFwiOlwiPHBhdGggZD1cXFwiTTE3IDE4YTUgNSAwIDAgMC0xMCAwXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjIyXFxcIiB5MT1cXFwiMTAuMjJcXFwiIHgyPVxcXCI1LjY0XFxcIiB5Mj1cXFwiMTEuNjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE4LjM2XFxcIiB5MT1cXFwiMTEuNjRcXFwiIHgyPVxcXCIxOS43OFxcXCIgeTI9XFxcIjEwLjIyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiMjJcXFwiIHgyPVxcXCIxXFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNiA1IDEyIDkgOCA1XFxcIj48L3BvbHlsaW5lPlwiLFwidGFibGVcIjpcIjxwYXRoIGQ9XFxcIk05IDNINWEyIDIgMCAwIDAtMiAydjRtNi02aDEwYTIgMiAwIDAgMSAyIDJ2NE05IDN2MThtMCAwaDEwYTIgMiAwIDAgMCAyLTJWOU05IDIxSDVhMiAyIDAgMCAxLTItMlY5bTAgMGgxOFxcXCI+PC9wYXRoPlwiLFwidGFibGV0XCI6XCI8cmVjdCB4PVxcXCI0XFxcIiB5PVxcXCIyXFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwidGFnXCI6XCI8cGF0aCBkPVxcXCJNMjAuNTkgMTMuNDFsLTcuMTcgNy4xN2EyIDIgMCAwIDEtMi44MyAwTDIgMTJWMmgxMGw4LjU5IDguNTlhMiAyIDAgMCAxIDAgMi44MnpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiN1xcXCIgeTE9XFxcIjdcXFwiIHgyPVxcXCI3LjAxXFxcIiB5Mj1cXFwiN1xcXCI+PC9saW5lPlwiLFwidGFyZ2V0XCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiNlxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMlxcXCI+PC9jaXJjbGU+XCIsXCJ0ZXJtaW5hbFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiNCAxNyAxMCAxMSA0IDVcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTlcXFwiIHgyPVxcXCIyMFxcXCIgeTI9XFxcIjE5XFxcIj48L2xpbmU+XCIsXCJ0aGVybW9tZXRlclwiOlwiPHBhdGggZD1cXFwiTTE0IDE0Ljc2VjMuNWEyLjUgMi41IDAgMCAwLTUgMHYxMS4yNmE0LjUgNC41IDAgMSAwIDUgMHpcXFwiPjwvcGF0aD5cIixcInRodW1icy1kb3duXCI6XCI8cGF0aCBkPVxcXCJNMTAgMTV2NGEzIDMgMCAwIDAgMyAzbDQtOVYySDUuNzJhMiAyIDAgMCAwLTIgMS43bC0xLjM4IDlhMiAyIDAgMCAwIDIgMi4zem03LTEzaDIuNjdBMi4zMSAyLjMxIDAgMCAxIDIyIDR2N2EyLjMxIDIuMzEgMCAwIDEtMi4zMyAySDE3XFxcIj48L3BhdGg+XCIsXCJ0aHVtYnMtdXBcIjpcIjxwYXRoIGQ9XFxcIk0xNCA5VjVhMyAzIDAgMCAwLTMtM2wtNCA5djExaDExLjI4YTIgMiAwIDAgMCAyLTEuN2wxLjM4LTlhMiAyIDAgMCAwLTItMi4zek03IDIySDRhMiAyIDAgMCAxLTItMnYtN2EyIDIgMCAwIDEgMi0yaDNcXFwiPjwvcGF0aD5cIixcInRvZ2dsZS1sZWZ0XCI6XCI8cmVjdCB4PVxcXCIxXFxcIiB5PVxcXCI1XFxcIiB3aWR0aD1cXFwiMjJcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHJ4PVxcXCI3XFxcIiByeT1cXFwiN1xcXCI+PC9yZWN0PjxjaXJjbGUgY3g9XFxcIjhcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+XCIsXCJ0b2dnbGUtcmlnaHRcIjpcIjxyZWN0IHg9XFxcIjFcXFwiIHk9XFxcIjVcXFwiIHdpZHRoPVxcXCIyMlxcXCIgaGVpZ2h0PVxcXCIxNFxcXCIgcng9XFxcIjdcXFwiIHJ5PVxcXCI3XFxcIj48L3JlY3Q+PGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+XCIsXCJ0b29sXCI6XCI8cGF0aCBkPVxcXCJNMTQuNyA2LjNhMSAxIDAgMCAwIDAgMS40bDEuNiAxLjZhMSAxIDAgMCAwIDEuNCAwbDMuNzctMy43N2E2IDYgMCAwIDEtNy45NCA3Ljk0bC02LjkxIDYuOTFhMi4xMiAyLjEyIDAgMCAxLTMtM2w2LjkxLTYuOTFhNiA2IDAgMCAxIDcuOTQtNy45NGwtMy43NiAzLjc2elxcXCI+PC9wYXRoPlwiLFwidHJhc2gtMlwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMyA2IDUgNiAyMSA2XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMFxcXCIgeTE9XFxcIjExXFxcIiB4Mj1cXFwiMTBcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNFxcXCIgeTE9XFxcIjExXFxcIiB4Mj1cXFwiMTRcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPlwiLFwidHJhc2hcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjMgNiA1IDYgMjEgNlxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcXFwiPjwvcGF0aD5cIixcInRyZWxsb1wiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCI3XFxcIiB5PVxcXCI3XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCI5XFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTRcXFwiIHk9XFxcIjdcXFwiIHdpZHRoPVxcXCIzXFxcIiBoZWlnaHQ9XFxcIjVcXFwiPjwvcmVjdD5cIixcInRyZW5kaW5nLWRvd25cIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjIzIDE4IDEzLjUgOC41IDguNSAxMy41IDEgNlxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyAxOCAyMyAxOCAyMyAxMlxcXCI+PC9wb2x5bGluZT5cIixcInRyZW5kaW5nLXVwXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMyA2IDEzLjUgMTUuNSA4LjUgMTAuNSAxIDE4XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDYgMjMgNiAyMyAxMlxcXCI+PC9wb2x5bGluZT5cIixcInRyaWFuZ2xlXCI6XCI8cGF0aCBkPVxcXCJNMTAuMjkgMy44NkwxLjgyIDE4YTIgMiAwIDAgMCAxLjcxIDNoMTYuOTRhMiAyIDAgMCAwIDEuNzEtM0wxMy43MSAzLjg2YTIgMiAwIDAgMC0zLjQyIDB6XFxcIj48L3BhdGg+XCIsXCJ0cnVja1wiOlwiPHJlY3QgeD1cXFwiMVxcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE1XFxcIiBoZWlnaHQ9XFxcIjEzXFxcIj48L3JlY3Q+PHBvbHlnb24gcG9pbnRzPVxcXCIxNiA4IDIwIDggMjMgMTEgMjMgMTYgMTYgMTYgMTYgOFxcXCI+PC9wb2x5Z29uPjxjaXJjbGUgY3g9XFxcIjUuNVxcXCIgY3k9XFxcIjE4LjVcXFwiIHI9XFxcIjIuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTguNVxcXCIgY3k9XFxcIjE4LjVcXFwiIHI9XFxcIjIuNVxcXCI+PC9jaXJjbGU+XCIsXCJ0dlwiOlwiPHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiN1xcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjE1XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyAyIDEyIDcgNyAyXFxcIj48L3BvbHlsaW5lPlwiLFwidHdpdGNoXCI6XCI8cGF0aCBkPVxcXCJNMjEgMkgzdjE2aDV2NGw0LTRoNWw0LTRWMnpNMTEgMTFWN00xNiAxMVY3XFxcIj48L3BhdGg+XCIsXCJ0d2l0dGVyXCI6XCI8cGF0aCBkPVxcXCJNMjMgM2ExMC45IDEwLjkgMCAwIDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAgMC03Ljg2IDN2MUExMC42NiAxMC42NiAwIDAgMSAzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMCAxLTcgMmM5IDUgMjAgMCAyMC0xMS41YTQuNSA0LjUgMCAwIDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwIDAgMjMgM3pcXFwiPjwvcGF0aD5cIixcInR5cGVcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjQgNyA0IDQgMjAgNCAyMCA3XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiNFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjBcXFwiPjwvbGluZT5cIixcInVtYnJlbGxhXCI6XCI8cGF0aCBkPVxcXCJNMjMgMTJhMTEuMDUgMTEuMDUgMCAwIDAtMjIgMHptLTUgN2EzIDMgMCAwIDEtNiAwdi03XFxcIj48L3BhdGg+XCIsXCJ1bmRlcmxpbmVcIjpcIjxwYXRoIGQ9XFxcIk02IDN2N2E2IDYgMCAwIDAgNiA2IDYgNiAwIDAgMCA2LTZWM1xcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI0XFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIyMFxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+XCIsXCJ1bmxvY2tcIjpcIjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjExXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMTFcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxwYXRoIGQ9XFxcIk03IDExVjdhNSA1IDAgMCAxIDkuOS0xXFxcIj48L3BhdGg+XCIsXCJ1cGxvYWQtY2xvdWRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE2IDE2IDEyIDEyIDggMTZcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIwLjM5IDE4LjM5QTUgNSAwIDAgMCAxOCA5aC0xLjI2QTggOCAwIDEgMCAzIDE2LjNcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAxNiAxMiAxMiA4IDE2XFxcIj48L3BvbHlsaW5lPlwiLFwidXBsb2FkXCI6XCI8cGF0aCBkPVxcXCJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNFxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDggMTIgMyA3IDhcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiM1xcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT5cIixcInVzZXItY2hlY2tcIjpcIjxwYXRoIGQ9XFxcIk0xNiAyMXYtMmE0IDQgMCAwIDAtNC00SDVhNCA0IDAgMCAwLTQgNHYyXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiOC41XFxcIiBjeT1cXFwiN1xcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgMTEgMTkgMTMgMjMgOVxcXCI+PC9wb2x5bGluZT5cIixcInVzZXItbWludXNcIjpcIjxwYXRoIGQ9XFxcIk0xNiAyMXYtMmE0IDQgMCAwIDAtNC00SDVhNCA0IDAgMCAwLTQgNHYyXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiOC41XFxcIiBjeT1cXFwiN1xcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiMTFcXFwiIHgyPVxcXCIxN1xcXCIgeTI9XFxcIjExXFxcIj48L2xpbmU+XCIsXCJ1c2VyLXBsdXNcIjpcIjxwYXRoIGQ9XFxcIk0xNiAyMXYtMmE0IDQgMCAwIDAtNC00SDVhNCA0IDAgMCAwLTQgNHYyXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiOC41XFxcIiBjeT1cXFwiN1xcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjIwXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjIwXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIxMVxcXCIgeDI9XFxcIjE3XFxcIiB5Mj1cXFwiMTFcXFwiPjwvbGluZT5cIixcInVzZXIteFwiOlwiPHBhdGggZD1cXFwiTTE2IDIxdi0yYTQgNCAwIDAgMC00LTRINWE0IDQgMCAwIDAtNCA0djJcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI4LjVcXFwiIGN5PVxcXCI3XFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMThcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxOFxcXCIgeTI9XFxcIjEzXFxcIj48L2xpbmU+XCIsXCJ1c2VyXCI6XCI8cGF0aCBkPVxcXCJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiN1xcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+XCIsXCJ1c2Vyc1wiOlwiPHBhdGggZD1cXFwiTTE3IDIxdi0yYTQgNCAwIDAgMC00LTRINWE0IDQgMCAwIDAtNCA0djJcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI5XFxcIiBjeT1cXFwiN1xcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTIzIDIxdi0yYTQgNCAwIDAgMC0zLTMuODdcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTYgMy4xM2E0IDQgMCAwIDEgMCA3Ljc1XFxcIj48L3BhdGg+XCIsXCJ2aWRlby1vZmZcIjpcIjxwYXRoIGQ9XFxcIk0xNiAxNnYxYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0yVjdhMiAyIDAgMCAxIDItMmgybTUuNjYgMEgxNGEyIDIgMCAwIDEgMiAydjMuMzRsMSAxTDIzIDd2MTBcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJ2aWRlb1wiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIyMyA3IDE2IDEyIDIzIDE3IDIzIDdcXFwiPjwvcG9seWdvbj48cmVjdCB4PVxcXCIxXFxcIiB5PVxcXCI1XFxcIiB3aWR0aD1cXFwiMTVcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PlwiLFwidm9pY2VtYWlsXCI6XCI8Y2lyY2xlIGN4PVxcXCI1LjVcXFwiIGN5PVxcXCIxMS41XFxcIiByPVxcXCI0LjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE4LjVcXFwiIGN5PVxcXCIxMS41XFxcIiByPVxcXCI0LjVcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCI1LjVcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjE4LjVcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPlwiLFwidm9sdW1lLTFcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTEgNSA2IDkgMiA5IDIgMTUgNiAxNSAxMSAxOSAxMSA1XFxcIj48L3BvbHlnb24+PHBhdGggZD1cXFwiTTE1LjU0IDguNDZhNSA1IDAgMCAxIDAgNy4wN1xcXCI+PC9wYXRoPlwiLFwidm9sdW1lLTJcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTEgNSA2IDkgMiA5IDIgMTUgNiAxNSAxMSAxOSAxMSA1XFxcIj48L3BvbHlnb24+PHBhdGggZD1cXFwiTTE5LjA3IDQuOTNhMTAgMTAgMCAwIDEgMCAxNC4xNE0xNS41NCA4LjQ2YTUgNSAwIDAgMSAwIDcuMDdcXFwiPjwvcGF0aD5cIixcInZvbHVtZS14XCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjExIDUgNiA5IDIgOSAyIDE1IDYgMTUgMTEgMTkgMTEgNVxcXCI+PC9wb2x5Z29uPjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxN1xcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT5cIixcInZvbHVtZVwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDVcXFwiPjwvcG9seWdvbj5cIixcIndhdGNoXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCI3XFxcIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxMiA5IDEyIDEyIDEzLjUgMTMuNVxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMTYuNTEgMTcuMzVsLS4zNSAzLjgzYTIgMiAwIDAgMS0yIDEuODJIOS44M2EyIDIgMCAwIDEtMi0xLjgybC0uMzUtMy44M20uMDEtMTAuN2wuMzUtMy44M0EyIDIgMCAwIDEgOS44MyAxaDQuMzVhMiAyIDAgMCAxIDIgMS44MmwuMzUgMy44M1xcXCI+PC9wYXRoPlwiLFwid2lmaS1vZmZcIjpcIjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMTYuNzIgMTEuMDZBMTAuOTQgMTAuOTQgMCAwIDEgMTkgMTIuNTVcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNSAxMi41NWExMC45NCAxMC45NCAwIDAgMSA1LjE3LTIuMzlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTAuNzEgNS4wNUExNiAxNiAwIDAgMSAyMi41OCA5XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEuNDIgOWExNS45MSAxNS45MSAwIDAgMSA0LjctMi44OFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04LjUzIDE2LjExYTYgNiAwIDAgMSA2Ljk1IDBcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMjBcXFwiPjwvbGluZT5cIixcIndpZmlcIjpcIjxwYXRoIGQ9XFxcIk01IDEyLjU1YTExIDExIDAgMCAxIDE0LjA4IDBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMS40MiA5YTE2IDE2IDAgMCAxIDIxLjE2IDBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOC41MyAxNi4xMWE2IDYgMCAwIDEgNi45NSAwXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxMi4wMVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+XCIsXCJ3aW5kXCI6XCI8cGF0aCBkPVxcXCJNOS41OSA0LjU5QTIgMiAwIDEgMSAxMSA4SDJtMTAuNTkgMTEuNDFBMiAyIDAgMSAwIDE0IDE2SDJtMTUuNzMtOC4yN0EyLjUgMi41IDAgMSAxIDE5LjUgMTJIMlxcXCI+PC9wYXRoPlwiLFwieC1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwieC1vY3RhZ29uXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjcuODYgMiAxNi4xNCAyIDIyIDcuODYgMjIgMTYuMTQgMTYuMTQgMjIgNy44NiAyMiAyIDE2LjE0IDIgNy44NiA3Ljg2IDJcXFwiPjwvcG9seWdvbj48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwieC1zcXVhcmVcIjpcIjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxOFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI5XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT5cIixcInhcIjpcIjxsaW5lIHgxPVxcXCIxOFxcXCIgeTE9XFxcIjZcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjZcXFwiIHgyPVxcXCIxOFxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJ5b3V0dWJlXCI6XCI8cGF0aCBkPVxcXCJNMjIuNTQgNi40MmEyLjc4IDIuNzggMCAwIDAtMS45NC0yQzE4Ljg4IDQgMTIgNCAxMiA0cy02Ljg4IDAtOC42LjQ2YTIuNzggMi43OCAwIDAgMC0xLjk0IDJBMjkgMjkgMCAwIDAgMSAxMS43NWEyOSAyOSAwIDAgMCAuNDYgNS4zM0EyLjc4IDIuNzggMCAwIDAgMy40IDE5YzEuNzIuNDYgOC42LjQ2IDguNi40NnM2Ljg4IDAgOC42LS40NmEyLjc4IDIuNzggMCAwIDAgMS45NC0yIDI5IDI5IDAgMCAwIC40Ni01LjI1IDI5IDI5IDAgMCAwLS40Ni01LjMzelxcXCI+PC9wYXRoPjxwb2x5Z29uIHBvaW50cz1cXFwiOS43NSAxNS4wMiAxNS41IDExLjc1IDkuNzUgOC40OCA5Ljc1IDE1LjAyXFxcIj48L3BvbHlnb24+XCIsXCJ6YXAtb2ZmXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxMi40MSA2Ljc1IDEzIDIgMTAuNTcgNC45MlxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxOC41NyAxMi45MSAyMSAxMCAxNS42NiAxMFxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCI4IDggMyAxNCAxMiAxNCAxMSAyMiAxNiAxNlxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJ6YXBcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTMgMiAzIDE0IDEyIDE0IDExIDIyIDIxIDEwIDEyIDEwIDEzIDJcXFwiPjwvcG9seWdvbj5cIixcInpvb20taW5cIjpcIjxjaXJjbGUgY3g9XFxcIjExXFxcIiBjeT1cXFwiMTFcXFwiIHI9XFxcIjhcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTYuNjVcXFwiIHkyPVxcXCIxNi42NVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMVxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxMVxcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMVxcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiMTFcXFwiPjwvbGluZT5cIixcInpvb20tb3V0XCI6XCI8Y2lyY2xlIGN4PVxcXCIxMVxcXCIgY3k9XFxcIjExXFxcIiByPVxcXCI4XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIyMVxcXCIgeDI9XFxcIjE2LjY1XFxcIiB5Mj1cXFwiMTYuNjVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjExXFxcIiB4Mj1cXFwiMTRcXFwiIHkyPVxcXCIxMVxcXCI+PC9saW5lPlwifTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9kZWR1cGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9kZWR1cGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOy8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjbGFzc05hbWVzID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBkb24ndCBpbmhlcml0IGZyb20gT2JqZWN0IHNvIHdlIGNhbiBza2lwIGhhc093blByb3BlcnR5IGNoZWNrIGxhdGVyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTUxODMyOC9jcmVhdGluZy1qcy1vYmplY3Qtd2l0aC1vYmplY3QtY3JlYXRlbnVsbCNhbnN3ZXItMjEwNzkyMzJcblx0XHRmdW5jdGlvbiBTdG9yYWdlT2JqZWN0KCkge31cblx0XHRTdG9yYWdlT2JqZWN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHRmdW5jdGlvbiBfcGFyc2VBcnJheSAocmVzdWx0U2V0LCBhcnJheSkge1xuXHRcdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdFx0XHRfcGFyc2UocmVzdWx0U2V0LCBhcnJheVtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdFx0ZnVuY3Rpb24gX3BhcnNlTnVtYmVyIChyZXN1bHRTZXQsIG51bSkge1xuXHRcdFx0cmVzdWx0U2V0W251bV0gPSB0cnVlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIF9wYXJzZU9iamVjdCAocmVzdWx0U2V0LCBvYmplY3QpIHtcblx0XHRcdGZvciAodmFyIGsgaW4gb2JqZWN0KSB7XG5cdFx0XHRcdGlmIChoYXNPd24uY2FsbChvYmplY3QsIGspKSB7XG5cdFx0XHRcdFx0Ly8gc2V0IHZhbHVlIHRvIGZhbHNlIGluc3RlYWQgb2YgZGVsZXRpbmcgaXQgdG8gYXZvaWQgY2hhbmdpbmcgb2JqZWN0IHN0cnVjdHVyZVxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vd3d3LnNtYXNoaW5nbWFnYXppbmUuY29tLzIwMTIvMTEvd3JpdGluZy1mYXN0LW1lbW9yeS1lZmZpY2llbnQtamF2YXNjcmlwdC8jZGUtcmVmZXJlbmNpbmctbWlzY29uY2VwdGlvbnNcblx0XHRcdFx0XHRyZXN1bHRTZXRba10gPSAhIW9iamVjdFtrXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBTUEFDRSA9IC9cXHMrLztcblx0XHRmdW5jdGlvbiBfcGFyc2VTdHJpbmcgKHJlc3VsdFNldCwgc3RyKSB7XG5cdFx0XHR2YXIgYXJyYXkgPSBzdHIuc3BsaXQoU1BBQ0UpO1xuXHRcdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdFx0XHRyZXN1bHRTZXRbYXJyYXlbaV1dID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBfcGFyc2UgKHJlc3VsdFNldCwgYXJnKSB7XG5cdFx0XHRpZiAoIWFyZykgcmV0dXJuO1xuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHQvLyAnZm9vIGJhcidcblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRfcGFyc2VTdHJpbmcocmVzdWx0U2V0LCBhcmcpO1xuXG5cdFx0XHQvLyBbJ2ZvbycsICdiYXInLCAuLi5dXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRfcGFyc2VBcnJheShyZXN1bHRTZXQsIGFyZyk7XG5cblx0XHRcdC8vIHsgJ2Zvbyc6IHRydWUsIC4uLiB9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdF9wYXJzZU9iamVjdChyZXN1bHRTZXQsIGFyZyk7XG5cblx0XHRcdC8vICcxMzAnXG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdF9wYXJzZU51bWJlcihyZXN1bHRTZXQsIGFyZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gX2NsYXNzTmFtZXMgKCkge1xuXHRcdFx0Ly8gZG9uJ3QgbGVhayBhcmd1bWVudHNcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuXHRcdFx0dmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0XHR2YXIgYXJncyA9IEFycmF5KGxlbik7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjbGFzc1NldCA9IG5ldyBTdG9yYWdlT2JqZWN0KCk7XG5cdFx0XHRfcGFyc2VBcnJheShjbGFzc1NldCwgYXJncyk7XG5cblx0XHRcdHZhciBsaXN0ID0gW107XG5cblx0XHRcdGZvciAodmFyIGsgaW4gY2xhc3NTZXQpIHtcblx0XHRcdFx0aWYgKGNsYXNzU2V0W2tdKSB7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKGspXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxpc3Quam9pbignICcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBfY2xhc3NOYW1lcztcblx0fSkoKTtcblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHJ1ZSkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHQhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSkuYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcblx0fSBlbHNlIHt9XG59KCkpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZXMvYXJyYXkvZnJvbS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9lcy9hcnJheS9mcm9tLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi8uLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi8uLi9tb2R1bGVzL2VzLmFycmF5LmZyb20gKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1wiKTtcbnZhciBwYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vLi4vaW50ZXJuYWxzL3BhdGggKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXRoLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguQXJyYXkuZnJvbTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWZ1bmN0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBiaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2JpbmQtY29udGV4dCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2JpbmQtY29udGV4dC5qc1wiKTtcbnZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanNcIik7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzXCIpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanNcIik7XG52YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzXCIpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qc1wiKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1wiKTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgaWYgKG1hcHBpbmcpIG1hcGZuID0gYmluZChtYXBmbiwgYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gIC8vIGlmIHRoZSB0YXJnZXQgaXMgbm90IGl0ZXJhYmxlIG9yIGl0J3MgYW4gYXJyYXkgd2l0aCB0aGUgZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBhIHNpbXBsZSBjYXNlXG4gIGlmIChpdGVyYXRvck1ldGhvZCAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyYXRvck1ldGhvZCkpKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvck1ldGhvZC5jYWxsKE8pO1xuICAgIHJlc3VsdCA9IG5ldyBDKCk7XG4gICAgZm9yICg7IShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nXG4gICAgICAgID8gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpXG4gICAgICAgIDogc3RlcC52YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB0b0luZGV4ZWRPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qc1wiKTtcbnZhciB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1sZW5ndGggKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1sZW5ndGguanNcIik7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanNcIik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG4vLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYmluZC1jb250ZXh0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9iaW5kLWNvbnRleHQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanNcIik7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2FuLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qc1wiKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qc1wiKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIGl0ZXJhdG9yV2l0aFJldHVybiA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBkb25lOiAhIWNhbGxlZCsrIH07XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgSVRFUkFUSU9OX1NVUFBPUlQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4ZWMob2JqZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjbGFzc29mUmF3ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanNcIik7XG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanNcIik7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzXCIpO1xudmFyIG93bktleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb3duLWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qc1wiKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcIik7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZmFpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIEYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbnVsbDtcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzXCIpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qc1wiKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qc1wiKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzXCIpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pdGVyYXRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanNcIik7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHRvUHJpbWl0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qc1wiKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qc1wiKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2V4cG9ydCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qc1wiKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3RvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qc1wiKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZiAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mLmpzXCIpO1xudmFyIHNldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanNcIik7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qc1wiKTtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzXCIpO1xudmFyIHJlZGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3JlZGVmaW5lICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanNcIik7XG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanNcIik7XG52YXIgSVNfUFVSRSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1wdXJlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qc1wiKTtcbnZhciBJdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXRlcmF0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzXCIpO1xudmFyIEl0ZXJhdG9yc0NvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qc1wiKTtcblxudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3JzQ29yZS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gSXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG52YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYWJsZSwgTkFNRSwgSXRlcmF0b3JDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcbiAgICBpZiAoS0lORCA9PT0gREVGQVVMVCAmJiBkZWZhdWx0SXRlcmF0b3IpIHJldHVybiBkZWZhdWx0SXRlcmF0b3I7XG4gICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIEtJTkQgaW4gSXRlcmFibGVQcm90b3R5cGUpIHJldHVybiBJdGVyYWJsZVByb3RvdHlwZVtLSU5EXTtcbiAgICBzd2l0Y2ggKEtJTkQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIEVOVFJJRVM6IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcyk7IH07XG4gIH07XG5cbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSBmYWxzZTtcbiAgdmFyIEl0ZXJhYmxlUHJvdG90eXBlID0gSXRlcmFibGUucHJvdG90eXBlO1xuICB2YXIgbmF0aXZlSXRlcmF0b3IgPSBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl1cbiAgICB8fCBJdGVyYWJsZVByb3RvdHlwZVsnQEBpdGVyYXRvciddXG4gICAgfHwgREVGQVVMVCAmJiBJdGVyYWJsZVByb3RvdHlwZVtERUZBVUxUXTtcbiAgdmFyIGRlZmF1bHRJdGVyYXRvciA9ICFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIG5hdGl2ZUl0ZXJhdG9yIHx8IGdldEl0ZXJhdGlvbk1ldGhvZChERUZBVUxUKTtcbiAgdmFyIGFueU5hdGl2ZUl0ZXJhdG9yID0gTkFNRSA9PSAnQXJyYXknID8gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcyB8fCBuYXRpdmVJdGVyYXRvciA6IG5hdGl2ZUl0ZXJhdG9yO1xuICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cbiAgLy8gZml4IG5hdGl2ZVxuICBpZiAoYW55TmF0aXZlSXRlcmF0b3IpIHtcbiAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICBpZiAoIUlTX1BVUkUgJiYgZ2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlKSAhPT0gSXRlcmF0b3JQcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgc2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGhpZGUoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBpZiAoSVNfUFVSRSkgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgICB9XG4gIH1cblxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZBVUxUID09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuICAgIGRlZmF1bHRJdGVyYXRvciA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5hdGl2ZUl0ZXJhdG9yLmNhbGwodGhpcyk7IH07XG4gIH1cblxuICAvLyBkZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghSVNfUFVSRSB8fCBGT1JDRUQpICYmIEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG4gICAgaGlkZShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZmFpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qc1wiKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qc1wiKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgZXhpc3QgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBleGlzdCA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1wiKS5mO1xudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGlkZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGUuanNcIik7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvcmVkZWZpbmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qc1wiKTtcbnZhciBzZXRHbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanNcIik7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanNcIik7XG52YXIgaXNGb3JjZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtZm9yY2VkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzXCIpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGhpZGUoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBzaGFyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2hhcmVkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYXJlZCgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NsYXNzb2YgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzXCIpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pdGVyYXRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanNcIik7XG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanNcIik7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge3ZhciBPID0gJ29iamVjdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSBPICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gTyAmJiB3aW5kb3cpIHx8XG4gIGNoZWNrKHR5cGVvZiBzZWxmID09IE8gJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSBPICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanNcIik7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanNcIik7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanNcIik7XG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZmFpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qc1wiKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanNcIik7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2ZhaWxzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanNcIik7XG52YXIgY2xhc3NvZiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jbGFzc29mLXJhdyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzXCIpO1xuXG52YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIE5BVElWRV9XRUFLX01BUCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanNcIik7XG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanNcIik7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oaWRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qc1wiKTtcbnZhciBvYmplY3RIYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzXCIpO1xudmFyIHNoYXJlZEtleSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zaGFyZWQta2V5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qc1wiKTtcbnZhciBoaWRkZW5LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanNcIik7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaGlkZShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzXCIpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pdGVyYXRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanNcIik7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZmFpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qc1wiKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qc1wiKTtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzXCIpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oYXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanNcIik7XG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanNcIik7XG52YXIgSVNfUFVSRSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1wdXJlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qc1wiKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxuaWYgKEl0ZXJhdG9yUHJvdG90eXBlID09IHVuZGVmaW5lZCkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbmlmICghSVNfUFVSRSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9mYWlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgcmV0dXJuICFTdHJpbmcoU3ltYm9sKCkpO1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xudmFyIG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nLmpzXCIpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChuYXRpdmVGdW5jdGlvblRvU3RyaW5nLmNhbGwoV2Vha01hcCkpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2FuLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qc1wiKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qc1wiKTtcbnZhciBlbnVtQnVnS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qc1wiKTtcbnZhciBoaWRkZW5LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanNcIik7XG52YXIgaHRtbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9odG1sICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qc1wiKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qc1wiKTtcbnZhciBzaGFyZWRLZXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2hhcmVkLWtleSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanNcIik7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBzY3JpcHQgPSAnc2NyaXB0JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIganMgPSAnamF2YScgKyBzY3JpcHQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhqcyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyBzY3JpcHQgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvJyArIHNjcmlwdCArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanNcIik7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanNcIik7XG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYW4tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzXCIpO1xudmFyIG9iamVjdEtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2krK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9kZXNjcmlwdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzXCIpO1xudmFyIElFOF9ET01fREVGSU5FID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanNcIik7XG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYW4tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzXCIpO1xudmFyIHRvUHJpbWl0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qc1wiKTtcblxudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZURlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qc1wiKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzXCIpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXCIpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzXCIpO1xudmFyIHRvUHJpbWl0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qc1wiKTtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzXCIpO1xudmFyIElFOF9ET01fREVGSU5FID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanNcIik7XG5cbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzXCIpO1xudmFyIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzXCIpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzXCIpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qc1wiKTtcbnZhciBzaGFyZWRLZXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2hhcmVkLWtleSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanNcIik7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlci5qc1wiKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hhcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qc1wiKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qc1wiKTtcbnZhciBhcnJheUluY2x1ZGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanNcIik7XG52YXIgaGlkZGVuS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oaWRkZW4ta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzXCIpO1xuXG52YXIgYXJyYXlJbmRleE9mID0gYXJyYXlJbmNsdWRlcyhmYWxzZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcIik7XG52YXIgZW51bUJ1Z0tleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanNcIik7XG5cbi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHZhbGlkYXRlU2V0UHJvdG90eXBlT2ZBcmd1bWVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdmFsaWRhdGUtc2V0LXByb3RvdHlwZS1vZi1hcmd1bWVudHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1zZXQtcHJvdG90eXBlLW9mLWFyZ3VtZW50cy5qc1wiKTtcblxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgY29ycmVjdFNldHRlciA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgY29ycmVjdFNldHRlciA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICB2YWxpZGF0ZVNldFByb3RvdHlwZU9mQXJndW1lbnRzKE8sIHByb3RvKTtcbiAgICBpZiAoY29ycmVjdFNldHRlcikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzXCIpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qc1wiKTtcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9hbi1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanNcIik7XG5cbnZhciBSZWZsZWN0ID0gZ2xvYmFsLlJlZmxlY3Q7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhdGguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXRoLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xudmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zaGFyZWQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanNcIik7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oaWRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qc1wiKTtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzXCIpO1xudmFyIHNldEdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zZXQtZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qc1wiKTtcbnZhciBuYXRpdmVGdW5jdGlvblRvU3RyaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZy5qc1wiKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanNcIik7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcobmF0aXZlRnVuY3Rpb25Ub1N0cmluZykuc3BsaXQoJ3RvU3RyaW5nJyk7XG5cbnNoYXJlZCgnaW5zcGVjdFNvdXJjZScsIGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gbmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbn0pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIGhpZGUodmFsdWUsICduYW1lJywga2V5KTtcbiAgICBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSkuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgaGlkZShPLCBrZXksIHZhbHVlKTtcbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oaWRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGhpZGUoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzXCIpLmY7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hhcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qc1wiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qc1wiKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUQUcsIFNUQVRJQykge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IFNUQVRJQyA/IGl0IDogaXQucHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkge1xuICAgIGRlZmluZVByb3BlcnR5KGl0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBzaGFyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2hhcmVkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzXCIpO1xudmFyIHVpZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy91aWQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanNcIik7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcbnZhciBzZXRHbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanNcIik7XG52YXIgSVNfUFVSRSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1wdXJlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qc1wiKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMS4zJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLWF0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctYXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8taW50ZWdlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanNcIik7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanNcIik7XG5cbi8vIENPTlZFUlRfVE9fU1RSSU5HOiB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIENPTlZFUlRfVE9fU1RSSU5HOiBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHBvcywgQ09OVkVSVF9UT19TVFJJTkcpIHtcbiAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGF0KSk7XG4gIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlcihwb3MpO1xuICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgZmlyc3QgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgfHwgKHNlY29uZCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgID8gQ09OVkVSVF9UT19TVFJJTkcgPyBTLmNoYXJBdChwb3NpdGlvbikgOiBmaXJzdFxuICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLWludGVnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzXCIpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4obGVuZ3RoLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qc1wiKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1sZW5ndGguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1pbnRlZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qc1wiKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanNcIik7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzXCIpO1xuXG4vLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1zZXQtcHJvdG90eXBlLW9mLWFyZ3VtZW50cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1zZXQtcHJvdG90eXBlLW9mLWFyZ3VtZW50cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzXCIpO1xudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2FuLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgU3RyaW5nKHByb3RvKSArICcgYXMgYSBwcm90b3R5cGUnKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcbnZhciBzaGFyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc2hhcmVkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzXCIpO1xudmFyIHVpZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy91aWQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanNcIik7XG52YXIgTkFUSVZFX1NZTUJPTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qc1wiKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgc3RvcmUgPSBzaGFyZWQoJ3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIFN5bWJvbFtuYW1lXVxuICAgIHx8IChOQVRJVkVfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2V4cG9ydCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qc1wiKTtcbnZhciBmcm9tID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2FycmF5LWZyb20gKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzXCIpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24gKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanNcIik7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgZnJvbTogZnJvbVxufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNvZGVQb2ludEF0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3N0cmluZy1hdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1hdC5qc1wiKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanNcIik7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzXCIpO1xuXG52YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLUBAaXRlcmF0b3JcbmRlZmluZUl0ZXJhdG9yKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBTVFJJTkdfSVRFUkFUT1IsXG4gICAgc3RyaW5nOiBTdHJpbmcoaXRlcmF0ZWQpLFxuICAgIGluZGV4OiAwXG4gIH0pO1xuLy8gYCVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uIG5leHQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gY29kZVBvaW50QXQoc3RyaW5nLCBpbmRleCwgdHJ1ZSk7XG4gIHN0YXRlLmluZGV4ICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9kZWZhdWx0LWF0dHJzLmpzb25cIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2RlZmF1bHQtYXR0cnMuanNvbiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogeG1sbnMsIHdpZHRoLCBoZWlnaHQsIHZpZXdCb3gsIGZpbGwsIHN0cm9rZSwgc3Ryb2tlLXdpZHRoLCBzdHJva2UtbGluZWNhcCwgc3Ryb2tlLWxpbmVqb2luLCBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0ge1wieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjQsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcImZpbGxcIjpcIm5vbmVcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCIsXCJzdHJva2Utd2lkdGhcIjoyLFwic3Ryb2tlLWxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2UtbGluZWpvaW5cIjpcInJvdW5kXCJ9O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pY29uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaWNvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVkdXBlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2xhc3NuYW1lcy9kZWR1cGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2RlZHVwZS5qc1wiKTtcblxudmFyIF9kZWR1cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVkdXBlKTtcblxudmFyIF9kZWZhdWx0QXR0cnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2RlZmF1bHQtYXR0cnMuanNvbiAqLyBcIi4vc3JjL2RlZmF1bHQtYXR0cnMuanNvblwiKTtcblxudmFyIF9kZWZhdWx0QXR0cnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdEF0dHJzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEljb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEljb24obmFtZSwgY29udGVudHMpIHtcbiAgICB2YXIgdGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSWNvbik7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cztcbiAgICB0aGlzLnRhZ3MgPSB0YWdzO1xuICAgIHRoaXMuYXR0cnMgPSBfZXh0ZW5kcyh7fSwgX2RlZmF1bHRBdHRyczIuZGVmYXVsdCwgeyBjbGFzczogJ2ZlYXRoZXIgZmVhdGhlci0nICsgbmFtZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gU1ZHIHN0cmluZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEljb24sIFt7XG4gICAga2V5OiAndG9TdmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N2ZygpIHtcbiAgICAgIHZhciBhdHRycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIHZhciBjb21iaW5lZEF0dHJzID0gX2V4dGVuZHMoe30sIHRoaXMuYXR0cnMsIGF0dHJzLCB7IGNsYXNzOiAoMCwgX2RlZHVwZTIuZGVmYXVsdCkodGhpcy5hdHRycy5jbGFzcywgYXR0cnMuY2xhc3MpIH0pO1xuXG4gICAgICByZXR1cm4gJzxzdmcgJyArIGF0dHJzVG9TdHJpbmcoY29tYmluZWRBdHRycykgKyAnPicgKyB0aGlzLmNvbnRlbnRzICsgJzwvc3ZnPic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhbiBgSWNvbmAuXG4gICAgICpcbiAgICAgKiBBZGRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gSWYgb2xkIGNvZGUgZXhwZWN0cyBgZmVhdGhlci5pY29ucy48bmFtZT5gXG4gICAgICogdG8gYmUgYSBzdHJpbmcsIGB0b1N0cmluZygpYCB3aWxsIGdldCBpbXBsaWNpdGx5IGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50cztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSWNvbjtcbn0oKTtcblxuLyoqXG4gKiBDb252ZXJ0IGF0dHJpYnV0ZXMgb2JqZWN0IHRvIHN0cmluZyBvZiBIVE1MIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBhdHRyc1RvU3RyaW5nKGF0dHJzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRycykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5ICsgJz1cIicgKyBhdHRyc1trZXldICsgJ1wiJztcbiAgfSkuam9pbignICcpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBJY29uO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pY29ucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pY29ucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2ljb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ljb24gKi8gXCIuL3NyYy9pY29uLmpzXCIpO1xuXG52YXIgX2ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWNvbik7XG5cbnZhciBfaWNvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9kaXN0L2ljb25zLmpzb24gKi8gXCIuL2Rpc3QvaWNvbnMuanNvblwiKTtcblxudmFyIF9pY29uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pY29ucyk7XG5cbnZhciBfdGFncyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGFncy5qc29uICovIFwiLi9zcmMvdGFncy5qc29uXCIpO1xuXG52YXIgX3RhZ3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGFncyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE9iamVjdC5rZXlzKF9pY29uczIuZGVmYXVsdCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIG5ldyBfaWNvbjIuZGVmYXVsdChrZXksIF9pY29uczIuZGVmYXVsdFtrZXldLCBfdGFnczIuZGVmYXVsdFtrZXldKTtcbn0pLnJlZHVjZShmdW5jdGlvbiAob2JqZWN0LCBpY29uKSB7XG4gIG9iamVjdFtpY29uLm5hbWVdID0gaWNvbjtcbiAgcmV0dXJuIG9iamVjdDtcbn0sIHt9KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9pY29ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaWNvbnMgKi8gXCIuL3NyYy9pY29ucy5qc1wiKTtcblxudmFyIF9pY29uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pY29ucyk7XG5cbnZhciBfdG9TdmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3RvLXN2ZyAqLyBcIi4vc3JjL3RvLXN2Zy5qc1wiKTtcblxudmFyIF90b1N2ZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b1N2Zyk7XG5cbnZhciBfcmVwbGFjZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcmVwbGFjZSAqLyBcIi4vc3JjL3JlcGxhY2UuanNcIik7XG5cbnZhciBfcmVwbGFjZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXBsYWNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGljb25zOiBfaWNvbnMyLmRlZmF1bHQsIHRvU3ZnOiBfdG9TdmcyLmRlZmF1bHQsIHJlcGxhY2U6IF9yZXBsYWNlMi5kZWZhdWx0IH07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3JlcGxhY2UuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9yZXBsYWNlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgLyogZXNsaW50LWVudiBicm93c2VyICovXG5cblxudmFyIF9kZWR1cGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjbGFzc25hbWVzL2RlZHVwZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvZGVkdXBlLmpzXCIpO1xuXG52YXIgX2RlZHVwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWR1cGUpO1xuXG52YXIgX2ljb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9pY29ucyAqLyBcIi4vc3JjL2ljb25zLmpzXCIpO1xuXG52YXIgX2ljb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ljb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXBsYWNlIGFsbCBIVE1MIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIGBkYXRhLWZlYXRoZXJgIGF0dHJpYnV0ZSB3aXRoIFNWRyBtYXJrdXBcbiAqIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGVsZW1lbnQncyBgZGF0YS1mZWF0aGVyYCBhdHRyaWJ1dGUgdmFsdWUuXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZSgpIHtcbiAgdmFyIGF0dHJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignYGZlYXRoZXIucmVwbGFjZSgpYCBvbmx5IHdvcmtzIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudC4nKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50c1RvUmVwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZlYXRoZXJdJyk7XG5cbiAgQXJyYXkuZnJvbShlbGVtZW50c1RvUmVwbGFjZSkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiByZXBsYWNlRWxlbWVudChlbGVtZW50LCBhdHRycyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgYSBzaW5nbGUgSFRNTCBlbGVtZW50IHdpdGggU1ZHIG1hcmt1cFxuICogY29ycmVzcG9uZGluZyB0byB0aGUgZWxlbWVudCdzIGBkYXRhLWZlYXRoZXJgIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICovXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbGVtZW50KSB7XG4gIHZhciBhdHRycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgdmFyIGVsZW1lbnRBdHRycyA9IGdldEF0dHJzKGVsZW1lbnQpO1xuICB2YXIgbmFtZSA9IGVsZW1lbnRBdHRyc1snZGF0YS1mZWF0aGVyJ107XG4gIGRlbGV0ZSBlbGVtZW50QXR0cnNbJ2RhdGEtZmVhdGhlciddO1xuXG4gIHZhciBzdmdTdHJpbmcgPSBfaWNvbnMyLmRlZmF1bHRbbmFtZV0udG9TdmcoX2V4dGVuZHMoe30sIGF0dHJzLCBlbGVtZW50QXR0cnMsIHsgY2xhc3M6ICgwLCBfZGVkdXBlMi5kZWZhdWx0KShhdHRycy5jbGFzcywgZWxlbWVudEF0dHJzLmNsYXNzKSB9KSk7XG4gIHZhciBzdmdEb2N1bWVudCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3ZnU3RyaW5nLCAnaW1hZ2Uvc3ZnK3htbCcpO1xuICB2YXIgc3ZnRWxlbWVudCA9IHN2Z0RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuXG4gIGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc3ZnRWxlbWVudCwgZWxlbWVudCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBhdHRyaWJ1dGVzIG9mIGFuIEhUTUwgZWxlbWVudC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldEF0dHJzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5hdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGF0dHJzLCBhdHRyKSB7XG4gICAgYXR0cnNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlcGxhY2U7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3RhZ3MuanNvblwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGFncy5qc29uICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBhY3Rpdml0eSwgYWlycGxheSwgYWxlcnQtY2lyY2xlLCBhbGVydC1vY3RhZ29uLCBhbGVydC10cmlhbmdsZSwgYWxpZ24tY2VudGVyLCBhbGlnbi1qdXN0aWZ5LCBhbGlnbi1sZWZ0LCBhbGlnbi1yaWdodCwgYW5jaG9yLCBhcmNoaXZlLCBhdC1zaWduLCBhd2FyZCwgYXBlcnR1cmUsIGJhci1jaGFydCwgYmFyLWNoYXJ0LTIsIGJhdHRlcnksIGJhdHRlcnktY2hhcmdpbmcsIGJlbGwsIGJlbGwtb2ZmLCBibHVldG9vdGgsIGJvb2stb3BlbiwgYm9vaywgYm9va21hcmssIGJveCwgYnJpZWZjYXNlLCBjYWxlbmRhciwgY2FtZXJhLCBjYXN0LCBjaGV2cm9uLWRvd24sIGNoZXZyb24tdXAsIGNpcmNsZSwgY2xpcGJvYXJkLCBjbG9jaywgY2xvdWQtZHJpenpsZSwgY2xvdWQtbGlnaHRuaW5nLCBjbG91ZC1yYWluLCBjbG91ZC1zbm93LCBjbG91ZCwgY29kZXBlbiwgY29kZXNhbmRib3gsIGNvZGUsIGNvZmZlZSwgY29sdW1ucywgY29tbWFuZCwgY29tcGFzcywgY29weSwgY29ybmVyLWRvd24tbGVmdCwgY29ybmVyLWRvd24tcmlnaHQsIGNvcm5lci1sZWZ0LWRvd24sIGNvcm5lci1sZWZ0LXVwLCBjb3JuZXItcmlnaHQtZG93biwgY29ybmVyLXJpZ2h0LXVwLCBjb3JuZXItdXAtbGVmdCwgY29ybmVyLXVwLXJpZ2h0LCBjcHUsIGNyZWRpdC1jYXJkLCBjcm9wLCBjcm9zc2hhaXIsIGRhdGFiYXNlLCBkZWxldGUsIGRpc2MsIGRvbGxhci1zaWduLCBkcm9wbGV0LCBlZGl0LCBlZGl0LTIsIGVkaXQtMywgZXllLCBleWUtb2ZmLCBleHRlcm5hbC1saW5rLCBmYWNlYm9vaywgZmFzdC1mb3J3YXJkLCBmaWdtYSwgZmlsZS1taW51cywgZmlsZS1wbHVzLCBmaWxlLXRleHQsIGZpbG0sIGZpbHRlciwgZmxhZywgZm9sZGVyLW1pbnVzLCBmb2xkZXItcGx1cywgZm9sZGVyLCBmcmFtZXIsIGZyb3duLCBnaWZ0LCBnaXQtYnJhbmNoLCBnaXQtY29tbWl0LCBnaXQtbWVyZ2UsIGdpdC1wdWxsLXJlcXVlc3QsIGdpdGh1YiwgZ2l0bGFiLCBnbG9iZSwgaGFyZC1kcml2ZSwgaGFzaCwgaGVhZHBob25lcywgaGVhcnQsIGhlbHAtY2lyY2xlLCBoZXhhZ29uLCBob21lLCBpbWFnZSwgaW5ib3gsIGluc3RhZ3JhbSwga2V5LCBsYXllcnMsIGxheW91dCwgbGlmZS1idW95LCBsaW5rLCBsaW5rLTIsIGxpbmtlZGluLCBsaXN0LCBsb2NrLCBsb2ctaW4sIGxvZy1vdXQsIG1haWwsIG1hcC1waW4sIG1hcCwgbWF4aW1pemUsIG1heGltaXplLTIsIG1laCwgbWVudSwgbWVzc2FnZS1jaXJjbGUsIG1lc3NhZ2Utc3F1YXJlLCBtaWMtb2ZmLCBtaWMsIG1pbmltaXplLCBtaW5pbWl6ZS0yLCBtaW51cywgbW9uaXRvciwgbW9vbiwgbW9yZS1ob3Jpem9udGFsLCBtb3JlLXZlcnRpY2FsLCBtb3VzZS1wb2ludGVyLCBtb3ZlLCBtdXNpYywgbmF2aWdhdGlvbiwgbmF2aWdhdGlvbi0yLCBvY3RhZ29uLCBwYWNrYWdlLCBwYXBlcmNsaXAsIHBhdXNlLCBwYXVzZS1jaXJjbGUsIHBlbi10b29sLCBwZXJjZW50LCBwaG9uZS1jYWxsLCBwaG9uZS1mb3J3YXJkZWQsIHBob25lLWluY29taW5nLCBwaG9uZS1taXNzZWQsIHBob25lLW9mZiwgcGhvbmUtb3V0Z29pbmcsIHBob25lLCBwbGF5LCBwaWUtY2hhcnQsIHBsYXktY2lyY2xlLCBwbHVzLCBwbHVzLWNpcmNsZSwgcGx1cy1zcXVhcmUsIHBvY2tldCwgcG93ZXIsIHByaW50ZXIsIHJhZGlvLCByZWZyZXNoLWN3LCByZWZyZXNoLWNjdywgcmVwZWF0LCByZXdpbmQsIHJvdGF0ZS1jY3csIHJvdGF0ZS1jdywgcnNzLCBzYXZlLCBzY2lzc29ycywgc2VhcmNoLCBzZW5kLCBzZXR0aW5ncywgc2hhcmUtMiwgc2hpZWxkLCBzaGllbGQtb2ZmLCBzaG9wcGluZy1iYWcsIHNob3BwaW5nLWNhcnQsIHNodWZmbGUsIHNraXAtYmFjaywgc2tpcC1mb3J3YXJkLCBzbGFjaywgc2xhc2gsIHNsaWRlcnMsIHNtYXJ0cGhvbmUsIHNtaWxlLCBzcGVha2VyLCBzdGFyLCBzdG9wLWNpcmNsZSwgc3VuLCBzdW5yaXNlLCBzdW5zZXQsIHRhYmxldCwgdGFnLCB0YXJnZXQsIHRlcm1pbmFsLCB0aGVybW9tZXRlciwgdGh1bWJzLWRvd24sIHRodW1icy11cCwgdG9nZ2xlLWxlZnQsIHRvZ2dsZS1yaWdodCwgdG9vbCwgdHJhc2gsIHRyYXNoLTIsIHRyaWFuZ2xlLCB0cnVjaywgdHYsIHR3aXRjaCwgdHdpdHRlciwgdHlwZSwgdW1icmVsbGEsIHVubG9jaywgdXNlci1jaGVjaywgdXNlci1taW51cywgdXNlci1wbHVzLCB1c2VyLXgsIHVzZXIsIHVzZXJzLCB2aWRlby1vZmYsIHZpZGVvLCB2b2ljZW1haWwsIHZvbHVtZSwgdm9sdW1lLTEsIHZvbHVtZS0yLCB2b2x1bWUteCwgd2F0Y2gsIHdpZmktb2ZmLCB3aWZpLCB3aW5kLCB4LWNpcmNsZSwgeC1vY3RhZ29uLCB4LXNxdWFyZSwgeCwgeW91dHViZSwgemFwLW9mZiwgemFwLCB6b29tLWluLCB6b29tLW91dCwgZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcImFjdGl2aXR5XCI6W1wicHVsc2VcIixcImhlYWx0aFwiLFwiYWN0aW9uXCIsXCJtb3Rpb25cIl0sXCJhaXJwbGF5XCI6W1wic3RyZWFtXCIsXCJjYXN0XCIsXCJtaXJyb3JpbmdcIl0sXCJhbGVydC1jaXJjbGVcIjpbXCJ3YXJuaW5nXCIsXCJhbGVydFwiLFwiZGFuZ2VyXCJdLFwiYWxlcnQtb2N0YWdvblwiOltcIndhcm5pbmdcIixcImFsZXJ0XCIsXCJkYW5nZXJcIl0sXCJhbGVydC10cmlhbmdsZVwiOltcIndhcm5pbmdcIixcImFsZXJ0XCIsXCJkYW5nZXJcIl0sXCJhbGlnbi1jZW50ZXJcIjpbXCJ0ZXh0IGFsaWdubWVudFwiLFwiY2VudGVyXCJdLFwiYWxpZ24tanVzdGlmeVwiOltcInRleHQgYWxpZ25tZW50XCIsXCJqdXN0aWZpZWRcIl0sXCJhbGlnbi1sZWZ0XCI6W1widGV4dCBhbGlnbm1lbnRcIixcImxlZnRcIl0sXCJhbGlnbi1yaWdodFwiOltcInRleHQgYWxpZ25tZW50XCIsXCJyaWdodFwiXSxcImFuY2hvclwiOltdLFwiYXJjaGl2ZVwiOltcImluZGV4XCIsXCJib3hcIl0sXCJhdC1zaWduXCI6W1wibWVudGlvblwiLFwiYXRcIixcImVtYWlsXCIsXCJtZXNzYWdlXCJdLFwiYXdhcmRcIjpbXCJhY2hpZXZlbWVudFwiLFwiYmFkZ2VcIl0sXCJhcGVydHVyZVwiOltcImNhbWVyYVwiLFwicGhvdG9cIl0sXCJiYXItY2hhcnRcIjpbXCJzdGF0aXN0aWNzXCIsXCJkaWFncmFtXCIsXCJncmFwaFwiXSxcImJhci1jaGFydC0yXCI6W1wic3RhdGlzdGljc1wiLFwiZGlhZ3JhbVwiLFwiZ3JhcGhcIl0sXCJiYXR0ZXJ5XCI6W1wicG93ZXJcIixcImVsZWN0cmljaXR5XCJdLFwiYmF0dGVyeS1jaGFyZ2luZ1wiOltcInBvd2VyXCIsXCJlbGVjdHJpY2l0eVwiXSxcImJlbGxcIjpbXCJhbGFybVwiLFwibm90aWZpY2F0aW9uXCIsXCJzb3VuZFwiXSxcImJlbGwtb2ZmXCI6W1wiYWxhcm1cIixcIm5vdGlmaWNhdGlvblwiLFwic2lsZW50XCJdLFwiYmx1ZXRvb3RoXCI6W1wid2lyZWxlc3NcIl0sXCJib29rLW9wZW5cIjpbXCJyZWFkXCIsXCJsaWJyYXJ5XCJdLFwiYm9va1wiOltcInJlYWRcIixcImRpY3Rpb25hcnlcIixcImJvb2tsZXRcIixcIm1hZ2F6aW5lXCIsXCJsaWJyYXJ5XCJdLFwiYm9va21hcmtcIjpbXCJyZWFkXCIsXCJjbGlwXCIsXCJtYXJrZXJcIixcInRhZ1wiXSxcImJveFwiOltcImN1YmVcIl0sXCJicmllZmNhc2VcIjpbXCJ3b3JrXCIsXCJiYWdcIixcImJhZ2dhZ2VcIixcImZvbGRlclwiXSxcImNhbGVuZGFyXCI6W1wiZGF0ZVwiXSxcImNhbWVyYVwiOltcInBob3RvXCJdLFwiY2FzdFwiOltcImNocm9tZWNhc3RcIixcImFpcnBsYXlcIl0sXCJjaGV2cm9uLWRvd25cIjpbXCJleHBhbmRcIl0sXCJjaGV2cm9uLXVwXCI6W1wiY29sbGFwc2VcIl0sXCJjaXJjbGVcIjpbXCJvZmZcIixcInplcm9cIixcInJlY29yZFwiXSxcImNsaXBib2FyZFwiOltcImNvcHlcIl0sXCJjbG9ja1wiOltcInRpbWVcIixcIndhdGNoXCIsXCJhbGFybVwiXSxcImNsb3VkLWRyaXp6bGVcIjpbXCJ3ZWF0aGVyXCIsXCJzaG93ZXJcIl0sXCJjbG91ZC1saWdodG5pbmdcIjpbXCJ3ZWF0aGVyXCIsXCJib2x0XCJdLFwiY2xvdWQtcmFpblwiOltcIndlYXRoZXJcIl0sXCJjbG91ZC1zbm93XCI6W1wid2VhdGhlclwiLFwiYmxpenphcmRcIl0sXCJjbG91ZFwiOltcIndlYXRoZXJcIl0sXCJjb2RlcGVuXCI6W1wibG9nb1wiXSxcImNvZGVzYW5kYm94XCI6W1wibG9nb1wiXSxcImNvZGVcIjpbXCJzb3VyY2VcIixcInByb2dyYW1taW5nXCJdLFwiY29mZmVlXCI6W1wiZHJpbmtcIixcImN1cFwiLFwibXVnXCIsXCJ0ZWFcIixcImNhZmVcIixcImhvdFwiLFwiYmV2ZXJhZ2VcIl0sXCJjb2x1bW5zXCI6W1wibGF5b3V0XCJdLFwiY29tbWFuZFwiOltcImtleWJvYXJkXCIsXCJjbWRcIixcInRlcm1pbmFsXCIsXCJwcm9tcHRcIl0sXCJjb21wYXNzXCI6W1wibmF2aWdhdGlvblwiLFwic2FmYXJpXCIsXCJ0cmF2ZWxcIixcImRpcmVjdGlvblwiXSxcImNvcHlcIjpbXCJjbG9uZVwiLFwiZHVwbGljYXRlXCJdLFwiY29ybmVyLWRvd24tbGVmdFwiOltcImFycm93XCIsXCJyZXR1cm5cIl0sXCJjb3JuZXItZG93bi1yaWdodFwiOltcImFycm93XCJdLFwiY29ybmVyLWxlZnQtZG93blwiOltcImFycm93XCJdLFwiY29ybmVyLWxlZnQtdXBcIjpbXCJhcnJvd1wiXSxcImNvcm5lci1yaWdodC1kb3duXCI6W1wiYXJyb3dcIl0sXCJjb3JuZXItcmlnaHQtdXBcIjpbXCJhcnJvd1wiXSxcImNvcm5lci11cC1sZWZ0XCI6W1wiYXJyb3dcIl0sXCJjb3JuZXItdXAtcmlnaHRcIjpbXCJhcnJvd1wiXSxcImNwdVwiOltcInByb2Nlc3NvclwiLFwidGVjaG5vbG9neVwiXSxcImNyZWRpdC1jYXJkXCI6W1wicHVyY2hhc2VcIixcInBheW1lbnRcIixcImNjXCJdLFwiY3JvcFwiOltcInBob3RvXCIsXCJpbWFnZVwiXSxcImNyb3NzaGFpclwiOltcImFpbVwiLFwidGFyZ2V0XCJdLFwiZGF0YWJhc2VcIjpbXCJzdG9yYWdlXCIsXCJtZW1vcnlcIl0sXCJkZWxldGVcIjpbXCJyZW1vdmVcIl0sXCJkaXNjXCI6W1wiYWxidW1cIixcImNkXCIsXCJkdmRcIixcIm11c2ljXCJdLFwiZG9sbGFyLXNpZ25cIjpbXCJjdXJyZW5jeVwiLFwibW9uZXlcIixcInBheW1lbnRcIl0sXCJkcm9wbGV0XCI6W1wid2F0ZXJcIl0sXCJlZGl0XCI6W1wicGVuY2lsXCIsXCJjaGFuZ2VcIl0sXCJlZGl0LTJcIjpbXCJwZW5jaWxcIixcImNoYW5nZVwiXSxcImVkaXQtM1wiOltcInBlbmNpbFwiLFwiY2hhbmdlXCJdLFwiZXllXCI6W1widmlld1wiLFwid2F0Y2hcIl0sXCJleWUtb2ZmXCI6W1widmlld1wiLFwid2F0Y2hcIixcImhpZGVcIixcImhpZGRlblwiXSxcImV4dGVybmFsLWxpbmtcIjpbXCJvdXRib3VuZFwiXSxcImZhY2Vib29rXCI6W1wibG9nb1wiLFwic29jaWFsXCJdLFwiZmFzdC1mb3J3YXJkXCI6W1wibXVzaWNcIl0sXCJmaWdtYVwiOltcImxvZ29cIixcImRlc2lnblwiLFwidG9vbFwiXSxcImZpbGUtbWludXNcIjpbXCJkZWxldGVcIixcInJlbW92ZVwiLFwiZXJhc2VcIl0sXCJmaWxlLXBsdXNcIjpbXCJhZGRcIixcImNyZWF0ZVwiLFwibmV3XCJdLFwiZmlsZS10ZXh0XCI6W1wiZGF0YVwiLFwidHh0XCIsXCJwZGZcIl0sXCJmaWxtXCI6W1wibW92aWVcIixcInZpZGVvXCJdLFwiZmlsdGVyXCI6W1wiZnVubmVsXCIsXCJob3BwZXJcIl0sXCJmbGFnXCI6W1wicmVwb3J0XCJdLFwiZm9sZGVyLW1pbnVzXCI6W1wiZGlyZWN0b3J5XCJdLFwiZm9sZGVyLXBsdXNcIjpbXCJkaXJlY3RvcnlcIl0sXCJmb2xkZXJcIjpbXCJkaXJlY3RvcnlcIl0sXCJmcmFtZXJcIjpbXCJsb2dvXCIsXCJkZXNpZ25cIixcInRvb2xcIl0sXCJmcm93blwiOltcImVtb2ppXCIsXCJmYWNlXCIsXCJiYWRcIixcInNhZFwiLFwiZW1vdGlvblwiXSxcImdpZnRcIjpbXCJwcmVzZW50XCIsXCJib3hcIixcImJpcnRoZGF5XCIsXCJwYXJ0eVwiXSxcImdpdC1icmFuY2hcIjpbXCJjb2RlXCIsXCJ2ZXJzaW9uIGNvbnRyb2xcIl0sXCJnaXQtY29tbWl0XCI6W1wiY29kZVwiLFwidmVyc2lvbiBjb250cm9sXCJdLFwiZ2l0LW1lcmdlXCI6W1wiY29kZVwiLFwidmVyc2lvbiBjb250cm9sXCJdLFwiZ2l0LXB1bGwtcmVxdWVzdFwiOltcImNvZGVcIixcInZlcnNpb24gY29udHJvbFwiXSxcImdpdGh1YlwiOltcImxvZ29cIixcInZlcnNpb24gY29udHJvbFwiXSxcImdpdGxhYlwiOltcImxvZ29cIixcInZlcnNpb24gY29udHJvbFwiXSxcImdsb2JlXCI6W1wid29ybGRcIixcImJyb3dzZXJcIixcImxhbmd1YWdlXCIsXCJ0cmFuc2xhdGVcIl0sXCJoYXJkLWRyaXZlXCI6W1wiY29tcHV0ZXJcIixcInNlcnZlclwiLFwibWVtb3J5XCIsXCJkYXRhXCJdLFwiaGFzaFwiOltcImhhc2h0YWdcIixcIm51bWJlclwiLFwicG91bmRcIl0sXCJoZWFkcGhvbmVzXCI6W1wibXVzaWNcIixcImF1ZGlvXCIsXCJzb3VuZFwiXSxcImhlYXJ0XCI6W1wibGlrZVwiLFwibG92ZVwiLFwiZW1vdGlvblwiXSxcImhlbHAtY2lyY2xlXCI6W1wicXVlc3Rpb24gbWFya1wiXSxcImhleGFnb25cIjpbXCJzaGFwZVwiLFwibm9kZS5qc1wiLFwibG9nb1wiXSxcImhvbWVcIjpbXCJob3VzZVwiLFwibGl2aW5nXCJdLFwiaW1hZ2VcIjpbXCJwaWN0dXJlXCJdLFwiaW5ib3hcIjpbXCJlbWFpbFwiXSxcImluc3RhZ3JhbVwiOltcImxvZ29cIixcImNhbWVyYVwiXSxcImtleVwiOltcInBhc3N3b3JkXCIsXCJsb2dpblwiLFwiYXV0aGVudGljYXRpb25cIixcInNlY3VyZVwiXSxcImxheWVyc1wiOltcInN0YWNrXCJdLFwibGF5b3V0XCI6W1wid2luZG93XCIsXCJ3ZWJwYWdlXCJdLFwibGlmZS1idW95XCI6W1wiaGVscFwiLFwibGlmZSByaW5nXCIsXCJzdXBwb3J0XCJdLFwibGlua1wiOltcImNoYWluXCIsXCJ1cmxcIl0sXCJsaW5rLTJcIjpbXCJjaGFpblwiLFwidXJsXCJdLFwibGlua2VkaW5cIjpbXCJsb2dvXCIsXCJzb2NpYWwgbWVkaWFcIl0sXCJsaXN0XCI6W1wib3B0aW9uc1wiXSxcImxvY2tcIjpbXCJzZWN1cml0eVwiLFwicGFzc3dvcmRcIixcInNlY3VyZVwiXSxcImxvZy1pblwiOltcInNpZ24gaW5cIixcImFycm93XCIsXCJlbnRlclwiXSxcImxvZy1vdXRcIjpbXCJzaWduIG91dFwiLFwiYXJyb3dcIixcImV4aXRcIl0sXCJtYWlsXCI6W1wiZW1haWxcIixcIm1lc3NhZ2VcIl0sXCJtYXAtcGluXCI6W1wibG9jYXRpb25cIixcIm5hdmlnYXRpb25cIixcInRyYXZlbFwiLFwibWFya2VyXCJdLFwibWFwXCI6W1wibG9jYXRpb25cIixcIm5hdmlnYXRpb25cIixcInRyYXZlbFwiXSxcIm1heGltaXplXCI6W1wiZnVsbHNjcmVlblwiXSxcIm1heGltaXplLTJcIjpbXCJmdWxsc2NyZWVuXCIsXCJhcnJvd3NcIixcImV4cGFuZFwiXSxcIm1laFwiOltcImVtb2ppXCIsXCJmYWNlXCIsXCJuZXV0cmFsXCIsXCJlbW90aW9uXCJdLFwibWVudVwiOltcImJhcnNcIixcIm5hdmlnYXRpb25cIixcImhhbWJ1cmdlclwiXSxcIm1lc3NhZ2UtY2lyY2xlXCI6W1wiY29tbWVudFwiLFwiY2hhdFwiXSxcIm1lc3NhZ2Utc3F1YXJlXCI6W1wiY29tbWVudFwiLFwiY2hhdFwiXSxcIm1pYy1vZmZcIjpbXCJyZWNvcmRcIixcInNvdW5kXCIsXCJtdXRlXCJdLFwibWljXCI6W1wicmVjb3JkXCIsXCJzb3VuZFwiLFwibGlzdGVuXCJdLFwibWluaW1pemVcIjpbXCJleGl0IGZ1bGxzY3JlZW5cIixcImNsb3NlXCJdLFwibWluaW1pemUtMlwiOltcImV4aXQgZnVsbHNjcmVlblwiLFwiYXJyb3dzXCIsXCJjbG9zZVwiXSxcIm1pbnVzXCI6W1wic3VidHJhY3RcIl0sXCJtb25pdG9yXCI6W1widHZcIixcInNjcmVlblwiLFwiZGlzcGxheVwiXSxcIm1vb25cIjpbXCJkYXJrXCIsXCJuaWdodFwiXSxcIm1vcmUtaG9yaXpvbnRhbFwiOltcImVsbGlwc2lzXCJdLFwibW9yZS12ZXJ0aWNhbFwiOltcImVsbGlwc2lzXCJdLFwibW91c2UtcG9pbnRlclwiOltcImFycm93XCIsXCJjdXJzb3JcIl0sXCJtb3ZlXCI6W1wiYXJyb3dzXCJdLFwibXVzaWNcIjpbXCJub3RlXCJdLFwibmF2aWdhdGlvblwiOltcImxvY2F0aW9uXCIsXCJ0cmF2ZWxcIl0sXCJuYXZpZ2F0aW9uLTJcIjpbXCJsb2NhdGlvblwiLFwidHJhdmVsXCJdLFwib2N0YWdvblwiOltcInN0b3BcIl0sXCJwYWNrYWdlXCI6W1wiYm94XCIsXCJjb250YWluZXJcIl0sXCJwYXBlcmNsaXBcIjpbXCJhdHRhY2htZW50XCJdLFwicGF1c2VcIjpbXCJtdXNpY1wiLFwic3RvcFwiXSxcInBhdXNlLWNpcmNsZVwiOltcIm11c2ljXCIsXCJhdWRpb1wiLFwic3RvcFwiXSxcInBlbi10b29sXCI6W1widmVjdG9yXCIsXCJkcmF3aW5nXCJdLFwicGVyY2VudFwiOltcImRpc2NvdW50XCJdLFwicGhvbmUtY2FsbFwiOltcInJpbmdcIl0sXCJwaG9uZS1mb3J3YXJkZWRcIjpbXCJjYWxsXCJdLFwicGhvbmUtaW5jb21pbmdcIjpbXCJjYWxsXCJdLFwicGhvbmUtbWlzc2VkXCI6W1wiY2FsbFwiXSxcInBob25lLW9mZlwiOltcImNhbGxcIixcIm11dGVcIl0sXCJwaG9uZS1vdXRnb2luZ1wiOltcImNhbGxcIl0sXCJwaG9uZVwiOltcImNhbGxcIl0sXCJwbGF5XCI6W1wibXVzaWNcIixcInN0YXJ0XCJdLFwicGllLWNoYXJ0XCI6W1wic3RhdGlzdGljc1wiLFwiZGlhZ3JhbVwiXSxcInBsYXktY2lyY2xlXCI6W1wibXVzaWNcIixcInN0YXJ0XCJdLFwicGx1c1wiOltcImFkZFwiLFwibmV3XCJdLFwicGx1cy1jaXJjbGVcIjpbXCJhZGRcIixcIm5ld1wiXSxcInBsdXMtc3F1YXJlXCI6W1wiYWRkXCIsXCJuZXdcIl0sXCJwb2NrZXRcIjpbXCJsb2dvXCIsXCJzYXZlXCJdLFwicG93ZXJcIjpbXCJvblwiLFwib2ZmXCJdLFwicHJpbnRlclwiOltcImZheFwiLFwib2ZmaWNlXCIsXCJkZXZpY2VcIl0sXCJyYWRpb1wiOltcInNpZ25hbFwiXSxcInJlZnJlc2gtY3dcIjpbXCJzeW5jaHJvbmlzZVwiLFwiYXJyb3dzXCJdLFwicmVmcmVzaC1jY3dcIjpbXCJhcnJvd3NcIl0sXCJyZXBlYXRcIjpbXCJsb29wXCIsXCJhcnJvd3NcIl0sXCJyZXdpbmRcIjpbXCJtdXNpY1wiXSxcInJvdGF0ZS1jY3dcIjpbXCJhcnJvd1wiXSxcInJvdGF0ZS1jd1wiOltcImFycm93XCJdLFwicnNzXCI6W1wiZmVlZFwiLFwic3Vic2NyaWJlXCJdLFwic2F2ZVwiOltcImZsb3BweSBkaXNrXCJdLFwic2Npc3NvcnNcIjpbXCJjdXRcIl0sXCJzZWFyY2hcIjpbXCJmaW5kXCIsXCJtYWduaWZpZXJcIixcIm1hZ25pZnlpbmcgZ2xhc3NcIl0sXCJzZW5kXCI6W1wibWVzc2FnZVwiLFwibWFpbFwiLFwiZW1haWxcIixcInBhcGVyIGFpcnBsYW5lXCIsXCJwYXBlciBhZXJvcGxhbmVcIl0sXCJzZXR0aW5nc1wiOltcImNvZ1wiLFwiZWRpdFwiLFwiZ2VhclwiLFwicHJlZmVyZW5jZXNcIl0sXCJzaGFyZS0yXCI6W1wibmV0d29ya1wiLFwiY29ubmVjdGlvbnNcIl0sXCJzaGllbGRcIjpbXCJzZWN1cml0eVwiLFwic2VjdXJlXCJdLFwic2hpZWxkLW9mZlwiOltcInNlY3VyaXR5XCIsXCJpbnNlY3VyZVwiXSxcInNob3BwaW5nLWJhZ1wiOltcImVjb21tZXJjZVwiLFwiY2FydFwiLFwicHVyY2hhc2VcIixcInN0b3JlXCJdLFwic2hvcHBpbmctY2FydFwiOltcImVjb21tZXJjZVwiLFwiY2FydFwiLFwicHVyY2hhc2VcIixcInN0b3JlXCJdLFwic2h1ZmZsZVwiOltcIm11c2ljXCJdLFwic2tpcC1iYWNrXCI6W1wibXVzaWNcIl0sXCJza2lwLWZvcndhcmRcIjpbXCJtdXNpY1wiXSxcInNsYWNrXCI6W1wibG9nb1wiXSxcInNsYXNoXCI6W1wiYmFuXCIsXCJub1wiXSxcInNsaWRlcnNcIjpbXCJzZXR0aW5nc1wiLFwiY29udHJvbHNcIl0sXCJzbWFydHBob25lXCI6W1wiY2VsbHBob25lXCIsXCJkZXZpY2VcIl0sXCJzbWlsZVwiOltcImVtb2ppXCIsXCJmYWNlXCIsXCJoYXBweVwiLFwiZ29vZFwiLFwiZW1vdGlvblwiXSxcInNwZWFrZXJcIjpbXCJhdWRpb1wiLFwibXVzaWNcIl0sXCJzdGFyXCI6W1wiYm9va21hcmtcIixcImZhdm9yaXRlXCIsXCJsaWtlXCJdLFwic3RvcC1jaXJjbGVcIjpbXCJtZWRpYVwiLFwibXVzaWNcIl0sXCJzdW5cIjpbXCJicmlnaHRuZXNzXCIsXCJ3ZWF0aGVyXCIsXCJsaWdodFwiXSxcInN1bnJpc2VcIjpbXCJ3ZWF0aGVyXCIsXCJ0aW1lXCIsXCJtb3JuaW5nXCIsXCJkYXlcIl0sXCJzdW5zZXRcIjpbXCJ3ZWF0aGVyXCIsXCJ0aW1lXCIsXCJldmVuaW5nXCIsXCJuaWdodFwiXSxcInRhYmxldFwiOltcImRldmljZVwiXSxcInRhZ1wiOltcImxhYmVsXCJdLFwidGFyZ2V0XCI6W1wibG9nb1wiLFwiYnVsbHNleWVcIl0sXCJ0ZXJtaW5hbFwiOltcImNvZGVcIixcImNvbW1hbmQgbGluZVwiLFwicHJvbXB0XCJdLFwidGhlcm1vbWV0ZXJcIjpbXCJ0ZW1wZXJhdHVyZVwiLFwiY2Vsc2l1c1wiLFwiZmFocmVuaGVpdFwiLFwid2VhdGhlclwiXSxcInRodW1icy1kb3duXCI6W1wiZGlzbGlrZVwiLFwiYmFkXCIsXCJlbW90aW9uXCJdLFwidGh1bWJzLXVwXCI6W1wibGlrZVwiLFwiZ29vZFwiLFwiZW1vdGlvblwiXSxcInRvZ2dsZS1sZWZ0XCI6W1wib25cIixcIm9mZlwiLFwic3dpdGNoXCJdLFwidG9nZ2xlLXJpZ2h0XCI6W1wib25cIixcIm9mZlwiLFwic3dpdGNoXCJdLFwidG9vbFwiOltcInNldHRpbmdzXCIsXCJzcGFubmVyXCJdLFwidHJhc2hcIjpbXCJnYXJiYWdlXCIsXCJkZWxldGVcIixcInJlbW92ZVwiLFwiYmluXCJdLFwidHJhc2gtMlwiOltcImdhcmJhZ2VcIixcImRlbGV0ZVwiLFwicmVtb3ZlXCIsXCJiaW5cIl0sXCJ0cmlhbmdsZVwiOltcImRlbHRhXCJdLFwidHJ1Y2tcIjpbXCJkZWxpdmVyeVwiLFwidmFuXCIsXCJzaGlwcGluZ1wiLFwidHJhbnNwb3J0XCIsXCJsb3JyeVwiXSxcInR2XCI6W1widGVsZXZpc2lvblwiLFwic3RyZWFtXCJdLFwidHdpdGNoXCI6W1wibG9nb1wiXSxcInR3aXR0ZXJcIjpbXCJsb2dvXCIsXCJzb2NpYWxcIl0sXCJ0eXBlXCI6W1widGV4dFwiXSxcInVtYnJlbGxhXCI6W1wicmFpblwiLFwid2VhdGhlclwiXSxcInVubG9ja1wiOltcInNlY3VyaXR5XCJdLFwidXNlci1jaGVja1wiOltcImZvbGxvd2VkXCIsXCJzdWJzY3JpYmVkXCJdLFwidXNlci1taW51c1wiOltcImRlbGV0ZVwiLFwicmVtb3ZlXCIsXCJ1bmZvbGxvd1wiLFwidW5zdWJzY3JpYmVcIl0sXCJ1c2VyLXBsdXNcIjpbXCJuZXdcIixcImFkZFwiLFwiY3JlYXRlXCIsXCJmb2xsb3dcIixcInN1YnNjcmliZVwiXSxcInVzZXIteFwiOltcImRlbGV0ZVwiLFwicmVtb3ZlXCIsXCJ1bmZvbGxvd1wiLFwidW5zdWJzY3JpYmVcIixcInVuYXZhaWxhYmxlXCJdLFwidXNlclwiOltcInBlcnNvblwiLFwiYWNjb3VudFwiXSxcInVzZXJzXCI6W1wiZ3JvdXBcIl0sXCJ2aWRlby1vZmZcIjpbXCJjYW1lcmFcIixcIm1vdmllXCIsXCJmaWxtXCJdLFwidmlkZW9cIjpbXCJjYW1lcmFcIixcIm1vdmllXCIsXCJmaWxtXCJdLFwidm9pY2VtYWlsXCI6W1wicGhvbmVcIl0sXCJ2b2x1bWVcIjpbXCJtdXNpY1wiLFwic291bmRcIixcIm11dGVcIl0sXCJ2b2x1bWUtMVwiOltcIm11c2ljXCIsXCJzb3VuZFwiXSxcInZvbHVtZS0yXCI6W1wibXVzaWNcIixcInNvdW5kXCJdLFwidm9sdW1lLXhcIjpbXCJtdXNpY1wiLFwic291bmRcIixcIm11dGVcIl0sXCJ3YXRjaFwiOltcImNsb2NrXCIsXCJ0aW1lXCJdLFwid2lmaS1vZmZcIjpbXCJkaXNhYmxlZFwiXSxcIndpZmlcIjpbXCJjb25uZWN0aW9uXCIsXCJzaWduYWxcIixcIndpcmVsZXNzXCJdLFwid2luZFwiOltcIndlYXRoZXJcIixcImFpclwiXSxcIngtY2lyY2xlXCI6W1wiY2FuY2VsXCIsXCJjbG9zZVwiLFwiZGVsZXRlXCIsXCJyZW1vdmVcIixcInRpbWVzXCIsXCJjbGVhclwiXSxcIngtb2N0YWdvblwiOltcImRlbGV0ZVwiLFwic3RvcFwiLFwiYWxlcnRcIixcIndhcm5pbmdcIixcInRpbWVzXCIsXCJjbGVhclwiXSxcIngtc3F1YXJlXCI6W1wiY2FuY2VsXCIsXCJjbG9zZVwiLFwiZGVsZXRlXCIsXCJyZW1vdmVcIixcInRpbWVzXCIsXCJjbGVhclwiXSxcInhcIjpbXCJjYW5jZWxcIixcImNsb3NlXCIsXCJkZWxldGVcIixcInJlbW92ZVwiLFwidGltZXNcIixcImNsZWFyXCJdLFwieW91dHViZVwiOltcImxvZ29cIixcInZpZGVvXCIsXCJwbGF5XCJdLFwiemFwLW9mZlwiOltcImZsYXNoXCIsXCJjYW1lcmFcIixcImxpZ2h0bmluZ1wiXSxcInphcFwiOltcImZsYXNoXCIsXCJjYW1lcmFcIixcImxpZ2h0bmluZ1wiXSxcInpvb20taW5cIjpbXCJtYWduaWZ5aW5nIGdsYXNzXCJdLFwiem9vbS1vdXRcIjpbXCJtYWduaWZ5aW5nIGdsYXNzXCJdfTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdG8tc3ZnLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90by1zdmcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaWNvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ljb25zICovIFwiLi9zcmMvaWNvbnMuanNcIik7XG5cbnZhciBfaWNvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWNvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZSBhbiBTVkcgc3RyaW5nLlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvU3ZnKG5hbWUpIHtcbiAgdmFyIGF0dHJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICBjb25zb2xlLndhcm4oJ2ZlYXRoZXIudG9TdmcoKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGZlYXRoZXIuaWNvbnNbbmFtZV0udG9TdmcoKSBpbnN0ZWFkLicpO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJlcXVpcmVkIGBrZXlgIChpY29uIG5hbWUpIHBhcmFtZXRlciBpcyBtaXNzaW5nLicpO1xuICB9XG5cbiAgaWYgKCFfaWNvbnMyLmRlZmF1bHRbbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGljb24gbWF0Y2hpbmcgXFwnJyArIG5hbWUgKyAnXFwnLiBTZWUgdGhlIGNvbXBsZXRlIGxpc3Qgb2YgaWNvbnMgYXQgaHR0cHM6Ly9mZWF0aGVyaWNvbnMuY29tJyk7XG4gIH1cblxuICByZXR1cm4gX2ljb25zMi5kZWZhdWx0W25hbWVdLnRvU3ZnKGF0dHJzKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdG9Tdmc7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAwOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgY29yZS1qcy9lcy9hcnJheS9mcm9tIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL2VzL2FycmF5L2Zyb20gKi9cIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZXMvYXJyYXkvZnJvbS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgL2hvbWUvcnVubmVyL3dvcmsvZmVhdGhlci9mZWF0aGVyL3NyYy9pbmRleC5qcyAqL1wiLi9zcmMvaW5kZXguanNcIik7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZlYXRoZXIuanMubWFwIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiY29uc3QgZGF5c09mV2VlayA9IFsnc3VuZGF5JywgJ21vbmRheScsICd0dWVzZGF5JywgJ3dlZG5lc2RheScsICd0aHVyc2RheScsICdmcmlkYXknLCAnc2F0dXJkYXknXTtcblxuY29uc3QgcHJpb3JpdGllcyA9IFtcbiAgICAxLFxuICAgIDIsXG4gICAgMyxcbiAgICA0XG5dO1xuXG5jb25zdCBkZWZhdWx0Um91dGUgPSBcInRvZGF5XCI7XG5cbmV4cG9ydCB7ZGF5c09mV2VlaywgcHJpb3JpdGllcywgZGVmYXVsdFJvdXRlfSIsImltcG9ydCBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSBmcm9tIFwiLi4vdXRpbHMvY2hlY2tTdG9yYWdlXCI7XG5pbXBvcnQgeyBjaGVja2xpc3RUZW1wbGF0ZSwgcHJvamVjdHNUZW1wbGF0ZSwgdGFza3NUZW1wbGF0ZSB9IGZyb20gXCIuL2RhdGFTdHJ1Y3RcIjtcblxuY29uc3QgdGFza3MgPSBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSA/IHRhc2tzVGVtcGxhdGUoZ2V0UGFyc2VkSXRlbShcInRhc2tzXCIpKSA6IHRhc2tzVGVtcGxhdGUoKTtcbmNvbnN0IHByb2plY3RzID0gaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgPyBwcm9qZWN0c1RlbXBsYXRlKGdldFBhcnNlZEl0ZW0oXCJwcm9qZWN0c1wiKSkgOiBwcm9qZWN0c1RlbXBsYXRlKCk7XG5jb25zdCBjaGVja2xpc3QgPSBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSA/IGNoZWNrbGlzdFRlbXBsYXRlKGdldFBhcnNlZEl0ZW0oXCJjaGVja2xpc3RcIikpIDogY2hlY2tsaXN0VGVtcGxhdGUoKTtcblxuZnVuY3Rpb24gZ2V0UGFyc2VkSXRlbSAoa2V5KSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59XG5leHBvcnQge3Rhc2tzLCBwcm9qZWN0cywgY2hlY2tsaXN0fTsiLCJpbXBvcnQgeyBmb3JtYXRJU08sIGlzU2FtZURheSwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlIGZyb20gXCIuLi91dGlscy9jaGVja1N0b3JhZ2VcIjtcbmltcG9ydCB7IGNoZWNrbGlzdCwgcHJvamVjdHMsIHRhc2tzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgZGF5c09mV2VlayB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBzZXRUYXNrQXNDb21wbGV0ZWQgKHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5nZXQodGFza0lkKTtcblxuICAgIGlmICghdGFzaykgdGhyb3cgbmV3IEVycm9yIChcIkludmFsaWQgVGFzayBJZFwiKTtcblxuICAgIC8vIElmIG9uZSB0aW1lIHRhc2ssIGRlbGV0ZSBmcm9tIHRhc2sgbGlzdFxuICAgIGlmICh0YXNrLmRhdGUpIHtcbiAgICAgICAgdGFza3MucmVtb3ZlKHRhc2tJZCk7XG4gICAgICAgIHVwZGF0ZURhdGEoXCJ0YXNrc1wiLCB0YXNrcy5saXN0KTtcbiAgICAgICAgLy8gQWRkIHRvIGNoZWNrbGlzdFxuICAgICAgICBjaGVja2xpc3QuYWRkKHRhc2spO1xuICAgICAgICB1cGRhdGVEYXRhKFwiY2hlY2tsaXN0XCIsIGNoZWNrbGlzdC5saXN0KTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNsb25lZFRhc2sgPSBzdHJ1Y3R1cmVkQ2xvbmUodGFzayk7XG4gICAgLy8gQWRkIHRoZSBkYXRlIG9mIHRhc2sgYWRkZWQgdG8gY2hlY2tsaXN0IHRvIHJlbW92ZSBpdCBsYXRlclxuICAgIGNsb25lZFRhc2suZGF0ZSA9IGZvcm1hdElTTyhuZXcgRGF0ZSgpLCB7IHJlcHJlc2VudGF0aW9uOiAnZGF0ZScgfSk7XG4gICAgY2hlY2tsaXN0LmFkZChjbG9uZWRUYXNrKTtcbiAgICB1cGRhdGVEYXRhKFwiY2hlY2tsaXN0XCIsIGNoZWNrbGlzdC5saXN0KTtcbiAgICByZXR1cm4gY2xvbmVkVGFzaztcblxufVxuXG5mdW5jdGlvbiB1bmRvVGFza0NvbXBsZXRpb24gKHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2sgPSBjaGVja2xpc3QucmVtb3ZlKHRhc2tJZCk7XG5cbiAgICBpZiAoIXRhc2spIHRocm93IG5ldyBFcnJvciAoXCJJbnZhbGlkIFRhc2sgSWRcIik7XG5cbiAgICB1cGRhdGVEYXRhKFwiY2hlY2tsaXN0XCIsIGNoZWNrbGlzdC5saXN0KTtcbiAgICAvLyBJZiBvbmUgdGltZSB0YXNrLCBhZGQgaXQgdG8gdGFzayBsaXN0XG4gICAgaWYgKCEodGFzay5yZXBlYXQgJiYgdGFzay5yZXBlYXQubGVuZ3RoKSkge1xuICAgICAgICB0YXNrcy5hZGQodGFzayk7XG4gICAgICAgIHVwZGF0ZURhdGEoXCJ0YXNrc1wiLCB0YXNrcy5saXN0KTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIHJldHVybiB0YXNrcy5nZXQodGFza0lkKTtcbn1cblxuZnVuY3Rpb24gaXNEZWFkbGluZVRvZGF5KHRhc2spIHtcbiAgICBpZiAoIXRhc2sgfHwgdHlwZW9mIHRhc2sgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFRhc2tcIik7XG5cbiAgICBjb25zdCB0b2RheURheSA9IGRheXNPZldlZWtbKG5ldyBEYXRlKCkpLmdldERheSgpXVxuICAgIHJldHVybiBpc1RvZGF5KHRhc2suZGF0ZSkgfHwgKHRhc2sucmVwZWF0ICYmIHRhc2sucmVwZWF0LmluY2x1ZGVzKHRvZGF5RGF5KSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RUYXNrcyAocElkKSB7XG4gICAgcmV0dXJuIHRhc2tzLmdldFRhc2tzQnlQcm9qZWN0SWQocElkKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza1Byb2plY3QgKHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5nZXQodGFza0lkKTtcbiAgICBpZiAoIXRhc2spIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVGFzayBJRFwiKTtcblxuICAgIHJldHVybiBwcm9qZWN0cy5nZXQodGFzay5wcm9qZWN0SWQpO1xufVxuXG5mdW5jdGlvbiBnZXRDaGVja2xpc3RUYXNrUHJvamVjdCAodGFza0lkKSB7XG4gICAgY29uc3QgdGFzayA9IGNoZWNrbGlzdC5nZXQodGFza0lkKTtcbiAgICBpZiAoIXRhc2spIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVGFzayBJRFwiKTtcblxuICAgIHJldHVybiBwcm9qZWN0cy5nZXQodGFzay5wcm9qZWN0SWQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhIChrZXksIHZhbHVlKSB7XG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSkgcmV0dXJuO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVySW5jb21wbGV0ZVRhc2tzIChsaXN0LCBkYXRlID0gbmV3IERhdGUoKSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBBcmd1bWVudFwiKTtcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFzayAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQXJndW1lbnRcIik7XG4gICAgICAgIHJldHVybiB0YXNrLmRhdGUgfHwgIShjaGVja2xpc3QuZ2V0KHRhc2suaWQpICYmIGlzU2FtZURheShjaGVja2xpc3QuZ2V0KHRhc2suaWQpLmRhdGUsIGRhdGUpKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKHBJZCkge1xuICAgIGdldFByb2plY3RUYXNrcyhwSWQpLmZvckVhY2goKHRhc2spID0+IHRhc2tzLnJlbW92ZSh0YXNrLmlkKSk7XG4gICAgdXBkYXRlRGF0YShcInRhc2tzXCIsIHRhc2tzLmxpc3QpO1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5yZW1vdmUocElkKTtcbiAgICB1cGRhdGVEYXRhKFwicHJvamVjdHNcIiwgcHJvamVjdHMubGlzdCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCB7XG4gICAgc2V0VGFza0FzQ29tcGxldGVkLFxuICAgIHVuZG9UYXNrQ29tcGxldGlvbixcbiAgICBnZXRQcm9qZWN0VGFza3MsXG4gICAgZ2V0VGFza1Byb2plY3QsXG4gICAgZ2V0Q2hlY2tsaXN0VGFza1Byb2plY3QsXG4gICAgdXBkYXRlRGF0YSxcbiAgICBmaWx0ZXJJbmNvbXBsZXRlVGFza3MsXG4gICAgaXNEZWFkbGluZVRvZGF5LFxuICAgIGRlbGV0ZVByb2plY3Rcbn1cbiIsImltcG9ydCB7IGZvcm1hdElTTywgZ2V0RGF5LCBpc0JlZm9yZSwgaXNFcXVhbCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBkYXlzT2ZXZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0c1RlbXBsYXRlIChhcnIpIHtcbiAgICByZXR1cm4gbGlzdFRlbXBsYXRlKGFycik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrc1RlbXBsYXRlIChhcnIpIHtcbiAgICBjb25zdCB7bGlzdCwgYWRkLCByZW1vdmUsIGdldH0gPSBsaXN0VGVtcGxhdGUoYXJyKTtcblxuICAgIGNvbnN0IGVkaXQgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgICAgICBjb25zdCBpbmRleCA9IGxpc3QuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PT0gbmV3VGFzay5pZCk7XG4gICAgICAgIGxpc3RbaW5kZXhdID0gbmV3VGFzaztcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2s7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza3NCeVRpdGxlID0gKHRpdGxlKSA9PiBsaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZS5pbmNsdWRlcyh0aXRsZSkpO1xuXG4gICAgY29uc3QgZ2V0VGFza3NCeVRhc2tEYXRlID0gKGRhdGUpID0+IGxpc3QuZmlsdGVyKCh0YXNrKSA9PiBpc0VxdWFsKHRhc2suZGF0ZSwgZm9ybWF0SVNPKGRhdGUsIHtyZXByZXNlbnRhdGlvbjogXCJkYXRlXCJ9KSkpO1xuXG4gICAgY29uc3QgZ2V0VGFza0J5VGFza0RheSA9IChkYXRlKSA9PiBsaXN0LmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5yZXBlYXQpIHJldHVybiB0YXNrLnJlcGVhdC5pbmNsdWRlcyhkYXlzT2ZXZWVrW2dldERheShkYXRlKV0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRUYXNrc0J5RGF0ZSA9IChkYXRlKSA9PiBbXG4gICAgICAgIC4uLmdldFRhc2tzQnlUYXNrRGF0ZShkYXRlKSxcbiAgICAgICAgLi4uZ2V0VGFza0J5VGFza0RheShkYXRlKVxuICAgIF07XG5cbiAgICBjb25zdCBnZXRUYXNrc0J5UHJvamVjdElkID0gKGlkKSA9PiBsaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5wcm9qZWN0SWQgPT09IGlkKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3QsXG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICBnZXQsXG4gICAgICAgIGVkaXQsXG4gICAgICAgIGdldFRhc2tzQnlUYXNrRGF0ZSxcbiAgICAgICAgZ2V0VGFza0J5VGFza0RheSxcbiAgICAgICAgZ2V0VGFza3NCeURhdGUsXG4gICAgICAgIGdldFRhc2tzQnlUaXRsZSxcbiAgICAgICAgZ2V0VGFza3NCeVByb2plY3RJZFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrbGlzdFRlbXBsYXRlIChhcnIpIHtcbiAgICBjb25zdCBpbml0TGlzdCA9IGFyciB8fCBbXTtcbiAgICBjb25zdCBsaXN0ID0gaW5pdExpc3QuZmlsdGVyKHRhc2sgPT4gIShpc0JlZm9yZSh0YXNrLmRhdGUsIGZvcm1hdElTTyhuZXcgRGF0ZSgpLCB7IHJlcHJlc2VudGF0aW9uOiAnZGF0ZScgfSkpKSk7XG5cbiAgICBjb25zdCB7YWRkLCByZW1vdmUsIGdldH0gPSBsaXN0VGVtcGxhdGUobGlzdClcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0LFxuICAgICAgICBhZGQsXG4gICAgICAgIHJlbW92ZSxcbiAgICAgICAgZ2V0XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGlzdFRlbXBsYXRlIChhcnIpIHtcbiAgICBjb25zdCBsaXN0ID0gYXJyIHx8IFtdO1xuXG4gICAgY29uc3QgYWRkID0gKGl0ZW0pID0+IGxpc3QucHVzaChpdGVtKTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IChpZCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gbGlzdCkge1xuICAgICAgICAgICAgaWYgKGxpc3RbaV0uaWQgPT09IGlkKSByZXR1cm4gbGlzdC5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGdldCA9IChpZCkgPT4gbGlzdC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0LFxuICAgICAgICBhZGQsIFxuICAgICAgICByZW1vdmUsXG4gICAgICAgIGdldFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QgKHRpdGxlLCBjb2xvcj1cImRlZmF1bHRcIikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNvbG9yXG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2sgKHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkYXRlLFxuICAgIHJlcGVhdCxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0SWQsXG59KSB7XG4gICAgaWYgKCF0aXRsZSB8fCAhcHJpb3JpdHkgfHwgIXByb2plY3RJZCB8fCAhKGRhdGUgfHwgKEFycmF5LmlzQXJyYXkocmVwZWF0KSAmJiByZXBlYXQubGVuZ3RoKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudHNcIilcbiAgICB9O1xuXG4gICAgaWYgKCFpZCkgaWQgPSB1dWlkdjQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRlLFxuICAgICAgICByZXBlYXQsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBwcm9qZWN0SWRcbiAgICB9XG59OyIsImltcG9ydCB7IGNoZWNrbGlzdCBhcyBjaGVja2xpc3REYXRhIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IGljb24gZnJvbSBcIi4uL3VpL2xheW91dC9pY29uXCI7XG5pbXBvcnQgaHRtbEVsIGZyb20gXCIuLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCB7IGhhbmRsZUljb25zIH0gZnJvbSBcIi4vdXRpbHMvdGFza3MvaWNvblwiO1xuaW1wb3J0IHRhc2tFbGVtZW50IGZyb20gXCIuL3V0aWxzL3Rhc2tzL3Rhc2stZWxlbWVudFwiO1xuXG5jb25zdCB0YXNrQ29udCA9IGh0bWxFbCh7XG4gICAgdGFnOiBcInVsXCIsXG4gICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tY29udGFpbmVyXCJdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tsaXN0ICgpIHtcblxuICAgIGNvbnN0IGxpRWxzID0gY2hlY2tsaXN0RGF0YS5saXN0Lm1hcCh0YXNrID0+IHRhc2tFbGVtZW50KHRhc2ssIHRydWUpKVxuXG4gICAgdGFza0NvbnQucmVwbGFjZUNoaWxkcmVuKC4uLmxpRWxzKTtcblxuICAgIGNvbnN0IHBhZ2VDb250ID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInBhZ2UtY29udGFpbmVyXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgaHRtbEVsKHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJoZWFkaW5nXCJdLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIGljb24oXCJjaGVjay1jaXJjbGVcIiksXG4gICAgICAgICAgICAgICAgICAgIGh0bWxFbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiaDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2hlY2tsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRhc2tDb250XG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHBhZ2VDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHt0YXJnZXR9KSA9PiBoYW5kbGVJY29ucyh0YXJnZXQpKTtcblxuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGlkOiBcImNoZWNrbGlzdFwiLFxuICAgICAgICBjaGlsZHJlbjogW3BhZ2VDb250XVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9DaGVja2xpc3QgKGVsKSB7XG4gICAgdGFza0NvbnQuYXBwZW5kQ2hpbGQoZWwpO1xufSIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IHsgZmlsdGVySW5jb21wbGV0ZVRhc2tzLCBnZXRQcm9qZWN0VGFza3MsIGdldFRhc2tQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YU9wXCI7XG5pbXBvcnQgaWNvbiBmcm9tIFwiLi4vLi4vdWkvbGF5b3V0L2ljb25cIjtcbmltcG9ydCBodG1sRWwgZnJvbSBcIi4uLy4uL3V0aWxzL3JlbmRlclwiO1xuaW1wb3J0IGFkZFRhc2tCdXR0b24gZnJvbSBcIi4uL3V0aWxzL3Rhc2tzL2FkZC10YXNrXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrRm9ybSB9IGZyb20gXCIuLi91dGlscy90YXNrcy9mb3JtXCI7XG5pbXBvcnQgeyBoYW5kbGVJY29ucyB9IGZyb20gXCIuLi91dGlscy90YXNrcy9pY29uXCI7XG5pbXBvcnQgdGFza0VsZW1lbnQgZnJvbSBcIi4uL3V0aWxzL3Rhc2tzL3Rhc2stZWxlbWVudFwiO1xuaW1wb3J0IHVwZGF0ZURhdGVkVmlldyBmcm9tIFwiLi4vdXRpbHMvdXBkYXRlLWRhdGVkLXZpZXdcIjtcbmltcG9ydCB7IHJlbW92ZVByb2plY3QsIGdldFByb2plY3RJZCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IHRhc2tDb250ID0gaHRtbEVsKHtcbiAgICB0YWc6IFwidWxcIixcbiAgICBjbGFzc0xpc3Q6IFtcInRvZG8taXRlbS1jb250YWluZXJcIl0sXG59KTtcblxuY29uc3QgaGVhZGluZyA9IGh0bWxFbCh7XG4gICAgdGFnOiBcImgxXCIsXG59KTtcblxuY29uc3QgYWRkVGFza0J0biA9IGFkZFRhc2tCdXR0b24oKHRhc2spID0+IHtcbiAgICB1cGRhdGVEYXRlZFZpZXcoKTtcbiAgICBpZiAoZ2V0VGFza1Byb2plY3QodGFzay5pZCkgPT09IHByb2plY3RzLmdldChnZXRQcm9qZWN0SWQoKSkpIHNob3dOZXdQcm9qZWN0VGFzayh0YXNrKTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0RWwgKCkge1xuICAgIGNvbnN0IGVsID0gaHRtbEVsICh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW1cIiwgXCJpdGVtLWFkZGVyXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgaWNvbihcInRyYXNoLTJcIiksXG4gICAgICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEZWxldGUgUHJvamVjdFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbW92ZVByb2plY3QoZ2V0UHJvamVjdElkKCkpKTtcblxuICAgIHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdFRhc2sgKCkge1xuXG4gICAgY29uc3QgcGFnZUNvbnQgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wicGFnZS1jb250YWluZXJcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtcImhlYWRpbmdcIl0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgaWNvbihcImZvbGRlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYWRkVGFza0J0bixcbiAgICAgICAgICAgIHRhc2tDb250LFxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEVsKClcbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgcGFnZUNvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoe3RhcmdldH0pID0+IGhhbmRsZUljb25zKHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdC10YXNrXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBwYWdlQ29udFxuICAgICAgICBdXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9qZWN0IChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZ2V0KHByb2plY3RJZCk7XG4gICAgaWYgKCFwcm9qZWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFByb2plY3RcIik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBjb25zdCBwcm9qVGFza3MgPSBnZXRQcm9qZWN0VGFza3MocHJvamVjdElkKTtcblxuICAgIGNvbnN0IGxpRWxzID0gZmlsdGVySW5jb21wbGV0ZVRhc2tzKHByb2pUYXNrcykubWFwKHRhc2sgPT4gdGFza0VsZW1lbnQodGFzaykpO1xuICAgIFxuICAgIHRhc2tDb250LnJlcGxhY2VDaGlsZHJlbiguLi5saUVscyk7XG5cbiAgICB1cGRhdGVUYXNrRm9ybSh7cHJvamVjdElkfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TmV3UHJvamVjdFRhc2sgKHRhc2spIHtcbiAgICBjb25zdCB0YXNrRWwgPSB0YXNrRWxlbWVudCh0YXNrKTtcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZChcImFkZFwiKTtcbiAgICB0YXNrQ29udC5hcHBlbmRDaGlsZCh0YXNrRWwpO1xufSIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCwgdXBkYXRlRGF0YSB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFPcFwiO1xuaW1wb3J0IHNldFJvdXRlLCB7IGdldFJvdXRlIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvcm91dGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0SWQgKCkge1xuICAgIGlmIChnZXRSb3V0ZSgpLnN0YXJ0c1dpdGgoXCJwcm9qZWN0LVwiKSkgcmV0dXJuIGdldFJvdXRlKCkuc3Vic3RyaW5nKDgpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdCAocElEKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRlbGV0ZVByb2plY3QocElEKTtcbiAgICBpZiAoIXByb2plY3QpIHRocm93IG5ldyBFcnJvciAoXCJJbnZhbGlkIElkXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocElEKTtcbiAgICBpZiAocHJvamVjdEVsKSBwcm9qZWN0RWwucmVtb3ZlKCk7XG5cbiAgICBzZXRSb3V0ZShcInByb2plY3RzXCIpO1xufSIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IGljb24gZnJvbSBcIi4uLy4uL3VpL2xheW91dC9pY29uXCI7XG5pbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCBhZGRQcm9qZWN0QnV0dG9uIGZyb20gXCIuL3V0aWxzL2FkZFByb2plY3RcIjtcbmltcG9ydCB7IGhhbmRsZUljb25zIH0gZnJvbSBcIi4vdXRpbHMvaWNvblwiO1xuaW1wb3J0IHByb2plY3RFbGVtZW50IGZyb20gXCIuL3V0aWxzL3Byb2plY3QtZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdCAoKSB7XG5cbiAgICBjb25zdCBsaUVscyA9IHByb2plY3RzLmxpc3QubWFwKHByb2plY3QgPT4gcHJvamVjdEVsZW1lbnQocHJvamVjdCkpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnQgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwidWxcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tY29udGFpbmVyXCJdLFxuICAgICAgICBjaGlsZHJlbjogWy4uLmxpRWxzXVxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZUNvbnQgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wicGFnZS1jb250YWluZXJcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtcImhlYWRpbmdcIl0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgaWNvbihcImZvbGRlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEVsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJNeSBQcm9qZWN0c1wiXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uKHByb2plY3RDb250KSxcbiAgICAgICAgICAgIHByb2plY3RDb250XG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHBhZ2VDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHt0YXJnZXR9KSA9PiBoYW5kbGVJY29ucyh0YXJnZXQpKTtcblxuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGlkOiBcInByb2plY3RzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbcGFnZUNvbnRdXG4gICAgfSk7XG59XG5cbiIsImltcG9ydCBpdGVtQWRkZXJCdG4gZnJvbSBcIi4uLy4uLy4uL3VpL2xpc3QvaXRlbS1hZGRlci1idG5cIjtcbmltcG9ydCB7IHByb2plY3QgYXMgcHJvamVjdENyZWF0b3IgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhU3RydWN0XCI7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YU9wXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RhdGFcIjtcbmltcG9ydCBwcm9qZWN0RWxlbWVudCBmcm9tIFwiLi9wcm9qZWN0LWVsXCI7XG5pbXBvcnQgcHJvamVjdEZvcm1Db250ZW50cyBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrRm9ybVByb2plY3RMaXN0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Rhc2tzL2Zvcm1cIjtcbmltcG9ydCB7IGVkaXRNb2RhbEZvcm0gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGF5b3V0L21vZGFsLWZvcm1cIjtcbmltcG9ydCB7IGFkZFdpdGhBbmltYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGlzdC9hbmltYXRpb25cIjtcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgXG4gKiBAcmV0dXJucyBBIGRpdiB3aGljaCBjYW4gYmUgY2xpY2tlZCB0byBhZGQgbmV3IHByb2plY3RzIGluIGdpdmVuIGNvbnRhaW5lclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0QnV0dG9uIChjb250YWluZXIpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKGZvcm1FbCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRWwpO1xuICAgIFxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdENyZWF0b3IoZm9ybURhdGEuZ2V0KFwidGl0bGVcIikpO1xuICAgIFxuICAgICAgICBwcm9qZWN0cy5hZGQobmV3UHJvamVjdCk7XG4gICAgXG4gICAgICAgIHVwZGF0ZURhdGEoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cy5saXN0KTtcbiAgICAgICAgXG4gICAgICAgIHVwZGF0ZVRhc2tGb3JtUHJvamVjdExpc3QoKTtcbiAgICBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEVsID0gcHJvamVjdEVsZW1lbnQobmV3UHJvamVjdCk7XG4gICAgICAgIGFkZFdpdGhBbmltYXRpb24obmV3UHJvamVjdEVsLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0biA9IGl0ZW1BZGRlckJ0bihcInByb2plY3RcIik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwoKSA9PiB7XG4gICAgICAgIGVkaXRNb2RhbEZvcm0ocHJvamVjdEZvcm1Db250ZW50cygpLCBhZGRQcm9qZWN0KS5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gYnRuO1xufSIsImltcG9ydCBodG1sRWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3JlbmRlclwiO1xuaW1wb3J0IHRleHRJbnB1dEVsIGZyb20gXCIuLi8uLi8uLi91dGlscy9mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RGb3JtQ29udGVudHMgKHZhbHVlID0gXCJcIikge1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IHRleHRJbnB1dEVsKFwiUHJvamVjdCBOYW1lXCIsIFwidGl0bGVcIiwgdmFsdWUpO1xuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB0ZXh0SW5wdXRcbiAgICAgICAgXVxuICAgIH0pO1xufSIsImltcG9ydCBpY29uIGZyb20gXCIuLi8uLi8uLi91aS9sYXlvdXQvaWNvblwiO1xuaW1wb3J0IHsgZ2V0Q2xvc2VzdFRvZG9JdGVtIH0gZnJvbSBcIi4uLy4uLy4uL3VpL2xpc3QvbGlzdFwiO1xuaW1wb3J0IHsgYWRkVGFzaywgZWRpdFByb2plY3QsIHZpZXdQcm9qZWN0IH0gZnJvbSBcIi4vdG9vbHNcIjtcblxuY29uc3QgaWNvblNldCA9IFtcbiAgICB7XG4gICAgICAgIGljb246IFwicGx1c1wiLFxuICAgICAgICBjbGFzczogXCJhZGQtdGFza1wiLFxuICAgICAgICBmdW5jdGlvbjogYWRkVGFza1xuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiAgXCJlZGl0XCIsXG4gICAgICAgIGNsYXNzOiBcImVkaXQtcHJvamVjdFwiLFxuICAgICAgICBmdW5jdGlvbjogZWRpdFByb2plY3RcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWNvbjogXCJleWVcIixcbiAgICAgICAgY2xhc3M6IFwidmlldy1wcm9qZWN0XCIsXG4gICAgICAgIGZ1bmN0aW9uOiB2aWV3UHJvamVjdFxuICAgIH1cbl1cblxuLyoqXG4gKiBcbiAqIEByZXR1cm5zIGFycmF5IG9mIHByb2plY3QgSWNvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEljb25zICgpIHtcbiAgICBjb25zdCBpY29ucyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBlYWNoIG9mIGljb25TZXQpIFxuICAgICAgICBpY29ucy5wdXNoKGljb24gKGVhY2guaWNvbiwge2NsYXNzTGlzdDogW2VhY2guY2xhc3NdfSkpO1xuXG4gICAgcmV0dXJuIGljb25zO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUljb25zIChlbCkge1xuICAgIC8vIEdldCBwcm9qZWN0IElkXG4gICAgY29uc3QgcHJvamVjdEVsID0gZ2V0Q2xvc2VzdFRvZG9JdGVtKGVsKTtcbiAgICBpZiAoIXByb2plY3RFbCkgcmV0dXJuO1xuXG4gICAgLy8gRXhlY3V0ZSByZXF1aXJlZCBmdW5jdGlvblxuICAgIGZvciAoY29uc3QgaWNvbiBvZiBpY29uU2V0KSBcbiAgICAgICAgaWYgKGVsLmNsb3Nlc3QoYC4ke2ljb24uY2xhc3N9YCkpIHJldHVybiBpY29uLmZ1bmN0aW9uKHByb2plY3RFbCk7XG5cbn0iLCJpbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4uLy4uLy4uL3VpL2xpc3QvbGlzdFwiO1xuaW1wb3J0IHsgZ2V0SWNvbnMgfSBmcm9tIFwiLi9pY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RFbGVtZW50IChwcm9qZWN0KSB7XG4gICAgY29uc3QgZWwgPSB0b2RvSXRlbShwcm9qZWN0LnRpdGxlLCBcIlwiLCBnZXRJY29ucygpKTtcbiAgICBlbC5pZCA9IHByb2plY3QuaWQ7XG4gICAgcmV0dXJuIGVsO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YU9wXCI7XG5pbXBvcnQgeyBlZGl0TW9kYWxGb3JtIH0gZnJvbSBcIi4uLy4uLy4uL3VpL2xheW91dC9tb2RhbC1mb3JtXCI7XG5pbXBvcnQgeyByZXBsYWNlVG9kb0l0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGlzdC9saXN0XCI7XG5pbXBvcnQgcHJvamVjdEZvcm1Db250ZW50cyBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgcHJvamVjdEVsZW1lbnQgZnJvbSBcIi4vcHJvamVjdC1lbFwiO1xuaW1wb3J0IHsgc2V0UHJvamVjdFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvcm91dGVzXCI7XG5pbXBvcnQgdGFza0Zvcm1Db250ZW50cywgeyB1cGRhdGVUYXNrRm9ybSwgdXBkYXRlVGFza0Zvcm1Qcm9qZWN0TGlzdCB9IGZyb20gXCIuLi8uLi91dGlscy90YXNrcy9mb3JtXCI7XG5pbXBvcnQgeyBnZXRBZGRUYXNrRm4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvdGFza3MvYWRkLXRhc2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sgKHByb2plY3RFbCkge1xuICAgIHVwZGF0ZVRhc2tGb3JtKHtwcm9qZWN0SWQ6IHByb2plY3RFbC5pZH0pO1xuICAgIGVkaXRNb2RhbEZvcm0odGFza0Zvcm1Db250ZW50cygpLCBnZXRBZGRUYXNrRm4oKSkuc2hvd01vZGFsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3UHJvamVjdCAocHJvamVjdEVsKSB7XG4gICAgc2V0UHJvamVjdFJvdXRlKHByb2plY3RFbC5pZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvamVjdCAocHJvamVjdEVsKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmdldChwcm9qZWN0RWwuaWQpO1xuXG4gICAgaWYgKCFwcm9qZWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFByb2plY3RcIik7XG5cbiAgICBlZGl0TW9kYWxGb3JtKHByb2plY3RGb3JtQ29udGVudHMocHJvamVjdC50aXRsZSksIChmb3JtRWwpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuXG4gICAgICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcblxuICAgICAgICB1cGRhdGVEYXRhKFwicHJvamVjdHNcIiwgcHJvamVjdHMubGlzdCk7XG5cbiAgICAgICAgdXBkYXRlVGFza0Zvcm1Qcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgIHJlcGxhY2VUb2RvSXRlbShwcm9qZWN0RWxlbWVudChwcm9qZWN0KSwgcHJvamVjdEVsKTtcbiAgICB9KS5zaG93TW9kYWwoKTtcbn1cblxuIiwiaW1wb3J0IHsgcHJpb3JpdGllcyB9IGZyb20gXCIuLi9kYXRhL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyBmaWx0ZXJJbmNvbXBsZXRlVGFza3MgfSBmcm9tIFwiLi4vZGF0YS9kYXRhT3BcIjtcbmltcG9ydCBpY29uIGZyb20gXCIuLi91aS9sYXlvdXQvaWNvblwiO1xuaW1wb3J0IGh0bWxFbCBmcm9tIFwiLi4vdXRpbHMvcmVuZGVyXCI7XG5pbXBvcnQgeyBoYW5kbGVJY29ucyB9IGZyb20gXCIuL3V0aWxzL3Rhc2tzL2ljb25cIjtcbmltcG9ydCB0YXNrRWxlbWVudCBmcm9tIFwiLi91dGlscy90YXNrcy90YXNrLWVsZW1lbnRcIjtcblxuY29uc3QgcGFnZUNvbnQgPSBodG1sRWwoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcInBhZ2UtY29udGFpbmVyXCJdLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZGF5ICgpIHtcblxuICAgIHVwZGF0ZVRvZGF5VmlldygpO1xuXG4gICAgcGFnZUNvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoe3RhcmdldH0pID0+IGhhbmRsZUljb25zKHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgaWQ6IFwidG9kYXlcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHBhZ2VDb250XG4gICAgICAgIF1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvZGF5VmlldyAoKSB7XG4gICAgY29uc3QgdG9kYXlUYXNrcyA9IHRhc2tzLmdldFRhc2tzQnlEYXRlKG5ldyBEYXRlKCkpO1xuXG4gICAgY29uc3QgdGFza0xpc3QgPSB7fVxuXG4gICAgZm9yIChjb25zdCBpIGluIHByaW9yaXRpZXMpIHtcbiAgICAgICAgdGFza0xpc3RbXCJwXCIgKyBwcmlvcml0aWVzW2ldXSA9IFtdO1xuICAgIH1cblxuICAgIGZpbHRlckluY29tcGxldGVUYXNrcyh0b2RheVRhc2tzKS5mb3JFYWNoKHRhc2sgPT4gdGFza0xpc3RbXCJwXCIgKyB0YXNrLnByaW9yaXR5XS5wdXNoKHRhc2tFbGVtZW50KHRhc2spKSk7XG5cbiAgICBjb25zdCB0YXNrQ29udCA9IFtdXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGFza0xpc3QpKSB7XG4gICAgICAgIHRhc2tDb250LnB1c2goaHRtbEVsKHtcbiAgICAgICAgICAgIHRhZzogXCJ1bFwiLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tY29udGFpbmVyXCIsIGtleV0sXG4gICAgICAgICAgICBjaGlsZHJlbjogdmFsdWVcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcGFnZUNvbnQucmVwbGFjZUNoaWxkcmVuKGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJoZWFkaW5nXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgaWNvbihcImhhc2hcIiksXG4gICAgICAgICAgICBodG1sRWwoe1xuICAgICAgICAgICAgICAgIHRhZzogXCJoMVwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVG9kYXlcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgIH0pLFxuICAgIC4uLnRhc2tDb250KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvZGF5VGFzayAodGFzaykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhZ2VDb250LnF1ZXJ5U2VsZWN0b3IoXCIucFwiICsgdGFzay5wcmlvcml0eSk7XG4gICAgaWYgKCFjb250YWluZXIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVGFza1wiKTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRWxlbWVudCh0YXNrKTtcbiAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJhZGRcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xufSIsImltcG9ydCB7IHN0YXJ0T2ZUb21vcnJvdyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyBmaWx0ZXJJbmNvbXBsZXRlVGFza3MgfSBmcm9tIFwiLi4vZGF0YS9kYXRhT3BcIjtcbmltcG9ydCBpY29uIGZyb20gXCIuLi91aS9sYXlvdXQvaWNvblwiO1xuaW1wb3J0IGh0bWxFbCBmcm9tIFwiLi4vdXRpbHMvcmVuZGVyXCI7XG5pbXBvcnQgeyBoYW5kbGVJY29ucyB9IGZyb20gXCIuL3V0aWxzL3Rhc2tzL2ljb25cIjtcbmltcG9ydCB0YXNrRWxlbWVudCBmcm9tIFwiLi91dGlscy90YXNrcy90YXNrLWVsZW1lbnRcIjtcblxuY29uc3QgcGFnZUNvbnQgPSBodG1sRWwoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBjbGFzc0xpc3Q6IFtcInBhZ2UtY29udGFpbmVyXCJdLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwY29taW5nICgpIHtcblxuICAgIHVwZGF0ZVVwY29taW5nVmlldygpO1xuXG4gICAgcGFnZUNvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoe3RhcmdldH0pID0+IGhhbmRsZUljb25zKHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgaWQ6IFwidXBjb21pbmdcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHBhZ2VDb250XG4gICAgICAgIF1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVwY29taW5nVmlldyAoKSB7XG4gICAgY29uc3QgdG9tb3Jyb3dUYXNrcyA9IHRhc2tzLmdldFRhc2tzQnlEYXRlKHN0YXJ0T2ZUb21vcnJvdygpKTtcblxuICAgIGNvbnN0IGxpRWxzID0gZmlsdGVySW5jb21wbGV0ZVRhc2tzKHRvbW9ycm93VGFza3MsIHN0YXJ0T2ZUb21vcnJvdygpKS5tYXAodGFzayA9PiB0YXNrRWxlbWVudCh0YXNrKSk7XG4gICAgXG4gICAgY29uc3QgdGFza0NvbnQgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwidWxcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tY29udGFpbmVyXCJdLFxuICAgICAgICBjaGlsZHJlbjogbGlFbHNcbiAgICB9KTtcblxuICAgIHBhZ2VDb250LnJlcGxhY2VDaGlsZHJlbihodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wiaGVhZGluZ1wiXSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGljb24oXCJjYWxlbmRhclwiKSxcbiAgICAgICAgICAgIGh0bWxFbCh7XG4gICAgICAgICAgICAgICAgdGFnOiBcImgxXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJVcGNvbWluZ1wiXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSksXG4gICAgdGFza0NvbnQpO1xufSIsImltcG9ydCB7IGRheXNPZldlZWsgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25zdGFudHNcIjtcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IHsgdXBkYXRlRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RhdGFPcFwiO1xuaW1wb3J0IHsgdGFzayB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RhdGFTdHJ1Y3RcIjtcbmltcG9ydCB7IHNob3dWYWxpZGF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZm9ybVwiO1xuaW1wb3J0IGl0ZW1BZGRlckJ0biBmcm9tIFwiLi4vLi4vLi4vdWkvbGlzdC9pdGVtLWFkZGVyLWJ0blwiO1xuaW1wb3J0IHRhc2tGb3JtQ29udGVudHMsIHsgdXBkYXRlVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyBlZGl0TW9kYWxGb3JtIH0gZnJvbSBcIi4uLy4uLy4uL3VpL2xheW91dC9tb2RhbC1mb3JtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZGF0ZWREYXRhIChmb3JtRWwpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRWwpO1xuXG4gICAgY29uc3QgZGF0YSA9IHt9O1xuXG4gICAgZGF0YS5yZXBlYXQgPSBbXTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoa2V5ID09PSBcInJlcGVhdFwiKSBkYXRhLnJlcGVhdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgZWxzZSBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEucmVwZWF0Lmxlbmd0aCAmJiAhZGF0YS5kYXRlKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IFwiUGxlYXNlIEVudGVyIGVpdGhlciBEYXRlIG9yIHNlbGVjdCByZXBlYXRpbmcgZGF5c1wiO1xuICAgICAgICBjb25zdCBmaWVsZCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPWRhdGVdYCk7XG4gICAgICAgIHNob3dWYWxpZGF0aW9uRXJyb3IoZmllbGQsIGVycik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn0gXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZGRUYXNrRm4gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIChmb3JtRWwpICA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRWYWxpZGF0ZWREYXRhKGZvcm1FbCk7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2soZGF0YSk7XG5cbiAgICAgICAgdGFza3MuYWRkKG5ld1Rhc2spO1xuICAgIFxuICAgICAgICB1cGRhdGVEYXRhKFwidGFza3NcIiwgdGFza3MubGlzdCk7XG4gICAgXG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3VGFzayk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHJldHVybnMgY29udHJvbCB0byB0aGlzIGZ1bmN0aW9uIFxuICogQHJldHVybnMgQSBkaXYgd2hpY2ggY2FuIGJlIGNsaWNrZWQgdG8gYWRkIG5ldyBwcm9qZWN0cyBpbiBnaXZlbiBjb250YWluZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFza0J1dHRvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBidG4gPSBpdGVtQWRkZXJCdG4oXCJUYXNrXCIpO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB1cGRhdGVUYXNrRm9ybSh7fSk7XG4gICAgICAgIGVkaXRNb2RhbEZvcm0odGFza0Zvcm1Db250ZW50cygpLCBnZXRBZGRUYXNrRm4oY2FsbGJhY2spKS5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBidG47XG59XG4iLCJpbXBvcnQgeyBmb3JtYXRJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGRheXNPZldlZWssIHByaW9yaXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25zdGFudHNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IHRleHRJbnB1dEVsIGZyb20gXCIuLi8uLi8uLi91dGlscy9mb3JtXCI7XG5pbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi8uLi91dGlscy9yZW5kZXJcIjtcblxuY29uc3QgdGl0bGUgPSB0ZXh0SW5wdXRFbChcIlRhc2sgTmFtZVwiLCBcInRpdGxlXCIpO1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9IHRleHRJbnB1dEVsKFwiRGVzY3JpcHRpb25cIiwgXCJkZXNjcmlwdGlvblwiLCBmYWxzZSwgNjQpO1xuXG5jb25zdCB0b2RheSA9IGZvcm1hdElTTyhuZXcgRGF0ZSgpLCB7IHJlcHJlc2VudGF0aW9uOiAnZGF0ZScgfSk7XG5cbmNvbnN0IGRhdGUgPSBodG1sRWwoe1xuICAgIHRhZzogXCJpbnB1dFwiLFxuICAgIHByb3BzIDoge1xuICAgICAgICBuYW1lOiBcImRhdGVcIixcbiAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgIGlkOiBcInRhc2stZGF0ZVwiLFxuICAgICAgICB2YWx1ZTogdG9kYXksXG4gICAgICAgIG1pbjogdG9kYXlcbiAgICB9LFxufSk7XG5cbmNvbnN0IGRhdGVDb250ID0gaHRtbEVsKHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgaHRtbEVsKHtcbiAgICAgICAgICAgIHRhZzogXCJsYWJlbFwiLFxuICAgICAgICAgICAgdGV4dDogXCJEYXRlOlwiLFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBmb3I6IFwidGFzay1kYXRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGRhdGVcbiAgICBdXG59KTtcblxuY29uc3QgZGF5cyA9IGRheXNPZldlZWsubWFwKChkYXkpID0+IGh0bWxFbCh7XG4gICAgdGFnOiBcImlucHV0XCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBuYW1lOiBcInJlcGVhdFwiLFxuICAgICAgICB2YWx1ZTogZGF5LFxuICAgICAgICBkYXk6IGRheS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSxcbiAgICB9XG59KSk7XG5cbmNvbnN0IHJlcGVhdCA9IGh0bWxFbCh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIGh0bWxFbCh7XG4gICAgICAgICAgICB0YWc6IFwibGFiZWxcIixcbiAgICAgICAgICAgIHRleHQ6IFwiUmVwZWF0OlwiLFxuICAgICAgICB9KSxcbiAgICAgICAgLi4uZGF5c1xuICAgIF0sXG4gICAgY2xhc3NMaXN0OiBbXCJkYXlzLWNvbnRcIl1cbn0pO1xuXG5jb25zdCBwcmlvcml0eSA9ICBodG1sRWwoe1xuICAgIHRhZzogXCJzZWxlY3RcIixcbiAgICBwcm9wczoge1xuICAgICAgICBuYW1lOiBcInByaW9yaXR5XCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjaGlsZHJlbjogcHJpb3JpdGllcy5tYXAoKHByaW9yKSA9PiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwib3B0aW9uXCIsXG4gICAgICAgIHRleHQ6IFwiUHJpb3JpdHkgXCIrIHByaW9yLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmFsdWU6IHByaW9yXG4gICAgICAgIH1cbiAgICB9KSlcbn0pO1xucHJpb3JpdHkuc2VsZWN0ZWRJbmRleCA9IHByaW9yaXRpZXMubGVuZ3RoIC0gMTtcblxuY29uc3QgcHJvamVjdCA9ICBodG1sRWwoe1xuICAgIHRhZzogXCJzZWxlY3RcIixcbiAgICBwcm9wczoge1xuICAgICAgICBuYW1lOiBcInByb2plY3RJZFwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbn0pO1xuXG5jb25zdCBmb3JtQ29udGVudCA9IGh0bWxFbCh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgcmVwZWF0LFxuICAgICAgICBodG1sRWwgKHtcbiAgICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgZGF0ZUNvbnQsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICAgICAgcHJvamVjdFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNsYXNzTGlzdDogW1wiZGF0ZS1wcmlvcml0eS1wcm9qZWN0LWNvbnRcIl1cbiAgICAgICAgfSlcbiAgICBdXG59KTtcblxuaGFuZGxlU2NoZWR1bGUoZGF0ZSwgcmVwZWF0KTtcbnVwZGF0ZVRhc2tGb3JtUHJvamVjdExpc3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0Zvcm1Db250ZW50cyAoKSB7XG4gICAgcmV0dXJuIGZvcm1Db250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza0Zvcm0gKHRhc2sgPSB7fSkge1xuXG4gICAgdGl0bGUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9IHRhc2sudGl0bGUgfHwgXCJcIjtcblxuICAgIGRlc2NyaXB0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uIHx8IFwiXCI7XG5cbiAgICBpZiAodGFzay5yZXBlYXQgJiYgdGFzay5yZXBlYXQubGVuZ3RoKSB7XG4gICAgICAgIGRheXMuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2sucmVwZWF0LmluY2x1ZGVzKGRheS52YWx1ZSkpIGRheS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGUudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0YXNrLmRhdGUpIHtcbiAgICAgICAgZGF0ZS52YWx1ZSA9IHRhc2suZGF0ZTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICAgIGVsc2UgZGF0ZS52YWx1ZSA9IHRvZGF5O1xuXG4gICAgLy8gU2V0IHRhc2sncyBwcmlvcml0eVxuICAgIHByaW9yaXR5LnNlbGVjdGVkSW5kZXggPSAgdGFzay5wcmlvcml0eSA/IHByaW9yaXRpZXMuaW5kZXhPZigrdGFzay5wcmlvcml0eSkgOiBwcmlvcml0aWVzLmxlbmd0aCAtIDE7XG5cbiAgICBwcm9qZWN0LnZhbHVlID0gdGFzay5wcm9qZWN0SWQgfHwgXCJcIjtcbn1cblxuLyoqXG4gKiBBbGxvdyBvbmx5IHJlcGVhdCBvciBkYXRlXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGRhdGVJbnB1dCBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRheXNJbnB1dCBcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU2NoZWR1bGUgKGRhdGVJbnB1dCwgZGF5c0lucHV0KSB7XG4gICAgaWYgKGRhdGVJbnB1dC52YWx1ZSkgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIC8vIFVuc2VsZWN0IERheXNcbiAgICAgICAgZGF5c0lucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmZvckVhY2goZGF5ID0+IGRheS5jaGVja2VkID0gZmFsc2UpO1xuXG4gICAgICAgIC8vIFByb3ZpZGUgc2VsZWN0ZWQgY2xhc3MgdG8gZGF0ZSBpbnB1dCBmb3IgY3NzIHB1cnBvc2VzXG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHNlbGVjdGVkIGNsYXNzIGlmIG5vIHZhbHVlXG4gICAgICAgIGlmICghZGF0ZUlucHV0LnZhbHVlKSBkYXRlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH0pO1xuXG4gICAgZGF5c0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgZGF0ZVxuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza0Zvcm1Qcm9qZWN0TGlzdCAoKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0cy5saXN0Lm1hcCgocHJvamVjdCkgPT4gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcIm9wdGlvblwiLFxuICAgICAgICB0ZXh0OiBwcm9qZWN0LnRpdGxlLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmFsdWU6IHByb2plY3QuaWRcbiAgICAgICAgfVxuICAgIH0pKTtcblxuICAgIHByb2plY3QucmVwbGFjZUNoaWxkcmVuKGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJvcHRpb25cIixcbiAgICAgICAgdGV4dDogXCJQcm9qZWN0XCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIC4uLnByb2plY3RMaXN0KTtcbn0iLCJpbXBvcnQgaWNvbiBmcm9tIFwiLi4vLi4vLi4vdWkvbGF5b3V0L2ljb25cIjtcbmltcG9ydCB7IGdldENsb3Nlc3RUb2RvSXRlbSB9IGZyb20gXCIuLi8uLi8uLi91aS9saXN0L2xpc3RcIjtcbmltcG9ydCB7IGRlbGV0ZUNoZWNrbGlzdFRhc2ssIGRlbGV0ZVRhc2ssIGVkaXRUYXNrLCB0b2dnbGVUYXNrQ29tcGxldGlvbiB9IGZyb20gXCIuL3Rvb2xzXCI7XG5cblxuY29uc3QgaWNvblNldCA9IFtcbiAgICB7XG4gICAgICAgIGljb246ICBcImVkaXRcIixcbiAgICAgICAgY2xhc3M6IFwiZWRpdC10YXNrXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBlZGl0VGFza1xuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiBcInRyYXNoLTJcIixcbiAgICAgICAgY2xhc3M6IFwiZGVsZXRlLXRhc2tcIixcbiAgICAgICAgZnVuY3Rpb246IGRlbGV0ZVRhc2tcbiAgICB9XG5dXG5cbmNvbnN0IGNoZWNrbGlzdEljb25TZXQgPSBbXG4gICAge1xuICAgICAgICBpY29uOiBcInRyYXNoLTJcIixcbiAgICAgICAgY2xhc3M6IFwiZGVsZXRlLWNoZWNrbGlzdC10YXNrXCIsXG4gICAgICAgIGZ1bmN0aW9uOiBkZWxldGVDaGVja2xpc3RUYXNrXG4gICAgfVxuXVxuXG4vKipcbiAqIFxuICogQHJldHVybnMgYXJyYXkgb2YgcHJvamVjdCBJY29uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWNvbnMgKGNoZWNrbGlzdCA9IGZhbHNlKSB7XG4gICAgY29uc3QgaWNvbnMgPSBbXTtcblxuICAgIGlmIChjaGVja2xpc3QpIHtcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGNoZWNrbGlzdEljb25TZXQpIFxuICAgICAgICAgICAgaWNvbnMucHVzaChpY29uIChlYWNoLmljb24sIHtjbGFzc0xpc3Q6IFtlYWNoLmNsYXNzXX0pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBpY29uU2V0KSBcbiAgICAgICAgICAgIGljb25zLnB1c2goaWNvbiAoZWFjaC5pY29uLCB7Y2xhc3NMaXN0OiBbZWFjaC5jbGFzc119KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGljb25zO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUljb25zIChlbCkge1xuICAgIC8vIEdldCBwcm9qZWN0IEVsXG4gICAgY29uc3QgdGFza0VsID0gZ2V0Q2xvc2VzdFRvZG9JdGVtKGVsKVxuICAgIGlmICghdGFza0VsKSByZXR1cm47XG5cbiAgICAvLyBFeGVjdXRlIHJlcXVpcmVkIGZ1bmN0aW9uXG4gICAgZm9yIChjb25zdCBpY29uIG9mIGljb25TZXQpIFxuICAgICAgICBpZiAoZWwuY2xvc2VzdChgLiR7aWNvbi5jbGFzc31gKSkgcmV0dXJuIGljb24uZnVuY3Rpb24odGFza0VsKTtcblxuICAgIGZvciAoY29uc3QgaWNvbiBvZiBjaGVja2xpc3RJY29uU2V0KSBcbiAgICAgICAgaWYgKGVsLmNsb3Nlc3QoYC4ke2ljb24uY2xhc3N9YCkpIHJldHVybiBpY29uLmZ1bmN0aW9uKHRhc2tFbCk7XG5cbiAgICAvLyBJZiBjaGVja2JveCBcbiAgICBjb25zdCBjaGVja2JveCA9IGVsLmNsb3Nlc3QoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgaWYgKGVsLmNsb3Nlc3QoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpKSB0b2dnbGVUYXNrQ29tcGxldGlvbihjaGVja2JveCwgdGFza0VsKTtcbn0iLCJpbXBvcnQgeyBnZXRDaGVja2xpc3RUYXNrUHJvamVjdCwgZ2V0VGFza1Byb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhT3BcIjtcbmltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi4vLi4vLi4vdWkvbGlzdC9saXN0XCI7XG5pbXBvcnQgeyBnZXRJY29ucyB9IGZyb20gXCIuL2ljb25cIjtcbmltcG9ydCB7IHRhc2tQcm9qZWN0Vmlld2VyIH0gZnJvbSBcIi4vdG9vbHNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRWxlbWVudCAodGFzaywgY2hlY2tsaXN0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRhc2sgfHwgIXRhc2suaWQpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVGFza1wiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gY2hlY2tsaXN0ID8gZ2V0Q2hlY2tsaXN0VGFza1Byb2plY3QodGFzay5pZCk6IGdldFRhc2tQcm9qZWN0KHRhc2suaWQpO1xuXG4gICAgaWYgKCFwcm9qZWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFRhc2tcIik7XG5cbiAgICBjb25zdCBlbCA9IHRvZG9JdGVtKHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIGdldEljb25zKGNoZWNrbGlzdCksIHt0ZXh0OiBwcm9qZWN0LnRpdGxlLCByZWZGbjogdGFza1Byb2plY3RWaWV3ZXIocHJvamVjdCl9LCB0cnVlLCBjaGVja2xpc3QpO1xuICAgIGVsLmlkID0gdGFzay5pZDtcbiAgICByZXR1cm4gZWw7XG59IiwiaW1wb3J0IHsgY2hlY2tsaXN0LCB0YXNrcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RhdGFcIjtcbmltcG9ydCB7IHNldFRhc2tBc0NvbXBsZXRlZCwgdW5kb1Rhc2tDb21wbGV0aW9uLCB1cGRhdGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YU9wXCI7XG5pbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YVN0cnVjdFwiO1xuaW1wb3J0IHsgc2V0UHJvamVjdFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvcm91dGVzXCI7XG5pbXBvcnQgeyBlZGl0TW9kYWxGb3JtIH0gZnJvbSBcIi4uLy4uLy4uL3VpL2xheW91dC9tb2RhbC1mb3JtXCI7XG5pbXBvcnQgeyByZXBsYWNlVG9kb0l0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vdWkvbGlzdC9saXN0XCI7XG5pbXBvcnQgeyByZW1vdmVXaXRoQW5pbWF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3VpL2xpc3QvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBhcHBlbmRUb0NoZWNrbGlzdCB9IGZyb20gXCIuLi8uLi9jaGVja2xpc3RcIjtcbmltcG9ydCB1cGRhdGVEYXRlZFZpZXcgZnJvbSBcIi4uL3VwZGF0ZS1kYXRlZC12aWV3XCI7XG5pbXBvcnQgeyBnZXRWYWxpZGF0ZWREYXRhIH0gZnJvbSBcIi4vYWRkLXRhc2tcIjtcbmltcG9ydCB0YXNrRm9ybUNvbnRlbnRzLCB7IHVwZGF0ZVRhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybVwiO1xuaW1wb3J0IHRhc2tFbGVtZW50IGZyb20gXCIuL3Rhc2stZWxlbWVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza1Byb2plY3RWaWV3ZXIgKHByb2plY3RFbCkge1xuICAgIGNvbnN0IHBJZCA9IHByb2plY3RFbC5pZDtcblxuICAgIHJldHVybiAoKSA9PiBzZXRQcm9qZWN0Um91dGUocElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrICh0YXNrRWwpIHtcbiAgICBjb25zdCBlZGl0ID0gKGZvcm1FbCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gZ2V0VmFsaWRhdGVkRGF0YShmb3JtRWwpO1xuICAgICAgICBkYXRhLmlkID0gdGFza0VsLmlkO1xuXG4gICAgICAgIGNvbnN0IGVkaXRlZFRhc2sgPSB0YXNrcy5lZGl0KHRhc2soZGF0YSkpO1xuXG4gICAgICAgIHVwZGF0ZURhdGEoXCJ0YXNrc1wiLCB0YXNrcy5saXN0KTtcbiAgICAgICAgcmVwbGFjZVRvZG9JdGVtKHRhc2tFbGVtZW50KGVkaXRlZFRhc2spLCB0YXNrRWwpO1xuICAgICAgICB1cGRhdGVEYXRlZFZpZXcoKTtcbiAgICB9XG4gICAgdXBkYXRlVGFza0Zvcm0odGFza3MuZ2V0KHRhc2tFbC5pZCkpO1xuICAgIGVkaXRNb2RhbEZvcm0odGFza0Zvcm1Db250ZW50cygpLCBlZGl0KS5zaG93TW9kYWwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sgKHRhc2tFbCkge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5yZW1vdmUodGFza0VsLmlkKTtcbiAgICBpZiAoIXRhc2spIHRocm93IG5ldyBFcnJvciAoXCJJbnZhbGlkIElkXCIpO1xuXG4gICAgdXBkYXRlRGF0YShcInRhc2tzXCIsIHRhc2tzLmxpc3QpO1xuXG4gICAgcmVtb3ZlV2l0aEFuaW1hdGlvbih0YXNrRWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ2hlY2tsaXN0VGFzayAodGFza0VsKSB7XG4gICAgY29uc3QgdGFzayA9IGNoZWNrbGlzdC5yZW1vdmUodGFza0VsLmlkKTtcbiAgICBpZiAoIXRhc2spIHRocm93IG5ldyBFcnJvciAoXCJJbnZhbGlkIElkXCIpO1xuXG4gICAgdXBkYXRlRGF0YShcImNoZWNrbGlzdFwiLCBjaGVja2xpc3QubGlzdCk7XG5cbiAgICByZW1vdmVXaXRoQW5pbWF0aW9uKHRhc2tFbCk7XG5cbiAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVGFza0NvbXBsZXRpb24gKGNoZWNrYm94RWwsIHRhc2tFbCkge1xuICAgIGlmIChjaGVja2JveEVsLmNoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHNldFRhc2tBc0NvbXBsZXRlZCh0YXNrRWwuaWQpO1xuICAgICAgICByZW1vdmVXaXRoQW5pbWF0aW9uKHRhc2tFbCk7XG5cbiAgICAgICAgYXBwZW5kVG9DaGVja2xpc3QodGFza0VsZW1lbnQodGFzaywgdHJ1ZSkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFzayA9IHVuZG9UYXNrQ29tcGxldGlvbih0YXNrRWwuaWQpO1xuICAgIHJlbW92ZVdpdGhBbmltYXRpb24odGFza0VsKTtcblxuICAgIHVwZGF0ZURhdGVkVmlldygpO1xufSIsImltcG9ydCB7IHVwZGF0ZVRvZGF5VmlldyB9IGZyb20gXCIuLi90b2RheVwiO1xuaW1wb3J0IHsgdXBkYXRlVXBjb21pbmdWaWV3IH0gZnJvbSBcIi4uL3VwY29taW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZURhdGVkVmlldyAoKSB7XG4gICAgdXBkYXRlVG9kYXlWaWV3KCk7XG4gICAgdXBkYXRlVXBjb21pbmdWaWV3KCk7XG59IiwiaW1wb3J0IHsgZGVmYXVsdFJvdXRlIH0gZnJvbSBcIi4uL2RhdGEvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzZXRQcm9qZWN0IH0gZnJvbSBcIi4uL3BhZ2VzL3Byb2plY3QtdGFza1wiO1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHNlY3Rpb24gXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFJvdXRlIChzZWN0aW9uKSB7XG4gICAgc2V0SGFzaChzZWN0aW9uKTtcbiAgICBoYW5kbGVSb3V0ZShzZWN0aW9uKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUm91dGUgKHNlY3Rpb24pIHtcbiAgICBpZiAoc2VjdGlvbi5zdGFydHNXaXRoKFwicHJvamVjdC1cIikpIGhhbmRsZVByb2plY3RSb3V0ZShzZWN0aW9uKTtcbiAgICBlbHNlIHNob3dTZWN0aW9uKHNlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBzaG93U2VjdGlvbiAoc2VjdGlvbikge1xuICAgIGhpZGVBbGxTaWJsaW5ncyAoc2VjdGlvbik7XG4gICAgY29uc3QgY3VyclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWN0aW9ufWApIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RlZmF1bHRSb3V0ZX1gKTtcbiAgICBjdXJyU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBoaWRlQWxsU2libGluZ3MgKHNlY3Rpb24pIHtcbiAgICBjb25zdCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWN0aW9ufWApPy5wYXJlbnRFbGVtZW50Py5jaGlsZHJlbjtcbiAgICBcbiAgICBmb3IgKGxldCBlbCBvZiBlbHMpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRIYXNoIChzZWN0aW9uKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBzZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Um91dGUgKHNlY3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBzZXRQcm9qZWN0KHNlY3Rpb24uc3Vic3RyaW5nKDgpKTtcbiAgICAgICAgc2hvd1NlY3Rpb24oXCJwcm9qZWN0LXRhc2tcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0Um91dGUoZGVmYXVsdFJvdXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3RSb3V0ZSAocElkKSB7XG4gICAgc2V0Um91dGUoXCJwcm9qZWN0LVwiICsgcElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlICgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICBoYW5kbGVSb3V0ZShnZXRSb3V0ZSgpKTtcbn0pIiwiaW1wb3J0IGh0bWxFbCBmcm9tIFwiLi4vLi4vdXRpbHMvcmVuZGVyXCI7XG5pbXBvcnQgaWNvbiBmcm9tIFwiLi9pY29uXCI7XG5pbXBvcnQgbmF2RXZlbnRzIGZyb20gXCIuL25hdkV2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIgKCkge1xuICAgIGNvbnN0IGxvZ28gPSBodG1sRWwoe3RhZzonaDEnLCB0ZXh0OlwiI1RvRG9cIiwgY2xhc3NMaXN0OltcImxvZ29cIl19KTtcblxuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiaGVhZGVyXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wiaGVhZGVyXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgc2lkZWJhcigpLFxuICAgICAgICAgICAgbG9nbyxcbiAgICAgICAgICAgIG5hdigpLFxuICAgICAgICBdXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbmF2ICgpIHtcbiAgICByZXR1cm4gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcIm5hdlwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcIm1haW4tbmF2XCIsIFwibmF2XCJdLFxuICAgICAgICBjaGlsZHJlbjogW2h0bWxFbCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlFbChcInNlYXJjaFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpRWwoXCJwbHVzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlFbChcInN1blwiKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSldXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNpZGViYXIgKCkge1xuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwidWxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGxpRWwoXCJzaWRlYmFyXCIpLFxuICAgICAgICBdXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbGlFbCAobmF2KSB7XG4gICAgY29uc3QgaWNvbkxpID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImxpXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbaWNvbihuYXYpXVxuICAgIH0pO1xuXG4gICAgaWNvbkxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2RXZlbnRzW25hdl0pO1xuXG4gICAgcmV0dXJuIGljb25MaTtcbn0iLCJpbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi91dGlscy9yZW5kZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpY29uIChuYW1lLCBodG1sT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFodG1sT3B0aW9ucy5wcm9wcykgaHRtbE9wdGlvbnMucHJvcHMgPSB7fTtcbiAgICBodG1sT3B0aW9ucy5wcm9wc1tcImRhdGEtZmVhdGhlclwiXSA9IG5hbWVcblxuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICAuLi5odG1sT3B0aW9ucyxcbiAgICAgICAgdGFnOiBcImlcIlxuICAgIH0pXG59IiwiaW1wb3J0IGh0bWxFbCBmcm9tIFwiLi4vLi4vdXRpbHMvcmVuZGVyXCJcblxuY29uc3QgbW9kYWxGb3JtID0gaHRtbEVsICh7XG4gICAgdGFnOiBcImRpYWxvZ1wiLFxuICAgIGNsYXNzTGlzdDogW1wibW9kYWwtZm9ybS1jb250YWluZXJcIl1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZWRpdE1vZGFsRm9ybSAoZm9ybUNvbnRlbnRzLCBzdWJtaXRGbikge1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImJ1dHRvblwiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIlxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiBcIkFkZFwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcIm1vZGFsLWZvcm0tc3VibWl0XCJdXG4gICAgfSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgICAgIHRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgIGNsYXNzTGlzdDpbXCJtb2RhbC1mb3JtLWNhbmNlbFwiXSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsRm9ybS5jbG9zZSgpKTtcblxuICAgIGZvcm1Db250ZW50cy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZm9ybS1jb250ZW50XCIpO1xuXG4gICAgY29uc3QgZm9ybUVsID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImZvcm1cIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJtb2RhbC1mb3JtXCJdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgZm9ybUNvbnRlbnRzLFxuICAgICAgICAgICAgc3VibWl0QnRuLFxuICAgICAgICAgICAgY2FuY2VsQnRuXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIGZvcm1FbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgc3VibWl0Rm4oZm9ybSk7XG4gICAgICAgIFxuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIG1vZGFsRm9ybS5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgbW9kYWxGb3JtLnJlcGxhY2VDaGlsZHJlbihmb3JtRWwpO1xuXG4gICAgcmV0dXJuIG1vZGFsRm9ybTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxGb3JtOyIsImltcG9ydCB7IGlzU2FtZURheSwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgc2hvd05ld1Byb2plY3RUYXNrIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3Byb2plY3QtdGFza1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3Byb2plY3QtdGFzay91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0QWRkVGFza0ZuIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3V0aWxzL3Rhc2tzL2FkZC10YXNrXCI7XG5pbXBvcnQgdGFza0Zvcm1Db250ZW50cywgeyB1cGRhdGVUYXNrRm9ybSB9IGZyb20gXCIuLi8uLi9wYWdlcy91dGlscy90YXNrcy9mb3JtXCI7XG5pbXBvcnQgeyBnZXRSb3V0ZSB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL3JvdXRlc1wiO1xuaW1wb3J0IHsgZWRpdE1vZGFsRm9ybSB9IGZyb20gXCIuL21vZGFsLWZvcm1cIjtcbmltcG9ydCB7IGlzRGVhZGxpbmVUb2RheSB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFPcFwiO1xuaW1wb3J0IHsgYXBwZW5kVG9kYXlUYXNrIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3RvZGF5XCI7XG5pbXBvcnQgdXBkYXRlRGF0ZWRWaWV3IGZyb20gXCIuLi8uLi9wYWdlcy91dGlscy91cGRhdGUtZGF0ZWQtdmlld1wiO1xuXG5mdW5jdGlvbiBwbHVzICgpIHtcbiAgICBmdW5jdGlvbiBoYW5kbGVBbmltYXRpb24gKHRhc2spIHtcbiAgICAgICAgaWYgKGdldFJvdXRlKCkgPT09IFwidG9kYXlcIiAmJiAoaXNEZWFkbGluZVRvZGF5KHRhc2spKSkge1xuICAgICAgICAgICAgYXBwZW5kVG9kYXlUYXNrKHRhc2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdldFByb2plY3RJZCgpID09PSB0YXNrLnByb2plY3RJZCkgc2hvd05ld1Byb2plY3RUYXNrKHRhc2spO1xuXG4gICAgICAgIHVwZGF0ZURhdGVkVmlldygpO1xuICAgIH1cbiAgICB1cGRhdGVUYXNrRm9ybSh7fSk7XG4gICAgZWRpdE1vZGFsRm9ybSh0YXNrRm9ybUNvbnRlbnRzKCksIGdldEFkZFRhc2tGbihoYW5kbGVBbmltYXRpb24pKS5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgU2VhcmNoXCIpO1xufVxuXG5mdW5jdGlvbiBzdW4gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6cm9vdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbn1cblxuZnVuY3Rpb24gc2lkZWJhciAoZSkge1xuICAgIC8vIGZsaXAgc2lkZWJhciBzdmdcbiAgICBlLnRhcmdldC5jbG9zZXN0KCdzdmcnKS5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcFwiKTtcblxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1kaWFsb2dcIik7XG4gICAgaWYgKGRpYWxvZykge1xuICAgICAgICBpZiAoZGlhbG9nLm9wZW4pIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICBlbHNlIGRpYWxvZy5zaG93KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcGx1cyxcbiAgICBzZWFyY2gsXG4gICAgc3VuLFxuICAgIHNpZGViYXJcbn0iLCJpbXBvcnQgc2V0Um91dGUgZnJvbSBcIi4uLy4uL3JvdXRpbmcvcm91dGVzXCI7XG5pbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCBpY29uIGZyb20gXCIuL2ljb25cIjtcblxuY29uc3QgaWNvbk1hcHBlciA9ICB7XG4gICAgXCJ0b2RheVwiOiBcImhhc2hcIixcbiAgICBcInVwY29taW5nXCI6IFwiY2FsZW5kYXJcIixcbiAgICBcImNoZWNrbGlzdFwiOiBcImNoZWNrLWNpcmNsZVwiLFxuICAgIFwicHJvamVjdHNcIjogXCJmb2xkZXJcIlxufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKDAsMSkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zdWJzdHJpbmcoMSk7XG59XG5cbmZ1bmN0aW9uIGxpRWwgKG5hdikge1xuXG4gICAgY29uc3QgdGV4dCA9IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgIHRleHQ6IGNhcGl0YWxpemVGaXJzdExldHRlcihuYXYpXG4gICAgfSk7XG5cbiAgICBjb25zdCBsaSA9IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJsaVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgaWNvbihpY29uTWFwcGVyW25hdl0pLFxuICAgICAgICAgICAgdGV4dFxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldFJvdXRlKG5hdik7XG4gICAgICAgIC8vIEhpZGUgU2lkZWJhclxuICAgICAgICAvLyBlLnRhcmdldC5jbG9zZXN0KFwiZGlhbG9nXCIpLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXIgKCkge1xuICAgIGNvbnN0IG5hdiA9IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJuYXZcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGh0bWxFbCh7XG4gICAgICAgICAgICAgICAgdGFnOiBcInVsXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgbGlFbChcInRvZGF5XCIpLFxuICAgICAgICAgICAgICAgICAgICBsaUVsKFwidXBjb21pbmdcIiksXG4gICAgICAgICAgICAgICAgICAgIGxpRWwoXCJjaGVja2xpc3RcIiksXG4gICAgICAgICAgICAgICAgICAgIGxpRWwoXCJwcm9qZWN0c1wiKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICB9KTtcbiAgICByZXR1cm4gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImRpYWxvZ1wiLFxuICAgICAgICBpZDogXCJzaWRlYmFyLWRpYWxvZ1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbmF2XG4gICAgICAgIF1cbiAgICB9KTs7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdpdGhBbmltYXRpb24gKGVsKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcInJlbW92ZVwiKTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gZWwucmVtb3ZlKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkV2l0aEFuaW1hdGlvbiAoZWwsIGNvbnRhaW5lcikge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJhZGRcIik7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhZGRcIikpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcbn0iLCJpbXBvcnQgaHRtbEVsIGZyb20gXCIuLi8uLi91dGlscy9yZW5kZXJcIjtcbmltcG9ydCBpY29uIGZyb20gXCIuLi9sYXlvdXQvaWNvblwiO1xuaW1wb3J0IHsgZWRpdE1vZGFsRm9ybSB9IGZyb20gJy4uL2xheW91dC9tb2RhbC1mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXRlbUFkZGVyQnRuIChuYW1lLCBjb250ZW50LCBhZGRJdGVtKSB7XG4gICAgY29uc3QgZWwgPSBodG1sRWwgKHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInRvZG8taXRlbVwiLCBcIml0ZW0tYWRkZXJcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBpY29uKFwicGx1c1wiKSxcbiAgICAgICAgICAgIGh0bWxFbCh7XG4gICAgICAgICAgICAgICAgdGFnOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFkZCBuZXcgXCIgKyBuYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICAvLyBlbC5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGVkaXRNb2RhbEZvcm0oY29udGVudCwgYWRkSXRlbSkuc2hvd01vZGFsKCk7XG4gICAgICAgICBcbiAgICAvLyB9KVxuXG4gICAgcmV0dXJuIGVsO1xufSIsImltcG9ydCBodG1sRWwgZnJvbSBcIi4uLy4uL3V0aWxzL3JlbmRlclwiO1xuXG5mdW5jdGlvbiBjaGVja2JveCAoaXNDaGVja2VkKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiaW5wdXRcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tY2hlY2tib3hcIl0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpc0NoZWNrZWQpIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgY2hlY2tib3hDb250ID0gaHRtbEVsICh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJyb3VuZFwiLCBcInRvZG8taXRlbS1jaGVja2JveFwiXSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGNoZWNrYm94LFxuICAgICAgICAgICAgLy8gaHRtbEVsKHtcbiAgICAgICAgICAgIC8vICAgICB0YWc6IFwibGFiZWxcIixcbiAgICAgICAgICAgIC8vICAgICBwcm9wczoge1xuICAgICAgICAgICAgLy8gICAgICAgICBmb3I6IFwidG9kby1pdGVtLWNoZWNrYm94XCJcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hlY2tib3hDb250O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uID0gXCJcIiwgaWNvblNldCA9IFtdLCBoYXNodGFnID0ge30sIHJlcXVpcmVzQ2hlY2tib3ggPSBmYWxzZSwgaXNDaGVja2VkID0gZmFsc2UpIHtcblxuICAgIGNvbnN0IHRpdGxlRWwgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInRvZG8taXRlbS10aXRsZVwiLCBcImxlZnRcIiwgXCJ0ZXh0LWNvbnRhaW5lclwiXVxuICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkVsID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICB0ZXh0OiBkZXNjcmlwdGlvbixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0tZGVzY3JpcHRpb25cIiwgXCJ0b2RvLWl0ZW0tbGVmdFwiLCBcInRleHQtY29udGFpbmVyXCJdXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYXNodGFnRWwgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIHRleHQ6IGhhc2h0YWc/LnRleHQgfHwgXCJcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0taGFzaHRhZ1wiLCBcInRvZG8taXRlbS1yaWdodFwiLFwidGV4dC1jb250YWluZXJcIl1cbiAgICB9KTtcblxuICAgIGlmIChoYXNodGFnICYmIGhhc2h0YWcucmVmRm4pIGhhc2h0YWdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhc2h0YWcucmVmRm4pO1xuXG4gICAgY29uc3QgaWNvbkxpc3QgPSBpY29uU2V0Lm1hcChpY29uID0+IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJsaVwiLFxuICAgICAgICBjaGlsZHJlbjogW2ljb25dXG4gICAgfSkpO1xuXG4gICAgY29uc3QgaWNvbkVscyA9IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0b2RvLWl0ZW0taWNvbi1zZXRcIiwgXCJ0b2RvLWl0ZW0tcmlnaHRcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbaHRtbEVsKHtcbiAgICAgICAgICAgIHRhZzogXCJ1bFwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IGljb25MaXN0XG4gICAgICAgIH0pXVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtcbiAgICAgICAgdGl0bGVFbCxcbiAgICAgICAgZGVzY3JpcHRpb25FbCxcbiAgICAgICAgaWNvbkVscyxcbiAgICAgICAgaGFzaHRhZ0VsXG4gICAgXTtcblxuICAgIGlmIChyZXF1aXJlc0NoZWNrYm94KSBjb21wb25lbnRzLnB1c2goY2hlY2tib3goaXNDaGVja2VkKSk7XG5cbiAgICByZXR1cm4gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImxpXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1widG9kby1pdGVtXCJdLFxuICAgICAgICBjaGlsZHJlbjogY29tcG9uZW50c1xuICAgIH0pXG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xvc2VzdFRvZG9JdGVtIChlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KFwibGkudG9kby1pdGVtXCIpO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY3VycmVudEl0ZW0gXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBuZXdJdGVtIFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVG9kb0l0ZW0gKG5ld0l0ZW0sIGN1cnJlbnRJdGVtKSB7XG4gICAgY3VycmVudEl0ZW0ucmVwbGFjZUNoaWxkcmVuKC4uLm5ld0l0ZW0uY2hpbGRyZW4pO1xufSIsIi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJfU3RvcmFnZV9BUEkvVXNpbmdfdGhlX1dlYl9TdG9yYWdlX0FQSVxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSA9IHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpO1xuXG5leHBvcnQgZGVmYXVsdCBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZTtcbiAgIiwiaW1wb3J0IGh0bWxFbCBmcm9tIFwiLi9yZW5kZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRleHQgKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC50cmltKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRleHRJbnB1dEVsICh0ZXh0LCBuYW1lLCByZXF1aXJlZCA9IHRydWUsIG1heGxlbmd0aCA9IDE2LCBodG1sRWxPcHRpb25zID0ge30sIHR5cGUgPSBcInRleHRcIikge1xuXG4gICAgY29uc3QgaWQgPSAgXCJ0ZXh0LWlucHV0LVwiICsgZm9ybWF0VGV4dCh0ZXh0KTtcblxuICAgIGNvbnN0IGlucHV0ID0gaHRtbEVsKHtcbiAgICAgICAgdGFnOiBcImlucHV0XCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIG1heGxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBpZFxuICAgIH0pO1xuXG4gICAgaWYgKHJlcXVpcmVkKSBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBsYWJlbCA9IGh0bWxFbCh7XG4gICAgICAgIHRhZzogXCJsYWJlbFwiLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZm9yOiBpZFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBodG1sRWxPcHRpb25zLmNoaWxkcmVuID0gW1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgaW5wdXRcbiAgICBdXG5cbiAgICBpZiAoIWh0bWxFbE9wdGlvbnMuY2xhc3NMaXN0KSBodG1sRWxPcHRpb25zLmNsYXNzTGlzdCA9IFtdO1xuXG4gICAgaHRtbEVsT3B0aW9ucy5jbGFzc0xpc3QucHVzaChcInRleHQtaW5wdXRcIik7XG5cbiAgICByZXR1cm4gaHRtbEVsICh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgLi4uaHRtbEVsT3B0aW9uc1xuICAgIH0pXG59XG4vKipcbiAqIFxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBmaWVsZCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBlcnIgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93VmFsaWRhdGlvbkVycm9yIChmaWVsZCwgZXJyKSB7XG4gICAgZmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoZXJyKTtcbiAgICBmaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGZpZWxkLmNsb3Nlc3QoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBmaWVsZC5zZXRDdXN0b21WYWxpZGl0eSgnJykpXG59XG4iLCIvKipcbiAqIFxuICogQHBhcmFtIHsqfSBwYXJhbTAgXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IGh0bWxFbFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBodG1sRWwgKHt0YWcsIHRleHQgPSBcIlwiLCBjbGFzc0xpc3QgPSBbXSwgaWQgPSBcIlwiLCBjaGlsZHJlbiA9IFtdLCBwcm9wcyA9IHt9fSkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgaWYgKGNsYXNzTGlzdC5sZW5ndGgpIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaWQpIGVsLmlkID0gaWQ7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblxuICAgIHJldHVybiBlbDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHNpZ24gPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBcIjBcIik7XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufVxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4vX2xpYi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXRJU099IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlIGFjY29yZGluZyB0byB0aGUgSVNPIDg2MDEgc3RhbmRhcmQgKGh0dHBzOi8vc3VwcG9ydC5zYXMuY29tL2RvY3VtZW50YXRpb24vY2RsL2VuL2xyZGljdC82NDMxNi9IVE1ML2RlZmF1bHQvdmlld2VyLmh0bSNhMDAzMTY5ODE0Lmh0bSkuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQuIE9wdGlvbnMgbWF5IGJlIHBhc3NlZCB0byBjb250cm9sIHRoZSBwYXJ0cyBhbmQgbm90YXRpb25zIG9mIHRoZSBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIChpbiBsb2NhLmwgdGltZSB6b25lKVxuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEgZm9ybWF0IChsb2NhbCB0aW1lIHpvbmUgaXMgVVRDKTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSlcbiAqIC8vPT4gJzIwMTktMDktMThUMTk6MDA6NTJaJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEsIHNob3J0IGZvcm1hdCAobG9jYWwgdGltZSB6b25lIGlzIFVUQyk6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXRJU08obmV3IERhdGUoMjAxOSwgOCwgMTgsIDE5LCAwLCA1MiksIHsgZm9ybWF0OiAnYmFzaWMnIH0pXG4gKiAvLz0+ICcyMDE5MDkxOFQxOTAwNTInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxOCBTZXB0ZW1iZXIgMjAxOSBpbiBJU08gODYwMSBmb3JtYXQsIGRhdGUgb25seTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSwgeyByZXByZXNlbnRhdGlvbjogJ2RhdGUnIH0pXG4gKiAvLz0+ICcyMDE5LTA5LTE4J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEgZm9ybWF0LCB0aW1lIG9ubHkgKGxvY2FsIHRpbWUgem9uZSBpcyBVVEMpOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpLCB7IHJlcHJlc2VudGF0aW9uOiAndGltZScgfSlcbiAqIC8vPT4gJzE5OjAwOjUyWidcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdElTTyhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuXG4gIGlmIChpc05hTihfZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHRpbWUgdmFsdWVcIik7XG4gIH1cblxuICBjb25zdCBmb3JtYXQgPSBvcHRpb25zPy5mb3JtYXQgPz8gXCJleHRlbmRlZFwiO1xuICBjb25zdCByZXByZXNlbnRhdGlvbiA9IG9wdGlvbnM/LnJlcHJlc2VudGF0aW9uID8/IFwiY29tcGxldGVcIjtcblxuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgbGV0IHR6T2Zmc2V0ID0gXCJcIjtcblxuICBjb25zdCBkYXRlRGVsaW1pdGVyID0gZm9ybWF0ID09PSBcImV4dGVuZGVkXCIgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IHRpbWVEZWxpbWl0ZXIgPSBmb3JtYXQgPT09IFwiZXh0ZW5kZWRcIiA/IFwiOlwiIDogXCJcIjtcblxuICAvLyBSZXByZXNlbnRhdGlvbiBpcyBlaXRoZXIgJ2RhdGUnIG9yICdjb21wbGV0ZSdcbiAgaWYgKHJlcHJlc2VudGF0aW9uICE9PSBcInRpbWVcIikge1xuICAgIGNvbnN0IGRheSA9IGFkZExlYWRpbmdaZXJvcyhfZGF0ZS5nZXREYXRlKCksIDIpO1xuICAgIGNvbnN0IG1vbnRoID0gYWRkTGVhZGluZ1plcm9zKF9kYXRlLmdldE1vbnRoKCkgKyAxLCAyKTtcbiAgICBjb25zdCB5ZWFyID0gYWRkTGVhZGluZ1plcm9zKF9kYXRlLmdldEZ1bGxZZWFyKCksIDQpO1xuXG4gICAgLy8geXl5eU1NZGQgb3IgeXl5eS1NTS1kZC5cbiAgICByZXN1bHQgPSBgJHt5ZWFyfSR7ZGF0ZURlbGltaXRlcn0ke21vbnRofSR7ZGF0ZURlbGltaXRlcn0ke2RheX1gO1xuICB9XG5cbiAgLy8gUmVwcmVzZW50YXRpb24gaXMgZWl0aGVyICd0aW1lJyBvciAnY29tcGxldGUnXG4gIGlmIChyZXByZXNlbnRhdGlvbiAhPT0gXCJkYXRlXCIpIHtcbiAgICAvLyBBZGQgdGhlIHRpbWV6b25lLlxuICAgIGNvbnN0IG9mZnNldCA9IF9kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZU9mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gICAgICBjb25zdCBob3VyT2Zmc2V0ID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzb2x1dGVPZmZzZXQgLyA2MCksIDIpO1xuICAgICAgY29uc3QgbWludXRlT2Zmc2V0ID0gYWRkTGVhZGluZ1plcm9zKGFic29sdXRlT2Zmc2V0ICUgNjAsIDIpO1xuICAgICAgLy8gSWYgbGVzcyB0aGFuIDAsIHRoZSBzaWduIGlzICssIGJlY2F1c2UgaXQgaXMgYWhlYWQgb2YgdGltZS5cbiAgICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPCAwID8gXCIrXCIgOiBcIi1cIjtcblxuICAgICAgdHpPZmZzZXQgPSBgJHtzaWdufSR7aG91ck9mZnNldH06JHttaW51dGVPZmZzZXR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHpPZmZzZXQgPSBcIlpcIjtcbiAgICB9XG5cbiAgICBjb25zdCBob3VyID0gYWRkTGVhZGluZ1plcm9zKF9kYXRlLmdldEhvdXJzKCksIDIpO1xuICAgIGNvbnN0IG1pbnV0ZSA9IGFkZExlYWRpbmdaZXJvcyhfZGF0ZS5nZXRNaW51dGVzKCksIDIpO1xuICAgIGNvbnN0IHNlY29uZCA9IGFkZExlYWRpbmdaZXJvcyhfZGF0ZS5nZXRTZWNvbmRzKCksIDIpO1xuXG4gICAgLy8gSWYgdGhlcmUncyBhbHNvIGRhdGUsIHNlcGFyYXRlIGl0IHdpdGggdGltZSB3aXRoICdUJ1xuICAgIGNvbnN0IHNlcGFyYXRvciA9IHJlc3VsdCA9PT0gXCJcIiA/IFwiXCIgOiBcIlRcIjtcblxuICAgIC8vIENyZWF0ZXMgYSB0aW1lIHN0cmluZyBjb25zaXN0aW5nIG9mIGhvdXIsIG1pbnV0ZSwgYW5kIHNlY29uZCwgc2VwYXJhdGVkIGJ5IGRlbGltaXRlcnMsIGlmIGRlZmluZWQuXG4gICAgY29uc3QgdGltZSA9IFtob3VyLCBtaW51dGUsIHNlY29uZF0uam9pbih0aW1lRGVsaW1pdGVyKTtcblxuICAgIC8vIEhIbW1zcyBvciBISDptbTpzcy5cbiAgICByZXN1bHQgPSBgJHtyZXN1bHR9JHtzZXBhcmF0b3J9JHt0aW1lfSR7dHpPZmZzZXR9YDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0SVNPO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5KG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gM1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIGRhdGVUb0NvbXBhcmUgLSBUaGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiArX2RhdGUgPCArX2RhdGVUb0NvbXBhcmU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNCZWZvcmU7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNFcXVhbFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGVxdWFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGVxdWFsXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIEp1bHkgMjAxNCAwNjozMDo0NS4wMDAgYW5kIDIgSnVseSAyMDE0IDA2OjMwOjQ1LjUwMCBlcXVhbD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzRXF1YWwoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDMwLCA0NSwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDMwLCA0NSwgNTAwKVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbChsZWZ0RGF0ZSwgcmlnaHREYXRlKSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShsZWZ0RGF0ZSk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUocmlnaHREYXRlKTtcbiAgcmV0dXJuICtfZGF0ZUxlZnQgPT09ICtfZGF0ZVJpZ2h0O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRXF1YWw7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCIvKipcbiAqIEBuYW1lIHN0YXJ0T2ZUb21vcnJvd1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvbW9ycm93LlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgdG9tb3Jyb3cuXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIHRvbW9ycm93XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlRvbW9ycm93KClcbiAqIC8vPT4gVHVlIE9jdCA3IDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZUb21vcnJvdygpIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IG5vdy5nZXRNb250aCgpO1xuICBjb25zdCBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgZGF5ICsgMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZUb21vcnJvdztcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaHRtbEVsIGZyb20gXCIuL3V0aWxzL3JlbmRlclwiO1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi91aS9sYXlvdXQvaGVhZGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCJcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3VpL2xheW91dC9zaWRlYmFyXCI7XG5pbXBvcnQgdG9kYXkgZnJvbSBcIi4vcGFnZXMvdG9kYXlcIjtcbmltcG9ydCB1cGNvbWluZyBmcm9tIFwiLi9wYWdlcy91cGNvbWluZ1wiO1xuaW1wb3J0IGNoZWNrbGlzdCBmcm9tIFwiLi9wYWdlcy9jaGVja2xpc3RcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9wYWdlcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHNldFJvdXRlLCB7IGdldFJvdXRlIH0gZnJvbSBcIi4vcm91dGluZy9yb3V0ZXNcIjtcbmltcG9ydCBtb2RhbEZvcm0gZnJvbSBcIi4vdWkvbGF5b3V0L21vZGFsLWZvcm1cIjtcbmltcG9ydCBwcm9qZWN0VGFzayBmcm9tIFwiLi9wYWdlcy9wcm9qZWN0LXRhc2tcIjtcbmltcG9ydCB7IGRlZmF1bHRSb3V0ZSB9IGZyb20gXCIuL2RhdGEvY29uc3RhbnRzXCI7XG5jb25zdCBmZWF0aGVyID0gcmVxdWlyZSgnZmVhdGhlci1pY29ucycpO1xuXG5jb25zdCBjb21wb25lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBodG1sRWwoe1xuICAgICAgICB0YWc6IFwibWFpblwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgdG9kYXkoKSxcbiAgICAgICAgICAgIHVwY29taW5nKCksXG4gICAgICAgICAgICBjaGVja2xpc3QoKSxcbiAgICAgICAgICAgIHByb2plY3RzKCksXG4gICAgICAgICAgICBwcm9qZWN0VGFzaygpXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHJldHVybiBodG1sRWwoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGlkOiBcImNvbnRlbnRcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGhlYWRlcigpLFxuICAgICAgICAgICAgc2lkZWJhcigpLFxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lcixcbiAgICAgICAgICAgIG1vZGFsRm9ybVxuICAgICAgICBdXG4gICAgfSk7XG59KSgpO1xuXG5mdW5jdGlvbiBoYW5kbGVSb3V0ZSgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZ2V0Um91dGUoKSB8fCBkZWZhdWx0Um91dGU7XG4gICAgc2V0Um91dGUoc2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIHNldFRoZW1lKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIikuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcblxuLy8gU2hvdyBTVkdzXG5mdW5jdGlvbiBzaG93U1ZHcyAoKSB7XG4gICAgZmVhdGhlci5yZXBsYWNlKCk7XG4gICAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIGluIERPTVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICBmZWF0aGVyLnJlcGxhY2UoKVxuICAgIH0pXG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudCwge1xuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICB9KVxufVxuXG5zZXRUaGVtZSgpO1xuaGFuZGxlUm91dGUoKTtcbnNob3dTVkdzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=