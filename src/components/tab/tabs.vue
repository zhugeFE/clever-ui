<script type="text/jsx">
  import {emitter} from '../../mixins/main'
  import cTab from './tab.vue'
  export default {
    name: 'cTabs',
    mixins: [emitter],
    components: {cTab},
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
       * @description 是否纵向排列
       */
      vertical: {
        type: Boolean,
        default: false
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
      },
      /**
       * @description 具有添加tab按钮
       */
      showAdd: {
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
          'c-tab-bar': true,
          'c-tab-normal': this.theme === 'normal',
          'c-tab-card': this.theme === 'card',
          'c-right': this.placement === 'right',
          'c-center': this.placement === 'center'
        }
      },
      clazz () {
        return {
          'c-tabs': true,
          'c-tab-vertical': this.vertical
        }
      }
    },
    watch: {
      value (value) {
        this.activeIndex = value
      }
    },
    mounted () {
      const tabs = this.children('cTabPanel')
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
      },
      onAdd () {
        this.$emit('add')
      },
      remove (tab) {
        this.tabs.forEach((item, i) => {
          if (item === tab) {
            this.tabs.splice(i, 1)
          }
        })
        let index = this.activeIndex >= this.tabs.length ? 0 : this.activeIndex
        this.tabs.forEach((tab, i) => {
          tab.index = i
        })
        if (this.tabs[index]) this.onClickTab(this.tabs[index])
      },
      onRemove (tab) {
        this.$emit('remove', tab.title)
      }
    },
    render (h) {
      return (
        <div class={this.clazz}>
          <div style="display: none">{this.$slots.default}</div>
          <div class={this.tabBarClass}>
            {this.tabs.map((tab, index) => {
              return (
                <c-tab activeIndex={this.activeIndex}
                        index={index}
                        tab={tab}
                        width={this.tabWidth}
                        closeAble={tab.closeAble && this.tabs.length > 1}
                        onRemove={this.onRemove}
                        onClick={this.onClickTab}
                >{tab.slots.title}</c-tab>
              )
            })}
            {(() => {
              if (this.showAdd) {
                return <span class="c-tab" onClick={this.onAdd}>
                  <i class="cicon-add" style="margin: 0"/>
                </span>
              }
            })()}
          </div>
          {this.tabs.map((tab, index) => {
            if (this.cleanMode) {
              if (index === this.activeIndex) {
                return (
                  <div class="c-tab-panel">{tab.slots.default}</div>
                )
              }
            } else {
              return (<div v-show={index === this.activeIndex} class="c-tab-panel">{tab.slots.default}</div>)
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
