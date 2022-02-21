<template>
  <div ref="container" class="container">
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
  data () {
    return {
      colors: util.colors
    }
  },
  computed: {
    tooltipFormat() {
      return params => {
        if (this.tooltipFormatter) return this.tooltipFormatter(params)
        let xLabel = ''
        const rows = []
        params.forEach(series => {
          if (!xLabel) {
            xLabel = series.axisValueLabel
            rows.push(xLabel)
          }
          rows.push(`${series.marker} ${util.getTooltipLabel(series.seriesName)}`)
          if (series.seriesType === 'boxplot') {
            const labels = ['最小值', '上四分位', '中位数', '下四分位', '最大值']
            series.value.forEach((v, i) => {
              if (i === 0) return
              rows.push(`${util.getTooltipLabel(labels[i - 1])}: <span>${util.toThousands(
                v
              )}${this.valueUnit}</span>`)
            })
          }
        })
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
          borderColor: 'red'
        },
        tooltip: {
          backgroundColor: '#6b6b6b',
          trigger: 'axis',
          axisPointer: {
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
            show: false
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
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLabel: {
            show: true,
            formatter: this.yAxisFormatter
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
    const chart = window.echarts.init(this.$refs.container)
    chart.setOption(this.option)
  },
  methods: {
    getXAxis() {
      return ['04.22', '04.23']
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
      return this.store.map(series => {
        return {
          name: series.names.join('-'),
          type: 'boxplot',
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
