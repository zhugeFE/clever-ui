<template>
  <div>
    <demo-panel subtitle="doubleY: line">
      <c-charts :echarts="echarts" :store="json" type="line" doubleY :yAxisRule="yAxisRule" :markLine="markLine"></c-charts>
    </demo-panel>
  </div>
</template>

<script>
import zlocal from '../../../../src/i18n'
import json from './json/doubleLine.json'
import DemoPanel from '../../../components/demoPanel/index.vue'
import CCharts from '../../../../src/components/echarts/charts.vue'
import * as echarts from 'echarts'
export default {
  components: {
    CCharts,
    DemoPanel},
  name: 'doubleLine',
  data () {
    return {
      echarts,
      json: {...json.app_data,
        series: [
          {
            'names': [
              zlocal.successfulPrice
            ],
            'original_names': [],
            'values': [
              3000.0,
              0.0,
              0.0,
              2000.0,
              0.0,
              2000.0,
              0.0,
              0.0
            ]
          },
          {
            'names': [
              zlocal.successfulCounter
            ],
            'original_names': [],
            'values': [
              3.0,
              0.0,
              0.0,
              2.0,
              0.0,
              1.0,
              0.0,
              0.0
            ]
          }
        ] },
      yAxisRule: {
        [zlocal.successfulPrice]: {
          index: 0
        },
        [zlocal.successfulCounter]: {
          index: 1,
          type: 'bar'
        }
      },
      markLine: [
        '2019-06-25'
      ]
    }
  },
  mounted () {
    setTimeout(() => {
        // this.json = {
        //   series: [],
        //   x_axis: []
        // }
    }, 3000)
  }
}
</script>

<style lang="sass">

</style>
