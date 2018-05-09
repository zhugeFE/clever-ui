<template>
  <div>
    <demo-panel subtitle="通过icon属性，为按钮添加icon" jsFiddleName="a7rs8onk">
      <zg-button icon='zgicon-add' size="small"></zg-button>
      <zg-button icon='zgicon-add' size="small">add</zg-button>

      <zg-button icon='zgicon-add'></zg-button>
      <zg-button icon='zgicon-add'>add</zg-button>

      <zg-button icon='zgicon-add' size="large"></zg-button>
      <zg-button icon='zgicon-add' size="large">add</zg-button>
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
    name: 'iconButton',
    data () {
      return {
        msg: 'iconButton'
      }
    }
  }
</script>

<style lang="sass">

</style>
