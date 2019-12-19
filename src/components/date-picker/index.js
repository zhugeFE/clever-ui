import datePicker from './datePicker'

datePicker.install = function (Vue) {
  Vue.component(datePicker.name, datePicker)
  Vue.component(datePicker.name.replace(/c|C/, 'zg'), datePicker)
}

export default datePicker
