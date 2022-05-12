<template>
  <div>
    <demo-panel title="dialog" jsFiddleName="0kxve2g3">
      <c-dialog title="dialog" v-show="show" @confirm="onConfirm" @cancel="onCancel">
        this is dialog
      </c-dialog>
      <c-button @click="onClick">{{zlocal.showPopUp}}</c-button>
    </demo-panel>
  </div>
</template>

<script>
import zlocal from '../../../../src/i18n'
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
    const {showPopUp} = zlocal
    return {
      show: false,
      zlocal: {
        showPopUp
      }
    }
  },
  methods: {
    onClick () {
      this.show = true
    },
    onConfirm (resetLoading) {
      console.log('confirm')
      this.show = false
      resetLoading()
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
