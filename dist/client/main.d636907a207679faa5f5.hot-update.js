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

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\n// interface IPostsData {\r\n//     postsData?: [] // Пробовал json/ Array\r\n// }\r\nfunction usePostsData() {\r\n    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];\r\n    // const postsData = useContext(postsContext);\r\n    // const token = useContext(tokenContext);\r\n    (0, react_1.useEffect)(function () {\r\n        // axios.get('https://www.reddit.com/r/redditdev/best.json?limit=15&sr_detail=true')\r\n        axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var postsData = resp.data.data.children;\r\n            setPosts(postsData);\r\n        })\r\n            .catch(console.log);\r\n    }, [posts]);\r\n    return [posts];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack://reactfoundation.v2/./src/hooks/usePostsData.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("258bd4c40596914cc872")
/******/ })();
/******/ 
/******/ }
);