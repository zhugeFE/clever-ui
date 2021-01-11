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
/******/ 	return __webpack_require__(__webpack_require__.s = 164);
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calendar_vue__ = __webpack_require__(83);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19e2d78f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_calendar_vue__ = __webpack_require__(275);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_calendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19e2d78f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/calendar/calendar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19e2d78f", Component.options)
  } else {
    hotAPI.reload("data-v-19e2d78f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_vue__ = __webpack_require__(136);


[__WEBPACK_IMPORTED_MODULE_0__calendar_vue__["a" /* default */]].forEach(function (component) {
  component.install = function (Vue) {
    Vue.component(component.name, component);
    Vue.component(component.name.replace(/c|C/, 'zg'), component);
  };
});

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__calendar_vue__["a" /* default */]);

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__util__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["a"]; });




/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_day_vue__ = __webpack_require__(84);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a960804a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_day_vue__ = __webpack_require__(293);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(247)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_day_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a960804a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_day_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/calendar/day.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a960804a", Component.options)
  } else {
    hotAPI.reload("data-v-a960804a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_vue__ = __webpack_require__(85);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35b8dad6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_vue__ = __webpack_require__(277);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(222)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35b8dad6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/calendar/task.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35b8dad6", Component.options)
  } else {
    hotAPI.reload("data-v-35b8dad6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "resize",
          rawName: "v-resize",
          value: _vm.onResize,
          expression: "onResize"
        }
      ],
      ref: "main",
      staticClass: "c-calendar-container"
    },
    [
      _c(
        "div",
        { staticClass: "c-cld-toolbar" },
        [
          _c("c-selector", {
            staticClass: "c-cld-year",
            attrs: {
              store: _vm.yearList,
              width: 100,
              "key-field": "value",
              "label-field": "label"
            },
            on: { change: _vm.onChangeYear },
            model: {
              value: _vm.currentYear,
              callback: function($$v) {
                _vm.currentYear = $$v
              },
              expression: "currentYear"
            }
          }),
          _vm._v(" "),
          _c("c-selector", {
            staticClass: "c-cld-month-selector",
            attrs: {
              store: _vm.monthList,
              width: 100,
              "key-field": "value",
              "label-field": "label"
            },
            on: { change: _vm.onChangeMonth },
            model: {
              value: _vm.currentMonth,
              callback: function($$v) {
                _vm.currentMonth = $$v
              },
              expression: "currentMonth"
            }
          }),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "c-cld-day-control" },
            [
              _c("c-button", {
                attrs: { size: "normal", icon: "cicon-arrow-left" },
                on: { click: _vm.onPreDay }
              }),
              _vm._v(" "),
              _c(
                "c-button",
                {
                  attrs: { size: "normal" },
                  on: {
                    click: function($event) {
                      _vm.onClickDay(new Date())
                    }
                  }
                },
                [_vm._v("今天")]
              ),
              _vm._v(" "),
              _c("c-button", {
                attrs: { size: "normal", icon: "cicon-arrow-right1" },
                on: { click: _vm.onNextDay }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("table", { staticClass: "c-cld" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          { staticClass: "c-cld-body" },
          _vm._l(_vm.days, function(week, i) {
            return _c(
              "tr",
              { key: i },
              _vm._l(week, function(day) {
                return _c("c-day", {
                  key: day.toLocaleString(),
                  attrs: {
                    day: day,
                    width: _vm.dayWidth,
                    currentDay: _vm.currentDay,
                    currentMonth: _vm.currentMonth,
                    taskList: _vm._taskList
                  },
                  on: { click: _vm.onClickDay }
                })
              }),
              1
            )
          }),
          0
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "c-cld-title" }, [
      _c("tr", [
        _c("td", { staticClass: "c-cld-secondary" }, [_vm._v("周日")]),
        _vm._v(" "),
        _c("td", [_vm._v("周一")]),
        _vm._v(" "),
        _c("td", [_vm._v("周二")]),
        _vm._v(" "),
        _c("td", [_vm._v("周三")]),
        _vm._v(" "),
        _c("td", [_vm._v("周四")]),
        _vm._v(" "),
        _c("td", [_vm._v("周五")]),
        _vm._v(" "),
        _c("td", { staticClass: "c-cld-secondary" }, [_vm._v("周六")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19e2d78f", esExports)
  }
}

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "c-cld-task",
      style: _vm.style,
      attrs: { title: _vm.task.name },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.onClick($event)
        }
      }
    },
    [
      _vm.task.mark ? _c("span", { staticClass: "c-cld-mark" }) : _vm._e(),
      _vm._v("\n  " + _vm._s(_vm.task.name) + "\n")
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-35b8dad6", esExports)
  }
}

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "td",
    { class: _vm.dayClass, style: _vm.style, on: { click: _vm.onClickDay } },
    [
      _c("div", { staticClass: "c-cld-day-container" }, [
        _c("div", { staticClass: "c-cld-label" }, [
          _c("span", { staticClass: "c-day-num" }, [
            _vm._v(_vm._s(_vm.dateFormat(_vm.day)))
          ]),
          _vm._v("日\n    ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "c-cld-task-panel" },
          [
            _vm._l(_vm.validTaskList, function(task, i) {
              return [
                _c("c-calendar-task", {
                  key: task.name + _vm.id,
                  style: { top: _vm.getTopVal(task, i) + "px" },
                  attrs: { task: task, width: _vm.width, day: _vm.day }
                })
              ]
            })
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a960804a", esExports)
  }
}

/***/ }),

/***/ 4:
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

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(6);
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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = require("clever-ui/lib/selector");

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__day__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__selector__);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cCalendar',
  components: {
    CDay: __WEBPACK_IMPORTED_MODULE_1__day__["a" /* default */],
    CSelector: __WEBPACK_IMPORTED_MODULE_2__selector___default.a
  },
  props: {
    value: {
      type: Date
    },

    type: {
      type: String,
      default: 'normal',
      validator: function validator(type) {
        return ['normal', 'card'].includes(type);
      }
    },

    mode: {
      type: String,
      default: 'month',
      validator: function validator(mode) {
        return ['month', 'year', 'week', 'day'].includes(mode);
      }
    },

    taskList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    var currentDay = this.value || new Date();
    return {
      days: this.getDays(currentDay),
      dayWidth: 50,
      currentDay: currentDay,
      currentMonth: {
        value: currentDay.getMonth()
      },
      monthList: function () {
        var list = [];
        for (var i = 0; i < 12; i++) {
          list.push({
            label: i + 1 + '月',
            value: i
          });
        }
        return list;
      }(),
      currentYear: { value: currentDay.getFullYear() },
      yearList: function () {
        var list = [];
        var currentYear = currentDay.getFullYear();
        for (var i = currentYear - 10; i < currentYear + 10; i++) {
          list.push({
            label: i,
            value: i
          });
        }
        return list;
      }()
    };
  },

  computed: {
    _taskList: function _taskList() {
      var list = this.taskList.map(function (item) {
        return item;
      });
      list.sort(function (a, b) {
        return a.beginDate.getTime() - b.beginDate.getTime();
      });
      return list;
    }
  },
  mounted: function mounted() {
    this.onResize();
  },

  methods: {
    dateFormat: function dateFormat(date) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(date, 'dd');
    },
    onResize: function onResize() {
      var container = this.$refs.main;
      this.dayWidth = container.offsetWidth / 7;
    },
    getDayClass: function getDayClass(day) {
      var week = day.getDay();
      var isOtherMonth = this.currentMonth.value !== day.getMonth();
      var isToday = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(new Date()) === __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(day);
      var isCurrent = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(this.currentDay) === __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(day);
      return {
        'c-cld-day': true,
        'c-cld-secondary': !week || week === 6 || isOtherMonth,
        'c-cld-today': isToday,
        'c-cld-active': isCurrent
      };
    },
    getDays: function getDays(currentDay) {
      var firstDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
      var lastDay = new Date(new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 1).getTime() - __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dayTime);
      var firstOfWeek = new Date(firstDay.getTime() - firstDay.getDay() * __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dayTime);
      var lastOfWeek = new Date(lastDay.getTime() + (6 - lastDay.getDay()) * __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dayTime);
      var totalDays = (lastOfWeek.getTime() - firstOfWeek.getTime()) / __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dayTime + 1;
      var days = [];
      var week = [];
      for (var i = 0; i < totalDays; i++) {
        var date = new Date(firstOfWeek.getTime() + i * __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dayTime);
        if (!date.getDay()) {
          week = [];
        }
        week.push(date);
        if (date.getDay() === 6) {
          days.push(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].clone(week));
        }
      }
      return days;
    },
    onChangeYear: function onChangeYear() {
      this.days = this.getDays(new Date(this.currentYear.value, this.currentMonth.value, 1));
    },
    onChangeMonth: function onChangeMonth() {
      this.days = this.getDays(new Date(this.currentYear.value, this.currentMonth.value, 1));
    },
    onClickDay: function onClickDay(day) {
      this.currentYear = {
        value: day.getFullYear()
      };
      this.currentMonth = {
        value: day.getMonth()
      };
      this.days = this.getDays(day);
      this.currentDay = day;
      this.$emit('input', day);
      this.$emit('selectDay', day);
    },
    onNextDay: function onNextDay() {
      this.onClickDay(new Date(this.currentDay.getTime() + __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dayTime));
    },
    onPreDay: function onPreDay() {
      this.onClickDay(new Date(this.currentDay.getTime() - __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dayTime));
    }
  }
});

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task__ = __webpack_require__(265);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cDay',
  components: { CCalendarTask: __WEBPACK_IMPORTED_MODULE_1__task__["a" /* default */] },
  props: {
    day: {
      type: Date
    },
    width: {
      type: Number
    },
    currentDay: {
      type: Date
    },
    currentMonth: null,

    taskList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      id: __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].guid()
    };
  },

  computed: {
    dayClass: function dayClass() {
      var week = this.day.getDay();
      var isOtherMonth = this.currentMonth.value !== this.day.getMonth();
      var isToday = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(new Date()) === __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(this.day);
      var isCurrent = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(this.currentDay) === __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(this.day);
      return {
        'c-cld-day': true,
        'c-cld-secondary': !week || week === 6 || isOtherMonth,
        'c-cld-today': isToday,
        'c-cld-active': isCurrent
      };
    },
    style: function style() {
      return {
        width: this.width + 'px',
        height: this.width / 4 * 3 + 'px'
      };
    },
    validTaskList: function validTaskList() {
      var _this = this;

      var res = [];
      this.taskList.forEach(function (item) {
        if (_this.isValidTask(item)) {
          res.push(item);
        }
      });
      return res;
    },
    positionList: function positionList() {
      var _this2 = this;

      var positionList = [];
      var affectList = [];
      var crossToday = [];
      var validCount = 0;
      this.taskList.forEach(function (item, i) {
        if (_this2.isValidTask(item)) {
          var position = 0;
          if (validCount < affectList.length) {
            position = validCount;
          } else {
            position = validCount + crossToday.length;
          }
          positionList.push({
            task: item,
            list: {
              affect: __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].clone(affectList).map(function (item) {
                return item.name;
              }),
              cross: __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].clone(crossToday).map(function (item) {
                return item.name;
              })
            },

            position: position
          });
          validCount++;
        }

        if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(_this2.day, item.beginDate) > 0 && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(_this2.day, item.endDate) > 0) {
          var flag = false;
          _this2.taskList.forEach(function (task, j) {
            if (j <= i) return;
            if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(item.endDate, task.beginDate) >= 0 && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(task.endDate, _this2.day) >= 0) {
              flag = true;
            }
          });
          if (flag) affectList.push(item);
        }

        if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(_this2.day, item.beginDate) > 0 && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(_this2.day, item.endDate) <= 0 && _this2.day.getDay() !== 0) {
          crossToday.push(item);

          affectList.forEach(function (task) {
            if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(item.beginDate, task.endDate) > 0) {
              affectList.splice(0, 1);
            }
          });
        }
      });
      return positionList;
    }
  },
  methods: {
    dateFormat: function dateFormat(date) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].dateFormat(date, 'dd');
    },
    onClickDay: function onClickDay() {
      this.$emit('click', this.day);
    },
    isValidTask: function isValidTask(task) {
      var isOneDay = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].isOneDay(task.beginDate, this.day);

      var crossWeek = this.day.getDay() === 0 && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(this.day, task.beginDate) > 0 && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(this.day, task.endDate) < 0;
      return isOneDay || crossWeek;
    },
    getTopVal: function getTopVal(task) {
      var preCount = this.positionList.find(function (item) {
        return task === item.task;
      }).position;
      return preCount * 20 + 5;
    },
    onClickTask: function onClickTask(task) {
      if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].isFunction(task.onClick)) {
        task.onClick(task);
      }
    }
  }
});

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cCalendarTask',
  props: {
    task: {
      type: Object,
      default: function _default() {
        return {
          name: '',
          beginDate: new Date(),
          endDate: new Date(),
          color: '',
          mark: false,
          onClick: null };
      }
    },
    day: {
      type: Date
    },
    width: {
      type: Number
    }
  },
  computed: {
    dayCount: function dayCount() {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(this.task.beginDate, this.task.endDate);
    },
    isCrossWeek: function isCrossWeek() {
      return this.day.getDay() === 0 && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(this.day, this.task.beginDate) > 0 && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(this.day, this.task.endDate) < 0;
    },
    showAble: function showAble() {
      var isOneDay = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].isOneDay(this.task.beginDate, this.day);
      return isOneDay || this.isCrossWeek;
    },
    style: function style() {
      var dayCount = this.dayCount;
      if (dayCount > 6 - this.day.getDay()) {
        dayCount = 6 - this.day.getDay() + 1;
      }
      if (this.isCrossWeek) {
        dayCount = Math.min(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].compareDays(this.day, this.task.endDate) - 1, 7);
      }
      return {
        width: dayCount * this.width - 10 + 'px',
        background: this.task.color || __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].colors[0]
      };
    }
  },
  methods: {
    onClick: function onClick() {
      if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].isFunction(this.task.onClick)) {
        this.task.onClick(this.task);
      }
    }
  }
});

/***/ })

/******/ });