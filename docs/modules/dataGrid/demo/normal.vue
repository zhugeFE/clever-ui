<template>
  <div>
    <demo-panel title="dataGrid" subtitle="普通表格" jsFiddleName="0v4vs2je">
      <zg-data-grid :store="store" @click-cell="onClickCell" show-index indexTitle="序列">
        <zg-grid-column field="label0"
                        title="首列"
                        :width="130"
                        sort-able
                        @clickCell="onClickFirstColumn">
          <template scope="data" slot="header">
            自定义展示表头{{data.title}}
          </template>
          <template scope="scope">
            自定义展示：{{scope.data[scope.field]}}
          </template>
        </zg-grid-column>
        <zg-grid-column v-for="column in columns"
                        :field="column.field"
                        :key="column.title"
                        :title="column.title"></zg-grid-column>
      </zg-data-grid>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel},
    name: 'normalGrid',
    data () {
      return {
        columns: (() => {
          let columns = []
          for (let i = 1; i < 5; i++) {
            columns.push({
              field: `label${i}`,
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
              item[`label${j}`] = `${i}-${j}`
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
        console.log('on click first column', labelField)
      }
    }
  }
</script>

<style lang="sass">

</style>
