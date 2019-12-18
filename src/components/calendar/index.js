import calendar from './calendar.vue'

calendar.install = function (Vue) {
  Vue.component(calendar.name, calendar)
  Vue.component(calendar.name.replace(/c|C/, 'zg'), calendar)
}
export default calendar
