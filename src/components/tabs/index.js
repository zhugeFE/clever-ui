/**
 * Created by yqdong on 2017/11/21.
 * qq: 1013501639
 * @author yqdong
 *
 */
import tabs from './tabs.vue'

tabs.install = function (Vue) {
  Vue.component(tabs.name, tabs)
  Vue.component(tabs.name.replace(/c|C/, 'zg'), tabs)
}

export default tabs
