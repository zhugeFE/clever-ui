<template>
  <div>
    <demo-panel subtitle="size支持small、normal和large" jsFiddleName="ao8y58kd">
      <c-button size="small" type="primary">small</c-button>
      <c-button type="primary">normal</c-button>
      <c-button size="large" type="primary">large</c-button>

      <c-button size="small" theme="border" type="primary">small</c-button>
      <c-button theme="border" type="primary">normal</c-button>
      <c-button size="large" theme="border" type="primary">large</c-button>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      CButton,
      DemoPanel},
    name: 'sizeButton',
    data () {
      return {
        msg: 'sizeButton'
      }
    }
  }
</script>

<style lang="sass">

</style>
