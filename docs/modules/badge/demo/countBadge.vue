<template>
  <div>
    <demo-panel title="badge" subtitle="count" jsFiddleName="u5zxdv4z">
      <zg-badge mode="count" :count="count">
        <zg-button>button</zg-button>
      </zg-badge>
    </demo-panel>
  </div>
</template>

<script>
  import ZgBadge from '../../../../src/components/badge/badge.vue'
  import ZgButton from '../../../../src/components/button/button.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      ZgButton,
      ZgBadge},
    name: 'countBadge',
    data () {
      return {
        count: 90
      }
    },
    mounted () {
      let interval = setInterval(() => {
        this.count++
        if (this.count >= 200) {
          clearInterval(interval)
        }
      }, 1000)
    }
  }
</script>

<style lang="sass">

</style>
