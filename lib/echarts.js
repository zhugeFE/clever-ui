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
/******/ 	return __webpack_require__(__webpack_require__.s = 185);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'cCharts',
  props: {
    echarts: {
      required: true
    },

    width: {
      type: Number
    },

    height: {
      type: Number,
      default: 400
    },

    type: {
      type: String,
      default: 'bar',
      validator: function validator(value) {
        return ['bar', 'line', 'area'].includes(value);
      }
    },

    store: {
      type: Object,
      validator: function validator(store) {
        return store && __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isArray(store.series) && __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isArray(store.x_axis);
      }
    },

    doubleY: {
      type: Boolean,
      default: false
    },

    yAxisRule: {
      type: Object,
      validator: function validator(rules) {
        for (var key in rules) {
          var rule = rules[key];

          if (!rule.hasOwnProperty('index')) {
            return false;
          }
        }
        return true;
      }
    },

    tooltipFormatter: {
      type: Function
    },

    valueUnit: {
      type: String,
      default: ''
    },
    yAxisFormatter: {
      type: Function,
      default: function _default(value) {
        if (parseFloat(value) >= 1000) {
          return __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].toThousands((value / 1000).toFixed(1)) + 'k';
        } else {
          return value;
        }
      }
    },
    xAxisFormatter: {
      type: Function,
      default: function _default(label) {
        if (/^\d{4}-\d{2}-\d{2}$/.test(label)) {
          return label.replace(/\d{4}-/, '');
        } else if (/^\d{4}-\d{2}-\d{2}\|\d{4}-\d{2}-\d{2}$/.test(label)) {
          var dates = label.match(/\d{4}-\d{2}-\d{2}/g);
          return dates[0].replace(/\d{4}-/, '') + '~' + dates[1].replace(/\d{4}-/, '');
        } else {
          label = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].strMiddleSplit(label);
          if (/:/.test(label)) {
            return label.replace(/\d{4}-\d{2}-\d{2}\s/, '');
          } else if (/,/.test(label)) {
            return label.replace(/,/g, '-');
          } else {
            return label;
          }
        }
      }
    },

    xAxisRotateCheck: {
      type: Function,
      default: function _default(option, type) {
        return type === 'bar' && option.xAxis.data.length > 5;
      }
    },

    xAxisRotate: {
      type: Number,
      default: 40
    },
    legendFormatter: {
      type: Function
    },
    legendShow: {
      type: Boolean,
      default: true
    },

    showList: {
      type: Array
    },

    reverseXAxis: {
      type: Boolean,
      default: false
    },

    seriesName: {
      type: String
    },
    colors: {
      type: Array,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].colors;
      }
    },

    stack: {
      type: Array,
      validator: function validator(stack) {
        return __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isArray(stack);
      }
    },

    markLine: {
      type: Array
    },

    seriesWrapper: {
      type: Function,
      default: function _default(series) {
        return series;
      }
    },

    optionWrapper: {
      type: Function,
      default: function _default(option) {
        return option;
      }
    },

    emptyLabel: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_1__i18n__["a" /* default */].noData
    }
  },
  data: function data() {
    return {
      chart: null,
      resizeTimer: null
    };
  },

  computed: {
    tooltipFormat: function tooltipFormat() {
      var _this = this;

      return function (params) {
        if (_this.tooltipFormatter) return _this.tooltipFormatter(params);
        var maxLength = _this.getMaxLabelLength();
        var lengthReg = new RegExp('\\S{1,' + maxLength + '}', 'g');
        var xLabel = params[0].name;
        if (/^\d{4}-\d{2}-\d{2}$/.test(xLabel)) {
          xLabel = xLabel.replace(/\d{4}-/, '');
        } else if (/^\d{4}-\d{2}-\d{2}\|\d{4}-\d{2}-\d{2}$/.test(xLabel)) {
          var dates = xLabel.match(/\d{4}-\d{2}-\d{2}/g);
          xLabel = dates[0].replace(/\d{4}-/, '') + '~' + dates[1].replace(/\d{4}-/, '');
        } else {
          xLabel = (xLabel.match(lengthReg) || []).join('<br/>');
        }
        var seriesMap = {};
        var series = [];
        params.forEach(function (item) {
          if (item.value === null || item.value === undefined || seriesMap[item.seriesName] !== null && seriesMap[item.seriesName] !== undefined) {
            return;
          }
          seriesMap[item.seriesName] = item.value;
          var name = (item.seriesName.match(lengthReg) || []).join('<br/>');
          series.push('' + item.marker + __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].getTooltipLabel(name) + ': <span>' + __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].toThousands(item.value) + _this.valueUnit + '</span>');
        });
        return '<span>' + xLabel + '</span><br>' + series.join('<br/>');
      };
    },
    chartStore: function chartStore() {
      if (this.reverseXAxis) {
        var series = {
          names: [this.seriesName],
          values: []
        };
        var store = {
          series: [series],
          x_axis: []
        };
        this.store.series.forEach(function (seriesItem) {
          store.x_axis.push(seriesItem.names.join('-'));
          series.values.push(seriesItem.values[0]);
        });
        return store;
      } else {
        return this.store;
      }
    },
    showListMap: function showListMap() {
      var map = {};
      if (__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isArray(this.showList)) {
        this.showList.forEach(function (item) {
          if (__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isArray(item)) {
            map[item.join('-')] = true;
          } else if (__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isString(item)) {
            map[item] = true;
          }
        });
      }
      return map;
    },
    style: function style() {
      var style = {
        height: this.height + 'px'
      };
      if (this.width) style.width = this.width + 'px';
      return style;
    },
    option: function option() {
      var option = {
        color: this.colors,
        backgroundColor: 'white',
        grid: {
          containLabel: false,
          show: false,
          borderColor: 'red'
        },
        legend: this.getLegend(),
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: this.getAxisPointerType(),
            lineStyle: {
              color: '#999',
              width: 2,
              type: 'solid'
            }
          },
          backgroundColor: '#6b6b6b',
          textStyle: {
            fontSize: 12,
            color: '#fff'
          },
          formatter: this.tooltipFormat
        },
        xAxis: {
          data: this.getXAxis(),
          boundaryGap: this.getBoundaryGap(),
          axisLabel: {
            textStyle: {
              color: '#404245'
            },
            formatter: this.xAxisFormatter
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: Boolean(this.markLine),
            interval: this.markLine ? 0 : 'auto',
            lineStyle: {
              color: this.getMarkLine()
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: this.getYAxis(),
        series: this.getSeries()
      };
      if (this.optionWrapper) {
        option = this.optionWrapper(option);
      }
      if (this.type === 'line') {
        option = this.dashedLineFormat(option);
      }
      return option;
    },
    showEmpty: function showEmpty() {
      return !this.chartStore.series.length || !this.option.series.length || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isArray(this.showList) && !this.showList.length;
    }
  },
  watch: {
    option: function option() {
      this.setOption(this.option);
    }
  },
  mounted: function mounted() {
    this.chart = this.echarts.init(this.$refs.toChart);
    this.setOption(this.option);
    if (__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isArray(window.__charts)) {
      window.__charts.push(this.chart);
    } else {
      window.__charts = [this.chart];
    }
  },
  updated: function updated() {
    this.onResize();
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.chart) return;
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
    this.chart.dispose();
    this.chart = null;
    delete window.__charts;
  },

  methods: {
    getMaxLabelLength: function getMaxLabelLength() {
      var rect = this.$refs.toChart.getBoundingClientRect();
      var length = parseInt(rect.width / 2 / 12);
      return length;
    },
    dashedLineFormat: function dashedLineFormat(option) {
      var _this2 = this;

      var overTime = false;
      option.xAxis.data.forEach(function (label, index) {
        if (overTime) return;
        if (!/\d{4}-\d{2}-\d{2}/.test(label)) return;
        var laterTime = label.replace(/[-:\s]*/g, '');
        var currentDate = new Date();
        var currentDateTime = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].dateFormat(currentDate, 'yyyymmdd');
        if (/\d{2}:\d{2}:\d{2}/.test(label)) {
          currentDateTime += currentDate.toTimeString().match(/\d{2}:\d{2}:\d{2}/)[0].replace(/:/g, '');
        } else if (/\|/.test(label)) {
          laterTime = label.split('|')[1].replace(/[-:\s]*/g, '');
        }
        if (parseInt(laterTime) >= currentDateTime) {
          overTime = true;
          var dashedSeries = [];
          option.series.forEach(function (series, seriesIndex) {
            var dashedItem = _this2.addDashedSeries(series, index - 1);
            dashedItem.itemStyle.normal.color = dashedItem.lineStyle.normal.color = option.color[seriesIndex];
            dashedSeries.push(dashedItem);
          });
          option.series = option.series.concat(dashedSeries);
        }
      });
      return option;
    },
    addDashedSeries: function addDashedSeries(series, dashedIndex) {
      var dashedSeries = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].clone(series);
      if (!dashedSeries.lineStyle) dashedSeries.lineStyle = { normal: {} };
      dashedSeries.lineStyle.normal.type = 'dashed';
      if (!dashedSeries.itemStyle) dashedSeries.itemStyle = { normal: {} };
      series.data.forEach(function (v, i) {
        if (i > dashedIndex) {
          series.data.splice(i, 1, null);
        }
      });
      dashedSeries.data.forEach(function (v, i) {
        if (i < dashedIndex) {
          dashedSeries.data.splice(i, 1, null);
        }
      });
      return dashedSeries;
    },
    getXAxis: function getXAxis() {
      return this.reverseXAxis && this.showList ? this.showList : this.chartStore.x_axis;
    },
    getMarkLine: function getMarkLine() {
      if (!this.markLine) return [];
      var arr = [];
      var xMap = {};
      this.getXAxis().forEach(function (label, i) {
        xMap[label] = i;
        arr[i] = 'none';
      });
      this.markLine.forEach(function (item) {
        if (__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isString(item)) {
          arr[xMap[item]] = 'rgb(254,177,177)';
        } else if (__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isNumber(item)) {
          arr[item] = 'rgb(254,177,177)';
        }
      });
      return arr;
    },
    getBoundaryGap: function getBoundaryGap() {
      var likeBarTypes = ['bar'];
      var boundaryGap = this.type ? likeBarTypes.includes(this.type) : false;
      if (this.yAxisRule) {
        for (var key in this.yAxisRule) {
          var item = this.yAxisRule[key];
          if (likeBarTypes.includes(item.type)) {
            boundaryGap = true;
          }
        }
      }
      return boundaryGap;
    },
    getYAxis: function getYAxis() {
      var axis = {
        splitNumber: 5,
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: this.yAxisFormatter,
          textStyle: {
            color: '#75787D'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#ddd',
            width: 1,
            type: 'dotted'
          }
        },
        type: 'value',
        axisLine: {
          show: false
        }
      };
      if (this.doubleY) {
        var result = [];
        for (var key in this.yAxisRule) {
          var rule = this.yAxisRule[key];
          result[rule.index] = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].mergeObject(axis, __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].clone(rule.option || {}));
        }
        return result;
      }
      return axis;
    },
    getSeries: function getSeries() {
      var seriesList = [];
      var context = this;
      this.each(function (name, series) {
        var _this3 = this;

        seriesList.push(function () {
          var type = context.doubleY ? context.yAxisRule[name].type || context.type : context.type;
          var seriesItem = null;
          switch (type) {
            case 'bar':
              seriesItem = context.getBarSeries(name, series);
              break;
            case 'line':
              seriesItem = context.getLineSeries(name, series);
              break;
            case 'area':
              seriesItem = context.getAreaSeries(name, series);
              break;
            default:
              console.error('未支持的图表类型', context.type);
          }
          return _this3.seriesWrapper(seriesItem);
        }());
      });
      return seriesList;
    },
    getLegend: function getLegend() {
      var legendList = [];
      this.each(function (name) {
        legendList.push({
          name: name
        });
      });
      var context = this;
      return {
        type: 'scroll',
        data: legendList,
        borderColor: 'red',
        borderWidth: 0,
        width: '60%',
        show: this.legendShow || legendList.length > 1,
        formatter: this.legendFormatter || function (label) {
          var maxLength = context.getMaxLabelLength();
          return __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].strMiddleSplit(label, {
            maxLength: maxLength,
            beginLength: maxLength / 2 - 2,
            endLength: maxLength / 2 - 2,
            replaceStr: '...'
          });
        },
        tooltip: {
          show: true,
          formatter: function formatter(param) {
            var maxLength = context.getMaxLabelLength();
            return param.name.match(new RegExp('\\S{1,' + maxLength + '}', 'g')).join('<br/>');
          }
        }
      };
    },
    getBarSeries: function getBarSeries(name, series) {
      var _this4 = this;

      var result = null;
      if (this.reverseXAxis) {
        result = {
          name: name,
          type: 'bar',
          barMaxWidth: 35,
          data: function () {
            var data = [];
            series.values.forEach(function (value, index) {
              if (_this4.reverseXAxis && _this4.showList && !_this4.showListMap[_this4.store.series[index].names.join('-')]) {
                return;
              }
              data.push({
                name: _this4.chartStore.x_axis[index],
                value: value,
                itemStyle: {
                  normal: {
                    color: _this4.colors[data.length]
                  }
                }
              });
            });
            return data;
          }(),
          yAxisIndex: this.doubleY ? this.yAxisRule[name].index : 0
        };
      } else {
        result = {
          name: name,
          type: 'bar',
          barMaxWidth: 35,
          data: series.values,
          yAxisIndex: this.doubleY ? this.yAxisRule[name].index : 0
        };
      }
      if (series.stack) {
        result.stack = series.stack;
        result = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].mergeObject(series.option, result);
      }
      return result;
    },
    getLineSeries: function getLineSeries(name, series) {
      return {
        name: name,
        type: 'line',
        data: __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].clone(series.values),
        symbol: 'circle',
        symbolSize: 5,
        showAllSymbol: false,
        yAxisIndex: this.doubleY ? this.yAxisRule[name].index : 0,
        itemStyle: {
          normal: {
            lineStyle: { width: 1 }
          }
        }
      };
    },
    getAreaSeries: function getAreaSeries(name, series) {
      return {
        name: name,
        type: 'line',
        data: series.values,
        symbol: 'circle',
        symbolSize: 0,
        showAllSymbol: false,
        yAxisIndex: this.doubleY ? this.yAxisRule[name].index : 0,
        stack: 'area',
        areaStyle: {
          normal: {
            opacity: 0.3
          }
        },
        itemStyle: {
          normal: {
            lineStyle: { width: 1 }
          }
        }
      };
    },
    each: function each(handle) {
      var _this5 = this;

      this.chartStore.series.forEach(function (series, index) {
        var name = series.names.join('-');
        if (__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].isArray(_this5.showList) && !_this5.showListMap[name] && !_this5.reverseXAxis) {
          return;
        }

        if (_this5.stack && _this5.type === 'bar') {
          _this5.stack.forEach(function (stack) {
            handle.call(_this5, name + ' ' + stack.name, {
              names: series.names.concat([stack.name]),
              values: series.values.map(function (v) {
                return {
                  originData: v,
                  field: stack.field,
                  value: v[stack.field]
                };
              }),
              stack: 'stack-' + index,
              option: stack.option
            });
          });
        } else {
          handle.call(_this5, name, series);
        }
      });
    },
    getAxisPointerType: function getAxisPointerType() {
      var type = 'shadow';
      if (this.doubleY) {
        var haveBar = false;
        for (var key in this.yAxisRule) {
          var rule = this.yAxisRule[key];
          if (rule.type === 'bar') haveBar = true;
        }
        if (haveBar) return type;
      }
      switch (this.type) {
        case 'bar':
          type = 'shadow';
          break;
        case 'line':
        case 'area':
          type = 'line';
          break;
        default:
          console.error('未支持的图表类型', this.type);
      }
      return type;
    },
    setOption: function setOption(option) {
      this.chart.clear();
      this.chart.setOption(this.resizeGrid(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* util */].clone(option)));
    },
    resizeGrid: function resizeGrid(option) {
      var containerWidth = this.$refs.toChart.offsetWidth;
      var containerHeight = this.chart.getHeight();
      var legendHeight = option.legend.show ? 24 : 0;
      var margin = {
        top: 20,
        right: this.doubleY ? 10 : 40,
        bottom: 10,
        left: 0
      };
      var yAxisWidth = 80;
      var xAxisHeight = 24;

      if (this.xAxisRotateCheck(option, this.type)) {
        option.xAxis.axisLabel = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, option.xAxis.axisLabel || {}, {
          rotate: this.xAxisRotate
        });
        option.grid = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, option.grid, {
          top: option.legend.show ? 40 : 20,
          containLabel: true,
          bottom: 0,
          left: 30,
          right: this.doubleY ? 20 : 30
        });
      } else {
        option.grid.width = containerWidth - yAxisWidth * (this.doubleY ? 2 : 1) - margin.left - margin.right;
        option.grid.top = legendHeight + margin.top;
        option.grid.left = yAxisWidth;
        option.grid.height = containerHeight - option.grid.top - xAxisHeight - margin.bottom;
      }
      return option;
    },
    onResize: function onResize() {
      var _this6 = this;

      if (!this.chart) return;

      var rect = this.$refs.toChart.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        if (this.resizeTimer) {
          clearTimeout(this.resizeTimer);
        }
        this.resizeTimer = setTimeout(function () {
          _this6.onResize(false);
        }, 300);
        return;
      }
      this.chart.resize();
      this.setOption(this.option);
      this.$nextTick(function () {
        if (!_this6.chart) return;
        _this6.chart.resize();
      });
    }
  }
});

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

/***/ 13:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(38);
var toPrimitive = __webpack_require__(42);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ 15:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_charts_vue__ = __webpack_require__(103);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a46101a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_charts_vue__ = __webpack_require__(302);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_charts_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a46101a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_charts_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/echarts/charts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a46101a", Component.options)
  } else {
    hotAPI.reload("data-v-4a46101a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(27);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_vue__ = __webpack_require__(154);



__WEBPACK_IMPORTED_MODULE_0__charts_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__charts_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__charts_vue__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__charts_vue__["a" /* default */].name.replace(/c|C/, 'zg'), __WEBPACK_IMPORTED_MODULE_0__charts_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__charts_vue__["a" /* default */]);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(29);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(31);
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

/***/ 22:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 245:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
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

/***/ 26:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(24) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


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

/***/ 302:
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
      staticClass: "c-charts",
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
              value: _vm.showEmpty,
              expression: "showEmpty"
            }
          ],
          staticClass: "c-charts-empty",
          style: { "line-height": _vm.height + "px" }
        },
        [_vm._v("\n    " + _vm._s(_vm.emptyLabel) + "\n  ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-4a46101a", esExports)
  }
}

/***/ }),

/***/ 31:
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

/***/ 32:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(39);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(17);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(41);
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(37)(false);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');

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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 42:
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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(51);

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

/***/ 48:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(33);
var gOPS = __webpack_require__(57);
var pIE = __webpack_require__(48);
var toObject = __webpack_require__(34);
var IObject = __webpack_require__(27);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function () {
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

/***/ 57:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


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
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(20);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(54) });


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


/***/ })

/******/ });