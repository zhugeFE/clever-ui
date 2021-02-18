<script>
import CPopover from './_popover.vue'
export default {
  name: 'cPopover',
  props: {
    /**
       * @description 触发方式
       */
    trigger: {
      default: 'click',
      type: String
    },
     /**
       * @description popover展示宽度，默认200
       */
    width: {
      default: 200,
      type: Number
    },
      /**
       * @description popover展示位置top-left, top, top-right,left, right, bottom-left, bottom, bottom-right
       */
    placement: {
      default: 'top',
      type: String
    },
    hideOnClick: {
      default: Boolean,
      type: false
    }
  },
  data() {
    return {
      positionOption: {
        top: null,
        left: null,
        transform: {
          x: '0',
          y: '0'
        },
        position: 'fixed'
      },
      popover: null,
      triggerVNode: null
    }
  },
  computed: {
    styles() {
      let style = {
      }
      for (const position in this.positionOption) {
        if (this.positionOption[position]) {
          if (position === 'transform') {
            style[position] = `translate(${this.positionOption[position].x},${this.positionOption[position].y})`
          } else {
            style[position] = this.positionOption[position]
          }
        }
      }
      if (this.width) {
        style.width = `${this.width}px`
      }
      return style
    }
  },
  render(h) {
    // 获取触发元素的虚拟dom
    for (const index in this.$slots.default) {
      if (this.$slots.default[index].tag) {
        this.triggerVNode = this.$slots.default[index]
        break
      }
    }
    if (this.triggerVNode) {
      this.triggerVNode.data = this.triggerVNode.data ? this.triggerVNode.data : {}
      this.triggerVNode.data.on = this.triggerVNode.data.on ? this.triggerVNode.data.on : {}
      switch (this.trigger) {
        case 'contextmenu':this.triggerVNode.data.on.contextmenu = this.contextmenuHandle
          break
        case 'click':this.triggerVNode.data.on.click = this.clickHandle
      }
      return this.triggerVNode
    }
    return h('')
  },
  beforeDestroy() {
    if (this.popover) this.popover.$destroy()
    this.popover = null
  },
  methods: {
    setPosition() {
      this.positionOption.top = null
      this.positionOption.left = null
      this.positionOption.transform = {x: '0', y: '0'}
      if (this.trigger === 'contextmenu' && this.triggerVNode) return
      const triggerRect = this.triggerVNode.elm.getBoundingClientRect()
      const placement = this.placement.split('-')
      switch (placement[0]) {
        case 'top':
          this.positionOption.top = triggerRect.top - 10 + 'px'
          this.positionOption.left = triggerRect.left + triggerRect.width / 2 + 'px'
          this.positionOption.transform.x = '-50%'
          this.positionOption.transform.y = '-100%'
          break
        case 'right':
          this.positionOption.top = triggerRect.top + triggerRect.height / 2 + 'px'
          this.positionOption.left = triggerRect.right + 10 + 'px'
          this.positionOption.transform.y = '-50%'
          break
        case 'bottom':
          this.positionOption.top = triggerRect.bottom + 10 + 'px'
          this.positionOption.left = triggerRect.left + triggerRect.width / 2 + 'px'
          this.positionOption.transform.x = '-50%'
          break
        case 'left':
          this.positionOption.top = triggerRect.top + triggerRect.height / 2 + 'px'
          this.positionOption.left = triggerRect.left - 10 + 'px'
          this.positionOption.transform.x = '-100%'
          this.positionOption.transform.y = '-50%'
          break
      }
      switch (placement[1]) {
        case 'left':
          this.positionOption.left = triggerRect.left + 'px'
          this.positionOption.transform.x = '-100%'
          break
        case 'right':
          this.positionOption.left = triggerRect.right + 'px'
          this.positionOption.transform.x = '0'
          break
      }
    },
    clickHandle() {
      this.setPosition()
      this.show()
    },
    contextmenuHandle(e) {
      if (this.trigger === 'click') return
      e.preventDefault()
      e.stopPropagation()
      this.positionOption.top = e.pageY + 'px'
      this.positionOption.left = e.pageX + 'px'
      this.show()
    },
    show() {
      this.popover = new CPopover({
        data: {
          content: this.$slots.popover,
          hideHandle: this.hide
        }
      }).$mount()
      for (const style in this.styles) {
        this.popover.$el.style[style] = this.styles[style]
      }
      if (this.hideOnClick) {
        const that = this
        this.popover.$el.onclick = function(e) {
          if (that.popover && e.target !== that.popover.$el) {
            that.hide()
          }
        }
      }
      document.body.appendChild(this.popover.$el)
      this.$emit('show')
    },
    hide() {
      if (this.popover) this.popover.$destroy()
      this.$emit('hide')
    }
  }
}
</script>
<style lang="sass">
@import './styles/popover.sass'
</style>
