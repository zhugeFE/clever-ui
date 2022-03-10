<template>
  <div>
    <demo-panel title="盒须图" subtitle="boxplot">
      <boxplot :store="store"/>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import boxplot from '../../../../src/components/boxplot/boxplot.vue'

  export default {
    name: 'boxplotDemo',
    components: {
      DemoPanel,
      boxplot
    },
    data () {
      return {
        store: {
          x_axis: ['04.22', '04.23'],
          series: [
            {
              names: ['应用宝'],
              values: [[20, 30, 50, 90, 100], [20, 30, 50, 90, 100]]
            },
            {
              names: ['华为应用商店'],
              values: [[20, 30, 50, 90, 100], [20, 30, 50, 90, 100]]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="sass">

</style>
