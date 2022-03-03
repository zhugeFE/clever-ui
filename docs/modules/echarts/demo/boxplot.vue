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
        store: [
          {
            names: ['应用宝'],
            values: [[2, 3, 5, 9, 10], [2, 3, 5, 9, 10]]
          },
          {
            names: ['华为应用商店'],
            values: [[2, 3, 5, 9, 10], [2, 3, 5, 9, 10]]
          }
        ]
      }
    }
  }
</script>

<style lang="sass">

</style>
