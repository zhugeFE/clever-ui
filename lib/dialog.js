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
/******/ 	return __webpack_require__(__webpack_require__.s = 182);
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

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__button__);





/* harmony default export */ __webpack_exports__["a"] = ({
  components: { CButton: __WEBPACK_IMPORTED_MODULE_1__button___default.a },
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
      default: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* default */].cancel
    },
    confirmLabel: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* default */].confirm
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

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dialog_vue__ = __webpack_require__(101);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cdbdd6e2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dialog_vue__ = __webpack_require__(318);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(268)
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue__ = __webpack_require__(152);



__WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */].name.replace(/c|C/, 'zg'), __WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__dialog_vue__["a" /* default */]);

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__en_US__ = __webpack_require__(35);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__en_US__["a" /* default */]);

/***/ }),

/***/ 318:
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  'defaultNotSelected': 'default not selected',
  'defaultSelected': 'default selected',
  'disable': 'disable',
  'selectAll': 'select-all',
  'allState': 'all state',
  'allResult': 'all result',
  'halfSelectResult': 'half select result',
  'selectedResult': 'selected result',
  'show': 'show',
  'calculate': 'calculate',
  'inputBox': 'input box',
  'normalInputBox': 'normal input box',
  'cleared': 'cleared has icon',
  'inputValue': 'input value',
  'longCopy': 'I need a long, long, long, long, long copy',
  'widthAdaptation': 'width adaptation',
  'withCheckFun': 'with check function',
  'notEmptyNumber': 'cannot be empty and contain digits',
  'inputNotEmpty': 'input box cannot be empty',
  'inputNotNumber': 'input cannot contain numbers',
  'defaultMessage': 'default message',
  'normalDropdownBox': 'normal drop-down box',
  'radio': 'radio',
  'selectedValue': 'selected value',
  'normalDropdownBoxCon': 'contents of the normal drop-down box',
  'multiSelect': 'multiSelect',
  'alwaysOpen': 'always open',
  'groupDropdownBox': 'group drop-down box',
  'customDisplay': 'custom display',
  'custom': 'custom',
  'clear': 'clear',
  'largeDataDropdown': 'large data volume normal drop-down',
  'groupLargeDataDropdown': 'group big data drop-down box',
  'pleaseSelect': 'please select',
  'pattern': 'pattern',
  'dropDownLoadbox': 'drop-down load selection box',
  'titleGroupSwitch': 'title grouping - switchable data',
  'allProperties': 'all properties',
  'noData': 'no data',
  'noMatchData': 'no matching data',
  'scrollEvent': 'scroll event',
  'element': 'element',
  'onlyTriggerOnceShowEvent': 'only trigger once show event',
  'triggeredRepeatedly': 'can be triggered repeatedly',
  'viewableArea': 'whether it\'s in the viewable area',
  'relParentElement': 'relative to its parent element',
  'of': 'Of',
  'Mon': 'Mon',
  'Tue': 'Tue',
  'Wed': 'Wed',
  'Thu': 'Thu',
  'Fri': 'Fri',
  'Sat': 'Sat',
  'Sun': 'Sun',
  'today': 'Today',
  'totals': 'Total',
  'items': 'items',
  'page': 'page',
  'perPage': 'per page',
  'showPopUp': 'show pop-up',
  'cancel': 'cancel',
  'confirm': 'confirm',
  'normalTable': 'normal table',
  'beginColumn': 'begin column',
  'order': 'order',
  'customTableHeader': 'custom display table header column',
  'selectCellRange': 'select the cell range',
  'fixedColumnDisplay': 'fixed column display',
  'mergesTableHeader': 'table header merges cells',
  'dataPresentation': 'data presentation',
  'pagingTable': 'paging table',
  'failedLoadData': 'failed to load data',
  'reload': 'reload',
  'tooltipTopleft': 'top-left',
  'tooltipTop': 'top',
  'tooltipTopright': 'top-right',
  'tooltipRighttop': 'right-top',
  'tooltipRight': 'right',
  'tooltipRightbottom': 'right-bottom',
  'tooltipBottomright': 'bottom-right',
  'tooltipBottom': 'bottom',
  'tooltipBottomleft': 'bottom-left',
  'tooltipLeftbottom': 'left-bottom',
  'tooltipLeft': 'left',
  'tooltipLefttop': 'left-top',
  'showTooltip': 'show tooltip',
  'triggerZones': 'trigger zones',
  'canHighlight': 'can highlight',
  'theFirst': 'The first',
  'ge': 'Piece',
  'customTooltipContent': 'custom tooltip content',
  'month': 'Month',
  'year': 'Year',
  'yybTitle': 'Yingyongbao',
  'huaweiStore': 'HuaWei application store',
  'median': 'Median',
  'maximum': 'Maximum',
  'minimum': 'Minimum',
  'perCapita': 'per Capita',
  'upperQuartile': 'Upper Quartile',
  'lowerQuartile': 'Lower Quartiel',
  'startDate': 'Start Date',
  'endDate': 'End Date',
  'shi': 'Hour',
  'fen': 'Minute',
  'sec': 'Sec',
  'day': 'Day',
  'else': 'else',
  'version': 'Version',
  'conversion': 'Conversion',
  'drain': 'Lost',
  'register': 'register',
  'enterRegisterPage': 'enter register page',
  'inputPhoneNumber': 'Fill in the mobile phone number',
  'registeredSuccessfully': 'registered successfully',
  'activeUser': 'Active User',
  'numberVisits': 'Visit Number',
  'above': ' Above',
  'newUser': 'New User',
  'people': 'People',
  'successfulPrice': 'Successful price',
  'successfulCounter': 'Quantity of successful payment',
  'exposure': 'Exposure',
  'chartClick': 'Click',
  'signIn': 'Login',
  'homePage': 'HomePage',
  'board': 'Board',
  'enter': 'enter',
  'enterModule': 'Enter the module',
  'skypegmwcn': 'Skypegmwcn',
  'dependsOnScene': 'It depends on the scene',
  'Interface': 'Interface',
  'official': 'Public ID',
  'applet': 'Applet',
  'treeEnterLogin': 'enter login page'
});

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = require("clever-ui/lib/button");

/***/ })

/******/ });