(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Design-Color-Palette"],{

/***/ "./site/apps/Design/Color/Palette.js":
/*!*******************************************!*\
  !*** ./site/apps/Design/Color/Palette.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Palette; });\n/* harmony import */ var _webapp_suite_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webapp-suite/ui */ \"./src/components/index.tsx\");\n/* harmony import */ var _webapp_suite_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_webapp_suite_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/**\n * ant-design v3.10.4\n * https://github.com/ant-design/ant-design\n * Copyright (c) 2015-present Alipay.com, https://www.alipay.com/, MIT LICENSE\n */\n\n\n\n\n\nvar rgbToHex = function rgbToHex(rgbString) {\n  var rgb = rgbString.match(/\\d+/g);\n  var r = parseInt(rgb[0], 10).toString(16);\n  var g = parseInt(rgb[1], 10).toString(16);\n  var b = parseInt(rgb[2], 10).toString(16);\n  r = r.length === 1 ? \"0\".concat(r) : r;\n  g = g.length === 1 ? \"0\".concat(g) : g;\n  b = b.length === 1 ? \"0\".concat(b) : b;\n  return \"#\".concat(r).concat(g).concat(b);\n};\n\nvar Palette = /*#__PURE__*/function (_React$Component) {\n  _inherits(Palette, _React$Component);\n\n  var _super = _createSuper(Palette);\n\n  function Palette() {\n    _classCallCheck(this, Palette);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Palette, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this = this;\n\n      this.hexColors = {};\n      Object.keys(this.colorNodes).forEach(function (key) {\n        var computedColor = getComputedStyle(_this.colorNodes[key])['background-color'];\n\n        if (computedColor.indexOf('rgba') >= 0) {\n          _this.hexColors[key] = computedColor;\n        } else {\n          _this.hexColors[key] = rgbToHex(computedColor);\n        }\n      });\n      this.forceUpdate();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      this.colorNodes = this.colorNodes || {};\n      var _this$props = this.props,\n          showTitle = _this$props.showTitle,\n          direction = _this$props.direction,\n          _this$props$color = _this$props.color,\n          name = _this$props$color.name,\n          english = _this$props$color.english;\n      var className = direction === 'horizontal' ? 'color-palette-horizontal' : 'color-palette';\n      var colors = [];\n      var colorNameMap = {\n        3: '-lightest',\n        4: '-lighter',\n        5: '-light',\n        6: '',\n        7: '-dark',\n        8: '-darker',\n        9: '-darkest'\n      };\n      var colorName = english;\n\n      var _loop = function _loop(i) {\n        var colorText = \"\".concat(name).concat(colorNameMap[i]);\n        colors.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          text: _this2.hexColors ? _this2.hexColors[colorText] : '',\n          onCopy: function onCopy() {\n            return _webapp_suite_ui__WEBPACK_IMPORTED_MODULE_0__[\"notification\"].success(\"@ui-color-\".concat(colorText, \" copied: \").concat(_this2.hexColors[colorText]), 2000);\n          },\n          key: colorText\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          key: i,\n          ref: function ref(node) {\n            _this2.colorNodes[\"\".concat(name).concat(colorNameMap[i])] = node;\n          },\n          className: \"main-color-item palette-\".concat(name, \"-\").concat(i),\n          style: {\n            color: (name === 'slate' ? i > 2 : i > 5) ? '#fff' : 'unset'\n          },\n          title: \"click to copy color\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n          className: \"main-color-text\"\n        }, colorText), _this2.hexColors ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n          className: \"main-color-value\"\n        }, _this2.hexColors[colorText]) : null)));\n      };\n\n      for (var i = 3; i <= 9; i += 1) {\n        _loop(i);\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: className\n      }, showTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"color-title\"\n      }, colorName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"main-color\"\n      }, colors));\n    }\n  }]);\n\n  return Palette;\n}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);\n\n\nPalette.propTypes = {\n  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  showTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n\n//# sourceURL=webpack:///./site/apps/Design/Color/Palette.js?");

/***/ })

}]);