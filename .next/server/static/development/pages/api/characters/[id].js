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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/matlock/matlockcast.json":
/*!***************************************!*\
  !*** ./data/matlock/matlockcast.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"person\":{\"id\":57542,\"url\":\"http://www.tvmaze.com/people/57542/andy-griffith\",\"name\":\"Andy Griffith\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1926-06-01\",\"deathday\":\"2012-07-03\",\"gender\":\"Male\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/9/24712.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/9/24712.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/57542\"}}},\"character\":{\"id\":103919,\"url\":\"http://www.tvmaze.com/characters/103919/matlock-ben-matlock\",\"name\":\"Ben Matlock\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/9/24438.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/9/24438.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103919\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":57543,\"url\":\"http://www.tvmaze.com/people/57543/kene-holiday\",\"name\":\"Kene Holiday\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1949-06-25\",\"deathday\":null,\"gender\":\"Male\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/74/187004.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/74/187004.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/57543\"}}},\"character\":{\"id\":103921,\"url\":\"http://www.tvmaze.com/characters/103921/matlock-tyler-hudson\",\"name\":\"Tyler Hudson\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/221/554010.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/221/554010.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103921\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":945,\"url\":\"http://www.tvmaze.com/people/945/linda-purl\",\"name\":\"Linda Purl\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1955-09-02\",\"deathday\":null,\"gender\":\"Female\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/2/6292.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/2/6292.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/945\"}}},\"character\":{\"id\":103920,\"url\":\"http://www.tvmaze.com/characters/103920/matlock-charlene-matlock\",\"name\":\"Charlene Matlock\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/221/554006.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/221/554006.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103920\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":25293,\"url\":\"http://www.tvmaze.com/people/25293/nancy-stafford\",\"name\":\"Nancy Stafford\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1954-06-05\",\"deathday\":null,\"gender\":\"Female\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/182/455507.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/182/455507.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/25293\"}}},\"character\":{\"id\":103922,\"url\":\"http://www.tvmaze.com/characters/103922/matlock-michelle-thomas\",\"name\":\"Michelle Thomas\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/221/554014.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/221/554014.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103922\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":57544,\"url\":\"http://www.tvmaze.com/people/57544/julie-sommars\",\"name\":\"Julie Sommars\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1940-04-20\",\"deathday\":null,\"gender\":\"Female\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/36/92451.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/36/92451.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/57544\"}}},\"character\":{\"id\":103924,\"url\":\"http://www.tvmaze.com/characters/103924/matlock-ada-julie-march\",\"name\":\"A.D.A. Julie March\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/221/554013.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/221/554013.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103924\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":46455,\"url\":\"http://www.tvmaze.com/people/46455/clarence-gilyard-jr\",\"name\":\"Clarence Gilyard, Jr.\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1955-12-24\",\"deathday\":null,\"gender\":\"Male\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/3/9696.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/3/9696.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/46455\"}}},\"character\":{\"id\":103925,\"url\":\"http://www.tvmaze.com/characters/103925/matlock-conrad-mcmasters\",\"name\":\"Conrad McMasters\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/221/554011.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/221/554011.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103925\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":49157,\"url\":\"http://www.tvmaze.com/people/49157/kari-lizer\",\"name\":\"Kari Lizer\",\"country\":null,\"birthday\":null,\"deathday\":null,\"gender\":null,\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/221/554007.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/221/554007.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/49157\"}}},\"character\":{\"id\":103923,\"url\":\"http://www.tvmaze.com/characters/103923/matlock-cassie-phillips\",\"name\":\"Cassie Phillips\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/221/554007.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/221/554007.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103923\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":57545,\"url\":\"http://www.tvmaze.com/people/57545/brynn-thayer\",\"name\":\"Brynn Thayer\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1949-10-04\",\"deathday\":null,\"gender\":\"Female\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/168/421325.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/168/421325.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/57545\"}}},\"character\":{\"id\":103926,\"url\":\"http://www.tvmaze.com/characters/103926/matlock-leanne-macintyre\",\"name\":\"Leanne MacIntyre\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/221/554008.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/221/554008.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103926\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":57546,\"url\":\"http://www.tvmaze.com/people/57546/carol-huston\",\"name\":\"Carol Huston\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1963-08-15\",\"deathday\":null,\"gender\":\"Female\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/127/317802.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/127/317802.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/57546\"}}},\"character\":{\"id\":103928,\"url\":\"http://www.tvmaze.com/characters/103928/matlock-jerri-stone\",\"name\":\"Jerri Stone\",\"image\":null,\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103928\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":57547,\"url\":\"http://www.tvmaze.com/people/57547/alice-hirson\",\"name\":\"Alice Hirson\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1929-03-10\",\"deathday\":null,\"gender\":\"Female\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/80/200663.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/80/200663.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/57547\"}}},\"character\":{\"id\":103929,\"url\":\"http://www.tvmaze.com/characters/103929/matlock-hazel\",\"name\":\"Hazel\",\"image\":null,\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103929\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":57548,\"url\":\"http://www.tvmaze.com/people/57548/lori-lethin\",\"name\":\"Lori Lethin\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1955-08-04\",\"deathday\":null,\"gender\":\"Female\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/88/221402.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/88/221402.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/57548\"}}},\"character\":{\"id\":103930,\"url\":\"http://www.tvmaze.com/characters/103930/matlock-charlene-matlock\",\"name\":\"Charlene Matlock\",\"image\":null,\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103930\"}}},\"self\":false,\"voice\":false},{\"person\":{\"id\":1614,\"url\":\"http://www.tvmaze.com/people/1614/daniel-roebuck\",\"name\":\"Daniel Roebuck\",\"country\":{\"name\":\"United States\",\"code\":\"US\",\"timezone\":\"America/New_York\"},\"birthday\":\"1963-03-04\",\"deathday\":null,\"gender\":\"Male\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/183/459659.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/183/459659.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/people/1614\"}}},\"character\":{\"id\":103927,\"url\":\"http://www.tvmaze.com/characters/103927/matlock-cliff-lewis\",\"name\":\"Cliff Lewis\",\"image\":{\"medium\":\"http://static.tvmaze.com/uploads/images/medium_portrait/221/554012.jpg\",\"original\":\"http://static.tvmaze.com/uploads/images/original_untouched/221/554012.jpg\"},\"_links\":{\"self\":{\"href\":\"http://api.tvmaze.com/characters/103927\"}}},\"self\":false,\"voice\":false}]");

/***/ }),

/***/ "./pages/api/characters/[id].js":
/*!**************************************!*\
  !*** ./pages/api/characters/[id].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_matlock_matlockcast_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/matlock/matlockcast.json */ "./data/matlock/matlockcast.json");
var _data_matlock_matlockcast_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/matlock/matlockcast.json */ "./data/matlock/matlockcast.json", 1);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const id = parseInt(req.query.id);
  const character = _data_matlock_matlockcast_json__WEBPACK_IMPORTED_MODULE_0__.filter(character => character.character.id === id)[0];
  return res.status(200).json(character);
});

/***/ }),

/***/ 5:
/*!********************************************!*\
  !*** multi ./pages/api/characters/[id].js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshoas/Documents/_BATCAVE/_CODE/_My_GIT_Repos/next-api-and-static-features-Tailwind/pages/api/characters/[id].js */"./pages/api/characters/[id].js");


/***/ })

/******/ });
//# sourceMappingURL=[id].js.map