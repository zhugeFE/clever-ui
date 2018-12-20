/*
 * @Author: kangpeng
 * @Date: 2018-02-01 11:26:56
 * @Last Modified by: kangpeng
 */
import scrollContainer from './scrollContainer.vue'
import scrollLazyPanel from './scrollLazyPanel.vue'

let components = {
  scrollContainer,
  scrollLazyPanel
}

for (const key in components) {
  components[key].install = function (Vue) {
    Vue.component(components[key].name, components[key])
    Vue.component(components[key].name.replace(/c|C/, 'zg'), components[key])
  }
}
export {
  scrollContainer,
  scrollLazyPanel
}
