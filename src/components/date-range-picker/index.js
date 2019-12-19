import dateRangePicker from './dateRangePicker.vue'

dateRangePicker.install = function (Vue) {
  Vue.component(dateRangePicker.name, dateRangePicker)
  Vue.component(dateRangePicker.name.replace(/c|C/, 'zg'), dateRangePicker)
}

export default dateRangePicker
