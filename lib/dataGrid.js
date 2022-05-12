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
/******/ 	return __webpack_require__(__webpack_require__.s = 179);
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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gridCell_vue__ = __webpack_require__(96);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67b51387_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_gridCell_vue__ = __webpack_require__(309);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gridCell_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67b51387_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_gridCell_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/dataGrid/gridCell.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67b51387", Component.options)
  } else {
    hotAPI.reload("data-v-67b51387", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gridHeader_vue__ = __webpack_require__(97);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53d0eff2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_gridHeader_vue__ = __webpack_require__(303);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gridHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53d0eff2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_gridHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/dataGrid/gridHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53d0eff2", Component.options)
  } else {
    hotAPI.reload("data-v-53d0eff2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dataGrid_vue__ = __webpack_require__(94);
/* unused harmony namespace reexport */
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(260)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dataGrid_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/dataGrid/dataGrid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-797143cf", Component.options)
  } else {
    hotAPI.reload("data-v-797143cf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataGrid_vue__ = __webpack_require__(149);



__WEBPACK_IMPORTED_MODULE_0__dataGrid_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__dataGrid_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__dataGrid_vue__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__dataGrid_vue__["a" /* default */].name.replace(/c|C/, 'zg'), __WEBPACK_IMPORTED_MODULE_0__dataGrid_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__dataGrid_vue__["a" /* default */]);

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue__ = __webpack_require__(95);
/* unused harmony namespace reexport */
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(247)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/dataGrid/grid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a10e585", Component.options)
  } else {
    hotAPI.reload("data-v-5a10e585", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__en_US__ = __webpack_require__(35);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__en_US__["a" /* default */]);

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "th",
    {
      class: _vm.clazz,
      style: _vm.style,
      attrs: { colspan: _vm.colspan, rowspan: _vm.rowspan },
      on: { click: _vm.onClick }
    },
    [
      _vm._t("default", [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")], {
        title: _vm.title
      }),
      _vm._v(" "),
      _vm.sortAble && _vm.sortStatus !== 0
        ? _c("span", { staticClass: "c-sort-icon" }, [
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.sortStatus === -1,
                  expression: "sortStatus === -1"
                }
              ],
              staticClass: "cicon-down"
            }),
            _vm._v(" "),
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.sortStatus === 1,
                  expression: "sortStatus === 1"
                }
              ],
              staticClass: "cicon-up"
            })
          ])
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-53d0eff2", esExports)
  }
}

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "td",
    { class: _vm.clazz, style: _vm.style, on: { click: _vm.onClick } },
    [
      _vm.store.children && _vm.labelField === _vm.expandColumn
        ? _c("i", {
            class: _vm.className,
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.onExpand_($event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default", [_vm._v(_vm._s(_vm.store[_vm.labelField]))], {
        data: _vm.store,
        field: _vm.labelField,
        row: _vm.index,
        column: _vm.column
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-67b51387", esExports)
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var getChildren = function getChildren(_ref, result) {
  var parent = _ref.parent,
      childName = _ref.childName,
      _ref$deep = _ref.deep,
      deep = _ref$deep === undefined ? false : _ref$deep;

  var children = result || [];
  if (parent.$children) {
    parent.$children.forEach(function (item) {
      if (item.$options.name === childName) {
        children.push(item);
      }
      if (!deep) return;
      getChildren({
        parent: item,
        childName: childName,
        deep: deep
      }, children);
    });
  }
  return children;
};
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent[eventName].apply(parent, params);
      }
    },
    children: function children(componentName) {
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return getChildren({
        parent: this,
        childName: componentName,
        deep: deep
      });
    },
    parent: function parent(parentName) {
      var parent = this.$parent;
      if (parent.$options.name === parentName) {
        return parent;
      }
      while (parent.$options.name !== parentName) {
        parent = parent.$parent;
        if (parent.$options.name === parentName) {
          return parent;
        }
      }
    }
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emitter__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__emitter__["a"]; });
/* unused harmony reexport util */






/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(3);



var log = function log() {
  if (__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* util */].isString(arguments[0])) {
    var str = arguments[0];
    str = str + function () {
      var blank = '';
      for (var i = 0; i < 15 - str.length; i++) {
        blank = blank + ' ';
      }
      return blank;
    }();

    arguments[0] = str;
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = ({
  methods: {
    time: function time(label) {
      if (this.logTime) console.time(label);
    },
    timeEnd: function timeEnd(label) {
      if (this.logTime) console.timeEnd(label);
    }
  },
  beforeCreate: function beforeCreate() {
    log('beforeCreate', this.$options.name);
  },
  created: function created() {
    log('created', this.$options.name);
  },
  beforeMount: function beforeMount() {
    log('beforeMount', this.$options.name);
  },
  mounted: function mounted() {
    log('mounted', this.$options.name);
  },
  updated: function updated() {
    log('updated', this.$options.name);
  },
  activated: function activated() {
    log('activated', this.$options.name);
  },
  deactivated: function deactivated() {
    log('deactivated', this.$options.name);
  },
  beforeDestroy: function beforeDestroy() {
    log('beforeDestroy', this.$options.name);
  },
  destroyed: function destroyed() {
    log('destroyed', this.$options.name);
  }
});

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
  toTime: function toTime(value, zlocal) {
    var m = parseInt(value / 60);
    var h = parseInt(value / 3600);
    var d = parseInt(value / (24 * 3600));
    if (h > 24) {
      return d + zlocal.day;
    } else if (m > 60) {
      return h + zlocal.shi;
    } else {
      return m + zlocal.fen;
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
  },
  getWeekNum: function getWeekNum(date) {
    var now = new Date(date);
    var day = now.getDay();
    var weeks = ['日', '一', '二', '三', '四', '五', '六'];
    return weeks[day];
  }
};

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_main__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gridHeader_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gridCell_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_vue__ = __webpack_require__(284);









/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    CGrid: __WEBPACK_IMPORTED_MODULE_5__grid_vue__["a" /* default */],
    CGridCell: __WEBPACK_IMPORTED_MODULE_4__gridCell_vue__["a" /* default */],
    CGridHeader: __WEBPACK_IMPORTED_MODULE_3__gridHeader_vue__["a" /* default */] },
  name: 'cDataGrid',
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_main__["a" /* emitter */]],
  props: {
    store: {
      type: Array,
      required: true
    },

    width: {
      type: Number
    },

    showIndex: {
      type: Boolean,
      default: false
    },

    indexTitle: {
      type: String,
      default: 'index'
    },

    pagination: {
      type: Boolean,
      default: false
    },

    pageSize: {
      type: Number,
      default: 10
    },

    pageNum: {
      type: Number,
      default: 1
    },

    customSort: {
      type: Function
    },

    chosenCells: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    expandColumn: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      gridStore: [],
      structure: {
        left: [],
        right: [],
        center: []
      },
      childCheckResult: {
        left: false,
        right: false,
        center: false
      },
      sortColumn: null,

      expandRows: []
    };
  },

  computed: {
    gridStyle: function gridStyle() {
      var style = {};
      if (this.width) {
        style.width = this.width + 'px';
      } else {
        style.width = '100%';
      }
      return style;
    },
    headerRowspan: function headerRowspan() {
      var _this = this;

      var positions = ['left', 'right', 'center'];
      this.childCheckResult = {
        left: false,
        right: false,
        center: false
      };
      positions.forEach(function (position) {
        _this.structure[position].forEach(function (column) {
          if (column.children) {
            _this.childCheckResult[position] = true;
          }
        });
      });

      return this.childCheckResult.left || this.childCheckResult.right || this.childCheckResult.center ? 2 : 1;
    }
  },
  updated: function updated() {
    var _this2 = this;

    if (this._isDestroyed) return;
    var styleSheet = [];

    this.gridStore.forEach(function (item, i) {
      if (_this2.pagination) {
        var startIndex = (_this2.pageNum - 1) * _this2.pageSize;
        var endIndex = _this2.pageNum * _this2.pageSize;

        if (i < startIndex || i >= endIndex) return;
      }
      var className = '.c-row-' + _this2._uid + '-' + i;
      var rows = document.querySelectorAll(className);
      var heights = [];
      rows.forEach(function (row) {
        heights.push(row.offsetHeight);
      });
      styleSheet.push([className, ['height', Math.max.apply(Math, heights) + 'px']]);
    });

    var childExist = this.childCheckResult;
    if (this.headerRowspan > 1) {
      var maxHeight = [];
      this.$refs.main.querySelectorAll('thead').forEach(function (head) {
        maxHeight.push(head.offsetHeight);
      });
      maxHeight = Math.max.apply(Math, maxHeight);

      var position = ['right', 'center', 'left'];
      position.forEach(function (p) {
        if (_this2.$refs[p] && !childExist[p]) {
          _this2.$refs[p].querySelectorAll('thead tr').forEach(function (tr) {
            tr.style.height = maxHeight + 'px';
          });
        }
      });
    }
    __WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* dom */].addStyleSheet('cDataGrid_' + this._uid, styleSheet);
  },

  methods: {
    initDataList: function initDataList() {
      this.gridStore = __WEBPACK_IMPORTED_MODULE_1__utils_index__["a" /* util */].clone(this.store);
    },
    onSort: function onSort(status, column) {
      var _this3 = this;

      this.sortColumn = column;
      this.expandRows = [];
      var field = column.field;
      this.gridStore.sort(function (a, b) {
        if (_this3.customSort) {
          return _this3.customSort(a, b, field, status);
        } else {
          if (a[field] > b[field]) {
            return 1 * status;
          } else if (a[field] < b[field]) {
            return -1 * status;
          }
          return 0;
        }
      });
    },
    onScroll: function onScroll(event) {
      var container = this.$refs.center;
      var right = this.$refs.right;
      var left = this.$refs.left;
      if (left) left.style['box-shadow'] = container.scrollLeft === 0 ? 'none' : '6px 0 6px -4px rgba(0,0,0,.2)';
      if (right) right.style['box-shadow'] = container.scrollLeft === container.scrollWidth - container.offsetWidth ? 'none' : '-6px 0 6px -4px rgba(0,0,0,.2)';
    },
    onExpand: function onExpand(expanded, index) {
      var _this4 = this;

      if (expanded) {
        this.expandRows.push(index);
      } else {
        this.expandRows.forEach(function (rowIndex, i) {
          if (rowIndex === index) _this4.expandRows.splice(i, 1);
        });
      }
    }
  },
  render: function render(h) {
    var _this5 = this;

    var listeners = this.$listeners;
    return h(
      'div',
      { 'class': 'c-data-grid', style: this.gridStyle, ref: 'main' },
      [h(
        'div',
        { 'class': 'c-hidden-structure' },
        [this.$slots.default, h(
          'span',
          { 'class': 'c-grid-hover-color' },
          []
        )]
      ), h(
        'div',
        { 'class': 'c-grid-container' },
        [function () {
          if (_this5.structure.left.length) {
            return h(
              'div',
              { 'class': 'c-grid-left', ref: 'left' },
              [h(
                'c-grid',
                {
                  attrs: { gridId: _this5._uid,
                    structure: _this5.structure.left,
                    store: _this5.gridStore,
                    showIndex: _this5.showIndex,
                    indexTitle: _this5.indexTitle,
                    pagination: _this5.pagination,
                    pageNum: _this5.pageNum,
                    pageSize: _this5.pageSize,
                    headerRowspan: _this5.headerRowspan,
                    sortColumn: _this5.sortColumn,

                    chosenCells: _this5.chosenCells,
                    expandRows: _this5.expandRows,
                    expandColumn: _this5.expandColumn
                  },
                  on: {
                    'sort': _this5.onSort,
                    'clickCell': listeners.clickCell || function () {},
                    'expand': _this5.onExpand
                  }
                },
                []
              )]
            );
          }
        }(), function () {
          if (_this5.structure.center.length) {
            return h(
              'div',
              { 'class': 'c-grid-center', on: {
                  'scroll': _this5.onScroll
                },
                ref: 'center' },
              [h(
                'c-grid',
                {
                  attrs: { gridId: _this5._uid,
                    sortColumn: _this5.sortColumn,
                    structure: _this5.structure.center,
                    store: _this5.gridStore,
                    showIndex: _this5.showIndex && !_this5.structure.left.length,
                    indexTitle: _this5.indexTitle,
                    pagination: _this5.pagination,
                    pageNum: _this5.pageNum,
                    pageSize: _this5.pageSize,
                    headerRowspan: _this5.headerRowspan,
                    chosenCells: _this5.chosenCells,
                    expandRows: _this5.expandRows,
                    expandColumn: _this5.expandColumn,
                    startColumnIndex: _this5.structure.left.length
                  },
                  on: {
                    'sort': _this5.onSort,
                    'clickCell': listeners.clickCell || function () {},
                    'expand': _this5.onExpand
                  }
                },
                []
              )]
            );
          }
        }(), function () {
          if (_this5.structure.right.length) {
            return h(
              'div',
              { 'class': 'c-grid-right', ref: 'right' },
              [h(
                'c-grid',
                {
                  attrs: { gridId: _this5._uid,
                    sortColumn: _this5.sortColumn,
                    structure: _this5.structure.right,
                    store: _this5.gridStore,
                    showIndex: _this5.showIndex && !_this5.structure.left.length && !_this5.structure.center.length,
                    pagination: _this5.pagination,
                    pageNum: _this5.pageNum,
                    pageSize: _this5.pageSize,
                    headerRowspan: _this5.headerRowspan,
                    chosenCells: _this5.chosenCells,
                    startColumnIndex: _this5.structure.left.length + _this5.structure.center.length,
                    expandRows: _this5.expandRows,
                    expandColumn: _this5.expandColumn
                  },
                  on: {
                    'sort': _this5.onSort,
                    'clickCell': listeners.clickCell || function () {},
                    'expand': _this5.onExpand
                  }
                },
                []
              )]
            );
          }
        }()]
      ), h(
        'div',
        {
          directives: [{
            name: 'show',
            value: !this.gridStore.length
          }],
          'class': 'c-grid-empty' },
        [__WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* default */].noData]
      )]
    );
  },

  watch: {
    store: function store() {
      this.initDataList();
    }
  },
  created: function created() {
    this.initDataList();
  }
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridHeader_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridCell_vue__ = __webpack_require__(140);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cGrid',
  components: {
    CGridCell: __WEBPACK_IMPORTED_MODULE_2__gridCell_vue__["a" /* default */],
    CGridHeader: __WEBPACK_IMPORTED_MODULE_1__gridHeader_vue__["a" /* default */]
  },
  props: {
    gridId: {
      type: [String, Number],
      required: true
    },

    showIndex: {
      type: Boolean,
      default: false
    },

    indexTitle: {
      type: String,
      default: 'index'
    },

    structure: {
      type: Array,
      required: true
    },

    store: {
      type: Array,
      required: true
    },

    pagination: {
      type: Boolean,
      default: false
    },

    pageSize: {
      type: Number,
      default: 10
    },

    pageNum: {
      type: Number,
      default: 1
    },

    headerRowspan: {
      type: Number,
      default: 1
    },

    chosenCells: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startColumnIndex: {
      type: Number,
      default: 0
    },

    sortColumn: null,

    expandRows: null,

    expandColumn: {
      type: String,
      default: null
    }
  },
  computed: {
    structureParser: function structureParser() {
      var headStructure = [[], []];
      var bodyStructure = [];

      this.structure.forEach(function (item) {
        if (item.children) {
          headStructure[0].push(item);
          item.children.forEach(function (column) {
            headStructure[1].push(column);
            bodyStructure.push(column);
          });
        } else {
          headStructure[0].push(item);
          bodyStructure.push(item);
        }
      });
      return {
        headStructure: headStructure,
        bodyStructure: bodyStructure
      };
    }
  },
  methods: {
    onHoverRow: function onHoverRow(rowIndex) {
      var hoverColor = document.querySelector('.c-grid-hover-color');
      if (hoverColor) {
        hoverColor = window.getComputedStyle(hoverColor)['background-color'];
      }
      __WEBPACK_IMPORTED_MODULE_0__utils_index__["b" /* dom */].addStyleSheet('cDataGridHover' + this.gridId, [['.c-row-' + this.gridId + '-' + rowIndex, ['background', hoverColor || '#F0FAFF', true]]]);
    },
    onMouseLeave: function onMouseLeave() {
      __WEBPACK_IMPORTED_MODULE_0__utils_index__["b" /* dom */].removeStyleSheet('cDataGridHover' + this.gridId);
    },
    onExpand_: function onExpand_(expanded, index) {
      this.$emit('expand', expanded, index);
    }
  },
  render: function render(h) {
    var _this = this;

    var listeners = this.$listeners;
    return h(
      'table',
      { 'class': 'c-grid' },
      [h(
        'thead',
        { 'class': 'c-grid-header' },
        [this.structureParser.headStructure.map(function (row, rowIndex) {
          if (!row.length) return;
          return h(
            'tr',
            { 'class': 'c-grid-header-row' },
            [function () {
              if (_this.showIndex && rowIndex === 0) {
                return h(
                  'c-grid-header',
                  {
                    attrs: {
                      title: _this.indexTitle,
                      column: {},
                      rowspan: _this.headerRowspan }
                  },
                  []
                );
              }
            }(), row.map(function (column) {
              var rowspan = rowIndex === 0 && !column.children ? _this.headerRowspan : 1;
              return h(
                'c-grid-header',
                {
                  attrs: { title: column.title,
                    sortColumn: _this.sortColumn,
                    sortAble: column.sortAble,
                    column: column,
                    width: column.width,
                    rowspan: rowspan,
                    colspan: column.colspan
                  },
                  scopedSlots: { default: column.headFormatter },
                  on: {
                    'sort': listeners.sort
                  }
                },
                []
              );
            })]
          );
        })]
      ), h(
        'tbody',
        { 'class': 'c-grid-body' },
        [this.store.map(function (item, i) {
          if (_this.pagination) {
            var startIndex = (_this.pageNum - 1) * _this.pageSize;
            var endIndex = _this.pageNum * _this.pageSize;

            if (i < startIndex || i >= endIndex) return;
          }
          var rowClass = {
            'c-grid-row': true
          };
          rowClass['c-row-' + _this.gridId + '-' + i] = true;
          var row = [h(
            'tr',
            { 'class': rowClass, on: {
                'mouseover': function mouseover() {
                  _this.onHoverRow(i);
                },
                'mouseleave': function mouseleave() {
                  _this.onMouseLeave(i);
                }
              }
            },
            [function () {
              if (_this.showIndex) {
                return h(
                  'c-grid-cell',
                  {
                    attrs: { store: { index: i },
                      labelField: 'index',
                      index: i,
                      chosenCells: _this.chosenCells,
                      expandColumn: _this.expandColumn,

                      column: _this.startColumnIndex + -1
                    },
                    on: {
                      'expand': _this.onExpand_
                    }
                  },
                  []
                );
              }
            }(), _this.structureParser.bodyStructure.map(function (column, j) {
              var clazz = {
                'c-click-able': column.clickCell
              };
              return h(
                'c-grid-cell',
                {
                  attrs: { store: item,
                    labelField: column.field,
                    width: column.width,
                    index: i,
                    column: _this.startColumnIndex + j,

                    chosenCells: _this.chosenCells,

                    expandColumn: _this.expandColumn
                  },
                  'class': clazz, scopedSlots: { default: column.cellFormatter }, on: {
                    'click': column.clickCell || listeners.clickCell,
                    'expand': _this.onExpand_
                  }
                },
                []
              );
            })]
          )];

          if (item.children && _this.expandRows.includes(i)) {
            item.children.map(function (child, g) {
              var rowClass = {
                'c-grid-row': true
              };
              row.push(h(
                'tr',
                { 'class': rowClass, on: {
                    'mouseover': function mouseover() {
                      _this.onHoverRow(g);
                    },
                    'mouseleave': function mouseleave() {
                      _this.onMouseLeave(g);
                    }
                  }
                },
                [function () {
                  if (_this.showIndex) {
                    return h(
                      'c-grid-cell',
                      {
                        attrs: { store: { index: g },
                          labelField: 'index',
                          index: g,
                          chosenCells: _this.chosenCells,
                          column: _this.startColumnIndex + -1
                        }
                      },
                      []
                    );
                  }
                }(), _this.structureParser.bodyStructure.map(function (column, j) {
                  var clazz = {
                    'c-click-able': column.clickCell
                  };
                  return h(
                    'c-grid-cell',
                    {
                      attrs: { store: child,
                        labelField: column.field,
                        width: column.width,
                        index: g,
                        column: _this.startColumnIndex + j,

                        chosenCells: _this.chosenCells
                      },
                      'class': clazz, scopedSlots: { default: column.cellFormatter },
                      on: {
                        'click': column.clickCell || listeners.clickCell
                      }
                    },
                    []
                  );
                })]
              ));
            });
          }
          return row;
        })]
      )]
    );
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cGridCell',
  props: {
    store: {
      type: Object,
      required: true
    },
    labelField: {
      type: String,
      required: true
    },

    index: {
      type: Number,
      required: true
    },

    width: null,

    column: {
      type: Number
    },

    chosenCells: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    expandColumn: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      expanded: false
    };
  },
  computed: {
    className: function className() {
      var clazz = ['expand-icon'];
      clazz.push(this.expanded ? 'cicon-jianyuan' : 'cicon-tianjia');
      return clazz.join(' ');
    },
    style: function style() {
      var style = {};
      if (this.width) {
        style.width = this.width + 'px';
        style.maxWidth = this.width + 'px';
        style.minWidth = this.width + 'px';
      }
      return style;
    },
    chosenRules: function chosenRules() {
      var res = [];
      var row = this.index;
      var column = this.column;
      this.chosenCells.forEach(function (rule) {
        var x1 = rule.rule[0];
        var y1 = rule.rule[1];
        var x2 = rule.rule[2];
        var y2 = rule.rule[3];
        if (row >= x1 && row <= x2 && column >= y1 && column <= y2) {
          res.push(rule);
        }
      });
      return res;
    },
    clazz: function clazz() {
      var clazz = ['c-grid-cell'];
      this.chosenRules.forEach(function (rule) {
        clazz.push(rule.className);
      });
      return clazz;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.store, this.labelField);
    },
    onExpand_: function onExpand_() {
      this.expanded = !this.expanded;
      this.$emit('expand', this.expanded, this.index);
    }
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cGridHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    width: null,
    column: {
      type: Object,
      required: true
    },
    sortAble: {
      type: Boolean,
      default: false
    },
    colspan: {
      type: Number,
      default: 1
    },
    rowspan: {
      type: Number,
      default: 1
    },

    sortColumn: null
  },
  data: function data() {
    return {
      sortStatus: 0
    };
  },

  computed: {
    style: function style() {
      var style = {};
      if (this.width) {
        style.width = this.width + 'px';
        style.maxWidth = this.width + 'px';
        style.minWidth = this.width + 'px';
      }
      return style;
    },
    clazz: function clazz() {
      return {
        'c-grid-header-cell': true,
        'c-sort-able': this.sortAble
      };
    }
  },
  watch: {
    sortColumn: function sortColumn(column) {
      if (column !== this.column) this.sortStatus = 0;
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.sortAble) return;
      if (this.sortStatus === 0) {
        this.sortStatus = -1;
      } else {
        this.sortStatus = this.sortStatus * -1;
      }
      this.$emit('sort', this.sortStatus, this.column);
    }
  }
});

/***/ })

/******/ });