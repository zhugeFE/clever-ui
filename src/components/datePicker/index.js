import datePicker from './datePicker'
import dateRangePicker from './dateRangePicker'

let components = [datePicker, dateRangePicker]
components.forEach((component) => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
    Vue.component(component.name.replace(/c|C/, 'zg'), component)
  }
})

export {
  datePicker,
  dateRangePicker
}
