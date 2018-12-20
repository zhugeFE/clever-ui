/**
 * Created by yqdong on 2017/11/28.
 * qq: 1013501639
 * @author yqdong
 *
 */
import reload from './reload.vue'

reload.install = function (Vue) {
  Vue.component(reload.name, reload)
  Vue.component(reload.name.replace(/c|C/, 'zg'), reload)
}

export default reload
