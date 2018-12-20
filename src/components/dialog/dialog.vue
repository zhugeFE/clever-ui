<template>
  <div>
    <div class="zg-dialog-layer"></div>
    <div class="zg-dialog">
      <div v-if="showHead" class="zg-dialog-head">
        <slot name="header">{{title}}</slot>
      </div>

      <div class="zg-dialog-content">
        <slot></slot>
      </div>

      <div v-if="showFoot" class="zg-dialog-foot">
        <slot name="footer">
          <zg-button class="zg-dialog-confirm" type="primary" @click="onConfirm">{{confirmLabel}}</zg-button>
          <zg-button class="zg-dialog-cancel" @click="onCancel">{{cancelLabel}}</zg-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import ZgButton from '../button/button.vue'

  export default {
    components: {ZgButton},
    name: 'zgDialog',
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
      }
    },
    methods: {
      onConfirm () {
        this.$emit('confirm')
      },
      onCancel () {
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="sass">
@import "styles/dialog"
</style>
