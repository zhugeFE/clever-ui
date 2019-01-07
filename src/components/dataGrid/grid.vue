<script type="text/jsx">
  import {dom, util} from '../../utils/index'

  import CGridHeader from './gridHeader.vue'
  import CGridCell from './gridCell.vue'

  export default {
    name: 'cGrid',
    components: {
      CGridCell,
      CGridHeader
    },
    props: {
      /**
       * @description 表格的id
       */
      gridId: {
        type: [String, Number],
        required: true
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
       * @description 表结构
       */
      structure: {
        type: Array,
        required: true
      },
      /**
       * @description 数据集
       */
      store: {
        type: Array,
        required: true
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
       * @description 表头合并单元格数
       */
      headerRowspan: {
        type: Number,
        default: 1
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
      startColumnIndex: {
        type: Number,
        default: 0
      },
      /**
       * @description 当前在排序的列
       */
      sortColumn: null
    },
    computed: {
      structureParser () {
        let headStructure = [[], []]
        let bodyStructure = []

        this.structure.forEach(item => {
          if (item.children) {
            headStructure[0].push(item)
            item.children.forEach(column => {
              headStructure[1].push(column)
              bodyStructure.push(column)
            })
          } else {
            headStructure[0].push(item)
            bodyStructure.push(item)
          }
        })
        return {
          headStructure,
          bodyStructure
        }
      }
    },
    methods: {
      onHoverRow (rowIndex) {
        let hoverColor = document.querySelector('.c-grid-hover-color')
        if (hoverColor) {
          hoverColor = window.getComputedStyle(hoverColor)['background-color']
        }
        dom.addStyleSheet(`cDataGridHover${this.gridId}`, [
          [`.c-row-${this.gridId}-${rowIndex}`, [
            'background', hoverColor || '#F0FAFF', true
          ]]
        ])
      },
      onMouseLeave () {
        dom.removeStyleSheet(`cDataGridHover${this.gridId}`)
      }
    },
    render (h) {
      const listeners = this.$listeners
      return (
        <table class="c-grid">
          <thead class="c-grid-header">
          {this.structureParser.headStructure.map((row, rowIndex) => {
            if (!row.length) return
            return (
              <tr class="c-grid-header-row">
                {(() => {
                  if (this.showIndex && rowIndex === 0) {
                    return (
                      <c-grid-header
                        title={this.indexTitle}
                        column={{}}
                        rowspan={this.headerRowspan}>
                      </c-grid-header>
                    )
                  }
                })()}
                {row.map(column => {
                  const rowspan = (rowIndex === 0 && !column.children) ? this.headerRowspan : 1
                  return (
                    <c-grid-header title={column.title}
                                   sortColumn={this.sortColumn}
                                   sortAble={column.sortAble}
                                   column={column}
                                   width={column.width}
                                   rowspan={rowspan}
                                   colspan={column.colspan}
                                   scopedSlots={{default: column.headFormatter}}
                                   onSort={listeners.sort}></c-grid-header>
                  )
                })}
              </tr>
            )
          })}
          </thead>
          <tbody class="c-grid-body">
          {
            this.store.map((item, i) => {
              if (this.pagination) {
                const startIndex = (this.pageNum - 1) * this.pageSize
                const endIndex = this.pageNum * this.pageSize

                if (i < startIndex || i >= endIndex) return
              }
              let rowClass = {
                'c-grid-row': true
              }
              rowClass[`c-row-${this.gridId}-${i}`] = true
              return (
                <tr class={rowClass} onMouseover={() => {this.onHoverRow(i)}}
                    onMouseleave={() => {this.onMouseLeave(i)}}>
                  {(() => {
                    if (this.showIndex) {
                      return (
                        <c-grid-cell store={{index: i}}
                                      labelField="index"
                                      index={i}
                                      chosenCells={this.chosenCells}
                                      column={this.startColumnIndex + -1}
                        ></c-grid-cell>
                      )
                    }
                  })()}
                  {this.structureParser.bodyStructure.map((column, j) => {
                    let clazz = {
                      'c-click-able': column.clickCell
                    }
                    return (
                      <c-grid-cell store={item}
                                    labelField={column.field}
                                    width={column.width}
                                    index={i}
                                    column={this.startColumnIndex + j}
                                    class={clazz}
                                    chosenCells={this.chosenCells}
                                    scopedSlots={{default: column.cellFormatter}}
                                    onClick={column.clickCell || listeners.clickCell}
                      ></c-grid-cell>
                    )
                  })
                  }</tr>
              )
            })
          }
          </tbody>
        </table>
      )
    }
  }
</script>

<style lang="sass">

</style>
