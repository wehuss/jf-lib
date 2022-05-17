var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { ref, reactive, inject, computed, getCurrentInstance, cloneVNode, defineComponent, watch, onMounted, onUnmounted, openBlock, createElementBlock, normalizeClass, renderSlot, normalizeStyle, createElementVNode, resolveComponent, createBlock, createCommentVNode, toRef, toRefs, createVNode, mergeProps, createTextVNode, nextTick, provide, Fragment, createSlots, withCtx, withModifiers, onUpdated, onBeforeUnmount, Teleport, Transition, withDirectives, vShow, toDisplayString, resolveDynamicComponent, TransitionGroup, watchEffect, isVNode, render, renderList, h, unref, isRef } from "vue";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types2 = freeModule && freeModule.require && freeModule.require("util").types;
        if (types2) {
          return types2;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        var value = array[index2];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (iteratee(array[index2], index2, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (!predicate(array[index2], index2, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (predicate(value, index2, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (comparator(value, array[index2])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array[index2], index2, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index2 = -1, length = values.length, offset = array.length;
      while (++index2 < length) {
        array[offset + index2] = values[index2];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index2 = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index2];
      }
      while (++index2 < length) {
        accumulator = iteratee(accumulator, array[index2], index2, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (comparator(array[index2], value)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index2, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index2, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index2 = -1, length = array.length;
      while (++index2 < length) {
        var current = iteratee(array[index2]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n, iteratee) {
      var index2 = -1, result = Array(n);
      while (++index2 < n) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index2 = -1, length = strSymbols.length;
      while (++index2 < length && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index2 = strSymbols.length;
      while (index2-- && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index2 = -1, length = array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index2] = PLACEHOLDER;
          result[resIndex++] = index2;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index2 = fromIndex + 1;
      while (index2--) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return index2;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index2 = string.length;
      while (index2-- && reWhitespace.test(string.charAt(index2))) {
      }
      return index2;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root._;
      var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer2 = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap2 && new WeakMap2();
      var realNames = {};
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
      var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index2 = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index2 += dir;
            var iterIndex = -1, value = array[index2];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed2;
              } else if (!computed2) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index2 == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index2, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        return index2 < 0 ? undefined$1 : data[index2][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index2][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index2 = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index2 < length) {
          this.add(values2[index2]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array, n) {
        return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index2 = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index2 < length) {
          result2[index2] = skip ? undefined$1 : get(object, paths[index2]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject2(value)) {
          return value;
        }
        var isArr = isArray2(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source[key], value = object[key];
          if (value === undefined$1 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed2 = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed2) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed2, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index2, collection2) {
          result2 = !!predicate(value, index2, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index2 = -1, length = array.length;
        while (++index2 < length) {
          var value = array[index2], current = iteratee2(value);
          if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
            var computed2 = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index2, collection2) {
          if (predicate(value, index2, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index2 = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index2 < length) {
          var value = array[index2];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction2(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index2 = 0, length = path.length;
        while (object != null && index2 < length) {
          object = object[toKey(path[index2++])];
        }
        return index2 && index2 == length ? object : undefined$1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray2(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap(array, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
        }
        array = arrays[0];
        var index2 = -1, seen = caches[0];
        outer:
          while (++index2 < length && result2.length < maxLength) {
            var value = array[index2], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined$1 : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index2 = matchData.length, length = index2, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index2--) {
          var data = matchData[index2];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index2 < length) {
          data = matchData[index2];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject2(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject2(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index2 = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index2] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject2(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray2(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject2(objValue) || isFunction2(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n) {
        var length = array.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex(n, length) ? array[n] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray2(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index2 = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index2, "value": value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index2 = -1, length = paths.length, result2 = {};
        while (++index2 < length) {
          var path = paths[index2], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array, baseUnary(iteratee2));
        }
        while (++index2 < length) {
          var fromIndex = 0, value = values2[index2], computed2 = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index2 = indexes[length];
          if (length == lastIndex || index2 !== previous) {
            var previous = index2;
            if (isIndex(index2)) {
              splice.call(array, index2, 1);
            } else {
              baseUnset(array, index2);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index2 = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index2] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n) {
        var result2 = "";
        if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string += string;
          }
        } while (n);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject2(object)) {
          return object;
        }
        path = castPath(path, object);
        var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index2 < length) {
          var key = toKey(path[index2]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index2 != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject2(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index2 = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index2 < length) {
          result2[index2] = array[index2 + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index2, collection2) {
          result2 = predicate(value, index2, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed2 = array[mid];
            if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed2 <= value : computed2 < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index2 = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2], computed2 = iteratee2 ? iteratee2(value) : value;
          if (!index2 || !eq(computed2, seen)) {
            var seen = computed2;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray2(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed2) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed2);
              }
              result2.push(value);
            } else if (!includes2(seen, computed2, comparator)) {
              if (seen !== result2) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index2 = fromRight ? length : -1;
        while ((fromRight ? index2-- : ++index2 < length) && predicate(array[index2], index2, array)) {
        }
        return isDrop ? baseSlice(array, fromRight ? 0 : index2, fromRight ? index2 + 1 : length) : baseSlice(array, fromRight ? index2 + 1 : 0, fromRight ? length : index2);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index2 = -1, result2 = Array2(length);
        while (++index2 < length) {
          var array = arrays[index2], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index2) {
              result2[index2] = baseDifference(result2[index2] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index2 = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index2 < length) {
          var value = index2 < valsLength ? values2[index2] : undefined$1;
          assignFunc(result2, props[index2], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      function castPath(value, object) {
        if (isArray2(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      var clearTimeout = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index2 = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index2 < length) {
          var result2 = compareAscending(objCriteria[index2], othCriteria[index2]);
          if (result2) {
            if (index2 >= ordersLength) {
              return result2;
            }
            var order = orders[index2];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array) {
        var index2 = -1, length = source.length;
        array || (array = Array2(length));
        while (++index2 < length) {
          array[index2] = source[index2];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index2 = -1, length = props.length;
        while (++index2 < length) {
          var key = props[index2];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index2 < length) {
            var source = sources[index2];
            if (source) {
              assigner(object, source, index2, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index2 = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index2-- : ++index2 < length) {
            if (iteratee2(iterable[index2], index2, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index2 = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index2];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject2(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length, placeholder = getHolder(wrapper);
          while (index2--) {
            args[index2] = arguments[index2];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
          }
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index2 = findIndexFunc(collection, predicate, fromIndex);
          return index2 > -1 ? iterable[iteratee2 ? collection[index2] : index2] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index2--) {
            var func = funcs[index2];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index2 = wrapper ? index2 : length;
          while (++index2 < length) {
            func = funcs[index2];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray2(value)) {
              return wrapper.plant(value).value();
            }
            var index3 = 0, result2 = length ? funcs[index3].apply(this, args) : value;
            while (++index3 < length) {
              result2 = funcs[index3].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length;
          while (index2--) {
            args[index2] = arguments[index2];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject2(objValue) && isObject2(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array, other);
        stack.set(other, array);
        while (++index2 < arrLength) {
          var arrValue = array[index2], othValue = other[index2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index2 = objLength;
        while (index2--) {
          var key = objProps[index2];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index2 < objLength) {
          key = objProps[index2];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined$1;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index2 = -1, length = transforms.length;
        while (++index2 < length) {
          var data = transforms[index2], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index2 = -1, length = path.length, result2 = false;
        while (++index2 < length) {
          var key = toKey(path[index2]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index2 != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray2(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray2(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index2, object) {
        if (!isObject2(object)) {
          return false;
        }
        var type = typeof index2;
        if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
          return eq(object[index2], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray2(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction2 : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject2(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
          while (++index2 < length) {
            array[index2] = args[start + index2];
          }
          index2 = -1;
          var otherArgs = Array2(start + 1);
          while (++index2 < start) {
            otherArgs[index2] = args[index2];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
          var index2 = indexes[length];
          array[length] = isIndex(index2, arrLength) ? oldArray[index2] : undefined$1;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index2 = -1, length = array.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index2 < size2) {
          var rand = baseRandom(index2, lastIndex), value = array[rand];
          array[rand] = array[index2];
          array[index2] = value;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index2 = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index2 < length) {
          result2[resIndex++] = baseSlice(array, index2, index2 += size2);
        }
        return result2;
      }
      function compact(array) {
        var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index2 = length;
        while (index2--) {
          args[index2 - 1] = arguments[index2];
        }
        return arrayPush(isArray2(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function dropRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax(length + index2, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index2);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length - 1;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = fromIndex < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index2, true);
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index2 = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index2 < length) {
          var pair = pairs[index2];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined$1;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax(length + index2, 0);
        }
        return baseIndexOf(array, value, index2);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined$1;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = index2 < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index2) : baseFindIndex(array, baseIsNaN, index2, true);
      }
      function nth(array, n) {
        return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index2) {
          return isIndex(index2, length) ? +index2 : index2;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index2 = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index2 < length) {
          var value = array[index2];
          if (predicate(value, index2, array)) {
            result2.push(value);
            indexes.push(index2);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value);
          if (index2 < length && eq(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value, true) - 1;
          if (eq(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 1, length) : [];
      }
      function take(array, n, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function takeRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index2) {
          return arrayMap(array, baseProperty(index2));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined$1);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray2(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString2(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index2 = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index2] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray2(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray2(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray2(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray2(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray2(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString2(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray2(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined$1 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index2 = -1, length = nativeMin(args.length, funcsLength);
          while (++index2 < length) {
            args[index2] = transforms[index2].call(this, args[index2]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject2(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce2(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray2(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray2 = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction2(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean2(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement2(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual2(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction2(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN(value) {
        return isNumber2(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull2(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber2(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString2(value) {
        return typeof value == "string" || !isArray2(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined2(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString2(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest(function(object, sources) {
        object = Object2(object);
        var index2 = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index2 < length) {
          var source = sources[index2];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit2 = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick2 = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index2 = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined$1;
        }
        while (++index2 < length) {
          var value = object == null ? undefined$1 : object[toKey(path[index2])];
          if (value === undefined$1) {
            index2 = length;
            value = defaultValue;
          }
          object = isFunction2(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray2(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject2(object)) {
            accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index2, object2) {
          return iteratee2(accumulator, value, index2, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index2) {
        word = word.toLowerCase();
        return result2 + (index2 ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target2, position) {
        string = toString(string);
        target2 = baseToString(target2);
        var length = string.length;
        position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target2.length;
        return position >= 0 && string.slice(position, end) == target2;
      }
      function escape(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
      }
      function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n, guard) {
        if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString(string), n);
      }
      function replace() {
        var args = arguments, string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target2, position) {
        string = toString(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target2 = baseToString(target2);
        return string.slice(position, position + target2.length) == target2;
      }
      function template(string, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined$1;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index2 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index2 = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return baseTrim(string);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject2(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString(options.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index2 = result2.lastIndexOf(separator);
          if (index2 > -1) {
            result2 = result2.slice(0, index2);
          }
        }
        return result2 + omission;
      }
      function unescape(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index2 = -1;
          while (++index2 < length) {
            var pair = pairs[index2];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props = keys(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times2(n, iteratee2) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER) {
          return [];
        }
        var index2 = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index2 < n) {
          iteratee2(index2);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray2(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide2 = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round2 = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce2;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys;
      lodash2.keysIn = keysIn;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit2;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick2;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle2;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide2;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq;
      lodash2.escape = escape;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments;
      lodash2.isArray = isArray2;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean2;
      lodash2.isBuffer = isBuffer;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement2;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual2;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction2;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull2;
      lodash2.isNumber = isNumber2;
      lodash2.isObject = isObject2;
      lodash2.isObjectLike = isObjectLike;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString2;
      lodash2.isSymbol = isSymbol;
      lodash2.isTypedArray = isTypedArray;
      lodash2.isUndefined = isUndefined2;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop;
      lodash2.now = now;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round2;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times2;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index2) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
          var result2 = this.__filtered__ && !index2 ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin(n, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index2) {
        var type = index2 + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index2) {
        var takeName = "take" + (index2 ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index2) {
        var dropName = "drop" + (index2 ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray2(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray2(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _ = runInContext();
    if (freeModule) {
      (freeModule.exports = _)._ = _;
      freeExports._ = _;
    } else {
      root._ = _;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
const opt = Object.prototype.toString;
function isArray(obj) {
  return opt.call(obj) === "[object Array]";
}
function isNull(obj) {
  return opt.call(obj) === "[object Null]";
}
function isBoolean(obj) {
  return opt.call(obj) === "[object Boolean]";
}
function isObject(obj) {
  return opt.call(obj) === "[object Object]";
}
function isString(obj) {
  return opt.call(obj) === "[object String]";
}
function isNumber(obj) {
  return opt.call(obj) === "[object Number]" && obj === obj;
}
function isUndefined(obj) {
  return obj === void 0;
}
function isFunction(obj) {
  return typeof obj === "function";
}
const isComponentInstance = (value) => {
  return (value == null ? void 0 : value.$) !== void 0;
};
const configProviderInjectionKey = Symbol("ArcoConfigProvider");
const calendarLang = {
  formatYear: "YYYY \u5E74",
  formatMonth: "YYYY \u5E74 MM \u6708",
  today: "\u4ECA\u5929",
  view: {
    month: "\u6708",
    year: "\u5E74",
    week: "\u5468",
    day: "\u65E5"
  },
  month: {
    long: {
      January: "\u4E00\u6708",
      February: "\u4E8C\u6708",
      March: "\u4E09\u6708",
      April: "\u56DB\u6708",
      May: "\u4E94\u6708",
      June: "\u516D\u6708",
      July: "\u4E03\u6708",
      August: "\u516B\u6708",
      September: "\u4E5D\u6708",
      October: "\u5341\u6708",
      November: "\u5341\u4E00\u6708",
      December: "\u5341\u4E8C\u6708"
    },
    short: {
      January: "\u4E00\u6708",
      February: "\u4E8C\u6708",
      March: "\u4E09\u6708",
      April: "\u56DB\u6708",
      May: "\u4E94\u6708",
      June: "\u516D\u6708",
      July: "\u4E03\u6708",
      August: "\u516B\u6708",
      September: "\u4E5D\u6708",
      October: "\u5341\u6708",
      November: "\u5341\u4E00\u6708",
      December: "\u5341\u4E8C\u6708"
    }
  },
  week: {
    long: {
      self: "\u5468",
      monday: "\u5468\u4E00",
      tuesday: "\u5468\u4E8C",
      wednesday: "\u5468\u4E09",
      thursday: "\u5468\u56DB",
      friday: "\u5468\u4E94",
      saturday: "\u5468\u516D",
      sunday: "\u5468\u65E5"
    },
    short: {
      self: "\u5468",
      monday: "\u4E00",
      tuesday: "\u4E8C",
      wednesday: "\u4E09",
      thursday: "\u56DB",
      friday: "\u4E94",
      saturday: "\u516D",
      sunday: "\u65E5"
    }
  }
};
const lang = {
  locale: "zh-CN",
  empty: {
    description: "\u6682\u65E0\u6570\u636E"
  },
  drawer: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  popconfirm: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  modal: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  pagination: {
    goto: "\u524D\u5F80",
    page: "\u9875",
    countPerPage: "\u6761/\u9875",
    total: "\u5171 {0} \u6761"
  },
  table: {
    okText: "\u786E\u5B9A",
    resetText: "\u91CD\u7F6E"
  },
  upload: {
    start: "\u5F00\u59CB",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    retry: "\u70B9\u51FB\u91CD\u8BD5",
    buttonText: "\u70B9\u51FB\u4E0A\u4F20",
    preview: "\u9884\u89C8",
    drag: "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u4E0A\u4F20",
    dragHover: "\u91CA\u653E\u6587\u4EF6\u5E76\u5F00\u59CB\u4E0A\u4F20",
    error: "\u4E0A\u4F20\u5931\u8D25"
  },
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: "\u8BF7\u9009\u62E9\u65E5\u671F",
      week: "\u8BF7\u9009\u62E9\u5468",
      month: "\u8BF7\u9009\u62E9\u6708\u4EFD",
      year: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
      quarter: "\u8BF7\u9009\u62E9\u5B63\u5EA6",
      time: "\u8BF7\u9009\u62E9\u65F6\u95F4"
    },
    rangePlaceholder: {
      date: ["\u5F00\u59CB\u65E5\u671F", "\u7ED3\u675F\u65E5\u671F"],
      week: ["\u5F00\u59CB\u5468", "\u7ED3\u675F\u5468"],
      month: ["\u5F00\u59CB\u6708\u4EFD", "\u7ED3\u675F\u6708\u4EFD"],
      year: ["\u5F00\u59CB\u5E74\u4EFD", "\u7ED3\u675F\u5E74\u4EFD"],
      quarter: ["\u5F00\u59CB\u5B63\u5EA6", "\u7ED3\u675F\u5B63\u5EA6"],
      time: ["\u5F00\u59CB\u65F6\u95F4", "\u7ED3\u675F\u65F6\u95F4"]
    },
    selectTime: "\u9009\u62E9\u65F6\u95F4",
    today: "\u4ECA\u5929",
    now: "\u6B64\u523B",
    ok: "\u786E\u5B9A"
  },
  image: {
    loading: "\u52A0\u8F7D\u4E2D"
  },
  imagePreview: {
    fullScreen: "\u5168\u5C4F",
    rotateRight: "\u5411\u53F3\u65CB\u8F6C",
    rotateLeft: "\u5411\u5DE6\u65CB\u8F6C",
    zoomIn: "\u653E\u5927",
    zoomOut: "\u7F29\u5C0F",
    originalSize: "\u539F\u59CB\u5C3A\u5BF8"
  },
  typography: {
    copied: "\u5DF2\u590D\u5236",
    copy: "\u590D\u5236",
    expand: "\u5C55\u5F00",
    collapse: "\u6298\u53E0",
    edit: "\u7F16\u8F91"
  }
};
const LOCALE = ref("zh-CN");
const I18N_MESSAGES = reactive({
  "zh-CN": lang
});
const useI18n = () => {
  const configProvider = inject(configProviderInjectionKey, void 0);
  const i18nMessage = computed(() => {
    var _a;
    return (_a = configProvider == null ? void 0 : configProvider.locale) != null ? _a : I18N_MESSAGES[LOCALE.value];
  });
  const locale = computed(() => i18nMessage.value.locale);
  const transform = (key, ...args) => {
    const keyArray = key.split(".");
    let temp = i18nMessage.value;
    for (const keyItem of keyArray) {
      if (!temp[keyItem]) {
        return key;
      }
      temp = temp[keyItem];
    }
    if (isString(temp)) {
      if (args.length > 0) {
        return temp.replace(/{(\d+)}/g, (sub, index2) => {
          var _a;
          return (_a = args[index2]) != null ? _a : sub;
        });
      }
      return temp;
    }
    return temp;
  };
  return {
    locale,
    t: transform
  };
};
var __defProp$f = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$g.call(b, prop))
      __defNormalProp$f(a, prop, b[prop]);
  if (__getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(b)) {
      if (__propIsEnum$g.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
const COMPONENT_PREFIX = "A";
const CLASS_PREFIX = "arco";
const GLOBAL_CONFIG_NAME = "$arco";
const getComponentPrefix = (options) => {
  var _a;
  return (_a = options == null ? void 0 : options.componentPrefix) != null ? _a : COMPONENT_PREFIX;
};
const setGlobalConfig = (app, options) => {
  var _a;
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = __spreadProps$7(__spreadValues$f({}, (_a = app.config.globalProperties[GLOBAL_CONFIG_NAME]) != null ? _a : {}), {
      classPrefix: options.classPrefix
    });
  }
};
const getPrefixCls = (componentName) => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  const configProvider = inject(configProviderInjectionKey, void 0);
  const prefix = (_c = (_b = configProvider == null ? void 0 : configProvider.prefixCls) != null ? _b : (_a = instance == null ? void 0 : instance.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]) == null ? void 0 : _a.classPrefix) != null ? _c : CLASS_PREFIX;
  if (componentName) {
    return `${prefix}-${componentName}`;
  }
  return prefix;
};
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return function() {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    class_1.prototype.get = function(key) {
      var index2 = getIndex(this.__entries__, key);
      var entry = this.__entries__[index2];
      return entry && entry[1];
    };
    class_1.prototype.set = function(key, value) {
      var index2 = getIndex(this.__entries__, key);
      if (~index2) {
        this.__entries__[index2][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    class_1.prototype.delete = function(key) {
      var entries = this.__entries__;
      var index2 = getIndex(entries, key);
      if (~index2) {
        entries.splice(index2, 1);
      }
    };
    class_1.prototype.has = function(key) {
      return !!~getIndex(this.__entries__, key);
    };
    class_1.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    class_1.prototype.forEach = function(callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return class_1;
  }();
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    var observers2 = this.observers_;
    var index2 = observers2.indexOf(observer);
    if (~index2) {
      observers2.splice(index2, 1);
    }
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    var activeObservers = this.observers_.filter(function(observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function(observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser || this.connected_) {
      return;
    }
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
    var isReflowProperty = transitionKeys.some(function(key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController2.getInstance = function() {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController2();
    }
    return this.instance_;
  };
  ResizeObserverController2.instance_ = null;
  return ResizeObserverController2;
}();
var defineConfigurable = function(target2, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target2, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target2;
};
var getWindowOf = function(target2) {
  var ownerGlobal = target2 && target2.ownerDocument && target2.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target2) {
  var bbox = target2.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target2) {
  var clientWidth = target2.clientWidth, clientHeight = target2.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target2).getComputedStyle(target2);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target2)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target2) {
      return target2 instanceof getWindowOf(target2).SVGGraphicsElement;
    };
  }
  return function(target2) {
    return target2 instanceof getWindowOf(target2).SVGElement && typeof target2.getBBox === "function";
  };
}();
function isDocumentElement(target2) {
  return target2 === getWindowOf(target2).document.documentElement;
}
function getContentRect(target2) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target2)) {
    return getSVGContentRect(target2);
  }
  return getHTMLElementContentRect(target2);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation = function() {
  function ResizeObservation2(target2) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target2;
  }
  ResizeObservation2.prototype.isActive = function() {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation2.prototype.broadcastRect = function() {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation2;
}();
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target2, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, { target: target2, contentRect });
  }
  return ResizeObserverEntry2;
}();
var ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target2) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target2 instanceof getWindowOf(target2).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target2)) {
      return;
    }
    observations.set(target2, new ResizeObservation(target2));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target2) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target2 instanceof getWindowOf(target2).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target2)) {
      return;
    }
    observations.delete(target2);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function(observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    var entries = this.activeObservations_.map(function(observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI2;
}();
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver$2 = function() {
  function ResizeObserver2(callback) {
    if (!(this instanceof ResizeObserver2)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver2;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver$2.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index$1 = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver$2;
}();
var ShapeFlags;
(function(ShapeFlags2) {
  ShapeFlags2[ShapeFlags2["ELEMENT"] = 1] = "ELEMENT";
  ShapeFlags2[ShapeFlags2["FUNCTIONAL_COMPONENT"] = 2] = "FUNCTIONAL_COMPONENT";
  ShapeFlags2[ShapeFlags2["STATEFUL_COMPONENT"] = 4] = "STATEFUL_COMPONENT";
  ShapeFlags2[ShapeFlags2["COMPONENT"] = 6] = "COMPONENT";
  ShapeFlags2[ShapeFlags2["TEXT_CHILDREN"] = 8] = "TEXT_CHILDREN";
  ShapeFlags2[ShapeFlags2["ARRAY_CHILDREN"] = 16] = "ARRAY_CHILDREN";
  ShapeFlags2[ShapeFlags2["SLOTS_CHILDREN"] = 32] = "SLOTS_CHILDREN";
  ShapeFlags2[ShapeFlags2["TELEPORT"] = 64] = "TELEPORT";
  ShapeFlags2[ShapeFlags2["SUSPENSE"] = 128] = "SUSPENSE";
  ShapeFlags2[ShapeFlags2["COMPONENT_SHOULD_KEEP_ALIVE"] = 256] = "COMPONENT_SHOULD_KEEP_ALIVE";
  ShapeFlags2[ShapeFlags2["COMPONENT_KEPT_ALIVE"] = 512] = "COMPONENT_KEPT_ALIVE";
})(ShapeFlags || (ShapeFlags = {}));
var PatchFlags;
(function(PatchFlags2) {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["DEV_ROOT_FRAGMENT"] = 2048] = "DEV_ROOT_FRAGMENT";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
})(PatchFlags || (PatchFlags = {}));
const isElement = (vn) => {
  return Boolean(vn && vn.shapeFlag & 1);
};
const isComponent = (vn, type) => {
  return Boolean(vn && vn.shapeFlag & 6);
};
const isArrayChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 16);
};
const isSlotsChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 32);
};
const getFirstComponent = (children) => {
  var _a, _b;
  if (!children) {
    return void 0;
  }
  for (const child of children) {
    if (isElement(child) || isComponent(child)) {
      return child;
    }
    if (isArrayChildren(child, child.children)) {
      const result = getFirstComponent(child.children);
      if (result)
        return result;
    } else if (isSlotsChildren(child, child.children)) {
      const children2 = (_b = (_a = child.children).default) == null ? void 0 : _b.call(_a);
      if (children2) {
        const result = getFirstComponent(children2);
        if (result)
          return result;
      }
    } else if (isArray(child)) {
      const result = getFirstComponent(child);
      if (result)
        return result;
    }
  }
  return void 0;
};
const isEmptyChildren = (children) => {
  if (!children) {
    return true;
  }
  for (const item of children) {
    if (item.children) {
      return false;
    }
  }
  return true;
};
const mergeFirstChild = (children, extraProps) => {
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isElement(child) || isComponent(child)) {
        const props = isFunction(extraProps) ? extraProps(child) : extraProps;
        children[i] = cloneVNode(child, props, true);
        return true;
      }
      const _children = getChildrenArray(child);
      if (_children && _children.length > 0) {
        const result = mergeFirstChild(_children, extraProps);
        if (result)
          return true;
      }
    }
  }
  return false;
};
const getChildrenArray = (vn) => {
  if (isArrayChildren(vn, vn.children)) {
    return vn.children;
  }
  if (isArray(vn)) {
    return vn;
  }
  return void 0;
};
const getFirstElementFromVNode = (vn) => {
  var _a, _b;
  if (isElement(vn)) {
    return vn.el;
  }
  if (isComponent(vn)) {
    if (((_a = vn.el) == null ? void 0 : _a.nodeType) === 1) {
      return vn.el;
    }
    if ((_b = vn.component) == null ? void 0 : _b.subTree) {
      const ele = getFirstElementFromVNode(vn.component.subTree);
      if (ele)
        return ele;
    }
  } else {
    const children = getChildrenArray(vn);
    return getFirstElementFromChildren(children);
  }
  return void 0;
};
const getFirstElementFromChildren = (children) => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child);
      if (element)
        return element;
    }
  }
  return void 0;
};
const getSlotFunction = (param) => {
  if (param) {
    if (isFunction(param))
      return param;
    return () => param;
  }
  return void 0;
};
const getComponentsFromVNode = (vn, name) => {
  var _a;
  const components = [];
  if (isComponent(vn, vn.type)) {
    if (vn.type.name === name) {
      if (vn.component) {
        components.push(vn.component.uid);
      }
    } else if ((_a = vn.component) == null ? void 0 : _a.subTree) {
      components.push(...getComponentsFromVNode(vn.component.subTree, name));
    }
  } else {
    const children = getChildrenArray(vn);
    if (children) {
      components.push(...getComponentsFromChildren(children, name));
    }
  }
  return components;
};
const getComponentsFromChildren = (children, name) => {
  const components = [];
  if (children && children.length > 0) {
    for (const child of children) {
      components.push(...getComponentsFromVNode(child, name));
    }
  }
  return components;
};
var ResizeObserver$1 = defineComponent({
  name: "ResizeObserver",
  emits: [
    "resize"
  ],
  setup(props, {
    emit,
    slots
  }) {
    let resizeObserver;
    const componentRef = ref();
    const element = computed(() => isComponentInstance(componentRef.value) ? componentRef.value.$el : componentRef.value);
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new index$1((entries) => {
        const entry = entries[0];
        emit("resize", entry);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(element, (_element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (_element)
        createResizeObserver(_element);
    });
    onMounted(() => {
      if (element.value) {
        createResizeObserver(element.value);
      }
    });
    onUnmounted(() => {
      destroyResizeObserver();
    });
    return () => {
      var _a, _b;
      const firstChild = getFirstComponent((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : []);
      if (firstChild) {
        return cloneVNode(firstChild, {
          ref: componentRef
        }, true);
      }
      return null;
    };
  }
});
const target$1 = typeof window === "undefined" ? global : window;
const raf = target$1.requestAnimationFrame;
const caf = target$1.cancelAnimationFrame;
function throttleByRaf(cb) {
  let timer = 0;
  const throttle2 = (...args) => {
    if (timer) {
      caf(timer);
    }
    timer = raf(() => {
      cb(...args);
      timer = 0;
    });
  };
  throttle2.cancel = () => {
    caf(timer);
    timer = 0;
  };
  return throttle2;
}
const NOOP = () => {
  return void 0;
};
const isServerRendering = (() => {
  try {
    return !(typeof window !== "undefined" && document !== void 0);
  } catch (e) {
    return true;
  }
})();
const on = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, event, handler, options = false) => {
    element.addEventListener(event, handler, options);
  };
})();
const off = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, type, handler, options = false) => {
    element.removeEventListener(type, handler, options);
  };
})();
const getOverlay = (type) => {
  const popper = document.createElement("div");
  popper.setAttribute("class", `arco-overlay arco-overlay-${type}`);
  return popper;
};
const querySelector = (selectors, container) => {
  var _a;
  if (isServerRendering) {
    return NOOP();
  }
  return (_a = (container != null ? container : document).querySelector(selectors)) != null ? _a : void 0;
};
const getElement = (target2, container) => {
  if (isString(target2)) {
    const selector = target2[0] === "#" ? `[id='${target2.slice(1)}']` : target2;
    return querySelector(selector, container);
  }
  return target2;
};
const getRelativeRect = (target2, relative) => {
  const targetRect = target2.getBoundingClientRect();
  const relativeRect = relative.getBoundingClientRect();
  return {
    top: targetRect.top - relativeRect.top,
    bottom: relativeRect.bottom - targetRect.bottom,
    left: targetRect.left - relativeRect.left,
    right: relativeRect.right - targetRect.right,
    width: targetRect.width,
    height: targetRect.height
  };
};
var _export_sfc$1 = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$M = defineComponent({
  name: "IconHover",
  props: {
    prefix: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const prefixCls = getPrefixCls("icon-hover");
    return {
      prefixCls
    };
  }
});
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass([
      _ctx.prefixCls,
      {
        [`${_ctx.prefix}-icon-hover`]: _ctx.prefix,
        [`${_ctx.prefixCls}-size-${_ctx.size}`]: _ctx.size !== "medium",
        [`${_ctx.prefixCls}-disabled`]: _ctx.disabled
      }
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var IconHover = /* @__PURE__ */ _export_sfc$1(_sfc_main$M, [["render", _sfc_render$G]]);
const _sfc_main$L = defineComponent({
  name: "IconClose",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-close`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$r = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$p = /* @__PURE__ */ createElementVNode("path", { d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142" }, null, -1);
const _hoisted_3$o = [
  _hoisted_2$p
];
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$o, 14, _hoisted_1$r);
}
var _IconClose = /* @__PURE__ */ _export_sfc$1(_sfc_main$L, [["render", _sfc_render$F]]);
const IconClose = Object.assign(_IconClose, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconClose.name, _IconClose);
  }
});
const _sfc_main$K = defineComponent({
  name: "IconInfoCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-info-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$q = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$o = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$n = [
  _hoisted_2$o
];
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$n, 14, _hoisted_1$q);
}
var _IconInfoCircleFill = /* @__PURE__ */ _export_sfc$1(_sfc_main$K, [["render", _sfc_render$E]]);
const IconInfoCircleFill = Object.assign(_IconInfoCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconInfoCircleFill.name, _IconInfoCircleFill);
  }
});
const _sfc_main$J = defineComponent({
  name: "IconCheckCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-check-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$p = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$n = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$m = [
  _hoisted_2$n
];
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$m, 14, _hoisted_1$p);
}
var _IconCheckCircleFill = /* @__PURE__ */ _export_sfc$1(_sfc_main$J, [["render", _sfc_render$D]]);
const IconCheckCircleFill = Object.assign(_IconCheckCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCheckCircleFill.name, _IconCheckCircleFill);
  }
});
const _sfc_main$I = defineComponent({
  name: "IconExclamationCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-exclamation-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$o = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$m = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$l = [
  _hoisted_2$m
];
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$l, 14, _hoisted_1$o);
}
var _IconExclamationCircleFill = /* @__PURE__ */ _export_sfc$1(_sfc_main$I, [["render", _sfc_render$C]]);
const IconExclamationCircleFill = Object.assign(_IconExclamationCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconExclamationCircleFill.name, _IconExclamationCircleFill);
  }
});
const _sfc_main$H = defineComponent({
  name: "IconCloseCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-close-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$n = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$l = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$k = [
  _hoisted_2$l
];
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$k, 14, _hoisted_1$n);
}
var _IconCloseCircleFill = /* @__PURE__ */ _export_sfc$1(_sfc_main$H, [["render", _sfc_render$B]]);
const IconCloseCircleFill = Object.assign(_IconCloseCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCloseCircleFill.name, _IconCloseCircleFill);
  }
});
const MESSAGE_TYPES = ["info", "success", "warning", "error"];
const INPUT_EVENTS = [
  "onFocus",
  "onFocusin",
  "onFocusout",
  "onBlur",
  "onChange",
  "onBeforeinput",
  "onInput",
  "onReset",
  "onSubmit",
  "onInvalid",
  "onKeydown",
  "onKeypress",
  "onKeyup",
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionstart",
  "onCompositionupdate",
  "onCompositionend",
  "onSelect",
  "autocomplete",
  "autofocus",
  "maxlength",
  "minlength",
  "name",
  "pattern",
  "readonly",
  "required"
];
const _sfc_main$G = defineComponent({
  name: "IconLoading",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-loading`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$m = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" }, null, -1);
const _hoisted_3$j = [
  _hoisted_2$k
];
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$j, 14, _hoisted_1$m);
}
var _IconLoading = /* @__PURE__ */ _export_sfc$1(_sfc_main$G, [["render", _sfc_render$A]]);
const IconLoading = Object.assign(_IconLoading, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconLoading.name, _IconLoading);
  }
});
const _sfc_main$F = defineComponent({
  name: "FeedbackIcon",
  components: {
    IconLoading,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill
  },
  props: {
    type: {
      type: String
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("feedback-icon");
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-status-${props.type}`
    ]);
    return {
      cls
    };
  }
});
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  const _component_icon_check_circle_fill = resolveComponent("icon-check-circle-fill");
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  const _component_icon_close_circle_fill = resolveComponent("icon-close-circle-fill");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.type === "validating" ? (openBlock(), createBlock(_component_icon_loading, { key: 0 })) : _ctx.type === "success" ? (openBlock(), createBlock(_component_icon_check_circle_fill, { key: 1 })) : _ctx.type === "warning" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, { key: 2 })) : _ctx.type === "error" ? (openBlock(), createBlock(_component_icon_close_circle_fill, { key: 3 })) : createCommentVNode("v-if", true)
  ], 2);
}
var FeedbackIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main$F, [["render", _sfc_render$z]]);
const Enter = {
  key: "Enter",
  code: "Enter"
};
const Backspace = {
  key: "Backspace",
  code: "Backspace"
};
var __defProp$e = Object.defineProperty;
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$f.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(b)) {
      if (__propIsEnum$f.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
const omit = (object, path) => {
  const result = __spreadValues$e({}, object);
  for (const item of path) {
    if (item in result) {
      delete result[item];
    }
  }
  return result;
};
function pick(obj, keys) {
  const clone = {};
  keys.forEach((key) => {
    const k = key;
    if (key in obj) {
      clone[k] = obj[k];
    }
  });
  return clone;
}
const formItemInjectionKey = Symbol("ArcoFormItemContext");
const useFormItem = ({
  size,
  disabled,
  error,
  uninject
} = {}) => {
  const formItemCtx = !uninject ? inject(formItemInjectionKey, {}) : {};
  const mergedSize = computed(() => {
    var _a;
    return (_a = size == null ? void 0 : size.value) != null ? _a : formItemCtx.size;
  });
  const mergedDisabled = computed(() => (disabled == null ? void 0 : disabled.value) || formItemCtx.disabled);
  const mergedError = computed(() => (error == null ? void 0 : error.value) || formItemCtx.error);
  const feedback = toRef(formItemCtx, "feedback");
  const eventHandlers = toRef(formItemCtx, "eventHandlers");
  return {
    formItemCtx,
    mergedSize,
    mergedDisabled,
    mergedError,
    feedback,
    eventHandlers
  };
};
const useSize = (size, { defaultValue = "medium" } = {}) => {
  const configProviderCtx = inject(configProviderInjectionKey, void 0);
  const mergedSize = computed(() => {
    var _a, _b;
    return (_b = (_a = size == null ? void 0 : size.value) != null ? _a : configProviderCtx == null ? void 0 : configProviderCtx.size) != null ? _b : defaultValue;
  });
  return {
    mergedSize
  };
};
var __defProp$d = Object.defineProperty;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
var _Input = defineComponent({
  name: "Input",
  inheritAttrs: false,
  props: {
    modelValue: String,
    defaultValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    maxLength: {
      type: [Number, Object],
      default: 0
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    wordLength: {
      type: Function
    },
    wordSlice: {
      type: Function
    },
    inputAttrs: {
      type: Object
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "input": (value, ev) => true,
    "change": (value, ev) => true,
    "pressEnter": (ev) => true,
    "clear": (ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true
  },
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      modelValue
    } = toRefs(props);
    const prefixCls = getPrefixCls("input");
    const inputRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError: _mergedError,
      feedback,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = "";
      }
    });
    let preValue = computedValue.value;
    const focused = ref(false);
    const showClearBtn = computed(() => props.allowClear && !mergedDisabled.value && Boolean(computedValue.value));
    const isComposition = ref(false);
    const compositionValue = ref("");
    const getValueLength = (value) => {
      var _a;
      if (isFunction(props.wordLength)) {
        return props.wordLength(value);
      }
      return (_a = value.length) != null ? _a : 0;
    };
    const valueLength = computed(() => getValueLength(computedValue.value));
    const mergedError = computed(() => _mergedError.value || Boolean(isObject(props.maxLength) && props.maxLength.errorOnly && valueLength.value > maxLength.value));
    const maxLengthErrorOnly = computed(() => isObject(props.maxLength) && Boolean(props.maxLength.errorOnly));
    const maxLength = computed(() => {
      if (isObject(props.maxLength)) {
        return props.maxLength.length;
      }
      return props.maxLength;
    });
    const updateValue = (value, inner = true) => {
      var _a, _b;
      if (maxLength.value && !maxLengthErrorOnly.value && getValueLength(value) > maxLength.value) {
        value = (_b = (_a = props.wordSlice) == null ? void 0 : _a.call(props, value, maxLength.value)) != null ? _b : value.slice(0, maxLength.value);
      }
      _value.value = value;
      if (inner) {
        emit("update:modelValue", value);
      }
    };
    const handleMousedown = (e) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault();
        inputRef.value.focus();
      }
    };
    const emitChange = (value, ev) => {
      var _a, _b;
      if (value !== preValue) {
        preValue = value;
        emit("change", value, ev);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, ev);
      }
    };
    const handleFocus = (ev) => {
      var _a, _b;
      focused.value = true;
      preValue = computedValue.value;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      focused.value = false;
      emitChange(computedValue.value, ev);
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleComposition = (e) => {
      var _a;
      const {
        value
      } = e.target;
      if (e.type === "compositionend") {
        isComposition.value = false;
        compositionValue.value = "";
        updateValue(value);
        emit("input", value, e);
        nextTick(() => {
          if (inputRef.value && computedValue.value !== inputRef.value.value) {
            inputRef.value.value = computedValue.value;
          }
        });
      } else {
        isComposition.value = true;
        compositionValue.value = computedValue.value + ((_a = e.data) != null ? _a : "");
      }
    };
    const handleInput = (e) => {
      var _a, _b;
      const {
        value
      } = e.target;
      if (!isComposition.value) {
        updateValue(value);
        emit("input", value, e);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onInput) == null ? void 0 : _b.call(_a, e);
        nextTick(() => {
          if (inputRef.value && computedValue.value !== inputRef.value.value) {
            inputRef.value.value = computedValue.value;
          }
        });
      }
    };
    const handleClear = (ev) => {
      updateValue("");
      emitChange("", ev);
      emit("clear", ev);
    };
    const handleKeyDown = (e) => {
      const keyCode = e.key || e.code;
      if (!isComposition.value && keyCode === Enter.key) {
        emitChange(computedValue.value, e);
        emit("pressEnter", e);
      }
    };
    const outerCls = computed(() => [`${prefixCls}-outer`, `${prefixCls}-outer-size-${mergedSize.value}`, {
      [`${prefixCls}-outer-has-suffix`]: Boolean(slots.suffix),
      [`${prefixCls}-outer-disabled`]: mergedDisabled.value
    }]);
    const wrapperCls = computed(() => [`${prefixCls}-wrapper`, {
      [`${prefixCls}-error`]: mergedError.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-focus`]: focused.value
    }]);
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const mergeInputAttrs = computed(() => {
      const attrs2 = __spreadValues$d(__spreadValues$d({}, inputAttrs.value), props.inputAttrs);
      if (mergedError.value) {
        attrs2["aria-invalid"] = true;
      }
      return attrs2;
    });
    const renderInput = (hasOuter) => {
      var _a;
      return createVNode("span", mergeProps({
        "class": wrapperCls.value,
        "onMousedown": handleMousedown
      }, !hasOuter ? wrapperAttrs.value : void 0), [slots.prefix && createVNode("span", {
        "class": `${prefixCls}-prefix`
      }, [slots.prefix()]), createVNode("input", mergeProps(mergeInputAttrs.value, {
        "ref": inputRef,
        "class": cls.value,
        "value": computedValue.value,
        "type": props.type,
        "placeholder": props.placeholder,
        "readonly": props.readonly,
        "disabled": mergedDisabled.value,
        "onInput": handleInput,
        "onKeydown": handleKeyDown,
        "onFocus": handleFocus,
        "onBlur": handleBlur,
        "onCompositionstart": handleComposition,
        "onCompositionupdate": handleComposition,
        "onCompositionend": handleComposition
      }), null), showClearBtn.value && createVNode(IconHover, {
        "prefix": prefixCls,
        "class": `${prefixCls}-clear-btn`,
        "onClick": handleClear
      }, {
        default: () => [createVNode(IconClose, null, null)]
      }), (slots.suffix || Boolean(props.maxLength) && props.showWordLimit || Boolean(feedback.value)) && createVNode("span", {
        "class": [`${prefixCls}-suffix`, {
          [`${prefixCls}-suffix-has-feedback`]: feedback.value
        }]
      }, [Boolean(props.maxLength) && props.showWordLimit && createVNode("span", {
        "class": `${prefixCls}-word-limit`
      }, [valueLength.value, createTextVNode("/"), maxLength.value]), (_a = slots.suffix) == null ? void 0 : _a.call(slots), Boolean(feedback.value) && createVNode(FeedbackIcon, {
        "type": feedback.value
      }, null)])]);
    };
    const render2 = () => {
      if (slots.prepend || slots.append) {
        return createVNode("span", mergeProps({
          "class": outerCls.value
        }, wrapperAttrs.value), [slots.prepend && createVNode("span", {
          "class": `${prefixCls}-prepend`
        }, [slots.prepend()]), renderInput(true), slots.append && createVNode("span", {
          "class": `${prefixCls}-append`
        }, [slots.append()])]);
      }
      return renderInput();
    };
    return {
      inputRef,
      render: render2
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const _sfc_main$E = defineComponent({
  name: "IconSearch",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-search`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$l = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("path", { d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485" }, null, -1);
const _hoisted_3$i = [
  _hoisted_2$j
];
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$i, 14, _hoisted_1$l);
}
var _IconSearch = /* @__PURE__ */ _export_sfc$1(_sfc_main$E, [["render", _sfc_render$y]]);
const IconSearch = Object.assign(_IconSearch, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconSearch.name, _IconSearch);
  }
});
const buttonGroupInjectionKey = Symbol("ArcoButtonGroup");
const _sfc_main$D = defineComponent({
  name: "Button",
  components: {
    IconLoading
  },
  props: {
    type: {
      type: String
    },
    shape: {
      type: String
    },
    status: {
      type: String
    },
    size: {
      type: String
    },
    long: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    htmlType: {
      type: String,
      default: "button"
    },
    href: String
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const { size, disabled } = toRefs(props);
    const prefixCls = getPrefixCls("btn");
    const groupContext = inject(buttonGroupInjectionKey, void 0);
    const _size = computed(() => {
      var _a;
      return (_a = size.value) != null ? _a : groupContext == null ? void 0 : groupContext.size;
    });
    const _disabled = computed(() => Boolean(disabled.value || (groupContext == null ? void 0 : groupContext.disabled)));
    const { mergedSize: _mergedSize, mergedDisabled } = useFormItem({
      size: _size,
      disabled: _disabled
    });
    const { mergedSize } = useSize(_mergedSize);
    const cls = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return [
        prefixCls,
        `${prefixCls}-${(_b = (_a = props.type) != null ? _a : groupContext == null ? void 0 : groupContext.type) != null ? _b : "secondary"}`,
        `${prefixCls}-shape-${(_d = (_c = props.shape) != null ? _c : groupContext == null ? void 0 : groupContext.shape) != null ? _d : "square"}`,
        `${prefixCls}-size-${mergedSize.value}`,
        `${prefixCls}-status-${(_f = (_e = props.status) != null ? _e : groupContext == null ? void 0 : groupContext.status) != null ? _f : "normal"}`,
        {
          [`${prefixCls}-long`]: props.long,
          [`${prefixCls}-loading`]: props.loading,
          [`${prefixCls}-disabled`]: mergedDisabled.value,
          [`${prefixCls}-link`]: isString(props.href)
        }
      ];
    });
    const handleClick = (ev) => {
      if (props.disabled || props.loading) {
        return;
      }
      emit("click", ev);
    };
    return {
      prefixCls,
      cls,
      mergedDisabled,
      handleClick
    };
  }
});
const _hoisted_1$k = ["href"];
const _hoisted_2$i = ["type", "disabled"];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  return _ctx.href ? (openBlock(), createElementBlock("a", {
    key: 0,
    class: normalizeClass([
      _ctx.cls,
      { [`${_ctx.prefixCls}-only-icon`]: _ctx.$slots.icon && !_ctx.$slots.default }
    ]),
    href: _ctx.mergedDisabled || _ctx.loading ? void 0 : _ctx.href,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      _ctx.loading ? (openBlock(), createBlock(_component_icon_loading, {
        key: 0,
        spin: "true"
      })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$k)) : (openBlock(), createElementBlock("button", {
    key: 1,
    class: normalizeClass([
      _ctx.cls,
      { [`${_ctx.prefixCls}-only-icon`]: _ctx.$slots.icon && !_ctx.$slots.default }
    ]),
    type: _ctx.htmlType,
    disabled: _ctx.mergedDisabled,
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      _ctx.loading ? (openBlock(), createBlock(_component_icon_loading, {
        key: 0,
        spin: true
      })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_2$i));
}
var _Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["render", _sfc_render$x]]);
const _sfc_main$C = defineComponent({
  name: "ButtonGroup",
  props: {
    type: {
      type: String
    },
    status: {
      type: String
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const { type, size, status, disabled, shape } = toRefs(props);
    const prefixCls = getPrefixCls("btn-group");
    provide(buttonGroupInjectionKey, reactive({
      type,
      size,
      shape,
      status,
      disabled
    }));
    return {
      prefixCls
    };
  }
});
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$C, [["render", _sfc_render$w]]);
const Button = Object.assign(_Button, {
  Group: ButtonGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Button.name, _Button);
    app.component(componentPrefix + ButtonGroup.name, ButtonGroup);
  }
});
var InputSearch = defineComponent({
  name: "InputSearch",
  props: {
    searchButton: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonProps: {
      type: Object
    }
  },
  emits: {
    search: (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      size
    } = toRefs(props);
    const prefixCls = getPrefixCls("input-search");
    const {
      mergedSize
    } = useSize(size);
    const inputRef = ref();
    const handleClick = (e) => {
      if (inputRef.value.inputRef) {
        emit("search", inputRef.value.inputRef.value, e);
      }
    };
    const renderSuffix = () => {
      var _a;
      return createVNode(Fragment, null, [props.loading ? createVNode(IconLoading, null, null) : createVNode(IconHover, {
        "onClick": handleClick
      }, {
        default: () => [createVNode(IconSearch, null, null)]
      }), (_a = slots.suffix) == null ? void 0 : _a.call(slots)]);
    };
    const renderButton = () => {
      var _a;
      let _slots = {};
      if (props.buttonText || slots["button-default"] || slots["button-icon"]) {
        _slots = {
          default: (_a = slots["button-default"]) != null ? _a : props.buttonText ? () => props.buttonText : void 0,
          icon: slots["button-icon"]
        };
      } else {
        _slots = {
          icon: () => createVNode(IconSearch, null, null)
        };
      }
      return createVNode(Button, mergeProps({
        "type": "primary",
        "class": `${prefixCls}-btn`,
        "disabled": props.disabled,
        "size": mergedSize.value,
        "loading": props.loading
      }, props.buttonProps, {
        "onClick": handleClick
      }), _slots);
    };
    const render2 = () => createVNode(_Input, {
      "ref": inputRef,
      "class": prefixCls,
      "size": mergedSize.value,
      "disabled": props.disabled
    }, {
      prepend: slots.prepend,
      prefix: slots.prefix,
      suffix: props.searchButton ? slots.suffix : renderSuffix,
      append: props.searchButton ? renderButton : slots.append
    });
    return {
      inputRef,
      render: render2
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const _sfc_main$B = defineComponent({
  name: "IconEye",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-eye`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$j = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$h = /* @__PURE__ */ createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1);
const _hoisted_3$h = /* @__PURE__ */ createElementVNode("path", { d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" }, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$h,
  _hoisted_3$h
];
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_4$3, 14, _hoisted_1$j);
}
var _IconEye = /* @__PURE__ */ _export_sfc$1(_sfc_main$B, [["render", _sfc_render$v]]);
const IconEye = Object.assign(_IconEye, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEye.name, _IconEye);
  }
});
const _sfc_main$A = defineComponent({
  name: "IconEyeInvisible",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-eye-invisible`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$i = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("path", { d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14" }, null, -1);
const _hoisted_3$g = /* @__PURE__ */ createElementVNode("path", { d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$g,
  _hoisted_3$g
];
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_4$2, 14, _hoisted_1$i);
}
var _IconEyeInvisible = /* @__PURE__ */ _export_sfc$1(_sfc_main$A, [["render", _sfc_render$u]]);
const IconEyeInvisible = Object.assign(_IconEyeInvisible, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEyeInvisible.name, _IconEyeInvisible);
  }
});
const _sfc_main$z = defineComponent({
  name: "InputPassword",
  components: {
    IconEye,
    IconEyeInvisible,
    AIconHover: IconHover,
    AInput: _Input
  },
  props: {
    invisibleButton: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const inputRef = ref();
    const invisible = ref(true);
    const handleInvisible = () => {
      invisible.value = !invisible.value;
    };
    return {
      inputRef,
      invisible,
      handleInvisible
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  }
});
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_eye = resolveComponent("icon-eye");
  const _component_icon_eye_invisible = resolveComponent("icon-eye-invisible");
  const _component_a_icon_hover = resolveComponent("a-icon-hover");
  const _component_a_input = resolveComponent("a-input");
  return openBlock(), createBlock(_component_a_input, {
    ref: "inputRef",
    type: _ctx.invisible ? "password" : "text"
  }, createSlots({ _: 2 }, [
    _ctx.$slots.prepend ? {
      name: "prepend",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "prepend")
      ])
    } : void 0,
    _ctx.$slots.prefix ? {
      name: "prefix",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "prefix")
      ])
    } : void 0,
    _ctx.invisibleButton || _ctx.$slots.suffix ? {
      name: "suffix",
      fn: withCtx(() => [
        _ctx.invisibleButton ? (openBlock(), createBlock(_component_a_icon_hover, {
          key: 0,
          onClick: _ctx.handleInvisible,
          onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onMouseup: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["prevent"]))
        }, {
          default: withCtx(() => [
            _ctx.invisible ? (openBlock(), createBlock(_component_icon_eye, { key: 0 })) : (openBlock(), createBlock(_component_icon_eye_invisible, { key: 1 }))
          ]),
          _: 1
        }, 8, ["onClick"])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "suffix")
      ])
    } : void 0,
    _ctx.$slots.append ? {
      name: "append",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "append")
      ])
    } : void 0
  ]), 1032, ["type"]);
}
var InputPassword = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["render", _sfc_render$t]]);
const _sfc_main$y = defineComponent({
  name: "InputGroup",
  setup() {
    const prefixCls = getPrefixCls("input-group");
    return {
      prefixCls
    };
  }
});
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var InputGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["render", _sfc_render$s]]);
const Input = Object.assign(_Input, {
  Search: InputSearch,
  Password: InputPassword,
  Group: InputGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Input.name, _Input);
    app.component(componentPrefix + InputGroup.name, InputGroup);
    app.component(componentPrefix + InputSearch.name, InputSearch);
    app.component(componentPrefix + InputPassword.name, InputPassword);
  }
});
var __defProp$c = Object.defineProperty;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
const getViewPortSize = () => {
  return {
    width: document.documentElement.clientWidth || window.innerWidth,
    height: document.documentElement.clientHeight || window.innerHeight
  };
};
const getElementScrollRect = (element, containerRect) => {
  var _a, _b;
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    scrollTop: rect.top - containerRect.top,
    scrollBottom: rect.bottom - containerRect.top,
    scrollLeft: rect.left - containerRect.left,
    scrollRight: rect.right - containerRect.left,
    width: (_a = element.offsetWidth) != null ? _a : element.clientWidth,
    height: (_b = element.offsetHeight) != null ? _b : element.clientHeight
  };
};
const getBoundaryPosition = (position) => {
  switch (position) {
    case "top":
    case "tl":
    case "tr":
      return "top";
    case "bottom":
    case "bl":
    case "br":
      return "bottom";
    case "left":
    case "lt":
    case "lb":
      return "left";
    case "right":
    case "rt":
    case "rb":
      return "right";
    default:
      return "top";
  }
};
const changePosition = (position, direction) => {
  switch (direction) {
    case "top":
      switch (position) {
        case "bottom":
          return "top";
        case "bl":
          return "tl";
        case "br":
          return "tr";
        default:
          return position;
      }
    case "bottom":
      switch (position) {
        case "top":
          return "bottom";
        case "tl":
          return "bl";
        case "tr":
          return "br";
        default:
          return position;
      }
    case "left":
      switch (position) {
        case "right":
          return "left";
        case "rt":
          return "lt";
        case "rb":
          return "lb";
        default:
          return position;
      }
    case "right":
      switch (position) {
        case "left":
          return "right";
        case "lt":
          return "rt";
        case "lb":
          return "rb";
        default:
          return position;
      }
    default:
      return position;
  }
};
const getFitPosition = (position, popupPosition, {
  containerRect,
  triggerRect,
  popupRect,
  offset,
  translate
}) => {
  const direction = getBoundaryPosition(position);
  const viewPortSize = getViewPortSize();
  const viewPortBoundary = {
    top: containerRect.top + popupPosition.top,
    bottom: viewPortSize.height - (containerRect.top + popupPosition.top + popupRect.height),
    left: containerRect.left + popupPosition.left,
    right: viewPortSize.width - (containerRect.left + popupPosition.left + popupRect.width)
  };
  let finalPosition = position;
  if (direction === "top" && viewPortBoundary.top < 0) {
    if (triggerRect.top > popupRect.height) {
      popupPosition.top = -containerRect.top;
    } else {
      const fitPosition = getPopupOffset("bottom", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.height - (containerRect.top + fitPosition.top + popupRect.height) > 0) {
        finalPosition = changePosition(position, "bottom");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "bottom" && viewPortBoundary.bottom < 0) {
    if (viewPortSize.height - triggerRect.bottom > popupRect.height) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    } else {
      const fitPosition = getPopupOffset("top", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.top + fitPosition.top > 0) {
        finalPosition = changePosition(position, "top");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "left" && viewPortBoundary.left < 0) {
    if (triggerRect.left > popupRect.width) {
      popupPosition.left = -containerRect.left;
    } else {
      const fitPosition = getPopupOffset("right", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.width - (containerRect.left + fitPosition.left + popupRect.width) > 0) {
        finalPosition = changePosition(position, "right");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "right" && viewPortBoundary.right < 0) {
    if (viewPortSize.width - triggerRect.right > popupRect.width) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    } else {
      const fitPosition = getPopupOffset("left", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.left + fitPosition.left > 0) {
        finalPosition = changePosition(position, "left");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "top" || direction === "bottom") {
    if (viewPortBoundary.left < 0) {
      popupPosition.left = -containerRect.left;
    } else if (viewPortBoundary.right < 0) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    }
  }
  if (direction === "left" || direction === "right") {
    if (viewPortBoundary.top < 0) {
      popupPosition.top = -containerRect.top;
    } else if (viewPortBoundary.bottom < 0) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    }
  }
  return {
    popupPosition,
    position: finalPosition
  };
};
const getPopupOffset = (position, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0]
} = {}) => {
  var _a;
  const _translate = (_a = isArray(translate) ? translate : translate[position]) != null ? _a : [0, 0];
  switch (position) {
    case "top":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tr":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "bottom":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "bl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "br":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "left":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "lt":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "lb":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    case "right":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "rt":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "rb":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
};
const getTransformOrigin = (position) => {
  let originX = "0";
  if (["top", "bottom"].includes(position)) {
    originX = "50%";
  } else if (["left", "lt", "lb", "tr", "br"].includes(position)) {
    originX = "100%";
  }
  let originY = "0";
  if (["left", "right"].includes(position)) {
    originY = "50%";
  } else if (["top", "tl", "tr", "lt", "rt"].includes(position)) {
    originY = "100%";
  }
  return `${originX} ${originY}`;
};
const getPopupStyle = (position, containerRect, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0],
  customStyle = {},
  autoFitPosition = false
} = {}) => {
  let finalPosition = position;
  let popupPosition = getPopupOffset(position, triggerRect, popupRect, {
    offset,
    translate
  });
  if (autoFitPosition) {
    const result = getFitPosition(position, popupPosition, {
      containerRect,
      popupRect,
      triggerRect,
      offset,
      translate
    });
    popupPosition = result.popupPosition;
    finalPosition = result.position;
  }
  const style = __spreadValues$c({
    left: `${popupPosition.left}px`,
    top: `${popupPosition.top}px`
  }, customStyle);
  return {
    style,
    position: finalPosition
  };
};
const getArrowStyle = (position, triggerRect, popupRect, {
  customStyle = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(position)) {
    let offsetLeft = Math.abs(triggerRect.scrollLeft + triggerRect.width / 2 - popupRect.scrollLeft);
    if (offsetLeft > popupRect.width - 8) {
      if (triggerRect.width > popupRect.width) {
        offsetLeft = popupRect.width / 2;
      } else {
        offsetLeft = popupRect.width - 8;
      }
    }
    if (["top", "tl", "tr"].includes(position)) {
      return __spreadValues$c({
        left: `${offsetLeft}px`,
        bottom: "0",
        transform: "translate(-50%,50%) rotate(45deg)"
      }, customStyle);
    }
    return __spreadValues$c({
      left: `${offsetLeft}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  let offsetTop = Math.abs(triggerRect.scrollTop + triggerRect.height / 2 - popupRect.scrollTop);
  if (offsetTop > popupRect.height - 8) {
    if (triggerRect.height > popupRect.height) {
      offsetTop = popupRect.height / 2;
    } else {
      offsetTop = popupRect.height - 8;
    }
  }
  if (["left", "lt", "lb"].includes(position)) {
    return __spreadValues$c({
      top: `${offsetTop}px`,
      right: "0",
      transform: "translate(50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  return __spreadValues$c({
    top: `${offsetTop}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, customStyle);
};
const isScrollElement = (element) => {
  return element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth;
};
const getScrollElements = (container) => {
  var _a;
  const scrollElements = [];
  let element = container;
  while (element && element !== document.documentElement) {
    if (isScrollElement(element)) {
      scrollElements.push(element);
    }
    element = (_a = element.parentElement) != null ? _a : void 0;
  }
  return scrollElements;
};
const useFirstElement = () => {
  const children = {};
  const firstElement = ref();
  const getFirstElement = () => {
    const element = getFirstElementFromChildren(children.value);
    if (element !== firstElement.value) {
      firstElement.value = element;
    }
  };
  onMounted(() => getFirstElement());
  onUpdated(() => getFirstElement());
  return {
    children,
    firstElement
  };
};
var ResizeObserver = defineComponent({
  name: "ResizeObserver",
  props: {
    watchOnUpdated: Boolean
  },
  emits: [
    "resize"
  ],
  setup(props, { emit, slots }) {
    const { children, firstElement } = useFirstElement();
    let resizeObserver;
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new index$1((entries) => {
        const entry = entries[0];
        emit("resize", entry);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(firstElement, (element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (element) {
        createResizeObserver(element);
      }
    });
    onBeforeUnmount(() => {
      if (resizeObserver)
        destroyResizeObserver();
    });
    return () => {
      var _a;
      children.value = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return children.value;
    };
  }
});
function usePickSlots(slots, slotName) {
  const slot = ref(slots[slotName]);
  onUpdated(() => {
    const newSlot = slots[slotName];
    if (slot.value !== newSlot) {
      slot.value = newSlot;
    }
  });
  return slot;
}
const triggerInjectionKey = Symbol("ArcoTrigger");
const POPUP_BASE_Z_INDEX = 1e3;
const MESSAGE_BASE_Z_INDEX = 5e3;
const Z_INDEX_STEP = 1;
class PopupManager {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    };
    this.getNextZIndex = (type) => {
      if (type === "message") {
        return MESSAGE_BASE_Z_INDEX + this.popupStack.message.size * Z_INDEX_STEP;
      }
      return POPUP_BASE_Z_INDEX + this.popupStack.popup.size * Z_INDEX_STEP;
    };
    this.add = (id, type) => {
      this.popupStack[type].add(id);
      if (type === "dialog") {
        this.popupStack.popup.add(id);
      }
      return this.getNextZIndex(type);
    };
    this.delete = (id, type) => {
      this.popupStack[type].delete(id);
      if (type === "dialog") {
        this.popupStack.popup.delete(id);
      }
    };
    this.isLastDialog = (id) => {
      if (this.popupStack.dialog.size > 1) {
        const array = Array.from(this.popupStack.dialog);
        return id === array[array.length - 1];
      }
      return true;
    };
  }
}
const popupManager = new PopupManager();
function usePopupManager(type, {
  visible,
  runOnMounted
} = {}) {
  var _a, _b;
  const id = (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.uid) != null ? _b : Date.now();
  const zIndex = ref(0);
  const open = () => {
    zIndex.value = popupManager.add(id, type);
  };
  const close = () => {
    popupManager.delete(id, type);
  };
  const isLastDialog = () => {
    if (type === "dialog") {
      return popupManager.isLastDialog(id);
    }
    return false;
  };
  watch(() => visible == null ? void 0 : visible.value, (visible2) => {
    if (visible2) {
      open();
    } else {
      close();
    }
  }, {
    immediate: true
  });
  if (runOnMounted) {
    onMounted(() => {
      open();
    });
    onBeforeUnmount(() => {
      close();
    });
  }
  return {
    id,
    zIndex,
    open,
    close,
    isLastDialog
  };
}
const useResizeObserver = ({
  elementRef,
  onResize
}) => {
  let resizeObserver;
  const createResizeObserver = () => {
    if (!elementRef.value)
      return;
    resizeObserver = new index$1((entries) => {
      const entry = entries[0];
      isFunction(onResize) && onResize(entry);
    });
    resizeObserver.observe(elementRef.value);
  };
  const destroyResizeObserver = () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  };
  return {
    createResizeObserver,
    destroyResizeObserver
  };
};
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, {
    slots
  }) {
    const mounted = ref(false);
    onMounted(() => mounted.value = true);
    return () => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      return null;
    };
  }
});
const useTeleportContainer = ({
  popupContainer,
  visible,
  defaultContainer = "body",
  documentContainer
}) => {
  const teleportContainer = ref(popupContainer.value);
  const containerRef = ref();
  const getContainer = () => {
    const element = getElement(popupContainer.value);
    const _teleportContainer = element ? popupContainer.value : defaultContainer;
    const _containerElement = element != null ? element : documentContainer ? document.documentElement : getElement(defaultContainer);
    if (_teleportContainer !== teleportContainer.value) {
      teleportContainer.value = _teleportContainer;
    }
    if (_containerElement !== containerRef.value) {
      containerRef.value = _containerElement;
    }
  };
  onMounted(() => getContainer());
  watch(visible, (visible2) => {
    if (teleportContainer.value !== popupContainer.value && visible2) {
      getContainer();
    }
  });
  return {
    teleportContainer,
    containerRef
  };
};
var __defProp$b = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
const TRIGGER_EVENTS = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var _Trigger = defineComponent({
  name: "Trigger",
  inheritAttrs: false,
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "bottom"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popupOffset: {
      type: Number,
      default: 0
    },
    popupTranslate: {
      type: [Array, Object]
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    alignPoint: {
      type: Boolean,
      default: false
    },
    popupHoverStay: {
      type: Boolean,
      default: true
    },
    blurToClose: {
      type: Boolean,
      default: true
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    clickOutsideToClose: {
      type: Boolean,
      default: true
    },
    unmountOnClose: {
      type: Boolean,
      default: true
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    animationName: {
      type: String,
      default: "fade-in"
    },
    duration: {
      type: [Number, Object]
    },
    mouseEnterDelay: {
      type: Number,
      default: 100
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100
    },
    focusDelay: {
      type: Number,
      default: 0
    },
    autoFitPopupWidth: {
      type: Boolean,
      default: false
    },
    autoFitPopupMinWidth: {
      type: Boolean,
      default: false
    },
    autoFixPosition: {
      type: Boolean,
      default: true
    },
    popupContainer: {
      type: [String, Object]
    },
    updateAtScroll: {
      type: Boolean,
      default: false
    },
    autoFitTransformOrigin: {
      type: Boolean,
      default: false
    },
    hideEmpty: {
      type: Boolean,
      default: false
    },
    openedClass: {
      type: [String, Array, Object]
    },
    autoFitPosition: {
      type: Boolean,
      default: true
    },
    renderToBody: {
      type: Boolean,
      default: true
    },
    preventFocus: {
      type: Boolean,
      default: false
    },
    onPopupVisibleChange: {
      type: [Function, Array]
    }
  },
  emits: [
    "update:popupVisible",
    "popupVisibleChange",
    "show",
    "hide",
    "resize"
  ],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      popupContainer
    } = toRefs(props);
    const prefixCls = getPrefixCls("trigger");
    const popupAttrs = computed(() => omit(attrs, TRIGGER_EVENTS));
    const configCtx = inject(configProviderInjectionKey, void 0);
    const triggerMethods = computed(() => [].concat(props.trigger));
    const childrenRefs = /* @__PURE__ */ new Set();
    const triggerCtx = inject(triggerInjectionKey, void 0);
    const {
      children,
      firstElement
    } = useFirstElement();
    const popupRef = ref();
    const popupVisible = ref(props.defaultPopupVisible);
    const popupPosition = ref(props.position);
    const popupStyle = ref({});
    const transformStyle = ref({});
    const arrowStyle = ref({});
    const arrowRef = ref();
    const mousePosition = ref({
      top: 0,
      left: 0
    });
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : popupVisible.value;
    });
    const {
      teleportContainer,
      containerRef
    } = useTeleportContainer({
      popupContainer,
      visible: computedVisible,
      documentContainer: true
    });
    const {
      zIndex
    } = usePopupManager("popup", {
      visible: computedVisible
    });
    let delayTimer = 0;
    let outsideListener = false;
    const cleanDelayTimer = () => {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = 0;
      }
    };
    const updateMousePosition = (e) => {
      if (props.alignPoint) {
        const {
          pageX,
          pageY
        } = e;
        mousePosition.value = {
          top: pageY,
          left: pageX
        };
      }
    };
    const updatePopupStyle = () => {
      if (!firstElement.value || !popupRef.value || !containerRef.value) {
        return;
      }
      const containerRect = containerRef.value.getBoundingClientRect();
      const triggerRect = props.alignPoint ? {
        top: mousePosition.value.top,
        bottom: mousePosition.value.top,
        left: mousePosition.value.left,
        right: mousePosition.value.left,
        scrollTop: mousePosition.value.top,
        scrollBottom: mousePosition.value.top,
        scrollLeft: mousePosition.value.left,
        scrollRight: mousePosition.value.left,
        width: 0,
        height: 0
      } : getElementScrollRect(firstElement.value, containerRect);
      const popupRect = getElementScrollRect(popupRef.value, containerRect);
      const {
        style,
        position
      } = getPopupStyle(props.position, containerRect, triggerRect, popupRect, {
        offset: props.popupOffset,
        translate: props.popupTranslate,
        customStyle: props.popupStyle,
        autoFitPosition: props.autoFitPosition
      });
      if (props.autoFitTransformOrigin) {
        transformStyle.value = {
          transformOrigin: getTransformOrigin(position)
        };
      }
      if (props.autoFitPopupMinWidth) {
        style.minWidth = `${triggerRect.width}px`;
      } else if (props.autoFitPopupWidth) {
        style.width = `${triggerRect.width}px`;
      }
      if (popupPosition.value !== position) {
        popupPosition.value = position;
      }
      popupStyle.value = style;
      if (props.showArrow) {
        arrowStyle.value = getArrowStyle(position, triggerRect, popupRect, {
          customStyle: props.arrowStyle
        });
      }
    };
    const changeVisible = (visible, delay) => {
      if (visible === computedVisible.value && delayTimer === 0) {
        return;
      }
      const update = () => {
        popupVisible.value = visible;
        emit("update:popupVisible", visible);
        emit("popupVisibleChange", visible);
        if (visible) {
          nextTick(() => {
            updatePopupStyle();
          });
        }
      };
      if (delay) {
        cleanDelayTimer();
        if (visible !== computedVisible.value) {
          delayTimer = window.setTimeout(update, delay);
        }
      } else {
        update();
      }
    };
    const handleClick = (e) => {
      var _a;
      (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || computedVisible.value && !props.clickToClose) {
        return;
      }
      if (triggerMethods.value.includes("click")) {
        updateMousePosition(e);
        changeVisible(!computedVisible.value);
      } else if (triggerMethods.value.includes("contextMenu") && computedVisible.value) {
        changeVisible(false);
      }
    };
    const handleMouseEnter = (e) => {
      var _a;
      (_a = attrs.onMouseenter) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      updateMousePosition(e);
      changeVisible(true, props.mouseEnterDelay);
    };
    const handleMouseEnterWithContext = (e) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseenter(e);
      handleMouseEnter(e);
    };
    const handleMouseLeave = (e) => {
      var _a;
      (_a = attrs.onMouseleave) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      changeVisible(false, props.mouseLeaveDelay);
    };
    const handleMouseLeaveWithContext = (e) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseleave(e);
      handleMouseLeave(e);
    };
    const handleFocusin = (e) => {
      var _a;
      (_a = attrs.onFocusin) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      changeVisible(true, props.focusDelay);
    };
    const handleFocusout = (e) => {
      var _a;
      (_a = attrs.onFocusout) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      if (!props.blurToClose) {
        return;
      }
      changeVisible(false);
    };
    const handleContextmenu = (e) => {
      var _a;
      (_a = attrs.onContextmenu) == null ? void 0 : _a.call(attrs, e);
      e.preventDefault();
      if (props.disabled || !triggerMethods.value.includes("contextMenu") || computedVisible.value && !props.clickToClose) {
        return;
      }
      updateMousePosition(e);
      changeVisible(!computedVisible.value);
    };
    const addChildRef = (ref2) => {
      childrenRefs.add(ref2);
      triggerCtx == null ? void 0 : triggerCtx.addChildRef(ref2);
    };
    const removeChildRef = (ref2) => {
      childrenRefs.delete(ref2);
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(ref2);
    };
    provide(triggerInjectionKey, reactive({
      onMouseenter: handleMouseEnterWithContext,
      onMouseleave: handleMouseLeaveWithContext,
      addChildRef,
      removeChildRef
    }));
    const removeOutsideListener = () => {
      off(document.documentElement, "mousedown", handleOutsideClick);
      outsideListener = false;
    };
    const contentSlot = usePickSlots(slots, "content");
    const hidePopup = computed(() => {
      var _a;
      return props.hideEmpty && isEmptyChildren((_a = contentSlot.value) == null ? void 0 : _a.call(contentSlot));
    });
    const handleOutsideClick = (e) => {
      var _a, _b, _c;
      if (((_a = firstElement.value) == null ? void 0 : _a.contains(e.target)) || ((_b = popupRef.value) == null ? void 0 : _b.contains(e.target))) {
        return;
      }
      for (const item of childrenRefs) {
        if ((_c = item.value) == null ? void 0 : _c.contains(e.target)) {
          return;
        }
      }
      removeOutsideListener();
      changeVisible(false);
    };
    const handleScroll = throttleByRaf(() => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    const handleResize = () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    };
    const onTargetResize = () => {
      handleResize();
      emit("resize");
    };
    const handlePopupMouseDown = (e) => {
      if (props.preventFocus) {
        e.preventDefault();
      }
    };
    triggerCtx == null ? void 0 : triggerCtx.addChildRef(popupRef);
    const triggerCls = computed(() => {
      return computedVisible.value ? props.openedClass : void 0;
    });
    let scrollElements;
    watch(computedVisible, (value) => {
      if (props.clickOutsideToClose) {
        if (!value && outsideListener) {
          removeOutsideListener();
        } else if (value && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
      }
      if (props.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
        if (value) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        } else if (scrollElements) {
          for (const item of scrollElements) {
            item.removeEventListener("scroll", handleScroll);
          }
          scrollElements = void 0;
        }
      }
      if (value) {
        mounted.value = true;
      }
    });
    watch(() => [props.autoFitPopupWidth, props.autoFitPopupMinWidth], () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    const {
      createResizeObserver,
      destroyResizeObserver
    } = useResizeObserver({
      elementRef: containerRef,
      onResize: handleResize
    });
    onMounted(() => {
      createResizeObserver();
      if (computedVisible.value) {
        updatePopupStyle();
        if (props.clickOutsideToClose && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
        if (props.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        }
      }
    });
    onUpdated(() => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    onBeforeUnmount(() => {
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(popupRef);
      destroyResizeObserver();
      if (outsideListener) {
        removeOutsideListener();
      }
      if (scrollElements) {
        for (const item of scrollElements) {
          item.removeEventListener("scroll", handleScroll);
        }
        scrollElements = void 0;
      }
    });
    const mounted = ref(computedVisible.value);
    const handleShow = () => {
      if (computedVisible.value) {
        emit("show");
      }
    };
    const handleHide = () => {
      if (!computedVisible.value) {
        mounted.value = false;
        emit("hide");
      }
    };
    return () => {
      var _a, _b;
      children.value = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      mergeFirstChild(children.value, {
        class: triggerCls.value,
        onClick: handleClick,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onFocusin: handleFocusin,
        onFocusout: handleFocusout,
        onContextmenu: handleContextmenu
      });
      return createVNode(Fragment, null, [props.autoFixPosition ? createVNode(ResizeObserver, {
        "onResize": onTargetResize
      }, {
        default: () => [children.value]
      }) : children.value, createVNode(ClientOnly, null, {
        default: () => [createVNode(Teleport, {
          "to": teleportContainer.value,
          "disabled": !props.renderToBody
        }, {
          default: () => [(!props.unmountOnClose || computedVisible.value || mounted.value) && !hidePopup.value && createVNode(ResizeObserver, {
            "onResize": handleResize
          }, {
            default: () => [createVNode("div", mergeProps({
              "ref": popupRef,
              "class": [`${prefixCls}-popup`, `${prefixCls}-position-${popupPosition.value}`],
              "style": __spreadProps$6(__spreadValues$b({}, popupStyle.value), {
                zIndex: zIndex.value
              }),
              "trigger-placement": popupPosition.value,
              "onMouseenter": handleMouseEnterWithContext,
              "onMouseleave": handleMouseLeaveWithContext,
              "onMousedown": handlePopupMouseDown
            }, popupAttrs.value), [createVNode(Transition, {
              "name": props.animationName,
              "duration": props.duration,
              "appear": true,
              "onAfterEnter": handleShow,
              "onAfterLeave": handleHide
            }, {
              default: () => {
                var _a2;
                return [withDirectives(createVNode("div", {
                  "class": `${prefixCls}-popup-wrapper`,
                  "style": transformStyle.value
                }, [createVNode("div", {
                  "class": [`${prefixCls}-content`, props.contentClass],
                  "style": props.contentStyle
                }, [(_a2 = slots.content) == null ? void 0 : _a2.call(slots)]), props.showArrow && createVNode("div", {
                  "ref": arrowRef,
                  "class": [`${prefixCls}-arrow`, props.arrowClass],
                  "style": arrowStyle.value
                }, null)]), [[vShow, computedVisible.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Trigger = Object.assign(_Trigger, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Trigger.name, _Trigger);
  }
});
const _sfc_main$x = defineComponent({
  name: "IconEmpty",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-empty`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$h = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("path", { d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z" }, null, -1);
const _hoisted_3$f = [
  _hoisted_2$f
];
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$f, 14, _hoisted_1$h);
}
var _IconEmpty = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["render", _sfc_render$r]]);
const IconEmpty = Object.assign(_IconEmpty, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEmpty.name, _IconEmpty);
  }
});
const _sfc_main$w = defineComponent({
  name: "Empty",
  components: {
    IconEmpty
  },
  props: {
    description: String,
    imgSrc: String
  },
  setup() {
    const prefixCls = getPrefixCls("empty");
    const { t } = useI18n();
    return {
      prefixCls,
      t
    };
  }
});
const _hoisted_1$g = ["src", "alt"];
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_empty = resolveComponent("icon-empty");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createElementVNode("div", {
      class: normalizeClass(`${_ctx.prefixCls}-image`)
    }, [
      renderSlot(_ctx.$slots, "image", {}, () => [
        _ctx.imgSrc ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.imgSrc,
          alt: _ctx.description || "empty"
        }, null, 8, _hoisted_1$g)) : (openBlock(), createBlock(_component_icon_empty, { key: 1 }))
      ])
    ], 2),
    createElementVNode("div", {
      class: normalizeClass(`${_ctx.prefixCls}-description`)
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.description || _ctx.t("empty.description")), 1)
      ])
    ], 2)
  ], 2);
}
var _Empty = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["render", _sfc_render$q]]);
const Empty = Object.assign(_Empty, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Empty.name, _Empty);
  }
});
const DOT_NUMBER = 5;
var DotLoading = defineComponent({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("dot-loading");
    return () => {
      const style = props.size ? {
        width: `${props.size}px`,
        height: `${props.size}px`
      } : {};
      return createVNode("div", {
        "class": prefixCls,
        "style": {
          width: props.size ? `${props.size * 7}px` : void 0,
          height: props.size ? `${props.size}px` : void 0
        }
      }, [Array(DOT_NUMBER).fill(1).map((_, index2) => createVNode("div", {
        "class": `${prefixCls}-item`,
        "key": index2,
        "style": style
      }, null))]);
    };
  }
});
var _Spin = defineComponent({
  name: "Spin",
  props: {
    size: {
      type: Number
    },
    loading: Boolean,
    dot: Boolean,
    tip: String
  },
  setup(props, {
    slots,
    attrs
  }) {
    const prefixCls = getPrefixCls("spin");
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-loading`]: props.loading,
      [`${prefixCls}-with-tip`]: props.tip && !slots.default
    }]);
    const renderIcon = () => {
      if (slots.icon) {
        const iconVNode = getFirstComponent(slots.icon());
        if (iconVNode) {
          return cloneVNode(iconVNode, {
            spin: true
          });
        }
      }
      if (slots.element) {
        return slots.element();
      }
      if (props.dot) {
        return createVNode(DotLoading, {
          "size": props.size
        }, null);
      }
      return createVNode(IconLoading, {
        "spin": true
      }, null);
    };
    const renderSpinIcon = () => {
      const style = props.size ? {
        fontSize: `${props.size}px`
      } : void 0;
      return createVNode(Fragment, null, [createVNode("div", {
        "class": `${prefixCls}-icon`,
        "style": style
      }, [renderIcon()]), props.tip && createVNode("div", {
        "class": `${prefixCls}-tip`
      }, [props.tip])]);
    };
    return () => createVNode("div", {
      "class": cls.value
    }, [slots.default ? createVNode(Fragment, null, [slots.default(), props.loading && createVNode("div", {
      "class": `${prefixCls}-mask`
    }, [createVNode("div", {
      "class": `${prefixCls}-mask-icon`
    }, [renderSpinIcon()])])]) : renderSpinIcon()]);
  }
});
const Spin = Object.assign(_Spin, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Spin.name, _Spin);
  }
});
const _sfc_main$v = defineComponent({
  name: "SelectDropdown",
  components: {
    Empty,
    Spin
  },
  props: {
    loading: Boolean,
    empty: Boolean,
    virtualList: Boolean,
    bottomOffset: {
      type: Number,
      default: 0
    },
    onScroll: {
      type: [Function, Array]
    },
    onReachBottom: {
      type: [Function, Array]
    }
  },
  emits: ["scroll", "reachBottom"],
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls("select-dropdown");
    const wrapperRef = ref();
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, offsetHeight } = e.target;
      const bottom = scrollHeight - (scrollTop + offsetHeight);
      if (bottom <= props.bottomOffset) {
        emit("reachBottom", e);
      }
      emit("scroll", e);
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-has-footer`]: Boolean(slots.footer)
      }
    ]);
    return {
      prefixCls,
      cls,
      wrapperRef,
      handleScroll
    };
  }
});
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_spin = resolveComponent("spin");
  const _component_empty = resolveComponent("empty");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.loading ? (openBlock(), createBlock(_component_spin, {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-loading`)
    }, null, 8, ["class"])) : _ctx.empty ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-empty`)
    }, [
      renderSlot(_ctx.$slots, "empty", {}, () => [
        createVNode(_component_empty)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.virtualList && !_ctx.loading && !_ctx.empty ? renderSlot(_ctx.$slots, "virtual-list", { key: 2 }) : createCommentVNode("v-if", true),
    !_ctx.virtualList ? withDirectives((openBlock(), createElementBlock("div", {
      key: 3,
      ref: "wrapperRef",
      class: normalizeClass(`${_ctx.prefixCls}-list-wrapper`),
      onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
    }, [
      createElementVNode("ul", {
        class: normalizeClass(`${_ctx.prefixCls}-list`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ], 34)), [
      [vShow, !_ctx.loading && !_ctx.empty]
    ]) : createCommentVNode("v-if", true),
    _ctx.$slots.footer && !_ctx.empty ? (openBlock(), createElementBlock("div", {
      key: 4,
      class: normalizeClass(`${_ctx.prefixCls}-footer`)
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var SelectDropdown = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["render", _sfc_render$p]]);
var IconCheck = defineComponent({
  name: "IconCheck",
  render() {
    return createVNode("svg", {
      "viewBox": "0 0 1024 1024",
      "width": "200",
      "height": "200",
      "fill": "currentColor"
    }, [createVNode("path", {
      "d": "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
      "p-id": "840"
    }, null)]);
  }
});
const checkboxGroupKey = Symbol("ArcoCheckboxGroup");
var _Checkbox = defineComponent({
  name: "Checkbox",
  components: {
    IconCheck,
    IconHover
  },
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    uninjectGroupContext: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      disabled
    } = toRefs(props);
    const prefixCls = getPrefixCls("checkbox");
    const checkboxRef = ref();
    const checkboxGroupCtx = !props.uninjectGroupContext ? inject(checkboxGroupKey, void 0) : void 0;
    const isGroup = (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.name) === "ArcoCheckboxGroup";
    const {
      mergedDisabled: _mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled
    });
    const mergedDisabled = computed(() => (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.disabled) || (_mergedDisabled == null ? void 0 : _mergedDisabled.value));
    const _checked = ref(props.defaultChecked);
    const computedValue = computed(() => {
      var _a;
      return isGroup ? checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.computedValue : (_a = props.modelValue) != null ? _a : _checked.value;
    });
    const computedChecked = computed(() => {
      var _a;
      return isArray(computedValue.value) ? computedValue.value.includes((_a = props.value) != null ? _a : true) : computedValue.value;
    });
    const handleClick = (ev) => {
      ev.stopPropagation();
    };
    const handleChange = (e) => {
      var _a, _b, _c, _d;
      const {
        checked
      } = e.target;
      let newValue = checked;
      if (isArray(computedValue.value)) {
        const set = new Set(computedValue.value);
        if (checked) {
          set.add((_a = props.value) != null ? _a : true);
        } else {
          set.delete((_b = props.value) != null ? _b : true);
        }
        newValue = Array.from(set);
      }
      _checked.value = checked;
      if (isGroup && isArray(newValue)) {
        checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.handleChange(newValue, e);
      } else {
        emit("update:modelValue", newValue);
        emit("change", newValue, e);
        (_d = (_c = eventHandlers.value) == null ? void 0 : _c.onChange) == null ? void 0 : _d.call(_c, e);
      }
      nextTick(() => {
        if (checkboxRef.value && checkboxRef.value.checked !== computedChecked.value) {
          checkboxRef.value.checked = computedChecked.value;
        }
      });
    };
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-checked`]: computedChecked.value,
      [`${prefixCls}-indeterminate`]: props.indeterminate,
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const handleFocus = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    watch(computedValue, (value) => {
      var _a;
      let checked;
      if (isArray(value)) {
        checked = value.includes((_a = props.value) != null ? _a : true);
      } else {
        checked = value;
      }
      if (_checked.value !== checked) {
        _checked.value = checked;
      }
      if (checkboxRef.value && checkboxRef.value.checked !== checked) {
        checkboxRef.value.checked = checked;
      }
    });
    return () => {
      var _a, _b, _c, _d, _e;
      return createVNode("label", {
        "class": cls.value
      }, [createVNode("input", {
        "ref": checkboxRef,
        "type": "checkbox",
        "checked": computedChecked.value,
        "value": props.value,
        "class": `${prefixCls}-target`,
        "disabled": mergedDisabled.value,
        "onClick": handleClick,
        "onChange": handleChange,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, null), (_e = (_d = (_a = slots.checkbox) == null ? void 0 : _a.call(slots, {
        checked: computedChecked.value,
        disabled: mergedDisabled.value
      })) != null ? _d : (_c = checkboxGroupCtx == null ? void 0 : (_b = checkboxGroupCtx.slots).checkbox) == null ? void 0 : _c.call(_b, {
        checked: computedChecked.value,
        disabled: mergedDisabled.value
      })) != null ? _e : createVNode(IconHover, {
        "class": `${prefixCls}-icon-hover`,
        "disabled": mergedDisabled.value || computedChecked.value
      }, {
        default: () => [createVNode("div", {
          "class": `${prefixCls}-icon`
        }, [computedChecked.value && createVNode(IconCheck, {
          "class": `${prefixCls}-icon-check`
        }, null)])]
      }), slots.default && createVNode("span", {
        "class": `${prefixCls}-label`
      }, [slots.default()])]);
    };
  }
});
var CheckboxGroup = defineComponent({
  name: "CheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: void 0
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: [Function, Array]
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      disabled
    } = toRefs(props);
    const prefixCls = getPrefixCls("checkbox-group");
    const {
      mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled
    });
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    const options = computed(() => {
      var _a;
      return ((_a = props.options) != null ? _a : []).map((option) => {
        if (isString(option) || isNumber(option)) {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    });
    const handleChange = (value, e) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, e);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, e);
    };
    provide(checkboxGroupKey, reactive({
      name: "ArcoCheckboxGroup",
      computedValue,
      disabled: mergedDisabled,
      slots,
      handleChange
    }));
    const cls = computed(() => [prefixCls, `${prefixCls}-direction-${props.direction}`]);
    watch(() => props.modelValue, (curValue) => {
      if (curValue) {
        _value.value = [...curValue];
      }
    });
    const renderOptions = () => {
      return options.value.map((option, index2) => createVNode(_Checkbox, {
        "key": option.value,
        "value": option.value,
        "disabled": option.disabled,
        "indeterminate": option.indeterminate,
        "modelValue": computedValue.value.includes(option.value)
      }, {
        default: () => [slots.label ? slots.label({
          data: option
        }) : isFunction(option.label) ? option.label() : option.label]
      }));
    };
    return () => {
      var _a;
      return createVNode("span", {
        "class": cls.value
      }, [options.value.length > 0 ? renderOptions() : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const Checkbox = Object.assign(_Checkbox, {
  Group: CheckboxGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Checkbox.name, _Checkbox);
    app.component(componentPrefix + CheckboxGroup.name, CheckboxGroup);
  }
});
const selectInjectionKey = Symbol("ArcoSelectContext");
var __defProp$a = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
const isGroupOption = (option) => {
  return isObject(option) && "isGroup" in option;
};
const isGroupOptionInfo = (option) => {
  return isObject(option) && "isGroup" in option;
};
const getValueString = (value, valueKey = "value") => String(isObject(value) ? value[valueKey] : value);
const getKeyFromValue = (value, valueKey = "value") => {
  if (isObject(value)) {
    return `__arco__option__object__${value[valueKey]}`;
  }
  if (value || isNumber(value)) {
    return `__arco__option__${typeof value}-${value}`;
  }
  return "";
};
const createOptionInfo = (option, {
  valueKey,
  fieldNames,
  origin,
  index: index2 = -1
}) => {
  var _a;
  if (isObject(option)) {
    const value = option[fieldNames.value];
    return {
      raw: option,
      index: index2,
      key: getKeyFromValue(value, valueKey),
      origin,
      value,
      label: (_a = option[fieldNames.label]) != null ? _a : getValueString(value, valueKey),
      render: option[fieldNames.render],
      disabled: Boolean(option[fieldNames.disabled]),
      tagProps: option[fieldNames.tagProps]
    };
  }
  const raw = {
    value: option,
    label: String(option),
    disabled: false
  };
  return __spreadValues$a({
    raw,
    index: index2,
    key: getKeyFromValue(option, valueKey),
    origin
  }, raw);
};
const getOptionInfos = (options, {
  valueKey,
  fieldNames,
  origin,
  optionInfoMap
}) => {
  var _a;
  const infos = [];
  for (const item of options) {
    if (isGroupOption(item)) {
      const options2 = getOptionInfos((_a = item.options) != null ? _a : [], {
        valueKey,
        fieldNames,
        origin,
        optionInfoMap
      });
      if (options2.length > 0) {
        infos.push(__spreadProps$5(__spreadValues$a({}, item), {
          key: `__arco__group__${item.label}`,
          options: options2
        }));
      }
    } else {
      const optionInfo = createOptionInfo(item, {
        valueKey,
        fieldNames,
        origin
      });
      infos.push(optionInfo);
      if (!optionInfoMap.get(optionInfo.key)) {
        optionInfoMap.set(optionInfo.key, optionInfo);
      }
    }
  }
  return infos;
};
const getValidOptions = (optionInfos, {
  inputValue,
  filterOption
}) => {
  const travel = (optionInfos2) => {
    var _a;
    const options = [];
    for (const item of optionInfos2) {
      if (isGroupOptionInfo(item)) {
        const _options = travel((_a = item.options) != null ? _a : []);
        if (_options.length > 0) {
          options.push(__spreadProps$5(__spreadValues$a({}, item), { options: _options }));
        }
      } else if (isValidOption(item, { inputValue, filterOption })) {
        options.push(item);
      }
    }
    return options;
  };
  return travel(optionInfos);
};
const isValidOption = (optionInfo, {
  inputValue,
  filterOption
}) => {
  if (isFunction(filterOption)) {
    return !inputValue || filterOption(inputValue, optionInfo.raw);
  }
  if (filterOption) {
    return optionInfo.label.toLowerCase().includes((inputValue != null ? inputValue : "").toLowerCase());
  }
  return true;
};
const isEqual = (obj, other) => {
  if (!obj || !other) {
    return false;
  }
  if (obj.length !== other.length) {
    return false;
  }
  for (const key in obj) {
    const result = isEqualVariable(obj[key], other[key]);
    if (!result)
      return false;
  }
  return true;
};
const isEqualArray = (arr, other) => {
  if (!arr || !other) {
    return false;
  }
  const { length } = arr;
  if (length !== other.length) {
    return false;
  }
  for (let i = 0; i < length; i++) {
    const result = isEqualVariable(arr[i], other[i]);
    if (!result)
      return false;
  }
  return true;
};
const isEqualVariable = (a, b) => {
  const type = Object.prototype.toString.call(a);
  if (type !== Object.prototype.toString.call(b)) {
    return false;
  }
  if (type === "[object Object]") {
    return isEqual(a, b);
  }
  if (type === "[object Array]") {
    return isEqualArray(a, b);
  }
  if (type === "[object Function]") {
    if (a === b) {
      return true;
    }
    return a.toString() === b.toString();
  }
  return a === b;
};
const _sfc_main$u = defineComponent({
  name: "Option",
  components: {
    Checkbox
  },
  props: {
    value: [String, Number, Object],
    label: String,
    disabled: Boolean,
    tagProps: {
      type: Object
    },
    extra: {
      type: Object
    },
    index: {
      type: Number
    },
    internal: Boolean
  },
  setup(props) {
    const { disabled, tagProps: _tagProps, index: index2 } = toRefs(props);
    const prefixCls = getPrefixCls("select-option");
    const selectCtx = inject(selectInjectionKey, void 0);
    const instance = getCurrentInstance();
    const itemRef = ref();
    const tagProps = ref(_tagProps.value);
    watch(_tagProps, (cur, pre) => {
      if (!isEqual(cur, pre)) {
        tagProps.value = cur;
      }
    });
    const textContent = ref("");
    const value = computed(() => {
      var _a, _b;
      return (_b = (_a = props.value) != null ? _a : props.label) != null ? _b : textContent.value;
    });
    const label = computed(() => {
      var _a;
      return (_a = props.label) != null ? _a : textContent.value;
    });
    const key = computed(() => getKeyFromValue(value.value, selectCtx == null ? void 0 : selectCtx.valueKey));
    const component = computed(() => {
      var _a;
      return (_a = selectCtx == null ? void 0 : selectCtx.component) != null ? _a : "li";
    });
    const setTextContent = () => {
      var _a;
      if (!props.label && itemRef.value) {
        const text = (_a = itemRef.value.textContent) != null ? _a : "";
        if (textContent.value !== text) {
          textContent.value = text;
        }
      }
    };
    onMounted(() => setTextContent());
    onUpdated(() => setTextContent());
    const isSelected = computed(() => {
      var _a;
      return (_a = selectCtx == null ? void 0 : selectCtx.valueKeys.includes(key.value)) != null ? _a : false;
    });
    const isActive = computed(() => (selectCtx == null ? void 0 : selectCtx.activeKey) === key.value);
    let isValid = ref(true);
    if (!props.internal) {
      const optionInfo = reactive({
        raw: {
          value,
          label,
          disabled,
          tagProps
        },
        ref: itemRef,
        index: index2,
        key,
        origin: "slot",
        value,
        label,
        disabled,
        tagProps
      });
      isValid = computed(() => isValidOption(optionInfo, {
        inputValue: selectCtx == null ? void 0 : selectCtx.inputValue,
        filterOption: selectCtx == null ? void 0 : selectCtx.filterOption
      }));
      if (instance) {
        selectCtx == null ? void 0 : selectCtx.addSlotOptionInfo(instance.uid, optionInfo);
      }
      onBeforeUnmount(() => {
        if (instance) {
          selectCtx == null ? void 0 : selectCtx.removeSlotOptionInfo(instance.uid);
        }
      });
    }
    const handleClick = (ev) => {
      if (!props.disabled) {
        selectCtx == null ? void 0 : selectCtx.onSelect(key.value, ev);
      }
    };
    const handleMouseEnter = () => {
      if (!props.disabled) {
        selectCtx == null ? void 0 : selectCtx.setActiveKey(key.value);
      }
    };
    const handleMouseLeave = () => {
      if (!props.disabled) {
        selectCtx == null ? void 0 : selectCtx.setActiveKey();
      }
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-active`]: isActive.value,
        [`${prefixCls}-multiple`]: selectCtx == null ? void 0 : selectCtx.multiple
      }
    ]);
    return {
      prefixCls,
      cls,
      selectCtx,
      itemRef,
      component,
      isSelected,
      isValid,
      handleClick,
      handleMouseEnter,
      handleMouseLeave
    };
  }
});
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkbox = resolveComponent("checkbox");
  return withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.component), {
    ref: "itemRef",
    class: normalizeClass([_ctx.cls, { [`${_ctx.prefixCls}-has-suffix`]: Boolean(_ctx.$slots.suffix) }]),
    onClick: _ctx.handleClick,
    onMouseenter: _ctx.handleMouseEnter,
    onMouseleave: _ctx.handleMouseLeave
  }, {
    default: withCtx(() => [
      _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-icon`)
      }, [
        renderSlot(_ctx.$slots, "icon")
      ], 2)) : createCommentVNode("v-if", true),
      _ctx.selectCtx && _ctx.selectCtx.multiple ? (openBlock(), createBlock(_component_checkbox, {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-checkbox`),
        "model-value": _ctx.isSelected,
        disabled: _ctx.disabled,
        "uninject-group-context": ""
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "model-value", "disabled"])) : (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(`${_ctx.prefixCls}-content`)
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ], 2)),
      _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", {
        key: 3,
        class: normalizeClass(`${_ctx.prefixCls}-suffix`)
      }, [
        renderSlot(_ctx.$slots, "suffix")
      ], 2)) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [
    [vShow, _ctx.isValid]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["render", _sfc_render$o]]);
var __defProp$9 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
const DEFAULT_FIELD_NAMES$1 = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
const useOptions = ({
  options,
  extraOptions,
  inputValue,
  filterOption,
  showExtraOptions,
  valueKey,
  fieldNames
}) => {
  const mergedFieldNames = computed(() => __spreadValues$9(__spreadValues$9({}, DEFAULT_FIELD_NAMES$1), fieldNames == null ? void 0 : fieldNames.value));
  const slotOptionInfoMap = reactive(/* @__PURE__ */ new Map());
  const sortedSlotOptionInfos = ref([]);
  watch(slotOptionInfoMap, (slotOptionInfoMap2) => {
    sortedSlotOptionInfos.value = Array.from(slotOptionInfoMap2.values()).sort((a, b) => {
      if (isNumber(a.index) && isNumber(b.index)) {
        return a.index - b.index;
      }
      return 0;
    });
  }, { deep: true });
  const propOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = /* @__PURE__ */ new Map();
    const optionInfos = getOptionInfos((_a = options == null ? void 0 : options.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "options",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const extraOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = /* @__PURE__ */ new Map();
    const optionInfos = getOptionInfos((_a = extraOptions == null ? void 0 : extraOptions.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "extraOptions",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const optionInfoMap = reactive(/* @__PURE__ */ new Map());
  watch([
    slotOptionInfoMap,
    options != null ? options : ref([]),
    extraOptions != null ? extraOptions : ref([]),
    valueKey != null ? valueKey : ref("value")
  ], () => {
    optionInfoMap.clear();
    sortedSlotOptionInfos.value.forEach((info, index2) => {
      optionInfoMap.set(info.key, __spreadProps$4(__spreadValues$9({}, info), { index: index2 }));
    });
    propOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
    extraOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
  }, { immediate: true, deep: true });
  const validOptions = computed(() => {
    var _a;
    const options2 = getValidOptions(propOptionData.value.optionInfos, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
    if ((_a = showExtraOptions == null ? void 0 : showExtraOptions.value) != null ? _a : true) {
      options2.push(...getValidOptions(extraOptionData.value.optionInfos, {
        inputValue: inputValue == null ? void 0 : inputValue.value,
        filterOption: filterOption == null ? void 0 : filterOption.value
      }));
    }
    return options2;
  });
  const validOptionInfos = computed(() => Array.from(optionInfoMap.values()).filter((optionInfo) => {
    if (optionInfo.origin === "extraOptions" && (showExtraOptions == null ? void 0 : showExtraOptions.value) === false) {
      return false;
    }
    return isValidOption(optionInfo, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
  }));
  const enabledOptionKeys = computed(() => validOptionInfos.value.filter((optionInfo) => !optionInfo.disabled).map((info) => info.key));
  const getNextSlotOptionIndex = () => slotOptionInfoMap.size;
  const addSlotOptionInfo = (id, optionInfo) => {
    slotOptionInfoMap.set(id, optionInfo);
  };
  const removeSlotOptionInfo = (id) => {
    slotOptionInfoMap.delete(id);
  };
  return {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  };
};
const KEYBOARD_KEY = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
};
const stringifyCodeKey = (k) => {
  return JSON.stringify({
    key: k.key,
    ctrl: Boolean(k.ctrl),
    shift: Boolean(k.shift),
    alt: Boolean(k.alt),
    meta: Boolean(k.meta)
  });
};
const getKeyDownHandler = (codeKeyMap) => {
  const map = {};
  codeKeyMap.forEach((callback, codeKey) => {
    const _codeKey = isString(codeKey) ? { key: codeKey } : codeKey;
    map[stringifyCodeKey(_codeKey)] = callback;
  });
  return (event) => {
    const key = stringifyCodeKey({
      key: event.key,
      ctrl: event.ctrlKey,
      shift: event.shiftKey,
      alt: event.altKey,
      meta: event.metaKey
    });
    const callback = map[key];
    if (callback) {
      event.stopPropagation();
      callback(event);
    }
  };
};
const useSelect = ({
  multiple,
  options,
  extraOptions,
  inputValue,
  filterOption,
  showExtraOptions,
  component,
  valueKey,
  fieldNames,
  loading,
  popupVisible,
  valueKeys,
  dropdownRef,
  optionRefs,
  virtualListRef,
  onSelect,
  onPopupVisibleChange
}) => {
  const {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  } = useOptions({
    options,
    extraOptions,
    inputValue,
    filterOption,
    showExtraOptions,
    valueKey,
    fieldNames
  });
  const activeKey = ref();
  watch(enabledOptionKeys, (enabledKeys) => {
    if (!activeKey.value || !enabledKeys.includes(activeKey.value)) {
      activeKey.value = enabledKeys[0];
    }
  });
  const setActiveKey = (key) => {
    activeKey.value = key;
  };
  const getNextActiveKey = (direction) => {
    const _length = enabledOptionKeys.value.length;
    if (_length === 0) {
      return void 0;
    }
    if (!activeKey.value) {
      if (direction === "down") {
        return enabledOptionKeys.value[0];
      }
      return enabledOptionKeys.value[_length - 1];
    }
    const activeIndex = enabledOptionKeys.value.indexOf(activeKey.value);
    const nextIndex = (_length + activeIndex + (direction === "up" ? -1 : 1)) % _length;
    return enabledOptionKeys.value[nextIndex];
  };
  const scrollIntoView = (key) => {
    var _a, _b, _c;
    if (virtualListRef == null ? void 0 : virtualListRef.value) {
      virtualListRef.value.scrollTo({ key });
    }
    const optionInfo = optionInfoMap.get(key);
    const wrapperEle = (_b = (_a = dropdownRef == null ? void 0 : dropdownRef.value) == null ? void 0 : _a.$refs) == null ? void 0 : _b.wrapperRef;
    const optionEle = (_c = optionRefs == null ? void 0 : optionRefs.value[key]) != null ? _c : optionInfo == null ? void 0 : optionInfo.ref;
    if (!wrapperEle || !optionEle) {
      return;
    }
    if (wrapperEle.scrollHeight === wrapperEle.offsetHeight) {
      return;
    }
    const optionRect = getRelativeRect(optionEle, wrapperEle);
    const wrapperScrollTop = wrapperEle.scrollTop;
    if (optionRect.top < 0) {
      wrapperEle.scrollTo(0, wrapperScrollTop + optionRect.top);
    } else if (optionRect.bottom < 0) {
      wrapperEle.scrollTo(0, wrapperScrollTop - optionRect.bottom);
    }
  };
  watch(popupVisible, (visible) => {
    if (visible) {
      const current = valueKeys.value[valueKeys.value.length - 1];
      const _activeKey = enabledOptionKeys.value.includes(current) ? current : enabledOptionKeys.value[0];
      if (_activeKey !== activeKey.value) {
        activeKey.value = _activeKey;
      }
      nextTick(() => {
        if (activeKey.value) {
          scrollIntoView(activeKey.value);
        }
      });
    }
  });
  const handleKeyDown = getKeyDownHandler(/* @__PURE__ */ new Map([
    [
      KEYBOARD_KEY.ENTER,
      (e) => {
        if (!(loading == null ? void 0 : loading.value)) {
          if (popupVisible.value) {
            if (activeKey.value) {
              onSelect(activeKey.value, e);
            }
          } else {
            onPopupVisibleChange(true);
          }
        }
        e.preventDefault();
      }
    ],
    [
      KEYBOARD_KEY.ESC,
      (e) => {
        onPopupVisibleChange(false);
        e.preventDefault();
      }
    ],
    [
      KEYBOARD_KEY.ARROW_DOWN,
      (e) => {
        const next = getNextActiveKey("down");
        if (next) {
          activeKey.value = next;
          scrollIntoView(next);
        }
        e.preventDefault();
      }
    ],
    [
      KEYBOARD_KEY.ARROW_UP,
      (e) => {
        const next = getNextActiveKey("up");
        if (next) {
          activeKey.value = next;
          scrollIntoView(next);
        }
        e.preventDefault();
      }
    ]
  ]));
  provide(selectInjectionKey, reactive({
    multiple,
    valueKey,
    inputValue,
    filterOption,
    component,
    valueKeys,
    activeKey,
    setActiveKey,
    onSelect,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  }));
  return {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    activeKey,
    setActiveKey,
    addSlotOptionInfo,
    removeSlotOptionInfo,
    getNextActiveKey,
    scrollIntoView,
    handleKeyDown
  };
};
const _sfc_main$t = defineComponent({
  name: "IconMore",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-more`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$f = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$e = /* @__PURE__ */ createElementVNode("path", { d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$e,
  _hoisted_3$e
];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_4$1, 14, _hoisted_1$f);
}
var _IconMore = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["render", _sfc_render$n]]);
const IconMore = Object.assign(_IconMore, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconMore.name, _IconMore);
  }
});
const _sfc_main$s = defineComponent({
  name: "IconUp",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-up`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$e = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", { d: "M39.6 30.557 24.043 15 8.487 30.557" }, null, -1);
const _hoisted_3$d = [
  _hoisted_2$d
];
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$d, 14, _hoisted_1$e);
}
var _IconUp = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["render", _sfc_render$m]]);
const IconUp = Object.assign(_IconUp, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconUp.name, _IconUp);
  }
});
const _sfc_main$r = defineComponent({
  name: "IconDown",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-down`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$d = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", { d: "M39.6 17.443 24.043 33 8.487 17.443" }, null, -1);
const _hoisted_3$c = [
  _hoisted_2$c
];
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$c, 14, _hoisted_1$d);
}
var _IconDown = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["render", _sfc_render$l]]);
const IconDown = Object.assign(_IconDown, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconDown.name, _IconDown);
  }
});
const _sfc_main$q = defineComponent({
  name: "IconLeft",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-left`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$c = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", { d: "M32 8.4 16.444 23.956 32 39.513" }, null, -1);
const _hoisted_3$b = [
  _hoisted_2$b
];
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$b, 14, _hoisted_1$c);
}
var _IconLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["render", _sfc_render$k]]);
const IconLeft = Object.assign(_IconLeft, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconLeft.name, _IconLeft);
  }
});
const _sfc_main$p = defineComponent({
  name: "IconRight",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-right`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$b = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", { d: "m16 39.513 15.556-15.557L16 8.4" }, null, -1);
const _hoisted_3$a = [
  _hoisted_2$a
];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$a, 14, _hoisted_1$b);
}
var _IconRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["render", _sfc_render$j]]);
const IconRight = Object.assign(_IconRight, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconRight.name, _IconRight);
  }
});
const useChildrenComponents = (name) => {
  const children = {};
  const components = ref([]);
  const getComponents = () => {
    if (children.value) {
      const _components = getComponentsFromChildren(children.value, name);
      if (_components.length !== components.value.length || _components.toString() !== components.value.toString()) {
        components.value = _components;
      }
    }
  };
  onMounted(() => getComponents());
  onUpdated(() => getComponents());
  return {
    children,
    components
  };
};
const useInput = ({
  defaultValue,
  modelValue,
  emit,
  eventName = "input",
  updateEventName = "update:modelValue",
  eventHandlers
}) => {
  var _a;
  const inputRef = ref();
  const _value = ref((_a = defaultValue == null ? void 0 : defaultValue.value) != null ? _a : "");
  const _focused = ref(false);
  const isComposition = ref(false);
  const compositionValue = ref("");
  let initialValue;
  const computedValue = computed(() => {
    var _a2;
    return (_a2 = modelValue == null ? void 0 : modelValue.value) != null ? _a2 : _value.value;
  });
  const updateValue = (value, ev) => {
    _value.value = value;
    emit(updateEventName, value);
    emit(eventName, value, ev);
  };
  const handleInput = (ev) => {
    const { value } = ev.target;
    if (!isComposition.value) {
      updateValue(value, ev);
    }
  };
  const handleChange = (ev) => {
    if (eventName === "input" && computedValue.value !== initialValue) {
      initialValue = computedValue.value;
      emit("change", computedValue.value, ev);
    }
  };
  const handleComposition = (ev) => {
    var _a2;
    const { value } = ev.target;
    if (ev.type === "compositionend") {
      isComposition.value = false;
      compositionValue.value = "";
      updateValue(value, ev);
    } else {
      isComposition.value = true;
      compositionValue.value = computedValue.value + ((_a2 = ev.data) != null ? _a2 : "");
    }
  };
  const handleFocus = (ev) => {
    var _a2, _b;
    _focused.value = true;
    initialValue = computedValue.value;
    emit("focus", ev);
    (_b = (_a2 = eventHandlers == null ? void 0 : eventHandlers.value) == null ? void 0 : _a2.onFocus) == null ? void 0 : _b.call(_a2, ev);
  };
  const handleBlur = (ev) => {
    var _a2, _b;
    _focused.value = false;
    emit("blur", ev);
    (_b = (_a2 = eventHandlers == null ? void 0 : eventHandlers.value) == null ? void 0 : _a2.onBlur) == null ? void 0 : _b.call(_a2, ev);
    handleChange(ev);
  };
  const handleKeyDown = (ev) => {
    const keyCode = ev.key || ev.code;
    if (!isComposition.value && keyCode === Enter.key) {
      emit("pressEnter", ev);
      handleChange(ev);
    }
  };
  const handleMousedown = (ev) => {
    if (inputRef.value && ev.target !== inputRef.value) {
      ev.preventDefault();
      inputRef.value.focus();
    }
  };
  watch(computedValue, (value) => {
    if (inputRef.value && value !== inputRef.value.value) {
      inputRef.value.value = value;
    }
  });
  return {
    inputRef,
    _value,
    _focused,
    isComposition,
    compositionValue,
    computedValue,
    handleInput,
    handleComposition,
    handleFocus,
    handleBlur,
    handleKeyDown,
    handleMousedown
  };
};
var InputLabel = defineComponent({
  name: "InputLabel",
  inheritAttrs: false,
  props: {
    modelValue: Object,
    inputValue: {
      type: String,
      default: ""
    },
    enabledInput: Boolean,
    formatLabel: Function,
    placeholder: String,
    retainInputValue: Boolean,
    disabled: Boolean,
    baseCls: String,
    size: String,
    error: Boolean,
    focused: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: ["update:inputValue", "inputValueChange", "focus", "blur"],
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    var _a;
    const {
      size,
      disabled,
      error,
      inputValue,
      uninjectFormItemContext
    } = toRefs(props);
    const prefixCls = (_a = props.baseCls) != null ? _a : getPrefixCls("input-label");
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext == null ? void 0 : uninjectFormItemContext.value
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const {
      inputRef,
      _focused,
      computedValue: computedInputValue,
      handleInput,
      handleComposition,
      handleFocus,
      handleBlur,
      handleMousedown
    } = useInput({
      modelValue: inputValue,
      emit,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers
    });
    const mergedFocused = computed(() => {
      var _a2;
      return (_a2 = props.focused) != null ? _a2 : _focused.value;
    });
    const showInput = computed(() => props.enabledInput && _focused.value || !props.modelValue);
    const mergedPlaceholder = computed(() => {
      if (props.enabledInput && props.modelValue) {
        return props.modelValue.label;
      }
      return props.placeholder;
    });
    const renderLabel = () => {
      var _a2, _b, _c, _d, _e;
      if (props.modelValue) {
        return (_e = (_c = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
          data: props.modelValue
        })) != null ? _c : (_b = props.formatLabel) == null ? void 0 : _b.call(props, props.modelValue)) != null ? _e : (_d = props.modelValue) == null ? void 0 : _d.label;
      }
      return null;
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-search`]: props.enabledInput,
      [`${prefixCls}-focus`]: mergedFocused.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-error`]: mergedError.value
    }]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const render2 = () => createVNode("span", mergeProps(wrapperAttrs.value, {
      "class": cls.value,
      "onMousedown": handleMousedown
    }), [slots.prefix && createVNode("span", {
      "class": `${prefixCls}-prefix`
    }, [slots.prefix()]), createVNode("input", mergeProps(inputAttrs.value, {
      "ref": inputRef,
      "class": [`${prefixCls}-input`, {
        [`${prefixCls}-input-hidden`]: !showInput.value
      }],
      "value": computedInputValue.value,
      "readonly": !props.enabledInput,
      "placeholder": mergedPlaceholder.value,
      "disabled": mergedDisabled.value,
      "onInput": handleInput,
      "onFocus": handleFocus,
      "onBlur": handleBlur,
      "onCompositionstart": handleComposition,
      "onCompositionupdate": handleComposition,
      "onCompositionend": handleComposition
    }), null), createVNode("span", {
      "class": [`${prefixCls}-value`, {
        [`${prefixCls}-value-hidden`]: showInput.value
      }]
    }, [renderLabel()]), slots.suffix && createVNode("span", {
      "class": `${prefixCls}-suffix`
    }, [slots.suffix()])]);
    return {
      inputRef,
      render: render2
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
var __defProp$8 = Object.defineProperty;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
const getValueData = (value, fieldNames) => {
  const result = [];
  for (const item of value) {
    if (isObject(item)) {
      result.push({
        raw: item,
        value: item[fieldNames.value],
        label: item[fieldNames.label],
        closable: item[fieldNames.closable],
        tagProps: item[fieldNames.tagProps]
      });
    } else if (value || isNumber(value)) {
      const raw = {
        value: item,
        label: String(item),
        closable: true
      };
      result.push(__spreadValues$8({
        raw
      }, raw));
    }
  }
  return result;
};
const TAG_COLORS = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray"
];
const _sfc_main$o = defineComponent({
  name: "Tag",
  components: {
    IconHover,
    IconClose,
    IconLoading
  },
  props: {
    color: {
      type: String
    },
    size: {
      type: String
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: true
    },
    onClose: {
      type: [Function, Array]
    },
    onCheck: {
      type: [Function, Array]
    }
  },
  emits: [
    "update:visible",
    "update:checked",
    "close",
    "check"
  ],
  setup(props, { emit }) {
    const { size } = toRefs(props);
    const prefixCls = getPrefixCls("tag");
    const isBuiltInColor = computed(() => props.color && TAG_COLORS.includes(props.color));
    const isCustomColor = computed(() => props.color && !TAG_COLORS.includes(props.color));
    const _visible = ref(props.defaultVisible);
    const _checked = ref(props.defaultChecked);
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.visible) != null ? _a : _visible.value;
    });
    const computedChecked = computed(() => {
      var _a;
      return props.checkable ? (_a = props.checked) != null ? _a : _checked.value : true;
    });
    const { mergedSize: _mergedSize } = useSize(size);
    const mergedSize = computed(() => {
      if (_mergedSize.value === "mini") {
        return "small";
      }
      return _mergedSize.value;
    });
    const handleClose = (ev) => {
      _visible.value = false;
      emit("update:visible", false);
      emit("close", ev);
    };
    const handleClick = (ev) => {
      if (props.checkable) {
        const newChecked = !computedChecked.value;
        _checked.value = newChecked;
        emit("update:checked", newChecked);
        emit("check", newChecked, ev);
      }
    };
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-hide`]: !computedVisible.value,
        [`${prefixCls}-${props.color}`]: isBuiltInColor.value,
        [`${prefixCls}-checkable`]: props.checkable,
        [`${prefixCls}-checked`]: computedChecked.value,
        [`${prefixCls}-custom-color`]: isCustomColor.value
      }
    ]);
    const style = computed(() => {
      if (isCustomColor.value) {
        return {
          backgroundColor: props.color
        };
      }
      return void 0;
    });
    return {
      prefixCls,
      cls,
      style,
      computedVisible,
      computedChecked,
      handleClick,
      handleClose
    };
  }
});
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_close = resolveComponent("icon-close");
  const _component_icon_hover = resolveComponent("icon-hover");
  const _component_icon_loading = resolveComponent("icon-loading");
  return _ctx.computedVisible ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.style),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      renderSlot(_ctx.$slots, "icon")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.closable ? (openBlock(), createBlock(_component_icon_hover, {
      key: 1,
      prefix: _ctx.prefixCls,
      class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
      onClick: withModifiers(_ctx.handleClose, ["stop"])
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "close-icon", {}, () => [
          createVNode(_component_icon_close)
        ])
      ]),
      _: 3
    }, 8, ["prefix", "class", "onClick"])) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createElementBlock("span", {
      key: 2,
      class: normalizeClass(`${_ctx.prefixCls}-loading-icon`)
    }, [
      createVNode(_component_icon_loading)
    ], 2)) : createCommentVNode("v-if", true)
  ], 6)) : createCommentVNode("v-if", true);
}
var _Tag = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["render", _sfc_render$i]]);
const Tag = Object.assign(_Tag, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Tag.name, _Tag);
  }
});
var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_FIELD_NAMES = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var _InputTag = defineComponent({
  name: "InputTag",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    inputValue: String,
    defaultInputValue: {
      type: String,
      default: ""
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    retainInputValue: {
      type: Boolean,
      default: false
    },
    formatTag: {
      type: Function
    },
    uniqueValue: {
      type: Boolean,
      default: false
    },
    fieldNames: {
      type: Object
    },
    baseCls: String,
    focused: Boolean,
    disabledInput: Boolean,
    uninjectFormItemContext: Boolean,
    onChange: {
      type: [Function, Array]
    },
    onInputValueChange: {
      type: [Function, Array]
    },
    onPressEnter: {
      type: [Function, Array]
    },
    onRemove: {
      type: [Function, Array]
    },
    onClear: {
      type: [Function, Array]
    },
    onFocus: {
      type: [Function, Array]
    },
    onBlur: {
      type: [Function, Array]
    }
  },
  emits: [
    "update:modelValue",
    "update:inputValue",
    "change",
    "inputValueChange",
    "pressEnter",
    "remove",
    "clear",
    "focus",
    "blur"
  ],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      uninjectFormItemContext,
      modelValue
    } = toRefs(props);
    const prefixCls = props.baseCls || getPrefixCls("input-tag");
    const inputRef = ref();
    const mirrorRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      feedback,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext == null ? void 0 : uninjectFormItemContext.value
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const mergedFieldNames = computed(() => __spreadValues$7(__spreadValues$7({}, DEFAULT_FIELD_NAMES), props.fieldNames));
    const _focused = ref(false);
    const _value = ref(props.defaultValue);
    const _inputValue = ref(props.defaultInputValue);
    const isComposition = ref(false);
    const compositionValue = ref("");
    const inputStyle = reactive({
      width: "12px"
    });
    const mergedFocused = computed(() => props.focused || _focused.value);
    const updateInputValue = (value) => {
      _inputValue.value = value;
      emit("update:inputValue", value);
    };
    const handleComposition = (e) => {
      var _a;
      const {
        value
      } = e.target;
      if (e.type === "compositionend") {
        isComposition.value = false;
        compositionValue.value = "";
        emit("inputValueChange", value, e);
        updateInputValue(value);
      } else {
        isComposition.value = true;
        compositionValue.value = computedInputValue.value + ((_a = e.data) != null ? _a : "");
      }
    };
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    const computedInputValue = computed(() => {
      var _a;
      return (_a = props.inputValue) != null ? _a : _inputValue.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = [];
      }
    });
    const handleMousedown = (e) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault();
        inputRef.value.focus();
      }
    };
    const handleInput = (e) => {
      const {
        value
      } = e.target;
      if (!isComposition.value) {
        emit("inputValueChange", value, e);
        updateInputValue(value);
      }
    };
    const tags = computed(() => {
      const valueData = getValueData(computedValue.value, mergedFieldNames.value);
      if (props.maxTagCount > 0) {
        const invisibleTags = valueData.length - props.maxTagCount;
        if (invisibleTags > 0) {
          const result = valueData.slice(0, props.maxTagCount);
          const raw = {
            value: "__arco__more",
            label: `+${invisibleTags}...`,
            closable: false
          };
          result.push(__spreadValues$7({
            raw
          }, raw));
          return result;
        }
      }
      return valueData;
    });
    const updateValue = (value, ev) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, ev);
    };
    const handleRemove = (value, index2, e) => {
      var _a;
      const newValue = (_a = computedValue.value) == null ? void 0 : _a.filter((_, i) => i !== index2);
      updateValue(newValue, e);
      emit("remove", value, e);
    };
    const handleClear = (e) => {
      const newValue = [];
      updateValue(newValue, e);
      emit("clear", e);
    };
    const showClearBtn = computed(() => !mergedDisabled.value && !props.readonly && props.allowClear && Boolean(computedValue.value.length));
    const handlePressEnter = (e) => {
      var _a;
      if (computedInputValue.value) {
        e.preventDefault();
        emit("pressEnter", computedInputValue.value, e);
        if (props.uniqueValue && ((_a = computedValue.value) == null ? void 0 : _a.includes(computedInputValue.value))) {
          return;
        }
        const newValue = computedValue.value.concat(computedInputValue.value);
        updateValue(newValue, e);
        if (!props.retainInputValue) {
          _inputValue.value = "";
          emit("update:inputValue", "");
          emit("inputValueChange", "", e);
        }
      }
    };
    const handleFocus = (ev) => {
      var _a, _b;
      _focused.value = true;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      _focused.value = false;
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleKeyDown = (e) => {
      const keyCode = e.key || e.code;
      if (!isComposition.value && computedInputValue.value && keyCode === Enter.key) {
        handlePressEnter(e);
      }
      if (!isComposition.value && tags.value.length > 0 && !computedInputValue.value && keyCode === Backspace.key) {
        const lastIndex = tags.value.length - 1;
        handleRemove(tags.value[lastIndex].value, lastIndex, e);
      }
    };
    const setInputWidth = (width) => {
      if (width > 12) {
        inputStyle.width = `${width}px`;
      } else {
        inputStyle.width = "12px";
      }
    };
    onMounted(() => {
      if (mirrorRef.value) {
        setInputWidth(mirrorRef.value.offsetWidth);
      }
    });
    const handleResize = () => {
      if (mirrorRef.value) {
        setInputWidth(mirrorRef.value.offsetWidth);
      }
    };
    watch(computedInputValue, (value) => {
      if (inputRef.value && !isComposition.value && value !== inputRef.value.value) {
        inputRef.value.value = value;
      }
    });
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-disabled-input`]: props.disabledInput,
      [`${prefixCls}-error`]: mergedError.value,
      [`${prefixCls}-focus`]: mergedFocused.value,
      [`${prefixCls}-readonly`]: props.readonly,
      [`${prefixCls}-has-tag`]: tags.value.length > 0,
      [`${prefixCls}-has-prefix`]: Boolean(slots.prefix),
      [`${prefixCls}-has-suffix`]: Boolean(slots.suffix) || showClearBtn.value || feedback.value,
      [`${prefixCls}-has-placeholder`]: !computedValue.value.length
    }]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const render2 = () => {
      var _a;
      return createVNode("span", mergeProps({
        "class": cls.value,
        "onMousedown": handleMousedown
      }, wrapperAttrs.value), [createVNode(ResizeObserver$1, {
        "onResize": handleResize
      }, {
        default: () => [createVNode("span", {
          "ref": mirrorRef,
          "class": `${prefixCls}-mirror`
        }, [tags.value.length > 0 ? compositionValue.value || computedInputValue.value : compositionValue.value || computedInputValue.value || props.placeholder])]
      }), slots.prefix && createVNode("span", {
        "class": `${prefixCls}-prefix`
      }, [slots.prefix()]), createVNode(TransitionGroup, {
        "tag": "span",
        "name": "input-tag-zoom",
        "class": `${prefixCls}-inner`
      }, {
        default: () => [tags.value.map((item, index2) => createVNode(Tag, mergeProps({
          "key": `tag-${item.value}`,
          "class": `${prefixCls}-tag`,
          "closable": !mergedDisabled.value && !props.readonly && item.closable,
          "visible": true
        }, item.tagProps, {
          "onClose": (ev) => handleRemove(item.value, index2, ev)
        }), {
          default: () => {
            var _a2, _b, _c, _d;
            return [(_d = (_c = (_a2 = slots.tag) == null ? void 0 : _a2.call(slots, {
              data: item.raw
            })) != null ? _c : (_b = props.formatTag) == null ? void 0 : _b.call(props, item.raw)) != null ? _d : item.label];
          }
        })), createVNode("input", mergeProps(inputAttrs.value, {
          "ref": inputRef,
          "key": "input-tag-input",
          "class": `${prefixCls}-input`,
          "style": inputStyle,
          "placeholder": tags.value.length === 0 ? props.placeholder : void 0,
          "disabled": mergedDisabled.value,
          "readonly": props.readonly || props.disabledInput,
          "onInput": handleInput,
          "onKeydown": handleKeyDown,
          "onFocus": handleFocus,
          "onBlur": handleBlur,
          "onCompositionstart": handleComposition,
          "onCompositionupdate": handleComposition,
          "onCompositionend": handleComposition
        }), null)]
      }), showClearBtn.value && createVNode(IconHover, {
        "class": `${prefixCls}-clear-btn`,
        "onClick": handleClear,
        "onMousedown": (e) => e.stopPropagation()
      }, {
        default: () => [createVNode(IconClose, null, null)]
      }), (slots.suffix || Boolean(feedback.value)) && createVNode("span", {
        "class": `${prefixCls}-suffix`
      }, [(_a = slots.suffix) == null ? void 0 : _a.call(slots), Boolean(feedback.value) && createVNode(FeedbackIcon, {
        "type": feedback.value
      }, null)])]);
    };
    return {
      inputRef,
      render: render2
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const InputTag = Object.assign(_InputTag, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _InputTag.name, _InputTag);
  }
});
const _sfc_main$n = defineComponent({
  name: "IconExpand",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-expand`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$a = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", { d: "M7 26v14c0 .552.444 1 .996 1H22m19-19V8c0-.552-.444-1-.996-1H26" }, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$9, 14, _hoisted_1$a);
}
var _IconExpand = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["render", _sfc_render$h]]);
const IconExpand = Object.assign(_IconExpand, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconExpand.name, _IconExpand);
  }
});
var SelectView = defineComponent({
  name: "SelectView",
  props: {
    modelValue: {
      type: Array,
      required: true
    },
    inputValue: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    opened: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: Boolean,
      default: (props) => isArray(props.modelValue)
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    retainInputValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["remove", "clear", "focus", "blur"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      size,
      disabled,
      error
    } = toRefs(props);
    const prefixCls = getPrefixCls("select-view");
    const {
      feedback,
      eventHandlers,
      mergedDisabled,
      mergedSize: _mergedSize,
      mergedError
    } = useFormItem({
      size,
      disabled,
      error
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const {
      opened
    } = toRefs(props);
    const componentRef = ref();
    const inputRef = computed(() => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.inputRef;
    });
    const isEmptyValue = computed(() => props.modelValue.length === 0);
    const enabledInput = computed(() => props.allowSearch || props.allowCreate);
    const showClearBtn = computed(() => props.allowClear && !props.disabled && !isEmptyValue.value);
    const handleFocus = (ev) => {
      var _a, _b;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleRemove = (tag) => {
      emit("remove", tag);
    };
    const handleClear = (ev) => {
      emit("clear", ev);
    };
    const renderIcon = () => {
      var _a, _b, _c, _d;
      if (props.loading) {
        return (_b = (_a = slots["loading-icon"]) == null ? void 0 : _a.call(slots)) != null ? _b : createVNode(IconLoading, null, null);
      }
      if (props.allowSearch && props.opened) {
        return (_d = (_c = slots["search-icon"]) == null ? void 0 : _c.call(slots)) != null ? _d : createVNode(IconSearch, null, null);
      }
      if (slots["arrow-icon"]) {
        return slots["arrow-icon"]();
      }
      if (props.multiple || enabledInput.value) {
        return createVNode(IconExpand, {
          "style": {
            transform: "rotate(-45deg)"
          }
        }, null);
      }
      return createVNode(IconDown, {
        "class": `${prefixCls}-arrow-icon`
      }, null);
    };
    const renderSuffix = () => createVNode(Fragment, null, [showClearBtn.value && createVNode(IconHover, {
      "class": `${prefixCls}-clear-btn`,
      "onClick": handleClear,
      "onMousedown": (ev) => ev.stopPropagation()
    }, {
      default: () => [createVNode(IconClose, null, null)]
    }), createVNode("span", {
      "class": `${prefixCls}-icon`
    }, [renderIcon()]), Boolean(feedback.value) && createVNode(FeedbackIcon, {
      "type": feedback.value
    }, null)]);
    watch(opened, (opened2) => {
      if (!opened2 && inputRef.value && inputRef.value.isSameNode(document.activeElement)) {
        inputRef.value.blur();
      }
    });
    const cls = computed(() => [`${prefixCls}-${props.multiple ? "multiple" : "single"}`, {
      [`${prefixCls}-opened`]: props.opened,
      [`${prefixCls}-borderless`]: !props.bordered
    }]);
    const render2 = () => {
      if (props.multiple) {
        return createVNode(InputTag, {
          "ref": componentRef,
          "baseCls": prefixCls,
          "class": cls.value,
          "modelValue": props.modelValue,
          "inputValue": props.inputValue,
          "focused": props.opened,
          "placeholder": props.placeholder,
          "disabled": mergedDisabled.value,
          "size": mergedSize.value,
          "error": mergedError.value,
          "maxTagCount": props.maxTagCount,
          "disabledInput": !props.allowSearch && !props.allowCreate,
          "retainInputValue": true,
          "uninjectFormItemContext": true,
          "onRemove": handleRemove,
          "onFocus": handleFocus,
          "onBlur": handleBlur
        }, {
          prefix: slots.prefix,
          suffix: renderSuffix,
          tag: slots.label
        });
      }
      return createVNode(InputLabel, {
        "ref": componentRef,
        "baseCls": prefixCls,
        "class": cls.value,
        "modelValue": props.modelValue[0],
        "inputValue": props.inputValue,
        "focused": props.opened,
        "placeholder": props.placeholder,
        "disabled": mergedDisabled.value,
        "size": mergedSize.value,
        "error": mergedError.value,
        "enabledInput": enabledInput.value,
        "uninjectFormItemContext": true,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, {
        default: slots.label,
        prefix: slots.prefix,
        suffix: renderSuffix
      });
    };
    return {
      inputRef,
      handleFocus,
      handleBlur,
      render: render2
    };
  },
  methods: {
    focus() {
      if (this.inputRef) {
        this.inputRef.focus();
      }
    },
    blur() {
      if (this.inputRef) {
        this.inputRef.blur();
      }
    }
  },
  render() {
    return this.render();
  }
});
const radioGroupKey = Symbol("RadioGroup");
var _Radio = defineComponent({
  name: "Radio",
  components: {
    IconHover
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: true
    },
    type: {
      type: String,
      default: "radio"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    uninjectGroupContext: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const prefixCls = getPrefixCls("radio");
    const radioGroupCtx = !props.uninjectGroupContext ? inject(radioGroupKey, void 0) : void 0;
    const {
      mergedDisabled: _mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled: toRef(props, "disabled")
    });
    const inputRef = ref(null);
    const _checked = ref(props.defaultChecked);
    const isGroup = computed(() => (radioGroupCtx == null ? void 0 : radioGroupCtx.name) === "ArcoRadioGroup");
    const mergedType = computed(() => {
      var _a;
      return (_a = radioGroupCtx == null ? void 0 : radioGroupCtx.type) != null ? _a : props.type;
    });
    const mergedDisabled = computed(() => (radioGroupCtx == null ? void 0 : radioGroupCtx.disabled) || _mergedDisabled.value);
    const computedChecked = computed(() => {
      var _a, _b;
      if (isGroup.value) {
        return (radioGroupCtx == null ? void 0 : radioGroupCtx.value) === ((_a = props.value) != null ? _a : true);
      }
      if (!isUndefined(props.modelValue)) {
        return props.modelValue === ((_b = props.value) != null ? _b : true);
      }
      return _checked.value;
    });
    watch(computedChecked, (curValue, preValue) => {
      if (curValue !== preValue) {
        _checked.value = curValue;
        if (inputRef.value) {
          inputRef.value.checked = curValue;
        }
      }
    });
    const handleFocus = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleClick = (ev) => {
      ev.stopPropagation();
    };
    const handleChange = (e) => {
      var _a, _b, _c, _d, _e;
      _checked.value = true;
      if (isGroup.value) {
        radioGroupCtx == null ? void 0 : radioGroupCtx.handleChange((_a = props.value) != null ? _a : true, e);
      } else {
        emit("update:modelValue", (_b = props.value) != null ? _b : true);
        emit("change", (_c = props.value) != null ? _c : true, e);
        (_e = (_d = eventHandlers.value) == null ? void 0 : _d.onChange) == null ? void 0 : _e.call(_d, e);
      }
      nextTick(() => {
        if (inputRef.value && inputRef.value.checked !== computedChecked.value) {
          inputRef.value.checked = computedChecked.value;
        }
      });
    };
    const cls = computed(() => [`${mergedType.value === "button" ? `${prefixCls}-button` : prefixCls}`, {
      [`${prefixCls}-checked`]: computedChecked.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const defaultRadio = () => createVNode(Fragment, null, [createVNode(resolveComponent("icon-hover"), {
      "class": `${prefixCls}-icon-hover`,
      "disabled": mergedDisabled.value || computedChecked.value
    }, {
      default: () => [createVNode("span", {
        "class": `${prefixCls}-icon`
      }, null)]
    }), slots.default && createVNode("span", {
      "class": `${prefixCls}-label`
    }, [slots.default()])]);
    return () => {
      var _a, _b, _c, _d;
      return createVNode("label", {
        "class": cls.value
      }, [createVNode("input", {
        "ref": inputRef,
        "type": "radio",
        "checked": computedChecked.value,
        "value": props.value,
        "class": `${prefixCls}-target`,
        "disabled": mergedDisabled.value,
        "onClick": handleClick,
        "onChange": handleChange,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, null), mergedType.value === "radio" ? (_d = (_c = (_b = slots.radio) != null ? _b : (_a = radioGroupCtx == null ? void 0 : radioGroupCtx.slots) == null ? void 0 : _a.radio) == null ? void 0 : _c({
        checked: computedChecked.value,
        disabled: mergedDisabled.value
      })) != null ? _d : defaultRadio() : createVNode("span", {
        "class": `${prefixCls}-button-content`
      }, [slots.default && slots.default()])]);
    };
  }
});
var RadioGroup = defineComponent({
  name: "RadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    type: {
      type: String,
      default: "radio"
    },
    size: {
      type: String
    },
    options: {
      type: Array
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const prefixCls = getPrefixCls("radio-group");
    const {
      size,
      type,
      disabled
    } = toRefs(props);
    const {
      mergedDisabled,
      mergedSize,
      eventHandlers
    } = useFormItem({
      size,
      disabled
    });
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    const options = computed(() => {
      var _a;
      return ((_a = props.options) != null ? _a : []).map((option) => {
        if (isString(option) || isNumber(option)) {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    });
    const handleChange = (value, e) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, e);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, e);
    };
    provide(radioGroupKey, reactive({
      name: "ArcoRadioGroup",
      value: computedValue,
      size: mergedSize,
      type,
      disabled: mergedDisabled,
      slots,
      handleChange
    }));
    watch(computedValue, (cur) => {
      if (_value.value !== cur) {
        _value.value = cur;
      }
    });
    const cls = computed(() => [`${prefixCls}${props.type === "button" ? "-button" : ""}`, `${prefixCls}-size-${mergedSize.value}`, `${prefixCls}-direction-${props.direction}`, {
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const renderOptions = () => {
      return options.value.map((option) => createVNode(_Radio, {
        "key": option.value,
        "value": option.value,
        "disabled": option.disabled,
        "modelValue": computedValue.value === option.value
      }, {
        default: () => [slots.label ? slots.label({
          data: option
        }) : isFunction(option.label) ? option.label() : option.label]
      }));
    };
    return () => {
      var _a;
      return createVNode("span", {
        "class": cls.value
      }, [options.value.length > 0 ? renderOptions() : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const Radio = Object.assign(_Radio, {
  Group: RadioGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Radio.name, _Radio);
    app.component(componentPrefix + RadioGroup.name, RadioGroup);
  }
});
const target = typeof window === "undefined" ? global : window;
function debounce(callback, delay) {
  let timer = 0;
  return (...args) => {
    if (timer) {
      target.clearTimeout(timer);
    }
    timer = target.setTimeout(() => {
      timer = 0;
      callback(...args);
    }, delay);
  };
}
var RenderFunction = defineComponent({
  name: "RenderFunction",
  props: {
    renderFunc: {
      type: Function,
      required: true
    }
  },
  render() {
    return this.renderFunc(this.$attrs);
  }
});
const getValueByPath = (obj, path) => {
  if (!obj || !path) {
    return void 0;
  }
  const keys = path.split(".");
  if (keys.length === 0) {
    return void 0;
  }
  let temp = obj;
  for (let i = 0; i < keys.length; i++) {
    if (!isObject(temp) && !isArray(temp) || !keys[i]) {
      return void 0;
    }
    if (i !== keys.length - 1) {
      temp = temp[keys[i]];
    } else {
      return temp[keys[i]];
    }
  }
  return void 0;
};
const useTrigger = ({
  popupVisible,
  defaultPopupVisible,
  emit
}) => {
  var _a;
  const _popupVisible = ref((_a = defaultPopupVisible == null ? void 0 : defaultPopupVisible.value) != null ? _a : false);
  const computedPopupVisible = computed(() => {
    var _a2;
    return (_a2 = popupVisible == null ? void 0 : popupVisible.value) != null ? _a2 : _popupVisible.value;
  });
  const handlePopupVisibleChange = (visible) => {
    if (visible !== computedPopupVisible.value) {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    }
  };
  watch(computedPopupVisible, (visible) => {
    if (_popupVisible.value !== visible) {
      _popupVisible.value = visible;
    }
  });
  return {
    computedPopupVisible,
    handlePopupVisibleChange
  };
};
var __defProp$6 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
const _sfc_main$m = defineComponent({
  name: "Tooltip",
  components: {
    Trigger
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    content: String,
    position: {
      type: String,
      default: "top"
    },
    mini: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: [
    "update:popupVisible",
    "popupVisibleChange"
  ],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("tooltip");
    const _popupVisible = ref(props.defaultPopupVisible);
    const computedPopupVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : _popupVisible.value;
    });
    const handlePopupVisibleChange = (visible) => {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    };
    const contentCls = computed(() => [
      `${prefixCls}-content`,
      props.contentClass,
      { [`${prefixCls}-mini`]: props.mini }
    ]);
    const computedContentStyle = computed(() => {
      if (props.backgroundColor || props.contentStyle) {
        return __spreadValues$6({
          backgroundColor: props.backgroundColor
        }, props.contentStyle);
      }
      return void 0;
    });
    const arrowCls = computed(() => [
      `${prefixCls}-popup-arrow`,
      props.arrowClass
    ]);
    const computedArrowStyle = computed(() => {
      if (props.backgroundColor || props.arrowStyle) {
        return __spreadValues$6({
          backgroundColor: props.backgroundColor
        }, props.arrowStyle);
      }
      return void 0;
    });
    return {
      prefixCls,
      computedPopupVisible,
      contentCls,
      computedContentStyle,
      arrowCls,
      computedArrowStyle,
      handlePopupVisibleChange
    };
  }
});
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Trigger = resolveComponent("Trigger");
  return openBlock(), createBlock(_component_Trigger, {
    class: normalizeClass(_ctx.prefixCls),
    trigger: "hover",
    position: _ctx.position,
    "popup-visible": _ctx.computedPopupVisible,
    "popup-offset": 10,
    "show-arrow": "",
    "content-class": _ctx.contentCls,
    "content-style": _ctx.computedContentStyle,
    "arrow-class": _ctx.arrowCls,
    "arrow-style": _ctx.computedArrowStyle,
    "popup-container": _ctx.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    onPopupVisibleChange: _ctx.handlePopupVisibleChange
  }, {
    content: withCtx(() => [
      renderSlot(_ctx.$slots, "content", {}, () => [
        createTextVNode(toDisplayString(_ctx.content), 1)
      ])
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var _Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["render", _sfc_render$g]]);
const Tooltip = Object.assign(_Tooltip, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Tooltip.name, _Tooltip);
  }
});
function strip(num, precision) {
  if (precision === void 0) {
    precision = 15;
  }
  return +parseFloat(Number(num).toPrecision(precision));
}
function digitLength(num) {
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}
function float2Fixed(num) {
  if (num.toString().indexOf("e") === -1) {
    return Number(num.toString().replace(".", ""));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn(num + " is beyond boundary when transfer to integer, the results may not be accurate");
    }
  }
}
function iteratorOperation(arr, operation) {
  var num1 = arr[0], num2 = arr[1], others = arr.slice(2);
  var res = operation(num1, num2);
  others.forEach(function(num) {
    res = operation(res, num);
  });
  return res;
}
function times() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }
  var num1 = nums[0], num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;
  checkBoundary(leftValue);
  return leftValue / Math.pow(10, baseNum);
}
function plus() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }
  var num1 = nums[0], num2 = nums[1];
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}
function minus() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }
  var num1 = nums[0], num2 = nums[1];
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}
function divide() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }
  var num1 = nums[0], num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}
function round(num, ratio) {
  var base = Math.pow(10, ratio);
  var result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  return result;
}
var _boundaryCheckingState = true;
function enableBoundaryChecking(flag) {
  if (flag === void 0) {
    flag = true;
  }
  _boundaryCheckingState = flag;
}
var index = {
  strip,
  plus,
  minus,
  times,
  divide,
  round,
  digitLength,
  float2Fixed,
  enableBoundaryChecking
};
const _sfc_main$l = defineComponent({
  name: "IconPlus",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-plus`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$9 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", { d: "M5 24h38M24 5v38" }, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$8, 14, _hoisted_1$9);
}
var _IconPlus = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["render", _sfc_render$f]]);
const IconPlus = Object.assign(_IconPlus, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconPlus.name, _IconPlus);
  }
});
const _sfc_main$k = defineComponent({
  name: "IconMinus",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-minus`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$8 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", { d: "M5 24h38" }, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$7, 14, _hoisted_1$8);
}
var _IconMinus = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["render", _sfc_render$e]]);
const IconMinus = Object.assign(_IconMinus, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconMinus.name, _IconMinus);
  }
});
const SPEED = 150;
index.enableBoundaryChecking(false);
var _InputNumber = defineComponent({
  name: "InputNumber",
  props: {
    modelValue: Number,
    defaultValue: Number,
    mode: {
      type: String,
      default: "embed"
    },
    precision: Number,
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    formatter: {
      type: Function
    },
    parser: {
      type: Function
    },
    placeholder: String,
    hideButton: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    modelEvent: {
      type: String,
      default: "change"
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true,
    "clear": (ev) => true,
    "input": (value, inputValue, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    var _a;
    const {
      size,
      disabled
    } = toRefs(props);
    const prefixCls = getPrefixCls("input-number");
    const inputRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled
    } = useFormItem({
      size,
      disabled
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const getStringValue = (number) => {
      var _a2, _b;
      return isNumber(number) ? (_b = (_a2 = props.formatter) == null ? void 0 : _a2.call(props, String(number))) != null ? _b : String(number) : "";
    };
    const _value = ref(getStringValue((_a = props.modelValue) != null ? _a : props.defaultValue));
    const valueNumber = computed(() => {
      var _a2, _b;
      if (!_value.value) {
        return void 0;
      }
      const number = Number((_b = (_a2 = props.parser) == null ? void 0 : _a2.call(props, _value.value)) != null ? _b : _value.value);
      return Number.isNaN(number) ? void 0 : number;
    });
    const mergedPrecision = computed(() => {
      if (isNumber(props.precision)) {
        const decimal = `${props.step}`.split(".")[1];
        const stepPrecision = decimal && decimal.length || 0;
        return Math.max(stepPrecision, props.precision);
      }
      return void 0;
    });
    const isMin = ref(isNumber(valueNumber.value) && valueNumber.value <= props.min);
    const isMax = ref(isNumber(valueNumber.value) && valueNumber.value >= props.max);
    let repeatTimer = 0;
    const clearRepeatTimer = () => {
      if (repeatTimer) {
        window.clearTimeout(repeatTimer);
        repeatTimer = 0;
      }
    };
    const getLegalValue = (value) => {
      if (isUndefined(value)) {
        return void 0;
      }
      if (isNumber(props.min) && value < props.min) {
        value = props.min;
      }
      if (isNumber(props.max) && value > props.max) {
        value = props.max;
      }
      return isNumber(mergedPrecision.value) ? index.round(value, mergedPrecision.value) : value;
    };
    const updateNumberStatus = (number) => {
      let _isMin = false;
      let _isMax = false;
      if (isNumber(number)) {
        if (number <= props.min) {
          _isMin = true;
        }
        if (number >= props.max) {
          _isMax = true;
        }
      }
      if (isMax.value !== _isMax) {
        isMax.value = _isMax;
      }
      if (isMin.value !== _isMin) {
        isMin.value = _isMin;
      }
    };
    const handleStepButton = (event, method, needRepeat = false) => {
      var _a2;
      event.preventDefault();
      (_a2 = inputRef.value) == null ? void 0 : _a2.focus();
      if (mergedDisabled.value || method === "plus" && isMax.value || method === "minus" && isMin.value) {
        return;
      }
      let nextValue;
      if (isNumber(valueNumber.value)) {
        nextValue = getLegalValue(index[method](valueNumber.value, props.step));
      } else {
        nextValue = props.min === -Infinity ? 0 : props.min;
      }
      _value.value = getStringValue(nextValue);
      updateNumberStatus(nextValue);
      emit("update:modelValue", nextValue);
      emit("change", nextValue, event);
      if (needRepeat) {
        repeatTimer = window.setTimeout(() => event.target.dispatchEvent(event), SPEED);
      }
    };
    const handleInput = (value, ev) => {
      var _a2, _b, _c, _d;
      value = value.trim().replace(/。/g, ".");
      value = (_b = (_a2 = props.parser) == null ? void 0 : _a2.call(props, value)) != null ? _b : value;
      if (isNumber(Number(value)) || /^(\.|-)$/.test(value)) {
        _value.value = (_d = (_c = props.formatter) == null ? void 0 : _c.call(props, value)) != null ? _d : value;
        updateNumberStatus(valueNumber.value);
        if (props.modelEvent === "input") {
          emit("update:modelValue", valueNumber.value);
        }
        emit("input", valueNumber.value, _value.value, ev);
      }
    };
    const handleFocus = (ev) => {
      emit("focus", ev);
    };
    const handleChange = (value, ev) => {
      const finalValue = getLegalValue(valueNumber.value);
      const stringValue = getStringValue(finalValue);
      if (finalValue !== valueNumber.value || _value.value !== stringValue) {
        _value.value = stringValue;
        updateNumberStatus(finalValue);
      }
      emit("update:modelValue", finalValue);
      emit("change", finalValue, ev);
    };
    const handleBlur = (ev) => {
      emit("blur", ev);
    };
    const handleClear = (ev) => {
      _value.value = "";
      emit("update:modelValue", void 0);
      emit("change", void 0, ev);
      emit("clear", ev);
    };
    watch(() => props.modelValue, (value) => {
      if (value !== valueNumber.value) {
        _value.value = getStringValue(value);
        updateNumberStatus(value);
      }
    });
    const renderSuffix = () => {
      var _a2;
      return createVNode(Fragment, null, [(_a2 = slots.suffix) == null ? void 0 : _a2.call(slots), createVNode("div", {
        "class": `${prefixCls}-step`
      }, [createVNode("button", {
        "class": [`${prefixCls}-step-button`, {
          [`${prefixCls}-step-button-disabled`]: mergedDisabled.value || isMax.value
        }],
        "type": "button",
        "disabled": mergedDisabled.value || isMax.value,
        "onMousedown": (e) => handleStepButton(e, "plus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, [createVNode(IconUp, null, null)]), createVNode("button", {
        "class": [`${prefixCls}-step-button`, {
          [`${prefixCls}-step-button-disabled`]: mergedDisabled.value || isMin.value
        }],
        "type": "button",
        "disabled": mergedDisabled.value || isMin.value,
        "onMousedown": (e) => handleStepButton(e, "minus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, [createVNode(IconDown, null, null)])])]);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-mode-${props.mode}`, `${prefixCls}-size-${mergedSize.value}`]);
    const renderPrependButton = () => {
      return createVNode(Button, {
        "size": mergedSize.value,
        "class": `${prefixCls}-step-button`,
        "disabled": mergedDisabled.value || isMin.value,
        "onMousedown": (ev) => handleStepButton(ev, "minus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, {
        icon: () => createVNode(IconMinus, null, null)
      });
    };
    const renderAppendButton = () => {
      return createVNode(Button, {
        "size": mergedSize.value,
        "class": `${prefixCls}-step-button`,
        "disabled": mergedDisabled.value || isMax.value,
        "onMousedown": (ev) => handleStepButton(ev, "plus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, {
        icon: () => createVNode(IconPlus, null, null)
      });
    };
    const render2 = () => {
      const _slots = props.mode === "embed" ? {
        prepend: slots.prepend,
        prefix: slots.prefix,
        suffix: props.hideButton ? slots.suffix : renderSuffix,
        append: slots.append
      } : {
        prepend: renderPrependButton,
        prefix: slots.prefix,
        suffix: slots.suffix,
        append: renderAppendButton
      };
      return createVNode(Input, {
        "key": `__arco__${props.mode}`,
        "ref": inputRef,
        "class": cls.value,
        "type": "text",
        "allowClear": props.allowClear,
        "size": mergedSize.value,
        "modelValue": _value.value,
        "placeholder": props.placeholder,
        "disabled": mergedDisabled.value,
        "error": props.error,
        "onInput": handleInput,
        "onFocus": handleFocus,
        "onBlur": handleBlur,
        "onClear": handleClear,
        "onChange": handleChange
      }, _slots);
    };
    return {
      inputRef,
      render: render2
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const InputNumber = Object.assign(_InputNumber, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _InputNumber.name, _InputNumber);
  }
});
const _sfc_main$j = defineComponent({
  name: "IconDragDotVertical",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-drag-dot-vertical`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$7 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", { d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2$6,
  _hoisted_3$6
];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_4, 14, _hoisted_1$7);
}
var _IconDragDotVertical = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["render", _sfc_render$d]]);
const IconDragDotVertical = Object.assign(_IconDragDotVertical, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconDragDotVertical.name, _IconDragDotVertical);
  }
});
const _sfc_main$i = defineComponent({
  name: "Pager",
  props: {
    pageNumber: {
      type: Number
    },
    current: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object
    },
    activeStyle: {
      type: Object
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-item");
    const isActive = computed(() => props.current === props.pageNumber);
    const handleClick = (e) => {
      if (!props.disabled) {
        emit("click", props.pageNumber, e);
      }
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-active`]: isActive.value
      }
    ]);
    const mergedStyle = computed(() => {
      return isActive.value ? props.activeStyle : props.style;
    });
    return {
      prefixCls,
      cls,
      mergedStyle,
      handleClick
    };
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.mergedStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default", { page: _ctx.pageNumber }, () => [
      createTextVNode(toDisplayString(_ctx.pageNumber), 1)
    ])
  ], 6);
}
var Pager = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["render", _sfc_render$c]]);
const getLegalPage = (page, { min, max }) => {
  if (page < min) {
    return min;
  }
  if (page > max) {
    return max;
  }
  return page;
};
const _sfc_main$h = defineComponent({
  name: "StepPager",
  components: {
    IconLeft,
    IconRight
  },
  props: {
    pages: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-item");
    const isNext = props.type === "next";
    const mergedDisabled = computed(() => {
      if (props.disabled) {
        return props.disabled;
      }
      if (!props.pages) {
        return true;
      }
      if (isNext && props.current === props.pages) {
        return true;
      }
      return !isNext && props.current <= 1;
    });
    const nextPage = computed(() => getLegalPage(props.current + (isNext ? 1 : -1), {
      min: 1,
      max: props.pages
    }));
    const handleClick = (e) => {
      if (!mergedDisabled.value) {
        emit("click", nextPage.value);
      }
    };
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-${props.type}`,
      {
        [`${prefixCls}-disabled`]: mergedDisabled.value
      }
    ]);
    return {
      prefixCls,
      cls,
      isNext,
      handleClick
    };
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_right = resolveComponent("icon-right");
  const _component_icon_left = resolveComponent("icon-left");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.simple ? "span" : "li"), {
    class: normalizeClass(_ctx.cls),
    onClick: _ctx.handleClick
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {
        type: _ctx.isNext ? "next" : "previous"
      }, () => [
        _ctx.isNext ? (openBlock(), createBlock(_component_icon_right, { key: 0 })) : (openBlock(), createBlock(_component_icon_left, { key: 1 }))
      ])
    ]),
    _: 3
  }, 8, ["class", "onClick"]);
}
var StepPager = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["render", _sfc_render$b]]);
const _sfc_main$g = defineComponent({
  name: "EllipsisPager",
  components: {
    IconMore
  },
  props: {
    current: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      default: 5
    },
    pages: {
      type: Number,
      required: true
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-item");
    const nextPage = computed(() => getLegalPage(props.current + props.step, {
      min: 1,
      max: props.pages
    }));
    const handleClick = (e) => {
      emit("click", nextPage.value);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-ellipsis`]);
    return {
      prefixCls,
      cls,
      handleClick
    };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_more = resolveComponent("icon-more");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.cls),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createVNode(_component_icon_more)
    ])
  ], 2);
}
var EllipsisPager = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["render", _sfc_render$a]]);
const _sfc_main$f = defineComponent({
  name: "PageJumper",
  components: {
    InputNumber
  },
  props: {
    current: {
      type: Number,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pages: {
      type: Number,
      required: true
    },
    size: {
      type: String
    },
    onChange: {
      type: Function
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-jumper");
    const { t } = useI18n();
    const inputValue = ref(props.simple ? props.current : void 0);
    const handleChange = (value) => {
      emit("change", inputValue.value);
      nextTick(() => {
        if (!props.simple) {
          inputValue.value = void 0;
        }
      });
    };
    watch(() => props.current, (value) => {
      if (props.simple && value !== inputValue.value) {
        inputValue.value = value;
      }
    });
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-simple`]: props.simple
      }
    ]);
    return {
      prefixCls,
      cls,
      t,
      inputValue,
      handleChange
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_input_number = resolveComponent("input-number");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.cls)
  }, [
    !_ctx.simple ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass([`${_ctx.prefixCls}-prepend`, `${_ctx.prefixCls}-text-goto`])
    }, [
      renderSlot(_ctx.$slots, "jumper-prepend", {}, () => [
        createTextVNode(toDisplayString(_ctx.t("pagination.goto")), 1)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    createVNode(_component_input_number, {
      modelValue: _ctx.inputValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
      class: normalizeClass(`${_ctx.prefixCls}-input`),
      min: 1,
      max: _ctx.pages,
      size: _ctx.size,
      disabled: _ctx.disabled,
      "hide-button": "",
      onChange: _ctx.handleChange
    }, null, 8, ["modelValue", "class", "max", "size", "disabled", "onChange"]),
    _ctx.$slots["jumper-append"] ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-append`)
    }, [
      renderSlot(_ctx.$slots, "jumper-append")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.simple ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      createElementVNode("span", {
        class: normalizeClass(`${_ctx.prefixCls}-separator`)
      }, "/", 2),
      createElementVNode("span", {
        class: normalizeClass(`${_ctx.prefixCls}-total-page`)
      }, toDisplayString(_ctx.pages), 3)
    ], 64)) : createCommentVNode("v-if", true)
  ], 2);
}
var PageJumper = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["render", _sfc_render$9]]);
const _sfc_main$e = defineComponent({
  name: "Optgroup",
  props: {
    label: {
      type: String
    }
  },
  setup() {
    const prefixCls = getPrefixCls("select-group");
    return {
      prefixCls
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("li", {
      class: normalizeClass(`${_ctx.prefixCls}-title`)
    }, [
      renderSlot(_ctx.$slots, "label", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 2),
    renderSlot(_ctx.$slots, "default")
  ], 64);
}
var Optgroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["render", _sfc_render$8]]);
var __defProp$5 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
const _sfc_main$d = defineComponent({
  name: "VirtualListFiller",
  props: {
    height: {
      type: Number
    },
    offset: {
      type: Number
    },
    disabled: {
      type: Boolean
    },
    type: String,
    outerAttrs: Object,
    innerAttrs: Object
  },
  setup(props) {
    const { height, offset } = toRefs(props);
    const outerStyle = computed(() => offset.value !== void 0 ? {
      height: `${height.value}px`,
      position: "relative",
      overflow: "hidden",
      zIndex: 0
    } : {});
    const innerStyle = computed(() => {
      const commonStyle = {
        display: "flex",
        flexDirection: "column"
      };
      return offset.value !== void 0 ? __spreadProps$3(__spreadValues$5({}, commonStyle), {
        transform: `translateY(${offset.value}px)`,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
      }) : commonStyle;
    });
    return {
      outerStyle,
      innerStyle
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.type === "table" ? (openBlock(), createElementBlock("table", mergeProps({
    key: 0,
    style: _ctx.outerStyle,
    cellpadding: "0",
    cellspacing: "0"
  }, _ctx.outerAttrs), [
    createElementVNode("tbody", mergeProps({ style: _ctx.innerStyle }, _ctx.innerAttrs), [
      renderSlot(_ctx.$slots, "default")
    ], 16)
  ], 16)) : !_ctx.disabled ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    style: _ctx.outerStyle
  }, _ctx.outerAttrs), [
    createElementVNode("div", mergeProps({ style: _ctx.innerStyle }, _ctx.innerAttrs), [
      renderSlot(_ctx.$slots, "default")
    ], 16)
  ], 16)) : renderSlot(_ctx.$slots, "default", { key: 2 });
}
var Filler = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["render", _sfc_render$7]]);
const DEFAULT_HEIGHT = 200;
function useViewportHeight(props) {
  const { height } = toRefs(props);
  const viewportHeight = ref(DEFAULT_HEIGHT);
  const setViewportHeight = (val) => {
    viewportHeight.value = val;
  };
  watchEffect(() => {
    if (isNumber(height.value)) {
      viewportHeight.value = height.value;
    }
  });
  return {
    viewportHeight,
    setViewportHeight,
    needMeasureViewportHeight: computed(() => !isNumber(height.value))
  };
}
const DEFAULT_ITEM_HEIGHT = 32;
function useItemHeight(props) {
  const { estimatedItemHeight: propEstimatedItemHeight, data } = toRefs(props);
  const itemHeightCacheMap = ref({});
  const estimatedItemHeight = ref(propEstimatedItemHeight == null ? void 0 : propEstimatedItemHeight.value);
  const itemLength = computed(() => Object.keys(itemHeightCacheMap.value).length);
  watch(itemLength, () => {
    if (itemLength.value && !estimatedItemHeight.value) {
      estimatedItemHeight.value = Object.entries(itemHeightCacheMap.value).reduce((sum, [, height]) => sum + height, 0) / itemLength.value;
    }
  });
  const itemHeight = computed(() => estimatedItemHeight.value || DEFAULT_ITEM_HEIGHT);
  const minItemHeight = computed(() => Math.min(...Object.values(itemHeightCacheMap.value), itemHeight.value));
  const totalHeight = computed(() => data.value.reduce((sum, { key }) => sum + getItemHeightOrDefault(key), 0));
  function setItemHeight(key, height) {
    itemHeightCacheMap.value[key] = height;
  }
  function getItemHeight(key) {
    return itemHeightCacheMap.value[key];
  }
  function getItemHeightOrDefault(key) {
    return itemHeightCacheMap.value[key] || itemHeight.value;
  }
  function getItemHeightByIndex(index2) {
    const { key } = data.value[index2];
    return itemHeightCacheMap.value[key];
  }
  function getItemHeightOrDefaultByIndex(index2) {
    return getItemHeightByIndex(index2) || itemHeight.value;
  }
  return {
    itemHeight,
    minItemHeight,
    estimatedItemHeight,
    totalHeight,
    setItemHeight,
    getItemHeight,
    getItemHeightOrDefault,
    getItemHeightByIndex,
    getItemHeightOrDefaultByIndex
  };
}
const findElement = (node) => {
  var _a;
  let res = (_a = node == null ? void 0 : node.$el) != null ? _a : node;
  while (res && !res.tagName) {
    res = res.nextSibling;
  }
  return res;
};
function useRenderChildren(props, events = {}) {
  const {
    internalData,
    visibleData,
    itemRender
  } = toRefs(props);
  let itemRenderCache = {};
  const renderChildren = () => {
    return visibleData.value.map(({
      item,
      index: index2,
      key
    }) => {
      if (!Object.prototype.hasOwnProperty.call(itemRenderCache, key)) {
        const [node] = itemRender.value({
          item,
          index: index2
        });
        let dom;
        let hasMounted = false;
        let hasUpdated = false;
        const resizeHandler = () => {
          var _a;
          if (dom) {
            (_a = events.onItemResize) == null ? void 0 : _a.call(events, dom, key);
          }
        };
        itemRenderCache[key] = cloneVNode(node, {
          key,
          ref: (el) => {
            if (!hasMounted) {
              dom = findElement(el);
              resizeHandler();
              hasMounted = true;
            }
          },
          onVnodeUpdated() {
            if (!hasUpdated) {
              resizeHandler();
              hasUpdated = true;
            }
          }
        });
      }
      return itemRenderCache[key];
    });
  };
  watch([internalData, itemRender], () => {
    itemRenderCache = {};
  });
  return renderChildren;
}
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target2 = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target2[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target2[prop] = source[prop];
    }
  return target2;
};
function getValidScrollTop(scrollTop, scrollRange) {
  return scrollTop < 0 ? 0 : scrollTop > scrollRange ? scrollRange : scrollTop;
}
function getScrollPercentage({
  scrollTop,
  scrollHeight,
  clientHeight
}) {
  const scrollLength = scrollHeight - clientHeight;
  return scrollLength ? getValidScrollTop(scrollTop, scrollLength) / scrollLength : 0;
}
function getLocationItem(scrollPtg, itemCount) {
  const itemIndex = Math.floor(scrollPtg * itemCount);
  const itemTopPtg = itemIndex / itemCount;
  const offsetPtg = (scrollPtg - itemTopPtg) / (1 / itemCount);
  return {
    index: itemIndex,
    offsetPtg: Number.isNaN(offsetPtg) ? 0 : offsetPtg
  };
}
function getRangeIndex(scrollPtg, itemCount, visibleCount) {
  const { index: index2, offsetPtg } = getLocationItem(scrollPtg, itemCount);
  const beforeCount = Math.ceil(scrollPtg * visibleCount);
  const afterCount = Math.ceil((1 - scrollPtg) * visibleCount);
  return {
    itemIndex: index2,
    itemOffsetPtg: offsetPtg,
    startIndex: Math.max(0, index2 - beforeCount),
    endIndex: Math.min(itemCount - 1, index2 + afterCount)
  };
}
function getItemRelativeTop({
  itemHeight,
  itemOffsetPtg,
  scrollPtg,
  clientHeight
}) {
  if (scrollPtg === 1)
    return clientHeight - itemHeight;
  return Math.floor(clientHeight * scrollPtg - itemHeight * itemOffsetPtg);
}
function getItemAbsoluteTop(_a) {
  var _b = _a, { scrollTop } = _b, rest = __objRest(_b, ["scrollTop"]);
  return scrollTop + getItemRelativeTop(rest);
}
function getCompareItemRelativeTop({
  locatedItemRelativeTop,
  locatedItemIndex,
  compareItemIndex,
  startIndex,
  endIndex,
  getItemKeyByIndex,
  getItemHeightOrDefault
}) {
  let compareItemTop = locatedItemRelativeTop;
  const compareItemKey = getItemKeyByIndex(compareItemIndex);
  if (compareItemIndex <= locatedItemIndex) {
    for (let index2 = locatedItemIndex; index2 >= startIndex; index2 -= 1) {
      const key = getItemKeyByIndex(index2);
      if (key === compareItemKey) {
        break;
      }
      const prevItemKey = getItemKeyByIndex(index2 - 1);
      compareItemTop -= getItemHeightOrDefault(prevItemKey);
    }
  } else {
    for (let index2 = locatedItemIndex; index2 <= endIndex; index2 += 1) {
      const key = getItemKeyByIndex(index2);
      if (key === compareItemKey) {
        break;
      }
      compareItemTop += getItemHeightOrDefault(key);
    }
  }
  return compareItemTop;
}
function useRangeState(props) {
  const { viewportRef, visibleCount, itemCount } = toRefs(props);
  const rangeState = reactive({
    itemIndex: 0,
    itemOffsetPtg: 0,
    startIndex: 0,
    endIndex: visibleCount.value
  });
  const updateRangeState = () => {
    if (!viewportRef.value)
      return;
    const {
      scrollTop: rawScrollTop,
      clientHeight,
      scrollHeight
    } = viewportRef.value;
    const scrollPtg = getScrollPercentage({
      scrollTop: rawScrollTop,
      clientHeight,
      scrollHeight
    });
    const { itemIndex, itemOffsetPtg, startIndex, endIndex } = getRangeIndex(scrollPtg, itemCount.value, visibleCount.value);
    rangeState.itemIndex = Math.min(itemCount.value - 1, itemIndex);
    rangeState.itemOffsetPtg = itemOffsetPtg;
    rangeState.startIndex = startIndex;
    rangeState.endIndex = endIndex;
  };
  return {
    rangeState,
    updateRangeState
  };
}
function getIndexByStartLoc(min, max, start, index2) {
  const beforeCount = start - min;
  const afterCount = max - start;
  const balanceCount = Math.min(beforeCount, afterCount) * 2;
  if (index2 <= balanceCount) {
    const stepIndex = Math.floor(index2 / 2);
    if (index2 % 2) {
      return start + stepIndex + 1;
    }
    return start - stepIndex;
  }
  if (beforeCount > afterCount) {
    return start - (index2 - afterCount);
  }
  return start + (index2 - beforeCount);
}
function useScrollTo(props) {
  const {
    isVirtual,
    isStaticItemHeight,
    data,
    rangeState,
    viewportRef,
    scrollTop,
    visibleCount,
    getItemHeightOrDefault,
    getItemHeightOrDefaultByIndex
  } = toRefs(props);
  const itemCount = computed(() => data.value.length);
  const getItemKeyByIndex = (index2) => {
    var _a;
    return (_a = data.value[index2]) == null ? void 0 : _a.key;
  };
  const fixScrollTo = (relativeScroll) => {
    if (!viewportRef.value)
      return null;
    const { itemIndex: compareItemIndex, relativeTop: compareItemRelativeTop } = relativeScroll;
    const { scrollHeight, clientHeight } = viewportRef.value;
    const originScrollTop = scrollTop.value;
    const maxScrollTop = scrollHeight - clientHeight;
    let bestSimilarity = Number.MAX_VALUE;
    let bestScrollTop = -1;
    let bestItemIndex = -1;
    let bestItemOffsetPtg = -1;
    let bestStartIndex = -1;
    let bestEndIndex = -1;
    let missSimilarity = 0;
    for (let i = 0; i < maxScrollTop; i++) {
      const scrollTop2 = getIndexByStartLoc(0, maxScrollTop, originScrollTop, i);
      const scrollPtg = getScrollPercentage({
        scrollTop: scrollTop2,
        scrollHeight,
        clientHeight
      });
      const { itemIndex, itemOffsetPtg, startIndex, endIndex } = getRangeIndex(scrollPtg, itemCount.value, visibleCount.value);
      if (startIndex <= compareItemIndex && compareItemIndex <= endIndex) {
        const locatedItemRelativeTop = getItemRelativeTop({
          itemHeight: getItemHeightOrDefaultByIndex.value(itemIndex),
          itemOffsetPtg,
          clientHeight,
          scrollPtg
        });
        const compareItemTop = getCompareItemRelativeTop({
          locatedItemRelativeTop,
          locatedItemIndex: itemIndex,
          compareItemIndex,
          startIndex,
          endIndex,
          getItemKeyByIndex,
          getItemHeightOrDefault: getItemHeightOrDefault.value
        });
        const similarity = Math.abs(compareItemTop - compareItemRelativeTop);
        if (similarity < bestSimilarity) {
          bestSimilarity = similarity;
          bestScrollTop = scrollTop2;
          bestItemIndex = itemIndex;
          bestItemOffsetPtg = itemOffsetPtg;
          bestStartIndex = startIndex;
          bestEndIndex = endIndex;
          missSimilarity = 0;
        } else {
          missSimilarity += 1;
        }
      }
      if (missSimilarity > 10) {
        break;
      }
    }
    return bestScrollTop === -1 ? null : {
      scrollTop: bestScrollTop,
      itemIndex: bestItemIndex,
      itemOffsetPtg: bestItemOffsetPtg,
      startIndex: bestStartIndex,
      endIndex: bestEndIndex
    };
  };
  const prepareScrollTo = (options) => {
    if (!viewportRef.value)
      return null;
    if (typeof options === "number") {
      viewportRef.value.scrollTop = options;
      return null;
    }
    const index2 = "index" in options ? options.index : "key" in options ? data.value.findIndex((item2) => item2.key === options.key) : 0;
    const item = data.value[index2];
    if (!item) {
      return null;
    }
    let align = options.align || "auto";
    const { clientHeight, scrollTop: scrollTop2 } = viewportRef.value;
    if (isVirtual.value && !isStaticItemHeight.value) {
      if (align === "auto") {
        const { itemIndex, itemOffsetPtg } = rangeState.value;
        if (Math.abs(itemIndex - index2) < visibleCount.value) {
          let itemTop2 = getItemRelativeTop({
            itemHeight: getItemHeightOrDefaultByIndex.value(index2),
            itemOffsetPtg,
            clientHeight,
            scrollPtg: getScrollPercentage(viewportRef.value)
          });
          if (index2 < itemIndex) {
            for (let i = index2; i < itemIndex; i++) {
              itemTop2 -= getItemHeightOrDefaultByIndex.value(i);
            }
          } else {
            for (let i = itemIndex; i < index2; i++) {
              itemTop2 += getItemHeightOrDefaultByIndex.value(i);
            }
          }
          if (itemTop2 < 0 || itemTop2 > clientHeight) {
            align = itemTop2 < 0 ? "top" : "bottom";
          } else {
            return null;
          }
        } else {
          align = index2 < itemIndex ? "top" : "bottom";
        }
      }
      return {
        itemIndex: index2,
        relativeTop: align === "top" ? 0 : clientHeight - getItemHeightOrDefaultByIndex.value(index2),
        startIndex: Math.max(0, index2 - visibleCount.value),
        endIndex: Math.min(itemCount.value - 1, index2 + visibleCount.value)
      };
    }
    const indexItemHeight = getItemHeightOrDefaultByIndex.value(index2);
    let itemTop = 0;
    for (let i = 0; i < index2; i++) {
      itemTop += getItemHeightOrDefaultByIndex.value(i);
    }
    const itemBottom = itemTop + indexItemHeight;
    if (align === "auto") {
      if (itemTop < scrollTop2) {
        align = "top";
      } else if (itemBottom > scrollTop2 + clientHeight) {
        align = "bottom";
      }
    }
    if (align === "top") {
      viewportRef.value.scrollTop = itemTop;
    } else if (align === "bottom") {
      viewportRef.value.scrollTop = itemTop - (clientHeight - indexItemHeight);
    }
    return null;
  };
  return {
    fixScrollTo,
    prepareScrollTo
  };
}
var _sfc_main$c = defineComponent({
  name: "VirtualList",
  components: {
    ResizeOberver: ResizeObserver$1,
    Filler,
    RenderFunction
  },
  inheritAttrs: false,
  props: {
    height: {
      type: [Number, String],
      default: 200
    },
    threshold: {
      type: [Number, Object]
    },
    isStaticItemHeight: {
      type: Boolean
    },
    estimatedItemHeight: {
      type: Number
    },
    data: {
      type: Array,
      default: () => []
    },
    itemKey: {
      type: [String, Function],
      default: "key"
    },
    component: {
      type: String,
      default: "div"
    },
    type: String,
    outerAttrs: Object,
    innerAttrs: Object
  },
  emits: ["scroll", "resize"],
  setup(props, {
    slots,
    emit
  }) {
    const {
      height,
      itemKey,
      data,
      estimatedItemHeight: propEstimatedItemHeight,
      isStaticItemHeight,
      threshold
    } = toRefs(props);
    function getItemKey(item, index2) {
      let result;
      if (itemKey && itemKey.value) {
        if (isString(itemKey.value)) {
          result = item[itemKey.value];
        } else if (isFunction(itemKey.value)) {
          result = itemKey.value(item);
        }
      }
      return result != null ? result : index2;
    }
    const internalData = computed(() => data.value.map((item, index2) => ({
      key: getItemKey(item, index2),
      index: index2,
      item
    })));
    const viewportRef = ref();
    const {
      viewportHeight,
      setViewportHeight,
      needMeasureViewportHeight
    } = useViewportHeight(reactive({
      height
    }));
    const {
      itemHeight,
      minItemHeight,
      estimatedItemHeight,
      totalHeight,
      setItemHeight,
      getItemHeight,
      getItemHeightOrDefault,
      getItemHeightOrDefaultByIndex
    } = useItemHeight(reactive({
      estimatedItemHeight: propEstimatedItemHeight,
      data: internalData
    }));
    const itemCount = computed(() => data.value.length);
    const visibleCount = computed(() => Math.ceil(viewportHeight.value / minItemHeight.value));
    const scrollTop = ref(0);
    const startOffset = ref(0);
    const {
      rangeState,
      updateRangeState
    } = useRangeState(reactive({
      viewportRef,
      itemCount,
      visibleCount
    }));
    const visibleData = computed(() => {
      const start = rangeState.startIndex;
      const end = Math.min(rangeState.endIndex + 1, itemCount.value);
      return internalData.value.slice(start, end);
    });
    const isVirtual = computed(() => (threshold == null ? void 0 : threshold.value) !== null && ((threshold == null ? void 0 : threshold.value) === void 0 || itemCount.value >= threshold.value) && totalHeight.value > viewportHeight.value);
    const scrollListPadding = computed(() => {
      if (!isUndefined(viewportRef.value)) {
        const viewport = viewportRef.value;
        const getPadding = (property) => +window.getComputedStyle(viewport)[property].replace(/\D/g, "");
        return {
          top: getPadding("paddingTop"),
          bottom: getPadding("paddingBottom")
        };
      }
      return {
        top: 0,
        bottom: 0
      };
    });
    const itemRender = usePickSlots(slots, "item");
    const renderChildren = useRenderChildren(reactive({
      internalData,
      visibleData,
      itemRender
    }), {
      onItemResize(el, key) {
        const itemHeight2 = getItemHeight(key);
        if (el && isUndefined(itemHeight2)) {
          if (isStaticItemHeight.value && !isUndefined(estimatedItemHeight.value)) {
            setItemHeight(key, estimatedItemHeight.value);
          } else {
            const height2 = el.offsetHeight;
            if (height2) {
              setItemHeight(key, height2);
            }
          }
        }
      }
    });
    const updateScrollOffset = () => {
      if (!viewportRef.value || !isVirtual.value)
        return;
      const {
        scrollTop: scrollTop2,
        clientHeight,
        scrollHeight
      } = viewportRef.value;
      const scrollPtg = getScrollPercentage({
        scrollTop: scrollTop2,
        clientHeight,
        scrollHeight
      });
      let newStartOffset = getItemAbsoluteTop({
        scrollPtg,
        clientHeight,
        scrollTop: scrollTop2 - (scrollListPadding.value.top + scrollListPadding.value.bottom) * scrollPtg,
        itemHeight: getItemHeightOrDefaultByIndex(rangeState.itemIndex),
        itemOffsetPtg: rangeState.itemOffsetPtg
      });
      for (let index2 = rangeState.itemIndex - 1; index2 >= rangeState.startIndex; index2--) {
        newStartOffset -= getItemHeightOrDefaultByIndex(index2);
      }
      startOffset.value = newStartOffset;
    };
    const rafIdRef = ref();
    onUnmounted(() => {
      rafIdRef.value && caf(rafIdRef.value);
    });
    const lockScrollRef = ref(false);
    const {
      fixScrollTo,
      prepareScrollTo
    } = useScrollTo(reactive({
      isVirtual,
      isStaticItemHeight,
      rangeState,
      data: internalData,
      viewportRef,
      scrollTop,
      visibleCount,
      getItemHeightOrDefault,
      getItemHeightOrDefaultByIndex
    }));
    const handleResize = (entry) => {
      handleWrapperResize(entry);
      emit("resize", entry);
    };
    const handleWrapperResize = (entry) => {
      if (needMeasureViewportHeight.value) {
        setViewportHeight(entry.clientHeight);
      }
    };
    const handleScroll = (e) => {
      if (!viewportRef.value)
        return;
      const {
        scrollTop: rawScrollTop,
        clientHeight,
        scrollHeight
      } = viewportRef.value;
      scrollTop.value = getValidScrollTop(rawScrollTop, scrollHeight - clientHeight);
      emit("scroll", e);
    };
    const scrollTo = (options) => {
      rafIdRef.value && caf(rafIdRef.value);
      rafIdRef.value = raf(() => {
        const prepareScrollResult = prepareScrollTo(options);
        if (prepareScrollResult) {
          rangeState.startIndex = prepareScrollResult.startIndex;
          rangeState.endIndex = prepareScrollResult.endIndex;
          nextTick(() => {
            if (!viewportRef.value)
              return;
            const fixScrollResult = fixScrollTo({
              itemIndex: prepareScrollResult.itemIndex,
              relativeTop: prepareScrollResult.relativeTop
            });
            if (fixScrollResult) {
              lockScrollRef.value = true;
              viewportRef.value.scrollTop = fixScrollResult.scrollTop;
              rangeState.itemIndex = fixScrollResult.itemIndex;
              rangeState.itemOffsetPtg = fixScrollResult.itemOffsetPtg;
              rangeState.startIndex = fixScrollResult.startIndex;
              rangeState.endIndex = fixScrollResult.endIndex;
            }
            rafIdRef.value = raf(() => {
              lockScrollRef.value = false;
            });
          });
        }
      });
    };
    watch([itemHeight, visibleCount, scrollTop, data], () => {
      if (lockScrollRef.value)
        return;
      updateRangeState();
    });
    watch(rangeState, () => {
      nextTick(() => {
        updateScrollOffset();
      });
    });
    return {
      viewportRef,
      viewportHeight,
      totalHeight,
      startOffset,
      isVirtual,
      renderChildren,
      handleResize,
      handleScroll,
      scrollTo
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RenderFunction = resolveComponent("RenderFunction");
  const _component_Filler = resolveComponent("Filler");
  const _component_ResizeOberver = resolveComponent("ResizeOberver");
  return openBlock(), createBlock(_component_ResizeOberver, { onResize: _ctx.handleResize }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.component), mergeProps(_ctx.$attrs, {
        ref: "viewportRef",
        style: {
          overflowY: "auto",
          overflowAnchor: "none",
          maxHeight: `${_ctx.viewportHeight}px`
        },
        onScroll: _ctx.handleScroll
      }), {
        default: withCtx(() => [
          createVNode(_component_Filler, {
            height: _ctx.totalHeight,
            offset: _ctx.isVirtual ? _ctx.startOffset : void 0,
            type: _ctx.type,
            "outer-attrs": _ctx.outerAttrs,
            "inner-attrs": _ctx.innerAttrs
          }, {
            default: withCtx(() => [
              createVNode(_component_RenderFunction, { "render-func": _ctx.renderChildren }, null, 8, ["render-func"])
            ]),
            _: 1
          }, 8, ["height", "offset", "type", "outer-attrs", "inner-attrs"])
        ]),
        _: 1
      }, 16, ["style", "onScroll"]))
    ]),
    _: 1
  }, 8, ["onResize"]);
}
var VirtualList = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["render", _sfc_render$6]]);
var __defProp$4 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
function _isSlot$5(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _Select = defineComponent({
  name: "Select",
  components: {
    Trigger,
    SelectView
  },
  inheritAttrs: false,
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number, Object, Array]
    },
    defaultValue: {
      type: [String, Number, Object, Array],
      default: (props) => isUndefined(props.multiple) ? "" : []
    },
    inputValue: {
      type: String
    },
    defaultInputValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    placeholder: String,
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: [Boolean, Object],
      default: (props) => Boolean(props.multiple)
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    popupContainer: {
      type: [String, Object]
    },
    bordered: {
      type: Boolean,
      default: true
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: true
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    unmountOnClose: {
      type: Boolean,
      default: false
    },
    filterOption: {
      type: [Boolean, Function],
      default: true
    },
    options: {
      type: Array,
      default: () => []
    },
    virtualListProps: {
      type: Object
    },
    triggerProps: {
      type: Object
    },
    formatLabel: {
      type: Function
    },
    fallbackOption: {
      type: [Boolean, Function],
      default: true
    },
    showExtraOptions: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    searchDelay: {
      type: Number,
      default: 500
    },
    limit: {
      type: Number,
      default: 0
    },
    fieldNames: {
      type: Object
    },
    onChange: {
      type: [Function, Array]
    },
    onInputValueChange: {
      type: [Function, Array]
    },
    onPopupVisibleChange: {
      type: [Function, Array]
    },
    onClear: {
      type: [Function, Array]
    },
    onRemove: {
      type: [Function, Array]
    },
    onSearch: {
      type: [Function, Array]
    }
  },
  emits: [
    "update:modelValue",
    "update:inputValue",
    "update:popupVisible",
    "change",
    "inputValueChange",
    "popupVisibleChange",
    "clear",
    "remove",
    "search",
    "dropdownScroll",
    "dropdownReachBottom",
    "exceedLimit"
  ],
  setup(props, {
    slots,
    emit,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      options,
      filterOption,
      valueKey,
      multiple,
      popupVisible,
      showExtraOptions,
      modelValue,
      fieldNames,
      loading
    } = toRefs(props);
    const prefixCls = getPrefixCls("select");
    const {
      mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error
    });
    const component = computed(() => props.virtualListProps ? "div" : "li");
    const retainInputValue = computed(() => isObject(props.allowSearch) && Boolean(props.allowSearch.retainInputValue));
    computed(() => {
      if (isFunction(props.formatLabel)) {
        return (data) => {
          const optionInfo = optionInfoMap.get(data.value);
          return props.formatLabel(optionInfo);
        };
      }
      return void 0;
    });
    const dropdownRef = ref();
    const optionRefs = ref({});
    const virtualListRef = ref();
    const {
      computedPopupVisible,
      handlePopupVisibleChange
    } = useTrigger({
      popupVisible,
      emit
    });
    const _value = ref(props.defaultValue);
    const computedValueObjects = computed(() => {
      var _a;
      const mergedValue = (_a = props.modelValue) != null ? _a : _value.value;
      const valueArray = isArray(mergedValue) ? mergedValue : mergedValue || isNumber(mergedValue) ? [mergedValue] : [];
      return valueArray.map((value) => ({
        value,
        key: getKeyFromValue(value, props.valueKey)
      }));
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = multiple.value ? [] : "";
      }
    });
    const computedValueKeys = computed(() => computedValueObjects.value.map((obj) => obj.key));
    const getFallBackOption = (value) => {
      if (isFunction(props.fallbackOption)) {
        return props.fallbackOption(value);
      }
      return {
        value,
        label: String(isObject(value) ? value[valueKey == null ? void 0 : valueKey.value] : value)
      };
    };
    const getExtraValueData = () => {
      const valueArray = [];
      const keyArray = [];
      if (props.allowCreate || props.fallbackOption) {
        for (const item of computedValueObjects.value) {
          if (!keyArray.includes(item.key)) {
            const optionInfo = optionInfoMap.get(item.key);
            if (!optionInfo || optionInfo.origin === "extraOptions") {
              valueArray.push(item);
              keyArray.push(item.key);
            }
          }
        }
      }
      if (props.allowCreate && computedInputValue.value) {
        const key = getKeyFromValue(computedInputValue.value);
        if (!keyArray.includes(key)) {
          const optionInfo = optionInfoMap.get(key);
          if (!optionInfo || optionInfo.origin === "extraOptions") {
            valueArray.push({
              value: computedInputValue.value,
              key
            });
          }
        }
      }
      return valueArray;
    };
    const extraValueObjects = ref([]);
    const extraOptions = computed(() => extraValueObjects.value.map((obj) => getFallBackOption(obj.value)));
    nextTick(() => {
      watchEffect(() => {
        var _a;
        const valueData = getExtraValueData();
        if (valueData.length !== extraValueObjects.value.length) {
          extraValueObjects.value = valueData;
        } else if (valueData.length > 0) {
          for (let i = 0; i < valueData.length; i++) {
            if (valueData[i].key !== ((_a = extraValueObjects.value[i]) == null ? void 0 : _a.key)) {
              extraValueObjects.value = valueData;
              break;
            }
          }
        }
      });
    });
    const _inputValue = ref("");
    const computedInputValue = computed(() => {
      var _a;
      return (_a = props.inputValue) != null ? _a : _inputValue.value;
    });
    watch(computedPopupVisible, (visible) => {
      if (!visible && !retainInputValue.value) {
        updateInputValue("");
      }
    });
    const getValueFromValueKeys = (valueKeys) => {
      var _a, _b;
      if (!props.multiple) {
        return (_b = (_a = optionInfoMap.get(valueKeys[0])) == null ? void 0 : _a.value) != null ? _b : "";
      }
      return valueKeys.map((key) => {
        var _a2, _b2;
        return (_b2 = (_a2 = optionInfoMap.get(key)) == null ? void 0 : _a2.value) != null ? _b2 : "";
      });
    };
    const updateValue = (valueKeys) => {
      var _a, _b;
      const value = getValueFromValueKeys(valueKeys);
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a);
    };
    const updateInputValue = (inputValue) => {
      _inputValue.value = inputValue;
      emit("update:inputValue", inputValue);
      emit("inputValueChange", inputValue);
    };
    const handleSelect = (key, ev) => {
      if (props.multiple) {
        if (!computedValueKeys.value.includes(key)) {
          if (enabledOptionKeys.value.includes(key)) {
            if (props.limit > 0 && computedValueKeys.value.length >= props.limit) {
              const info = optionInfoMap.get(key);
              emit("exceedLimit", info == null ? void 0 : info.value, ev);
            } else {
              const valueKeys = computedValueKeys.value.concat(key);
              updateValue(valueKeys);
            }
          }
        } else {
          const valueKeys = computedValueKeys.value.filter((_key) => _key !== key);
          updateValue(valueKeys);
        }
        if (!retainInputValue.value) {
          updateInputValue("");
        }
      } else {
        if (key !== computedValueKeys.value[0]) {
          updateValue([key]);
        }
        if (retainInputValue.value) {
          const optionInfo = optionInfoMap.get(key);
          if (optionInfo) {
            updateInputValue(optionInfo.label);
          }
        }
        handlePopupVisibleChange(false);
      }
    };
    const handleSearch = debounce((value) => {
      emit("search", value);
    }, props.searchDelay);
    const handleInputValueChange = (inputValue) => {
      if (inputValue !== computedInputValue.value) {
        if (!computedPopupVisible.value) {
          handlePopupVisibleChange(true);
        }
        updateInputValue(inputValue);
        if (props.allowSearch) {
          handleSearch(inputValue);
        }
      }
    };
    const handleRemove = (key) => {
      const optionInfo = optionInfoMap.get(key);
      const newKeys = computedValueKeys.value.filter((_key) => _key !== key);
      updateValue(newKeys);
      emit("remove", optionInfo == null ? void 0 : optionInfo.value);
    };
    const handleClear = (e) => {
      e == null ? void 0 : e.stopPropagation();
      const newKeys = computedValueKeys.value.filter((key) => {
        var _a;
        return (_a = optionInfoMap.get(key)) == null ? void 0 : _a.disabled;
      });
      updateValue(newKeys);
      updateInputValue("");
      emit("clear");
    };
    const handleDropdownScroll = (e) => {
      emit("dropdownScroll", e);
    };
    const handleDropdownReachBottom = (e) => {
      emit("dropdownReachBottom", e);
    };
    const {
      validOptions,
      optionInfoMap,
      validOptionInfos,
      enabledOptionKeys,
      handleKeyDown
    } = useSelect({
      multiple,
      options,
      extraOptions,
      inputValue: computedInputValue,
      filterOption,
      showExtraOptions,
      component,
      valueKey,
      fieldNames,
      loading,
      popupVisible: computedPopupVisible,
      valueKeys: computedValueKeys,
      dropdownRef,
      optionRefs,
      virtualListRef,
      onSelect: handleSelect,
      onPopupVisibleChange: handlePopupVisibleChange
    });
    const selectViewValue = computed(() => {
      var _a;
      const result = [];
      for (const item of computedValueObjects.value) {
        const optionInfo = optionInfoMap.get(item.key);
        if (optionInfo) {
          result.push(__spreadProps$2(__spreadValues$4({}, optionInfo), {
            value: item.key,
            label: (_a = optionInfo == null ? void 0 : optionInfo.label) != null ? _a : String(isObject(item.value) ? item.value[valueKey == null ? void 0 : valueKey.value] : item.value),
            closable: !(optionInfo == null ? void 0 : optionInfo.disabled),
            tagProps: optionInfo == null ? void 0 : optionInfo.tagProps
          }));
        }
      }
      return result;
    });
    const getOptionContentFunc = (optionInfo) => {
      if (isFunction(slots.option)) {
        const optionSlot = slots.option;
        return () => optionSlot({
          data: optionInfo
        });
      }
      if (isFunction(optionInfo.render)) {
        return optionInfo.render;
      }
      return () => optionInfo.label;
    };
    const renderOption = (optionInfo) => {
      if (isGroupOptionInfo(optionInfo)) {
        let _slot;
        return createVNode(Optgroup, {
          "key": optionInfo.key,
          "label": optionInfo.label
        }, _isSlot$5(_slot = optionInfo.options.map((child) => renderOption(child))) ? _slot : {
          default: () => [_slot]
        });
      }
      if (!isValidOption(optionInfo, {
        inputValue: computedInputValue.value,
        filterOption: filterOption == null ? void 0 : filterOption.value
      })) {
        return null;
      }
      return createVNode(Option, {
        "ref": (ref2) => {
          if (ref2 == null ? void 0 : ref2.$el) {
            optionRefs.value[optionInfo.key] = ref2.$el;
          }
        },
        "key": optionInfo.key,
        "value": optionInfo.value,
        "label": optionInfo.label,
        "disabled": optionInfo.disabled,
        "internal": true
      }, {
        default: getOptionContentFunc(optionInfo)
      });
    };
    const renderDropDown = () => {
      return createVNode(SelectDropdown, {
        "ref": dropdownRef,
        "loading": props.loading,
        "empty": validOptionInfos.value.length === 0,
        "virtualList": Boolean(props.virtualListProps),
        "onScroll": handleDropdownScroll,
        "onReachBottom": handleDropdownReachBottom
      }, {
        "default": () => {
          var _a, _b;
          return [...(_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [], ...validOptions.value.map(renderOption)];
        },
        "virtual-list": () => createVNode(VirtualList, mergeProps(props.virtualListProps, {
          "ref": virtualListRef,
          "data": validOptions.value
        }), {
          item: ({
            item
          }) => renderOption(item)
        }),
        "empty": slots.empty,
        "footer": slots.footer
      });
    };
    const renderLabel = ({
      data
    }) => {
      var _a, _b, _c;
      if (slots.label || isFunction(props.formatLabel)) {
        const optionInfo = optionInfoMap.get(data.value);
        if (optionInfo == null ? void 0 : optionInfo.raw) {
          return (_c = (_a = slots.label) == null ? void 0 : _a.call(slots, {
            data: optionInfo.raw
          })) != null ? _c : (_b = props.formatLabel) == null ? void 0 : _b.call(props, optionInfo.raw);
        }
      }
      return data.label;
    };
    return () => createVNode(Trigger, mergeProps({
      "trigger": "click",
      "position": "bl",
      "popupOffset": 4,
      "animationName": "slide-dynamic-origin",
      "hideEmpty": true,
      "preventFocus": true,
      "autoFitPopupWidth": true,
      "autoFitTransformOrigin": true,
      "disabled": mergedDisabled.value,
      "popupVisible": computedPopupVisible.value,
      "unmountOnClose": props.unmountOnClose,
      "clickToClose": !(props.allowSearch || props.allowCreate),
      "popupContainer": props.popupContainer,
      "onPopupVisibleChange": handlePopupVisibleChange
    }, props.triggerProps), {
      default: () => {
        var _a, _b;
        return [(_b = (_a = slots.trigger) == null ? void 0 : _a.call(slots)) != null ? _b : createVNode(SelectView, mergeProps({
          "class": prefixCls,
          "modelValue": selectViewValue.value,
          "inputValue": computedInputValue.value,
          "multiple": props.multiple,
          "disabled": mergedDisabled.value,
          "error": mergedError.value,
          "loading": props.loading,
          "allowClear": props.allowClear,
          "allowCreate": props.allowCreate,
          "allowSearch": Boolean(props.allowSearch),
          "opened": computedPopupVisible.value,
          "maxTagCount": props.maxTagCount,
          "placeholder": props.placeholder,
          "bordered": props.bordered,
          "size": mergedSize.value,
          "onInputValueChange": handleInputValueChange,
          "onRemove": handleRemove,
          "onClear": handleClear,
          "onKeydown": handleKeyDown
        }, attrs), {
          "label": renderLabel,
          "prefix": slots.prefix,
          "arrow-icon": slots["arrow-icon"],
          "loading-icon": slots["loading-icon"],
          "search-icon": slots["search-icon"]
        })];
      },
      content: renderDropDown
    });
  }
});
const Select = Object.assign(_Select, {
  Option,
  OptGroup: Optgroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Select.name, _Select);
    app.component(componentPrefix + Option.name, Option);
    app.component(componentPrefix + Optgroup.name, Optgroup);
  }
});
const _sfc_main$b = defineComponent({
  name: "PageOptions",
  components: {
    ArcoSelect: Select
  },
  props: {
    sizeOptions: {
      type: Array,
      required: true
    },
    pageSize: Number,
    disabled: Boolean,
    size: {
      type: String
    },
    onChange: {
      type: Function
    },
    selectProps: {
      type: Object
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-options");
    const { t } = useI18n();
    const options = computed(() => props.sizeOptions.map((value) => ({
      value,
      label: `${value} ${t("pagination.countPerPage")}`
    })));
    const handleChange = (value) => {
      emit("change", value);
    };
    return {
      prefixCls,
      options,
      handleChange
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arco_select = resolveComponent("arco-select");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createVNode(_component_arco_select, mergeProps({
      "model-value": _ctx.pageSize,
      options: _ctx.options,
      size: _ctx.size,
      disabled: _ctx.disabled
    }, _ctx.selectProps, { onChange: _ctx.handleChange }), null, 16, ["model-value", "options", "size", "disabled", "onChange"])
  ], 2);
}
var PageOptions = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["render", _sfc_render$5]]);
var _Pagination = defineComponent({
  name: "Pagination",
  props: {
    total: {
      type: Number,
      required: true
    },
    current: Number,
    defaultCurrent: {
      type: Number,
      default: 1
    },
    pageSize: Number,
    defaultPageSize: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    showMore: {
      type: Boolean,
      default: false
    },
    showJumper: {
      type: Boolean,
      default: false
    },
    showPageSize: {
      type: Boolean,
      default: false
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 30, 40, 50]
    },
    pageSizeProps: {
      type: Object
    },
    size: {
      type: String
    },
    pageItemStyle: {
      type: Object
    },
    activePageItemStyle: {
      type: Object
    },
    baseSize: {
      type: Number,
      default: 6
    },
    bufferSize: {
      type: Number,
      default: 2
    },
    onChange: {
      type: [Function, Array]
    },
    onPageSizeChange: {
      type: [Function, Array]
    }
  },
  emits: [
    "update:current",
    "update:pageSize",
    "change",
    "pageSizeChange"
  ],
  setup(props, {
    emit,
    slots
  }) {
    const prefixCls = getPrefixCls("pagination");
    const {
      t
    } = useI18n();
    const {
      disabled,
      pageItemStyle,
      activePageItemStyle,
      size
    } = toRefs(props);
    const {
      mergedSize
    } = useSize(size);
    const _current = ref(props.defaultCurrent);
    const _pageSize = ref(props.defaultPageSize);
    const computedCurrent = computed(() => {
      var _a;
      return (_a = props.current) != null ? _a : _current.value;
    });
    const computedPageSize = computed(() => {
      var _a;
      return (_a = props.pageSize) != null ? _a : _pageSize.value;
    });
    const pages = computed(() => Math.ceil(props.total / computedPageSize.value));
    const handleClick = (page) => {
      if (page !== computedCurrent.value && isNumber(page) && !props.disabled) {
        _current.value = page;
        emit("update:current", page);
        emit("change", page);
      }
    };
    const handlePageSizeChange = (pageSize) => {
      _pageSize.value = pageSize;
      emit("update:pageSize", pageSize);
      emit("pageSizeChange", pageSize);
    };
    const pagerProps = reactive({
      current: computedCurrent,
      pages,
      disabled,
      style: pageItemStyle,
      activeStyle: activePageItemStyle,
      onClick: handleClick
    });
    const getPageItemElement = (type, props2 = {}) => {
      if (type === "more") {
        return createVNode(EllipsisPager, mergeProps(props2, pagerProps), {
          default: slots["page-item-ellipsis"]
        });
      }
      if (type === "previous") {
        return createVNode(StepPager, mergeProps({
          "type": "previous"
        }, props2, pagerProps), {
          default: slots["page-item-step"]
        });
      }
      if (type === "next") {
        return createVNode(StepPager, mergeProps({
          "type": "next"
        }, props2, pagerProps), {
          default: slots["page-item-step"]
        });
      }
      return createVNode(Pager, mergeProps(props2, pagerProps), {
        default: slots["page-item"]
      });
    };
    const pageList = computed(() => {
      const pageList2 = [];
      if (pages.value < props.baseSize + props.bufferSize * 2) {
        for (let i = 1; i <= pages.value; i++) {
          pageList2.push(getPageItemElement("page", {
            key: i,
            pageNumber: i
          }));
        }
      } else {
        let left = 1;
        let right = pages.value;
        let hasLeftEllipsis = false;
        let hasRightEllipsis = false;
        if (computedCurrent.value > 2 + props.bufferSize) {
          hasLeftEllipsis = true;
          left = Math.min(computedCurrent.value - props.bufferSize, pages.value - 2 * props.bufferSize);
        }
        if (computedCurrent.value < pages.value - (props.bufferSize + 1)) {
          hasRightEllipsis = true;
          right = Math.max(computedCurrent.value + props.bufferSize, 2 * props.bufferSize + 1);
        }
        if (hasLeftEllipsis) {
          pageList2.push(getPageItemElement("page", {
            key: 1,
            pageNumber: 1
          }));
          pageList2.push(getPageItemElement("more", {
            key: "left-ellipsis-pager",
            step: -(props.bufferSize * 2 + 1)
          }));
        }
        for (let i = left; i <= right; i++) {
          pageList2.push(getPageItemElement("page", {
            key: i,
            pageNumber: i
          }));
        }
        if (hasRightEllipsis) {
          pageList2.push(getPageItemElement("more", {
            key: "right-ellipsis-pager",
            step: props.bufferSize * 2 + 1
          }));
          pageList2.push(getPageItemElement("page", {
            key: pages.value,
            pageNumber: pages.value
          }));
        }
      }
      return pageList2;
    });
    const renderPager = () => {
      if (props.simple) {
        return createVNode("span", {
          "class": `${prefixCls}-simple`
        }, [getPageItemElement("previous", {
          simple: true
        }), createVNode(PageJumper, {
          "disabled": props.disabled,
          "current": computedCurrent.value,
          "size": mergedSize.value,
          "pages": pages.value,
          "simple": true,
          "onChange": handleClick
        }, null), getPageItemElement("next", {
          simple: true
        })]);
      }
      return createVNode("ul", {
        "class": `${prefixCls}-list`
      }, [getPageItemElement("previous", {
        simple: true
      }), pageList.value, props.showMore && getPageItemElement("more", {
        key: "more",
        step: props.bufferSize * 2 + 1
      }), getPageItemElement("next", {
        simple: true
      })]);
    };
    watch(computedPageSize, (curPageSize, prePageSize) => {
      if (curPageSize !== prePageSize && computedCurrent.value > 1) {
        const index2 = prePageSize * (computedCurrent.value - 1) + 1;
        const newPage = Math.ceil(index2 / curPageSize);
        if (newPage !== computedCurrent.value) {
          _current.value = newPage;
          emit("update:current", newPage);
          emit("change", newPage);
        }
      }
    });
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-simple`]: props.simple,
      [`${prefixCls}-disabled`]: props.disabled
    }]);
    return () => {
      var _a, _b;
      if (props.hideOnSinglePage && pages.value <= 1) {
        return null;
      }
      return createVNode("div", {
        "class": cls.value
      }, [props.showTotal && createVNode("span", {
        "class": `${prefixCls}-total`
      }, [(_b = (_a = slots.total) == null ? void 0 : _a.call(slots, {
        total: props.total
      })) != null ? _b : t("pagination.total", props.total)]), renderPager(), props.showPageSize && createVNode(PageOptions, {
        "disabled": props.disabled,
        "sizeOptions": props.pageSizeOptions,
        "pageSize": computedPageSize.value,
        "size": mergedSize.value,
        "onChange": handlePageSizeChange,
        "selectProps": props.pageSizeProps
      }, null), !props.simple && props.showJumper && createVNode(PageJumper, {
        "disabled": props.disabled,
        "current": computedCurrent.value,
        "pages": pages.value,
        "size": mergedSize.value,
        "onChange": handleClick
      }, {
        "jumper-prepend": slots["jumper-prepend"],
        "jumper-append": slots["jumper-append"]
      })]);
    };
  }
});
const Pagination = Object.assign(_Pagination, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Pagination.name, _Pagination);
  }
});
const _sfc_main$a = defineComponent({
  name: "Message",
  components: {
    AIconHover: IconHover,
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill,
    IconClose,
    IconLoading
  },
  props: {
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3e3
    },
    resetOnUpdate: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("message");
    let timer = 0;
    const handleClose = () => {
      emit("close");
    };
    onMounted(() => {
      if (props.duration > 0) {
        timer = window.setTimeout(handleClose, props.duration);
      }
    });
    onUpdated(() => {
      if (props.resetOnUpdate) {
        if (timer) {
          window.clearTimeout(timer);
          timer = 0;
        }
        if (props.duration > 0) {
          timer = window.setTimeout(handleClose, props.duration);
        }
      }
    });
    onUnmounted(() => {
      if (timer) {
        window.clearTimeout(timer);
      }
    });
    return {
      prefixCls,
      handleClose
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_info_circle_fill = resolveComponent("icon-info-circle-fill");
  const _component_icon_check_circle_fill = resolveComponent("icon-check-circle-fill");
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  const _component_icon_close_circle_fill = resolveComponent("icon-close-circle-fill");
  const _component_icon_loading = resolveComponent("icon-loading");
  const _component_icon_close = resolveComponent("icon-close");
  const _component_a_icon_hover = resolveComponent("a-icon-hover");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.prefixCls,
      `${_ctx.prefixCls}-${_ctx.type}`,
      { [`${_ctx.prefixCls}-closable`]: _ctx.closable }
    ])
  }, [
    _ctx.showIcon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.type === "info" ? (openBlock(), createBlock(_component_icon_info_circle_fill, { key: 0 })) : _ctx.type === "success" ? (openBlock(), createBlock(_component_icon_check_circle_fill, { key: 1 })) : _ctx.type === "warning" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, { key: 2 })) : _ctx.type === "error" ? (openBlock(), createBlock(_component_icon_close_circle_fill, { key: 3 })) : _ctx.type === "loading" ? (openBlock(), createBlock(_component_icon_loading, { key: 4 })) : createCommentVNode("v-if", true)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    createElementVNode("span", {
      class: normalizeClass(`${_ctx.prefixCls}-content`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.closable ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
    }, [
      createVNode(_component_a_icon_hover, null, {
        default: withCtx(() => [
          createVNode(_component_icon_close)
        ]),
        _: 1
      })
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var Message$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["render", _sfc_render$4]]);
function _isSlot$4(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var MessageList = defineComponent({
  name: "MessageList",
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      default: "top"
    }
  },
  emits: ["close", "afterClose"],
  setup(props, context) {
    const prefixCls = getPrefixCls("message-list");
    const {
      zIndex
    } = usePopupManager("message", {
      runOnMounted: true
    });
    return () => {
      let _slot;
      return createVNode(TransitionGroup, {
        "class": [prefixCls, `${prefixCls}-${props.position}`],
        "name": "fade-message",
        "tag": "ul",
        "style": {
          zIndex: zIndex.value
        },
        "onAfterLeave": () => context.emit("afterClose")
      }, _isSlot$4(_slot = props.messages.map((item) => {
        const slots = {
          default: getSlotFunction(item.content),
          icon: getSlotFunction(item.icon)
        };
        return createVNode(Message$1, {
          "key": item.id,
          "type": item.type,
          "duration": item.duration,
          "closable": item.closable,
          "resetOnUpdate": item.resetOnUpdate,
          "onClose": () => context.emit("close", item.id)
        }, slots);
      })) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
class MessageManger {
  constructor(config, appContext) {
    this.messageCount = 0;
    this.add = (config2) => {
      var _a;
      this.messageCount++;
      const id = (_a = config2.id) != null ? _a : `__arco_message_${this.messageCount}`;
      if (this.messageIds.has(id)) {
        return this.update(id, config2);
      }
      const message2 = reactive(__spreadValues$3({ id }, config2));
      this.messages.value.push(message2);
      this.messageIds.add(id);
      return {
        close: () => this.remove(id)
      };
    };
    this.update = (id, config2) => {
      for (let i = 0; i < this.messages.value.length; i++) {
        if (this.messages.value[i].id === id) {
          const resetOnUpdate = !isUndefined(config2.duration);
          Object.assign(this.messages.value[i], __spreadProps$1(__spreadValues$3({}, config2), { id, resetOnUpdate }));
          break;
        }
      }
      return {
        close: () => this.remove(id)
      };
    };
    this.remove = (id) => {
      for (let i = 0; i < this.messages.value.length; i++) {
        const item = this.messages.value[i];
        if (item.id === id) {
          if (isFunction(item.onClose)) {
            item.onClose(id);
          }
          this.messages.value.splice(i, 1);
          this.messageIds.delete(id);
          break;
        }
      }
    };
    this.clear = () => {
      this.messages.value.splice(0);
    };
    this.destroy = () => {
      if (this.messages.value.length === 0 && this.container) {
        render(null, this.container);
        document.body.removeChild(this.container);
        this.container = null;
        messageInstance[this.position] = void 0;
      }
    };
    const { position = "top" } = config;
    this.container = getOverlay("message");
    this.messageIds = /* @__PURE__ */ new Set();
    this.messages = ref([]);
    this.position = position;
    const vm = createVNode(MessageList, {
      messages: this.messages.value,
      position,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    if (appContext != null ? appContext : Message._context) {
      vm.appContext = appContext != null ? appContext : Message._context;
    }
    render(vm, this.container);
    document.body.appendChild(this.container);
  }
}
const messageInstance = {};
const types = [...MESSAGE_TYPES, "loading"];
const message = types.reduce((pre, value) => {
  pre[value] = (config, appContext) => {
    if (isString(config)) {
      config = { content: config };
    }
    const _config = __spreadValues$3({ type: value }, config);
    const { position = "top" } = _config;
    if (!messageInstance[position]) {
      messageInstance[position] = new MessageManger(_config, appContext);
    }
    return messageInstance[position].add(_config);
  };
  return pre;
}, {});
message.clear = (position) => {
  var _a;
  if (position) {
    (_a = messageInstance[position]) == null ? void 0 : _a.clear();
  } else {
    Object.values(messageInstance).forEach((item) => item == null ? void 0 : item.clear());
  }
};
const Message = __spreadProps$1(__spreadValues$3({}, message), {
  install: (app) => {
    const _message = {
      clear: message.clear
    };
    for (const key of types) {
      _message[key] = (config, appContext = app._context) => message[key](config, appContext);
    }
    app.config.globalProperties.$message = _message;
  },
  _context: null
});
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
const getDataColumnsNumber = (columns) => {
  let count = 0;
  const travelColumns = (columns2) => {
    if (isArray(columns2) && columns2.length > 0) {
      for (const item of columns2) {
        if (!item.children) {
          count += 1;
        } else {
          travelColumns(item.children);
        }
      }
    }
  };
  travelColumns(columns);
  return count;
};
const getTotalHeaderRows = (columns) => {
  let count = 0;
  if (isArray(columns) && columns.length > 0) {
    count = 1;
    for (const item of columns) {
      if (item.children) {
        const depth = getTotalHeaderRows(item.children);
        if (depth > 0) {
          count = Math.max(count, depth + 1);
        }
      }
    }
  }
  return count;
};
const getGroupColumns = (columns, columnMap) => {
  const totalHeaderRows = getTotalHeaderRows(columns);
  columnMap.clear();
  const dataColumns = [];
  const groupColumns = [...Array(totalHeaderRows)].map(() => []);
  let lastLeftFixedIndex;
  let firstRightFixedIndex;
  const travelColumns = (columns2, level = 0, fixed) => {
    var _a;
    for (const item of columns2) {
      const cell = __spreadValues$2({}, item);
      if (isArray(cell.children)) {
        const colSpan = getDataColumnsNumber(cell.children);
        if (colSpan > 1) {
          cell.colSpan = colSpan;
        }
        groupColumns[level].push(cell);
        travelColumns(cell.children, level + 1, cell.fixed);
      } else {
        const rowSpan = totalHeaderRows - level;
        if (rowSpan > 1) {
          cell.rowSpan = rowSpan;
        }
        if (fixed || cell.fixed) {
          cell.fixed = (_a = cell.fixed) != null ? _a : fixed;
          if (cell.fixed === "left") {
            lastLeftFixedIndex = dataColumns.length;
          } else if (isUndefined(firstRightFixedIndex)) {
            firstRightFixedIndex = dataColumns.length;
          }
        }
        if (isUndefined(cell.dataIndex) || isNull(cell.dataIndex)) {
          cell.dataIndex = `__arco_data_index_${dataColumns.length}`;
        }
        columnMap.set(cell.dataIndex, cell);
        dataColumns.push(cell);
        groupColumns[level].push(cell);
      }
    }
  };
  travelColumns(columns);
  if (!isUndefined(lastLeftFixedIndex)) {
    dataColumns[lastLeftFixedIndex].isLastLeftFixed = true;
  }
  if (!isUndefined(firstRightFixedIndex)) {
    dataColumns[firstRightFixedIndex].isFirstRightFixed = true;
  }
  return { dataColumns, groupColumns };
};
const getOperationColumnIndex = (operations, name) => {
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].name === name) {
      return i;
    }
  }
  return -1;
};
const getOperationFixedNumber = (column, operations) => {
  var _a;
  const index2 = getOperationColumnIndex(operations, column.name);
  if (index2 <= 0) {
    return 0;
  }
  let count = 0;
  const _operations = operations.slice(0, index2);
  for (const item of _operations) {
    count += (_a = item.width) != null ? _a : 0;
  }
  return count;
};
const getFixedNumber = (column, {
  dataColumns,
  operations
}) => {
  var _a;
  let count = 0;
  if (column.fixed === "left") {
    for (const item of operations) {
      count += (_a = item.width) != null ? _a : 40;
    }
    for (const item of dataColumns) {
      if (column.dataIndex === item.dataIndex) {
        break;
      }
      count += item.width;
    }
    return count;
  }
  for (let i = dataColumns.length - 1; i > 0; i--) {
    const item = dataColumns[i];
    if (column.dataIndex === item.dataIndex) {
      break;
    }
    if (item.fixed === "right") {
      count += item.width;
    }
  }
  return count;
};
const getOperationFixedCls = (prefixCls, column) => {
  if (column.fixed) {
    return [
      `${prefixCls}-col-fixed-left`,
      {
        [`${prefixCls}-col-fixed-left-last`]: column.isLastLeftFixed
      }
    ];
  }
  return [];
};
const getFixedCls = (prefixCls, column) => {
  if (column.fixed === "left") {
    return [
      `${prefixCls}-col-fixed-left`,
      {
        [`${prefixCls}-col-fixed-left-last`]: column.isLastLeftFixed
      }
    ];
  }
  if (column.fixed === "right") {
    return [
      `${prefixCls}-col-fixed-right`,
      {
        [`${prefixCls}-col-fixed-right-first`]: column.isFirstRightFixed
      }
    ];
  }
  return [];
};
const getStyle = (column, {
  dataColumns,
  operations
}) => {
  if (column.fixed) {
    const offset = `${getFixedNumber(column, { dataColumns, operations })}px`;
    if (column.fixed === "left") {
      return {
        left: offset
      };
    }
    return {
      right: offset
    };
  }
  return {};
};
const getOperationStyle = (column, operations) => {
  if (column.fixed) {
    return {
      left: `${getOperationFixedNumber(column, operations)}px`
    };
  }
  return {};
};
const spliceFromPath = (data, path, item) => {
  var _a;
  let parent = data;
  for (let i = 0; i < path.length; i++) {
    const index2 = path[i];
    const isLast = i >= path.length - 1;
    if (isLast) {
      if (item) {
        parent.splice(index2, 0, item);
      } else {
        return parent.splice(index2, 1)[0];
      }
    }
    parent = (_a = parent[index2].children) != null ? _a : [];
  }
  return void 0;
};
const useRowSelection = ({
  selectedKeys,
  defaultSelectedKeys,
  rowSelection,
  currentAllRowKeys,
  currentAllEnabledRowKeys,
  emit
}) => {
  var _a, _b, _c;
  const isRadio = computed(() => {
    var _a2;
    return ((_a2 = rowSelection.value) == null ? void 0 : _a2.type) === "radio";
  });
  const _selectedRowKeys = ref((_c = (_b = defaultSelectedKeys.value) != null ? _b : (_a = rowSelection.value) == null ? void 0 : _a.defaultSelectedRowKeys) != null ? _c : []);
  const selectedRowKeys = computed(() => {
    var _a2, _b2, _c2;
    return (_c2 = (_b2 = selectedKeys.value) != null ? _b2 : (_a2 = rowSelection.value) == null ? void 0 : _a2.selectedRowKeys) != null ? _c2 : _selectedRowKeys.value;
  });
  const currentSelectedRowKeys = computed(() => selectedRowKeys.value.filter((key) => currentAllRowKeys.value.includes(key)));
  const handleSelectAll = (checked) => {
    const newSelectedRowKeys = new Set(selectedRowKeys.value);
    for (const key of currentAllEnabledRowKeys.value) {
      if (checked) {
        newSelectedRowKeys.add(key);
      } else {
        newSelectedRowKeys.delete(key);
      }
    }
    _selectedRowKeys.value = [...newSelectedRowKeys];
    emit("selectAll", checked);
    emit("selectionChange", _selectedRowKeys.value);
    emit("update:selectedKeys", _selectedRowKeys.value);
  };
  const handleSelect = (values, value) => {
    _selectedRowKeys.value = values;
    emit("select", values, value);
    emit("selectionChange", values);
    emit("update:selectedKeys", values);
  };
  return {
    isRadio,
    selectedRowKeys,
    currentSelectedRowKeys,
    handleSelectAll,
    handleSelect
  };
};
const useExpand = ({
  expandedKeys,
  defaultExpandedKeys,
  defaultExpandAllRows,
  expandable,
  allRowKeys,
  emit
}) => {
  const getDefaultExpandedRowKeys = () => {
    var _a, _b;
    if (defaultExpandedKeys.value) {
      return defaultExpandedKeys.value;
    }
    if ((_a = expandable.value) == null ? void 0 : _a.defaultExpandedRowKeys) {
      return expandable.value.defaultExpandedRowKeys;
    }
    if (defaultExpandAllRows.value || ((_b = expandable.value) == null ? void 0 : _b.defaultExpandAllRows)) {
      return [...allRowKeys.value];
    }
    return [];
  };
  const _expandedRowKeys = ref(getDefaultExpandedRowKeys());
  const expandedRowKeys = computed(() => {
    var _a, _b, _c;
    return (_c = (_b = expandedKeys.value) != null ? _b : (_a = expandable.value) == null ? void 0 : _a.expandedRowKeys) != null ? _c : _expandedRowKeys.value;
  });
  const handleExpand = (rowKey) => {
    const isExpanded = expandedRowKeys.value.includes(rowKey);
    const newExpandedRowKeys = isExpanded ? expandedRowKeys.value.filter((key) => rowKey !== key) : expandedRowKeys.value.concat(rowKey);
    _expandedRowKeys.value = newExpandedRowKeys;
    emit("expand", rowKey);
    emit("expandedChange", newExpandedRowKeys);
    emit("update:expandedKeys", newExpandedRowKeys);
  };
  return {
    expandedRowKeys,
    handleExpand
  };
};
const usePagination = (props, emit) => {
  var _a, _b;
  const _page = ref(isObject(props.pagination) ? (_a = props.pagination.defaultCurrent) != null ? _a : 1 : 1);
  const _pageSize = ref(isObject(props.pagination) ? (_b = props.pagination.defaultPageSize) != null ? _b : 10 : 10);
  const pageSize = computed(() => {
    var _a2;
    return isObject(props.pagination) ? (_a2 = props.pagination.pageSize) != null ? _a2 : _pageSize.value : _pageSize.value;
  });
  const page = computed(() => {
    var _a2;
    return isObject(props.pagination) ? (_a2 = props.pagination.current) != null ? _a2 : _page.value : _page.value;
  });
  const handlePageChange = (page2) => {
    _page.value = page2;
    emit("pageChange", page2);
  };
  const handlePageSizeChange = (pageSize2) => {
    _pageSize.value = pageSize2;
    emit("pageSizeChange", pageSize2);
  };
  return {
    page,
    pageSize,
    handlePageChange,
    handlePageSizeChange
  };
};
const _sfc_main$9 = defineComponent({
  name: "ColGroup",
  props: {
    dataColumns: {
      type: Array,
      required: true
    },
    operations: {
      type: Array,
      required: true
    },
    columnWidth: {
      type: Object
    }
  },
  setup() {
    const fixedWidth = (width) => {
      if (width) {
        return {
          width: `${width}px`,
          minWidth: `${width}px`,
          maxWidth: `${width}px`
        };
      }
      return void 0;
    };
    return {
      fixedWidth
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("colgroup", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.operations, (item) => {
      return openBlock(), createElementBlock("col", {
        key: `arco-col-${item.name}`,
        class: normalizeClass(`arco-table-${item.name}-col`),
        style: normalizeStyle(_ctx.fixedWidth(item.width))
      }, null, 6);
    }), 128)),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataColumns, (item) => {
      return openBlock(), createElementBlock("col", {
        key: `arco-col-${item.dataIndex}`,
        style: normalizeStyle(_ctx.fixedWidth(_ctx.columnWidth[item.dataIndex] || item.width))
      }, null, 4);
    }), 128))
  ]);
}
var ColGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["render", _sfc_render$3]]);
var Thead = defineComponent({
  name: "Thead",
  setup(_, {
    slots
  }) {
    return () => {
      var _a, _b, _c;
      return createVNode((_b = (_a = slots.thead) == null ? void 0 : _a.call(slots)[0]) != null ? _b : "thead", null, (_c = slots.default) == null ? void 0 : _c.call(slots));
    };
  }
});
var Tbody = defineComponent({
  name: "Tbody",
  setup(_, {
    slots
  }) {
    return () => {
      var _a, _b, _c;
      return createVNode((_b = (_a = slots.tbody) == null ? void 0 : _a.call(slots)[0]) != null ? _b : "tbody", null, (_c = slots.default) == null ? void 0 : _c.call(slots));
    };
  }
});
var Tr = defineComponent({
  name: "Tr",
  props: {
    isExpandRow: {
      type: Boolean
    },
    isEmptyRow: {
      type: Boolean
    },
    checked: {
      type: Boolean
    },
    rowIndex: Number,
    record: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("table");
    const cls = computed(() => [`${prefixCls}-tr`, {
      [`${prefixCls}-tr-expand`]: props.isExpandRow,
      [`${prefixCls}-tr-empty`]: props.isEmptyRow,
      [`${prefixCls}-tr-checked`]: props.checked
    }]);
    return () => {
      var _a, _b, _c, _d;
      return createVNode((_c = (_b = slots.tr) == null ? void 0 : _b.call(slots, {
        rowIndex: props.rowIndex,
        record: (_a = props.record) == null ? void 0 : _a.raw
      })[0]) != null ? _c : "tr", {
        class: cls.value
      }, (_d = slots.default) == null ? void 0 : _d.call(slots));
    };
  }
});
const _sfc_main$8 = defineComponent({
  name: "IconCaretDown",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-caret-down`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$6 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$5, 14, _hoisted_1$6);
}
var _IconCaretDown = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$2]]);
const IconCaretDown = Object.assign(_IconCaretDown, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCaretDown.name, _IconCaretDown);
  }
});
const _sfc_main$7 = defineComponent({
  name: "IconCaretUp",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-caret-up`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$5 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M23.063 13.171a1.2 1.2 0 0 1 1.875 0l13.503 16.88c.628.785.069 1.949-.937 1.949H10.497c-1.006 0-1.565-1.164-.937-1.95l13.503-16.879Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$4, 14, _hoisted_1$5);
}
var _IconCaretUp = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$1]]);
const IconCaretUp = Object.assign(_IconCaretUp, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCaretUp.name, _IconCaretUp);
  }
});
const _sfc_main$6 = defineComponent({
  name: "IconFilter",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    spin: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-filter`, { [`${prefixCls}-spin`]: props.spin }]);
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: isNumber(props.size) ? `${props.size}px` : props.size
        };
      }
      return void 0;
    });
    return {
      cls,
      sizeStyle
    };
  }
});
const _hoisted_1$4 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", { d: "M30 42V22.549a1 1 0 0 1 .463-.844l10.074-6.41A1 1 0 0 0 41 14.45V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6.451a1 1 0 0 0 .463.844l10.074 6.41a1 1 0 0 1 .463.844V37" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.sizeStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin
  }, _hoisted_3$3, 14, _hoisted_1$4);
}
var _IconFilter = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render]]);
const IconFilter = Object.assign(_IconFilter, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFilter.name, _IconFilter);
  }
});
const useColumnSorter = ({
  column,
  tableCtx
}) => {
  const sortOrder = computed(() => {
    var _a;
    if (column.value.dataIndex && column.value.dataIndex === ((_a = tableCtx.sorter) == null ? void 0 : _a.field)) {
      return tableCtx.sorter.direction;
    }
    return void 0;
  });
  const sortDirections = computed(() => {
    var _a, _b, _c;
    return (_c = (_b = (_a = column.value) == null ? void 0 : _a.sortable) == null ? void 0 : _b.sortDirections) != null ? _c : [];
  });
  const hasSorter = computed(() => sortDirections.value.length > 0);
  const hasAscendBtn = computed(() => sortDirections.value.includes("ascend"));
  const hasDescendBtn = computed(() => sortDirections.value.includes("descend"));
  const nextSortOrder = computed(() => {
    var _a, _b;
    if (!sortOrder.value) {
      return (_a = sortDirections.value[0]) != null ? _a : "";
    }
    if (sortOrder.value === sortDirections.value[0]) {
      return (_b = sortDirections.value[1]) != null ? _b : "";
    }
    return "";
  });
  const handleClickSorter = (ev) => {
    var _a;
    if (column.value.dataIndex) {
      (_a = tableCtx.onSorterChange) == null ? void 0 : _a.call(tableCtx, column.value.dataIndex, nextSortOrder.value, ev);
    }
  };
  return {
    sortOrder,
    hasSorter,
    hasAscendBtn,
    hasDescendBtn,
    nextSortOrder,
    handleClickSorter
  };
};
const useColumnFilter = ({
  column,
  tableCtx
}) => {
  const filterValue = computed(() => {
    var _a;
    if (column.value.dataIndex && ((_a = tableCtx.filters) == null ? void 0 : _a[column.value.dataIndex])) {
      return tableCtx.filters[column.value.dataIndex];
    }
    return [];
  });
  const filterPopupVisible = ref(false);
  const isFilterActive = computed(() => filterValue.value.length > 0);
  const isMultipleFilter = computed(() => {
    var _a;
    return Boolean((_a = column.value.filterable) == null ? void 0 : _a.multiple);
  });
  const columnFilterValue = ref(filterValue.value);
  watch(filterValue, (value) => {
    if (isArray(value) && String(value) !== String(columnFilterValue.value)) {
      columnFilterValue.value = value;
    }
  });
  const handleFilterPopupVisibleChange = (value) => {
    filterPopupVisible.value = value;
  };
  const setFilterValue = (filterValue2) => {
    columnFilterValue.value = filterValue2;
  };
  const handleCheckboxFilterChange = (values) => {
    setFilterValue(values);
  };
  const handleRadioFilterChange = (value) => {
    setFilterValue([value]);
  };
  const handleFilterConfirm = (ev) => {
    var _a;
    if (column.value.dataIndex) {
      (_a = tableCtx.onFilterChange) == null ? void 0 : _a.call(tableCtx, column.value.dataIndex, columnFilterValue.value, ev);
    }
    handleFilterPopupVisibleChange(false);
  };
  const handleFilterReset = (ev) => {
    var _a;
    setFilterValue([]);
    if (column.value.dataIndex) {
      (_a = tableCtx.onFilterChange) == null ? void 0 : _a.call(tableCtx, column.value.dataIndex, columnFilterValue.value, ev);
    }
    handleFilterPopupVisibleChange(false);
  };
  return {
    filterPopupVisible,
    isFilterActive,
    isMultipleFilter,
    columnFilterValue,
    handleFilterPopupVisibleChange,
    setFilterValue,
    handleCheckboxFilterChange,
    handleRadioFilterChange,
    handleFilterConfirm,
    handleFilterReset
  };
};
const tableInjectionKey = Symbol("ArcoTable");
const tableColumnInjectionKey = Symbol("ArcoTableColumn");
function _isSlot$3(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var AutoTooltip = defineComponent({
  name: "AutoTooltip",
  inheritAttrs: false,
  props: {
    tooltipProps: {
      type: Object
    }
  },
  setup(props, {
    attrs,
    slots
  }) {
    const prefix = getPrefixCls("auto-tooltip");
    const containerRef = ref();
    const contentRef = ref();
    const text = ref("");
    const showTooltip = ref(false);
    const calTooltip = () => {
      if (containerRef.value && contentRef.value) {
        const _show = contentRef.value.offsetWidth > containerRef.value.offsetWidth;
        if (_show !== showTooltip.value) {
          showTooltip.value = _show;
        }
      }
    };
    const getText = () => {
      var _a;
      if (((_a = contentRef.value) == null ? void 0 : _a.textContent) && contentRef.value.textContent !== text.value) {
        text.value = contentRef.value.textContent;
      }
    };
    const onResize = () => {
      getText();
      calTooltip();
    };
    onMounted(() => {
      getText();
      calTooltip();
    });
    const renderContent = () => {
      return createVNode("span", mergeProps({
        "ref": containerRef,
        "class": prefix
      }, attrs), [createVNode(ResizeObserver, {
        "onResize": onResize
      }, {
        default: () => {
          var _a;
          return [createVNode("span", {
            "ref": contentRef,
            "class": `${prefix}-content`
          }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      })]);
    };
    return () => {
      let _slot2;
      if (showTooltip.value) {
        let _slot;
        return createVNode(Tooltip, mergeProps({
          "content": text.value,
          "onResize": onResize
        }, props.tooltipProps), _isSlot$3(_slot = renderContent()) ? _slot : {
          default: () => [_slot]
        });
      }
      return createVNode(ResizeObserver, {
        "onResize": onResize
      }, _isSlot$3(_slot2 = renderContent()) ? _slot2 : {
        default: () => [_slot2]
      });
    };
  }
});
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Th = defineComponent({
  name: "Th",
  props: {
    column: {
      type: Object,
      default: () => ({})
    },
    operations: {
      type: Array,
      default: () => []
    },
    dataColumns: {
      type: Array,
      default: () => []
    },
    resizable: Boolean
  },
  setup(props, {
    slots
  }) {
    const {
      column
    } = toRefs(props);
    const prefixCls = getPrefixCls("table");
    const {
      t
    } = useI18n();
    const tableCtx = inject(tableInjectionKey, {});
    const resizing = computed(() => {
      var _a;
      return ((_a = props.column) == null ? void 0 : _a.dataIndex) && tableCtx.resizingColumn === props.column.dataIndex;
    });
    const tooltipProps = computed(() => {
      var _a;
      if (isObject((_a = props.column) == null ? void 0 : _a.tooltip)) {
        return props.column.tooltip;
      }
      return void 0;
    });
    const filterIconAlignLeft = computed(() => {
      var _a;
      if (((_a = props.column) == null ? void 0 : _a.filterable) && isBoolean(props.column.filterable.alignLeft)) {
        return props.column.filterable.alignLeft;
      }
      return tableCtx.filterIconAlignLeft;
    });
    const {
      sortOrder,
      hasSorter,
      hasAscendBtn,
      hasDescendBtn,
      nextSortOrder,
      handleClickSorter
    } = useColumnSorter({
      column,
      tableCtx
    });
    const {
      filterPopupVisible,
      isFilterActive,
      isMultipleFilter,
      columnFilterValue,
      handleFilterPopupVisibleChange,
      setFilterValue,
      handleCheckboxFilterChange,
      handleRadioFilterChange,
      handleFilterConfirm,
      handleFilterReset
    } = useColumnFilter({
      column,
      tableCtx
    });
    const renderFilterContent = () => {
      var _a, _b, _c, _d, _e;
      let _slot, _slot2;
      const {
        filterable
      } = props.column;
      if ((_a = props.column.slots) == null ? void 0 : _a["filter-content"]) {
        return (_b = props.column.slots) == null ? void 0 : _b["filter-content"]({
          filterValue: columnFilterValue.value,
          setFilterValue,
          handleFilterConfirm,
          handleFilterReset
        });
      }
      if (filterable == null ? void 0 : filterable.slotName) {
        return (_d = (_c = tableCtx == null ? void 0 : tableCtx.slots) == null ? void 0 : _c[filterable == null ? void 0 : filterable.slotName]) == null ? void 0 : _d.call(_c, {
          filterValue: columnFilterValue.value,
          setFilterValue,
          handleFilterConfirm,
          handleFilterReset
        });
      }
      if (filterable == null ? void 0 : filterable.renderContent) {
        return filterable.renderContent({
          filterValue: columnFilterValue.value,
          setFilterValue,
          handleFilterConfirm,
          handleFilterReset
        });
      }
      return createVNode("div", {
        "class": `${prefixCls}-filters-content`
      }, [createVNode("ul", {
        "class": `${prefixCls}-filters-list`
      }, [(_e = filterable == null ? void 0 : filterable.filters) == null ? void 0 : _e.map((item, index2) => {
        var _a2;
        return createVNode("li", {
          "class": `${prefixCls}-filters-item`,
          "key": index2
        }, [isMultipleFilter.value ? createVNode(Checkbox, {
          "value": item.value,
          "modelValue": columnFilterValue.value,
          "uninjectGroupContext": true,
          "onChange": handleCheckboxFilterChange
        }, {
          default: () => [item.text]
        }) : createVNode(Radio, {
          "value": item.value,
          "modelValue": (_a2 = columnFilterValue.value[0]) != null ? _a2 : "",
          "uninjectGroupContext": true,
          "onChange": handleRadioFilterChange
        }, {
          default: () => [item.text]
        })]);
      })]), createVNode("div", {
        "class": `${prefixCls}-filters-bottom`
      }, [createVNode(Button, {
        "size": "mini",
        "onClick": handleFilterReset
      }, _isSlot$2(_slot = t("table.resetText")) ? _slot : {
        default: () => [_slot]
      }), createVNode(Button, {
        "type": "primary",
        "size": "mini",
        "onClick": handleFilterConfirm
      }, _isSlot$2(_slot2 = t("table.okText")) ? _slot2 : {
        default: () => [_slot2]
      })])]);
    };
    const renderFilter = () => {
      const {
        filterable
      } = props.column;
      if (!filterable) {
        return null;
      }
      return createVNode(Trigger, mergeProps({
        "popupVisible": filterPopupVisible.value,
        "trigger": "click",
        "autoFitPosition": true,
        "popupOffset": filterIconAlignLeft.value ? 4 : 0,
        "onPopupVisibleChange": handleFilterPopupVisibleChange
      }, filterable.triggerProps), {
        default: () => [createVNode(IconHover, {
          "class": [`${prefixCls}-filters`, {
            [`${prefixCls}-filters-active`]: isFilterActive.value,
            [`${prefixCls}-filters-open`]: filterPopupVisible.value,
            [`${prefixCls}-filters-align-left`]: filterIconAlignLeft.value
          }],
          "disabled": !filterIconAlignLeft.value,
          "onClick": (ev) => ev.stopPropagation()
        }, {
          default: () => {
            var _a, _b, _c, _d, _e;
            return [(_e = (_d = (_b = (_a = props.column.slots) == null ? void 0 : _a["filter-icon"]) == null ? void 0 : _b.call(_a)) != null ? _d : (_c = filterable.icon) == null ? void 0 : _c.call(filterable)) != null ? _e : createVNode(IconFilter, null, null)];
          }
        })],
        content: renderFilterContent
      });
    };
    const cellCls = computed(() => {
      var _a, _b;
      const cls2 = [`${prefixCls}-cell`, {
        [`${prefixCls}-cell-text-ellipsis`]: ((_a = props.column) == null ? void 0 : _a.ellipsis) && !((_b = props.column) == null ? void 0 : _b.tooltip)
      }];
      if (hasSorter.value) {
        cls2.push(`${prefixCls}-cell-with-sorter`, {
          [`${prefixCls}-cell-next-ascend`]: nextSortOrder.value === "ascend",
          [`${prefixCls}-cell-next-descend`]: nextSortOrder.value === "descend"
        });
      }
      if (filterIconAlignLeft.value) {
        cls2.push(`${prefixCls}-cell-with-filter`);
      }
      return cls2;
    });
    const renderTitle = () => {
      var _a, _b, _c, _d, _e, _f;
      if (slots.default) {
        return slots.default();
      }
      if (((_a = props.column) == null ? void 0 : _a.titleSlotName) && ((_b = tableCtx.slots) == null ? void 0 : _b[props.column.titleSlotName])) {
        return (_d = (_c = tableCtx.slots)[props.column.titleSlotName]) == null ? void 0 : _d.call(_c);
      }
      if ((_f = (_e = props.column) == null ? void 0 : _e.slots) == null ? void 0 : _f.title) {
        return props.column.slots.title();
      }
      if (isFunction(props.column.title)) {
        return props.column.title();
      }
      return props.column.title;
    };
    const renderCell = () => {
      var _a, _b, _c;
      let _slot3;
      return createVNode("span", {
        "class": cellCls.value,
        "style": (_a = props.column) == null ? void 0 : _a.cellStyle,
        "onClick": hasSorter.value ? handleClickSorter : void 0
      }, [((_b = props.column) == null ? void 0 : _b.ellipsis) && ((_c = props.column) == null ? void 0 : _c.tooltip) ? createVNode(AutoTooltip, {
        "class": `${prefixCls}-th-title`,
        "tooltipProps": tooltipProps.value
      }, _isSlot$2(_slot3 = renderTitle()) ? _slot3 : {
        default: () => [_slot3]
      }) : createVNode("span", {
        "class": `${prefixCls}-th-title`
      }, [renderTitle()]), hasSorter.value && createVNode("span", {
        "class": `${prefixCls}-sorter`
      }, [hasAscendBtn.value && createVNode("div", {
        "class": [`${prefixCls}-sorter-icon`, {
          [`${prefixCls}-sorter-icon-active`]: sortOrder.value === "ascend"
        }]
      }, [createVNode(IconCaretUp, null, null)]), hasDescendBtn.value && createVNode("div", {
        "class": [`${prefixCls}-sorter-icon`, {
          [`${prefixCls}-sorter-icon-active`]: sortOrder.value === "descend"
        }]
      }, [createVNode(IconCaretDown, null, null)])]), filterIconAlignLeft.value && renderFilter()]);
    };
    const style = computed(() => getStyle(props.column, {
      dataColumns: props.dataColumns,
      operations: props.operations
    }));
    const cls = computed(() => {
      var _a, _b;
      return [`${prefixCls}-th`, `${prefixCls}-th-align-${(_b = (_a = props.column) == null ? void 0 : _a.align) != null ? _b : "left"}`, {
        [`${prefixCls}-col-sorted`]: Boolean(sortOrder.value),
        [`${prefixCls}-th-resizing`]: resizing.value
      }, ...getFixedCls(prefixCls, props.column)];
    });
    const handleMouseDown = (ev) => {
      var _a, _b, _c;
      if ((_a = props.column) == null ? void 0 : _a.dataIndex) {
        (_c = tableCtx.onThMouseDown) == null ? void 0 : _c.call(tableCtx, (_b = props.column) == null ? void 0 : _b.dataIndex, ev);
      }
    };
    return () => {
      var _a, _b, _c, _d;
      const colSpan = (_a = props.column.colSpan) != null ? _a : 1;
      const rowSpan = (_b = props.column.rowSpan) != null ? _b : 1;
      return createVNode((_d = (_c = slots.th) == null ? void 0 : _c.call(slots, {
        column: props.column
      })[0]) != null ? _d : "th", {
        class: cls.value,
        style: style.value,
        colspan: colSpan > 1 ? colSpan : void 0,
        rowspan: rowSpan > 1 ? rowSpan : void 0
      }, [renderCell(), !filterIconAlignLeft.value && renderFilter(), props.resizable && createVNode("span", {
        "class": `${prefixCls}-column-handle`,
        "onMousedown": handleMouseDown
      }, null)]);
    };
  }
});
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Td = defineComponent({
  name: "Td",
  props: {
    rowIndex: Number,
    record: {
      type: Object,
      default: () => ({})
    },
    column: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: "normal"
    },
    operations: {
      type: Array,
      default: () => []
    },
    dataColumns: {
      type: Array,
      default: () => []
    },
    colSpan: {
      type: Number,
      default: 1
    },
    rowSpan: {
      type: Number,
      default: 1
    },
    isFixedExpand: {
      type: Boolean,
      default: false
    },
    containerWidth: {
      type: Number
    },
    showExpandBtn: {
      type: Boolean,
      default: false
    },
    indentSize: {
      type: Number,
      default: 0
    },
    renderExpandBtn: {
      type: Function
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("table");
    const style = computed(() => getStyle(props.column, {
      dataColumns: props.dataColumns,
      operations: props.operations
    }));
    const tooltipProps = computed(() => {
      var _a;
      if (isObject((_a = props.column) == null ? void 0 : _a.tooltip)) {
        return props.column.tooltip;
      }
      return void 0;
    });
    const isSorted = computed(() => {
      var _a, _b;
      return ((_a = props.column) == null ? void 0 : _a.dataIndex) && ((_b = tableCtx.sorter) == null ? void 0 : _b.field) === props.column.dataIndex;
    });
    const resizing = computed(() => {
      var _a;
      return ((_a = props.column) == null ? void 0 : _a.dataIndex) && tableCtx.resizingColumn === props.column.dataIndex;
    });
    const cls = computed(() => {
      var _a, _b;
      return [`${prefixCls}-td`, `${prefixCls}-td-align-${(_b = (_a = props.column) == null ? void 0 : _a.align) != null ? _b : "left"}`, {
        [`${prefixCls}-col-sorted`]: isSorted.value,
        [`${prefixCls}-td-resizing`]: resizing.value
      }, ...getFixedCls(prefixCls, props.column)];
    });
    const cellStyle = computed(() => {
      var _a, _b;
      if (props.isFixedExpand && props.containerWidth) {
        return __spreadValues$1({
          width: `${props.containerWidth}px`
        }, (_a = props.column) == null ? void 0 : _a.cellStyle);
      }
      return (_b = props.column) == null ? void 0 : _b.cellStyle;
    });
    const tableCtx = inject(tableInjectionKey, {});
    const renderContent = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (slots.default) {
        return slots.default();
      }
      const data = {
        record: (_a = props.record) == null ? void 0 : _a.raw,
        column: props.column,
        rowIndex: (_b = props.rowIndex) != null ? _b : -1
      };
      if (slots.cell) {
        return slots.cell(data);
      }
      if ((_c = props.column.slots) == null ? void 0 : _c.cell) {
        return props.column.slots.cell(data);
      }
      if (props.column.render) {
        return props.column.render(data);
      }
      if (props.column.slotName && ((_d = tableCtx.slots) == null ? void 0 : _d[props.column.slotName])) {
        return (_f = (_e = tableCtx.slots)[props.column.slotName]) == null ? void 0 : _f.call(_e, data);
      }
      return String((_h = getValueByPath((_g = props.record) == null ? void 0 : _g.raw, props.column.dataIndex)) != null ? _h : "");
    };
    const isLoading = ref(false);
    const handleClick = (ev) => {
      var _a, _b;
      if (isFunction(tableCtx.loadMore) && !((_a = props.record) == null ? void 0 : _a.isLeaf) && !((_b = props.record) == null ? void 0 : _b.children)) {
        isLoading.value = true;
        new Promise((resolve) => {
          var _a2;
          (_a2 = tableCtx.loadMore) == null ? void 0 : _a2.call(tableCtx, props.record.raw, resolve);
        }).then((children) => {
          var _a2;
          (_a2 = tableCtx.addLazyLoadData) == null ? void 0 : _a2.call(tableCtx, children, props.record);
          isLoading.value = false;
        });
      }
      ev.stopPropagation();
    };
    const renderCell = () => {
      var _a, _b, _c, _d, _e;
      let _slot;
      return createVNode("span", {
        "class": [`${prefixCls}-cell`, {
          [`${prefixCls}-cell-fixed-expand`]: props.isFixedExpand,
          [`${prefixCls}-cell-expand-icon`]: props.showExpandBtn,
          [`${prefixCls}-cell-text-ellipsis`]: ((_a = props.column) == null ? void 0 : _a.ellipsis) && !((_b = props.column) == null ? void 0 : _b.tooltip)
        }],
        "style": cellStyle.value
      }, [props.indentSize > 0 && createVNode("span", {
        "style": {
          paddingLeft: `${props.indentSize}px`
        }
      }, null), props.showExpandBtn && createVNode("span", {
        "class": `${prefixCls}-cell-inline-icon`,
        "onClick": handleClick
      }, [isLoading.value ? createVNode(IconLoading, null, null) : (_c = props.renderExpandBtn) == null ? void 0 : _c.call(props, props.record, false)]), ((_d = props.column) == null ? void 0 : _d.ellipsis) && ((_e = props.column) == null ? void 0 : _e.tooltip) ? createVNode(AutoTooltip, {
        "tooltipProps": tooltipProps.value
      }, _isSlot$1(_slot = renderContent()) ? _slot : {
        default: () => [_slot]
      }) : renderContent()]);
    };
    return () => {
      var _a, _b, _c, _d;
      return createVNode((_d = (_c = slots.td) == null ? void 0 : _c.call(slots, {
        record: (_a = props.record) == null ? void 0 : _a.raw,
        column: props.column,
        rowIndex: (_b = props.rowIndex) != null ? _b : -1
      })[0]) != null ? _d : "td", {
        class: cls.value,
        style: style.value,
        rowspan: props.rowSpan > 1 ? props.rowSpan : void 0,
        colspan: props.colSpan > 1 ? props.colSpan : void 0
      }, [renderCell()]);
    };
  }
});
var OperationTh = defineComponent({
  name: "OperationTh",
  props: {
    operationColumn: {
      type: Object,
      required: true
    },
    operations: {
      type: Array,
      required: true
    },
    rowSpan: {
      type: Number,
      default: 1
    },
    selectAll: {
      type: Boolean,
      default: false
    },
    selectedNumber: {
      type: Number,
      default: 0
    },
    totalEnabledNumber: {
      type: Number,
      default: 0
    }
  },
  emits: ["selectAll"],
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("table");
    const checked = computed(() => props.totalEnabledNumber > 0 && props.selectedNumber >= props.totalEnabledNumber);
    const indeterminate = computed(() => props.selectedNumber > 0 && props.selectedNumber < props.totalEnabledNumber);
    const renderContent = () => {
      if (props.selectAll) {
        return createVNode(Checkbox, {
          "modelValue": checked.value,
          "indeterminate": indeterminate.value,
          "uninjectGroupContext": true,
          "onChange": (value) => emit("selectAll", value)
        }, {
          default: isFunction(props.operationColumn.title) ? props.operationColumn.title() : props.operationColumn.title
        });
      }
      if (props.operationColumn.title) {
        return isFunction(props.operationColumn.title) ? props.operationColumn.title() : props.operationColumn.title;
      }
      return null;
    };
    const style = computed(() => getOperationStyle(props.operationColumn, props.operations));
    const cls = computed(() => [`${prefixCls}-th`, `${prefixCls}-operation`, {
      [`${prefixCls}-checkbox`]: props.selectAll
    }, ...getOperationFixedCls(prefixCls, props.operationColumn)]);
    return () => createVNode("th", {
      "class": cls.value,
      "style": style.value,
      "rowspan": props.rowSpan > 1 ? props.rowSpan : void 0
    }, [createVNode("span", {
      "class": `${prefixCls}-cell`
    }, [renderContent()])]);
  }
});
var OperationTd = defineComponent({
  name: "OperationTd",
  components: {
    Checkbox,
    Radio,
    IconPlus,
    IconMinus
  },
  props: {
    operationColumn: {
      type: Object,
      required: true
    },
    operations: {
      type: Array,
      required: true
    },
    record: {
      type: Object,
      required: true
    },
    rowKey: {
      type: String,
      default: "key"
    },
    hasExpand: {
      type: Boolean,
      default: false
    },
    selectedRowKeys: {
      type: Array
    },
    renderExpandBtn: {
      type: Function
    },
    colSpan: {
      type: Number,
      default: 1
    },
    rowSpan: {
      type: Number,
      default: 1
    },
    summary: {
      type: Boolean,
      default: false
    }
  },
  emits: ["select", "expand"],
  setup(props, {
    emit,
    slots
  }) {
    const prefixCls = getPrefixCls("table");
    const style = computed(() => getOperationStyle(props.operationColumn, props.operations));
    const cls = computed(() => [`${prefixCls}-td`, `${prefixCls}-operation`, {
      [`${prefixCls}-checkbox`]: props.operationColumn.name === "selection-checkbox",
      [`${prefixCls}-radio`]: props.operationColumn.name === "selection-radio",
      [`${prefixCls}-expand`]: props.operationColumn.name === "expand",
      [`${prefixCls}-drag-handle`]: props.operationColumn.name === "drag-handle"
    }, ...getOperationFixedCls(prefixCls, props.operationColumn)]);
    const renderContent = () => {
      var _a, _b, _c, _d, _e;
      if (props.summary) {
        return null;
      }
      if (props.operationColumn.render) {
        return props.operationColumn.render(props.record.raw);
      }
      if (props.operationColumn.name === "selection-checkbox") {
        const value = props.record.key;
        return createVNode(Checkbox, {
          "value": value,
          "modelValue": (_a = props.selectedRowKeys) != null ? _a : [],
          "disabled": Boolean(props.record.disabled),
          "uninjectGroupContext": true,
          "onChange": (values) => emit("select", values, value),
          "onClick": (ev) => ev.stopPropagation()
        }, null);
      }
      if (props.operationColumn.name === "selection-radio") {
        const value = props.record.key;
        return createVNode(Radio, {
          "value": value,
          "modelValue": (_c = (_b = props.selectedRowKeys) == null ? void 0 : _b[0]) != null ? _c : "",
          "disabled": Boolean(props.record.disabled),
          "uninjectGroupContext": true,
          "onChange": (value2) => emit("select", [value2], value2),
          "onClick": (ev) => ev.stopPropagation()
        }, null);
      }
      if (props.operationColumn.name === "expand") {
        if (props.hasExpand && props.renderExpandBtn) {
          return props.renderExpandBtn(props.record);
        }
        return null;
      }
      if (props.operationColumn.name === "drag-handle") {
        return (_e = (_d = slots["drag-handle-icon"]) == null ? void 0 : _d.call(slots)) != null ? _e : createVNode(IconDragDotVertical, null, null);
      }
      return null;
    };
    return () => createVNode("td", {
      "class": cls.value,
      "style": style.value,
      "rowspan": props.rowSpan > 1 ? props.rowSpan : void 0,
      "colspan": props.colSpan > 1 ? props.colSpan : void 0
    }, [createVNode("span", {
      "class": `${prefixCls}-cell`
    }, [renderContent()])]);
  }
});
const useDrag = () => {
  const dragState = reactive({
    dragging: false,
    sourceKey: "",
    sourcePath: [],
    targetPath: [],
    data: {}
  });
  const clearDragState = () => {
    dragState.dragging = false;
    dragState.sourceKey = "";
    dragState.sourcePath = [];
    dragState.targetPath = [];
    dragState.data = {};
  };
  const handleDragStart = (ev, targetKey, targetPath, data) => {
    if (ev.dataTransfer) {
      ev.dataTransfer.effectAllowed = "move";
      if (ev.target && ev.target.tagName === "TD") {
        const { parentElement } = ev.target;
        if (parentElement && parentElement.tagName === "TR") {
          ev.dataTransfer.setDragImage(parentElement, 0, 0);
        }
      }
    }
    dragState.dragging = true;
    dragState.sourceKey = targetKey;
    dragState.sourcePath = targetPath;
    dragState.data = data;
  };
  const handleDragEnter = (ev, sourcePath) => {
    if (ev.dataTransfer) {
      ev.dataTransfer.dropEffect = "move";
    }
    dragState.targetPath = sourcePath;
    ev.preventDefault();
  };
  const handleDragLeave = (ev) => {
  };
  const handleDragover = (ev) => {
    if (ev.dataTransfer) {
      ev.dataTransfer.dropEffect = "move";
    }
    ev.preventDefault();
  };
  const handleDragEnd = (ev) => {
    var _a;
    if (((_a = ev.dataTransfer) == null ? void 0 : _a.dropEffect) === "none") {
      clearDragState();
    }
  };
  const handleDrop = (ev) => {
    clearDragState();
    ev.preventDefault();
  };
  return {
    dragState,
    handleDragStart,
    handleDragEnter,
    handleDragLeave,
    handleDragover,
    handleDragEnd,
    handleDrop
  };
};
const useColumnResize = (thRefs) => {
  const resizingColumn = ref("");
  const columnWidth = reactive({});
  const handleThMouseDown = (dataIndex, ev) => {
    ev.preventDefault();
    resizingColumn.value = dataIndex;
    on(window, "mousemove", handleThMouseMoving);
    on(window, "mouseup", handleThMouseUp);
    on(window, "contextmenu", handleThMouseUp);
  };
  const handleThMouseUp = () => {
    resizingColumn.value = "";
    off(window, "mousemove", handleThMouseMoving);
    off(window, "mouseup", handleThMouseUp);
    off(window, "contextmenu", handleThMouseUp);
  };
  const handleThMouseMoving = (ev) => {
    const element = thRefs.value[resizingColumn.value];
    if (element) {
      const { clientX } = ev;
      const { x } = element.getBoundingClientRect();
      let width = Math.ceil(clientX - x);
      if (width < 40) {
        width = 40;
      }
      columnWidth[resizingColumn.value] = width;
    }
  };
  return {
    resizingColumn,
    columnWidth,
    handleThMouseDown,
    handleThMouseUp
  };
};
const useFilter = ({ columns }) => {
  const _filters = ref(getDefaultFilters(columns.value));
  const computedFilters = computed(() => {
    var _a, _b;
    const filters = {};
    for (const item of columns.value) {
      if (item.dataIndex) {
        const value = (_b = (_a = item.filterable) == null ? void 0 : _a.filteredValue) != null ? _b : _filters.value[item.dataIndex];
        if (value) {
          filters[item.dataIndex] = value;
        }
      }
    }
    return filters;
  });
  return {
    _filters,
    computedFilters
  };
};
const getDefaultFilters = (columns) => {
  var _a;
  const filters = {};
  for (const item of columns) {
    if (item.dataIndex && ((_a = item.filterable) == null ? void 0 : _a.defaultFilteredValue)) {
      filters[item.dataIndex] = item.filterable.defaultFilteredValue;
    }
  }
  return filters;
};
const useSorter = ({ columns }) => {
  const _sorter = ref(getDefaultSorter(columns.value));
  const computedSorter = computed(() => {
    var _a;
    for (const item of columns.value) {
      if (item.dataIndex && item.sortable) {
        const direction = isString(item.sortable.sortOrder) ? item.sortable.sortOrder : ((_a = _sorter.value) == null ? void 0 : _a.field) === item.dataIndex ? _sorter.value.direction : "";
        if (direction) {
          return {
            field: item.dataIndex,
            direction
          };
        }
      }
    }
    return void 0;
  });
  return {
    _sorter,
    computedSorter
  };
};
const getDefaultSorter = (columns) => {
  var _a;
  for (const item of columns) {
    if (item.dataIndex && ((_a = item.sortable) == null ? void 0 : _a.defaultSortOrder)) {
      return {
        field: item.dataIndex,
        direction: item.sortable.defaultSortOrder
      };
    }
  }
  return void 0;
};
const useSpan = ({
  spanMethod,
  data,
  columns
}) => {
  const tableSpan = computed(() => {
    const span = {};
    if (spanMethod.value) {
      data.value.forEach((record, rowIndex) => {
        columns.value.forEach((column, columnIndex) => {
          var _a, _b;
          const { rowspan = 1, colspan = 1 } = (_b = (_a = spanMethod.value) == null ? void 0 : _a.call(spanMethod, {
            record: record.raw,
            column,
            rowIndex,
            columnIndex
          })) != null ? _b : {};
          if (rowspan > 1 || colspan > 1) {
            span[`${rowIndex}-${columnIndex}`] = [rowspan, colspan];
          }
        });
      });
    }
    return span;
  });
  const removedCells = computed(() => {
    const data2 = [];
    for (const indexKey of Object.keys(tableSpan.value)) {
      const indexArray = indexKey.split("-").map((item) => Number(item));
      const span = tableSpan.value[indexKey];
      for (let i = 1; i < span[0]; i++) {
        data2.push(`${indexArray[0] + i}-${indexArray[1]}`);
        for (let j = 1; j < span[1]; j++) {
          data2.push(`${indexArray[0] + i}-${indexArray[1] + j}`);
        }
      }
      for (let i = 1; i < span[1]; i++) {
        data2.push(`${indexArray[0]}-${indexArray[1] + i}`);
      }
    }
    return data2;
  });
  return {
    tableSpan,
    removedCells
  };
};
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const DEFAULT_BORDERED = {
  wrapper: true,
  cell: false,
  headerCell: false,
  bodyCell: false
};
var _Table = defineComponent({
  name: "Table",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    bordered: {
      type: [Boolean, Object],
      default: true
    },
    hoverable: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => {
        var _a, _b;
        return (_b = (_a = inject(configProviderInjectionKey, void 0)) == null ? void 0 : _a.size) != null ? _b : "large";
      }
    },
    tableLayoutFixed: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    rowSelection: {
      type: Object
    },
    expandable: {
      type: Object
    },
    scroll: {
      type: Object
    },
    pagination: {
      type: [Boolean, Object],
      default: true
    },
    pagePosition: {
      type: String,
      default: "br"
    },
    indentSize: {
      type: Number,
      default: 16
    },
    rowKey: {
      type: String,
      default: "key"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    virtualListProps: {
      type: Object
    },
    spanMethod: {
      type: Function
    },
    spanAll: {
      type: Boolean,
      default: false
    },
    components: {
      type: Object
    },
    loadMore: {
      type: Function
    },
    filterIconAlignLeft: {
      type: Boolean,
      default: false
    },
    hideExpandButtonOnEmpty: {
      type: Boolean,
      default: false
    },
    rowClass: {
      type: [String, Array, Object]
    },
    draggable: {
      type: Object
    },
    rowNumber: {
      type: [Boolean, Object]
    },
    columnResizable: {
      type: Boolean
    },
    summary: {
      type: [Boolean, Function]
    },
    summaryText: {
      type: String,
      default: "Summary"
    },
    summarySpanMethod: {
      type: Function
    },
    selectedKeys: {
      type: Array
    },
    defaultSelectedKeys: {
      type: Array
    },
    expandedKeys: {
      type: Array
    },
    defaultExpandedKeys: {
      type: Array
    },
    defaultExpandAllRows: {
      type: Boolean,
      default: false
    },
    onExpand: {
      type: [Function, Array]
    },
    onExpandedChange: {
      type: [Function, Array]
    },
    onSelect: {
      type: [Function, Array]
    },
    onSelectAll: {
      type: [Function, Array]
    },
    onSelectionChange: {
      type: [Function, Array]
    },
    onSorterChange: {
      type: [Function, Array]
    },
    onFilterChange: {
      type: [Function, Array]
    },
    onPageChange: {
      type: [Function, Array]
    },
    onPageSizeChange: {
      type: [Function, Array]
    },
    onCellClick: {
      type: [Function, Array]
    },
    onRowClick: {
      type: [Function, Array]
    },
    onHeaderClick: {
      type: [Function, Array]
    }
  },
  emits: [
    "update:selectedKeys",
    "update:expandedKeys",
    "expand",
    "expandedChange",
    "select",
    "selectAll",
    "selectionChange",
    "sorterChange",
    "filterChange",
    "pageChange",
    "pageSizeChange",
    "change",
    "cellClick",
    "rowClick",
    "headerClick"
  ],
  setup(props, {
    emit,
    slots
  }) {
    const {
      columns,
      rowKey,
      rowSelection,
      expandable,
      loadMore,
      filterIconAlignLeft,
      selectedKeys,
      defaultSelectedKeys,
      expandedKeys,
      defaultExpandedKeys,
      defaultExpandAllRows,
      spanMethod,
      summarySpanMethod
    } = toRefs(props);
    const prefixCls = getPrefixCls("table");
    const bordered = computed(() => {
      if (isObject(props.bordered)) {
        return __spreadValues2(__spreadValues2({}, DEFAULT_BORDERED), props.bordered);
      }
      return __spreadProps2(__spreadValues2({}, DEFAULT_BORDERED), {
        wrapper: props.bordered
      });
    });
    const {
      children,
      components
    } = useChildrenComponents("TableColumn");
    const isScroll = computed(() => {
      var _a, _b, _c, _d;
      const x = Boolean(((_a = props.scroll) == null ? void 0 : _a.x) || ((_b = props.scroll) == null ? void 0 : _b.minWidth));
      const y = Boolean(((_c = props.scroll) == null ? void 0 : _c.y) || ((_d = props.scroll) == null ? void 0 : _d.maxHeight));
      return {
        x,
        y
      };
    });
    const theadRef = ref();
    const tbodyRef = ref();
    const summaryRef = ref();
    const thRefs = ref({});
    const handleBodyScroll = () => {
      if (theadRef.value && tbodyRef.value) {
        theadRef.value.scrollLeft = tbodyRef.value.scrollLeft;
      }
    };
    onMounted(() => {
      watch(isScroll, ({
        y
      }, _, onInvalidate) => {
        onInvalidate(() => {
          if (tbodyRef.value) {
            off(tbodyRef.value, "scroll", handleBodyScroll);
          }
        });
        if (y && tbodyRef.value && theadRef.value) {
          on(tbodyRef.value, "scroll", handleBodyScroll);
        }
      });
    });
    const slotColumnMap = reactive(/* @__PURE__ */ new Map());
    const slotColumns = ref();
    watch([components, slotColumnMap], ([components2, slotColumnMap2]) => {
      if (components2.length > 0) {
        const columns2 = [];
        components2.forEach((id) => {
          const column = slotColumnMap2.get(id);
          if (column)
            columns2.push(column);
        });
        slotColumns.value = columns2;
      } else {
        slotColumns.value = void 0;
      }
    });
    const dataColumnMap = /* @__PURE__ */ new Map();
    const dataColumns = ref([]);
    const groupColumns = ref([]);
    watch([columns, slotColumns], ([columns2, slotColumns2]) => {
      var _a;
      const result = getGroupColumns((_a = slotColumns2 != null ? slotColumns2 : columns2) != null ? _a : [], dataColumnMap);
      dataColumns.value = result.dataColumns;
      groupColumns.value = result.groupColumns;
    }, {
      immediate: true
    });
    const isPaginationTop = computed(() => ["tl", "top", "tr"].includes(props.pagePosition));
    const hasLeftFixedColumn = ref(false);
    const hasRightFixedColumn = ref(false);
    watchEffect(() => {
      var _a, _b, _c;
      let _hasLeftFixedColumn = false;
      let _hasRightFixedColumn = false;
      if (((_a = props.rowSelection) == null ? void 0 : _a.fixed) || ((_b = props.expandable) == null ? void 0 : _b.fixed) || ((_c = props.draggable) == null ? void 0 : _c.fixed)) {
        _hasLeftFixedColumn = true;
      }
      for (const column of dataColumns.value) {
        if (column.fixed === "left") {
          _hasLeftFixedColumn = true;
        } else if (column.fixed === "right") {
          _hasRightFixedColumn = true;
        }
      }
      if (_hasLeftFixedColumn !== hasLeftFixedColumn.value) {
        hasLeftFixedColumn.value = _hasLeftFixedColumn;
      }
      if (_hasRightFixedColumn !== hasRightFixedColumn.value) {
        hasRightFixedColumn.value = _hasRightFixedColumn;
      }
    });
    const hasEllipsis = computed(() => {
      for (const col of dataColumns.value) {
        if (col.ellipsis) {
          return true;
        }
      }
      return false;
    });
    const {
      _filters,
      computedFilters
    } = useFilter({
      columns: dataColumns
    });
    const {
      _sorter,
      computedSorter
    } = useSorter({
      columns: dataColumns
    });
    const handleChange = (type) => {
      const extra = {
        type,
        page: page.value,
        pageSize: pageSize.value,
        sorter: computedSorter.value,
        filters: computedFilters.value,
        dragTarget: type === "drag" ? dragState.data : void 0
      };
      emit("change", flattenRawData.value, extra);
    };
    const handleFilterChange = (dataIndex, filteredValues) => {
      _filters.value = __spreadProps2(__spreadValues2({}, computedFilters.value), {
        [dataIndex]: filteredValues
      });
      emit("filterChange", dataIndex, filteredValues);
      handleChange("filter");
    };
    const handleSorterChange = (dataIndex, direction) => {
      _sorter.value = direction ? {
        field: dataIndex,
        direction
      } : void 0;
      emit("sorterChange", dataIndex, direction);
      handleChange("sorter");
    };
    const disabledKeys = /* @__PURE__ */ new Set();
    const allRowKeys = computed(() => {
      const allRowKeys2 = [];
      disabledKeys.clear();
      const travelData = (data) => {
        if (isArray(data) && data.length > 0) {
          for (const record of data) {
            allRowKeys2.push(record[rowKey.value]);
            if (record.disabled) {
              disabledKeys.add(record[rowKey.value]);
            }
            if (record.children) {
              travelData(record.children);
            }
          }
        }
      };
      travelData(props.data);
      return allRowKeys2;
    });
    const currentAllRowKeys = computed(() => {
      const keys = [];
      const travel = (data) => {
        for (const record of data) {
          keys.push(record.key);
          if (record.children) {
            travel(record.children);
          }
        }
      };
      travel(flattenData.value);
      return keys;
    });
    const currentAllEnabledRowKeys = computed(() => {
      const keys = [];
      const travel = (data) => {
        for (const record of data) {
          if (!record.disabled) {
            keys.push(record.key);
          }
          if (record.children) {
            travel(record.children);
          }
        }
      };
      travel(flattenData.value);
      return keys;
    });
    const {
      isRadio,
      selectedRowKeys,
      currentSelectedRowKeys,
      handleSelect,
      handleSelectAll
    } = useRowSelection({
      selectedKeys,
      defaultSelectedKeys,
      rowSelection,
      currentAllRowKeys,
      currentAllEnabledRowKeys,
      emit
    });
    const {
      expandedRowKeys,
      handleExpand
    } = useExpand({
      expandedKeys,
      defaultExpandedKeys,
      defaultExpandAllRows,
      expandable,
      allRowKeys,
      emit
    });
    const lazyLoadData = reactive({});
    const addLazyLoadData = (children2, record) => {
      if (children2) {
        lazyLoadData[record.key] = children2;
      }
    };
    const isValidRecord = (record) => {
      var _a, _b;
      for (const field of Object.keys(computedFilters.value)) {
        const filteredValues = computedFilters.value[field];
        const column = dataColumnMap.get(field);
        if (column && ((_a = column.filterable) == null ? void 0 : _a.filter) && filteredValues.length > 0) {
          const result = (_b = column.filterable) == null ? void 0 : _b.filter(filteredValues, record.raw);
          if (!result) {
            return result;
          }
        }
      }
      return true;
    };
    const {
      dragState,
      handleDragStart,
      handleDragEnter,
      handleDragLeave,
      handleDragover,
      handleDragEnd,
      handleDrop
    } = useDrag();
    const {
      resizingColumn,
      columnWidth,
      handleThMouseDown
    } = useColumnResize(thRefs);
    const processedData = computed(() => {
      var _a;
      const travel = (data) => {
        const result = [];
        for (const _record of data) {
          const record = {
            raw: _record,
            key: _record[props.rowKey],
            disabled: _record.disabled,
            expand: _record.expand,
            isLeaf: _record.isLeaf
          };
          if (props.loadMore && !_record.isLeaf && !_record.children && lazyLoadData[record.key]) {
            record.children = travel(lazyLoadData[record.key]);
          } else if (_record.children) {
            record.children = travel(_record.children);
          }
          record.hasSubtree = Boolean(record.children ? props.hideExpandButtonOnEmpty ? record.children.length > 0 : true : props.loadMore && !record.isLeaf);
          result.push(record);
        }
        return result;
      };
      return travel((_a = props.data) != null ? _a : []);
    });
    const validData = computed(() => {
      const travel = (data) => data.filter((record) => {
        if (isValidRecord(record)) {
          if (record.children) {
            record.children = travel(record.children);
          }
          return true;
        }
        return false;
      });
      return Object.keys(computedFilters.value).length > 0 ? travel(processedData.value) : processedData.value;
    });
    const sortedData = computed(() => {
      var _a, _b;
      const data = [...validData.value];
      if (data.length > 0) {
        if ((_a = computedSorter.value) == null ? void 0 : _a.field) {
          const column = dataColumnMap.get(computedSorter.value.field);
          if (column && ((_b = column.sortable) == null ? void 0 : _b.sorter) !== true) {
            const {
              field,
              direction
            } = computedSorter.value;
            data.sort((a, b) => {
              var _a2;
              const valueA = a.raw[field];
              const valueB = b.raw[field];
              if (((_a2 = column.sortable) == null ? void 0 : _a2.sorter) && isFunction(column.sortable.sorter)) {
                return column.sortable.sorter(a.raw, b.raw, {
                  dataIndex: field,
                  direction
                });
              }
              const result = valueA > valueB ? 1 : -1;
              return direction === "descend" ? -result : result;
            });
          }
        }
        if (dragState.dragging && dragState.targetPath.length > 0) {
          const target2 = spliceFromPath(data, dragState.sourcePath);
          spliceFromPath(data, dragState.targetPath, target2);
        }
      }
      return data;
    });
    const {
      page,
      pageSize,
      handlePageChange,
      handlePageSizeChange
    } = usePagination(props, emit);
    const flattenData = computed(() => {
      if (props.pagination && sortedData.value.length > pageSize.value) {
        return sortedData.value.slice((page.value - 1) * pageSize.value, page.value * pageSize.value);
      }
      return sortedData.value;
    });
    const flattenRawData = computed(() => flattenData.value.map((item) => item.raw));
    const getSummaryData = () => {
      return dataColumns.value.reduce((per, column, index2) => {
        if (column.dataIndex) {
          if (index2 === 0) {
            per[column.dataIndex] = props.summaryText;
          } else {
            let count = 0;
            let isNotNumber = false;
            flattenData.value.forEach((data) => {
              if (column.dataIndex) {
                if (isNumber(data.raw[column.dataIndex])) {
                  count += data.raw[column.dataIndex];
                } else if (!isUndefined(data.raw[column.dataIndex]) && !isNull(data.raw[column.dataIndex])) {
                  isNotNumber = true;
                }
              }
            });
            per[column.dataIndex] = isNotNumber ? "" : count;
          }
        }
        return per;
      }, {});
    };
    const getTableDataWithRaw = (data) => {
      if (data && data.length > 0) {
        return data.map((raw) => {
          return {
            raw,
            key: raw[props.rowKey]
          };
        });
      }
      return void 0;
    };
    const summaryData = computed(() => {
      if (props.summary) {
        if (isFunction(props.summary)) {
          return getTableDataWithRaw(props.summary({
            columns: dataColumns.value,
            data: flattenRawData.value
          }));
        }
        return getTableDataWithRaw([getSummaryData()]);
      }
      return void 0;
    });
    const containerRef = ref();
    const containerScrollLeft = ref(0);
    const alignLeft = ref(true);
    const alignRight = ref(true);
    const setAlignPosition = () => {
      let _alignLeft = true;
      let _alignRight = true;
      const scrollContainer = isScroll.value.y ? tbodyRef.value : containerRef.value;
      if (scrollContainer) {
        _alignLeft = containerScrollLeft.value === 0;
        _alignRight = containerScrollLeft.value + scrollContainer.offsetWidth >= scrollContainer.scrollWidth;
      }
      if (_alignLeft !== alignLeft.value) {
        alignLeft.value = _alignLeft;
      }
      if (_alignRight !== alignRight.value) {
        alignRight.value = _alignRight;
      }
    };
    const getTableScrollCls = () => {
      if (alignLeft.value && alignRight.value) {
        return `${prefixCls}-scroll-position-both`;
      }
      if (alignLeft.value) {
        return `${prefixCls}-scroll-position-left`;
      }
      if (alignRight.value) {
        return `${prefixCls}-scroll-position-right`;
      }
      return `${prefixCls}-scroll-position-middle`;
    };
    const getTableFixedCls = () => {
      const cls2 = [];
      if (hasLeftFixedColumn.value) {
        cls2.push(`${prefixCls}-has-fixed-col-left`);
      }
      if (hasRightFixedColumn.value) {
        cls2.push(`${prefixCls}-has-fixed-col-right`);
      }
      return cls2;
    };
    const handleScroll = (e) => {
      const target2 = e.target;
      if (target2.scrollLeft !== containerScrollLeft.value) {
        containerScrollLeft.value = target2.scrollLeft;
      }
      if (isScroll.value.y || props.virtualListProps) {
        if (theadRef.value) {
          theadRef.value.scrollLeft = target2.scrollLeft;
        }
        if (summaryRef.value) {
          summaryRef.value.scrollLeft = target2.scrollLeft;
        }
      }
      setAlignPosition();
    };
    const handleRowClick = (record, ev) => {
      emit("rowClick", record.raw, ev);
    };
    const handleCellClick = (record, column, ev) => {
      emit("cellClick", record.raw, column, ev);
    };
    const handleHeaderClick = (column, ev) => {
      emit("headerClick", column, ev);
    };
    const operations = computed(() => {
      var _a, _b;
      const operations2 = [];
      const hasFixedColumn = hasLeftFixedColumn.value || hasRightFixedColumn.value;
      let dragHandle;
      let expand;
      let selection;
      if (((_a = props.draggable) == null ? void 0 : _a.type) === "handle") {
        dragHandle = {
          name: "drag-handle",
          title: props.draggable.title,
          width: props.draggable.width,
          fixed: props.draggable.fixed || hasFixedColumn
        };
        operations2.push(dragHandle);
      }
      if (props.expandable) {
        expand = {
          name: "expand",
          title: props.expandable.title,
          width: props.expandable.width,
          fixed: props.expandable.fixed || hasFixedColumn
        };
        operations2.push(expand);
      }
      if (props.rowSelection) {
        selection = {
          name: props.rowSelection.type === "radio" ? "selection-radio" : "selection-checkbox",
          title: props.rowSelection.title,
          width: props.rowSelection.width,
          fixed: props.rowSelection.fixed || hasFixedColumn
        };
        operations2.push(selection);
      }
      const operationsFn = (_b = props.components) == null ? void 0 : _b.operations;
      return isFunction(operationsFn) ? operationsFn({
        dragHandle,
        expand,
        selection
      }) : operations2;
    });
    const headerStyle = computed(() => {
      var _a, _b, _c, _d;
      if (isScroll.value.x) {
        const style2 = {
          width: isNumber((_a = props.scroll) == null ? void 0 : _a.x) ? `${(_b = props.scroll) == null ? void 0 : _b.x}px` : (_c = props.scroll) == null ? void 0 : _c.x
        };
        if ((_d = props.scroll) == null ? void 0 : _d.minWidth) {
          style2.minWidth = isNumber(props.scroll.minWidth) ? `${props.scroll.minWidth}px` : props.scroll.minWidth;
        }
        return style2;
      }
      return void 0;
    });
    const contentStyle = computed(() => {
      var _a, _b, _c, _d;
      if (isScroll.value.x && flattenData.value.length > 0) {
        const style2 = {
          width: isNumber((_a = props.scroll) == null ? void 0 : _a.x) ? `${(_b = props.scroll) == null ? void 0 : _b.x}px` : (_c = props.scroll) == null ? void 0 : _c.x
        };
        if ((_d = props.scroll) == null ? void 0 : _d.minWidth) {
          style2.minWidth = isNumber(props.scroll.minWidth) ? `${props.scroll.minWidth}px` : props.scroll.minWidth;
        }
        return style2;
      }
      return void 0;
    });
    const addColumn = (id, column) => {
      slotColumnMap.set(id, column);
    };
    const removeColumn = (id) => {
      slotColumnMap.delete(id);
    };
    provide(tableInjectionKey, reactive({
      loadMore,
      addLazyLoadData,
      slots,
      sorter: computedSorter,
      filters: computedFilters,
      filterIconAlignLeft,
      resizingColumn,
      addColumn,
      removeColumn,
      onSorterChange: handleSorterChange,
      onFilterChange: handleFilterChange,
      onThMouseDown: handleThMouseDown
    }));
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${props.size}`, {
      [`${prefixCls}-border`]: bordered.value.wrapper,
      [`${prefixCls}-border-cell`]: bordered.value.cell,
      [`${prefixCls}-border-header-cell`]: !bordered.value.cell && bordered.value.headerCell,
      [`${prefixCls}-border-body-cell`]: !bordered.value.cell && bordered.value.bodyCell,
      [`${prefixCls}-stripe`]: props.stripe,
      [`${prefixCls}-hover`]: props.hoverable,
      [`${prefixCls}-dragging`]: dragState.dragging,
      [`${prefixCls}-type-selection`]: props.rowSelection,
      [`${prefixCls}-empty`]: props.data && flattenData.value.length === 0,
      [`${prefixCls}-layout-fixed`]: props.tableLayoutFixed || isScroll.value.x || isScroll.value.y || hasEllipsis.value
    }]);
    const paginationCls = computed(() => [`${prefixCls}-pagination`, {
      [`${prefixCls}-pagination-left`]: props.pagePosition === "tl" || props.pagePosition === "bl",
      [`${prefixCls}-pagination-center`]: props.pagePosition === "top" || props.pagePosition === "bottom",
      [`${prefixCls}-pagination-right`]: props.pagePosition === "tr" || props.pagePosition === "br",
      [`${prefixCls}-pagination-top`]: isPaginationTop.value
    }]);
    const tableCls = computed(() => {
      const cls2 = getTableFixedCls();
      if (isScroll.value.x) {
        cls2.push(getTableScrollCls());
      }
      if (isScroll.value.y || isVirtualList.value) {
        cls2.push(`${prefixCls}-scroll-y`);
      }
      return cls2;
    });
    const isVirtualList = computed(() => Boolean(props.virtualListProps));
    const thWidth = ref({});
    const getThWidth = () => {
      const width = {};
      for (const key of Object.keys(thRefs.value)) {
        width[key] = thRefs.value[key].offsetWidth;
      }
      thWidth.value = width;
    };
    const hasScrollBar = ref(false);
    const isTbodyHasScrollBar = () => {
      if (tbodyRef.value) {
        return tbodyRef.value.offsetWidth > tbodyRef.value.clientWidth;
      }
      return false;
    };
    const handleTbodyResize = () => {
      const _hasScrollBar = isTbodyHasScrollBar();
      if (hasScrollBar.value !== _hasScrollBar) {
        hasScrollBar.value = _hasScrollBar;
      }
      setAlignPosition();
      getThWidth();
    };
    onMounted(() => {
      hasScrollBar.value = isTbodyHasScrollBar();
      getThWidth();
    });
    const spinProps = computed(() => isObject(props.loading) ? props.loading : {
      loading: props.loading
    });
    const renderEmpty = () => {
      return createVNode(Tr, {
        "isEmptyRow": true
      }, {
        default: () => [createVNode(Td, {
          "colSpan": dataColumns.value.length + operations.value.length
        }, {
          default: () => {
            var _a, _b;
            return [(_b = (_a = slots.empty) == null ? void 0 : _a.call(slots)) != null ? _b : createVNode(Empty, null, null)];
          }
        })]
      });
    };
    const renderExpandContent = (record) => {
      var _a;
      if (record.expand) {
        return isFunction(record.expand) ? record.expand() : record.expand;
      }
      if (slots["expand-row"]) {
        return slots["expand-row"]({
          record: record.raw
        });
      }
      if ((_a = props.expandable) == null ? void 0 : _a.expandedRowRender) {
        return props.expandable.expandedRowRender(record.raw);
      }
      return void 0;
    };
    const allColumns = computed(() => [].concat(operations.value, dataColumns.value));
    const spanColumns = computed(() => props.spanAll ? allColumns.value : dataColumns.value);
    const {
      tableSpan,
      removedCells
    } = useSpan({
      spanMethod,
      data: flattenData,
      columns: spanColumns
    });
    const {
      tableSpan: tableSummarySpan,
      removedCells: removedSummaryCells
    } = useSpan({
      spanMethod: summarySpanMethod,
      data: flattenData,
      columns: allColumns
    });
    const renderSummaryRow = (record, rowIndex) => {
      return createVNode(Tr, {
        "class": [props.rowClass, `${prefixCls}-tr-summary`],
        "key": `table-summary-${rowIndex}`,
        "onClick": (ev) => handleRowClick(record, ev)
      }, {
        default: () => [operations.value.map((operation, index2) => {
          var _a;
          const cellId = `${rowIndex}-${index2}`;
          const [rowspan, colspan] = (_a = tableSummarySpan.value[cellId]) != null ? _a : [1, 1];
          if (removedSummaryCells.value.includes(cellId)) {
            return null;
          }
          const style2 = isVirtualList.value && operation.name && thWidth.value[operation.name] ? {
            width: `${thWidth.value[operation.name]}px`
          } : void 0;
          return createVNode(OperationTd, {
            "style": style2,
            "operationColumn": operation,
            "operations": operations.value,
            "record": record,
            "rowSpan": rowspan,
            "colSpan": colspan,
            "summary": true
          }, null);
        }), dataColumns.value.map((column, index2) => {
          var _a;
          const cellId = `${rowIndex}-${operations.value.length + index2}`;
          const [rowspan, colspan] = (_a = tableSummarySpan.value[cellId]) != null ? _a : [1, 1];
          if (removedSummaryCells.value.includes(cellId)) {
            return null;
          }
          const style2 = isVirtualList.value && column.dataIndex && thWidth.value[column.dataIndex] ? {
            width: `${thWidth.value[column.dataIndex]}px`
          } : void 0;
          return createVNode(Td, {
            "key": `td-${cellId}`,
            "style": style2,
            "rowIndex": rowIndex,
            "record": record,
            "column": column,
            "operations": operations.value,
            "dataColumns": dataColumns.value,
            "rowSpan": rowspan,
            "colSpan": colspan,
            "onClick": (ev) => handleCellClick(record, column, ev)
          }, {
            td: slots.td,
            cell: slots["summary-cell"]
          });
        })],
        tr: slots.tr
      });
    };
    const renderSummary = () => {
      if (summaryData.value) {
        return summaryData.value.map((data, index2) => renderSummaryRow(data, index2));
      }
      return null;
    };
    const virtualListRef = ref();
    watch(virtualListRef, (instance) => {
      tbodyRef.value = instance.$el;
    });
    const renderVirtualListBody = () => {
      return createVNode(ClientOnly, null, {
        default: () => [createVNode(VirtualList, mergeProps({
          "ref": virtualListRef,
          "class": `${prefixCls}-body`,
          "itemKey": "_key",
          "type": "table"
        }, props.virtualListProps, {
          "data": flattenData.value,
          "onResize": () => {
            handleTbodyResize();
          },
          "onScroll": handleScroll,
          "outerAttrs": {
            class: `${prefixCls}-element`,
            style: contentStyle.value
          }
        }), {
          item: ({
            item,
            index: index2
          }) => renderRecord(item, index2)
        })]
      });
    };
    const renderExpandBtn = (record, stopPropagation = true) => {
      var _a, _b, _c, _d, _e;
      const currentKey = record.key;
      const expanded = expandedRowKeys.value.includes(currentKey);
      return createVNode("button", {
        "type": "button",
        "class": `${prefixCls}-expand-btn`,
        "onClick": (ev) => {
          handleExpand(currentKey);
          if (stopPropagation) {
            ev.stopPropagation();
          }
        }
      }, [(_e = (_d = (_a = slots["expand-icon"]) == null ? void 0 : _a.call(slots, {
        expanded,
        record: record.raw
      })) != null ? _d : (_c = (_b = props.expandable) == null ? void 0 : _b.icon) == null ? void 0 : _c.call(_b, expanded, record.raw)) != null ? _e : expanded ? createVNode(IconMinus, null, null) : createVNode(IconPlus, null, null)]);
    };
    const dragType = computed(() => {
      var _a;
      if (props.draggable) {
        if (((_a = props.draggable) == null ? void 0 : _a.type) === "handle") {
          return "handle";
        }
        return "row";
      }
      return "none";
    });
    const renderRecord = (record, rowIndex, {
      indentSize = 0,
      indexPath,
      allowDrag = true
    } = {}) => {
      var _a, _b;
      const currentKey = record.key;
      const currentPath = (indexPath != null ? indexPath : []).concat(rowIndex);
      const expandContent = renderExpandContent(record);
      const showExpand = expandedRowKeys.value.includes(currentKey);
      const scrollContainer = isScroll.value.y ? tbodyRef.value : containerRef.value;
      const isDragTarget = dragState.sourceKey === record.key;
      const dragSourceEvent = dragType.value !== "none" && allowDrag ? {
        draggable: true,
        onDragstart: (ev) => handleDragStart(ev, record.key, currentPath, record.raw),
        onDragend: (ev) => handleDragEnd(ev)
      } : {};
      const dragTargetEvent = dragType.value !== "none" && allowDrag ? {
        onDragenter: (ev) => handleDragEnter(ev, currentPath),
        onDragleave: (ev) => handleDragLeave(ev),
        onDragover: (ev) => handleDragover(ev),
        onDrop: (ev) => {
          handleChange("drag");
          handleDrop(ev);
        }
      } : {};
      return createVNode(Fragment, null, [createVNode(Tr, mergeProps(dragType.value === "row" ? dragSourceEvent : {}, dragTargetEvent, {
        "class": [{
          [`${prefixCls}-tr-draggable`]: dragType.value === "row",
          [`${prefixCls}-tr-drag`]: isDragTarget
        }, props.rowClass],
        "rowIndex": rowIndex,
        "record": record,
        "key": currentKey,
        "checked": (_a = selectedRowKeys.value) == null ? void 0 : _a.includes(currentKey),
        "onClick": (ev) => handleRowClick(record, ev)
      }), {
        default: () => [operations.value.map((operation, index2) => {
          var _a2;
          const cellId = `${rowIndex}-${index2}`;
          const [rowspan, colspan] = props.spanAll ? (_a2 = tableSpan.value[cellId]) != null ? _a2 : [1, 1] : [1, 1];
          if (props.spanAll && removedCells.value.includes(cellId)) {
            return null;
          }
          const style2 = isVirtualList.value && operation.name && thWidth.value[operation.name] ? {
            width: `${thWidth.value[operation.name]}px`
          } : void 0;
          return createVNode(OperationTd, mergeProps({
            "key": `operation-td-${index2}`,
            "style": style2,
            "operationColumn": operation,
            "operations": operations.value,
            "record": record,
            "rowKey": rowKey.value,
            "hasExpand": Boolean(expandContent),
            "selectedRowKeys": selectedRowKeys.value,
            "rowSpan": rowspan,
            "colSpan": colspan,
            "renderExpandBtn": renderExpandBtn,
            "onSelect": handleSelect,
            "onExpand": handleExpand
          }, dragType.value === "handle" ? dragSourceEvent : {}), {
            "drag-handle-icon": slots["drag-handle-icon"]
          });
        }), dataColumns.value.map((column, index2) => {
          var _a2;
          const cellId = `${rowIndex}-${props.spanAll ? operations.value.length + index2 : index2}`;
          const [rowspan, colspan] = (_a2 = tableSpan.value[cellId]) != null ? _a2 : [1, 1];
          if (removedCells.value.includes(cellId)) {
            return null;
          }
          const extraProps = index2 === 0 ? {
            showExpandBtn: record.hasSubtree,
            indentSize: record.hasSubtree ? indentSize - 20 : indentSize
          } : {};
          const style2 = isVirtualList.value && column.dataIndex && thWidth.value[column.dataIndex] ? {
            width: `${thWidth.value[column.dataIndex]}px`
          } : void 0;
          return createVNode(Td, mergeProps({
            "key": `td-${index2}`,
            "style": style2,
            "rowIndex": rowIndex,
            "record": record,
            "column": column,
            "operations": operations.value,
            "dataColumns": dataColumns.value,
            "rowSpan": rowspan,
            "renderExpandBtn": renderExpandBtn,
            "colSpan": colspan
          }, extraProps, {
            "onClick": (ev) => handleCellClick(record, column, ev)
          }), {
            td: slots.td
          });
        })],
        tr: slots.tr
      }), showExpand && (record.hasSubtree ? (_b = record.children) == null ? void 0 : _b.map((item, index2) => renderRecord(item, index2, {
        indentSize: indentSize + props.indentSize,
        indexPath: currentPath,
        allowDrag: allowDrag && !isDragTarget
      })) : Boolean(expandContent) && createVNode(Tr, {
        "isExpandRow": true,
        "key": `${currentKey}-expand`
      }, {
        default: () => [createVNode(Td, {
          "isFixedExpand": hasLeftFixedColumn.value || hasRightFixedColumn.value,
          "containerWidth": scrollContainer == null ? void 0 : scrollContainer.clientWidth,
          "colSpan": dataColumns.value.length + operations.value.length
        }, _isSlot(expandContent) ? expandContent : {
          default: () => [expandContent]
        })]
      }))]);
    };
    const renderFooter = () => {
      return createVNode("tfoot", null, [renderSummary()]);
    };
    const renderBody = () => {
      const hasSubData = flattenData.value.some((record) => Boolean(record.children));
      return createVNode(Tbody, null, {
        default: () => [flattenData.value.length > 0 ? flattenData.value.map((record, index2) => renderRecord(record, index2, {
          indentSize: hasSubData ? 20 : 0
        })) : renderEmpty()],
        tbody: slots.tbody
      });
    };
    const renderHeader = () => createVNode(Thead, null, {
      default: () => [groupColumns.value.map((row, index2) => createVNode(Tr, {
        "key": `header-row-${index2}`
      }, {
        default: () => [index2 === 0 && operations.value.map((operation, index22) => {
          var _a;
          return createVNode(OperationTh, {
            "ref": (ins) => {
              if ((ins == null ? void 0 : ins.$el) && operation.name) {
                thRefs.value[operation.name] = ins.$el;
              }
            },
            "key": `operation-th-${index22}`,
            "operationColumn": operation,
            "operations": operations.value,
            "selectAll": Boolean(operation.name === "selection-checkbox" && ((_a = props.rowSelection) == null ? void 0 : _a.showCheckedAll)),
            "rowSpan": groupColumns.value.length,
            "selectedNumber": currentSelectedRowKeys.value.length,
            "totalNumber": currentAllRowKeys.value.length,
            "totalEnabledNumber": currentAllEnabledRowKeys.value.length,
            "onSelectAll": handleSelectAll
          }, null);
        }), row.map((column, index22) => {
          const resizable = props.columnResizable && Boolean(column.dataIndex) && index22 < row.length - 1;
          return createVNode(Th, {
            "key": `th-${index22}`,
            "ref": (ins) => {
              if ((ins == null ? void 0 : ins.$el) && column.dataIndex) {
                thRefs.value[column.dataIndex] = ins.$el;
              }
            },
            "column": column,
            "operations": operations.value,
            "dataColumns": dataColumns.value,
            "resizable": resizable,
            "onClick": (ev) => handleHeaderClick(column, ev)
          }, {
            th: slots.th
          });
        })]
      }))],
      thead: slots.thead
    });
    const renderContent = () => {
      if (isScroll.value.y || isVirtualList.value || isScroll.value.x && flattenData.value.length === 0) {
        const style2 = {
          overflowY: hasScrollBar.value ? "scroll" : "hidden"
        };
        return createVNode(Fragment, null, [props.showHeader && createVNode("div", {
          "ref": theadRef,
          "class": `${prefixCls}-header`,
          "style": style2
        }, [createVNode("table", {
          "cellpadding": 0,
          "cellspacing": 0,
          "class": `${prefixCls}-element`,
          "style": headerStyle.value
        }, [createVNode(ColGroup, {
          "dataColumns": dataColumns.value,
          "operations": operations.value,
          "columnWidth": columnWidth
        }, null), renderHeader()])]), isVirtualList.value ? renderVirtualListBody() : createVNode(ResizeObserver$1, {
          "onResize": handleTbodyResize
        }, {
          default: () => {
            var _a, _b;
            return [createVNode("div", {
              "ref": tbodyRef,
              "class": `${prefixCls}-body`,
              "style": {
                maxHeight: isNumber((_a = props.scroll) == null ? void 0 : _a.y) ? `${(_b = props.scroll) == null ? void 0 : _b.y}px` : "100%"
              },
              "onScroll": handleScroll
            }, [createVNode("table", {
              "cellpadding": 0,
              "cellspacing": 0,
              "class": `${prefixCls}-element`,
              "style": contentStyle.value
            }, [flattenData.value.length !== 0 && createVNode(ColGroup, {
              "dataColumns": dataColumns.value,
              "operations": operations.value,
              "columnWidth": columnWidth
            }, null), renderBody()])])];
          }
        }), summaryData.value && summaryData.value.length && createVNode("div", {
          "ref": summaryRef,
          "class": `${prefixCls}-tfoot`,
          "style": style2
        }, [createVNode("table", {
          "cellpadding": 0,
          "cellspacing": 0,
          "class": `${prefixCls}-element`,
          "style": contentStyle.value
        }, [createVNode(ColGroup, {
          "dataColumns": dataColumns.value,
          "operations": operations.value,
          "columnWidth": columnWidth
        }, null), renderFooter()])])]);
      }
      return createVNode(ResizeObserver$1, {
        "onResize": () => setAlignPosition()
      }, {
        default: () => [createVNode("table", {
          "class": `${prefixCls}-element`,
          "cellpadding": 0,
          "cellspacing": 0,
          "style": contentStyle.value
        }, [createVNode(ColGroup, {
          "dataColumns": dataColumns.value,
          "operations": operations.value,
          "columnWidth": columnWidth
        }, null), props.showHeader && renderHeader(), renderBody(), summaryData.value && summaryData.value.length && renderFooter()])]
      });
    };
    const renderTable = (content) => {
      var _a;
      const style2 = ((_a = props.scroll) == null ? void 0 : _a.maxHeight) ? {
        maxHeight: props.scroll.maxHeight
      } : void 0;
      return createVNode(Fragment, null, [createVNode("div", {
        "ref": containerRef,
        "class": [`${prefixCls}-container`, tableCls.value],
        "style": style2,
        "onScroll": handleScroll
      }, [createVNode("div", {
        "class": `${prefixCls}-content`
      }, [content ? createVNode("table", {
        "class": `${prefixCls}-element`,
        "cellpadding": 0,
        "cellspacing": 0
      }, [content()]) : renderContent()])]), slots.footer && createVNode("div", {
        "class": `${prefixCls}-footer`
      }, [slots.footer()])]);
    };
    const renderPagination = () => {
      var _a, _b;
      const paginationProps = isObject(props.pagination) ? omit(props.pagination, ["current", "pageSize", "defaultCurrent", "defaultPageSize"]) : {};
      return createVNode("div", {
        "class": paginationCls.value
      }, [(_a = slots["pagination-left"]) == null ? void 0 : _a.call(slots), createVNode(Pagination, mergeProps({
        "total": validData.value.length,
        "current": page.value,
        "pageSize": pageSize.value,
        "onChange": (page2) => {
          handlePageChange(page2);
          handleChange("pagination");
        },
        "onPageSizeChange": (pageSize2) => {
          handlePageSizeChange(pageSize2);
          handleChange("pagination");
        }
      }, paginationProps), null), (_b = slots["pagination-right"]) == null ? void 0 : _b.call(slots)]);
    };
    const style = computed(() => {
      var _a, _b;
      if (isString((_a = props.scroll) == null ? void 0 : _a.y)) {
        return {
          height: (_b = props.scroll) == null ? void 0 : _b.y
        };
      }
      return void 0;
    });
    const render2 = () => {
      var _a;
      if (slots.default) {
        return createVNode("div", {
          "class": cls.value
        }, [renderTable(slots.default)]);
      }
      children.value = (_a = slots.columns) == null ? void 0 : _a.call(slots);
      return createVNode("div", {
        "class": cls.value,
        "style": style.value
      }, [children.value, createVNode(Spin, spinProps.value, {
        default: () => [props.pagination !== false && flattenData.value.length > 0 && isPaginationTop.value && renderPagination(), renderTable(), props.pagination !== false && flattenData.value.length > 0 && !isPaginationTop.value && renderPagination()]
      })]);
    };
    return {
      render: render2,
      handleSelectAll
    };
  },
  methods: {
    selectAll(checked) {
      return this.handleSelectAll(checked);
    }
  },
  render() {
    return this.render();
  }
});
var TableColumn = defineComponent({
  name: "TableColumn",
  props: {
    dataIndex: String,
    title: String,
    width: Number,
    align: {
      type: String
    },
    fixed: {
      type: String
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Object,
      default: void 0
    },
    filterable: {
      type: Object,
      default: void 0
    },
    cellStyle: {
      type: Object
    },
    index: {
      type: Number
    },
    tooltip: {
      type: [Boolean, Object],
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    var _a;
    const {
      dataIndex,
      title,
      width,
      align,
      fixed,
      ellipsis,
      sortable: _sortable,
      filterable: _filterable,
      cellStyle: _cellStyle,
      tooltip: _tooltip,
      index: index2
    } = toRefs(props);
    const sortable = ref(_sortable.value);
    watch(_sortable, (cur, pre) => {
      if (!isEqual(cur, pre)) {
        sortable.value = cur;
      }
    });
    const filterable = ref(_filterable.value);
    watch(_filterable, (cur, pre) => {
      if (!isEqual(cur, pre)) {
        filterable.value = cur;
      }
    });
    const cellStyle = ref(_cellStyle.value);
    watch(_cellStyle, (cur, pre) => {
      if (!isEqual(cur, pre)) {
        cellStyle.value = cur;
      }
    });
    const tooltip = ref(_tooltip.value);
    watch(_tooltip, (cur, pre) => {
      if (isObject(cur) && isObject(pre)) {
        if (!isEqual(cur, pre)) {
          tooltip.value = cur;
        }
      } else {
        tooltip.value = cur;
      }
    });
    const instance = getCurrentInstance();
    const tableCtx = inject(tableInjectionKey, {});
    const tableColumnCtx = inject(tableColumnInjectionKey, void 0);
    const {
      children,
      components
    } = useChildrenComponents("TableColumn");
    const childrenColumnMap = reactive(/* @__PURE__ */ new Map());
    const addChild = (id, data) => {
      childrenColumnMap.set(id, data);
    };
    const removeChild = (id) => {
      childrenColumnMap.delete(id);
    };
    provide(tableColumnInjectionKey, {
      addChild,
      removeChild
    });
    const childrenColumns = ref();
    watch([components, childrenColumnMap], ([components2, childrenColumnMap2]) => {
      if (components2.length > 0) {
        const columns = [];
        components2.forEach((id) => {
          const column2 = childrenColumnMap2.get(id);
          if (column2)
            columns.push(column2);
        });
        childrenColumns.value = columns;
      } else {
        childrenColumns.value = void 0;
      }
    });
    const column = reactive({
      dataIndex,
      title,
      width,
      align,
      fixed,
      ellipsis,
      sortable,
      filterable,
      cellStyle,
      index: index2,
      tooltip,
      children: childrenColumns,
      slots
    });
    if (instance) {
      if (tableColumnCtx) {
        tableColumnCtx.addChild(instance.uid, column);
      } else {
        (_a = tableCtx.addColumn) == null ? void 0 : _a.call(tableCtx, instance.uid, column);
      }
    }
    onBeforeUnmount(() => {
      var _a2;
      if (instance) {
        if (tableColumnCtx) {
          tableColumnCtx.removeChild(instance.uid);
        } else {
          (_a2 = tableCtx.removeColumn) == null ? void 0 : _a2.call(tableCtx, instance.uid);
        }
      }
    });
    return () => {
      var _a2;
      children.value = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      return children.value;
    };
  }
});
const Table = Object.assign(_Table, {
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Column: TableColumn,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Table.name, _Table);
    app.component(componentPrefix + Thead.name, Thead);
    app.component(componentPrefix + Tbody.name, Tbody);
    app.component(componentPrefix + Tr.name, Tr);
    app.component(componentPrefix + Th.name, Th);
    app.component(componentPrefix + Td.name, Td);
    app.component(componentPrefix + TableColumn.name, TableColumn);
  }
});
const clearAndUpper = (text) => text.replace(/-/, "").toUpperCase();
const toPascalCase = (text) => text.replace(/(^\w|-\w)/g, clearAndUpper);
var getRenderFunction = (render2, renderParams) => {
  var _a;
  if (typeof render2 === "function") {
    return render2(renderParams);
  }
  const component = ((_a = getCurrentInstance()) == null ? void 0 : _a.appContext.components[toPascalCase(render2.type)]) || render2.type;
  return h(component, render2.props);
};
const defineRender = (title) => ({
  type: "a-input",
  props: {
    placeholder: `\u8BF7\u8F93\u5165${title}`,
    allowClear: true,
    maxLength: 100
  }
});
const getIndexAndConvert = (column, type) => {
  const { form } = column;
  if (typeof form !== "object")
    return 0;
  const _key = type.toLocaleLowerCase();
  if (form[`${_key}Config`]) {
    column.form = __spreadValues(__spreadValues({}, form), form[`${_key}Config`]);
  }
  return (form == null ? void 0 : form.yIndex) || 0;
};
const getForm = (columns, type) => {
  const defaultValues = {};
  const rules = {};
  let hasTooltip = false;
  const addRule = (dataIndex, rule) => {
    if (!rules[dataIndex])
      rules[dataIndex] = [];
    if (rule instanceof Array) {
      rules[dataIndex].push(...rule);
    } else {
      rules[dataIndex].push(rule);
    }
  };
  const _columns = lodash.exports.cloneDeep(columns == null ? void 0 : columns.filter((column) => column.form));
  _columns == null ? void 0 : _columns.sort((a, b) => {
    return getIndexAndConvert(b, type) - getIndexAndConvert(a, type);
  });
  const form = _columns == null ? void 0 : _columns.map(({ form: form2, title, dataIndex }) => {
    var _a;
    let formItem = {
      title,
      dataIndex
    };
    if (typeof form2 !== "object") {
      defaultValues[dataIndex] = "";
      const render2 = typeof form2 === "boolean" ? defineRender(title) : form2;
      return {
        formItem,
        render: render2
      };
    }
    if (form2[`hidden${type}`])
      return false;
    const { searchColSpan, tooltip } = form2;
    if (tooltip)
      hasTooltip = true;
    formItem = __spreadProps(__spreadValues({}, formItem), {
      tooltip
    });
    if (form2.title)
      formItem.title = form2.title;
    defaultValues[dataIndex] = (_a = form2.defaultValue) != null ? _a : "";
    if (form2.required)
      addRule(dataIndex, {
        required: true,
        message: `${title}\u4E0D\u80FD\u4E3A\u7A7A`
      });
    if (form2.rule)
      addRule(dataIndex, form2.rule);
    return {
      formItem,
      render: form2.render || defineRender(title),
      searchColSpan
    };
  }).filter((item) => item);
  return {
    form,
    formData: lodash.exports.cloneDeep(defaultValues),
    defaultValues,
    rules,
    hasTooltip
  };
};
function useTableForm(columns, type) {
  const form = ref(getForm(columns, type));
  watchEffect(() => {
    const {
      form: _form,
      formData,
      rules,
      defaultValues
    } = getForm(columns, type);
    form.value.form = _form;
    form.value.formData = formData;
    form.value.rules = rules;
    form.value.defaultValues = defaultValues;
  });
  return __spreadProps(__spreadValues({}, toRefs(form.value)), {
    resetFormData() {
      form.value.formData = lodash.exports.cloneDeep(form.value.defaultValues);
    }
  });
}
const _hoisted_1$3 = {
  key: 0,
  class: "search-form-wrapper"
};
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode(" \u641C\u7D22 ");
const _hoisted_3$2 = /* @__PURE__ */ createTextVNode(" \u91CD\u7F6E ");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    config: Object
  },
  emits: ["search"],
  setup(__props, { expose, emit }) {
    var _a;
    const props = __props;
    const { form, formData, resetFormData } = useTableForm((_a = props.config) == null ? void 0 : _a.columns, "Search");
    const formRef = ref();
    const search = () => {
      emit("search", formData.value);
    };
    const reset = () => {
      resetFormData();
      search();
    };
    const getSpan = (config) => {
      var _a2;
      if (!config)
        return 6;
      if (typeof config === "number")
        return config;
      return (_a2 = config.span) != null ? _a2 : 6;
    };
    const formItemSpanSize = {
      label: 7,
      wrapper: 17
    };
    const getFormItemSpan = (config, type) => {
      const size = formItemSpanSize[type];
      if (!config || typeof config === "number" || !config.formItem) {
        return size;
      }
      return (config == null ? void 0 : config.formItem[`${type}ColSpan`]) || size;
    };
    const dividerStyle = computed(() => {
      var _a2;
      return ((_a2 = props.config) == null ? void 0 : _a2.card) ? {
        marginBottm: "16px",
        left: "-16px",
        width: "calc(100% + 32px)",
        minWidth: "calc(100% + 32px)"
      } : {};
    });
    const isVertical = computed(() => {
      let colSpans = 0;
      form.value.forEach(({ searchColSpan }) => {
        colSpans += getSpan(searchColSpan);
      });
      return colSpans > 24;
    });
    expose({
      reset
    });
    return (_ctx, _cache) => {
      const _component_a_form_item = resolveComponent("a-form-item");
      const _component_a_col = resolveComponent("a-col");
      const _component_a_row = resolveComponent("a-row");
      const _component_a_form = resolveComponent("a-form");
      const _component_a_divider = resolveComponent("a-divider");
      const _component_icon_search = resolveComponent("icon-search");
      const _component_a_button = resolveComponent("a-button");
      const _component_icon_refresh = resolveComponent("icon-refresh");
      const _component_a_space = resolveComponent("a-space");
      return openBlock(), createElementBlock("div", null, [
        unref(form).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
          createVNode(_component_a_row, null, {
            default: withCtx(() => [
              createVNode(_component_a_col, { flex: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_a_form, {
                    ref_key: "formRef",
                    ref: formRef,
                    model: unref(formData),
                    style: { width: "100%" },
                    "label-align": "left"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_row, { gutter: 16 }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(form) || [], ({
                            formItem: { dataIndex, title },
                            render: render2,
                            searchColSpan
                          }) => {
                            return openBlock(), createBlock(_component_a_col, {
                              key: dataIndex,
                              span: getSpan(searchColSpan)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_form_item, {
                                  field: dataIndex,
                                  label: title,
                                  "label-col-props": {
                                    span: getFormItemSpan(searchColSpan, "label")
                                  },
                                  "wrapper-col-props": {
                                    span: getFormItemSpan(searchColSpan, "wrapper")
                                  }
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(unref(getRenderFunction)(render2)), {
                                      modelValue: unref(formData)[dataIndex],
                                      "onUpdate:modelValue": ($event) => unref(formData)[dataIndex] = $event,
                                      style: { "width": "100%" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                                  ]),
                                  _: 2
                                }, 1032, ["field", "label", "label-col-props", "wrapper-col-props"])
                              ]),
                              _: 2
                            }, 1032, ["span"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["model"])
                ]),
                _: 1
              }),
              createVNode(_component_a_divider, {
                style: normalizeStyle({ height: unref(isVertical) ? "84px" : "32px" }),
                direction: "vertical"
              }, null, 8, ["style"]),
              createVNode(_component_a_col, {
                flex: "86px",
                style: { "text-align": "right" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_space, {
                    direction: unref(isVertical) ? "vertical" : "horizontal",
                    size: 18
                  }, {
                    default: withCtx(() => {
                      var _a2, _b;
                      return [
                        createVNode(_component_a_button, {
                          type: "primary",
                          onClick: search
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_icon_search)
                          ]),
                          default: withCtx(() => [
                            _hoisted_2$2
                          ]),
                          _: 1
                        }),
                        !((_b = (_a2 = __props.config) == null ? void 0 : _a2.search) == null ? void 0 : _b.hiddenReset) ? (openBlock(), createBlock(_component_a_button, {
                          key: 0,
                          onClick: reset
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_icon_refresh)
                          ]),
                          default: withCtx(() => [
                            _hoisted_3$2
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ];
                    }),
                    _: 1
                  }, 8, ["direction"])
                ]),
                _: 1
              }),
              createVNode(_component_a_divider, {
                style: normalizeStyle([{ "margin-top": "0" }, unref(dividerStyle)]),
                "divider-style": ""
              }, null, 8, ["style"])
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$2 = { style: { "display": "inline-block", "width": "6%", "text-align": "right" } };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    type: null,
    visible: { type: Boolean },
    title: null,
    renderParams: null
  },
  emits: ["update:visible", "okEvent"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const config = inject("config");
    const { form, formData, rules, hasTooltip, resetFormData } = useTableForm(config == null ? void 0 : config.columns, props.type);
    const _visible = computed({
      get() {
        return props.visible;
      },
      set(val) {
        emit("update:visible", val);
      }
    });
    const formRef = ref();
    const handleOk = (done) => {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate().then((errors) => {
        if (errors) {
          done(false);
          return;
        }
        emit("okEvent", lodash.exports.cloneDeep(formData.value));
        done(true);
      });
    };
    const handleClose = () => {
      var _a;
      resetFormData();
      (_a = formRef == null ? void 0 : formRef.value) == null ? void 0 : _a.resetFields();
    };
    expose({
      formData,
      resetFormData
    });
    return (_ctx, _cache) => {
      const _component_icon_info_circle = resolveComponent("icon-info-circle");
      const _component_a_tooltip = resolveComponent("a-tooltip");
      const _component_a_col = resolveComponent("a-col");
      const _component_a_form_item = resolveComponent("a-form-item");
      const _component_a_row = resolveComponent("a-row");
      const _component_a_form = resolveComponent("a-form");
      const _component_a_modal = resolveComponent("a-modal");
      return openBlock(), createBlock(_component_a_modal, {
        visible: unref(_visible),
        "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => isRef(_visible) ? _visible.value = $event : null),
        "modal-class": "table-modal",
        "unmount-on-close": "",
        onBeforeOk: handleOk,
        onClose: handleClose
      }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(props.title), 1)
        ]),
        default: withCtx(() => [
          createElementVNode("div", null, [
            createVNode(_component_a_form, {
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              style: { width: "100%" },
              "label-col-props": { span: 6 },
              "wrapper-col-props": { span: 18 },
              rules: unref(rules)
            }, {
              default: withCtx(() => [
                createVNode(_component_a_row, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(form) || [], ({
                      formItem: { dataIndex, title: label, tooltip },
                      render: render2
                    }) => {
                      return openBlock(), createBlock(_component_a_form_item, {
                        key: dataIndex,
                        span: 6,
                        field: dataIndex,
                        label
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_col, { span: 24 }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(unref(getRenderFunction)(render2, props.renderParams)), {
                                modelValue: unref(formData)[dataIndex],
                                "onUpdate:modelValue": ($event) => unref(formData)[dataIndex] = $event,
                                style: normalizeStyle({
                                  width: unref(hasTooltip) ? "94%" : "100%"
                                })
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "style"])),
                              tooltip ? (openBlock(), createBlock(_component_a_tooltip, {
                                key: 0,
                                content: tooltip
                              }, {
                                default: withCtx(() => [
                                  createElementVNode("div", _hoisted_1$2, [
                                    createVNode(_component_icon_info_circle)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["content"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["field", "label"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
});
var toolbar_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target2 = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target2[key] = val;
  }
  return target2;
};
const _hoisted_1$1 = { class: "table-toolbar" };
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode(" \u65B0\u589E ");
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode(" \u5220\u9664 ");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    config: Object
  },
  emits: ["add", "batchDelete"],
  setup(__props, { emit }) {
    var _a;
    const props = __props;
    const selectedRowKeys = inject("selectedRowKeys");
    const visible = ref(false);
    const { form } = useTableForm((_a = props.config) == null ? void 0 : _a.columns, "Add");
    const onBeforeAddModalOpen = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.config) == null ? void 0 : _a2.toolbar) == null ? void 0 : _b.onBeforeAddModalOpen;
    });
    const handleClickAdd = async () => {
      if (typeof onBeforeAddModalOpen.value === "function") {
        const result = await onBeforeAddModalOpen.value();
        if (result === false)
          return;
      }
      visible.value = true;
    };
    return (_ctx, _cache) => {
      var _a2;
      const _component_icon_plus = resolveComponent("icon-plus");
      const _component_a_button = resolveComponent("a-button");
      const _component_icon_minus = resolveComponent("icon-minus");
      const _component_a_popconfirm = resolveComponent("a-popconfirm");
      const _component_a_space = resolveComponent("a-space");
      const _component_a_col = resolveComponent("a-col");
      const _component_a_row = resolveComponent("a-row");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        ((_a2 = __props.config) == null ? void 0 : _a2.batchDelete) || unref(form).length > 0 || unref(onBeforeAddModalOpen) ? (openBlock(), createBlock(_component_a_row, {
          key: 0,
          style: { "padding-bottom": "16px" }
        }, {
          default: withCtx(() => [
            createVNode(_component_a_col, {
              span: 16,
              class: "toolbar-left"
            }, {
              default: withCtx(() => [
                createVNode(_component_a_space, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "toolbar-left", {}, () => {
                      var _a3, _b, _c;
                      return [
                        unref(form).length > 0 || unref(onBeforeAddModalOpen) ? (openBlock(), createBlock(_component_a_button, {
                          key: 0,
                          type: "primary",
                          onClick: handleClickAdd
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_icon_plus)
                          ]),
                          default: withCtx(() => [
                            _hoisted_2$1
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        ((_a3 = __props.config) == null ? void 0 : _a3.batchDelete) ? (openBlock(), createBlock(_component_a_popconfirm, {
                          key: 1,
                          content: `\u662F\u5426\u5220\u9664\u9009\u4E2D\u7684${(_b = unref(selectedRowKeys)) == null ? void 0 : _b.length}\u9879\u5185\u5BB9`,
                          disabled: ((_c = unref(selectedRowKeys)) == null ? void 0 : _c.length) === 0,
                          "ok-button-props": {
                            status: "danger"
                          },
                          type: "error",
                          position: "bl",
                          onOk: _cache[0] || (_cache[0] = ($event) => emit("batchDelete"))
                        }, {
                          default: withCtx(() => {
                            var _a4;
                            return [
                              createVNode(_component_a_button, {
                                type: "primary",
                                status: "danger",
                                disabled: ((_a4 = unref(selectedRowKeys)) == null ? void 0 : _a4.length) === 0
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_icon_minus)
                                ]),
                                default: withCtx(() => [
                                  _hoisted_3$1
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ];
                          }),
                          _: 1
                        }, 8, ["content", "disabled"])) : createCommentVNode("", true)
                      ];
                    }, true),
                    renderSlot(_ctx.$slots, "toolbar-left-extend", {}, void 0, true)
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }),
            createVNode(_component_a_col, {
              span: 8,
              class: "toolbar-right"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "toolbar-right", {}, void 0, true)
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : createCommentVNode("", true),
        unref(form).length > 0 ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          visible: visible.value,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
          title: "\u65B0\u589E",
          type: "Add",
          onOkEvent: _cache[2] || (_cache[2] = (data) => emit("add", data))
        }, null, 8, ["visible"])) : createCommentVNode("", true)
      ]);
    };
  }
});
var VToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f673a696"]]);
var operations_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "column-operations" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u7F16\u8F91");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5220\u9664");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    config: null,
    columnData: null,
    extend: null,
    extendPostion: { default: "center" },
    updateButton: null,
    deleteButton: null
  },
  emits: ["updateData", "deleteData"],
  setup(__props, { emit }) {
    const props = __props;
    const { config, columnData, extend } = toRefs(props);
    const extendRender = computed(() => {
      if (!columnData)
        return false;
      const { record, column, rowIndex } = columnData == null ? void 0 : columnData.value;
      return () => (extend == null ? void 0 : extend.value) ? extend.value(record, column, rowIndex) : h("span");
    });
    const updateData = async () => {
      var _a, _b, _c, _d;
      if (typeof ((_a = props.updateButton) == null ? void 0 : _a.onClick) === "function") {
        const result = await ((_c = props.updateButton) == null ? void 0 : _c.onClick((_b = columnData == null ? void 0 : columnData.value) == null ? void 0 : _b.record));
        if (result === false)
          return;
      }
      emit("updateData", (_d = columnData == null ? void 0 : columnData.value) == null ? void 0 : _d.record);
    };
    const deleteData = async () => {
      var _a, _b, _c, _d;
      if (typeof ((_a = props.deleteButton) == null ? void 0 : _a.onClick) === "function") {
        const result = await ((_c = props.deleteButton) == null ? void 0 : _c.onClick((_b = columnData == null ? void 0 : columnData.value) == null ? void 0 : _b.record));
        if (result === false)
          return;
      }
      emit("deleteData", (_d = columnData == null ? void 0 : columnData.value) == null ? void 0 : _d.record);
    };
    onMounted(() => {
      var _a, _b;
      const columns = (_a = config == null ? void 0 : config.value) == null ? void 0 : _a.columns;
      if (!columns)
        return;
      const dataIndex = (_b = columnData == null ? void 0 : columnData.value) == null ? void 0 : _b.column.dataIndex;
      for (let i = 0; i < columns.length; i += 1) {
        if (columns[i].dataIndex === dataIndex) {
          const column = columns[i];
          if (column.titleRender)
            return;
          const { title } = column;
          column.titleRender = () => h("span", {
            style: {
              marginLeft: "6px"
            }
          }, title);
        }
      }
    });
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_a_button = resolveComponent("a-button");
      const _component_a_popconfirm = resolveComponent("a-popconfirm");
      return openBlock(), createElementBlock("span", _hoisted_1, [
        unref(extendRender) && props.extendPostion === "left" ? (openBlock(), createBlock(resolveDynamicComponent(unref(extendRender)), { key: 0 })) : createCommentVNode("", true),
        !((_a = __props.updateButton) == null ? void 0 : _a.hidden) ? (openBlock(), createBlock(_component_a_button, {
          key: 1,
          type: "text",
          disabled: (_b = __props.updateButton) == null ? void 0 : _b.disabled,
          onClick: updateData
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["disabled"])) : createCommentVNode("", true),
        unref(extendRender) && props.extendPostion === "center" ? (openBlock(), createBlock(resolveDynamicComponent(unref(extendRender)), { key: 2 })) : createCommentVNode("", true),
        createVNode(_component_a_popconfirm, {
          content: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5185\u5BB9\u5417",
          onOk: deleteData
        }, {
          default: withCtx(() => {
            var _a2, _b2;
            return [
              !((_a2 = __props.deleteButton) == null ? void 0 : _a2.hidden) ? (openBlock(), createBlock(_component_a_button, {
                key: 0,
                type: "text",
                status: "danger",
                disabled: (_b2 = __props.deleteButton) == null ? void 0 : _b2.disabled
              }, {
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              }, 8, ["disabled"])) : createCommentVNode("", true)
            ];
          }),
          _: 1
        }),
        unref(extendRender) && props.extendPostion === "right" ? (openBlock(), createBlock(resolveDynamicComponent(unref(extendRender)), { key: 3 })) : createCommentVNode("", true)
      ]);
    };
  }
});
const setSelectedRowKeys = (config, value) => {
  if (config == null ? void 0 : config.table.rowSelection) {
    const rowSelection = config == null ? void 0 : config.table.rowSelection;
    if (rowSelection) {
      rowSelection.selectedRowKeys = value;
    }
  }
};
var _sfc_main$1 = defineComponent({
  props: {
    config: {
      type: Object
    }
  },
  setup(props, {
    emit,
    expose
  }) {
    var _a, _b, _c;
    const components = {
      operations: _sfc_main$2
    };
    const table = ref();
    const {
      config
    } = toRefs(props);
    const TABLE_BASE_CONFIG = {
      pagination: {
        current: 1,
        showPageSize: true,
        total: ((_c = (_b = (_a = config == null ? void 0 : config.value) == null ? void 0 : _a.table) == null ? void 0 : _b.data) == null ? void 0 : _c.length) || 0,
        pageSize: 30,
        showTotal: true,
        showJumper: true
      },
      rowSelection: {
        type: "checkbox",
        showCheckedAll: true,
        selectedRowKeys: []
      }
    };
    const columns = computed(() => {
      var _a2;
      return (_a2 = config == null ? void 0 : config.value) == null ? void 0 : _a2.columns;
    });
    const setPagination = (obj) => {
      var _a2;
      if (typeof ((_a2 = config == null ? void 0 : config.value) == null ? void 0 : _a2.table.pagination) === "object") {
        config.value.table.pagination = __spreadValues(__spreadValues({}, config.value.table.pagination), obj);
      }
    };
    const pageChange = (current) => {
      setPagination({
        current
      });
      emit("get");
    };
    const pageSizeChange = (pageSize) => {
      setPagination({
        pageSize
      });
      setPagination({
        current: 1
      });
      emit("get");
    };
    const selectionChange = (ids) => {
      setSelectedRowKeys(config.value, ids);
    };
    const operationsRender = computed(() => {
      var _a2;
      let render2 = false;
      (_a2 = columns == null ? void 0 : columns.value) == null ? void 0 : _a2.forEach((column) => {
        if (typeof column.cellRender === "object" && column.cellRender.type === "operations") {
          render2 = true;
        }
      });
      return render2;
    });
    const getProps = (props2, params) => {
      if (typeof props2 === "function")
        return props2(params);
      return __spreadValues({}, props2);
    };
    const visible = ref(false);
    const renderParams = ref({});
    const modalForm = ref();
    const updateData = (params) => {
      var _a2, _b2;
      renderParams.value = params;
      const formData = (_a2 = modalForm.value) == null ? void 0 : _a2.formData;
      Object.keys(formData).forEach((key) => {
        formData[key] = params[key];
      });
      const rowKey = (_b2 = config == null ? void 0 : config.value) == null ? void 0 : _b2.table.rowKey;
      if (typeof rowKey === "string")
        formData[rowKey] = params[rowKey];
      visible.value = true;
    };
    const deleteData = (params) => {
      emit("deleteData", __spreadValues({}, params));
    };
    const tableId = inject("tableId");
    const getTableHeight = () => {
      var _a2, _b2, _c2, _d, _e, _f, _g;
      const container = document.getElementById(`${tableId}`);
      if (!container)
        return 0;
      const containerHeight = container.clientHeight;
      const titleHeight = ((_a2 = document.querySelector(`#${tableId} .arco-card-header`)) == null ? void 0 : _a2.clientHeight) || 0;
      const searchFormHeight = ((_b2 = document.querySelector(`#${tableId} .search-form-wrapper`)) == null ? void 0 : _b2.clientHeight) || 0;
      const toolbarHeight = ((_c2 = document.querySelector(`#${tableId} .table-toolbar`)) == null ? void 0 : _c2.clientHeight) || 0;
      const tableHeaderHeight = ((_d = document.querySelector(`#${tableId} thead`)) == null ? void 0 : _d.clientHeight) || 0;
      const isCard = typeof ((_e = config == null ? void 0 : config.value) == null ? void 0 : _e.card) === "boolean" ? ((_f = config == null ? void 0 : config.value) == null ? void 0 : _f.card) ? 32 : 0 : 32;
      const tablePaginationHeight = ((_g = config == null ? void 0 : config.value) == null ? void 0 : _g.table.pagination) ? 48 : 0;
      const height = containerHeight - titleHeight - searchFormHeight - toolbarHeight - tableHeaderHeight - tablePaginationHeight - isCard;
      container.style.setProperty(`--v-table-height`, `${height}px`);
      return height;
    };
    const tableHeight = ref();
    const resize = () => {
      tableHeight.value = getTableHeight();
    };
    const RenderColumns = (columns2) => {
      return columns2.map((column) => {
        const slot = {};
        if (column.titleRender)
          slot.title = column.titleRender;
        if (!column.children && column.cellRender) {
          if (typeof column.cellRender === "function") {
            slot.cell = column.cellRender;
          } else {
            const component = column.cellRender;
            slot.cell = (record, column2, rowIndex) => h(components[component.type], __spreadProps(__spreadValues({
              config: config == null ? void 0 : config.value,
              columnData: {
                record,
                column: column2,
                rowIndex
              }
            }, getProps(component == null ? void 0 : component.props, record)), {
              onUpdateData: updateData,
              onDeleteData: deleteData
            }));
          }
        }
        return createVNode(TableColumn, mergeProps({
          "ellipsis": true
        }, column, {
          "key": column.dataIndex
        }), __spreadValues({
          default: () => [column.children && RenderColumns(column.children)]
        }, slot));
      });
    };
    expose({
      getTableHeight,
      resize
    });
    onMounted(() => {
      if (config == null ? void 0 : config.value) {
        if (!config.value.batchDelete)
          delete TABLE_BASE_CONFIG.rowSelection;
        config.value.table = __spreadValues(__spreadValues({}, TABLE_BASE_CONFIG), config.value.table);
      }
      emit("get");
      setTimeout(() => resize());
      window.addEventListener("resize", resize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resize);
    });
    return () => {
      var _a2, _b2;
      return createVNode("div", null, [createVNode(Table, mergeProps((_a2 = config.value) == null ? void 0 : _a2.table, {
        "class": "v-table-content",
        "onPageChange": pageChange,
        "onPageSizeChange": pageSizeChange,
        "onSelectionChange": selectionChange,
        "ref": table,
        "scroll": {
          y: tableHeight.value
        }
      }), {
        columns: () => {
          var _a3;
          return RenderColumns(((_a3 = columns.value) == null ? void 0 : _a3.filter((item) => !item.hidden)) || []);
        }
      }), operationsRender.value && createVNode(_sfc_main$4, mergeProps((_b2 = config.value) == null ? void 0 : _b2.table, {
        "ref": modalForm,
        "title": "\u7F16\u8F91",
        "onUpdate:visible": (v) => visible.value = v,
        "visible": visible.value,
        "type": "Update",
        "renderParams": renderParams.value,
        "onOkEvent": (data) => emit("update", data)
      }), null)]);
    };
  }
});
var index_vue_vue_type_style_index_0_lang$1 = "";
var index_vue_vue_type_style_index_1_scoped_true_lang = "";
var VContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-571b3c88"]]);
var index_vue_vue_type_style_index_0_lang = "";
const __default__ = defineComponent({
  name: "VTable"
});
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    config: Object
  },
  setup(__props, { expose }) {
    var _a, _b;
    const props = __props;
    const tableId = lodash.exports.uniqueId("v-table-");
    provide("tableId", tableId);
    const { config } = toRefs(props);
    provide("config", config && config.value);
    const pagination = computed(() => {
      var _a2;
      return (_a2 = config == null ? void 0 : config.value) == null ? void 0 : _a2.table.pagination;
    });
    const setLoading = (bool) => {
      var _a2;
      if ((_a2 = config == null ? void 0 : config.value) == null ? void 0 : _a2.table)
        config.value.table.loading = bool;
    };
    const selectedRowKeys = computed({
      get: () => {
        var _a2, _b2;
        return ((_b2 = (_a2 = props.config) == null ? void 0 : _a2.table.rowSelection) == null ? void 0 : _b2.selectedRowKeys) || [];
      },
      set: (val) => {
        var _a2, _b2;
        if ((_b2 = (_a2 = props.config) == null ? void 0 : _a2.table.rowSelection) == null ? void 0 : _b2.selectedRowKeys) {
          props.config.table.rowSelection.selectedRowKeys = val;
        }
      }
    });
    provide("selectedRowKeys", selectedRowKeys);
    const searchParams = ref({});
    const apis = ref((_a = config == null ? void 0 : config.value) == null ? void 0 : _a.apis);
    const get = async () => {
      var _a2, _b2, _c;
      if (!(config == null ? void 0 : config.value))
        return;
      setLoading(true);
      try {
        if ((_a2 = apis.value) == null ? void 0 : _a2.get) {
          const { current, pageSize } = pagination.value;
          const result = await ((_b2 = apis.value) == null ? void 0 : _b2.get(__spreadValues({
            current,
            pageSize
          }, searchParams.value)));
          const isBaseGetData = !(((_c = result == null ? void 0 : result.total) != null ? _c : true) === true);
          if (isBaseGetData && pagination.value) {
            const { data, total } = result;
            pagination.value.total = total != null ? total : data.length;
            config.value.table.data = data;
          } else {
            const data = result;
            config.value.table.data = data;
          }
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    const crud = async (apiName, params) => {
      const map = {
        update: "\u7F16\u8F91",
        add: "\u65B0\u589E",
        delete: "\u5220\u9664"
      };
      const paramsIsArray = params instanceof Array;
      const filterParams = {};
      if (!paramsIsArray) {
        Object.keys(params).forEach((key) => {
          var _a2;
          if (((_a2 = params[key]) != null ? _a2 : false) !== false && params[key] !== "") {
            filterParams[key] = params[key];
          }
        });
      }
      if (apis.value && apis.value[apiName]) {
        try {
          const requestFunction = apis.value[apiName];
          if (paramsIsArray) {
            await requestFunction.call(null, ...params);
          } else {
            await requestFunction(filterParams);
          }
          Message.success(`${map[apiName]}\u6210\u529F`);
          get();
        } catch (error) {
          throw error;
        }
      }
    };
    const add = async (params) => {
      crud("add", params);
    };
    const update = async (params) => {
      crud("update", params);
    };
    const deleteData = async (params) => {
      var _a2, _b2;
      const rowKey = params[(_b2 = (_a2 = config == null ? void 0 : config.value) == null ? void 0 : _a2.table) == null ? void 0 : _b2.rowKey] || null;
      crud("delete", [rowKey, params]).then(() => {
        const index2 = selectedRowKeys.value.indexOf(rowKey);
        if (index2 !== -1) {
          selectedRowKeys.value.splice(index2, 1);
        }
      });
    };
    const batchDelete = async () => {
      const keys = selectedRowKeys.value;
      crud("delete", [keys]).then(() => {
        selectedRowKeys.value = [];
      });
    };
    const search = (params) => {
      searchParams.value = {};
      Object.keys(params).forEach((key) => {
        var _a2;
        if (((_a2 = params[key]) != null ? _a2 : false) !== false && params[key] !== "") {
          searchParams.value[key] = params[key];
        }
      });
      if (pagination.value)
        pagination.value.current = 1;
      get();
    };
    const contentRef = ref();
    const searchRef = ref();
    const _setSelectedRowKeys = (keys) => setSelectedRowKeys(config.value, keys);
    expose({
      contentRef,
      get,
      resetSearchParams: (_b = searchRef.value) == null ? void 0 : _b.reset,
      setSelectedRowKeys: _setSelectedRowKeys,
      getSelectedRowKeys: () => selectedRowKeys.value
    });
    return (_ctx, _cache) => {
      var _a2, _b2, _c, _d;
      const _component_a_card = resolveComponent("a-card");
      return openBlock(), createBlock(_component_a_card, {
        id: unref(tableId),
        style: normalizeStyle(__spreadValues({ width: "100%" }, ((_a2 = unref(config)) == null ? void 0 : _a2.style) || {})),
        title: (_b2 = unref(config)) == null ? void 0 : _b2.title,
        bordered: Boolean((_c = unref(config)) == null ? void 0 : _c.card),
        class: normalizeClass(["v-table", [!((_d = unref(config)) == null ? void 0 : _d.card) && "general-card"]])
      }, {
        default: withCtx(() => {
          var _a3, _b3;
          return [
            !((_a3 = unref(config)) == null ? void 0 : _a3.hiddenSearch) ? (openBlock(), createBlock(_sfc_main$5, {
              key: 0,
              ref_key: "searchRef",
              ref: searchRef,
              config: unref(config),
              onSearch: search
            }, null, 8, ["config"])) : createCommentVNode("", true),
            !((_b3 = unref(config)) == null ? void 0 : _b3.hiddenToolbar) ? (openBlock(), createBlock(VToolbar, {
              key: 1,
              config: unref(config),
              onAdd: add,
              onBatchDelete: batchDelete
            }, {
              "toolbar-left": withCtx(() => [
                renderSlot(_ctx.$slots, "toolbar-left")
              ]),
              "toolbar-left-extend": withCtx(() => [
                renderSlot(_ctx.$slots, "toolbar-left-extend")
              ]),
              "toolbar-right": withCtx(() => [
                renderSlot(_ctx.$slots, "toolbar-right")
              ]),
              _: 3
            }, 8, ["config"])) : createCommentVNode("", true),
            createVNode(VContent, {
              ref_key: "contentRef",
              ref: contentRef,
              config: unref(config),
              onUpdate: update,
              onDeleteData: deleteData,
              onGet: get
            }, null, 8, ["config"])
          ];
        }),
        _: 3
      }, 8, ["id", "style", "title", "bordered", "class"]);
    };
  }
}));
const NAV_HEIGHT = 60;
const getContainerHeight = () => {
  const { innerHeight } = window;
  const height = innerHeight - NAV_HEIGHT - 32;
  window.containerHeight = height;
  document.body.style.setProperty("--container-height", `${height}px`);
};
getContainerHeight();
window.addEventListener("resize", () => getContainerHeight());
export { _sfc_main as VTable };
