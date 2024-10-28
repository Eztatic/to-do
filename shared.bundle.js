"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["shared"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/poppins-regular-webfont.woff2 */ "./src/fonts/poppins-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/poppins-regular-webfont.woff */ "./src/fonts/poppins-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/unchecked.png */ "./src/images/unchecked.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/checked.png */ "./src/images/checked.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
      --red: 1px solid red;
}

@font-face {
      font-family: 'poppins-regular';
      src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
           url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
      font-weight: normal;
      font-style: normal;
}

* {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style-type: none;
      list-style: none;
      font-family: 'poppins-regular', system-ui, sans-serif;
}

body {
      height: 100vh;
      display: grid;
      grid-template: 1fr / minmax(150px, 250px) 1fr;
}

img {
      width: 36px;
      height: 36px;
}

/** ASIDE **/

.user-profile {
      margin-bottom: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
}

.user-profile > p {
      font-size: 1.2rem;
}

.project-label {
      font-size: 1.5rem;
      font-weight: 800;
      padding: 12px 0;
}

.projects-container li {
      height: 36px;
      font-size: 1.1rem;
      padding: 0.25rem 0.5rem;
      border: 0;
      border-radius: 4px;
      cursor: pointer;

      display: flex;
      align-items: center;
}

.project-list > li p {
      line-height: 36px;
      flex-grow: 1;
}

.projects-container li:hover {
      color: #FF8A08;
      background-color: #393E46;
      padding: 0.25rem 0.5rem;
      outline: 2px solid #393E46;
}

.project-list .icons > *:hover {
      transform: scale(1.5);
}

.projects-container > button#create-project-btn{
      background: none;
      text-align: center;
      font-size: 2rem;
      width: 100%;
      padding: 4px 0;
      border: 0;
      border-radius: 4px;
      margin-top: 8px;
      outline: 2px solid #393E46;
      display: inline-block;
      cursor: pointer;
}

button#create-project-btn:hover {
      background: #393E46;
      color: #FF8A08;
      outline: 0px solid #FF8A08;
}

aside { 
      background-color: #FF8A08;
      padding: 24px;
      display: flex;
      flex-direction: column;
}

/** MAIN **/

main { 
      background-color: #393E46;
      text-align: center;
      color: #fff;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
}

main > h1#project-name {
      color: #000;
      background-color: #FF8A08;
      width: 100%;
      padding: 1.2rem 0;
      border-radius: 4px;
      display: block;
      position: sticky;
      top: 0;
}

/** TASK **/

div.task-list { 
      width: max(300px, 70%);
}

div.task-container {
      margin-bottom: 36px;
}

/** A. Task Head **/

main .task-list .task-container .task-head{
      background-color: #FF8A08;
      padding: 16px 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
}

.task-head > .task-name {
      font-size: 1.2rem;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      user-select: none;
      cursor: pointer;
}

.task-name::before{
      content: '';
      margin-right: 8px;
      display: inline-block;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
      background-size: cover;
      background-position: center;
}

.task-head > .task-name.checked::before{
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}


/** B. Task Body **/
.task-body {
      padding: 24px;
      background-color: #fff;
      color: #000;
      display: none;
      grid-template-columns: 4fr 200px;
      grid-template-rows: 50px 1fr 50px;
}

.task-body > p:first-child {
      text-align: start;
      font-size: 2rem;
      font-weight: 900;
}

.task-body > p:nth-child(2) {
      color: #FF8A08;
      font-weight: 600;
      padding-top: 8px
}

.task-body > .description {
      text-align: start;
      line-height: 18px;
      grid-column: 1 / 3;
}

.icons {
      justify-self: start;
      align-self: end;
      user-select: none;
}

.icons > * {
      cursor: pointer;
}

.task-body > .icons > *:hover {
      padding: 4px;
      border: 1px solid #000;
      border-radius: 50%;
}

.icons > .edit:hover {
      color: #6CB4EE;
}

.icons > .delete:hover {
      color: #ff0000;
}

.task-body > p:last-child {
      grid-column: 2 / 3;
      align-self: end;
}

/** C. Dropdown Button **/
.dropdown-btn {
      display: inline-block;
      font-size: 16px;
      background-color: #8b8b8b;
      width: 100%;
      height: 24px;
      padding: 2px 0 10px 0;
      border: none;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      cursor: pointer;
}

.dropdown-btn span {
      display: block;
      cursor: pointer;
}

/** ADD TASK BUTTON **/
button#add-task-btn {
      background: none;
      color:#FF8A08;
      text-align: center;
      font-size: 4rem;
      width: 100%;
      padding: 8.5px 0;
      border: 0;
      border-radius: 25px;
      outline: 2px solid #FF8A08;
      display: inline-block;
      cursor: pointer;
      transition: all 0.2s ease;
}

button#add-task-btn:hover {
      outline: 0;
      color: #393E46;
      background-color: #FF8A08;
}


/** Task Dialog **/
#task-dialog, #edit-dialog {
   background-color: #393E46;
   border: none;
   border-radius: 6px;
   outline: 10px solid #FF8A08;  
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 999;
}

dialog::backdrop {
      background: rgba(255, 255, 255, 0.22);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(3.7px);
      -webkit-backdrop-filter: blur(3.7px);
}

form#task-input {
      padding: 24px;
      display: grid;
      grid-template-columns: auto 2fr;
      grid-template-rows: 1fr 250px 1fr 1fr 1fr; 
      gap: 12px;   
      align-items: center;
}

form#task-input > textarea {
      color: #fff;
      background: transparent;
      border: 2px solid #FF8A08;
      border-radius: 6px;
      font-size: 1rem;
      width: 300px;
      height: 250px;
      padding: 4px;
      resize: none;
}

label {
      color: #FF8A08;
      font-size: 18px;
      font-weight: 800;
      justify-self: end;
}

input {
      color-scheme: dark;
      color: #fff;
      background: transparent;
      border: 2px solid #FF8A08;
      border-radius: 6px;
      font-size: 1rem;
      padding: 4px;
}

input:focus,  textarea:focus
{
      outline: 1px solid #FF8A08;
}

form#task-input > label[for*="input-description"]{
      margin-top: 4px;
      align-self: start;
}

form#task-input > fieldset {
      border: 2px solid #FF8A08;
      padding: 4px;
      grid-column: 1 / 3;
}

legend {
      color: #FF8A08;
      font-weight: 800;
      padding: 0 6px;
}

form#task-input > fieldset > label {
      margin-right: 8px;
}

dialog > form > div button {
      font-weight: 600;
      padding: 8px 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
}

dialog > form > div button:first-of-type {
      color: #fff;
      background-color: #FF8A08;
}

dialog > form > div {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      align-items: center;
}

#input-deadline {
      width: 100%;
}

fieldset > label {
      color: #FF8A08;
}

label[for*='marginal'] {
      color: #1cd131;
}

label[for*='moderate'] {
      color: #FFC000;
}

label[for*='critical'] {
      color: #ff3030;
}

input[type="radio"] {
      accent-color: #FF8A08;
}

input[type="radio"]:focus {
      outline: none;
      border: none;
}

/** Project Dialog **/
#project-dialog, #editProjName-dialog {
      background-color: #393E46;
      border: none;
      border-radius: 6px;
      outline: 10px solid #FF8A08;  
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
}

form#project-input {
      padding: 24px;
      display: grid;
      grid-template-columns: auto 2fr;
      grid-template-rows: 1fr 1fr; 
      gap: 12px;   
      align-items: center;
}

/** Edit Dialog **/
#edit-dialog .date-container {
      font-size: 12px;
      color: #FF8A08;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
}

.current-date {
      color: #fff;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n      --red: 1px solid red;\r\n}\r\n\r\n@font-face {\r\n      font-family: 'poppins-regular';\r\n      src: url('./fonts/poppins-regular-webfont.woff2') format('woff2'),\r\n           url('./fonts/poppins-regular-webfont.woff') format('woff');\r\n      font-weight: normal;\r\n      font-style: normal;\r\n}\r\n\r\n* {\r\n      box-sizing: border-box;\r\n      margin: 0;\r\n      padding: 0;\r\n      list-style-type: none;\r\n      list-style: none;\r\n      font-family: 'poppins-regular', system-ui, sans-serif;\r\n}\r\n\r\nbody {\r\n      height: 100vh;\r\n      display: grid;\r\n      grid-template: 1fr / minmax(150px, 250px) 1fr;\r\n}\r\n\r\nimg {\r\n      width: 36px;\r\n      height: 36px;\r\n}\r\n\r\n/** ASIDE **/\r\n\r\n.user-profile {\r\n      margin-bottom: 8px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-wrap: wrap;\r\n      gap: 1rem;\r\n}\r\n\r\n.user-profile > p {\r\n      font-size: 1.2rem;\r\n}\r\n\r\n.project-label {\r\n      font-size: 1.5rem;\r\n      font-weight: 800;\r\n      padding: 12px 0;\r\n}\r\n\r\n.projects-container li {\r\n      height: 36px;\r\n      font-size: 1.1rem;\r\n      padding: 0.25rem 0.5rem;\r\n      border: 0;\r\n      border-radius: 4px;\r\n      cursor: pointer;\r\n\r\n      display: flex;\r\n      align-items: center;\r\n}\r\n\r\n.project-list > li p {\r\n      line-height: 36px;\r\n      flex-grow: 1;\r\n}\r\n\r\n.projects-container li:hover {\r\n      color: #FF8A08;\r\n      background-color: #393E46;\r\n      padding: 0.25rem 0.5rem;\r\n      outline: 2px solid #393E46;\r\n}\r\n\r\n.project-list .icons > *:hover {\r\n      transform: scale(1.5);\r\n}\r\n\r\n.projects-container > button#create-project-btn{\r\n      background: none;\r\n      text-align: center;\r\n      font-size: 2rem;\r\n      width: 100%;\r\n      padding: 4px 0;\r\n      border: 0;\r\n      border-radius: 4px;\r\n      margin-top: 8px;\r\n      outline: 2px solid #393E46;\r\n      display: inline-block;\r\n      cursor: pointer;\r\n}\r\n\r\nbutton#create-project-btn:hover {\r\n      background: #393E46;\r\n      color: #FF8A08;\r\n      outline: 0px solid #FF8A08;\r\n}\r\n\r\naside { \r\n      background-color: #FF8A08;\r\n      padding: 24px;\r\n      display: flex;\r\n      flex-direction: column;\r\n}\r\n\r\n/** MAIN **/\r\n\r\nmain { \r\n      background-color: #393E46;\r\n      text-align: center;\r\n      color: #fff;\r\n      padding: 24px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      gap: 24px;\r\n}\r\n\r\nmain > h1#project-name {\r\n      color: #000;\r\n      background-color: #FF8A08;\r\n      width: 100%;\r\n      padding: 1.2rem 0;\r\n      border-radius: 4px;\r\n      display: block;\r\n      position: sticky;\r\n      top: 0;\r\n}\r\n\r\n/** TASK **/\r\n\r\ndiv.task-list { \r\n      width: max(300px, 70%);\r\n}\r\n\r\ndiv.task-container {\r\n      margin-bottom: 36px;\r\n}\r\n\r\n/** A. Task Head **/\r\n\r\nmain .task-list .task-container .task-head{\r\n      background-color: #FF8A08;\r\n      padding: 16px 24px;\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      border-top-left-radius: 25px;\r\n      border-top-right-radius: 25px;\r\n}\r\n\r\n.task-head > .task-name {\r\n      font-size: 1.2rem;\r\n      font-weight: 800;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      user-select: none;\r\n      cursor: pointer;\r\n}\r\n\r\n.task-name::before{\r\n      content: '';\r\n      margin-right: 8px;\r\n      display: inline-block;\r\n      height: 24px;\r\n      width: 24px;\r\n      border-radius: 50%;\r\n      background-image: url('./images/unchecked.png');\r\n      background-size: cover;\r\n      background-position: center;\r\n}\r\n\r\n.task-head > .task-name.checked::before{\r\n      background-image: url('./images/checked.png');\r\n}\r\n\r\n\r\n/** B. Task Body **/\r\n.task-body {\r\n      padding: 24px;\r\n      background-color: #fff;\r\n      color: #000;\r\n      display: none;\r\n      grid-template-columns: 4fr 200px;\r\n      grid-template-rows: 50px 1fr 50px;\r\n}\r\n\r\n.task-body > p:first-child {\r\n      text-align: start;\r\n      font-size: 2rem;\r\n      font-weight: 900;\r\n}\r\n\r\n.task-body > p:nth-child(2) {\r\n      color: #FF8A08;\r\n      font-weight: 600;\r\n      padding-top: 8px\r\n}\r\n\r\n.task-body > .description {\r\n      text-align: start;\r\n      line-height: 18px;\r\n      grid-column: 1 / 3;\r\n}\r\n\r\n.icons {\r\n      justify-self: start;\r\n      align-self: end;\r\n      user-select: none;\r\n}\r\n\r\n.icons > * {\r\n      cursor: pointer;\r\n}\r\n\r\n.task-body > .icons > *:hover {\r\n      padding: 4px;\r\n      border: 1px solid #000;\r\n      border-radius: 50%;\r\n}\r\n\r\n.icons > .edit:hover {\r\n      color: #6CB4EE;\r\n}\r\n\r\n.icons > .delete:hover {\r\n      color: #ff0000;\r\n}\r\n\r\n.task-body > p:last-child {\r\n      grid-column: 2 / 3;\r\n      align-self: end;\r\n}\r\n\r\n/** C. Dropdown Button **/\r\n.dropdown-btn {\r\n      display: inline-block;\r\n      font-size: 16px;\r\n      background-color: #8b8b8b;\r\n      width: 100%;\r\n      height: 24px;\r\n      padding: 2px 0 10px 0;\r\n      border: none;\r\n      border-bottom-left-radius: 25px;\r\n      border-bottom-right-radius: 25px;\r\n      cursor: pointer;\r\n}\r\n\r\n.dropdown-btn span {\r\n      display: block;\r\n      cursor: pointer;\r\n}\r\n\r\n/** ADD TASK BUTTON **/\r\nbutton#add-task-btn {\r\n      background: none;\r\n      color:#FF8A08;\r\n      text-align: center;\r\n      font-size: 4rem;\r\n      width: 100%;\r\n      padding: 8.5px 0;\r\n      border: 0;\r\n      border-radius: 25px;\r\n      outline: 2px solid #FF8A08;\r\n      display: inline-block;\r\n      cursor: pointer;\r\n      transition: all 0.2s ease;\r\n}\r\n\r\nbutton#add-task-btn:hover {\r\n      outline: 0;\r\n      color: #393E46;\r\n      background-color: #FF8A08;\r\n}\r\n\r\n\r\n/** Task Dialog **/\r\n#task-dialog, #edit-dialog {\r\n   background-color: #393E46;\r\n   border: none;\r\n   border-radius: 6px;\r\n   outline: 10px solid #FF8A08;  \r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n   z-index: 999;\r\n}\r\n\r\ndialog::backdrop {\r\n      background: rgba(255, 255, 255, 0.22);\r\n      border-radius: 16px;\r\n      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\r\n      backdrop-filter: blur(3.7px);\r\n      -webkit-backdrop-filter: blur(3.7px);\r\n}\r\n\r\nform#task-input {\r\n      padding: 24px;\r\n      display: grid;\r\n      grid-template-columns: auto 2fr;\r\n      grid-template-rows: 1fr 250px 1fr 1fr 1fr; \r\n      gap: 12px;   \r\n      align-items: center;\r\n}\r\n\r\nform#task-input > textarea {\r\n      color: #fff;\r\n      background: transparent;\r\n      border: 2px solid #FF8A08;\r\n      border-radius: 6px;\r\n      font-size: 1rem;\r\n      width: 300px;\r\n      height: 250px;\r\n      padding: 4px;\r\n      resize: none;\r\n}\r\n\r\nlabel {\r\n      color: #FF8A08;\r\n      font-size: 18px;\r\n      font-weight: 800;\r\n      justify-self: end;\r\n}\r\n\r\ninput {\r\n      color-scheme: dark;\r\n      color: #fff;\r\n      background: transparent;\r\n      border: 2px solid #FF8A08;\r\n      border-radius: 6px;\r\n      font-size: 1rem;\r\n      padding: 4px;\r\n}\r\n\r\ninput:focus,  textarea:focus\r\n{\r\n      outline: 1px solid #FF8A08;\r\n}\r\n\r\nform#task-input > label[for*=\"input-description\"]{\r\n      margin-top: 4px;\r\n      align-self: start;\r\n}\r\n\r\nform#task-input > fieldset {\r\n      border: 2px solid #FF8A08;\r\n      padding: 4px;\r\n      grid-column: 1 / 3;\r\n}\r\n\r\nlegend {\r\n      color: #FF8A08;\r\n      font-weight: 800;\r\n      padding: 0 6px;\r\n}\r\n\r\nform#task-input > fieldset > label {\r\n      margin-right: 8px;\r\n}\r\n\r\ndialog > form > div button {\r\n      font-weight: 600;\r\n      padding: 8px 12px;\r\n      border: none;\r\n      border-radius: 4px;\r\n      cursor: pointer;\r\n}\r\n\r\ndialog > form > div button:first-of-type {\r\n      color: #fff;\r\n      background-color: #FF8A08;\r\n}\r\n\r\ndialog > form > div {\r\n      display: flex;\r\n      gap: 12px;\r\n      justify-content: flex-end;\r\n      align-items: center;\r\n}\r\n\r\n#input-deadline {\r\n      width: 100%;\r\n}\r\n\r\nfieldset > label {\r\n      color: #FF8A08;\r\n}\r\n\r\nlabel[for*='marginal'] {\r\n      color: #1cd131;\r\n}\r\n\r\nlabel[for*='moderate'] {\r\n      color: #FFC000;\r\n}\r\n\r\nlabel[for*='critical'] {\r\n      color: #ff3030;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n      accent-color: #FF8A08;\r\n}\r\n\r\ninput[type=\"radio\"]:focus {\r\n      outline: none;\r\n      border: none;\r\n}\r\n\r\n/** Project Dialog **/\r\n#project-dialog, #editProjName-dialog {\r\n      background-color: #393E46;\r\n      border: none;\r\n      border-radius: 6px;\r\n      outline: 10px solid #FF8A08;  \r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      z-index: 999;\r\n}\r\n\r\nform#project-input {\r\n      padding: 24px;\r\n      display: grid;\r\n      grid-template-columns: auto 2fr;\r\n      grid-template-rows: 1fr 1fr; \r\n      gap: 12px;   \r\n      align-items: center;\r\n}\r\n\r\n/** Edit Dialog **/\r\n#edit-dialog .date-container {\r\n      font-size: 12px;\r\n      color: #FF8A08;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      gap: 2px;\r\n}\r\n\r\n.current-date {\r\n      color: #fff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/fonts/poppins-regular-webfont.woff":
/*!************************************************!*\
  !*** ./src/fonts/poppins-regular-webfont.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ab0a34c536b61f4aa28.woff";

/***/ }),

/***/ "./src/fonts/poppins-regular-webfont.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/poppins-regular-webfont.woff2 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1b28235f9b89bfc359e.woff2";

/***/ }),

/***/ "./src/images/checked.png":
/*!********************************!*\
  !*** ./src/images/checked.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca9d5b7063d85a8aeebc.png";

/***/ }),

/***/ "./src/images/unchecked.png":
/*!**********************************!*\
  !*** ./src/images/unchecked.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cada630a3c2309470910.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/style.css"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLG1DQUFtQztBQUNwRCxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLGlDQUFpQywrQkFBK0IsS0FBSyxvQkFBb0IseUNBQXlDLHNKQUFzSiw4QkFBOEIsNkJBQTZCLEtBQUssV0FBVyxpQ0FBaUMsb0JBQW9CLHFCQUFxQixnQ0FBZ0MsMkJBQTJCLGdFQUFnRSxLQUFLLGNBQWMsd0JBQXdCLHdCQUF3Qix3REFBd0QsS0FBSyxhQUFhLHNCQUFzQix1QkFBdUIsS0FBSyw0Q0FBNEMsNkJBQTZCLHdCQUF3QixrQ0FBa0MsOEJBQThCLDBCQUEwQixvQkFBb0IsS0FBSywyQkFBMkIsNEJBQTRCLEtBQUssd0JBQXdCLDRCQUE0QiwyQkFBMkIsMEJBQTBCLEtBQUssZ0NBQWdDLHVCQUF1Qiw0QkFBNEIsa0NBQWtDLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsS0FBSyw4QkFBOEIsNEJBQTRCLHVCQUF1QixLQUFLLHNDQUFzQyx5QkFBeUIsb0NBQW9DLGtDQUFrQyxxQ0FBcUMsS0FBSyx3Q0FBd0MsZ0NBQWdDLEtBQUssd0RBQXdELDJCQUEyQiw2QkFBNkIsMEJBQTBCLHNCQUFzQix5QkFBeUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIscUNBQXFDLGdDQUFnQywwQkFBMEIsS0FBSyx5Q0FBeUMsOEJBQThCLHlCQUF5QixxQ0FBcUMsS0FBSyxnQkFBZ0Isb0NBQW9DLHdCQUF3Qix3QkFBd0IsaUNBQWlDLEtBQUssbUNBQW1DLG9DQUFvQyw2QkFBNkIsc0JBQXNCLHdCQUF3Qix3QkFBd0IsaUNBQWlDLDhCQUE4QixvQkFBb0IsS0FBSyxnQ0FBZ0Msc0JBQXNCLG9DQUFvQyxzQkFBc0IsNEJBQTRCLDZCQUE2Qix5QkFBeUIsMkJBQTJCLGlCQUFpQixLQUFLLDRDQUE0QyxpQ0FBaUMsS0FBSyw0QkFBNEIsOEJBQThCLEtBQUssK0VBQStFLG9DQUFvQyw2QkFBNkIsd0JBQXdCLDBCQUEwQix5Q0FBeUMsOEJBQThCLHVDQUF1Qyx3Q0FBd0MsS0FBSyxpQ0FBaUMsNEJBQTRCLDJCQUEyQiwrQkFBK0IsOEJBQThCLDRCQUE0QiwwQkFBMEIsS0FBSywyQkFBMkIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsdUJBQXVCLHNCQUFzQiw2QkFBNkIsMERBQTBELGlDQUFpQyxzQ0FBc0MsS0FBSyxnREFBZ0Qsd0RBQXdELEtBQUssZ0RBQWdELHdCQUF3QixpQ0FBaUMsc0JBQXNCLHdCQUF3QiwyQ0FBMkMsNENBQTRDLEtBQUssb0NBQW9DLDRCQUE0QiwwQkFBMEIsMkJBQTJCLEtBQUsscUNBQXFDLHlCQUF5QiwyQkFBMkIsK0JBQStCLG1DQUFtQyw0QkFBNEIsNEJBQTRCLDZCQUE2QixLQUFLLGdCQUFnQiw4QkFBOEIsMEJBQTBCLDRCQUE0QixLQUFLLG9CQUFvQiwwQkFBMEIsS0FBSyx1Q0FBdUMsdUJBQXVCLGlDQUFpQyw2QkFBNkIsS0FBSyw4QkFBOEIseUJBQXlCLEtBQUssZ0NBQWdDLHlCQUF5QixLQUFLLG1DQUFtQyw2QkFBNkIsMEJBQTBCLEtBQUsscURBQXFELGdDQUFnQywwQkFBMEIsb0NBQW9DLHNCQUFzQix1QkFBdUIsZ0NBQWdDLHVCQUF1QiwwQ0FBMEMsMkNBQTJDLDBCQUEwQixLQUFLLDRCQUE0Qix5QkFBeUIsMEJBQTBCLEtBQUssd0RBQXdELDJCQUEyQix3QkFBd0IsNkJBQTZCLDBCQUEwQixzQkFBc0IsMkJBQTJCLG9CQUFvQiw4QkFBOEIscUNBQXFDLGdDQUFnQywwQkFBMEIsb0NBQW9DLEtBQUssbUNBQW1DLHFCQUFxQix5QkFBeUIsb0NBQW9DLEtBQUssK0RBQStELGlDQUFpQyxvQkFBb0IsMEJBQTBCLHFDQUFxQywwQkFBMEIsZ0JBQWdCLGlCQUFpQix3Q0FBd0Msb0JBQW9CLEtBQUssMEJBQTBCLGdEQUFnRCw4QkFBOEIsb0RBQW9ELHVDQUF1QywrQ0FBK0MsS0FBSyx5QkFBeUIsd0JBQXdCLHdCQUF3QiwwQ0FBMEMscURBQXFELHVCQUF1Qiw4QkFBOEIsS0FBSyxvQ0FBb0Msc0JBQXNCLGtDQUFrQyxvQ0FBb0MsNkJBQTZCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsS0FBSyxlQUFlLHlCQUF5QiwwQkFBMEIsMkJBQTJCLDRCQUE0QixLQUFLLGVBQWUsNkJBQTZCLHNCQUFzQixrQ0FBa0Msb0NBQW9DLDZCQUE2QiwwQkFBMEIsdUJBQXVCLEtBQUsseUNBQXlDLHFDQUFxQyxLQUFLLDREQUE0RCwwQkFBMEIsNEJBQTRCLEtBQUssb0NBQW9DLG9DQUFvQyx1QkFBdUIsNkJBQTZCLEtBQUssZ0JBQWdCLHlCQUF5QiwyQkFBMkIseUJBQXlCLEtBQUssNENBQTRDLDRCQUE0QixLQUFLLG9DQUFvQywyQkFBMkIsNEJBQTRCLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLEtBQUssa0RBQWtELHNCQUFzQixvQ0FBb0MsS0FBSyw2QkFBNkIsd0JBQXdCLG9CQUFvQixvQ0FBb0MsOEJBQThCLEtBQUsseUJBQXlCLHNCQUFzQixLQUFLLDBCQUEwQix5QkFBeUIsS0FBSyxnQ0FBZ0MseUJBQXlCLEtBQUssZ0NBQWdDLHlCQUF5QixLQUFLLGdDQUFnQyx5QkFBeUIsS0FBSywrQkFBK0IsZ0NBQWdDLEtBQUsscUNBQXFDLHdCQUF3Qix1QkFBdUIsS0FBSyx5RUFBeUUsb0NBQW9DLHVCQUF1Qiw2QkFBNkIsd0NBQXdDLDZCQUE2QixtQkFBbUIsb0JBQW9CLDJDQUEyQyx1QkFBdUIsS0FBSyw0QkFBNEIsd0JBQXdCLHdCQUF3QiwwQ0FBMEMsdUNBQXVDLHVCQUF1Qiw4QkFBOEIsS0FBSyw2REFBNkQsMEJBQTBCLHlCQUF5Qix3QkFBd0IsaUNBQWlDLGtDQUFrQyxtQkFBbUIsS0FBSyx1QkFBdUIsc0JBQXNCLEtBQUssdUJBQXVCO0FBQ3RwYTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hkdkMsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvcG9wcGlucy1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3BvcHBpbnMtcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy91bmNoZWNrZWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2hlY2tlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgICAgLS1yZWQ6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtcmVndWxhcic7XHJcbiAgICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuKiB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtcmVndWxhcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIG1pbm1heCgxNTBweCwgMjUwcHgpIDFmcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLyoqIEFTSURFICoqL1xyXG5cclxuLnVzZXItcHJvZmlsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4udXNlci1wcm9maWxlID4gcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXIgbGkge1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QgPiBsaSBwIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lciBsaTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjRkY4QTA4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQ2O1xyXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICMzOTNFNDY7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QgLmljb25zID4gKjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lciA+IGJ1dHRvbiNjcmVhdGUtcHJvamVjdC1idG57XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjMzkzRTQ2O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uI2NyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzOTNFNDY7XHJcbiAgICAgIGNvbG9yOiAjRkY4QTA4O1xyXG4gICAgICBvdXRsaW5lOiAwcHggc29saWQgI0ZGOEEwODtcclxufVxyXG5cclxuYXNpZGUgeyBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEEwODtcclxuICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyoqIE1BSU4gKiovXHJcblxyXG5tYWluIHsgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMjRweDtcclxufVxyXG5cclxubWFpbiA+IGgxI3Byb2plY3QtbmFtZSB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4QTA4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMS4ycmVtIDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgIHRvcDogMDtcclxufVxyXG5cclxuLyoqIFRBU0sgKiovXHJcblxyXG5kaXYudGFzay1saXN0IHsgXHJcbiAgICAgIHdpZHRoOiBtYXgoMzAwcHgsIDcwJSk7XHJcbn1cclxuXHJcbmRpdi50YXNrLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbn1cclxuXHJcbi8qKiBBLiBUYXNrIEhlYWQgKiovXHJcblxyXG5tYWluIC50YXNrLWxpc3QgLnRhc2stY29udGFpbmVyIC50YXNrLWhlYWR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjhBMDg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4udGFzay1oZWFkID4gLnRhc2stbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2stbmFtZTo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2staGVhZCA+IC50YXNrLW5hbWUuY2hlY2tlZDo6YmVmb3Jle1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XHJcbn1cclxuXHJcblxyXG4vKiogQi4gVGFzayBCb2R5ICoqL1xyXG4udGFzay1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDIwMHB4O1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyIDUwcHg7XHJcbn1cclxuXHJcbi50YXNrLWJvZHkgPiBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLnRhc2stYm9keSA+IHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgY29sb3I6ICNGRjhBMDg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4cHhcclxufVxyXG5cclxuLnRhc2stYm9keSA+IC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uaWNvbnMgPiAqIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay1ib2R5ID4gLmljb25zID4gKjpob3ZlciB7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaWNvbnMgPiAuZWRpdDpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjNkNCNEVFO1xyXG59XHJcblxyXG4uaWNvbnMgPiAuZGVsZXRlOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi50YXNrLWJvZHkgPiBwOmxhc3QtY2hpbGQge1xyXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcclxufVxyXG5cclxuLyoqIEMuIERyb3Bkb3duIEJ1dHRvbiAqKi9cclxuLmRyb3Bkb3duLWJ0biB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI4YjhiO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCAxMHB4IDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLWJ0biBzcGFuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyoqIEFERCBUQVNLIEJVVFRPTiAqKi9cclxuYnV0dG9uI2FkZC10YXNrLWJ0biB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiNGRjhBMDg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogOC41cHggMDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBvdXRsaW5lOiAycHggc29saWQgI0ZGOEEwODtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbiNhZGQtdGFzay1idG46aG92ZXIge1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBjb2xvcjogIzM5M0U0NjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEEwODtcclxufVxyXG5cclxuXHJcbi8qKiBUYXNrIERpYWxvZyAqKi9cclxuI3Rhc2stZGlhbG9nLCAjZWRpdC1kaWFsb2cge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQ2O1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgb3V0bGluZTogMTBweCBzb2xpZCAjRkY4QTA4OyAgXHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOiA1MCU7XHJcbiAgIGxlZnQ6IDUwJTtcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuZGlhbG9nOjpiYWNrZHJvcCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMy43cHgpO1xyXG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzLjdweCk7XHJcbn1cclxuXHJcbmZvcm0jdGFzay1pbnB1dCB7XHJcbiAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1MHB4IDFmciAxZnIgMWZyOyBcclxuICAgICAgZ2FwOiAxMnB4OyAgIFxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtI3Rhc2staW5wdXQgPiB0ZXh0YXJlYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGOEEwODtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgICAgY29sb3I6ICNGRjhBMDg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgICAgY29sb3Itc2NoZW1lOiBkYXJrO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjhBMDg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLCAgdGV4dGFyZWE6Zm9jdXNcclxue1xyXG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgI0ZGOEEwODtcclxufVxyXG5cclxuZm9ybSN0YXNrLWlucHV0ID4gbGFiZWxbZm9yKj1cImlucHV0LWRlc2NyaXB0aW9uXCJde1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG5mb3JtI3Rhc2staW5wdXQgPiBmaWVsZHNldCB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjhBMDg7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gICAgICBjb2xvcjogI0ZGOEEwODtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgcGFkZGluZzogMCA2cHg7XHJcbn1cclxuXHJcbmZvcm0jdGFzay1pbnB1dCA+IGZpZWxkc2V0ID4gbGFiZWwge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuZGlhbG9nID4gZm9ybSA+IGRpdiBidXR0b24ge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZGlhbG9nID4gZm9ybSA+IGRpdiBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4QTA4O1xyXG59XHJcblxyXG5kaWFsb2cgPiBmb3JtID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jaW5wdXQtZGVhZGxpbmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZmllbGRzZXQgPiBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjRkY4QTA4O1xyXG59XHJcblxyXG5sYWJlbFtmb3IqPSdtYXJnaW5hbCddIHtcclxuICAgICAgY29sb3I6ICMxY2QxMzE7XHJcbn1cclxuXHJcbmxhYmVsW2Zvcio9J21vZGVyYXRlJ10ge1xyXG4gICAgICBjb2xvcjogI0ZGQzAwMDtcclxufVxyXG5cclxubGFiZWxbZm9yKj0nY3JpdGljYWwnXSB7XHJcbiAgICAgIGNvbG9yOiAjZmYzMDMwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICBhY2NlbnQtY29sb3I6ICNGRjhBMDg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLyoqIFByb2plY3QgRGlhbG9nICoqL1xyXG4jcHJvamVjdC1kaWFsb2csICNlZGl0UHJvak5hbWUtZGlhbG9nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0NjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIG91dGxpbmU6IDEwcHggc29saWQgI0ZGOEEwODsgIFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbmZvcm0jcHJvamVjdC1pbnB1dCB7XHJcbiAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgXHJcbiAgICAgIGdhcDogMTJweDsgICBcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyoqIEVkaXQgRGlhbG9nICoqL1xyXG4jZWRpdC1kaWFsb2cgLmRhdGUtY29udGFpbmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogI0ZGOEEwODtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMnB4O1xyXG59XHJcblxyXG4uY3VycmVudC1kYXRlIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO01BQ00sb0JBQW9CO0FBQzFCOztBQUVBO01BQ00sOEJBQThCO01BQzlCO2lFQUMrRDtNQUMvRCxtQkFBbUI7TUFDbkIsa0JBQWtCO0FBQ3hCOztBQUVBO01BQ00sc0JBQXNCO01BQ3RCLFNBQVM7TUFDVCxVQUFVO01BQ1YscUJBQXFCO01BQ3JCLGdCQUFnQjtNQUNoQixxREFBcUQ7QUFDM0Q7O0FBRUE7TUFDTSxhQUFhO01BQ2IsYUFBYTtNQUNiLDZDQUE2QztBQUNuRDs7QUFFQTtNQUNNLFdBQVc7TUFDWCxZQUFZO0FBQ2xCOztBQUVBLFlBQVk7O0FBRVo7TUFDTSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFNBQVM7QUFDZjs7QUFFQTtNQUNNLGlCQUFpQjtBQUN2Qjs7QUFFQTtNQUNNLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsZUFBZTtBQUNyQjs7QUFFQTtNQUNNLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsZUFBZTs7TUFFZixhQUFhO01BQ2IsbUJBQW1CO0FBQ3pCOztBQUVB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RUE7TUFDTSxjQUFjO0FBQ3BCOztBQUVBO01BQ00sY0FBYztBQUNwQjs7QUFFQTtNQUNNLGNBQWM7QUFDcEI7O0FBRUE7TUFDTSxjQUFjO0FBQ3BCOztBQUVBO01BQ00scUJBQXFCO0FBQzNCOztBQUVBO01BQ00sYUFBYTtNQUNiLFlBQVk7QUFDbEI7O0FBRUEscUJBQXFCO0FBQ3JCO01BQ00seUJBQXlCO01BQ3pCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsMkJBQTJCO01BQzNCLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULGdDQUFnQztNQUNoQyxZQUFZO0FBQ2xCOztBQUVBO01BQ00sYUFBYTtNQUNiLGFBQWE7TUFDYiwrQkFBK0I7TUFDL0IsMkJBQTJCO01BQzNCLFNBQVM7TUFDVCxtQkFBbUI7QUFDekI7O0FBRUEsa0JBQWtCO0FBQ2xCO01BQ00sZUFBZTtNQUNmLGNBQWM7TUFDZCxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixRQUFRO0FBQ2Q7O0FBRUE7TUFDTSxXQUFXO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgICAtLXJlZDogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXJlZ3VsYXInO1xcclxcbiAgICAgIHNyYzogdXJsKCcuL2ZvbnRzL3BvcHBpbnMtcmVndWxhci13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICAgICAgICAgdXJsKCcuL2ZvbnRzL3BvcHBpbnMtcmVndWxhci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtcmVndWxhcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIG1pbm1heCgxNTBweCwgMjUwcHgpIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMzZweDtcXHJcXG4gICAgICBoZWlnaHQ6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi8qKiBBU0lERSAqKi9cXHJcXG5cXHJcXG4udXNlci1wcm9maWxlIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi51c2VyLXByb2ZpbGUgPiBwIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGFiZWwge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgICAgcGFkZGluZzogMTJweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyIGxpIHtcXHJcXG4gICAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0ID4gbGkgcCB7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxyXFxuICAgICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyIGxpOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogI0ZGOEEwODtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQ2O1xcclxcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjMzkzRTQ2O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IC5pY29ucyA+ICo6aG92ZXIge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lciA+IGJ1dHRvbiNjcmVhdGUtcHJvamVjdC1idG57XFxyXFxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjMzkzRTQ2O1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiNjcmVhdGUtcHJvamVjdC1idG46aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICMzOTNFNDY7XFxyXFxuICAgICAgY29sb3I6ICNGRjhBMDg7XFxyXFxuICAgICAgb3V0bGluZTogMHB4IHNvbGlkICNGRjhBMDg7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHsgXFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEEwODtcXHJcXG4gICAgICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIE1BSU4gKiovXFxyXFxuXFxyXFxubWFpbiB7IFxcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDY7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluID4gaDEjcHJvamVjdC1uYW1lIHtcXHJcXG4gICAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4QTA4O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIFRBU0sgKiovXFxyXFxuXFxyXFxuZGl2LnRhc2stbGlzdCB7IFxcclxcbiAgICAgIHdpZHRoOiBtYXgoMzAwcHgsIDcwJSk7XFxyXFxufVxcclxcblxcclxcbmRpdi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEEuIFRhc2sgSGVhZCAqKi9cXHJcXG5cXHJcXG5tYWluIC50YXNrLWxpc3QgLnRhc2stY29udGFpbmVyIC50YXNrLWhlYWR7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEEwODtcXHJcXG4gICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcXHJcXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZCA+IC50YXNrLW5hbWUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW5hbWU6OmJlZm9yZXtcXHJcXG4gICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL3VuY2hlY2tlZC5wbmcnKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZCA+IC50YXNrLW5hbWUuY2hlY2tlZDo6YmVmb3Jle1xcclxcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvY2hlY2tlZC5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyoqIEIuIFRhc2sgQm9keSAqKi9cXHJcXG4udGFzay1ib2R5IHtcXHJcXG4gICAgICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgY29sb3I6ICMwMDA7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAyMDBweDtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyIDUwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJvZHkgPiBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm9keSA+IHA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICBjb2xvcjogI0ZGOEEwODtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiA4cHhcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYm9keSA+IC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbnMge1xcclxcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbnMgPiAqIHtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJvZHkgPiAuaWNvbnMgPiAqOmhvdmVyIHtcXHJcXG4gICAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5pY29ucyA+IC5lZGl0OmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogIzZDQjRFRTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25zID4gLmRlbGV0ZTpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6ICNmZjAwMDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJvZHkgPiBwOmxhc3QtY2hpbGQge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi8qKiBDLiBEcm9wZG93biBCdXR0b24gKiovXFxyXFxuLmRyb3Bkb3duLWJ0biB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI4YjhiO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgICBwYWRkaW5nOiAycHggMCAxMHB4IDA7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tYnRuIHNwYW4ge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEFERCBUQVNLIEJVVFRPTiAqKi9cXHJcXG5idXR0b24jYWRkLXRhc2stYnRuIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgIGNvbG9yOiNGRjhBMDg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBwYWRkaW5nOiA4LjVweCAwO1xcclxcbiAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjRkY4QTA4O1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uI2FkZC10YXNrLWJ0bjpob3ZlciB7XFxyXFxuICAgICAgb3V0bGluZTogMDtcXHJcXG4gICAgICBjb2xvcjogIzM5M0U0NjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4QTA4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiogVGFzayBEaWFsb2cgKiovXFxyXFxuI3Rhc2stZGlhbG9nLCAjZWRpdC1kaWFsb2cge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDY7XFxyXFxuICAgYm9yZGVyOiBub25lO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICBvdXRsaW5lOiAxMHB4IHNvbGlkICNGRjhBMDg7ICBcXHJcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgdG9wOiA1MCU7XFxyXFxuICAgbGVmdDogNTAlO1xcclxcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyKTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzLjdweCk7XFxyXFxuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMy43cHgpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtI3Rhc2staW5wdXQge1xcclxcbiAgICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMmZyO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1MHB4IDFmciAxZnIgMWZyOyBcXHJcXG4gICAgICBnYXA6IDEycHg7ICAgXFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSN0YXNrLWlucHV0ID4gdGV4dGFyZWEge1xcclxcbiAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjhBMDg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgICAgY29sb3I6ICNGRjhBMDg7XFxyXFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGOEEwODtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsICB0ZXh0YXJlYTpmb2N1c1xcclxcbntcXHJcXG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgI0ZGOEEwODtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSN0YXNrLWlucHV0ID4gbGFiZWxbZm9yKj1cXFwiaW5wdXQtZGVzY3JpcHRpb25cXFwiXXtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0jdGFzay1pbnB1dCA+IGZpZWxkc2V0IHtcXHJcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY4QTA4O1xcclxcbiAgICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxufVxcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgICAgY29sb3I6ICNGRjhBMDg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwIDZweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSN0YXNrLWlucHV0ID4gZmllbGRzZXQgPiBsYWJlbCB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyA+IGZvcm0gPiBkaXYgYnV0dG9uIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cgPiBmb3JtID4gZGl2IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4QTA4O1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cgPiBmb3JtID4gZGl2IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGdhcDogMTJweDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dC1kZWFkbGluZSB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0ID4gbGFiZWwge1xcclxcbiAgICAgIGNvbG9yOiAjRkY4QTA4O1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbFtmb3IqPSdtYXJnaW5hbCddIHtcXHJcXG4gICAgICBjb2xvcjogIzFjZDEzMTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWxbZm9yKj0nbW9kZXJhdGUnXSB7XFxyXFxuICAgICAgY29sb3I6ICNGRkMwMDA7XFxyXFxufVxcclxcblxcclxcbmxhYmVsW2Zvcio9J2NyaXRpY2FsJ10ge1xcclxcbiAgICAgIGNvbG9yOiAjZmYzMDMwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgICBhY2NlbnQtY29sb3I6ICNGRjhBMDg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Zm9jdXMge1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogUHJvamVjdCBEaWFsb2cgKiovXFxyXFxuI3Byb2plY3QtZGlhbG9nLCAjZWRpdFByb2pOYW1lLWRpYWxvZyB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0NjtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgIG91dGxpbmU6IDEwcHggc29saWQgI0ZGOEEwODsgIFxcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtI3Byb2plY3QtaW5wdXQge1xcclxcbiAgICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMmZyO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgXFxyXFxuICAgICAgZ2FwOiAxMnB4OyAgIFxcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qKiBFZGl0IERpYWxvZyAqKi9cXHJcXG4jZWRpdC1kaWFsb2cgLmRhdGUtY29udGFpbmVyIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgY29sb3I6ICNGRjhBMDg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGdhcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1kYXRlIHtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciXSwic291cmNlUm9vdCI6IiJ9