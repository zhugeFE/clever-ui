<template>
  <div>
    <demo-panel subtitle="doubleY: line">
      <c-charts :echarts="echarts" :store="json" type="line" doubleY :yAxisRule="yAxisRule" :markLine="markLine"></c-charts>
    </demo-panel>
  </div>
</template>

<script>
  import json from './json/doubleLine.json'
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CCharts from '../../../../src/components/echarts/charts.vue'
  import echarts from 'echarts'
  export default {
    components: {
      CCharts,
      DemoPanel},
    name: 'doubleLine',
    data () {
      return {
        echarts,
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
