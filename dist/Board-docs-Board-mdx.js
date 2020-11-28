(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Board-docs-Board-mdx"],{

/***/ "./node_modules/@mdx-js/react/dist/esm.js":
/*!************************************************!*\
  !*** ./node_modules/@mdx-js/react/dist/esm.js ***!
  \************************************************/
/*! exports provided: MDXContext, MDXProvider, mdx, useMDXComponents, withMDXComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDXContext\", function() { return MDXContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDXProvider\", function() { return MDXProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mdx\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMDXComponents\", function() { return useMDXComponents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withMDXComponents\", function() { return withMDXComponents; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nvar isFunction = function isFunction(obj) {\n  return typeof obj === 'function';\n};\n\nvar MDXContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});\nvar withMDXComponents = function withMDXComponents(Component) {\n  return function (props) {\n    var allComponents = useMDXComponents(props.components);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {\n      components: allComponents\n    }));\n  };\n};\nvar useMDXComponents = function useMDXComponents(components) {\n  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);\n  var allComponents = contextComponents;\n\n  if (components) {\n    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);\n  }\n\n  return allComponents;\n};\nvar MDXProvider = function MDXProvider(props) {\n  var allComponents = useMDXComponents(props.components);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {\n    value: allComponents\n  }, props.children);\n};\n\nvar TYPE_PROP_NAME = 'mdxType';\nvar DEFAULTS = {\n  inlineCode: 'code',\n  wrapper: function wrapper(_ref) {\n    var children = _ref.children;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);\n  }\n};\nvar MDXCreateElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {\n  var propComponents = props.components,\n      mdxType = props.mdxType,\n      originalType = props.originalType,\n      parentName = props.parentName,\n      etc = _objectWithoutProperties(props, [\"components\", \"mdxType\", \"originalType\", \"parentName\"]);\n\n  var components = useMDXComponents(propComponents);\n  var type = mdxType;\n  var Component = components[\"\".concat(parentName, \".\").concat(type)] || components[type] || DEFAULTS[type] || originalType;\n\n  if (propComponents) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({\n      ref: ref\n    }, etc), {}, {\n      components: propComponents\n    }));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({\n    ref: ref\n  }, etc));\n});\nMDXCreateElement.displayName = 'MDXCreateElement';\nfunction createElement (type, props) {\n  var args = arguments;\n  var mdxType = props && props.mdxType;\n\n  if (typeof type === 'string' || mdxType) {\n    var argsLength = args.length;\n    var createElementArgArray = new Array(argsLength);\n    createElementArgArray[0] = MDXCreateElement;\n    var newProps = {};\n\n    for (var key in props) {\n      if (hasOwnProperty.call(props, key)) {\n        newProps[key] = props[key];\n      }\n    }\n\n    newProps.originalType = type;\n    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;\n    createElementArgArray[1] = newProps;\n\n    for (var i = 2; i < argsLength; i++) {\n      createElementArgArray[i] = args[i];\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@mdx-js/react/dist/esm.js?");

/***/ }),

/***/ "./src/components/Board/docs/Board.mdx":
/*!*********************************************!*\
  !*** ./src/components/Board/docs/Board.mdx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports[\"default\"] = MDXContent;\nexports.col = exports.propsTables = exports.BoardWithTabs = exports.BoardWithButtons = exports.BoardWithTitle = exports.BoardBasic = void 0;\n\nvar _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\"));\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _react2 = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n\nvar _ui = __webpack_require__(/*! @webapp-suite/ui */ \"./src/components/index.tsx\");\n\nvar _Example = _interopRequireDefault(__webpack_require__(/*! widgets/Example */ \"./site/widgets/Example/index.js\"));\n\nvar _PropsTable = _interopRequireDefault(__webpack_require__(/*! widgets/PropsTable */ \"./site/widgets/PropsTable/index.js\"));\n\nvar _Markdown = _interopRequireDefault(__webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\"));\n\n/* @jsx mdx */\nvar BoardBasic = function BoardBasic() {\n  return (0, _react2.mdx)(\"div\", null, (0, _react2.mdx)(_ui.Board, {\n    mdxType: \"Board\"\n  }, (0, _react2.mdx)(_ui.BoardBody, {\n    mdxType: \"BoardBody\"\n  }, \"The classic board looks like this.\")), (0, _react2.mdx)(_ui.Board, {\n    theme: \"simple\",\n    mdxType: \"Board\"\n  }, (0, _react2.mdx)(_ui.BoardBody, {\n    mdxType: \"BoardBody\"\n  }, \"The simple board looks like this.\")));\n};\n\nexports.BoardBasic = BoardBasic;\n\nvar BoardWithTitle = function BoardWithTitle() {\n  return (0, _react2.mdx)(\"div\", null, (0, _react2.mdx)(_ui.Board, {\n    mdxType: \"Board\"\n  }, (0, _react2.mdx)(_ui.BoardHeader, {\n    title: \"My Board\",\n    mdxType: \"BoardHeader\"\n  }), (0, _react2.mdx)(_ui.BoardBody, {\n    mdxType: \"BoardBody\"\n  }, \"The classic Board with title looks like this.\")), (0, _react2.mdx)(_ui.Board, {\n    theme: \"simple\",\n    mdxType: \"Board\"\n  }, (0, _react2.mdx)(_ui.BoardHeader, {\n    title: \"My Board\",\n    mdxType: \"BoardHeader\"\n  }), (0, _react2.mdx)(_ui.BoardBody, {\n    mdxType: \"BoardBody\"\n  }, \"The simple Board with title looks like this.\")));\n};\n\nexports.BoardWithTitle = BoardWithTitle;\n\nvar BoardWithButtons = function BoardWithButtons() {\n  return (0, _react2.mdx)(_ui.Board, {\n    title: \"My Board\",\n    mdxType: \"Board\"\n  }, (0, _react2.mdx)(_ui.BoardHeader, {\n    mdxType: \"BoardHeader\"\n  }, (0, _react2.mdx)(_ui.Button, {\n    type: \"primary\",\n    size: \"sm\",\n    mdxType: \"Button\"\n  }, \"one\"), (0, _react2.mdx)(_ui.Button, {\n    size: \"sm\",\n    mdxType: \"Button\"\n  }, \"two\"), (0, _react2.mdx)(_ui.Button, {\n    onClick: function onClick() {\n      return _ui.notification.success('Clicked!');\n    },\n    size: \"sm\",\n    mdxType: \"Button\"\n  }, \"three\")), (0, _react2.mdx)(_ui.BoardBody, {\n    mdxType: \"BoardBody\"\n  }, \"The classic Board with buttons looks like this.\"));\n};\n\nexports.BoardWithButtons = BoardWithButtons;\n\nvar BoardWithTabs = function BoardWithTabs() {\n  return (0, _react2.mdx)(_ui.Board, {\n    mdxType: \"Board\"\n  }, (0, _react2.mdx)(_ui.Tabs, {\n    mdxType: \"Tabs\"\n  }, (0, _react2.mdx)(_ui.BoardHeader, {\n    mdxType: \"BoardHeader\"\n  }, (0, _react2.mdx)(_ui.TabList, {\n    mdxType: \"TabList\"\n  }, (0, _react2.mdx)(_ui.Tab, {\n    mdxType: \"Tab\"\n  }, \"One\"), (0, _react2.mdx)(_ui.Tab, {\n    mdxType: \"Tab\"\n  }, \"Two\"), (0, _react2.mdx)(_ui.Tab, {\n    mdxType: \"Tab\"\n  }, \"Three\"))), (0, _react2.mdx)(_ui.BoardBody, {\n    mdxType: \"BoardBody\"\n  }, (0, _react2.mdx)(_ui.TabPanel, {\n    tab: \"One\",\n    mdxType: \"TabPanel\"\n  }, \"Content of Tab Board 1\"), (0, _react2.mdx)(_ui.TabPanel, {\n    tab: \"Two\",\n    mdxType: \"TabPanel\"\n  }, \"Content of Tab Board 2\"), (0, _react2.mdx)(_ui.TabPanel, {\n    tab: \"Three\",\n    mdxType: \"TabPanel\"\n  }, \"Content of Tab Board 3\"))));\n};\n\nexports.BoardWithTabs = BoardWithTabs;\nvar propsTables = [{\n  \"name\": \"Board\",\n  \"props\": [{\n    \"name\": \"theme\",\n    \"type\": \"'classic' | 'simple'\",\n    \"required\": false,\n    \"description\": \"<p>The theme style of Board, default value is <code>classic</code></p>\\n\",\n    \"default\": \"'classic'\"\n  }]\n}, {\n  \"name\": \"BoardHeader\",\n  \"props\": [{\n    \"name\": \"title\",\n    \"type\": \"string\",\n    \"required\": false,\n    \"description\": \"<p>The title of Board</p>\\n\"\n  }]\n}];\nexports.propsTables = propsTables;\nvar col = 16;\nexports.col = col;\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component \" + name + \" was not imported, exported, or provided by MDXProvider as global scope\");\n    return (0, _react2.mdx)(\"div\", props);\n  };\n};\n\nvar layoutProps = {\n  BoardBasic: BoardBasic,\n  BoardWithTitle: BoardWithTitle,\n  BoardWithButtons: BoardWithButtons,\n  BoardWithTabs: BoardWithTabs,\n  propsTables: propsTables,\n  col: col\n};\n\nvar MDXLayout = function MDXLayout(_ref) {\n  var props = (0, _extends2[\"default\"])({}, _ref);\n  return (0, _react2.mdx)(\"div\", null, (0, _react2.mdx)(_ui.Row, null, (0, _react2.mdx)(_ui.Col, {\n    col: \"md-16\"\n  }, (0, _react2.mdx)(\"div\", {\n    className: \"markdown\"\n  }, props.children))), propsTables.length > 0 && (0, _react2.mdx)(_ui.Row, null, (0, _react2.mdx)(_ui.Col, {\n    col: \"md-16\"\n  }, propsTables.map(function (pt) {\n    return (0, _react2.mdx)(_PropsTable[\"default\"], (0, _extends2[\"default\"])({\n      key: pt.name\n    }, pt));\n  }))));\n};\n\nfunction MDXContent(_ref2) {\n  var components = _ref2.components,\n      props = (0, _objectWithoutPropertiesLoose2[\"default\"])(_ref2, [\"components\"]);\n  return (0, _react2.mdx)(MDXLayout, (0, _extends2[\"default\"])({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), (0, _react2.mdx)(\"h2\", null, \"Basic Usage\"), (0, _react2.mdx)(\"p\", null, \"Board provides the \", (0, _react2.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"theme\"), \" property which allows you to choose between two theme styles: \", (0, _react2.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"classic\"), \" and \", (0, _react2.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"simple\"), \". The default value is \", (0, _react2.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"classic\"), \" which is the style of white background with borders.\"), (0, _react2.mdx)(_Example[\"default\"], {\n    renderModel: \"vertical\",\n    code: \"import { Board, BoardHeader, BoardBody } from '@webapp-suite/ui'\\n\\nconst BoardBasic = () => {\\n  return (\\n    <div>\\n      <Board>\\n        <BoardBody>\\n          The classic board looks like this.\\n        </BoardBody>\\n      </Board>\\n      <Board theme=\\\"simple\\\">\\n        <BoardBody>\\n          The simple board looks like this.\\n        </BoardBody>\\n      </Board>\\n    </div>\\n  )\\n}\",\n    mdxType: \"Example\"\n  }, (0, _react2.mdx)(BoardBasic, {\n    mdxType: \"BoardBasic\"\n  })), (0, _react2.mdx)(\"h2\", null, \"Board with Title\"), (0, _react2.mdx)(\"p\", null, \"The \", (0, _react2.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"title\"), \" property on the \", (0, _react2.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"BoardHeader\"), \" allows you to customize the title and also supports all theme styles.\"), (0, _react2.mdx)(_Example[\"default\"], {\n    renderModel: \"vertical\",\n    code: \"import { Board, BoardHeader, BoardBody } from '@webapp-suite/ui'\\n\\nconst BoardWithTitle = () => {\\n  return (\\n    <div>\\n      <Board>\\n        <BoardHeader title=\\\"My Board\\\" />\\n        <BoardBody>\\n          The classic Board with title looks like this.\\n        </BoardBody>\\n      </Board>\\n      <Board theme=\\\"simple\\\">\\n        <BoardHeader title=\\\"My Board\\\" />\\n        <BoardBody>\\n          The simple Board with title looks like this.\\n        </BoardBody>\\n      </Board>\\n    </div>\\n  )\\n}\",\n    mdxType: \"Example\"\n  }, (0, _react2.mdx)(BoardWithTitle, {\n    mdxType: \"BoardWithTitle\"\n  })), (0, _react2.mdx)(\"h2\", null, \"Board with Buttons\"), (0, _react2.mdx)(_Example[\"default\"], {\n    renderModel: \"vertical\",\n    code: \"import { Board, BoardHeader, BoardBody, Button, notification } from '@webapp-suite/ui'\\n\\nconst BoardWithButtons = () => {\\n  return (\\n    <Board title=\\\"My Board\\\">\\n      <BoardHeader>\\n        <Button type=\\\"primary\\\" size=\\\"sm\\\">one</Button>\\n        <Button size=\\\"sm\\\">two</Button>\\n        <Button onClick={()=> notification.success('Clicked!')} size=\\\"sm\\\">three</Button>\\n      </BoardHeader>\\n      <BoardBody>\\n        The classic Board with buttons looks like this.\\n      </BoardBody>\\n    </Board>\\n  )\\n}\",\n    mdxType: \"Example\"\n  }, (0, _react2.mdx)(BoardWithButtons, {\n    mdxType: \"BoardWithButtons\"\n  })), (0, _react2.mdx)(\"h2\", null, \"Board with Tabs\"), (0, _react2.mdx)(_Example[\"default\"], {\n    renderModel: \"vertical\",\n    code: \"import { Board, BoardHeader, BoardBody, Tabs, TabList, Tab, TabPanel } from '@webapp-suite/ui'\\n\\nconst BoardWithTabs = () => {\\n  return (\\n    <Board>\\n      <Tabs>\\n        <BoardHeader>\\n          <TabList>\\n            <Tab>One</Tab>\\n            <Tab>Two</Tab>\\n            <Tab>Three</Tab>\\n          </TabList>\\n        </BoardHeader>\\n        <BoardBody>\\n          <TabPanel tab=\\\"One\\\">Content of Tab Board 1</TabPanel>\\n          <TabPanel tab=\\\"Two\\\">Content of Tab Board 2</TabPanel>\\n          <TabPanel tab=\\\"Three\\\">Content of Tab Board 3</TabPanel>\\n        </BoardBody>\\n      </Tabs>\\n    </Board>\\n  )\\n}\",\n    mdxType: \"Example\"\n  }, (0, _react2.mdx)(BoardWithTabs, {\n    mdxType: \"BoardWithTabs\"\n  })));\n}\n\n;\nMDXContent.isMDXComponent = true;\n\n//# sourceURL=webpack:///./src/components/Board/docs/Board.mdx?");

/***/ })

}]);