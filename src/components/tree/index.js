/**
 * Created by yqdong on 2017/11/24.
 * qq: 1013501639
 * @author yqdong
 *
 */
import tree from './tree.vue'

const components = [
  tree
]
components.forEach(component => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
})

export default tree

