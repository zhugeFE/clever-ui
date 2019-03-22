<template>
  <div class="c-pie-chart" :style="style" v-resize="onResize">
    <div class="c-charts-main" ref="toChart"></div>
    <div v-show="!store.length" :style="{'line-height': height + 'px'}" class="c-charts-empty">暂无数据</div>
  </div>
</template>

<script>
import {util} from '../../utils'
export default {
  name: 'cPieChart',
  props: {
    echarts: {
      required: true
    },
    store: {
      type: Array,
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
     * @description 显示数据项（从store中过滤），对应series中的names字段。如果没传的话，默认会展示前10条记录
     * @格式[['group', 'item1'], ['group', 'item2']]或['item1', 'item2']
     */
    showList: {
      type: Array
    },
    /**
     * @description 默认展示showList指定的条目或者前10条记录，并生成"其它"记录。showAll置为true后，将强制在饼图上展示所有记录
     */
    showAll: {
      type: Boolean,
      default: false
    },
    /**
     * @description option包装器，用来完全自定义option选项
     */
    optionWrapper: {
      type: Function,
      default (option) {
        return option
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  computed: {
    style () {
      let style = {
        height: this.height + 'px'
      }
      if (this.width) style.width = `${this.width}px`
      return style
    },
    legend () {
      let legends = this.store.map(item => {
        return item.names.join('-')
      })
      legends.push('其它')
      return legends
    },
    showMap () {
      let map = {}
      this.showList.forEach(names => {
        map[names.join('-')] = true
      })
      return map
    },
    seriesData () {
      let list = []
      let other = {
        name: '其它',
        value: 0,
        itemStyle: {
          color: '#E1E3E6'
        }
      }
      this.store.forEach(item => {
        let series = {
          name: item.names.join('-'),
          value: item.values[0]
        }
        if (this.showAll) {
          list.push(series)
        } else {
          if ((this.showList &&
            this.showMap[series.name]) ||
            (!this.showList && list.length < 10)) { // 数据被showList命中，或者没定义showList，但位于前十的记录
            list.push(series)
          } else {
            other.value += item.values[0]
          }
        }
      })
      if (!this.showAll && other.value > 0) list.push(other)
      return list
    },
    option () {
      let context = this
      return {
        color: util.colors,
        backgroundColor: 'white',
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 12
          },
          formatter (param) {
            const maxLength = context.getMaxLabelLength()
            let name = param.name.match(new RegExp(`\\S{1,${maxLength}}`, 'g')).join('<br/>')
            return `${param.marker}${name}: ${param.value}(${param.percent}%)`
          }
        },
        legend: {
          data: this.legend,
          type: 'scroll',
          tooltip: {
            show: true,
            formatter (param) {
              const maxLength = context.getMaxLabelLength()
              return param.name.match(new RegExp(`\\S{1,${maxLength}}`, 'g')).join('<br/>')
            }
          },
          formatter (name) {
            const maxLength = context.getMaxLabelLength()
            return util.strMiddleSplit(name, {
              maxLength,
              beginLength: maxLength / 2 - 2,
              endLength: maxLength / 2 - 2,
              replaceStr: '...'
            })
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '70%'],
            data: this.seriesData,
            label: {
              formatter (param) {
                const maxLength = context.getMaxLabelLength()
                let name = param.name.match(new RegExp(`\\S{1,${maxLength}}`, 'g')).join('\n')
                return util.strMiddleSplit(name, {
                  maxLength,
                  beginLength: maxLength / 2 - 2,
                  endLength: maxLength / 2 - 2,
                  replaceStr: '...'
                })
              }
            }
          }
        ]
      }
    }
  },
  watch: {
    option () {
      this.setOption(this.option)
    }
  },
  mounted () {
    this.chart = this.echarts.init(this.$refs.toChart)
    this.setOption(this.option)
  },
  updated () {
    this.onResize()
  },
  methods: {
    getMaxLabelLength () {
      let rect = this.$refs.toChart.getBoundingClientRect()
      const length = parseInt(Math.min(rect.width, rect.height) / 12)
      return length
    },
    setOption (option) {
      this.chart.clear()
      this.chart.setOption(this.optionWrapper(util.clone(option)))
    },
    onResize () {
      if (!this.chart) return
      // 当图表被隐藏时发生resize事件后会导致图表渲染异常，需要延时矫正
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
@import "styles/pie"
</style>
