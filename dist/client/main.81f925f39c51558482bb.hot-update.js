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

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.DropdownControls = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\");\r\nvar dropdowncontrols_scss_1 = __importDefault(__webpack_require__(/*! ./dropdowncontrols.scss */ \"./src/shared/Dropdown/DropdownControls/dropdowncontrols.scss\"));\r\nfunction DropdownControls(_a) {\r\n    var button = _a.button, children = _a.children;\r\n    var _b = (0, react_1.useState)(false), isOpen = _b[0], setOpen = _b[1];\r\n    var handleOpen = function () { return console.log('123'); };\r\n    return (react_1.default.createElement(Dropdown_1.Dropdown, { button: button, isOpen: true, handleOpen: true, listClass: dropdowncontrols_scss_1.default.dropdown__list },\r\n        children,\r\n        react_1.default.createElement(\"div\", { className: dropdowncontrols_scss_1.default.dropdown__close, onClick: handleOpen }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")));\r\n}\r\nexports.DropdownControls = DropdownControls;\r\n\n\n//# sourceURL=webpack://reactfoundation.v2/./src/shared/Dropdown/DropdownControls/DropdownControls.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7155319d66254625fb5")
/******/ })();
/******/ 
/******/ }
);