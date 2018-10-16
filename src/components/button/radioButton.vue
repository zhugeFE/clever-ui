<script type="text/jsx">
  import CButton from './button'

  export default {
    components: {CButton},
    name: 'cRadioButton',
    props: {
      /**
       * @description value
       */
      value: null,
      /**
       * @description radio组数据源
       * @tip 组内数据项需要为对象
       * @default []
       */
      store: {
        type: Array,
        default () {
          // 结构为：{value: '', label: '', disable: false, icon: '', iconPosition: 'left'}
          return []
        }
      },
      /**
       * @description 可选值为：normal、primary、danger、secondary、success
       */
      type: {
        type: String,
        default: 'normal',
        validator (value) {
          let rules = ['normal', 'primary', 'danger', 'secondary', 'warning', 'success']
          return rules.includes(value)
        }
      },
      /**
       * @description 可选值为：small、normal、large
       */
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return ['small', 'normal', 'large'].includes(value)
        }
      },
      /**
       * @description 主题样式：normal、border
       */
      theme: {
        type: String,
        default: 'normal',
        validator (value) {
          return ['normal', 'border'].includes(value)
        }
      }
    },
    data () {
      let checked = null
      this.store.forEach(item => {
        if (item.value === this.value) {
          checked = item
        }
      })
      return {
        checked
      }
    },
    watch: {
      value (value) {
        this.checked = null
        this.store.forEach(item => {
          if (item.value === value) {
            this.checked = item
          }
        })
      }
    },
    methods: {
      onClickItem (item) {
        this.checked = item
        this.$emit('input', item.value)
        this.$emit('change', item)
      }
    },
    render (h) {
      return (
        <div class="c-radio-button">
          {this.store.map(item => {
            let className = {
              'c-checked': this.checked === item,
              'c-radio-item': true
            }
            if (this.$scopedSlots.default) {
              return this.$scopedSlots.default({
                data: item,
                className,
                onClick: () => {
                  this.onClickItem(item)
                }
              })
            } else {
              return (
                <c-button class={className}
                           key={item.value}
                           theme={this.theme}
                           size={this.size}
                           type={this.type}
                           disable={item.disable}
                           onClick={() => {
                             this.onClickItem(item)
                           }}
                           iconPosition={item.iconPosition || 'left'}
                           icon={item.icon}>
                  {item.label}
                </c-button>
              )
            }
          })}
    </div>
      )
    }
  }
</script>

<style lang="sass">
@import "styles/radioButton"
</style>
