webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ted/Desktop/next-bitcoin/components/Prices.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Prices = function Prices(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('USD'),\n      currency = _useState[0],\n      setCurrency = _useState[1];\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"list-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"li\", {\n    className: \"list-group-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Bitcoin rate for \", props.bpi.USD.description, \":\", ' ', __jsx(\"span\", {\n    className: \"badge badge-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, props.bpi.USD.code), ' ', __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, props.bpi.USD.rate))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(\"select\", {\n    className: \"form-control\",\n    onChange: function onChange(e) {\n      return setCurrency(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"option\", {\n    value: \"USD\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"USD\"), __jsx(\"option\", {\n    value: \"GBP\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"GBP\"), __jsx(\"option\", {\n    value: \"EUR\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"EUR\")));\n};\n\n_s(Prices, \"IMt9glJKuY0gCtznVFnjeGsjS3E=\");\n\n_c = Prices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\nvar _c;\n\n$RefreshReg$(_c, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsInByb3BzIiwidXNlU3RhdGUiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ2pCQyxRQURpQjtBQUFBLE1BQ1BDLFdBRE87O0FBR3hCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQ29CSCxLQUFLLENBQUNJLEdBQU4sQ0FBVUMsR0FBVixDQUFjQyxXQURsQyxPQUNnRCxHQURoRCxFQUVFO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDTixLQUFLLENBQUNJLEdBQU4sQ0FBVUMsR0FBVixDQUFjRSxJQUFyRCxDQUZGLEVBRW9FLEdBRnBFLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTUCxLQUFLLENBQUNJLEdBQU4sQ0FBVUMsR0FBVixDQUFjRyxJQUF2QixDQUhGLENBREYsQ0FERixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQVEsYUFBUyxFQUFDLGNBQWxCO0FBQWlDLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9OLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxTQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsRUFFRTtBQUFRLFNBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRixFQUdFO0FBQVEsU0FBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGLENBVEYsQ0FERjtBQWlCRCxDQXBCRDs7R0FBTVosTTs7S0FBQUEsTTtBQXNCU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ByaWNlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFByaWNlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKCdVU0QnKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZ3JvdXAnPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxuICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3Byb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259OnsnICd9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57cHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj57JyAnfVxuICAgICAgICAgIDxzdHJvbmc+e3Byb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVuY3koZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVVNEJz5VU0Q8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nR0JQJz5HQlA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nRVVSJz5FVVI8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})