<template>
  <div>
    <demo-panel title="charts" subtitle="bar">
      <zg-charts :store="json" :height="270" :stack="stackConfig"></zg-charts>
    </demo-panel>
  </div>
</template>

<script>
  import ZgCharts from '../../../../src/components/echarts/charts.vue'
  import json from './json/stackBar.json'
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import {util} from '../../../../src/utils'

  export default {
    components: {
      DemoPanel,
      ZgCharts},
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
      return {
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
