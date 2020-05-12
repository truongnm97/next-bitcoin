webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Prices */ \"./components/Prices.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ted/Desktop/next-bitcoin/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('USD'),\n      currency = _useState[0],\n      setCurrency = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      bpi = _useState2[0],\n      setBpi = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var getData = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var res, data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.coindesk.com/v1/bpi/currentprice/\".concat(currency, \".json\"));\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                data = _context.sent;\n                setBpi(data);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getData();\n  }, []);\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Welcome to Next Bitcoin\"), bpi && __jsx(_components_Prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    bpi: bpi,\n    currencies: props.currencies,\n    currency: currency,\n    setCurrency: setCurrency,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(Index, \"nh8XGYXCm/ufe6c5K5+9mlwFWak=\");\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n  var curr, dataCurr;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json');\n\n        case 2:\n          curr = _context2.sent;\n          _context2.next = 5;\n          return curr.json();\n\n        case 5:\n          dataCurr = _context2.sent;\n          return _context2.abrupt(\"return\", {\n            currencies: dataCurr\n          });\n\n        case 7:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _callee2);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJicGkiLCJzZXRCcGkiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImN1cnJlbmNpZXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdXJyIiwiZGF0YUN1cnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxLQUFELENBRGpCO0FBQUEsTUFDaEJDLFFBRGdCO0FBQUEsTUFDTkMsV0FETTs7QUFBQSxtQkFFREYsc0RBQVEsQ0FBQyxJQUFELENBRlA7QUFBQSxNQUVoQkcsR0FGZ0I7QUFBQSxNQUVYQyxNQUZXOztBQUl2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsT0FBTztBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0lDLEtBQUssd0RBQWlETixRQUFqRCxXQURUOztBQUFBO0FBQ1JPLG1CQURRO0FBQUE7QUFBQSx1QkFFS0EsR0FBRyxDQUFDQyxJQUFKLEVBRkw7O0FBQUE7QUFFUkMsb0JBRlE7QUFHZE4sc0JBQU0sQ0FBQ00sSUFBRCxDQUFOOztBQUhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVBKLE9BQU87QUFBQTtBQUFBO0FBQUEsT0FBYjs7QUFNQUEsV0FBTztBQUNSLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLEVBRUdILEdBQUcsSUFDRixNQUFDLDBEQUFEO0FBQ0UsT0FBRyxFQUFFQSxHQURQO0FBRUUsY0FBVSxFQUFFSixLQUFLLENBQUNZLFVBRnBCO0FBR0UsWUFBUSxFQUFFVixRQUhaO0FBSUUsZUFBVyxFQUFFQyxXQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURGLENBREY7QUFlRCxDQTdCRDs7R0FBTUosSzs7S0FBQUEsSztBQStCTkEsS0FBSyxDQUFDYyxlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNITCxLQUFLLENBQUMsMkRBQUQsQ0FERjs7QUFBQTtBQUNoQk0sY0FEZ0I7QUFBQTtBQUFBLGlCQUVDQSxJQUFJLENBQUNKLElBQUwsRUFGRDs7QUFBQTtBQUVoQkssa0JBRmdCO0FBQUEsNENBSWY7QUFDTEgsc0JBQVUsRUFBRUc7QUFEUCxXQUplOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBU2VoQixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuaW1wb3J0IFByaWNlcyBmcm9tICcuLi9jb21wb25lbnRzL1ByaWNlcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoJ1VTRCcpXG4gIGNvbnN0IFticGksIHNldEJwaV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS8ke2N1cnJlbmN5fS5qc29uYClcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICBzZXRCcGkoZGF0YSlcbiAgICB9XG5cbiAgICBnZXREYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gTmV4dCBCaXRjb2luPC9oMT5cbiAgICAgICAge2JwaSAmJiAoXG4gICAgICAgICAgPFByaWNlc1xuICAgICAgICAgICAgYnBpPXticGl9XG4gICAgICAgICAgICBjdXJyZW5jaWVzPXtwcm9wcy5jdXJyZW5jaWVzfVxuICAgICAgICAgICAgY3VycmVuY3k9e2N1cnJlbmN5fVxuICAgICAgICAgICAgc2V0Q3VycmVuY3k9e3NldEN1cnJlbmN5fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGN1cnIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9zdXBwb3J0ZWQtY3VycmVuY2llcy5qc29uJylcbiAgY29uc3QgZGF0YUN1cnIgPSBhd2FpdCBjdXJyLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgY3VycmVuY2llczogZGF0YUN1cnIsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})