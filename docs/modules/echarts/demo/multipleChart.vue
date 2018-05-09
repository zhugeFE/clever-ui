<template>
  <div>
    <demo-panel subtitle="doubleY: line&bar">
      <zg-charts :store="json" doubleY :yAxisRule="yAxisRule" :markLine="markLine"></zg-charts>
    </demo-panel>
  </div>
</template>

<script>
  import json from './json/multiple.json'
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import ZgCharts from '../../../../src/components/echarts/charts.vue'

  export default {
    name: 'multipleChart',
    components: {
      ZgCharts,
      DemoPanel},
    data () {
      return {
        json: json.app_data,
        yAxisRule: {
          '曝光': {
            index: 0,
            type: 'line'
          },
          '点击': {
            index: 1,
            type: 'bar'
          },
          click: {
            index: 2,
            type: 'line',
            option: {
              show: false,
              max: 100
            }
          }
        },
        markLine: [
          "17:15:00",
          "20:00:00",
          "21:00:00"
        ]
      }
    }
  }
</script>

<style lang="sass">

</style>
