<template>
  <div>
    <demo-panel title="charts" subtitle="bar">
      <c-charts :echarts="echarts" :store="json" :height="270" :stack="stackConfig"></c-charts>
    </demo-panel>
  </div>
</template>

<script>
  import CCharts from '../../../../src/components/echarts/charts.vue'
  import json from './json/stackBar.json'
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import * as echarts from 'echarts'

  export default {
    components: {
      DemoPanel,
      CCharts},
    name: 'stackBarChart',
    data () {
      let store = json.app_data
      let seriesList = []
      seriesList = store.series.map(item => {
        let series = {
          names: item.names,
          values: []
        }
        item.values.map((v, i) => {
          series.values.push({
            next: item.p_next[i],
            value: v,
            total: item.p_total[i],
            last: i === 0 ? 0 : item.values[i - 1] - v
          })
        })
        return series
      })
      store.series = seriesList
      let data = {
        echarts,
        json: store,
        stackConfig: [
          {
            name: '转化',
            field: 'value'
          },
          {
            name: '流失',
            field: 'last',
            option: {
              itemStyle: {
                normal: {
                  color: 'rgba(252,42,42,0.14)'
                }
              }
            }
          }
        ]
      }
      return data
    },
    methods: {
      tooltip () {
        console.log(this, arguments)
      }
    }
  }
</script>

<style lang="sass">

</style>
