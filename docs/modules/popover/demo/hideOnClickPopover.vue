<template>
  <div>
    <demo-panel  subtitle="点击popover隐藏">
     <c-popover trigger="click" :hideOnClick="true">
       <button>open</button>
       <template slot="popover">
         <button @click="showDialog">保存用户组</button>
       </template>
     </c-popover>
    </demo-panel>
    <c-dialog v-show="show" title="保存用户组" @confirm="onConfirm" @cancel="onCancel">
      <div>
        <span>名称:</span><input type="text">
      </div>
    </c-dialog>
  </div>
</template>

<script>
import DemoPanel from '../../../components/demoPanel/index.vue'
import CPopover from '../../../../src/components/popover/popover.vue'
import CDialog from '../../../../src/components/dialog/dialog.vue'
export default {
  components: {
    CPopover,
    DemoPanel,
    CDialog
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDialog() {
      this.show = true
    },
    onConfirm() {
      this.show = false
    },
    onCancel() {
      this.show = false
    }
  }
}
</script>
<style lang="sass" scoped>
button
  padding: 0 10px
  height: 30px
  line-height: 30px
.content
  height: 50px
  font-size: 30px
  text-align: center
  cursor: pointer
</style>
