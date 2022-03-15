<template>
  <div ref="container" :style="style" class="container">
    盒须图
  </div>
</template>
<script>

import {util} from '../../utils'
export default {
  name: 'cBoxplot',
  props: {
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
  data () {
    return {
      colors: util.colors
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
          xLabel = params.name
          rows.push(xLabel)
        }
        rows.push(`${params.marker} ${util.getTooltipLabel(params.seriesName)}`)
        if (params.seriesType === 'boxplot') {
          const labels = ['最小值', '上四分位', '中位数', '下四分位', '最大值']
          params.value.forEach((v, i) => {
            if (i === 0) return
            if (i <= labels.length) {
              rows.push(`${util.getTooltipLabel(labels[i - 1])}: <span>${util.toThousands(
                v
              )}${this.valueUnit}</span>`)
            }
          })
        }
        // if (this.tooltipFormatter) return this.tooltipFormatter(params)
        // let xLabel = ''
        // const rows = []
        // params.forEach(series => {
        //   if (!xLabel) {
        //     xLabel = series.axisValueLabel
        //     rows.push(xLabel)
        //   }
        //   rows.push(`${series.marker} ${util.getTooltipLabel(series.seriesName)}`)
        //   if (series.seriesType === 'boxplot') {
        //     const labels = ['最小值', '上四分位', '中位数', '下四分位', '最大值']
        //     series.value.forEach((v, i) => {
        //       if (i === 0) return
        //       rows.push(`${util.getTooltipLabel(labels[i - 1])}: <span>${util.toThousands(
        //         v
        //       )}${this.valueUnit}</span>`)
        //     })
        //   }
        // })
        return rows.join('<br/>')
      }
    },
    option() {
      let option = {
        color: this.colors,
        backgroundColor: 'white',
        grid: {
          containLabel: false,
          show: false,
          left: 50,
          right: 50,
          top: 50,
          bottom: 30
        },
        legend: {
          top: 0,
          icon: 'circle'
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
            formatter: this.xAxisFormatter
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
  mounted () {
    this.chartSetOption()
  },
  methods: {
    chartSetOption() {
      const chart = window.echarts.init(this.$refs.container)
      chart.setOption(this.option, true)
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
</style>
