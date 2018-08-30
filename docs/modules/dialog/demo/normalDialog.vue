<template>
  <div>
    <demo-panel title="dialog" jsFiddleName="0kxve2g3">
      <c-dialog title="dialog" v-show="show" @confirm="onConfirm" @cancel="onCancel">
        this is dialog
      </c-dialog>
      <c-button @click="onClick">显示弹窗</c-button>
    </demo-panel>
  </div>
</template>

<script>
  import CDialog from '../../../../src/components/dialog/dialog.vue'
  import CButton from '../../../../src/components/button/button.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      CButton,
      CDialog},
    name: 'normalDialog',
    data () {
      return {
        show: false
      }
    },
    methods: {
      onClick () {
        this.show = true
      },
      onConfirm () {
        console.log('confirm')
        this.show = false
      },
      onCancel () {
        console.log('cancel')
        this.show = false
      }
    }
  }
</script>

<style lang="sass">

</style>
