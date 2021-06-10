<template>
  <div>
    <demo-panel subtitle="表头合并单元格" jsFiddleName="q26w5eeo">
      <c-data-grid :store="store" showIndex>
        <c-grid-column
          field="label0"
          title="首列"
          :width="130"
          fix="left"
          sortAble
        >
          <template slot-scope="scope">
            自定义展示：{{ scope.data[scope.field] }}
          </template>
        </c-grid-column>
        <c-grid-column field="label" title="aaa" :width="130" sortAble>
          <template slot-scope="scope">
            ~~~
          </template>
        </c-grid-column>

        <c-grid-column field="numbers" title="数据展示">
          <c-grid-column field="label0" title="column1" sortAble>
            <template slot-scope="scope">
              column1：{{ scope.data[scope.field] }}
            </template>
          </c-grid-column>
          <c-grid-column field="label0" title="column2" sortAble>
            <template slot-scope="scope">
              column2：{{ scope.data[scope.field] }}
            </template>
          </c-grid-column>
          <c-grid-column
            v-if="showColumn3"
            field="label3"
            title="column3"
            sortAble
          >
            <template slot-scope="scope">
              column3：{{ scope.data[scope.field] }}
            </template>
          </c-grid-column>
        </c-grid-column>

        <c-grid-column
          v-if="showColumn4"
          field="label4"
          title="column4"
          sortAble
        >
          <template slot-scope="scope">
            column4：{{ scope.data[scope.field] }}
          </template>
        </c-grid-column>
      </c-data-grid>
    </demo-panel>
  </div>
</template>

<script>
import DemoPanel from '../../../components/demoPanel/index.vue'
import CDataGrid from '../../../../src/components/dataGrid/dataGrid.vue'
import CGridColumn from '../../../../src/components/gridColumn/gridColumn.vue'

export default {
  components: { DemoPanel, CGridColumn, CDataGrid },
  name: 'colsHeader',
  data() {
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
      })(),
      showColumn4: true,
      showColumn3: true
    }
  },
  mounted() {
    setInterval(() => {
      //        this.showColumn4 = !this.showColumn4
      this.showColumn3 = !this.showColumn3
    }, 4000)
  }
}
</script>

<style lang="less">

</style>
