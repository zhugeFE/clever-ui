/**
 * Created by yqdong on 2017/11/20.
 * qq: 1013501639
 * @author yqdong
 *
 */
import loading from './loading.vue'

loading.install = function (Vue) {
  Vue.component(loading.name, loading)
  Vue.component(loading.name.replace(/c|C/, 'zg'), loading)
}

export default loading
