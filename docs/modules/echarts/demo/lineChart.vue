<template>
  <div>
    <demo-panel subtitle="line">
      <c-charts type="line" :store="json" :showList="showList" :markLine="markLine"></c-charts>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CCharts from '../../../../src/components/echarts/charts.vue'
  import json from './json/line.json'
  export default {
    components: {
      CCharts,
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
