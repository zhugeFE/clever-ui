<template>
  <div>
    <demo-panel subtitle="doubleY: line&bar">
      <c-charts :echarts="echarts" :store="json" doubleY :yAxisRule="yAxisRule" :markLine="markLine"></c-charts>
    </demo-panel>
  </div>
</template>

<script>
  import json from './json/multiple.json'
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CCharts from '../../../../src/components/echarts/charts.vue'
  import echarts from 'echarts'

  export default {
    name: 'multipleChart',
    components: {
      CCharts,
      DemoPanel},
    data () {
      return {
        echarts,
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

<style lang="less">

</style>
