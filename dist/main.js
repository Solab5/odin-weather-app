/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  \n  html,\n  body {\n    height: 100vh;\n    font-family: Helvetica, Verdana, sans-serif;\n  }\n  \n  body {\n    align-items: center;\n  }\n  \n  a {\n    text-decoration: none;\n  }\n  \n  .wrapper {\n    width: 80%;\n    margin: 0 auto;\n  }\n  \n  .grid-layout {\n    height: 80vh;\n    display: grid;\n    grid-template-rows: repeat(4, 1fr);\n  }\n  \n  .flex {\n    display: flex;\n  }\n  \n  .col {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  /* Search section*/\n  .search-wrapper {\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .search-input,\n  .search-btn {\n    font-size: 1rem;\n    padding: 0.5rem 0.25rem;\n    border: none;\n  }\n  \n  .search-input {\n    background-color: #e9e9ed;\n  }\n  \n  .content-wrapper {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));\n  }\n  \n  .current-weather-icon-wrapper,\n  .current-conditions-wrapper,\n  .current-descriptions-wrapper,\n  .current-temperature-wrapper {\n    align-items: center;\n  }\n  \n  .current-weather-icon-wrapper {\n    justify-content: center;\n  \n    & > img {\n      width: 95%;\n    }\n  }\n  \n  .current-conditions-wrapper {\n    grid-column: 2 / span 4;\n  }\n  \n  .current-descriptions-wrapper {\n    grid-column: 6 / 9;\n    justify-content: center;\n    align-items: flex-end;\n  }\n  \n  .current-temperature {\n    font-size: 4rem;\n    margin: 0 0.8rem;\n  }\n  \n  .weather-units {\n    font-size: 1rem;\n    margin-top: 0.7rem;\n  }\n  \n  .fahrenheit-link {\n    color: #fff;\n    padding-right: 0.3rem;\n    border-right: solid 1px gray;\n  }\n  \n  .celsius-link {\n    padding-left: 0.3rem;\n  }\n  \n  .bottom {\n    gap: 1rem;\n  }\n  \n  .day-wrapper {\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  .day-wrapper:hover {\n    cursor: pointer;\n    border-bottom: 1px solid gray;\n  }\n  \n  .day-wrapper:active {\n    opacity: 0.5;\n  }\n  \n  .day-temperature {\n    justify-content: center;\n    gap: 0.5rem;\n  }\n  \n  .day-icon-wrapper {\n    text-align: center;\n  }\n  \n  .day-icon-wrapper > img {\n    width: 100%;\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/WeatherIcons lazy recursive ^\\.\\/.*\\.png$":
/*!**********************************************************************!*\
  !*** ./src/assets/WeatherIcons/ lazy ^\.\/.*\.png$ namespace object ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./clear-day.png\": [\n\t\t\"./src/assets/WeatherIcons/clear-day.png\",\n\t\t\"src_assets_WeatherIcons_clear-day_png\"\n\t],\n\t\"./clear-night.png\": [\n\t\t\"./src/assets/WeatherIcons/clear-night.png\",\n\t\t\"src_assets_WeatherIcons_clear-night_png\"\n\t],\n\t\"./cloudy.png\": [\n\t\t\"./src/assets/WeatherIcons/cloudy.png\",\n\t\t\"src_assets_WeatherIcons_cloudy_png\"\n\t],\n\t\"./fog.png\": [\n\t\t\"./src/assets/WeatherIcons/fog.png\",\n\t\t\"src_assets_WeatherIcons_fog_png\"\n\t],\n\t\"./hail.png\": [\n\t\t\"./src/assets/WeatherIcons/hail.png\",\n\t\t\"src_assets_WeatherIcons_hail_png\"\n\t],\n\t\"./partly-cloudy-day.png\": [\n\t\t\"./src/assets/WeatherIcons/partly-cloudy-day.png\",\n\t\t\"src_assets_WeatherIcons_partly-cloudy-day_png\"\n\t],\n\t\"./partly-cloudy-night.png\": [\n\t\t\"./src/assets/WeatherIcons/partly-cloudy-night.png\",\n\t\t\"src_assets_WeatherIcons_partly-cloudy-night_png\"\n\t],\n\t\"./rain-snow-showers-day.png\": [\n\t\t\"./src/assets/WeatherIcons/rain-snow-showers-day.png\",\n\t\t\"src_assets_WeatherIcons_rain-snow-showers-day_png\"\n\t],\n\t\"./rain-snow-showers-night.png\": [\n\t\t\"./src/assets/WeatherIcons/rain-snow-showers-night.png\",\n\t\t\"src_assets_WeatherIcons_rain-snow-showers-night_png\"\n\t],\n\t\"./rain-snow.png\": [\n\t\t\"./src/assets/WeatherIcons/rain-snow.png\",\n\t\t\"src_assets_WeatherIcons_rain-snow_png\"\n\t],\n\t\"./rain.png\": [\n\t\t\"./src/assets/WeatherIcons/rain.png\",\n\t\t\"src_assets_WeatherIcons_rain_png\"\n\t],\n\t\"./showers-day.png\": [\n\t\t\"./src/assets/WeatherIcons/showers-day.png\",\n\t\t\"src_assets_WeatherIcons_showers-day_png\"\n\t],\n\t\"./showers-night.png\": [\n\t\t\"./src/assets/WeatherIcons/showers-night.png\",\n\t\t\"src_assets_WeatherIcons_showers-night_png\"\n\t],\n\t\"./sleet.png\": [\n\t\t\"./src/assets/WeatherIcons/sleet.png\",\n\t\t\"src_assets_WeatherIcons_sleet_png\"\n\t],\n\t\"./snow-showers-day.png\": [\n\t\t\"./src/assets/WeatherIcons/snow-showers-day.png\",\n\t\t\"src_assets_WeatherIcons_snow-showers-day_png\"\n\t],\n\t\"./snow-showers-night.png\": [\n\t\t\"./src/assets/WeatherIcons/snow-showers-night.png\",\n\t\t\"src_assets_WeatherIcons_snow-showers-night_png\"\n\t],\n\t\"./snow.png\": [\n\t\t\"./src/assets/WeatherIcons/snow.png\",\n\t\t\"src_assets_WeatherIcons_snow_png\"\n\t],\n\t\"./thunder-rain.png\": [\n\t\t\"./src/assets/WeatherIcons/thunder-rain.png\",\n\t\t\"src_assets_WeatherIcons_thunder-rain_png\"\n\t],\n\t\"./thunder-showers-day.png\": [\n\t\t\"./src/assets/WeatherIcons/thunder-showers-day.png\",\n\t\t\"src_assets_WeatherIcons_thunder-showers-day_png\"\n\t],\n\t\"./thunder-showers-night.png\": [\n\t\t\"./src/assets/WeatherIcons/thunder-showers-night.png\",\n\t\t\"src_assets_WeatherIcons_thunder-showers-night_png\"\n\t],\n\t\"./thunder.png\": [\n\t\t\"./src/assets/WeatherIcons/thunder.png\",\n\t\t\"src_assets_WeatherIcons_thunder_png\"\n\t],\n\t\"./wind.png\": [\n\t\t\"./src/assets/WeatherIcons/wind.png\",\n\t\t\"src_assets_WeatherIcons_wind_png\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 1 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/assets/WeatherIcons lazy recursive ^\\\\.\\\\/.*\\\\.png$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/WeatherIcons/_lazy_^\\.\\/.*\\.png$_namespace_object?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n\n\n\n(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherRequest: () => (/* binding */ getWeatherRequest),\n/* harmony export */   processWeatherRequest: () => (/* binding */ processWeatherRequest)\n/* harmony export */ });\nasync function getWeatherRequest(location) {\n    try {\n        const response = await fetch(\n            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=L9W26DUBQRSKNQMD9EZ9EMUJN`\n        );\n        if (response.ok) {\n            return response.json();\n        }\n    } catch (err) {\n        console.error(err);\n    }\n}\n\nasync function processWeatherRequest(response) {\n    const myPromise = new Promise((resolve) => resolve(response));\n    try {\n        const data = await myPromise;\n        return data;\n    } catch (err) {\n        console.log(err);\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-weather-app/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n\n\n\nfunction render() {\n    const searchForm = document.querySelector('.search-form');\n    const bottomContent = document.querySelector('.bottom');\n    searchForm.addEventListener('submit', handleSearch);\n    bottomContent.addEventListener('click', handleClickBottomContent);\n}\n\nasync function handleSearch(event) {\n    event.preventDefault();\n    const location = event.target[0].value\n\n    const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.processWeatherRequest)((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherRequest)(location));\n\n    if (data) {\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayCurrentWeatherIcon)(data);\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayCurrentConditions)(data);\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayCurrentDescriptions)(data);\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayDayForecast)(data);\n        event.target[0].value = '';\n        return;\n    }\n\n    alert('please enter a valid location');\n}\n\nasync function handleClickBottomContent(event) {\n    if (!event.target.matches('.bottom')) {\n        const targetForecast = event.target.closest('.day-wrapper').dataset.day;\n        const location = document.querySelector('.current-location').textContent;\n        const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.processWeatherRequest)((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherRequest)(location));\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayForecastConditions)(data, targetForecast);\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayForecastDescriptions)(data, targetForecast)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://odin-weather-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   displayCurrentConditions: () => (/* binding */ displayCurrentConditions),\n/* harmony export */   displayCurrentDescriptions: () => (/* binding */ displayCurrentDescriptions),\n/* harmony export */   displayCurrentWeatherIcon: () => (/* binding */ displayCurrentWeatherIcon),\n/* harmony export */   displayDayForecast: () => (/* binding */ displayDayForecast),\n/* harmony export */   displayForecastConditions: () => (/* binding */ displayForecastConditions),\n/* harmony export */   displayForecastDescriptions: () => (/* binding */ displayForecastDescriptions)\n/* harmony export */ });\nasync function getIcon(icon) {\n    const myIcon = await __webpack_require__(\"./src/assets/WeatherIcons lazy recursive ^\\\\.\\\\/.*\\\\.png$\")(`./${icon}.png`);\n    return myIcon;\n}\n\nasync function createCurrentWeatherIcon(iconText) {\n    const icon = new Image();\n    const iconResponse = await getIcon(iconText);\n    icon.src = iconResponse.default;\n    return icon;\n}\n\nasync function displayCurrentWeatherIcon(jsonData) {\n    const iconWrapper = document.querySelector('.current-weather-icon-wrapper');\n    iconWrapper.replaceChildren();\n\n    const icon = await createCurrentWeatherIcon(jsonData.currentConditions.icon);\n    iconWrapper.appendChild(icon);\n}\n\nfunction displayCurrentConditions(jsonData) {\n    const currentConditionsWrapper = document.querySelector('.current-conditions-wrapper');\n    currentConditionsWrapper.replaceChildren();\n\n    const currentTemp = jsonData.currentConditions.temp;\n    const currentPrecipitation = jsonData.currentConditions.precip;\n    const currentHumidity = jsonData.currentConditions.humidity;\n    const currentWind = jsonData.currentConditions.windspeed; \n\n    const weatherText = document.createElement('div');\n    const weatherUnits = document.createElement('div');\n    const fahrenheit = document.createElement('div');\n    const celsius = document.createElement('div');\n    const fahrenheitLink = document.createElement('a');\n    const celsiusLink = document.createElement('a');\n    const currentOtherConditionsWrapper = document.createElement('div');\n    const precipitationText = document.createElement('p');\n    const humidityText = document.createElement('p');\n    const windText = document.createElement('p');\n\n    weatherText.className = 'current-temperature flex';\n    weatherUnits.className = 'weather-units flex';\n    fahrenheit.className = 'fahrenheit';\n    celsius.className = 'celsius';\n    fahrenheitLink.className = 'fahrenheit-link';\n    celsiusLink.className = 'celsius-link';\n    currentOtherConditionsWrapper.className =\n        'current-other-conditions-wrapper col';\n    precipitationText.className = 'current-precipitation';\n    humidityText.className = 'current-humidity';\n    windText.className = 'current-wind';\n\n    fahrenheitLink.textContent = 'F°';\n    celsiusLink.textContent = 'C°';\n    weatherText.textContent = Math.ceil(currentTemp);\n    precipitationText.textContent = `Precipitation: ${currentPrecipitation}%`;\n    humidityText.textContent = `Humidity: ${currentHumidity}%`;\n    windText.textContent = `Wind: ${currentWind} mph`;\n\n    fahrenheitLink.href = '#';\n    celsiusLink.href = '#';\n\n    fahrenheit.appendChild(fahrenheitLink);\n    celsius.appendChild(celsiusLink);\n    weatherUnits.append(fahrenheit, celsius);\n    weatherText.appendChild(weatherUnits);\n    currentOtherConditionsWrapper.append(\n        precipitationText,\n        humidityText,\n        windText,\n    );\n    currentConditionsWrapper.append(weatherText, currentOtherConditionsWrapper);\n}\n\nfunction displayCurrentDescriptions(jsonData) {\n    const currentDescriptionsWrapper = document.querySelector(\n        '.current-descriptions-wrapper',\n    );\n    currentDescriptionsWrapper.replaceChildren();\n\n    const currentLocation = jsonData.resolvedAddress;\n    const currentTime = convertToStandardTime(\n        jsonData.currentConditions.datetime\n    );\n    const currentShortDescription = jsonData.currentConditions.conditions;\n    const currentTimeEpoch = jsonData.currentConditions.datetimeEpoch * 1000;\n    const currentTimeZoneOffset = jsonData.tzoffset * 3600000;\n    const currentWeekday = getWeekDay(currentTimeEpoch + currentTimeZoneOffset); // convert timezone offset to ms and times 100\n\n    const currentLocationElem = document.createElement('div');\n    const currentDateElem = document.createElement('div');\n    const currentShortDescriptionsElem = document.createElement('div');\n\n    currentLocationElem.className = 'current-location';\n    currentDateElem.className = '';\n    currentShortDescriptionsElem.className = '';\n\n    currentLocationElem.textContent = `${currentLocation}`;\n    currentDateElem.textContent = `${currentWeekday} ${currentTime}`;\n    currentShortDescriptionsElem.textContent = `${currentShortDescription}`;\n\n    currentDescriptionsWrapper.append(\n        currentLocationElem,\n        currentDateElem,\n        currentShortDescriptionsElem,\n    );\n}\n\nfunction getWeekDay(time) {\n    const dayNames = [\n        'Sunday',\n        'Monday',\n        'Tuesday',\n        'Wednesday',\n        'Thursday',\n        'Friday',\n        'Saturday',\n    ];\n\n    const today = new Date(time).getUTCDay();\n    return dayNames[today]\n}\n\nfunction convertToStandardTime(time) {\n    const [hour, min] = time.split(':');\n\n    if (Number(hour) < 12 && Number(hour) != 0) {\n        return `${hour}:${min} AM`;\n      } else if (Number(hour) >= 13) {\n        return `${Number(hour) - 12}:${min} PM`;\n      } else if (Number(hour) === 12) {\n        return `${Number(hour)}:${min} PM`;\n      } else {\n        return `${Number(hour) + 12}:${min} AM`;\n      }\n}\n\nasync function displayDayForecast(jsonData) {\n    const bottom = document.querySelector('.bottom');\n    bottom.replaceChildren();\n\n    const forecast = await jsonData.days.slice(0, 8);\n\n    forecast.forEach(async (dayForecast, i) => {\n        const dayWrapper = document.createElement('div');\n        const dayText = document.createElement('div');\n        const dayIconWrapper = document.createElement('div');\n        const dayTemperature = document.createElement('div');\n        const dayTemperatureLow = document.createElement('p');\n        const dayTemperatureHigh = document.createElement('p');\n        const dayIcon = await createCurrentWeatherIcon(dayForecast.icon);\n        const weekDay = await getWeekDay(dayForecast.datetime);\n\n        dayWrapper.dataset.day = i;\n        dayWrapper.className = 'day-wrapper col';\n        dayText.className = 'day-text';\n        dayIconWrapper.className = 'day-icon-wrapper';\n        dayTemperature.className = 'day-temperature flex';\n\n        dayText.textContent = `${weekDay}`;\n        dayTemperatureLow.textContent = await `${Math.ceil(dayForecast.tempmin)}°`;\n        dayTemperatureHigh.textContent = await `${Math.ceil(dayForecast.tempmax)}°`;\n\n        dayIconWrapper.appendChild(dayIcon);\n        dayTemperature.append(dayTemperatureLow, dayTemperatureHigh);\n        dayWrapper.append(dayText, dayIconWrapper, dayTemperature);\n        bottom.append(dayWrapper);\n    });\n}\n\nfunction displayForecastConditions(jsonData, forecastDay) {\n    const currentConditionsWrapper = document.querySelector(\n      '.current-conditions-wrapper',\n    );\n    currentConditionsWrapper.replaceChildren(); // Clear previous content\n  \n    const currentTemp = jsonData.days[forecastDay].temp;\n    const currentPrecipitation = jsonData.days[forecastDay].precip;\n    const currentHumidity = jsonData.days[forecastDay].humidity;\n    const currentWind = jsonData.days[forecastDay].windspeed;\n  \n    const weatherText = document.createElement('div');\n    const weatherUnits = document.createElement('div');\n    const fahrenheit = document.createElement('div');\n    const celsius = document.createElement('div');\n    const fahrenheitLink = document.createElement('a');\n    const celsiusLink = document.createElement('a');\n    const currentOtherConditionsWrapper = document.createElement('div');\n    const precipitationText = document.createElement('p');\n    const humidityText = document.createElement('p');\n    const windText = document.createElement('p');\n  \n    weatherText.className = 'current-temperature flex';\n    weatherUnits.className = 'weather-units flex';\n    fahrenheit.className = 'fahrenheit';\n    celsius.className = 'celsius';\n    fahrenheitLink.className = 'fahrenheit-link';\n    celsiusLink.className = 'celsius-link';\n    currentOtherConditionsWrapper.className =\n      'current-other-conditions-wrapper col';\n    precipitationText.className = 'current-precipitation';\n    humidityText.className = 'current-humidity';\n    windText.className = 'current-wind';\n  \n    fahrenheitLink.textContent = 'F°';\n    celsiusLink.textContent = 'C°';\n    weatherText.textContent = Math.ceil(currentTemp);\n    precipitationText.textContent = `Precipitation: ${currentPrecipitation}%`;\n    humidityText.textContent = `Humidity: ${currentHumidity}%`;\n    windText.textContent = `Wind: ${currentWind} mph`;\n  \n    fahrenheitLink.href = '#';\n    celsiusLink.href = '#';\n  \n    fahrenheit.appendChild(fahrenheitLink);\n    celsius.appendChild(celsiusLink);\n    weatherUnits.append(fahrenheit, celsius);\n    weatherText.appendChild(weatherUnits);\n    currentOtherConditionsWrapper.append(\n      precipitationText,\n      humidityText,\n      windText,\n    );\n    currentConditionsWrapper.append(weatherText, currentOtherConditionsWrapper);\n  }\n\n  function displayForecastDescriptions(jsonData, forecastDay) {\n    const currentDescriptionsWrapper = document.querySelector(\n      '.current-descriptions-wrapper',\n    );\n    currentDescriptionsWrapper.replaceChildren();\n  \n    const currentLocation = jsonData.resolvedAddress;\n  \n    const currentShortDescription = jsonData.days[forecastDay].conditions;\n    const currentTimeEpoch = jsonData.days[forecastDay].datetime;\n    const currentWeekday = getWeekDay(currentTimeEpoch);\n    const currentLocationElem = document.createElement('div');\n    const currentDateElem = document.createElement('div');\n    const currentShortDescriptionsElem = document.createElement('div');\n  \n    currentLocationElem.className = 'current-location';\n    currentDateElem.className = '';\n    currentShortDescriptionsElem.className = '';\n  \n    currentLocationElem.textContent = `${currentLocation}`;\n    currentDateElem.textContent = `${currentWeekday}`;\n    currentShortDescriptionsElem.textContent = `${currentShortDescription}`;\n  \n    currentDescriptionsWrapper.append(\n      currentLocationElem,\n      currentDateElem,\n      currentShortDescriptionsElem,\n    );\n  }\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    displayCurrentWeatherIcon,\n    displayCurrentConditions,\n    displayCurrentDescriptions,\n    displayDayForecast,\n    displayForecastConditions,\n    displayForecastDescriptions,\n  });\n\n//# sourceURL=webpack://odin-weather-app/./src/modules/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "odin-weather-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkodin_weather_app"] = self["webpackChunkodin_weather_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;