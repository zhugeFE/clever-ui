/**
 * Created by yqdong on 2017/11/24.
 * qq: 1013501639
 * @author yqdong
 *
 */
import charts from './charts.vue'

charts.install = function (Vue) {
  Vue.component(charts.name, charts)
  Vue.component(charts.name.replace(/c|C/, 'zg'), charts)
}

export default charts

