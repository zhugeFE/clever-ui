/**
 * Created by yqdong on 2017/11/24.
 * qq: 1013501639
 * @author yqdong
 *
 */
import forceChart from './forceChart.vue'

forceChart.install = function (Vue) {
  Vue.component(forceChart.name, forceChart)
  Vue.component(forceChart.name.replace(/c|C/, 'zg'), forceChart)
}

export default forceChart
