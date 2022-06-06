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

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Icon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar icon_scss_1 = __importDefault(__webpack_require__(/*! ./icon.scss */ \"./src/shared/Icon/icon.scss\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar EIcons;\r\n(function (EIcons) {\r\n    // warning = <WarningIcon/>,\r\n    // block = <BlockIcon/>,\r\n    // comments = <CommentsIcon/>,\r\n    // share = <ShareIcon/>,\r\n    // save = <SaveIcon/>,\r\n    EIcons[EIcons[\"warning\"] = 0] = \"warning\";\r\n    EIcons[EIcons[\"block\"] = 1] = \"block\";\r\n    EIcons[EIcons[\"comments\"] = 2] = \"comments\";\r\n    EIcons[EIcons[\"share\"] = 3] = \"share\";\r\n    EIcons[EIcons[\"save\"] = 4] = \"save\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nfunction Icon(props) {\r\n    var _a, _b, _c;\r\n    var name = props.name, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, descktopSize = props.descktopSize;\r\n    var classes = (0, classnames_1.default)(icon_scss_1.default[\"s\".concat(size)], (_a = {}, _a[icon_scss_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[icon_scss_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[icon_scss_1.default[\"d\".concat(descktopSize)]] = descktopSize, _c));\r\n    return (react_1.default.createElement(\"svg\", { className: classes },\r\n        \"() => \",\r\n        console.log(name)));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack://reactfoundation.v2/./src/shared/Icon/Icon.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a56326bc450672c2ec5e")
/******/ })();
/******/ 
/******/ }
);