(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Header-docs-Header-gallery-dox"],{

/***/ "./src/components/Header/docs/Header-gallery.dox":
/*!*******************************************************!*\
  !*** ./src/components/Header/docs/Header-gallery.dox ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var earth_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! earth-ui */ \"./src/components/index.js\");\n/* harmony import */ var widgets_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Demo */ \"./site/widgets/Demo/index.js\");\n/* harmony import */ var widgets_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Doc */ \"./site/widgets/Doc/index.js\");\n/* harmony import */ var widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nvar codeColorfulHeader = \"import { Header } from 'earth-ui'\\n\\nconst ColorfulHeader = () => {\\n  const colors = [\\n    'white',\\n    'blue',\\n    'red',\\n    'orange',\\n    'yellow',\\n    'green',\\n    'purple',\\n    'pink',\\n    'gray',\\n    'slate',\\n    'black'\\n  ]\\n  const ul = {\\n    // marginTop: -20\\n  }\\n  const li = {\\n    width: '100%',\\n    listStyle: 'none',\\n    marginBottom: 20\\n  }\\n  if (window.matchMedia('(min-width:1800px)').matches) {\\n    ul.columnCount = 6\\n  }\\n  return (\\n    <ul style={ul}>\\n      {colors.map(color =>\\n        <li style={li} key={color}>\\n          <Header icon={`/svg/app_logo_bg_${color === 'blue' ? 'white' : 'blue'}.svg`} title={color} color={color} />\\n        </li>\\n      )}\\n    </ul>\\n  )\\n}\";\n\nvar ColorfulHeader = function ColorfulHeader() {\n  var colors = ['white', 'blue', 'red', 'orange', 'yellow', 'green', 'purple', 'pink', 'gray', 'slate', 'black'];\n  var ul = {// marginTop: -20\n  };\n  var li = {\n    width: '100%',\n    listStyle: 'none',\n    marginBottom: 20\n  };\n\n  if (window.matchMedia('(min-width:1800px)').matches) {\n    ul.columnCount = 6;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    style: ul\n  }, colors.map(function (color) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      style: li,\n      key: color\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n      icon: \"/svg/app_logo_bg_\".concat(color === 'blue' ? 'white' : 'blue', \".svg\"),\n      title: color,\n      color: color\n    }));\n  }));\n};\n\nvar summary = \"\";\nvar docs = [];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, !!summary && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    html: summary\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Header Gallery\",\n    code: codeColorfulHeader,\n    desc: \"\",\n    note: \"\",\n    renderModel: \"full\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorfulHeader, null)), docs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, docs.map(function (doc) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      key: doc.name\n    }, doc));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/components/Header/docs/Header-gallery.dox?");

/***/ })

}]);