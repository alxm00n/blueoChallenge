/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/location.service.js":
/*!********************************************!*\
  !*** ./src/components/location.service.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LocationService; });\n\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"url\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LocationService =\n/*#__PURE__*/\nfunction () {\n  function LocationService() {\n    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isRequired(_templateObject());\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, LocationService);\n\n    this.url = url;\n    this.options = options;\n  }\n\n  _createClass(LocationService, [{\n    key: \"getLocations\",\n    value: function getLocations() {\n      var tempLocations = this.fetchData(this.url, this.options);\n      var locations = [];\n      return tempLocations.then(function (json) {\n        json.forEach(function (location, index) {\n          locations.push(new LocationModel(location));\n        });\n        return Promise.resolve(locations);\n      });\n    }\n  }, {\n    key: \"fetchData\",\n    value: function fetchData(url, options) {\n      return fetch(url, options).then(function (response) {\n        if (response.ok) {\n          return Promise.resolve(response);\n        } else {\n          return Promise.reject(new Error(\"\".concat(response.status, \": \").concat(response.statusText)));\n        }\n      }).then(function (response) {\n        return response.json();\n      });\n    }\n  }, {\n    key: \"isRequired\",\n    value: function isRequired(param) {\n      throw new Error(\"\".concat(param, \" is required.\"));\n    }\n  }]);\n\n  return LocationService;\n}(); // TODO: check object nested properties exist\n\n\n\n\nvar LocationModel =\n/*#__PURE__*/\nfunction () {\n  function LocationModel(location) {\n    _classCallCheck(this, LocationModel);\n\n    this.locationID = location.locationID;\n    this.city = location.city.name;\n    this.country = location.country.name;\n    this.countryAbb = location.country.abbreviation;\n    this.locationName = this.createName(this.city, this.country);\n    this.countryFlag = this.getFlagID(location);\n  } // TODO: update checks for undefined properties '-' and 'Not Provided'\n\n\n  _createClass(LocationModel, [{\n    key: \"createName\",\n    value: function createName() {\n      var city = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Not Provided';\n      var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      return \"\".concat(city, \"-\").concat(country);\n    } // TODO: build logic to get the flagID to match icon flag key\n\n  }, {\n    key: \"getFlagID\",\n    value: function getFlagID(location) {\n      return 'XXX';\n    }\n  }]);\n\n  return LocationModel;\n}();\n\n//# sourceURL=webpack:///./src/components/location.service.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mock_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock.app.js */ \"./src/mock.app.js\");\n\n\n\nvar el = document.getElementById('app');\ndocument.addEventListener('DOMContentLoaded', function (el) {\n  debugger;\n  var app = new _mock_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el);\n  app.init();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mock.app.js":
/*!*************************!*\
  !*** ./src/mock.app.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _components_location_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/location.service.js */ \"./src/components/location.service.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App(el) {\n    _classCallCheck(this, App);\n\n    this.el = el;\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {\n      var locationsUrl = \"http://localhost:3000/locations\"; // test url\n\n      var service = new _components_location_service_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](locationsUrl);\n      var locations = service.getLocations();\n      locations.then(function (locations) {\n        debugger;\n      }).catch(function (error) {\n        return console.log(\"Locations request failed: \".concat(error.message));\n      });\n    }\n  }]);\n\n  return App;\n}();\n\n\n\n//# sourceURL=webpack:///./src/mock.app.js?");

/***/ })

/******/ });