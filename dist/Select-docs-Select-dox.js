(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Select-docs-Select-dox"],{

/***/ "./src/components/Select/docs/Select.dox":
/*!***********************************************!*\
  !*** ./src/components/Select/docs/Select.dox ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var earth_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! earth-ui */ \"./src/components/index.js\");\n/* harmony import */ var widgets_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Demo */ \"./site/widgets/Demo/index.js\");\n/* harmony import */ var widgets_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Doc */ \"./site/widgets/Doc/index.js\");\n/* harmony import */ var widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nvar codeSelectBasic = \"import { Select, Option } from 'earth-ui'\\n\\nconst SelectBasic = () => {\\n  return (\\n    <Select width={200}>\\n      <Option>\\u8BF7\\u9009\\u62E9</Option>\\n      <Option value=\\\"0\\\">\\u82F9\\u679C</Option>\\n      <Option value=\\\"1\\\">\\u4E09\\u661F</Option>\\n      <Option value=\\\"2\\\">\\u5C0F\\u7C73</Option>\\n    </Select>\\n  )\\n}\";\n\nvar SelectBasic = function SelectBasic() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    width: 200\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], null, \"\\u8BF7\\u9009\\u62E9\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n    value: \"0\"\n  }, \"\\u82F9\\u679C\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n    value: \"1\"\n  }, \"\\u4E09\\u661F\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n    value: \"2\"\n  }, \"\\u5C0F\\u7C73\"));\n};\n\nvar codeSelectData = \"import { Select, Option } from 'earth-ui'\\n\\nconst SelectData = () => {\\n  const data = [{\\n    id: 0,\\n    name: '\\u82F9\\u679C'\\n  }, {\\n    id: 1,\\n    name: '\\u4E09\\u661F'\\n  }, {\\n    id: 2,\\n    name: '\\u5C0F\\u7C73'\\n  }]\\n  return (\\n    <Select\\n      data={data}\\n      render={item => <Option value={item.id}>{item.name}</Option>}\\n      defaultOption={<Option>\\u8BF7\\u9009\\u62E9</Option>}\\n      width={200}\\n    />\\n  )\\n}\";\n\nvar SelectData = function SelectData() {\n  var data = [{\n    id: 0,\n    name: '苹果'\n  }, {\n    id: 1,\n    name: '三星'\n  }, {\n    id: 2,\n    name: '小米'\n  }];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    data: data,\n    render: function render(item) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n        value: item.id\n      }, item.name);\n    },\n    defaultOption: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], null, \"\\u8BF7\\u9009\\u62E9\"),\n    width: 200\n  });\n};\n\nvar codeSelectSearchable = \"import { Select, Option } from 'earth-ui'\\n\\nconst SelectSearchable = () => {\\n  return (\\n    <Select searchable width={200}>\\n      <Option>\\u8BF7\\u9009\\u62E9</Option>\\n      <Option value=\\\"0\\\">\\u82F9\\u679C</Option>\\n      <Option value=\\\"1\\\">\\u4E09\\u661F</Option>\\n      <Option value=\\\"2\\\">\\u5C0F\\u7C73</Option>\\n    </Select>\\n  )\\n}\";\n\nvar SelectSearchable = function SelectSearchable() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    searchable: true,\n    width: 200\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], null, \"\\u8BF7\\u9009\\u62E9\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n    value: \"0\"\n  }, \"\\u82F9\\u679C\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n    value: \"1\"\n  }, \"\\u4E09\\u661F\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n    value: \"2\"\n  }, \"\\u5C0F\\u7C73\"));\n};\n\nvar codeSelectDisabled = \"import { Select, Option } from 'earth-ui'\\n\\nconst SelectDisabled = () => {\\n  return (\\n    <Select disabled width={200}>\\n      <Option>\\u8BF7\\u9009\\u62E9</Option>\\n      <Option value=\\\"0\\\">\\u82F9\\u679C</Option>\\n      <Option value=\\\"1\\\">\\u4E09\\u661F</Option>\\n      <Option value=\\\"2\\\">\\u5C0F\\u7C73</Option>\\n    </Select>\\n  )\\n}\";\n\nvar SelectDisabled = function SelectDisabled() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    disabled: true,\n    width: 200\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], null, \"\\u8BF7\\u9009\\u62E9\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n    value: \"0\"\n  }, \"\\u82F9\\u679C\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n    value: \"1\"\n  }, \"\\u4E09\\u661F\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Option\"], {\n    value: \"2\"\n  }, \"\\u5C0F\\u7C73\"));\n};\n\nvar summary = \"<blockquote>\\n<p>该组件正在大规模重构中，请以 <code>1.0.0</code> 正式版为准。</p>\\n</blockquote>\\n\";\nvar docs = [{\n  \"name\": \"Select\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"value\",\n    \"desc\": \"<p>选中的值</p>\\n\",\n    \"type\": \"string | number\",\n    \"required\": false\n  }, {\n    \"name\": \"defaultValue\",\n    \"desc\": \"<p>初始化时选中的值（不可控）</p>\\n\",\n    \"type\": \"string | number\",\n    \"required\": false\n  }, {\n    \"name\": \"onChange\",\n    \"desc\": \"<p>切换选择后的回调，function(value, item)，当前数据项或 option.props</p>\\n\",\n    \"type\": \"func\",\n    \"required\": false\n  }, {\n    \"name\": \"data\",\n    \"desc\": \"<p>数据源，结合 render 属性定义 Option 渲染逻辑</p>\\n\",\n    \"type\": \"array\",\n    \"required\": false\n  }, {\n    \"name\": \"url\",\n    \"desc\": \"<p>URL 数据源</p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }, {\n    \"name\": \"dataFilter\",\n    \"desc\": \"<p>URL 数据源模式数据过滤，参数为服务器返回的数据，返回处理后的数据</p>\\n\",\n    \"type\": \"func\",\n    \"required\": false\n  }, {\n    \"name\": \"render\",\n    \"desc\": \"<p>data 或 url 方式时 Option 渲染回调，参数为当前数据和索引，返回一个 Option</p>\\n\",\n    \"type\": \"func\",\n    \"required\": false\n  }, {\n    \"name\": \"defaultOption\",\n    \"desc\": \"<p>data 或 url 方式时默认的 Option，通常针对空值时的选项</p>\\n\",\n    \"type\": \"element\",\n    \"required\": false\n  }, {\n    \"name\": \"placeholder\",\n    \"desc\": \"<p>无 <code>value</code> 且无选项匹配时 Select 显示的内容，默认 <code>请选择</code></p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }, {\n    \"name\": \"searchable\",\n    \"desc\": \"<p>是否可搜索，搜索范围为 Option 的 value 和 children</p>\\n\",\n    \"type\": \"bool\",\n    \"required\": false\n  }, {\n    \"name\": \"searchPlaceholder\",\n    \"desc\": \"<p>搜索框 placeholder，默认<code>请输入关键词搜索</code></p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }, {\n    \"name\": \"disabled\",\n    \"desc\": \"<p>是否禁用</p>\\n\",\n    \"type\": \"bool\",\n    \"required\": false\n  }, {\n    \"name\": \"size\",\n    \"desc\": \"<p>尺寸</p>\\n\",\n    \"type\": \"sm | lg\",\n    \"required\": false\n  }, {\n    \"name\": \"width\",\n    \"desc\": \"<p>宽度，默认<code>100%</code></p>\\n\",\n    \"type\": \"number\",\n    \"required\": false\n  }, {\n    \"name\": \"noOptionsContent\",\n    \"desc\": \"<p>无 option 时显示的内容，默认<code>无选项</code></p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }, {\n    \"name\": \"noMatchingContent\",\n    \"desc\": \"<p>有 <code>value</code> 但无选项匹配时显示的内容，默认<code>无匹配选项</code></p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }],\n  \"apis\": []\n}, {\n  \"name\": \"Option\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"value\",\n    \"desc\": \"<p>值，与 Select value 对应，数据类型也要一致</p>\\n\",\n    \"type\": \"string | number\",\n    \"required\": false\n  }],\n  \"apis\": []\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, !!summary && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    html: summary\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"\\u57FA\\u672C\\u529F\\u80FD\",\n    code: codeSelectBasic,\n    desc: \"\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectBasic, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"data \\u6570\\u636E\",\n    code: codeSelectData,\n    desc: \"\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectData, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"\\u53EF\\u641C\\u7D22\\u7684\",\n    code: codeSelectSearchable,\n    desc: \"\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectSearchable, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"\\u7981\\u7528\",\n    code: codeSelectDisabled,\n    desc: \"\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectDisabled, null)), docs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, docs.map(function (doc) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      key: doc.name\n    }, doc));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/components/Select/docs/Select.dox?");

/***/ })

}]);