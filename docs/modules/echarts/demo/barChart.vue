<template>
  <div>
    <demo-panel title="charts" subtitle="bar">
      <c-charts :echarts="echarts" :store="json" :height="270"></c-charts>
    </demo-panel>
  </div>
</template>

<script>
import CCharts from '../../../../src/components/echarts/charts.vue'
import json from './json/bar.json'
import zlocal from '../../../../src/i18n'
import DemoPanel from '../../../components/demoPanel/index.vue'
import * as echarts from 'echarts'
export default {
  components: {
    DemoPanel,
    CCharts
  },
  name: 'barChart',
  data() {
    const series = [
      {
        names: [zlocal.activeUser],
        values: [1902, 560, 693, 1873, 1870, 387, 0, 0]
      },
      {
        names: [zlocal.numberVisits],
        values: [8097, 800, 1017, 3584, 5506, 631, 0, 0]
      }
    ]
    return {
      echarts,
      json: {
        ...json.app_data,
        series: [...series],
        x_axis: [
          '1-5' + zlocal.sec,
          '6-30' + zlocal.sec,
          '31-60' + zlocal.sec,
          '1-3' + zlocal.fen,
          '3-10' + zlocal.fen,
          '10-30' + zlocal.fen,
          '30-60' + zlocal.fen,
          `1${zlocal.shi}${zlocal.above}`
        ]
      }
    }
  }
}
</script>

<style lang="sass"></style>
