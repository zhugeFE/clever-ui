/**
 * Created by yqdong on 2017/11/6.
 * qq: 1013501639
 * @author yqdong
 *
 */
import Child from './child.vue'

export default {
  name: 'parent',
  components: {Child},
  data () {
    return {
      store: (() => {
        let store = []
        for (let i = 0; i < 10; i++) {
          store.push({
            id: i,
            label: 'label' + i
          })
        }
        return store
      })()
    }
  },
  created () {
    console.log(this)
  },
  render (h) {
    return h('div', this.store.map(item => {
      return h('child', {
        key: item.id,
        props: {
          data: item
        },
        scopedSlots: {
          default: this.$scopedSlots.option
        }
      })
    }))
  }
}
