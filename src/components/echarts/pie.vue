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
      return this.store.map(item => {
        return item.names.join('-')
      })
    },
    seriesData () {
      return this.store.map(item => {
        return {
          name: item.names.join('-'),
          value: item.values[0]
        }
      })
    },
    option () {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          data: this.legend
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            data: this.seriesData
          }
        ]
      }
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
    setOption (option) {
      this.chart.setOption(this.resizeGrid(util.clone(option)))
    },
    resizeGrid (option) {
      return option
    },
    onResize () {
      if (!this.chart) return
      // 当图表被隐藏时发生resize事件后会导致图表渲染异常，需要延时矫正
      this.chart.resize()
      this.setOption(this.option)
      this.$nextTick(() => {
        this.chart.resize()
      })
    }
  }
}
</script>

<style lang="sass">
@import "styles/pie"
</style>
