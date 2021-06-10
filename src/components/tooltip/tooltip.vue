<script type="text/jsx">
  import Tooltip from './_tooltip.vue'
  export default {
    name: 'cTooltip',
    props: {
      /**
       * @description 提示文本
       * @tip 指定name为tooltip的slot时，tooltip内容为slot
       */
      content: {
        type: String
      },
      /**
       * @description tooltip展示位置top-left, top, top-right, left-top, right-top,left, right,left-bottom, right-bottom,bottom-left, bottom, bottom-right
       */
      placement: {
        type: String,
        default: 'top',
        validator (value) {
          let rules = [
            'top-left', 'top', 'top-right',
            'left-top', 'right-top',
            'left', 'right',
            'left-bottom', 'right-bottom',
            'bottom-left', 'bottom', 'bottom-right'
          ]
          return rules.indexOf(value) > -1
        }
      },
      /**
       * @description tooltip是否自动显示隐藏，默认为hover显示，mouseLeave隐藏
       */
      autoHide: {
        type: Boolean,
        default: true
      },
      /**
       * @description tooltip展示宽度，默认不限制
       */
      width: {
        type: Number
      },
      /**
       * @description 自定义样式
       */
      customClass: {
        type: String,
        default: ''
      },
      /**
       * @description 主题，支持dark和light两种
       */
      theme: {
        type: String,
        default: 'dark',
        validator (value) {
          return ['dark', 'light'].includes(value)
        }
      }
    },
    data () {
      return {
        showTip: false,
        tooltip: null
      }
    },
    watch: {
      placement (value) {
        if (this.tooltip) {
          this.tooltip.$data.placement = value
        }
      },
      customClass (value) {
        if (this.tooltip) {
          this.tooltip.$data.customClass = value
        }
      }
    },
    methods: {
      onHoverTrigger () {
        if (this.autoHide && !this.tooltip) this.show()
      },
      onMouseLeave () {
        if (this.autoHide) this.hide()
      },
      /**
       * @method show
       * @description 供外部主动调用
       */
      show () {
        this.$nextTick(() => {
          if (this.tooltip) this.hide()
          this.tooltip = new Tooltip({
            data: {
              content: this.content,
              placement: this.placement,
              trigger: this.$refs.trigger,
              autoHide: this.autoHide,
              width: this.width,
              customRender: this.$slots.tooltip,
              customClass: this.customClass,
              theme: this.theme,
              onHide: this.$listeners ? this.$listeners.hide : null
            }
          }).$mount()
          document.body.appendChild(this.tooltip.$el)
        })
      },
      /**
       * @method hide
       * @description 供外部主动调用
       */
      hide () {
        if (this.tooltip) this.tooltip.$destroy()
        this.tooltip = null
      }
    },
    beforeDestroy () {
      if (this.tooltip) this.tooltip.$destroy()
    },
    render (h) {
      return (
        <span class="c-tooltip-trigger" ref="trigger"
              onMouseover={this.onHoverTrigger}
              onMouseleave={this.onMouseLeave}
        >{this.$slots.default}</span>
      )
    }
  }
</script>

<style lang="less">
@import "style/tooltip.less";
</style>
