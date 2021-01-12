<template>
  <div>
    <demo-panel subtitle="选中单元格区域" jsFiddleName="d1104ff7">
      <c-data-grid :store="store" :chosenCells="chosenCells">
        <c-grid-column
          v-for="column in columns"
          :field="column.field"
          :key="column.title"
          :fix="column.fix"
          :title="column.title"
          :width="column.width"
        ></c-grid-column>
      </c-data-grid>
    </demo-panel>
  </div>
</template>
<script>
import CDataGrid from '../../../../src/components/dataGrid/dataGrid.vue'
import CGridColumn from '../../../../src/components/gridColumn/gridColumn.vue'
import DemoPanel from '../../../components/demoPanel/index.vue'
import { util } from '../../../../src/utils'
export default {
  components: {
    DemoPanel,
    CGridColumn,
    CDataGrid
  },
  name: 'chosenCells',
  data() {
    return {
      columns: (() => {
        let columns = []
        for (let i = 0; i < 2; i++) {
          columns.push({
            field: `label${i}`,
            title: `left${i + 1}`,
            fix: 'left',
            width: 100
          })
        }
        for (let i = 3; i < 28; i++) {
          columns.push({
            field: `label${i}`,
            title: i > 25 ? `right${i + 1}` : `center${i + 1}`,
            fix: i > 25 ? 'right' : 'center'
          })
        }
        return columns
      })(),
      store: (() => {
        let store = []
        for (let i = 0; i < 20; i++) {
          let item = {}
          for (let j = 0; j < 28; j++) {
            if (j < 2) {
              // item[`label${j}`] = `${i}-${j}`
              item[`label${j}`] = util.random(0, 100)
            } else {
              // item[`label${j}`] = `${i}-${j}`
              item[`label${j}`] = util.random(0, 100)
            }
          }
          store.push(item)
        }
        return store
      })(),
      chosenCells: [
        {
          rule: [2, 1, 10, 1],
          className: 'chosen-cell'
        },
        {
          rule: [2, 1, 8, 7],
          className: 'chosen-cell2'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.chosen-cell2
  background: lightcoral
  &:hover
    background: lightsalmon
.chosen-cell
  background: lightskyblue
  cursor: pointer
  &:hover
    background: lightseagreen
</style>
