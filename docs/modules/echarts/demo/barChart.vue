<template>
  <div>
    <demo-panel title="charts" subtitle="bar">
      <zg-charts :store="json" :height="270"></zg-charts>
    </demo-panel>
  </div>
</template>

<script>
  import ZgCharts from '../../../../src/components/echarts/charts.vue'
  import json from './json/bar.json'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      ZgCharts},
    name: 'barChart',
    data () {
      return {
        json: json.app_data
      }
    }
  }
</script>

<style lang="sass">

</style>
