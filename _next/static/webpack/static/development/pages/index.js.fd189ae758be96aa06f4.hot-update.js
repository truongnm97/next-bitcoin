webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ted/Desktop/next-bitcoin/components/Prices.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar Prices = function Prices(_ref) {\n  var currencies = _ref.currencies,\n      currency = _ref.currency,\n      setCurrency = _ref.setCurrency,\n      bpi = _ref.bpi;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, bpi && __jsx(\"ul\", {\n    className: \"list-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    className: \"list-group-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 11\n    }\n  }, \"Bitcoin rate for \", bpi.description, \":\", ' ', __jsx(\"span\", {\n    className: \"badge badge-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, bpi.code), \" \", __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 69\n    }\n  }, bpi.rate))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(\"select\", {\n    className: \"form-control\",\n    onChange: function onChange(e) {\n      return setCurrency(e.target.value);\n    },\n    value: currency,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, currencies.map(function (curr, index) {\n    return __jsx(\"option\", {\n      key: index,\n      value: curr.currency,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }\n    }, curr.currency);\n  })));\n};\n\n_c = Prices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\nvar _c;\n\n$RefreshReg$(_c, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmNpZXMiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwiYnBpIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImN1cnIiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZ0Q7QUFBQSxNQUE3Q0MsVUFBNkMsUUFBN0NBLFVBQTZDO0FBQUEsTUFBakNDLFFBQWlDLFFBQWpDQSxRQUFpQztBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDN0QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEdBQUcsSUFDRjtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUNvQkEsR0FBRyxDQUFDQyxXQUR4QixPQUNzQyxHQUR0QyxFQUVFO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDRCxHQUFHLENBQUNFLElBQTNDLENBRkYsT0FFMEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTRixHQUFHLENBQUNHLElBQWIsQ0FGMUQsQ0FERixDQUZKLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9MLFdBQVcsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQUZaO0FBR0UsU0FBSyxFQUFFUixRQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0QsVUFBVSxDQUFDVSxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDZDtBQUFRLFNBQUcsRUFBRUEsS0FBYjtBQUFvQixXQUFLLEVBQUVELElBQUksQ0FBQ1YsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVSxJQUFJLENBQUNWLFFBRFIsQ0FEYztBQUFBLEdBQWYsQ0FKSCxDQVZGLENBREY7QUF1QkQsQ0F4QkQ7O0tBQU1GLE07QUEwQlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QcmljZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcmljZXMgPSAoeyBjdXJyZW5jaWVzLCBjdXJyZW5jeSwgc2V0Q3VycmVuY3ksIGJwaSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHticGkgJiYgKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7YnBpLmRlc2NyaXB0aW9ufTp7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57YnBpLmNvZGV9PC9zcGFuPiA8c3Ryb25nPnticGkucmF0ZX08L3N0cm9uZz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICAgIDxiciAvPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW5jeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHZhbHVlPXtjdXJyZW5jeX0+XG4gICAgICAgIHtjdXJyZW5jaWVzLm1hcCgoY3VyciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtjdXJyLmN1cnJlbmN5fT5cbiAgICAgICAgICAgIHtjdXJyLmN1cnJlbmN5fVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})