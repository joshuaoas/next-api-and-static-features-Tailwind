module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/matlock/matlockinfo.json":
/*!***************************************!*\
  !*** ./data/matlock/matlockinfo.json ***!
  \***************************************/
/*! exports provided: id, url, name, type, language, genres, status, runtime, premiered, officialSite, schedule, rating, weight, network, webChannel, externals, image, summary, updated, _links, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1748,\"url\":\"http://www.tvmaze.com/shows/1748/matlock\",\"name\":\"Matlock\",\"type\":\"Scripted\",\"language\":\"English\",\"genres\":[\"Drama\"],\"status\":\"Ended\",\"runtime\":60,\"premiered\":\"1986-03-03\",\"officialSite\":null,\"schedule\":{\"time\":\"\",\"days\":[]},\"rating\":{\"average\":7.6},\"weight\":0,\"network\":{\"id\":3,\"name\":\"ABC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"externals\":{\"tvrage\":4391,\"thetvdb\":73064,\"imdb\":\"tt0090481\"},\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/9/24437.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/9/24437.jpg\"},\"summary\":\"<p><b>Matlock </b>is a legal drama series starring Andy Griffith as defense attorney Ben Matlock - a Harvard-educated, fiery southerner who charges $100,000 a case to brilliantly defend his clients by finding the real killer.</p>\",\"updated\":1573490175,\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/shows/1748\"},\"previousepisode\":{\"href\":\"http://api.tvmaze.com/episodes/152020\"}}}");

/***/ }),

/***/ "./pages/api/matlock/index.js":
/*!************************************!*\
  !*** ./pages/api/matlock/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_matlock_matlockinfo_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/matlock/matlockinfo.json */ "./data/matlock/matlockinfo.json");
var _data_matlock_matlockinfo_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/matlock/matlockinfo.json */ "./data/matlock/matlockinfo.json", 1);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  return res.status(200).json(_data_matlock_matlockinfo_json__WEBPACK_IMPORTED_MODULE_0__);
});

/***/ }),

/***/ 9:
/*!******************************************!*\
  !*** multi ./pages/api/matlock/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshoas/Documents/_BATCAVE/_CODE/_My_GIT_Repos/next-api-and-static-features-Tailwind/pages/api/matlock/index.js */"./pages/api/matlock/index.js");


/***/ })

/******/ });
//# sourceMappingURL=matlock.js.map