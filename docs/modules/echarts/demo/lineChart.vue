<template>
  <div>
    <demo-panel subtitle="折线图">
      <c-charts :echarts="echarts" type="line"
                value-unit="人"
                :store="json" :showList="showList" :markLine="markLine"></c-charts>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CCharts from '../../../../src/components/charts/charts.vue'
  import json from './json/line.json'
  import echarts from 'echarts'
  export default {
    components: {
      CCharts,
      DemoPanel},
    name: 'lineChart',
    data () {
      return {
        echarts,
        json: json.app_data,
        showList: ['新增用户'],
        markLine: [
          '2017-02-02'
        ]
      }
    }
  }
</script>

<style lang="sass">

</style>
