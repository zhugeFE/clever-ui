<template>
  <div ref="cFlow" class="c-flow" v-resize="onResize" :style="style">
    <div class="c-flow-main" ref="toChart"></div>
    <!-- <div :style="{'line-height': height + 'px'}" class="c-flow-empty">暂无数据</div> -->
  </div>
</template>

<script>
import { util } from '../../utils'
import resize from '../../directives/resize'
export default {
  name: 'cFlow',
  directives: {resize},
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
     * @description 图表高度
     */
    backgroundColor: {
      type: String,
      default: '#2D333D'
    },
    /**
     * @description 图表数据源
     */
    data: {
      type: Object,
      validator (store) {
        return store && util.isArray(store.points) && util.isArray(store.lines)
      }
    },
    /**
     * @description 连接线的tooltip
     */
    lineToolTipFormatter: {
      type: Function,
      default: (lineArr) => {
        let html = ''
        lineArr.forEach(item => {
          let points = item.points || []
          html += `<p>${points[0].name} → ${points[1].name}</p>`
        })
        return html
      }
    },
    /**
     * @description 数据点的tooltip
     */
    pointToolTipFormatter: {
      type: Function,
      default: (item) => {
        return `${item.name}`
      }
    },
    /**
     * @description 数组组的title，需设置2个
     */
    title: {
      type: Array,
      default: () => {
        return []
      }
    },
    /**
     * @description 中心数据点的计算规则
     */
    symbolSize: {
      type: Function,
      default: (item) => {
        return 0
      }
    },
    /**
     * @description 中心数据点的边缘的垂直间距
     */
    spacingY: {
      type: Number,
      default: 60
    },
    /**
     * @description 中心数据点间的箭头移动速度
     */
    lineLeriod: {
      type: Function,
      default: (item) => {
        return 1.5
      }
    }
  },
  data () {
    return {
      chart: null,
      xWidth: 1000,
      minWidth: 1000
    }
  },
  computed: {
    style () {
      let style = {
        height: this.height + 'px',
        width: this.width ? `${this.width}px` : '100%'
      }
      return style
    },
    originPoints () {
      let result = []
      let x = Math.floor(this.xWidth / 22)
      let y = Math.floor(this.height / 2)
      result.push({
        x: x * 6,
        y: y
      })
      result.push({
        x: x * 5,
        y: y
      })
      result.push({
        x: x * 18,
        y: y
      })
      result.push({
        x: x * 17,
        y: y
      })
      return result
    },
    pointArray () {
      let result = []
      this.data.points.forEach((item, index) => {
        let type = ''
        let b = 0
        let sizeArr = new Array(item.length)
        let fontSizeArr = [20, 18, 16, 14, 12]
        if ([1, 2].includes(index)) {
          type = 'effectScatter'
          // 椭圆的b的长度，用于控制中间2个椭圆的曲度
          b = 200
          let maxSize = 80
          let minSize = 20
          if (item.length === 1) {
            sizeArr.fill(maxSize)
          } else {
            let maxNum = 0
            item.forEach((item, i) => {
              let num = this.symbolSize(item) || 1
              if (!i) maxNum = num
              num = Math.floor((num / maxNum) * maxSize)
              if (num < minSize) num = minSize
              if (num > maxSize) num = maxSize
              sizeArr[i] = parseInt(num)
            })
          }
        } else {
          type = 'scatter'
          // 椭圆的b的长度，用于控制两边两个椭圆的曲度
          b = 250
          sizeArr.fill(10)
        }
        let style = {
          color: index < 2 ? '#2196F3' : '#FFD740'
        }
        let align = ['left', 'top', 'top', 'right'][index]
        let originPoint = this.originPoints[index]
        let pointParamObj = {
          len: item.length,
          b: b,
          origin: originPoint,
          greaterZeroX: [1, 3].includes(index)
        }
        if (type === 'effectScatter') {
          pointParamObj.diameterArr = sizeArr
          pointParamObj.useDynamicDiameter = true
        }
        let points = this.computePointCoordinate(pointParamObj)
        item.forEach((obj, j) => {
          let point = points[j]
          result.push({
            ...obj,
            type: type,
            style: style,
            coords: [point.x, point.y],
            align: align,
            symbolSize: sizeArr[j],
            fontSize: fontSizeArr[j] || 12
          })
        })
      })
      return result
    },
    pointIdMap () {
      let pointIdMap = {}
      let pointItem = {}
      for (pointItem of this.pointArray) {
        pointIdMap[pointItem.id] = pointItem
      }
      return pointIdMap
    },
    option () {
      let option = {
        backgroundColor: this.backgroundColor,
        grid: {
          top: 100,
          bottom: 10
        },
        xAxis: {
          show: false,
          min: 0,
          max: this.xWidth
        },
        yAxis: {
          show: false,
          min: 0,
          max: this.height,
          inverse: true
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: '#FFFFFF',
          padding: 10,
          textStyle: {
            color: '#354052'
          }
        },
        series: this.getPointSeries().concat(this.getLinesSeries())
      }
      if (this.title && this.title.length) {
        let title = []
        if (this.title[0]) {
          title.push({
            text: this.title[0],
            top: 20,
            left: this.originPoints[1].x + 100,
            textStyle: {
              color: '#fff'
            }
          })
        }
        if (this.title[1]) {
          title.push({
            text: this.title[1],
            top: 20,
            left: this.originPoints[2].x - 170,
            textStyle: {
              color: '#fff'
            }
          })
        }
        option.title = title
      }
      return option
    }
  },
  watch: {
    option () {
      this.setOption(this.option)
    }
  },
  mounted () {
    this.chart = this.echarts.init(this.$refs.toChart)
    this.initXWidth()
    this.setOption(this.option)
  },
  beforeDestroy () {
    if (!this.chart) return
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initXWidth () {
      let width = this.$refs.cFlow.getBoundingClientRect().width
      if (width <= this.minWidth) width = this.minWidth
      this.xWidth = this.width || width
    },
    setOption (option) {
      this.chart.setOption(util.clone(option))
    },
    onResize () {
      if (!this.chart) return
      this.initXWidth()
      this.setOption(this.option)
      this.$nextTick(() => {
        this.chart.resize()
      })
    },
    computeX (y, a, b) {
      // 焦点在y轴,a>b>0
      return Math.floor(Math.sqrt(Math.pow(b, 2) * (Math.pow(a, 2) - Math.pow(y, 2)) / Math.pow(a, 2)))
    },
    getPointY (rArr = [], spacingY = 0, index) {
      let len = rArr.length
      if (!len) return 0
      let greaterZeroNum = Math.floor(len / 2)
      let middle = len % 2 ? greaterZeroNum : 0
      if (!greaterZeroNum) return 0
      if (middle) {
        if (greaterZeroNum === index) return 0
        if (index < greaterZeroNum) {
          let result = 0
          for (let i = index; i <= greaterZeroNum; i++) {
            if (i === index || i === greaterZeroNum) {
              result += rArr[i] / 2
            } else {
              result += rArr[i]
            }
            if (i < greaterZeroNum) {
              result += spacingY
            }
          }
          return result
        } else {
          let result = 0
          for (let i = index; i >= greaterZeroNum; i--) {
            if (i === index || i === greaterZeroNum) {
              result += rArr[i] / 2
            } else {
              result += rArr[i]
            }
            if (i > greaterZeroNum) {
              result += spacingY
            }
          }
          return 0 - result
        }
      } else {
        if (index < greaterZeroNum) {
          let result = spacingY / 2
          for (let i = index; i < greaterZeroNum; i++) {
            if (i === index || index === greaterZeroNum - 1) {
              result += rArr[i] / 2
            } else {
              result += rArr[i]
            }
            if (i < greaterZeroNum - 1) {
              result += spacingY
            }
          }
          return result
        } else {
          let result = spacingY / 2
          for (let i = index; i >= greaterZeroNum; i--) {
            if (i === index || index === greaterZeroNum) {
              result += rArr[i] / 2
            } else {
              result += rArr[i]
            }
            if (i > greaterZeroNum) {
              result += spacingY
            }
          }
          return 0 - result
        }
      }
    },
    computePointCoordinate ({len, b, origin, diameterArr, useDynamicDiameter = false, greaterZeroX = true}) {
      let averageHeight = Math.floor(origin.y / len)
      if (averageHeight > 80) {
        averageHeight = 80
      }
      if (averageHeight < 25) {
        averageHeight = 25
      }
      let greaterZeroNum = Math.floor(len / 2)
      let middle = len % 2 ? greaterZeroNum + 1 : 0
      let result = []
      let y = 0
      let a = origin.y
      for (let i = 1; i <= len; i++) {
        if (i === middle) {
          y = 0
        } else if (useDynamicDiameter) {
          y = this.getPointY(diameterArr, this.spacingY, i - 1) || averageHeight
        } else if (i <= greaterZeroNum) {
          y = ((middle || greaterZeroNum) - i) * averageHeight
          if (!middle) y = y + averageHeight / 2
        } else {
          y = -(i - (middle || greaterZeroNum)) * averageHeight
          if (!middle) y = y + averageHeight / 2
        }
        result.push({
          x: greaterZeroX ? origin.x + this.computeX(y, a, b) : origin.x - this.computeX(y, a, b),
          y: origin.y - y
        })
      }
      return result
    },
    getPointSeries () {
      let series = []
      let pointItem = {}
      for (let i = 0; i < this.pointArray.length; i++) {
        pointItem = this.pointArray[i]
        let obj = {
          name: pointItem.id,
          type: pointItem.type,
          symbolSize: pointItem.symbolSize,
          coordinateSystem: 'cartesian2d',
          zlevel: 2,
          z: 3
        }
        if (pointItem.type === 'effectScatter') {
          // 带有涟漪特效动画的散点（气泡）图
          obj.rippleEffect = {
            brushType: 'stroke',
            scale: 2
          }
          obj.label = {
            show: true,
            position: pointItem.align,
            formatter: `${pointItem.name}`,
            color: '#AAB2B9'
          }
          obj.itemStyle = {
            normal: pointItem.style
          }
          obj.tooltip = {
            formatter: (params) => {
              return this.pointToolTipFormatter(this.pointIdMap[params.seriesName] || {}) || ''
            }
          }
          obj.data = [pointItem.coords]
        } else if (pointItem.type === 'scatter') {
          // 散点（气泡）图
          let name = pointItem.name + ''
          obj.symbolSize = 10
          obj.label = {
            show: true,
            position: pointItem.align,
            formatter: name.length > 10 ? name.slice(0, 10) + '...' : name,
            fontSize: pointItem.fontSize,
            color: '#AAB2B9'
          }
          obj.itemStyle = {
            ...pointItem.style,
            opacity: 0.5
          }
          obj.tooltip = {
            formatter: (params) => {
              return this.pointToolTipFormatter(this.pointIdMap[params.seriesName] || {}) || ''
            }
          }
          obj.data = [pointItem.coords]
        }

        series.push(obj)
      }
      return series
    },
    getLinesSeries () {
      let series = []
      let lineItem = {}
      let idKeyMap = {}
      for (lineItem of this.data.lines) {
        let reverse = false
        let linePoints = lineItem.points || []
        if (linePoints.length < 2 || !linePoints[0] || !linePoints[1]) continue
        let oneObj = this.pointIdMap[linePoints[0].id] || {}
        let twoObj = this.pointIdMap[linePoints[1].id] || {}
        let idKey = [linePoints[0].id, linePoints[1].id].sort().join('|')
        let lineObj = {
          name: idKey,
          type: 'lines',
          coordinateSystem: 'cartesian2d',
          emphasis: {
            lineStyle: {
              width: 5
            }
          },
          data: [{
            coords: [oneObj.coords, twoObj.coords]
          }]
        }
        let style = oneObj.style
        idKeyMap[idKey] = idKeyMap[idKey] || []
        if (oneObj.symbolSize < twoObj.symbolSize) {
          idKeyMap[idKey].push(lineItem)
          style = twoObj.style
          reverse = true
        } else {
          idKeyMap[idKey].unshift(lineItem)
        }
        let styleObj = {
          ...style,
          width: 2,
          curveness: reverse ? -0.2 : 0.2
        }
        series.push({
          ...lineObj,
          silent: true,
          zlevel: 2,
          effect: {
            show: true,
            period: this.lineLeriod(lineItem) || 1.5,
            color: '#fff',
            opacity: 0.7,
            symbol: 'arrow',
            symbolSize: 12,
            trailLength: 0
          },
          lineStyle: {
            ...styleObj,
            width: 0
          }
        })
        series.push({
          ...lineObj,
          zlevel: 1,
          symbol: ['circle', 'none'],
          symbolSize: 5,
          lineStyle: {
            ...styleObj,
            width: 2
          },
          tooltip: {
            show: true,
            formatter: (params) => {
              return this.lineToolTipFormatter(idKeyMap[params.seriesName] || []) || ''
            }
          }
        })
      }
      return series
    }
  }
}
</script>

<style lang="sass">
@import "styles/charts"
</style>
