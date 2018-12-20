<template>
  <div class="zg-scroll-lazy-panel">
    <slot></slot>
  </div>
</template>
<script>
import {emitter} from '../../mixins/main'
export default {
  name: 'zgScrollLazyPanel',
  mixins: [emitter],
  props: {
    /**
     * @description 仅触发进入可视区域一次
     */
    once: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      init: false
    }
  },
  methods: {
    checkInView () {
      let fatcherRect = this.parent('zgScrollContainer').$el.getBoundingClientRect()
      let childRect = this.$el.getBoundingClientRect()

      let topInView = childRect.top <= fatcherRect.bottom && childRect.top >= fatcherRect.top
      let bottomInView = childRect.bottom >= fatcherRect.top && childRect.bottom <= fatcherRect.bottom
      let leftInView = childRect.left <= fatcherRect.right && childRect.left >= fatcherRect.left
      let rightInView = childRect.right <= fatcherRect.right && childRect.right >= fatcherRect.left

      return (topInView || bottomInView) && (leftInView || rightInView)
    },
    updateStatus () {
      if (this.once && this.init) {
        return
      }
      if (this.checkInView()) {
        this.$emit('show')
        this.init = true
      } else {
        this.$emit('hide')
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.updateStatus()
    })
  }
}
</script>
<style lang="sass">
.zg-scroll-lazy-panel
  position: relative
  display: inline-block
</style>
