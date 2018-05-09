/**
 * Created by yqdong on 2017/11/7.
 * qq: 1013501639
 * @author yqdong
 *
 */
import dataGrid from './dataGrid.vue'
import gridColumn from './gridColumn.vue'

let components = [
  dataGrid,
  gridColumn
]

components.forEach(component => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
})

export {
  dataGrid,
  gridColumn
}
