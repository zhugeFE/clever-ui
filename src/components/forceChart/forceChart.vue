<template>
  <div
    ref="cForceChart"
    class="c-fore-chart"
    v-resize="onResize"
    :style="style"
  >
    <div class="c-fore-chart-main" ref="toChart"></div>
    <c-loading v-if="loading"></c-loading>
  </div>
</template>

<script>
import { util } from '../../utils'
import cLoading from '../loading'
export default {
  name: 'cForceChart',
  components: {
    cLoading
  },
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
      default: 640
    },
    /**
     * @description 图表背景颜色
     */
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    /**
     * @description 图表数据源同echarts的graph图的nodes和links
     */
    data: {
      type: Object,
      validator(store) {
        return store && util.isArray(store.nodes) && util.isArray(store.links)
      }
    },
    /**
     * @description 连接线的tooltip
     * @default source + ' => ' + target
     */
    linkToolTipFormatter: {
      type: Function,
      default: obj => {
        let data = obj.data || {}
        return data.source + ' => ' + data.target
      }
    },
    /**
     * @description 数据点的tooltip
     * @default name
     */
    nodeToolTipFormatter: {
      type: Function,
      default: item => {
        return `${item.name}`
      }
    },
    /**
     * @description 获取格式化图片的参数
     * @default 66
     */
    getImgFormatterParams: {
      type: Function,
      default: item => {
        return {
          x: 66, // 图片 中心点坐标x
          y: 66, // 图片 中心点坐标y
          radius: 66
        }
      }
    },
    /**
     * @description 数据点的tooltip
     * @default name
     */
    defaultImg: {
      type: String,
      default: item => {
        return 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1Mi42ICg2NzQ5MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+OTREREI4MjMtMDcwMC00OEFGLUI5QTQtQUU3NkIwMkI3QzA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJVSS0yMDE4MTIxMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IndlY2hhdF9zaGFyZS1tbnBybSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg4OS4wMDAwMDAsIC01MjQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJwb3J0cmFpdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzczLjAwMDAwMCwgNDQwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImF2YXRhcl9ncmV5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MTYuMDAwMDAwLCA4NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRTZFOEVCIiBjeD0iMTAiIGN5PSIxMCIgcj0iMTAiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCw1IEM4LjQ2Nzc0MTk0LDUgNi45MzU0ODM4Nyw2LjE5NDAyOTg1IDYuOTM1NDgzODcsNy4yMzg4MDU5NyBMNi45MzU0ODM4Nyw4LjgwNTk3MDE1IEM2LjkzNTQ4Mzg3LDkuNDc3NjExOTQgNy4yNTgwNjQ1MiwxMC44MjA4OTU1IDguMjI1ODA2NDUsMTEuNTY3MTY0MiBMNS42NDUxNjEyOSwxMi44MzU4MjA5IEM1LjY0NTE2MTI5LDEyLjgzNTgyMDkgNSwxMy4xMzQzMjg0IDUsMTMuNDMyODM1OCBMNSwxNC40MDI5ODUxIEM1LDE0Ljc3NjExOTQgNS4zMjI1ODA2NSwxNSA1LjY0NTE2MTI5LDE1IEwxNC4zNTQ4Mzg3LDE1IEMxNC43NTgwNjQ1LDE1IDE1LDE0LjcwMTQ5MjUgMTUsMTQuNDAyOTg1MSBMMTUsMTMuNDMyODM1OCBDMTUsMTMuMDU5NzAxNSAxNC4zNTQ4Mzg3LDEyLjgzNTgyMDkgMTQuMzU0ODM4NywxMi44MzU4MjA5IEwxMS43NzQxOTM1LDExLjU2NzE2NDIgQzEyLjc0MTkzNTUsMTAuODk1NTIyNCAxMi45ODM4NzEsOS41NTIyMzg4MSAxMi45ODM4NzEsOC44MDU5NzAxNSBMMTIuOTgzODcxLDcuMjM4ODA1OTcgQzEyLjk4Mzg3MSw2LjE5NDAyOTg1IDExLjQ1MTYxMjksNSAxMCw1IFoiIGlkPSJQYWdlLTEiIGZpbGw9IiNBMEEzQUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
      }
    }
  },
  data() {
    return {
      chart: null,
      xWidth: 1000,
      minWidth: 1000,
      nodes: [],
      loading: true
    }
  },
  computed: {
    style() {
      let style = {
        height: this.height + 'px',
        width: this.width ? `${this.width}px` : '100%'
      }
      return style
    },
    fixedArr() {
      let fixedArr = [
        {
          x: 440,
          y: 280,
          symbolSize: 181
        },
        {
          x: 131,
          y: 330,
          symbolSize: 121
        },
        {
          x: 500,
          y: 90,
          symbolSize: 81
        },
        {
          x: 246,
          y: 130,
          symbolSize: 71
        },
        {
          x: 760,
          y: 133,
          symbolSize: 66
        },
        {
          x: 700,
          y: 310,
          symbolSize: 61
        },
        {
          x: 340,
          y: 480,
          symbolSize: 56
        },
        {
          x: 580,
          y: 540,
          symbolSize: 51
        },
        {
          x: 860,
          y: 490,
          symbolSize: 56
        },
        {
          x: 100,
          y: 530,
          symbolSize: 41
        }
      ]
      fixedArr.forEach(item => {
        item.x = Math.floor((this.xWidth * item.x) / 1000)
      })
      return fixedArr
    },
    links() {
      let result = util.clone(this.data.links)
      result.forEach(item => {
        item.label = {
          backgroundColor: 'rgba(53,64,82,0.8)',
          formatter: this.linkToolTipFormatter
        }
      })
      return result
    },
    option() {
      return {
        backgroundColor: this.backgroundColor,
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        tooltip: {
          formatter: this.linkToolTipFormatter
        },
        xAxis: {
          show: false,
          min: 0,
          max: 1200
        },
        yAxis: {
          show: false,
          min: 0,
          max: 1200,
          inverse: true
        },
        series: [
          {
            name: 'graph-force',
            type: 'graph',
            roam: 'move',
            focusNodeAdjacency: true,
            layout: 'force',
            force: {
              repulsion: [500, 1000], // 节点之间的斥力因子
              gravity: 0.2, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
              edgeLength: [250, 350], // 边的两个节点之间的距离，这个距离也会受 repulsion影响
              layoutAnimation: false
            },
            data: this.nodes,
            links: this.links,
            categories: [],
            label: {
              show: false,
              formatter: ''
            },
            lineStyle: {
              width: 1,
              color: '#E5E5E5',
              curveness: 0.3
            },
            emphasis: {
              lineStyle: {
                width: 2,
                color: '#B8BCC4'
              }
            }
          }
        ]
      }
    }
  },
  watch: {
    option() {
      this.setOption(this.option)
    },
    'data.nodes'() {
      this.updateNodes()
    }
  },
  mounted() {
    this.chart = this.echarts.init(this.$refs.toChart)
    this.initXWidth()
    this.setOption(this.option)
    this.chart.on('mousemove', params => {
      if (params.seriesIndex === 0) {
        this.chart.getZr().setCursorStyle('move')
      }
    })
    this.loading = true
  },
  beforeDestroy() {
    if (!this.chart) return
    this.chart.dispose()
    this.chart = null
  },
  created() {
    this.updateNodes()
  },
  methods: {
    initXWidth() {
      let width = this.$refs.cForceChart.getBoundingClientRect().width
      if (width <= this.minWidth) width = this.minWidth
      this.xWidth = this.width || width
    },
    setOption(option) {
      if (option.series[0].data.length) {
        this.chart.setOption(util.clone(option))
        this.loading = false
      }
    },
    onResize() {
      if (!this.chart) return
      this.initXWidth()
      this.setOption(this.option)
      this.$nextTick(() => {
        this.chart.resize()
      })
    },
    // 定义抠图方法
    getImgData(imgSrc) {
      return new Promise(resolve => {
        if (!imgSrc) {
          resolve(this.defaultImg)
          return
        }
        const canvas = document.createElement('canvas')
        const contex = canvas.getContext('2d')
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = function() {
          // 微信头像默认的尺寸为132 * 132 ，头像默认为正方形
          let px = (this.width || 132) / 2
          let diameter = 2 * px
          canvas.width = diameter
          canvas.height = diameter
          contex.clearRect(0, 0, diameter, diameter)
          contex.save()
          contex.beginPath()
          contex.arc(px, px, px, 0, 2 * Math.PI) // 画出圆
          contex.clip() // 裁剪上面的圆形
          contex.drawImage(
            img,
            0,
            0,
            diameter,
            diameter,
            0,
            0,
            diameter,
            diameter
          ) // 在刚刚裁剪的园上画图
          contex.restore() // 还原状态
          resolve('image://' + canvas.toDataURL('image/png', 1))
        }
        img.src = imgSrc
        setTimeout(() => {
          resolve(this.defaultImg)
        }, 500)
      })
    },
    async updateNodes() {
      let result = util.clone(this.data.nodes)
      result.sort((a, b) => {
        if (a.value > b.value) return 1
        if (a.value < b.value) return -1
        return 0
      })
      let index = 0
      for (index = 0; index < result.length; index++) {
        let item = result[index]
        item.tooltip = {
          backgroundColor: 'rgba(53,64,82,0.8)',
          formatter: params => {
            if (params.data && params.data.target) {
              return this.linkToolTipFormatter(params)
            }
            return this.nodeToolTipFormatter(params)
          }
        }

        item.x = null
        item.y = null
        if (index >= result.length - 10) {
          if (/^image/.test(item.symbol)) {
            item.symbol = await this.getImgData(
              item.symbol.replace(/image:\/\//gi, '')
            )
          }
          result[index] = {
            ...item,
            fixed: true,
            ...this.fixedArr[result.length - index - 1],
            itemStyle: {
              color: '#A0A3AA',
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 4,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          }
        } else {
          result[index] = {
            ...item,
            symbol: 'circle',
            symbolSize: 20,
            itemStyle: {
              color: '#00A0EA'
            }
          }
        }
      }
      this.nodes = result
    }
  }
}
</script>

<style lang="less">
@import "styles/charts.less";
</style>
