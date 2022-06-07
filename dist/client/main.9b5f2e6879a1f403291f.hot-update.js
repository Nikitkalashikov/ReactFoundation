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

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nvar userblock_scss_1 = __importDefault(__webpack_require__(/*! ./userblock.scss */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.scss\"));\r\nvar AnonIcon_1 = __webpack_require__(/*! ../../../icons/AnonIcon */ \"./src/shared/icons/AnonIcon.tsx\");\r\nfunction UserBlock(_a) {\r\n    var avatarScr = _a.avatarScr, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_scss_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.avatarBox }, avatarScr\r\n            ? react_1.default.createElement(\"img\", { src: \"{avatarSrc\", alt: \"user avatar\", className: userblock_scss_1.default.avatarImage })\r\n            : react_1.default.createElement(AnonIcon_1.AnonIcon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.username },\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.gray99 }, username || 'Аноним'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack://reactfoundation.v2/./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e00f1ca99f0907df6e5b")
/******/ })();
/******/ 
/******/ }
);