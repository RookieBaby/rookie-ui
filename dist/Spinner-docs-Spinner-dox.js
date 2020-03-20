(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Spinner-docs-Spinner-dox"],{

/***/ "./src/components/Spinner/docs/Spinner.dox":
/*!*************************************************!*\
  !*** ./src/components/Spinner/docs/Spinner.dox ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var earth_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! earth-ui */ \"./src/components/index.js\");\n/* harmony import */ var widgets_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Demo */ \"./site/widgets/Demo/index.js\");\n/* harmony import */ var widgets_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Doc */ \"./site/widgets/Doc/index.js\");\n/* harmony import */ var widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    height: 120px;\\n    line-height: 118px;\\n    color: #aaa;\\n    text-align: center;\\n    border: 1px dashed #ccc;\\n  \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    position: relative;\\n    width: 60px;\\n    height: 60px;\\n    border: 3px solid #00aeff\\n    border-radius: 50%;\\n    border-bottom-color: transparent;\\n    animation: 1s ease-in-out infinite \", \";\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    from {\\n      transform: translate3d(0, 0, 0) rotate(0deg);\\n    }\\n    to {\\n      transform: translate3d(0, 0, 0) rotate(360deg);\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar codeSpinnerBasic = \"import { Spinner, Switch } from 'earth-ui'\\n\\nclass SpinnerBasic extends React.Component {\\n  state = { isLoading: false }\\n  toggle = value => {\\n    this.setState({ isLoading: value });\\n  }\\n  render() {\\n    const border = {\\n      height: '120px',\\n      lineHeight: '118px',\\n      color: '#aaa',\\n      textAlign: 'center',\\n      border: '1px dashed #ccc'\\n    }\\n    return (\\n      <div>\\n        <div style={{ marginBottom: 16 }}>\\n          Open Spinner\\uFF1A<Switch on={this.state.isLoading} onChange={this.toggle} />\\n        </div>\\n        <div style={border}>\\n          <Spinner isLoading={this.state.isLoading}>\\n            Will be overridden by the load effect\\n          </Spinner>\\n        </div>\\n      </div>\\n    )\\n  }\\n}\";\n\nvar SpinnerBasic =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SpinnerBasic, _React$Component);\n\n  function SpinnerBasic() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, SpinnerBasic);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SpinnerBasic)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      isLoading: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"toggle\", function (value) {\n      _this.setState({\n        isLoading: value\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(SpinnerBasic, [{\n    key: \"render\",\n    value: function render() {\n      var border = {\n        height: '120px',\n        lineHeight: '118px',\n        color: '#aaa',\n        textAlign: 'center',\n        border: '1px dashed #ccc'\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          marginBottom: 16\n        }\n      }, \"Open Spinner\\uFF1A\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n        on: this.state.isLoading,\n        onChange: this.toggle\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: border\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n        isLoading: this.state.isLoading\n      }, \"Will be overridden by the load effect\")));\n    }\n  }]);\n\n  return SpinnerBasic;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar codeSpinnerTip = \"import { Spinner, Switch } from 'earth-ui'\\n\\nclass SpinnerTip extends React.Component {\\n  state = { isLoading: false }\\n  toggle = value => {\\n    this.setState({ isLoading: value });\\n  }\\n  render() {\\n    const border = {\\n      height: '120px',\\n      lineHeight: '118px',\\n      color: '#aaa',\\n      textAlign: 'center',\\n      border: '1px dashed #ccc'\\n    }\\n    return (\\n      <div>\\n        <div style={{ marginBottom: 16 }}>\\n          Open Spinner\\uFF1A<Switch on={this.state.isLoading} onChange={this.toggle} />\\n        </div>\\n        <div style={border}>\\n          <Spinner tip=\\\"Loading...\\\" isLoading={this.state.isLoading}>\\n            Custom description\\n          </Spinner>\\n        </div>\\n      </div>\\n    )\\n  }\\n}\";\n\nvar SpinnerTip =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(SpinnerTip, _React$Component2);\n\n  function SpinnerTip() {\n    var _getPrototypeOf3;\n\n    var _this2;\n\n    _classCallCheck(this, SpinnerTip);\n\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(SpinnerTip)).call.apply(_getPrototypeOf3, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this2), \"state\", {\n      isLoading: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this2), \"toggle\", function (value) {\n      _this2.setState({\n        isLoading: value\n      });\n    });\n\n    return _this2;\n  }\n\n  _createClass(SpinnerTip, [{\n    key: \"render\",\n    value: function render() {\n      var border = {\n        height: '120px',\n        lineHeight: '118px',\n        color: '#aaa',\n        textAlign: 'center',\n        border: '1px dashed #ccc'\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          marginBottom: 16\n        }\n      }, \"Open Spinner\\uFF1A\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n        on: this.state.isLoading,\n        onChange: this.toggle\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: border\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n        tip: \"Loading...\",\n        isLoading: this.state.isLoading\n      }, \"Custom description\")));\n    }\n  }]);\n\n  return SpinnerTip;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar codeSpinnerCover = \"import { Spinner, Switch } from 'earth-ui'\\n\\nclass SpinnerCover extends React.Component {\\n  state = { isLoading: false }\\n  toggle = value => {\\n    this.setState({ isLoading: value });\\n  }\\n  render() {\\n    const border = {\\n      height: '120px',\\n      lineHeight: '118px',\\n      color: '#aaa',\\n      textAlign: 'center',\\n      border: '1px dashed #ccc'\\n    }\\n    return (\\n      <div>\\n        <div style={{ marginBottom: 16 }}>\\n          Open Spinner\\uFF1A<Switch on={this.state.isLoading} onChange={this.toggle} />\\n        </div>\\n        <div style={border}>\\n          <Spinner tip=\\\"Loading...\\\" isLoading={this.state.isLoading}>\\n            White background\\n          </Spinner>\\n        </div>\\n        <br />\\n        <div style={border}>\\n          <Spinner tip=\\\"Loading...\\\" cover=\\\"black\\\" isLoading={this.state.isLoading}>\\n            Black background\\n          </Spinner>\\n        </div>\\n      </div>\\n    )\\n  }\\n}\";\n\nvar SpinnerCover =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(SpinnerCover, _React$Component3);\n\n  function SpinnerCover() {\n    var _getPrototypeOf4;\n\n    var _this3;\n\n    _classCallCheck(this, SpinnerCover);\n\n    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      args[_key3] = arguments[_key3];\n    }\n\n    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(SpinnerCover)).call.apply(_getPrototypeOf4, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this3), \"state\", {\n      isLoading: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this3), \"toggle\", function (value) {\n      _this3.setState({\n        isLoading: value\n      });\n    });\n\n    return _this3;\n  }\n\n  _createClass(SpinnerCover, [{\n    key: \"render\",\n    value: function render() {\n      var border = {\n        height: '120px',\n        lineHeight: '118px',\n        color: '#aaa',\n        textAlign: 'center',\n        border: '1px dashed #ccc'\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          marginBottom: 16\n        }\n      }, \"Open Spinner\\uFF1A\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n        on: this.state.isLoading,\n        onChange: this.toggle\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: border\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n        tip: \"Loading...\",\n        isLoading: this.state.isLoading\n      }, \"White background\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: border\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n        tip: \"Loading...\",\n        cover: \"black\",\n        isLoading: this.state.isLoading\n      }, \"Black background\")));\n    }\n  }]);\n\n  return SpinnerCover;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar codeSpinnerSize = \"import { Spinner } from 'earth-ui'\\n\\nconst SpinnerSize = () => {\\n  return (\\n    <div>\\n      <Spinner size=\\\"sm\\\" tip=\\\"Loading...\\\"/>\\n      <Spinner tip=\\\"Loading...\\\"/>\\n      <Spinner size=\\\"lg\\\" tip=\\\"Loading...\\\"/>\\n    </div>\\n  )\\n}\";\n\nvar SpinnerSize = function SpinnerSize() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n    size: \"sm\",\n    tip: \"Loading...\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n    tip: \"Loading...\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n    size: \"lg\",\n    tip: \"Loading...\"\n  }));\n};\n\nvar codeSpinnerIndicator = \"import { Spinner } from 'earth-ui'\\nimport styled, { keyframes } from 'styled-components'\\n\\nclass SpinnerIndicator extends React.Component {\\n  state = { isLoading: false }\\n  toggle = value => {\\n    this.setState({ isLoading: value });\\n  }\\n  spinnerKeyFrames = keyframes`\\n    from {\\n      transform: translate3d(0, 0, 0) rotate(0deg);\\n    }\\n    to {\\n      transform: translate3d(0, 0, 0) rotate(360deg);\\n    }\\n  `\\n  Indicator = styled.div`\\n    position: relative;\\n    width: 60px;\\n    height: 60px;\\n    border: 3px solid #00aeff\\n    border-radius: 50%;\\n    border-bottom-color: transparent;\\n    animation: 1s ease-in-out infinite ${this.spinnerKeyFrames};\\n  `\\n  Border = styled.div`\\n    height: 120px;\\n    line-height: 118px;\\n    color: #aaa;\\n    text-align: center;\\n    border: 1px dashed #ccc;\\n  `\\n  render() {\\n    const { Indicator, Border } = this\\n    return (\\n      <div>\\n        <div style={{ marginBottom: 16 }}>\\n          Open Spinner\\uFF1A<Switch on={this.state.isLoading} onChange={this.toggle} />\\n        </div>\\n        <Border>\\n          <Spinner isLoading={this.state.isLoading} indicator={<Indicator />}>\\n            Custom Indicator\\n          </Spinner>\\n        </Border>\\n      </div>\\n    )\\n  }\\n}\";\n\nvar SpinnerIndicator =\n/*#__PURE__*/\nfunction (_React$Component4) {\n  _inherits(SpinnerIndicator, _React$Component4);\n\n  function SpinnerIndicator() {\n    var _getPrototypeOf5;\n\n    var _this4;\n\n    _classCallCheck(this, SpinnerIndicator);\n\n    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n      args[_key4] = arguments[_key4];\n    }\n\n    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(SpinnerIndicator)).call.apply(_getPrototypeOf5, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this4), \"state\", {\n      isLoading: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this4), \"toggle\", function (value) {\n      _this4.setState({\n        isLoading: value\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this4), \"spinnerKeyFrames\", Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"keyframes\"])(_templateObject()));\n\n    _defineProperty(_assertThisInitialized(_this4), \"Indicator\", styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2(), _this4.spinnerKeyFrames));\n\n    _defineProperty(_assertThisInitialized(_this4), \"Border\", styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3()));\n\n    return _this4;\n  }\n\n  _createClass(SpinnerIndicator, [{\n    key: \"render\",\n    value: function render() {\n      var Indicator = this.Indicator,\n          Border = this.Border;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          marginBottom: 16\n        }\n      }, \"Open Spinner\\uFF1A\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n        on: this.state.isLoading,\n        onChange: this.toggle\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Border, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n        isLoading: this.state.isLoading,\n        indicator: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Indicator, null)\n      }, \"Custom Indicator\")));\n    }\n  }]);\n\n  return SpinnerIndicator;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar summary = \"\";\nvar docs = [{\n  \"name\": \"Spinner\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"className\",\n    \"desc\": \"<p>Spinner&#39;s own class property</p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }, {\n    \"name\": \"wrapperClassName\",\n    \"desc\": \"<p>The outermost class property of the Spinner wrapper</p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }, {\n    \"name\": \"isLoading\",\n    \"desc\": \"<p>Whether is loading, default value is <code>true</code></p>\\n\",\n    \"type\": \"bool\",\n    \"required\": false\n  }, {\n    \"name\": \"tip\",\n    \"desc\": \"<p>Customize the description</p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }, {\n    \"name\": \"size\",\n    \"desc\": \"<p>The sizes, default value is <code>md</code></p>\\n\",\n    \"type\": \"sm | md | lg\",\n    \"required\": false\n  }, {\n    \"name\": \"cover\",\n    \"desc\": \"<p>The style of backdrop, default value is <code>white</code></p>\\n\",\n    \"type\": \"white | black\",\n    \"required\": false\n  }, {\n    \"name\": \"indicator\",\n    \"desc\": \"<p>Loading indicator</p>\\n\",\n    \"type\": \"node\",\n    \"required\": false\n  }, {\n    \"name\": \"delay\",\n    \"desc\": \"<p>The delay time of Spinner, default value is <code>300</code></p>\\n\",\n    \"type\": \"number\",\n    \"required\": false\n  }],\n  \"apis\": []\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, !!summary && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    html: summary\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Basic Usage\",\n    code: codeSpinnerBasic,\n    desc: \"<p>The display and hiding of loading effects are controlled by the value of <code>isLoading</code>.</p>\\n\",\n    note: \"<p>This component will ensure that the loading display time is at least <code>300ms</code> to avoid the bad experience as \\\"flash\\\".</p>\\n\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpinnerBasic, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Custom description\",\n    code: codeSpinnerTip,\n    desc: \"<p>The description of spinner could be changed by the <code>tip</code> property\\u3002</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpinnerTip, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Black and White Background\",\n    code: codeSpinnerCover,\n    desc: \"<p>The <code>cover</code> property is currently provided to select the performance of the spinner background.</p>\\n\",\n    note: \"<p>The default <code>cover</code> is white background.</p>\\n\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpinnerCover, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Size\",\n    code: codeSpinnerSize,\n    desc: \"<p>There are three different sizes such as <code>sm</code>, <code>md</code> and <code>lg</code> to meet the requirements in different scenarios.</p>\\n\",\n    note: \"<p>For the global Spinner and the Spinner inside the Aside, it is recommended to use the <code>lg</code> size, which will provide a good visual experience in the scene with relatively high height.</p>\\n\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpinnerSize, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Custom Indicator\",\n    code: codeSpinnerIndicator,\n    desc: \"<p>You can create a custom indicator with the <code>indicator</code> property, which need passing a react instance.</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpinnerIndicator, null)), docs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, docs.map(function (doc) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      key: doc.name\n    }, doc));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/components/Spinner/docs/Spinner.dox?");

/***/ })

}]);