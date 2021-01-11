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
/******/ 	return __webpack_require__(__webpack_require__.s = 169);
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

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dialog_vue__ = __webpack_require__(94);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cdbdd6e2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dialog_vue__ = __webpack_require__(296);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(250)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dialog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cdbdd6e2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dialog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/dialog/dialog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cdbdd6e2", Component.options)
  } else {
    hotAPI.reload("data-v-cdbdd6e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue__ = __webpack_require__(141);



__WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */].name.replace(/c|C/, 'zg'), __WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */]);

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "c-dialog-layer" }),
    _vm._v(" "),
    _c("div", { ref: "dialog", staticClass: "c-dialog" }, [
      _vm.showHead
        ? _c(
            "div",
            { staticClass: "c-dialog-head" },
            [_vm._t("header", [_vm._v(_vm._s(_vm.title))])],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "c-dialog-content" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _vm.showFoot
        ? _c(
            "div",
            { staticClass: "c-dialog-foot" },
            [
              _vm._t("footer", [
                _c(
                  "c-button",
                  {
                    staticClass: "c-dialog-confirm",
                    attrs: {
                      showLoading: _vm.showLoading,
                      size: "normal",
                      type: "primary"
                    },
                    on: { click: _vm.onConfirm }
                  },
                  [_vm._v(_vm._s(_vm.confirmLabel))]
                ),
                _vm._v(" "),
                _vm.showCancel
                  ? _c(
                      "c-button",
                      {
                        staticClass: "c-dialog-cancel",
                        attrs: { size: "normal" },
                        on: { click: _vm.onCancel }
                      },
                      [_vm._v(_vm._s(_vm.cancelLabel))]
                    )
                  : _vm._e()
              ])
            ],
            2
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cdbdd6e2", esExports)
  }
}

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = require("clever-ui/lib/button");

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__button__);




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { CButton: __WEBPACK_IMPORTED_MODULE_0__button___default.a },
  name: 'cDialog',
  props: {
    title: {
      type: String
    },
    showHead: {
      type: Boolean,
      default: true
    },
    showFoot: {
      type: Boolean,
      default: true
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    confirmLabel: {
      type: String,
      default: '确定'
    },
    showCancel: {
      type: Boolean,
      default: true
    },

    enableLoading: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      showLoading: false
    };
  },
  updated: function updated() {
    this.resize();
  },
  mounted: function mounted() {
    this.resize();
  },

  methods: {
    resize: function resize() {
      var dialog = this.$refs.dialog;
      var rect = dialog.getBoundingClientRect();
      var containerRect = document.body.getBoundingClientRect();
      dialog.style.top = parseInt((containerRect.height - rect.height) / 2) + 'px';
      dialog.style.left = parseInt((containerRect.width - rect.width) / 2) + 'px';
    },
    onConfirm: function onConfirm() {
      var _this = this;

      if (this.enableLoading) this.showLoading = true;
      this.$emit('confirm', function () {
        _this.showLoading = false;
      });
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    }
  }
});

/***/ })

/******/ });