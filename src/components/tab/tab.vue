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
      }
    },
    computed: {
      clazz () {
        return {
          'zg-tab': true,
          'zg-checked': this.activeIndex === this.index
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
      }
    },
    render (h) {
      return (
        <span class={this.clazz} style={this.style} onClick={this.onClick}>
          {(() => {
            if (this.$slots.default) {
              return this.$slots.default
            } else {
              return <span><i v-show={this.tab.icon} class={this.tab.icon}></i>{this.tab.title}</span>
            }
          })()}
        </span>
      )
    }
  }
</script>

<style lang="sass">

</style>
