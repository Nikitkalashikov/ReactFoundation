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

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar card_scss_1 = __importDefault(__webpack_require__(/*! ./card.scss */ \"./src/shared/CardsList/Card/card.scss\"));\r\nfunction Card() {\r\n    return (react_1.default.createElement(\"li\", { className: card_scss_1.default.card },\r\n        react_1.default.createElement(\"div\", { className: card_scss_1.default.textContent },\r\n            react_1.default.createElement(\"div\", { className: card_scss_1.default.metaData },\r\n                react_1.default.createElement(UserLink, null),\r\n                react_1.default.createElement(\"span\", { className: card_scss_1.default.crearedAt },\r\n                    react_1.default.createElement(\"span\", { className: card_scss_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E  \"),\r\n                    \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n            react_1.default.createElement(\"h2\", { className: card_scss_1.default.title },\r\n                react_1.default.createElement(\"a\", { href: \"\", className: card_scss_1.default.postLink }, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0434\\u043E\\u0432\\u0435\\u0440\\u0435\\u043D\\u043D\\u043E\\u0441\\u0442\\u0438 \\u0421\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0430\\u044F \\u0441\\u0442\\u0430\\u0442\\u044C\\u044F \\u0431\\u0443\\u0434\\u0435\\u0442 \\u043A\\u0443\\u0434\\u0430 \\u043A\\u043E\\u0440\\u043E\\u0447\\u0435 \\u0438\\u043B\\u0438 \\u0441\\u0442\\u0440\\u0430\\u043D\\u043D\\u0435\\u0435.\"))),\r\n        react_1.default.createElement(\"div\", { className: card_scss_1.default.preview },\r\n            react_1.default.createElement(\"img\", { src: \"https://cdn.dribbble.com/userupload/2671446/file/original-4383ec0f149e26c6354b62d0e5217b12.jpg\", alt: \"\", className: card_scss_1.default.previewImg })),\r\n        react_1.default.createElement(\"div\", { className: card_scss_1.default.menu },\r\n            react_1.default.createElement(\"button\", { className: card_scss_1.default.menuButton },\r\n                react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })))),\r\n        react_1.default.createElement(\"div\", { className: card_scss_1.default.controls },\r\n            react_1.default.createElement(\"div\", { className: card_scss_1.default.karmaCounter },\r\n                react_1.default.createElement(\"button\", { className: card_scss_1.default.up },\r\n                    react_1.default.createElement(\"svg\", { className: card_scss_1.default.up, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n                react_1.default.createElement(\"button\", { className: card_scss_1.default.karmaValue }, \"234\"),\r\n                react_1.default.createElement(\"button\", { className: card_scss_1.default.down },\r\n                    react_1.default.createElement(\"svg\", { className: card_scss_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })))),\r\n            react_1.default.createElement(\"button\", { className: card_scss_1.default.commentsButton },\r\n                react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n                react_1.default.createElement(\"span\", { className: card_scss_1.default.commentsNumber }, \"13\")),\r\n            react_1.default.createElement(\"div\", { className: card_scss_1.default.actions },\r\n                react_1.default.createElement(\"button\", { className: card_scss_1.default.shareButton },\r\n                    react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                        react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\r\n                react_1.default.createElement(\"button\", { className: card_scss_1.default.saveButton },\r\n                    react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                        react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" })))))));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack://reactfoundation.v2/./src/shared/CardsList/Card/Card.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("48c17456d19cfaf4af0e")
/******/ })();
/******/ 
/******/ }
);