<template>
  <div>
    <demo-panel subtitle="dot" jsFiddleName="9xkqy9e6">
      <zg-badge mode="dot">
        <zg-button>message</zg-button>
      </zg-badge>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import ZgBadge from '../../../../src/components/badge/badge.vue'
  import ZgButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      ZgButton,
      ZgBadge,
      DemoPanel},
    name: 'dotBadge',
    data () {
      return {
        msg: 'dotBadge'
      }
    }
  }
</script>

<style lang="sass">

</style>
