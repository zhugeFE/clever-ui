<template>
  <button
    @click.stop.prevent="onClick"
    :type="nativeType"
    :disabled="disable"
    :class="buttonClass">
    <i class="c-icon" :class="icon" v-if="icon && iconPosition === 'left'"></i>
    <c-loading v-show="showLoading" size="small" :showTip="false"></c-loading>
    <span><slot></slot></span>
    <i class="c-icon" :class="icon" v-if="icon && iconPosition === 'right'"></i>
  </button>
</template>
<script>
import CLoading from '../loading/loading'

export default {
  components: {CLoading},
  name: 'CButton',
  props: {
    /**
     * @description 可选值为：normal、primary、danger、secondary、success
     */
    type: {
      type: String,
      default: 'normal',
      validator (value) {
        let rules = ['normal', 'primary', 'danger', 'secondary', 'warning', 'success']
        return rules.includes(value)
      }
    },
    /**
     * @description 可选值为：small、normal、large
     */
    size: {
      type: String,
      default: 'small',
      validator (value) {
        return ['small', 'normal', 'large'].includes(value)
      }
    },
    /**
     * @description 主题样式：normal、border
     */
    theme: {
      type: String,
      default: 'normal',
      validator (value) {
        return ['normal', 'border'].includes(value)
      }
    },
    /**
     * @description icon名称
     */
    icon: {
      type: String
    },
    /**
     * @description 禁用按钮
     */
    disable: {
      type: Boolean,
      default: false
    },
    /**
     * @description 可选值为：button、submit、reset
     */
    nativeType: {
      type: String,
      default: 'button',
      validator (value) {
        return ['button', 'submit', 'reset'].includes(value)
      }
    },
    /**
     * @description 显示loading
     */
    showLoading: {
      type: Boolean,
      default: false
    },
    /**
     * @description icon位置
     */
    iconPosition: {
      type: String,
      default: 'left',
      validator (v) {
        return ['left', 'right'].includes(v)
      }
    }
  },
  computed: {
    buttonClass () {
      let clazz = {
        'c-button': true,
        'c-disable': this.disable,
        'c-button-icon': this.icon && !this.$slots.default
      }
      clazz[`c-button-${this.theme}-${this.type}`] = true
      clazz[`c-button-size-${this.size}`] = this.size !== 'normal'

      return clazz
    }
  },
  methods: {
    onClick () {
      if (this.disable) return
      this.$emit('click')
    }
  }
}
</script>
<style lang="sass">
@import "./styles/button.sass"
</style>
