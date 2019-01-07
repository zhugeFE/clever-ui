<template>
  <div>
    <!--<chosen-cells></chosen-cells>-->
    <!--<normal-grid></normal-grid>-->
    <!--<fix-left></fix-left>-->
    <!--<cols-header></cols-header>-->
    <pagination-grid></pagination-grid>
    <doc-markdown :api="json.grid" title="dataGrid"></doc-markdown>
    <doc-markdown :api="json.column" title="gridColumn"></doc-markdown>
  </div>
</template>

<script>
  import NormalGrid from './demo/normal.vue'
  import FixLeft from './demo/fixLeft.vue'
  import ColsHeader from './demo/colsHeader.vue'
  import DocMarkdown from '../../components/docMarkdown/index.vue'

  import dataGridJson from './dataGrid.json'
  import gridColumnJson from './gridColumn.json'
  import PaginationGrid from './demo/paginationGrid.vue'
  import ChosenCells from './demo/chosenCells'
  export default {
    components: {
      ChosenCells,
      PaginationGrid,
      DocMarkdown,
      ColsHeader,
      FixLeft,
      NormalGrid},
    name: 'index',
    data () {
      return {
        json: {
          grid: dataGridJson,
          column: gridColumnJson
        }
      }
    }
  }
</script>

<style lang="sass">

</style>
