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
/******/ 	return __webpack_require__(__webpack_require__.s = 196);
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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { CButton: __WEBPACK_IMPORTED_MODULE_0__button___default.a },
  name: 'cReload',
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: function validator(value) {
        return ['normal', 'bigger'].includes(value);
      }
    }
  },
  data: function data() {
    var _ref = window.zlocal || {},
        _ref$failedLoadData = _ref.failedLoadData,
        failedLoadData = _ref$failedLoadData === undefined ? '数据加载失败' : _ref$failedLoadData,
        _ref$reload = _ref.reload,
        reload = _ref$reload === undefined ? '重新加载' : _ref$reload;

    return {
      zlocal: {
        failedLoadData: failedLoadData, reload: reload
      }
    };
  },
  mounted: function mounted() {
    var container = this.$refs.reload.parentElement;
    __WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* dom */].setPosition(container);
  },

  computed: {
    reloadClass: function reloadClass() {
      return {
        'c-reload': true,
        'c-small': this.size === 'normal',
        'c-bigger': this.size === 'bigger'
      };
    }
  },
  methods: {
    onReload: function onReload() {
      this.$emit('reload');
    }
  }
});

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reload_vue__ = __webpack_require__(116);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37a15122_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reload_vue__ = __webpack_require__(297);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(238)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_reload_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37a15122_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_reload_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/reload/reload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37a15122", Component.options)
  } else {
    hotAPI.reload("data-v-37a15122", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reload_vue__ = __webpack_require__(165);



__WEBPACK_IMPORTED_MODULE_0__reload_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__reload_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__reload_vue__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__reload_vue__["a" /* default */].name.replace(/c|C/, 'zg'), __WEBPACK_IMPORTED_MODULE_0__reload_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__reload_vue__["a" /* default */]);

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAAAXNSR0IArs4c6QAABFdJREFUWAm9WN9vFEUc35mr3N2Kqb1AJAHFBERSAjwQNFFiJCEaQBNNoz6IJjWGBKK9HwWChqQnhEgt9Ep584nwCOqD+i/0wTd9INE0mPiGMbleDN3d3u3O8BnIbOf2Zu52tg2bbOY7n/l+P9/Pfmd2drLEWafLK5cnHM5rDiER53z66fn579eDmqwHiV+pfMIYu6VyEUrH3Lm5n1Qsi71mgbxe3+g1m4tIvkUVAOJ/iqXSblKvBypua1PbgKQ/xH0NrEuc8OGOsz1YWqol/W37a6qgPzm5nXc6f0JMQZcY5A+K+fxLZGbmvm48DbamCvIwnDaJE8kxttFbWbmcRojJJ3MFvVrtNQhcMBFLnBDChgg5sGFu7neJ2bSZKohthDhh2EiTCL405DyVr44vk8CgWj2B6XtFR6jDIPJNb2Lifd3YIMx6irGtuH6z+RcEbhtEro4j0T1sO6PYdtoqPsi2rmDQbJ41icN6WxS3Lilidvit1oRurB9mJdCrVrci0TkdIYRdca9f3yVuYet8MNUX+OTkJt2YCbMS6ETRtxDo6siKlM5IvOi6V6Xd1XI+HIThxS5sQCe1wOVy+SC4Thj5hoe9eCyf92M7YaCKJ1eq1T0J2NhNLRCLvIHqmV8q38/HWYJg1Y7BxwY4cmEUzSZgYzeVQKy9D/HkrxtZxEAUrYpSbX3QW0Glclw/1I0OFIhtpeAwNt0d1tvzGYsFBord6/kYwfHsKriHTOMSHygwaLWqqN6LMsDUUs5jgUSxTf6Y6t3Ydk6ZxiXeVyAvl5+DuK+kc78Wi9NKoOACd52fPz/Sj7evQLyWl0HyTD8COaZWLWRMe/ySvnHLeckPgqm4rzGMAtu12n5UZVwTo4VCpYIgjaupdVZBxk4HtdouFVJto8AQpxVUzziukghbnWLMXWqBWItPRVF0Lckn+1oBy5XKewg8LJ3StOoUd4lNE8z5OzghHdG59gjEq78ByeLPli5Ih0XKtDLF1vnqsIixWX77di451iPQX1r6ElO7M+k4qA+iZ6UPKhjbEhvYcr7XW1j4POkHrtVLnDS8MFzEGrJOgBPMbzgkvOt0OsTvdH7FQ4pvt+31n1sq7cSZ8X8Z2FVBPwy/ySJOkEHQq/7y8r9+u30/ozhBsxkzeEEY8oorKE4YeJv+wMvRsw6kc78WRB389rgDpeLzNbYGnhWay40WGo2/Rb64gthcr2UlFUQ8l/sAh9WP3fn5jzDdnwosywUNeXynv5OxjwTiZHEUT/62BG1bVC9wZ2d/lnGF0dE7wJAr24UlMuaXy2+IaCpOFPgdZdwo06SAkkL7zJmXpa939+4+YPHykbhNi62qAW2U4LfZF1B8wyZY5ws193BfcijNgW8K9ws6PxuMUjo+hCcdtwky+YJnB+6bODuaXKxxzthnFGvveevIJxewjVJCfnhy+awz/ThUGBmpYHN8gOk5hjWU6uxnncYyAFpamNlfiocOTT0EEBufwWEGhCEAAAAASUVORK5CYII="

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAgRJREFUOBGNU79rFFEQfrM/btctDBFDrCwkaGFEQv4Am2gRksa/QUQsbrPpUggHChZmb8sQtLTK32CdykKQgIXYihDuqn337vLejvOWzLK72bvk4DFvvvnme7MzcyCu+WEcr0ohvglEE/n+FqTp+aIUZ1HQxkjsI4mt0/Wp0vrDdXxYRJjt729oY74jYvkwkY3ruhtBlv2cl7ewQq11xmJWAIVw6YHhPDGLzxWUe3svSeBZR/JWniS7HXgJdQriYNCjvn3iJAD4ak/lG3OIx8c++3XbKTgZj2P61AdMvOX7b+xhnyp/ODk7e8t+3V4ZCh4crMg8/02k20yMXDcSS0sgR6OcMbJjwtcgy0Y17GoPlZTviVCJlWTEQCgV1BPpvjwxZtDCRKPCab+/boT4YadZJ0YA90SvB3I6/VvHqa/a9bwnQZr+YrzRQw0wbItZohIiUBcXISexpT57tFop+9ZWgiqOd2iyz+tBvgN9sj3sNyzitkqSF4yVgnYFCiEOGWxbim1S5ZttnH1TFEM8OSnb5FnQrgAlPGJC2yLAEcUb/W5wEB/L09PXhB0BJskdaYxdk+UG6dIhFRRheB+Kwi9msz9dnBIDOI/CcM27HH2nmCWWlSm1Ixyn859RPYB4d6LUO8j7fbuYcwWrhJtcAP554DifafyviN/YvZvkNziImrbky38tOME16HmBJAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "reload", class: _vm.reloadClass }, [
    _c(
      "div",
      { staticClass: "c-reload-main" },
      [
        _vm.size === "bigger"
          ? _c("img", {
              staticStyle: { width: "40px", height: "36px" },
              attrs: { src: __webpack_require__(278) }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.size === "normal"
          ? _c("img", {
              staticStyle: { width: "20px", height: "18px" },
              attrs: { src: __webpack_require__(279) }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("span", { staticClass: "c-reload-msg" }, [
          _vm._v(_vm._s(_vm.zlocal.failedLoadData) + "。")
        ]),
        _vm._v(" "),
        _c(
          "c-button",
          {
            attrs: { theme: "border", type: "primary", icon: "cicon-renovate" },
            on: { click: _vm.onReload }
          },
          [_vm._v(_vm._s(_vm.zlocal.reload))]
        )
      ],
      1
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
    require("vue-hot-reload-api")      .rerender("data-v-37a15122", esExports)
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

/***/ 62:
/***/ (function(module, exports) {

module.exports = require("clever-ui/lib/button");

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

    var _ref = window.zlocal || {},
        _ref$day = _ref.day,
        day = _ref$day === undefined ? '天' : _ref$day,
        _ref$shi = _ref.shi,
        shi = _ref$shi === undefined ? '时' : _ref$shi,
        _ref$fen = _ref.fen,
        fen = _ref$fen === undefined ? '分' : _ref$fen;

    if (h > 24) {
      return d + day;
    } else if (m > 60) {
      return h + shi;
    } else {
      return m + fen;
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

    var _ref2 = window.zlocal || {},
        _ref2$monday = _ref2.monday,
        monday = _ref2$monday === undefined ? '一' : _ref2$monday,
        _ref2$tuesday = _ref2.tuesday,
        tuesday = _ref2$tuesday === undefined ? '二' : _ref2$tuesday,
        _ref2$wednesday = _ref2.wednesday,
        wednesday = _ref2$wednesday === undefined ? '三' : _ref2$wednesday,
        _ref2$thursday = _ref2.thursday,
        thursday = _ref2$thursday === undefined ? '四' : _ref2$thursday,
        _ref2$friday = _ref2.friday,
        friday = _ref2$friday === undefined ? '五' : _ref2$friday,
        _ref2$saturday = _ref2.saturday,
        saturday = _ref2$saturday === undefined ? '六' : _ref2$saturday,
        _ref2$sunday = _ref2.sunday,
        sunday = _ref2$sunday === undefined ? '日' : _ref2$sunday;

    var weeks = [sunday.slice(0, 3), monday.slice(0, 3), tuesday.slice(0, 3), wednesday.slice(0, 3), thursday.slice(0, 3), friday.slice(0, 3), saturday.slice(0, 3)];
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