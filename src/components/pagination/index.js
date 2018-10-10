import pagination from './index.vue'

pagination.install = function (Vue) {
  Vue.component(pagination.name, pagination)
}

export default pagination
