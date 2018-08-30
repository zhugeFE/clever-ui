<template>
  <div>
    <demo-panel subtitle="固定列展示" jsFiddleName="d1104ff7">
      <c-data-grid :store="store">
        <c-grid-column v-for="column in columns"
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
  import CGridColumn from '../../../../src/components/dataGrid/gridColumn.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      CGridColumn,
      CDataGrid},
    name: 'fixLeft',
    data () {
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
              fix: i > 25 ? 'right' :'center'
            })
          }
          return columns
        })(),
        store: (() => {
          let store = []
          for (let i = 0; i < 3; i++) {
            let item = {}
            for (let j = 0; j < 28; j++) {
              if (j < 2) {
                item[`label${j}`] = `fixed${i}-${j}`
              } else {
                item[`label${j}`] = `${i}-${j}`
              }
            }
            store.push(item)
          }
          return store
        })()
      }
    }
  }
</script>

<style lang="sass">

</style>
