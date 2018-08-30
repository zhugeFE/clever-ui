<script type="text/jsx">
  export default {
    name: 'tab',
    props: {
      tab: {
        type: Object,
        required: true
      },
      width: null,
      index: {
        type: Number,
        required: true
      },
      activeIndex: {
        type: Number,
        required: true
      },
      closeAble: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      clazz () {
        return {
          'c-tab': true,
          'c-checked': this.activeIndex === this.index
        }
      },
      style () {
        let style = {}
        if (this.width) style.width = `${this.width}px`
        return style
      }
    },
    methods: {
      onClick () {
        if (this.activeIndex === this.index) return
        this.$emit('click', this.tab)
      },
      onRemove (event) {
        this.$emit('remove', this.tab)
        event.stopPropagation()
      }
    },
    render (h) {
      return (
        <span class={this.clazz} style={this.style} onClick={this.onClick}>
          {(() => {
            if (this.$slots.default) {
              return this.$slots.default
            } else {
              let iconClass = {'c-tab-icon': true}
              iconClass[this.tab.icon] = true
              return <span>
                <i v-show={this.tab.icon} class={iconClass}></i>
                {this.tab.title}
                <i v-show={this.closeAble}
                   onClick={this.onRemove}
                   class="c-tab-close cicon-delete-little1"></i>
                </span>
            }
          })()}
        </span>
      )
    }
  }
</script>

<style lang="sass">

</style>
