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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/subtitle/dist/subtitle.bundle.js":
/*!*******************************************************!*\
  !*** ./node_modules/subtitle/dist/subtitle.bundle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toMS;
/**
 * Return the given SRT timestamp as milleseconds.
 * @param {string|number} timestamp
 * @returns {number} milliseconds
 */

function toMS(timestamp) {
  if (!isNaN(timestamp)) {
    return timestamp;
  }

  var match = timestamp.match(/^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/);

  if (!match) {
    throw new Error('Invalid SRT or VTT time format: "' + timestamp + '"');
  }

  var hours = match[1] ? parseInt(match[1], 10) * 3600000 : 0;
  var minutes = parseInt(match[2], 10) * 60000;
  var seconds = parseInt(match[3], 10) * 1000;
  var milliseconds = parseInt(match[4], 10);

  return hours + minutes + seconds + milliseconds;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toSrtTime;

var _zeroFill = __webpack_require__(2);

var _zeroFill2 = _interopRequireDefault(_zeroFill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return the given milliseconds as SRT timestamp.
 * @param timestamp
 * @returns {string}
 */

function toSrtTime(timestamp) {
  if (isNaN(timestamp)) {
    return timestamp;
  }

  var date = new Date(0, 0, 0, 0, 0, 0, timestamp);

  var hours = (0, _zeroFill2.default)(2, date.getHours());
  var minutes = (0, _zeroFill2.default)(2, date.getMinutes());
  var seconds = (0, _zeroFill2.default)(2, date.getSeconds());
  var ms = timestamp - (hours * 3600000 + minutes * 60000 + seconds * 1000);

  return hours + ':' + minutes + ':' + seconds + ',' + (0, _zeroFill2.default)(3, ms);
} /**
   * Module dependencies.
   */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Given a number, return a zero-filled string.
 * From http://stackoverflow.com/questions/1267283/
 * @param  {number} width
 * @param  {number} number
 * @return {string}
 */
module.exports = function zeroFill (width, number, pad) {
  if (number === undefined) {
    return function (number, pad) {
      return zeroFill(width, number, pad)
    }
  }
  if (pad === undefined) pad = '0'
  width -= number.toString().length
  if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
  return number + ''
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toVttTime;

var _zeroFill = __webpack_require__(2);

var _zeroFill2 = _interopRequireDefault(_zeroFill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return the given milliseconds as WebVTT timestamp.
 * @param timestamp
 * @returns {string}
 */

function toVttTime(timestamp) {
  if (isNaN(timestamp)) {
    return timestamp;
  }

  var date = new Date(0, 0, 0, 0, 0, 0, timestamp);

  var hours = (0, _zeroFill2.default)(2, date.getHours());
  var minutes = (0, _zeroFill2.default)(2, date.getMinutes());
  var seconds = (0, _zeroFill2.default)(2, date.getSeconds());
  var ms = timestamp - (hours * 3600000 + minutes * 60000 + seconds * 1000);

  return hours + ':' + minutes + ':' + seconds + '.' + (0, _zeroFill2.default)(3, ms);
} /**
   * Module dependencies.
   */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseTimestamps;

var _toMS = __webpack_require__(0);

var _toMS2 = _interopRequireDefault(_toMS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Timestamp regex
 * @type {RegExp}
 */

var RE = /^((?:\d{2,}:)?\d{2}:\d{2}[,.]\d{3}) --> ((?:\d{2,}:)?\d{2}:\d{2}[,.]\d{3})(?: (.*))?$/;

/**
 * parseTimestamps
 * @param value
 * @returns {{start: Number, end: Number}}
 */

/**
 * Module dependencies.
 */

function parseTimestamps(value) {
  var match = RE.exec(value);
  var cue = {
    start: (0, _toMS2.default)(match[1]),
    end: (0, _toMS2.default)(match[2])
  };
  if (match[3]) {
    cue.settings = match[3];
  }
  return cue;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toMS = __webpack_require__(0);

Object.defineProperty(exports, 'toMS', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toMS).default;
  }
});

var _toSrtTime = __webpack_require__(1);

Object.defineProperty(exports, 'toSrtTime', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toSrtTime).default;
  }
});

var _toVttTime = __webpack_require__(3);

Object.defineProperty(exports, 'toVttTime', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toVttTime).default;
  }
});

var _parse = __webpack_require__(6);

Object.defineProperty(exports, 'parse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parse).default;
  }
});

var _stringify = __webpack_require__(7);

Object.defineProperty(exports, 'stringify', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stringify).default;
  }
});

var _stringifyVtt = __webpack_require__(8);

Object.defineProperty(exports, 'stringifyVtt', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stringifyVtt).default;
  }
});

var _resync = __webpack_require__(9);

Object.defineProperty(exports, 'resync', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resync).default;
  }
});

var _parseTimestamps = __webpack_require__(4);

Object.defineProperty(exports, 'parseTimestamps', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseTimestamps).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _parseTimestamps = __webpack_require__(4);

var _parseTimestamps2 = _interopRequireDefault(_parseTimestamps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parse a SRT or WebVTT string.
 * @param {String} srtOrVtt
 * @return {Array} subtitles
 */

function parse(srtOrVtt) {
  if (!srtOrVtt) return [];

  var source = srtOrVtt.trim().concat('\n').replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/^WEBVTT.*\n(?:.*: .*\n)*\n/, '').split('\n');

  return source.reduce(function (captions, row, index) {
    var caption = captions[captions.length - 1];

    if (!caption.index) {
      if (/^\d+$/.test(row)) {
        caption.index = parseInt(row, 10);
        return captions;
      }
    }

    if (!caption.hasOwnProperty('start')) {
      Object.assign(caption, (0, _parseTimestamps2.default)(row));
      return captions;
    }

    if (row === '') {
      delete caption.index;
      if (index !== source.length - 1) {
        captions.push({});
      }
    } else {
      caption.text = caption.text ? caption.text + '\n' + row : row;
    }

    return captions;
  }, [{}]);
} /**
   * Module dependencies.
   */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringify;

var _toSrtTime = __webpack_require__(1);

var _toSrtTime2 = _interopRequireDefault(_toSrtTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Stringify the given array of captions.
 * @param {Array} captions
 * @return {String} srt
 */

function stringify(captions) {
  return captions.map(function (caption, index) {
    return (index > 0 ? '\n' : '') + [index + 1, (0, _toSrtTime2.default)(caption.start) + ' --> ' + (0, _toSrtTime2.default)(caption.end), caption.text].join('\n');
  }).join('\n') + '\n';
} /**
   * Module dependencies.
   */

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringifyVtt;

var _toVttTime = __webpack_require__(3);

var _toVttTime2 = _interopRequireDefault(_toVttTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Stringify the given array of captions to WebVTT format.
 * @param {Array} captions
 * @return {String} webVtt
 */

function stringifyVtt(captions) {
  return 'WEBVTT\n\n' + captions.map(function (caption, index) {
    return (index > 0 ? '\n' : '') + [index + 1, (0, _toVttTime2.default)(caption.start) + ' --> ' + (0, _toVttTime2.default)(caption.end) + (caption.settings ? ' ' + caption.settings : ''), caption.text].join('\n');
  }).join('\n') + '\n';
} /**
   * Module dependencies.
   */

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resync;

var _toMS = __webpack_require__(0);

var _toMS2 = _interopRequireDefault(_toMS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resync the given subtitles.
 * @param captions
 * @param time
 * @returns {Array|*}
 */

function resync(captions, time) {
  return captions.map(function (caption) {
    var start = (0, _toMS2.default)(caption.start) + time;
    var end = (0, _toMS2.default)(caption.end) + time;

    return Object.assign({}, caption, {
      start: start,
      end: end
    });
  });
} /**
   * Module dependencies.
   */

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./scripts/index.ts":
/*!**************************!*\
  !*** ./scripts/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var subtitle_1 = __webpack_require__(/*! subtitle */ "./node_modules/subtitle/dist/subtitle.bundle.js");
// https://github.com/gsantiago/subtitle.js#readme
function Main() {
    return __awaiter(this, void 0, void 0, function () {
        var data, content, subtitles, i, subtitle, nextSubtitle, end, start, duration, nextStart, duration2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("carol.srt")];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.text()];
                case 2:
                    content = _a.sent();
                    subtitles = subtitle_1.parse(content);
                    i = 0;
                    return [4 /*yield*/, wait(parseInt(subtitles[0].start.toString(), 10))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (false) {}
                    subtitle = subtitles[i];
                    nextSubtitle = subtitles[i + 1];
                    // tslint:disable-next-line:no-console
                    console.log(subtitle.text);
                    end = parseInt(subtitle.end.toString(), 10);
                    start = parseInt(subtitle.start.toString(), 10);
                    duration = end - start;
                    return [4 /*yield*/, wait(duration)];
                case 5:
                    _a.sent();
                    // tslint:disable-next-line:no-console
                    console.clear();
                    nextStart = parseInt(nextSubtitle.start.toString(), 10);
                    duration2 = nextStart - end;
                    return [4 /*yield*/, wait(duration2)];
                case 6:
                    _a.sent();
                    i++;
                    return [3 /*break*/, 4];
                case 7: return [2 /*return*/];
            }
        });
    });
}
Main();
function wait(delay) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(resolve, delay);
                })];
        });
    });
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.index.js.map