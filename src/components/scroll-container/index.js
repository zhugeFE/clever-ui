/*
 * @Author: kangpeng
 * @Date: 2018-02-01 11:26:56
 * @Last Modified by: kangpeng
 */
import scrollContainer from './scrollContainer.vue'

scrollContainer.install = function (Vue) {
  Vue.component(scrollContainer.name, scrollContainer)
  Vue.component(scrollContainer.name.replace(/c|C/, 'zg'), scrollContainer)
}

export default scrollContainer
