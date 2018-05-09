<template>
  <div>
    <demo-panel subtitle="size支持small、normal和large" jsFiddleName="ao8y58kd">
      <zg-button size="small" type="primary">small</zg-button>
      <zg-button type="primary">normal</zg-button>
      <zg-button size="large" type="primary">large</zg-button>

      <zg-button size="small" theme="border" type="primary">small</zg-button>
      <zg-button theme="border" type="primary">normal</zg-button>
      <zg-button size="large" theme="border" type="primary">large</zg-button>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import ZgButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      ZgButton,
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
