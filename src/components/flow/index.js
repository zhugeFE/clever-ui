/**
 * Created by yqdong on 2017/11/24.
 * qq: 1013501639
 * @author yqdong
 *
 */
import flow from './flow.vue'

const components = [
  flow
]
components.forEach(component => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
})

export default flow
