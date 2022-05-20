"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereactfoundation_v2"]("main",{

/***/ "./src/shared/Dropdown/DropdownControls/DropdownControls.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/Dropdown/DropdownControls/DropdownControls.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.DropdownControls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\");\r\nvar dropdowncontrols_scss_1 = __importDefault(__webpack_require__(/*! ./dropdowncontrols.scss */ \"./src/shared/Dropdown/DropdownControls/dropdowncontrols.scss\"));\r\nfunction DropdownControls(_a) {\r\n    var button = _a.button, children = _a.children;\r\n    return (react_1.default.createElement(Dropdown_1.Dropdown, { button: button, listClass: dropdowncontrols_scss_1.default.dropdown__list },\r\n        children,\r\n        react_1.default.createElement(\"div\", { className: dropdowncontrols_scss_1.default.dropdown__close, onClick: function () { isDropdownOpen = false; } }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")));\r\n}\r\nexports.DropdownControls = DropdownControls;\r\n\n\n//# sourceURL=webpack://reactfoundation.v2/./src/shared/Dropdown/DropdownControls/DropdownControls.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6cd153456ad68017ed49")
/******/ })();
/******/ 
/******/ }
);