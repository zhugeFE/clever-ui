/**
 * Created by yqdong on 2017/10/11.
 * qq: 1013501639
 * @author yqdong
 *
 */
import checkbox from './checkbox.vue'

checkbox.install = (Vue) => {
  Vue.component(checkbox.name, checkbox)
  Vue.component(checkbox.name.replace(/c|C/, 'zg'), checkbox)
}

export default checkbox
