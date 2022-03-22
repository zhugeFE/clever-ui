module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(36);
var toPrimitive = __webpack_require__(40);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_boxplot_vue__ = __webpack_require__(86);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69bc60e9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_boxplot_vue__ = __webpack_require__(308);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(254)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_boxplot_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69bc60e9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_boxplot_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/boxplot/boxplot.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69bc60e9", Component.options)
  } else {
    hotAPI.reload("data-v-69bc60e9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boxplot__ = __webpack_require__(143);


__WEBPACK_IMPORTED_MODULE_0__boxplot__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__boxplot__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__boxplot__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__boxplot__["a" /* default */].name.replace(/c|C/, 'zg'), __WEBPACK_IMPORTED_MODULE_0__boxplot__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__boxplot__["a" /* default */]);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(27);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(29);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(30);
var hide = __webpack_require__(10);
var has = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(213), __esModule: true };

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(207);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(225);
module.exports = __webpack_require__(1).Array.from;


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(14);
var createDesc = __webpack_require__(25);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(30);
var $export = __webpack_require__(20);
var toObject = __webpack_require__(33);
var call = __webpack_require__(77);
var isArrayIter = __webpack_require__(76);
var toLength = __webpack_require__(34);
var createProperty = __webpack_require__(217);
var getIterFn = __webpack_require__(59);

$export($export.S + $export.F * !__webpack_require__(78)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 254:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(24) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__util__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["a"]; });




/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(31);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "container", staticClass: "container", style: _vm.style },
    [_vm._v("\n  盒须图\n")]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69bc60e9", esExports)
  }
}

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(17);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(39);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(35)(false);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28)('wks');
var uid = __webpack_require__(29);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(57);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(51);
var setToStringTag = __webpack_require__(38);
var getPrototypeOf = __webpack_require__(56);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(53);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(38);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(11);
var dPs = __webpack_require__(54);
var enumBugKeys = __webpack_require__(26);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(23)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(45).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(11);
var getKeys = __webpack_require__(32);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(33);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17);
var defined = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(44);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(21);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  on: function on(dom, eventName, handle) {
    var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (!dom || !eventName || !handle) return;
    if (document.addEventListener) {
      dom.addEventListener(eventName, handle, useCapture);
    } else {
      dom.attachEvent('on' + eventName, handle);
    }
  },
  addStyleSheet: function addStyleSheet(id, rules) {
    var styleEl = document.createElement('style');
    var styleSheet = void 0;

    styleEl.id = id;
    this.removeStyleSheet(id);
    document.head.appendChild(styleEl);
    styleSheet = styleEl.sheet;

    for (var i = 0, rl = rules.length; i < rl; i++) {
      var j = 1;
      var rule = rules[i];
      var selector = rules[i][0];
      var propStr = '';
      if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
        rule = rule[1];
        j = 0;
      }

      for (var pl = rule.length; j < pl; j++) {
        var prop = rule[j];
        propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
      }

      styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
    }
  },
  removeStyleSheet: function removeStyleSheet(id) {
    document.getElementById(id) && document.getElementById(id).remove();
  },
  getStyle: function getStyle(node, style) {
    return window.getComputedStyle(node)[style];
  },
  setStyle: function setStyle(node, style) {
    for (var key in style) {
      node.style[key] = style[key];
    }
  },
  setPosition: function setPosition(node) {
    var position = this.getStyle(node, 'position');
    if (position === 'static') {
      this.setStyle(node, {
        position: 'relative'
      });
    }
  }
});

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(58)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(41)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

var util = {
  dayTime: 24 * 60 * 60 * 1000,
  colors: ['#00a0e9', '#f4b93b', '#85bd41', '#f29c9f', '#8f82bc', '#0068b7', '#f29b76', '#13b5b1', '#ea68a2', '#fff100', '#1ec0ff', '#f9a11b', '#8cd790', '#40ccca', '#aaabd3', '#2b90d9', '#ec7a4a', '#f29b76', '#ea68a2', '#ffdd38'],
  type: function type(obj) {
    return Object.prototype.toString.call(obj);
  },
  isObject: function isObject(obj) {
    return this.type(obj) === '[object Object]';
  },
  isArray: function isArray(obj) {
    return this.type(obj) === '[object Array]';
  },
  isString: function isString(obj) {
    return this.type(obj) === '[object String]';
  },
  isNumber: function isNumber(obj) {
    return this.type(obj) === '[object Number]';
  },
  isDate: function isDate(obj) {
    return this.type(obj) === '[object Date]';
  },
  isFunction: function isFunction(obj) {
    return this.type(obj) === '[object Function]';
  },
  equal: function equal(a, b) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(a) === __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(b);
  },
  guid: function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },
  toDoubleNumber: function toDoubleNumber(num) {
    num += '';
    return num > 9 ? num : '0' + num;
  },
  dateFormat: function dateFormat() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';

    return formatter.replace('yyyy', date.getFullYear()).replace('mm', this.toDoubleNumber(date.getMonth() + 1)).replace('dd', this.toDoubleNumber(date.getDate()));
  },
  timeFormat: function timeFormat() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hh:mm:ss';
    var autoShort = arguments[2];

    if (this.isDate(date)) {
      return formatter.replace('hh', this.toDoubleNumber(date.getHours())).replace('mm', this.toDoubleNumber(date.getMinutes())).replace('ss', this.toDoubleNumber(date.getSeconds()));
    } else if (this.isNumber(date)) {
      var s = parseInt(date / 1000);
      var m = parseInt(s / 60);
      var h = parseInt(m / 60);
      s = s - m * 60;
      m = m - h * 60;
      if (!h && autoShort) {
        formatter = formatter.replace(/hh\S*?mm/, 'mm');
        if (!m) {
          formatter = formatter.replace(/mm\S*?ss/, 'ss');
          return formatter.replace('ss', s);
        }
      }
      return formatter.replace('hh', this.toDoubleNumber(h)).replace('mm', this.toDoubleNumber(m)).replace('ss', this.toDoubleNumber(s));
    }
  },
  isOneDay: function isOneDay(day1, day2) {
    return this.dateFormat(day1) === this.dateFormat(day2);
  },
  compareDays: function compareDays(day1, day2) {
    var a = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate());
    var b = new Date(day2.getFullYear(), day2.getMonth(), day2.getDate());
    var res = (a.getTime() - b.getTime()) / this.dayTime;
    return res;
  },
  random: function random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  },
  clone: function clone(obj) {
    if (this.isObject(obj)) {
      var result = {};
      for (var key in obj) {
        var prop = obj[key];
        result[key] = this.clone(prop);
      }
      return result;
    } else if (this.isArray(obj)) {
      var _result = [];
      for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        _result.push(this.clone(item));
      }
      return _result;
    } else {
      return obj;
    }
  },
  mergeObject: function mergeObject(defaults, option) {
    defaults = defaults || {};
    option = option || {};
    for (var prop in defaults) {
      if (this.isObject(defaults[prop])) {
        option[prop] = option[prop] ? option[prop] : {};
        this.mergeObject(defaults[prop], option[prop]);
      } else if (this.isArray(defaults[prop])) {
        if (!option[prop] || option[prop] === []) {
          option[prop] = defaults[prop];
        } else {
          var i = 0;
          var optLenght = option[prop].length;
          var defaultLength = defaults[prop].length;
          for (i; i < optLenght && i < defaultLength; i++) {
            option[prop][i] = this.mergeObject(defaults[prop][i], option[prop][i]);
          }
        }
      } else {
        option[prop] = option[prop] === null || option[prop] === undefined ? defaults[prop] : option[prop];
      }
    }
    return option;
  },
  toThousands: function toThousands(num) {
    var source = String(num).split('.');
    source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), '$1,');
    return source.join('.');
  },
  toTime: function toTime(value) {
    var m = parseInt(value / 60);
    var h = parseInt(value / 3600);
    var d = parseInt(value / (24 * 3600));
    if (h > 24) {
      return d + '天';
    } else if (m > 60) {
      return h + '小时';
    } else {
      return m + '分';
    }
  },
  getRegExp: function getRegExp(str) {
    var keyWords = /\\|\^|\$|\*|\+|\?|\{|\}|\[|\]|\.|:|=|\||-|\/|<|!|\(|\)/;
    var words = [];
    str.split(/\s{0}/).forEach(function (code) {
      if (keyWords.test(code)) {
        words.push('\\' + code);
      } else {
        words.push(code);
      }
    });
    return new RegExp(words.join(''));
  },
  strMiddleSplit: function strMiddleSplit(str) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      maxLength: 20,
      beginLength: 8,
      endLength: 8,
      replaceStr: '...'
    };

    str += '';
    var reg = {
      fullCharReg: /[^\x00-\xff]/,
      fullCharsReg: /[^\x00-\xff]/g,
      anyChars: /[\S\s]{1}/g
    };

    var fullCharLength = (str.match(reg.fullCharsReg) || []).length;
    var fullLength = str.length + fullCharLength;
    var beginArr = [];
    var beginLength = 0;
    var endArr = [];
    var endLength = 0;

    if (fullLength > config.maxLength) {
      var strArr = str.match(reg.anyChars);

      strArr.forEach(function (char) {
        if (beginLength >= config.beginLength) return;
        var len = reg.fullCharReg.test(char) ? 2 : 1;
        beginLength += len;
        beginArr.push(char);
      });

      strArr.reverse().forEach(function (char) {
        if (endLength >= config.endLength) return;
        var len = reg.fullCharReg.test(char) ? 2 : 1;
        endLength += len;
        endArr.push(char);
      });

      return beginArr.join('') + config.replaceStr + endArr.reverse().join('');
    }

    return str;
  },
  percentCalculate: function percentCalculate(numerator, denominator) {
    var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

    var data = 0;
    if (numerator && denominator) {
      precision = Math.pow(10, precision);
      numerator = numerator * precision * 100;
      data = Math.floor(numerator / denominator) / precision;
    }
    return data + '%';
  },
  throttle: function throttle(fn, wait) {
    var pre = Date.now();
    return function () {
      var context = this;
      var args = arguments;
      var now = Date.now();
      if (now - pre >= wait) {
        fn.apply(context, args);
        pre = now;
      }
    };
  },
  getTooltipLabel: function getTooltipLabel(label) {
    return '<span style="opacity: 0.8;">' + label + '</span>';
  }
};

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(21);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cBoxplot',
  props: {
    optionWrapper: {
      type: Function
    },

    width: {
      type: Number
    },

    height: {
      type: Number,
      default: 300
    },

    valueUnit: {
      type: String,
      default: ''
    },

    tooltipFormatter: {
      type: Function
    },
    yAxisFormatter: {
      type: Function,
      default: function _default(value) {
        if (parseFloat(value) >= 60) {
          return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* util */].toTime(value);
        } else {
          return value + '秒';
        }
      }
    },
    xAxisFormatter: {
      type: Function,
      default: function _default(label) {
        if (/^\d{4}-\d{2}-\d{2}$/.test(label)) {
          return label.replace(/\d{4}-/, '');
        } else if (/^\d{4}-\d{2}-\d{2}\|\d{4}-\d{2}-\d{2}$/.test(label)) {
          var dates = label.match(/\d{4}-\d{2}-\d{2}/g);
          return dates[0].replace(/\d{4}-/, '') + '~' + dates[1].replace(/\d{4}-/, '');
        } else {
          label = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* util */].strMiddleSplit(label);
          if (/:/.test(label)) {
            return label.replace(/\d{4}-\d{2}-\d{2}\s/, '');
          } else if (/,/.test(label)) {
            return label.replace(/,/g, '-');
          } else {
            return label;
          }
        }
      }
    },

    store: {
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    store: {
      handler: function handler(newValue) {
        this.store = newValue;
        this.chartSetOption();
      },

      deep: true
    }
  },
  data: function data() {
    return {
      colors: __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* util */].colors
    };
  },

  computed: {
    style: function style() {
      var style = {
        height: this.height + 'px'
      };
      if (this.width) style.width = this.width + 'px';
      return style;
    },
    tooltipFormat: function tooltipFormat() {
      var _this = this;

      return function (params) {
        if (_this.tooltipFormatter) return _this.tooltipFormatter(params);
        var xLabel = '';
        var rows = [];
        if (!xLabel) {
          xLabel = params.name;
          rows.push(xLabel);
        }
        rows.push(params.marker + ' ' + __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* util */].getTooltipLabel(params.seriesName));
        if (params.seriesType === 'boxplot') {
          var labels = ['最大值', '上四分位', '中位数', '下四分位', '最小值'];
          var value = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(params.value));
          var temp = value[1];
          value[1] = value[5];
          value[5] = temp;
          value.forEach(function (v, i) {
            if (i === 0) return;
            if (i <= labels.length) {
              rows.push(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* util */].getTooltipLabel(labels[i - 1]) + ': <span>\n              ' + __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* util */].timeFormat(parseInt(v + '000')) + _this.valueUnit + '</span>');
            }
          });
        }
        return rows.join('<br/>');
      };
    },
    option: function option() {
      var option = {
        color: this.colors,
        backgroundColor: 'white',
        grid: {
          containLabel: false,
          show: false,
          left: 50,
          right: 50,
          top: 50,
          bottom: 30
        },
        legend: {
          width: '60%',
          top: 0,
          type: 'scroll',
          icon: 'circle'
        },
        tooltip: {
          backgroundColor: '#6b6b6b',
          trigger: 'item',
          padding: [8, 20, 8, 10],
          axisPointer: {
            type: 'shadow',
            lineStyle: {
              color: '#999',
              width: 2,
              type: 'solid'
            }
          },
          textStyle: {
            fontSize: 12,
            color: '#fff'
          },
          formatter: this.tooltipFormat
        },
        xAxis: {
          data: this.getXAxis(),
          boundaryGap: true,
          axisLabel: {
            textStyle: {
              color: '#404245'
            },
            formatter: this.xAxisFormatter
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#ccc', '#fff'],
              opacity: 0.1
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#d4d4d4'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#E8E8E8',
              width: 1,
              type: 'dashed'
            }
          },
          axisLabel: {
            show: true,
            formatter: this.yAxisFormatter,
            textStyle: {
              color: '#75787D'
            }
          }
        },
        series: this.getSeries()
      };
      if (this.optionWrapper) {
        option = this.optionWrapper(option);
      }
      return option;
    }
  },
  mounted: function mounted() {
    this.chartSetOption();
  },

  methods: {
    chartSetOption: function chartSetOption() {
      var chart = window.echarts.init(this.$refs.container);
      chart.setOption(this.option, true);
    },
    getXAxis: function getXAxis() {
      return this.store.x_axis;
    },
    getSeries: function getSeries() {
      return this.store.series.map(function (series) {
        return {
          name: series.names.join('-'),
          type: 'boxplot',
          itemStyle: {
            borderWidth: 2
          },
          data: series.values
        };
      });
    }
  }
});

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ })

/******/ });