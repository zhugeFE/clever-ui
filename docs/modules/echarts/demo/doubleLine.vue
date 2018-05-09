<template>
  <div>
    <demo-panel subtitle="doubleY: line">
      <zg-charts :store="json" type="line" doubleY :yAxisRule="yAxisRule" :markLine="markLine"></zg-charts>
    </demo-panel>
  </div>
</template>

<script>
  import json from './json/doubleLine.json'
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import ZgCharts from '../../../../src/components/echarts/charts.vue'
  export default {
    components: {
      ZgCharts,
      DemoPanel},
    name: 'doubleLine',
    data () {
      return {
        json: json.app_data,
        yAxisRule: {
          '曝光': {
            index: 0
          },
          '点击': {
            index: 1
          }
        },
        markLine: [
          "00:05:00",
          "00:25:00",
          "01:30:00",
          "01:40:00",
          "02:05:00",
          "03:10:00"
        ]
      }
    }
  }
</script>

<style lang="sass">

</style>
