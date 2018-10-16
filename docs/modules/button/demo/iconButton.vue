<template>
  <div>
    <demo-panel subtitle="通过icon属性，为按钮添加icon" jsFiddleName="a7rs8onk">
      <c-button icon='cicon-add' size="small"></c-button>
      <c-button icon='cicon-add' size="small">add</c-button>

      <c-button icon='cicon-add'></c-button>
      <c-button icon='cicon-add' icon-position="right">add</c-button>

      <c-button icon='cicon-add' size="large"></c-button>
      <c-button icon='cicon-add' size="large">add</c-button>
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
