<script type="text/jsx">
  import Vue from 'vue'
  import {emitter} from '../../mixins/main'
  export default {
    name: 'cTabPanel',
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
        default: false
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
      const parent = this.parent('cTabs')
      parent.addTab(this.templateData)
    },
    beforeDestroy () {
      const parent = this.parent('cTabs')
      parent.remove(this.templateData)
    },
    render (h) {
      Vue.set(this.templateData.slots, 'default', this.$slots.default)
      Vue.set(this.templateData.slots, 'title', this.$slots.title)
      return ''
    }
  }
</script>

<style lang="sass">
@import "styles/tabPanel"
</style>
