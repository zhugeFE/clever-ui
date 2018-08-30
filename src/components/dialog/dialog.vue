<template>
  <div>
    <div class="c-dialog-layer"></div>
    <div class="c-dialog">
      <div v-if="showHead" class="c-dialog-head">
        <slot name="header">{{title}}</slot>
      </div>

      <div class="c-dialog-content">
        <slot></slot>
      </div>

      <div v-if="showFoot" class="c-dialog-foot">
        <slot name="footer">
          <c-button class="c-dialog-confirm" type="primary" @click="onConfirm">{{confirmLabel}}</c-button>
          <c-button class="c-dialog-cancel" @click="onCancel">{{cancelLabel}}</c-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import CButton from '../button/button.vue'

  export default {
    components: {CButton},
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
