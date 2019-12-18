import tabPanel from './tabPanel.vue'

tabPanel.install = function (Vue) {
  Vue.component(tabPanel.name, tabPanel)
  Vue.component(tabPanel.name.replace(/c|C/, 'zg'), tabPanel)
}

export default tabPanel
