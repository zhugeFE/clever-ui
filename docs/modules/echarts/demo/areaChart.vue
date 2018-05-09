<template>
  <div>
    <demo-panel subtitle="区域图">
      <zg-charts :store="json" type="area" :markLine="markLine" :series-wrapper="customSeries"></zg-charts>
    </demo-panel>
  </div>
</template>

<script>
  import json from './json/area.json'
  import ZgCharts from '../../../../src/components/echarts/charts'
  import {util} from '../../../../src/utils'
  export default {
    components: {ZgCharts},
    name: 'areaChart',
    data () {
      let store = json.app_data
      for (let i = 0; i < 3; i++) {
        store.series.push({
          names: ['版本-' + (i + 1)],
          values: []
        })
      }

      store.x_axis.forEach(() => {
        let one = util.random(0, 100)
        let two = util.random(0, 100 - one)
        let three = 100 - one - two
        // let three = util.random(30, 100)
        store.series[0].values.push(one)
        store.series[1].values.push(two)
        store.series[2].values.push(three)
      })
      return {
        json: store,
        markLine: ['2017-11-19', '2017-11-20', '2017-11-22']
      }
    },
    methods: {
      customSeries (series) {
        if (series.name === '版本-1') {
          series.areaStyle.normal.color = '#ADB1B8'
          series.itemStyle.normal.color = '#ADB1B8'
        }
        return series
      }
    }
  }
</script>

<style lang="sass">

</style>
