<script type="text/jsx">
  import Vue from 'vue'
  import {emitter} from '../../mixins/main'
  export default {
    name: 'zgTabPanel',
    mixins: [emitter],
    props: {
      /**
       * @description tab标签显示文本
       */
      title: {
        type: String,
        required: true
      },
      /**
       * @description tab标签icon
       */
      icon: {
        type: String
      },
      closeAble: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        templateData: {
          title: this.title,
          icon: this.icon,
          closeAble: this.closeAble,
          slots: {
            default: this.$slots.default,
            title: this.$slots.title
          }
        }
      }
    },
    mounted () {
      const parent = this.parent('zgTabs')
      parent.addTab(this.templateData)
    },
    beforeDestroy () {
      const parent = this.parent('zgTabs')
      parent.remove(this.templateData)
    },
    render (h) {
      Vue.set(this.templateData.slots, 'slot', this.$slots.default)
      Vue.set(this.templateData.slots, 'title', this.$slots.title)
      return ''
    }
  }
</script>

<style lang="sass">
@import "styles/tabPanel"
</style>
