<template>
  <div>
    <demo-panel title="dialog" jsFiddleName="0kxve2g3">
      <zg-dialog title="dialog" v-show="show" @confirm="onConfirm" @cancel="onCancel">
        this is dialog
      </zg-dialog>
      <zg-button @click="onClick">显示弹窗</zg-button>
    </demo-panel>
  </div>
</template>

<script>
  import ZgDialog from '../../../../src/components/dialog/dialog.vue'
  import ZgButton from '../../../../src/components/button/button.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      ZgButton,
      ZgDialog},
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
