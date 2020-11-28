(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Design-Arrange"],{

/***/ "./site/apps/Design/Arrange/arrange.md":
/*!*********************************************!*\
  !*** ./site/apps/Design/Arrange/arrange.md ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<p>The arrangement of components determines the basic visual experience of the page.</p>\\n<p>The arrangement scheme of web app suite ui is based on the principle of <code>50:50</code>, and we carry out a <code>50:50</code> design based on flexibility and consistency. Considering not only the flexibility of the arrangement of components, but also the consistency of the arrangement style, the arrangement position of some components is also limited accordingly.</p>\\n<h2 id=\\\"recommended-arrangement\\\">Recommended Arrangement</h2>\\n<div>\\n  <img width=\\\"750\\\" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/KK4B9S.jpg' style=\\\"border: 1px solid #cbd7dc\\\"/>\\n</div>\\n\\n<p>We divided the entire view except for the left navigation into five parts:</p>\\n<ol>\\n<li>Header</li>\\n<li>ToolBar</li>\\n<li>SideBar</li>\\n<li>MainContent</li>\\n<li>Footer</li>\\n</ol>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./site/apps/Design/Arrange/arrange.md?");

/***/ }),

/***/ "./site/apps/Design/Arrange/index.js":
/*!*******************************************!*\
  !*** ./site/apps/Design/Arrange/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _webapp_suite_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webapp-suite/ui */ \"./src/components/index.tsx\");\n/* harmony import */ var _webapp_suite_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webapp_suite_ui__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var widgets_Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./site/apps/config.js\");\n/* harmony import */ var _arrange_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrange.md */ \"./site/apps/Design/Arrange/arrange.md\");\n/* harmony import */ var _arrange_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_arrange_md__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar _default = /*#__PURE__*/function (_React$Component) {\n  _inherits(_default, _React$Component);\n\n  var _super = _createSuper(_default);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(_default, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"arrange\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_webapp_suite_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_webapp_suite_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        col: \"md-16\",\n        className: \"demo__left\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Markdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        html: _arrange_md__WEBPACK_IMPORTED_MODULE_4___default.a\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_webapp_suite_ui__WEBPACK_IMPORTED_MODULE_1__[\"BackToTop\"], _config__WEBPACK_IMPORTED_MODULE_3__[\"backToTop\"]));\n    }\n  }]);\n\n  return _default;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./site/apps/Design/Arrange/index.js?");

/***/ })

}]);