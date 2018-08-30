<script type="text/jsx">
  import CRadioLabel from './radioLabel'

  export default {
    components: {
      CRadioLabel},
    name: 'cRadio',
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
          'c-radio-list': true,
          'c-radio-row': this.direction === 'row',
          'c-radio-column': this.direction === 'column'
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
              'c-radio-item': true,
              'c-disable': item.disable,
              'c-checked': item.value === this.value
            }
            return (
              <li class={itemClass} onClick={this.onClickRadio(item)}>
                <span class="c-cycle">
                </span><c-radio-label data={item} scopedSlots={{default: this.$scopedSlots.default}}></c-radio-label>
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
