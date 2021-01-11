import gridColumn from './gridColumn.vue'

gridColumn.install = function (Vue) {
  Vue.component(gridColumn.name, gridColumn)
  Vue.component(gridColumn.name.replace(/c|C/, 'zg'), gridColumn)
}

export default gridColumn
