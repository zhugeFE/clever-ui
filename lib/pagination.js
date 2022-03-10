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
/******/ 	return __webpack_require__(__webpack_require__.s = 188);
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

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selector__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__button__);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cPagination',
  components: { CButton: __WEBPACK_IMPORTED_MODULE_1__button___default.a, CSelector: __WEBPACK_IMPORTED_MODULE_0__selector___default.a },
  props: {
    total: {
      type: Number,
      required: true
    },

    pageSizeOptions: {
      type: Array,
      default: function _default() {
        return [5, 10, 20, 50];
      }
    },

    align: {
      type: String,
      default: 'right'
    },

    defaultPageNum: {
      type: Number,
      default: 1
    },

    defaultPageSize: {
      type: Number,
      default: 5
    }
  },
  data: function data() {
    return {
      pageSize: { v: this.defaultPageSize },
      pageNum: { v: this.defaultPageNum }
    };
  },

  computed: {
    sizeOptions: function sizeOptions() {
      return this.pageSizeOptions.map(function (size) {
        return {
          v: size,
          label: '\u6BCF\u9875' + size + '\u6761'
        };
      });
    },
    pageNumList: function pageNumList() {
      var totalPage = Math.ceil(this.total / this.pageSize.v) || 1;
      var store = [];
      for (var i = 0; i < totalPage; i++) {
        store.push({
          v: i + 1,
          label: '\u7B2C' + (i + 1) + '\u9875'
        });
      }
      return store;
    },
    style: function style() {
      return {
        'text-align': this.align
      };
    }
  },
  watch: {
    pageSize: function pageSize(size, preSize) {
      var _this = this;

      if (size.v === preSize.v) return;
      this.pageNum = { v: 1 };
      this.$nextTick(function () {
        _this.onChange();
      });
    },
    pageNumList: function pageNumList() {
      if (this.defaultPageNum <= this.pageNumList) {
        this.pageNum = { v: this.defaultPageNum };
      } else {
        this.pageNum = this.pageNumList[0];
      }
    }
  },
  methods: {
    onChange: function onChange() {
      this.$emit('change', {
        pageSize: this.pageSize.v,
        pageNum: this.pageNum.v
      });
    },
    onPre: function onPre() {
      this.pageNum = { v: this.pageNum.v - 1 };
      this.onChange();
    },
    onNext: function onNext() {
      this.pageNum = { v: this.pageNum.v + 1 };
      this.onChange();
    }
  }
});

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_665e07ad_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(301);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(246)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_665e07ad_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/pagination/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-665e07ad", Component.options)
  } else {
    hotAPI.reload("data-v-665e07ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(157);


__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */].name.replace(/c|C/, 'zg'), __WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "c-pagination", style: _vm.style },
    [
      _vm._t("left"),
      _vm._v(" "),
      _c("span", { staticClass: "c-pg-txt" }, [
        _vm._v("共"),
        _c("span", { staticClass: "c-pg-num" }, [_vm._v(_vm._s(_vm.total))]),
        _vm._v("条, "),
        _c("span", { staticClass: "c-pg-num" }, [
          _vm._v(_vm._s(_vm.pageNumList.length))
        ]),
        _vm._v("页")
      ]),
      _vm._v(" "),
      _c("c-selector", {
        attrs: {
          store: _vm.sizeOptions,
          width: 108,
          "expand-arrow": "up",
          "key-field": "v",
          "label-field": "label"
        },
        model: {
          value: _vm.pageSize,
          callback: function($$v) {
            _vm.pageSize = $$v
          },
          expression: "pageSize"
        }
      }),
      _vm._v(" "),
      _c("c-selector", {
        attrs: {
          store: _vm.pageNumList,
          "expand-arrow": "up",
          width: 108,
          "key-field": "v",
          "label-field": "label"
        },
        on: { change: _vm.onChange },
        model: {
          value: _vm.pageNum,
          callback: function($$v) {
            _vm.pageNum = $$v
          },
          expression: "pageNum"
        }
      }),
      _vm._v(" "),
      _c("c-button", {
        staticClass: "c-pg-pre",
        attrs: {
          disable: _vm.pageNum.v <= 1,
          size: "normal",
          icon: "cicon-pagination-prev"
        },
        on: { click: _vm.onPre }
      }),
      _vm._v(" "),
      _c("c-button", {
        staticClass: "c-pg-next",
        attrs: {
          disable: _vm.pageNum.v >= _vm.pageNumList.length,
          size: "normal",
          icon: "cicon-pagination-next"
        },
        on: { click: _vm.onNext }
      }),
      _vm._v(" "),
      _vm._t("right")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-665e07ad", esExports)
  }
}

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = require("clever-ui/lib/button");

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = require("clever-ui/lib/selector");

/***/ })

/******/ });