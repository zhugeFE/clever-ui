import popover from './popover.vue'

popover.install = function (Vue) {
  Vue.component(popover.name, popover)
  Vue.component(popover.name.replace(/c|C/, 'zg'), popover)
}

export default popover
