<template>
  <div>
    <demo-panel title="盒须图" subtitle="boxplot">
      <boxplot/>
    </demo-panel>
  </div>
</template>

<script>
  import json from './json/bar.json'
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
        json: json.app_data
      }
    }
  }
</script>

<style lang="sass">

</style>
