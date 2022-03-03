<template>
  <div>
    <demo-panel subtitle="pie">
      <c-pie-chart :echarts="echarts" :store="json" :showList="showList"></c-pie-chart>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import json from './json/pie.json'
  import * as echarts from 'echarts'
  export default {
    components: {
      DemoPanel},
    name: 'pieChart',
    data () {
      json.app_data.series.sort((a, b) => {
        return b.values[0] - a.values[0]
      })
      let showList = []
      json.app_data.series.forEach(series => {
        if (showList.length > 10) return
        showList.push(series.names)
      })
      return {
        echarts,
        json: json.app_data.series,
        showList
      }
    }
  }
</script>

<style lang="sass">

</style>
