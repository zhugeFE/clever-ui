/*
 * @Author: kangpeng
 * @Date: 2018-02-01 11:26:56
 * @Last Modified by: kangpeng
 */
import scrollLazyPanel from './scrollLazyPanel.vue'

scrollLazyPanel.install = function (Vue) {
  Vue.component(scrollLazyPanel.name, scrollLazyPanel)
  Vue.component(scrollLazyPanel.name.replace(/c|C/, 'zg'), scrollLazyPanel)
}

export default scrollLazyPanel
