<script type="text/jsx">
  import ZgButton from './button'

  export default {
    components: {ZgButton},
    name: 'zgRadioButton',
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
          // 结构为：{value: '', label: '', disable: false, icon: ''}
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
    methods: {
      onClickItem (item) {
        this.$emit('input', item.value)
        this.$emit('change', item)
      }
    },
    render (h) {
      return (
        <div class="zg-radio-button">
          {this.store.map(item => {
            let className = {
              'zg-checked': this.value === item.value,
              'zg-radio-item': true
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
                <zg-button class={className}
                           key={item.value}
                           theme={this.theme}
                           size={this.size}
                           type={this.type}
                           disable={item.disable}
                           onClick={() => {
                             this.onClickItem(item)
                           }}
                           icon={item.icon}>
                  {item.label}
                </zg-button>
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
