webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Prices */ \"./components/Prices.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ted/Desktop/next-bitcoin/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('USD'),\n      currency = _useState[0],\n      setCurrency = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      bpi = _useState2[0],\n      setBpi = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var getData = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var res, data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.coindesk.com/v1/bpi/currentprice/\".concat(currency, \".json\"));\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                data = _context.sent;\n                return _context.abrupt(\"return\", data);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    setBpi(function () {\n      return getData();\n    });\n  }, []);\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Welcome to Next Bitcoin\"), bpi));\n};\n\n_s(Index, \"RGcdnnA6+hJ1fY7Gp4i1gjG8urU=\");\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n  var curr, dataCurr;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json');\n\n        case 2:\n          curr = _context2.sent;\n          _context2.next = 5;\n          return curr.json();\n\n        case 5:\n          dataCurr = _context2.sent;\n          return _context2.abrupt(\"return\", {\n            currencies: dataCurr\n          });\n\n        case 7:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _callee2);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJicGkiLCJzZXRCcGkiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImdldEluaXRpYWxQcm9wcyIsImN1cnIiLCJkYXRhQ3VyciIsImN1cnJlbmNpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxLQUFELENBRGpCO0FBQUEsTUFDaEJDLFFBRGdCO0FBQUEsTUFDTkMsV0FETTs7QUFBQSxtQkFFREYsc0RBQVEsQ0FBQyxFQUFELENBRlA7QUFBQSxNQUVoQkcsR0FGZ0I7QUFBQSxNQUVYQyxNQUZXOztBQUl2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsT0FBTztBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0lDLEtBQUssd0RBQWlETixRQUFqRCxXQURUOztBQUFBO0FBQ1JPLG1CQURRO0FBQUE7QUFBQSx1QkFFS0EsR0FBRyxDQUFDQyxJQUFKLEVBRkw7O0FBQUE7QUFFUkMsb0JBRlE7QUFBQSxpREFHUEEsSUFITzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFQSixPQUFPO0FBQUE7QUFBQTtBQUFBLE9BQWI7O0FBS0FGLFVBQU0sQ0FBQztBQUFBLGFBQU1FLE9BQU8sRUFBYjtBQUFBLEtBQUQsQ0FBTjtBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLEVBRUdILEdBRkgsQ0FERixDQURGO0FBZ0JELENBN0JEOztHQUFNTCxLOztLQUFBQSxLO0FBK0JOQSxLQUFLLENBQUNhLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0hKLEtBQUssQ0FBQywyREFBRCxDQURGOztBQUFBO0FBQ2hCSyxjQURnQjtBQUFBO0FBQUEsaUJBRUNBLElBQUksQ0FBQ0gsSUFBTCxFQUZEOztBQUFBO0FBRWhCSSxrQkFGZ0I7QUFBQSw0Q0FJZjtBQUNMQyxzQkFBVSxFQUFFRDtBQURQLFdBSmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFTZWYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmltcG9ydCBQcmljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9QcmljZXMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKCdVU0QnKVxuICBjb25zdCBbYnBpLCBzZXRCcGldID0gdXNlU3RhdGUoe30pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLyR7Y3VycmVuY3l9Lmpzb25gKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICAgIHNldEJwaSgoKSA9PiBnZXREYXRhKCkpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIE5leHQgQml0Y29pbjwvaDE+XG4gICAgICAgIHticGl9XG4gICAgICAgIHsvKiB7YnBpICYmIChcbiAgICAgICAgICA8UHJpY2VzXG4gICAgICAgICAgICBicGk9e2JwaX1cbiAgICAgICAgICAgIGN1cnJlbmNpZXM9e3Byb3BzLmN1cnJlbmNpZXN9XG4gICAgICAgICAgICBjdXJyZW5jeT17Y3VycmVuY3l9XG4gICAgICAgICAgICBzZXRDdXJyZW5jeT17c2V0Q3VycmVuY3l9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX0gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGN1cnIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9zdXBwb3J0ZWQtY3VycmVuY2llcy5qc29uJylcbiAgY29uc3QgZGF0YUN1cnIgPSBhd2FpdCBjdXJyLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgY3VycmVuY2llczogZGF0YUN1cnIsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})