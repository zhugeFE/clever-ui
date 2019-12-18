/**
 * Created by yqdong on 2017/9/28.
 * qq: 1013501639
 * @author yqdong
 *
 */

import selector from './selector.vue'

selector.install = function (Vue) {
  Vue.component(selector.name, selector)
  Vue.component(selector.name.replace(/c|C/, 'zg'), selector)
}

export default selector
