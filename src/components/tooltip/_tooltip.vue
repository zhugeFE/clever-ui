<script type="text/jsx">
  import Vue from 'vue'
  import {util} from '../../utils/index'
  let Tooltip = Vue.extend({
    data () {
      return {
        content: '',
        placement: '',
        trigger: null,
        top: 99999999,
        left: 0,
        autoHide: true,
        width: 0,
        customRender: null,
        customClass: '',
        theme: '',
        onHide: null
      }
    },
    computed: {
      style () {
        let style = {
          top: `${this.top}px`,
          left: `${this.left}px`
        }
        if (this.width) {
          style.width = `${this.width}px`
        }
        return style
      },
      clazz () {
        let rules = [
          'top-left', 'top', 'top-right',
          'left-top', 'right-top',
          'left', 'right',
          'left-bottom', 'right-bottom',
          'bottom-left', 'bottom', 'bottom-right'
        ]
        let clazz = {}
        clazz[`zg-tooltip-` + this.theme] = true
        rules.forEach(placement => {
          clazz[`zg-${placement}`] = this.placement === placement
        })
        clazz[this.customClass] = true
        return clazz
      }
    },
    mounted () {
      this.$nextTick(() => {
        if (!this.trigger) return
        const triggerRect = this.trigger.getBoundingClientRect()
        const tipRect = this.$refs.tooltip.getBoundingClientRect()

        const placement = this.placement.split('-')
        placement.forEach((position, i) => {
          if (i > 0)return

          if (['top', 'bottom'].indexOf(position) > -1) {
            if (position === 'top') {
              this.top = triggerRect.top - tipRect.height - 10
            } else {
              this.top = triggerRect.top + triggerRect.height + 10
            }
            if (placement[1] === 'left') {
              this.left = triggerRect.left
            } else if (placement[1] === 'right') {
              this.left = triggerRect.left + triggerRect.width - tipRect.width
            } else {
              this.left = triggerRect.left + (triggerRect.width - tipRect.width) / 2
            }
          } else {
            if (position === 'left') {
              this.left = triggerRect.left - tipRect.width - 10
            } else {
              this.left = triggerRect.left + triggerRect.width + 10
            }
            if (this.placement === 'left-top') {
              this.top = triggerRect.top
            } else if (this.placement === 'left') {
              this.top = triggerRect.top + (triggerRect.height - tipRect.height) / 2
            } else {
              this.top = triggerRect.top + triggerRect.height - tipRect.height
            }
          }
        })
      })
    },
    beforeDestroy () {
      this.$el.remove()
    },
    methods: {
      hide () {
        this.$destroy()
        if (util.isFunction(this.onHide)) this.onHide()
      }
    },
    render (h) {
      return (
        <transition enter-active-class="animated fadeIn">
          <span ref="tooltip" class={this.clazz} style={this.style}>
            {(() => {
              if (this.customRender) {
                return this.customRender
              } else {
                return this.content
              }
            })()}
          </span>
        </transition>
      )
    }
  })
  export default Tooltip
</script>

<style lang="sass">
</style>
