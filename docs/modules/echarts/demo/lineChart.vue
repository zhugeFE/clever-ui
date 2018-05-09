<template>
  <div>
    <demo-panel subtitle="line">
      <zg-charts type="line" :store="json" :showList="showList" :markLine="markLine"></zg-charts>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import ZgCharts from '../../../../src/components/echarts/charts.vue'
  import json from './json/line.json'
  export default {
    components: {
      ZgCharts,
      DemoPanel},
    name: 'lineChart',
    data () {
      return {
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
