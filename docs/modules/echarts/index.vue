<template>
  <div>
    <c-button @click="onClick">{{show ? '隐藏' : '显示'}}</c-button> PIE 图表
    <boxplot-demo/>
    <pie-chart v-if="show" v-click-outside="onClickOutSide"></pie-chart>
    <area-chart></area-chart>
    <stack-bar-chart></stack-bar-chart>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
    <double-line></double-line>
    <multiple-chart></multiple-chart>
    <reverse></reverse>
    <doc-markdown :api="api"></doc-markdown>
  </div>
</template>

<script>
  import barChart from './demo/barChart.vue'
  import LineChart from './demo/lineChart.vue'
  import DocMarkdown from '../../components/docMarkdown/index.vue'
  import api from './charts.json'
  import DoubleLine from './demo/doubleLine.vue'
  import MultipleChart from './demo/multipleChart.vue'
  import Reverse from './demo/reverse'
  import StackBarChart from './demo/stackBarChart'
  import AreaChart from './demo/areaChart'
  import PieChart from './demo/pie'
  import boxplotDemo from './demo/boxplot.vue'

  export default {
    components: {
      PieChart,
      AreaChart,
      StackBarChart,
      Reverse,
      MultipleChart,
      DoubleLine,
      DocMarkdown,
      LineChart,
      barChart,
      boxplotDemo
    },
    name: 'index',
    data () {
      return {
        api,
        show: false
      }
    },
    methods: {
      onClickOutSide () {
        console.log('click out side')
      },
      onClick () {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="sass">

</style>
