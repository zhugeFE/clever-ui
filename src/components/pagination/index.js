import pagination from './index.vue'

pagination.install = function (Vue) {
  Vue.component(pagination.name, pagination)
  Vue.component(pagination.name.replace(/c|C/, 'zg'), pagination)
}

export default pagination
