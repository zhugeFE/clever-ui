import button from './button.vue'

button.install = function (Vue) {
  Vue.component(button.name, button)
  Vue.component(button.name.replace(/c|C/, 'zg'), button)
}

export default button
