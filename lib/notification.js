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
/******/ 	return __webpack_require__(__webpack_require__.s = 193);
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__button__);



var Notification = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
  components: {
    CButton: __WEBPACK_IMPORTED_MODULE_1__button___default.a
  },
  data: function data() {
    return {
      className: '',
      width: 255,
      content: 'content',
      duration: 4.5,
      icon: '',
      title: 'title',
      placement: 'topRight',
      onClose: function onClose() {} };
  },

  computed: {
    clazz: function clazz() {
      var clazz = {
        'c-notification': true
      };
      if (this.className) clazz[this.className] = true;
      return clazz;
    },
    style: function style() {
      return {
        width: this.width + 'px'
      };
    }
  },
  methods: {
    close: function close() {
      this.$destroy();
      this.$el.remove();
      this.onClose();
    },
    timeout: function timeout() {
      var _this = this;

      setTimeout(function () {
        _this.close();
      }, this.duration * 1000);
    }
  },
  mounted: function mounted() {
    if (this.duration) {
      this.timeout();
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h(
      'div',
      { 'class': this.clazz, style: this.style },
      [h(
        'div',
        { 'class': 'c-notification_' },
        [function () {
          if (_this2.icon) {
            return h(
              'i',
              { 'class': _this2.icon },
              []
            );
          }
        }(), h(
          'div',
          { 'class': 'c-notification-center' },
          [h(
            'div',
            { 'class': 'c-notification-title' },
            [this.title]
          ), h(
            'div',
            { 'class': 'c-notification-content', domProps: {
                'innerHTML': this.content
              }
            },
            []
          )]
        )]
      ), h(
        'c-button',
        {
          on: {
            'click': this.close
          },
          attrs: { type: 'primary' }
        },
        ['\u77E5\u9053\u4E86']
      )]
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Notification);

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(111);
/* unused harmony namespace reexport */
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(277)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */
var __vue_template__ = null
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
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/notification/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f72fac84", Component.options)
  } else {
    hotAPI.reload("data-v-f72fac84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(162);


var notification = function notification(options) {
  var notice = new __WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]({
    data: options
  }).$mount();
  var clazz = 'c-notification-container-' + notice.placement.toLowerCase();
  if (!document.querySelector('.' + clazz)) {
    var container = document.createElement('div');
    container.setAttribute('class', clazz);
    var style = {
      position: 'fixed'
    };
    switch (notice.placement) {
      case 'topLeft':
        style.left = style.top = '20px';
        break;
      case 'topRight':
        style.right = style.top = '20px';
        break;
      case 'bottomLeft':
        break;
      case 'bottomRight':
        break;
    }
    for (var key in style) {
      container.style[key] = style[key];
    }
    document.body.appendChild(container);
  }
  document.querySelector('.' + clazz).appendChild(notice.$el);
};
notification.install = function (Vue) {
  Vue.prototype.$notification = notification;
};
/* harmony default export */ __webpack_exports__["default"] = (notification);

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = require("clever-ui/lib/button");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ })

/******/ });