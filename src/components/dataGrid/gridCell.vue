<template>
  <td :class="clazz" :style="style" @click="onClick">
    <i v-if="store.children && labelField === expandColumn" :class="className" @click.stop="onExpand_"/>
    <slot :data="store" :field="labelField" :row="index" :column="column">{{store[labelField]}}</slot>
  </td>
</template>

<script>
  export default {
    name: 'cGridCell',
    props: {
      store: {
        type: Object,
        required: true
      },
      labelField: {
        type: String,
        required: true
      },
      /**
       * @description 行号
       */
      index: {
        type: Number,
        required: true
      },
      /**
       * @description 宽度
       */
      width: null,
      /**
       * @description 列号
       */
      column: {
        type: Number
      },
      /**
       * @description 自定义选中单元格
       */
      chosenCells: {
        type: Array,
        default () {
          // let item = {
          //   rule: [x1, y1, x2, y2], // x1,y1组成第一个单元格坐标,x2,y2组成最后一个单元格坐标
          //   className: '',
          //   ...// 可以增加其它自定义属性
          // }
          return []
        }
      },
      /**
       * 可展开子表列（添加后，会有➕）
       */
      expandColumn: {
        type: String,
        default: null
      }
    },
    data: () => {
      return {
        /**
         * 是否已展开
         */
        expanded: false
      }
    },
    computed: {
      className () {
        const clazz = ['expand-icon']
        clazz.push(this.expanded ? 'cicon-jianyuan' : 'cicon-tianjia')
        return clazz.join(' ')
      },
      style () {
        let style = {}
        if (this.width) {
          style.width = `${this.width}px`
          style.maxWidth = `${this.width}px`
          style.minWidth = `${this.width}px`
        }
        return style
      },
      chosenRules () {
        let res = []
        let row = this.index
        let column = this.column
        this.chosenCells.forEach(rule => {
          let x1 = rule.rule[0]
          let y1 = rule.rule[1]
          let x2 = rule.rule[2]
          let y2 = rule.rule[3]
          if (row >= x1 && row <= x2 && column >= y1 && column <= y2) {
            res.push(rule)
          }
        })
        return res
      },
      clazz () {
        let clazz = ['c-grid-cell']
        this.chosenRules.forEach(rule => {
          clazz.push(rule.className)
        })
        return clazz
      }
    },
    methods: {
      onClick () {
        this.$emit('click', this.store, this.labelField)
      },
      onExpand_ () {
        this.expanded = !this.expanded
        this.$emit('expand', this.expanded, this.index)
      }
    }
  }
</script>

<style lang="sass">
@import "styles/gridCell"
</style>
