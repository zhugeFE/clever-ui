<template>
  <div>
    <div class="c-dialog-layer"></div>
    <div class="c-dialog" ref="dialog">
      <div v-if="showHead" class="c-dialog-head">
        <slot name="header">{{ title }}</slot>
      </div>

      <div class="c-dialog-content">
        <slot></slot>
      </div>

      <div v-if="showFoot" class="c-dialog-foot">
        <slot name="footer">
          <c-button
            class="c-dialog-confirm"
            :showLoading="showLoading"
            size="normal"
            type="primary"
            @click="onConfirm"
            >{{ confirmLabel }}</c-button
          >
          <c-button
            class="c-dialog-cancel"
            v-if="showCancel"
            size="normal"
            @click="onCancel"
            >{{ cancelLabel }}</c-button
          >
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from '../button'

export default {
  components: { CButton },
  name: 'cDialog',
  props: {
    title: {
      type: String
    },
    showHead: {
      type: Boolean,
      default: true
    },
    showFoot: {
      type: Boolean,
      default: true
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    confirmLabel: {
      type: String,
      default: '确定'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    /**
     * @description 启用loading，点击确定按钮后，确定按钮置为loading状态
     * @tip loading状态可以通过confirm事件的回调置回
     */
    enableLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showLoading: false
    }
  },
  updated() {
    this.resize()
  },
  mounted() {
    this.resize()
  },
  methods: {
    resize() {
      let dialog = this.$refs.dialog
      let rect = dialog.getBoundingClientRect()
      let containerRect = document.body.getBoundingClientRect()
      dialog.style.top =
        parseInt((containerRect.height - rect.height) / 2) + 'px'
      dialog.style.left =
        parseInt((containerRect.width - rect.width) / 2) + 'px'
    },
    onConfirm() {
      if (this.enableLoading) this.showLoading = true
      this.$emit('confirm', () => {
        this.showLoading = false
      })
    },
    onCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="sass">
@import "styles/dialog"
</style>
