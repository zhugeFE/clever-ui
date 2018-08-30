<template>
  <div>
    <demo-panel title="charts" subtitle="bar">
      <c-charts :store="json" :height="270"></c-charts>
    </demo-panel>
  </div>
</template>

<script>
  import CCharts from '../../../../src/components/echarts/charts.vue'
  import json from './json/bar.json'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      CCharts},
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
