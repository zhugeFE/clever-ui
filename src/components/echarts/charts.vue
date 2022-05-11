<template>
  <div class="c-charts" :style="style" v-resize="onResize">
    <div class="c-charts-main" ref="toChart"></div>
    <div
      v-show="showEmpty"
      :style="{ 'line-height': height + 'px' }"
      class="c-charts-empty"
    >
      {{ emptyLabel }}
    </div>
  </div>
</template>

<script>
import zlocal from '../../i18n'
import { util } from '../../utils'
export default {
  name: 'cCharts',
  props: {
    echarts: {
      required: true
    },
    /**
     * @description 图表宽度，默认自适应
     */
    width: {
      type: Number
    },
    /**
     * @description 图表高度
     */
    height: {
      type: Number,
      default: 400
    },
    /**
     * @description 图表类型
     */
    type: {
      type: String,
      default: 'bar',
      validator(value) {
        return ['bar', 'line', 'area'].includes(value)
      }
    },
    /**
     * @description 图表数据源
     */
    store: {
      type: Object,
      validator(store) {
        return store && util.isArray(store.series) && util.isArray(store.x_axis)
      }
    },
    /**
     * @description 是否启用双Y轴，为true时，yAxis为必传项
     */
    doubleY: {
      type: Boolean,
      default: false
    },
    /**
     * @description doubleY启用时，为必传项
     * @tip rules为对象，key与series中的names相对应，names为数组，则通过join('-')转为字符串,value中，type如果不传，则默认值与type参数一致
     */
    yAxisRule: {
      type: Object,
      validator(rules) {
        for (const key in rules) {
          const rule = rules[key]
          // value格式为：{type: 'bar/line/eg...', index: 0, option: {}} option为echarts中yAxis的标准配置
          if (!rule.hasOwnProperty('index')) {
            return false
          }
        }
        return true
      }
    },
    /**
     * @description tooltip自定义显示
     */
    tooltipFormatter: {
      type: Function
    },
    /**
     * @description value值的单位，可以是%, '个'等
     */
    valueUnit: {
      type: String,
      default: ''
    },
    yAxisFormatter: {
      type: Function,
      default(value) {
        if (parseFloat(value) >= 1000) {
          return util.toThousands((value / 1000).toFixed(1)) + 'k'
        } else {
          return value
        }
      }
    },
    xAxisFormatter: {
      type: Function,
      default(label) {
        if (/^\d{4}-\d{2}-\d{2}$/.test(label)) {
          // 处理日期
          return label.replace(/\d{4}-/, '')
        } else if (/^\d{4}-\d{2}-\d{2}\|\d{4}-\d{2}-\d{2}$/.test(label)) {
          // 周、月日期
          let dates = label.match(/\d{4}-\d{2}-\d{2}/g)
          return (
            dates[0].replace(/\d{4}-/, '') +
            '~' +
            dates[1].replace(/\d{4}-/, '')
          )
        } else {
          label = util.strMiddleSplit(label)
          if (/:/.test(label)) {
            return label.replace(/\d{4}-\d{2}-\d{2}\s/, '')
          } else if (/,/.test(label)) {
            return label.replace(/,/g, '-')
          } else {
            return label
          }
        }
      }
    },
    /**
     * @description 判断是否使用带角度的X轴坐标
     */
    xAxisRotateCheck: {
      type: Function,
      default: (option, type) => {
        return type === 'bar' && option.xAxis.data.length > 5
      }
    },
    /**
     * @description 当X轴坐标label需要旋转时的旋转角度，-90 到 90
     */
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
    /**
     * @description 显示数据项（从store中过滤），对应series中的names字段
     * @格式[['group', 'item1'], ['group', 'item2']]或['item1', 'item2']
     */
    showList: {
      type: Array
    },
    /**
     * @description 是否将series中每项数据的names转为新的x轴
     * @tip 目前只有柱状图时有效
     */
    reverseXAxis: {
      type: Boolean,
      default: false
    },
    /**
     * @description reverseXAxis为true时，该项必填
     */
    seriesName: {
      type: String
    },
    colors: {
      type: Array,
      default() {
        return util.colors
      }
    },
    /**
     * @description 当以堆叠柱状图展示的话，series的values元素，需要为对象形式
     * @tip 该属性只对柱形图有效
     */
    stack: {
      type: Array,
      validator(stack) {
        // demo
        // stack = [
        //   {
        //     field: 'percent',
        //     name: '百分比',
        //     option: null // series原生配置
        //   },
        //   {
        //     field: 'value',
        //     name: '人数'
        //   }
        // ]
        return util.isArray(stack)
      }
    },
    /**
     * @description 标记线
     * @tip 数组元素如果为字符串类型，则进行值匹配，如果为数字类型，则当做下标处理
     */
    markLine: {
      type: Array
    },
    /**
     * @description series包装器，用来series的自定义配置
     */
    seriesWrapper: {
      type: Function,
      default(series) {
        return series
      }
    },
    /**
     * @description option包装器，用来完全自定义option选项
     */
    optionWrapper: {
      type: Function,
      default(option) {
        return option
      }
    },
    /**
     * @description 数据为空时的提示
     */
    emptyLabel: {
      type: String,
      default: zlocal.noData
    }
  },
  data() {
    return {
      chart: null,
      resizeTimer: null
    }
  },
  computed: {
    tooltipFormat() {
      return params => {
        if (this.tooltipFormatter) return this.tooltipFormatter(params)
        let maxLength = this.getMaxLabelLength()
        let lengthReg = new RegExp('\\S{1,' + maxLength + '}', 'g')
        let xLabel = params[0].name
        if (/^\d{4}-\d{2}-\d{2}$/.test(xLabel)) {
          // 处理日期
          xLabel = xLabel.replace(/\d{4}-/, '')
        } else if (/^\d{4}-\d{2}-\d{2}\|\d{4}-\d{2}-\d{2}$/.test(xLabel)) {
          // 周、月日期
          let dates = xLabel.match(/\d{4}-\d{2}-\d{2}/g)
          xLabel =
            dates[0].replace(/\d{4}-/, '') +
            '~' +
            dates[1].replace(/\d{4}-/, '')
        } else {
          xLabel = (xLabel.match(lengthReg) || []).join('<br/>')
        }
        let seriesMap = {}
        let series = []
        params.forEach(item => {
          if (
            item.value === null ||
            item.value === undefined ||
            (seriesMap[item.seriesName] !== null &&
              seriesMap[item.seriesName] !== undefined)
          ) {
            return
          }
          seriesMap[item.seriesName] = item.value
          let name = (item.seriesName.match(lengthReg) || []).join('<br/>')
          series.push(
            `${
              item.marker
            }${util.getTooltipLabel(name)}: <span>${util.toThousands(
              item.value
            )}${this.valueUnit}</span>`
          )
        })
        return `<span>${xLabel}</span><br>${series.join('<br/>')}`
      }
    },
    chartStore() {
      if (this.reverseXAxis) {
        let series = {
          names: [this.seriesName],
          values: []
        }
        let store = {
          series: [series],
          x_axis: []
        }
        this.store.series.forEach(seriesItem => {
          store.x_axis.push(seriesItem.names.join('-'))
          series.values.push(seriesItem.values[0])
        })
        return store
      } else {
        return this.store
      }
    },
    showListMap() {
      let map = {}
      if (util.isArray(this.showList)) {
        this.showList.forEach(item => {
          if (util.isArray(item)) {
            map[item.join('-')] = true
          } else if (util.isString(item)) {
            map[item] = true
          }
        })
      }
      return map
    },
    style() {
      let style = {
        height: this.height + 'px'
      }
      if (this.width) style.width = `${this.width}px`
      return style
    },
    option() {
      let option = {
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
          boundaryGap: this.getBoundaryGap(), // 判断是否有柱状图，包含柱状图为true，其它为false
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
      }
      if (this.optionWrapper) {
        option = this.optionWrapper(option)
      }
      if (this.type === 'line') {
        option = this.dashedLineFormat(option)
      }
      return option
    },
    showEmpty() {
      return (
        !this.chartStore.series.length ||
        !this.option.series.length ||
        (util.isArray(this.showList) && !this.showList.length)
      )
    }
  },
  watch: {
    option() {
      this.setOption(this.option)
    }
  },
  mounted() {
    this.chart = this.echarts.init(this.$refs.toChart)
    this.setOption(this.option)
    if (util.isArray(window.__charts)) {
      window.__charts.push(this.chart)
    } else {
      window.__charts = [this.chart]
    }
  },
  updated() {
    this.onResize()
  },
  beforeDestroy() {
    if (!this.chart) return
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer)
    }
    this.chart.dispose()
    this.chart = null
    delete window.__charts
  },
  methods: {
    getMaxLabelLength() {
      let rect = this.$refs.toChart.getBoundingClientRect()
      const length = parseInt(rect.width / 2 / 12) // 宽度的一般再除以字体大小
      return length
    },
    dashedLineFormat(option) {
      let overTime = false
      option.xAxis.data.forEach((label, index) => {
        if (overTime) return
        if (!/\d{4}-\d{2}-\d{2}/.test(label)) return // 如果x轴不是日期，则不做虚线处理
        let laterTime = label.replace(/[-:\s]*/g, '')
        let currentDate = new Date()
        let currentDateTime = util.dateFormat(currentDate, 'yyyymmdd')
        if (/\d{2}:\d{2}:\d{2}/.test(label)) {
          // 有时分秒
          currentDateTime += currentDate
            .toTimeString()
            .match(/\d{2}:\d{2}:\d{2}/)[0]
            .replace(/:/g, '')
        } else if (/\|/.test(label)) {
          // 周，月
          laterTime = label.split('|')[1].replace(/[-:\s]*/g, '')
        }
        if (parseInt(laterTime) >= currentDateTime) {
          overTime = true
          let dashedSeries = []
          option.series.forEach((series, seriesIndex) => {
            let dashedItem = this.addDashedSeries(series, index - 1)
            dashedItem.itemStyle.normal.color = dashedItem.lineStyle.normal.color =
              option.color[seriesIndex]
            dashedSeries.push(dashedItem)
          })
          option.series = option.series.concat(dashedSeries)
        }
      })
      return option
    },
    addDashedSeries(series, dashedIndex) {
      let dashedSeries = util.clone(series)
      if (!dashedSeries.lineStyle) dashedSeries.lineStyle = { normal: {} }
      dashedSeries.lineStyle.normal.type = 'dashed'
      if (!dashedSeries.itemStyle) dashedSeries.itemStyle = { normal: {} }
      series.data.forEach((v, i) => {
        // 去掉未过完的时间点数据
        if (i > dashedIndex) {
          series.data.splice(i, 1, null)
        }
      })
      dashedSeries.data.forEach((v, i) => {
        if (i < dashedIndex) {
          dashedSeries.data.splice(i, 1, null)
        }
      })
      return dashedSeries
    },
    /**
     * @description 获取x轴数据
     */
    getXAxis() {
      return this.reverseXAxis && this.showList
        ? this.showList
        : this.chartStore.x_axis
    },
    /**
     * @description 获取标记线的颜色组
     */
    getMarkLine() {
      if (!this.markLine) return []
      let arr = []
      let xMap = {}
      this.getXAxis().forEach((label, i) => {
        xMap[label] = i
        arr[i] = 'none'
      })
      this.markLine.forEach(item => {
        if (util.isString(item)) {
          arr[xMap[item]] = 'rgb(254,177,177)'
        } else if (util.isNumber(item)) {
          arr[item] = 'rgb(254,177,177)'
        }
      })
      return arr
    },
    /**
     * @description 判断是否有柱状图，包含柱状图为true，其它为false
     */
    getBoundaryGap() {
      const likeBarTypes = ['bar']
      let boundaryGap = this.type ? likeBarTypes.includes(this.type) : false
      if (this.yAxisRule) {
        for (const key in this.yAxisRule) {
          const item = this.yAxisRule[key]
          if (likeBarTypes.includes(item.type)) {
            boundaryGap = true
          }
        }
      }
      return boundaryGap
    },
    getYAxis() {
      const axis = {
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
      }
      if (this.doubleY) {
        let result = []
        for (let key in this.yAxisRule) {
          const rule = this.yAxisRule[key]
          result[rule.index] = util.mergeObject(
            axis,
            util.clone(rule.option || {})
          )
        }
        return result
      }
      return axis
    },
    getSeries() {
      let seriesList = []
      let context = this
      this.each(function(name, series) {
        seriesList.push(
          (() => {
            const type = context.doubleY
              ? context.yAxisRule[name].type || context.type
              : context.type
            let seriesItem = null
            switch (type) {
              case 'bar':
                seriesItem = context.getBarSeries(name, series)
                break
              case 'line':
                seriesItem = context.getLineSeries(name, series)
                break
              case 'area':
                seriesItem = context.getAreaSeries(name, series)
                break
              default:
                console.error('未支持的图表类型', context.type)
            }
            return this.seriesWrapper(seriesItem)
          })()
        )
      })
      return seriesList
    },
    getLegend() {
      let legendList = []
      this.each(function(name) {
        legendList.push({
          name
        })
      })
      let context = this
      return {
        type: 'scroll',
        data: legendList,
        borderColor: 'red',
        borderWidth: 0,
        width: '60%',
        show: this.legendShow || legendList.length > 1,
        formatter:
          this.legendFormatter ||
          function(label) {
            const maxLength = context.getMaxLabelLength()
            return util.strMiddleSplit(label, {
              maxLength,
              beginLength: maxLength / 2 - 2,
              endLength: maxLength / 2 - 2,
              replaceStr: '...'
            })
          },
        tooltip: {
          show: true,
          formatter(param) {
            const maxLength = context.getMaxLabelLength()
            return param.name
              .match(new RegExp(`\\S{1,${maxLength}}`, 'g'))
              .join('<br/>')
          }
        }
      }
    },
    getBarSeries(name, series) {
      let result = null
      if (this.reverseXAxis) {
        result = {
          name,
          type: 'bar',
          barMaxWidth: 35,
          data: (() => {
            let data = []
            series.values.forEach((value, index) => {
              if (
                this.reverseXAxis &&
                this.showList &&
                !this.showListMap[this.store.series[index].names.join('-')]
              ) {
                return
              }
              data.push({
                name: this.chartStore.x_axis[index],
                value: value,
                itemStyle: {
                  normal: {
                    color: this.colors[data.length]
                  }
                }
              })
            })
            return data
          })(),
          yAxisIndex: this.doubleY ? this.yAxisRule[name].index : 0
        }
      } else {
        result = {
          name,
          type: 'bar',
          barMaxWidth: 35,
          data: series.values,
          yAxisIndex: this.doubleY ? this.yAxisRule[name].index : 0
        }
      }
      if (series.stack) {
        result.stack = series.stack
        result = util.mergeObject(series.option, result)
      }
      return result
    },
    getLineSeries(name, series) {
      return {
        name,
        type: 'line',
        data: util.clone(series.values),
        symbol: 'circle',
        symbolSize: 5,
        showAllSymbol: false,
        yAxisIndex: this.doubleY ? this.yAxisRule[name].index : 0,
        itemStyle: {
          normal: {
            lineStyle: { width: 1 }
          }
        }
      }
    },
    getAreaSeries(name, series) {
      return {
        name,
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
      }
    },
    each(handle) {
      this.chartStore.series.forEach((series, index) => {
        const name = series.names.join('-')
        if (
          util.isArray(this.showList) &&
          !this.showListMap[name] &&
          !this.reverseXAxis
        ) {
          return
        }

        if (this.stack && this.type === 'bar') {
          this.stack.forEach(stack => {
            handle.call(this, `${name} ${stack.name}`, {
              names: series.names.concat([stack.name]),
              values: series.values.map(v => {
                return {
                  originData: v,
                  field: stack.field,
                  value: v[stack.field]
                }
              }),
              stack: `stack-${index}`,
              option: stack.option
            })
          })
        } else {
          handle.call(this, name, series)
        }
      })
    },
    getAxisPointerType() {
      let type = 'shadow'
      if (this.doubleY) {
        let haveBar = false
        for (const key in this.yAxisRule) {
          let rule = this.yAxisRule[key]
          if (rule.type === 'bar') haveBar = true
        }
        if (haveBar) return type
      }
      switch (this.type) {
        case 'bar':
          type = 'shadow'
          break
        case 'line':
        case 'area':
          type = 'line'
          break
        default:
          console.error('未支持的图表类型', this.type)
      }
      return type
    },
    setOption(option) {
      this.chart.clear()
      this.chart.setOption(this.resizeGrid(util.clone(option)))
    },
    /**
     * @description 对图像大小间距进行调整
     * @param option
     */
    resizeGrid(option) {
      const containerWidth = this.$refs.toChart.offsetWidth
      const containerHeight = this.chart.getHeight()
      const legendHeight = option.legend.show ? 24 : 0
      const margin = {
        top: 20,
        right: this.doubleY ? 10 : 40,
        bottom: 10,
        left: 0
      }
      const yAxisWidth = 80
      const xAxisHeight = 24

      if (this.xAxisRotateCheck(option, this.type)) {
        option.xAxis.axisLabel = {
          ...(option.xAxis.axisLabel || {}),
          rotate: this.xAxisRotate
        }
        option.grid = {
          ...option.grid,
          top: option.legend.show ? 40 : 20,
          containLabel: true,
          bottom: 0,
          left: 30,
          right: this.doubleY ? 20 : 30
        }
      } else {
        option.grid.width =
          containerWidth -
          yAxisWidth * (this.doubleY ? 2 : 1) -
          margin.left -
          margin.right
        option.grid.top = legendHeight + margin.top
        option.grid.left = yAxisWidth
        option.grid.height =
          containerHeight - option.grid.top - xAxisHeight - margin.bottom
      }
      return option
    },
    onResize() {
      if (!this.chart) return
      // 当图表被隐藏时发生resize事件后会导致图表渲染异常，需要延时矫正
      let rect = this.$refs.toChart.getBoundingClientRect()
      if (!rect.width || !rect.height) {
        if (this.resizeTimer) {
          clearTimeout(this.resizeTimer)
        }
        this.resizeTimer = setTimeout(() => {
          this.onResize(false)
        }, 300)
        return
      }
      this.chart.resize()
      this.setOption(this.option)
      this.$nextTick(() => {
        if (!this.chart) return
        this.chart.resize()
      })
    }
  }
}
</script>

<style lang="sass">
@import "styles/charts"
</style>
