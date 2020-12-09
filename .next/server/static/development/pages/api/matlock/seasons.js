module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/matlock/matlockseasons.json":
/*!******************************************!*\
  !*** ./data/matlock/matlockseasons.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":6568,\"url\":\"http://www.tvmaze.com/seasons/6568/matlock-season-1\",\"number\":1,\"name\":\"\",\"episodeOrder\":null,\"premiereDate\":\"1986-03-03\",\"endDate\":\"1987-05-12\",\"network\":{\"id\":1,\"name\":\"NBC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"image\":null,\"summary\":\"\",\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/seasons/6568\"}}},{\"id\":6569,\"url\":\"http://www.tvmaze.com/seasons/6569/matlock-season-2\",\"number\":2,\"name\":\"\",\"episodeOrder\":null,\"premiereDate\":\"1987-09-22\",\"endDate\":\"1988-05-03\",\"network\":{\"id\":1,\"name\":\"NBC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"image\":null,\"summary\":\"\",\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/seasons/6569\"}}},{\"id\":6570,\"url\":\"http://www.tvmaze.com/seasons/6570/matlock-season-3\",\"number\":3,\"name\":\"\",\"episodeOrder\":null,\"premiereDate\":\"1988-11-29\",\"endDate\":\"1989-05-16\",\"network\":{\"id\":1,\"name\":\"NBC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"image\":null,\"summary\":\"\",\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/seasons/6570\"}}},{\"id\":6571,\"url\":\"http://www.tvmaze.com/seasons/6571/matlock-season-4\",\"number\":4,\"name\":\"\",\"episodeOrder\":null,\"premiereDate\":\"1989-09-19\",\"endDate\":\"1990-05-08\",\"network\":{\"id\":1,\"name\":\"NBC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"image\":null,\"summary\":\"\",\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/seasons/6571\"}}},{\"id\":6572,\"url\":\"http://www.tvmaze.com/seasons/6572/matlock-season-5\",\"number\":5,\"name\":\"\",\"episodeOrder\":null,\"premiereDate\":\"1990-09-18\",\"endDate\":\"1991-04-30\",\"network\":{\"id\":1,\"name\":\"NBC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"image\":null,\"summary\":\"\",\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/seasons/6572\"}}},{\"id\":6573,\"url\":\"http://www.tvmaze.com/seasons/6573/matlock-season-6\",\"number\":6,\"name\":\"\",\"episodeOrder\":null,\"premiereDate\":\"1991-10-18\",\"endDate\":\"1992-05-08\",\"network\":{\"id\":1,\"name\":\"NBC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"image\":null,\"summary\":\"\",\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/seasons/6573\"}}},{\"id\":6574,\"url\":\"http://www.tvmaze.com/seasons/6574/matlock-season-7\",\"number\":7,\"name\":\"\",\"episodeOrder\":null,\"premiereDate\":\"1992-11-05\",\"endDate\":\"1993-05-06\",\"network\":{\"id\":3,\"name\":\"ABC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"image\":null,\"summary\":\"\",\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/seasons/6574\"}}},{\"id\":6575,\"url\":\"http://www.tvmaze.com/seasons/6575/matlock-season-8\",\"number\":8,\"name\":\"\",\"episodeOrder\":null,\"premiereDate\":\"1993-09-23\",\"endDate\":\"1994-05-19\",\"network\":{\"id\":3,\"name\":\"ABC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"image\":null,\"summary\":\"\",\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/seasons/6575\"}}},{\"id\":6576,\"url\":\"http://www.tvmaze.com/seasons/6576/matlock-season-9\",\"number\":9,\"name\":\"\",\"episodeOrder\":null,\"premiereDate\":\"1994-10-13\",\"endDate\":\"1995-05-07\",\"network\":{\"id\":3,\"name\":\"ABC\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"}},\"webChannel\":null,\"image\":null,\"summary\":\"\",\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/seasons/6576\"}}}]");

/***/ }),

/***/ "./pages/api/matlock/seasons/index.js":
/*!********************************************!*\
  !*** ./pages/api/matlock/seasons/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_matlock_matlockseasons_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/matlock/matlockseasons.json */ "./data/matlock/matlockseasons.json");
var _data_matlock_matlockseasons_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../data/matlock/matlockseasons.json */ "./data/matlock/matlockseasons.json", 1);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  return res.status(200).json(_data_matlock_matlockseasons_json__WEBPACK_IMPORTED_MODULE_0__);
});

/***/ }),

/***/ 8:
/*!**************************************************!*\
  !*** multi ./pages/api/matlock/seasons/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshoas/Documents/_BATCAVE/_CODE/_My_GIT_Repos/next-api-and-static-features-Tailwind/pages/api/matlock/seasons/index.js */"./pages/api/matlock/seasons/index.js");


/***/ })

/******/ });
//# sourceMappingURL=seasons.js.map