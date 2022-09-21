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
/******/ 	return __webpack_require__(__webpack_require__.s = 194);
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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cPieChart',
  props: {
    echarts: {
      required: true
    },
    store: {
      type: Array,
      required: true
    },

    width: {
      type: Number
    },

    height: {
      type: Number,
      default: 400
    },

    showList: {
      type: Array
    },

    showAll: {
      type: Boolean,
      default: false
    },

    optionWrapper: {
      type: Function,
      default: function _default(option) {
        return option;
      }
    }
  },
  data: function data() {
    var _ref = window.zlocal || {},
        _ref$noData = _ref.noData,
        noData = _ref$noData === undefined ? '暂无数据' : _ref$noData,
        _ref$other = _ref.other,
        other = _ref$other === undefined ? '其它' : _ref$other;

    return {
      chart: null,
      noData: noData,
      other: other
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
    legend: function legend() {
      var legends = this.store.map(function (item) {
        return item.names.join('-');
      });
      legends.push(this.other);
      return legends;
    },
    showMap: function showMap() {
      var map = {};
      this.showList.forEach(function (names) {
        map[names.join('-')] = true;
      });
      return map;
    },
    seriesData: function seriesData() {
      var _this = this;

      var list = [];
      var other = {
        name: this.other,
        value: 0,
        itemStyle: {
          color: '#E1E3E6'
        }
      };
      this.store.forEach(function (item) {
        var series = {
          name: item.names.join('-'),
          value: item.values[0]
        };
        if (_this.showAll) {
          list.push(series);
        } else {
          if (_this.showList && _this.showMap[series.name] || !_this.showList && list.length < 10) {
            list.push(series);
          } else {
            other.value += item.values[0];
          }
        }
      });
      if (!this.showAll && other.value > 0) list.push(other);
      return list;
    },
    option: function option() {
      var context = this;
      return {
        color: __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].colors,
        backgroundColor: 'white',
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 12
          },
          formatter: function formatter(param) {
            var maxLength = context.getMaxLabelLength();
            var name = (param.name.match(new RegExp('\\S{1,' + maxLength + '}', 'g')) || []).join('<br/>');
            return '' + param.marker + name + ': ' + param.value + '(' + param.percent + '%)';
          }
        },
        legend: {
          data: this.legend,
          type: 'scroll',
          tooltip: {
            show: true,
            formatter: function formatter(param) {
              var maxLength = context.getMaxLabelLength();
              return (param.name.match(new RegExp('\\S{1,' + maxLength + '}', 'g')) || []).join('<br/>');
            }
          },
          formatter: function formatter(name) {
            var maxLength = context.getMaxLabelLength();
            return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].strMiddleSplit(name, {
              maxLength: maxLength,
              beginLength: maxLength / 2 - 2,
              endLength: maxLength / 2 - 2,
              replaceStr: '...'
            });
          }
        },
        series: [{
          type: 'pie',
          radius: ['30%', '70%'],
          data: this.seriesData,
          label: {
            formatter: function formatter(param) {
              var maxLength = context.getMaxLabelLength();
              var name = (param.name.match(new RegExp('\\S{1,' + maxLength + '}', 'g')) || []).join('\n');
              return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].strMiddleSplit(name, {
                maxLength: maxLength,
                beginLength: maxLength / 2 - 2,
                endLength: maxLength / 2 - 2,
                replaceStr: '...'
              });
            }
          }
        }]
      };
    }
  },
  watch: {
    option: function option() {
      this.setOption(this.option);
    }
  },
  mounted: function mounted() {
    this.chart = this.echarts.init(this.$refs.toChart);
    if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].isArray(window.__charts)) {
      window.__charts.push(this.chart);
    } else {
      window.__charts = [this.chart];
    }
    this.setOption(this.option);
  },
  updated: function updated() {
    this.onResize();
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.chart) return;
    this.chart.dispose();
    this.chart = null;
    delete window.__charts;
  },

  methods: {
    getMaxLabelLength: function getMaxLabelLength() {
      var rect = this.$refs.toChart.getBoundingClientRect();
      var length = parseInt(Math.min(rect.width, rect.height) / 12);
      return length;
    },
    setOption: function setOption(option) {
      this.chart.clear();
      this.chart.setOption(this.optionWrapper(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* util */].clone(option)));
    },
    onResize: function onResize() {
      var _this2 = this;

      if (!this.chart) return;

      this.chart.resize();
      this.setOption(this.option);
      this.$nextTick(function () {
        if (!_this2.chart) return;
        _this2.chart.resize();
      });
    }
  }
});

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pie_vue__ = __webpack_require__(112);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10d38fae_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pie_vue__ = __webpack_require__(294);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(233)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pie_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10d38fae_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pie_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/pie/pie.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10d38fae", Component.options)
  } else {
    hotAPI.reload("data-v-10d38fae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pie_vue__ = __webpack_require__(163);


__WEBPACK_IMPORTED_MODULE_0__pie_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__pie_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__pie_vue__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__pie_vue__["a" /* default */].name.replace(/c|C/, 'zg'), __WEBPACK_IMPORTED_MODULE_0__pie_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__pie_vue__["a" /* default */]);

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 294:
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
      staticClass: "c-pie-chart",
      style: _vm.style
    },
    [
      _c("div", { ref: "toChart", staticClass: "c-charts-main" }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.store.length,
              expression: "!store.length"
            }
          ],
          staticClass: "c-charts-empty",
          style: { "line-height": _vm.height + "px" }
        },
        [_vm._v(_vm._s(_vm.noData))]
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-10d38fae", esExports)
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__util__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["a"]; });




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
  getWeekNum: function getWeekNum(date, zlocal) {
    var now = new Date(date);
    var day = now.getDay();
    var weeks = [zlocal.Sun || '日', zlocal.Mon || '一', zlocal.Tue || '二', zlocal.Wed || '三', zlocal.Thu || '四', zlocal.Fri || '五', zlocal.Sat || '六'];
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


/***/ })

/******/ });