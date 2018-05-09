/**
 * Created by yqdong on 2017/11/21.
 * qq: 1013501639
 * @author yqdong
 *
 */
import tabs from './tabs.vue'
import tabPanel from './tabPanel.vue'

const components = [tabs, tabPanel]

components.forEach(component => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
})

export {
  tabs,
  tabPanel
}
