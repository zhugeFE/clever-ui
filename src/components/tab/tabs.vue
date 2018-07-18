<script type="text/jsx">
  import {emitter} from '../../mixins/main'
  import zgTab from './tab.vue'
  export default {
    name: 'zgTabs',
    mixins: [emitter],
    components: {zgTab},
    props: {
      value: {
        type: Number,
        default: 0
      },
      /**
       * @description tab标签的位置，当标签组纵向排列时，left等同于top，center等同middle, right等同于bottom
       */
      placement: {
        type: String,
        default: 'left',
        validator (value) {
          return ['left', 'center', 'right'].includes(value)
        }
      },
      /**
       * @description 主题类型
       */
      theme: {
        type: String,
        default: 'normal',
        validator (value) {
          return ['normal', 'card'].includes(value)
        }
      },
      /**
       * @description tab标签的宽度，默认自适应
       */
      tabWidth: {
        type: Number
      },
      /**
       * @description 切换标签页时，采用v-show还是v-if，true为v-if
       */
      cleanMode: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        tabs: [],
        activeIndex: this.value || 0
      }
    },
    computed: {
      tabBarClass () {
        return {
          'zg-tab-bar': true,
          'zg-tab-normal': this.theme === 'normal',
          'zg-tab-card': this.theme === 'card',
          'zg-right': this.placement === 'right',
          'zg-center': this.placement === 'center'
        }
      }
    },
    watch: {
      value (value) {
        this.activeIndex = value
      }
    },
    mounted () {
      const tabs = this.children('zgTabPanel')
      if (tabs.length) {
        tabs[this.activeIndex].$data.show = true
      }
    },
    methods: {
      onClickTab (tab) {
        this.activeIndex = tab.index
        this.$emit('input', tab.index)
        this.$emit('change', tab)
      },
      addTab (tab) {
        tab.index = this.tabs.length
        this.tabs.push(tab)
      }
    },
    render (h) {
      return (
        <div class="zg-tabs">
          <div style="display: none">{this.$slots.default}</div>
          <div class={this.tabBarClass}>
            {this.tabs.map((tab, index) => {
              return (
                <zg-tab activeIndex={this.activeIndex}
                        index={index}
                        tab={tab}
                        width={this.tabWidth}
                        onClick={this.onClickTab}
                >{tab.slots.title}</zg-tab>
              )
            })}
          </div>
          {this.tabs.map((tab, index) => {
            if (this.cleanMode) {
              if (index === this.activeIndex) {
                return (
                  <div class="zg-tab-panel">{tab.slots.default}</div>
                )
              }
            } else if (index === this.activeIndex) {
              return (<div class="zg-tab-panel">{tab.slots.default}</div>)
            }
          })}
        </div>
      )
    }
  }
</script>

<style lang="sass">
@import "styles/tab"
</style>
