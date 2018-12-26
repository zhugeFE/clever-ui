/**
 * Created by yqdong on 2017/11/24.
 * qq: 1013501639
 * @author yqdong
 *
 */
import charts from './charts.vue'
import pieChart from './pie'

const components = [
  charts,
  pieChart
]
components.forEach(component => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
    Vue.component(component.name.replace(/c|C/, 'zg'), component)
  }
})

export {
  charts,
  pieChart
}
