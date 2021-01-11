import pie from './pie.vue'

pie.install = function(Vue) {
  Vue.component(pie.name, pie)
  Vue.component(pie.name.replace(/c|C/, 'zg'), pie)
}

export default pie
