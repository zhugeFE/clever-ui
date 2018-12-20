<template>
  <div class="zg-tree-content">
    <div class="zg-tree-container" ref="container"></div>
    <div class="zg-tree-container-tooltip" :style="tooltipStyle" v-show="tooltipText" ref="tooltip">{{tooltipText}}</div>
  </div>
</template>

<script>
import zrender from 'zrender'
import TreeNode from './treeNode'
import TreeLine from './treeLine'
import {util} from '../../utils'
export default {
  name: 'zgTree',
  props: {
    /**
     * @description 渲染图形的基础数据
     * @default []
     */
    dataList: {
      type: Array,
      default: () => {
        return []
      }
    },
    /**
     * @description 树形图伸展的方向
     */
    direction: {
      type: String,
      default: 'top-bottom',
      validator: (value) => {
        let rules = ['top-bottom', 'bottom-top', 'left-right', 'right-left']
        return rules.includes(value)
      }
    },
    /**
     * @description 节点的背景颜色
     * @tip 函数参数为节点的名称
     * @default '#fae692'
     */
    getRectBackground: {
      type: Function,
      default: (name) => {
        return '#fae692'
      }
    }
  },
  data () {
    return {
      zr: {},
      activeNode: {},
      style: {},
      containerStyle: {},
      firstPadding: 20,
      tooltipStyle: {},
      tooltipText: '',
      maxLevelNum: 1
    }
  },
  methods: {
    /**
     * 初始化样式，包括宽度大小自适应
     * @private
     */
    initStyle () {
      let containerRect = this.containerStyle = this.$refs.container.getBoundingClientRect()
      let percentWidth = 1000 / containerRect.width
      let percentHeight = 800 / containerRect.height
      this.style = {
        width: Math.floor(140 / percentWidth),
        height: Math.floor(48 / percentHeight),
        paddingTop: Math.floor(50 / percentHeight),
        paddingRight: Math.floor(10 / percentWidth),
        paddingBottom: Math.floor(50 / percentHeight),
        paddingLeft: Math.floor(10 / percentWidth)
      }
    },
    getRectShapes (level = 0, length = 1) {
      let result = []
      // 方向为由上到下、由下到上
      if (['top-bottom', 'bottom-top'].includes(this.direction)) {
        let y = 0
        if (this.direction === 'top-bottom') {
          y = this.firstPadding + (this.style.height * 2.2) * level
        } else {
          y = this.containerStyle.height - this.firstPadding - this.style.height - (this.style.height * 2.2) * level
        }
        let marginLeft = this.style.paddingRight + this.style.paddingLeft
        let maxWidth = (this.style.width + marginLeft) * length - marginLeft
        let startX = (this.containerStyle.width - maxWidth) / 2
        for (let i = 0; i < length; i++) {
          result.push({
            ...this.style,
            x: startX + (this.style.width + marginLeft) * i,
            y: y
          })
        }
      } else {
        let x = 0
        let marginTop = this.style.height
        let marginLeft = this.style.height * 1.5
        let maxWidth = (this.style.width + marginLeft) * (this.maxLevelNum + 1) - marginLeft
        let maxHeight = (this.style.height + marginTop) * length - marginTop
        let startX = (this.containerStyle.width - maxWidth) / 2
        let startY = (this.containerStyle.height - maxHeight) / 2
        if (this.direction === 'left-right') {
          x = startX + (this.style.width + marginLeft) * level
        } else {
          x = startX + (this.style.width + marginLeft) * (this.maxLevelNum - level)
        }

        for (let i = 0; i < length; i++) {
          result.push({
            ...this.style,
            x: x,
            y: startY + (this.style.height + marginTop) * i
          })
        }
      }

      return result
    },
    getLineShape (start, end) {
      let width = this.style.width
      let height = this.style.height
      let num = 0.5 // 弧度比例值
      let lineShape = {
        x1: 0,
        y1: 0,
        cpx1: 0,
        cpy1: 0,
        cpx2: 0,
        cpy2: 0,
        x2: 0,
        y2: 0
      }
      // 方向为由上到下、由下到上
      if (['top-bottom', 'bottom-top'].includes(this.direction)) {
        // 方向为由上到下
        if (this.direction === 'top-bottom') {
          lineShape.y1 = start.y + height
          lineShape.cpy1 = lineShape.y1 + (height * num)
          lineShape.y2 = end.y
          lineShape.cpy2 = lineShape.y2 - (height * num)
        } else {
          lineShape.y1 = start.y
          lineShape.cpy1 = lineShape.y1 - (height * num)
          lineShape.y2 = end.y + height
          lineShape.cpy2 = lineShape.y2 + (height * num)
        }
        lineShape.x1 = start.x + (width / 2)
        lineShape.cpx1 = lineShape.x1 + 10
        lineShape.x2 = end.x + (width / 2)
        lineShape.cpx2 = lineShape.x2 - 10
      } else {
        if (this.direction === 'left-right') {
          lineShape.x1 = start.x + width
          lineShape.cpx1 = lineShape.x1 + (height * num)
          lineShape.x2 = end.x
          lineShape.cpx2 = lineShape.x2 - (height * num)
        } else {
          lineShape.x1 = start.x
          lineShape.cpx1 = lineShape.x1 - (height * num)
          lineShape.x2 = end.x + width
          lineShape.cpx2 = lineShape.x2 + (height * num)
        }
        lineShape.y1 = start.y + (height / 2)
        lineShape.cpy1 = lineShape.y1 - 10
        lineShape.y2 = end.y + (height / 2)
        lineShape.cpy2 = lineShape.y2 + 10
      }

      return lineShape
    },
    onTreeNodeClick (obj) {
      if (!obj) return
      if (obj.data.level) {
        this.activeNode[obj.data.level] = obj.index
      }
      if (obj.event) {
        for (let level in this.activeNode) {
          if (obj.data && level > obj.data.level) {
            this.activeNode[level] = undefined
          }
        }
        if (obj.data.children.length) {
          this.maxLevelNum = obj.data.level + 1
        }
        this.$emit('nodeClick', obj.data)
        this.init()
        return
      }

      if (obj.data && util.isArray(obj.data.children)) {
        let level = (obj.data.level || 0) + 1
        let rectShapes = this.getRectShapes(level, obj.data.children.length)
        obj.data.children.forEach((item, index) => {
          let node = new TreeNode({
            ...rectShapes[index],
            name: item.name,
            index: index,
            silence: item.disabled,
            defaultActive: this.activeNode[level] === index,
            data: {
              children: item.children,
              name: item.name,
              level: level
            },
            onClick: this.onTreeNodeClick,
            onMouseover: this.onNodeMouseOver,
            onMouseout: this.onNodeMouseOut,
            getRectBackground: this.getRectBackground
          })
          node.addTo(this.zr)
          let line = new TreeLine({
            shape: this.getLineShape(obj, rectShapes[index]),
            text: item.disabled ? '' : item.label,
            direction: this.direction,
            active: this.activeNode[level] === index
          })
          line.addTo(this.zr)
        })
      }
    },
    renderTreeNode () {
      let rectShapes = this.getRectShapes(0, this.dataList.length)
      this.dataList.forEach((item, index) => {
        let node = new TreeNode({
          ...rectShapes[index],
          name: item.name,
          index: index,
          silence: item.disabled,
          defaultActive: true,
          data: {
            children: item.children,
            level: 0
          },
          onClick: this.onTreeNodeClick,
          onMouseover: this.onNodeMouseOver,
          onMouseout: this.onNodeMouseOut,
          getRectBackground: this.getRectBackground
        })
        node.addTo(this.zr)
      })
    },
    onNodeMouseOver (position, text, showTip) {
      if (!position || !position.x || !text || !showTip) return
      this.tooltipText = text
      this.tooltipStyle = {
        overflow: 'hidden'
      }
      this.$nextTick(() => {
        let tooltip = this.$refs.tooltip.getBoundingClientRect()
        this.tooltipStyle = {
          left: (position.x + (position.width - tooltip.width) / 2) + 'px',
          top: (position.y - tooltip.height - 5) + 'px'
        }
      })
    },
    onNodeMouseOut () {
      this.tooltipText = ''
    },
    init () {
      this.zr.clear()
      this.initStyle()
      this.renderTreeNode()
    }
  },
  watch: {
    dataList () {
      if (this.dataList.length && this.dataList[0].children.length) {
        this.maxLevelNum = 1
      } else {
        this.maxLevelNum = 0
      }
      if (this.zr) {
        this.init()
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.zr = zrender.init(this.$refs.container)
      this.init()
    })
  }
}
</script>

<style lang="sass">
@import "styles/tree"
</style>
