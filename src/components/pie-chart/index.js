/**
 * Created by yqdong on 2017/11/24.
 * qq: 1013501639
 * @author yqdong
 *
 */
import pieChart from './pie.vue'

pieChart.install = function (Vue) {
  Vue.component(pieChart.name, pieChart)
  Vue.component(pieChart.name.replace(/c|C/, 'zg'), pieChart)
}

export default pieChart
