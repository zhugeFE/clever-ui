<script type="text/jsx">
  import {util, dom} from '../../utils/index'
  import {emitter} from '../../mixins/main'

  import CGridHeader from './gridHeader.vue'
  import CGridCell from './gridCell.vue'
  import CGrid from './grid.vue'
  /**
   * clickCell，以列上注册的事件优先
   */
  export default {
    components: {
      CGrid,
      CGridCell,
      CGridHeader},
    name: 'cDataGrid',
    mixins: [emitter],
    props: {
      /**
       * @description 数据源
       */
      store: {
        type: Array,
        required: true
      },
      /**
       * @description 表格宽度
       */
      width: {
        type: Number
      },
      /**
       * @description 显示索引列
       */
      showIndex: {
        type: Boolean,
        default: false
      },
      /**
       * @description 索引列名称
       */
      indexTitle: {
        type: String,
        default: 'index'
      },
      /**
       * @description 是否可分页
       */
      pagination: {
        type: Boolean,
        default: false
      },
      /**
       * @description 每页数据量
       */
      pageSize: {
        type: Number,
        default: 10
      },
      /**
       * @description 当前页码，从1开始
       */
      pageNum: {
        type: Number,
        default: 1
      },
      /**
       * @description 自定义排序
       * @tip 参数：[itemA, itemB, columnField, sortStatus(1：正序；-1：倒序)]
       */
      customSort: {
        type: Function
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
      }
    },
    data () {
      return {
        gridStore: [],
        structure: {
          left: [],
          right: [],
          center: []
        },
        childCheckResult: {
          left: false,
          right: false,
          center: false
        },
        sortColumn: null
      }
    },
    computed: {
      gridStyle () {
        let style = {}
        if (this.width) {
          style.width = `${this.width}px`
        } else {
          style.width = '100%'
        }
        return style
      },
      headerRowspan () {
        let positions = ['left', 'right', 'center']
        this.childCheckResult = {
          left: false,
          right: false,
          center: false
        }
        positions.forEach(position => {
          this.structure[position].forEach(column => {
            if (column.children) {
              this.childCheckResult[position] = true
            }
          })
        })

        return (this.childCheckResult.left || this.childCheckResult.right || this.childCheckResult.center) ? 2 : 1
      }
    },
    /**
     * 计算行高
     */
    updated () {
      if (this._isDestroyed) return
      let styleSheet = []
      // 调整body中单元格高度
      this.gridStore.forEach((item, i) => {
        if (this.pagination) {
          const startIndex = (this.pageNum - 1) * this.pageSize
          const endIndex = this.pageNum * this.pageSize

          if (i < startIndex || i >= endIndex) return
        }
        const className = `.c-row-${this._uid}-${i}`
        const rows = document.querySelectorAll(className)
        let heights = []
        rows.forEach(row => {
          heights.push(row.offsetHeight)
        })
        styleSheet.push([className, [
          'height', `${Math.max.apply(Math, heights)}px`
        ]])
      })

      // 调整thead高度
      const childExist = this.childCheckResult
      if (this.headerRowspan > 1) {
        // 取thead的最大高度，然后赋值给没有合并单元格的grid的thead中的tr
        let maxHeight = []
        this.$refs.main.querySelectorAll('thead').forEach(head => {
          maxHeight.push(head.offsetHeight)
        })
        maxHeight = Math.max.apply(Math, maxHeight)

        const position = ['right', 'center', 'left']
        position.forEach(p => {
          if (this.$refs[p] && !childExist[p]) {
            this.$refs[p].querySelectorAll('thead tr').forEach(tr => {
              tr.style.height = `${maxHeight}px`
            })
          }
        })
      }
      dom.addStyleSheet(`cDataGrid_${this._uid}`, styleSheet)
    },
    methods: {
      initDataList () {
        this.gridStore = util.clone(this.store)
      },
      /**
       * @param status 1：正序；-1：倒序
       * @param column
       */
      onSort (status, column) {
        this.sortColumn = column
        const field = column.field
        this.gridStore.sort((a, b) => {
          if (this.customSort) {
            return this.customSort(a, b, field, status)
          } else {
            if (a[field] > b[field]) {
              return 1 * status
            } else if (a[field] < b[field]) {
              return -1 * status
            }
            return 0
          }
        })
      },
      onScroll (event) {
        const container = this.$refs.center
        const right = this.$refs.right
        const left = this.$refs.left
        if (left) left.style['box-shadow'] = container.scrollLeft === 0 ? 'none' : '6px 0 6px -4px rgba(0,0,0,.2)'
        if (right) right.style['box-shadow'] = container.scrollLeft === (container.scrollWidth - container.offsetWidth) ? 'none' : '-6px 0 6px -4px rgba(0,0,0,.2)'
      }
    },
    render (h) {
      const listeners = this.$listeners
      return (
        <div class="c-data-grid" style={this.gridStyle} ref="main">
          <div class="c-hidden-structure">
            {this.$slots.default}
            <span class="c-grid-hover-color"></span>
          </div>
          <div class="c-grid-container">
            {(() => {
              if (this.structure.left.length) {
                return (
                  <div class="c-grid-left" ref="left">
                    <c-grid gridId={this._uid}
                            structure={this.structure.left}
                            store={this.gridStore}
                            showIndex={this.showIndex}
                            indexTitle={this.indexTitle}
                            pagination={this.pagination}
                            pageNum={this.pageNum}
                            pageSize={this.pageSize}
                            headerRowspan={this.headerRowspan}
                            sortColumn={this.sortColumn}
                            onSort={this.onSort}
                            chosenCells={this.chosenCells}
                            onClickCell={listeners.clickCell || (() => {})}
                    ></c-grid>
                  </div>
                )
              }
            })()}
            {(() => {
              if (this.structure.center.length) {
                return (
                  <div class="c-grid-center" onScroll={this.onScroll} ref="center">
                    <c-grid gridId={this._uid}
                            sortColumn={this.sortColumn}
                            structure={this.structure.center}
                            store={this.gridStore}
                            showIndex={this.showIndex && !this.structure.left.length}
                            indexTitle={this.indexTitle}
                            pagination={this.pagination}
                            pageNum={this.pageNum}
                            pageSize={this.pageSize}
                            headerRowspan={this.headerRowspan}
                            chosenCells={this.chosenCells}
                            startColumnIndex={this.structure.left.length}
                            onSort={this.onSort}
                            onClickCell={listeners.clickCell || (() => {})}
                    ></c-grid>
                  </div>
                )
              }
            })()}
            {(() => {
              if (this.structure.right.length) {
                return (
                  <div class="c-grid-right" ref="right">
                    <c-grid gridId={this._uid}
                            sortColumn={this.sortColumn}
                            structure={this.structure.right}
                            store={this.gridStore}
                            showIndex={this.showIndex && !this.structure.left.length && !this.structure.center.length}
                            pagination={this.pagination}
                            pageNum={this.pageNum}
                            pageSize={this.pageSize}
                            headerRowspan={this.headerRowspan}
                            chosenCells={this.chosenCells}
                            startColumnIndex={this.structure.left.length + this.structure.center.length}
                            onSort={this.onSort}
                            onClickCell={listeners.clickCell || (() => {})}
                    ></c-grid>
                  </div>
                )
              }
            })()}
          </div>
          <div v-show={!this.gridStore.length} class="c-grid-empty">暂无数据</div>
        </div>
      )
    },
    watch: {
      store () {
        this.initDataList()
      }
    },
    created () {
      this.initDataList()
    },
  }
</script>

<style lang="less">
@import "styles/grid.less";
</style>
