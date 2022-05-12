<template>
  <div>
    <demo-panel subtitle="doubleY: line&bar">
      <c-charts :echarts="echarts" :store="json" doubleY :yAxisRule="yAxisRule" :markLine="markLine"></c-charts>
    </demo-panel>
  </div>
</template>

<script>
import zlocal from '../../../../src/i18n'
import json from './json/multiple.json'
import DemoPanel from '../../../components/demoPanel/index.vue'
import CCharts from '../../../../src/components/echarts/charts.vue'
import * as echarts from 'echarts'

export default {
  name: 'multipleChart',
  components: {
    CCharts,
    DemoPanel},
  data () {
    return {
      echarts,
      json: {...json.app_data,
        series: [
          {
            'names': [
              zlocal.exposure
            ],
            'values': [33, 33, 63, 4, 63, 75, 62, 73, 74, 52, 94, 77, 0, 68, 10, 60, 76, 48, 87, 7, 10, 43, 93, 64, 65, 54, 12]
          },
          {
            'names': [
              zlocal.chartClick
            ],
            'values': [9, 36, 27, 33, 35, 10, 21, 21, 20, 34, 33, 20, 4, 46, 34, 37, 15, 2, 4, 15, 38, 13, 8, 32, 37, 45, 11]
          },
          {
            'names': [
              'click'
            ],
            'values': [9, 36, 27, 33, 35, 10, 21, 21, 20, 34, 33, 20, 4, 46, 34, 37, 15, 2, 4, 15, 38, 13, 8, 32, 37, 45, 11]
          }
        ] },
      yAxisRule: {
        [zlocal.exposure]: {
          index: 0,
          type: 'line'
        },
        [zlocal.chartClick]: {
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
        '17:15:00',
        '20:00:00',
        '21:00:00'
      ]
    }
  }
}
</script>

<style lang="sass">

</style>
