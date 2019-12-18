(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("zrender"));
	else if(typeof define === 'function' && define.amd)
		define(["zrender"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("zrender")) : factory(root["zrender"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_121__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 187);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__util__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["a"]; });




/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(19);
var createDesc = __webpack_require__(35);
module.exports = __webpack_require__(9) ? function (object, key, value) {
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

/***/ 121:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_121__;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(2);
var ctx = __webpack_require__(33);
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(27);
var defined = __webpack_require__(20);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zrender__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zrender___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zrender__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treeNode__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__treeLine__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);







/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cTree',
  props: {
    dataList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    direction: {
      type: String,
      default: 'top-bottom',
      validator: function validator(value) {
        var rules = ['top-bottom', 'bottom-top', 'left-right', 'right-left'];
        return rules.includes(value);
      }
    },

    getRectBackground: {
      type: Function,
      default: function _default(name) {
        return '#fae692';
      }
    }
  },
  data: function data() {
    return {
      zr: {},
      activeNode: {},
      style: {},
      containerStyle: {},
      firstPadding: 20,
      tooltipStyle: {},
      tooltipText: '',
      maxLevelNum: 1
    };
  },

  methods: {
    initStyle: function initStyle() {
      var containerRect = this.containerStyle = this.$refs.container.getBoundingClientRect();
      var percentWidth = 1000 / containerRect.width;
      var percentHeight = 800 / containerRect.height;
      this.style = {
        width: Math.floor(140 / percentWidth),
        height: Math.floor(48 / percentHeight),
        paddingTop: Math.floor(50 / percentHeight),
        paddingRight: Math.floor(10 / percentWidth),
        paddingBottom: Math.floor(50 / percentHeight),
        paddingLeft: Math.floor(10 / percentWidth)
      };
    },
    getRectShapes: function getRectShapes() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var result = [];

      if (['top-bottom', 'bottom-top'].includes(this.direction)) {
        var y = 0;
        if (this.direction === 'top-bottom') {
          y = this.firstPadding + this.style.height * 2.2 * level;
        } else {
          y = this.containerStyle.height - this.firstPadding - this.style.height - this.style.height * 2.2 * level;
        }
        var marginLeft = this.style.paddingRight + this.style.paddingLeft;
        var maxWidth = (this.style.width + marginLeft) * length - marginLeft;
        var startX = (this.containerStyle.width - maxWidth) / 2;
        for (var i = 0; i < length; i++) {
          result.push(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.style, {
            x: startX + (this.style.width + marginLeft) * i,
            y: y
          }));
        }
      } else {
        var x = 0;
        var marginTop = this.style.height;
        var _marginLeft = this.style.height * 1.5;
        var _maxWidth = (this.style.width + _marginLeft) * (this.maxLevelNum + 1) - _marginLeft;
        var maxHeight = (this.style.height + marginTop) * length - marginTop;
        var _startX = (this.containerStyle.width - _maxWidth) / 2;
        var startY = (this.containerStyle.height - maxHeight) / 2;
        if (this.direction === 'left-right') {
          x = _startX + (this.style.width + _marginLeft) * level;
        } else {
          x = _startX + (this.style.width + _marginLeft) * (this.maxLevelNum - level);
        }

        for (var _i = 0; _i < length; _i++) {
          result.push(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.style, {
            x: x,
            y: startY + (this.style.height + marginTop) * _i
          }));
        }
      }

      return result;
    },
    getLineShape: function getLineShape(start, end) {
      var width = this.style.width;
      var height = this.style.height;
      var num = 0.5;
      var lineShape = {
        x1: 0,
        y1: 0,
        cpx1: 0,
        cpy1: 0,
        cpx2: 0,
        cpy2: 0,
        x2: 0,
        y2: 0
      };

      if (['top-bottom', 'bottom-top'].includes(this.direction)) {
        if (this.direction === 'top-bottom') {
          lineShape.y1 = start.y + height;
          lineShape.cpy1 = lineShape.y1 + height * num;
          lineShape.y2 = end.y;
          lineShape.cpy2 = lineShape.y2 - height * num;
        } else {
          lineShape.y1 = start.y;
          lineShape.cpy1 = lineShape.y1 - height * num;
          lineShape.y2 = end.y + height;
          lineShape.cpy2 = lineShape.y2 + height * num;
        }
        lineShape.x1 = start.x + width / 2;
        lineShape.cpx1 = lineShape.x1 + 10;
        lineShape.x2 = end.x + width / 2;
        lineShape.cpx2 = lineShape.x2 - 10;
      } else {
        if (this.direction === 'left-right') {
          lineShape.x1 = start.x + width;
          lineShape.cpx1 = lineShape.x1 + height * num;
          lineShape.x2 = end.x;
          lineShape.cpx2 = lineShape.x2 - height * num;
        } else {
          lineShape.x1 = start.x;
          lineShape.cpx1 = lineShape.x1 - height * num;
          lineShape.x2 = end.x + width;
          lineShape.cpx2 = lineShape.x2 + height * num;
        }
        lineShape.y1 = start.y + height / 2;
        lineShape.cpy1 = lineShape.y1 - 10;
        lineShape.y2 = end.y + height / 2;
        lineShape.cpy2 = lineShape.y2 + 10;
      }

      return lineShape;
    },
    onTreeNodeClick: function onTreeNodeClick(obj) {
      var _this = this;

      if (!obj) return;
      if (obj.data.level) {
        this.activeNode[obj.data.level] = obj.index;
      }
      if (obj.event) {
        for (var level in this.activeNode) {
          if (obj.data && level > obj.data.level) {
            this.activeNode[level] = undefined;
          }
        }
        if (obj.data.children.length) {
          this.maxLevelNum = obj.data.level + 1;
        }
        this.$emit('nodeClick', obj.data);
        this.init();
        return;
      }

      if (obj.data && __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* util */].isArray(obj.data.children)) {
        var _level = (obj.data.level || 0) + 1;
        var rectShapes = this.getRectShapes(_level, obj.data.children.length);
        obj.data.children.forEach(function (item, index) {
          var node = new __WEBPACK_IMPORTED_MODULE_2__treeNode__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rectShapes[index], {
            name: item.name,
            index: index,
            silence: item.disabled,
            defaultActive: _this.activeNode[_level] === index,
            data: {
              children: item.children,
              name: item.name,
              level: _level
            },
            onClick: _this.onTreeNodeClick,
            onMouseover: _this.onNodeMouseOver,
            onMouseout: _this.onNodeMouseOut,
            getRectBackground: _this.getRectBackground
          }));
          node.addTo(_this.zr);
          var line = new __WEBPACK_IMPORTED_MODULE_3__treeLine__["a" /* default */]({
            shape: _this.getLineShape(obj, rectShapes[index]),
            text: item.disabled ? '' : item.label,
            direction: _this.direction,
            active: _this.activeNode[_level] === index
          });
          line.addTo(_this.zr);
        });
      }
    },
    renderTreeNode: function renderTreeNode() {
      var _this2 = this;

      var rectShapes = this.getRectShapes(0, this.dataList.length);
      this.dataList.forEach(function (item, index) {
        var node = new __WEBPACK_IMPORTED_MODULE_2__treeNode__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rectShapes[index], {
          name: item.name,
          index: index,
          silence: item.disabled,
          defaultActive: true,
          data: {
            children: item.children,
            level: 0
          },
          onClick: _this2.onTreeNodeClick,
          onMouseover: _this2.onNodeMouseOver,
          onMouseout: _this2.onNodeMouseOut,
          getRectBackground: _this2.getRectBackground
        }));
        node.addTo(_this2.zr);
      });
    },
    onNodeMouseOver: function onNodeMouseOver(position, text, showTip) {
      var _this3 = this;

      if (!position || !position.x || !text || !showTip) return;
      this.tooltipText = text;
      this.tooltipStyle = {
        overflow: 'hidden'
      };
      this.$nextTick(function () {
        var tooltip = _this3.$refs.tooltip.getBoundingClientRect();
        _this3.tooltipStyle = {
          left: position.x + (position.width - tooltip.width) / 2 + 'px',
          top: position.y - tooltip.height - 5 + 'px'
        };
      });
    },
    onNodeMouseOut: function onNodeMouseOut() {
      this.tooltipText = '';
    },
    init: function init() {
      this.zr.clear();
      this.initStyle();
      this.renderTreeNode();
    }
  },
  watch: {
    dataList: function dataList() {
      if (this.dataList.length && this.dataList[0].children.length) {
        this.maxLevelNum = 1;
      } else {
        this.maxLevelNum = 0;
      }
      if (this.zr) {
        this.init();
      }
    }
  },
  created: function created() {
    var _this4 = this;

    this.$nextTick(function () {
      _this4.zr = __WEBPACK_IMPORTED_MODULE_1_zrender___default.a.init(_this4.$refs.container);
      _this4.init();
    });
  }
});

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(212);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_vue__ = __webpack_require__(209);



var components = [__WEBPACK_IMPORTED_MODULE_0__tree_vue__["a" /* default */]];
components.forEach(function (component) {
  component.install = function (Vue) {
    Vue.component(component.name, component);
    Vue.component(component.name.replace(/c|C/, 'zg'), component);
  };
});

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__tree_vue__["a" /* default */]);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(52);
var toPrimitive = __webpack_require__(57);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ 2:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__ = __webpack_require__(153);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_610b47e2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__ = __webpack_require__(283);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(245)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_610b47e2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/tree/tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-610b47e2", Component.options)
  } else {
    hotAPI.reload("data-v-610b47e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zrender__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zrender___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zrender__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);





var _class = function () {
  function _class(options) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, _class);

    this._options = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* util */].mergeObject({
      shape: {},
      text: '',
      direction: '',
      active: false
    }, options);

    this._style = {
      lineWidth: 1,
      stroke: '#f0f0f0'
    };
    this._textStyle = {
      color: '#bcbec2'
    };
    if (this._options.active) {
      this._style = {
        lineWidth: 3,
        stroke: '#f0c348',
        color: '#333333'
      };
      this._textStyle = {
        color: '#354052'
      };
    }

    this._bezier = null;
    this._lineText = null;
    this._lineTextBackground = null;
    this._init();
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(_class, [{
    key: '_init',
    value: function _init() {
      this._initTreeLine();
      if (this._options.text) {
        this._initText();
      }
    }
  }, {
    key: '_makeGrahpPosition',
    value: function _makeGrahpPosition(inner, outer) {
      var direction = this._options.direction;
      var innerShape = inner.getBoundingRect();
      var outerShape = outer.getBoundingRect();
      var position = {
        y: (outerShape.height - innerShape.height) / 2 + outerShape.y
      };
      if (direction === 'left-right') {
        position.x = outerShape.x + (outerShape.width - innerShape.width);
      } else if (direction === 'right-left') {
        position.x = outerShape.x;
      } else {
        position.x = (outerShape.width - innerShape.width) / 2 + outerShape.x;
      }

      inner.setStyle(position);
    }
  }, {
    key: '_initTreeLine',
    value: function _initTreeLine() {
      this._bezier = new __WEBPACK_IMPORTED_MODULE_2_zrender___default.a.BezierCurve({
        shape: this._options.shape,
        style: this._style,
        cursor: 'default'
      });
    }
  }, {
    key: '_initText',
    value: function _initText() {
      var shape = this._options.shape;
      var direction = this._options.direction;
      var x = 0;
      var y = 0;
      switch (direction) {
        case 'top-bottom':
          x = shape.x2 - 15;
          y = shape.y2 - 23;
          break;
        case 'bottom-top':
          x = shape.x2 - 15;
          y = shape.y2 + 3;
          break;
        case 'left-right':
          x = shape.x2 - 45;
          y = shape.y2 - 10;
          break;
        case 'right-left':
          x = shape.x2 + 5;
          y = shape.y2 - 10;
          break;
      }

      this._lineTextBackground = new __WEBPACK_IMPORTED_MODULE_2_zrender___default.a.Rect({
        shape: {
          width: 40,
          height: 20,
          x: x,
          y: y
        },
        style: {
          fill: '#ffffff'
        },
        cursor: 'default'
      });
      this._lineText = new __WEBPACK_IMPORTED_MODULE_2_zrender___default.a.Text({
        style: {
          x: x,
          y: y,
          text: this._options.text,
          textFill: this._textStyle.color,
          textFont: '14px sans-serif',
          textBaseline: 'top'
        },
        cursor: 'default',
        z: 1
      });
      this._makeGrahpPosition(this._lineText, this._lineTextBackground);
    }
  }, {
    key: 'addTo',
    value: function addTo(zr) {
      if (zr && zr.add) {
        zr.add(this._bezier);
        if (this._lineTextBackground && this._lineText) {
          zr.add(this._lineTextBackground);
          zr.add(this._lineText);
        }
      }
    }
  }]);

  return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zrender__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zrender___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_zrender__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);






var textColor = ['#333333', '#858585'];

var defaultColor = {
  fill: '#ffffff',
  stroke: '#dadada'
};
var hoverColor = {
  fill: '#fafafa',
  stroke: '#dadada'
};
var disabledStyle = {
  fill: '#fafafa',
  stroke: '#dadada'
};

var _class = function () {
  function _class(options) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, _class);

    this._options = __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* util */].mergeObject({
      name: '',
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      index: 0,
      silence: false,
      defaultActive: false,
      data: {},
      onMouseout: function onMouseout() {},
      onMouseover: function onMouseover() {},
      onClick: function onClick() {},
      getRectBackground: function getRectBackground() {}
    }, options);

    this._treeNode = null;
    this._text = null;
    this._active = !!this._options.defaultActive;
    this._activeBackground = this._options.getRectBackground(this._options.name);
    this._showText = this._options.name;

    this._init();
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(_class, [{
    key: '_init',
    value: function _init() {
      this._initTreeNode();
      this._initTitle();
      if (this._active) {
        this._onClick();
      }
    }
  }, {
    key: '_resetStyle',
    value: function _resetStyle() {
      if (this._active) {
        return;
      }
      this._treeNode.setStyle({
        stroke: defaultColor.stroke,
        fill: defaultColor.fill
      });
      this._text.setStyle({
        fill: textColor[0]
      });
    }
  }, {
    key: '_activeStyle',
    value: function _activeStyle() {
      this._treeNode.setStyle({
        stroke: this._activeBackground,
        fill: this._activeBackground
      });
      this._text.setStyle({
        fill: textColor[1]
      });
    }
  }, {
    key: '_hoverStyle',
    value: function _hoverStyle() {
      if (this._active) return;
      this._treeNode.setStyle(hoverColor);
      this._text.setStyle({
        fill: textColor[1]
      });
    }
  }, {
    key: '_onMouseout',
    value: function _onMouseout() {
      if (this._active) {
        this._activeStyle();
      } else {
        this._resetStyle();
      }
      if (__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* util */].isFunction(this._options.onMouseout)) {
        this._options.onMouseout();
      }
    }
  }, {
    key: '_onMouseover',
    value: function _onMouseover() {
      if (this._options.silence) return;
      this._hoverStyle();
      if (__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* util */].isFunction(this._options.onMouseover)) {
        var name = this._options.name;
        this._options.onMouseover(this.getPosition(), name, name !== this._showText);
      }
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      if (event && this._active) return;
      this._active = true;
      this._activeStyle();
      if (__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* util */].isFunction(this._options.onClick)) {
        this._options.onClick(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.getPosition(), {
          index: this._options.index,
          data: this._options.data,
          event: event
        }));
      }
    }
  }, {
    key: '_makeGrahpCenter',
    value: function _makeGrahpCenter(inner, outer) {
      var innerShape = inner.getBoundingRect();
      var outerShape = outer.getBoundingRect();
      var position = {
        x: (outerShape.width - innerShape.width) / 2 + outerShape.x,
        y: (outerShape.height - innerShape.height) / 2 + outerShape.y
      };

      inner.setStyle({
        x: position.x,
        y: position.y
      });
    }
  }, {
    key: '_initTreeNode',
    value: function _initTreeNode() {
      var colorObj = this._options.silence ? disabledStyle : defaultColor;
      this._treeNode = new __WEBPACK_IMPORTED_MODULE_3_zrender___default.a.Rect({
        shape: this.getPosition(),
        style: {
          stroke: colorObj.stroke,
          fill: colorObj.fill
        },
        cursor: this._options.silence ? 'default' : 'pointer'
      });
      if (!this._options.silence) {
        this._treeNode.on('click', this._onClick, this);
      }
      this._treeNode.on('mouseover', this._onMouseover, this);
      this._treeNode.on('mouseout', this._onMouseout, this);
    }
  }, {
    key: '_initTitle',
    value: function _initTitle() {
      var textLength = Math.floor((this._options.width + 30) / 14);
      this._showText = __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* util */].strMiddleSplit(this._options.name, {
        maxLength: textLength,
        beginLength: textLength / 2 - 1,
        endLength: textLength / 2 - 1,
        replaceStr: '...'
      });
      this._text = new __WEBPACK_IMPORTED_MODULE_3_zrender___default.a.Text({
        style: {
          text: this._showText,
          textFill: this._options.silence ? textColor[1] : textColor[0],
          textFont: '14px sans-serif',
          textBaseline: 'top'
        },
        cursor: this._options.silence ? 'default' : 'pointer',
        z: 1
      });
      this._makeGrahpCenter(this._text, this._treeNode);
      if (!this._options.silence) {
        this._text.on('click', this._onClick, this);
      }
      this._text.on('mouseover', this._onMouseover, this);
    }
  }, {
    key: 'addTo',
    value: function addTo(zr) {
      if (zr && zr.add) {
        zr.add(this._treeNode);
        zr.add(this._text);
      }
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {
      return {
        width: this._options.width,
        height: this._options.height,
        x: this._options.x,
        y: this._options.y,
        paddingTop: this._options.paddingTop,
        paddingRight: this._options.paddingRight,
        paddingBottom: this._options.paddingBottom,
        paddingLeft: this._options.paddingLeft
      };
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._active = !!this._options.defaultActive;
      this._resetStyle();
    }
  }, {
    key: 'triggerClick',
    value: function triggerClick() {
      this._treeNode.trigger('click');
    }
  }]);

  return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(215), __esModule: true };

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(227);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(36)('keys');
var uid = __webpack_require__(38);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(19).f });


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 245:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(55);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "c-tree-content" }, [
    _c("div", { ref: "container", staticClass: "c-tree-container" }),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.tooltipText,
            expression: "tooltipText"
          }
        ],
        ref: "tooltip",
        staticClass: "c-tree-container-tooltip",
        style: _vm.tooltipStyle
      },
      [_vm._v(_vm._s(_vm.tooltipText))]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-610b47e2", esExports)
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(49);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(32);
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

/***/ 34:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 35:
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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(28) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(21);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ }),

/***/ 5:
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(47);
var toAbsoluteIndex = __webpack_require__(56);
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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(54);
var pIE = __webpack_require__(43);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(27);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(17)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 54:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(51)(false);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');

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

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 57:
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

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(53) });


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(7);
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
  }
};

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ })

/******/ });
});