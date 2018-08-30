<template>
  <div class="c-loading" ref="loading">
    <div class="c-circle" :style="circleStyle" ref="circle"></div>
    <span v-if="showTip" class="c-loading-desc" ref="desc">{{tip}}</span>
  </div>
</template>

<script>
  import {dom, util} from '../../utils/index'
  export default {
    name: 'cLoading',
    props: {
      /**
       * @description 默认：normal,支持normal、medium、small
       */
      size: {
        type: [String, Number],
        default: 'normal',
        validator (value) {
          if (util.isString(value)) {
            return ['normal', 'medium', 'small'].includes(value)
          }
          return true
        }
      },
      /**
       * @description loading的提示文本
       */
      tip: {
        type: String,
        default: 'loading...'
      },
      /**
       * @description 是否显示提示文本
       */
      showTip: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        circleSize: 40
      }
    },
    computed: {
      circleStyle () {
        const sizeMap = {
          normal: 40,
          medium: 20,
          small: 14
        }
        let size = 40
        if (util.isString(this.size)) {
          size = sizeMap[this.size]
        } else {
          size = this.size
        }
        this.circleSize = size
        return {
          width: `${size}px`,
          height: `${size}px`,
          borderWidth: `${size / 40 * 5}px`
        }
      }
    },
    mounted () {
      const container = this.$refs.loading.parentElement
      dom.setPosition(container)
      this.formatPosition()
    },
    methods: {
      formatPosition () {
        const loading = this.$refs.loading
        const container = loading.parentElement
        const containerHeight = parseFloat(dom.getStyle(container, 'height'))
        dom.setStyle(this.$refs.circle, {
          top: `${containerHeight / 2 - this.circleSize / 2}px`
        })

        if (this.showTip) {
          dom.setStyle(this.$refs.desc, {
            top: `${containerHeight / 2 - this.circleSize / 2 + 10}px`
          })
        }
      }
    }
  }
</script>

<style lang="sass">
@import "styles/loading"
</style>
