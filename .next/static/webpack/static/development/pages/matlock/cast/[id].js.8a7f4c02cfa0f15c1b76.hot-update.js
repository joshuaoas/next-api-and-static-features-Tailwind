webpackHotUpdate("static/development/pages/matlock/cast/[id].js",{

/***/ "./pages/matlock/cast/[id].js":
/*!************************************!*\
  !*** ./pages/matlock/cast/[id].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PageHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/PageHead */ "./components/PageHead.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/joshoas/Documents/_BATCAVE/_CODE/_My_GIT_Repos/next-api-and-static-features-Tailwind/pages/matlock/cast/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 //import characters from "../../data/matlock/characters.json";

var Cast = function Cast(_ref) {
  var character = _ref.character;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(); //const character = characters[router.query.id];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_PageHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: character.person.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("div", {
    className: "container mx-auto px-6 py-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", {
    src: character.person.image.original,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("h3", {
    className: "text-lg leading-6 font-medium text-gray-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Role: ", character.character.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Birthdate: ", character.person.birthday), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Death: ", character.person.deathday))));
}; //export async function getStaticProps({ params }) {


Cast.getInitialProps = function _callee(_ref2) {
  var query, id, response, character;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          id = query.id;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:3000/api/characters/".concat(id)));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 7:
          character = _context.sent;
          console.log(character); //return { props: { episodes } };

          return _context.abrupt("return", {
            character: character
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Cast);

/***/ })

})
//# sourceMappingURL=[id].js.8a7f4c02cfa0f15c1b76.hot-update.js.map