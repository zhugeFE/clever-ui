<template>
  <div>
    <demo-panel subtitle="重置x轴">
      <c-charts
        :echarts="echarts"
        :store="store"
        :showList="showList"
        type="bar"
      ></c-charts>
    </demo-panel>
  </div>
</template>

<script>
import json from './json/eventList'
import zlocal from '../../../../src/i18n'
import CCharts from '../../../../src/components/echarts/charts'
import * as echarts from 'echarts'
export default {
  components: { CCharts },
  name: 'reverse',
  data() {
    const {skypegmwcn, enter, homePage, signIn, page, dependsOnScene, Interface, register, board, enterModule} = zlocal
    return {
      echarts,
      showList: [
        'pv',
        skypegmwcn + '-' + enter + skypegmwcn,
        'web-' + enter + homePage,
        'click',
        signIn + '-' + enter + signIn + page,
        skypegmwcn + '-' + homePage + '-' + dependsOnScene,
        signIn,
        register + '-' + enter + register + Interface,
        'Demo-' + enter + 'demo',
        board + '-' + enterModule
      ],
      store: {
        ...json.app_data,
        series: [
          { names: ['pv'], values: [17265] },
          { names: [skypegmwcn + '-' + enter + skypegmwcn], values: [11229] },
          { names: ['web-' + enter + homePage], values: [5559] },
          { names: ['click'], values: [5355] },
          { names: [signIn + '-' + enter + signIn + page], values: [2565] },
          { names: [skypegmwcn + '-' + homePage + '-' + dependsOnScene], values: [1718] },
          { names: [signIn], values: [1565] },
          { names: [register + '-' + enter + register + Interface], values: [1457] },
          { names: ['Demo-' + enter + 'demo'], values: [1406] },
          { names: [board + '-' + enterModule], values: [1057] }
        ]
      }
    }
  }
}
</script>

<style lang="sass"></style>
