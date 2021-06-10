<template>
  <span class="c-checkbox" :class="clazz" @click.stop="onChange">
    <span class="c-box">
      <i v-if="checked" class="cicon-check_small"></i>
      <i v-else-if="indeterminate" class="check-small"></i>
    </span>
    <slot>
      <span>{{label}}</span>
    </slot>
  </span>
</template>

<script>
  export default {
    name: 'cCheckbox',
    props: {
      /**
       * @description 默认选中状态,使用时，通过v-model的形式
       */
      value: {
        type: Boolean,
        default: false
      },
      /**
       * @description 展示文本
       */
      label: {
        type: String
      },
      /**
       * @description 禁用
       */
      disable: {
        type: Boolean,
        default: false
      },
      /**
       * @description 设置 indeterminate 状态，只负责样式控制,用于全选效果
       */
      indeterminate: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        checked: this.value
      }
    },
    watch: {
      value: function (value) {
        this.checked = value
      }
    },
    computed: {
      clazz () {
        return {
          checked: this.checked,
          disable: this.disable
        }
      }
    },
    methods: {
      onChange () {
        if (this.disable) return
        this.checked = !this.checked
        this.$emit('input', this.checked)
        this.$emit('change', this.checked)
      }
    }
  }
</script>

<style lang="less">
@import "styles/checkbox.less";
</style>
