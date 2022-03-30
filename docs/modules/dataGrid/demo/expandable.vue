<template>
  <div>
    <demo-panel title="dataGrid" subtitle="普通表格" jsFiddleName="0v4vs2je">
      <c-data-grid :store="store" expandColumn="column0" @click-cell="onClickCell" show-index indexTitle="序列">
        <c-grid-column field="column0"
                        title="首列"
                        :width="130"
                        sort-able
                        @clickCell="onClickFirstColumn">
        </c-grid-column>
        <c-grid-column v-for="column in columns"
                        :field="column.field"
                        :key="column.title"
                        :title="column.title"></c-grid-column>
      </c-data-grid>
    </demo-panel>
  </div>
</template>

<script>
import { util } from '../../../../src/utils'
import DemoPanel from '../../../components/demoPanel/index.vue'

export default {
  components: {
    DemoPanel},
  name: 'expandableGrid',
  data () {
    return {
      columns: (() => {
        let columns = []
        for (let i = 1; i < 5; i++) {
          columns.push({
            field: `column${i}`,
            title: `column${i + 1}`
          })
        }
        return columns
      })(),
      store: (() => {
        let store = []
        for (let i = 0; i < 3; i++) {
          let item = {}
          for (let j = 0; j < 5; j++) {
            item[`column${j}`] = `${i}-${j}`
          }
          item.children = []
          for (let g = 0; g < util.random(2, 6); g++) {
            const child = {}
            for (let j = 0; j < 5; j++) {
              child[`column${j}`] = `child_${i}-${j}`
            }
            item.children.push(child)
          }
          store.push(item)
        }
        return store
      })()
    }
  },
  methods: {
    onClickCell (data, labelField) {
      console.log('on click cell', labelField, data)
    },
    onClickFirstColumn (data, labelField) {
      console.log('on click first column', labelField, data)
    }
  }
}
</script>

<style lang="sass">

</style>
