webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ted/Desktop/next-bitcoin/components/Prices.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar Prices = function Prices(_ref) {\n  var currencies = _ref.currencies,\n      currency = _ref.currency,\n      setCurrency = _ref.setCurrency,\n      bpi = _ref.bpi;\n  var _bpi$currency = bpi[currency],\n      description = _bpi$currency.description,\n      code = _bpi$currency.code,\n      rate = _bpi$currency.rate;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"list-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }, __jsx(\"li\", {\n    className: \"list-group-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, \"Bitcoin rate for \", description, \": \", __jsx(\"span\", {\n    className: \"badge badge-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 43\n    }\n  }, code), ' ', __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }\n  }, rate))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"select\", {\n    className: \"form-control\",\n    onChange: function onChange(e) {\n      return setCurrency(e.target.value);\n    },\n    value: currency,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, currencies.map(function (curr, index) {\n    return __jsx(\"option\", {\n      key: index,\n      value: curr.currency,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    }, curr.currency);\n  })));\n};\n\n_c = Prices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\nvar _c;\n\n$RefreshReg$(_c, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmNpZXMiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwiYnBpIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImN1cnIiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZ0Q7QUFBQSxNQUE3Q0MsVUFBNkMsUUFBN0NBLFVBQTZDO0FBQUEsTUFBakNDLFFBQWlDLFFBQWpDQSxRQUFpQztBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFBQSxzQkFDekJBLEdBQUcsQ0FBQ0YsUUFBRCxDQURzQjtBQUFBLE1BQ3JERyxXQURxRCxpQkFDckRBLFdBRHFEO0FBQUEsTUFDeENDLElBRHdDLGlCQUN4Q0EsSUFEd0M7QUFBQSxNQUNsQ0MsSUFEa0MsaUJBQ2xDQSxJQURrQztBQUU3RCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUNvQkYsV0FEcEIsUUFDa0M7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNDLElBQXZDLENBRGxDLEVBQ3NGLEdBRHRGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTQyxJQUFULENBRkYsQ0FERixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9MLFdBQVcsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQUZaO0FBR0UsU0FBSyxFQUFFUixRQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0QsVUFBVSxDQUFDVSxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDZDtBQUFRLFNBQUcsRUFBRUEsS0FBYjtBQUFvQixXQUFLLEVBQUVELElBQUksQ0FBQ1YsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVSxJQUFJLENBQUNWLFFBRFIsQ0FEYztBQUFBLEdBQWYsQ0FKSCxDQVJGLENBREY7QUFxQkQsQ0F2QkQ7O0tBQU1GLE07QUF5QlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QcmljZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcmljZXMgPSAoeyBjdXJyZW5jaWVzLCBjdXJyZW5jeSwgc2V0Q3VycmVuY3ksIGJwaSB9KSA9PiB7XG4gIGNvbnN0IHsgZGVzY3JpcHRpb24sIGNvZGUsIHJhdGUgfSA9IGJwaVtjdXJyZW5jeV1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdC1ncm91cCc+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+XG4gICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7ZGVzY3JpcHRpb259OiA8c3BhbiBjbGFzc05hbWU9J2JhZGdlIGJhZGdlLXByaW1hcnknPntjb2RlfTwvc3Bhbj57JyAnfVxuICAgICAgICAgIDxzdHJvbmc+e3JhdGV9PC9zdHJvbmc+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGJyIC8+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgdmFsdWU9e2N1cnJlbmN5fT5cbiAgICAgICAge2N1cnJlbmNpZXMubWFwKChjdXJyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2N1cnIuY3VycmVuY3l9PlxuICAgICAgICAgICAge2N1cnIuY3VycmVuY3l9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Prices */ \"./components/Prices.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ted/Desktop/next-bitcoin/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('USD'),\n      currency = _useState[0],\n      setCurrency = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      bpi = _useState2[0],\n      setBpi = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var getData = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var res, data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.coindesk.com/v1/bpi/currentprice/\".concat(currency, \".json\"));\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                data = _context.sent;\n                return _context.abrupt(\"return\", data);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    setBpi(getData);\n  }, []);\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Welcome to Next Bitcoin\"), __jsx(_components_Prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    bpi: bpi,\n    currencies: props.currencies,\n    currency: currency,\n    setCurrency: setCurrency,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Index, \"RGcdnnA6+hJ1fY7Gp4i1gjG8urU=\");\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n  var curr, dataCurr;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json');\n\n        case 2:\n          curr = _context2.sent;\n          _context2.next = 5;\n          return curr.json();\n\n        case 5:\n          dataCurr = _context2.sent;\n          return _context2.abrupt(\"return\", {\n            currencies: dataCurr\n          });\n\n        case 7:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _callee2);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJicGkiLCJzZXRCcGkiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImN1cnJlbmNpZXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdXJyIiwiZGF0YUN1cnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxLQUFELENBRGpCO0FBQUEsTUFDaEJDLFFBRGdCO0FBQUEsTUFDTkMsV0FETTs7QUFBQSxtQkFFREYsc0RBQVEsQ0FBQyxFQUFELENBRlA7QUFBQSxNQUVoQkcsR0FGZ0I7QUFBQSxNQUVYQyxNQUZXOztBQUl2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsT0FBTztBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0lDLEtBQUssd0RBQWlETixRQUFqRCxXQURUOztBQUFBO0FBQ1JPLG1CQURRO0FBQUE7QUFBQSx1QkFFS0EsR0FBRyxDQUFDQyxJQUFKLEVBRkw7O0FBQUE7QUFFUkMsb0JBRlE7QUFBQSxpREFHUEEsSUFITzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFQSixPQUFPO0FBQUE7QUFBQTtBQUFBLE9BQWI7O0FBS0FGLFVBQU0sQ0FBQ0UsT0FBRCxDQUFOO0FBQ0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsRUFFRSxNQUFDLDBEQUFEO0FBQ0UsT0FBRyxFQUFFSCxHQURQO0FBRUUsY0FBVSxFQUFFSixLQUFLLENBQUNZLFVBRnBCO0FBR0UsWUFBUSxFQUFFVixRQUhaO0FBSUUsZUFBVyxFQUFFQyxXQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREY7QUFhRCxDQTFCRDs7R0FBTUosSzs7S0FBQUEsSztBQTRCTkEsS0FBSyxDQUFDYyxlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNITCxLQUFLLENBQUMsMkRBQUQsQ0FERjs7QUFBQTtBQUNoQk0sY0FEZ0I7QUFBQTtBQUFBLGlCQUVDQSxJQUFJLENBQUNKLElBQUwsRUFGRDs7QUFBQTtBQUVoQkssa0JBRmdCO0FBQUEsNENBSWY7QUFDTEgsc0JBQVUsRUFBRUc7QUFEUCxXQUplOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBU2VoQixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuaW1wb3J0IFByaWNlcyBmcm9tICcuLi9jb21wb25lbnRzL1ByaWNlcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoJ1VTRCcpXG4gIGNvbnN0IFticGksIHNldEJwaV0gPSB1c2VTdGF0ZSh7fSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UvJHtjdXJyZW5jeX0uanNvbmApXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gICAgc2V0QnBpKGdldERhdGEpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIE5leHQgQml0Y29pbjwvaDE+XG4gICAgICAgIDxQcmljZXNcbiAgICAgICAgICBicGk9e2JwaX1cbiAgICAgICAgICBjdXJyZW5jaWVzPXtwcm9wcy5jdXJyZW5jaWVzfVxuICAgICAgICAgIGN1cnJlbmN5PXtjdXJyZW5jeX1cbiAgICAgICAgICBzZXRDdXJyZW5jeT17c2V0Q3VycmVuY3l9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGN1cnIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9zdXBwb3J0ZWQtY3VycmVuY2llcy5qc29uJylcbiAgY29uc3QgZGF0YUN1cnIgPSBhd2FpdCBjdXJyLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgY3VycmVuY2llczogZGF0YUN1cnIsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})