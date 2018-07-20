<script type="text/jsx">
  import ZgRadioLabel from './radioLabel'

  export default {
    components: {
      ZgRadioLabel},
    name: 'zgRadio',
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
          // 结构为：{value: '', label: '', disable: false}
          return []
        }
      },
      direction: {
        type: String,
        default: 'column',
        validator (val) {
          return ['row', 'column'].includes(val)
        }
      }
    },
    computed: {
      clazz () {
        return {
          'zg-radio-list': true,
          'zg-radio-row': this.direction === 'row',
          'zg-radio-column': this.direction === 'column'
        }
      }
    },
    methods: {
      onClickRadio (item) {
        return () => {
          if (!item.disable) this.$emit('input', item.value)
        }
      }
    },
    render (h) {
      return (
        <ul class={this.clazz}>
          {this.store.map(item => {
            let itemClass = {
              'zg-radio-item': true,
              'zg-disable': item.disable,
              'zg-checked': item.value === this.value
            }
            return (
              <li class={itemClass} onClick={this.onClickRadio(item)}>
                <span class="zg-cycle">
                </span><zg-radio-label data={item} scopedSlots={{default: this.$scopedSlots.default}}></zg-radio-label>
              </li>
            )
          })}
        </ul>
      )
    }
  }
</script>

<style lang="sass">
@import "styles/radio"
</style>
