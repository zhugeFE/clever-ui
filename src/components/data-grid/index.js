/**
 * Created by yqdong on 2017/11/7.
 * qq: 1013501639
 * @author yqdong
 *
 */
import dataGrid from './dataGrid.vue'

dataGrid.install = function (Vue) {
  Vue.component(dataGrid.name, dataGrid)
  Vue.component(dataGrid.name.replace(/c|C/, 'zg'), dataGrid)
}

export default dataGrid
