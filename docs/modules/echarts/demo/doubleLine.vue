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
  import CCharts from '../../../../src/components/charts/charts.vue'
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
          '付款成功价格': {
            index: 0
          },
          '付款成功数量': {
            index: 1,
            type: 'bar'
          }
        },
        markLine: [
          "2019-06-25"
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
