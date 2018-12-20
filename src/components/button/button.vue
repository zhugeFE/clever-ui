<template>
  <button
    @click.stop.prevent="onClick"
    :type="nativeType"
    :disabled="disable"
    :class="buttonClass">
    <i class="zg-icon" :class="icon" v-if="icon"></i>
    <zg-loading v-show="showLoading" size="small" :showTip="false"></zg-loading>
    <span><slot></slot></span>
  </button>
</template>
<script>
import ZgLoading from '../loading/loading'

export default {
  components: {ZgLoading},
  name: 'ZgButton',
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
      default: 'normal',
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
    }
  },
  computed: {
    buttonClass () {
      let clazz = {
        'zg-button': true,
        'zg-disable': this.disable,
        'zg-button-icon': this.icon && !this.$slots.default
      }
      clazz[`zg-button-${this.theme}-${this.type}`] = true
      clazz[`zg-button-size-${this.size}`] = this.size !== 'normal'

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
