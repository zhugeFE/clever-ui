/**
 * Created by yqdong on 2017/11/24.
 * qq: 1013501639
 * @author yqdong
 *
 */
import charts from './charts.vue'

const components = [
  charts
]
components.forEach(component => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
})

export {
  charts
}
