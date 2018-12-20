/**
 * Created by yqdong on 2017/11/16.
 * qq: 1013501639
 * @author yqdong
 *
 */
import tooltip from './tooltip.vue'

tooltip.install = function (Vue) {
  Vue.component(tooltip.name, tooltip)
  Vue.component(tooltip.name.replace(/c|C/, 'zg'), tooltip)
}

export default tooltip
