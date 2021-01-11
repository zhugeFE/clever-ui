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
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'tab',
  props: {
    tab: {
      type: Object,
      required: true
    },
    width: null,
    index: {
      type: Number,
      required: true
    },
    activeIndex: {
      type: Number,
      required: true
    },
    closeAble: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    clazz: function clazz() {
      return {
        'c-tab': true,
        'c-checked': this.activeIndex === this.index
      };
    },
    style: function style() {
      var style = {};
      if (this.width) style.width = this.width + 'px';
      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.activeIndex === this.index) return;
      this.$emit('click', this.tab);
    },
    onRemove: function onRemove(event) {
      this.$emit('remove', this.tab);
      event.stopPropagation();
    }
  },
  render: function render(h) {
    var _this = this;

    return h(
      'span',
      { 'class': this.clazz, style: this.style, on: {
          'click': this.onClick
        }
      },
      [function () {
        if (_this.$slots.default) {
          return _this.$slots.default;
        } else {
          var iconClass = { 'c-tab-icon': true };
          iconClass[_this.tab.icon] = true;
          return h(
            'span',
            null,
            [h(
              'i',
              {
                directives: [{
                  name: 'show',
                  value: _this.tab.icon
                }],
                'class': iconClass },
              []
            ), _this.tab.title, h(
              'i',
              {
                directives: [{
                  name: 'show',
                  value: _this.closeAble
                }],
                on: {
                  'click': _this.onRemove
                },

                'class': 'c-tab-close cicon-delete-little1' },
              []
            )]
          );
        }
      }()]
    );
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_main__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_vue__ = __webpack_require__(272);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cTabs',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_main__["a" /* emitter */]],
  components: { cTab: __WEBPACK_IMPORTED_MODULE_1__tab_vue__["a" /* default */] },
  props: {
    value: {
      type: Number,
      default: 0
    },

    placement: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right'].includes(value);
      }
    },

    vertical: {
      type: Boolean,
      default: false
    },

    theme: {
      type: String,
      default: 'normal',
      validator: function validator(value) {
        return ['normal', 'card'].includes(value);
      }
    },

    tabWidth: {
      type: Number
    },

    cleanMode: {
      type: Boolean,
      default: false
    },

    showAdd: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      tabs: [],
      activeIndex: this.value || 0
    };
  },

  computed: {
    tabBarClass: function tabBarClass() {
      return {
        'c-tab-bar': true,
        'c-tab-normal': this.theme === 'normal',
        'c-tab-card': this.theme === 'card',
        'c-right': this.placement === 'right',
        'c-center': this.placement === 'center'
      };
    },
    clazz: function clazz() {
      return {
        'c-tabs': true,
        'c-tab-vertical': this.vertical
      };
    }
  },
  watch: {
    value: function value(_value) {
      this.activeIndex = _value;
    }
  },
  mounted: function mounted() {
    this.initTabs();
  },
  beforeUpdate: function beforeUpdate() {
    this.initTabs();
  },

  methods: {
    initTabs: function initTabs() {
      var tabs = this.children('cTabPanel');
      if (tabs.length) {
        var index = tabs[this.activeIndex] ? this.activeIndex : 0;
        tabs[index].$data.show = true;
      }
    },
    onClickTab: function onClickTab(tab) {
      this.activeIndex = tab.index;
      this.$emit('input', tab.index);
      this.$emit('change', tab);
    },
    addTab: function addTab(tab) {
      tab.index = this.tabs.length;
      this.tabs.push(tab);
    },
    onAdd: function onAdd() {
      this.$emit('add');
    },
    remove: function remove(tab) {
      var _this = this;

      this.tabs.forEach(function (item, i) {
        if (item === tab) {
          _this.tabs.splice(i, 1);
        }
      });
      var index = this.activeIndex >= this.tabs.length ? 0 : this.activeIndex;
      this.tabs.forEach(function (tab, i) {
        tab.index = i;
      });
      if (this.tabs[index]) this.onClickTab(this.tabs[index]);
    },
    onRemove: function onRemove(tab) {
      this.$emit('remove', tab.title);
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h(
      'div',
      { 'class': this.clazz },
      [h(
        'div',
        { style: 'display: none' },
        [this.$slots.default]
      ), h(
        'div',
        { 'class': this.tabBarClass },
        [this.tabs.map(function (tab, index) {
          return h(
            'c-tab',
            {
              attrs: { activeIndex: _this2.activeIndex,
                index: index,
                tab: tab,
                width: _this2.tabWidth,
                closeAble: tab.closeAble && _this2.tabs.length > 1
              },
              on: {
                'remove': _this2.onRemove,
                'click': _this2.onClickTab
              }
            },
            [tab.slots.title]
          );
        }), function () {
          if (_this2.showAdd) {
            return h(
              'span',
              { 'class': 'c-tab', on: {
                  'click': _this2.onAdd
                }
              },
              [h(
                'i',
                { 'class': 'cicon-add', style: 'margin: 0' },
                []
              )]
            );
          }
        }()]
      ), this.tabs.map(function (tab, index) {
        if (_this2.cleanMode) {
          if (index === _this2.activeIndex) {
            return h(
              'div',
              { 'class': 'c-tab-panel' },
              [tab.slots.default]
            );
          }
        } else {
          return h(
            'div',
            {
              directives: [{
                name: 'show',
                value: index === _this2.activeIndex
              }],
              'class': 'c-tab-panel' },
            [tab.slots.default]
          );
        }
      })]
    );
  }
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__ = __webpack_require__(118);
/* unused harmony namespace reexport */
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(255)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/tab/tabs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e6552c70", Component.options)
  } else {
    hotAPI.reload("data-v-e6552c70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_vue__ = __webpack_require__(158);



__WEBPACK_IMPORTED_MODULE_0__tabs_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__tabs_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__tabs_vue__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__tabs_vue__["a" /* default */].name.replace(/c|C/, 'zg'), __WEBPACK_IMPORTED_MODULE_0__tabs_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__tabs_vue__["a" /* default */]);

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__util__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["a"]; });




/***/ }),

/***/ 245:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue__ = __webpack_require__(117);
/* unused harmony namespace reexport */
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(245)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/tab/tab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c4fe28a", Component.options)
  } else {
    hotAPI.reload("data-v-9c4fe28a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 35:
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emitter__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__emitter__["a"]; });
/* unused harmony reexport util */






/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(2);



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


/***/ })

/******/ });