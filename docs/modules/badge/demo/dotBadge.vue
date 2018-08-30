<template>
  <div>
    <demo-panel subtitle="dot" jsFiddleName="9xkqy9e6">
      <c-badge mode="dot">
        <c-button>message</c-button>
      </c-badge>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CBadge from '../../../../src/components/badge/badge.vue'
  import CButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      CButton,
      CBadge,
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
