/**
 * Created by yqdong on 2017/9/29.
 * qq: 1013501639
 * @author yqdong
 *
 */
import input from './input.vue'

input.install = function (Vue) {
  Vue.component(input.name, input)
  Vue.component(input.name.replace(/c|C/, 'zg'), input)
}

export default input
