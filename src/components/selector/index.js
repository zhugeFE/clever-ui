/**
 * Created by yqdong on 2017/9/28.
 * qq: 1013501639
 * @author yqdong
 *
 */
import selector from './selector.vue'
import optGroup from './optGroup.vue'
import option from './option.vue'

let components = [
  optGroup,
  option,
  selector
]

components.forEach(component => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
    Vue.component(component.name.replace(/c|C/, 'zg'), component)
  }
})

export default selector
