<template>
  <div ref="container" :style="style" class="container">
    盒须图
  </div>
</template>
<script>
let dateHandle = label => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(label)) {
    // 处理日期
    // label.replace(/\d{4}-/, '')
    return `${label}(${util.getWeekNum(label)})`
  } else if (/^\d{4}-\d{2}-\d{2}\|\d{4}-\d{2}-\d{2}$/.test(label)) {
    // 周、月日期
    let dates = label.match(/\d{4}-\d{2}-\d{2}/g)
    return (
      `${dates[0].replace(/\d{4}-/, '')}` +
      '～' +
      `${dates[1].replace(/\d{4}-/, '')}`
    )
  } else {
    label = util.strMiddleSplit(label)
    if (/:/.test(label)) {
      return (
        label.replace(/\d{4}-\d{2}-\d{2}\s/, '') +
        `(${util.getWeekNum(label[0])})`
      )
    } else if (/,/.test(label)) {
      return label.replace(/,/g, '-') + `(${util.getWeekNum(label[0])})`
    } else {
      return label + `(${util.getWeekNum(label[0])})`
    }
  }
}
import { util } from '../../utils'
export default {
  name: 'cBoxplot',
  props: {
    /**
     * [
     *  {
     *    names: [],
     *    values: [[min,  Q1,  median (or Q2),  Q3,  max]],
     *    perValue: []
     *  }
     * ]
     */
    store: {
      default: () => {
        return []
      }
    },
    optionWrapper: {
      type: Function
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
      default: 300
    },
    /**
     * @description value值的单位，可以是%, '个'等
     */
    valueUnit: {
      type: String,
      default: ''
    },
    /**
     * @description tooltip自定义显示
     */
    tooltipFormatter: {
      type: Function
    },
    yAxisFormatter: {
      type: Function,
      default(value) {
        if (parseFloat(value) >= 60) {
          return util.toTime(value)
        } else {
          return value + '秒'
        }
      }
    },
    xAxisFormatter: {
      type: Function,
      default(label) {
        return dateHandle(label)
      }
    },
    /**
     * @description 当X轴坐标label需要旋转时的旋转角度，-90 到 90
     */
    xAxisRotate: {
      type: Number,
      default: 30
    },
    legendFormatter: {
      type: Function
    },
    /**
     * 超出 最大数，x轴文案倾斜
     */
    moduleMaxLength: {
      type: Number,
      default: 5
    },
    /**
     * 底部边距
     */
    gridBottom: {
      type: Number,
      default: 60
    }
  },
  watch: {
    store: {
      handler(newValue) {
        this.store = newValue
        this.chartSetOption()
      },
      deep: true
    }
  },
  data() {
    return {
      colors: util.colors,
      xAxisTextRotate: 0
    }
  },
  computed: {
    style() {
      let style = {
        height: this.height + 'px'
      }
      if (this.width) style.width = `${this.width}px`
      return style
    },
    tooltipFormat() {
      return params => {
        if (this.tooltipFormatter) return this.tooltipFormatter(params)
        let xLabel = ''
        const rows = []
        if (!xLabel) {
          xLabel = dateHandle(params.name)
          rows.push(`<div>${xLabel}</div>`)
        }
        // `${params.seriesName}(${util.getWeekNum(params.seriesName)})`
        rows.push(
          `<div class="tooltip-title">${params.marker} <div class="tooltip-name">${
            params.seriesName
          }</div></div>`
        )
        let seriesData = []
        if (params.seriesType === 'boxplot') {
          const labels = ['最大值', '上四分位', '中位数', '下四分位', '最小值']
          let value = [...params.value]
          let temp = value[1]
          value[1] = value[5]
          value[5] = temp
          value.forEach((v, i) => {
            if (i === 0) return
            if (i <= labels.length) {
              seriesData.push(`${util.getTooltipLabel(labels[i - 1])}: <span>
              ${util.timeFormat(parseInt(v + '000'))}${this.valueUnit}</span>`)
            }
          })
        }
        return rows.join('') + seriesData.join('<br/>')
      }
    },
    option() {
      let option = {
        color: this.colors,
        backgroundColor: 'white',
        grid: {
          containLabel: false,
          show: false,
          left: 60,
          right: 40,
          top: 50,
          bottom:
            this.store.x_axis.length > this.moduleMaxLength
              ? this.gridBottom
              : 30
        },
        legend: {
          width: '60%',
          top: 0,
          type: 'scroll',
          icon: 'circle',
          formatter:
            this.legendFormatter ||
            function(label) {
              return util.strMiddleSplit(label)
            },
          tooltip: {
            show: true,
            formatter(param) {
              const maxLength = 50
              return param.name
                .match(new RegExp(`\\S{1,${maxLength}}`, 'g'))
                .join('<br/>')
            }
          }
        },
        tooltip: {
          backgroundColor: '#6b6b6b',
          trigger: 'item',
          padding: [8, 20, 8, 10],
          axisPointer: {
            type: 'shadow',
            lineStyle: {
              color: '#999',
              width: 2,
              type: 'solid'
            }
          },
          textStyle: {
            fontSize: 12,
            color: '#fff'
          },
          formatter: this.tooltipFormat
        },
        xAxis: {
          data: this.getXAxis(),
          boundaryGap: true,
          axisLabel: {
            textStyle: {
              color: '#404245'
            },
            formatter: this.xAxisFormatter,
            rotate: this.xAxisTextRotate,
            interval: 0
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#ccc', '#fff'],
              opacity: 0.1
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#d4d4d4'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#E8E8E8',
              width: 1,
              type: 'dashed'
            }
          },
          axisLabel: {
            show: true,
            formatter: this.yAxisFormatter,
            textStyle: {
              color: '#75787D'
            }
          }
        },
        series: this.getSeries()
      }
      if (this.optionWrapper) {
        option = this.optionWrapper(option)
      }
      return option
    }
  },
  mounted() {
    this.chartSetOption()
  },
  methods: {
    chartSetOption() {
      this.xAxisTextRotate =
        this.store.x_axis.length > this.moduleMaxLength ? this.xAxisRotate : 0
      const chart = window.echarts.init(this.$refs.container)
      chart.setOption(this.option, true)
      window.__charts = [chart]
    },
    getXAxis() {
      return this.store.x_axis
    },
    /**
     * [
     *  {
     *    names: [],
     *    values: [[min,  Q1,  median (or Q2),  Q3,  max]]
     *  }
     * ]
     */
    getSeries() {
      return this.store.series.map(series => {
        return {
          name: series.names.join('-'),
          type: 'boxplot',
          itemStyle: {
            borderWidth: 2
          },
          data: series.values
        }
      })
    }
  }
}
</script>
<style lang="scss">
.container {
  height: 240px;
}
.tooltip-title {
  display: flex;
  align-items: center;
}
.tooltip-name {
  opacity: 0.8;
  display: inline-block;
  max-width: 300px;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
}
</style>
