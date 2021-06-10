<template>
  <div>
    <demo-panel title="badge" subtitle="count" jsFiddleName="u5zxdv4z">
      <c-badge mode="count" :count="count">
        <c-button>button</c-button>
      </c-badge>
    </demo-panel>
  </div>
</template>

<script>
  import CBadge from '../../../../src/components/badge/badge.vue'
  import CButton from '../../../../src/components/button/button.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      CButton,
      CBadge},
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

<style lang="less">

</style>
