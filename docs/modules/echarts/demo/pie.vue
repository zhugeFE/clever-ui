<template>
  <div>
    <demo-panel subtitle="pie">
      <c-pie-chart :echarts="echarts" :store="json"></c-pie-chart>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import json from './json/pie.json'
  import echarts from 'echarts'
  export default {
    components: {
      DemoPanel},
    name: 'pieChart',
    data () {
      return {
        echarts,
        json: json.app_data.series
      }
    }
  }
</script>

<style lang="sass">

</style>
